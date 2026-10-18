/**
 * Инструменты: повторение, клиника ошибок, фразы, шпаргалка, об экзамене,
 * прогресс.
 */

import { ui } from '../core/ui.js';
import { actions } from '../core/actions.js';
import { app } from '../app.js';
import {
    ГРАММАТИКА, ТЕХНИКА, ЧТЕНИЕ, СИТУАЦИИ, ОШИБКИ, ФРАЗЫ, ЭКЗАМЕН,
    разделыШпаргалки, разделШпаргалкиПоId, всеУпражнения
} from '../data/catalog.js';
import { ТЕМЫ } from '../data/tags.js';
import { хранилище, ПОСЛЕДНИЙ_ЯЩИК } from '../core/store.js';
import { прогрессМодуля } from '../core/progress.js';
import { разметка } from '../core/markup.js';
import { страница, сообщить } from './shell.js';
import { разделУстановки } from './install.js';
import { блоки, текстБлоков } from './blocks.js';
import { НАЗВАНИЕ, ВЕРСИЯ } from '../version.js';

// ================== ПОВТОРЕНИЕ ==================

export const review = {

    render() {
        const все = всеУпражнения();
        const сейчас = Date.now();
        const кПовтору = хранилище.кПовторению(сейчас).length;
        const ошибки = все.filter((у) => хранилище.последний(у.id) === false).length;
        const отвечено = все.filter((у) => хранилище.упражнение(у.id)).length;

        const ящики = Array.from({ length: ПОСЛЕДНИЙ_ЯЩИК + 1 }, () => 0);
        for (const у of все) {
            const з = хранилище.упражнение(у.id);
            if (з) ящики[з.ящик] += 1;
        }

        const фразДоПовтора = ФРАЗЫ.flatMap((г) => г.items.map((_, i) => `${г.id}:${i}`))
            .filter((к) => { const з = хранилище.фраза(к); return з && з.срок <= сейчас; }).length;

        return страница({
            вкладка: 'review',
            заголовок: 'Повторение',
            содержимое: ui.html`
                <div class="hero">
                    <h1>Повторение</h1>
                    <p>Упражнение, в котором вы ошиблись, вернётся скоро. Решённое верно — реже: через день, через три, через неделю, через три недели.</p>
                </div>

                <div class="stats">
                    <div class="stat"><b>${кПовтору}</b><span>пора повторить</span></div>
                    <div class="stat"><b>${ошибки}</b><span>с ошибкой в последний раз</span></div>
                    <div class="stat"><b>${отвечено}</b><span>всего отвечено</span></div>
                </div>

                <div class="row col" style="margin-top:14px">
                    <a class="btn primary block" href="#/drill/review" ${кПовтору ? '' : 'aria-disabled="true"'}>Повторить (${Math.min(кПовтору, 15)})</a>
                    ${ошибки ? ui.html`<a class="btn soft block" href="#/drill/mistakes">Работа над ошибками (${Math.min(ошибки, 15)})</a>` : ''}
                    <a class="btn block" href="#/cards">Фразы: карточки${фразДоПовтора ? ` (${фразДоПовтора})` : ''}</a>
                </div>

                ${кПовтору ? '' : ui.html`<p class="muted" style="margin:14px 2px">${отвечено ? 'Сейчас повторять нечего. Загляните позже или сделайте новый раунд в модуле.' : 'Повторять пока нечего: сделайте раунд в любом модуле, и его упражнения появятся здесь.'}</p>`}

                <div class="sec">Ящики</div>
                <div class="rows">${ящики.map((н, i) => ui.html`
                    <div class="rowl"><div class="rowl-main">${['Только что или с ошибкой', 'Через 1 день', 'Через 3 дня', 'Через неделю', 'Выучено (через 3 недели)'][i]}</div><div class="rowl-end">${н}</div></div>`)}
                </div>`
        });
    }
};

// ================== КЛИНИКА ОШИБОК ==================

