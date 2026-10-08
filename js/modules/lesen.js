/**
 * Lesen: хаб, набор заданий, проба на 45 минут.
 *
 * Здесь два способа показать одно и то же. Набор — одна часть экзамена с
 * разбором сразу после проверки. Проба — все пять частей подряд и таймер:
 * разбор только после сдачи, как на экзамене, где результат не известен до
 * конца. Блок одной части рисуется одной функцией; проба просто ставит пять
 * таких блоков друг за другом с общей нумерацией 1–25.
 *
 * Ответы лежат в памяти экрана, а не в хранилище: набор решается за
 * минуты, и недорешённый набор не стоит хранить. В хранилище попадает итог
 * проверки (баллы и ответы), чтобы показать прогресс и разобрать ошибки.
 */

import { ui } from '../core/ui.js';
import { actions } from '../core/actions.js';
import { app } from '../app.js';
import {
    ЧТЕНИЕ, наборПоId, вариантПробы, вариантовПроб, СПРАВОЧНИК_ЧТЕНИЯ
} from '../data/catalog.js';
import { хранилище } from '../core/store.js';
import { разметка } from '../core/markup.js';
import {
    оценитьНабор, вердиктПробы, выделить, БУКВЫ, ОБЪЯВЛЕНИЯ, подписьОтвета, верно,
    МИНУТ_LESEN, ВСЕГО_ЗАДАНИЙ_LESEN, ПОРОГ_B1
} from '../core/lesen.js';
import { страница, сообщить } from './shell.js';

// ================== ТЕКСТЫ ==================

const ИНСТРУКЦИИ = {
    1: (н) => `Lesen Sie die Aufgaben 1 bis ${н} und den Text. Wo finden Sie etwas Passendes? Markieren Sie Antwort a, b oder c.`,
    2: (н) => `Lesen Sie zuerst die Aufgaben 1 bis ${н} und suchen Sie dann in den Anzeigen a bis h. Welche Anzeige passt zu welcher Situation? Für eine Aufgabe gibt es keine Lösung. Markieren Sie in diesem Fall x.`,
    3: (н) => `Lesen Sie die Meldungen und Mitteilungen und lösen Sie die Aufgaben 1 bis ${н}.`,
    4: (н) => `Lesen Sie zuerst die Aufgaben 1 bis ${н} und suchen Sie danach die Informationen im Text. Ist die Aussage richtig oder falsch?`,
    5: () => 'Welche Wörter passen hier? Es gibt nur eine richtige Lösung. Markieren Sie a, b oder c.'
};

const РУ_ПОДСКАЗКИ = {
    1: 'Найдите в списке рубрику к ситуации. Если нужное не в a и не в b, а в другой рубрике списка (или нигде), ответ «andere …».',
    2: 'Выпишите 2–3 ключевых факта ситуации и найдите объявление. Если ни одно не подходит целиком — x.',
    3: 'К каждому тексту: общая мысль (richtig/falsch) и одна деталь (a, b, c).',
    4: 'Сначала прочитайте утверждения, потом ищите нужные места по ключевым словам.',
    5: 'Прочитайте письмо целиком, потом для каждого пропуска подберите слово или форму.'
};

// ================== СОСТОЯНИЕ ==================

/**
 * `ЭКРАН` — то, что решается сейчас:
 *   набор: { режим: 'набор', id, ответы, проверено, слова }
 *   проба: { режим: 'проба', вариант, ответы, проверено, старт, итоги }
 */
let ЭКРАН = null;
let ТАЙМЕР = null;

const ЗАДАНИЯ_ДО = { 1: 0, 2: 5, 3: 10, 4: 16, 5: 19 };   // сколько заданий перед частью в экзамене

// ================== ОТРИСОВКА МАТЕРИАЛА ==================

