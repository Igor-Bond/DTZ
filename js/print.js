/**
 * Печатный учебник из данных курса.
 *
 * Порядок: как пользоваться, об экзамене, шпаргалка, грамматика, письмо,
 * клиника ошибок, фразы, ключи. Упражнения напечатаны без ответов, с
 * пропусками и линиями для письма от руки — как на экзамене; ответы собраны в
 * конце одним блоком.
 */

import { ui } from './core/ui.js';
import { разметка } from './core/markup.js';
import { разложитьПлашки } from './core/exercise.js';
import { заполнить } from './core/check.js';
import {
    ГРАММАТИКА, ТЕХНИКА, ЧТЕНИЕ, СИТУАЦИИ, ОШИБКИ, ФРАЗЫ, СПРАВОЧНИК, ШПАРГАЛКА, СПРАВОЧНИК_ЧТЕНИЯ, ЭКЗАМЕН
} from './data/catalog.js';
import { подписьОтвета } from './core/lesen.js';
import { блокНабора } from './modules/lesen.js';
import { блоки } from './modules/blocks.js';
import { НАЗВАНИЕ } from './version.js';

const БУКВЫ = 'abcdefgh';

/** Детерминированное перемешивание: плашки в учебнике не меняются от печати к печати. */
function перемешатьПоId(список, id) {
    let семя = [...id].reduce((а, с) => (а * 31 + с.charCodeAt(0)) >>> 0, 7) || 1;
    const случайное = () => (семя = (семя * 1664525 + 1013904223) >>> 0) / 4294967296;

    const р = [...список];
    for (let i = р.length - 1; i > 0; i--) {
        const j = Math.floor(случайное() * (i + 1));
        [р[i], р[j]] = [р[j], р[i]];
    }

    // Не оставляем готовый порядок
    if (р.length > 1 && р.every((х, i) => х === список[i])) р.push(р.shift());
    return р;
}

const линия = (н = 1) => ui.html`<div class="p-lines">${Array.from({ length: н }, () => ui.html`<div class="p-line"></div>`)}</div>`;

// ================== УПРАЖНЕНИЯ ==================

function упражнение(у, номер) {
    const шапка = ui.html`<span class="p-num">${номер}.</span> ${разметка(у.q)}`;

    switch (у.type) {
        case 'choice':
            return ui.html`
                <div class="p-ex">
                    <div class="p-q">${шапка}</div>
                    ${у.text ? ui.html`<div class="p-ctx de">${у.text}</div>` : ''}
                    <div class="p-opts">${у.options.map((о, i) => ui.html`<div class="p-opt"><span class="p-box"></span><b>${БУКВЫ[i]})</b> <span class="de">${о}</span></div>`)}</div>
                </div>`;

        case 'gap': {
            const текст = ui.esc(у.text).replace(/___/g, '<span class="p-gap"></span>');
            return ui.html`
                <div class="p-ex">
                    <div class="p-q">${шапка}</div>
                    <div class="p-sent de">${ui.raw(текст)}${у.hint ? ui.html` <span class="p-hint">(${у.hint})</span>` : ''}</div>
                </div>`;
        }

        case 'build': {
            const слова = перемешатьПоId(разложитьПлашки(у.answer[0]), у.id);
            return ui.html`
                <div class="p-ex">
                    <div class="p-q">${шапка}</div>
                    <div class="p-ru">${у.ru}</div>
                    <div class="p-words de">${слова.map((с) => ui.html`<span class="p-word">${с}</span>`)}</div>
                    ${линия()}
                </div>`;
        }

        case 'fix':
            return ui.html`
                <div class="p-ex">
                    <div class="p-q">${шапка}</div>
                    <div class="p-ctx de">${у.text}</div>
                    ${линия()}
                </div>`;

        case 'join':
            return ui.html`
                <div class="p-ex">
                    <div class="p-q">${шапка}</div>
                    <div class="p-ctx de">${у.parts.map((п) => ui.html`<div>${п}</div>`)}<div class="p-conn">${у.connector}</div></div>
                    ${линия()}
                </div>`;

        case 'translate':
            return ui.html`
                <div class="p-ex">
                    <div class="p-q">${шапка}</div>
                    <div class="p-ru">${у.ru}</div>
                    ${линия()}
                </div>`;

        case 'order': {
            const части = перемешатьПоId(у.items, у.id);
            return ui.html`
                <div class="p-ex">
                    <div class="p-q">${шапка} <span class="p-hint">(поставьте цифры 1–${у.items.length})</span></div>
                    <div class="p-opts">${части.map((ч) => ui.html`<div class="p-opt"><span class="p-box wide"></span> <span class="de">${ч}</span></div>`)}</div>
                </div>`;
        }

        default:
            return '';
    }
}