export const errors = {

    render() {
        const темы = Object.entries(хранилище.всё().темы)
            .filter(([, н]) => н.ошибок > 0)
            .sort((а, б) => б[1].ошибок - а[1].ошибок)
            .slice(0, 5);

        return страница({
            вкладка: 'more',
            заголовок: 'Клиника ошибок',
            назад: '#/more',
            содержимое: ui.html`
                <div class="hero"><h1>Клиника ошибок</h1><p>Ошибки, которые русскоговорящие делают в письмах чаще всего: что неверно, как правильно, почему так получается.</p></div>

                ${темы.length ? ui.html`
                    <div class="sec">Ваши частые ошибки</div>
                    <div class="rows">${темы.map(([тема, н]) => ui.html`
                        <a class="rowl" href="#/drill/tag:${тема}" style="color:inherit;text-decoration:none">
                            <div class="rowl-main">${ТЕМЫ[тема]?.title || тема}</div>
                            <span class="chip bad">${н.ошибок} ошиб.</span>
                        </a>`)}
                    </div>` : ''}

                ${ОШИБКИ.map((с) => ui.html`
                    <details class="fold">
                        <summary>${с.title} <span class="muted small">· ${с.items.length}</span></summary>
                        <div class="fold-body">
                            <a class="btn soft small" href="#/drill/${с.id}">Потренировать всё семейство</a>
                            ${с.items.map((э) => ui.html`
                                <div class="err-item">
                                    <div class="b-trap-wrong"><span class="b-mark">✗</span><span class="de">${э.wrong}</span></div>
                                    <div class="b-trap-right"><span class="b-mark">✓</span><span class="de">${э.right}</span></div>
                                    <div class="err-rule">${разметка(э.rule)}</div>
                                    <div class="err-why">${разметка(э.why)}</div>
                                    <div class="row" style="margin-top:8px">
                                        <a class="btn small" href="#/drill/${э.id}">Потренировать</a>
                                        ${ТЕМЫ[э.tag] ? ui.html`<a class="btn small ghost" href="#/module/${ТЕМЫ[э.tag].module}">К модулю</a>` : ''}
                                    </div>
                                </div>`)}
                        </div>
                    </details>`)}
                ${ОШИБКИ.length ? '' : ui.html`<div class="empty-note">Клиника ещё не подключена.</div>`}`
        });
    }
};

// ================== ФРАЗЫ ==================

export const phrases = {

    render() {
        const всего = ФРАЗЫ.reduce((н, г) => н + г.items.length, 0);

        return страница({
            вкладка: 'more',
            заголовок: 'Фразы для письма',
            назад: '#/more',
            содержимое: ui.html`
                <div class="hero"><h1>Фразы для письма</h1><p>${всего} готовых заготовок с переводом: вставляйте целиком, меняйте только то, что в многоточии.</p></div>
                <div class="row col" style="margin-top:12px"><a class="btn primary block" href="#/cards">Учить карточками</a></div>

                ${ФРАЗЫ.map((г) => ui.html`
                    <details class="fold">
                        <summary>${г.title} <span class="muted small">· ${г.items.length}</span></summary>
                        <div class="fold-body">${г.items.map((ф) => ui.html`
                            <div class="phrase"><span class="de">${ф.de}</span><span class="phrase-ru">${ф.ru}</span>${ф.note ? ui.html`<span class="phrase-note">${ф.note}</span>` : ''}</div>`)}
                        </div>
                    </details>`)}
                ${ФРАЗЫ.length ? '' : ui.html`<div class="empty-note">Фразы ещё не подключены.</div>`}`
        });
    }
};

/** Карточки фраз: русский на лицевой стороне, немецкий на обороте. */
let КАРТЫ = null;
const КАРТОЧЕК = 15;

function собратьКарточки() {
    const сейчас = Date.now();
    const все = ФРАЗЫ.flatMap((г) => г.items.map((ф, i) => ({ ключ: `${г.id}:${i}`, ф, группа: г.title })));

    const пора = все.filter((к) => { const з = хранилище.фраза(к.ключ); return з && з.срок <= сейчас; });
    const новые = все.filter((к) => !хранилище.фраза(к.ключ));
    const мешать = (с) => [...с].sort(() => Math.random() - 0.5);

    return { очередь: [...мешать(пора), ...мешать(новые)].slice(0, КАРТОЧЕК), i: 0, показано: false, знал: 0, закончено: false };
}