/** Какие фрагменты подсвечивать в каком материале после проверки. */
function подсветки(набор, часть) {
    const карта = new Map();
    const добавить = (ключ, ф) => { if (ф) { if (!карта.has(ключ)) карта.set(ключ, []); карта.get(ключ).push(ф); } };

    for (const п of набор.items) {
        if (!п.evidence) continue;
        if (часть === 1) добавить('list', п.evidence);
        else if (часть === 2) добавить(п.answer, п.evidence);
        else if (часть === 3) добавить(п.text, п.evidence);
        else if (часть === 4) добавить('t', п.evidence);
    }

    return карта;
}

const строкаС = (текст, фрагменты, показать) => выделить(текст, показать ? фрагменты : []);

function списокМатериал(м, подсветка, показать) {
    const ф = подсветка.get('list') || [];
    return ui.html`
        <div class="r-card r-list">
            <div class="r-title de">${м.title}</div>
            ${м.rows.map((р) => ui.html`
                <div class="r-row"><b class="r-head de">${строкаС(р.head, ф, показать)}</b><span class="de">${строкаС(р.text, ф, показать)}</span></div>`)}
        </div>`;
}

function объявления(м, подсветка, показать, ответы, набор) {
    // После проверки показываем, какие объявления оказались верными ответами
    const верные = new Set(набор.items.map((п) => п.answer));

    return ui.html`
        <div class="r-ads">
            ${м.ads.map((о) => ui.html`
                <div class="r-ad ${показать && верные.has(о.letter) ? 'right' : ''}">
                    <span class="r-letter">${о.letter}</span>
                    <div class="de">
                        ${о.title ? ui.html`<b>${строкаС(о.title, подсветка.get(о.letter) || [], показать)}</b><br>` : ''}
                        ${строкаС(о.text, подсветка.get(о.letter) || [], показать)}
                    </div>
                </div>`)}
        </div>`;
}

function текстМатериал(т, подсветка, показать) {
    const ф = подсветка.get(т.id) || [];
    return ui.html`
        <div class="r-card r-text">
            <div class="r-title de">${строкаС(т.title, ф, показать)}</div>
            ${(т.paragraphs || []).map((п) => ui.html`<p class="de">${строкаС(п, ф, показать)}</p>`)}
            ${(т.sections || []).map((с) => ui.html`
                <h4 class="r-sec de">${строкаС(с.h, ф, показать)}</h4>
                ${(с.paragraphs || []).map((п) => ui.html`<p class="de">${строкаС(п, ф, показать)}</p>`)}`)}
        </div>`;
}

function письмо(м, набор, ответы, показать, смещение) {
    const пример = набор.example;

    const кусочки = м.body.split(/\[(\d)\]/);   // текст, номер, текст, номер …
    const части = [];

    for (let i = 0; i < кусочки.length; i++) {
        if (i % 2 === 0) { части.push(ui.esc(кусочки[i])); continue; }

        const н = Number(кусочки[i]);

        if (н === 0) {
            части.push(`<span class="r-gap done">(0) ${ui.esc(пример.options[пример.answer])}</span>`);
            continue;
        }

        const п = набор.items.find((х) => х.gap === н);
        const выбрано = ответы[п.id];
        const слово = выбрано === undefined ? '______' : п.options[выбрано];
        const класс = !показать ? (выбрано === undefined ? '' : 'picked') : (верно(п, выбрано) ? 'ok' : 'bad');
        const правильное = показать && !верно(п, выбрано) ? ` → <b>${ui.esc(п.options[п.answer])}</b>` : '';

        части.push(`<span class="r-gap ${класс}">(${смещение + н}) ${ui.esc(слово)}${правильное}</span>`);
    }

    return ui.html`
        <div class="r-card r-letter-card">
            <div class="r-letter-head de">${(м.head || []).map((х, i) => ui.html`<div class="${i === 0 ? 'subject' : ''}">${х}</div>`)}</div>
            <div class="r-letter-body de">${ui.raw(части.join(''))}</div>
            <div class="r-letter-foot de">${(м.foot || []).map((х) => ui.html`<div>${х}</div>`)}</div>
        </div>`;
}

