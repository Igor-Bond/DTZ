/**
 * Блоки теории в разметку.
 *
 * Один и тот же набор блоков показывает теорию модулей, справочник,
 * шпаргалку и страницу об экзамене — поэтому он живёт отдельно от экранов.
 */

import { ui } from '../core/ui.js';
import { разметка, немецкий } from '../core/markup.js';

function блок(б) {
    switch (б.type) {
        case 'h':
            return ui.html`<h3 class="b-h">${разметка(б.text)}</h3>`;

        case 'p':
            return ui.html`<p class="b-p">${разметка(б.text)}</p>`;

        case 'rule':
            return ui.html`<div class="b-rule"><span class="b-label">Правило</span>${разметка(б.text)}</div>`;

        case 'tip':
            return ui.html`<div class="b-tip"><span class="b-label">Совет</span>${разметка(б.text)}</div>`;

        case 'list':
            return ui.html`<ul class="b-list">${б.items.map((х) => ui.html`<li>${разметка(х)}</li>`)}</ul>`;

        case 'table':
            return ui.html`
                <div class="b-table">
                    <div class="b-table-scroll">
                        <table>
                            <thead><tr>${б.head.map((х) => ui.html`<th>${разметка(х)}</th>`)}</tr></thead>
                            <tbody>${б.rows.map((р) => ui.html`<tr>${р.map((я) => ui.html`<td>${разметка(я)}</td>`)}</tr>`)}</tbody>
                        </table>
                    </div>
                    ${б.note ? ui.html`<div class="b-note">${разметка(б.note)}</div>` : ''}
                </div>`;

        case 'ex':
            return ui.html`
                <div class="b-ex">
                    <div class="b-ex-de de">${немецкий(б.de)}</div>
                    <div class="b-ex-ru">${разметка(б.ru)}</div>
                </div>`;

        case 'exs':
            return ui.html`
                <div class="b-exs">${б.items.map((х) => ui.html`
                    <div class="b-ex">
                        <div class="b-ex-de de">${немецкий(х.de)}</div>
                        <div class="b-ex-ru">${разметка(х.ru)}</div>
                    </div>`)}
                </div>`;

        case 'trap':
            return ui.html`
                <div class="b-trap">
                    <div class="b-trap-wrong"><span class="b-mark">✗</span><span class="de">${немецкий(б.wrong)}</span></div>
                    <div class="b-trap-right"><span class="b-mark">✓</span><span class="de">${немецкий(б.right)}</span></div>
                    <div class="b-trap-why">${разметка(б.why)}</div>
                </div>`;

        case 'formula':
            return ui.html`
                <div class="b-formula">
                    <div class="b-formula-row">${б.parts.map((х, i) => ui.html`
                        ${i ? ui.html`<span class="b-formula-sep">›</span>` : ''}<span class="b-formula-part">${разметка(х)}</span>`)}
                    </div>
                    ${б.note ? ui.html`<div class="b-note">${разметка(б.note)}</div>` : ''}
                </div>`;

        default:
            return '';
    }
}

export function блоки(список) {
    return ui.html`<div class="blocks">${(список || []).map(блок)}</div>`;
}

/** Текст блоков простой строкой: для поиска по шпаргалке. */
export function текстБлоков(список) {
    const куски = [];

    for (const б of список || []) {
        for (const поле of ['text', 'de', 'ru', 'wrong', 'right', 'why', 'note']) {
            if (typeof б[поле] === 'string') куски.push(б[поле]);
        }
        if (б.items) куски.push(...б.items.map((х) => (typeof х === 'string' ? х : `${х.de} ${х.ru}`)));
        if (б.parts) куски.push(...б.parts);
        if (б.head) куски.push(...б.head);
        if (б.rows) куски.push(...б.rows.flat());
    }

    return куски.join(' ').replace(/\*\*/g, '').replace(/`/g, '').toLowerCase();
}
