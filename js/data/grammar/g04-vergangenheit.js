/**
 * Модуль 4. Прошедшее время: Perfekt и Präteritum.
 *
 * В письме два прошедших: Perfekt для событий и Präteritum для war, hatte,
 * модальных глаголов и es gab. Отдельно — Partizip II, haben или sein и сорок частых глаголов.
 */

export default {
    id: 'g04',
    order: 4,
    title: 'Прошедшее время: Perfekt и Präteritum',
    short: 'Прошедшее время',
    goal: 'Вы рассказываете о прошлом без ошибок: выбираете между Perfekt и Präteritum, правильно строите Partizip II и знаете, когда нужен `haben`, а когда `sein`.',
    why: 'Почти в каждом письме DTZ есть рассказ о том, что уже случилось: вы были у врача, звонили, получили письмо, переехали. Ошибки в Partizip II (`geschreibt`, `geanrufen`) и в выборе `haben` или `sein` русскоговорящие делают очень часто, а проверяющий видит их сразу. Хватит двух инструментов: Perfekt для событий и Präteritum для `war`, `hatte` и модальных глаголов.',

    theory: [
        { type: 'h', text: '1. Два прошедших времени в письме' },
        { type: 'p', text: 'В русском одно прошедшее время: «звонил», «был», «мог». В немецком письме их два, и выбор зависит не от смысла, а от **глагола**. Большинство глаголов ставят в Perfekt, а `sein`, `haben`, модальные глаголы и `es gibt` — в Präteritum.' },
        {
            type: 'table',
            head: ['Глагол', 'Время в письме', 'Пример'],
            rows: [
                ['Большинство глаголов', 'Perfekt', '`Ich habe Sie angerufen.`'],
                ['`sein`', 'Präteritum', '`Ich war krank.`'],
                ['`haben`', 'Präteritum', '`Ich hatte keine Zeit.`'],
                ['`können`, `müssen`, `wollen` …', 'Präteritum', '`Ich konnte nicht kommen.`'],
                ['`es gibt`', 'Präteritum', '`Es gab ein Problem.`']
            ],
            note: 'Perfekt от `sein` и `haben` (`ich bin … gewesen`, `ich habe … gehabt`) тоже правильный, но в письме звучит тяжелее. Модальные глаголы о прошлом — только в Präteritum: их Perfekt сложный и на B1 не нужен.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Gestern **habe** ich den Vermieter **angerufen**.', ru: 'Вчера я позвонил хозяину квартиры.' },
                { de: 'Leider **war** ich die ganze Woche krank.', ru: 'К сожалению, я всю неделю болел.' },
                { de: 'Mein Sohn **hatte** hohes Fieber.', ru: 'У моего сына была высокая температура.' },
                { de: 'Deshalb **konnte** ich nicht in den Kurs **kommen**.', ru: 'Поэтому я не мог прийти на курс.' },
                { de: '**Es gab** ein Problem mit der Heizung.', ru: 'Возникла проблема с отоплением.' }
            ]
        },
        { type: 'trap', wrong: 'Ich habe beim Arzt gewesen.', right: 'Ich war beim Arzt.', why: 'Perfekt от `sein` образуется с `sein`: `ich bin … gewesen`. Чтобы не ошибиться, пишите проще — в Präteritum: `Ich war beim Arzt.`' },

        { type: 'h', text: '2. Perfekt: haben или sein + Partizip II' },
        { type: 'p', text: 'Perfekt состоит из двух частей. `haben` или `sein` спрягается и стоит на втором месте, а Partizip II не меняется и стоит в конце — это рамка (модуль 1). В придаточном спрягаемая часть уходит за Partizip II: `…, weil ich krank geworden bin` (модуль 2).' },
        {
            type: 'table',
            head: ['Лицо', 'haben + Partizip II', 'sein + Partizip II'],
            rows: [
                ['ich', '`habe … gemacht`', '`bin … gegangen`'],
                ['du', '`hast … gemacht`', '`bist … gegangen`'],
                ['er / sie / es', '`hat … gemacht`', '`ist … gegangen`'],
                ['wir', '`haben … gemacht`', '`sind … gegangen`'],
                ['ihr', '`habt … gemacht`', '`seid … gegangen`'],
                ['sie / Sie', '`haben … gemacht`', '`sind … gegangen`']
            ]
        },
        {
            type: 'exs',
            items: [
                { de: 'Ich **habe** das Formular schon **ausgefüllt**.', ru: 'Я уже заполнил формуляр.' },
                { de: 'Wir **sind** im Mai nach Leipzig **umgezogen**.', ru: 'В мае мы переехали в Лейпциг.' },
                { de: 'Meine Tochter **hat** gestern einen Test **geschrieben**.', ru: 'Вчера моя дочь писала контрольную.' },
                { de: 'Mein Mann **ist** gestern spät **zurückgekommen**.', ru: 'Мой муж вчера поздно вернулся.' }
            ]
        },

        { type: 'h', text: '3. Partizip II: ge…t и ge…en' },
        { type: 'rule', text: 'Правильный глагол: `ge` + основа + `t` (`machen` → `gemacht`). Неправильный: `ge` + основа + `en`, и гласная часто меняется (`schreiben` → `geschrieben`). Неправильные формы правилом не выводятся — их учат наизусть.' },
        {
            type: 'table',
            head: ['Инфинитив', 'Partizip II', 'В письме'],
            rows: [
                ['`machen`', '`gemacht`', '`Ich habe einen Fehler gemacht.`'],
                ['`sagen`', '`gesagt`', '`Der Arzt hat gesagt, dass …`'],
                ['`fragen`', '`gefragt`', '`Ich habe die Lehrerin gefragt.`'],
                ['`schicken`', '`geschickt`', '`Ich habe Ihnen eine E-Mail geschickt.`'],
                ['`arbeiten`', '`gearbeitet`', '`Ich habe bis 20 Uhr gearbeitet.`'],
                ['`warten`', '`gewartet`', '`Wir haben lange gewartet.`'],
                ['`antworten`', '`geantwortet`', '`Niemand hat geantwortet.`']
            ],
            note: 'Правильные глаголы. Если основа кончается на `-t` или `-d`, перед окончанием вставляется `e`: `gearbeitet`, `gewartet`, `geantwortet`.'
        },
        {
            type: 'table',
            head: ['Инфинитив', 'Partizip II', 'В письме'],
            rows: [
                ['`kommen`', '`gekommen`', '`Der Brief ist gestern gekommen.`'],
                ['`gehen`', '`gegangen`', '`Wir sind zu Fuß gegangen.`'],
                ['`schreiben`', '`geschrieben`', '`Ich habe Ihnen geschrieben.`'],
                ['`sehen`', '`gesehen`', '`Ich habe die Anzeige gesehen.`'],
                ['`geben`', '`gegeben`', '`Sie hat mir den Schlüssel gegeben.`'],
                ['`nehmen`', '`genommen`', '`Ich habe ein Taxi genommen.`'],
                ['`sprechen`', '`gesprochen`', '`Ich habe mit dem Chef gesprochen.`'],
                ['`helfen`', '`geholfen`', '`Die Nachbarin hat mir geholfen.`'],
                ['`finden`', '`gefunden`', '`Ich habe eine Wohnung gefunden.`']
            ],
            note: 'Неправильные глаголы. Особый случай — `bringen`: окончание `-t`, но корень меняется: `gebracht`, `mitgebracht`.'
        },
        { type: 'trap', wrong: 'Ich habe Ihnen letzte Woche geschreibt.', right: 'Ich habe Ihnen letzte Woche geschrieben.', why: '`schreiben` — неправильный глагол: окончание `-en` и другая гласная. Форма `geschreibt` построена «по правилу», как `gemacht`, — это частая ошибка.' },

        { type: 'h', text: '4. Глаголы с приставками' },
        { type: 'p', text: 'Отделяемая приставка (`an`, `ab`, `aus`, `ein`, `mit`, `um`, `zurück`) стоит впереди, а `ge` — между ней и корнем, всё одним словом. Неотделяемые приставки (`be-`, `er-`, `ent-`, `ver-`) и глаголы на `-ieren` получают Partizip II **совсем без `ge`**.' },
        {
            type: 'table',
            head: ['Инфинитив', 'Partizip II', 'Из чего состоит'],
            rows: [
                ['`anrufen`', '`angerufen`', '`an` + `ge` + `rufen`'],
                ['`abholen`', '`abgeholt`', '`ab` + `ge` + `holt`'],
                ['`mitbringen`', '`mitgebracht`', '`mit` + `ge` + `bracht`'],
                ['`einladen`', '`eingeladen`', '`ein` + `ge` + `laden`'],
                ['`ausfüllen`', '`ausgefüllt`', '`aus` + `ge` + `füllt`'],
                ['`absagen`', '`abgesagt`', '`ab` + `ge` + `sagt`'],
                ['`zurückkommen`', '`zurückgekommen`', '`zurück` + `ge` + `kommen`'],
                ['`umziehen`', '`umgezogen`', '`um` + `ge` + `zogen`']
            ]
        },
        {
            type: 'table',
            head: ['Инфинитив', 'Partizip II', 'Почему без ge'],
            rows: [
                ['`besuchen`', '`besucht`', 'приставка `be-`'],
                ['`bekommen`', '`bekommen`', 'приставка `be-`; совпадает с инфинитивом'],
                ['`bezahlen`', '`bezahlt`', 'приставка `be-`'],
                ['`erklären`', '`erklärt`', 'приставка `er-`'],
                ['`entschuldigen`', '`entschuldigt`', 'приставка `ent-`'],
                ['`vergessen`', '`vergessen`', 'приставка `ver-`; совпадает с инфинитивом'],
                ['`verstehen`', '`verstanden`', 'приставка `ver-`'],
                ['`telefonieren`', '`telefoniert`', 'на `-ieren`'],
                ['`reservieren`', '`reserviert`', 'на `-ieren`'],
                ['`passieren`', '`passiert`', 'на `-ieren`'],
                ['`reparieren`', '`repariert`', 'на `-ieren`']
            ],
            note: 'Подсказка на слух: отделяемую приставку отбросьте и смотрите на сам глагол. `ge` нужно, только если ударение падает на его первый слог. В `be-SU-chen`, `ver-GES-sen`, `te-le-fo-NIE-ren` первый слог безударный — `ge` нет. В `RU-fen` (`anrufen`) и `KOM-men` (`zurückkommen`) он ударный — и `ge` есть: `angerufen`, `zurückgekommen`.'
        },
        { type: 'trap', wrong: 'Ich habe Sie gestern geanrufen.', right: 'Ich habe Sie gestern angerufen.', why: 'У отделяемого глагола `ge` встаёт между приставкой и корнем, а не перед всем словом: `an-ge-rufen`.' },
        { type: 'trap', wrong: 'Ich habe Ihren Brief gebekommen.', right: 'Ich habe Ihren Brief bekommen.', why: '`be-` — неотделяемая приставка, поэтому `ge` не нужно. Partizip II от `bekommen` совпадает с инфинитивом. Так же `vergessen` — `vergessen`.' },

        { type: 'h', text: '5. haben или sein' },
        { type: 'rule', text: '`sein` берут глаголы движения из одного места в другое, переезда и смены состояния, а ещё `sein`, `bleiben` и `passieren`. **Все остальные — с `haben`.**' },
        {
            type: 'table',
            head: ['Группа', 'Глаголы', 'Пример'],
            rows: [
                ['Движение', '`gehen`, `kommen`, `fahren`, `ankommen`, `zurückkommen`', '`Ich bin zur Post gegangen.`'],
                ['Переезд', '`umziehen`, `einziehen`', '`Die Familie ist im Juni eingezogen.`'],
                ['Смена состояния', '`aufstehen`, `werden`', '`Ich bin um sechs Uhr aufgestanden.`'],
                ['Запомнить', '`sein`, `bleiben`, `passieren`', '`Ich bin zu Hause geblieben.`']
            ],
            note: 'В русском вспомогательного глагола нет, опереться не на что: этот короткий список надо выучить.'
        },
        { type: 'trap', wrong: 'Der Techniker hat nicht gekommen.', right: 'Der Techniker ist nicht gekommen.', why: '`kommen` — движение, поэтому `sein`: `ist … gekommen`. Рука по привычке берёт самый частый вспомогательный глагол, `haben`, — проверяйте глаголы движения отдельно.' },
        { type: 'trap', wrong: 'Ich bin meinen Sohn vom Kindergarten abgeholt.', right: 'Ich habe meinen Sohn vom Kindergarten abgeholt.', why: 'Вы, конечно, шли за сыном, но `abholen` — не о вашем перемещении, а о том, что вы кого-то забрали. Глагол с дополнением в Akkusativ (`meinen Sohn`) — с `haben`.' },
        { type: 'tip', text: 'Сомневаетесь — спросите себя: подлежащее само переместилось или изменилось? Тогда `sein`. Есть дополнение в Akkusativ (кого? что?) — почти всегда `haben`: `Ich habe meine Tochter abgeholt`, `Ich habe meine Mutter besucht`.' },

        { type: 'h', text: '6. Präteritum: war, hatte, konnte, gab' },
        { type: 'p', text: 'Präteritum — одно слово на втором месте, без Partizip II. С модальным глаголом в конце, как всегда, стоит инфинитив: `Ich konnte nicht kommen.` У `ich` и `er / sie / es` формы совпадают и **не имеют окончания**: `ich war` — `er war`, `ich konnte` — `sie konnte`.' },
        {
            type: 'table',
            head: ['Лицо', 'sein', 'haben', 'können', 'müssen'],
            rows: [
                ['ich', '`war`', '`hatte`', '`konnte`', '`musste`'],
                ['du', '`warst`', '`hattest`', '`konntest`', '`musstest`'],
                ['er / sie / es', '`war`', '`hatte`', '`konnte`', '`musste`'],
                ['wir', '`waren`', '`hatten`', '`konnten`', '`mussten`'],
                ['ihr', '`wart`', '`hattet`', '`konntet`', '`musstet`'],
                ['sie / Sie', '`waren`', '`hatten`', '`konnten`', '`mussten`']
            ],
            note: 'Так же: `wollen` → `wollte`, `dürfen` → `durfte`, `sollen` → `sollte`. Умлаута в Präteritum нет. И отдельно: `es gibt` → `es gab`.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Ich **war** letzte Woche im Krankenhaus.', ru: 'На прошлой неделе я был в больнице.' },
                { de: 'Wir **hatten** leider keine Zeit.', ru: 'К сожалению, у нас не было времени.' },
                { de: 'Ich **musste** zu Hause bleiben, weil mein Sohn krank **war**.', ru: 'Мне пришлось остаться дома, потому что мой сын был болен.' },
                { de: 'Der Techniker **wollte** am Montag kommen, aber er **ist** nicht **gekommen**.', ru: 'Мастер собирался прийти в понедельник, но не пришёл.' },
                { de: 'Im Treppenhaus **gab es** kein Licht.', ru: 'На лестнице не было света.' }
            ]
        },
        { type: 'trap', wrong: 'Ich könnte gestern nicht kommen.', right: 'Ich konnte gestern nicht kommen.', why: '`könnte` с умлаутом — это вежливое «мог бы» (модуль 5). Прошедшее «не мог» — `konnte`, без умлаута. Одна точка над буквой меняет смысл.' },
        { type: 'trap', wrong: 'Im Haus gaben es viele Probleme.', right: 'Im Haus gab es viele Probleme.', why: '«Были проблемы» по-русски во множественном числе, и глагол тянется за ними. Но в `es gab` подлежащее — `es`, поэтому глагол всегда в единственном числе.' },

        { type: 'h', text: '7. Слова времени: gestern, vor, seit' },
        {
            type: 'table',
            head: ['Слово', 'Значение', 'Пример'],
            rows: [
                ['`gestern`', 'вчера', '`Gestern war ich beim Zahnarzt.`'],
                ['`letzte Woche`', 'на прошлой неделе', '`Letzte Woche hatte ich Urlaub.`'],
                ['`vor drei Tagen`', 'три дня назад', '`Ich habe vor drei Tagen angerufen.`'],
                ['`schon`', 'уже', '`Ich habe die Rechnung schon bekommen.`'],
                ['`noch nicht`', 'ещё не', '`Der Brief ist noch nicht gekommen.`'],
                ['`seit`', 'с какого-то времени и до сих пор', '`Die Heizung ist seit Montag kaputt.`']
            ],
            note: '`vor` + Dativ — «назад», точка в прошлом: Perfekt или Präteritum. `seit` — то, что началось раньше и **длится сейчас**: обычно Präsens, как и в русском («живу здесь уже два года»). Предлоги времени подробно — в модуле 9.'
        },
        { type: 'trap', wrong: 'Ich bin seit drei Jahren nach Deutschland gekommen.', right: 'Ich bin vor drei Jahren nach Deutschland gekommen.', why: 'Приезд — событие в одной точке прошлого: «три года назад» — `vor drei Jahren`. С `seit` говорят о том, что длится до сих пор: `Ich lebe seit drei Jahren in Deutschland.`' },

        { type: 'h', text: '8. Сорок глаголов для писем' },
        {
            type: 'table',
            head: ['Инфинитив', 'Perfekt (er / sie)', 'Перевод'],
            rows: [
                ['`gehen`', '`ist gegangen`', 'идти, ходить'],
                ['`kommen`', '`ist gekommen`', 'приходить, приезжать'],
                ['`fahren`', '`ist gefahren`', 'ехать'],
                ['`ankommen`', '`ist angekommen`', 'прибывать'],
                ['`zurückkommen`', '`ist zurückgekommen`', 'возвращаться'],
                ['`umziehen`', '`ist umgezogen`', 'переезжать'],
                ['`aufstehen`', '`ist aufgestanden`', 'вставать'],
                ['`bleiben`', '`ist geblieben`', 'оставаться'],
                ['`sein`', '`ist gewesen`', 'быть'],
                ['`werden`', '`ist geworden`', 'становиться'],
                ['`passieren`', '`ist passiert`', 'случаться'],
                ['`machen`', '`hat gemacht`', 'делать'],
                ['`sagen`', '`hat gesagt`', 'сказать'],
                ['`fragen`', '`hat gefragt`', 'спрашивать'],
                ['`arbeiten`', '`hat gearbeitet`', 'работать'],
                ['`warten`', '`hat gewartet`', 'ждать'],
                ['`schicken`', '`hat geschickt`', 'отправлять'],
                ['`antworten`', '`hat geantwortet`', 'отвечать'],
                ['`bezahlen`', '`hat bezahlt`', 'платить'],
                ['`besuchen`', '`hat besucht`', 'посещать, навещать'],
                ['`erklären`', '`hat erklärt`', 'объяснять'],
                ['`telefonieren`', '`hat telefoniert`', 'говорить по телефону'],
                ['`reservieren`', '`hat reserviert`', 'бронировать'],
                ['`reparieren`', '`hat repariert`', 'чинить'],
                ['`abholen`', '`hat abgeholt`', 'забирать'],
                ['`ausfüllen`', '`hat ausgefüllt`', 'заполнять'],
                ['`absagen`', '`hat abgesagt`', 'отменять'],
                ['`anrufen`', '`hat angerufen`', 'звонить'],
                ['`einladen`', '`hat eingeladen`', 'приглашать'],
                ['`mitbringen`', '`hat mitgebracht`', 'приносить с собой'],
                ['`schreiben`', '`hat geschrieben`', 'писать'],
                ['`sehen`', '`hat gesehen`', 'видеть'],
                ['`geben`', '`hat gegeben`', 'давать'],
                ['`nehmen`', '`hat genommen`', 'брать'],
                ['`sprechen`', '`hat gesprochen`', 'говорить'],
                ['`helfen`', '`hat geholfen`', 'помогать'],
                ['`finden`', '`hat gefunden`', 'находить'],
                ['`bekommen`', '`hat bekommen`', 'получать'],
                ['`vergessen`', '`hat vergessen`', 'забывать'],
                ['`verstehen`', '`hat verstanden`', 'понимать']
            ],
            note: 'Сначала одиннадцать глаголов с `sein` — их меньше, их и запоминайте. Все остальные здесь — с `haben`.'
        },

        { type: 'h', text: '9. Проверка за десять секунд' },
        {
            type: 'list',
            items: [
                'В конце предложения Partizip II? Тогда на втором месте должно стоять `habe`, `hat`, `bin`, `ist` и т. д.',
                'Глагол движения, переезда, `bleiben`, `werden`, `passieren` — с `sein`. Остальные — с `haben`.',
                'Приставка `be-`, `er-`, `ent-`, `ver-` или окончание `-ieren` — без `ge`. Отделяемая приставка — `ge` в середине.',
                '`sein`, `haben`, модальные глаголы и `es gibt` — в Präteritum: `war`, `hatte`, `konnte`, `gab`, без умлаута.'
            ]
        },
        { type: 'tip', text: 'Для письма DTZ хватит десятка надёжных форм: `war`, `hatte`, `konnte`, `musste`, `habe … angerufen`, `habe … bekommen`, `bin … gegangen`, `ist … passiert`. Не помните Partizip II редкого глагола — перестройте фразу на знакомый.' }
    ],

    exercises: [
        // ---- выбор
        { id: 'g04-01', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Am Montag habe ich zum Jobcenter gegangen.', 'Am Montag bin ich zum Jobcenter gegangen.', 'Am Montag bin ich zum Jobcenter gegeht.'], answer: 1,
          explain: '`gehen` — движение с места на место, поэтому Perfekt с `sein`: `bin … gegangen`. `gehen` — неправильный глагол, формы `gegeht` нет.', tag: 'perfekt', diag: true },
        { id: 'g04-02', type: 'choice', q: 'Выберите правильный Partizip II.',
          text: 'Ich habe meinen Schlüssel leider nicht ___.',
          options: ['gefunden', 'gefindet', 'gefinden'], answer: 0,
          explain: '`finden` — неправильный глагол: гласная меняется на `u`, окончание `-en`. `gefindet` и `gefinden` построены по ошибочной аналогии.', tag: 'perfekt', diag: true },
        { id: 'g04-03', type: 'choice', q: 'Выберите правильный Partizip II.',
          text: 'Leider habe ich den Termin zu spät ___.',
          options: ['abgesagt', 'geabsagt', 'abgesagen'], answer: 0,
          explain: 'У отделяемой приставки `ab` слог `ge` встаёт после неё: `ab-ge-sagt`. `sagen` — правильный глагол, поэтому окончание `-t`.', tag: 'perfekt' },
        { id: 'g04-04', type: 'choice', q: 'Выберите правильный Partizip II.',
          text: 'Ich habe Ihren Brief am Montag ___.',
          options: ['bekommen', 'gebekommen', 'bekommt'], answer: 0,
          explain: '`be-` — неотделяемая приставка, поэтому `ge` не нужно: Partizip II совпадает с инфинитивом. `bekommt` — настоящее время, после `habe` оно не стоит.', tag: 'perfekt' },
        { id: 'g04-05', type: 'choice', q: 'Как спросить «Что случилось?»',
          options: ['Was ist passiert?', 'Was hat passiert?', 'Was ist gepassiert?'], answer: 0,
          explain: '`passieren` образует Perfekt с `sein`, а как глагол на `-ieren` — без `ge`: `ist passiert`.', tag: 'perfekt' },
        { id: 'g04-06', type: 'choice', q: 'Какое слово подходит?',
          text: 'Letzten Montag ___ ich leider nicht zum Termin kommen.',
          options: ['konnte', 'könnte', 'kann'], answer: 0,
          explain: 'Прошедшее «не мог» — `konnte`, без умлаута. `könnte` значит «мог бы», а `kann` — настоящее время, со словами `letzten Montag` оно не сочетается.', tag: 'praeteritum', diag: true },
        { id: 'g04-07', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Gestern war ich beim Elternabend.', 'Gestern habe ich beim Elternabend gewesen.', 'Gestern bin ich beim Elternabend gewest.'], answer: 0,
          explain: 'Для `sein` в письме обычно берут Präteritum: `war`. Perfekt от `sein` — только `bin … gewesen`, поэтому `habe … gewesen` и `gewest` — ошибки.', tag: 'praeteritum' },
        { id: 'g04-08', type: 'choice', q: 'Выберите вспомогательный глагол.',
          text: 'Gestern ___ ich meine Tochter von der Schule abgeholt.',
          options: ['habe', 'bin'], answer: 0,
          explain: '`abholen` — «забрать кого-то», у него есть дополнение в Akkusativ (`meine Tochter`). Такие глаголы образуют Perfekt с `haben`, хотя вы при этом куда-то шли.', tag: 'perfekt' },
        { id: 'g04-09', type: 'choice', q: 'Как сказать «Я живу в этой квартире уже два года»?',
          options: ['Ich wohne seit zwei Jahren in dieser Wohnung.', 'Ich wohne vor zwei Jahren in dieser Wohnung.', 'Ich wohne seit zwei Jahre in dieser Wohnung.'], answer: 0,
          explain: '«Уже два года и до сих пор» — `seit` с Präsens. `vor zwei Jahren` значит «два года назад». После `seit` нужен Dativ: `seit zwei Jahren`, с `-n`.', tag: 'zeit' },
        { id: 'g04-10', type: 'choice', q: 'Какое слово подходит?',
          text: 'Letzte Woche ___ ich jeden Tag länger arbeiten.',
          options: ['musste', 'müsste', 'muss'], answer: 0,
          explain: '`letzte Woche` — прошлое, поэтому Präteritum `musste`. `müsste` с умлаутом — «надо было бы», а `muss` — настоящее время.', tag: 'praeteritum' },

        // ---- пропуски
        { id: 'g04-11', type: 'gap', q: 'Вставьте Partizip II.',
          text: 'Sie haben mir leider noch nicht ___.', hint: 'antworten', answer: ['geantwortet'],
          explain: 'Основа `antwort` кончается на `-t`, поэтому перед окончанием вставляется `e`: `ge-antwort-e-t`.', tag: 'perfekt' },
        { id: 'g04-12', type: 'gap', q: 'Вставьте Partizip II.',
          text: 'Sie haben mir am Telefon eine falsche Nummer ___.', hint: 'geben', answer: ['gegeben'],
          explain: '`geben` — неправильный глагол: окончание `-en`, а не `-t`. Гласная здесь не меняется: `gegeben`.', tag: 'perfekt' },
        { id: 'g04-13', type: 'gap', q: 'Вставьте Partizip II.',
          text: 'Ich habe den Termin leider ___.', hint: 'vergessen', answer: ['vergessen'],
          explain: '`ver-` — неотделяемая приставка: `ge` не добавляется, и Partizip II совпадает с инфинитивом.', tag: 'perfekt' },
        { id: 'g04-14', type: 'gap', q: 'Вставьте Partizip II.',
          text: 'Haben Sie den Antrag schon ___?', hint: 'ausfüllen', answer: ['ausgefüllt'],
          explain: 'Отделяемая приставка `aus`: `ge` встаёт после неё — `aus-ge-füllt`, одним словом. `füllen` — правильный глагол, окончание `-t`.', tag: 'perfekt' },
        { id: 'g04-15', type: 'gap', q: 'Вставьте Partizip II.',
          text: 'Ich habe gestern mit Ihrer Kollegin ___.', hint: 'telefonieren', answer: ['telefoniert'],
          explain: 'Глаголы на `-ieren` образуют Partizip II без `ge`: `telefoniert`, `reserviert`, `passiert`.', tag: 'perfekt' },
        { id: 'g04-16', type: 'gap', q: 'Вставьте вспомогательный глагол.',
          text: 'Die neuen Nachbarn ___ letzte Woche eingezogen.', hint: 'haben или sein', answer: ['sind'],
          explain: '`einziehen` — въехать в квартиру, то есть переместиться. Поэтому `sein`, для `die Nachbarn` — `sind`.', tag: 'perfekt' },
        { id: 'g04-17', type: 'gap', q: 'Вставьте вспомогательный глагол.',
          text: 'Mein Sohn ___ zwei Tage zu Hause geblieben.', hint: 'haben или sein', answer: ['ist'],
          explain: '`bleiben` — исключение: никто никуда не двигается, но Perfekt образуется с `sein`. Для `mein Sohn` — `ist`.', tag: 'perfekt' },
        { id: 'g04-18', type: 'gap', q: 'Вставьте вспомогательный глагол.',
          text: 'Der Hausmeister ___ die Heizung immer noch nicht repariert.', hint: 'haben или sein', answer: ['hat'],
          explain: 'У `reparieren` есть дополнение в Akkusativ (`die Heizung`), поэтому `haben`. Partizip II — без `ge`: `repariert`.', tag: 'perfekt' },
        { id: 'g04-19', type: 'gap', q: 'Вставьте глагол в Präteritum.',
          text: 'Am Freitag ___ ich mit meinem Sohn beim Kinderarzt.', hint: 'sein', answer: ['war'],
          explain: 'Для `sein` в письме берут Präteritum. После `Am Freitag` глагол стоит сразу, форма для `ich` — `war`.', tag: 'praeteritum' },
        { id: 'g04-20', type: 'gap', q: 'Вставьте глагол в Präteritum.',
          text: 'Am Wochenende ___ wir keinen Strom.', hint: 'haben', answer: ['hatten'],
          explain: '`haben` в прошедшем — `hatte`, для `wir` — `hatten`: как в инфинитиве, окончание `-en`.', tag: 'praeteritum' },
        { id: 'g04-21', type: 'gap', q: 'Вставьте глагол в Präteritum.',
          text: 'Wir ___ nicht kommen, weil das Auto kaputt war.', hint: 'können', answer: ['konnten'],
          explain: 'Модальный глагол о прошлом — в Präteritum: `wir konnten`. Умлаута нет, `könnten` значило бы «могли бы».', tag: 'praeteritum' },
        { id: 'g04-22', type: 'gap', q: 'Вставьте глагол в Präteritum.',
          text: 'Im Kurs ___ es leider keine freien Plätze mehr.', hint: 'es gibt', answer: ['gab'],
          explain: '`es gibt` → `es gab`. Глагол в единственном числе, хотя мест много: подлежащее здесь `es`.', tag: 'praeteritum' },
        { id: 'g04-23', type: 'gap', q: 'Вставьте обе части Perfekt.',
          text: 'Ich ___ gestern spät nach Hause ___.', hint: 'kommen', answer: [['bin'], ['gekommen']],
          explain: '`kommen` — движение, поэтому `bin` на втором месте. Partizip II неправильный, `gekommen`, — в конце.', tag: 'perfekt' },
        { id: 'g04-24', type: 'gap', q: 'Вставьте обе части Perfekt.',
          text: 'Frau Becker ___ uns zum Elternabend ___.', hint: 'einladen', answer: [['hat'], ['eingeladen']],
          explain: 'У `einladen` дополнение в Akkusativ (`uns`), значит, `haben`. Приставка `ein` отделяемая: `ein-ge-laden`.', tag: 'perfekt' },

        // ---- составить из слов
        { id: 'g04-25', type: 'build', q: 'Составьте предложение.',
          ru: 'Мы вернулись из отпуска в воскресенье.',
          answer: ['Wir sind am Sonntag aus dem Urlaub zurückgekommen.', 'Am Sonntag sind wir aus dem Urlaub zurückgekommen.', 'Aus dem Urlaub sind wir am Sonntag zurückgekommen.'],
          explain: '`zurückkommen` — движение, поэтому `sind`. Partizip II `zurückgekommen` стоит последним, `ge` — после приставки. Внутри рамки сначала «когда», потом «откуда».', tag: 'perfekt' },
        { id: 'g04-26', type: 'build', q: 'Составьте предложение.',
          ru: 'Учительница объяснила нам задание.',
          answer: ['Die Lehrerin hat uns die Aufgabe erklärt.', 'Die Aufgabe hat uns die Lehrerin erklärt.', 'Uns hat die Lehrerin die Aufgabe erklärt.'],
          explain: '`erklären` — с неотделяемой приставкой `er-`, поэтому без `ge`: `erklärt`. Дополнение в Akkusativ (`die Aufgabe`) — значит, `hat`.', tag: 'perfekt' },
        { id: 'g04-27', type: 'build', q: 'Составьте предложение.',
          ru: 'Я ждал два часа.',
          answer: ['Ich habe zwei Stunden gewartet.', 'Zwei Stunden habe ich gewartet.'],
          explain: '`warten` — с `haben`. Основа `wart` кончается на `-t`, поэтому `gewartet` с `e`. Partizip II — в конце.', tag: 'perfekt' },
        { id: 'g04-28', type: 'build', q: 'Составьте предложение.',
          ru: 'Я уже оплатил курс.',
          answer: ['Ich habe den Kurs schon bezahlt.', 'Den Kurs habe ich schon bezahlt.', 'Ich habe schon den Kurs bezahlt.'],
          explain: '`bezahlen` — с неотделяемой приставкой `be-`, поэтому без `ge`: `bezahlt`. `habe` — на втором месте, Partizip II — последним.', tag: 'perfekt' },
        { id: 'g04-29', type: 'build', q: 'Составьте предложение.',
          ru: 'Мой сын, к сожалению, заболел.',
          answer: ['Mein Sohn ist leider krank geworden.', 'Leider ist mein Sohn krank geworden.'],
          explain: '«Заболеть» — `krank werden`, смена состояния, поэтому `ist`. Partizip II `geworden` стоит в самом конце, после `krank`.', tag: 'perfekt' },
        { id: 'g04-30', type: 'build', q: 'Составьте предложение.',
          ru: 'Вчера я, к сожалению, не смог прийти.',
          answer: ['Gestern konnte ich leider nicht kommen.', 'Leider konnte ich gestern nicht kommen.', 'Ich konnte gestern leider nicht kommen.', 'Ich konnte leider gestern nicht kommen.'],
          explain: 'Модальный глагол о прошлом — Präteritum `konnte` на втором месте. Инфинитив `kommen` — в конце, `nicht` — перед ним.', tag: 'praeteritum' },
        { id: 'g04-31', type: 'build', q: 'Составьте предложение.',
          ru: 'Поезд пришёл слишком поздно.',
          answer: ['Der Zug ist zu spät angekommen.', 'Zu spät ist der Zug angekommen.'],
          explain: '`ankommen` — движение, поэтому `ist`. У отделяемой приставки `ge` в середине: `an-ge-kommen`.', tag: 'perfekt' },

        // ---- исправить ошибку
        { id: 'g04-32', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Wir haben am Samstag nach Berlin gefahren.', answer: ['Wir sind am Samstag nach Berlin gefahren.', 'Am Samstag sind wir nach Berlin gefahren.'],
          explain: 'Поездка из одного места в другое — движение, поэтому `fahren` образует Perfekt с `sein`: `wir sind … gefahren`.', tag: 'perfekt' },
        { id: 'g04-33', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich habe Sie gestern geanrufen.', answer: ['Ich habe Sie gestern angerufen.', 'Gestern habe ich Sie angerufen.'],
          explain: 'У отделяемого глагола `ge` встаёт между приставкой и корнем: `an-ge-rufen`, а не перед всем словом.', tag: 'perfekt', diag: true },
        { id: 'g04-34', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich habe Ihre Frage leider nicht geverstanden.', answer: ['Ich habe Ihre Frage leider nicht verstanden.'],
          explain: '`ver-` — неотделяемая приставка, поэтому `ge` не нужно: `verstanden`.', tag: 'perfekt' },
        { id: 'g04-35', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich bin meine Mutter im Krankenhaus besucht.', answer: ['Ich habe meine Mutter im Krankenhaus besucht.'],
          explain: 'У `besuchen` дополнение в Akkusativ (`meine Mutter`), поэтому `haben`. Это не глагол движения, хотя вы куда-то ходили.', tag: 'perfekt' },
        { id: 'g04-36', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich habe Ihnen das Buch mitgebringt.', answer: ['Ich habe Ihnen das Buch mitgebracht.'],
          explain: '`bringen` — особый глагол: окончание `-t`, но корень меняется — `gebracht`. С приставкой: `mitgebracht`.', tag: 'perfekt' },
        { id: 'g04-37', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Im Kurs gaben es am Montag zwei Tests.', answer: ['Im Kurs gab es am Montag zwei Tests.', 'Am Montag gab es im Kurs zwei Tests.'],
          explain: 'В `es gab` подлежащее — `es`, поэтому глагол всегда в единственном числе, даже если тестов два.', tag: 'praeteritum' },
        { id: 'g04-38', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich bin seit drei Jahren nach Deutschland gekommen.', answer: ['Ich bin vor drei Jahren nach Deutschland gekommen.', 'Vor drei Jahren bin ich nach Deutschland gekommen.'],
          explain: 'Приезд — событие в точке прошлого: «три года назад» — `vor drei Jahren`. `seit` — для того, что длится до сих пор: `Ich wohne seit drei Jahren hier.`', tag: 'zeit' },

        // ---- соединить и перевести
        { id: 'g04-39', type: 'join', q: 'Соедините предложения союзом weil.',
          parts: ['Ich komme heute später.', 'Ich habe den Bus verpasst.'], connector: 'weil',
          answer: ['Ich komme heute später, weil ich den Bus verpasst habe.', 'Weil ich den Bus verpasst habe, komme ich heute später.'],
          explain: 'В придаточном `habe` встаёт в самый конец, после Partizip II: `verpasst habe`. Перед `weil` — запятая.', tag: 'nebensatz' },
        { id: 'g04-40', type: 'join', q: 'Соедините предложения союзом dass.',
          parts: ['Es tut mir leid.', 'Ich bin gestern nicht gekommen.'], connector: 'dass',
          answer: ['Es tut mir leid, dass ich gestern nicht gekommen bin.', 'Dass ich gestern nicht gekommen bin, tut mir leid.'],
          explain: 'После `dass` спрягаемый `bin` уходит в конец, за Partizip II: `nicht gekommen bin`. Такая фраза пригодится для извинения в письме.', tag: 'nebensatz' },
        { id: 'g04-41', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Моя дочь, к сожалению, была больна.',
          answer: ['Meine Tochter war leider krank.', 'Leider war meine Tochter krank.', 'Meine Tochter ist leider krank gewesen.', 'Leider ist meine Tochter krank gewesen.'],
          explain: 'Для `sein` в письме удобнее всего Präteritum: `war`. Perfekt `ist … gewesen` тоже верен, но звучит тяжелее.', tag: 'praeteritum' },
        { id: 'g04-42', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Вчера я не смог вам позвонить.',
          answer: ['Gestern konnte ich Sie nicht anrufen.', 'Ich konnte Sie gestern nicht anrufen.', 'Gestern konnte ich nicht bei Ihnen anrufen.', 'Ich konnte gestern nicht bei Ihnen anrufen.'],
          explain: '«Не смог» — Präteritum `konnte`, инфинитив `anrufen` в конце не делится. «Позвонить вам» — `Sie anrufen` с Akkusativ, хотя по-русски «кому»; можно и `bei Ihnen anrufen`.', tag: 'praeteritum' },
        { id: 'g04-43', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Мы переехали в Мюнхен два месяца назад.',
          answer: ['Wir sind vor zwei Monaten nach München umgezogen.', 'Vor zwei Monaten sind wir nach München umgezogen.', 'Wir sind vor zwei Monaten nach München gezogen.', 'Vor zwei Monaten sind wir nach München gezogen.'],
          explain: '«Назад» — `vor` + Dativ: `vor zwei Monaten`. Переезд — перемещение, поэтому `sind … umgezogen`.', tag: 'perfekt' },
        { id: 'g04-44', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Я получил счёт три дня назад.',
          answer: ['Ich habe die Rechnung vor drei Tagen bekommen.', 'Vor drei Tagen habe ich die Rechnung bekommen.', 'Die Rechnung habe ich vor drei Tagen bekommen.', 'Ich habe vor drei Tagen die Rechnung bekommen.', 'Ich habe die Rechnung vor drei Tagen erhalten.', 'Vor drei Tagen habe ich die Rechnung erhalten.'],
          explain: '«Три дня назад» — `vor drei Tagen`, с Dativ на `-en`. `bekommen` — без `ge`, Partizip II совпадает с инфинитивом; так же официальное `erhalten` — `erhalten`.', tag: 'zeit' }
    ],

    apply: {
        task: 'Напишите 6–8 предложений учительнице, фрау Крюгер: на прошлой неделе вас не было на курсе. Объясните причину, расскажите, что вы сделали (врач, домашние задания), и скажите, когда вернётесь.',
        checks: [
            'Для `sein`, `haben` и модальных глаголов — Präteritum: `war`, `hatte`, `musste`',
            'События — в Perfekt: `habe` или `bin` на втором месте, Partizip II в конце',
            'Глаголы движения — с `sein`: `bin … gegangen`',
            'Partizip II построен верно: `gegangen`, `gegeben`, но `bekommen` — без `ge`',
            'Есть слова времени: `letzte Woche`, `am Dienstag`'
        ],
        model: 'Sehr geehrte Frau Krüger, letzte Woche war ich leider nicht im Kurs. Mein Sohn hatte hohes Fieber. Deshalb musste ich zu Hause bleiben. Am Dienstag bin ich mit ihm zum Arzt gegangen. Der Arzt hat ihm ein Medikament gegeben. Jetzt geht es ihm besser. Die Hausaufgaben habe ich schon von Olga bekommen. Am Montag komme ich wieder. Mit freundlichen Grüßen',
        modelRu: 'Уважаемая госпожа Крюгер, на прошлой неделе меня, к сожалению, не было на курсе. У моего сына была высокая температура. Поэтому мне пришлось остаться дома. Во вторник я ходила с ним к врачу. Врач дал ему лекарство. Сейчас ему лучше. Домашние задания я уже получила от Ольги. В понедельник я снова приду. С уважением'
    }
};
