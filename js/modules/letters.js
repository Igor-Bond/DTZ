/**
 * Письма: ситуации, окно письма, разбор, проба экзамена.
 *
 * Здесь два режима одного экрана. «Практика» даёт всё: подсказки к пунктам,
 * заготовки начал, фразы ситуации. «Проба» отнимает всё лишнее и включает
 * таймер на 30 минут, как на экзамене: словарей и подсказок там не будет, и
 * привыкать нужно заранее.
 *
 * Письмо хранится в хранилище как черновик на каждое нажатие клавиши. Разбор
 * не стирает его: исправить и проверить ещё раз — основной рабочий цикл.
 */

import { ui } from '../core/ui.js';
import { actions } from '../core/actions.js';
import { app } from '../app.js';
import { СИТУАЦИИ, ситуацияПоId, заданиеПоId } from '../data/catalog.js';
import { хранилище } from '../core/store.js';
import { проверитьПисьмо, запросНаПроверку } from '../core/brief.js';
import { сколькоСлов } from '../core/check.js';
import { разметка, немецкий } from '../core/markup.js';
import { страница, сообщить } from './shell.js';
import { клавиши, вставить, подписьСлов } from './input.js';

const РЕГИСТРЫ = {
    formell: 'формальное, Sie',
    halbformell: 'полуформальное, Sie',
    informell: 'дружеское, du'
};

const ВРЕМЯ_ПРОБЫ = 30 * 60 * 1000;

const КРИТЕРИИ = [
    {
        id: 'I', название: 'I. Пункты задания', оригинал: 'Aufgabenbewältigung',
        шкала: [
            'Ни один пункт не раскрыт или задание понято неверно',
            'Раскрыт один пункт, читателю нужно догадываться',
            'Два пункта или один хорошо',
            'Три пункта, читателю нужно догадываться, или два хорошо',
            'Все четыре пункта есть, читатель кое-что додумывает, или три хорошо',
            'Все четыре пункта раскрыты точно'
        ]
    },
    {
        id: 'II', название: 'II. Обращение, связность, регистр', оригинал: 'Kommunikative Gestaltung',
        шкала: [
            'Текст не связан с заданием',
            'Отдельные слова, обращения или прощания нет',
            'Простые предложения, связки «und», «aber», «weil», обращение и прощание есть',
            'Связки есть, но регистр выдержан не везде',
            'Связный текст, уместный регистр, вежливые формулы',
            'Свободно связанный текст, разные связки, регистр выдержан от начала до конца'
        ]
    },
    {
        id: 'III', название: 'III. Грамматика и орфография', оригинал: 'Korrektheit',
        шкала: [
            'Ничего не понятно',
            'Только заученные куски фраз',
            'Простые конструкции, систематические ошибки, но смысл понятен',
            'Чаще верно, ошибки в простых местах',
            'В целом хорошо, ошибки есть, но смысл ясен',
            'Ошибок мало, ограничений не видно'
        ]
    },
    {
        id: 'IV', название: 'IV. Словарь', оригинал: 'Wortschatz',
        шкала: [
            'Слов нет',
            'Отдельные слова',
            'Базовые слова для знакомой ситуации',
            'Слов хватает для ситуации, но они часто повторяются',
            'Слов хватает для темы, где нужно — перифраз',
            'Разнообразный и точный словарь'
        ]
    }
];

/** Состояние окна письма. Живёт, пока читатель не перейдёт к другому письму. */
let ПИСЬМО = null;
let ПРОБА = null;
let ТАЙМЕР = null;

const мин = (мс) => {
    const с = Math.max(0, Math.round(мс / 1000));
    return `${Math.floor(с / 60)}:${String(с % 60).padStart(2, '0')}`;
};

function лучшая(id) {
    const п = хранилище.письмо(id);
    return п.попыток ? п.итог : null;
}

// ================== СПИСОК И СИТУАЦИЯ ==================

