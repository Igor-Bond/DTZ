import { describe, it, assert, equal } from '../runner.js';
import { app } from '../../js/app.js';
import { actions } from '../../js/core/actions.js';
import { сессия } from '../../js/core/session.js';
import { хранилище } from '../../js/core/store.js';
import { СИТУАЦИИ, МОДУЛИ, разделыШпаргалки } from '../../js/data/catalog.js';

const КЛЮЧ = globalThis.__BRIEFE_KEY__;

const чисто = () => {
    localStorage.removeItem(КЛЮЧ);
    сессия.сбросить();
    // Уходим на главную: так закрывается окно письма и занятие, как при настоящем переходе
    app.go('home');
};

const экран = () => document.getElementById('screen');

/** Перейти и вернуть разметку экрана. */
function открыть(имя, параметр) {
    app.go(имя, параметр);
    return экран().innerHTML;
}

function нажать(селектор) {
    const el = экран().querySelector(селектор);
    assert(el, `нет элемента ${селектор}`);
    el.click();
    return new Promise((готово) => setTimeout(готово, 0));
}

const действия = (разметка) => [...new Set([...разметка.matchAll(/data-action="([^"]+)"/g)].map((м) => м[1]))];
const изменения = (разметка) => [...new Set([...разметка.matchAll(/data-change="([^"]+)"/g)].map((м) => м[1]))];

describe('Экраны: все открываются', () => {
    it('каждый маршрут рисуется без сбоя и без «undefined»', () => {
        чисто();

        const маршруты = [
            ['home'], ['cheat'], ['letters'], ['review'], ['more'], ['errors'], ['phrases'], ['cards'],
            ['about'], ['progress'], ['exam'],
            ...МОДУЛИ.flatMap((м) => [['module', м.id], ['theory', м.id], ...(м.apply ? [['mini', м.id]] : [])]),
            ...СИТУАЦИИ.map((с) => ['situation', с.id]),
            ...СИТУАЦИИ.flatMap((с) => с.tasks.map((з) => ['write', з.id])),
            ...разделыШпаргалки().map((р) => ['cheat', р.id])
        ];

        const плохие = [];

        for (const [имя, параметр] of маршруты) {
            const р = открыть(имя, параметр);
            if (р.length < 100) плохие.push(`${имя}/${параметр}: пусто`);
            if (/undefined|\[object|NaN/.test(р)) плохие.push(`${имя}/${параметр}: ${р.match(/.{20}(undefined|\[object|NaN).{20}/)?.[0]}`);
            if (р.includes('Экран не открылся')) плохие.push(`${имя}/${параметр}: сбой`);
        }

        assert(!плохие.length, плохие.slice(0, 5).join(' | '));
    });

    it('у каждой кнопки есть обработчик', () => {
        чисто();
        const известные = actions.names();
        const без = [];

        const проверить = (имя, параметр) => {
            const р = открыть(имя, параметр);
            for (const д of действия(р)) if (!известные.click.includes(д)) без.push(`${имя}: ${д}`);
            for (const д of изменения(р)) if (!известные.change.includes(д)) без.push(`${имя}: change ${д}`);
        };

        for (const имя of ['home', 'cheat', 'letters', 'review', 'more', 'errors', 'phrases', 'about', 'progress', 'exam']) проверить(имя);
        проверить('module', 'g01');
        проверить('theory', 'g01');
        проверить('mini', 'g01');
        проверить('situation', 's01');
        проверить('write', 's01-a');

        assert(!без.length, `кнопки без обработчика: ${[...new Set(без)].join(', ')}`);
    });

    it('неизвестный маршрут ведёт на главную, неизвестный модуль — на «не найдено»', () => {
        чисто();
        app.route = { name: 'нет-такого', param: null };
        app.go('нет-такого');
        assert(экран().innerHTML.includes('DTZ B1'));

        assert(открыть('module', 'zzz').includes('Такого модуля нет'));
        assert(открыть('situation', 'zzz').includes('Такой ситуации нет'));
        assert(открыть('write', 'zzz').includes('Такого задания нет'));
        assert(открыть('cheat', 'zzz').includes('Такой страницы нет'));
    });

    it('главная ведёт новичка ко входному тесту, а после теста — к модулю', () => {
        чисто();
        assert(открыть('home').includes('входного теста'));

        хранилище.записатьДиагностику({ модули: { g01: { верно: 0, всего: 4 }, g02: { верно: 4, всего: 4 } }, всего: 8, верно: 4 });
        const р = открыть('home');
        assert(!р.includes('Начните с входного теста'));
        assert(р.includes('Порядок слов'), 'самый слабый модуль первый');
    });
});

describe('Экраны: занятие', () => {
    it('верный ответ на выбор показывает «Верно» и открывает «Дальше»', async () => {
        чисто();
        открыть('drill', 'g01');

        const верный = сессия.карточка();
        assert(верный.type, 'есть карточка');

        // Нажимаем правильный вариант, если первое упражнение — выбор; иначе проверяем лишь то, что экран жив
        if (верный.type === 'choice') {
            await нажать(`.option[data-i="${верный.answer}"]`);
            assert(экран().querySelector('.feedback.ok'), 'нет зелёного разбора');
            assert(экран().querySelector('[data-action="дальше"]'));
        } else {
            assert(экран().querySelector('.q-type'));
        }
    });

    it('неверный ответ показывает правильный и объяснение', async () => {
        чисто();
        сессия.начать('t', 'Тест', [{ id: 'z-1', type: 'choice', q: 'Какой?', options: ['Heute bin ich krank.', 'Heute ich bin krank.'], answer: 0, explain: 'Потому что глагол вторым.', tag: 'verb2' }]);
        app.go('drill', 't');

        const неверный = экран().querySelector('.option:not([data-i="0"])');
        неверный.click();
        await new Promise((г) => setTimeout(г, 0));

        const р = экран().querySelector('.feedback.bad');
        assert(р, 'нет красного разбора');
        assert(р.innerText.includes('Потому что глагол вторым.'));
        assert(р.innerText.includes('Heute bin ich krank.'));
    });

    it('занятие проходится до итога, ошибка попадает в повторение', async () => {
        чисто();
        сессия.начать('t', 'Тест', [
            { id: 'z-1', type: 'choice', q: 'Какой?', options: ['a', 'b'], answer: 0, explain: 'x', tag: 'verb2' },
            { id: 'z-2', type: 'choice', q: 'Какой?', options: ['a', 'b'], answer: 0, explain: 'x', tag: 'verb2' }
        ]);
        app.go('drill', 't');

        await нажать(`.option[data-i="0"]`);
        await нажать('[data-action="дальше"]');
        await нажать(`.option[data-i="1"]`);
        await нажать('[data-action="дальше"]');

        assert(экран().querySelector('.ring'), 'нет итога');
        assert(экран().innerText.includes('Верно 1 из 2'));
        assert(экран().querySelector('[data-action="разбор-ошибок"]'), 'нет кнопки работы над ошибками');
        assert(хранилище.кПовторению().includes('z-2'));
    });

    it('плашки: тап переносит слово в строку, повторный тап возвращает', async () => {
        чисто();
        сессия.начать('t', 'Тест', [{ id: 'z-3', type: 'build', q: 'Составьте.', ru: 'Сегодня я болен.', answer: ['Heute bin ich krank.'], explain: 'x', tag: 'verb2' }]);
        app.go('drill', 't');

        const банк = () => экран().querySelectorAll('.build-bank .piece').length;
        equal(банк(), 4);

        await нажать('.build-bank .piece');
        equal(банк(), 3);
        equal(экран().querySelectorAll('.build-line .piece').length, 1);

        await нажать('.build-line .piece');
        equal(банк(), 4);
    });

    it('пустой ответ не проверяется', async () => {
        чисто();
        сессия.начать('t', 'Тест', [{ id: 'z-4', type: 'fix', q: 'Исправьте.', text: 'Heute ich bin krank.', answer: ['Heute bin ich krank.'], explain: 'x', tag: 'verb2' }]);
        app.go('drill', 't');

        await нажать('[data-action="проверить"]');
        assert(!экран().querySelector('.feedback'), 'пустой ответ проверился');
        assert(document.querySelector('.toast'), 'нет подсказки «введите ответ»');
        document.querySelector('.toast')?.remove();
    });

    it('«мой вариант тоже верен» превращает разбор в «Засчитано»', async () => {
        чисто();
        сессия.начать('t', 'Тест', [{ id: 'z-5', type: 'fix', q: 'Исправьте.', text: 'Heute ich bin krank.', answer: ['Heute bin ich krank.'], explain: 'x', tag: 'verb2' }]);
        app.go('drill', 't');

        экран().querySelector('#answer').value = 'Ich bin heute krank.';
        await нажать('[data-action="проверить"]');
        assert(экран().querySelector('.feedback.bad'));

        await нажать('[data-action="мой-вариант"]');
        assert(экран().querySelector('.feedback.ok'));
        assert(экран().innerText.includes('Засчитано'));
    });
});

describe('Экраны: письма', () => {
    it('образец проходит разбор без замечаний, пункты отмечены найденными', async () => {
        чисто();
        const з = СИТУАЦИИ[0].tasks[0];
        открыть('write', з.id);

        экран().querySelector('#letter').value = з.model.text;
        await нажать('[data-action="проверить-письмо"]');

        assert(экран().querySelector('.marked-text'), 'нет разбора');
        equal(экран().querySelectorAll('.task-card li.found').length, 4);
        equal(экран().querySelectorAll('.issue.err').length, 0);
    });

    it('слабый ответ получает замечания, а самооценка считает сумму', async () => {
        чисто();
        const з = СИТУАЦИИ[0].tasks[0];
        открыть('write', з.id);

        экран().querySelector('#letter').value = 'Hallo Herr Weber. Ich nicht kommen diese Woche weil ich bin krank.';
        await нажать('[data-action="проверить-письмо"]');
        assert(экран().querySelectorAll('.issue').length > 0, 'нет замечаний');

        for (const к of ['I', 'II', 'III', 'IV']) await нажать(`[data-action="оценка"][data-k="${к}"][data-v="4"]`);

        const вердикт = экран().querySelector('.verdict');
        assert(вердикт && вердикт.innerText.includes('16 из 20'), вердикт?.innerText);
        assert(вердикт.className.includes('b1'));

        await нажать('[data-action="сохранить-оценку"]');
        equal(хранилище.письмо(з.id).итог, 16);
        document.querySelector('.toast')?.remove();
    });

    it('черновик письма сохраняется при вводе', () => {
        чисто();
        const з = СИТУАЦИИ[0].tasks[0];
        открыть('write', з.id);

        const поле = экран().querySelector('#letter');
        поле.value = 'Sehr geehrter Herr Weber,';
        поле.dispatchEvent(new Event('input', { bubbles: true }));

        equal(хранилище.письмо(з.id).черновик, 'Sehr geehrter Herr Weber,');
    });

    it('проба: два задания на выбор, после выбора — окно письма с таймером', async () => {
        чисто();
        await нажать_на_странице('exam', '[data-action="проба-старт"]');

        assert(app.route.param && app.route.param.includes('+'), `адрес пробы: ${app.route.param}`);
        equal(экран().querySelectorAll('[data-action="проба-выбор"]').length, 2);
        assert(экран().querySelector('#timer'));

        await нажать('[data-action="проба-выбор"]');
        assert(экран().querySelector('#letter'), 'нет окна письма');
        assert(!экран().innerHTML.includes('Подсказки к пунктам'), 'в пробе подсказок быть не должно');

        app.go('home');
    });
});

async function нажать_на_странице(имя, селектор) {
    открыть(имя);
    await нажать(селектор);
}

describe('Экраны: шпаргалка и инструменты', () => {
    it('карточки фраз: «знал» двигает ящик, после итога можно начать заново', async () => {
        чисто();
        открыть('cards');

        const всего = экран().querySelectorAll('.flash').length;
        assert(всего === 1, 'нет карточки');

        let шагов = 0;
        while (экран().querySelector('[data-action="карта-показать"]') && шагов < 40) {
            await нажать('[data-action="карта-показать"]');
            await нажать('[data-знал="1"]');
            шагов += 1;
        }

        assert(шагов > 0 && шагов <= 15, `карточек пройдено: ${шагов}`);
        assert(экран().innerText.includes('Готово'), 'нет итога');
        assert(хранилище.всё().фразы && Object.keys(хранилище.всё().фразы).length === шагов);

        await нажать('[data-action="карты-ещё"]');
        assert(экран().querySelector('.flash'), 'новая стопка не началась');
    });

    it('поиск по шпаргалке прячет лишнее', () => {
        чисто();
        открыть('cheat');

        const поле = экран().querySelector('#cheat-search');
        поле.value = 'weil';
        document.body.appendChild(поле);

        // Слушатель поиска висит на document
        поле.dispatchEvent(new Event('input', { bubbles: true }));

        const всего = экран().querySelectorAll('.cheat-item').length;
        const видно = [...экран().querySelectorAll('.cheat-item')].filter((а) => !а.hidden).length;
        assert(видно > 0 && видно < всего, `видно ${видно} из ${всего}`);
    });

    it('страница шпаргалки с упражнениями даёт кнопку «Проверить себя»', () => {
        чисто();
        const р = разделыШпаргалки().find((х) => х.drill);
        assert(р, 'ни у одного раздела нет drill');
        assert(открыть('cheat', р.id).includes('Проверить себя'));
    });

    it('прогресс выгружается и очищается', () => {
        чисто();
        хранилище.записатьОтвет('g01-01', true, 'verb2');
        assert(открыть('progress').includes('Выгрузить прогресс'));
        assert(хранилище.выгрузить().includes('"приложение": "briefe"'));
    });

    it('повторение показывает число просроченных упражнений', () => {
        чисто();
        хранилище.записатьОтвет('g01-01', false, 'verb2');
        assert(открыть('review').includes('Повторить (1)'));
    });
});

чисто();
