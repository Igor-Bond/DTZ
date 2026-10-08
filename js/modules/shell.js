/**
 * Общая оболочка страницы: верхняя панель и нижняя навигация.
 *
 * Навигация внизу, а не сверху: курсом пользуются с телефона одной рукой,
 * и нижний край — единственное место, до которого дотягивается большой
 * палец.
 */

import { ui } from '../core/ui.js';
import { хранилище } from '../core/store.js';

const ВКЛАДКИ = [
    { id: 'path', href: '#/', ico: '◉', title: 'Путь' },
    { id: 'letters', href: '#/letters', ico: '✉', title: 'Письма' },
    { id: 'lesen', href: '#/lesen', ico: '📖', title: 'Lesen' },
    { id: 'cheat', href: '#/cheat', ico: '☰', title: 'Шпаргалка' },
    { id: 'review', href: '#/review', ico: '↻', title: 'Повтор' },
    { id: 'more', href: '#/more', ico: '⋯', title: 'Ещё' }
];

/**
 * Страница.
 *   вкладка    — какая вкладка подсвечена (или null — внутренний экран);
 *   заголовок  — в верхней панели;
 *   назад      — адрес кнопки «назад» (например '#/module/g01');
 *   бок        — текст справа в панели (счётчик, таймер — готовая разметка);
 *   безВкладок — для занятия и письма: нижняя навигация только отвлекает.
 */
export function страница({ вкладка = null, заголовок = '', назад = null, бок = '', содержимое = '', безВкладок = false }) {
    const кПовтору = безВкладок ? 0 : хранилище.кПовторению().length;

    return ui.html`
        <div class="page">
            <div class="topbar">
                ${назад ? ui.html`<a class="back" href="${назад}">‹ Назад</a>` : ''}
                <div class="topbar-title">${заголовок}</div>
                <div class="topbar-side">${бок}</div>
            </div>
            ${содержимое}
        </div>
        ${безВкладок ? '' : ui.html`
            <nav class="tabbar"><div class="tabbar-in">
                ${ВКЛАДКИ.map((т) => ui.html`
                    <a class="tab ${т.id === вкладка ? 'on' : ''}" href="${т.href}">
                        <span class="tab-ico">${т.ico}</span>${т.title}
                        ${т.id === 'review' && кПовтору ? ui.html`<span class="badge">${кПовтору > 99 ? '99+' : кПовтору}</span>` : ''}
                    </a>`)}
            </div></nav>`}
    `;
}

/** Короткое сообщение внизу экрана: «Скопировано», «Сохранено». */
export function сообщить(текст) {
    const был = document.querySelector('.toast');
    был?.remove();

    const узел = document.createElement('div');
    узел.className = 'toast';
    узел.textContent = текст;
    document.body.appendChild(узел);

    setTimeout(() => узел.remove(), 2400);
}
