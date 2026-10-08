/**
 * Модуль-техника 2. Пункты задания → предложения.
 *
 * Как читать задание DTZ, раскрывать каждый пункт одним-двумя предложениями
 * с деталью, связывать пункты в письмо на 70–100 слов и уложиться в 30 минут.
 */

export default {
    id: 'l02',
    order: 14,
    title: 'Пункты задания → предложения',
    short: 'Пункты задания',
    goal: 'После модуля вы превращаете каждый из четырёх пунктов задания в одно-два законченных предложения с деталью, связываете их в письмо на 70–100 слов и успеваете проверить его за 30 минут.',
    why: 'Пункты задания — это первый критерий оценки (Aufgabenbewältigung): пропущенный или только названный пункт стоит баллов, даже если грамматика безупречна. Образцы показывают, что письмо с ошибками может получить B1, если все пункты раскрыты и связаны. Поэтому техника «пункт → предложение с деталью» окупается на каждом экзамене.',

    theory: [
        { type: 'h', text: '1. Как устроено задание' },
        { type: 'p', text: 'Письменная часть DTZ — одно письмо за 30 минут. Заданий два, A и B, вы выбираете одно. Каждое состоит из короткой ситуации и четырёх пунктов (Leitpunkte), которые надо раскрыть.' },
        {
            type: 'table',
            head: ['Часть задания', 'Что из неё взять'],
            rows: [
                ['Ситуация (2–3 предложения)', 'О чём письмо и почему вы пишете.'],
                ['Адресат (обычно в конце ситуации)', 'Кому вы пишете: отсюда обращение, прощание, `Sie` или `du`.'],
                ['Четыре пункта', 'Четыре смысловые части письма: каждый пункт — одно-два предложения.'],
                ['Обращение и прощание', 'Обязательны в любом задании: без них письмо теряет баллы во втором критерии.']
            ],
            note: 'Пишете одно задание из двух. Второе после выбора больше не читайте.'
        },
        { type: 'rule', text: 'Сначала найдите адресата. Учреждение или незнакомый человек — `Sehr geehrte Frau …,` / `Sehr geehrter Herr …,` и `Mit freundlichen Grüßen`. Знакомый, с которым вы на `Sie` (соседка), — можно `Liebe Frau …,` и `Viele Grüße`. Друг на «ты» — `Liebe …,` / `Lieber …,` и `du`.' },
        { type: 'tip', text: 'Прочитайте оба задания и выберите то, где вы знаете слова для всех четырёх пунктов и ситуация вам знакома по жизни. Не берите «интересное» задание, если для одного пункта нет слов: пропущенный пункт стоит дороже, чем скучная тема.' },

        { type: 'h', text: '2. Один пункт — одно-два законченных предложения' },
        { type: 'p', text: 'Пункт — не заголовок и не тема для сочинения. Это вопрос, на который вы отвечаете одним-двумя законченными предложениями: первое называет главное, второе добавляет деталь или причину.' },
        {
            type: 'exs',
            items: [
                { de: '**Es tut mir leid, dass** ich gestern nicht im Kurs war. Mein Sohn hatte Fieber.', ru: '`Entschuldigung`: Мне жаль, что вчера меня не было на курсе. У сына была температура.' },
                { de: '**Könnten Sie** bitte am Samstag meine Pakete annehmen? Ich bin den ganzen Tag bei der Arbeit.', ru: '`Bitte um Hilfe`: Не могли бы вы в субботу принять мои посылки? Я весь день на работе.' },
                { de: '**Können wir uns** am Mittwoch um 16 Uhr treffen? Vorher habe ich leider keine Zeit.', ru: '`Terminvorschlag`: Можем ли мы встретиться в среду в 16 часов? Раньше у меня, к сожалению, нет времени.' },
                { de: '**Vielen Dank für** Ihre schnelle Hilfe. Die Heizung funktioniert jetzt wieder.', ru: '`Dank`: Большое спасибо за быструю помощь. Отопление снова работает.' }
            ]
        },

        { type: 'h', text: '3. Слово-вопрос: Was? Warum? Wann? Wie?' },
        { type: 'p', text: 'Чтобы пункт был не просто упомянут, а раскрыт, задайте к нему один вопрос: `Was?` (что именно), `Warum?` (почему), `Wann?` (когда), `Wie?` (как). Ответ на этот вопрос и есть ваше предложение. В первом критерии ценится, чтобы пункт был раскрыт по содержанию точно — `inhaltlich präzise`.' },
        {
            type: 'table',
            head: ['Пункт', 'Вопрос', 'Только упомянут', 'Раскрыт'],
            rows: [
                ['Grund für Ihr Schreiben', '`Warum?`', '`Ich schreibe Ihnen.`', '`Ich schreibe Ihnen, weil ich nächsten Monat umziehe.`'],
                ['Bitte um Hilfe', '`Was?`', '`Ich brauche Hilfe.`', '`Könnten Sie meine Blumen gießen?`'],
                ['Terminvorschlag', '`Wann?`', '`Wir können uns treffen.`', '`Können wir uns am Dienstag um 17 Uhr treffen?`'],
                ['Problem', '`Was? Seit wann?`', '`Ich habe ein Problem.`', '`Die Waschmaschine im Keller ist seit Montag kaputt.`'],
                ['Schlüssel', '`Wie? Wann?`', '`Ich habe einen Schlüssel.`', '`Ich bringe Ihnen den Schlüssel am Freitag vorbei.`']
            ],
            note: 'Проверяющий ищет не слово из пункта, а ответ на вопрос к нему. Деталь — это день, время, место, число или причина.'
        },
        { type: 'trap', wrong: 'Ich habe ein Problem mit der Wohnung.', right: 'Das Fenster im Schlafzimmer geht seit Montag nicht mehr zu.', why: 'Первое предложение «пустое»: оно говорит, что проблема есть, но не какая. По-русски «у меня проблема» звучит как начало рассказа, а на экзамене рассказа может и не последовать. Сразу назовите, что не так и с какого времени.' },

        { type: 'h', text: '4. Типы пунктов и готовые заготовки' },
        {
            type: 'table',
            head: ['Пункт', 'Что сказать', 'Заготовка'],
            rows: [
                ['Grund für Ihr Schreiben', 'зачем вы пишете', '`Ich schreibe Ihnen, weil …`'],
                ['Entschuldigung', 'за что извиняетесь и почему так вышло', '`Es tut mir leid, dass …` · `Entschuldigen Sie bitte, dass …`'],
                ['Bitte um …', 'о чём именно просите', '`Könnten Sie mir bitte …?` · `Ich möchte Sie bitten, … zu …`'],
                ['Frage zu …', 'что хотите узнать', '`Ich möchte gern wissen, ob …` · `Können Sie mir sagen, wann …?`'],
                ['Information / Mitteilung', 'что сообщаете', '`Ich möchte Ihnen mitteilen, dass …`'],
                ['Vorschlag / Terminvorschlag', 'что и когда предлагаете', '`Ich schlage vor, dass wir …` · `Passt es Ihnen am … um …?`'],
                ['Zusage / Absage', 'придёте или нет и почему', '`Vielen Dank, ich komme gern.` · `Leider kann ich am … nicht kommen, weil …`'],
                ['Dank', 'за что благодарите', '`Vielen Dank für …` · `Ich danke Ihnen für …`'],
                ['Beschwerde / Problem', 'что не так и с какого времени', '`Leider funktioniert … seit … nicht.` · `Ich möchte mich über … beschweren.`'],
                ['Rückkehr / Ergebnis', 'когда вернётесь, что будет дальше', '`Ab … bin ich wieder da.` · `Ich komme am … wieder in den Kurs.`']
            ],
            note: 'Заготовка — только начало. Сразу после неё идёт деталь: что, когда, почему. Вежливые формы подробно — в модуле 5, союзы — в модулях 2 и 10.'
        },
        { type: 'trap', wrong: 'Können Sie mir sagen, wann beginnt der Kurs?', right: 'Können Sie mir sagen, wann der Kurs beginnt?', why: 'Пункт «Frage zu …» удобно оформить косвенным вопросом. В русском порядок слов после «когда» не меняется, а в немецком после `wann`, `wo`, `ob` внутри предложения глагол уходит в конец.' },
        { type: 'trap', wrong: 'Ich danke Sie für Ihre Hilfe.', right: 'Ich danke Ihnen für Ihre Hilfe.', why: 'По-русски «благодарить кого» — винительный падеж. Немецкий `danken` требует дательного: `Ihnen`, `dir`, `meiner Nachbarin`.' },

        { type: 'h', text: '5. Если не хватает слов' },
        { type: 'p', text: 'Словаря на экзамене нет, и нужное слово иногда не вспоминается. Не собирайте немецкое слово из русских кусков и не бросайте пункт: скажите то же самое проще.' },
        {
            type: 'list',
            items: [
                'Возьмите общее слово вместо точного: `das Gerät` (прибор), `das Ding` (вещь), `der Raum` (помещение).',
                'Скажите, для чего вещь: `das Ding, mit dem man …` — например, `das Gerät, mit dem man die Wäsche trocknet` (сушильная машина).',
                'Опишите, что происходит, простыми словами: вместо «протекает» — `Unter dem Waschbecken ist immer Wasser.`',
                'Разрежьте длинную мысль на два коротких предложения: `Ich bin krank. Deshalb kann ich nicht kommen.`'
            ]
        },
        { type: 'rule', text: '**Простое и правильное** лучше сложного с ошибками. Пункт раскрыт в обоих случаях, но сложная фраза с ошибками теряет баллы за корректность.' },

        { type: 'h', text: '6. Как связать пункты в один текст' },
        {
            type: 'table',
            head: ['Связка', 'Значение', 'Пример'],
            rows: [
                ['`außerdem`', 'кроме того: следующий пункт', '`Außerdem habe ich eine Frage.`'],
                ['`deshalb`', 'поэтому: следствие', '`Deshalb kann ich nicht kommen.`'],
                ['`aber`', 'но: противопоставление', '`Ich helfe Ihnen gern, aber ich habe erst am Abend Zeit.`'],
                ['`dann`', 'тогда, потом', '`Dann können wir alles besprechen.`'],
                ['`danach`', 'после этого', '`Danach bringe ich Ihnen den Schlüssel.`'],
                ['`zum Schluss`', 'в конце, напоследок', '`Zum Schluss möchte ich mich bedanken.`']
            ],
            note: 'Если `außerdem`, `deshalb`, `dann`, `danach`, `zum Schluss` стоят первыми, глагол идёт сразу за связкой. `aber` и `und` места не занимают: после них обычный порядок — `aber ich habe …`.'
        },
        { type: 'trap', wrong: 'Danach ich gieße die Blumen.', right: 'Danach gieße ich die Blumen.', why: 'По-русски «После этого я полью цветы» — подлежащее сразу за связкой. В немецком связка занимает первое место, поэтому дальше глагол, а потом `ich`.' },

        { type: 'h', text: '7. 70–100 слов: деталь вместо сложности' },
        { type: 'p', text: 'Задание просит писать как можно больше: `Schreiben Sie möglichst viel`. Это не значит «пишите сложно». Объём набирайте деталями: когда, где, сколько, почему. В короткой детали трудно ошибиться, а пункт становится точнее.' },
        {
            type: 'table',
            head: ['Коротко', 'С деталью'],
            rows: [
                ['`Ich komme später.`', '`Ich komme am Montag eine halbe Stunde später, weil ich einen Arzttermin habe.`'],
                ['`Die Heizung ist kaputt.`', '`Die Heizung im Wohnzimmer ist seit Samstag kaputt.`'],
                ['`Ich gebe Ihnen den Schlüssel.`', '`Ich gebe Ihnen den Schlüssel am Freitag um 18 Uhr.`']
            ],
            note: 'Ориентир: обращение, 8–10 предложений и прощание — это примерно 80 слов. Четыре пункта по два предложения, вводная фраза и благодарность — и объём набран.'
        },

        { type: 'h', text: '8. План на 30 минут' },
        {
            type: 'table',
            head: ['Минуты', 'Что делать'],
            rows: [
                ['0–2', 'Прочитать оба задания и выбрать одно.'],
                ['2–5', 'План на черновике: четыре пункта, к каждому вопрос (`Was?`, `Warum?`, `Wann?`, `Wie?`) и 2–3 немецких ключевых слова.'],
                ['5–23', 'Писать письмо на листе ответа: обращение, пункты по порядку, связки, прощание. Если резерв не нужен — до 25-й минуты.'],
                ['23–28', 'Проверка по чек-листу (раздел 9).'],
                ['28–30', 'Резерв: ещё раз прочитать обращение, прощание и начало каждого пункта.']
            ],
            note: 'Пишут от руки, словаря нет, оценивается только лист ответа. Черновик нужен только вам: всё, что должно быть оценено, переносите на лист.'
        },

        { type: 'h', text: '9. Чек-лист проверки за 5 минут' },
        {
            type: 'list',
            items: [
                'Все четыре пункта раскрыты, и у каждого есть деталь?',
                'Есть обращение с запятой и прощание?',
                'В главных предложениях глагол на втором месте (`Deshalb kann ich …`)?',
                'В придаточных с `weil`, `dass`, `wenn`, `ob` глагол в конце?',
                'У существительных верные артикли и падежи (`den Schlüssel`, `mit dem Bus`)?',
                'Существительные, `Sie` и `Ihnen` — с большой буквы, умлауты на месте?',
                'Запятые после обращения и перед `weil`, `dass`, `wenn`, `ob`?'
            ]
        },

        { type: 'h', text: '10. Одна ситуация: ответ A2 и ответ B1' },
        { type: 'p', text: 'Ситуация: вы уезжаете на неделю, соседка, госпожа Линднер, будет поливать ваши цветы. Пункты: `Grund für Ihr Schreiben`, `Bitte um Hilfe`, `Schlüssel`, `Dank`. Сравните два ответа без ошибок: оба называют все пункты, но раскрывает их только второй.' },
        { type: 'ex', de: 'Liebe Frau Lindner, ich fahre am Samstag nach Hamburg. Ich bin eine Woche weg. Können Sie meine Blumen gießen? Ich gebe Ihnen meinen Schlüssel. Vielen Dank! Viele Grüße Olga', ru: 'Ответ A2, около 30 слов. Дорогая госпожа Линднер, в субботу я еду в Гамбург. Меня не будет неделю. Можете полить мои цветы? Я дам вам свой ключ. Большое спасибо! Всего доброго, Ольга' },
        { type: 'ex', de: 'Liebe Frau Lindner, ich schreibe Ihnen, **weil** ich am Samstag für eine Woche zu meiner Familie nach Hamburg fahre. **Deshalb** habe ich eine Bitte: **Könnten** Sie in dieser Zeit meine Blumen gießen? Die Blumen brauchen nicht viel Wasser. Zweimal pro Woche reicht. Den Schlüssel bringe ich Ihnen am Freitagabend vorbei, **wenn** Sie zu Hause sind. **Wenn** ich zurück bin, hole ich ihn wieder ab. Vielen Dank für Ihre Hilfe! Ich bringe Ihnen auch etwas aus Hamburg mit. Viele Grüße Olga', ru: 'Ответ B1, около 80 слов. Дорогая госпожа Линднер, я пишу вам, потому что в субботу на неделю еду к семье в Гамбург. Поэтому у меня просьба: не могли бы вы в это время поливать мои цветы? Им нужно немного воды. Двух раз в неделю хватит. Ключ я занесу вам в пятницу вечером, если вы будете дома. Когда я вернусь, я его заберу. Большое спасибо за помощь! Я привезу вам что-нибудь из Гамбурга. Всего доброго, Ольга' },
        {
            type: 'table',
            head: ['Что', 'A2', 'B1'],
            rows: [
                ['Пункт 1: причина', 'просто сообщение: `ich fahre … nach Hamburg`', '`ich schreibe Ihnen, weil …` + куда и на сколько'],
                ['Пункт 2: просьба', '`Können Sie …?`', '`Deshalb habe ich eine Bitte: Könnten Sie …?` + сколько поливать'],
                ['Пункт 3: ключ', '`Ich gebe Ihnen meinen Schlüssel.`', 'когда принесёте и когда заберёте: `am Freitagabend`, `wenn …`'],
                ['Пункт 4: благодарность', '`Vielen Dank!`', '`Vielen Dank für Ihre Hilfe!` + маленький подарок'],
                ['Связность', 'отдельные короткие фразы', '`weil`, `deshalb`, два `wenn`'],
                ['Объём', 'около 30 слов', 'около 80 слов']
            ],
            note: 'Слова почти те же. B1 получается не из редкой лексики, а из детали к каждому пункту, связок и вежливой формы `Könnten Sie …`.'
        }
    ],

    exercises: [
        // ---- выбор
        { id: 'l02-01', type: 'choice', q: 'Какое предложение раскрывает пункт «Terminvorschlag»?',
          options: ['Wir können uns treffen.', 'Haben Sie am Donnerstag um 10 Uhr Zeit?', 'Ein Termin ist wichtig.'], answer: 1,
          explain: 'Предложение отвечает на вопрос `Wann?`: день и время названы. Остальные варианты только упоминают встречу, но ничего не предлагают.', tag: 'leitpunkt' },
        { id: 'l02-02', type: 'choice', q: 'Вы уезжаете, кто-то должен кормить вашу кошку. Какое предложение раскрывает пункт «Bitte um Hilfe»?',
          options: ['Ich habe eine Bitte.', 'Ich brauche Hilfe.', 'Könnten Sie am Wochenende meine Katze füttern?'], answer: 2,
          explain: 'Пункт раскрыт, когда понятно, о чём именно просят и когда. `Ich habe eine Bitte` и `Ich brauche Hilfe` только называют пункт — после них нужна сама просьба.', tag: 'leitpunkt' },
        { id: 'l02-03', type: 'choice', q: 'Какой пункт раскрывает это предложение?',
          text: 'Die Heizung in meinem Zimmer bleibt seit Freitag kalt.',
          options: ['Beschwerde / Problem', 'Dank', 'Terminvorschlag', 'Entschuldigung'], answer: 0,
          explain: 'Предложение говорит, что не так (`Die Heizung … bleibt kalt`) и с какого времени (`seit Freitag`) — это пункт о проблеме.', tag: 'leitpunkt' },
        { id: 'l02-04', type: 'choice', q: 'Какой пункт раскрывает это предложение?',
          text: 'Leider kann ich am Samstag nicht zu Ihrer Feier kommen, weil ich arbeiten muss.',
          options: ['Absage', 'Zusage', 'Bitte', 'Dank'], answer: 0,
          explain: '`Leider kann ich … nicht kommen` — отказ, а придаточное с `weil` сразу называет причину. Так пункт `Absage` раскрыт полностью.', tag: 'leitpunkt' },
        { id: 'l02-05', type: 'choice', q: 'Вы пишете хозяину квартиры, господину Брандту. Какие обращение и прощание подходят?',
          options: ['Sehr geehrter Herr Brandt, … Mit freundlichen Grüßen', 'Lieber Brandt, … Tschüss', 'Hi Herr Brandt, … Ciao'], answer: 0,
          explain: 'Хозяину квартиры пишут формально, на `Sie`: `Sehr geehrter Herr …,` и `Mit freundlichen Grüßen`. `Tschüss`, `Hi` и `Ciao` — для друзей, а `Lieber` без `Herr` — только для близких.', tag: 'register' },
        { id: 'l02-06', type: 'choice', q: 'Пункт «Problem im Haus». Какое предложение раскрывает его, а не только называет?',
          options: ['Ich habe ein Problem im Haus.', 'Das Licht im Treppenhaus funktioniert seit einer Woche nicht.', 'Im Haus gibt es ein Problem.'], answer: 1,
          explain: 'Только второе предложение говорит, что именно не работает и с какого времени. Два других — «пустые»: проблема названа, но не описана.', tag: 'leitpunkt' },
        { id: 'l02-07', type: 'choice', q: 'Вы не помните слово «Trockner» (сушильная машина). Как лучше написать?',
          options: ['Das Gerät, mit dem man die Wäsche trocknet, ist kaputt.', 'Der Trockenmaschine ist kaputt.', 'Die Wäsche-trocken-Maschine kaputt.'], answer: 0,
          explain: 'Если слова нет, опишите, для чего вещь: `das Gerät, mit dem man …`. В двух других вариантах слово собрано из кусков, а ещё неверен артикль или пропущен глагол.', tag: 'wortschatz' },
        { id: 'l02-08', type: 'choice', q: 'Какое слово подходит на место пропуска?',
          text: 'Könnten Sie mir bitte die Hausaufgaben schicken? ___ habe ich eine Frage zum Test.',
          options: ['Außerdem', 'Aber', 'Deshalb'], answer: 0,
          explain: '`Außerdem` вводит следующий пункт: «кроме того, у меня вопрос». `Deshalb` не подходит по смыслу (вопрос — не следствие просьбы), а после `Aber` порядок был бы `Aber ich habe …`.', tag: 'konnektor' },
        { id: 'l02-09', type: 'choice', q: 'Какой вариант лучше для экзамена?',
          options: ['Ich kann am Montag nicht kommen. Ich habe einen Arzttermin.', 'Ich kann nicht kommen am Montag, weil ich habe einen Arzttermin.'], answer: 0,
          explain: 'Простое и правильное лучше сложного с ошибками. Во втором варианте две ошибки: `kommen` должно стоять в конце, а после `weil` глагол `habe` уходит в конец придаточного.', tag: 'nebensatz' },
        { id: 'l02-10', type: 'choice', q: 'Что делать в первые 2 минуты письменной части?',
          options: ['Прочитать оба задания и выбрать то, где вы знаете слова для всех четырёх пунктов', 'Сразу писать задание A, чтобы не терять время', 'Написать всё письмо на черновике'], answer: 0,
          explain: 'Выбор задания решает, сможете ли вы раскрыть все четыре пункта. Переписывать письмо с черновика целиком некогда, а оценивается только лист ответа.', tag: 'aufbau' },

        // ---- пропуски
        { id: 'l02-11', type: 'gap', q: 'Вставьте союз.',
          text: 'Ich schreibe Ihnen, ___ ich nächste Woche nicht in den Kurs kommen kann.', hint: 'союз «потому что»',
          answer: [['weil', 'da']],
          explain: 'Формула для пункта «Grund für Ihr Schreiben»: `Ich schreibe Ihnen, weil …`. Глагол `kann` стоит в конце придаточного.', tag: 'nebensatz' },
        { id: 'l02-12', type: 'gap', q: 'Вставьте предлог.',
          text: 'Vielen Dank ___ Ihre schnelle Antwort!', hint: 'предлог «за»',
          answer: ['für'],
          explain: 'Благодарят «за что-то» с предлогом `für` и винительным падежом: `Vielen Dank für Ihre Antwort`.', tag: 'verbprep' },
        { id: 'l02-13', type: 'gap', q: 'Вставьте союз.',
          text: 'Es tut mir leid, ___ ich gestern nicht angerufen habe.', hint: 'союз «что»',
          answer: ['dass'],
          explain: 'Заготовка для пункта «Entschuldigung»: `Es tut mir leid, dass …`. После `dass` глагол `habe` уходит в конец.', tag: 'nebensatz' },
        { id: 'l02-14', type: 'gap', q: 'Вставьте глагол в вежливой форме.',
          text: '___ Sie mir bitte die Formulare schicken?', hint: 'können, вежливая форма',
          answer: ['Könnten'],
          explain: '`Könnten Sie …?` — вежливая просьба (Konjunktiv II). Простое `Können Sie …?` грамматически возможно, но здесь нужна именно вежливая форма: она звучит мягче и ценится в письме.', tag: 'konj2' },
        { id: 'l02-15', type: 'gap', q: 'Вставьте союз.',
          text: 'Ich möchte gern wissen, ___ im Kurs noch Plätze frei sind.', hint: 'союз «ли»',
          answer: ['ob'],
          explain: 'Вопрос «да или нет» внутри предложения вводится союзом `ob`. Глагол `sind` стоит в конце.', tag: 'nebensatz' },
        { id: 'l02-16', type: 'gap', q: 'Вставьте связку.',
          text: 'Ich bin seit gestern krank. ___ kann ich morgen nicht zur Arbeit kommen.', hint: 'поэтому',
          answer: [['Deshalb', 'Deswegen', 'Darum', 'Daher', 'Also']],
          explain: 'Связка «поэтому» соединяет причину и следствие. Она стоит на первом месте, поэтому глагол `kann` идёт сразу за ней.', tag: 'konnektor' },
        { id: 'l02-17', type: 'gap', q: 'Вставьте местоимение.',
          text: 'Ich danke ___ für Ihre Hilfe.', hint: 'вам (вежливо)',
          answer: ['Ihnen'],
          explain: '`danken` требует дательного падежа: `Ich danke Ihnen`. По-русски «благодарю вас» — винительный, отсюда частая ошибка `Ich danke Sie`.', tag: 'kasus' },
        { id: 'l02-18', type: 'gap', q: 'Вставьте предлог.',
          text: 'Die Waschmaschine im Keller ist schon ___ drei Tagen kaputt.', hint: 'уже три дня (и до сих пор)',
          answer: ['seit'],
          explain: 'Что началось в прошлом и продолжается сейчас — `seit` с дательным: `seit drei Tagen`. Такая деталь делает пункт о проблеме точным.', tag: 'zeit' },
        { id: 'l02-19', type: 'gap', q: 'Вставьте слово.',
          text: '___ Schluss möchte ich mich noch einmal bei Ihnen bedanken.', hint: 'в конце: zu + артикль',
          answer: ['Zum'],
          explain: '`Zum Schluss` — устойчивое «в конце», связка для последнего пункта. Глагол `möchte` идёт сразу за ней.', tag: 'konnektor' },

        // ---- составить из слов
        { id: 'l02-20', type: 'build', q: 'Составьте предложение для пункта «Grund für Ihr Schreiben».',
          ru: 'Я пишу вам, потому что моя дочь больна.',
          answer: ['Ich schreibe Ihnen, weil meine Tochter krank ist.'],
          explain: 'Формула `Ich schreibe Ihnen, weil …` сразу называет причину письма. В придаточном глагол `ist` стоит последним.', tag: 'nebensatz' },
        { id: 'l02-21', type: 'build', q: 'Составьте вежливую просьбу.',
          ru: 'Не могли бы вы в среду полить мои цветы?',
          answer: ['Könnten Sie am Mittwoch meine Blumen gießen?', 'Könnten Sie meine Blumen am Mittwoch gießen?'],
          explain: '`Könnten` стоит первым, `gießen` — в конце. День (`am Mittwoch`) — деталь, которая делает просьбу точной.', tag: 'konj2' },
        { id: 'l02-22', type: 'build', q: 'Вместо «пустого» `Ich habe ein Problem.` скажите конкретно. Составьте предложение.',
          ru: 'Отопление не работает с понедельника.',
          answer: ['Die Heizung funktioniert seit Montag nicht.', 'Seit Montag funktioniert die Heizung nicht.'],
          explain: 'Названо, что не так и с какого времени. Глагол `funktioniert` — на втором месте, `nicht` — в конце, потому что отрицается весь глагол.', tag: 'verb2' },
        { id: 'l02-23', type: 'build', q: 'Составьте предложение для пункта «Terminvorschlag».',
          ru: 'Можем ли мы встретиться в пятницу в 10 часов?',
          answer: ['Können wir uns am Freitag um 10 Uhr treffen?', 'Können wir uns um 10 Uhr am Freitag treffen?'],
          explain: 'В вопросе «да или нет» глагол `Können` стоит первым, `treffen` — в конце, а `uns` — сразу после `wir`.', tag: 'verb2' },
        { id: 'l02-24', type: 'build', q: 'Составьте предложение, которое начинает новый пункт.',
          ru: 'Кроме того, у меня есть вопрос о договоре.',
          answer: ['Außerdem habe ich eine Frage zum Vertrag.', 'Ich habe außerdem eine Frage zum Vertrag.', 'Außerdem habe ich zum Vertrag eine Frage.', 'Zum Vertrag habe ich außerdem eine Frage.', 'Eine Frage zum Vertrag habe ich außerdem.'],
          explain: 'После `Außerdem` глагол `habe` идёт сразу, а `ich` — за ним. Если начать с `Ich`, связка встаёт после глагола.', tag: 'verb2' },

        // ---- исправить ошибку
        { id: 'l02-25', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich schreibe Ihnen, weil ich habe ein Problem mit der Heizung.',
          answer: ['Ich schreibe Ihnen, weil ich ein Problem mit der Heizung habe.'],
          explain: 'После `weil` спрягаемый глагол уходит в конец придаточного: `weil ich … habe`.', tag: 'nebensatz' },
        { id: 'l02-26', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Außerdem ich möchte Sie etwas fragen.',
          answer: ['Außerdem möchte ich Sie etwas fragen.', 'Ich möchte Sie außerdem etwas fragen.'],
          explain: '`Außerdem` занимает первое место, поэтому глагол `möchte` идёт сразу за ним, а `ich` — после глагола.', tag: 'verb2' },
        { id: 'l02-27', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Können Sie mir sagen, wo ist das Büro?',
          answer: ['Können Sie mir sagen, wo das Büro ist?'],
          explain: 'Вопрос внутри предложения — придаточное: после `wo` глагол `ist` стоит в конце.', tag: 'nebensatz' },
        { id: 'l02-28', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Sehr geehrte Frau Kessler, Ich schreibe Ihnen wegen der Wohnung.',
          answer: ['Sehr geehrte Frau Kessler, ich schreibe Ihnen wegen der Wohnung.'],
          explain: 'После запятой в обращении текст продолжается со строчной буквы: `ich schreibe …`. С большой пишутся только существительные и `Sie`.', tag: 'schreibung' },
        { id: 'l02-29', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich bringe Ihnen den Schlüssel vorbei, wenn Sie sind zu Hause.',
          answer: ['Ich bringe Ihnen den Schlüssel vorbei, wenn Sie zu Hause sind.'],
          explain: 'После `wenn` спрягаемый глагол `sind` уходит в конец придаточного.', tag: 'nebensatz' },

        // ---- соединить
        { id: 'l02-30', type: 'join', q: 'Соедините союзом weil.',
          parts: ['Ich kann nicht zum Termin kommen.', 'Mein Auto ist kaputt.'], connector: 'weil',
          answer: ['Ich kann nicht zum Termin kommen, weil mein Auto kaputt ist.', 'Weil mein Auto kaputt ist, kann ich nicht zum Termin kommen.'],
          explain: 'После `weil` глагол `ist` уходит в конец. Если придаточное стоит первым, главное начинается с глагола: `…, kann ich …`.', tag: 'nebensatz' },
        { id: 'l02-31', type: 'join', q: 'Соедините связкой deshalb.',
          parts: ['Mein Sohn hat Fieber.', 'Er bleibt heute zu Hause.'], connector: 'deshalb',
          answer: ['Mein Sohn hat Fieber, deshalb bleibt er heute zu Hause.', 'Mein Sohn hat Fieber. Deshalb bleibt er heute zu Hause.', 'Mein Sohn hat Fieber, er bleibt deshalb heute zu Hause.', 'Mein Sohn hat Fieber. Er bleibt deshalb heute zu Hause.'],
          explain: '`deshalb` — не союз, а связка: она занимает место в предложении. Если она стоит первой, за ней сразу глагол: `deshalb bleibt er`.', tag: 'konnektor' },
        { id: 'l02-32', type: 'join', q: 'Соедините связкой aber.',
          parts: ['Ich komme gern zu Ihrer Feier.', 'Ich kann erst um 20 Uhr da sein.'], connector: 'aber',
          answer: ['Ich komme gern zu Ihrer Feier, aber ich kann erst um 20 Uhr da sein.', 'Ich komme gern zu Ihrer Feier. Aber ich kann erst um 20 Uhr da sein.', 'Ich komme gern zu Ihrer Feier, ich kann aber erst um 20 Uhr da sein.', 'Ich komme gern zu Ihrer Feier. Ich kann aber erst um 20 Uhr da sein.', 'Ich komme gern zu Ihrer Feier, kann aber erst um 20 Uhr da sein.','Ich komme gern zu Ihrer Feier, aber kann erst um 20 Uhr da sein.'],
          explain: '`aber` места не занимает: после него обычный порядок, `aber ich kann …`. Ошибка `aber kann ich` — частая. Так `Zusage` сразу получает деталь.', tag: 'konnektor' },
        { id: 'l02-33', type: 'join', q: 'Соедините союзом wenn.',
          parts: ['Ich hole den Schlüssel wieder ab.', 'Ich bin zurück.'], connector: 'wenn',
          answer: ['Ich hole den Schlüssel wieder ab, wenn ich zurück bin.', 'Wenn ich zurück bin, hole ich den Schlüssel wieder ab.'],
          explain: 'После `wenn` глагол `bin` в конце. Если придаточное стоит первым, главное начинается с глагола `hole`, а приставка `ab` остаётся в конце.', tag: 'nebensatz' },

        // ---- порядок
        { id: 'l02-34', type: 'order', q: 'Расставьте шаги 30 минут по порядку.',
          items: ['Прочитать оба задания и выбрать одно', 'Выписать на черновик четыре пункта, вопросы к ним и ключевые слова', 'Написать письмо на листе ответа', 'Проверить письмо по чек-листу', 'Резерв: ещё раз прочитать обращение, прощание и начало пунктов'],
          explain: '2 минуты на выбор, 3 — на план, 18–20 — на письмо, 5 — на проверку, остаток — резерв. Без плана легко забыть пункт, без проверки — оставить ошибку.', tag: 'aufbau' },
        { id: 'l02-35', type: 'order', q: 'Расставьте части письма подруге по порядку.',
          items: ['Liebe Sabine,', 'vielen Dank für deine Einladung zum Geburtstag!', 'Leider kann ich am Samstag nicht kommen, weil meine Mutter zu Besuch ist.', 'Aber ich möchte dich gern nächste Woche zum Kaffee einladen.', 'Hast du am Dienstag Zeit?', 'Viele Grüße'],
          explain: 'После обращения идёт строчная буква и благодарность, затем отказ с причиной, предложение встретиться (`Aber …`) и вопрос о дне. Прощание — последнее.', tag: 'aufbau' },
        { id: 'l02-36', type: 'order', q: 'Расставьте части жалобы по порядку.',
          items: ['Sehr geehrte Damen und Herren,', 'ich schreibe Ihnen, weil die Heizung in meiner Wohnung nicht funktioniert.', 'Seit Montag sind es im Wohnzimmer nur 15 Grad.', 'Deshalb bitte ich Sie, schnell einen Techniker zu schicken.', 'Vielen Dank für Ihre Hilfe.', 'Mit freundlichen Grüßen'],
          explain: 'Причина письма, деталь проблемы, просьба как следствие (`Deshalb …`), благодарность, прощание. Строчная `ich` показывает, что эта часть идёт сразу после обращения.', tag: 'aufbau' }
    ],

    apply: {
        task: 'Вы ходите на курс плавания, но в четверг не можете прийти. Напишите руководителю курса, господину Хаберу. Пункты: Grund für Ihr Schreiben, Entschuldigung, Frage zum nächsten Termin, Dank. Каждый пункт — одно-два предложения с деталью.',
        checks: [
            'Все четыре пункта раскрыты, у каждого есть деталь (когда, почему, что именно)',
            'Есть обращение с запятой и прощание',
            'Минимум две связки (`außerdem`, `deshalb`, `dann`, `aber` …), после них глагол стоит верно',
            'В придаточных с `weil`, `dass`, `ob` глагол стоит в конце',
            'Есть вежливая форма: `Könnten Sie …` или `Ich möchte gern wissen, …`'
        ],
        model: 'Sehr geehrter Herr Haber, ich schreibe Ihnen, weil ich am Donnerstag leider nicht zum Schwimmkurs kommen kann. Ich muss an diesem Tag bis 19 Uhr arbeiten. Es tut mir leid, dass ich diese Woche fehle. Außerdem habe ich eine Frage: Könnten Sie mir sagen, ob der Kurs nächste Woche wie immer um 18 Uhr beginnt? Dann kann ich rechtzeitig mit meinem Chef sprechen. Vielen Dank für Ihre Antwort! Mit freundlichen Grüßen Pavel Orlov',
        modelRu: 'Уважаемый господин Хабер, я пишу вам, потому что в четверг, к сожалению, не смогу прийти на курс плавания. В этот день я должен работать до 19 часов. Мне жаль, что на этой неделе я пропускаю. Кроме того, у меня вопрос: не могли бы вы сказать, начинается ли курс на следующей неделе, как всегда, в 18 часов? Тогда я смогу вовремя поговорить с начальником. Большое спасибо за ответ! С уважением, Павел Орлов'
    }
};
