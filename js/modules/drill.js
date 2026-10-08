/**
 * Экран занятия и итог.
 *
 * Весь экран перерисовывается целиком на каждом шаге (ответил, выбрал
 * плашку, дальше). Введённое в полях переживает перерисовку потому, что
 * хранится не в DOM, а в состоянии: текст читается из полей в момент
 * «Проверить» и тут же кладётся в сессию.
 */

import { ui } from '../core/ui.js';
import { actions } from '../core/actions.js';
import { app } from '../app.js';
import { сессия } from '../core/session.js';
import { собратьЗанятие } from '../core/sources.js';
import { можноЗасчитать, правильныйОтвет } from '../core/exercise.js';
import { ЗАМЕЧАНИЯ } from '../core/check.js';
import { модульПоId } from '../data/catalog.js';
import { ТЕМЫ } from '../data/tags.js';
import { разметка } from '../core/markup.js';
import { страница, сообщить } from './shell.js';
import { клавиши } from './input.js';

const ТИПЫ = {
    choice: 'Выберите вариант',
    gap: 'Вставьте слово',
    build: 'Составьте предложение',
    fix: 'Найдите ошибку',
    join: 'Соедините предложения',
    translate: 'Переведите',
    order: 'Расставьте по порядку'
};

/** Выбранные плашки для build и order: id плашек в порядке выбора. */
let ВВОД = { для: null, выбрано: [] };

function ввод(с) {
    const для = `${с.ключ}#${с.i}`;
    if (ВВОД.для !== для) ВВОД = { для, выбрано: [] };
    return ВВОД;
}

// ================== ТЕЛО УПРАЖНЕНИЯ ==================

function вариант(к, i, с) {
    const ответили = с.стадия === 'ответ';
    const верный = i === к.answer;
    const выбран = с.ввод === i;
    const класс = ответили ? (верный ? 'ok' : выбран ? 'bad' : '') : '';
    const метка = ответили ? (верный ? '✓' : выбран ? '✗' : '') : '';

    return ui.html`
        <button class="option ${класс}" data-action="выбрать" data-i="${i}" ${ответили ? 'disabled' : ''}>
            <span class="option-mark">${метка}</span><span>${к.options[i]}</span>
        </button>`;
}

