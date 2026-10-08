/**
 * Слепая проверка наборов Lesen.
 *
 * Вопрос на чтение хорош, только если ответ однозначно следует из текста. Автор
 * этого не увидит: он знает ключ и читает «под него». Поэтому наборы решает
 * независимый читатель, который ключа не видит, а затем ответы сверяются с
 * ключами. Каждое расхождение — либо ошибка ключа, либо вопрос, допускающий
 * второй ответ; в обоих случаях набор надо чинить.
 *
 *   node tools/blind-lesen.mjs export <файл.json> [часть…]   — задания без ключей
 *   node tools/blind-lesen.mjs check  <ответы.json> [часть…] — сверка
 *
 * Формат ответов решателя: { "<id вопроса>": "<ответ>" }, где ответ —
 *   'a' | 'b' | 'c'        для вопросов с тремя вариантами (Teil 1, mc Teil 3, Teil 5);
 *   'a' … 'h' | 'x'        для Teil 2 (буква объявления или x);
 *   'richtig' | 'falsch'   для вопросов richtig/falsch (Teil 3, Teil 4).
 */

import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const КОРЕНЬ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { ЧТЕНИЕ } = await import(pathToFileURL(path.join(КОРЕНЬ, 'js/data/catalog.js')).href);

const [команда, файл, ...части] = process.argv.slice(2);
const выбор = части.length ? ЧТЕНИЕ.filter((ч) => части.includes(ч.id)) : ЧТЕНИЕ;

const БУКВЫ = 'abc';

/** Ответ из ключа — в формате решателя. */
function ключ(п, часть) {
    if (часть.teil === 2) return п.answer;
    if (п.type === 'rf') return п.answer ? 'richtig' : 'falsch';
    return БУКВЫ[п.answer];
}

if (команда === 'export') {
    const вывод = {
        правила: {
            'Формат ответов': "{ \"<id вопроса>\": \"<ответ>\" }. Ответ: 'a' | 'b' | 'c' для вопросов с тремя вариантами (Teil 1, вопросы с вариантами в Teil 3, Teil 5); 'a'…'h' или 'x' для Teil 2 (буква объявления, x — если ни одно не подходит); 'richtig' | 'falsch' для утверждений (Teil 3 и Teil 4).",
            'Teil 1': 'К каждой ситуации варианты a, b, c: первые две — рубрики из списка, третий — «andere …»: выбирается, если ни одна рубрика не подходит.',
            'Teil 2': 'Пять ситуаций, восемь объявлений a–h. Для ровно одной ситуации нет подходящего объявления — x. Одно объявление — одной ситуации.',
            'Teil 3': 'К каждому из трёх текстов: утверждение (richtig/falsch) и вопрос с тремя вариантами.',
            'Teil 4': 'Три утверждения к длинному тексту: richtig или falsch.',
            'Teil 5': 'Письмо с пропусками [1]…[6]; для каждого пропуска выберите a, b или c. [0] — пример.'
        },
        наборы: {}
    };

    for (const ч of выбор) {
        for (const с of ч.sets) {
            вывод.наборы[с.id] = {
                часть: ч.teil,
                ситуация: с.situation,
                материал: с.material,
                пример: с.example,
                вопросы: с.items.map((п) => ({
                    id: п.id,
                    ...(п.q ? { вопрос: п.q } : {}),
                    ...(п.text ? { текст: п.text } : {}),
                    ...(п.type ? { тип: п.type } : {}),
                    ...(п.gap ? { пропуск: п.gap } : {}),
                    ...(п.options ? { варианты: п.options.map((о, i) => `${БУКВЫ[i]}) ${о}`) } : {})
                }))
            };
        }
    }

    writeFileSync(файл, JSON.stringify(вывод, null, 1), 'utf8');
    console.log(`${файл}: ${Object.keys(вывод.наборы).length} наборов, ${Object.values(вывод.наборы).reduce((а, н) => а + н.вопросы.length, 0)} вопросов`);
}

else if (команда === 'check') {
    const ответы = JSON.parse(readFileSync(файл, 'utf8'));
    const расхождения = [];
    let всего = 0;
    let совпало = 0;
    let нет = 0;

    for (const ч of выбор) {
        for (const с of ч.sets) {
            for (const п of с.items) {
                всего += 1;
                const ожидалось = ключ(п, ч);
                const получено = ответы[п.id];

                if (получено === undefined) { нет += 1; расхождения.push({ id: п.id, ключ: ожидалось, решатель: '— нет ответа —' }); continue; }
                if (String(получено).toLowerCase() === ожидалось) совпало += 1;
                else расхождения.push({ id: п.id, ключ: ожидалось, решатель: String(получено) });
            }
        }
    }

    console.log(`Вопросов: ${всего}. Совпало: ${совпало}. Расхождений: ${расхождения.length - нет}. Без ответа: ${нет}.`);

    for (const р of расхождения) console.log(`  ✗ ${р.id}: ключ «${р.ключ}», решатель «${р.решатель}»`);
    process.exit(расхождения.length ? 1 : 0);
}

else {
    console.error('Использование: node tools/blind-lesen.mjs export|check <файл.json> [r01 r02 …]');
    process.exit(2);
}