export const letters = {

    render() {
        return страница({
            вкладка: 'letters',
            заголовок: 'Письма',
            содержимое: ui.html`
                <div class="hero">
                    <h1>Письма</h1>
                    <p>Двенадцать ситуаций, в каждой два задания в стиле экзамена. Сначала с подсказками, потом без.</p>
                </div>

                <div class="card accent" style="margin-top:14px">
                    <h2>Проба экзамена</h2>
                    <p class="lead">30 минут, два задания на выбор, без подсказок и без словаря.</p>
                    <div class="row" style="margin-top:12px"><a class="btn primary" href="#/exam">Начать пробу</a></div>
                </div>

                <div class="sec">Ситуации</div>
                <div class="links">
                    ${СИТУАЦИИ.map((с) => {
                        const а = лучшая(`${с.id}-a`);
                        const б = лучшая(`${с.id}-b`);
                        return ui.html`
                            <a class="link" href="#/situation/${с.id}">
                                <span class="link-ico">${с.order}</span>
                                <span class="link-main">
                                    <span class="link-title">${с.title}</span><br>
                                    <span class="link-sub">${РЕГИСТРЫ[с.register]} · A: ${а === null ? '—' : `${а}/20`} · B: ${б === null ? '—' : `${б}/20`}</span>
                                </span>
                                <span class="link-end">›</span>
                            </a>`;
                    })}
                </div>
                ${СИТУАЦИИ.length ? '' : ui.html`<div class="empty-note">Ситуации ещё не подключены.</div>`}
            `
        });
    }
};

function карточкаЗадания(з, найденные = null) {
    return ui.html`
        <div class="task-card">
            <div class="task-label">Aufgabe ${з.label} · ${РЕГИСТРЫ[з.register]}</div>
            <p>${з.situation}</p>
            <p><b>Schreiben Sie auch eine Anrede und einen Gruß.</b></p>
            <p>Schreiben Sie etwas über folgende Punkte:</p>
            <ul>${з.points.map((п, i) => ui.html`<li class="${найденные ? (найденные[i] ? 'found' : 'lost') : ''}">${п.de}</li>`)}</ul>
        </div>`;
}

function группыФраз(фразы) {
    const группы = new Map();
    for (const ф of фразы) {
        if (!группы.has(ф.use)) группы.set(ф.use, []);
        группы.get(ф.use).push(ф);
    }
    return [...группы.entries()];
}

export const situation = {

    render(id) {
        const с = ситуацияПоId(id);

        if (!с) {
            return страница({ вкладка: 'letters', заголовок: 'Не найдено', назад: '#/letters', содержимое: ui.html`<div class="empty-note">Такой ситуации нет.</div>` });
        }

        return страница({
            вкладка: 'letters',
            заголовок: с.short || с.title,
            назад: '#/letters',
            содержимое: ui.html`
                <div class="hero">
                    <h1 style="font-size:22px">${с.title}</h1>
                    <p><span class="chip accent">${РЕГИСТРЫ[с.register]}</span></p>
                </div>
                <div class="card"><p class="lead">${с.intro}</p></div>

                <div class="sec">Задания</div>
                ${с.tasks.map((з) => {
                    const оценка = лучшая(з.id);
                    return ui.html`
                        ${карточкаЗадания(з)}
                        <div class="row" style="margin-top:10px">
                            <a class="btn primary" href="#/write/${з.id}">Писать${оценка === null ? '' : ` (лучшая ${оценка}/20)`}</a>
                        </div>`;
                })}

                <div class="sec">Опорные фразы</div>
                <details class="help" open>
                    <summary>${с.phrases.length} фраз для этой ситуации</summary>
                    <div class="help-body">
                        ${группыФраз(с.phrases).map(([назначение, список]) => ui.html`
                            <div class="help-point">
                                <div class="help-point-title">${назначение}</div>
                                ${список.map((ф) => ui.html`<div class="phrase"><span class="de">${ф.de}</span><span class="phrase-ru">${ф.ru}</span></div>`)}
                            </div>`)}
                    </div>
                </details>

                <div class="sec">Тренировка</div>
                <div class="row col"><a class="btn soft block" href="#/drill/${с.id}">Упражнения по ситуации (${с.drills?.length || 0})</a></div>
            `
        });
    }
};

// ================== ОКНО ПИСЬМА ==================

