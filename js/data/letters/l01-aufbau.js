/**
 * Модуль-техника 1. Структура письма и регистр.
 *
 * Всё, что проверяют во втором критерии (Kommunikative Gestaltung): обращение
 * и прощание, Sie или du без смешения, части письма, вежливый тон вместо
 * разговорного. Формулы — те, что можно выучить заранее.
 */

export default {
    id: 'l01',
    order: 13,
    title: 'Структура письма и регистр',
    short: 'Структура и регистр',
    goal: 'Вы выбираете обращение, прощание и форму `Sie` или `du` под адресата, строите письмо по схеме «обращение — причина — пункты — завершение — прощание» и пишете вежливо, а не разговорно.',
    why: 'Обращение, прощание и уместный тон проверяют во втором критерии — Kommunikative Gestaltung, это 5 баллов из 20. Эти баллы держатся на готовых формулах, которые можно выучить заранее, а ошибка регистра (`Hallo` начальнику, `Sie` и `du` в одном письме) заметна с первой строки.',

    theory: [
        { type: 'h', text: '1. Что проверяющий смотрит в письме' },
        { type: 'p', text: 'Письмо оценивают двое по четырём критериям, каждый от 0 до 5 баллов. Второй критерий — **Kommunikative Gestaltung**: как текст построен и подходит ли он адресату. Грамматику здесь не считают, для неё есть отдельный критерий — Korrektheit.' },
        {
            type: 'list',
            items: [
                'Есть **обращение** (Anrede) в начале и **прощание** (Gruß) в конце — они обязательны.',
                '**Регистр** подходит адресату: `Sie` — учительнице, хозяину квартиры, фирме; `du` — другу.',
                'Текст **связан**: предложения соединены словами `weil`, `dass`, `deshalb`, `außerdem`, а не стоят отдельными строками.'
            ]
        },

        { type: 'h', text: '2. Три регистра: formell, halbformell, informell' },
        { type: 'p', text: 'Регистр — это тон письма. Он зависит от того, кому вы пишете и насколько хорошо знаете этого человека. Подсказка — в самом задании: «an Ihren Vermieter», «an die Firma», «an Ihre Freundin». На DTZ чаще всего пишут на `Sie`, иногда — другу на `du`.' },
        {
            type: 'table',
            head: ['Регистр', 'Кому', 'Обращение', 'Прощание'],
            rows: [
                ['formell', 'фирме, ведомству, незнакомому человеку', '`Sehr geehrte Damen und Herren,` `Sehr geehrter Herr Lehmann,`', '`Mit freundlichen Grüßen`'],
                ['halbformell', 'учителю, врачу, соседу, хозяину квартиры, начальнику', '`Sehr geehrte Frau Hartmann,`, а хорошо знакомой — `Liebe Frau Hartmann,`', '`Mit freundlichen Grüßen`, `Freundliche Grüße`, `Viele Grüße`'],
                ['informell', 'другу, подруге, родственнику', '`Liebe Katja,` `Lieber Tom,`', '`Viele Grüße`, `Liebe Grüße`']
            ],
            note: 'В formell и halbformell — всегда `Sie`, в informell — `du`. Если задание не говорит, что адресат — друг или родственник, пишите на `Sie`.'
        },
        { type: 'trap', wrong: 'Sehr geehrte Katja,', right: 'Liebe Katja,', why: 'К женщине `Sehr geehrte` пишут только с `Frau` и фамилией, а не перед одним именем. Подруге по имени — `Liebe Katja,` и дальше на `du`.' },

        { type: 'h', text: '3. Обращение: формулы и окончания' },
        {
            type: 'table',
            head: ['Обращение', 'Кому'],
            rows: [
                ['`Sehr geehrte Damen und Herren,`', 'фирме или ведомству, если имя адресата неизвестно'],
                ['`Sehr geehrte Frau Hartmann,`', 'женщине, фамилия известна'],
                ['`Sehr geehrter Herr Lehmann,`', 'мужчине, фамилия известна'],
                ['`Liebe Frau Hartmann,`', 'знакомой женщине, с которой вы на `Sie`: соседке, учительнице'],
                ['`Lieber Herr Lehmann,`', 'знакомому мужчине, с которым вы на `Sie`: соседу, учителю'],
                ['`Liebe Katja,` / `Lieber Tom,`', 'подруге или другу по имени'],
                ['`Hallo Tom,`', 'только другу']
            ],
            note: 'Женщине — `geehrte`, `Liebe`; мужчине — `geehrter`, `Lieber`. Если фамилия неизвестна, `Sehr geehrte Frau,` без фамилии не пишут — только `Sehr geehrte Damen und Herren,`.'
        },
        { type: 'trap', wrong: 'Sehr geehrte Herr Lehmann,', right: 'Sehr geehrter Herr Lehmann,', why: 'Перед `Herr` нужно окончание `-r`: `geehrter`, `Lieber`. Без `-r` — только перед `Frau` и женским именем.' },

        { type: 'h', text: '4. Запятая и строчная буква после обращения' },
        { type: 'rule', text: 'После обращения — **запятая**. Письмо продолжается **со строчной буквы**. Заглавная остаётся только у существительных и у вежливых `Sie`, `Ihnen`, `Ihr`.' },
        {
            type: 'exs',
            items: [
                { de: 'Sehr geehrte Frau Hartmann, **ich** schreibe Ihnen, weil ich eine Frage habe.', ru: 'Уважаемая госпожа Хартман, я пишу вам, потому что у меня есть вопрос.' },
                { de: 'Lieber Tom, **vielen** Dank für deine Nachricht!', ru: 'Дорогой Том, большое спасибо за твоё сообщение!' },
                { de: 'Liebe Frau Hartmann, **Ihr** Brief hat mich sehr gefreut.', ru: 'Дорогая госпожа Хартман, ваше письмо меня очень обрадовало.' },
                { de: 'Sehr geehrte Damen und Herren, **meine** Waschmaschine ist seit Montag kaputt.', ru: 'Уважаемые дамы и господа, моя стиральная машина не работает с понедельника.' }
            ]
        },
        { type: 'trap', wrong: 'Lieber Tom. Vielen Dank für deine Nachricht!', right: 'Lieber Tom, vielen Dank für deine Nachricht!', why: 'После обращения — запятая, а не точка. Вместо восклицательного знака, как в русском «Дорогой Том!», в немецком письме обычно ставят запятую. После неё `vielen` пишется со строчной: это не существительное.' },

        { type: 'h', text: '5. Sie или du — одно на всё письмо' },
        {
            type: 'table',
            head: ['Что', 'Вежливо: Sie', 'По-дружески: du'],
            rows: [
                ['кто?', '`Sie`', '`du`'],
                ['кому?', '`Ihnen`', '`dir`'],
                ['кого?', '`Sie`', '`dich`'],
                ['ваш / твой', '`Ihr`, `Ihre`, `Ihren`', '`dein`, `deine`, `deinen`'],
                ['вопрос', '`Können Sie …?` `Haben Sie …?`', '`Kannst du …?` `Hast du …?`'],
                ['просьба', '`Rufen Sie mich bitte an.`', '`Ruf mich bitte an.`']
            ],
            note: 'Вежливые `Sie`, `Ihnen`, `Ihr` всегда пишутся с заглавной, в любом месте предложения. `du`, `dir`, `dein` в письме можно писать и с заглавной (`Du`, `Dir`) — выберите один вариант и держитесь его.'
        },
        { type: 'rule', text: 'Одно письмо — одна форма. Начали с `Sehr geehrte …` — до конца `Sie`, `Ihnen`, `Ihr`. Начали с `Lieber Tom,` — до конца `du`, `dir`, `dein`.' },
        { type: 'trap', wrong: 'Lieber Tom, kannst du mir helfen? Ich danke Ihnen sehr.', right: 'Lieber Tom, kannst du mir helfen? Ich danke dir sehr.', why: 'По-русски тоже нельзя начать на «ты», а закончить на «вы». Смешение `du` и `Sie` — ошибка регистра, и её видно сразу.' },
        { type: 'trap', wrong: 'Ich freue mich auf ihre Antwort.', right: 'Ich freue mich auf Ihre Antwort.', why: 'С маленькой буквы `ihre` значит «её» или «их». Вежливое «ваш» — только `Ihre`. В русском «Вы» с большой буквы — дело вкуса, в немецком — правило.' },

        { type: 'h', text: '6. Прощание' },
        {
            type: 'table',
            head: ['Прощание', 'Когда'],
            rows: [
                ['`Mit freundlichen Grüßen`', 'фирме, ведомству, хозяину квартиры, учителю, начальнику — подходит всегда, когда вы на `Sie`'],
                ['`Freundliche Grüße`', 'то же, чуть менее строго'],
                ['`Viele Grüße`', 'знакомому на `Sie` (после `Liebe Frau …,`) и другу'],
                ['`Herzliche Grüße`', 'тепло: хорошему знакомому, другу, родственнику'],
                ['`Liebe Grüße`', 'другу, подруге, родственнику'],
                ['`Bis bald`', 'только другу; часто вместе с `Liebe Grüße`']
            ],
            note: 'После прощания запятая не ставится. Имя пишут на следующей строке.'
        },
        { type: 'trap', wrong: 'Mit freundlichen Grüßen,', right: 'Mit freundlichen Grüßen', why: 'По-русски «С уважением,» пишут с запятой. В немецком после прощания запятой нет.' },

        { type: 'h', text: '7. Части письма' },
        {
            type: 'table',
            head: ['Часть', 'Что писать', 'Пример'],
            rows: [
                ['Anrede', 'обращение с запятой', '`Sehr geehrte Frau Hartmann,`'],
                ['Einleitung', 'зачем вы пишете — одно предложение', '`ich schreibe Ihnen, weil …`'],
                ['Hauptteil', 'пункты задания по порядку: на каждый одно-два предложения', '`Leider …` `Könnten Sie …?` `Ich schlage vor, dass …`'],
                ['Schluss', 'благодарность, надежда, просьба ответить', '`Vielen Dank für Ihre Hilfe.` `Ich freue mich auf Ihre Antwort.`'],
                ['Gruß', 'прощание, без запятой', '`Mit freundlichen Grüßen`'],
                ['Name', 'имя на следующей строке', '`Irina Sokolowa`']
            ],
            note: 'Часто Einleitung и есть первый пункт задания — `Grund für Ihr Schreiben`.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Ich schreibe Ihnen, **weil** ich den Termin verschieben muss.', ru: 'Я пишу вам, потому что мне нужно перенести встречу.' },
                { de: 'Ich schreibe Ihnen **wegen** der Reparatur in meiner Wohnung.', ru: 'Я пишу вам по поводу ремонта в моей квартире.' },
                { de: '**Vielen Dank** für Ihr Verständnis.', ru: 'Большое спасибо за понимание.' },
                { de: '**Ich hoffe**, dass Sie mir helfen können.', ru: 'Надеюсь, что вы сможете мне помочь.' },
                { de: '**Ich freue mich** auf Ihre Antwort.', ru: 'Буду рад вашему ответу.' }
            ]
        },
        { type: 'tip', text: 'Пункты задания — готовый план основной части. Перед письмом пронумеруйте их, пишите в том же порядке, а в конце проверьте, что на каждый пункт есть хотя бы одно предложение.' },

        { type: 'h', text: '8. Дата, тема и длина' },
        {
            type: 'table',
            head: ['Что', 'Где и как', 'Пример'],
            rows: [
                ['Дата в бумажном письме', 'справа вверху, перед обращением', '`Köln, 12.10.2026`'],
                ['Дата в e-mail', 'не пишут: почта ставит её сама', '—'],
                ['Тема (`Betreff`)', 'несколько слов о главном, без глагола и без точки', '`Terminverschiebung am 12. Oktober`'],
                ['Тема письма другу', 'можно проще', '`Umzug am Samstag`']
            ],
            note: 'На экзамене обязательны обращение и прощание. Дата и тема — по желанию: они не заменяют ни одного пункта.'
        },
        { type: 'p', text: 'В задании сказано: «Schreiben Sie möglichst viel» — «напишите как можно больше». Но каждое лишнее предложение — ещё один шанс ошибиться. В образце из официального руководства письмо на 77 слов с заметными ошибками получило B1: все пункты были раскрыты и связаны. Ориентир — **70–100 слов**: четыре пункта по одному-два предложения плюс начало и конец. Осталось время — добавьте связку или придаточное с `weil`, а не новую тему.' },

        { type: 'h', text: '9. Вежливо, а не разговорно' },
        {
            type: 'table',
            head: ['Слишком разговорно', 'Уместно в письме на Sie', 'Почему'],
            rows: [
                ['`Hallo Herr Lehmann,`', '`Sehr geehrter Herr Lehmann,`', '`Hallo` — приветствие для друзей'],
                ['`Tschüss`', '`Mit freundlichen Grüßen`', '`Tschüss` говорят вслух знакомым, в письме на `Sie` его не пишут'],
                ['`Ich will einen Termin.`', '`Ich hätte gern einen Termin.`', '`will` звучит как требование'],
                ['`Schicken Sie mir die Unterlagen!`', '`Könnten Sie mir bitte die Unterlagen schicken?`', 'вместо приказа — просьба'],
                ['`Das geht nicht!`', '`Das ist leider nicht möglich.`', '`leider` смягчает отказ'],
                ['`Antworten Sie schnell!`', '`Ich freue mich auf Ihre Antwort.`', 'просьба ответить без давления']
            ]
        },
        {
            type: 'exs',
            items: [
                { de: 'Ich **möchte** den Termin verschieben.', ru: 'Я хотел бы перенести встречу.' },
                { de: '**Könnten** Sie mir bitte helfen?', ru: 'Не могли бы вы мне помочь?' },
                { de: '**Würden** Sie mir bitte die Rechnung schicken?', ru: 'Не пришлёте ли вы мне, пожалуйста, счёт?' },
                { de: '**Wäre** es möglich, dass ich später komme?', ru: 'Можно ли мне прийти позже?' }
            ]
        },

        { type: 'h', text: '10. Проверка за одну минуту' },
        {
            type: 'list',
            items: [
                'Обращение и прощание из одного регистра: `Sehr geehrte …` — `Mit freundlichen Grüßen`, `Lieber Tom,` — `Liebe Grüße`.',
                'После обращения — запятая, дальше строчная буква.',
                'Во всём письме одна форма: `Sie`, `Ihnen`, `Ihr` — или `du`, `dir`, `dein`.',
                'Вежливые `Sie`, `Ihnen`, `Ihr` написаны с заглавной.',
                'В письме на `Sie` нет `Hallo`, `Tschüss`, `Ich will`.',
                'На каждый из четырёх пунктов задания есть хотя бы одно предложение.'
            ]
        },
        { type: 'tip', text: 'Делайте эту проверку отдельно от проверки грамматики: один раз перечитайте письмо только глазами адресата — кому вы пишете и как это звучит.' }
    ],

    exercises: [
        // ---- выбор
        { id: 'l01-01', type: 'choice', q: 'Вы пишете хозяину квартиры, господину Фогелю. Какое обращение подходит?',
          options: ['Sehr geehrter Herr Vogel,', 'Lieber Vogel,', 'Hallo Vogel,'], answer: 0,
          explain: 'Хозяину квартиры пишут на `Sie`: `Sehr geehrter Herr` и фамилия. Фамилия без `Herr` после `Lieber` или `Hallo` звучит грубо и фамильярно.', tag: 'register' },
        { id: 'l01-02', type: 'choice', q: 'Вы пишете в фирму и не знаете, кто прочитает письмо. Как начать?',
          options: ['Sehr geehrte Damen und Herren,', 'Sehr geehrte Frau,', 'Liebe Firma,'], answer: 0,
          explain: 'Если имени нет, пишут общую формулу `Sehr geehrte Damen und Herren,`. `Sehr geehrte Frau` без фамилии не пишут, а `Liebe Firma` по-немецки не говорят.', tag: 'register' },
        { id: 'l01-03', type: 'choice', q: 'Какое обращение подходит для письма подруге Лене?',
          options: ['Liebe Lena,', 'Lieber Lena,', 'Sehr geehrte Lena,'], answer: 0,
          explain: 'Подруге — `Liebe` и имя. `Lieber` с окончанием `-r` — для мужчины, а `Sehr geehrte` к женщине пишут только с `Frau` и фамилией, а не перед одним именем.', tag: 'register' },
        { id: 'l01-04', type: 'choice', q: 'Какое обращение написано правильно?',
          options: ['Sehr geehrter Herr Lehmann,', 'Sehr geehrte Herr Lehmann,', 'Sehr geehrten Herr Lehmann,'], answer: 0,
          explain: 'Перед `Herr` — окончание `-r`: `geehrter`. Форма `geehrte` — для `Frau`, а `geehrten` в обращении к одному человеку не бывает.', tag: 'register' },
        { id: 'l01-05', type: 'choice', q: 'Письмо начинается словами «Sehr geehrte Frau Hartmann,». Какое прощание подходит?',
          options: ['Mit freundlichen Grüßen', 'Liebe Grüße', 'Tschüss'], answer: 0,
          explain: '`Sehr geehrte …` — вежливое письмо, к нему подходит `Mit freundlichen Grüßen`. `Liebe Grüße` и `Tschüss` — для друзей.', tag: 'register' },
        { id: 'l01-06', type: 'choice', q: 'Письмо начинается словами «Lieber Tom,». Какое прощание подходит лучше всего?',
          options: ['Liebe Grüße', 'Mit freundlichen Grüßen', 'Mit freundlichem Gruß'], answer: 0,
          explain: 'Другу пишут тепло: `Liebe Grüße` или `Viele Grüße`. `Mit freundlichen Grüßen` и `Mit freundlichem Gruß` — формулы официального письма.', tag: 'register' },
        { id: 'l01-07', type: 'choice', q: 'Как правильно продолжить письмо после обращения?',
          text: 'Sehr geehrte Frau Hartmann,',
          options: ['ich möchte mich für Ihre Hilfe bedanken.', 'Ich möchte mich für Ihre Hilfe bedanken.', 'ich möchte mich für ihre Hilfe bedanken.'], answer: 0,
          explain: 'После запятой в обращении — строчная `ich`. А вежливое `Ihre` всегда с заглавной: `ihre` значило бы «её» или «их».', tag: 'schreibung' },
        { id: 'l01-08', type: 'choice', q: 'Какая просьба уместна в письме начальнику?',
          options: ['Könnten Sie mir bitte sagen, wann wir uns treffen können?', 'Sagen Sie mir sofort, wann wir uns treffen!', 'Ich will wissen, wann wir uns treffen.'], answer: 0,
          explain: '`Könnten Sie mir bitte sagen, …` — вежливая просьба в Konjunktiv II. `Sagen Sie mir sofort` и `Ich will wissen` звучат как требование.', tag: 'konj2' },
        { id: 'l01-09', type: 'choice', q: 'Какой отказ подходит для письма на «Sie»?',
          options: ['Das ist leider nicht möglich.', 'Das geht nicht!', 'Nee, das geht nicht.'], answer: 0,
          explain: '`leider` и `nicht möglich` делают отказ вежливым. `Das geht nicht!` звучит резко, а `Nee` — разговорное слово для друзей.', tag: 'register' },
        { id: 'l01-10', type: 'choice', q: 'В каком письме другу нет смешения du и Sie?',
          options: ['Lieber Tom, kannst du mir helfen? Ich danke dir.', 'Lieber Tom, kannst du mir helfen? Ich danke Ihnen.', 'Lieber Tom, können Sie mir helfen? Ich danke dir.'], answer: 0,
          explain: 'Начали на `du` — до конца `du`, `dir`, `dein`. `Ihnen` и `können Sie` в письме другу — ошибка регистра.', tag: 'register' },
        { id: 'l01-11', type: 'choice', q: 'Какая тема (Betreff) лучше для письма о переносе встречи?',
          options: ['Terminverschiebung am 12. Oktober', 'Hallo, ich habe eine Frage', 'Wichtig!!!'], answer: 0,
          explain: 'Тема коротко и точно называет, о чём письмо. Приветствие и восклицательные знаки ничего не сообщают.', tag: 'aufbau' },
        { id: 'l01-12', type: 'choice', q: 'Какое начало сразу называет причину письма?',
          text: 'Sehr geehrter Herr Lehmann,',
          options: ['ich schreibe Ihnen, weil ich den Kurs wechseln möchte.', 'wie geht es Ihnen? Mir geht es gut.', 'heute ist das Wetter sehr schön.'], answer: 0,
          explain: 'Einleitung — одно предложение о том, зачем вы пишете. `ich schreibe Ihnen, weil …` сразу раскрывает первый пункт задания.', tag: 'aufbau' },

        // ---- порядок
        { id: 'l01-13', type: 'order', q: 'Расставьте части письма учительнице по порядку.',
          items: ['Sehr geehrte Frau Hartmann,', 'ich schreibe Ihnen, weil ich nächste Woche nicht zum Elterngespräch kommen kann.', 'An diesem Tag muss ich mit meinem Sohn zum Arzt gehen.', 'Könnten Sie mir bitte einen neuen Termin geben?', 'Vielen Dank für Ihr Verständnis.', 'Mit freundlichen Grüßen', 'Irina Sokolowa'],
          explain: 'Обращение, причина письма, подробности, просьба, благодарность, прощание и имя — так строится любое письмо.', tag: 'aufbau' },
        { id: 'l01-14', type: 'order', q: 'Расставьте части письма другу по порядку.',
          items: ['Lieber Tom,', 'vielen Dank für deine Einladung!', 'Leider kann ich am Samstag nicht kommen, weil ich arbeiten muss.', 'Hast du vielleicht am Sonntag Zeit?', 'Ich freue mich auf deine Antwort.', 'Liebe Grüße', 'Lena'],
          explain: 'И в письме другу тот же порядок: обращение, благодарность, отказ с причиной, новое предложение, завершение, прощание, имя.', tag: 'aufbau' },
        { id: 'l01-15', type: 'order', q: 'Расставьте части письма по схеме.',
          items: ['Anrede', 'Einleitung', 'Hauptteil', 'Schluss', 'Gruß', 'Name'],
          explain: 'Обращение → зачем вы пишете → пункты задания → благодарность или просьба ответить → прощание → имя.', tag: 'aufbau' },
        { id: 'l01-16', type: 'order', q: 'Расставьте части письма хозяину квартиры по порядку.',
          items: ['Sehr geehrter Herr Vogel,', 'ich schreibe Ihnen wegen der Heizung in meiner Wohnung.', 'Seit Montag funktioniert sie nicht mehr.', 'Könnten Sie bitte so schnell wie möglich einen Handwerker schicken?', 'Vielen Dank im Voraus.', 'Mit freundlichen Grüßen'],
          explain: 'Сначала повод письма (`wegen der Heizung`), потом подробности, затем просьба. Благодарность и прощание закрывают письмо.', tag: 'aufbau' },

        // ---- пропуски
        { id: 'l01-17', type: 'gap', q: 'Вставьте слово в обращение.',
          text: 'Sehr ___ Frau Hartmann,', hint: 'уважаемая', answer: ['geehrte'],
          explain: 'Формула — `Sehr geehrte Frau …`. Перед `Frau` — окончание `-e`, перед `Herr` было бы `geehrter`.', tag: 'register' },
        { id: 'l01-18', type: 'gap', q: 'Вставьте слово в обращение.',
          text: 'Sehr geehrte ___ und Herren,', hint: 'дамы', answer: ['Damen'],
          explain: '`Sehr geehrte Damen und Herren,` — обращение, когда имя адресата неизвестно. `Damen` — существительное, пишется с заглавной.', tag: 'register' },
        { id: 'l01-19', type: 'gap', q: 'Вставьте слово в обращение.',
          text: '___ Herr Lehmann, vielen Dank für Ihre schnelle Antwort.', hint: 'дорогой; знакомому на «Sie»', answer: ['Lieber'],
          explain: 'Знакомому мужчине, с которым вы на `Sie`, можно написать `Lieber Herr …`. Окончание `-r` — потому что `Herr`.', tag: 'register' },
        { id: 'l01-20', type: 'gap', q: 'Вставьте слово в прощание.',
          text: 'Mit ___ Grüßen', hint: 'freundlich', answer: ['freundlichen'],
          explain: 'Застывшая формула `Mit freundlichen Grüßen`: после `mit` — дательный падеж множественного числа, отсюда окончание `-en`.', tag: 'adjektiv' },
        { id: 'l01-21', type: 'gap', q: 'Вставьте местоимение.',
          text: 'Ich freue mich auf ___ Antwort.', hint: 'ваш, вежливо', answer: ['Ihre'],
          explain: 'Вежливое «ваш» — `Ihr`, с заглавной. `Antwort` — женского рода, после `auf` винительный: `Ihre Antwort`.', tag: 'pronomen' },
        { id: 'l01-22', type: 'gap', q: 'Вставьте местоимение.',
          text: 'Kannst du mir am Samstag helfen? Ich danke ___ schon jetzt!', hint: 'тебе', answer: [['dir', 'Dir']],
          explain: 'Письмо на `du`, значит, и «тебе» — `dir`. `danken` требует дательного падежа. В письме можно писать и `Dir`.', tag: 'pronomen' },
        { id: 'l01-23', type: 'gap', q: 'Вставьте местоимение.',
          text: 'Könnten ___ mir bitte die Unterlagen schicken?', hint: 'вы, вежливо', answer: ['Sie'],
          explain: 'Вежливое «вы» — `Sie` с заглавной. С маленькой `sie` — это «она» или «они».', tag: 'pronomen' },
        { id: 'l01-24', type: 'gap', q: 'Вставьте местоимение.',
          text: 'Vielen Dank für ___ Hilfe, lieber Tom!', hint: 'твой', answer: [['deine', 'Deine']],
          explain: '`Hilfe` — женского рода, после `für` винительный: `deine Hilfe`. Другу — `dein`, а не `Ihr`.', tag: 'pronomen' },
        { id: 'l01-25', type: 'gap', q: 'Вставьте глагол в вежливой форме.',
          text: '___ es möglich, dass ich am Montag später komme?', hint: 'sein, вежливая форма', answer: ['Wäre'],
          explain: '`Wäre es möglich, dass …?` — вежливая просьба в Konjunktiv II. `Ist es möglich` тоже по-немецки, но звучит прямее.', tag: 'konj2' },
        { id: 'l01-26', type: 'gap', q: 'Вставьте глагол в вежливой форме.',
          text: '___ Sie mir bitte einen neuen Termin geben?', hint: 'können, вежливая форма', answer: ['Könnten'],
          explain: '`Könnten Sie …?` — Konjunktiv II от `können`, самая частая вежливая просьба в письме.', tag: 'konj2' },

        // ---- исправить ошибку
        { id: 'l01-27', type: 'fix', q: 'Исправьте ошибку в обращении.',
          text: 'Sehr geehrte Herr Lehmann,', answer: ['Sehr geehrter Herr Lehmann,'],
          explain: 'Перед `Herr` нужно окончание `-r`: `Sehr geehrter Herr …`.', tag: 'register' },
        { id: 'l01-28', type: 'fix', q: 'Том — ваш друг. Исправьте ошибку.',
          text: 'Lieber Tom, können Sie mir am Freitag helfen?', answer: ['Lieber Tom, kannst du mir am Freitag helfen?', 'Lieber Tom, kannst Du mir am Freitag helfen?'],
          explain: 'Обращение `Lieber Tom` — значит, письмо на `du`: `kannst du`. Вежливое `Sie` с ним не сочетается.', tag: 'register' },
        { id: 'l01-29', type: 'fix', q: 'Исправьте ошибку в письме на «Sie».',
          text: 'Ich freue mich auf ihre Antwort.', answer: ['Ich freue mich auf Ihre Antwort.'],
          explain: 'Вежливое `Ihre` пишется с заглавной. `ihre` с маленькой — «её» или «их».', tag: 'schreibung' },
        { id: 'l01-30', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Sehr geehrte Frau Hartmann, Ich schreibe Ihnen, weil ich eine Frage habe.', answer: ['Sehr geehrte Frau Hartmann, ich schreibe Ihnen, weil ich eine Frage habe.'],
          explain: 'После запятой в обращении письмо продолжается со строчной буквы: `ich schreibe …`. `Ihnen` остаётся с заглавной — это вежливая форма.', tag: 'schreibung' },
        { id: 'l01-31', type: 'fix', q: 'Сделайте фразу вежливой.',
          text: 'Ich will einen neuen Termin.', answer: ['Ich möchte einen neuen Termin.', 'Ich möchte gern einen neuen Termin.', 'Ich möchte gerne einen neuen Termin.', 'Ich hätte gern einen neuen Termin.', 'Ich hätte gerne einen neuen Termin.'],
          explain: '`Ich will` в письме звучит как требование. Вежливо — `Ich möchte …` или `Ich hätte gern …`.', tag: 'konj2' },
        { id: 'l01-32', type: 'fix', q: 'Исправьте ошибку в письме другу.',
          text: 'Lieber Tom, vielen Dank für Ihre Hilfe.', answer: ['Lieber Tom, vielen Dank für deine Hilfe.', 'Lieber Tom, vielen Dank für Deine Hilfe.'],
          explain: 'Другу — `dein`: `deine Hilfe`. `Ihre` — вежливая форма, в письме на `du` её не бывает.', tag: 'register' },

        // ---- составить из слов
        { id: 'l01-33', type: 'build', q: 'Составьте начало письма.',
          ru: 'Я пишу вам, потому что у меня есть вопрос.',
          answer: ['Ich schreibe Ihnen, weil ich eine Frage habe.'],
          explain: 'Готовое начало письма. После `weil` спрягаемый глагол `habe` уходит в конец, перед `weil` — запятая.', tag: 'nebensatz' },
        { id: 'l01-34', type: 'build', q: 'Составьте вежливую просьбу.',
          ru: 'Не могли бы вы мне, пожалуйста, позвонить?',
          answer: ['Könnten Sie mich bitte anrufen?'],
          explain: '`Könnten Sie …?` — вежливая просьба. `anrufen` требует винительного: `mich anrufen`, хотя по-русски «позвонить мне».', tag: 'konj2' },
        { id: 'l01-35', type: 'build', q: 'Составьте фразу для конца письма.',
          ru: 'Буду рад вашему ответу.',
          answer: ['Ich freue mich auf Ihre Antwort.', 'Auf Ihre Antwort freue ich mich.'],
          explain: '«Буду рад ответу» — `sich freuen auf` с винительным: `auf Ihre Antwort`. Вежливое `Ihre` — с заглавной.', tag: 'verbprep' },
        { id: 'l01-36', type: 'build', q: 'Составьте вежливый отказ.',
          ru: 'К сожалению, это невозможно.',
          answer: ['Das ist leider nicht möglich.', 'Leider ist das nicht möglich.'],
          explain: 'Вежливый отказ: `leider` и `nicht möglich`. Если `Leider` стоит первым, глагол `ist` идёт сразу за ним.', tag: 'verb2' }
    ],

    apply: {
        task: 'Напишите короткое письмо соседке, госпоже Зайдель (5–6 предложений): на следующей неделе вы уезжаете и просите её поливать цветы. Нужны обращение, причина письма, вежливая просьба, благодарность и прощание.',
        checks: [
            'После обращения стоит запятая, а письмо продолжается со строчной буквы',
            'Первое предложение называет причину письма',
            'Просьба вежливая: `Könnten Sie …?` или `Wäre es möglich, …?`',
            'Во всём письме только `Sie`, `Ihnen`, `Ihr` — и все с заглавной',
            'Прощание подходит к обращению и стоит без запятой'
        ],
        model: 'Liebe Frau Seidel, ich schreibe Ihnen, weil ich nächste Woche zu meiner Schwester nach Hamburg fahre. Könnten Sie bitte in dieser Zeit meine Blumen gießen? Den Schlüssel bringe ich Ihnen am Freitag vorbei. Wenn Sie keine Zeit haben, ist das natürlich kein Problem. Vielen Dank für Ihre Hilfe! Viele Grüße Irina Sokolowa',
        modelRu: 'Дорогая госпожа Зайдель, я пишу вам, потому что на следующей неделе еду к сестре в Гамбург. Не могли бы вы в это время поливать мои цветы? Ключ я занесу вам в пятницу. Если у вас нет времени, это, конечно, не проблема. Большое спасибо за помощь! Всего доброго, Ирина Соколова'
    }
};