/** Ответ одной строкой для раздела с ключами. */
function ключ(у) {
    switch (у.type) {
        case 'choice': return `${БУКВЫ[у.answer]}) ${у.options[у.answer]}`;
        case 'gap': return заполнить(у.text, у.answer);
        case 'order': return у.items.join(' ▸ ');
        default: return у.answer.length > 1 ? `${у.answer[0]}  (тоже: ${у.answer.slice(1).join(' · ')})` : у.answer[0];
    }
}

function ключиМодуля(м, упр) {
    return ui.html`
        <div class="p-keys-block">
            <h3>${м.id.toUpperCase()}. ${м.short || м.title}</h3>
            <ol class="p-keys">${упр.map((у) => ui.html`<li><span class="de">${ключ(у)}</span><span class="p-why">${разметка(у.explain)}</span></li>`)}</ol>
        </div>`;
}

// ================== РАЗДЕЛЫ ==================

function титул() {
    return ui.html`
        <section class="p-title">
            <h1>${НАЗВАНИЕ}</h1>
            <p class="p-sub">Учебник для письменной части Deutsch-Test für Zuwanderer, уровень B1</p>
            <p class="p-note">Для русскоговорящих. Печатная версия сайта: те же уроки, упражнения и письма. Упражнения напечатаны без ответов, ключи — в конце книги.</p>
        </section>

        <section class="p-how">
            <h2>Как пользоваться</h2>
            <ol>
                <li>Прочитайте раздел «Об экзамене»: задание, баллы, критерии.</li>
                <li>Идите по модулям грамматики. В каждом: теория, упражнения, мини-письмо. Делайте упражнения ручкой: на экзамене клавиатуры не будет.</li>
                <li>После модуля сверьтесь с ключами в конце книги. Ошибки выпишите и вернитесь к ним через день.</li>
                <li>Пишите письма из раздела «Письма» от руки, на время. Сравнивайте с образцом и оценивайте себя по четырём критериям.</li>
                <li>Перед экзаменом пробегите шпаргалку и клинику ошибок.</li>
            </ol>
        </section>`;
}

function оглавление() {
    return ui.html`
        <section class="p-toc">
            <h2>Содержание</h2>
            <ol>
                <li>Об экзамене</li>
                <li>Шпаргалка${ШПАРГАЛКА.length ? ` — ${ШПАРГАЛКА.length} страниц схем и конструкций, ${СПРАВОЧНИК.length} таблиц форм` : ''}</li>
                <li>Грамматика: ${ГРАММАТИКА.map((м) => `${м.order}. ${м.short || м.title}`).join('; ')}</li>
                <li>Письмо: ${ТЕХНИКА.map((м) => м.short || м.title).join('; ')}; ${СИТУАЦИИ.length} ситуаций, ${СИТУАЦИИ.length * 2} заданий</li>
                <li>Клиника ошибок</li>
                <li>Фразы для письма</li>
                <li>Ключи к упражнениям</li>
            </ol>
        </section>`;
}

function разделСправочников(список, заголовок) {
    return ui.html`${список.map((р) => ui.html`
        <section class="p-ref">
            <h3>${р.title}</h3>
            ${блоки(р.blocks)}
        </section>`)}`;
}