function начатьПисьмо(id, режим, старт = null) {
    ПИСЬМО = {
        id, режим, стадия: 'пишу', старт: старт ?? Date.now(),
        проверка: null, текст: '', оценки: {}, образец: false, перевод: false, слабый: false
    };
}

function форматПисьма(текст) {
    return String(текст)
        .trim()
        .replace(/^((?:Sehr geehrte[rn]?|Liebe[rn]?|Hallo|Guten Tag)[^,\n]{0,60},)\s+/, '$1\n\n')
        .replace(/\s+((?:Mit freundlichen Grüßen|Freundliche Grüße|Viele Grüße|Liebe Grüße|Herzliche Grüße|Bis bald)[\s\S]*)$/, '\n\n$1')
        .replace(/(Grüßen|Grüße|Gruß)\s+([A-ZÄÖÜ][\p{L}-]+(?:\s[A-ZÄÖÜ][\p{L}-]+)?)$/u, '$1\n$2');
}

function помощь(з, с) {
    return ui.html`
        <details class="help">
            <summary>Подсказки к пунктам</summary>
            <div class="help-body">
                ${з.points.map((п, i) => ui.html`
                    <div class="help-point">
                        <div class="help-point-title">${i + 1}. ${п.de}</div>
                        <div class="help-point-hint">${п.hint}</div>
                        <div class="starters">${п.starters.map((н) => ui.html`<button class="starter" data-action="заготовка" data-text="${н}">${н}</button>`)}</div>
                    </div>`)}
            </div>
        </details>
        <details class="help">
            <summary>Опорные фразы</summary>
            <div class="help-body">
                ${с.phrases.map((ф) => ui.html`<div class="phrase"><button class="starter" data-action="заготовка" data-text="${ф.de.replace(/…/g, '').trim()}">${ф.de}</button><span class="phrase-ru">${ф.ru}</span></div>`)}
            </div>
        </details>`;
}

function экранПишу(н) {
    const { ситуация, задание } = н;
    const проба = ПИСЬМО.режим === 'проба';
    const текст = хранилище.письмо(задание.id).черновик;

    return страница({
        заголовок: `Aufgabe ${задание.label}`,
        назад: проба ? null : `#/situation/${ситуация.id}`,
        бок: проба ? ui.html`<span class="timer" id="timer">${мин(ВРЕМЯ_ПРОБЫ)}</span>` : '',
        безВкладок: true,
        содержимое: ui.html`
            ${карточкаЗадания(задание)}
            ${проба ? '' : помощь(задание, ситуация)}

            <textarea class="letter" id="letter" data-draft="${задание.id}" data-counter="letter-count" rows="12" spellcheck="false"
                autocomplete="off" autocapitalize="sentences" placeholder="Пишите письмо здесь">${текст}</textarea>
            <div class="counter"><span id="letter-count">${подписьСлов(сколькоСлов(текст))}</span><span>ориентир: 70–110 слов</span></div>
            ${клавиши()}

            <div class="row col" style="margin-top:16px">
                <button class="btn primary block" data-action="проверить-письмо">${проба ? 'Сдать письмо' : 'Проверить письмо'}</button>
                ${текст && !проба ? ui.html`<button class="btn ghost block" data-action="очистить-письмо">Начать заново</button>` : ''}
            </div>
            ${проба ? ui.html`<p class="muted small" style="margin-top:10px">На экзамене вы пишете от руки. Если хотите потренироваться по-настоящему, напишите письмо на бумаге, а сюда перенесите для проверки.</p>` : ''}
        `
    });
}

function сегменты(текст, замечания) {
    // Подсвечиваем замечания с позицией; пересекающиеся пропускаем — читаемость важнее полноты
    const с = замечания.filter((з) => з.от !== null && з.до > з.от).sort((а, б) => а.от - б.от);
    const куски = [];
    let позиция = 0;

    for (const з of с) {
        if (з.от < позиция) continue;
        куски.push(ui.esc(текст.slice(позиция, з.от)));
        куски.push(`<mark title="${ui.esc(з.текст)}">${ui.esc(текст.slice(з.от, з.до))}</mark>`);
        позиция = з.до;
    }

    куски.push(ui.esc(текст.slice(позиция)));
    return ui.raw(куски.join(''));
}

