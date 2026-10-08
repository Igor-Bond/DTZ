/**
 * Модуль 1. Порядок слов.
 *
 * Эталон для остальных модулей: ритм «правило → таблица → примеры из писем →
 * ловушки → совет», упражнения от лёгких к трудным, по четыре показательных
 * задания в входной тест (diag).
 */

export default {
    id: 'g01',
    order: 1,
    title: 'Порядок слов: глагол на втором месте',
    short: 'Порядок слов',
    goal: 'Вы строите простое предложение без ошибок порядка слов: глагол стоит на втором месте даже после «Heute», «Leider» и «Deshalb», а вторая часть глагола уходит в конец.',
    why: 'Ошибка в порядке слов встречается у русскоговорящих очень часто и хорошо заметна читателю: она сразу выдаёт «русскую» конструкцию. Корректность (Korrektheit) — это 5 баллов из 20, и это правило работает в каждом предложении каждого письма, поэтому с него стоит начинать.',

    theory: [
        { type: 'h', text: '1. Главное правило: глагол — на втором месте' },
        { type: 'p', text: 'В русском порядок слов свободный: «Сегодня я не могу прийти» и «Я сегодня не могу прийти» — оба правильны. В немецком повествовательном предложении спрягаемая форма глагола (та, что меняется по лицам: `kann`, `ist`, `habe`) стоит строго на **втором месте**. А вот на первом может быть что угодно.' },
        {
            type: 'table',
            head: ['1-е место', '2-е место: глагол', 'Дальше'],
            rows: [
                ['**Ich**', '**komme**', 'morgen später.'],
                ['**Morgen**', '**komme**', 'ich später.'],
                ['**Leider**', '**kann**', 'ich nicht kommen.'],
                ['**Meine Tochter**', '**ist**', 'seit Montag krank.'],
                ['**Am Montag um 10 Uhr**', '**habe**', 'ich einen Arzttermin.']
            ],
            note: 'Первое место — один «блок». «Meine Tochter» или «Am Montag um 10 Uhr» — это одно первое место, глагол идёт сразу за ним.'
        },
        { type: 'rule', text: 'Что бы ни стояло на первом месте, глагол — сразу за ним. Если первым стоит не подлежащее, подлежащее уходит за глагол: `Heute bin ich krank.`' },
        { type: 'trap', wrong: 'Heute ich bin krank.', right: 'Heute bin ich krank.', why: 'По-русски можно сказать «Сегодня я болен»: подлежащее идёт сразу за «сегодня». По-немецки после `Heute` сначала глагол, потом `ich`. Это самая частая ошибка порядка слов.' },
        { type: 'trap', wrong: 'Leider ich kann nicht kommen.', right: 'Leider kann ich nicht kommen.', why: '`Leider` — одно слово на первом месте. Дальше глагол `kann`, потом подлежащее `ich`.' },

        { type: 'h', text: '2. Что ставят на первое место в письме' },
        { type: 'p', text: 'Чтобы письмо не состояло из одних предложений «Ich … Ich … Ich …», часть предложений начинайте с другого слова. Вот что ставят вперёд чаще всего. После любого из этих слов действует то же правило: глагол следом.' },
        {
            type: 'table',
            head: ['Что', 'Примеры'],
            rows: [
                ['Время', '`Heute`, `Morgen`, `Gestern`, `Am Montag`, `Nächste Woche`, `Seit zwei Wochen`'],
                ['Оценка, отношение', '`Leider`, `Hoffentlich`, `Natürlich`, `Vielleicht`'],
                ['Связка', '`Deshalb`, `Deswegen`, `Trotzdem`, `Außerdem`, `Dann`, `Danach`'],
                ['Место', '`Zu Hause`, `In der Schule`, `Bei mir`']
            ]
        },
        {
            type: 'exs',
            items: [
                { de: '**Leider** **kann** ich diese Woche nicht in den Kurs kommen.', ru: 'К сожалению, на этой неделе я не могу прийти на курс.' },
                { de: '**Deshalb** **bleibe** ich zu Hause.', ru: 'Поэтому я остаюсь дома.' },
                { de: '**Am Freitag** **habe** ich einen Termin beim Arzt.', ru: 'В пятницу у меня приём у врача.' },
                { de: '**Außerdem** **brauche** ich die Hausaufgaben.', ru: 'Кроме того, мне нужны домашние задания.' },
                { de: '**Hoffentlich** **können** Sie mir helfen.', ru: 'Надеюсь, вы сможете мне помочь.' }
            ]
        },
        { type: 'tip', text: 'Если не уверены в инверсии, начните предложение с подлежащего: `Ich …`, `Meine Tochter …`. Это всегда безопасно. Но две-три инверсии за письмо (`Leider kann ich …`, `Deshalb bleibe ich …`) показывают, что порядок слов вам подвластен.' },

        { type: 'h', text: '3. Две части глагола: рамка' },
        { type: 'p', text: 'Иногда сказуемое состоит из двух частей: модальный глагол и инфинитив, `haben` или `sein` и Partizip II, глагол с отделяемой приставкой. Тогда спрягаемая часть стоит на втором месте, а **вторая часть — в самом конце предложения**. Всё остальное оказывается между ними, как в рамке.' },
        {
            type: 'table',
            head: ['Случай', '1-е и 2-е место', 'Середина', 'Конец'],
            rows: [
                ['Модальный глагол', '`Ich kann`', '`morgen nicht`', '`kommen.`'],
                ['Perfekt с `haben`', '`Ich habe`', '`Sie gestern`', '`angerufen.`'],
                ['Perfekt с `sein`', '`Ich bin`', '`gestern zum Arzt`', '`gegangen.`'],
                ['Отделяемая приставка', '`Ich rufe`', '`Sie morgen`', '`an.`'],
                ['`möchte` + инфинитив', '`Ich möchte`', '`Sie etwas`', '`fragen.`']
            ]
        },
        { type: 'rule', text: 'Вторая часть глагола — **последнее слово** простого предложения (после неё может идти только придаточное). Всё остальное — между двумя частями.' },
        {
            type: 'exs',
            items: [
                { de: 'Ich **kann** morgen nicht **kommen**.', ru: 'Завтра я не могу прийти.' },
                { de: 'Ich **habe** Sie gestern **angerufen**.', ru: 'Вчера я вам звонил.' },
                { de: 'Ich **bin** gestern zum Arzt **gegangen**.', ru: 'Вчера я ходил к врачу.' },
                { de: 'Ich **rufe** Sie morgen **an**.', ru: 'Завтра я вам позвоню.' },
                { de: 'Ich **möchte** Sie etwas **fragen**.', ru: 'Я хотел бы вас кое о чём спросить.' }
            ]
        },
        { type: 'trap', wrong: 'Ich habe gestern angerufen Sie.', right: 'Ich habe Sie gestern angerufen.', why: 'По-русски «Я позвонил вам вчера» — слова после глагола идут как удобно. По-немецки Partizip II (`angerufen`) обязан стоять в самом конце.' },
        { type: 'trap', wrong: 'Ich bin gegangen zum Arzt.', right: 'Ich bin zum Arzt gegangen.', why: '`gegangen` — вторая часть Perfekt, ей место в конце. Куда вы ходили, ставится между `bin` и `gegangen`.' },
        { type: 'trap', wrong: 'Ich kann nicht kommen morgen.', right: 'Ich kann morgen nicht kommen.', why: 'После инфинитива в конце ничего не стоит. Время (`morgen`) и отрицание (`nicht`) — внутри рамки.' },
        { type: 'trap', wrong: 'Ich anrufe Sie morgen.', right: 'Ich rufe Sie morgen an.', why: '`anrufen` — отделяемый глагол: приставка `an` уходит в конец, а `rufe` стоит на втором месте.' },

        { type: 'h', text: '4. Порядок слов внутри рамки' },
        { type: 'p', text: 'Между двумя частями глагола слова идут не как попало, а в привычной последовательности. Для письма достаточно такой: **когда → как → куда или где**.' },
        {
            type: 'exs',
            items: [
                { de: 'Ich fahre **morgen** **mit dem Bus** **zum Kurs**.', ru: 'Завтра я еду на курс на автобусе.' },
                { de: 'Ich komme **am Montag** **mit meinem Mann** **zu Ihnen**.', ru: 'В понедельник я приду к вам с мужем.' }
            ]
        },

        { type: 'h', text: '5. Место для nicht' },
        { type: 'p', text: 'Подробно про `nicht` и `kein` — в модуле 6. Для порядка слов хватит трёх правил.' },
        {
            type: 'list',
            items: [
                'Если отрицается весь глагол, `nicht` стоит в конце: `Ich komme heute nicht.`',
                'Если есть вторая часть глагола, `nicht` стоит перед ней: `Ich kann heute nicht kommen.`, `Ich habe Sie nicht angerufen.`',
                'Перед прилагательным и перед указанием места `nicht` тоже стоит перед ними: `Ich bin nicht krank.`, `Ich bin nicht zu Hause.`'
            ]
        },

        { type: 'h', text: '6. Вопросы и просьбы' },
        { type: 'p', text: 'В вопросе и в просьбе (Imperativ) глагол стоит **в начале** или сразу после вопросительного слова. Это пригодится: просьбы — частый пункт в заданиях DTZ.' },
        {
            type: 'table',
            head: ['Тип', 'Схема', 'Пример'],
            rows: [
                ['Вопрос «да или нет»', 'глагол — подлежащее — …', '`Können Sie mir bitte helfen?`'],
                ['Вопрос с вопросительным словом', 'слово — глагол — подлежащее — …', '`Wann ist der Termin?`'],
                ['Просьба (Sie)', 'глагол — `Sie` — …', '`Rufen Sie mich bitte an.`'],
                ['Просьба (du)', 'глагол — …', '`Schick mir bitte die Adresse.`']
            ]
        },
        { type: 'trap', wrong: 'Anrufen Sie mich bitte.', right: 'Rufen Sie mich bitte an.', why: 'В просьбе спрягаемая форма стоит первой, а отделяемая приставка уходит в конец.' },
        { type: 'trap', wrong: 'Wann der Termin ist?', right: 'Wann ist der Termin?', why: 'В прямом вопросе после вопросительного слова сразу идёт глагол. В придаточном предложении всё наоборот, но это тема модуля 2.' },

        { type: 'h', text: '7. Проверка за десять секунд' },
        {
            type: 'list',
            items: [
                'Найдите спрягаемый глагол (`kann`, `habe`, `rufe`). Он стоит вторым «блоком»?',
                'Есть ли в предложении вторая часть глагола (инфинитив, Partizip II, приставка)? Она — последнее слово?',
                'Если первым стоит не подлежащее, стоит ли подлежащее после глагола?'
            ]
        },
        { type: 'tip', text: 'На экзамене перечитайте готовое письмо один раз только с этими тремя вопросами. Это самая быстрая проверка из возможных.' }
    ],

    exercises: [
        // ---- выбор
        { id: 'g01-01', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Heute ich komme später.', 'Heute komme ich später.', 'Ich heute komme später.'], answer: 1,
          explain: 'На первом месте стоит `Heute`, значит, глагол `komme` сразу за ним, а `ich` — после глагола.', tag: 'verb2', diag: true },
        { id: 'g01-02', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Leider ich kann nicht kommen.', 'Leider kann ich nicht kommen.', 'Leider kann ich kommen nicht.'], answer: 1,
          explain: 'Первое место — `Leider`, второе — глагол `kann`. Потом подлежащее и `nicht`, а `kommen` — в конце.', tag: 'verb2' },
        { id: 'g01-03', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich habe angerufen Sie gestern.', 'Ich habe Sie gestern angerufen.', 'Ich habe gestern angerufen Sie.'], answer: 1,
          explain: 'Partizip II `angerufen` — вторая часть Perfekt, он стоит последним. Всё остальное находится между `habe` и `angerufen`.', tag: 'klammer', diag: true },
        { id: 'g01-04', type: 'choice', q: 'Выберите правильную просьбу.',
          options: ['Rufen Sie mich bitte an.', 'Sie mich bitte anrufen.', 'Anrufen Sie mich bitte.'], answer: 0,
          explain: 'В просьбе глагол стоит первым, а отделяемая приставка `an` уходит в конец.', tag: 'klammer' },
        { id: 'g01-05', type: 'choice', q: 'Какой вопрос составлен правильно?',
          options: ['Wann der Termin ist?', 'Wann ist der Termin?', 'Ist wann der Termin?'], answer: 1,
          explain: 'В прямом вопросе после вопросительного слова сразу идёт глагол: `Wann ist …?`', tag: 'verb2' },
        { id: 'g01-06', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Am Montag um 10 Uhr habe ich einen Termin.', 'Am Montag um 10 Uhr ich habe einen Termin.', 'Am Montag habe um 10 Uhr ich einen Termin.'], answer: 0,
          explain: '`Am Montag um 10 Uhr` — один блок на первом месте. Глагол `habe` стоит сразу за ним, а потом `ich`.', tag: 'verb2' },
        { id: 'g01-07', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Deshalb schreibe ich Ihnen.', 'Deshalb ich schreibe Ihnen.', 'Ich deshalb schreibe Ihnen.'], answer: 0,
          explain: 'После связки `Deshalb` глагол идёт сразу, а `ich` — следом за ним. Так же работает `Deswegen` и `Trotzdem`.', tag: 'verb2' },
        { id: 'g01-08', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich möchte fragen Sie etwas.', 'Ich möchte Sie etwas fragen.', 'Ich möchte etwas fragen Sie.'], answer: 1,
          explain: 'После `möchte` инфинитив `fragen` — вторая часть глагола, он стоит в самом конце.', tag: 'klammer' },
        { id: 'g01-09', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich bin gegangen gestern zum Arzt.', 'Ich bin gestern zum Arzt gegangen.', 'Ich gegangen bin gestern zum Arzt.'], answer: 1,
          explain: '`bin` стоит на втором месте, `gegangen` — последним. Время и место идут между ними.', tag: 'klammer' },
        { id: 'g01-10', type: 'choice', q: 'Где правильно стоит nicht?',
          options: ['Ich kann heute nicht kommen.', 'Ich kann heute kommen nicht.', 'Ich nicht kann heute kommen.'], answer: 0,
          explain: '`nicht` стоит перед второй частью глагола. `kommen` остаётся в конце, а глагол `kann` — на втором месте.', tag: 'klammer' },

        // ---- пропуски
        { id: 'g01-11', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Heute ___ ich leider nicht kommen.', hint: 'können', answer: ['kann'],
          explain: 'После `Heute` глагол стоит сразу, а `ich` — после него. Форма для `ich` — `kann`.', tag: 'verb2', diag: true },
        { id: 'g01-12', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Gestern ___ ich Sie angerufen.', hint: 'haben', answer: ['habe'],
          explain: 'Первое место — `Gestern`, второе — `habe`. Partizip II `angerufen` стоит в конце.', tag: 'verb2' },
        { id: 'g01-13', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Morgen ___ ich den ganzen Tag zu Hause.', hint: 'sein', answer: ['bin'],
          explain: 'После `Morgen` — глагол, потом `ich`: `Morgen bin ich …`.', tag: 'verb2' },
        { id: 'g01-14', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Deshalb ___ ich später.', hint: 'kommen', answer: ['komme'],
          explain: 'После `Deshalb` глагол идёт сразу: `Deshalb komme ich später.`', tag: 'verb2' },
        { id: 'g01-15', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Am Mittwoch ___ ich einen Arzttermin.', hint: 'haben', answer: ['habe'],
          explain: '`Am Mittwoch` — одно первое место, значит, `habe` стоит следом.', tag: 'verb2' },
        { id: 'g01-16', type: 'gap', q: 'Вставьте обе части глагола.',
          text: 'Ich ___ Sie morgen ___.', hint: 'anrufen', answer: [['rufe'], ['an']],
          explain: '`anrufen` отделяется: `rufe` на втором месте, приставка `an` — в конце предложения.', tag: 'klammer' },
        { id: 'g01-17', type: 'gap', q: 'Вставьте вторую часть глагола.',
          text: 'Ich möchte Sie etwas ___.', hint: 'fragen', answer: ['fragen'],
          explain: 'После `möchte` инфинитив стоит в самом конце предложения.', tag: 'klammer' },
        { id: 'g01-18', type: 'gap', q: 'Вставьте вторую часть глагола.',
          text: 'Ich habe die Hausaufgaben leider nicht ___.', hint: 'Partizip II от machen', answer: ['gemacht'],
          explain: 'К `habe` нужен Partizip II: `gemacht`. Он стоит последним, после `nicht`.', tag: 'klammer' },
        { id: 'g01-19', type: 'gap', q: 'Вставьте глагол.',
          text: '___ Sie mir bitte helfen?', hint: 'können', answer: [['Können', 'Könnten']],
          explain: 'В вопросе «да или нет» спрягаемый глагол стоит на первом месте, а `helfen` — в конце.', tag: 'verb2' },
        { id: 'g01-20', type: 'gap', q: 'Вставьте вопросительное слово.',
          text: '___ ist der Kurs? Um 18 Uhr.', hint: 'когда', answer: ['Wann'],
          explain: 'Ответ «Um 18 Uhr» отвечает на вопрос `Wann?`. После вопросительного слова сразу идёт глагол.', tag: 'verb2' },
        { id: 'g01-21', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Leider ___ meine Tochter krank.', hint: 'sein', answer: ['ist'],
          explain: 'После `Leider` — глагол `ist`, потом подлежащее `meine Tochter`.', tag: 'verb2' },
        { id: 'g01-22', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Nächste Woche ___ ich wieder im Kurs.', hint: 'sein', answer: ['bin'],
          explain: '`Nächste Woche` — первое место, `bin` — второе, `ich` — после глагола.', tag: 'verb2' },

        // ---- составить из слов
        { id: 'g01-23', type: 'build', q: 'Составьте предложение.',
          ru: 'К сожалению, я не могу прийти сегодня.',
          answer: ['Leider kann ich heute nicht kommen.', 'Heute kann ich leider nicht kommen.', 'Ich kann leider heute nicht kommen.', 'Ich kann heute leider nicht kommen.'],
          explain: 'Глагол `kann` — на втором месте, `kommen` — в конце. Перед `kann` стоит один «блок»: `Leider`, `Heute` или `Ich`.', tag: 'verb2' },
        { id: 'g01-24', type: 'build', q: 'Составьте предложение.',
          ru: 'Вчера я вам звонил.',
          answer: ['Gestern habe ich Sie angerufen.', 'Ich habe Sie gestern angerufen.'],
          explain: '`habe` — на втором месте, `angerufen` — в конце. Время `gestern` либо стоит первым, либо находится внутри рамки.', tag: 'klammer' },
        { id: 'g01-25', type: 'build', q: 'Составьте предложение.',
          ru: 'Завтра я вам позвоню.',
          answer: ['Morgen rufe ich Sie an.', 'Ich rufe Sie morgen an.'],
          explain: '`rufe` — на втором месте, приставка `an` — последняя.', tag: 'klammer' },
        { id: 'g01-26', type: 'build', q: 'Составьте предложение.',
          ru: 'Можете ли вы мне, пожалуйста, помочь?',
          answer: ['Können Sie mir bitte helfen?'],
          explain: 'В вопросе «да или нет» сначала глагол `Können`, потом `Sie`, а `helfen` — в конце.', tag: 'verb2' },
        { id: 'g01-27', type: 'build', q: 'Составьте предложение.',
          ru: 'Поэтому я остаюсь дома.',
          answer: ['Deshalb bleibe ich zu Hause.', 'Ich bleibe deshalb zu Hause.'],
          explain: 'После `Deshalb` идёт глагол `bleibe`, а потом `ich`. Можно и начать с `Ich`: тогда `deshalb` стоит после глагола.', tag: 'verb2' },
        { id: 'g01-28', type: 'build', q: 'Составьте предложение.',
          ru: 'В понедельник у меня приём у врача.',
          answer: ['Am Montag habe ich einen Arzttermin.', 'Ich habe am Montag einen Arzttermin.', 'Einen Arzttermin habe ich am Montag.'],
          explain: 'Любой порядок хорош, пока `habe` стоит на втором месте.', tag: 'verb2' },
        { id: 'g01-29', type: 'build', q: 'Составьте предложение.',
          ru: 'Моя дочь, к сожалению, больна.',
          answer: ['Meine Tochter ist leider krank.', 'Leider ist meine Tochter krank.'],
          explain: '`Meine Tochter` — один блок. Глагол `ist` — следом за ним. Если вперёд идёт `Leider`, подлежащее уходит за глагол.', tag: 'verb2' },
        { id: 'g01-30', type: 'build', q: 'Составьте предложение.',
          ru: 'Позвоните мне, пожалуйста, завтра.',
          answer: ['Rufen Sie mich bitte morgen an.', 'Rufen Sie mich morgen bitte an.', 'Bitte rufen Sie mich morgen an.'],
          explain: 'Просьба начинается с глагола `Rufen`, приставка `an` — в конце. `bitte` можно поставить в начало или в середину.', tag: 'klammer' },

        // ---- исправить ошибку
        { id: 'g01-31', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Heute ich bin krank.', answer: ['Heute bin ich krank.', 'Ich bin heute krank.'],
          explain: 'После `Heute` глагол `bin` идёт сразу, а `ich` — после него.', tag: 'verb2', diag: true },
        { id: 'g01-32', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Morgen ich komme später.', answer: ['Morgen komme ich später.', 'Ich komme morgen später.'],
          explain: 'Первое место занято словом `Morgen`, глагол `komme` — второй, `ich` — третий.', tag: 'verb2' },
        { id: 'g01-33', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich habe gestern angerufen Sie.', answer: ['Ich habe Sie gestern angerufen.', 'Gestern habe ich Sie angerufen.'],
          explain: 'Partizip II `angerufen` — вторая часть Perfekt, ему место в конце.', tag: 'klammer' },
        { id: 'g01-34', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich kann nicht kommen morgen.', answer: ['Ich kann morgen nicht kommen.', 'Morgen kann ich nicht kommen.'],
          explain: '`kommen` — вторая часть глагола, поэтому последняя. `morgen` и `nicht` идут внутри рамки.', tag: 'klammer' },
        { id: 'g01-35', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich bin gegangen zum Arzt.', answer: ['Ich bin zum Arzt gegangen.'],
          explain: '`gegangen` — Partizip II, он стоит в конце. Место (`zum Arzt`) — между `bin` и `gegangen`.', tag: 'klammer' },
        { id: 'g01-36', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Leider ich muss absagen.', answer: ['Leider muss ich absagen.', 'Ich muss leider absagen.'],
          explain: 'После `Leider` стоит глагол `muss`. Инфинитив `absagen` — в конце.', tag: 'verb2' },
        { id: 'g01-37', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Deshalb ich schreibe Ihnen.', answer: ['Deshalb schreibe ich Ihnen.', 'Ich schreibe Ihnen deshalb.'],
          explain: 'После `Deshalb` сначала глагол, потом подлежащее.', tag: 'verb2' },
        { id: 'g01-38', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Anrufen Sie mich bitte.', answer: ['Rufen Sie mich bitte an.'],
          explain: 'В просьбе спрягаемая форма `Rufen` стоит первой, а приставка `an` уходит в конец.', tag: 'klammer' },

        // ---- перевод
        { id: 'g01-39', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Сегодня мы, к сожалению, не можем прийти.',
          answer: ['Heute können wir leider nicht kommen.', 'Leider können wir heute nicht kommen.', 'Wir können heute leider nicht kommen.', 'Wir können leider heute nicht kommen.'],
          explain: 'Глагол `können` стоит на втором месте, `kommen` — в конце. Подлежащее `wir` либо первое, либо следует за глаголом.', tag: 'verb2' },
        { id: 'g01-40', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'В пятницу у меня экзамен.',
          answer: ['Am Freitag habe ich eine Prüfung.', 'Ich habe am Freitag eine Prüfung.', 'Eine Prüfung habe ich am Freitag.'],
          explain: '«В пятницу» — `am Freitag`. Если оно стоит первым, глагол `habe` следует за ним: `Am Freitag habe ich …`.', tag: 'verb2' },
        { id: 'g01-41', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Мне, к сожалению, нужно отменить встречу.',
          answer: ['Leider muss ich den Termin absagen.', 'Ich muss den Termin leider absagen.', 'Ich muss leider den Termin absagen.', 'Den Termin muss ich leider absagen.', 'Leider muss ich das Treffen absagen.', 'Ich muss das Treffen leider absagen.', 'Ich muss leider das Treffen absagen.', 'Das Treffen muss ich leider absagen.'],
          explain: '`muss` — на втором месте, `absagen` — в конце. «Встреча» в смысле назначенного времени — `der Termin`, встреча с людьми — `das Treffen`.', tag: 'klammer' }
    ],

    apply: {
        task: 'Напишите 5–6 коротких предложений для письма учительнице: вы не можете прийти на курс, потому что заболела дочь, вы просите прощения и просите прислать домашнее задание. Минимум два предложения начните не с `Ich`.',
        checks: [
            'Во всех предложениях спрягаемый глагол стоит на втором месте',
            'Минимум в двух предложениях первым стоит не `ich` (например, `Leider …` или `Deshalb …`)',
            'Вторая часть глагола (инфинитив, Partizip II, приставка) стоит в конце',
            'Просьба начинается с глагола: `Schicken Sie mir bitte …`'
        ],
        model: 'Sehr geehrte Frau Meinert, leider kann ich diese Woche nicht in den Kurs kommen. Meine Tochter ist krank. Deshalb bleibe ich zu Hause. Es tut mir leid. Schicken Sie mir bitte die Hausaufgaben. Ich rufe Sie am Freitag an. Mit freundlichen Grüßen',
        modelRu: 'Уважаемая госпожа Майнерт, к сожалению, на этой неделе я не могу прийти на курс. Моя дочь больна. Поэтому я остаюсь дома. Мне очень жаль. Пришлите мне, пожалуйста, домашние задания. Я позвоню вам в пятницу. С уважением'
    }
};