// ================== ВОПРОСЫ ==================

function вариантыЗадания(п, часть) {
    if (часть === 2) return [...ОБЪЯВЛЕНИЯ, 'x'].map((в) => ({ значение: в, подпись: в }));
    if (п.type === 'rf') return [{ значение: true, подпись: 'richtig' }, { значение: false, подпись: 'falsch' }];
    return п.options.map((о, i) => ({ значение: i, подпись: `${БУКВЫ[i]}) ${о}` }));
}

const сериализовать = (в) => (typeof в === 'boolean' ? (в ? 'true' : 'false') : String(в));

function разобрать(п, часть, текст) {
    if (часть === 2) return текст;
    if (п.type === 'rf') return текст === 'true';
    return Number(текст);
}

function вопрос(п, часть, номер, ответы, показать) {
    const ответ = ответы[п.id];
    const варианты = вариантыЗадания(п, часть);
    const правильно = показать && верно(п, ответ);
    const метка = показать ? (правильно ? 'ok' : 'bad') : '';
    const компактно = часть === 2;

    const текстВопроса = часть === 5 ? `Пропуск (${номер})` : п.q;

    return ui.html`
        <div class="r-q ${метка}" data-q="${п.id}">
            <div class="r-qhead">
                <span class="r-qnum">${номер}</span>
                <div class="r-qtext ${часть === 5 ? '' : 'de'}">${текстВопроса}</div>
            </div>
            <div class="r-opts ${компактно ? 'compact' : ''} ${часть === 5 ? 'gapopts' : ''}">
                ${варианты.map((в) => {
                    const выбрано = ответ !== undefined && ответ === в.значение;
                    const этоВерный = показать && п.answer === в.значение;
                    const класс = показать ? (этоВерный ? 'right' : выбрано ? 'wrong' : '') : (выбрано ? 'on' : '');

                    return ui.html`<button class="r-opt ${компактно ? 'pill' : ''} ${класс}" data-action="лес-ответ" data-q="${п.id}" data-v="${сериализовать(в.значение)}" ${показать ? 'disabled' : ''}>${в.подпись}</button>`;
                })}
            </div>
            ${показать ? ui.html`
                <div class="r-fb ${метка}">
                    <div><b>${правильно ? '✓ Верно' : ответ === undefined ? '✗ Нет ответа' : '✗ Неверно'}</b>${правильно ? '' : ui.html` · правильно: <span class="de">${подписьОтвета(п, часть, п.answer)}</span>`}</div>
                    <div class="r-why">${разметка(п.why)}</div>
                </div>` : ''}
        </div>`;
}

// ================== ОДНА ЧАСТЬ ЦЕЛИКОМ ==================

function глоссарий(набор, показатьСразу) {
    if (!набор.glossary?.length) return '';

    return ui.html`
        <details class="help r-gloss" ${показатьСразу ? 'open' : ''}>
            <summary>Слова из этого набора (${набор.glossary.length})</summary>
            <div class="help-body">${набор.glossary.map((г) => ui.html`<div class="phrase"><span class="de">${г.de}</span><span class="phrase-ru">${г.ru}</span></div>`)}</div>
        </details>`;
}

/**
 * Блок одной части: задание, материал, вопросы.
 * `опции.смещение` — сколько заданий в экзамене до этой части (для сплошной
 * нумерации в пробе); `опции.экзамен` — без подсказок на русском и без слов.
 */
