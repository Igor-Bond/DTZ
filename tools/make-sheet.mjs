/**
 * Собирает отдельную подсказку (HTML на один–два листа A4) в PDF.
 *
 * Не часть курса: документ лежит в docs/sheets, правится руками и печатается
 * тем же Chromium, что гоняет проверки. Страницы считаются после печати, чтобы
 * лишняя строка не превратилась молча в третий лист.
 *
 * Запуск:  node tools/make-sheet.mjs <файл.html> <файл.pdf> [страниц]
 *          например: node tools/make-sheet.mjs docs/sheets/brief-podskazka.html dist/brief-podskazka-B1.pdf 2
 * Ответ:   0 — PDF собран и число страниц сошлось, 1 — не сошлось или ошибка.
 */

import { chromium } from 'playwright';
import { mkdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [входной, выходной, ожидаемо] = process.argv.slice(2);

if (!входной || !выходной) {
    console.error('Запуск: node tools/make-sheet.mjs <файл.html> <файл.pdf> [страниц]');
    process.exit(1);
}

const исходник = path.resolve(входной);
const результат = path.resolve(выходной);

mkdirSync(path.dirname(результат), { recursive: true });

const браузер = await chromium.launch();
const страница = await (await браузер.newContext({ serviceWorkers: 'block', colorScheme: 'light' })).newPage();

const ошибки = [];
страница.on('pageerror', (e) => ошибки.push(e.message));

await страница.goto(pathToFileURL(исходник).href, { waitUntil: 'load' });
await страница.emulateMedia({ media: 'print' });

await страница.pdf({ path: результат, preferCSSPageSize: true, printBackground: true });
await браузер.close();

// Страницы PDF: объекты /Type /Page (но не /Pages)
const страниц = (readFileSync(результат).toString('latin1').match(/\/Type\s*\/Page(?![s\w])/g) || []).length;

console.log(результат);
console.log(`${(statSync(результат).size / 1024).toFixed(0)} КБ, страниц: ${страниц}`);

if (ошибки.length) {
    console.error('Ошибки страницы:', ошибки.slice(0, 3));
    process.exit(1);
}

if (ожидаемо && страниц !== Number(ожидаемо)) {
    console.error(`Ожидалось страниц: ${ожидаемо}, получилось: ${страниц}. Подсказка не влезла — уплотните или сократите.`);
    process.exit(1);
}