function пропуски(к, с) {
    const куски = к.text.split('___');
    const ответили = с.стадия === 'ответ';

    return ui.html`
        <div class="q-sent de">
            ${куски.map((кусок, i) => {
                if (i === куски.length - 1) return кусок;

                const допустимые = (Array.isArray(к.answer[i]) ? к.answer[i] : [к.answer[i]]);
                const ширина = Math.max(3, ...допустимые.map((а) => а.length)) + 1;
                const значение = ответили ? (с.ввод?.[i] ?? '') : '';
                const класс = ответили ? (с.результат.пропуски[i].ok ? 'ok' : 'bad') : '';

                return ui.html`${кусок}<input class="gap ${класс}" type="text" data-gap="${i}" value="${значение}" ${ответили ? 'disabled' : ''}
                    ${!ответили && i === 0 ? 'data-autofocus' : ''} style="--w:${ширина}"
                    autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" aria-label="Пропуск ${i + 1}">`;
            })}
            ${к.hint ? ui.html`<span class="q-hint">(${к.hint})</span>` : ''}
        </div>`;
}

function строкаОтвета(к, с, многострочно = false) {
    const ответили = с.стадия === 'ответ';
    const значение = ответили ? (с.ввод ?? '') : '';
    const класс = ответили ? (с.результат.ok || с.засчитано ? 'ok' : 'bad') : '';

    const атрибуты = `autocomplete="off" autocapitalize="sentences" autocorrect="off" spellcheck="false"`;

    return многострочно
        ? ui.html`<textarea class="answer-area ${класс}" id="answer" rows="2" ${ответили ? 'disabled' : 'data-autofocus'} ${ui.raw(атрибуты)}>${значение}</textarea>`
        : ui.html`<input class="answer-line ${класс}" id="answer" type="text" value="${значение}" ${ответили ? 'disabled' : 'data-autofocus'} ${ui.raw(атрибуты)}>`;
}

function плашки(к, с, какСтроки = false) {
    const ответили = с.стадия === 'ответ';
    const в = ввод(с);
    const выбрано = в.выбрано.map((id) => к.плашки.find((п) => п.id === id)).filter(Boolean);
    const остаток = к.плашки.filter((п) => !в.выбрано.includes(п.id));

    const класс = ответили ? (с.результат.ok ? 'ok' : 'bad') : '';
    const кнопка = (п) => ui.html`<button class="piece ${какСтроки ? 'line' : ''}" data-action="плашка" data-id="${п.id}" ${ответили ? 'disabled' : ''}>${п.текст}</button>`;

    return ui.html`
        <div class="build-line ${класс} ${какСтроки ? 'lines' : ''}">${выбрано.map(кнопка)}</div>
        ${ответили ? '' : ui.html`<div class="build-bank ${какСтроки ? 'lines' : ''}">${остаток.map(кнопка)}</div>`}`;
}

function тело(к, с) {
    const ответили = с.стадия === 'ответ';

    switch (к.type) {
        case 'choice':
            return ui.html`
                <div class="q-type">${ТИПЫ.choice}</div>
                <div class="q-text">${разметка(к.q)}</div>
                ${к.text ? ui.html`<div class="q-context de">${к.text}</div>` : ''}
                <div class="options">${к.порядок.map((i) => вариант(к, i, с))}</div>`;

        case 'gap':
            return ui.html`
                <div class="q-type">${ТИПЫ.gap}</div>
                <div class="q-text">${разметка(к.q)}</div>
                ${пропуски(к, с)}
                ${ответили ? '' : клавиши()}`;

        case 'build':
            return ui.html`
                <div class="q-type">${ТИПЫ.build}</div>
                <div class="q-text">${разметка(к.q)}</div>
                <div class="q-ru">${к.ru}</div>
                ${плашки(к, с)}`;

        case 'order':
            return ui.html`
                <div class="q-type">${ТИПЫ.order}</div>
                <div class="q-text">${разметка(к.q)}</div>
                ${плашки(к, с, true)}`;

        case 'fix':
            return ui.html`
                <div class="q-type">${ТИПЫ.fix}</div>
                <div class="q-text">${разметка(к.q)}</div>
                <div class="q-context de" style="font-size:19px">${к.text}</div>
                ${строкаОтвета(к, с)}
                ${ответили ? '' : клавиши()}`;

        case 'join':
            return ui.html`
                <div class="q-type">${ТИПЫ.join}</div>
                <div class="q-text">${разметка(к.q)}</div>
                <div class="q-context de" style="font-size:19px">${к.parts.map((п) => ui.html`<div>${п}</div>`)}
                    <div style="margin-top:6px"><span class="chip accent">${к.connector}</span></div></div>
                ${строкаОтвета(к, с)}
                ${ответили ? '' : клавиши()}`;

        case 'translate':
            return ui.html`
                <div class="q-type">${ТИПЫ.translate}</div>
                <div class="q-text">${разметка(к.q)}</div>
                <div class="q-ru">${к.ru}</div>
                ${строкаОтвета(к, с, true)}
                ${ответили ? '' : клавиши()}`;

        default:
            return '';
    }
}

// ================== РАЗБОР ОТВЕТА ==================

function разбор(к, с) {
    const р = с.результат;
    const верно = р.ok || с.засчитано;
    const почти = !верно && р.почти;

    const заголовок = верно ? (с.засчитано ? 'Засчитано' : 'Верно') : почти ? 'Почти' : 'Неверно';
    const класс = верно ? 'ok' : почти ? 'near' : 'bad';

    return ui.html`
        <div class="feedback ${класс}">
            <div class="fb-head">${верно ? '✓ ' : почти ? '≈ ' : '✗ '}${заголовок}</div>

            ${р.замечания.map((з) => ui.html`<div class="fb-note">${ЗАМЕЧАНИЯ[з] || з}</div>`)}
            ${почти ? ui.html`<div class="fb-note">${ЗАМЕЧАНИЯ[почти]}</div>` : ''}

            ${!верно || к.type === 'order' ? ui.html`
                <div class="fb-right"><span class="muted small">Правильно:</span><span class="de">${р.правильно}</span></div>` : ''}
            ${!верно && р.варианты.length ? ui.html`
                <div class="fb-alt">Тоже верно: ${р.варианты.map((в, i) => ui.html`${i ? ' · ' : ''}<span class="de">${в}</span>`)}</div>` : ''}

            <div class="fb-why">${разметка(к.explain)}</div>
        </div>

        <div class="sticky-actions">
            ${!верно && можноЗасчитать(к) ? ui.html`<button class="btn" data-action="мой-вариант">Мой вариант тоже верен</button>` : ''}
            <button class="btn primary" data-action="дальше" data-autofocus-next>${сессия.номер() >= сессия.всего() ? 'Завершить' : 'Дальше →'}</button>
        </div>`;
}

// ================== ИТОГ ==================

function заголовокИтога(процент) {
    if (процент >= 90) return 'Отлично';
    if (процент >= 70) return 'Хорошо';
    if (процент >= 50) return 'Неплохо, но тему стоит повторить';
    return 'Тема пока сырая — это нормально';
}

function итогДиагностики(итог) {
    const строки = Object.entries(итог.модули)
        .map(([id, р]) => ({ м: модульПоId(id), р, доля: р.всего ? р.верно / р.всего : 0 }))
        .filter((х) => х.м)
        .sort((а, б) => а.доля - б.доля || а.м.order - б.м.order);

    const слабые = строки.filter((х) => х.доля < 0.75);

    return ui.html`
        <div class="sec">Ваш маршрут</div>
        <p class="muted small" style="margin:0 2px">Модули расставлены от самых слабых к самым сильным. Главная страница будет вести вас по этому порядку.</p>
        <div class="rows">${строки.map(({ м, р, доля }) => ui.html`
            <a class="rowl" href="#/theory/${м.id}" style="color:inherit;text-decoration:none">
                <div class="rowl-main"><b>${м.order}. ${м.short || м.title}</b></div>
                <span class="chip ${доля >= 0.75 ? 'ok' : доля >= 0.5 ? 'warn' : 'bad'}">${р.верно} из ${р.всего}</span>
            </a>`)}
        </div>
        ${слабые.length ? '' : ui.html`<p class="muted small" style="margin:8px 2px">Тест прошёл уверенно. Всё равно пройдите теорию по модулям: она короткая, а правильные привычки сидят в мелочах.</p>`}`;
}

function итогЭкран(с, назад) {
    const итог = с.итог;
    const кл = итог.процент >= 70 ? 'ok' : итог.процент < 50 ? 'bad' : '';
    const темы = Object.entries(итог.темы).filter(([, н]) => н.ошибок > 0).sort((а, б) => б[1].ошибок - а[1].ошибок);
    // Упражнения берутся из самого занятия, а не по номерам из курса: так
    // работа над ошибками не зависит от того, откуда упражнение пришло
    const ошибки = с.ошибки;

    return страница({
        заголовок: с.название,
        назад,
        безВкладок: true,
        содержимое: ui.html`
            <div class="ring-wrap"><div class="ring ${кл}" style="--p:${итог.процент}"><span>${итог.процент}%</span></div></div>
            <div class="res-title">${заголовокИтога(итог.процент)}</div>
            <div class="res-sub">Верно ${итог.верных} из ${итог.всего}</div>

            ${с.режим === 'диагностика' ? итогДиагностики(итог) : ''}

            ${темы.length ? ui.html`
                <div class="sec">Где ошибки</div>
                <div class="rows">${темы.map(([тема, н]) => ui.html`
                    <a class="rowl" href="#/module/${ТЕМЫ[тема]?.module || ''}" style="color:inherit;text-decoration:none">
                        <div class="rowl-main">${ТЕМЫ[тема]?.title || тема}</div>
                        <div class="rowl-end">${н.ошибок}</div>
                    </a>`)}
                </div>` : ''}

            ${ошибки.length ? ui.html`
                <div class="sec">Разбор ошибок</div>
                <div class="rows">${ошибки.map((у) => ui.html`
                    <div class="rowl"><div class="rowl-main">
                        <div class="muted small">${разметка(у.q)}</div>
                        ${у.text ? ui.html`<div class="de" style="text-decoration:line-through;color:var(--ink-2)">${у.text}</div>` : ''}
                        <div class="de" style="white-space:pre-line">${правильныйОтвет(у)}</div>
                    </div></div>`)}
                </div>` : ''}

            <div class="row col" style="margin-top:20px">
                ${ошибки.length ? ui.html`<button class="btn primary block" data-action="разбор-ошибок">Работа над ошибками (${ошибки.length})</button>` : ''}
                ${с.режим !== 'диагностика' && с.ключ !== 'retry' ? ui.html`<button class="btn ${ошибки.length ? 'soft' : 'primary'} block" data-action="ещё">Ещё раунд</button>` : ''}
                <a class="btn ghost block" href="${назад || '#/'}">${с.режим === 'диагностика' ? 'К главной' : 'Назад'}</a>
            </div>`
    });
}

// ================== ЭКРАНЫ ==================

function куда(с) {
    if (с?.модуль) return `#/module/${с.модуль}`;
    return '#/';
}