function блок(часть, набор, ответы, показать, опции = {}) {
    const смещение = опции.смещение ?? 0;
    const подсветка = показать ? подсветки(набор, часть.teil) : new Map();
    const н = набор.items.length;

    let содержимое;

    if (часть.teil === 1) {
        содержимое = ui.html`${списокМатериал(набор.material[0], подсветка, показать)}${набор.items.map((п, i) => вопрос(п, 1, смещение + i + 1, ответы, показать))}`;
    } else if (часть.teil === 2) {
        содержимое = ui.html`${объявления(набор.material[0], подсветка, показать, ответы, набор)}${набор.items.map((п, i) => вопрос(п, 2, смещение + i + 1, ответы, показать))}`;
    } else if (часть.teil === 3) {
        содержимое = ui.html`${набор.material.map((т) => ui.html`
            ${текстМатериал(т, подсветка, показать)}
            ${набор.items.filter((п) => п.text === т.id).map((п) => вопрос(п, 3, смещение + набор.items.indexOf(п) + 1, ответы, показать))}`)}`;
    } else if (часть.teil === 4) {
        содержимое = ui.html`${текстМатериал(набор.material[0], подсветка, показать)}${набор.items.map((п, i) => вопрос(п, 4, смещение + i + 1, ответы, показать))}`;
    } else {
        содержимое = ui.html`${письмо(набор.material[0], набор, ответы, показать, смещение)}${набор.items.map((п) => вопрос(п, 5, смещение + п.gap, ответы, показать))}`;
    }

    return ui.html`
        <section class="r-part">
            <div class="r-part-head">Teil ${часть.teil}</div>
            ${набор.situation ? ui.html`<p class="r-situation de">${набор.situation}</p>` : ''}
            <p class="r-instruction de">${ИНСТРУКЦИИ[часть.teil](н)}</p>
            ${!опции.экзамен ? ui.html`<p class="r-hint">${РУ_ПОДСКАЗКИ[часть.teil]}</p>` : ''}
            ${содержимое}
            ${!опции.экзамен ? глоссарий(набор, показать) : ''}
        </section>`;
}

/** Блок одной части без состояния — для печатной версии. */
export { блок as блокНабора };

// ================== ХАБ ==================

function плитчатаяЧасть(ч) {
    const сделано = ч.sets.filter((с) => хранилище.набор(с.id).попыток > 0).length;
    const лучшие = ч.sets.map((с) => хранилище.набор(с.id)).filter((н) => н.попыток);
    const средний = лучшие.length ? Math.round(лучшие.reduce((а, н) => а + н.лучший / (н.всего || 1), 0) / лучшие.length * 100) : null;

    return ui.html`
        <a class="link" href="#/module/${ч.id}">
            <span class="link-ico">${ч.teil}</span>
            <span class="link-main">
                <span class="link-title">${ч.title}</span><br>
                <span class="link-sub">${сделано} из ${ч.sets.length} наборов${средний === null ? '' : ` · лучшие в среднем ${средний} %`}</span>
            </span>
            <span class="link-end">›</span>
        </a>`;
}

