import { describe, it, assert, equal } from '../runner.js';
import { app } from '../../js/app.js';
import { actions } from '../../js/core/actions.js';
import { сессия } from '../../js/core/session.js';
import { хранилище } from '../../js/core/store.js';
import { верно, оценитьНабор, вердиктПробы, выделить, подписьОтвета, ПОРОГ_B1 } from '../../js/core/lesen.js';
import { ЧТЕНИЕ, наборПоId, вариантПробы, вариантовПроб, МОДУЛИ } from '../../js/data/catalog.js';

const КЛЮЧ = globalThis.__BRIEFE_KEY__;

const чисто = () => {
    localStorage.removeItem(КЛЮЧ);
    сессия.сбросить();
    app.go('home');
};

const экран = () => document.getElementById('screen');

function открыть(имя, параметр) {
    app.go(имя, параметр);
    return экран().innerHTML;
}

const тик = () => new Promise((г) => setTimeout(г, 0));

const строкаЗначения = (в) => (typeof в === 'boolean' ? String(в) : String(в));

/** Нажать вариант ответа на вопрос. */
async function ответить(id, значение) {
    const кнопка = экран().querySelector(`[data-action="лес-ответ"][data-q="${id}"][data-v="${строкаЗначения(значение)}"]`);
    assert(кнопка, `нет кнопки ${id} → ${значение}`);
    кнопка.click();
    await тик();
}

/** Заведомо неверный ответ того же вида. */
function неверный(п, часть) {
    if (часть === 2) return п.answer === 'a' ? 'b' : 'a';
    if (п.type === 'rf') return !п.answer;
    return (п.answer + 1) % 3;
}

describe('Lesen: подсчёт баллов', () => {
    it('верно различает false и «не отвечено», 0 и «не отвечено»', () => {
        assert(верно({ answer: false }, false));
        assert(!верно({ answer: false }, undefined));
        assert(верно({ answer: 0 }, 0));
        assert(!верно({ answer: 0 }, undefined));
        assert(!верно({ answer: 'x' }, 'a'));
    });

    it('набор считается по верным ответам, неотвеченные не считаются верными', () => {
        const набор = { items: [{ id: 'q1', answer: 0 }, { id: 'q2', answer: 'd' }, { id: 'q3', answer: false }, { id: 'q4', answer: true }] };
        const о = оценитьНабор(набор, { q1: 0, q2: 'c', q3: false });

        equal(о.баллов, 2);
        equal(о.всего, 4);
        equal(о.ответили, 3);
        equal(о.подробно.map((х) => х.верно), [true, false, true, false]);
    });

    it('вердикт пробы: B1 с ориентира, A2 ниже, дальше «ниже A2»', () => {
        equal(вердиктПробы(ПОРОГ_B1).уровень, 'b1');
        equal(вердиктПробы(25).уровень, 'b1');
        equal(вердиктПробы(ПОРОГ_B1 - 1).уровень, 'a2');
        equal(вердиктПробы(11).уровень, 'a2');
        equal(вердиктПробы(5).уровень, 'low');
    });

    it('подсветка экранирует текст и метит первое вхождение фрагмента', () => {
        const р = выделить('Wir verkaufen <b>Geschenke</b> und Geschenke.', ['Geschenke']).toString();
        assert(р.includes('&lt;b&gt;'), 'угловые скобки экранируются');
        assert(р.includes('<mark>Geschenke</mark>'), 'фрагмент помечен');
        equal((р.match(/<mark>/g) || []).length, 1);
        assert(!выделить('Kein Treffer', ['Auto']).toString().includes('<mark>'));
    });

    it('подпись ответа понятна для каждого вида', () => {
        equal(подписьОтвета({}, 2, 'x'), 'x — нет подходящего объявления');
        equal(подписьОтвета({}, 2, 'c'), 'объявление c');
        equal(подписьОтвета({ type: 'rf' }, 3, false), 'falsch');
        equal(подписьОтвета({ options: ['A', 'B', 'C'] }, 1, 1), 'b) B');
        equal(подписьОтвета({}, 1, undefined), '—');
    });
});