function строкаЗамечания(з) {
    const ошибка = з.уровень === 'ошибка';
    return ui.html`
        <div class="issue ${ошибка ? 'err' : 'tip'}">
            <span class="issue-ico">${ошибка ? '✗' : '○'}</span>
            <span>${з.текст}</span>
        </div>`;
}

function самооценка(н) {
    const оценки = ПИСЬМО.оценки;
    const все = КРИТЕРИИ.every((к) => оценки[к.id] !== undefined);
    const итог = КРИТЕРИИ.reduce((а, к) => а + (оценки[к.id] ?? 0), 0);
    const п = ПИСЬМО.проверка;

    const подсказка = {
        I: `Автопроверка нашла слова-ключи для ${п.пункты.filter((х) => х.найден).length} из ${п.пункты.length} пунктов. Это только подсказка: сверьте пункты сами.`,
        II: `Обращение: ${п.обращение ? 'есть' : 'нет'}. Прощание: ${п.прощание ? 'есть' : 'нет'}.`,
        III: `Автопроверка нашла возможных ошибок: ${п.ошибок}. Она видит не всё: падежи, артикли и окончания ей недоступны.`,
        IV: 'Подходят ли слова ситуации? Сколько раз вы повторяли одно и то же слово?'
    };

    const вердикт = итог >= 15 ? ['b1', 'Уровень B1', 'порог — 15 из 20'] : итог >= 7 ? ['a2', 'Уровень A2', 'до B1 не хватает баллов'] : ['low', 'Ниже A2', 'нужно больше раскрытых пунктов и простых верных предложений'];

    return ui.html`
        <div class="sec">Оцените сами</div>
        <p class="muted small" style="margin:0 2px">Так письмо оценили бы на экзамене: четыре критерия, каждый от 0 до 5. Будьте строги: честная оценка полезнее приятной.</p>
        ${КРИТЕРИИ.map((к) => ui.html`
            <div class="assess">
                <div class="assess-title">${к.название}</div>
                <div class="assess-desc">${подсказка[к.id]}</div>
                <div class="scale">${[0, 1, 2, 3, 4, 5].map((в) => ui.html`<button class="${оценки[к.id] === в ? 'on' : ''}" data-action="оценка" data-k="${к.id}" data-v="${в}">${в}</button>`)}</div>
                <div class="scale-desc">${оценки[к.id] === undefined ? '' : к.шкала[оценки[к.id]]}</div>
            </div>`)}

        ${все ? ui.html`
            <div class="verdict ${вердикт[0]}">${итог} из 20 — ${вердикт[1]}<small>${вердикт[2]}</small></div>
            <div class="row" style="margin-top:12px"><button class="btn primary block" data-action="сохранить-оценку">Сохранить оценку</button></div>` : ''}`;
}

function образцы(з) {
    const м = з.model;

    return ui.html`
        <div class="sec">Образец</div>
        <div class="row col">
            <button class="btn soft block" data-action="показать-образец">${ПИСЬМО.образец ? 'Скрыть образец B1' : 'Показать образец B1'}</button>
        </div>
        ${ПИСЬМО.образец ? ui.html`
            <div class="model-text">${немецкий(форматПисьма(м.text))}</div>
            <div class="row" style="margin-top:8px"><button class="btn small ghost" data-action="показать-перевод">${ПИСЬМО.перевод ? 'Скрыть перевод' : 'Показать перевод'}</button></div>
            ${ПИСЬМО.перевод ? ui.html`<div class="model-ru">${м.ru}</div>` : ''}
            <div class="sec">Почему это B1</div>
            <div class="rows">${м.notes.map((н) => ui.html`<div class="rowl"><div class="rowl-main small">${разметка(н)}</div></div>`)}</div>` : ''}

        ${з.weak ? ui.html`
            <div class="row col" style="margin-top:12px">
                <button class="btn ghost block" data-action="показать-слабый">${ПИСЬМО.слабый ? 'Скрыть слабый ответ' : 'Сравнить со слабым ответом и разбором'}</button>
            </div>
            ${ПИСЬМО.слабый ? ui.html`
                <div class="model-text weak-text">${немецкий(з.weak.text)}</div>
                <div class="rows">${з.weak.fixes.map((ф) => ui.html`
                    <div class="fix-row"><span class="was">${ф.was}</span> → <span class="wird">${ф.wird}</span><div class="muted small">${разметка(ф.why)}</div></div>`)}
                </div>` : ''}` : ''}`;
}