export const lesen = {

    render() {
        const проб = вариантовПроб();
        const история = хранилище.всё().пробыЧтения.slice(-5).reverse();
        const справочник = СПРАВОЧНИК_ЧТЕНИЯ.length;

        return страница({
            вкладка: 'lesen',
            заголовок: 'Lesen',
            содержимое: ui.html`
                <div class="hero">
                    <h1>Lesen: чтение</h1>
                    <p>${ВСЕГО_ЗАДАНИЙ_LESEN} заданий, ${МИНУТ_LESEN} минут, пять частей. Каждое задание — один балл. Словарей на экзамене нет.</p>
                </div>

                <div class="card accent">
                    <h2>Проба Lesen</h2>
                    <p class="lead">Все пять частей подряд и таймер на ${МИНУТ_LESEN} минут. Разбор — только после сдачи, как на экзамене.</p>
                    ${проб ? ui.html`
                        <div class="row" style="margin-top:12px">
                            ${Array.from({ length: проб }, (_, i) => ui.html`<a class="btn ${i === 0 ? 'primary' : ''}" href="#/lesenexam/${i + 1}">Вариант ${i + 1}</a>`)}
                        </div>` : ui.html`<p class="muted small" style="margin-top:8px">Проба появится, когда будут подключены все пять частей.</p>`}
                </div>

                <div class="sec">Пять частей</div>
                <div class="links">${ЧТЕНИЕ.map(плитчатаяЧасть)}</div>
                ${ЧТЕНИЕ.length ? '' : ui.html`<div class="empty-note">Содержимое Lesen ещё не подключено.</div>`}

                ${история.length ? ui.html`
                    <div class="sec">Последние пробы</div>
                    <div class="rows">${история.map((п) => ui.html`
                        <div class="rowl"><div class="rowl-main">Вариант ${п.вариант} · ${п.минут} мин<br><span class="muted small">${п.части.map((х, i) => `Teil ${i + 1}: ${х}`).join(' · ')}</span></div>
                            <span class="chip ${п.баллов >= ПОРОГ_B1 ? 'ok' : п.баллов >= 11 ? 'warn' : 'bad'}">${п.баллов}/${п.из}</span></div>`)}
                    </div>` : ''}

                <div class="sec">Подготовка</div>
                <div class="links">
                    <a class="link" href="#/about"><span class="link-ico">ⓘ</span><span class="link-main"><span class="link-title">Как устроена письменная часть</span><br><span class="link-sub">Lesen, Hören, Schreiben: время и баллы</span></span><span class="link-end">›</span></a>
                    ${справочник ? ui.html`<a class="link" href="#/cheat/${СПРАВОЧНИК_ЧТЕНИЯ[0].id}"><span class="link-ico">☰</span><span class="link-main"><span class="link-title">Шпаргалка по чтению</span><br><span class="link-sub">Сокращения объявлений, слова писем, перифразы</span></span><span class="link-end">›</span></a>` : ''}
                </div>
                <p class="muted small" style="margin:14px 2px">Результат Lesen на экзамене считается вместе с Hören: 33 правильных ответа из 45 — это B1. Для одного Lesen это примерно ${ПОРОГ_B1} из ${ВСЕГО_ЗАДАНИЙ_LESEN}.</p>`
        });
    }
};

// ================== НАБОР ==================

function ответыПустые() {
    return {};
}

function шапкаИтога(оценка, набор) {
    const процент = Math.round((оценка.баллов / оценка.всего) * 100);
    const кл = процент >= 70 ? 'ok' : процент < 50 ? 'bad' : '';

    return ui.html`
        <div class="ring-wrap"><div class="ring ${кл}" style="--p:${процент}"><span>${оценка.баллов}/${оценка.всего}</span></div></div>
        <div class="res-title">${процент >= 80 ? 'Отлично' : процент >= 60 ? 'Хорошо' : 'Разберите ошибки ниже'}</div>
        <div class="res-sub">${набор.title}</div>`;
}

export const read = {

    render(id) {
        const н = наборПоId(id || '');

        if (!н) {
            return страница({ вкладка: 'lesen', заголовок: 'Не найдено', назад: '#/lesen', содержимое: ui.html`<div class="empty-note">Такого набора нет.</div>` });
        }

        const { часть, набор } = н;

        if (!ЭКРАН || ЭКРАН.режим !== 'набор' || ЭКРАН.id !== id) {
            ЭКРАН = { режим: 'набор', id, ответы: ответыПустые(), проверено: false, старт: Date.now() };
        }

        const оценка = оценитьНабор(набор, ЭКРАН.ответы);
        const номер = часть.sets.indexOf(набор);
        const следующий = часть.sets[номер + 1];

        return страница({
            вкладка: 'lesen',
            заголовок: `Teil ${часть.teil} · набор ${номер + 1}`,
            назад: `#/module/${часть.id}`,
            содержимое: ui.html`
                ${ЭКРАН.проверено ? шапкаИтога(оценка, набор) : ui.html`<div class="hero"><h1 style="font-size:20px">${набор.title}</h1></div>`}
                ${блок(часть, набор, ЭКРАН.ответы, ЭКРАН.проверено)}
                <div class="row col" style="margin-top:18px">
                    ${ЭКРАН.проверено ? ui.html`
                        <button class="btn primary block" data-action="лес-снова">Решить ещё раз</button>
                        ${следующий ? ui.html`<a class="btn soft block" href="#/read/${следующий.id}">Следующий набор ›</a>` : ''}
                        <a class="btn ghost block" href="#/module/${часть.id}">К части: стратегия и упражнения</a>`
                    : ui.html`
                        <button class="btn primary block" data-action="лес-проверить">Проверить (${оценка.ответили} из ${оценка.всего})</button>`}
                </div>`
        });
    },

    leave() {
        if (ЭКРАН?.режим === 'набор') ЭКРАН = null;
    }
};

