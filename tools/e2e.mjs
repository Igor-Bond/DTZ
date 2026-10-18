/**
 * Сквозная проверка: настоящий браузер проходит курс по экранам.
 *
 * Что делает:
 *   1. открывает каждый экран и смотрит, что на нём есть содержимое и нет
 *      ошибок в консоли;
 *   2. проходит занятие по КАЖДОМУ упражнению курса, вводя правильный ответ
 *      из данных, и убеждается, что экран признал его верным. Так проверяется
 *      всё сразу: ключ в данных, движок сверки и сам экран — на живой странице,
 *      а не в голове у автора;
 *   3. пишет письмо: образец из данных должен пройти проверку писем без
 *      замечаний, а слабый ответ — вызвать хотя бы одно.
 *
 * Запуск:  node tools/e2e.mjs [адрес] [--shots каталог]
 * Ответ:   0 — всё прошло, 1 — есть провалы.
 */

import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const КОРЕНЬ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const аргументы = process.argv.slice(2);
const АДРЕС = (аргументы.find((а) => a_http(а)) || 'http://localhost:4190/').replace(/\/?$/, '/');
const снимки = аргументы.includes('--shots') ? аргументы[аргументы.indexOf('--shots') + 1] : null;

function a_http(а) { return /^https?:/.test(а); }

const данные = await import(pathToFileURL(path.join(КОРЕНЬ, 'js/data/catalog.js')).href);
const { разложитьПлашки } = await import(pathToFileURL(path.join(КОРЕНЬ, 'js/core/exercise.js')).href);

const провалы = [];
const ошибкиСтраницы = [];

const провал = (где, что) => провалы.push(`${где}: ${что}`);

const браузер = await chromium.launch();
const контекст = await браузер.newContext({ viewport: { width: 420, height: 860 }, serviceWorkers: 'block' });
const стр = await контекст.newPage();

стр.on('pageerror', (e) => ошибкиСтраницы.push(`[страница] ${e.message}`));
стр.on('console', (m) => {
    if (m.type() === 'error') ошибкиСтраницы.push(`[консоль] ${m.text()}`);
});
стр.on('dialog', (д) => д.accept());

if (снимки) mkdirSync(снимки, { recursive: true });

async function снимок(имя) {
    if (снимки) await стр.screenshot({ path: path.join(снимки, `${имя}.png`), fullPage: true });
}

async function открыть(хэш) {
    await стр.goto(`${АДРЕС}#/${хэш}`, { waitUntil: 'domcontentloaded' });
    await стр.reload({ waitUntil: 'domcontentloaded' });
    await стр.waitForSelector('#screen .page, #screen .empty-note', { timeout: 8000 });
}

// ---------------- 1. экраны ----------------

const экраны = [
    '', 'cheat', 'letters', 'lesen', 'review', 'more', 'errors', 'phrases', 'cards', 'about', 'progress', 'exam',
    ...данные.ЧТЕНИЕ.flatMap((ч) => ч.sets.map((с) => `read/${с.id}`)),
    ...Array.from({ length: данные.вариантовПроб() }, (_, i) => `lesenexam/${i + 1}`),
    ...данные.МОДУЛИ.flatMap((м) => [`module/${м.id}`, `theory/${м.id}`, ...(м.apply ? [`mini/${м.id}`] : [])]),
    ...данные.СИТУАЦИИ.map((с) => `situation/${с.id}`),
    ...данные.СИТУАЦИИ.flatMap((с) => с.tasks.map((з) => `write/${з.id}`)),
    ...данные.разделыШпаргалки().map((р) => `cheat/${р.id}`)
];

for (const э of экраны) {
    await открыть(э);
    const длина = await стр.evaluate(() => document.getElementById('screen').innerText.trim().length);
    if (длина < 20) провал(`экран #/${э}`, 'пустой');

    const сломан = await стр.evaluate(() => !!document.querySelector('.boot-failed') || document.getElementById('screen').innerText.includes('Экран не открылся'));
    if (сломан) провал(`экран #/${э}`, 'не нарисовался');
}

// ---------------- 1б. узкий экран: ничего не выходит за край ----------------