export const drill = {

    render(ключ) {
        if (!сессия.есть(ключ)) {
            const текущая = сессия.текущая();

            // Занятие закончено, а адрес тот же (кнопка «назад»): показываем итог, а не начинаем заново
            if (текущая && текущая.ключ === ключ && текущая.закончено) return итогЭкран(текущая, куда(текущая));

            const з = собратьЗанятие(ключ);

            if (!з) {
                return страница({
                    вкладка: 'path',
                    заголовок: 'Занятие',
                    назад: '#/',
                    содержимое: ui.html`<div class="empty-note">Здесь пока нечего повторять.<br>Сделайте несколько упражнений — и они появятся.</div>`
                });
            }

            сессия.начать(ключ, з.название, з.упражнения, { режим: з.режим, модуль: з.модуль });
        }

        const с = сессия.текущая();
        const к = сессия.карточка();
        const процент = Math.round((с.i / с.очередь.length) * 100);

        return страница({
            заголовок: с.название,
            безВкладок: true,
            содержимое: ui.html`
                <div class="drill-head">
                    <div class="bar" style="--p:${процент}"><i></i></div>
                    <span class="drill-count">${с.i + 1} / ${с.очередь.length}</span>
                    <button class="drill-x" data-action="выйти" aria-label="Выйти">✕</button>
                </div>
                <div class="card" style="margin-top:8px">
                    ${тело(к, с)}
                    ${с.стадия === 'вопрос' && к.type !== 'choice' ? ui.html`<div class="row" style="margin-top:16px"><button class="btn primary block" data-action="проверить">Проверить</button></div>` : ''}
                </div>
                ${с.стадия === 'ответ' ? разбор(к, с) : ''}`
        });
    },

    after() {
        // Первое поле ввода получает фокус сразу: пальцы уже на клавиатуре
        const поле = document.querySelector('[data-autofocus]');
        if (поле && !поле.disabled) поле.focus({ preventScroll: true });
    },

    leave() {
        // Закончённое занятие не должно «возвращаться» при следующем входе
        if (сессия.текущая()?.закончено) сессия.сбросить();
    }
};