function экранРазбор(н) {
    const { ситуация, задание } = н;
    const п = ПИСЬМО.проверка;
    const проба = ПИСЬМО.режим === 'проба';
    const слов = п.слов;

    return страница({
        заголовок: 'Разбор письма',
        назад: проба ? '#/letters' : `#/situation/${ситуация.id}`,
        безВкладок: true,
        содержимое: ui.html`
            <div class="stats">
                <div class="stat"><b>${слов}</b><span>слов</span></div>
                <div class="stat"><b>${п.пункты.filter((х) => х.найден).length}<small class="muted"> / ${п.пункты.length}</small></b><span>пунктов найдено</span></div>
                <div class="stat"><b>${п.ошибок}</b><span>возможных ошибок</span></div>
            </div>

            ${карточкаЗадания(задание, п.пункты.map((х) => х.найден))}
            <p class="muted small" style="margin:6px 2px">✓ — для пункта найдены слова-ключи, ? — не найдены: проверьте сами, возможно, вы написали другими словами.</p>

            <div class="sec">Ваше письмо</div>
            <div class="marked-text">${сегменты(ПИСЬМО.текст, п.замечания)}</div>

            ${п.замечания.length ? ui.html`
                <div class="sec">Замечания автопроверки</div>
                <div class="rows">${п.замечания.map(строкаЗамечания)}</div>
                <p class="muted small" style="margin:8px 2px">Автопроверка видит порядок слов в придаточных, запятые, обращение, прощание, заглавные буквы и ещё несколько типичных ошибок. Падежи, артикли и окончания она не проверяет — для них нажмите «Проверить у Claude» ниже.</p>`
                : ui.html`<div class="card" style="border-color:var(--ok-line)"><b style="color:var(--ok)">Автопроверка ничего не нашла.</b><p class="muted small" style="margin-top:4px">Это не значит, что ошибок нет: падежи, артикли и окончания она не видит. Проверьте их сами по чек-листу в шпаргалке или нажмите «Проверить у Claude».</p></div>`}

            ${самооценка(н)}

            <div class="row col" style="margin-top:16px">
                <button class="btn soft block" data-action="копировать-запрос">Проверить у Claude: скопировать запрос</button>
                <button class="btn block" data-action="исправить-письмо">Исправить и проверить ещё раз</button>
            </div>

            ${проба ? '' : образцы(задание)}
            ${проба ? образцы(задание) : ''}
        `
    });
}

export const write = {

    render(id) {
        const н = заданиеПоId(id || '');

        if (!н) {
            return страница({ вкладка: 'letters', заголовок: 'Не найдено', назад: '#/letters', содержимое: ui.html`<div class="empty-note">Такого задания нет.</div>` });
        }

        if (!ПИСЬМО || ПИСЬМО.id !== id || ПИСЬМО.режим !== 'практика') начатьПисьмо(id, 'практика');

        return ПИСЬМО.стадия === 'разбор' ? экранРазбор(н) : экранПишу(н);
    },

    after() {
        document.getElementById('letter')?.focus({ preventScroll: true });
    },

    leave() {
        // Вернувшись к письму, читатель начинает с окна письма и своего
        // черновика, а не с чужого уже закрытого разбора
        ПИСЬМО = null;
    }
};

// ================== ПРОБА ЭКЗАМЕНА ==================

function выбратьПару() {
    const ситуации = [...СИТУАЦИИ];
    const сделано = (з) => хранилище.письмо(з.id).попыток > 0;

    // Сначала то, что ещё не писали; потом любое. Две разные ситуации, как в экзамене
    const мешать = (список) => [...список].sort(() => Math.random() - 0.5);
    const свежие = мешать(ситуации.filter((с) => с.tasks.some((з) => !сделано(з))));
    const остальные = мешать(ситуации.filter((с) => !свежие.includes(с)));
    const очередь = [...свежие, ...остальные];

    if (очередь.length < 2) return null;

    const из = (с) => {
        const несделанные = с.tasks.filter((з) => !сделано(з));
        const из = несделанные.length ? несделанные : с.tasks;
        return из[Math.floor(Math.random() * из.length)];
    };

    return [из(очередь[0]), из(очередь[1])].map((з) => з.id);
}

