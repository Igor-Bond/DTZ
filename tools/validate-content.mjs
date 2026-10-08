/**
 * Проверка содержимого курса — до того, как оно попадёт к читателю.
 *
 * Содержимое пишется текстом: сотни упражнений и десятки писем. Опечатка в
 * ключе — не сбой страницы, а урок, который учит неправильно, и найти её
 * можно только прочитав. Здесь ловится всё, что ловится машиной: структура,
 * согласованность пропусков и ответов, повтор номеров, русский текст там,
 * где должен быть немецкий. Прочитать глазами по-немецки всё равно надо —
 * это дело человека, а не этого файла.
 *
 * Запуск:
 *   node tools/validate-content.mjs                 — весь js/data
 *   node tools/validate-content.mjs файл [файл…]    — только названные
 *
 * Ответ: 0 — ошибок нет (предупреждения возможны), 1 — есть ошибки.
 */

import { readdirSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { ИМЕНА_ТЕМ } from '../js/data/tags.js';
import { сверитьПредложение, сколькоСлов, разложить } from '../js/core/check.js';

const КОРЕНЬ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ДАННЫЕ = path.join(КОРЕНЬ, 'js', 'data');

const ошибки = [];
const замечания = [];

let файл = '';

const ош = (где, текст) => ошибки.push(`${файл} · ${где}: ${текст}`);
const пр = (где, текст) => замечания.push(`${файл} · ${где}: ${текст}`);

const КИРИЛЛИЦА = /[Ѐ-ӿ]/;
const ТИПЫ = ['choice', 'gap', 'build', 'fix', 'join', 'translate', 'order'];
const БЛОКИ = ['h', 'p', 'rule', 'list', 'table', 'ex', 'exs', 'trap', 'tip', 'formula'];
const НАЗНАЧЕНИЯ = ['Anrede', 'Einleitung', 'Grund', 'Entschuldigung', 'Bitte', 'Frage', 'Information',
    'Vorschlag', 'Termin', 'Zusage', 'Absage', 'Beschwerde', 'Dank', 'Schluss', 'Gruß'];
const РЕГИСТРЫ = ['formell', 'halbformell', 'informell'];

const строка = (в, мин = 1) => typeof в === 'string' && в.trim().length >= мин;

/** Строка без лишних пробелов и непарной разметки. */
function чисто(где, значение) {
    if (typeof значение !== 'string') return;

    if (значение !== значение.trim()) пр(где, 'пробел по краям строки');
    if (/ {2,}/.test(значение)) пр(где, 'двойной пробел');
    if ((значение.match(/\*\*/g) || []).length % 2) ош(где, 'непарное «**»');
    if ((значение.match(/`/g) || []).length % 2) ош(где, 'непарная обратная кавычка');
    if (/[\r\n]/.test(значение)) ош(где, 'перенос строки внутри значения');
}

/** Немецкое поле: кириллицы быть не должно. */
function немецкое(где, значение) {
    if (typeof значение !== 'string') return;
    чисто(где, значение);
    if (КИРИЛЛИЦА.test(значение)) ош(где, `кириллица в немецком поле: «${значение}»`);
}

/** Русское поле: хоть одна кириллическая буква ожидается. */
function русское(где, значение, обязательно = true) {
    if (typeof значение !== 'string') return;
    чисто(где, значение);
    if (обязательно && !КИРИЛЛИЦА.test(значение)) пр(где, `нет русского текста: «${значение.slice(0, 40)}»`);
}

function слов(текст) {
    return сколькоСлов(текст);
}

// ================== БЛОКИ ТЕОРИИ ==================

function проверитьБлок(б, где) {
    if (!б || typeof б !== 'object') return ош(где, 'блок не объект');
    if (!БЛОКИ.includes(б.type)) return ош(где, `неизвестный тип блока «${б.type}»`);

    switch (б.type) {
        case 'h':
        case 'p':
        case 'rule':
        case 'tip':
            if (!строка(б.text, 3)) ош(где, 'нет text');
            else русское(`${где}.text`, б.text, false);
            if (б.type === 'p' && слов(б.text || '') > 90) пр(где, 'абзац длиннее 90 слов, разбейте');
            break;

        case 'formula':
            if (!Array.isArray(б.parts) || б.parts.length < 2 || б.parts.length > 8) ош(где, 'formula.parts: от 2 до 8 частей');
            else б.parts.forEach((x, i) => { if (!строка(x, 1)) ош(`${где}.parts[${i}]`, 'пустая часть'); else чисто(`${где}.parts[${i}]`, x); });
            if (б.note !== undefined) русское(`${где}.note`, б.note, false);
            break;

        case 'list':
            if (!Array.isArray(б.items) || !б.items.length) ош(где, 'нет items');
            else б.items.forEach((x, i) => { if (!строка(x, 2)) ош(`${где}.items[${i}]`, 'пустой пункт'); else чисто(`${где}.items[${i}]`, x); });
            break;

        case 'table':
            if (!Array.isArray(б.head) || !б.head.length) ош(где, 'нет head');
            if (!Array.isArray(б.rows) || !б.rows.length) ош(где, 'нет rows');
            else б.rows.forEach((р, i) => {
                if (!Array.isArray(р) || р.length !== (б.head || []).length) ош(`${где}.rows[${i}]`, 'число ячеек не равно числу колонок');
                else р.forEach((я, j) => { if (typeof я !== 'string') ош(`${где}.rows[${i}][${j}]`, 'ячейка не строка'); else чисто(`${где}.rows[${i}][${j}]`, я); });
            });
            break;

        case 'ex':
            if (!строка(б.de, 2)) ош(где, 'нет de'); else немецкое(`${где}.de`, б.de);
            if (!строка(б.ru, 2)) ош(где, 'нет ru'); else русское(`${где}.ru`, б.ru);
            break;

        case 'exs':
            if (!Array.isArray(б.items) || !б.items.length) ош(где, 'нет items');
            else б.items.forEach((x, i) => {
                if (!x || !строка(x.de, 2)) ош(`${где}.items[${i}]`, 'нет de'); else немецкое(`${где}.items[${i}].de`, x.de);
                if (!x || !строка(x.ru, 2)) ош(`${где}.items[${i}]`, 'нет ru'); else русское(`${где}.items[${i}].ru`, x.ru);
            });
            break;

        case 'trap':
            if (!строка(б.wrong, 2)) ош(где, 'нет wrong'); else немецкое(`${где}.wrong`, б.wrong);
            if (!строка(б.right, 2)) ош(где, 'нет right'); else немецкое(`${где}.right`, б.right);
            if (!строка(б.why, 10)) ош(где, 'нет why'); else русское(`${где}.why`, б.why);
            if (б.wrong === б.right) ош(где, 'wrong и right одинаковы');
            break;
    }
}

// ================== УПРАЖНЕНИЯ ==================

/** Подлинник токенов для build: слова в нижнем регистре, отсортированные. */
const набор = (предложение) => разложить(предложение).map((с) => (с.текст + (с.после.includes(',') ? ',' : '')).toLowerCase()).sort().join('|');

function проверитьУпражнение(у, префикс, ид) {
    const где = у && у.id ? у.id : `${префикс}[?]`;

    if (!у || typeof у !== 'object') return ош(где, 'упражнение не объект');

    if (!строка(у.id)) ош(где, 'нет id');
    else {
        if (!/^[a-z]\d*[a-z0-9]*(-[a-z0-9]+)+$/.test(у.id)) ош(где, 'id вида модуль-номер, строчные латинские буквы и цифры');
        if (префикс && !у.id.startsWith(`${префикс}-`)) ош(где, `id должен начинаться с «${префикс}-»`);
        if (ид.has(у.id)) ош(где, 'повтор id');
        ид.add(у.id);
    }

    if (!ТИПЫ.includes(у.type)) return ош(где, `неизвестный type «${у.type}»`);

    if (!строка(у.q, 3)) ош(где, 'нет q'); else {
        русское(`${где}.q`, у.q, false);
        if (у.q.length > 160) пр(где, 'q длиннее 160 знаков');
    }

    if (!строка(у.explain, 20)) ош(где, 'нет explain (минимум 20 знаков)'); else русское(`${где}.explain`, у.explain);

    if (!ИМЕНА_ТЕМ.includes(у.tag)) ош(где, `tag «${у.tag}» нет в js/data/tags.js`);

    const всеОтветы = (поле) => Array.isArray(у[поле]) && у[поле].length && у[поле].every((а) => строка(а, 2));

    switch (у.type) {
        case 'choice': {
            if (!Array.isArray(у.options) || у.options.length < 2 || у.options.length > 4) ош(где, 'options: от 2 до 4');
            else {
                у.options.forEach((о, i) => { if (!строка(о)) ош(где, `пустой options[${i}]`); else чисто(`${где}.options[${i}]`, о); });
                if (new Set(у.options).size !== у.options.length) ош(где, 'одинаковые options');
                if (!Number.isInteger(у.answer) || у.answer < 0 || у.answer >= у.options.length) ош(где, 'answer — индекс из options');
            }
            if (у.text !== undefined) чисто(`${где}.text`, у.text);
            break;
        }

        case 'gap': {
            if (!строка(у.text, 5)) { ош(где, 'нет text'); break; }
            немецкое(`${где}.text`, у.text);

            const пропусков = (у.text.match(/___/g) || []).length;
            if (!пропусков) ош(где, 'в text нет «___»');
            if (!Array.isArray(у.answer) || у.answer.length !== пропусков) { ош(где, `answer: нужно ${пропусков} элементов по числу «___»`); break; }

            у.answer.forEach((а, i) => {
                const список = Array.isArray(а) ? а : [а];
                if (!список.length || !список.every((x) => строка(x))) ош(где, `answer[${i}] пуст`);
                список.forEach((x) => немецкое(`${где}.answer[${i}]`, x));
            });

            if (у.hint !== undefined) чисто(`${где}.hint`, у.hint);
            if (/___\s*___/.test(у.text)) пр(где, 'два пропуска подряд — читатель не поймёт, где граница');
            break;
        }

        case 'build': {
            if (!строка(у.ru, 3)) ош(где, 'нет ru'); else русское(`${где}.ru`, у.ru);
            if (!всеОтветы('answer')) { ош(где, 'answer — непустой массив строк'); break; }

            у.answer.forEach((а, i) => немецкое(`${где}.answer[${i}]`, а));

            const эталон = набор(у.answer[0]);
            у.answer.forEach((а, i) => { if (набор(а) !== эталон) ош(где, `answer[${i}] — другой набор слов, чем answer[0]: плашки не сойдутся`); });

            const н = разложить(у.answer[0]).length;
            if (н < 3) пр(где, 'меньше трёх слов — нечего составлять');
            if (н > 12) ош(где, `${н} слов — больше 12, плашки не помещаются`);

            if (у.extra !== undefined) {
                if (!Array.isArray(у.extra) || !у.extra.every((х) => строка(х))) ош(где, 'extra — массив лишних слов');
                else {
                    у.extra.forEach((х) => немецкое(`${где}.extra`, х));
                    // Лишнее слово не должно складываться в верный ответ: иначе «ловушка» была бы решением
                    const слова = new Set(разложить(у.answer[0]).map((с) => с.текст.toLowerCase()));
                    if (у.extra.some((х) => слова.has(х.toLowerCase()))) пр(где, 'extra совпадает со словом ответа — читатель не поймёт, какую плашку брать');
                }
            }
            break;
        }

        case 'fix': {
            if (!строка(у.text, 5)) { ош(где, 'нет text'); break; }
            немецкое(`${где}.text`, у.text);
            if (!всеОтветы('answer')) { ош(где, 'answer — непустой массив строк'); break; }
            у.answer.forEach((а, i) => немецкое(`${где}.answer[${i}]`, а));

            if (сверитьПредложение(у.text, у.answer).ok) ош(где, 'text совпадает с одним из answer — ошибки в нём нет');
            break;
        }

        case 'join': {
            if (!Array.isArray(у.parts) || у.parts.length !== 2) { ош(где, 'parts — два предложения'); break; }
            у.parts.forEach((п, i) => немецкое(`${где}.parts[${i}]`, п));
            if (!строка(у.connector)) ош(где, 'нет connector');
            if (!всеОтветы('answer')) { ош(где, 'answer — непустой массив строк'); break; }
            у.answer.forEach((а, i) => {
                немецкое(`${где}.answer[${i}]`, а);
                if (строка(у.connector) && !new RegExp(`(^|[^\\p{L}])${у.connector}([^\\p{L}]|$)`, 'iu').test(а)) ош(где, `answer[${i}] не содержит «${у.connector}»`);
            });
            break;
        }

        case 'translate': {
            if (!строка(у.ru, 3)) ош(где, 'нет ru'); else русское(`${где}.ru`, у.ru);
            if (!всеОтветы('answer')) { ош(где, 'answer — непустой массив строк'); break; }
            у.answer.forEach((а, i) => немецкое(`${где}.answer[${i}]`, а));
            if (у.answer.length < 3) пр(где, 'в translate лучше минимум 3 варианта ответа');
            break;
        }

        case 'order': {
            if (!Array.isArray(у.items) || у.items.length < 3 || у.items.length > 8) { ош(где, 'items — от 3 до 8 частей'); break; }
            у.items.forEach((п, i) => { if (!строка(п)) ош(где, `пустой items[${i}]`); else чисто(`${где}.items[${i}]`, п); });
            if (new Set(у.items).size !== у.items.length) ош(где, 'одинаковые items — порядок не определить');
            break;
        }
    }

    if (у.diag !== undefined && у.diag !== true) ош(где, 'diag — только true или отсутствует');
}

function проверитьУпражнения(список, префикс, ид, где) {
    if (!Array.isArray(список)) return ош(где, 'exercises — не массив');
    список.forEach((у) => проверитьУпражнение(у, префикс, ид));

    // Одинаковые задания, написанные дважды
    const виды = new Set();
    for (const у of список) {
        if (!у) continue;
        const ключ = `${у.type}|${у.q}|${у.text || ''}|${у.ru || ''}|${(у.parts || []).join('+')}|${(у.options || []).join('+')}|${(у.items || []).join('+')}`;
        if (виды.has(ключ)) пр(у.id || где, 'похоже на повтор другого задания');
        виды.add(ключ);
    }
}

// ================== ФАЙЛЫ ==================

function проверитьApply(a, где, обязательно) {
    if (!a) { if (обязательно) ош(где, 'нет apply'); return; }

    if (!строка(a.task, 10)) ош(где, 'apply.task'); else русское(`${где}.apply.task`, a.task);
    if (!Array.isArray(a.checks) || a.checks.length < 3 || a.checks.length > 5) ош(где, 'apply.checks: от 3 до 5 пунктов');
    else a.checks.forEach((c, i) => { if (!строка(c, 5)) ош(где, `apply.checks[${i}]`); else русское(`${где}.apply.checks[${i}]`, c); });
    if (!строка(a.model, 20)) ош(где, 'apply.model'); else {
        немецкое(`${где}.apply.model`, a.model);
        const н = слов(a.model);
        if (н < 25 || н > 90) пр(где, `apply.model: ${н} слов (ожидается 25–90)`);
    }
    if (!строка(a.modelRu, 10)) ош(где, 'apply.modelRu'); else русское(`${где}.apply.modelRu`, a.modelRu);
}

function проверитьМодуль(м, имя, ид, статистика) {
    const тип = имя[0];    // g — грамматика, l — техника письма
    const ожидаемый = имя.match(/^[gl]\d\d/)?.[0];

    if (!м || typeof м !== 'object') return ош('модуль', 'default-экспорт не объект');
    if (м.id !== ожидаемый) ош('модуль', `id «${м.id}» не совпадает с именем файла («${ожидаемый}»)`);
    if (!Number.isInteger(м.order)) ош(м.id, 'нет order');
    if (!строка(м.title, 5)) ош(м.id, 'нет title'); else русское(`${м.id}.title`, м.title, false);
    if (!строка(м.short, 3) || м.short.length > 24) ош(м.id, 'short: от 3 до 24 знаков'); else русское(`${м.id}.short`, м.short, false);
    if (!строка(м.goal, 15)) ош(м.id, 'нет goal'); else русское(`${м.id}.goal`, м.goal);
    if (!строка(м.why, 30)) ош(м.id, 'нет why'); else русское(`${м.id}.why`, м.why);

    if (!Array.isArray(м.theory)) ош(м.id, 'theory — не массив');
    else {
        if (м.theory.length < 12) ош(м.id, `в теории ${м.theory.length} блоков — слишком мало`);
        else if (м.theory.length < 25) пр(м.id, `в теории ${м.theory.length} блоков (ожидается 25–45)`);
        м.theory.forEach((б, i) => проверитьБлок(б, `${м.id}.theory[${i}]`));

        const без = м.theory.filter((б) => б.type === 'trap').length;
        if (тип === 'g' && без < 3) пр(м.id, `ловушек ${без}, желательно не меньше 3`);
    }

    проверитьУпражнения(м.exercises, м.id, ид, м.id);

    if (Array.isArray(м.exercises)) {
        const н = м.exercises.length;
        const мин = тип === 'g' ? 36 : 20;
        if (н < мин / 1.5) ош(м.id, `упражнений ${н} — слишком мало`);
        else if (н < мин) пр(м.id, `упражнений ${н} (ожидается ${мин}+)`);
        if (н > 56) пр(м.id, `упражнений ${н} — многовато, сократите`);

        const диаг = м.exercises.filter((у) => у.diag).length;
        if (тип === 'g' && (диаг < 3 || диаг > 5)) пр(м.id, `diag у ${диаг} заданий (нужно 4)`);

        for (const у of м.exercises) статистика[у.type] = (статистика[у.type] || 0) + 1;
    }

    проверитьApply(м.apply, м.id, тип === 'g');
}

function проверитьСитуацию(с, имя, ид, статистика) {
    const ожидаемый = имя.match(/^s\d\d/)?.[0];

    if (!с || typeof с !== 'object') return ош('ситуация', 'default-экспорт не объект');
    if (с.id !== ожидаемый) ош('ситуация', `id «${с.id}» не совпадает с именем файла («${ожидаемый}»)`);
    if (!Number.isInteger(с.order)) ош(с.id, 'нет order');
    if (!строка(с.title, 5)) ош(с.id, 'нет title'); else русское(`${с.id}.title`, с.title, false);
    if (!строка(с.short, 3) || с.short.length > 24) ош(с.id, 'short: от 3 до 24 знаков');
    if (!РЕГИСТРЫ.includes(с.register)) ош(с.id, `register: ${РЕГИСТРЫ.join(' | ')}`);
    if (!строка(с.intro, 40)) ош(с.id, 'нет intro'); else русское(`${с.id}.intro`, с.intro);

    if (!Array.isArray(с.phrases) || с.phrases.length < 8) ош(с.id, 'phrases: минимум 8');
    else {
        с.phrases.forEach((ф, i) => {
            const г = `${с.id}.phrases[${i}]`;
            if (!ф || !строка(ф.de, 3)) return ош(г, 'нет de');
            немецкое(`${г}.de`, ф.de);
            if (!строка(ф.ru, 3)) ош(г, 'нет ru'); else русское(`${г}.ru`, ф.ru);
            if (!НАЗНАЧЕНИЯ.includes(ф.use)) ош(г, `use «${ф.use}» — одно из: ${НАЗНАЧЕНИЯ.join(', ')}`);
        });
        if (с.phrases.length > 18) пр(с.id, `phrases: ${с.phrases.length}, лучше 10–16`);
    }

    if (!Array.isArray(с.tasks) || с.tasks.length !== 2) ош(с.id, 'tasks: ровно два задания (A и B)');
    else с.tasks.forEach((з, k) => проверитьЗадание(з, с, k, ид));

    if (!Array.isArray(с.drills)) ош(с.id, 'drills — массив упражнений');
    else {
        if (с.drills.length < 6) пр(с.id, `drills: ${с.drills.length}, желательно 6–10`);
        проверитьУпражнения(с.drills, с.id, ид, с.id);
        for (const у of с.drills) статистика[у.type] = (статистика[у.type] || 0) + 1;
    }
}

const ОБРАЩЕНИЕ = /^\s*(Sehr geehrte[rn]?|Liebe[rn]?|Hallo|Guten (Tag|Morgen|Abend)|Hi)\b/i;
const ПРОЩАНИЕ = /(Gr(ü|ue)ß(en|e)?|Gruß|Tschüss|Bis (bald|dann|morgen|Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag)|Herzlich|Alles Gute|Danke)[^\n]*\s*$/i;

function проверитьЗадание(з, с, k, ид) {
    const где = з && з.id ? з.id : `${с.id}.tasks[${k}]`;

    if (!з || typeof з !== 'object') return ош(где, 'задание не объект');
    if (!строка(з.id) || !з.id.startsWith(`${с.id}-`)) ош(где, `id должен начинаться с «${с.id}-»`);
    if (ид.has(з.id)) ош(где, 'повтор id');
    ид.add(з.id);

    if (з.label !== (k === 0 ? 'A' : 'B')) ош(где, `label «${з.label}» — ожидается ${k === 0 ? 'A' : 'B'}`);

    if (!строка(з.situation, 30)) ош(где, 'нет situation'); else {
        немецкое(`${где}.situation`, з.situation);
        const н = слов(з.situation);
        if (н > 60) пр(где, `situation: ${н} слов — в экзамене короче`);
    }
    if (!строка(з.recipient)) ош(где, 'нет recipient'); else немецкое(`${где}.recipient`, з.recipient);
    if (!РЕГИСТРЫ.includes(з.register)) ош(где, `register: ${РЕГИСТРЫ.join(' | ')}`);

    if (!Array.isArray(з.points) || з.points.length !== 4) ош(где, 'points: ровно четыре пункта');
    else з.points.forEach((п, i) => {
        const г = `${где}.points[${i}]`;
        if (!п || !строка(п.de, 3)) return ош(г, 'нет de');
        немецкое(`${г}.de`, п.de);
        if (п.de.length > 60) пр(г, 'пункт длиннее 60 знаков — в экзамене это пара слов');
        if (!строка(п.hint, 10)) ош(г, 'нет hint'); else русское(`${г}.hint`, п.hint);
        if (!Array.isArray(п.starters) || !п.starters.length) ош(г, 'starters: минимум один'); else п.starters.forEach((x) => немецкое(`${г}.starters`, x));
        if (!Array.isArray(п.keys) || п.keys.length < 2 || п.keys.length > 6) ош(г, 'keys: от 2 до 6');
        else п.keys.forEach((x) => немецкое(`${г}.keys`, x));
    });

    const м = з.model;
    if (!м || !строка(м.text, 100)) return ош(где, 'нет model.text');

    немецкое(`${где}.model.text`, м.text);
    const н = слов(м.text);
    if (н < 60 || н > 120) пр(где, `model.text: ${н} слов (ожидается 70–100)`);
    if (!ОБРАЩЕНИЕ.test(м.text)) ош(где, 'в model.text нет обращения (Anrede) в начале');
    if (!ПРОЩАНИЕ.test(м.text.trim().split(/\n/).pop())) пр(где, 'в model.text не видно прощания (Gruß) в конце');

    if (!строка(м.ru, 40)) ош(где, 'нет model.ru'); else русское(`${где}.model.ru`, м.ru);
    if (!Array.isArray(м.notes) || м.notes.length < 4 || м.notes.length > 7) ош(где, 'model.notes: от 4 до 7');
    else м.notes.forEach((x, i) => { if (!строка(x, 20)) ош(где, `model.notes[${i}]`); else русское(`${где}.model.notes[${i}]`, x); });

    // Ключи пункта обязаны находиться в образце: иначе приложение скажет, что
    // собственный образец не раскрывает пункт
    if (Array.isArray(з.points)) {
        const текст = м.text.toLowerCase();
        з.points.forEach((п, i) => {
            if (!Array.isArray(п.keys)) return;
            if (!п.keys.some((кл) => текст.includes(String(кл).toLowerCase()))) ош(`${где}.points[${i}]`, `ни один ключ из ${JSON.stringify(п.keys)} не найден в образце`);
        });
    }

    if (з.weak) {
        немецкое(`${где}.weak.text`, з.weak.text);
        if (!Array.isArray(з.weak.fixes) || з.weak.fixes.length < 3) ош(где, 'weak.fixes: минимум 3 разбора');
        else з.weak.fixes.forEach((ф, i) => {
            немецкое(`${где}.weak.fixes[${i}].was`, ф.was);
            немецкое(`${где}.weak.fixes[${i}].wird`, ф.wird);
            if (!строка(ф.why, 10)) ош(где, `weak.fixes[${i}].why`); else русское(`${где}.weak.fixes[${i}].why`, ф.why);
            if (строка(ф.was) && !з.weak.text.includes(ф.was)) ош(где, `weak.fixes[${i}].was «${ф.was}» не найдено в weak.text`);
        });
    } else if (k === 0) {
        пр(где, 'у задания A желательно weak (слабый ответ с разбором)');
    }
}

function проверитьОшибки(семьи, ид, статистика) {
    if (!Array.isArray(семьи) || !семьи.length) return ош('errors', 'ожидается массив семей');

    for (const с of семьи) {
        if (!с || !/^f\d+$/.test(с.id || '')) { ош('errors', `id семьи «${с && с.id}» — вида f1`); continue; }
        if (!строка(с.title, 3)) ош(с.id, 'нет title');
        if (!Array.isArray(с.items) || !с.items.length) { ош(с.id, 'нет items'); continue; }

        for (const э of с.items) {
            const где = э && э.id ? э.id : `${с.id}.items[?]`;
            if (!э || !new RegExp(`^${с.id}-\\d+$`).test(э.id || '')) { ош(где, `id вида ${с.id}-01`); continue; }
            if (ид.has(э.id)) ош(где, 'повтор id');
            ид.add(э.id);

            if (!строка(э.title, 3)) ош(где, 'нет title');
            if (!строка(э.wrong, 2)) ош(где, 'нет wrong'); else немецкое(`${где}.wrong`, э.wrong);
            if (!строка(э.right, 2)) ош(где, 'нет right'); else немецкое(`${где}.right`, э.right);
            if (э.wrong === э.right) ош(где, 'wrong и right одинаковы');
            if (!строка(э.rule, 15)) ош(где, 'нет rule'); else русское(`${где}.rule`, э.rule);
            if (!строка(э.why, 15)) ош(где, 'нет why'); else русское(`${где}.why`, э.why);
            if (!ИМЕНА_ТЕМ.includes(э.tag)) ош(где, `tag «${э.tag}» нет в tags.js`);

            if (!Array.isArray(э.drills) || !э.drills.length || э.drills.length > 3) ош(где, 'drills: от 1 до 3');
            else {
                проверитьУпражнения(э.drills, э.id, ид, где);
                for (const у of э.drills) статистика[у.type] = (статистика[у.type] || 0) + 1;
            }
        }
    }
}

function проверитьФразы(группы, ид) {
    if (!Array.isArray(группы) || !группы.length) return ош('phrases', 'ожидается массив групп');

    for (const г of группы) {
        if (!г || !/^p\d+$/.test(г.id || '')) { ош('phrases', `id группы «${г && г.id}» — вида p01`); continue; }
        if (ид.has(г.id)) ош(г.id, 'повтор id');
        ид.add(г.id);

        if (!строка(г.title, 3)) ош(г.id, 'нет title');
        if (!Array.isArray(г.items) || !г.items.length) { ош(г.id, 'нет items'); continue; }

        г.items.forEach((ф, i) => {
            const где = `${г.id}[${i}]`;
            if (!ф || !строка(ф.de, 3)) return ош(где, 'нет de');
            немецкое(`${где}.de`, ф.de);
            if (!строка(ф.ru, 3)) ош(где, 'нет ru'); else русское(`${где}.ru`, ф.ru);
            if (ф.note !== undefined) русское(`${где}.note`, ф.note, false);
        });
    }
}

function проверитьСправочник(разделы, ид) {
    if (!Array.isArray(разделы) || !разделы.length) return ош('reference', 'ожидается массив разделов');

    for (const р of разделы) {
        if (!р || !строка(р.id)) { ош('reference', 'нет id раздела'); continue; }
        if (ид.has(р.id)) ош(р.id, 'повтор id');
        ид.add(р.id);
        if (!строка(р.title, 3)) ош(р.id, 'нет title');
        if (р.drill !== undefined && !строка(р.drill, 2)) ош(р.id, 'drill — ключ источника упражнений (например «g02» или «тема:verb2»)');
        if (!Array.isArray(р.blocks) || !р.blocks.length) { ош(р.id, 'нет blocks'); continue; }
        р.blocks.forEach((б, i) => проверитьБлок(б, `${р.id}.blocks[${i}]`));
    }
}

// ================== ЗАПУСК ==================

function всеФайлы() {
    const список = [];
    for (const подкаталог of ['grammar', 'letters']) {
        const п = path.join(ДАННЫЕ, подкаталог);
        if (!existsSync(п)) continue;
        for (const ф of readdirSync(п).sort()) if (ф.endsWith('.js')) список.push(path.join(п, ф));
    }
    for (const ф of ['errors.js', 'phrases.js', 'reference.js', 'cheatsheet.js', 'exam.js']) {
        const п = path.join(ДАННЫЕ, ф);
        if (existsSync(п)) список.push(п);
    }
    return список;
}

const аргументы = process.argv.slice(2);
const файлы = аргументы.length ? аргументы.map((а) => path.resolve(а)) : всеФайлы();

const ид = new Set();
const статистика = {};
let проверено = 0;

for (const полный of файлы) {
    файл = path.relative(КОРЕНЬ, полный).replace(/\\/g, '/');
    const имя = path.basename(полный);

    if (!existsSync(полный) || !statSync(полный).isFile()) { ош('файл', 'не найден'); continue; }

    let модуль;
    try {
        модуль = (await import(pathToFileURL(полный).href)).default;
    } catch (e) {
        ош('импорт', e.message);
        continue;
    }

    проверено++;

    if (/^[gl]\d\d/.test(имя)) проверитьМодуль(модуль, имя, ид, статистика);
    else if (/^s\d\d/.test(имя)) проверитьСитуацию(модуль, имя, ид, статистика);
    else if (имя === 'errors.js') проверитьОшибки(модуль, ид, статистика);
    else if (имя === 'phrases.js') проверитьФразы(модуль, ид);
    else if (имя === 'reference.js' || имя === 'cheatsheet.js' || имя === 'exam.js') проверитьСправочник(модуль, ид);
    else ош('файл', `не знаю, как проверять «${имя}»`);
}

console.log(`Проверено файлов: ${проверено}. Упражнений по типам: ${JSON.stringify(статистика)}`);

if (замечания.length) {
    console.log(`\nПредупреждения (${замечания.length}):`);
    for (const з of замечания) console.log(`  ! ${з}`);
}

if (ошибки.length) {
    console.log(`\nОШИБКИ (${ошибки.length}):`);
    for (const о of ошибки) console.log(`  ✗ ${о}`);
    process.exit(1);
}

console.log('\nОшибок нет.');