describe('Lesen: состав курса', () => {
    it('пять частей по шесть наборов, в каждой части свои задания', () => {
        equal(ЧТЕНИЕ.map((ч) => ч.teil), [1, 2, 3, 4, 5]);
        equal(ЧТЕНИЕ.map((ч) => ч.sets.length), [6, 6, 6, 6, 6]);
        equal(ЧТЕНИЕ.map((ч) => ч.sets[0].items.length), [5, 5, 6, 3, 6]);
    });

    it('шесть вариантов пробы, в каждом по 25 заданий', () => {
        equal(вариантовПроб(), 6);

        for (let k = 1; k <= 6; k++) {
            const часть = вариантПробы(k);
            assert(часть, `нет варианта ${k}`);
            equal(часть.map((х) => х.часть.teil), [1, 2, 3, 4, 5]);
            equal(часть.reduce((а, х) => а + х.набор.items.length, 0), 25);
        }
    });

    it('части Lesen входят в общий перечень модулей, с теорией и упражнениями', () => {
        for (const ч of ЧТЕНИЕ) {
            assert(МОДУЛИ.includes(ч), `${ч.id} не в МОДУЛИ`);
            assert(ч.theory.length >= 18, `${ч.id}: теория ${ч.theory.length}`);
            assert(ч.exercises.length >= 14, `${ч.id}: упражнений ${ч.exercises.length}`);
        }
    });

    it('верные ответы не сведены к одной позиции', () => {
        for (const ч of ЧТЕНИЕ) {
            const ответы = ч.sets.flatMap((с) => с.items.map((п) => п.answer));
            const разных = new Set(ответы).size;
            assert(разных >= (ч.teil === 4 ? 2 : 3), `Teil ${ч.teil}: ответов всего ${разных} разных`);
        }
    });

    it('во всех наборах Teil 2 «x» не всегда на одном месте', () => {
        const места = ЧТЕНИЕ.find((ч) => ч.teil === 2).sets.map((с) => с.items.findIndex((п) => п.answer === 'x'));
        assert(new Set(места).size >= 3, `места «x»: ${места.join(',')}`);
    });

    it('утверждения richtig/falsch встречаются и в том, и в другом виде', () => {
        for (const ч of ЧТЕНИЕ.filter((х) => х.teil === 3 || х.teil === 4)) {
            const рф = ч.sets.flatMap((с) => с.items.filter((п) => п.type === 'rf').map((п) => п.answer));
            const верных = рф.filter(Boolean).length;
            assert(верных >= рф.length * 0.3 && верных <= рф.length * 0.7, `Teil ${ч.teil}: richtig ${верных} из ${рф.length}`);
        }
    });
});