export const cards = {

    render() {
        if (!КАРТЫ) КАРТЫ = собратьКарточки();

        const к = КАРТЫ;

        if (!к.очередь.length) {
            return страница({ вкладка: 'more', заголовок: 'Карточки', назад: '#/phrases', содержимое: ui.html`<div class="empty-note">Пока нет карточек для повторения.</div>` });
        }

        if (к.закончено) {
            return страница({
                вкладка: 'more',
                заголовок: 'Карточки',
                назад: '#/phrases',
                содержимое: ui.html`
                    <div class="ring-wrap"><div class="ring ok" style="--p:${Math.round(к.знал / к.очередь.length * 100)}"><span>${к.знал}/${к.очередь.length}</span></div></div>
                    <div class="res-title">Готово</div>
                    <div class="res-sub">Знали с первого раза: ${к.знал}</div>
                    <div class="row col" style="margin-top:20px">
                        <button class="btn primary block" data-action="карты-ещё">Ещё карточки</button>
                        <a class="btn ghost block" href="#/phrases">К фразам</a>
                    </div>`
            });
        }

        const т = к.очередь[к.i];

        return страница({
            заголовок: 'Карточки',
            назад: '#/phrases',
            бок: `${к.i + 1} / ${к.очередь.length}`,
            безВкладок: true,
            содержимое: ui.html`
                <div class="flash">
                    <div class="muted small">${т.группа}</div>
                    <div class="ru">${т.ф.ru}</div>
                    ${к.показано ? ui.html`<div class="de">${т.ф.de}</div>${т.ф.note ? ui.html`<div class="note">${т.ф.note}</div>` : ''}` : ''}
                </div>
                <div class="row" style="margin-top:14px">
                    ${к.показано
                        ? ui.html`<button class="btn danger" data-action="карта" data-знал="0">Не знал</button><button class="btn primary" data-action="карта" data-знал="1">Знал</button>`
                        : ui.html`<button class="btn primary block" data-action="карта-показать">Показать по-немецки</button>`}
                </div>
                <p class="muted small" style="margin-top:10px;text-align:center">Сначала вспомните фразу сами, потом нажмите «Показать».</p>`
        });
    },

    leave() {
        if (КАРТЫ?.закончено) КАРТЫ = null;
    }
};

actions.on('карты-ещё', () => {
    // Адрес тот же, поэтому hashchange не сработает: состояние сбрасываем сами
    КАРТЫ = null;
    app.render();
});

actions.on('карта-показать', () => {
    КАРТЫ.показано = true;
    app.render(true);
});

actions.on('карта', (el) => {
    const знал = el.dataset['знал'] === '1';
    const т = КАРТЫ.очередь[КАРТЫ.i];

    хранилище.записатьФразу(т.ключ, знал);
    if (знал) КАРТЫ.знал += 1;

    КАРТЫ.i += 1;
    КАРТЫ.показано = false;
    if (КАРТЫ.i >= КАРТЫ.очередь.length) КАРТЫ.закончено = true;

    app.render();
});

// ================== ШПАРГАЛКА ==================

function значокРаздела(р) {
    return р.группа === 'Схемы и конструкции' ? '⇆' : '▦';
}

