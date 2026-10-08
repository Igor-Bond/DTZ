/**
 * Поля ввода: умлауты, черновики, счётчик слов.
 *
 * Русской раскладке нечем набрать ä, ö, ü и ß, а на телефоне они прячутся за
 * долгим нажатием. Без кнопок под рукой читатель пишет «ae» и «ss» — и
 * привыкает к написанию, которое на экзамене от руки сочтут ошибкой. Поэтому
 * под каждым полем немецкого текста стоят четыре кнопки.
 *
 * Слушатели ввода вешаются на document один раз, при загрузке модуля: после
 * перерисовки экрана поля — новые узлы, а слушатели на них пропали бы.
 */

import { ui } from '../core/ui.js';
import { actions } from '../core/actions.js';
import { хранилище } from '../core/store.js';
import { сколькоСлов } from '../core/check.js';

let последнееПоле = null;

/** Кнопки умлаутов. `mousedown` не даёт полю потерять фокус. */
export function клавиши() {
    return ui.html`
        <div class="umlauts">
            ${['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map((с) => ui.html`<button type="button" class="key" data-action="символ" data-ch="${с}">${с}</button>`)}
        </div>`;
}

/** Вставить символ в то поле, где курсор был последним. */
export function вставить(текст, поле = последнееПоле) {
    if (!поле || !document.contains(поле) || поле.disabled) return;

    const от = поле.selectionStart ?? поле.value.length;
    const до = поле.selectionEnd ?? поле.value.length;

    поле.value = поле.value.slice(0, от) + текст + поле.value.slice(до);
    поле.selectionStart = поле.selectionEnd = от + текст.length;
    поле.focus();

    // Событие input — чтобы сработали черновик и счётчик
    поле.dispatchEvent(new Event('input', { bubbles: true }));
}

/** Подпись счётчика слов: зелёная в рабочем диапазоне образцов B1. */
export function подписьСлов(слов, цель = { от: 70, до: 110 }) {
    const класс = слов >= цель.от && слов <= цель.до ? 'ok' : слов > 0 ? 'warn' : '';
    return ui.html`Слов: <b class="${класс}">${слов}</b>`;
}

actions.on('символ', (el) => вставить(el.dataset.ch));

if (!globalThis.__BRIEFE_INPUT__) {
    globalThis.__BRIEFE_INPUT__ = true;

    // Нажатие на кнопку умлаута не должно уводить фокус из поля
    document.addEventListener('mousedown', (e) => {
        if (e.target.closest?.('.key')) e.preventDefault();
    });

    document.addEventListener('focusin', (e) => {
        if (e.target.matches?.('input[type="text"], textarea, input:not([type])')) последнееПоле = e.target;
    });

    document.addEventListener('input', (e) => {
        const поле = e.target;
        if (!поле.matches?.('[data-draft]')) return;

        // Черновик пишется на каждое нажатие: письмо за двадцать минут не
        // должно пропасть из-за случайного закрытия вкладки
        хранилище.сохранитьЧерновик(поле.dataset.draft, поле.value);

        const счётчик = document.getElementById(поле.dataset.counter || '');
        if (счётчик) счётчик.innerHTML = String(подписьСлов(сколькоСлов(поле.value)));
    });
}