export const result = {

    render() {
        const с = сессия.текущая();
        if (!с || !с.закончено) {
            return страница({ заголовок: 'Итог', назад: '#/', содержимое: ui.html`<div class="empty-note">Итога пока нет.</div>` });
        }
        return итогЭкран(с, куда(с));
    }
};

// ================== ДЕЙСТВИЯ ==================

function перерисовать() {
    app.render(true);
    app.показан?.after?.();
}

/** Что ввёл читатель — в виде, который ждёт `проверить`. */
function прочитатьВвод(к, с) {
    switch (к.type) {
        case 'gap':
            return [...document.querySelectorAll('.gap')].map((п) => п.value);

        case 'build':
        case 'order': {
            const в = ввод(с);
            const найти = (id) => к.плашки.find((п) => п.id === id)?.текст;
            return в.выбрано.map(найти);
        }

        default:
            return document.getElementById('answer')?.value ?? '';
    }
}

function пустойВвод(к, ввод) {
    if (к.type === 'gap') return ввод.every((в) => !в.trim());
    if (к.type === 'build') return !ввод.length;
    if (к.type === 'order') return ввод.length < к.items.length;
    return !String(ввод).trim();
}

function проверитьСейчас() {
    const с = сессия.текущая();
    if (!с || с.стадия !== 'вопрос') return;

    const к = сессия.карточка();
    const ответ = прочитатьВвод(к, с);

    if (пустойВвод(к, ответ)) {
        сообщить(к.type === 'order' ? 'Расставьте все части' : 'Сначала введите ответ');
        return;
    }

    сессия.ответить(ответ);
    перерисовать();
}

