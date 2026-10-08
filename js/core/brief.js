/**
 * Проверка текста письма.
 *
 * Это не грамматист: настоящий разбор немецкого предложения без словаря и без
 * сервера не сделать. Здесь собраны правила для ошибок, которые
 * русскоговорящие делают чаще всего и которые распознаются по форме строки:
 * глагол не в конце придаточного, нет запятой перед weil, Perfekt с haben
 * вместо sein, существительное с маленькой буквы, нет обращения.
 *
 * Принцип один: **лучше промолчать, чем соврать**. Найденное правило — это
 * «подозрение, посмотрите сами», а не приговор; если правило в сомнении,
 * его здесь нет. Каждый образец и каждый верный ответ курса прогоняются
 * через эту проверку в тестах и обязаны пройти без замечаний — так
 * ложные срабатывания находятся раньше читателя, а не после него.
 *
 * Чего проверка не знает, она не говорит: падежи, артикли и окончания ей
 * неподвластны, и их отсутствие в списке не значит, что они верны.
 *
 * Уровни замечаний:
 *   'ошибка' — почти наверняка ошибка, стоит баллов в «Korrektheit»;
 *   'совет'  — письмо можно улучшить, но ошибки нет.
 */

import { сколькоСлов } from './check.js';

// ================== РАЗБОР ТЕКСТА ==================

/**
 * Слова и знаки с их положением в тексте.
 * Слово: буквы, возможно с дефисом внутри. Число: цифры с точками внутри
 * («12.10.2026» — одно целое). Всё остальное — знак по одному.
 */