function модуль(м) {
    return ui.html`
        <section class="p-module">
            <div class="p-kicker">${м.id.startsWith('g') ? `Модуль ${м.order}` : м.id.startsWith('r') ? `Lesen · Teil ${м.teil}` : 'Техника письма'}</div>
            <h2>${м.title}</h2>
            <p class="p-goal">${м.goal}</p>
            ${блоки(м.theory)}

            <h3 class="p-ex-title">Упражнения</h3>
            <div class="p-exs">${м.exercises.map((у, i) => упражнение(у, i + 1))}</div>

            ${м.apply ? ui.html`
                <div class="p-apply">
                    <h3>Мини-письмо</h3>
                    <p>${разметка(м.apply.task)}</p>
                    ${линия(7)}
                    <ul class="p-checks">${м.apply.checks.map((ч) => ui.html`<li><span class="p-box"></span> ${разметка(ч)}</li>`)}</ul>
                </div>` : ''}
        </section>`;
}

function задание(з, с) {
    return ui.html`
        <div class="p-task">
            <div class="p-task-label">Aufgabe ${з.label}</div>
            <p class="de">${з.situation}</p>
            <p class="de"><b>Schreiben Sie auch eine Anrede und einen Gruß.</b></p>
            <p class="de">Schreiben Sie etwas über folgende Punkte:</p>
            <ul class="de">${з.points.map((п) => ui.html`<li>${п.de}</li>`)}</ul>
        </div>
        ${линия(12)}`;
}

function образец(з) {
    return ui.html`
        <div class="p-model">
            <h4>Образец, Aufgabe ${з.label}</h4>
            <div class="p-model-text de">${з.model.text}</div>
            <div class="p-model-ru">${з.model.ru}</div>
            <ul class="p-notes">${з.model.notes.map((н) => ui.html`<li>${разметка(н)}</li>`)}</ul>
            ${з.weak ? ui.html`
                <h4>Слабый ответ и разбор</h4>
                <div class="p-model-text de weak">${з.weak.text}</div>
                <ul class="p-fixes">${з.weak.fixes.map((ф) => ui.html`<li><span class="de was">${ф.was}</span> → <span class="de wird">${ф.wird}</span><br><span class="p-why">${разметка(ф.why)}</span></li>`)}</ul>` : ''}
        </div>`;
}

function ситуация(с) {
    return ui.html`
        <section class="p-situation">
            <div class="p-kicker">Ситуация ${с.order}</div>
            <h2>${с.title}</h2>
            <p class="p-goal">${с.intro}</p>

            <h3>Опорные фразы</h3>
            <div class="p-phrases">${с.phrases.map((ф) => ui.html`<div class="p-phrase"><span class="de">${ф.de}</span><span class="p-ru2">${ф.ru}</span></div>`)}</div>

            <h3>Задания</h3>
            ${с.tasks.map((з) => задание(з, с))}

            <h3 class="p-ex-title">Упражнения</h3>
            <div class="p-exs">${(с.drills || []).map((у, i) => упражнение(у, i + 1))}</div>

            <h3 class="p-break">Образцы</h3>
            ${с.tasks.map(образец)}
        </section>`;
}

/** Часть Lesen: стратегия и упражнения, затем наборы заданий. */
function частьЧтения(ч) {
    return ui.html`
        ${модуль(ч)}
        ${ч.sets.map((с, i) => ui.html`
            <section class="p-set">
                <div class="p-kicker">Lesen · Teil ${ч.teil} · набор ${i + 1}</div>
                <h3>${с.title}</h3>
                ${блокНабора(ч, с, {}, false, { экзамен: true })}
            </section>`)}`;
}

