/**
 * Главная: что делать дальше, модули, инструменты.
 */

import { ui } from '../core/ui.js';
import { ГРАММАТИКА, ТЕХНИКА, ЧТЕНИЕ, ШПАРГАЛКА, СПРАВОЧНИК, СПРАВОЧНИК_ЧТЕНИЯ } from '../data/catalog.js';
import { хранилище } from '../core/store.js';
import { прогрессМодуля, порядокМодулей, следующийШаг, сводкаПисем } from '../core/progress.js';
import { страница } from './shell.js';
import { кнопкаУстановки } from './install.js';
import { НАЗВАНИЕ } from '../version.js';

function плитка(м, рекомендован) {
    const п = прогрессМодуля(м);
    const класс = п.пройден ? 'done' : рекомендован ? 'rec' : '';

    return ui.html`
        <a class="tile ${класс}" href="#/module/${м.id}">
            <span class="tile-num">${м.id.startsWith('g') ? `МОДУЛЬ ${м.order}` : м.id.startsWith('r') ? `LESEN · TEIL ${м.teil}` : 'ТЕХНИКА'}</span>
            <span class="tile-title">${м.short || м.title}</span>
            <span class="tile-foot">
                ${рекомендован && !п.начат ? ui.html`<span class="tile-flag">Начать здесь</span>` : ''}
                <span class="bar ${п.пройден ? 'ok' : ''}" style="--p:${п.процент}"><i></i></span>
            </span>
        </a>`;
}

export const home = {

    render() {
        const шаг = следующийШаг();
        const порядок = порядокМодулей();
        const д = хранилище.диагностика();

        // Первый непройденный модуль в рекомендованном порядке подсвечивается
        // только после теста: до него «рекомендовать» нечего
        const рекомендованный = д ? порядок.find((м) => !прогрессМодуля(м).пройден) : null;

        const пройдено = ГРАММАТИКА.filter((м) => прогрессМодуля(м).пройден).length;
        const письма = сводкаПисем();
        const кПовтору = хранилище.кПовторению().length;

        const пусто = !ГРАММАТИКА.length;

        return страница({
            вкладка: 'path',
            заголовок: '',
            содержимое: ui.html`
                <div class="hero">
                    <h1>${НАЗВАНИЕ}</h1>
                    <p>Письменная часть экзамена Deutsch-Test für Zuwanderer: четыре пункта, обращение и прощание, грамматика без ошибок.</p>
                    ${кнопкаУстановки()}
                </div>

                ${пусто ? ui.html`<div class="card">Содержимое курса ещё не подключено.</div>` : ''}

                ${шаг ? ui.html`
                    <div class="card accent">
                        <h2>${шаг.заголовок}</h2>
                        <p class="lead">${шаг.подпись}</p>
                        <div class="row" style="margin-top:12px">
                            <a class="btn primary" href="${шаг.href}">${шаг.кнопка}</a>
                            ${д ? '' : ui.html`<a class="btn ghost" href="#/theory/g01">Пропустить тест</a>`}
                        </div>
                    </div>` : ''}

                <div class="stats">
                    <div class="stat"><b>${пройдено}<small class="muted"> / ${ГРАММАТИКА.length}</small></b><span>модулей пройдено</span></div>
                    <div class="stat"><b>${письма.написано}<small class="muted"> / ${письма.всего}</small></b><span>писем написано</span></div>
                    <div class="stat"><b>${кПовтору}</b><span>к повторению</span></div>
                </div>

                <div class="sec">Грамматика</div>
                <div class="tiles">${ГРАММАТИКА.map((м) => плитка(м, рекомендованный && м.id === рекомендованный.id))}</div>

                <div class="sec">Как писать письма</div>
                <div class="tiles">
                    ${ТЕХНИКА.map((м) => плитка(м, false))}
                    <a class="tile" href="#/letters">
                        <span class="tile-num">ПРАКТИКА</span>
                        <span class="tile-title">12 ситуаций, 24 задания</span>
                        <span class="tile-foot"><span class="bar" style="--p:${письма.всего ? Math.round(письма.написано / письма.всего * 100) : 0}"><i></i></span></span>
                    </a>
                </div>

                ${ЧТЕНИЕ.length ? ui.html`
                    <div class="sec">Чтение (Lesen)</div>
                    <div class="tiles">
                        ${ЧТЕНИЕ.map((м) => плитка(м, false))}
                        <a class="tile" href="#/lesen">
                            <span class="tile-num">ПРОБА</span>
                            <span class="tile-title">Lesen: 25 заданий, 45 минут</span>
                            <span class="tile-foot"><span class="tile-flag">Как на экзамене</span></span>
                        </a>
                    </div>` : ''}

                <div class="sec">Инструменты</div>
                <div class="links">
                    <a class="link" href="#/cheat"><span class="link-ico">☰</span><span class="link-main"><span class="link-title">Шпаргалка</span><br><span class="link-sub">${ШПАРГАЛКА.length + СПРАВОЧНИК.length + СПРАВОЧНИК_ЧТЕНИЯ.length} страниц: схемы, союзы, конструкции, таблицы, слова для чтения</span></span><span class="link-end">›</span></a>
                    <a class="link" href="#/phrases"><span class="link-ico">❝</span><span class="link-main"><span class="link-title">Фразы для письма</span><br><span class="link-sub">Готовые заготовки с переводом и карточки</span></span><span class="link-end">›</span></a>
                    <a class="link" href="#/errors"><span class="link-ico">✚</span><span class="link-main"><span class="link-title">Клиника ошибок</span><br><span class="link-sub">Типичные ошибки русскоговорящих и как их лечить</span></span><span class="link-end">›</span></a>
                    <a class="link" href="#/exam"><span class="link-ico">⏱</span><span class="link-main"><span class="link-title">Проба экзамена</span><br><span class="link-sub">30 минут, два задания на выбор</span></span><span class="link-end">›</span></a>
                    <a class="link" href="#/about"><span class="link-ico">ⓘ</span><span class="link-main"><span class="link-title">Как устроена письменная часть DTZ</span><br><span class="link-sub">Задание, критерии, баллы</span></span><span class="link-end">›</span></a>
                </div>
            `
        });
    }
};