export const cheat = {

    render(id) {
        const разделы = разделыШпаргалки();

        if (id) {
            const р = разделШпаргалкиПоId(id);

            if (!р) {
                return страница({ вкладка: 'cheat', заголовок: 'Не найдено', назад: '#/cheat', содержимое: ui.html`<div class="empty-note">Такой страницы нет.</div>` });
            }

            const i = разделы.findIndex((х) => х.id === id);
            const пред = разделы[i - 1];
            const след = разделы[i + 1];

            return страница({
                вкладка: 'cheat',
                заголовок: р.title,
                назад: '#/cheat',
                содержимое: ui.html`
                    ${блоки(р.blocks)}
                    ${р.drill ? ui.html`<div class="row col" style="margin-top:22px"><a class="btn primary block" href="#/drill/${р.drill}">Проверить себя</a></div>` : ''}
                    <div class="pager">
                        ${пред ? ui.html`<a class="btn" href="#/cheat/${пред.id}">‹ ${пред.title.length > 22 ? `${пред.title.slice(0, 20)}…` : пред.title}</a>` : ''}
                        ${след ? ui.html`<a class="btn" href="#/cheat/${след.id}">${след.title.length > 22 ? `${след.title.slice(0, 20)}…` : след.title} ›</a>` : ''}
                    </div>`
            });
        }

        const группы = [...new Set(разделы.map((р) => р.группа))];

        return страница({
            вкладка: 'cheat',
            заголовок: 'Шпаргалка',
            содержимое: ui.html`
                <div class="hero"><h1>Шпаргалка</h1><p>Схемы порядка слов, союзы, конструкции с переводами и таблицы форм. Читается за минуты — открывайте перед занятием и перед экзаменом.</p></div>
                <input class="search" id="cheat-search" type="search" placeholder="Поиск: weil, Perfekt, Dativ, könnten…" autocomplete="off" autocapitalize="none" spellcheck="false">
                <div class="muted small" id="cheat-empty" hidden style="margin:12px 2px">Ничего не найдено.</div>

                ${группы.map((г) => ui.html`
                    <div class="sec cheat-group">${г}</div>
                    <div class="links cheat-group-links">
                        ${разделы.filter((р) => р.группа === г).map((р) => ui.html`
                            <a class="link cheat-item" href="#/cheat/${р.id}" data-find="${(р.title + ' ' + текстБлоков(р.blocks)).toLowerCase()}">
                                <span class="link-ico">${значокРаздела(р)}</span>
                                <span class="link-main"><span class="link-title">${р.title}</span></span>
                                <span class="link-end">›</span>
                            </a>`)}
                    </div>`)}
                ${разделы.length ? '' : ui.html`<div class="empty-note">Шпаргалка ещё не подключена.</div>`}`
        });
    }
};

if (!globalThis.__BRIEFE_SEARCH__) {
    globalThis.__BRIEFE_SEARCH__ = true;

    document.addEventListener('input', (e) => {
        if (e.target.id !== 'cheat-search') return;

        const запрос = e.target.value.trim().toLowerCase();
        let найдено = 0;

        for (const а of document.querySelectorAll('.cheat-item')) {
            const совпало = !запрос || а.dataset.find.includes(запрос);
            а.hidden = !совпало;
            if (совпало) найдено += 1;
        }

        // Заголовки групп без единой видимой ссылки прячем
        for (const блок of document.querySelectorAll('.cheat-group-links')) {
            const видно = [...блок.querySelectorAll('.cheat-item')].some((а) => !а.hidden);
            блок.hidden = !видно;
            if (блок.previousElementSibling?.classList.contains('cheat-group')) блок.previousElementSibling.hidden = !видно;
        }

        const пусто = document.getElementById('cheat-empty');
        if (пусто) пусто.hidden = найдено > 0;
    });
}

// ================== ОБ ЭКЗАМЕНЕ ==================

export const about = {

    render() {
        return страница({
            вкладка: 'more',
            заголовок: 'Об экзамене',
            назад: '#/more',
            содержимое: ui.html`
                <div class="hero"><h1>Письменная часть DTZ</h1><p>Что известно об экзамене из официального руководства и образцов.</p></div>
                ${ЭКЗАМЕН.map((р) => ui.html`<h2 style="margin:26px 0 4px;font-size:20px">${р.title}</h2>${блоки(р.blocks)}`)}
                <div class="row col" style="margin-top:24px"><a class="btn primary block" href="#/exam">Пробная работа</a></div>`
        });
    }
};

// ================== ПРОГРЕСС ==================

const КАК_ДАТА = (мс) => (мс ? new Date(мс).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }) : '—');