export const exam = {

    render(param) {
        // Вход в пробу: объяснение и кнопка
        if (!param) {
            return страница({
                вкладка: 'letters',
                заголовок: 'Проба экзамена',
                назад: '#/letters',
                содержимое: ui.html`
                    <div class="hero"><h1>Проба экзамена</h1><p>Так будет на экзамене — только на экране вместо бумаги.</p></div>
                    <div class="card">
                        <ul class="b-list">
                            <li>Два задания на выбор: Aufgabe A и Aufgabe B. Выбираете одно.</li>
                            <li>Тридцать минут. Таймер идёт сверху.</li>
                            <li>Подсказок нет: ни заготовок, ни фраз, ни словаря.</li>
                            <li>Все четыре пункта, обращение и прощание обязательны.</li>
                            <li>После сдачи — разбор и самооценка по критериям экзамена.</li>
                        </ul>
                        <div class="row" style="margin-top:14px"><button class="btn primary block" data-action="проба-старт">Начать</button></div>
                    </div>
                    ${СИТУАЦИИ.length < 2 ? ui.html`<div class="empty-note">Для пробы нужно хотя бы две ситуации.</div>` : ''}`
            });
        }

        const ид = param.split('+');
        const задания = ид.map(заданиеПоId);

        if (!задания.every(Boolean)) {
            return страница({ вкладка: 'letters', заголовок: 'Не найдено', назад: '#/letters', содержимое: ui.html`<div class="empty-note">Проба не нашлась.</div>` });
        }

        if (!ПРОБА || ПРОБА.ключ !== param) ПРОБА = { ключ: param, старт: Date.now(), выбрано: null };

        // Одно задание — окно письма (или разбор)
        if (ПРОБА.выбрано) {
            const н = заданиеПоId(ПРОБА.выбрано);
            if (!ПИСЬМО || ПИСЬМО.id !== ПРОБА.выбрано || ПИСЬМО.режим !== 'проба') начатьПисьмо(ПРОБА.выбрано, 'проба', ПРОБА.старт);
            return ПИСЬМО.стадия === 'разбор' ? экранРазбор(н) : экранПишу(н);
        }

        return страница({
            заголовок: 'Проба экзамена',
            бок: ui.html`<span class="timer" id="timer">${мин(ВРЕМЯ_ПРОБЫ)}</span>`,
            безВкладок: true,
            содержимое: ui.html`
                <p class="muted" style="margin-top:8px">Выберите одно из двух заданий. Время уже идёт.</p>
                ${задания.map(({ ситуация, задание }) => ui.html`
                    ${карточкаЗадания(задание)}
                    <div class="row" style="margin-top:10px"><button class="btn primary block" data-action="проба-выбор" data-id="${задание.id}">Выбрать Aufgabe ${задание.label}</button></div>`)}`
        });
    },

    after() {
        запуститьТаймер();
        document.getElementById('letter')?.focus({ preventScroll: true });
    },

    leave() {
        остановитьТаймер();
        // ПРОБА остаётся: время идёт, пока идёт проба; а окно письма
        // собирается заново из сохранённого черновика
        ПИСЬМО = null;
    }
};

function остановитьТаймер() {
    if (ТАЙМЕР) clearInterval(ТАЙМЕР);
    ТАЙМЕР = null;
}

function запуститьТаймер() {
    остановитьТаймер();

    const узел = document.getElementById('timer');
    if (!узел || !ПРОБА || !(ПИСЬМО ? ПИСЬМО.стадия !== 'разбор' : true)) return;

    let предупреждали = false;

    const шаг = () => {
        const осталось = ВРЕМЯ_ПРОБЫ - (Date.now() - ПРОБА.старт);
        const т = document.getElementById('timer');
        if (!т) return остановитьТаймер();

        т.textContent = мин(осталось);
        т.classList.toggle('low', осталось < 5 * 60 * 1000);

        if (осталось <= 0 && !предупреждали) {
            предупреждали = true;
            сообщить('Время вышло — сдайте письмо');
        }
    };

    шаг();
    ТАЙМЕР = setInterval(шаг, 1000);
}

