/**
 * Модуль 2. Придаточные предложения.
 *
 * weil, dass, wenn, als, ob, obwohl, damit, bevor, nachdem, während и
 * косвенные вопросы: спрягаемый глагол уходит в конец, запятая обязательна.
 */

export default {
    id: 'g02',
    order: 2,
    title: 'Придаточные предложения: глагол в конце',
    short: 'Придаточные',
    goal: 'Вы пишете придаточные с `weil`, `dass`, `wenn`, `ob` и другими союзами без ошибок: спрягаемый глагол стоит в конце, перед союзом есть запятая, а после придаточного в начале сразу идёт глагол главного предложения.',
    why: 'Письмо из одних коротких фраз читается как список, а придаточные с `weil`, `dass`, `wenn` связывают текст и работают сразу на два критерия: связность и корректность. Именно в них русскоговорящие чаще всего ставят глагол «по-русски» — `weil ich bin krank`. Одно правило «глагол в конец» убирает целый класс ошибок.',

    theory: [
        { type: 'h', text: '1. Главное правило: глагол уходит в конец' },
        { type: 'p', text: 'Придаточное предложение начинается с союза (`weil`, `dass`, `wenn` …) и само по себе не стоит: оно поясняет главное. В русском после «потому что» порядок слов тот же, что в обычном предложении. В немецком после союза спрягаемый глагол уходит **в самый конец** придаточного.' },
        {
            type: 'table',
            head: ['Обычное предложение', 'Придаточное'],
            rows: [
                ['Ich **bin** krank.', '…, weil ich krank **bin**.'],
                ['Der Kurs **beginnt** um 18 Uhr.', '…, dass der Kurs um 18 Uhr **beginnt**.'],
                ['Ich **habe** morgen Zeit.', '…, wenn ich morgen Zeit **habe**.'],
                ['Die Heizung **funktioniert** nicht.', '…, weil die Heizung nicht **funktioniert**.']
            ],
            note: 'Схема придаточного: союз → подлежащее → всё остальное → спрягаемый глагол.'
        },
        { type: 'rule', text: 'После союза придаточного спрягаемый глагол — **последнее слово** перед запятой или точкой. Придаточное всегда отделяется от главного запятой.' },
        {
            type: 'exs',
            items: [
                { de: 'Ich schreibe Ihnen, **weil** ich eine Frage **habe**.', ru: 'Я пишу вам, потому что у меня есть вопрос.' },
                { de: 'Es tut mir leid, **dass** ich gestern nicht da **war**.', ru: 'Мне жаль, что вчера меня не было.' },
                { de: 'Ich glaube, **dass** der Vertrag im März **endet**.', ru: 'Я думаю, что договор заканчивается в марте.' },
                { de: '**Wenn** Sie Fragen **haben**, rufen Sie mich bitte an.', ru: 'Если у вас есть вопросы, позвоните мне, пожалуйста.' }
            ]
        },
        { type: 'trap', wrong: 'Ich komme nicht, weil ich bin krank.', right: 'Ich komme nicht, weil ich krank bin.', why: 'По-русски «потому что я болен» — глагол на привычном месте. По-немецки `weil` отправляет глагол в конец: `weil ich krank bin`. Это самая частая ошибка в придаточных.' },
        {
            type: 'list',
            items: [
                'Запятая стоит **перед союзом**: `Ich hoffe, dass …`, `Ich weiß nicht, ob …`.',
                'Если придаточное стоит в начале, запятая **закрывает** его: `Wenn ich Zeit habe, komme ich.`',
                'Подлежащее идёт сразу за союзом: `weil ich …`, `dass Sie …`, `ob der Kurs …`.',
                '`nicht` стоит там же, где в главном предложении, только глагол уходит дальше: `Ich komme heute nicht.` → `weil ich heute nicht komme`.'
            ]
        },
        { type: 'trap', wrong: 'Ich hoffe dass Sie mich verstehen.', right: 'Ich hoffe, dass Sie mich verstehen.', why: 'В русском запятая перед «что» тоже есть, но в немецком её часто теряют именно в коротких формулах: `Ich hoffe, dass …`, `Ich glaube, dass …`. Видите союз придаточного — ставьте запятую перед ним.' },

        { type: 'h', text: '2. Союзы, которые нужны в письме' },
        {
            type: 'table',
            head: ['Союз', 'Значение', 'Пример'],
            rows: [
                ['`weil`', 'потому что (причина)', '`…, weil ich krank bin.`'],
                ['`dass`', 'что (содержание)', '`Ich hoffe, dass Sie Zeit haben.`'],
                ['`wenn`', 'если; когда (каждый раз или в будущем)', '`Wenn ich Zeit habe, komme ich.`'],
                ['`als`', 'когда (один раз в прошлом)', '`Als ich krank war, …`'],
                ['`ob`', 'ли (вопрос «да или нет»)', '`Ich weiß nicht, ob ich kommen kann.`'],
                ['`obwohl`', 'хотя', '`…, obwohl ich wenig Zeit habe.`'],
                ['`damit`', 'чтобы (у цели своё подлежащее)', '`…, damit Sie mich erreichen können.`'],
                ['`bevor`', 'перед тем как', '`Bevor ich unterschreibe, …`'],
                ['`nachdem`', 'после того как', '`Nachdem ich mit ihm gesprochen habe, …`'],
                ['`während`', 'пока, в то время как', '`Während ich arbeite, …`']
            ],
            note: 'Порядок слов у всех одинаковый: глагол в конце. Различается только смысл.'
        },

        { type: 'h', text: '3. Две части глагола: спрягаемая — самая последняя' },
        { type: 'p', text: 'Если сказуемое из двух частей (модальный глагол, Perfekt, отделяемая приставка), в придаточном обе части стоят в конце, и **спрягаемая часть — последней**. Отделяемая приставка в придаточном не отрывается: глагол пишется одним словом.' },
        {
            type: 'table',
            head: ['Случай', 'Главное предложение', 'Придаточное'],
            rows: [
                ['Модальный глагол', '`Ich kann morgen nicht kommen.`', '`…, weil ich morgen nicht kommen kann.`'],
                ['Perfekt с `haben`', '`Ich habe Sie gestern angerufen.`', '`…, weil ich Sie gestern angerufen habe.`'],
                ['Perfekt с `sein`', '`Ich bin zum Arzt gegangen.`', '`…, weil ich zum Arzt gegangen bin.`'],
                ['Отделяемая приставка', '`Ich rufe Sie morgen an.`', '`…, dass ich Sie morgen anrufe.`'],
                ['`möchte` + инфинитив', '`Ich möchte den Termin verschieben.`', '`…, weil ich den Termin verschieben möchte.`']
            ]
        },
        {
            type: 'exs',
            items: [
                { de: 'Es tut mir leid, dass ich den Termin **vergessen habe**.', ru: 'Мне жаль, что я забыл о встрече.' },
                { de: 'Ich schreibe Ihnen, weil ich mich für den Kurs **anmelden möchte**.', ru: 'Я пишу вам, потому что хотел бы записаться на курс.' },
                { de: 'Ich rufe Sie an, wenn ich die Unterlagen **bekommen habe**.', ru: 'Я позвоню вам, когда получу документы.' },
                { de: 'Bitte sagen Sie mir, wann der Techniker **vorbeikommt**.', ru: 'Скажите мне, пожалуйста, когда зайдёт мастер.' }
            ]
        },
        { type: 'trap', wrong: 'Es tut mir leid, dass ich kann nicht kommen.', right: 'Es tut mir leid, dass ich nicht kommen kann.', why: 'После `dass` модальный глагол `kann` уходит в самый конец, за инфинитив. По-русски «что я не могу прийти» — порядок другой, поэтому рука пишет `ich kann`.' },

        { type: 'h', text: '4. Придаточное на первом месте' },
        { type: 'p', text: 'Придаточное можно поставить в начало. Тогда оно целиком занимает **первое место**, глагол главного предложения идёт сразу после запятой, а подлежащее — за ним. Получается характерное «глагол, глагол»: `bin, komme`.' },
        {
            type: 'table',
            head: ['1-е место: придаточное', '2-е место', 'Дальше'],
            rows: [
                ['Weil ich krank **bin**,', '**komme**', 'ich nicht.'],
                ['Wenn ich Zeit **habe**,', '**helfe**', 'ich Ihnen gern.'],
                ['Wenn Sie einverstanden **sind**,', '**komme**', 'ich am Montag vorbei.'],
                ['Bevor ich den Vertrag **unterschreibe**,', '**möchte**', 'ich ihn genau lesen.']
            ],
            note: 'Это то же правило, что в модуле 1: после первого места — глагол. Придаточное — просто очень длинное первое место.'
        },
        { type: 'trap', wrong: 'Wenn ich Zeit habe, ich komme gern.', right: 'Wenn ich Zeit habe, komme ich gern.', why: 'По-русски «Если у меня будет время, я с удовольствием приду» — после запятой идёт «я». По-немецки первое место уже занято придаточным, поэтому сразу после запятой — глагол.' },

        { type: 'h', text: '5. «Когда»: als, wenn или wann' },
        { type: 'p', text: 'Русское «когда» по-немецки — три разных слова. `als` — **один раз в прошлом**: конкретное событие, которое уже произошло. `wenn` — каждый раз, а также о будущем; кроме того, `wenn` — это «если». `wann` — вопрос «когда?», и прямой, и косвенный.' },
        {
            type: 'exs',
            items: [
                { de: '**Als** ich Sie gestern **angerufen habe**, waren Sie leider nicht da.', ru: 'Когда я вчера вам звонил, вас, к сожалению, не было на месте.' },
                { de: '**Als** ich in die Wohnung **eingezogen bin**, war der Herd schon kaputt.', ru: 'Когда я въехал в квартиру, плита уже была сломана.' },
                { de: '**Wenn** ich Spätschicht **habe**, kann ich nicht in den Kurs kommen.', ru: 'Когда у меня поздняя смена, я не могу ходить на курс.' },
                { de: '**Wenn** der Brief **kommt**, rufe ich Sie an.', ru: 'Когда придёт письмо, я вам позвоню.' },
                { de: 'Ich weiß noch nicht, **wann** ich wieder arbeiten **kann**.', ru: 'Я ещё не знаю, когда смогу снова работать.' }
            ]
        },
        { type: 'trap', wrong: 'Wenn ich gestern beim Arzt war, habe ich lange gewartet.', right: 'Als ich gestern beim Arzt war, habe ich lange gewartet.', why: '`gestern` — один конкретный раз в прошлом, поэтому `als`. `wenn` о прошлом значит «каждый раз, когда».' },

        { type: 'h', text: '6. ob и косвенные вопросы' },
        { type: 'p', text: 'Вежливая просьба в письме часто звучит как косвенный вопрос: `Könnten Sie mir sagen, …`, `Ich möchte wissen, …`. Вопрос «да или нет» вводится союзом `ob` («ли»), вопрос с `wann`, `wo`, `wie`, `warum` — самим вопросительным словом. И там и там глагол уходит в конец.' },
        {
            type: 'table',
            head: ['Прямой вопрос', 'Косвенный вопрос'],
            rows: [
                ['**Ist** im Kurs noch ein Platz frei?', 'Könnten Sie mir sagen, **ob** im Kurs noch ein Platz frei **ist**?'],
                ['**Kann** ich die Miete später bezahlen?', 'Ich möchte fragen, **ob** ich die Miete später bezahlen **kann**.'],
                ['Wann **beginnt** der Kurs?', 'Ich möchte wissen, **wann** der Kurs **beginnt**.'],
                ['Wo **bekomme** ich das Formular?', 'Können Sie mir sagen, **wo** ich das Formular **bekomme**?'],
                ['Wie viel **kostet** die Wohnung?', 'Bitte schreiben Sie mir, **wie viel** die Wohnung **kostet**.']
            ],
            note: 'Знак в конце зависит от главного предложения: после `Könnten Sie mir sagen, …` — вопросительный, после `Ich möchte wissen, …` — точка.'
        },
        { type: 'trap', wrong: 'Ich weiß nicht, wenn ich morgen kommen kann.', right: 'Ich weiß nicht, ob ich morgen kommen kann.', why: '«Не знаю, смогу ли я» — вопрос «да или нет», для него есть `ob`. Русское «ли» стоит после глагола, а `ob` — в начале придаточного. `wenn` — это «если» или «когда», в косвенный вопрос оно не ставится.' },
        { type: 'trap', wrong: 'Ich möchte wissen, wann beginnt der Kurs.', right: 'Ich möchte wissen, wann der Kurs beginnt.', why: 'В прямом вопросе глагол идёт сразу за `wann` (модуль 1). В косвенном вопросе это уже придаточное: глагол уходит в конец.' },

        { type: 'h', text: '7. obwohl, damit, bevor, nachdem, während' },
        {
            type: 'exs',
            items: [
                { de: 'Die Heizung ist immer noch kalt, **obwohl** der Hausmeister schon zweimal da **war**.', ru: 'Батареи всё ещё холодные, хотя смотритель дома приходил уже два раза.' },
                { de: 'Ich schicke Ihnen meine Telefonnummer, **damit** Sie mich erreichen **können**.', ru: 'Посылаю вам свой номер телефона, чтобы вы могли со мной связаться.' },
                { de: 'Bitte rufen Sie mich an, **bevor** Sie **kommen**.', ru: 'Пожалуйста, позвоните мне, прежде чем прийти.' },
                { de: 'Ich schicke Ihnen den Vertrag, **nachdem** ich ihn **unterschrieben habe**.', ru: 'Я пришлю вам договор после того, как подпишу его.' },
                { de: '**Während** ich im Kurs **bin**, passt meine Mutter auf die Kinder auf.', ru: 'Пока я на курсе, мама присматривает за детьми.' }
            ]
        },
        { type: 'p', text: '`damit` берите, когда у цели **другое подлежащее**: я посылаю номер, чтобы **вы** могли позвонить; если подлежащее одно, обычно говорят `um … zu` (модуль 10). После `nachdem` действие уже закончено: когда речь о том, что будет, в придаточном Perfekt, а в главном — Präsens.' },
        { type: 'trap', wrong: 'Ich rufe Sie an, nachdem ich mit meinem Mann spreche.', right: 'Ich rufe Sie an, nachdem ich mit meinem Mann gesprochen habe.', why: 'По-русски «после того как поговорю» — будущее время. После `nachdem` действие должно быть уже законченным: Perfekt `gesprochen habe`. О прошлом проще написать два предложения: `Ich war beim Arzt. Danach bin ich nach Hause gegangen.`' },
        { type: 'trap', wrong: 'Ich möchte, damit Sie mich anrufen.', right: 'Ich möchte, dass Sie mich anrufen.', why: 'Русское «хочу, чтобы» и «прошу, чтобы» передаёт желание, а не цель: здесь нужен `dass`. `damit` — это «для того чтобы».' },

        { type: 'h', text: '8. weil, denn, deshalb — и придаточное без главного' },
        {
            type: 'table',
            head: ['Слово', 'Порядок слов', 'Пример'],
            rows: [
                ['`weil`', 'придаточное: глагол в конце', 'Ich komme nicht, weil ich krank **bin**.'],
                ['`denn`', '«нулевое место»: порядок обычный', 'Ich komme nicht, denn ich **bin** krank.'],
                ['`deshalb`', 'первое место: глагол сразу за ним', 'Ich bin krank, deshalb **komme** ich nicht.']
            ],
            note: '`weil` и `denn` вводят причину, `deshalb` — следствие. Подробно про связки — в модуле 10.'
        },
        { type: 'trap', wrong: 'Ich kann nicht kommen. Weil ich krank bin.', right: 'Ich kann nicht kommen, weil ich krank bin.', why: 'В устной речи можно ответить «Потому что заболел». В письме придаточное с точкой на конце — обрывок предложения. Присоедините его запятой к главному или поставьте вперёд: `Weil ich krank bin, kann ich nicht kommen.`' },

        { type: 'h', text: '9. Проверка за десять секунд' },
        {
            type: 'list',
            items: [
                'Найдите союз (`weil`, `dass`, `wenn`, `ob` …) или вопросительное слово. Перед ним стоит запятая?',
                'Спрягаемый глагол придаточного — последнее слово перед запятой или точкой?',
                'Придаточное стоит первым? Тогда после запятой сразу глагол главного предложения.',
                '«Когда» один раз в прошлом — `als`, «ли» — `ob`.'
            ]
        },
        { type: 'tip', text: 'Когда не уверены, пишите короткое придаточное с `weil`: `…, weil ich krank bin.`, `…, weil ich arbeiten muss.` Союз, подлежащее, одно-два слова и глагол в конце — ошибиться почти негде. Два-три таких придаточных в письме уже показывают, что вы умеете строить сложное предложение.' }
    ],

    exercises: [
        // ---- выбор
        { id: 'g02-01', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich kann heute nicht arbeiten, weil mein Sohn ist krank.', 'Ich kann heute nicht arbeiten, weil mein Sohn krank ist.', 'Ich kann heute nicht arbeiten, weil ist mein Sohn krank.'], answer: 1,
          explain: 'После `weil` спрягаемый глагол уходит в конец придаточного: `weil mein Sohn krank ist`. Порядок `mein Sohn ist` — как в главном предложении, `ist mein Sohn` — как в вопросе.', tag: 'nebensatz', diag: true },
        { id: 'g02-02', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Der Arzt sagt, dass ich muss eine Woche zu Hause bleiben.', 'Der Arzt sagt, dass ich eine Woche zu Hause bleiben muss.', 'Der Arzt sagt, dass ich eine Woche zu Hause muss bleiben.'], answer: 1,
          explain: 'В придаточном обе части глагола стоят в конце, а спрягаемая `muss` — самая последняя, после инфинитива `bleiben`.', tag: 'nebensatz', diag: true },
        { id: 'g02-03', type: 'choice', q: 'Где правильно стоит запятая?',
          options: ['Ich hoffe, dass Sie bald antworten.', 'Ich hoffe dass, Sie bald antworten.', 'Ich hoffe dass Sie bald antworten.'], answer: 0,
          explain: 'Запятая ставится перед союзом `dass` и отделяет придаточное от главного. Без неё — ошибка, даже в короткой формуле.', tag: 'zeichen' },
        { id: 'g02-04', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Weil der Bus nicht kommt, ich gehe zu Fuß.', 'Weil der Bus nicht kommt, gehe ich zu Fuß.', 'Weil der Bus kommt nicht, gehe ich zu Fuß.'], answer: 1,
          explain: 'Придаточное занимает первое место, поэтому сразу после запятой стоит глагол главного: `kommt, gehe`. Подлежащее `ich` — после глагола.', tag: 'nebensatz' },
        { id: 'g02-05', type: 'choice', q: 'Как сказать «Я не знаю, будет ли у меня время в пятницу»?',
          options: ['Ich weiß nicht, ob ich am Freitag Zeit habe.', 'Ich weiß nicht, wenn ich am Freitag Zeit habe.', 'Ich weiß nicht, ob habe ich am Freitag Zeit.'], answer: 0,
          explain: '«Будет ли» — вопрос «да или нет», его вводит `ob`. `wenn` значит «если» или «когда». После `ob` глагол `habe` уходит в конец.', tag: 'nebensatz', diag: true },
        { id: 'g02-06', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Als ich letzte Woche krank war, hat mein Mann die Kinder abgeholt.', 'Wenn ich letzte Woche krank war, hat mein Mann die Kinder abgeholt.', 'Wann ich letzte Woche krank war, hat mein Mann die Kinder abgeholt.'], answer: 0,
          explain: '«Когда я болела на прошлой неделе» — один случай в прошлом, поэтому `als`. `wenn` о прошлом означает «каждый раз, когда», а `wann` — только вопрос.', tag: 'nebensatz' },
        { id: 'g02-07', type: 'choice', q: 'Какой косвенный вопрос составлен правильно?',
          options: ['Könnten Sie mir sagen, wann die Sprechstunde beginnt?', 'Könnten Sie mir sagen, wann beginnt die Sprechstunde?', 'Könnten Sie mir sagen, wenn die Sprechstunde beginnt?'], answer: 0,
          explain: 'В косвенном вопросе глагол уходит в конец: `wann die Sprechstunde beginnt`. «Когда?» в вопросе — это `wann`, а не `wenn`.', tag: 'nebensatz' },
        { id: 'g02-08', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich bin zu Hause, wenn der Techniker vorbeikommt.', 'Ich bin zu Hause, wenn der Techniker kommt vorbei.', 'Ich bin zu Hause, wenn der Techniker vorbei kommt.'], answer: 0,
          explain: 'В придаточном отделяемый глагол не разделяется: `vorbeikommt` пишется одним словом в конце.', tag: 'nebensatz' },
        { id: 'g02-09', type: 'choice', q: 'Как сказать «Я хочу, чтобы вы мне перезвонили»?',
          options: ['Ich möchte, dass Sie mich zurückrufen.', 'Ich möchte, damit Sie mich zurückrufen.', 'Ich möchte, dass Sie rufen mich zurück.'], answer: 0,
          explain: '«Хочу, чтобы» — это желание, а не цель, поэтому `dass`, а не `damit`. Глагол в придаточном не разделяется: `zurückrufen` в конце.', tag: 'nebensatz' },
        { id: 'g02-10', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich komme später, denn ich muss noch arbeiten.', 'Ich komme später, denn ich noch arbeiten muss.', 'Ich komme später, weil ich muss noch arbeiten.'], answer: 0,
          explain: 'После `denn` порядок обычный: `muss` сразу за подлежащим. В конец глагол отправляет `weil`: `weil ich noch arbeiten muss`.', tag: 'konnektor' },
        { id: 'g02-11', type: 'choice', q: 'Как правильно написать в письме?',
          options: ['Ich kann am Freitag nicht kommen, weil ich einen Arzttermin habe.', 'Ich kann am Freitag nicht kommen. Weil ich einen Arzttermin habe.', 'Ich kann am Freitag nicht kommen, weil ich habe einen Arzttermin.'], answer: 0,
          explain: 'Придаточное с `weil` не стоит отдельным предложением: оно присоединяется к главному запятой. И глагол `habe` — в конце.', tag: 'nebensatz' },

        // ---- пропуски
        { id: 'g02-12', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Ich schreibe Ihnen, weil ich eine Frage ___.', hint: 'haben', answer: [['habe', 'hätte']],
          explain: 'После `weil` глагол стоит в конце придаточного. Подлежащее `ich` — форма `habe`.', tag: 'nebensatz' },
        { id: 'g02-13', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Es tut mir leid, dass ich morgen nicht kommen ___.', hint: 'können', answer: ['kann'],
          explain: 'Модальный глагол в придаточном стоит последним, после инфинитива: `kommen kann`.', tag: 'nebensatz' },
        { id: 'g02-14', type: 'gap', q: 'Вставьте союз.',
          text: 'Mein Chef hat noch nicht gesagt, ___ ich am Montag frei habe.', hint: 'по-русски «ли»', answer: ['ob'],
          explain: '«Свободен ли я» — вопрос «да или нет» внутри предложения, его вводит `ob`. Глагол `habe` — в конце.', tag: 'nebensatz' },
        { id: 'g02-15', type: 'gap', q: 'Вставьте союз.',
          text: '___ ich gestern nach Hause gekommen bin, war die Haustür offen.', hint: 'когда', answer: ['Als'],
          explain: 'Один конкретный раз в прошлом (`gestern`) — это `als`. `wenn` о прошлом значит «каждый раз, когда».', tag: 'nebensatz' },
        { id: 'g02-16', type: 'gap', q: 'Вставьте союз.',
          text: 'Ich rufe Sie an, ___ ich wieder gesund bin.', hint: 'когда', answer: [['wenn', 'sobald']],
          explain: 'Речь о будущем, поэтому `wenn`. `als` бывает только о прошлом, а `wann` — вопрос.', tag: 'nebensatz' },
        { id: 'g02-17', type: 'gap', q: 'Вставьте союз и глагол.',
          text: 'Ich komme heute nicht in den Kurs, ___ mein Sohn krank ___.', hint: 'потому что; sein', answer: [['weil', 'da'], ['ist']],
          explain: '`weil` вводит причину, и глагол `ist` уходит в конец придаточного.', tag: 'nebensatz' },
        { id: 'g02-18', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Ich bin sehr froh, dass Sie mir so schnell geholfen ___.', hint: 'haben', answer: ['haben'],
          explain: 'Perfekt в придаточном: сначала Partizip II `geholfen`, последней — спрягаемая часть. К `Sie` — форма `haben`.', tag: 'nebensatz' },
        { id: 'g02-19', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Wenn ich morgen Zeit habe, ___ ich Ihnen die Unterlagen vorbei.', hint: 'bringen', answer: ['bringe'],
          explain: 'Придаточное занимает первое место, поэтому глагол главного `bringe` идёт сразу после запятой, а `ich` — за ним. Приставка `vorbei` — в конце.', tag: 'nebensatz' },
        { id: 'g02-20', type: 'gap', q: 'Вставьте союз.',
          text: 'Die Heizung funktioniert immer noch nicht, ___ ich Sie schon zweimal angerufen habe.', hint: 'хотя', answer: ['obwohl'],
          explain: '`obwohl` — «хотя»: ожидали одного, а вышло другое. Глагол `habe` в конце, после `angerufen`.', tag: 'nebensatz' },
        { id: 'g02-21', type: 'gap', q: 'Вставьте союз.',
          text: 'Bitte schicken Sie mir das Formular, ___ ich es rechtzeitig ausfüllen kann.', hint: 'чтобы', answer: ['damit'],
          explain: '`damit` вводит цель, у которой своё подлежащее: присылаете вы, а заполняю я. Глагол `kann` — в конце.', tag: 'nebensatz' },
        { id: 'g02-22', type: 'gap', q: 'Вставьте Partizip II.',
          text: 'Ich melde mich bei Ihnen, nachdem ich mit meinem Vermieter ___ habe.', hint: 'sprechen', answer: ['gesprochen'],
          explain: 'После `nachdem` действие уже закончено, поэтому Perfekt: `gesprochen habe`. Спрягаемая часть `habe` — последняя.', tag: 'nebensatz' },
        { id: 'g02-23', type: 'gap', q: 'Вставьте вопросительное слово.',
          text: 'Könnten Sie mir bitte sagen, ___ der Termin beim Amt ist?', hint: 'когда', answer: ['wann'],
          explain: '«Когда?» в вопросе — `wann`, и в косвенном вопросе тоже. `wenn` сюда не подходит. Глагол `ist` — в конце.', tag: 'nebensatz' },
        { id: 'g02-24', type: 'gap', q: 'Вставьте союз.',
          text: '___ ich arbeite, ist mein Sohn im Kindergarten.', hint: 'пока', answer: [['Während', 'Solange']],
          explain: '`während` — «пока, в то время как»: два действия идут одновременно. Придаточное стоит первым, поэтому после запятой сразу глагол `ist`.', tag: 'nebensatz' },

        // ---- составить из слов
        { id: 'g02-25', type: 'build', q: 'Составьте предложение.',
          ru: 'Я не могу прийти на курс, потому что у меня поздняя смена.',
          answer: ['Ich kann nicht in den Kurs kommen, weil ich Spätschicht habe.', 'In den Kurs kann ich nicht kommen, weil ich Spätschicht habe.'],
          explain: 'В главном `kann` на втором месте, `kommen` — в конце. В придаточном после `weil` глагол `habe` — последний.', tag: 'nebensatz' },
        { id: 'g02-26', type: 'build', q: 'Составьте предложение.',
          ru: 'Когда я выздоровею, я снова приду на курс.',
          answer: ['Wenn ich wieder gesund bin, komme ich in den Kurs.', 'Wenn ich gesund bin, komme ich wieder in den Kurs.'],
          explain: 'Придаточное с `wenn` стоит первым и кончается глаголом `bin`. Сразу после запятой — глагол главного `komme`, потом `ich`.', tag: 'nebensatz' },
        { id: 'g02-27', type: 'build', q: 'Составьте предложение.',
          ru: 'Надеюсь, что вы сможете мне помочь.',
          answer: ['Ich hoffe, dass Sie mir helfen können.'],
          explain: 'После `dass` оба глагола в конце, причём спрягаемый `können` — последний: `helfen können`.', tag: 'nebensatz' },
        { id: 'g02-28', type: 'build', q: 'Составьте вежливый вопрос.',
          ru: 'Не могли бы вы мне сказать, когда я могу забрать ключи?',
          answer: ['Könnten Sie mir sagen, wann ich die Schlüssel abholen kann?'],
          explain: 'Вопрос стал придаточным: после `wann` подлежащее `ich`, а глаголы в конце — `abholen kann`. Знак вопроса ставится, потому что главное предложение — вопрос.', tag: 'nebensatz' },
        { id: 'g02-29', type: 'build', q: 'Составьте предложение.',
          ru: 'Я хотел бы спросить, могу ли я взять с собой ребёнка.',
          answer: ['Ich möchte fragen, ob ich mein Kind mitbringen kann.'],
          explain: '«Могу ли» — вопрос «да или нет», значит, `ob`. Глаголы уходят в конец: `mitbringen kann`, приставка не отрывается.', tag: 'nebensatz' },
        { id: 'g02-30', type: 'build', q: 'Составьте предложение.',
          ru: 'Хотя я отменил приём, я получил счёт.',
          answer: ['Obwohl ich den Termin abgesagt habe, habe ich eine Rechnung bekommen.'],
          explain: 'Придаточное с `obwohl` кончается на `habe`, и главное начинается тоже с `habe`: «глагол, глагол». Partizip II `bekommen` — в конце главного.', tag: 'nebensatz' },
        { id: 'g02-31', type: 'build', q: 'Составьте просьбу.',
          ru: 'Прочитайте, пожалуйста, договор, прежде чем подписать его.',
          answer: ['Bitte lesen Sie den Vertrag, bevor Sie ihn unterschreiben.', 'Lesen Sie bitte den Vertrag, bevor Sie ihn unterschreiben.'],
          explain: 'После `bevor` нужно полное придаточное со своим подлежащим (`Sie`), хотя по-русски «прежде чем подписать» обходится без него. Глагол `unterschreiben` — в конце.', tag: 'nebensatz' },

        // ---- исправить ошибку
        { id: 'g02-32', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich kann nicht kommen, weil ich habe Fieber.', answer: ['Ich kann nicht kommen, weil ich Fieber habe.', 'Weil ich Fieber habe, kann ich nicht kommen.'],
          explain: 'После `weil` спрягаемый глагол `habe` уходит в конец придаточного.', tag: 'nebensatz' },
        { id: 'g02-33', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Wenn das Wetter gut ist, wir grillen im Garten.', answer: ['Wenn das Wetter gut ist, grillen wir im Garten.', 'Wir grillen im Garten, wenn das Wetter gut ist.'],
          explain: 'Придаточное стоит первым и занимает первое место. Сразу после запятой — глагол `grillen`, потом `wir`.', tag: 'nebensatz', diag: true },
        { id: 'g02-34', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich glaube, dass ich am Montag kann kommen.', answer: ['Ich glaube, dass ich am Montag kommen kann.'],
          explain: 'В придаточном модальный глагол стоит последним, после инфинитива: `kommen kann`.', tag: 'nebensatz' },
        { id: 'g02-35', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich möchte gern wissen, wo ist das Bürgerbüro.', answer: ['Ich möchte gern wissen, wo das Bürgerbüro ist.'],
          explain: 'Косвенный вопрос — это придаточное: после `wo` идёт подлежащее, а глагол `ist` — в конце.', tag: 'nebensatz' },
        { id: 'g02-36', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Wenn ich gestern im Büro angerufen habe, war niemand da.', answer: ['Als ich gestern im Büro angerufen habe, war niemand da.', 'Es war niemand da, als ich gestern im Büro angerufen habe.'],
          explain: '`gestern` — один раз в прошлом, значит, `als`. `wenn` о прошлом значит «каждый раз, когда».', tag: 'nebensatz' },
        { id: 'g02-37', type: 'fix', q: 'Вы спрашиваете, свободна ли ещё квартира. Исправьте ошибку.',
          text: 'Können Sie mir sagen, wenn die Wohnung noch frei ist?', answer: ['Können Sie mir sagen, ob die Wohnung noch frei ist?'],
          explain: '«Свободна ли ещё квартира» — вопрос «да или нет», значит, `ob`. `wenn` в косвенный вопрос не ставится.', tag: 'nebensatz' },
        { id: 'g02-38', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich rufe Sie an, wenn ich komme zurück.', answer: ['Ich rufe Sie an, wenn ich zurückkomme.', 'Wenn ich zurückkomme, rufe ich Sie an.'],
          explain: 'В придаточном отделяемый глагол не разделяется: `zurückkomme` — одним словом в конце.', tag: 'nebensatz' },

        // ---- соединить
        { id: 'g02-39', type: 'join', q: 'Соедините союзом weil.',
          parts: ['Ich schreibe Ihnen.', 'Ich habe eine Frage zum Kurs.'], connector: 'weil',
          answer: ['Ich schreibe Ihnen, weil ich eine Frage zum Kurs habe.', 'Weil ich eine Frage zum Kurs habe, schreibe ich Ihnen.'],
          explain: 'После `weil` глагол `habe` уходит в конец. Если придаточное стоит первым, глагол главного идёт сразу после запятой: `habe, schreibe ich`.', tag: 'nebensatz' },
        { id: 'g02-40', type: 'join', q: 'Соедините союзом dass.',
          parts: ['Es tut mir leid.', 'Ich habe Ihnen nicht früher geantwortet.'], connector: 'dass',
          answer: ['Es tut mir leid, dass ich Ihnen nicht früher geantwortet habe.', 'Dass ich Ihnen nicht früher geantwortet habe, tut mir leid.'],
          explain: 'После `dass` Perfekt стоит в конце: сначала `geantwortet`, последней — спрягаемая часть `habe`.', tag: 'nebensatz' },
        { id: 'g02-41', type: 'join', q: 'Соедините союзом obwohl.',
          parts: ['Mein Sohn geht in die Schule.', 'Er hat Husten.'], connector: 'obwohl',
          answer: ['Mein Sohn geht in die Schule, obwohl er Husten hat.', 'Obwohl mein Sohn Husten hat, geht er in die Schule.', 'Obwohl er Husten hat, geht mein Sohn in die Schule.'],
          explain: 'В придаточном `hat` стоит последним. Если придаточное идёт первым, сразу после запятой — глагол главного `geht`, потом подлежащее.', tag: 'nebensatz' },
        { id: 'g02-42', type: 'join', q: 'Сделайте из вопроса придаточное с ob.',
          parts: ['Ich möchte wissen.', 'Findet der Kurs am Samstag statt?'], connector: 'ob',
          answer: ['Ich möchte wissen, ob der Kurs am Samstag stattfindet.'],
          explain: 'Вопрос «да или нет» становится придаточным с `ob`. Глагол уходит в конец, и приставка `statt` соединяется с ним: `stattfindet`.', tag: 'nebensatz' },

        // ---- перевод
        { id: 'g02-43', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Я позвоню вам после того, как получу письмо.',
          answer: ['Ich rufe Sie an, nachdem ich den Brief bekommen habe.', 'Nachdem ich den Brief bekommen habe, rufe ich Sie an.', 'Ich werde Sie anrufen, nachdem ich den Brief bekommen habe.', 'Nachdem ich den Brief bekommen habe, werde ich Sie anrufen.', 'Ich rufe Sie an, nachdem ich den Brief erhalten habe.', 'Nachdem ich den Brief erhalten habe, rufe ich Sie an.'],
          explain: 'По-русски «получу» — будущее, но после `nachdem` нужна законченная форма: Perfekt `bekommen habe`. Главное предложение — в Präsens: `Ich rufe Sie an`.', tag: 'nebensatz' },
        { id: 'g02-44', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Я хотел бы знать, сколько стоит курс.',
          answer: ['Ich möchte wissen, wie viel der Kurs kostet.', 'Ich möchte wissen, was der Kurs kostet.', 'Ich würde gern wissen, wie viel der Kurs kostet.', 'Ich würde gern wissen, was der Kurs kostet.', 'Ich würde gerne wissen, wie viel der Kurs kostet.', 'Ich würde gerne wissen, was der Kurs kostet.', 'Ich möchte gern wissen, wie viel der Kurs kostet.', 'Ich möchte gern wissen, was der Kurs kostet.', 'Ich möchte gerne wissen, wie viel der Kurs kostet.', 'Ich möchte gerne wissen, was der Kurs kostet.'],
          explain: 'Косвенный вопрос: после `wie viel` (или `was`) подлежащее `der Kurs`, глагол `kostet` — в конце. `wie viel` пишется раздельно.', tag: 'nebensatz' }
    ],

    apply: {
        task: 'Напишите 5–6 предложений хозяину квартиры, господину Брауну: в квартире не работает отопление, вы уже звонили, спросите, когда придёт мастер, и скажите, когда вы дома. Используйте минимум четыре придаточных с разными союзами.',
        checks: [
            'В каждом придаточном спрягаемый глагол стоит в конце',
            'Каждое придаточное (`weil`, `dass`, `wenn`, `ob`, `obwohl` …) отделено от главного запятой',
            'Минимум одно придаточное стоит в начале, и после запятой сразу идёт глагол главного',
            'Есть косвенный вопрос: `Könnten Sie mir sagen, wann …` или `ob …`'
        ],
        model: 'Sehr geehrter Herr Braun, ich schreibe Ihnen, weil die Heizung in meiner Wohnung nicht funktioniert. Obwohl ich Sie schon letzte Woche angerufen habe, ist es immer noch kalt. Könnten Sie mir bitte sagen, wann der Techniker kommt? Wenn er am Vormittag kommt, bin ich zu Hause. Ich hoffe, dass Sie das Problem bald lösen können. Mit freundlichen Grüßen',
        modelRu: 'Уважаемый господин Браун, я пишу вам, потому что в моей квартире не работает отопление. Хотя я звонил вам ещё на прошлой неделе, в квартире всё ещё холодно. Не могли бы вы сказать, когда придёт мастер? Если он придёт до обеда, я буду дома. Надеюсь, что вы скоро решите проблему. С уважением'
    }
};