function токены(текст) {
    const re = /[\p{L}\p{M}]+(?:['’-][\p{L}\p{M}]+)*|\d+(?:[.,:]\d+)*|[^\s]/gu;
    const список = [];
    let m;

    while ((m = re.exec(текст))) {
        const т = m[0];

        список.push({
            т,
            н: т.toLowerCase(),
            от: m.index,
            до: m.index + т.length,
            слово: /^[\p{L}]/u.test(т),
            число: /^\d/.test(т),
            абзац: false
        });
    }

    // Абзацы: перевод строки между токенами — граница, как и точка
    for (let i = 1; i < список.length; i++) {
        const между = текст.slice(список[i - 1].до, список[i].от);
        список[i].абзац = /\n/.test(между);
    }

    return список;
}

const КОНЕЦ_ПРЕДЛОЖЕНИЯ = /^[.!?]$/;
const РАЗДЕЛИТЕЛЬ = /^[,;:.!?]$/;

/**
 * Группы слов между знаками препинания и переводами строки.
 *
 * У каждой группы есть `знакДо` — разделитель, после которого она началась:
 * null в начале текста, ',' внутри предложения, '.' '!' '?' или '¶' (новая
 * строка) на границе предложений. По нему видно, начинает ли группа предложение.
 */
function клаузы(ток) {
    const группы = [];
    let тек = [];
    let знак = null;

    const закрыть = () => {
        if (тек.length) {
            тек.знакДо = знак;
            группы.push(тек);
        }
        тек = [];
    };

    for (const т of ток) {
        if (т.абзац && тек.length) { закрыть(); знак = '¶'; }

        if (РАЗДЕЛИТЕЛЬ.test(т.т)) {
            закрыть();
            знак = т.т;
        } else if (т.слово || т.число) {
            тек.push(т);
        }
    }

    закрыть();
    return группы;
}

const НАЧАЛО_ПРЕДЛОЖЕНИЯ = (к) => к.знакДо === null || /^[.!?¶:]$/.test(к.знакДо);

// ================== СЛОВАРИКИ ==================

const ПОДЧИНИТЕЛЬНЫЕ = new Set(['weil', 'dass', 'ob', 'wenn', 'obwohl', 'bevor', 'nachdem', 'falls', 'sobald']);

/**
 * Спрягаемые формы, которые недвусмысленны. Формы вроде «haben» или «werden»
 * совпадают с инфинитивом, и в «weil ich keine Zeit haben werde» «haben» —
 * не ошибка: их проверяют отдельно и осторожнее.
 */
const СПРЯГАЕМЫЕ = new Set([
    'bin', 'bist', 'ist', 'sind', 'seid', 'war', 'waren', 'warst', 'wart',
    'habe', 'hast', 'hat', 'habt', 'hatte', 'hatten', 'hattest',
    'wird', 'werde', 'wirst', 'wurde', 'wurden',
    'kann', 'kannst', 'konnte', 'konnten', 'könnt',
    'muss', 'musst', 'musste', 'mussten', 'müsst',
    'will', 'willst', 'wollte', 'wollten', 'wollt',
    'darf', 'darfst', 'durfte', 'durften', 'dürft',
    'soll', 'sollst', 'sollte', 'sollten', 'sollt',
    'möchte', 'möchten', 'möchtest', 'möchtet',
    'würde', 'würden', 'würdest', 'könnte', 'könnten', 'hätte', 'hätten', 'wäre', 'wären', 'dürfte'
]);

/** Формы, одинаковые с инфинитивом: считаем спрягаемыми, только если дальше не инфинитив. */
const ДВОЙНЫЕ = new Set(['haben', 'können', 'müssen', 'wollen', 'dürfen', 'sollen']);

const ИНФИНИТИВЫ_ВСПОМ = new Set(['werden', 'sein', 'haben', 'können', 'müssen', 'wollen', 'dürfen', 'sollen']);
const МОДАЛЬНЫЕ_ИНФ = new Set(['können', 'müssen', 'wollen', 'dürfen', 'sollen']);

const СОЧИНИТЕЛЬНЫЕ = new Set(['und', 'oder', 'aber', 'sondern', 'denn']);

/** Слова перед союзом, при которых запятой перед ним нет или она стоит раньше. */
const ПЕРЕД_СОЮЗОМ_БЕЗ_ЗАПЯТОЙ = new Set([
    'und', 'oder', 'aber', 'sondern', 'auch', 'nur', 'selbst', 'gerade', 'besonders', 'vor', 'allem',
    'so', 'als', 'kurz', 'erst', 'sogar', 'denn'
]);

const ВРЕМЕННЫЕ_НАЧАЛА = new Set([
    'heute', 'morgen', 'gestern', 'jetzt', 'dann', 'danach', 'deshalb', 'deswegen', 'darum', 'trotzdem',
    'außerdem', 'leider', 'hoffentlich', 'vielleicht', 'natürlich', 'später', 'zuerst', 'bald', 'also',
    'übrigens', 'sonst', 'schließlich', 'zuletzt', 'immer', 'manchmal'
]);

const ЛИЧНЫЕ = new Set(['ich', 'du', 'er', 'wir', 'ihr', 'man']);

const ПРЕДЛОГИ_ВРЕМЕНИ = new Set(['am', 'im', 'um', 'seit', 'vor', 'nach', 'in', 'ab', 'bis', 'nächste', 'nächsten', 'letzte', 'letzten', 'diese', 'diesen', 'dieses']);

const ВНУТРИ_ГРУППЫ_ВРЕМЕНИ = new Set(['nächsten', 'nächste', 'nächster', 'letzten', 'letzte', 'diesen', 'dieser', 'kommenden', 'vergangenen', 'um', 'uhr', 'bis', 'von']);

const БЕЗ_GE_С_SEIN =new Set(['gegangen', 'gekommen', 'geblieben', 'gewesen', 'aufgestanden', 'angekommen', 'zurückgekommen', 'eingezogen', 'passiert', 'geworden']);
const С_HABEN_НЕ_SEIN = new Set(['gehabt', 'geholfen', 'gearbeitet', 'gelernt']);

const ПРИЧАСТИЯ_ОБЫЧНЫЕ = new Set([
    'angerufen', 'gesehen', 'gemacht', 'geschrieben', 'gesagt', 'bekommen', 'gekauft', 'bestellt', 'bezahlt',
    'besucht', 'gefragt', 'geschickt', 'geholt', 'abgeholt', 'gebracht', 'mitgebracht', 'eingeladen',
    'gehört', 'gesucht', 'gefunden', 'genommen', 'gelesen', 'gegeben', 'getroffen', 'vergessen', 'verloren'
]);

const ЧЛЕНЫ_И_МЕСТОИМЕНИЯ = new Set([
    'sie', 'mich', 'dich', 'ihn', 'uns', 'euch', 'ihnen', 'mir', 'dir', 'ihm',
    'den', 'die', 'das', 'dem', 'einen', 'eine', 'ein', 'meine', 'meinen', 'mein', 'meinem', 'meiner',
    'ihre', 'ihren', 'ihr', 'unsere', 'unseren', 'diese', 'diesen', 'dieses'
]);

const МОДАЛЬНЫЕ_ВСЕ = new Set([
    'kann', 'kannst', 'können', 'könnt', 'konnte', 'könnte', 'könnten',
    'muss', 'musst', 'müssen', 'müsst', 'musste',
    'will', 'willst', 'wollen', 'wollt', 'wollte',
    'darf', 'darfst', 'dürfen', 'dürft', 'dürfte',
    'soll', 'sollst', 'sollen', 'sollt', 'sollte',
    'möchte', 'möchten', 'möchtest', 'möchtet'
]);

const ИНФИНИТИВЫ_ПРОСТЫЕ = new Set([
    'fragen', 'sagen', 'kommen', 'gehen', 'bringen', 'schicken', 'helfen', 'machen', 'schreiben', 'bitten',
    'besuchen', 'abholen', 'treffen', 'sehen', 'lesen', 'nehmen', 'geben', 'zeigen', 'erklären', 'bezahlen'
]);

/** Существительные из писем, которые часто пишут с маленькой. Только однозначные: «frage», «miete», «dank» — ещё и глаголы. */
const СУЩЕСТВИТЕЛЬНЫЕ = new Set([
    'termin', 'termine', 'kurs', 'kurse', 'wohnung', 'wohnungen', 'brief', 'briefe', 'hausaufgaben', 'hausaufgabe',
    'entschuldigung', 'arzt', 'ärzte', 'ärztin', 'schule', 'schulen', 'kind', 'kinder', 'tochter', 'sohn', 'mann',
    'zeit', 'problem', 'probleme', 'antwort', 'rechnung', 'vertrag', 'heizung', 'vermieter',
    'lehrer', 'lehrerin', 'woche', 'wochen', 'monat', 'monate', 'jahr', 'jahre', 'geld', 'arbeit', 'chef',
    'chefin', 'kollege', 'kollegin', 'hilfe', 'information', 'informationen', 'fieber', 'krankheit',
    'unterricht', 'verständnis', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag', 'sonntag',
    'januar', 'februar', 'märz', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'dezember',
    'adresse', 'nummer', 'datum', 'bescheinigung', 'einladung', 'party', 'fest', 'geburtstag', 'gruß', 'kündigung',
    'beschwerde', 'lärm', 'nachbar', 'nachbarn', 'nachbarin', 'schlüssel', 'formular', 'unterlagen', 'bestätigung',
    'kunde', 'kundennummer', 'bestellung', 'ware', 'jacke', 'größe', 'rückgabe', 'reparatur', 'praktikum',
    'stelle', 'urlaub', 'schicht', 'gespräch', 'elternabend', 'ausflug', 'lehrerin', 'klasse', 'platz', 'preis',
    'anmeldung', 'besichtigung', 'miete', 'nebenkosten', 'termine', 'hausverwaltung', 'ergebnis', 'wunsch'
].filter((с) => !['miete', 'stelle', 'ware', 'fest', 'mai'].includes(с)));
// «mai», «fest» и «stelle» убраны: «mai» бывает в «Mai», но «fest» — прилагательное, «stelle» — глагол,
// «ware» — форма «wäre» в чужой записи

const ОПЕЧАТКИ = [
    [/\b(villeicht|vieleicht|vielicht|vileicht)\b/i, 'vielleicht'],
    [/\b(endschuldigung|entschuldigun|entschudigung|entschuldiegung)\b/i, 'Entschuldigung'],
    [/\b(nähmlich|nehmlich)\b/i, 'nämlich'],
    [/\bgarnicht\b/i, 'gar nicht'],
    [/\bvorallem\b/i, 'vor allem'],
    [/\b(bischen|bissschen)\b/i, 'bisschen'],
    [/\b(interresse|interese|intresse)\b/i, 'Interesse'],
    [/\b(addresse|adrese)\b/i, 'Adresse'],
    [/\b(verständniss)\b/i, 'Verständnis'],
    [/\b(termien|termi?n)\b(?<![Tt]ermin)/i, 'Termin'],
    [/\b(wiedersehn|wiederhören)\b/i, 'Wiedersehen'],
    [/\b(freundlichen\s+grüßen)\b/, 'Freundlichen Grüßen'],
    [/\b(mit\s+freundlichen\s+grüßen)\b/, 'Mit freundlichen Grüßen'],
    [/\b(zu\s+hause)\b/, 'zu Hause'],
    [/\b(nach\s+hause)\b/, 'nach Hause'],
    [/\b(heute|gestern|morgen|übermorgen|vorgestern)\s+(abend|morgen|mittag|nacht)\b/, 'heute Abend, gestern Morgen …'],
    [/\b(tschüß)\b/i, 'tschüss'],
    [/\bseid\s+(?:ich|er|sie)\b/i, null]    // заглушка: формы seit/seid не угадываются
].filter(([, исправление]) => исправление !== null);

// ================== ПРАВИЛА ==================

function замечание(id, уровень, текст, от = null, до = null) {
    return { id, уровень, текст, от, до };
}

function слово(т) { return т.н; }

/** Глагол не в конце придаточного: «weil ich bin krank». */
function проверитьПридаточные(ток, найти) {
    for (const к of клаузы(ток)) {
        for (let s = 0; s < к.length; s++) {
            if (!ПОДЧИНИТЕЛЬНЫЕ.has(слово(к[s]))) continue;

            // «als ob» и «so dass» не наш случай, «ob» после «als» — пропускаем
            if (слово(к[s]) === 'ob' && s > 0 && слово(к[s - 1]) === 'als') continue;

            const конец = к.length - 1;

            for (let i = s + 1; i <= Math.min(конец - 1, s + 6); i++) {
                const ф = слово(к[i]);
                const спрягаемое = СПРЯГАЕМЫЕ.has(ф) || ДВОЙНЫЕ.has(ф);

                if (!спрягаемое) continue;

                const дальше = слово(к[i + 1]);

                // Сочинение: «weil ich krank bin und mein Sohn …» — дальше другой разговор
                if (СОЧИНИТЕЛЬНЫЕ.has(дальше)) break;

                // «haben werden», «können müssen»: перед нами инфинитивы, а не ошибка
                if (ДВОЙНЫЕ.has(ф) && (ИНФИНИТИВЫ_ВСПОМ.has(дальше))) break;
                if (ДВОЙНЫЕ.has(ф) && ф !== 'haben' && i === конец) break;

                // «ob ich frei haben kann»: если придаточное и так заканчивается
                // спрягаемым глаголом, «haben» посередине — инфинитив
                if (ДВОЙНЫЕ.has(ф) && СПРЯГАЕМЫЕ.has(слово(к[конец]))) break;

                // Ersatzinfinitiv: «weil ich nicht habe kommen können»
                if (/^(habe|hat|haben|hatte|hatten|hätte|hätten)$/.test(ф) && МОДАЛЬНЫЕ_ИНФ.has(слово(к[конец]))) break;
                // «dass ich Sie hätte anrufen sollen»
                if (/^(hätte|hätten|wäre|wären)$/.test(ф)) break;

                // Если дальше стоит только «werden», «sein» — тоже инфинитивы
                if (ДВОЙНЫЕ.has(ф) && ф === 'haben' && i + 1 <= конец && ИНФИНИТИВЫ_ВСПОМ.has(слово(к[конец]))) break;

                найти(замечание(
                    'глагол-в-конец',
                    'ошибка',
                    `После «${к[s].т}» спрягаемый глагол уходит в конец придаточного: «${к[i].т}» должно стоять последним.`,
                    к[s].от,
                    к[Math.min(i + 1, конец)].до
                ));
                break;
            }
        }
    }
}

/** Запятая перед придаточным. */
function проверитьЗапятые(ток, найти) {
    for (let i = 1; i < ток.length; i++) {
        const т = ток[i];
        if (!т.слово || !ПОДЧИНИТЕЛЬНЫЕ.has(т.н)) continue;

        const пред = ток[i - 1];

        // Начало предложения, абзаца или после знака — запятая не нужна
        if (т.абзац || /^[,;:.!?«»"“”„()-]$/.test(пред.т)) continue;
        if (пред.слово && ПЕРЕД_СОЮЗОМ_БЕЗ_ЗАПЯТОЙ.has(пред.н)) continue;
        if (т.н === 'ob' && пред.н === 'als') continue;

        // Придаточное в начале: «Weil ich krank bin, …» — до него ничего нет
        if (i === 0) continue;

        найти(замечание(
            'запятая-придаточное',
            'ошибка',
            `Перед «${т.т}» нужна запятая: придаточное всегда выделяется запятой.`,
            пред.от,
            т.до
        ));
    }
}

const ВСПОМОГАТЕЛЬНЫЕ = /^(habe|hast|hat|haben|habt|hatte|hatten|bin|bist|ist|sind|seid|war|waren)$/;

/**
 * Первое слово после `от`, подходящее под условие, но не дальше следующего
 * вспомогательного глагола или союза: после них начинается другая часть
 * предложения, и «gegangen» в ней уже не относится к «habe» из первой.
 */
function ближайшее(к, от, условие) {
    for (let k = от + 1; k < к.length; k++) {
        if (ВСПОМОГАТЕЛЬНЫЕ.test(к[k].н) || СОЧИНИТЕЛЬНЫЕ.has(к[k].н)) return -1;
        if (условие(к[k])) return k;
    }

    return -1;
}

/** Perfekt: с каким вспомогательным глаголом. */
function проверитьПерфект(ток, найти) {
    for (const к of клаузы(ток)) {
        for (let i = 0; i < к.length; i++) {
            const ф = слово(к[i]);

            if (/^(habe|hast|hat|haben|habt|hatte|hatten)$/.test(ф)) {
                const j = ближайшее(к, i, (т) => БЕЗ_GE_С_SEIN.has(т.н));
                if (j > -1) {
                    найти(замечание(
                        'perfekt-sein',
                        'ошибка',
                        `С «${к[j].т}» Perfekt строится с «sein»: «ich bin ${к[j].т}», а не «habe».`,
                        к[i].от,
                        к[j].до
                    ));
                    break;
                }
            }

            if (/^(bin|bist|ist|sind|seid|war|waren)$/.test(ф)) {
                const j = ближайшее(к, i, (т) => С_HABEN_НЕ_SEIN.has(т.н));
                if (j > -1) {
                    найти(замечание(
                        'perfekt-haben',
                        'ошибка',
                        `С «${к[j].т}» Perfekt строится с «haben»: «ich habe ${к[j].т}», а не «bin».`,
                        к[i].от,
                        к[j].до
                    ));
                    break;
                }
            }
        }
    }
}

/** «Ich habe angerufen Sie»: Partizip II не в конце. */
function проверитьРамку(ток, найти) {
    for (const к of клаузы(ток)) {
        for (let i = 0; i < к.length - 1; i++) {
            const ф = слово(к[i]);

            if (ПРИЧАСТИЯ_ОБЫЧНЫЕ.has(ф) && ЧЛЕНЫ_И_МЕСТОИМЕНИЯ.has(слово(к[i + 1]))
                && к.slice(0, i).some((т) => ВСПОМОГАТЕЛЬНЫЕ.test(т.н))) {
                найти(замечание(
                    'партицип-в-конец',
                    'ошибка',
                    `Partizip II «${к[i].т}» стоит в самом конце предложения; всё остальное — между «habe/bin» и ним.`,
                    к[i].от,
                    к[i + 1].до
                ));
                break;
            }

            if (ИНФИНИТИВЫ_ПРОСТЫЕ.has(ф) && ЧЛЕНЫ_И_МЕСТОИМЕНИЯ.has(слово(к[i + 1]))
                && к.slice(0, i).some((т) => МОДАЛЬНЫЕ_ВСЕ.has(т.н))) {
                найти(замечание(
                    'инфинитив-в-конец',
                    'ошибка',
                    `Инфинитив «${к[i].т}» после модального глагола стоит в самом конце: «Ich möchte Sie etwas fragen».`,
                    к[i].от,
                    к[i + 1].до
                ));
                break;
            }
        }
    }
}

/** «Heute ich bin …»: после первого слова глагол, не подлежащее. */
function проверитьИнверсию(ток, найти) {
    const началаПредложений = [];

    for (let i = 0; i < ток.length; i++) {
        if (!ток[i].слово) continue;

        const пред = ток[i - 1];
        if (i === 0 || ток[i].абзац || КОНЕЦ_ПРЕДЛОЖЕНИЯ.test(пред.т) || пред.т === ':') {
            // «12. Oktober» и «z. B.»: точка не конец предложения
            const прежний = ток[i - 2];
            if (пред && пред.т === '.' && прежний && (прежний.число || прежний.т.length <= 2)) continue;
            началаПредложений.push(i);
        }
    }

    for (const i of началаПредложений) {
        const а = ток[i];

        // Одно слово + подлежащее: «Heute ich», «Leider ich»
        if (ВРЕМЕННЫЕ_НАЧАЛА.has(а.н)) {
            const б = ток[i + 1];
            if (б && б.слово && ЛИЧНЫЕ.has(б.н)) {
                найти(замечание(
                    'инверсия',
                    'ошибка',
                    `После «${а.т}» сначала глагол, потом «${б.т}»: «${а.т} … ${б.т}» — глагол на втором месте.`,
                    а.от,
                    б.до
                ));
            }
            continue;
        }

        // Группа времени: «Am Montag ich», «Nächste Woche wir». Слова внутри
        // группы — существительные, числа или «nächsten/um/Uhr»: иначе между
        // группой и подлежащим мог встать глагол («Ab Januar arbeite ich»)
        if (ПРЕДЛОГИ_ВРЕМЕНИ.has(а.н)) {
            for (let n = 1; n <= 4; n++) {
                const б = ток[i + n];
                if (!б || !(б.слово || б.число)) break;

                const годится = /^[\p{Lu}\d]/u.test(б.т) || ВНУТРИ_ГРУППЫ_ВРЕМЕНИ.has(б.н);
                if (!ЛИЧНЫЕ.has(б.н) && !годится) break;

                if (ЛИЧНЫЕ.has(б.н) && n >= 2) {
                    const в = ток[i + n + 1];
                    // Подлежащее сразу за группой и далее глагол-на-втором-месте не стоит между ними
                    if (в && в.слово && !ЛИЧНЫЕ.has(в.н) && /^[a-zäöüß]/.test(в.т)) {
                        найти(замечание(
                            'инверсия',
                            'ошибка',
                            `После «${ток.slice(i, i + n).map((т) => т.т).join(' ')}» сначала глагол, потом «${б.т}».`,
                            а.от,
                            б.до
                        ));
                    }
                    break;
                }
            }
        }
    }
}

/** Заглавные: «ich» в начале, «Ich» в середине, существительные. */
function проверитьРегистр(ток, найти) {
    for (let i = 0; i < ток.length; i++) {
        const т = ток[i];
        if (!т.слово) continue;

        const пред = ток[i - 1];

        // «Ich» посреди предложения и сразу после обращения с запятой: после
        // запятой письмо продолжается с маленькой буквы, даже с новой строки
        if (т.т === 'Ich' && пред) {
            const начало = КОНЕЦ_ПРЕДЛОЖЕНИЯ.test(пред.т) || пред.т === ':' || /^["„«]$/.test(пред.т)
                || (т.абзац && пред.т !== ',');

            if (!начало) {
                найти(замечание('ich-заглавная', 'ошибка',
                    '«ich» пишется с маленькой буквы, если не стоит в начале предложения. После обращения с запятой тоже: «Sehr geehrte Frau …, ich schreibe …».',
                    т.от, т.до));
            }
        }

        // Существительные с маленькой буквы
        if (СУЩЕСТВИТЕЛЬНЫЕ.has(т.н) && т.т === т.н) {
            // «am montag» тоже ошибка, но в «zu hause» разбор отдельный
            найти(замечание('существительное-строчная', 'ошибка',
                `«${т.т}» — существительное, в немецком оно пишется с большой буквы: «${т.т[0].toUpperCase()}${т.т.slice(1)}».`,
                т.от, т.до));
        }
    }
}

/** Начало предложения с маленькой буквы. */
function проверитьНачалоПредложения(ток, найти) {
    for (let i = 1; i < ток.length; i++) {
        const т = ток[i];
        const пред = ток[i - 1];

        if (!т.слово || !/^[a-zäöüß]/.test(т.т)) continue;
        if (!КОНЕЦ_ПРЕДЛОЖЕНИЯ.test(пред.т)) continue;

        const прежний = ток[i - 2];
        // «12. Oktober», «z. B.», «Nr. 5»
        if (пред.т === '.' && (!прежний || прежний.число || прежний.т.length <= 3)) continue;
        if (пред.т === '.' && /^(bzw|usw|ca|ggf|evtl|inkl|tel|str|dr|nr|etc)$/i.test(прежний.т)) continue;

        найти(замечание('начало-строчная', 'ошибка',
            'Предложение начинается с большой буквы.', т.от, т.до));
    }
}

// ---------------- порядок слов: ещё несколько частых ошибок ----------------

const СВЯЗКИ_ИНВЕРСИИ = new Set(['deshalb', 'deswegen', 'darum', 'trotzdem', 'außerdem', 'danach', 'also', 'sonst', 'dann']);
const ПОДЧИНИТЕЛЬНЫЕ_ПЕРВЫЕ = new Set(['wenn', 'weil', 'obwohl', 'als', 'bevor', 'nachdem', 'falls', 'sobald']);
const ПОДЛЕЖАЩИЕ_ПЕРВЫЕ = new Set(['ich', 'du', 'er', 'wir', 'ihr', 'man', 'es', 'sie']);
const ВОПРОСНЫЕ = new Set(['wann', 'wo', 'wie', 'warum', 'wohin', 'woher', 'wieso', 'weshalb']);
const ГЛАГОЛЫ_3Л = new Set([
    'beginnt', 'kostet', 'kommt', 'geht', 'gibt', 'findet', 'steht', 'liegt', 'endet', 'dauert', 'öffnet',
    'fährt', 'hilft', 'passiert', 'funktioniert', 'stimmt', 'gilt', 'reicht', 'startet', 'fängt'
]);
const СПРОСИТЬ = new Set(['wissen', 'weiß', 'fragen', 'frage', 'sagen', 'erklären', 'zeigen', 'mitteilen', 'erfahren']);

const ПОЗДНИЕ = new Set([
    'morgen', 'heute', 'gestern', 'jetzt', 'bald', 'später', 'am', 'im', 'um', 'ab', 'bis', 'vor', 'nach', 'in',
    'zu', 'mit', 'bei', 'für', 'den', 'die', 'das', 'dem', 'einen', 'eine', 'ein', 'sie', 'mich', 'uns', 'ihn', 'mir', 'ihnen'
]);

/** Инфинитивы, которые читатель вправе поставить после модального глагола. */
const ИНФИНИТИВЫ = new Set([
    'kommen', 'gehen', 'machen', 'sagen', 'fragen', 'helfen', 'arbeiten', 'lernen', 'schreiben', 'lesen', 'sehen',
    'treffen', 'besuchen', 'anrufen', 'abholen', 'bringen', 'schicken', 'bezahlen', 'bleiben', 'fahren', 'warten',
    'kaufen', 'bestellen', 'antworten', 'absagen', 'verschieben', 'vereinbaren', 'sprechen', 'wissen', 'nehmen',
    'geben', 'zeigen', 'erklären', 'wohnen', 'suchen', 'finden', 'brauchen', 'spielen', 'essen', 'trinken',
    'schlafen', 'verstehen', 'vergessen', 'mitbringen', 'einladen', 'ausfüllen', 'unterschreiben', 'anmelden',
    'kündigen', 'reparieren', 'öffnen', 'teilnehmen', 'bitten', 'holen', 'sein', 'haben', 'werden', 'anfangen',
    'umziehen', 'aufstehen', 'zurückkommen', 'vorbeikommen', 'abgeben', 'mitkommen', 'ankommen', 'abfahren'
]);

/** Причастия переходных глаголов: с «sein» они стоят только в пассиве. */
const ПЕРЕХОДНЫЕ = new Set([
    'besucht', 'abgeholt', 'gekauft', 'gemacht', 'geschrieben', 'gesehen', 'gelesen', 'bekommen', 'angerufen',
    'mitgebracht', 'geschickt', 'gefunden', 'genommen', 'gegeben', 'getroffen', 'vergessen', 'erhalten', 'bezahlt'
]);

/** Всё, что похоже на «ge» + приставка, но настоящее слово. */
const НАСТОЯЩИЕ_ПРИЧАСТИЯ = new Set([
    'gebeten', 'gebetet', 'gebessert', 'gebellt', 'gebeugt', 'gebettet', 'gebeichtet', 'geantwortet', 'geeinigt',
    'geeignet', 'geeilt', 'geerbt', 'geerntet', 'geerdet', 'geabelt', 'geaichtet', 'geahndet', 'geanbetet'
]);

const ЗАВИСИТ_ОТ_СУЩЕГО = new Set(['etwas', 'nichts', 'viel', 'genug', 'wenig', 'mehr', 'alles', 'was', 'einiges', 'vieles', 'zeit', 'lust']);

const МУЖСКИЕ ='(?:Termin|Brief|Kurs|Arzt|Vertrag|Platz|Antrag|Anruf|Besuch|Wunsch|Vorschlag|Plan|Test|Job|Mietvertrag|Arzttermin|Lehrer|Bruder|Freund|Schlüssel|Fehler|Ausweis|Pass|Sohn|Mann|Urlaub|Ausflug|Bericht|Umzug|Unterricht|Computer)';

function проверитьПорядокЕщё(ток, исходный, найти) {
    const группы = клаузы(ток);

    for (let g = 0; g < группы.length; g++) {
        const к = группы[g];
        const следующая = группы[g + 1];

        // «… , denn ich Fieber habe»: после denn порядок прямой, глагол не в конце
        if (к[0].н === 'denn' && к.length >= 4 && СПРЯГАЕМЫЕ.has(слово(к[к.length - 1])) && !СПРЯГАЕМЫЕ.has(слово(к[2]))) {
            найти(замечание('denn-порядок', 'ошибка',
                'После «denn» порядок слов прямой, глагол не уходит в конец: «denn ich habe Fieber». В конец глагол уходит только после «weil».',
                к[0].от, к[к.length - 1].до));
        }

        // «… , deshalb ich bleibe»: связка занимает первое место, и глагол идёт сразу за ней
        if (к.знакДо === ',' && СВЯЗКИ_ИНВЕРСИИ.has(к[0].н) && к[1] && ЛИЧНЫЕ.has(к[1].н)) {
            найти(замечание('инверсия', 'ошибка',
                `После «${к[0].т}» сначала глагол, потом «${к[1].т}»: «${к[0].т} bleibe ich …», а не «${к[0].т} ${к[1].т} …».`,
                к[0].от, к[1].до));
        }

        // «Wenn ich Zeit habe, ich komme»: главная часть после придаточного начинается с глагола
        if (следующая && НАЧАЛО_ПРЕДЛОЖЕНИЯ(к) && ПОДЧИНИТЕЛЬНЫЕ_ПЕРВЫЕ.has(к[0].н)
            && следующая.знакДо === ',' && ПОДЛЕЖАЩИЕ_ПЕРВЫЕ.has(слово(следующая[0])) && следующая.length >= 2) {
            найти(замечание('после-придаточного', 'ошибка',
                `После придаточного предложения («${к[0].т} …,») главная часть начинается с глагола: «…, komme ich gern», а не «…, ${следующая[0].т} komme».`,
                следующая[0].от, следующая[1].до));
        }

        // «Ich möchte wissen, wann beginnt der Kurs»: в косвенном вопросе глагол в конец
        if (g > 0 && к.знакДо === ',' && ВОПРОСНЫЕ.has(к[0].н) && к[1]
            && (СПРЯГАЕМЫЕ.has(слово(к[1])) || ГЛАГОЛЫ_3Л.has(слово(к[1])))
            && группы[g - 1].some((т) => СПРОСИТЬ.has(т.н))) {
            найти(замечание('косвенный-вопрос', 'ошибка',
                `В косвенном вопросе после «${к[0].т}» сначала подлежащее, а глагол уходит в конец: «…, ${к[0].т} der Kurs ${к[1].т === 'beginnt' ? 'beginnt' : '… ' + к[1].т}».`,
                к[0].от, к[1].до));
        }

        // Модальный глагол + «zu»: «Ich muss zu gehen»
        const м = к.findIndex((т) => МОДАЛЬНЫЕ_ВСЕ.has(т.н));
        if (м > -1) {
            for (let i = м + 1; i < к.length - 1; i++) {
                // «etwas zu trinken», «nichts zu essen», «viel zu tun» — это не «zu» после модального
                const предыдущее = слово(к[i - 1]);
                if (к[i].н === 'zu' && ИНФИНИТИВЫ.has(слово(к[i + 1])) && !ЗАВИСИТ_ОТ_СУЩЕГО.has(предыдущее)
                    && !к.slice(м + 1, i).some((т) => ИНФИНИТИВЫ.has(т.н) || /en$/.test(т.н))) {
                    найти(замечание('модальный-zu', 'ошибка',
                        `После модального глагола инфинитив идёт без «zu»: «${к[м].т} … ${к[i + 1].т}».`,
                        к[i].от, к[i + 1].до));
                    break;
                }
            }
        }

        // «Ich kann nicht kommen morgen»: инфинитив после модального — последнее слово
        if (м > -1) {
            for (let i = м + 1; i < к.length - 1; i++) {
                if (ИНФИНИТИВЫ.has(слово(к[i])) && ПОЗДНИЕ.has(слово(к[i + 1])) && i + 1 < к.length) {
                    // «sein» и «haben» бывают вспомогательными: «Ich kann Sie angerufen haben»
                    if (['sein', 'haben', 'werden'].includes(слово(к[i]))) continue;
                    найти(замечание('инфинитив-в-конец', 'ошибка',
                        `Инфинитив «${к[i].т}» после модального глагола стоит в самом конце: «Ich kann morgen nicht kommen».`,
                        к[i].от, к[i + 1].до));
                    break;
                }
            }
        }

        // «Ich bin meine Mutter besucht»: переходный глагол с sein
        const б = к.findIndex((т, k) => /^(bin|sind)$/.test(т.н) && k > 0 && /^(ich|wir)$/.test(слово(к[k - 1])));
        if (б > -1) {
            const j = к.findIndex((т, k) => k > б + 1 && ПЕРЕХОДНЫЕ.has(т.н));
            const между = j > -1 ? к.slice(б + 1, j) : [];
            const объект = между.some((т) => /^(den|die|das|einen|eine|ein|meinen|meine|mein|seinen|seine|unseren|unsere|ihren|ihre|diesen|diese)$/.test(т.н));
            const пассив = j > -1 && к.slice(j + 1).some((т) => т.н === 'worden');

            if (j > -1 && объект && !пассив) {
                найти(замечание('perfekt-haben', 'ошибка',
                    `С «${к[j].т}» и дополнением Perfekt строится с «haben»: «ich habe … ${к[j].т}», а не «bin».`,
                    к[б].от, к[j].до));
            }
        }
    }

    // Лишнее «ge-» перед приставкой: «geanrufen», «gebekommen», «geverstanden»
    const причастие = /\bge(be|ver|er|ent|zer|an|auf|aus|mit|ab|ein|zu|vor|nach)([a-zäöüß]{2,})(t|en)\b/g;
    let м;
    while ((м = причастие.exec(исходный))) {
        if (НАСТОЯЩИЕ_ПРИЧАСТИЯ.has(м[0].toLowerCase())) continue;
        if (/^(an|auf|aus|mit|ab|ein|zu|vor|nach)$/.test(м[1]) && /^(ge)/.test(м[2])) continue;

        найти(замечание('причастие-ge', 'ошибка',
            `Причастие «${м[0]}» построено неверно: у глаголов с неотделяемой приставкой (be-, ver-, er-, ent-) «ge-» нет, у отделяемых «ge» стоит между приставкой и корнем («an${м[0].slice(4)}» → «angerufen»).`,
            м.index, м.index + м[0].length));
    }

    // Падеж после частых глаголов
    const дательные = /\b(helfe|helfen|hilft|helft|danke|danken|dankt|antworte|antworten|antwortet|gratuliere|gratulieren)\s+(mich|dich|ihn)\b/gi;
    while ((м = дательные.exec(исходный))) {
        найти(замечание('падеж-глагола', 'ошибка',
            `Глагол «${м[1]}» требует Dativ: «${м[1]} ${{ mich: 'mir', dich: 'dir', ihn: 'ihm' }[м[2].toLowerCase()]}».`,
            м.index, м.index + м[0].length));
    }

    const винительные = /\b(rufe|rufen|ruft|besuche|besuchen|besucht|kenne|kennen|kennt)\s+(Ihnen|ihnen|ihm)\b/g;
    while ((м = винительные.exec(исходный))) {
        найти(замечание('падеж-глагола', 'ошибка',
            `Глагол «${м[1]}» требует Akkusativ: «${м[1]} ${м[2].toLowerCase() === 'ihm' ? 'ihn' : 'Sie'}».`,
            м.index, м.index + м[0].length));
    }

    // «ein Termin» вместо «einen Termin» после глаголов с Akkusativ.
    // Только при подлежащем-местоимении рядом с глаголом: «hat mein Sohn Unterricht» —
    // здесь «mein Sohn» подлежащее, и Nominativ верен
    const ГЛАГОЛЫ_AKK = 'habe|hast|hat|haben|habt|brauche|brauchst|braucht|brauchen|bekomme|bekommst|bekommt|bekommen|suche|suchen|mache|machen|schicke|schreibe|vereinbare|vereinbaren|kenne|kennen|nehme|kaufe|bestelle|möchte|möchten|hätte';
    const ПОДЛ = 'ich|wir|du|er|ihr|man';
    const мужскиеШаблоны = [
        new RegExp(`\\b(?:${ПОДЛ})\\s+(?:\\p{L}+\\s+)?(?:${ГЛАГОЛЫ_AKK})\\s+(?:\\p{L}+\\s+)?(ein|kein|mein|dein|unser|euer)\\s+(${МУЖСКИЕ})\\b`, 'giu'),
        new RegExp(`\\b(?:${ГЛАГОЛЫ_AKK})\\s+(?:${ПОДЛ})\\s+(?:\\p{L}+\\s+)?(ein|kein|mein|dein|unser|euer)\\s+(${МУЖСКИЕ})\\b`, 'giu')
    ];
    for (const шаблон of мужскиеШаблоны) {
        while ((м = шаблон.exec(исходный))) {
            найти(замечание('артикль-akk', 'ошибка',
                `Мужской род в Akkusativ: «${м[1].toLowerCase()}en ${м[2]}», а не «${м[1].toLowerCase()} ${м[2]}».`,
                м.index, м.index + м[0].length));
        }
    }

    // «Ich weiß nicht, wenn …»: косвенный вопрос «ли» — ob
    const ли = /\b(weiß|weiss|wissen|wisst)\s+nicht,\s*(wenn)\b/g;
    while ((м = ли.exec(исходный))) {
        найти(замечание('wenn-ob', 'ошибка',
            'В значении «ли» после «Ich weiß nicht» нужно «ob», а не «wenn»: «Ich weiß nicht, ob …».',
            м.index + м[0].lastIndexOf('wenn'), м.index + м[0].length));
    }
}

/** Падеж после предлога у личного местоимения. */
function проверитьПредлоги(текст, найти) {
    const правила = [
        [/\b(mit|von|bei|nach|aus|seit)\s+(mich|dich|ihn)\b/gi, 'Dativ', (пр, мест) => `После «${пр}» нужен Dativ: «${пр} ${{ mich: 'mir', dich: 'dir', ihn: 'ihm' }[мест.toLowerCase()]}».`],
        [/\b(für|durch|gegen)\s+(mir|dir|ihm)\b/gi, 'Akkusativ', (пр, мест) => `После «${пр}» нужен Akkusativ: «${пр} ${{ mir: 'mich', dir: 'dich', ihm: 'ihn' }[мест.toLowerCase()]}».`]
    ];

    for (const [re, , сообщение] of правила) {
        let m;
        while ((m = re.exec(текст))) {
            найти(замечание('предлог-падеж', 'ошибка', сообщение(m[1], m[2]), m.index, m.index + m[0].length));
        }
    }
}

/** dass / das после слов «надеюсь, что …». */
function проверитьDass(текст, найти) {
    const re = /\b(hoffe|glaube|denke|meine|weiß|sage|sagte|gesagt|leid|schade|froh|freue mich)\b[^.!?;\n]{0,25},\s*(das)\s+(ich|du|er|sie|es|wir|ihr|Sie|man|mein\w*|dein\w*)\b/gi;
    let m;

    while ((m = re.exec(текст))) {
        const от = m.index + m[0].lastIndexOf(m[2]) - 0;
        найти(замечание('dass-das', 'ошибка',
            'После «hoffe», «glaube», «Es tut mir leid» союз «что» пишется «dass» (с двумя s); «das» — это артикль или «то».',
            от, от + 3));
    }
}

function проверитьОпечатки(текст, найти) {
    for (const [re, правильно] of ОПЕЧАТКИ) {
        const г = new RegExp(re.source, re.flags.includes('g') ? re.flags : `${re.flags}g`);
        let m;

        while ((m = г.exec(текст))) {
            // Правильное написание не трогаем: «Mit freundlichen Grüßen» — верно, «mit freundlichen grüßen» — нет
            if (m[0] === правильно) continue;
            найти(замечание('написание', 'ошибка', `Проверьте написание: «${m[0]}» → «${правильно}».`, m.index, m.index + m[0].length));
        }
    }
}

// ================== РЕГИСТР: du и Sie ==================

function подсчитатьОбращения(текст) {
    // «Sie» с заглавной в середине предложения — вежливое обращение
    const sie = [...текст.matchAll(/(?<=[a-zäöüß,;:]\s)Sie\b/g)].length;
    const ihn = [...текст.matchAll(/(?<=[a-zäöüß,;:]\s)(Ihnen|Ihr|Ihre|Ihren|Ihrem|Ihrer|Ihres)\b/g)].length;

    const du = [...текст.matchAll(/\b(du|dir|dich|dein|deine|deinen|deinem|deiner|deines|Du|Dir|Dich|Dein|Deine)\b/g)]
        .filter((м) => !/^[A-ZÄÖÜ]/.test(м[0]) || /[a-zäöüß,;:]\s$/.test(текст.slice(Math.max(0, м.index - 2), м.index)))
        .length;

    return { вы: sie + ihn, ты: du };
}

// ================== ИТОГ ==================

const СВЯЗКИ = /\b(weil|dass|wenn|ob|obwohl|deshalb|deswegen|trotzdem|außerdem|damit|nämlich|danach|dann|zuerst|zum Schluss|leider|aber|denn|sondern|bevor|nachdem|während|falls)\b/gi;

const ОБРАЩЕНИЕ = /^\s*(Sehr geehrte[rn]?|Liebe[rn]?|Hallo|Guten (Tag|Morgen|Abend)|Hi)\b/i;
const ПРОЩАНИЕ = /(Gr(ü|ue)ß(en|e)?|Gruß|Tschüss|Bis (bald|dann|morgen|Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag|zum)|Herzlich|Alles Gute|Danke|Beste Wünsche|Hochachtungsvoll)/i;

/**
 * Проверяет письмо.
 *
 * `опции.пункты` — четыре пункта задания с ключами; для них считается,
 * найден ли хоть один ключ. `опции.регистр` — 'formell' | 'halbformell' |
 * 'informell': от него зависит, какое обращение «слишком разговорное».
 */
export function проверитьПисьмо(текст, опции = {}) {
    const исходный = String(текст ?? '');
    const ток = токены(исходный);
    const замечания = [];

    const найти = (з) => замечания.push(з);

    проверитьПридаточные(ток, найти);
    проверитьЗапятые(ток, найти);
    проверитьПерфект(ток, найти);
    проверитьРамку(ток, найти);
    проверитьИнверсию(ток, найти);
    проверитьПорядокЕщё(ток, исходный, найти);
    проверитьРегистр(ток, найти);
    проверитьНачалоПредложения(ток, найти);
    проверитьПредлоги(исходный, найти);
    проверитьDass(исходный, найти);
    проверитьОпечатки(исходный, найти);

    const слов = сколькоСлов(исходный);
    const обращение = ОБРАЩЕНИЕ.test(исходный);

    // Прощание ищем в последних 140 знаках: слово «Danke» посреди текста ещё не прощание
    const хвост = исходный.trim().slice(-140);
    const прощание = ПРОЩАНИЕ.test(хвост);

    const { вы, ты } = подсчитатьОбращения(исходный);

    if (слов > 0) {
        if (!обращение) найти(замечание('нет-обращения', 'ошибка', 'Нет обращения в начале: «Sehr geehrte Frau …,» или «Liebe …,». Без него задание считается выполненным не полностью.'));
        if (!прощание) найти(замечание('нет-прощания', 'ошибка', 'Нет прощания в конце: «Mit freundlichen Grüßen» или «Viele Grüße». В задании оно требуется.'));

        if (вы && ты) {
            найти(замечание('du-и-sie', 'ошибка', 'В одном письме смешаны «Sie» и «du»: выберите одно обращение и держитесь его.'));
        }

        const формальное = /^\s*Sehr geehrte/i.test(исходный);
        if (формальное && ты) {
            найти(замечание('регистр-обращение', 'ошибка', 'Обращение «Sehr geehrte …» — формальное, а в тексте «du». Пишите «Sie/Ihnen/Ihr».'));
        }

        if (опции.регистр === 'informell' && /^\s*Sehr geehrte/i.test(исходный)) {
            найти(замечание('регистр-обращение', 'совет', 'Задание дружеское, а обращение «Sehr geehrte …» слишком формальное: подойдёт «Liebe …,».'));
        }

        if ((опции.регистр === 'formell') && /^\s*(Hallo|Hi|Hey)\b/i.test(исходный)) {
            найти(замечание('регистр-обращение', 'ошибка', 'Для формального письма «Hallo» слишком разговорно: «Sehr geehrte Damen und Herren,» или «Sehr geehrte Frau …,».'));
        }
    }

    // Объём
    const нижняяГраница = опции.минимум ?? 60;
    if (слов > 0 && слов < нижняяГраница) {
        найти(замечание('мало-слов', 'совет', `Слов: ${слов}. В образцах B1 их 70–100: раскройте пункты подробнее (когда, где, почему).`));
    }
    if (слов > 140) {
        найти(замечание('много-слов', 'совет', `Слов: ${слов}. В экзамене «пишите как можно больше», но каждое лишнее предложение — ещё одна возможность ошибиться. Достаточно 80–110.`));
    }

    // Связность
    const связок = (исходный.match(СВЯЗКИ) || []).length;
    if (слов >= 40 && связок < 3) {
        найти(замечание('мало-связок', 'совет', 'Мало связок: добавьте «weil», «deshalb», «außerdem», «aber», «wenn» — так текст читается как письмо, а не как список.'));
    }

    // Однообразные начала
    const начала = [];
    for (let i = 0; i < ток.length; i++) {
        if (ток[i].слово && (i === 0 || КОНЕЦ_ПРЕДЛОЖЕНИЯ.test(ток[i - 1].т) || ток[i].абзац)) начала.push(ток[i].н);
    }
    let подряд = 0;
    for (const н of начала) {
        подряд = н === 'ich' ? подряд + 1 : 0;
        if (подряд >= 3) {
            найти(замечание('одни-ich', 'совет', 'Три предложения подряд начинаются с «Ich». Начните одно иначе: «Leider …», «Deshalb …», «Außerdem …» — после них глагол на втором месте.'));
            break;
        }
    }

    // Пункты задания
    const пункты = (опции.пункты || []).map((п, i) => {
        const ключи = (п.keys || []).map((к) => String(к).toLowerCase());
        const низ = исходный.toLowerCase();
        return { i, de: п.de, найден: ключи.some((к) => низ.includes(к)) };
    });

    // Дубли одного места: одно правило на одном месте — одно замечание
    const видели = new Set();
    const чистые = замечания.filter((з) => {
        const ключ = `${з.id}|${з.от}|${з.до}`;
        if (з.от !== null && видели.has(ключ)) return false;
        видели.add(ключ);
        return true;
    }).sort((a, b) => (a.от ?? -1) - (b.от ?? -1));

    return {
        слов,
        обращение,
        прощание,
        обращения: { вы, ты },
        пункты,
        замечания: чистые,
        ошибок: чистые.filter((з) => з.уровень === 'ошибка').length,
        советов: чистые.filter((з) => з.уровень === 'совет').length
    };
}

/**
 * Текст для вставки в чат: просьба проверить письмо по критериям DTZ.
 *
 * Автоматическая проверка выше видит только форму строки. Падежи, артикли и
 * смысл ей недоступны, а именно в них обычно и сидит «Korrektheit». Поэтому
 * приложение собирает готовый запрос, который читатель вставляет в разговор
 * с Claude, и получает разбор уровня учителя.
 */
export function запросНаПроверку(задание, текст) {
    const пункты = (задание.points || []).map((п, i) => `${i + 1}. ${п.de}`).join('\n');

    return [
        'Проверь моё письмо для экзамена DTZ (уровень B1, часть «Schreiben»). Отвечай по-русски.',
        '',
        'Задание:',
        задание.situation,
        'Schreiben Sie etwas über folgende Punkte:',
        пункты,
        '',
        'Моё письмо:',
        '«««',
        String(текст).trim(),
        '»»»',
        '',
        'Что нужно:',
        '1. Оцени по четырём критериям DTZ, каждый от 0 до 5: I Aufgabenbewältigung (все ли четыре пункта раскрыты), II Kommunikative Gestaltung (обращение, прощание, связность, регистр), III Korrektheit (грамматика и орфография), IV Wortschatz. Укажи сумму из 20 (B1 — от 15).',
        '2. Построчно покажи ошибки: что написано → как правильно → какое правило. Особенно порядок слов, падежи, артикли, формы глаголов, запятые.',
        '3. Дай исправленный вариант письма, сохранив мои мысли.',
        '4. Назови три правила, которые мне важнее всего повторить.'
    ].join('\n');
}
