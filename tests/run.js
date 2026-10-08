/**
 * Запуск всех наборов проверок.
 *
 * Вынесено из index.html отдельным модулем не для красоты: страница обязана
 * снять сервис-воркер и подменить ключ хранения прежде, чем начнёт грузить
 * хоть один модуль, а статический тег `<script type="module">` начинает
 * грузиться при разборе страницы. Отсюда динамический импорт этого файла.
 */

import { run } from './runner.js';
import { actions } from '../js/core/actions.js';

// Делегирование событий нужно поднять: проверки нажимают настоящие кнопки,
// а слушатели вешает именно init()
actions.init();

// Наборы регистрируют проверки самим фактом импорта
await import('./suites/check.test.js');
await import('./suites/exercise.test.js');
await import('./suites/brief.test.js');
await import('./suites/store.test.js');
await import('./suites/session.test.js');
await import('./suites/content.test.js');
await import('./suites/screens.test.js');

const summary = await run(document.getElementById('results'));

/*
 * Итог кладётся в globalThis, а не только в консоль: снаружи браузера
 * проверки запускает CI, и ему нужно значение, а не строка в журнале.
 */
globalThis.__RESULT__ = summary;
console.log('[Проверки]', summary);
