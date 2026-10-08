/**
 * Проверка проверки: прогоняет проверку писем по всем немецким предложениям курса.
 *
 *   верные   — ответы упражнений, примеры, фразы, образцы: замечаний быть не должно.
 *              Каждое срабатывание — либо ложная тревога правила (чинить правило),
 *              либо настоящая ошибка в содержимом (чинить содержимое);
 *   неверные — «как не надо» из ловушек и упражнений fix: показывает, сколько из
 *              них правила замечают. Это охват, а не требование: правила знают
 *              лишь часть ошибок.
 *
 * Запуск: node tools/corpus-check.mjs [--verbose]
 * Ответ:  0 — на верных предложениях тишина, 1 — есть срабатывания.
 */

import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const КОРЕНЬ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const подробно = process.argv.includes('--verbose');

const каталог = await import(pathToFileURL(path.join(КОРЕНЬ, 'js/data/catalog.js')).href);
const { проверитьПисьмо } = await import(pathToFileURL(path.join(КОРЕНЬ, 'js/core/brief.js')).href);
const { заполнить } = await import(pathToFileURL(path.join(КОРЕНЬ, 'js/core/check.js')).href);

/** Правила, которые судят о письме целиком, а не о предложении. */
const ЦЕЛЫЕ = new Set(['нет-обращения', 'нет-прощания', 'мало-слов', 'много-слов', 'мало-связок', 'одни-ich', 'du-и-sie', 'регистр-обращение']);

const верные = [];
const неверные = [];

const добавить = (список, текст, откуда) => {
    const т = String(текст || '').replace(/\*\*/g, '').replace(/…/g, '').trim();
    // «Ситуация → рубрика» из ловушек Lesen — не предложение, а пара «задание → ответ»
    if (т.includes('→')) return;
    if (т.length > 8 && /[\p{L}]{3}/u.test(т) && !/[Ѐ-ӿ]/.test(т)) список.push({ текст: т, откуда });
};

const блоки = (список, откуда) => {
    for (const б of список || []) {
        if (б.type === 'ex') добавить(верные, б.de, `${откуда} ex`);
        if (б.type === 'exs') б.items.forEach((х) => добавить(верные, х.de, `${откуда} exs`));
        if (б.type === 'trap') {
            добавить(верные, б.right, `${откуда} trap.right`);
            добавить(неверные, б.wrong, `${откуда} trap.wrong`);
        }
    }
};

for (const м of каталог.МОДУЛИ) {
    блоки(м.theory, м.id);
    if (м.apply) добавить(верные, м.apply.model, `${м.id} apply`);
}

for (const у of каталог.всеУпражнения()) {
    if (у.type === 'gap') добавить(верные, заполнить(у.text, у.answer), у.id);
    if (['fix', 'join', 'translate', 'build'].includes(у.type)) (у.answer || []).forEach((а) => добавить(верные, а, у.id));
    if (у.type === 'fix') добавить(неверные, у.text, `${у.id} fix.text`);
    if (у.type === 'order') добавить(верные, у.items.join(' '), у.id);
    if (у.type === 'choice') добавить(верные, у.options[у.answer], у.id);
}

for (const с of каталог.СИТУАЦИИ) {
    for (const з of с.tasks) {
        добавить(верные, з.model.text, `${з.id} образец`);
        if (з.weak) добавить(неверные, з.weak.text, `${з.id} слабый`);
    }
    с.phrases.forEach((ф, i) => добавить(верные, ф.de, `${с.id} phrase ${i}`));
}

for (const г of каталог.ФРАЗЫ) г.items.forEach((ф, i) => добавить(верные, ф.de, `${г.id} [${i}]`));

for (const с of каталог.ОШИБКИ) {
    for (const э of с.items) {
        добавить(верные, э.right, `${э.id} right`);
        добавить(неверные, э.wrong, `${э.id} wrong`);
    }
}

// Верные: тишина

const тревоги = [];

for (const { текст, откуда } of верные) {
    // Предложения без пробелов и точек — обрывки («Ich habe»): правила на них не рассчитаны
    const р = проверитьПисьмо(текст);
    const ошибки = р.замечания.filter((з) => з.уровень === 'ошибка' && !ЦЕЛЫЕ.has(з.id));
    for (const з of ошибки) тревоги.push({ откуда, текст, id: з.id, сообщение: з.текст });
}

// Неверные: охват

let замечено = 0;

for (const { текст } of неверные) {
    const р = проверитьПисьмо(текст);
    if (р.замечания.some((з) => з.уровень === 'ошибка' && !ЦЕЛЫЕ.has(з.id))) замечено += 1;
}

console.log(`Верных предложений: ${верные.length}. Срабатываний на них: ${тревоги.length}.`);
console.log(`Неверных примеров: ${неверные.length}, из них замечено правилами: ${замечено} (${Math.round(замечено / неверные.length * 100)} %).`);

if (тревоги.length) {
    console.log('\nСрабатывания на верных предложениях:');
    for (const т of тревоги.slice(0, подробно ? 999 : 40)) {
        console.log(`  [${т.id}] ${т.откуда}\n      «${т.текст}»\n      ${т.сообщение}`);
    }
    process.exit(1);
}
