/**
 * Переписывает список ФАЙЛЫ в sw.js по дереву проекта.
 *
 * Список вручную — это забытый файл, а забытый файл ломает офлайн молча: в
 * сети всё работает, а без сети курс не открывается — и узнаётся это там,
 * где связи нет. Скрипт берёт всё из js/, css/, assets/ плюс index.html и
 * manifest.json. Сверку списка с деревом в CI делает tools/check-precache.ps1.
 *
 * Запуск: node tools/make-sw.mjs
 */

import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const КОРЕНЬ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function обойти(каталог) {
    const результат = [];

    for (const имя of readdirSync(path.join(КОРЕНЬ, каталог)).sort()) {
        const относительный = `${каталог}/${имя}`;
        if (statSync(path.join(КОРЕНЬ, относительный)).isDirectory()) результат.push(...обойти(относительный));
        else результат.push(относительный);
    }

    return результат;
}

const файлы = [
    './',
    'index.html',
    'manifest.json',
    ...['css', 'assets', 'js'].flatMap(обойти)
];

const sw = readFileSync(path.join(КОРЕНЬ, 'sw.js'), 'utf8');
const блок = `const ФАЙЛЫ = [\n${файлы.map((ф) => `    '${ф}'`).join(',\n')}\n];`;
const новый = sw.replace(/const ФАЙЛЫ = \[[\s\S]*?\];/, блок);

if (новый === sw) {
    console.log('sw.js: список ФАЙЛЫ без изменений.');
} else {
    writeFileSync(path.join(КОРЕНЬ, 'sw.js'), новый, 'utf8');
    console.log(`sw.js: в списке ${файлы.length} файлов. Поднимите APP_VERSION.`);
}
