/**
 * Lesen, Teil 5. Формальное письмо с шестью пропусками, к каждому три варианта.
 *
 * Теория учит решать пропуск по соседям: предлог перед ним, глагол после него,
 * обращение в начале письма. Шесть наборов — шесть разных поводов для письма.
 */

export default {
    id: 'r05',
    order: 5,
    teil: 5,
    title: 'Teil 5: письмо с пропусками',
    short: 'Teil 5 · Письмо',
    goal: 'После раздела вы заполняете шесть пропусков в формальном письме: по смыслу всего письма и по грамматике выбираете прощание, местоимение в нужном падеже, форму глагола, вежливую форму, связку или предлог и подходящее по смыслу слово.',
    why: 'Teil 5 — шесть заданий из 25, и здесь проверяют не скорость чтения, а язык письма. Те же формулы (`Hiermit kündige ich …`, `Könnten Sie …`, `Mit freundlichen Grüßen`) нужны вам в Schreiben, так что эта часть тренирует сразу два раздела экзамена.',

    theory: [
        { type: 'h', text: '1. Что проверяют в Teil 5' },
        { type: 'p', text: 'Перед вами формальное письмо: расторжение договора, запрос, жалоба, перенос приёма, запись на курс. В нём шесть пропусков (в пробе курса — задания 20–25), к каждому три варианта; перед первым стоит пример — пропуск 0 с готовым ответом. Суть задания — `einzelne Wörter in einem Brief ergänzen`, дополнить отдельные слова. Чтение здесь — посредник: текст короткий и понятный, а проверяют язык — слова и формы, вежливый тон и понимание, кто пишет, кому и зачем.' },
        {
            type: 'table',
            head: ['Тип пропуска', 'Что проверяют', 'Пример'],
            rows: [
                ['Обращение, прощание', 'формула, окончание, тон письма', '`Sehr geehrte Damen und Herren`, `Mit freundlichen Grüßen`'],
                ['Местоимение, падеж', 'падеж после предлога или глагола, вежливое `Sie`', '`für mich`, `bei Ihnen`, `ich bitte Sie`'],
                ['Форма глагола', 'лицо, время, вторая часть глагола в конце', '`ich möchte … kündigen`, `ich habe … erhalten`'],
                ['Вежливость', 'Konjunktiv II и официальные формулы', '`Könnten Sie …`, `ich würde gern …`, `hiermit`'],
                ['Союз, связка', 'смысл (причина, следствие, противопоставление) и порядок слов', '`deshalb`, `trotzdem`, `weil`, `dass`'],
                ['Предлог, сочетание', 'устойчивые сочетания с датой и глаголом', '`zum 31.12.`, `bis spätestens`, `auf Ihre Anzeige`'],
                ['Слово по смыслу', 'какое слово подходит к ситуации', '`Rechnung`, `Bestätigung`, `Termin`']
            ],
            note: 'В наборах этого курса типы перемешаны: в каждом письме встречаются почти все, и порядок каждый раз другой.'
        },

        { type: 'h', text: '2. Стратегия: пять шагов' },
        {
            type: 'list',
            items: [
                '**Прочитайте письмо целиком**, не заглядывая в варианты: кто пишет, кому и зачем. Тема, обращение и первое предложение обычно отвечают на все три вопроса.',
                '**Для каждого пропуска сначала подумайте сами**: какое слово здесь нужно — глагол, местоимение, связка, существительное? Только потом смотрите варианты.',
                '**Проверьте форму**: часть речи, падеж (что стоит перед пропуском — предлог, глагол?), лицо и число, время, формальность (`Sie`, а не `du`).',
                '**Прочитайте предложение с выбранным словом** целиком. Оно должно звучать как готовая фраза письма, а не как набор слов.',
                '**Не оставляйте пропуск пустым.** Исключите то, что точно неверно, и выберите из оставшегося: пустой ответ — это точно ноль.'
            ]
        },
        { type: 'tip', text: 'Незнакомое слово в тексте письма обычно не мешает: ответ решают соседи пропуска — предлог перед ним, глагол после него, обращение в начале. Незнакомое слово среди вариантов — тоже не беда: исключите те, что точно не подходят по форме. Ориентир по времени — около 9 минут на часть; Teil 5 короткий и часто решается быстрее.' },

        { type: 'h', text: '3. Формулы формального письма' },
        {
            type: 'table',
            head: ['Часть', 'Формула', 'Перевод'],
            rows: [
                ['Начало', '`Sehr geehrte Damen und Herren,` / `Sehr geehrte Frau Krüger,`', 'Уважаемые дамы и господа, / Уважаемая госпожа Крюгер,'],
                ['Причина письма', '`ich schreibe Ihnen, weil …` / `ich schreibe Ihnen wegen …`', 'я пишу вам, потому что … / по поводу …'],
                ['Причина письма', '`mit großem Interesse habe ich Ihre Anzeige gelesen.`', 'я с большим интересом прочитал ваше объявление.'],
                ['Заявление', '`hiermit kündige ich … zum …` / `hiermit melde ich mich … an.`', 'настоящим расторгаю … к … / настоящим записываюсь …'],
                ['Просьба', '`Könnten Sie mir bitte … schicken?` / `Ich bitte Sie um …`', 'не могли бы вы прислать мне …? / прошу вас о …'],
                ['Завершение', '`Vielen Dank im Voraus.` / `Ich freue mich auf Ihre Antwort.`', 'заранее спасибо / буду рад вашему ответу'],
                ['Прощание', '`Mit freundlichen Grüßen` / `Freundliche Grüße`', 'с уважением'],
                ['Приложения', '`In der Anlage finden Sie …` / `Anlage: Lebenslauf`', 'в приложении вы найдёте … / приложение: резюме']
            ],
            note: 'После обращения — запятая, и письмо продолжается со строчной буквы: `ich schreibe …`, `hiermit kündige …`.'
        },
        {
            type: 'table',
            head: ['Верно', 'Неверно', 'Почему'],
            rows: [
                ['`Sehr geehrte Damen und Herren,`', '`Sehr geehrten Damen und Herren,`', 'обращение стоит без артикля: окончание `-e`'],
                ['`Sehr geehrte Damen und Herren,`', '`Sehr geehrte Damen und Herrn,`', '`Herren` — множественное число; `Herrn` — один господин в Akkusativ или Dativ'],
                ['`Sehr geehrter Herr Lenz,`', '`Sehr geehrte Herr Lenz,`', 'перед `Herr` — окончание `-er`'],
                ['`Mit freundlichen Grüßen`', '`Mit freundliche Grüße`', 'после `mit` — Dativ множественного числа: `-en` и `-n`'],
                ['`Mit freundlichem Gruß`', '`Mit freundlichen Gruß`', 'с единственным числом `Gruß` — окончание `-em`'],
                ['`Freundliche Grüße`', '`Freundlichen Grüße`', 'без `mit` — окончание `-e`'],
                ['`Mit freundlichen Grüßen`', '`Liebe Grüße`, `Bis bald`, `Tschüss`', 'в письме на `Sie` незнакомому адресату — только формальное прощание']
            ],
            note: 'Варианты в пропуске часто отличаются одним окончанием. Учите формулы целиком, как одно слово, — тогда неверное окончание сразу режет слух.'
        },
        { type: 'trap', wrong: 'Sehr geehrte Damen und Herren, … Liebe Grüße', right: 'Sehr geehrte Damen und Herren, … Mit freundlichen Grüßen', why: 'Обращение и прощание — из одного регистра. `Liebe Grüße` и `Bis bald` грамматически верны, поэтому их и ставят среди вариантов, но в письме в фирму или ведомство это ошибка тона.' },

        { type: 'h', text: '4. Местоимение и падеж' },
        { type: 'rule', text: 'Сначала найдите, что управляет пропуском: предлог перед ним или глагол. Они и решают падеж. Вежливые `Sie`, `Ihnen`, `Ihr` пишутся с заглавной буквы.' },
        {
            type: 'table',
            head: ['Что стоит рядом', 'Падеж', 'Пример'],
            rows: [
                ['`für`, `ohne`, `um`, `durch`', 'Akkusativ', '`für mich`, `für Sie`, `ohne meinen Sohn`'],
                ['`bei`, `mit`, `von`, `zu`, `nach`, `seit`, `aus`', 'Dativ', '`bei Ihnen`, `mit mir`, `von meinem Konto`'],
                ['`auf`, `in`, `an` — куда?', 'Akkusativ', '`Bitte überweisen Sie das Geld auf mein Konto.`'],
                ['`auf`, `in`, `an` — где?', 'Dativ', '`in der Anlage`, `auf meinem Konto`'],
                ['`anrufen`, `bitten`, `fragen`, `informieren`', 'Akkusativ', '`Rufen Sie mich an.` `Ich bitte Sie um …`'],
                ['`helfen`, `danken`, `antworten`, `es tut … leid`', 'Dativ', '`Ich danke Ihnen.` `Es tut mir leid.`']
            ],
            note: 'Русский падеж здесь часто подводит: «позвонить мне» — дательный, а `anrufen` требует винительного: `mich`. «Благодарю вас» — винительный, а `danken` требует дательного: `Ihnen`.'
        },
        { type: 'trap', wrong: 'Ich habe am Montag einen Termin bei Sie.', right: 'Ich habe am Montag einen Termin bei Ihnen.', why: '`bei` всегда требует Dativ. Вежливое «вы» в дательном — `Ihnen`. `Sie` — именительный или винительный падеж, после `bei` он не встаёт.' },

        { type: 'h', text: '5. Форма глагола и вежливость' },
        {
            type: 'table',
            head: ['Что в предложении', 'Что нужно в пропуске', 'Пример'],
            rows: [
                ['`ich möchte`, `ich kann`, `ich muss`', 'инфинитив в конце', '`Ich möchte meinen Vertrag kündigen.`'],
                ['`ich habe`, `ich bin` (Perfekt)', 'Partizip II в конце', '`Ich habe Ihre Rechnung erhalten.` `Das Paket ist gestern angekommen.`'],
                ['`weil`, `dass`, `ob`', 'спрягаемый глагол в конце', '`…, weil ich umziehe.`'],
                ['`hiermit` в начале', 'спрягаемый глагол сразу после', '`Hiermit kündige ich …`'],
                ['вежливый вопрос', '`Könnten`, `Würden`, `Hätten` в начале', '`Könnten Sie mir bitte … schicken?`']
            ]
        },
        {
            type: 'exs',
            items: [
                { de: '**Könnten** Sie mir bitte eine Bestätigung schicken?', ru: 'Не могли бы вы прислать мне подтверждение?' },
                { de: 'Ich **würde** gern an dem Kurs teilnehmen.', ru: 'Я бы с удовольствием поучаствовал в курсе.' },
                { de: '**Hätten** Sie nächste Woche einen Termin für mich?', ru: 'Не найдётся ли у вас для меня приёма на следующей неделе?' },
                { de: '**Dürfte** ich Sie um eine kurze Antwort bitten?', ru: 'Могу ли я попросить вас коротко ответить?' },
                { de: '**Wäre** es möglich, den Termin zu verschieben?', ru: 'Можно ли перенести приём?' }
            ]
        },
        { type: 'trap', wrong: 'Ich habe Ihre Nachricht erhalte.', right: 'Ich habe Ihre Nachricht erhalten.', why: 'После `habe` в конце нужен Partizip II. У `erhalten` он без `ge-` и совпадает с инфинитивом. Форма `erhalte` — Präsens для `ich`, в рамку Perfekt она не встаёт.' },
        { type: 'trap', wrong: 'Sehr geehrter Herr Lenz, kannst du mir bitte die Unterlagen schicken?', right: 'Sehr geehrter Herr Lenz, können Sie mir bitte die Unterlagen schicken?', why: 'Начало `Sehr geehrter …` — значит, до конца письма `Sie`. Вариант с `du` грамматически безупречен, поэтому он и попадает в варианты, но в формальном письме это ошибка регистра.' },

        { type: 'h', text: '6. Союзы, связки и предлоги' },
        {
            type: 'table',
            head: ['Слово', 'Значение', 'Что после него', 'Пример'],
            rows: [
                ['`weil`', 'потому что', 'глагол в конце', '`…, weil ich umziehe.`'],
                ['`dass`', 'что', 'глагол в конце', '`Ich hoffe, dass Sie mir helfen können.`'],
                ['`denn`', 'ведь, потому что', 'обычный порядок: подлежащее, глагол', '`…, denn ich arbeite am Vormittag.`'],
                ['`deshalb`', 'поэтому', 'глагол сразу', '`Deshalb kündige ich den Vertrag.`'],
                ['`trotzdem`', 'всё равно, тем не менее', 'глагол сразу', '`Trotzdem funktioniert das Gerät nicht.`'],
                ['`außerdem`', 'кроме того', 'глагол сразу', '`Außerdem habe ich eine Frage.`'],
                ['`leider`', 'к сожалению', 'глагол сразу', '`Leider kann ich nicht kommen.`']
            ],
            note: 'Сначала посмотрите на слово после пропуска: там глагол — нужна связка вроде `deshalb`; глагол в конце предложения — союз вроде `weil`. Потом выбирайте по смыслу: причина, следствие или противопоставление.'
        },
        { type: 'trap', wrong: 'Ich habe alles nach der Anleitung gemacht. Deshalb funktioniert das Gerät nicht.', right: 'Ich habe alles nach der Anleitung gemacht. Trotzdem funktioniert das Gerät nicht.', why: 'После `deshalb` и `trotzdem` порядок слов одинаковый, так что решает смысл. Всё сделано по инструкции, а прибор всё равно не работает — это противопоставление: `trotzdem`. С `deshalb` вышло бы, что прибор не работает из-за инструкции.' },
        {
            type: 'table',
            head: ['Сочетание', 'Значение', 'Пример'],
            rows: [
                ['`zum` + дата', 'к такому-то числу (срок)', '`Ich kündige zum 31. Dezember.`'],
                ['`am` + дата', 'в такой-то день', '`Der Kurs beginnt am 7. November.`'],
                ['`ab` + дата', 'начиная с', '`ab 1. Oktober`'],
                ['`bis spätestens`', 'не позднее', '`Bitte antworten Sie bis spätestens Freitag.`'],
                ['`in Bezug auf`', 'касательно', '`In Bezug auf Ihre Rechnung habe ich eine Frage.`'],
                ['`auf Ihre Anzeige`', 'по вашему объявлению', '`Ich bewerbe mich auf Ihre Anzeige.`'],
                ['`sich interessieren für`', 'интересоваться', '`Ich interessiere mich für den Kurs.`'],
                ['`warten auf`', 'ждать', '`Ich warte auf Ihre Antwort.`']
            ],
            note: 'Предлог в устойчивом сочетании с русского не переводится: «интересоваться курсом» — `für`, «ждать ответа» — `auf`. Учите сочетание целиком.'
        },

        { type: 'h', text: '7. Слово по смыслу и слова жанра' },
        { type: 'p', text: 'Иногда все три варианта подходят по форме: одна часть речи, один род. Тогда решает смысл письма. Спросите себя, кто что делает: кто отправляет, кто получает, о чём просят. Ответ обычно есть в теме письма или в соседнем предложении.' },
        { type: 'trap', wrong: 'Hiermit kündige ich meinen Vertrag. Bitte schicken Sie mir eine Kündigung.', right: 'Hiermit kündige ich meinen Vertrag. Bitte schicken Sie mir eine Bestätigung.', why: 'Расторжение (`Kündigung`) пишет клиент, а фирма присылает ему подтверждение (`Bestätigung`). Оба слова женского рода и по форме подходят — решает смысл: кто кому что отправляет.' },
        {
            type: 'table',
            head: ['Слово', 'Перевод', 'Пример'],
            rows: [
                ['`die Kündigung`, `kündigen`', 'расторжение, расторгать', '`Hiermit kündige ich meinen Vertrag.`'],
                ['`der Vertrag`', 'договор', '`Mein Vertrag endet am 31. Dezember.`'],
                ['`die Frist`, `fristgerecht`', 'срок; с соблюдением срока', '`Ich kündige fristgerecht zum 30. Juni.`'],
                ['`die Anfrage`', 'запрос', '`Ich möchte eine Anfrage zu Ihrem Kurs stellen.`'],
                ['`die Beschwerde`', 'жалоба (на шум, на обслуживание)', '`Ich möchte mich über den Lärm beschweren.`'],
                ['`die Reklamation`', 'жалоба на товар', '`Ich reklamiere den Wasserkocher.`'],
                ['`der Termin`', 'назначенное время, приём', '`Ich möchte den Termin verschieben.`'],
                ['`die Bewerbung`', 'заявление на работу или практику', '`Ich schicke Ihnen meine Bewerbung.`'],
                ['`die Anmeldung`', 'запись, регистрация', '`die Anmeldung zum Kurs`'],
                ['`die Bestätigung`', 'подтверждение', '`Bitte schicken Sie mir eine Bestätigung.`'],
                ['`die Unterlagen`', 'документы (мн. ч.)', '`Welche Unterlagen brauchen Sie?`'],
                ['`die Anlage`', 'приложение к письму', '`In der Anlage finden Sie meinen Lebenslauf.`'],
                ['`hiermit`', 'настоящим, этим письмом', '`Hiermit melde ich mich an.`'],
                ['`bezüglich`', 'касательно, по поводу', '`bezüglich Ihrer Anfrage`']
            ]
        },

        { type: 'h', text: '8. Разбор примера' },
        { type: 'ex', de: 'Sehr geehrte Frau Dr. Albers, am Donnerstag um 10 Uhr habe ich einen Termin bei [1]. Leider ist mein Sohn krank, [2] muss ich an diesem Tag zu Hause bleiben. [3] Sie mir bitte einen neuen Termin geben? Mit freundlichen Grüßen Swetlana Braun', ru: 'Уважаемая госпожа доктор Альберс, в четверг в 10 часов у меня приём у [1]. К сожалению, мой сын болен, [2] в этот день я должна остаться дома. [3] вы дать мне новое время приёма? С уважением, Светлана Браун' },
        {
            type: 'table',
            head: ['Пропуск', 'Варианты', 'Рассуждение'],
            rows: [
                ['Шаг 1', '—', 'Целиком: пациентка пишет во врачебную практику, чтобы перенести приём. Обращение `Sehr geehrte` — письмо формальное, на `Sie`.'],
                ['`[1]`', '`Ihnen` · `Sie` · `Ihr`', 'Перед пропуском `bei` — предлог с Dativ. Вежливое «вы» в дательном — `Ihnen`. `Sie` — именительный или винительный падеж, а после `Ihr` («ваш») нужно существительное.'],
                ['`[2]`', '`deshalb` · `weil` · `trotzdem`', 'После пропуска сразу глагол `muss` — значит, не `weil`: с ним глагол ушёл бы в конец. Сын болен, поэтому мама дома — это следствие: `deshalb`. `trotzdem` дал бы противопоставление.'],
                ['`[3]`', '`Würden` · `Würde` · `Wurden`', 'Подлежащее — `Sie`, глагол стоит во множественном числе: `Würden`, а не `Würde`. `Wurden` — прошедшее время, а просьба касается будущего.']
            ],
            note: 'Решение каждый раз нашлось рядом с пропуском: в предлоге перед ним (`bei`), в глаголе после него (`muss`), в подлежащем (`Sie`). Смотрите на соседей пропуска.'
        }
    ],

    exercises: [
        // ---- стратегия и формулы
        { id: 'r05-01', type: 'choice', q: 'С чего начать работу над письмом в Teil 5?',
          options: ['Прочитать всё письмо, не глядя на варианты: кто пишет, кому и зачем', 'Сразу открыть варианты к пропуску 1 и выбрать самый знакомый', 'Сначала решить пропуски с самыми короткими вариантами'], answer: 0,
          explain: 'Ответ в Teil 5 зависит от всего письма: обращение задаёт регистр, тема и первое предложение — повод. Кто сразу смотрит варианты, легко выбирает слово, верное по форме, но не по смыслу.', tag: 'lesen_brief' },
        { id: 'r05-02', type: 'choice', q: 'Письмо в фирму, имя сотрудника неизвестно. Какое обращение верно?',
          options: ['Sehr geehrte Damen und Herren,', 'Sehr geehrten Damen und Herren,', 'Liebe Damen und Herren,'], answer: 0,
          explain: 'Если имя неизвестно — `Sehr geehrte Damen und Herren,`: обращение стоит без артикля, окончание `-e`. `Liebe` пишут знакомым, в письме в фирму оно не подходит.', tag: 'lesen_brief' },
        { id: 'r05-03', type: 'choice', q: 'Письмо начинается словами «Sehr geehrte Frau Neumann,». Какое прощание верно?',
          options: ['Mit freundlichen Grüßen', 'Mit freundliche Grüße', 'Liebe Grüße'], answer: 0,
          explain: 'К формальному обращению — формальное прощание `Mit freundlichen Grüßen`: после `mit` окончания `-en` и `-n`. В `Mit freundliche Grüße` окончания неверны, а `Liebe Grüße` пишут друзьям.', tag: 'lesen_brief' },

        // ---- падеж и местоимение
        { id: 'r05-04', type: 'choice', q: 'Какое слово подходит в пропуск?',
          text: 'Der Kurs am Abend ist für ___ leider zu spät.',
          options: ['mich', 'mir', 'ich'], answer: 0,
          explain: '`für` всегда требует Akkusativ: `für mich`, `für Sie`. `mir` — дательный падеж, `ich` — именительный.', tag: 'lesen_brief' },
        { id: 'r05-05', type: 'choice', q: 'Какое слово подходит в пропуск?',
          text: 'Vielen Dank, dass Sie ___ so schnell geantwortet haben.',
          options: ['mir', 'mich', 'ich'], answer: 0,
          explain: '`antworten` требует Dativ: ответить кому? — `mir`. `mich` — винительный падеж, `ich` — именительный.', tag: 'lesen_brief' },

        // ---- форма глагола и вежливость
        { id: 'r05-06', type: 'choice', q: 'Какая форма глагола нужна?',
          text: 'Ich habe Ihre Rechnung vom 3. März ___.',
          options: ['erhalten', 'erhalte', 'erhielt'], answer: 0,
          explain: 'После `habe` в конце стоит Partizip II. У `erhalten` он без `ge-` и совпадает с инфинитивом. `erhalte` — Präsens, `erhielt` — Präteritum: в рамку Perfekt они не встают.', tag: 'lesen_brief' },
        { id: 'r05-07', type: 'choice', q: 'Какая форма глагола нужна?',
          text: 'Hiermit ___ ich meinen Vertrag zum 31. Dezember.',
          options: ['kündige', 'kündigen', 'gekündigt'], answer: 0,
          explain: 'После `Hiermit` на втором месте — спрягаемый глагол для `ich`: `kündige`. Инфинитив `kündigen` и Partizip II `gekündigt` без второго глагола здесь не стоят.', tag: 'lesen_brief' },
        { id: 'r05-08', type: 'build', q: 'Составьте вежливую просьбу.',
          ru: 'Не могли бы вы, пожалуйста, подтвердить мне запись?',
          answer: ['Könnten Sie mir bitte die Anmeldung bestätigen?', 'Könnten Sie mir die Anmeldung bitte bestätigen?'],
          explain: '`Könnten Sie …?` — вежливая просьба в Konjunktiv II: глагол первым, инфинитив `bestätigen` — в конце. «Мне» — `mir`, «запись» — `die Anmeldung`.', tag: 'lesen_brief' },

        // ---- связки и предлоги
        { id: 'r05-09', type: 'choice', q: 'Какая связка подходит?',
          text: 'Ich habe den Mixer erst vor zwei Wochen gekauft. ___ funktioniert er nicht mehr.',
          options: ['Trotzdem', 'Deshalb', 'Weil'], answer: 0,
          explain: 'Прибор новый, а уже не работает — это противопоставление: `Trotzdem`. `Deshalb` дал бы нелепую причину, а после `Weil` глагол ушёл бы в конец.', tag: 'lesen_brief' },
        { id: 'r05-10', type: 'choice', q: 'Какая связка подходит?',
          text: 'Ich ziehe im Dezember nach Köln, ___ kündige ich meinen Vertrag.',
          options: ['deshalb', 'trotzdem', 'weil'], answer: 0,
          explain: 'Переезд — причина, расторжение — следствие: `deshalb`, и глагол `kündige` стоит сразу после него. После `weil` глагол был бы в конце, а `trotzdem` дал бы противопоставление.', tag: 'lesen_brief' },
        { id: 'r05-11', type: 'choice', q: 'Какой предлог нужен?',
          text: 'Ich warte schon zwei Wochen ___ Ihre Antwort.',
          options: ['auf', 'für', 'an'], answer: 0,
          explain: '`warten auf` + Akkusativ — устойчивое сочетание. По-русски «ждать ответа» — без предлога, поэтому предлог запоминают вместе с глаголом.', tag: 'lesen_brief' },

        // ---- слова жанра
        { id: 'r05-12', type: 'choice', q: 'Что значит «die Bestätigung»?',
          options: ['подтверждение', 'расторжение', 'приложение к письму'], answer: 0,
          explain: '`die Bestätigung` — от `bestätigen`, «подтверждать». Расторжение — `die Kündigung`, приложение к письму — `die Anlage`.', tag: 'lesen_wort' },
        { id: 'r05-13', type: 'choice', q: 'Какой глагол подходит по смыслу?',
          text: 'Ich möchte mich um den Praktikumsplatz in Ihrer Firma ___.',
          options: ['bewerben', 'beschweren', 'bestätigen'], answer: 0,
          explain: '`sich bewerben um` — подавать заявление на место. `sich beschweren` — жаловаться (с предлогом `über`), а `bestätigen` — подтверждать, этот глагол не возвратный.', tag: 'lesen_wort' },
        { id: 'r05-14', type: 'choice', q: 'Какое слово подходит по смыслу?',
          text: 'Leider ist die Ware kaputt angekommen. Deshalb schreibe ich Ihnen diese ___.',
          options: ['Reklamation', 'Bewerbung', 'Anmeldung'], answer: 0,
          explain: 'Письмо о сломанном товаре — `Reklamation`. `Bewerbung` — заявление на работу или практику, `Anmeldung` — запись на курс или мероприятие.', tag: 'lesen_wort' },
        { id: 'r05-15', type: 'choice', q: 'Что значит «Ich kündige fristgerecht»?',
          options: ['Я расторгаю договор с соблюдением срока', 'Я расторгаю договор немедленно, без срока', 'Я продлеваю договор ещё на год'], answer: 0,
          explain: '`die Frist` — срок, `fristgerecht` — «в срок», с соблюдением срока расторжения из договора. Немедленное расторжение называется `fristlos`.', tag: 'lesen_wort' },

        // ---- пропуски с клавиатуры
        { id: 'r05-16', type: 'gap', q: 'Вставьте местоимение.',
          text: 'Ich danke ___ für Ihre schnelle Antwort.', hint: 'вам, вежливо', answer: ['Ihnen'],
          explain: '`danken` требует Dativ: `Ihnen`. По-русски «благодарю вас» — винительный падеж, поэтому так хочется написать `Sie`.', tag: 'lesen_brief' },
        { id: 'r05-17', type: 'gap', q: 'Вставьте глагол können в вежливой форме (Konjunktiv II).',
          text: '___ Sie mir bitte sagen, wann der Kurs beginnt?', hint: 'können', answer: ['Könnten'],
          explain: '`Könnten Sie …?` — Konjunktiv II от `können`, самая частая вежливая просьба в письме. Глагол стоит первым, `sagen` — в конце.', tag: 'lesen_brief' },
        { id: 'r05-18', type: 'gap', q: 'Вставьте слово.',
          text: '___ melde ich mich für den Kurs am Samstag an.', hint: 'настоящим', answer: ['Hiermit'],
          explain: '`hiermit` — «настоящим, этим письмом»: так начинают официальное заявление. После него на втором месте глагол: `Hiermit melde ich mich … an`.', tag: 'lesen_wort' },
        { id: 'r05-19', type: 'gap', q: 'Вставьте местоимение в нужном падеже.',
          text: 'Bitte überweisen Sie das Geld auf ___ Konto.', hint: 'мой', answer: ['mein'],
          explain: '`überweisen auf` отвечает на вопрос «куда?» — Akkusativ. `Konto` среднего рода, в Akkusativ — `mein Konto`. `auf meinem Konto` отвечало бы на вопрос «где?».', tag: 'lesen_brief' },

        // ---- исправить ошибку
        { id: 'r05-20', type: 'fix', q: 'Исправьте ошибку в письме на «Sie».',
          text: 'Sehr geehrte Frau Lorenz, ich freue mich auf deine Antwort.',
          answer: ['Sehr geehrte Frau Lorenz, ich freue mich auf Ihre Antwort.'],
          explain: 'Обращение `Sehr geehrte Frau …` — письмо на `Sie` до конца: `Ihre Antwort`. `deine` — форма для друга, в формальном письме это ошибка регистра.', tag: 'lesen_brief' },
        { id: 'r05-21', type: 'fix', q: 'Исправьте ошибку падежа.',
          text: 'Ich bitte Ihnen um eine kurze Antwort.',
          answer: ['Ich bitte Sie um eine kurze Antwort.'],
          explain: '`bitten` требует Akkusativ: `ich bitte Sie`. Дательный `Ihnen` нужен после `danken` и `helfen`, но не после `bitten`.', tag: 'lesen_brief' },

        // ---- порядок
        { id: 'r05-22', type: 'order', q: 'Расставьте части формального письма по порядку.',
          items: ['Sehr geehrte Damen und Herren,', 'hiermit kündige ich meine Mitgliedschaft zum 30. November.', 'Bitte bestätigen Sie mir die Kündigung schriftlich.', 'Vielen Dank im Voraus.', 'Mit freundlichen Grüßen', 'Sergej Pawlow'],
          explain: 'Обращение, заявление (со строчной буквы после запятой), просьба, благодарность «заранее» за эту просьбу, прощание и имя — обычный порядок формального письма.', tag: 'lesen_brief' }
    ],

    sets: [
        {
            id: 'r05-s1',
            title: 'Расторжение пробного членства в спортзале',
            situation: 'Irina Sokolowa möchte ihre Probemitgliedschaft im Sportstudio kündigen. Lesen Sie ihren Brief. Welches Wort passt in die Lücken 1–6?',
            material: [
                { kind: 'letter',
                  head: ['Kündigung der Probemitgliedschaft', 'Irina Sokolowa · Ahornweg 5 · 34117 Kassel', 'Kassel, den 14.9.2026'],
                  body: '[0] Damen und Herren, seit dem 1. September habe ich eine Probemitgliedschaft für einen Monat in Ihrem Sportstudio. Das Training und die Kurse gefallen mir sehr gut. Trotzdem möchte ich danach keinen Vertrag für zwölf Monate abschließen, weil ich bald in eine andere Stadt umziehe. Dort habe ich eine neue Arbeitsstelle gefunden. Hiermit [1] ich meine Probemitgliedschaft fristgerecht [2] 30. September. Bitte buchen Sie ab Oktober keinen Beitrag mehr von [3] Konto ab. [4] Sie mir bitte eine kurze schriftliche [5] schicken, dass meine Mitgliedschaft am 30. September endet? Meine Mitgliedsnummer ist 20417. Vielen Dank im Voraus. Mit freundlichen [6]',
                  foot: ['Irina Sokolowa', 'Tel. 0123 456789'] }
            ],
            example: { options: ['Sehr geehrte', 'Sehr geehrter', 'Liebe'], answer: 0 },
            items: [
                { id: 'r05-s1-1', gap: 1, options: ['kündigen', 'kündige', 'gekündigt'], answer: 1,
                  why: 'После `Hiermit` на втором месте стоит спрягаемый глагол в форме для `ich`: `kündige`. `kündigen` — инфинитив или форма для `wir` и `Sie`, а `gekündigt` — Partizip II, ему нужен `habe`.' },
                { id: 'r05-s1-2', gap: 2, options: ['zum', 'im', 'seit'], answer: 0,
                  why: 'Срок, к которому заканчивается членство, — `zum` + дата: `fristgerecht zum 30. September`. `im` ставят перед месяцем без числа (`im September`), а `seit` говорит о начале в прошлом.' },
                { id: 'r05-s1-3', gap: 3, options: ['mein', 'meinen', 'meinem'], answer: 2,
                  why: '`von` требует Dativ, а `Konto` — среднего рода: `von meinem Konto`. `meinen` — Akkusativ мужского рода, `mein` без окончания бывает только в Nominativ и Akkusativ.' },
                { id: 'r05-s1-4', gap: 4, options: ['Könnten', 'Konnten', 'Kannst'], answer: 0,
                  why: 'Вежливая просьба в Konjunktiv II: `Könnten Sie …?`. `Konnten` — прошедшее время («могли ли вы тогда»), а `Kannst` — форма для `du`, с `Sie` она не сочетается.' },
                { id: 'r05-s1-5', gap: 5, options: ['Kündigung', 'Bestätigung', 'Rechnung'], answer: 1,
                  why: 'Расторжение уже написано (`Hiermit kündige ich …`), теперь студия должна его подтвердить: `Bestätigung`. `Kündigung` присылает тот, кто расторгает, а счёт (`Rechnung`) не сообщает, что членство закончилось.' },
                { id: 'r05-s1-6', gap: 6, options: ['Gruß', 'Grüße', 'Grüßen'], answer: 2,
                  why: 'Формула — `Mit freundlichen Grüßen`: после `mit` Dativ множественного числа, у существительного окончание `-n`. `Grüße` — форма без Dativ, а с единственным `Gruß` прилагательное было бы `freundlichem`.' }
            ],
            glossary: [
                { de: 'die Probemitgliedschaft', ru: 'пробное членство' },
                { de: 'das Sportstudio', ru: 'спортзал, фитнес-клуб' },
                { de: 'einen Vertrag abschließen', ru: 'заключить договор' },
                { de: 'umziehen', ru: 'переезжать' },
                { de: 'die Arbeitsstelle', ru: 'место работы' },
                { de: 'hiermit', ru: 'настоящим, этим письмом' },
                { de: 'kündigen', ru: 'расторгать (договор, членство)' },
                { de: 'fristgerecht', ru: 'в срок, с соблюдением срока' },
                { de: 'der Beitrag', ru: 'взнос' },
                { de: 'abbuchen', ru: 'списывать (со счёта)' },
                { de: 'schriftlich', ru: 'письменно' },
                { de: 'die Bestätigung', ru: 'подтверждение' },
                { de: 'im Voraus', ru: 'заранее' }
            ]
        },
        {
            id: 'r05-s2',
            title: 'Запрос о курсе для начинающих',
            situation: 'Daniel Kowalski interessiert sich für einen Computerkurs und schreibt an das Bildungszentrum. Lesen Sie den Brief. Welches Wort passt in die Lücken 1–6?',
            material: [
                { kind: 'letter',
                  head: ['Anfrage zum Kurs „Computer für Anfänger“', 'Daniel Kowalski · Birkenstraße 22 · 28195 Bremen', 'Bremen, den 5.10.2026'],
                  body: '[0] Herr Brenner, in Ihrem neuen Programm habe ich den Kurs „Computer für Anfänger“ [1]. Ich [2] sehr gern daran teilnehmen, aber ich habe noch einige Fragen. Der Kurs findet dienstags um 9 Uhr statt. Zu dieser Zeit arbeite ich leider, [3] kann ich nicht kommen. Gibt es den Kurs vielleicht auch am Abend oder am Samstag? Außerdem interessiert mich, wie viel der Kurs kostet und ob ich einen eigenen Laptop mitbringen muss. Könnten Sie mir bitte auch das [4] für die Anmeldung schicken? Dann fülle ich es aus und schicke es Ihnen sofort zurück. Für Ihre Hilfe danke ich [5] schon jetzt. [6]',
                  foot: ['Daniel Kowalski', 'Tel. 0123 456780'] }
            ],
            example: { options: ['Sehr geehrte', 'Sehr geehrter', 'Sehr geehrten'], answer: 1 },
            items: [
                { id: 'r05-s2-1', gap: 1, options: ['finden', 'fand', 'gefunden'], answer: 2,
                  why: '`habe` в начале рамки требует в конце Partizip II: `habe … gefunden`. `finden` — инфинитив, `fand` — Präteritum, в рамку Perfekt они не встают.' },
                { id: 'r05-s2-2', gap: 2, options: ['möchte', 'mochte', 'möchten'], answer: 0,
                  why: '`Ich möchte gern …` — вежливая форма желания. `mochte` — прошедшее время от `mögen` («мне нравилось»), а `möchten` — форма для `wir` или `Sie`, не для `ich`.' },
                { id: 'r05-s2-3', gap: 3, options: ['trotzdem', 'deshalb', 'denn'], answer: 1,
                  why: 'После пропуска сразу глагол `kann`, и по смыслу это следствие: работаю, поэтому не могу прийти — `deshalb`. `trotzdem` дал бы противопоставление, а после `denn` порядок был бы обычный: `denn ich kann …`.' },
                { id: 'r05-s2-4', gap: 4, options: ['Zeugnis', 'Programm', 'Formular'], answer: 2,
                  why: 'Для записи присылают бланк, который заполняют (`fülle ich es aus`), — `Formular`. Программа у автора уже есть (`in Ihrem neuen Programm`), а `Zeugnis` — свидетельство, его не заполняют.' },
                { id: 'r05-s2-5', gap: 5, options: ['Ihnen', 'Sie', 'Ihr'], answer: 0,
                  why: '`danken` требует Dativ: `ich danke Ihnen`. По-русски «благодарю вас» — винительный падеж, отсюда ловушка `Sie`; `Ihr` — «ваш», после него нужно существительное.' },
                { id: 'r05-s2-6', gap: 6, options: ['Liebe Grüße', 'Mit freundlichen Grüßen', 'Bis bald'], answer: 1,
                  why: 'Письмо начинается с `Sehr geehrter Herr Brenner` — значит, и прощание формальное: `Mit freundlichen Grüßen`. `Liebe Grüße` и `Bis bald` пишут друзьям.' }
            ],
            glossary: [
                { de: 'die Anfrage', ru: 'запрос' },
                { de: 'das Bildungszentrum', ru: 'образовательный центр' },
                { de: 'der Anfänger', ru: 'начинающий' },
                { de: 'teilnehmen an', ru: 'участвовать в' },
                { de: 'stattfinden', ru: 'проходить, состояться' },
                { de: 'dienstags', ru: 'по вторникам' },
                { de: 'eigen', ru: 'собственный' },
                { de: 'mitbringen', ru: 'приносить с собой' },
                { de: 'das Formular', ru: 'бланк, анкета' },
                { de: 'die Anmeldung', ru: 'запись, регистрация' },
                { de: 'ausfüllen', ru: 'заполнять' },
                { de: 'zurückschicken', ru: 'отправлять обратно' }
            ]
        },
        {
            id: 'r05-s3',
            title: 'Жалоба на неисправную кофемашину',
            situation: 'Natalia Hoffmann hat im Internet eine Kaffeemaschine gekauft. Die Maschine funktioniert nicht. Lesen Sie ihre Reklamation. Welches Wort passt in die Lücken 1–6?',
            material: [
                { kind: 'letter',
                  head: ['Reklamation: Bestellung Nr. 58213', 'Natalia Hoffmann · Gartenstraße 9 · 04109 Leipzig', 'Leipzig, den 18.9.2026'],
                  body: '[0] Damen und Herren, am 12. September habe ich in Ihrem Online-Shop eine Kaffeemaschine bestellt. Zwei Tage später [1] das Paket angekommen. Leider funktioniert die Maschine nicht richtig: Das Wasser wird nicht heiß, und der Kaffee ist immer kalt. Ich habe alles so gemacht, wie es in der [2] steht, und die Maschine mehrmals ausprobiert. [3] bleibt der Kaffee kalt. Deshalb möchte ich die Kaffeemaschine zurückschicken. [4] es möglich, dass Sie mir den Kaufpreis von 89 Euro zurückzahlen? Die Rechnung und ein Foto von der Maschine schicke ich Ihnen mit. Wenn Sie noch Fragen haben, rufen Sie [5] bitte an. Vormittags bin ich unter 0123 456789 erreichbar. Mit [6] Grüßen',
                  foot: ['Natalia Hoffmann', 'Kundennummer 774310'] }
            ],
            example: { options: ['Sehr geehrten', 'Sehr geehrte', 'Liebe'], answer: 1 },
            items: [
                { id: 'r05-s3-1', gap: 1, options: ['ist', 'hat', 'wird'], answer: 0,
                  why: '`ankommen` — глагол движения, Perfekt образуется с `sein`: `ist … angekommen`. С `hat` эта форма неверна, а `wird` с Partizip II образует пассив, для `ankommen` он невозможен.' },
                { id: 'r05-s3-2', gap: 2, options: ['Rechnung', 'Anleitung', 'Bestellung'], answer: 1,
                  why: 'Как пользоваться прибором, написано в инструкции — `Anleitung`. В счёте (`Rechnung`) и в заказе (`Bestellung`) нет указаний, как готовить кофе.' },
                { id: 'r05-s3-3', gap: 3, options: ['Deshalb', 'Weil', 'Trotzdem'], answer: 2,
                  why: 'Всё сделано по инструкции, а кофе всё равно холодный — это противопоставление: `Trotzdem`. `Deshalb` означало бы, что кофе холодный из-за инструкции, а после `Weil` глагол стоял бы в конце.' },
                { id: 'r05-s3-4', gap: 4, options: ['War', 'Wäre', 'Wären'], answer: 1,
                  why: 'Вежливая просьба: `Wäre es möglich, dass …?` — Konjunktiv II от `sein`. `War` — прошедшее время, а возврат денег ещё впереди; `Wären` не согласуется с `es`.' },
                { id: 'r05-s3-5', gap: 5, options: ['mich', 'mir', 'ich'], answer: 0,
                  why: '`anrufen` требует Akkusativ: `rufen Sie mich an`. По-русски «позвонить мне» — дательный падеж, отсюда ловушка `mir`; `ich` — именительный падеж.' },
                { id: 'r05-s3-6', gap: 6, options: ['freundliche', 'freundlichem', 'freundlichen'], answer: 2,
                  why: 'После `mit` — Dativ множественного числа: `Mit freundlichen Grüßen`. `freundliche` — окончание без `mit` (`Freundliche Grüße`), `freundlichem` — для единственного числа (`mit freundlichem Gruß`).' }
            ],
            glossary: [
                { de: 'die Reklamation', ru: 'жалоба на товар' },
                { de: 'die Bestellung', ru: 'заказ' },
                { de: 'der Online-Shop', ru: 'интернет-магазин' },
                { de: 'ankommen', ru: 'прибывать, приходить' },
                { de: 'funktionieren', ru: 'работать (о приборе)' },
                { de: 'die Anleitung', ru: 'инструкция' },
                { de: 'ausprobieren', ru: 'пробовать, испытывать' },
                { de: 'der Kaufpreis', ru: 'цена покупки' },
                { de: 'zurückzahlen', ru: 'возвращать (деньги)' },
                { de: 'mitschicken', ru: 'отправить вместе с письмом' },
                { de: 'vormittags', ru: 'до обеда' },
                { de: 'erreichbar', ru: 'доступен (для связи)' }
            ]
        },
        {
            id: 'r05-s4',
            title: 'Перенос приёма у стоматолога',
            situation: 'Olga Wiebe kann nicht zu ihrem Termin in der Zahnarztpraxis kommen. Lesen Sie ihren Brief. Welches Wort passt in die Lücken 1–6?',
            material: [
                { kind: 'letter',
                  head: ['Terminverschiebung: Kontrolle am 21. Oktober', 'Olga Wiebe · Kastanienallee 31 · 70173 Stuttgart', 'Stuttgart, den 16.10.2026'],
                  body: 'Sehr geehrte Frau Dr. Yilmaz, am 21. Oktober um 8:30 Uhr habe ich einen Termin bei Ihnen zur Kontrolle. Leider [0] ich an diesem Tag nicht in die Praxis kommen, [1] ich eine wichtige Prüfung im Deutschkurs habe. Den Prüfungstermin habe ich erst gestern [2]. Es tut [3] sehr leid, dass ich so spät absage. [4] Sie vielleicht in der nächsten Woche einen anderen Termin für mich frei? Am Montag und am Dienstag habe ich den ganzen Tag Zeit, an den anderen Tagen nur nachmittags. Sie erreichen mich am besten telefonisch unter 0123 456789. Vielen Dank für Ihr [5]. [6] Grüße',
                  foot: ['Olga Wiebe', 'Patientennummer 3318'] }
            ],
            example: { options: ['können', 'kann', 'kannst'], answer: 1 },
            items: [
                { id: 'r05-s4-1', gap: 1, options: ['deshalb', 'denn', 'weil'], answer: 2,
                  why: 'Глагол `habe` стоит в конце — это придаточное причины, его вводит `weil`. После `denn` порядок был бы обычный (`denn ich habe …`), а после `deshalb` глагол идёт сразу, и по смыслу это следствие, а не причина.' },
                { id: 'r05-s4-2', gap: 2, options: ['erfahren', 'erfahre', 'erfährt'], answer: 0,
                  why: 'После `habe` в конце — Partizip II. У `erfahren` он совпадает с инфинитивом: `habe … erfahren`. `erfahre` и `erfährt` — формы Präsens.' },
                { id: 'r05-s4-3', gap: 3, options: ['mich', 'mir', 'ich'], answer: 1,
                  why: 'Устойчивое выражение — `Es tut mir leid`, с Dativ. `Es tut mich leid` — частая ошибка, а `ich` — именительный падеж.' },
                { id: 'r05-s4-4', gap: 4, options: ['Hätten', 'Hatten', 'Hättest'], answer: 0,
                  why: '`Hätten Sie … einen Termin frei?` — вежливый вопрос в Konjunktiv II. `Hatten` — прошедшее время, а речь о следующей неделе; `Hättest` — форма для `du`.' },
                { id: 'r05-s4-5', gap: 5, options: ['Interesse', 'Angebot', 'Verständnis'], answer: 2,
                  why: 'Автор извиняется за позднюю отмену, поэтому благодарит за понимание: `Vielen Dank für Ihr Verständnis`. За интерес (`Interesse`) фирма благодарит клиента, а предложения (`Angebot`) врач ещё не делал.' },
                { id: 'r05-s4-6', gap: 6, options: ['Freundlichen', 'Freundliche', 'Freundlicher'], answer: 1,
                  why: 'Без `mit` прощание стоит в именительном падеже: `Freundliche Grüße`. Окончание `-en` нужно только после `mit` (`Mit freundlichen Grüßen`), а `Freundlicher` подходит только к единственному числу (`Freundlicher Gruß`).' }
            ],
            glossary: [
                { de: 'die Terminverschiebung', ru: 'перенос приёма' },
                { de: 'die Zahnarztpraxis', ru: 'стоматологический кабинет' },
                { de: 'die Kontrolle', ru: 'осмотр, проверка' },
                { de: 'die Prüfung', ru: 'экзамен' },
                { de: 'erfahren', ru: 'узнать' },
                { de: 'absagen', ru: 'отменять (встречу, приём)' },
                { de: 'Es tut mir leid.', ru: 'Мне жаль.' },
                { de: 'einen Termin frei haben', ru: 'иметь свободное время для приёма' },
                { de: 'nachmittags', ru: 'после обеда' },
                { de: 'telefonisch', ru: 'по телефону' },
                { de: 'das Verständnis', ru: 'понимание' }
            ]
        },
        {
            id: 'r05-s5',
            title: 'Заявление на практику в детском саду',
            situation: 'Tetiana Melnyk möchte ein Praktikum in einer Kita machen. Lesen Sie ihre Bewerbung. Welches Wort passt in die Lücken 1–6?',
            material: [
                { kind: 'letter',
                  head: ['Bewerbung um einen Praktikumsplatz', 'Tetiana Melnyk · Rosenweg 3 · 90402 Nürnberg', 'Nürnberg, den 6.10.2026'],
                  body: '[0] Frau Kessler, in der Zeitung habe ich Ihre Anzeige gelesen: Sie suchen ab 1. November eine Praktikantin für vier Wochen. Ich interessiere mich sehr [1] dieses Praktikum. Ich bin 34 Jahre alt und komme aus der Ukraine. Dort [2] ich sechs Jahre als Erzieherin in einem Kindergarten gearbeitet. Seit einem Jahr lebe ich in Deutschland und besuche zurzeit einen Deutschkurs. Nach dem Kurs möchte ich gern wieder mit Kindern arbeiten. Ein Praktikum in Ihrer Kita ist für mich deshalb eine große Chance. Ich bin zuverlässig, freundlich und geduldig. [3] Lebenslauf und meine Zeugnisse finden Sie in der [4]. Über eine Einladung zu einem Gespräch [5] ich mich sehr freuen. [6]',
                  foot: ['Tetiana Melnyk', 'Tel. 0123 456781'] }
            ],
            example: { options: ['Sehr geehrter', 'Sehr geehrte', 'Hallo'], answer: 1 },
            items: [
                { id: 'r05-s5-1', gap: 1, options: ['an', 'für', 'auf'], answer: 1,
                  why: 'Устойчивое сочетание — `sich interessieren für` + Akkusativ: `für dieses Praktikum`. `an` бывает в `Interesse an`, `auf` — в `sich freuen auf`; к этому глаголу они не подходят.' },
                { id: 'r05-s5-2', gap: 2, options: ['bin', 'war', 'habe'], answer: 2,
                  why: '`arbeiten` образует Perfekt с `haben`: `habe … gearbeitet`. С `bin` эта форма неверна, а `war … gearbeitet` по-немецки не говорят.' },
                { id: 'r05-s5-3', gap: 3, options: ['Meinen', 'Mein', 'Meinem'], answer: 0,
                  why: 'Подлежащее здесь — `Sie` (`finden Sie`), а `Lebenslauf` — дополнение в Akkusativ мужского рода: `Meinen Lebenslauf`. `Mein` — именительный падеж, `Meinem` — дательный.' },
                { id: 'r05-s5-4', gap: 4, options: ['Anzeige', 'Anmeldung', 'Anlage'], answer: 2,
                  why: 'Документы, приложенные к письму, находят «в приложении» — `in der Anlage`. `Anzeige` — объявление самого детского сада, а `Anmeldung` — запись, в ней резюме не прикладывают.' },
                { id: 'r05-s5-5', gap: 5, options: ['wurde', 'würde', 'würden'], answer: 1,
                  why: '`Über … würde ich mich sehr freuen` — вежливая форма Konjunktiv II для `ich`. `wurde` — прошедшее время, `würden` — форма для `wir` или `Sie`.' },
                { id: 'r05-s5-6', gap: 6, options: ['Mit freundlichen Grüßen', 'Liebe Grüße', 'Mit freundlichen Gruß'], answer: 0,
                  why: 'Заявление незнакомой адресатке начинается с `Sehr geehrte Frau Kessler` — нужно формальное прощание `Mit freundlichen Grüßen`. `Liebe Grüße` пишут друзьям и родным, для заявления это слишком неформально, а в `Mit freundlichen Gruß` неверное окончание (нужно `freundlichem Gruß`).' }
            ],
            glossary: [
                { de: 'die Bewerbung', ru: 'заявление (на работу, практику)' },
                { de: 'die Anzeige', ru: 'объявление' },
                { de: 'die Praktikantin', ru: 'практикантка' },
                { de: 'das Praktikum', ru: 'практика, стажировка' },
                { de: 'sich interessieren für', ru: 'интересоваться (чем-то)' },
                { de: 'die Erzieherin', ru: 'воспитательница' },
                { de: 'die Kita', ru: 'детский сад' },
                { de: 'zuverlässig', ru: 'надёжный' },
                { de: 'geduldig', ru: 'терпеливый' },
                { de: 'der Lebenslauf', ru: 'резюме, автобиография' },
                { de: 'das Zeugnis', ru: 'свидетельство, аттестат' },
                { de: 'die Anlage', ru: 'приложение (к письму)' },
                { de: 'die Einladung', ru: 'приглашение' },
                { de: 'das Gespräch', ru: 'собеседование, разговор' }
            ]
        },
        {
            id: 'r05-s6',
            title: 'Запись на курс первой помощи',
            situation: 'Ahmad Karimi möchte einen Erste-Hilfe-Kurs besuchen. Lesen Sie seine Anmeldung. Welches Wort passt in die Lücken 1–6?',
            material: [
                { kind: 'letter',
                  head: ['Anmeldung zum Erste-Hilfe-Kurs', 'Ahmad Karimi · Bergstraße 40 · 45127 Essen', 'Essen, den 19.10.2026'],
                  body: '[0] Damen und [1], hiermit melde ich mich für den Erste-Hilfe-Kurs [2] 7. November an. Ich brauche den Kurs für meinen Führerschein. Auf Ihrer Internetseite steht, dass der Kurs 45 Euro kostet. Muss ich die [3] vorher überweisen, oder kann ich am Kurstag bar bezahlen? Außerdem habe ich noch eine Frage: Muss ich zum Kurs etwas [4]? Mein Bruder möchte auch gern an dem Kurs teilnehmen. Kann ich [5] auch gleich anmelden? Sein Name ist Reza Karimi. [6] ich Sie bitten, mir die Anmeldung für uns beide kurz per E-Mail zu bestätigen? Vielen Dank im Voraus. Mit freundlichen Grüßen',
                  foot: ['Ahmad Karimi', 'Tel. 0123 456782', 'E-Mail: a.karimi@beispiel.de'] }
            ],
            example: { options: ['Liebe', 'Sehr geehrten', 'Sehr geehrte'], answer: 2 },
            items: [
                { id: 'r05-s6-1', gap: 1, options: ['Herrn', 'Herren', 'Herr'], answer: 1,
                  why: 'В обращении `Damen und Herren` — дамы и господа во множественном числе: `Herren`. `Herrn` — один господин в Akkusativ или Dativ (`an Herrn Lenz`), `Herr` — единственное число.' },
                { id: 'r05-s6-2', gap: 2, options: ['im', 'um', 'am'], answer: 2,
                  why: 'День, в который проходит курс, — `am` + дата: `am 7. November`. `im` ставят перед месяцем без числа (`im November`), `um` — перед временем на часах (`um 9 Uhr`).' },
                { id: 'r05-s6-3', gap: 3, options: ['Gebühr', 'Bestätigung', 'Anmeldung'], answer: 0,
                  why: 'Деньги за курс (`45 Euro`), которые переводят заранее, — `Gebühr`, плата. Подтверждение (`Bestätigung`) и запись (`Anmeldung`) на счёт не переводят.' },
                { id: 'r05-s6-4', gap: 4, options: ['mitgebracht', 'mitbringen', 'mitbringe'], answer: 1,
                  why: 'При модальном `muss` в конце нужен инфинитив: `Muss ich … etwas mitbringen?`. `mitgebracht` — Partizip II, ему нужен `haben`, а `mitbringe` — форма Präsens для `ich`.' },
                { id: 'r05-s6-5', gap: 5, options: ['ihm', 'er', 'ihn'], answer: 2,
                  why: '`anmelden` требует Akkusativ: записать кого? — брата, `ihn`. `ihm` — дательный падеж, `er` — именительный.' },
                { id: 'r05-s6-6', gap: 6, options: ['Dürfte', 'Durfte', 'Darfst'], answer: 0,
                  why: '`Dürfte ich Sie bitten, …?` — очень вежливая просьба в Konjunktiv II. `Durfte` — прошедшее время, а `Darfst` — форма для `du`, к `ich` она не подходит.' }
            ],
            glossary: [
                { de: 'die Anmeldung', ru: 'запись, регистрация' },
                { de: 'sich anmelden', ru: 'записываться' },
                { de: 'der Erste-Hilfe-Kurs', ru: 'курс первой помощи' },
                { de: 'der Führerschein', ru: 'водительские права' },
                { de: 'die Internetseite', ru: 'сайт' },
                { de: 'die Gebühr', ru: 'плата, взнос' },
                { de: 'überweisen', ru: 'переводить (деньги на счёт)' },
                { de: 'bar bezahlen', ru: 'платить наличными' },
                { de: 'der Kurstag', ru: 'день занятия' },
                { de: 'mitbringen', ru: 'приносить с собой' },
                { de: 'bestätigen', ru: 'подтверждать' },
                { de: 'für uns beide', ru: 'для нас обоих' }
            ]
        }
    ]
};