/*
 * Ряд кнопок ä ö ü ß из семи штук по 42 точки шире карточки на телефоне и
 * вылезал за границу приложения. Тесты в браузере стилей не грузят, поэтому
 * ширина проверяется здесь: самый узкий телефон, ряд включён, на каждом экране
 * с полем ввода кнопки лежат внутри ряда, ряд — внутри окна, страница не
 * шире окна.
 */
{
    const узкий = await (await браузер.newContext({ viewport: { width: 320, height: 640 }, serviceWorkers: 'block' })).newPage();
    await узкий.addInitScript(() => localStorage.setItem('briefe.v1.prefs', JSON.stringify({ умлауты: true })));
    узкий.on('dialog', (д) => д.accept());

    const маршруты = [
        `drill/all:${данные.ГРАММАТИКА[0].id}`,
        `drill/all:${данные.ГРАММАТИКА[1].id}`,
        `drill/all:${данные.ТЕХНИКА[0].id}`,
        `module/${данные.ГРАММАТИКА[0].id}`,
        `write/${данные.СИТУАЦИИ[0].tasks[0].id}`,
        'more', '', 'lesen', 'cheat', 'letters'
    ];

    let рядовВиделИ = 0;

    for (const м of маршруты) {
        await узкий.goto(`${АДРЕС}#/${м}`, { waitUntil: 'domcontentloaded' });
        await узкий.reload({ waitUntil: 'domcontentloaded' });
        await узкий.waitForSelector('#screen .page, #screen .empty-note', { timeout: 8000 });

        const вылезло = await узкий.evaluate(() => {
            const ширина = document.documentElement.clientWidth;
            const плохо = [];
            const ряд = document.querySelector('.umlauts');

            if (ряд) {
                const р = ряд.getBoundingClientRect();
                if (р.right > ширина + 0.5 || р.left < -0.5) плохо.push(`ряд умлаутов шире окна (${Math.round(р.right)} > ${ширина})`);

                for (const к of ряд.querySelectorAll('.key')) {
                    const б = к.getBoundingClientRect();
                    if (б.right > р.right + 0.5 || б.left < р.left - 0.5) плохо.push(`кнопка «${к.textContent}» вне ряда`);
                    if (б.width < 24 || б.height < 32) плохо.push(`кнопка «${к.textContent}» слишком мала: ${Math.round(б.width)}×${Math.round(б.height)}`);
                }
            }

            if (document.documentElement.scrollWidth > ширина + 1) плохо.push(`страница шире окна: ${document.documentElement.scrollWidth} > ${ширина}`);

            return { плохо, ряд: !!ряд };
        });

        if (вылезло.ряд) рядовВиделИ += 1;
        for (const п of вылезло.плохо) провал(`узкий экран #/${м}`, п);
    }

    if (!рядовВиделИ) провал('узкий экран', 'ряд умлаутов не нашёлся ни на одном экране: проверка ничего не проверила');

    await узкий.context().close();
}

await открыть('');
await снимок('главная');
await открыть('theory/g01');
await снимок('теория-g01');
await открыть('cheat');
await снимок('шпаргалка');

// ---------------- 2. занятия по всем упражнениям ----------------

/** Ответить на текущее упражнение правильно через экран. */
async function ответитьВерно(у) {
    switch (у.type) {
        case 'choice': {
            await стр.click(`.option[data-i="${у.answer}"]`);
            return;
        }

        case 'gap': {
            const поля = await стр.$$('.gap');
            for (let i = 0; i < поля.length; i++) {
                const а = Array.isArray(у.answer[i]) ? у.answer[i][0] : у.answer[i];
                await поля[i].fill(а);
            }
            await стр.click('[data-action="проверить"]');
            return;
        }

        case 'build':
        case 'order': {
            const цель = у.type === 'build' ? разложитьПлашки(у.answer[0]) : у.items;

            for (const слово of цель) {
                // Плашка по тексту из банка (одинаковые слова берём по очереди)
                const плашки = await стр.$$('.build-bank .piece');
                let нашли = false;
                for (const п of плашки) {
                    if ((await п.innerText()).trim() === слово) { await п.click(); нашли = true; break; }
                }
                if (!нашли) throw new Error(`нет плашки «${слово}»`);
            }

            await стр.click('[data-action="проверить"]');
            return;
        }

        default: {
            await стр.fill('#answer', у.answer[0]);
            await стр.click('[data-action="проверить"]');
        }
    }
}

const всеУпражнения = данные.всеУпражнения();
let пройдено = 0;