export const progress = {

    render() {
        const д = хранилище.всё();
        const модули = [...ГРАММАТИКА, ...ТЕХНИКА, ...ЧТЕНИЕ];
        const пробыЧтения = д.пробыЧтения.slice(-5).reverse();
        const написаны = СИТУАЦИИ.flatMap((с) => с.tasks.map((з) => ({ з, с, п: хранилище.письмо(з.id) }))).filter((х) => х.п.попыток);
        const проб = д.пробы.slice(-5).reverse();
        const темы = Object.entries(д.темы).filter(([, н]) => н.верно + н.ошибок > 0)
            .sort((а, б) => б[1].ошибок - а[1].ошибок);
        const диаг = д.диагностика;

        return страница({
            вкладка: 'more',
            заголовок: 'Мой прогресс',
            назад: '#/more',
            содержимое: ui.html`
                ${диаг ? ui.html`<div class="card"><b>Входной тест:</b> ${диаг.верно} из ${диаг.всего}, ${КАК_ДАТА(диаг.когда)}.
                    <a href="#/drill/test">Пройти заново</a></div>` : ''}

                <div class="sec">Модули</div>
                <div class="rows">${модули.map((м) => {
                    const п = прогрессМодуля(м);
                    return ui.html`
                        <a class="rowl" href="#/module/${м.id}" style="color:inherit;text-decoration:none">
                            <div class="rowl-main">${м.id.startsWith('g') ? `${м.order}. ` : ''}${м.short || м.title}
                                <div class="bar ${п.пройден ? 'ok' : ''}" style="--p:${п.процент};margin-top:5px"><i></i></div></div>
                            <div class="rowl-end">${п.освоено}/${п.всего}</div>
                        </a>`;
                })}</div>

                ${ЧТЕНИЕ.length ? ui.html`
                    <div class="sec">Lesen: наборы заданий</div>
                    <div class="rows">${ЧТЕНИЕ.map((ч) => {
                        const результаты = ч.sets.map((с) => ({ с, н: хранилище.набор(с.id) }));
                        const решено = результаты.filter((х) => х.н.попыток);
                        const лучшие = решено.length ? Math.round(решено.reduce((а, х) => а + х.н.лучший / (х.н.всего || 1), 0) / решено.length * 100) : null;
                        return ui.html`
                            <a class="rowl" href="#/module/${ч.id}" style="color:inherit;text-decoration:none">
                                <div class="rowl-main">Teil ${ч.teil}: решено ${решено.length} из ${ч.sets.length}</div>
                                <span class="chip ${лучшие === null ? '' : лучшие >= 75 ? 'ok' : лучшие >= 50 ? 'warn' : 'bad'}">${лучшие === null ? '—' : `${лучшие} %`}</span>
                            </a>`;
                    })}</div>` : ''}

                ${пробыЧтения.length ? ui.html`
                    <div class="sec">Пробы Lesen</div>
                    <div class="rows">${пробыЧтения.map((п) => ui.html`
                        <div class="rowl"><div class="rowl-main">${КАК_ДАТА(п.когда)} · вариант ${п.вариант} · ${п.минут} мин</div>
                            <span class="chip ${п.баллов >= 19 ? 'ok' : п.баллов >= 11 ? 'warn' : 'bad'}">${п.баллов}/${п.из}</span></div>`)}
                    </div>` : ''}

                ${темы.length ? ui.html`
                    <div class="sec">Темы ошибок</div>
                    <div class="rows">${темы.map(([т, н]) => ui.html`
                        <a class="rowl" href="#/drill/tag:${т}" style="color:inherit;text-decoration:none">
                            <div class="rowl-main">${ТЕМЫ[т]?.title || т}</div>
                            <span class="chip ${н.ошибок > н.верно ? 'bad' : 'ok'}">верно ${н.верно} · ошибок ${н.ошибок}</span>
                        </a>`)}
                    </div>` : ''}

                ${написаны.length ? ui.html`
                    <div class="sec">Письма</div>
                    <div class="rows">${написаны.map(({ з, с, п }) => ui.html`
                        <a class="rowl" href="#/write/${з.id}" style="color:inherit;text-decoration:none">
                            <div class="rowl-main">${с.short || с.title}, ${з.label} <span class="muted small">· ${КАК_ДАТА(п.когда)} · попыток ${п.попыток}</span></div>
                            <span class="chip ${п.итог >= 15 ? 'ok' : п.итог >= 7 ? 'warn' : 'bad'}">${п.итог}/20</span>
                        </a>`)}
                    </div>` : ''}

                ${проб.length ? ui.html`
                    <div class="sec">Пробы экзамена</div>
                    <div class="rows">${проб.map((п) => ui.html`
                        <div class="rowl"><div class="rowl-main">${КАК_ДАТА(п.когда)} · ${п.слов} слов · ${п.минут} мин</div>
                            <span class="chip ${п.итог >= 15 ? 'ok' : п.итог >= 7 ? 'warn' : 'bad'}">${п.итог}/20</span></div>`)}
                    </div>` : ''}

                <div class="sec">Данные</div>
                <p class="muted small" style="margin:0 2px">Прогресс хранится в этом браузере. Чтобы перенести на другое устройство, выгрузите файл и загрузите его там.</p>
                <div class="row col" style="margin-top:10px">
                    <button class="btn block" data-action="выгрузить">Выгрузить прогресс в файл</button>
                    <label class="btn block" style="cursor:pointer">Загрузить из файла<input type="file" accept="application/json,.json" data-change="загрузить" hidden></label>
                    <button class="btn danger block" data-action="сбросить-всё">Стереть весь прогресс</button>
                </div>`
        });
    }
};