// ================== ПРОБА ==================

function мин(мс) {
    const с = Math.max(0, Math.round(мс / 1000));
    return `${Math.floor(с / 60)}:${String(с % 60).padStart(2, '0')}`;
}

function итогиПробы(части, ответы) {
    return части.map(({ часть, набор }) => ({ часть, набор, оценка: оценитьНабор(набор, ответы) }));
}

export const lesenexam = {

    render(param) {
        const k = Number(param);
        const части = вариантПробы(k);

        if (!части) {
            return страница({ вкладка: 'lesen', заголовок: 'Не найдено', назад: '#/lesen', содержимое: ui.html`<div class="empty-note">Такого варианта нет.</div>` });
        }

        if (!ЭКРАН || ЭКРАН.режим !== 'проба' || ЭКРАН.вариант !== k) {
            ЭКРАН = { режим: 'проба', вариант: k, ответы: {}, проверено: false, старт: Date.now(), итоги: null };
        }

        const всего = части.reduce((а, х) => а + х.набор.items.length, 0);
        const ответили = части.reduce((а, х) => а + оценитьНабор(х.набор, ЭКРАН.ответы).ответили, 0);

        let шапка = '';

        if (ЭКРАН.проверено) {
            const итоги = ЭКРАН.итоги;
            const баллов = итоги.reduce((а, х) => а + х.оценка.баллов, 0);
            const в = вердиктПробы(баллов);

            шапка = ui.html`
                <div class="ring-wrap"><div class="ring ${в.уровень === 'b1' ? 'ok' : в.уровень === 'low' ? 'bad' : ''}" style="--p:${Math.round(баллов / всего * 100)}"><span>${баллов}/${всего}</span></div></div>
                <div class="verdict ${в.уровень}">${в.подпись}<small>${в.пояснение}</small></div>
                <div class="rows">${итоги.map((х) => ui.html`
                    <div class="rowl"><div class="rowl-main">Teil ${х.часть.teil}</div><div class="rowl-end">${х.оценка.баллов} из ${х.оценка.всего}</div></div>`)}
                </div>
                <p class="muted small" style="margin:8px 2px">В экзамене Lesen и Hören считаются вместе: B1 — от 33 правильных ответов из 45. Для одного Lesen это примерно ${ПОРОГ_B1} из ${ВСЕГО_ЗАДАНИЙ_LESEN}.</p>`;
        }

        return страница({
            заголовок: `Проба Lesen · вариант ${k}`,
            назад: ЭКРАН.проверено ? '#/lesen' : null,
            бок: ЭКРАН.проверено ? '' : ui.html`<span class="timer" id="timer">${мин(МИНУТ_LESEN * 60000)}</span>`,
            безВкладок: !ЭКРАН.проверено,
            вкладка: 'lesen',
            содержимое: ui.html`
                ${шапка}
                ${части.map(({ часть, набор }) => блок(часть, набор, ЭКРАН.ответы, ЭКРАН.проверено, { смещение: ЗАДАНИЯ_ДО[часть.teil], экзамен: !ЭКРАН.проверено }))}
                <div class="row col" style="margin-top:18px">
                    ${ЭКРАН.проверено ? ui.html`<a class="btn primary block" href="#/lesen">К Lesen</a>`
                        : ui.html`<button class="btn primary block" data-action="проба-чтения-сдать">Сдать (${ответили} из ${всего})</button>
                            <a class="btn ghost block" href="#/lesen">Выйти без сохранения</a>`}
                </div>`
        });
    },

    after() {
        остановить();
        if (ЭКРАН?.режим !== 'проба' || ЭКРАН.проверено || !document.getElementById('timer')) return;

        let предупреждали = false;

        const шаг = () => {
            const узел = document.getElementById('timer');
            if (!узел) return остановить();

            const осталось = МИНУТ_LESEN * 60000 - (Date.now() - ЭКРАН.старт);
            узел.textContent = мин(осталось);
            узел.classList.toggle('low', осталось < 5 * 60000);

            if (осталось <= 0 && !предупреждали) {
                предупреждали = true;
                сообщить('Время вышло — сдайте работу');
            }
        };

        шаг();
        ТАЙМЕР = setInterval(шаг, 1000);
    },

    leave() {
        остановить();
        if (ЭКРАН?.режим === 'проба') ЭКРАН = null;
    }
};