for (const [ключ, список] of [
    ...данные.МОДУЛИ.map((м) => [м.id, м.exercises]),
    ...данные.СИТУАЦИИ.map((с) => [с.id, с.drills || []]),
    ...данные.ОШИБКИ.flatMap((с) => с.items.map((э) => [э.id, э.drills || []]))
]) {
    if (!список.length) continue;

    // Источник, который выдаёт всё сразу, а не раунд из 10: ситуации и записи клиники.
    // Для модулей берём «tag:» нельзя — там тема, а не модуль, поэтому проходим по раундам.
    await открыть(`drill/${/^[glrs]\d\d$/.test(ключ) ? 'all:' : ''}${ключ}`);

    const сколько = список.length;
    const видели = new Set();

    for (let шаг = 0; шаг < сколько; шаг++) {
        const на_экране = await стр.$('.q-type');
        if (!на_экране) break;

        // Какое упражнение сейчас: ищем по тексту задания среди списка
        const вид = await стр.evaluate(() => ({
            q: document.querySelector('.q-text')?.innerText || '',
            предложение: document.querySelector('.q-sent')?.innerText || '',
            контекст: document.querySelector('.q-context')?.innerText || '',
            ru: document.querySelector('.q-ru')?.innerText || '',
            варианты: [...document.querySelectorAll('.option span:last-child')].map((х) => х.innerText),
            плашки: [...document.querySelectorAll('.piece')].map((х) => х.innerText)
        }));

        const у = список.find((х) => !видели.has(х.id) && совпадает(х, вид));

        if (!у) {
            провал(`занятие ${ключ}`, `не удалось понять, какое упражнение на экране: ${JSON.stringify(вид).slice(0, 160)}`);
            break;
        }

        видели.add(у.id);

        try {
            await ответитьВерно(у);
        } catch (e) {
            провал(`${у.id}`, `ответ не введён: ${e.message}`);
            break;
        }

        await стр.waitForSelector('.feedback', { timeout: 3000 }).catch(() => {});
        const исход = await стр.evaluate(() => document.querySelector('.feedback')?.className || '');

        if (!исход.includes('ok')) {
            const разбор = await стр.evaluate(() => document.querySelector('.feedback')?.innerText.replace(/\s+/g, ' ').slice(0, 200) || 'нет разбора');
            провал(у.id, `правильный ответ из данных не принят: ${разбор}`);
        } else {
            пройдено += 1;
        }

        await стр.click('[data-action="дальше"]');
    }
}