function ключиЧтения() {
    return ui.html`
        ${ЧТЕНИЕ.map((ч) => ui.html`
            <div class="p-keys-block">
                <h3>Lesen · Teil ${ч.teil}: наборы заданий</h3>
                ${ч.sets.map((с, i) => ui.html`
                    <h4>Набор ${i + 1}: ${с.title}</h4>
                    <ol class="p-keys">${с.items.map((п) => ui.html`<li><span class="de">${подписьОтвета(п, ч.teil, п.answer)}</span><span class="p-why">${разметка(п.why)}</span></li>`)}</ol>
                    <p class="p-why">Слова: ${(с.glossary || []).map((г) => `${г.de} — ${г.ru}`).join('; ')}</p>`)}
            </div>`)}`;
}

function клиника() {
    return ui.html`
        <section class="p-clinic">
            <h2>Клиника ошибок</h2>
            ${ОШИБКИ.map((с) => ui.html`
                <h3>${с.title}</h3>
                ${с.items.map((э) => ui.html`
                    <div class="p-err">
                        <div class="b-trap-wrong"><span class="b-mark">✗</span><span class="de">${э.wrong}</span></div>
                        <div class="b-trap-right"><span class="b-mark">✓</span><span class="de">${э.right}</span></div>
                        <div class="p-why"><b>${разметка(э.rule)}</b> ${разметка(э.why)}</div>
                    </div>`)}`)}
        </section>`;
}

function фразы() {
    return ui.html`
        <section class="p-phrases-all">
            <h2>Фразы для письма</h2>
            ${ФРАЗЫ.map((г) => ui.html`
                <h3>${г.title}</h3>
                <div class="p-phrases">${г.items.map((ф) => ui.html`<div class="p-phrase"><span class="de">${ф.de}</span><span class="p-ru2">${ф.ru}${ф.note ? ` · ${ф.note}` : ''}</span></div>`)}</div>`)}
        </section>`;
}

function ключиВсе() {
    const модули = [...ГРАММАТИКА, ...ТЕХНИКА];
    return ui.html`
        <section class="p-keys-all">
            <h2>Ключи к упражнениям</h2>
            ${модули.map((м) => ключиМодуля(м, м.exercises))}
            ${СИТУАЦИИ.map((с) => ключиМодуля({ id: с.id, short: с.title }, с.drills || []))}
            ${ЧТЕНИЕ.map((ч) => ключиМодуля(ч, ч.exercises))}
            ${ключиЧтения()}
        </section>`;
}

const документ = ui.html`
    ${титул()}
    ${оглавление()}

    <section class="p-part"><h1 class="p-part-title">Об экзамене</h1>
        ${ЭКЗАМЕН.map((р) => ui.html`<h2>${р.title}</h2>${блоки(р.blocks)}`)}
    </section>

    <section class="p-part"><h1 class="p-part-title">Шпаргалка</h1>
        ${разделСправочников([...ШПАРГАЛКА, ...СПРАВОЧНИК_ЧТЕНИЯ, ...СПРАВОЧНИК])}
    </section>

    <section class="p-part"><h1 class="p-part-title">Грамматика</h1></section>
    ${ГРАММАТИКА.map(модуль)}

    <section class="p-part"><h1 class="p-part-title">Письмо</h1></section>
    ${ТЕХНИКА.map(модуль)}
    ${СИТУАЦИИ.map(ситуация)}

    ${ЧТЕНИЕ.length ? ui.html`
        <section class="p-part"><h1 class="p-part-title">Lesen: чтение</h1>
            <p class="p-goal">Пять частей экзамена: у каждой своя стратегия, упражнения и шесть наборов заданий, как на экзамене. Отмечайте ответы ручкой, ключи — в конце книги.</p>
        </section>
        ${ЧТЕНИЕ.map(частьЧтения)}` : ''}

    <section class="p-part"><h1 class="p-part-title">Клиника ошибок и фразы</h1></section>
    ${клиника()}
    ${фразы()}

    <section class="p-part"><h1 class="p-part-title">Ключи</h1></section>
    ${ключиВсе()}
`;

document.getElementById('doc').innerHTML = String(документ);
document.body.dataset.ready = '1';