function остановить() {
    if (ТАЙМЕР) clearInterval(ТАЙМЕР);
    ТАЙМЕР = null;
}

// ================== ДЕЙСТВИЯ ==================

/** Найти задание по id в том, что решается сейчас. */
function найтиЗадание(id) {
    if (ЭКРАН?.режим === 'набор') {
        const н = наборПоId(ЭКРАН.id);
        const п = н?.набор.items.find((х) => х.id === id);
        return п ? { п, часть: н.часть } : null;
    }

    if (ЭКРАН?.режим === 'проба') {
        for (const { часть, набор } of вариантПробы(ЭКРАН.вариант) || []) {
            const п = набор.items.find((х) => х.id === id);
            if (п) return { п, часть };
        }
    }

    return null;
}

actions.on('лес-ответ', (el) => {
    if (!ЭКРАН || ЭКРАН.проверено) return;

    const н = найтиЗадание(el.dataset.q);
    if (!н) return;

    const значение = разобрать(н.п, н.часть.teil, el.dataset.v);

    // Повторный тап по выбранному ответу снимает его: так можно «пока не знаю»
    if (ЭКРАН.ответы[н.п.id] === значение) delete ЭКРАН.ответы[н.п.id];
    else ЭКРАН.ответы[н.п.id] = значение;

    app.render(true);
});

actions.on('лес-проверить', () => {
    if (ЭКРАН?.режим !== 'набор' || ЭКРАН.проверено) return;

    const н = наборПоId(ЭКРАН.id);
    const оценка = оценитьНабор(н.набор, ЭКРАН.ответы);

    хранилище.записатьНабор(ЭКРАН.id, оценка.баллов, оценка.всего, ЭКРАН.ответы);
    ЭКРАН.проверено = true;
    app.render();
});

actions.on('лес-снова', () => {
    ЭКРАН = null;
    app.render();
});

actions.on('проба-чтения-сдать', () => {
    if (ЭКРАН?.режим !== 'проба' || ЭКРАН.проверено) return;

    const части = вариантПробы(ЭКРАН.вариант);
    const итоги = итогиПробы(части, ЭКРАН.ответы);
    const баллов = итоги.reduce((а, х) => а + х.оценка.баллов, 0);

    for (const { набор, оценка } of итоги) {
        const ответы = Object.fromEntries(набор.items.filter((п) => ЭКРАН.ответы[п.id] !== undefined).map((п) => [п.id, ЭКРАН.ответы[п.id]]));
        хранилище.записатьНабор(набор.id, оценка.баллов, оценка.всего, ответы);
    }

    хранилище.записатьПробуЧтения({
        вариант: ЭКРАН.вариант,
        баллов,
        из: итоги.reduce((а, х) => а + х.оценка.всего, 0),
        минут: Math.round((Date.now() - ЭКРАН.старт) / 60000),
        части: итоги.map((х) => х.оценка.баллов)
    });

    ЭКРАН.итоги = итоги;
    ЭКРАН.проверено = true;
    остановить();
    app.render();
});
