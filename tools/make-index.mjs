/**
 * Собирает js/data/index.js из файлов содержимого.
 *
 * Браузер не умеет перечислять каталог, а динамические import() по списку
 * имён не годятся для офлайн-кэша: сервис-воркеру нужен точный список файлов.
 * Поэтому индекс — обычный файл со статическими import, и пишет его этот
 * скрипт: добавили файл содержимого — запустили скрипт, и забыть внести его
 * в индекс нельзя.
 *
 * Запуск: node tools/make-index.mjs
 */

import { readdirSync, existsSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const КОРЕНЬ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ДАННЫЕ = path.join(КОРЕНЬ, 'js', 'data');

const список = (каталог, шаблон) => {
    const п = path.join(ДАННЫЕ, каталог);
    return existsSync(п) ? readdirSync(п).filter((ф) => шаблон.test(ф)).sort() : [];
};

const грамматика = список('grammar', /^g\d\d.*\.js$/);
const техника = список('letters', /^l\d\d.*\.js$/);
const ситуации = список('letters', /^s\d\d.*\.js$/);
const чтение = список('lesen', /^r\d\d.*\.js$/);
const одиночные = ['errors', 'phrases', 'reference', 'cheatsheet', 'lesen-ref', 'exam'].filter((и) => existsSync(path.join(ДАННЫЕ, `${и}.js`)));

const строки = [
    '/**',
    ' * Индекс содержимого курса. ГЕНЕРИРУЕТСЯ: tools/make-index.mjs.',
    ' * Руками не править — при следующем запуске скрипта правки пропадут.',
    ' */',
    ''
];

const имя = (файл) => `д_${файл.replace(/\.js$/, '').replace(/[^a-z0-9]/gi, '_')}`;

for (const ф of грамматика) строки.push(`import ${имя(ф)} from './grammar/${ф}';`);
for (const ф of [...техника, ...ситуации]) строки.push(`import ${имя(ф)} from './letters/${ф}';`);
for (const ф of чтение) строки.push(`import ${имя(ф)} from './lesen/${ф}';`);
for (const и of одиночные) строки.push(`import ${имя(и + '.js')} from './${и}.js';`);

const массив = (файлы) => `[${файлы.map(имя).join(', ')}]`;
const одно = (и) => (одиночные.includes(и) ? имя(`${и}.js`) : '[]');

строки.push(
    '',
    `export const ГРАММАТИКА = ${массив(грамматика)}.sort((а, б) => а.order - б.order);`,
    `export const ТЕХНИКА = ${массив(техника)}.sort((а, б) => а.order - б.order);`,
    `export const СИТУАЦИИ = ${массив(ситуации)}.sort((а, б) => а.order - б.order);`,
    `export const ЧТЕНИЕ = ${массив(чтение)}.sort((а, б) => а.order - б.order);`,
    `export const ОШИБКИ = ${одно('errors')};`,
    `export const ФРАЗЫ = ${одно('phrases')};`,
    `export const СПРАВОЧНИК = ${одно('reference')};`,
    `export const ШПАРГАЛКА = ${одно('cheatsheet')};`,
    `export const СПРАВОЧНИК_ЧТЕНИЯ = ${одно('lesen-ref')};`,
    `export const ЭКЗАМЕН = ${одно('exam')};`,
    ''
);

writeFileSync(path.join(ДАННЫЕ, 'index.js'), строки.join('\n'), 'utf8');

console.log(`index.js: грамматика ${грамматика.length}, техника ${техника.length}, ситуации ${ситуации.length}, чтение ${чтение.length}, отдельных файлов ${одиночные.length}`);