describe('Lesen: экраны', () => {
    it('хаб, страница части и все наборы рисуются без сбоев', () => {
        чисто();
        const плохие = [];

        const смотреть = (имя, параметр) => {
            const р = открыть(имя, параметр);
            if (р.length < 100) плохие.push(`${имя}/${параметр}: пусто`);
            if (/undefined|\[object|NaN/.test(р)) плохие.push(`${имя}/${параметр}: ${р.match(/.{20}(undefined|\[object|NaN).{20}/)?.[0]}`);
            // «Hoffmann &amp; Sohn» на экране: текст экранирован дважды
            if (/&amp;(amp|lt|gt|quot|#39);/.test(р)) плохие.push(`${имя}/${параметр}: двойное экранирование: ${р.match(/.{20}&amp;(amp|lt|gt|quot|#39);.{20}/)?.[0]}`);
        };

        смотреть('lesen');
        for (const ч of ЧТЕНИЕ) {
            смотреть('module', ч.id);
            смотреть('theory', ч.id);
            for (const с of ч.sets) смотреть('read', с.id);
        }
        for (let k = 1; k <= 6; k++) смотреть('lesenexam', String(k));

        assert(!плохие.length, плохие.slice(0, 4).join(' | '));
    });

    it('письмо Teil 5 не носит класс буквы объявления (иначе рисуется тёмным кружком)', () => {
        чисто();
        открыть('read', 'r05-s1');
        assert(экран().querySelector('.r-letter-card'), 'нет карточки письма');
        assert(!экран().querySelector('.r-card.r-letter'), 'карточка письма получила стиль кружка с буквой');

        открыть('read', 'r02-s1');
        assert(экран().querySelectorAll('span.r-letter').length === 8, 'у объявлений нет букв a–h');
    });

    it('страница части показывает наборы, а у каждой кнопки есть обработчик', () => {
        чисто();
        const р = открыть('module', 'r01') + открыть('read', 'r01-s1') + открыть('lesenexam', '1') + открыть('lesen');
        assert(р.includes('#/read/r01-s1'), 'нет ссылки на набор');

        const известные = actions.names().click;
        const без = [...new Set([...р.matchAll(/data-action="([^"]+)"/g)].map((м) => м[1]))].filter((д) => !известные.includes(д));
        assert(!без.length, `без обработчика: ${без.join(', ')}`);
    });

    it('каждый набор решается через экран: верные ответы дают полный балл и сохраняются', async () => {
        чисто();
        const неполные = [];

        for (const ч of ЧТЕНИЕ) {
            for (const с of ч.sets) {
                открыть('read', с.id);
                for (const п of с.items) await ответить(п.id, п.answer);

                экран().querySelector('[data-action="лес-проверить"]').click();
                await тик();

                const итог = экран().querySelector('.ring span')?.textContent;
                if (итог !== `${с.items.length}/${с.items.length}`) неполные.push(`${с.id}: ${итог}`);
                if (хранилище.набор(с.id).лучший !== с.items.length) неполные.push(`${с.id}: не сохранён`);
                if (экран().querySelectorAll('.r-q.bad').length) неполные.push(`${с.id}: есть красные`);
            }
        }

        assert(!неполные.length, неполные.slice(0, 5).join(' | '));
    });

    it('неверные ответы дают ноль и показывают разбор с «почему»', async () => {
        чисто();
        const ч = ЧТЕНИЕ[1];
        const с = ч.sets[0];

        открыть('read', с.id);
        for (const п of с.items) await ответить(п.id, неверный(п, ч.teil));

        экран().querySelector('[data-action="лес-проверить"]').click();
        await тик();

        equal(экран().querySelector('.ring span').textContent, `0/${с.items.length}`);
        equal(экран().querySelectorAll('.r-q.bad').length, с.items.length);
        assert(экран().querySelector('.r-why').textContent.length > 10, 'нет объяснения');
        assert(экран().querySelector('mark'), 'нет подсветки места в тексте');
    });

    it('повторный тап по выбранному ответу снимает его', async () => {
        чисто();
        const с = ЧТЕНИЕ[0].sets[0];
        открыть('read', с.id);

        await ответить(с.items[0].id, с.items[0].answer);
        assert(экран().querySelector('.r-opt.on'));

        await ответить(с.items[0].id, с.items[0].answer);
        assert(!экран().querySelector('.r-opt.on'));
        assert(экран().querySelector('[data-action="лес-проверить"]').textContent.includes('0 из'));
    });

    it('проба: таймер, сквозная нумерация 1–25, сдача и запись результата', async () => {
        чисто();
        открыть('lesenexam', '1');

        assert(экран().querySelector('#timer'), 'нет таймера');
        const номера = [...экран().querySelectorAll('.r-qnum')].map((х) => Number(х.textContent));
        equal(номера, Array.from({ length: 25 }, (_, i) => i + 1));
        assert(!экран().querySelector('.r-hint'), 'в пробе подсказок быть не должно');
        assert(!экран().querySelector('.r-gloss'), 'в пробе слов быть не должно');

        for (const { часть, набор } of вариантПробы(1)) {
            for (const п of набор.items) await ответить(п.id, п.answer);
        }

        экран().querySelector('[data-action="проба-чтения-сдать"]').click();
        await тик();

        assert(экран().innerText.includes('25/25'), 'нет итога 25/25');
        assert(экран().querySelector('.verdict.b1'), 'нет вердикта B1');

        const пробы = хранилище.всё().пробыЧтения;
        equal(пробы.length, 1);
        equal(пробы[0].баллов, 25);
        equal(пробы[0].части, [5, 5, 6, 3, 6]);

        app.go('home');
    });

    it('в пробе неверные ответы снижают итог, неотвеченные не считаются верными', async () => {
        чисто();
        открыть('lesenexam', '2');

        const части = вариантПробы(2);
        const первая = части[0].набор;
        for (const п of первая.items) await ответить(п.id, п.answer);

        экран().querySelector('[data-action="проба-чтения-сдать"]').click();
        await тик();

        equal(хранилище.всё().пробыЧтения[0].баллов, 5);
        assert(экран().querySelector('.verdict.low') || экран().querySelector('.verdict.a2'), 'нет вердикта ниже B1');
        app.go('home');
    });
});

чисто();
