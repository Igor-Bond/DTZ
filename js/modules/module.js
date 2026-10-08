/**
 * Модуль: обзор, теория, мини-письмо.
 */

import { ui } from '../core/ui.js';
import { actions } from '../core/actions.js';
import { app } from '../app.js';
import { модульПоId, разделыШпаргалки } from '../data/catalog.js';
import { хранилище } from '../core/store.js';
import { прогрессМодуля } from '../core/progress.js';
import { сессия } from '../core/session.js';
import { сколькоСлов } from '../core/check.js';
import { ТЕМЫ } from '../data/tags.js';
import { разметка, немецкий } from '../core/markup.js';
import { страница, сообщить } from './shell.js';
import { блоки } from './blocks.js';
import { клавиши, подписьСлов } from './input.js';

function нетМодуля() {
    return страница({ заголовок: 'Не найдено', назад: '#/', содержимое: ui.html`<div class="empty-note">Такого модуля нет.</div>` });
}

function точки(м) {
    return (м.exercises || []).map((у) => {
        const з = хранилище.упражнение(у.id);
        const класс = !з ? '' : хранилище.освоено(у.id) ? 'ok' : з.последний ? 'seen' : 'bad';
        return ui.html`<span class="dot ${класс}"></span>`;
    });
}

export const moduleScreen = {

    render(id) {
        const м = модульПоId(id);
        if (!м) return нетМодуля();

        const п = прогрессМодуля(м);
        const шпаргалки = разделыШпаргалки().filter((р) => р.drill === м.id);
        const слабые = Object.entries(хранилище.всё().темы)
            .filter(([тема, н]) => ТЕМЫ[тема]?.module === м.id && н.ошибок > 0)
            .sort((а, б) => б[1].ошибок - а[1].ошибок);

        return страница({
            вкладка: 'path',
            заголовок: м.short || м.title,
            назад: '#/',
            содержимое: ui.html`
                <div class="card">
                    <div class="q-type">${м.id.startsWith('g') ? `Модуль ${м.order}` : 'Техника письма'}</div>
                    <h2 style="margin-top:4px">${м.title}</h2>
                    <p class="lead" style="margin-top:8px">${м.goal}</p>
                    <p class="muted small" style="margin-top:8px">${м.why}</p>
                </div>

                <div class="card">
                    <div style="display:flex;justify-content:space-between;align-items:baseline">
                        <b>Освоено ${п.освоено} из ${п.всего}</b>
                        <span class="muted small">${п.раундов ? `раундов: ${п.раундов}, лучший ${п.лучший}%` : 'ещё не начато'}</span>
                    </div>
                    <div class="bar ${п.пройден ? 'ok' : ''}" style="--p:${п.процент};margin-top:8px"><i></i></div>
                    <div class="dots">${точки(м)}</div>
                </div>

                <div class="row col" style="margin-top:12px">
                    <a class="btn ${п.теория ? 'soft' : 'primary'} block" href="#/theory/${м.id}">${п.теория ? '✓ ' : ''}Теория — ${м.theory.length} блоков, 8–12 минут</a>
                    <a class="btn ${п.теория ? 'primary' : 'soft'} block" href="#/drill/${м.id}">Тренировка: раунд из 10 упражнений</a>
                    ${м.apply ? ui.html`<a class="btn soft block" href="#/mini/${м.id}">${п.мини ? '✓ ' : ''}Мини-письмо с самопроверкой</a>` : ''}
                </div>

                ${слабые.length ? ui.html`
                    <div class="sec">Где вы ошибались</div>
                    <div class="rows">${слабые.map(([тема, н]) => ui.html`
                        <a class="rowl" href="#/drill/tag:${тема}" style="color:inherit;text-decoration:none">
                            <div class="rowl-main">${ТЕМЫ[тема].title}</div>
                            <div class="rowl-end">${н.ошибок} ошиб.</div>
                        </a>`)}
                    </div>` : ''}

                ${шпаргалки.length ? ui.html`
                    <div class="sec">Шпаргалка по теме</div>
                    <div class="links">${шпаргалки.map((р) => ui.html`
                        <a class="link" href="#/cheat/${р.id}"><span class="link-ico">☰</span><span class="link-main"><span class="link-title">${р.title}</span></span><span class="link-end">›</span></a>`)}
                    </div>` : ''}
            `
        });
    }
};

export const theory = {

    render(id) {
        const м = модульПоId(id);
        if (!м) return нетМодуля();

        return страница({
            вкладка: 'path',
            заголовок: 'Теория',
            назад: `#/module/${м.id}`,
            содержимое: ui.html`
                <div class="hero"><h1 style="font-size:22px">${м.title}</h1><p>${м.goal}</p></div>
                ${блоки(м.theory)}
                <div class="row col" style="margin-top:24px">
                    <button class="btn primary block" data-action="теория-готово" data-id="${м.id}">Прочитано — к тренировке</button>
                    <a class="btn ghost block" href="#/module/${м.id}">К обзору модуля</a>
                </div>`
        });
    }
};

actions.on('теория-готово', (el) => {
    хранилище.отметитьТеорию(el.dataset.id);
    сессия.сбросить();
    app.go('drill', el.dataset.id);
});

// ---------------- мини-письмо ----------------

let МИНИ = { id: null, образец: false };

export const mini = {

    render(id) {
        const м = модульПоId(id);
        if (!м || !м.apply) return нетМодуля();

        if (МИНИ.id !== id) МИНИ = { id, образец: false };

        const ключ = `${м.id}-mini`;
        const текст = хранилище.письмо(ключ).черновик;
        const отмечено = хранилище.модуль(м.id).мини;

        return страница({
            вкладка: 'path',
            заголовок: 'Мини-письмо',
            назад: `#/module/${м.id}`,
            содержимое: ui.html`
                <div class="card">
                    <div class="q-type">${м.title}</div>
                    <p class="q-text" style="font-weight:500">${разметка(м.apply.task)}</p>
                </div>

                <textarea class="letter" style="min-height:160px" id="mini-text" data-draft="${ключ}" data-counter="mini-count" spellcheck="false" autocapitalize="sentences" placeholder="Пишите здесь по-немецки">${текст}</textarea>
                <div class="counter"><span id="mini-count">${подписьСлов(сколькоСлов(текст), { от: 25, до: 90 })}</span></div>
                ${клавиши()}

                <div class="sec">Проверьте себя</div>
                <div class="checks">
                    ${м.apply.checks.map((ч, i) => ui.html`
                        <label class="check"><input type="checkbox" data-change="мини-пункт" data-i="${i}"><span>${разметка(ч)}</span></label>`)}
                </div>

                <div class="row col" style="margin-top:16px">
                    <button class="btn soft block" data-action="мини-образец">${МИНИ.образец ? 'Скрыть образец' : 'Показать образец'}</button>
                    <button class="btn primary block" data-action="мини-готово" data-id="${м.id}">${отмечено ? '✓ Отмечено выполненным' : 'Готово'}</button>
                </div>

                ${МИНИ.образец ? ui.html`
                    <div class="model-text">${немецкий(м.apply.model)}</div>
                    <div class="model-ru">${м.apply.modelRu}</div>` : ''}
            `
        });
    }
};

actions.on('мини-образец', () => {
    МИНИ.образец = !МИНИ.образец;
    app.render(true);
});

actions.on('мини-готово', (el) => {
    хранилище.отметитьМини(el.dataset.id, true);
    сообщить('Отмечено: мини-письмо выполнено');
    app.go('module', el.dataset.id);
});
