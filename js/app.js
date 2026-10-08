/**
 * Экраны и маршрутизация.
 *
 * Маршрут живёт в адресной строке после решётки: #/drill/g01. Так работает
 * кнопка «назад» браузера и телефона — на ней ходят чаще, чем по кнопкам
 * приложения, — и так сайт остаётся набором статических файлов: серверных
 * правил переписывания путей на GitHub Pages нет.
 *
 * Имена маршрутов латинские: в адресной строке кириллица превращается в
 * длинную кашу из процентов, и поделиться ссылкой на раздел было бы нельзя.
 */

import { home } from './modules/home.js';
import { moduleScreen, theory, mini } from './modules/module.js';
import { drill, result } from './modules/drill.js';
import { letters, situation, write, exam } from './modules/letters.js';
import { review, errors, phrases, cards, cheat, about, progress, more } from './modules/tools.js';

/**
 * Список экранов собирается при первом обращении, а не при загрузке модуля.
 *
 * Здесь круговая зависимость: app.js импортирует экраны, а экраны
 * импортируют app.js ради перехода и перерисовки. Модули ES такое допускают,
 * но пока модуль не доисполнен, его переменные недоступны, и сборка списка
 * прямо в теле файла падает, стоит проверке импортировать экран первым.
 */
let ЭКРАНЫ = null;

function экраны() {
    if (!ЭКРАНЫ) {
        ЭКРАНЫ = {
            home, module: moduleScreen, theory, mini, drill, result,
            letters, situation, write, exam,
            review, errors, phrases, cards, cheat, about, progress, more
        };
    }

    return ЭКРАНЫ;
}

const ПО_УМОЛЧАНИЮ = 'home';

function разобрать(hash) {
    const части = String(hash || '').replace(/^#\/?/, '').split('/').filter(Boolean);
    const имя = decodeURIComponent(части[0] || ПО_УМОЛЧАНИЮ);

    return {
        name: экраны()[имя] ? имя : ПО_УМОЛЧАНИЮ,
        param: части[1] ? decodeURIComponent(части.slice(1).join('/')) : null
    };
}

export const app = {

    route: { name: ПО_УМОЛЧАНИЮ, param: null },

    init() {
        /*
         * Кнопка «назад» и адрес, введённый руками. Переходы внутри
         * приложения рисуют сами (см. go), поэтому событие от собственного
         * перехода приходит на уже нарисованный экран: повторная отрисовка
         * здесь начала бы занятие заново с первого вопроса.
         */
        window.addEventListener('hashchange', () => {
            const маршрут = разобрать(location.hash);
            if (маршрут.name === app.route.name && маршрут.param === app.route.param) return;

            app.route = маршрут;
            app.render();
        });

        app.route = разобрать(location.hash);
        app.render();
    },

    /**
     * Переход: рисует сразу, адрес правит следом. Переход на тот же адрес
     * события hashchange не вызывает вовсе, поэтому отрисовка не может
     * зависеть от него.
     */
    go(имя, параметр) {
        const адрес = параметр
            ? `#/${encodeURIComponent(имя)}/${параметр.split('/').map(encodeURIComponent).join('/')}`
            : `#/${encodeURIComponent(имя)}`;

        app.route = разобрать(адрес);
        app.render();

        if (location.hash !== адрес) location.hash = адрес;
    },

    /**
     * Рисует текущий маршрут. `сохранитьПрокрутку` — для перерисовок внутри
     * экрана (ответ на вопрос, выбранная плашка): иначе страница прыгает
     * наверх под пальцем.
     */
    render(сохранитьПрокрутку = false) {
        const место = document.getElementById('screen');
        if (!место) return;

        const прежний = app.показан;
        const экран = экраны()[app.route.name] || home;

        // Уходящий экран убирает за собой таймеры и слушатели
        if (прежний && прежний !== экран) прежний.leave?.();
        app.показан = экран;

        const верх = сохранитьПрокрутку ? window.scrollY : 0;

        try {
            место.innerHTML = String(экран.render(app.route.param));
        } catch (e) {
            console.error('[Экран] Не удалось нарисовать:', e);
            место.innerHTML = '<div class="empty-note">Экран не открылся. Попробуйте обновить страницу.</div>';
        }

        window.scrollTo(0, верх);
        экран.after?.(app.route.param);
    },

    показан: null
};