// ================== ДЕЙСТВИЯ ==================

actions.on('заготовка', (el) => {
    const поле = document.getElementById('letter');
    if (!поле) return;

    const пред = поле.value;
    const вставка = el.dataset.text + ' ';

    // Заготовка — с новой строки после обращения, иначе через пробел
    const разделитель = пред && !/[\s]$/.test(пред) ? ' ' : '';
    вставить(разделитель + вставка, поле);
});

actions.on('проверить-письмо', () => {
    const поле = document.getElementById('letter');
    const н = заданиеПоId(ПИСЬМО.id);
    const текст = поле ? поле.value : хранилище.письмо(ПИСЬМО.id).черновик;

    if (!текст.trim()) {
        сообщить('Сначала напишите письмо');
        return;
    }

    хранилище.сохранитьЧерновик(ПИСЬМО.id, текст);
    ПИСЬМО.текст = текст;
    ПИСЬМО.проверка = проверитьПисьмо(текст, { пункты: н.задание.points, регистр: н.задание.register });
    ПИСЬМО.стадия = 'разбор';
    ПИСЬМО.оценки = {};

    остановитьТаймер();
    app.render();
});

actions.on('исправить-письмо', () => {
    ПИСЬМО.стадия = 'пишу';
    app.render();
    app.показан?.after?.();
});

actions.on('очистить-письмо', () => {
    if (!confirm('Стереть написанное и начать заново?')) return;
    хранилище.сохранитьЧерновик(ПИСЬМО.id, '');
    app.render();
});

actions.on('оценка', (el) => {
    ПИСЬМО.оценки[el.dataset.k] = Number(el.dataset.v);
    app.render(true);
});

actions.on('показать-образец', () => { ПИСЬМО.образец = !ПИСЬМО.образец; app.render(true); });
actions.on('показать-перевод', () => { ПИСЬМО.перевод = !ПИСЬМО.перевод; app.render(true); });
actions.on('показать-слабый', () => { ПИСЬМО.слабый = !ПИСЬМО.слабый; app.render(true); });

actions.on('сохранить-оценку', () => {
    const итог = хранилище.записатьОценкуПисьма(ПИСЬМО.id, ПИСЬМО.оценки, ПИСЬМО.проверка.слов);

    if (ПИСЬМО.режим === 'проба') {
        хранилище.записатьПробу({
            задание: ПИСЬМО.id,
            слов: ПИСЬМО.проверка.слов,
            итог,
            оценки: ПИСЬМО.оценки,
            минут: Math.round((Date.now() - ПИСЬМО.старт) / 60000)
        });
    }

    сообщить(`Сохранено: ${итог} из 20`);
});

actions.on('копировать-запрос', async () => {
    const н = заданиеПоId(ПИСЬМО.id);
    const запрос = запросНаПроверку(н.задание, ПИСЬМО.текст);

    try {
        await navigator.clipboard.writeText(запрос);
    } catch {
        // Запасной путь: через скрытое поле — работает там, где clipboard API закрыт
        const поле = document.createElement('textarea');
        поле.value = запрос;
        document.body.appendChild(поле);
        поле.select();
        document.execCommand('copy');
        поле.remove();
    }

    сообщить('Скопировано: вставьте в чат с Claude');
});

actions.on('проба-старт', () => {
    const пара = выбратьПару();
    if (!пара) return сообщить('Для пробы нужно хотя бы две ситуации');

    ПРОБА = null;
    ПИСЬМО = null;
    app.go('exam', пара.join('+'));
});

actions.on('проба-выбор', (el) => {
    ПРОБА.выбрано = el.dataset.id;
    начатьПисьмо(el.dataset.id, 'проба', ПРОБА.старт);
    app.render();
    app.показан?.after?.();
});
