/**
 * Выпускает печатный учебник в PDF.
 *
 * Страница print.html собирает документ из тех же данных, что и приложение; здесь
 * тот же Chromium, что гоняет проверки, печатает её в PDF с закладками и
 * номерами страниц.
 *
 * Запуск:  node tools/make-print.mjs [адрес] [файл.pdf]
 *          по умолчанию: http://localhost:4190/ → dist/dtz-b1-uchebnik.pdf
 */

import { chromium } from 'playwright';
import { mkdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const КОРЕНЬ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const [адресАрг, файлАрг] = process.argv.slice(2);
const адрес = (адресАрг || 'http://localhost:4190/').replace(/\/?$/, '/');
const файл = path.resolve(файлАрг || path.join(КОРЕНЬ, 'dist', 'dtz-b1-uchebnik.pdf'));

mkdirSync(path.dirname(файл), { recursive: true });

const браузер = await chromium.launch();
const страница = await (await браузер.newContext({ serviceWorkers: 'block', colorScheme: 'light' })).newPage();

const ошибки = [];
страница.on('pageerror', (e) => ошибки.push(e.message));

await страница.goto(`${адрес}print.html`, { waitUntil: 'networkidle' });
await страница.waitForSelector('body[data-ready="1"]', { timeout: 30000 });
await страница.emulateMedia({ media: 'print' });

await страница.pdf({
    path: файл,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: '<div style="width:100%;font-size:8px;color:#777;text-align:center;font-family:Arial,sans-serif"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
    margin: { top: '16mm', bottom: '16mm', left: '14mm', right: '14mm' },
    outline: true,
    tagged: true
});

await браузер.close();

if (ошибки.length) {
    console.error('Ошибки на странице:', ошибки.join(' | '));
    process.exit(1);
}

console.log(`${файл}\n${(statSync(файл).size / 1024 / 1024).toFixed(1)} МБ`);