actions.on('выбрать', (el) => {
    const с = сессия.текущая();
    if (!с || с.стадия !== 'вопрос') return;

    сессия.ответить(Number(el.dataset.i));
    перерисовать();
});

actions.on('проверить', проверитьСейчас);

actions.on('плашка', (el) => {
    const с = сессия.текущая();
    if (!с || с.стадия !== 'вопрос') return;

    const в = ввод(с);
    const id = Number(el.dataset.id);

    в.выбрано = в.выбрано.includes(id) ? в.выбрано.filter((х) => х !== id) : [...в.выбрано, id];
    перерисовать();
});

actions.on('мой-вариант', () => {
    сессия.засчитатьМой();
    перерисовать();
});

actions.on('дальше', () => {
    сессия.дальше();
    app.render();
    app.показан?.after?.();
});

actions.on('выйти', () => {
    const с = сессия.текущая();
    app.go(...(с?.модуль ? ['module', с.модуль] : ['home']));
});

actions.on('ещё', () => {
    const с = сессия.текущая();
    const ключ = с?.ключ;
    сессия.сбросить();
    app.go('drill', ключ);
});

actions.on('разбор-ошибок', () => {
    const с = сессия.текущая();
    const список = с.ошибки;
    const модуль = с.модуль;

    сессия.начать('retry', 'Работа над ошибками', список, { режим: 'повтор', модуль });
    app.go('drill', 'retry');
});

actions.onChange('мини-пункт', () => {});

// Клавиатура: Enter проверяет в поле и листает после ответа
if (!globalThis.__BRIEFE_DRILL_KEYS__) {
    globalThis.__BRIEFE_DRILL_KEYS__ = true;

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' || e.isComposing || app.route.name !== 'drill') return;

        const с = сессия.текущая();
        if (!с || с.закончено) return;

        const цель = e.target;
        if (цель.matches?.('button, a, textarea')) return;

        e.preventDefault();

        if (с.стадия === 'вопрос') {
            if (с.очередь[с.i].type !== 'choice') проверитьСейчас();
        } else {
            сессия.дальше();
            app.render();
            app.показан?.after?.();
        }
    });
}