actions.on('выгрузить', () => {
    const данные = new Blob([хранилище.выгрузить()], { type: 'application/json' });
    const адрес = URL.createObjectURL(данные);
    const а = document.createElement('a');

    а.href = адрес;
    а.download = `briefe-progress-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(а);
    а.click();
    а.remove();
    setTimeout(() => URL.revokeObjectURL(адрес), 1000);
});

actions.onChange('загрузить', async (el) => {
    const файл = el.files?.[0];
    if (!файл) return;

    try {
        хранилище.загрузить(await файл.text());
        сообщить('Прогресс загружен');
        app.render();
    } catch (e) {
        alert(e.message);
    }
});

actions.on('сбросить-всё', () => {
    if (!confirm('Стереть весь прогресс, включая письма и оценки? Это нельзя отменить.')) return;
    хранилище.сбросить();
    сообщить('Прогресс стёрт');
    app.render();
});

// ================== ЕЩЁ ==================

/** Нужен ли ряд кнопок ä ö ü ß под полями ввода: зависит от клавиатуры в руках (Р-18). */
function разделУмлаутов() {
    const включены = хранилище.настройка('умлауты');

    return ui.html`
        <div class="card" style="margin-top:18px">
            <h2>Кнопки ä ö ü ß</h2>
            <p class="lead">Ряд кнопок под полем ввода. На немецкой раскладке клавиатуры они не нужны, на русской — выручают.</p>
            <button class="btn soft small" style="margin-top:10px" data-action="умлауты-переключить">${включены ? 'Скрыть кнопки' : 'Показывать кнопки'}</button>
        </div>`;
}

actions.on('умлауты-переключить', () => {
    хранилище.задатьНастройку('умлауты', !хранилище.настройка('умлауты'));
    app.render(true);
});

export const more = {

    render() {
        return страница({
            вкладка: 'more',
            заголовок: 'Ещё',
            содержимое: ui.html`
                <div class="links" style="margin-top:12px">
                    <a class="link" href="#/progress"><span class="link-ico">▤</span><span class="link-main"><span class="link-title">Мой прогресс</span><br><span class="link-sub">Модули, темы ошибок, письма, перенос данных</span></span><span class="link-end">›</span></a>
                    <a class="link" href="#/errors"><span class="link-ico">✚</span><span class="link-main"><span class="link-title">Клиника ошибок</span><br><span class="link-sub">Типичные ошибки русскоговорящих</span></span><span class="link-end">›</span></a>
                    <a class="link" href="#/phrases"><span class="link-ico">❝</span><span class="link-main"><span class="link-title">Фразы для письма</span><br><span class="link-sub">Заготовки с переводом и карточки</span></span><span class="link-end">›</span></a>
                    <a class="link" href="#/exam"><span class="link-ico">⏱</span><span class="link-main"><span class="link-title">Проба экзамена</span><br><span class="link-sub">30 минут, как на экзамене</span></span><span class="link-end">›</span></a>
                    <a class="link" href="#/about"><span class="link-ico">ⓘ</span><span class="link-main"><span class="link-title">Об экзамене</span><br><span class="link-sub">Задание, критерии, баллы</span></span><span class="link-end">›</span></a>
                    <a class="link" href="#/drill/test"><span class="link-ico">✓</span><span class="link-main"><span class="link-title">Входной тест</span><br><span class="link-sub">Пройти ещё раз и обновить маршрут</span></span><span class="link-end">›</span></a>
                </div>
                ${разделУмлаутов()}
                ${разделУстановки()}
                <p class="muted small" style="margin:18px 2px">${НАЗВАНИЕ} · версия ${ВЕРСИЯ}. Материалы написаны по описанию экзамена из официального руководства и учебных тестов; перед экзаменом сверьтесь с тестом вашего курсового центра.</p>`
        });
    }
};