function совпадает(у, вид) {
    const словоИз = (с) => String(с || '').replace(/\s+/g, ' ').trim();

    if (у.type === 'choice') {
        const оп = new Set(вид.варианты.map(словоИз));
        return у.options.every((о) => оп.has(словоИз(о))) && словоИз(вид.q) === словоИз(у.q.replace(/\*\*|`/g, ''));
    }

    if (у.type === 'gap') {
        // Пропуск может стоять в самом начале: сравниваем предложения целиком, без пропусков и подсказки
        const без = (с) => String(с).replace(/\s+/g, '');
        const экран = без(вид.предложение).replace(без(`(${у.hint || ''})`), '');
        return вид.предложение !== '' && экран === без(у.text.replaceAll('___', ''));
    }
    if (у.type === 'build') return словоИз(вид.ru) === словоИз(у.ru);
    if (у.type === 'translate') return словоИз(вид.ru) === словоИз(у.ru);
    if (у.type === 'fix') return словоИз(вид.контекст) === словоИз(у.text);
    if (у.type === 'join') return словоИз(вид.контекст).startsWith(словоИз(у.parts[0]));
    if (у.type === 'order') return вид.плашки.length === у.items.length && у.items.every((х) => вид.плашки.map(словоИз).includes(словоИз(х)));
    return false;
}

// ---------------- 3. письма ----------------

for (const с of данные.СИТУАЦИИ) {
    for (const з of с.tasks) {
        await открыть(`write/${з.id}`);
        await стр.fill('#letter', з.model.text);
        await стр.click('[data-action="проверить-письмо"]');
        await стр.waitForSelector('.marked-text', { timeout: 3000 }).catch(() => {});

        const замечания = await стр.evaluate(() => [...document.querySelectorAll('.issue')].map((х) => х.innerText.replace(/\s+/g, ' ')));
        const ошибки = замечания.filter((з) => з.startsWith('✗'));
        if (ошибки.length) провал(`образец ${з.id}`, `автопроверка нашла «ошибки» в образце: ${ошибки.join(' | ')}`);

        const пункты = await стр.evaluate(() => [...document.querySelectorAll('.task-card li')].map((х) => х.className));
        if (пункты.some((к) => к !== 'found')) провал(`образец ${з.id}`, `не все пункты найдены: ${пункты.join(',')}`);

        if (з.weak) {
            await открыть(`write/${з.id}`);
            await стр.fill('#letter', з.weak.text);
            await стр.click('[data-action="проверить-письмо"]');
            await стр.waitForSelector('.marked-text', { timeout: 3000 }).catch(() => {});
            const найдено = await стр.evaluate(() => document.querySelectorAll('.issue').length);
            if (!найдено) провал(`слабый ответ ${з.id}`, 'автопроверка не нашла в слабом ответе ничего');
        }
    }
}

await открыть(`write/${данные.СИТУАЦИИ[0]?.tasks[0]?.id}`);
await стр.fill('#letter', данные.СИТУАЦИИ[0].tasks[0].weak?.text || 'Hallo Herr Weber. Heute ich bin krank, weil ich bin zu Hause.');
await стр.click('[data-action="проверить-письмо"]');
await снимок('разбор-слабого-письма');

// ---------------- 4. Lesen: наборы и пробы ----------------

const значениеДляКнопки = (в) => String(в);

async function решитьНаборы(наборы) {
    for (const п of наборы.flatMap((н) => н.items)) {
        await стр.click(`[data-action="лес-ответ"][data-q="${п.id}"][data-v="${значениеДляКнопки(п.answer)}"]`);
    }
}

let наборовЧтения = 0;

for (const ч of данные.ЧТЕНИЕ) {
    for (const с of ч.sets) {
        await открыть(`read/${с.id}`);

        try {
            await решитьНаборы([с]);
            await стр.click('[data-action="лес-проверить"]');
            const итог = (await стр.textContent('.ring span', { timeout: 3000 })).trim();

            if (итог !== `${с.items.length}/${с.items.length}`) провал(`Lesen ${с.id}`, `верные ответы дали ${итог}`);
            else наборовЧтения += 1;

            const красных = await стр.locator('.r-q.bad').count();
            if (красных) провал(`Lesen ${с.id}`, `красных вопросов после верных ответов: ${красных}`);
        } catch (e) {
            провал(`Lesen ${с.id}`, e.message.split('\n')[0]);
        }
    }
}

for (let k = 1; k <= данные.вариантовПроб(); k++) {
    await открыть(`lesenexam/${k}`);

    try {
        await решитьНаборы(данные.вариантПробы(k).map((х) => х.набор));
        await стр.click('[data-action="проба-чтения-сдать"]');
        const итог = (await стр.textContent('.ring span', { timeout: 3000 })).trim();
        if (итог !== '25/25') провал(`проба Lesen ${k}`, `верные ответы дали ${итог}`);
    } catch (e) {
        провал(`проба Lesen ${k}`, e.message.split('\n')[0]);
    }
}

if (данные.ЧТЕНИЕ.length) {
    await открыть('lesen');
    await снимок('lesen-хаб');
    await открыть(`read/${данные.ЧТЕНИЕ[1].sets[0].id}`);
    await снимок('lesen-набор-объявления');
}

// ---------------- итог ----------------

await браузер.close();

const уникальные = [...new Set(ошибкиСтраницы)];

console.log(`Экранов открыто: ${экраны.length}. Упражнений принято экраном: ${пройдено} из ${всеУпражнения.length}. Наборов Lesen решено: ${наборовЧтения}.`);

if (уникальные.length) {
    console.log(`\nОшибки на странице (${уникальные.length}):`);
    for (const о of уникальные.slice(0, 20)) console.log(`  ${о}`);
}

if (провалы.length) {
    console.log(`\nПРОВАЛЫ (${провалы.length}):`);
    for (const п of провалы.slice(0, 80)) console.log(`  ✗ ${п}`);
    if (провалы.length > 80) console.log(`  … и ещё ${провалы.length - 80}`);
}

process.exit(провалы.length || уникальные.length ? 1 : 0);
