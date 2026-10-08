/**
 * Модуль 11. Орфография и пунктуация.
 *
 * Заглавные буквы и вежливое Sie, умлауты и ß, das и dass, запятые, даты и
 * суммы, сорок слов из писем, в которых чаще всего ошибаются. Только
 * однозначные случаи: там, где словари допускают два написания, оба верны.
 */

export default {
    id: 'g11',
    order: 11,
    title: 'Орфография и пунктуация',
    short: 'Орфография и запятые',
    goal: 'Вы пишете с заглавной все существительные и вежливое `Sie`, различаете `das` и `dass`, ставите `ä`, `ö`, `ü`, `ß` и запятые там, где они нужны, и без ошибок пишете слова, которые чаще всего встречаются в письмах.',
    why: 'Орфография входит в критерий III (Korrektheit) вместе с грамматикой. Письмо пишут от руки и без словаря, поэтому каждое неверно написанное слово сразу видно. Здесь собраны ошибки, которые русскоговорящие делают особенно часто: строчные существительные, `ihnen` вместо `Ihnen`, `das` вместо `dass`, пропущенные умлауты и лишние запятые.',

    theory: [
        { type: 'h', text: '1. Все существительные — с заглавной' },
        { type: 'p', text: 'В русском с заглавной пишут начало предложения и имена. В немецком — ещё и **каждое существительное**: `der Termin`, `die Wohnung`, `die Hausaufgaben`. Проверка простая: если перед словом можно поставить `der`, `die`, `das` или `ein`, это существительное.' },
        {
            type: 'exs',
            items: [
                { de: 'Ich habe morgen einen **Termin** beim **Arzt**.', ru: 'Завтра у меня приём у врача.' },
                { de: 'Meine **Tochter** hat seit gestern **Fieber**.', ru: 'У моей дочери со вчерашнего дня температура.' },
                { de: 'Die **Heizung** in der **Küche** ist kaputt.', ru: 'Отопление на кухне сломано.' },
                { de: 'Vielen **Dank** für Ihre **Hilfe**.', ru: 'Большое спасибо за вашу помощь.' }
            ]
        },
        { type: 'trap', wrong: 'Ich habe morgen einen termin beim arzt.', right: 'Ich habe morgen einen Termin beim Arzt.', why: 'Рука пишет по-русски: «приём у врача» — со строчной. Но перед `Termin` стоит `einen`, а `beim` — это `bei dem`: значит, оба слова — существительные.' },

        { type: 'h', text: '2. Время суток, zu Hause и существительные из других слов' },
        {
            type: 'table',
            head: ['Со строчной', 'С заглавной'],
            rows: [
                ['`wir essen` (глагол)', '`das Essen`, `beim Lernen`, `zum Schreiben` (есть артикль)'],
                ['`morgen` (завтра), `heute`, `gestern`', '`heute Abend`, `gestern Morgen`, `morgen Nachmittag`'],
                ['`montags`, `abends` (по понедельникам, по вечерам)', '`am Montag`, `am Abend`, `am Montagmorgen`'],
                ['`gut` (прилагательное)', '`alles Gute`'],
                ['русские «дома», «домой» — наречия', '`zu Hause`, `nach Hause`']
            ],
            note: '`morgen` со строчной — «завтра», `der Morgen` с заглавной — «утро». После `heute`, `gestern`, `morgen` время суток — существительное: `heute Abend`.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Ich rufe Sie **heute Abend** an.', ru: 'Я позвоню вам сегодня вечером.' },
                { de: 'Ich habe Sie **gestern Morgen** angerufen.', ru: 'Я звонил вам вчера утром.' },
                { de: 'Ich habe **montags** und **mittwochs** Unterricht.', ru: 'По понедельникам и средам у меня занятия.' },
                { de: 'Beim **Lernen** hilft mir meine Nachbarin.', ru: 'С учёбой мне помогает соседка.' },
                { de: 'Mein Sohn ist krank und bleibt **zu Hause**.', ru: 'Мой сын болен и остаётся дома.' },
                { de: 'Ich wünsche Ihnen **alles Gute**.', ru: 'Желаю вам всего хорошего.' }
            ]
        },
        { type: 'trap', wrong: 'Ich rufe Sie heute abend an.', right: 'Ich rufe Sie heute Abend an.', why: 'После `heute`, `gestern`, `morgen` слова `Morgen`, `Mittag`, `Abend` — существительные. Строчное `heute abend` — написание до реформы орфографии, сейчас это ошибка.' },
        { type: 'trap', wrong: 'Ich bin am Abend zu hause.', right: 'Ich bin am Abend zu Hause.', why: '`Hause` — форма существительного `Haus`, поэтому с заглавной: `zu Hause`, `nach Hause`. Русские «дома» и «домой» — наречия, отсюда строчная по привычке. Слитное `zuhause` тоже допустимо, а `zu hause` — нет.' },

        { type: 'h', text: '3. Sie, Ihnen, Ihr — и начало письма' },
        {
            type: 'table',
            head: ['Вопрос', 'Вежливо: «вы»', 'Со строчной: «она», «они»'],
            rows: [
                ['кто?', '`Sie`', '`sie` (она, они)'],
                ['кого?', '`Sie`', '`sie` (её, их)'],
                ['кому?', '`Ihnen`', '`ihr` (ей), `ihnen` (им)'],
                ['чей?', '`Ihr`, `Ihre`, `Ihren` …', '`ihr`, `ihre` (её, их)']
            ],
            note: 'Вежливое «вы» во всех формах пишется с заглавной в любом месте предложения. А `du`, `dich`, `dir`, `dein` в письме можно писать и со строчной, и с заглавной — оба варианта правильны.'
        },
        { type: 'trap', wrong: 'Ich danke ihnen für ihre Hilfe.', right: 'Ich danke Ihnen für Ihre Hilfe.', why: 'Со строчной `ihnen` значит «им», `ihre` — «их»: получается «Благодарю их за их помощь». В письме на «Sie» все формы — с заглавной.' },
        { type: 'rule', text: 'После обращения ставится запятая, и письмо продолжается со **строчной** буквы: `Sehr geehrte Frau Schulz,` → `ich schreibe Ihnen …`. С заглавной — только если первое слово существительное или `Sie`, `Ihr`.' },
        { type: 'trap', wrong: 'Sehr geehrte Frau Schulz, Ich schreibe Ihnen, weil …', right: 'Sehr geehrte Frau Schulz, ich schreibe Ihnen, weil …', why: 'По-русски после «Уважаемая госпожа Шульц!» начинают с заглавной. По-немецки обращение и первое предложение разделяет запятая, поэтому `ich` — со строчной.' },

        { type: 'h', text: '4. Умлауты и ß' },
        { type: 'p', text: 'Точки над `ä`, `ö`, `ü` меняют звук, а иногда и слово: `schon` (уже) — `schön` (красиво), `zahlen` (платить) — `zählen` (считать), `mochte` (любил) — `möchte` (хотел бы). Пропущенный умлаут — ошибка в слове.' },
        {
            type: 'table',
            head: ['ß: после долгого гласного и после ei, au, eu', 'ss: после краткого гласного'],
            rows: [
                ['`Straße`, `Grüße`, `groß`', '`muss`, `müssen`, `dass`'],
                ['`heißen`, `weiß`, `draußen`', '`Adresse`, `Schlüssel`, `essen`'],
                ['`Fuß`, `außerdem`, `schließen`', '`lassen`, `vergessen`, `besser`']
            ],
            note: 'Одно слово меняет написание вместе с гласным: `wissen` — `ich weiß` — `ich wusste`. В Швейцарии `ß` не пишут вовсе (`Strasse`), но DTZ сдают в Германии — пишите `ß`. Тренажёр примет `ss`, но напомнит об этом.'
        },
        { type: 'trap', wrong: 'Ich muß morgen arbeiten.', right: 'Ich muss morgen arbeiten.', why: 'В `muss` гласный краткий — значит, `ss`. `muß` и `daß` — написание до реформы 1996 года: в старых книгах оно встречается, а в письме сегодня это ошибка.' },

        { type: 'h', text: '5. das или dass' },
        { type: 'rule', text: '`dass` — союз «что», после него глагол уходит в конец. `das` — артикль (`das Formular`) или местоимение «это», «который». Проверка: если слово можно заменить на `dieses` или `welches`, пишите `das`, если нельзя — `dass`.' },
        {
            type: 'exs',
            items: [
                { de: 'Ich hoffe, **dass** Sie bald antworten.', ru: 'Надеюсь, что вы скоро ответите.' },
                { de: '**Das** Formular habe ich schon ausgefüllt.', ru: 'Бланк я уже заполнил.' },
                { de: 'Wo ist das Formular, **das** Sie mir geschickt haben?', ru: 'Где бланк, который вы мне прислали?' },
                { de: 'Ich weiß, **dass** **das** nicht einfach ist.', ru: 'Я знаю, что это непросто.' }
            ]
        },
        { type: 'trap', wrong: 'Es tut mir leid, das ich nicht kommen kann.', right: 'Es tut mir leid, dass ich nicht kommen kann.', why: 'На слух `das` и `dass` не различаются, поэтому их путают. Здесь это союз «что»: глагол `kann` ушёл в конец, а заменить слово на `dieses` нельзя.' },

        { type: 'h', text: '6. Двойные согласные, ie и ei' },
        {
            type: 'table',
            head: ['Краткий гласный → двойная согласная', 'Долгий гласный → одна согласная'],
            rows: [
                ['`kommen`, `Zimmer`, `Nummer`', '`Termin`, `Name`, `Monat`'],
                ['`bitte`, `treffen`, `Mittwoch`', '`Wohnung`, `Uhr`, `Schule`'],
                ['`wann`, `dann`, `kann`', '`Brief`, `wir`, `Tag`']
            ],
            note: 'Это тенденция, а не закон. Короткие служебные слова пишутся с одной согласной, хотя гласный в них краткий: `mit`, `bis`, `in`, `um`, `das`, `man` — их просто запомните.'
        },
        { type: 'p', text: 'Сочетание `ie` читается как долгое «и», `ei` — как «ай». Перепутанные, они дают другое слово: `leider` (к сожалению) — `Lieder` (песни), `das Leid` (горе) — `das Lied` (песня). В `Beispiel` есть оба: `Bei-spiel`.' },
        { type: 'trap', wrong: 'Ich kann leiter nicht kommen.', right: 'Ich kann leider nicht kommen.', why: '`leider` («к сожалению») пишется с `d`. `der Leiter` — совсем другое слово: «руководитель», как в `Kursleiter`.' },
        { type: 'trap', wrong: 'Wenn beginnt der Kurs?', right: 'Wann beginnt der Kurs?', why: '`wann` — вопросительное слово «когда?»: в прямом вопросе и в косвенном (`Ich weiß nicht, wann …`). `wenn` — союз «если» или «всякий раз, когда»: `Wenn ich Zeit habe, …`. А слова `wan` нет: после краткого `a` — два `n`.' },

        { type: 'h', text: '7. Запятые' },
        { type: 'p', text: 'Многие правила совпадают с русскими: перед «что», «потому что», «если», «который» запятая стоит в обоих языках. Главное отличие — в немецком **нет** запятой после вводных слов: `Leider`, `Natürlich`, `Außerdem` в начале — просто первое место.' },
        {
            type: 'table',
            head: ['Где ставится', 'Пример'],
            rows: [
                ['перед придаточным: `weil`, `dass`, `wenn`, `ob`, `obwohl`, `damit`', 'Ich weiß nicht**,** ob ich kommen kann.'],
                ['после придаточного, если оно впереди', 'Wenn ich Zeit habe**,** komme ich vorbei.'],
                ['придаточное в середине — с двух сторон', 'Der Kurs**,** der am Montag beginnt**,** ist voll.'],
                ['перед `aber`, `sondern`, `denn`', 'Ich möchte kommen**,** aber ich habe keine Zeit.'],
                ['в перечислении, но не перед `und`, `oder`', 'Ich brauche einen Pass**,** ein Foto und das Formular.'],
                ['zu-Infinitiv с `um`, `ohne`, `statt`, после существительного и после `es`', 'Ich lerne viel**,** um die Prüfung zu bestehen.'],
                ['после обращения в письме', 'Sehr geehrte Frau Schulz**,**']
            ],
            note: 'Перед `und` между двумя целыми предложениями запятая не обязательна. Перед группой с `zu` после `vergessen`, `bitten` и подобных — тоже, но её рекомендуют ставить (модуль 10).'
        },
        { type: 'trap', wrong: 'Leider, kann ich nicht kommen.', right: 'Leider kann ich nicht kommen.', why: 'По-русски «к сожалению» выделяется запятой. По-немецки `Leider` — просто первое место в предложении, запятой после него нет. То же с `Natürlich`, `Außerdem`, `Deshalb`.' },
        { type: 'trap', wrong: 'Ich glaube dass der Termin am Freitag ist.', right: 'Ich glaube, dass der Termin am Freitag ist.', why: 'Перед `dass`, как и перед русским «что», запятая обязательна всегда.' },
        { type: 'trap', wrong: 'Ich spreche Russisch, Ukrainisch, und ein bisschen Deutsch.', right: 'Ich spreche Russisch, Ukrainisch und ein bisschen Deutsch.', why: 'В перечислении перед `und` и `oder` запятой нет — как в русском перед «и».' },

        { type: 'h', text: '8. Даты, время, деньги, телефон' },
        {
            type: 'table',
            head: ['Что', 'Как пишут', 'Пример'],
            rows: [
                ['дата цифрами', 'день, месяц, год через точку', '`12.10.2026`'],
                ['дата с месяцем', 'точка после числа: число порядковое', '`am 5. Mai`, `am 12. Oktober 2026`'],
                ['время', '`Uhr` после числа, минуты через точку или двоеточие', '`um 10 Uhr`, `um 10.30 Uhr`, `um 10:30 Uhr`'],
                ['деньги', 'центы после запятой, валюта после суммы', '`25,50 Euro`, `25,50 €`'],
                ['телефон', 'код города отдельно, дальше цифры', '`0123 456789`']
            ],
            note: 'Небольшие числа в обычном тексте лучше писать словами: `zwei Kinder`, `seit drei Wochen`. Это рекомендация, а не правило: `seit 3 Wochen` ошибкой не будет.'
        },
        { type: 'trap', wrong: 'Der Termin ist am 5 Mai.', right: 'Der Termin ist am 5. Mai.', why: 'По-русски «5 мая» пишут без точки. По-немецки число в дате порядковое (`am fünften Mai`), и точка после цифры это показывает.' },

        { type: 'h', text: '9. Сорок слов, в которых часто ошибаются' },
        {
            type: 'table',
            head: ['Слово', 'Перевод', 'На что смотреть'],
            rows: [
                ['`die Entschuldigung`', 'извинение', '`Ent-schuldig-ung`'],
                ['`das Verständnis`', 'понимание', '`ä`, на конце одна `s`'],
                ['`die Bescheinigung`', 'справка', '`ei`, на конце `-igung`'],
                ['`die Rechnung`', 'счёт', '`ch` перед `n`'],
                ['`der Vermieter`', 'арендодатель', '`V` в начале, `ie`'],
                ['`die Hausaufgaben`', 'домашнее задание', 'одно слово, с заглавной'],
                ['`die Gesundheit`', 'здоровье', '`d` перед `-heit`'],
                ['`die Kündigung`', 'расторжение договора', '`ü`, `-digung`'],
                ['`die Mitteilung`', 'сообщение', '`tt`, `ei`'],
                ['`der Vertrag`', 'договор', '`V`, а не `F`'],
                ['`die Zeitung`', 'газета', '`ei`'],
                ['`das Wochenende`', 'выходные', 'одно слово: `Wochen` + `Ende`'],
                ['`die Adresse`', 'адрес', 'одна `d`, два `s` — не как в английском'],
                ['`die Wohnung`', 'квартира', '`h` после `o`'],
                ['`die Prüfung`', 'экзамен', '`ü`'],
                ['`der Schlüssel`', 'ключ', '`ü`, `ss`'],
                ['`die Heizung`', 'отопление', '`ei`, `z`'],
                ['`die Erkältung`', 'простуда', '`ä`'],
                ['`die Telefonnummer`', 'номер телефона', 'одно слово, `f`, `mm`'],
                ['`der Arzt`', 'врач', '`rzt`, без лишней `t`'],
                ['`Sehr geehrte …`', 'уважаемая …', '`ee` и `h`: от `ehren`'],
                ['`Mit freundlichen Grüßen`', 'с уважением', '`eu`, `ü`, `ß`'],
                ['`Auf Wiedersehen`', 'до свидания', '`ie`: `wieder` — «снова»'],
                ['`vielleicht`', 'может быть', '`ie`, `ll`, `ei`'],
                ['`leider`', 'к сожалению', '`ei`, `d`'],
                ['`ziemlich`', 'довольно', '`ie`, без `h`'],
                ['`endlich`', 'наконец', '`d`: от `Ende`'],
                ['`bezahlen`', 'платить', '`h` после `a`'],
                ['`wieder`', 'снова', '`ie`; `wider` — «против»'],
                ['`nämlich`', 'а именно, ведь', '`ä`, одна `m`'],
                ['`natürlich`', 'конечно', '`ü`'],
                ['`pünktlich`', 'вовремя', '`ü`, `kt`'],
                ['`ungefähr`', 'примерно', '`ä`, `h`'],
                ['`zurück`', 'назад', '`ü`, `ck`'],
                ['`schicken`', 'отправлять', '`ck`'],
                ['`kaputt`', 'сломан', '`tt`'],
                ['`dass`', 'что (союз)', '`ss`; `das` — артикль'],
                ['`wann`', 'когда?', '`nn`; `wenn` — «если»'],
                ['`bitte`', 'пожалуйста', '`tt`'],
                ['`es tut mir leid`', 'мне жаль', '`leid` — со строчной']
            ]
        },
        { type: 'tip', text: 'Перечитывайте письмо дважды: один раз на грамматику, второй — только на заглавные буквы, `Sie` и `Ihnen`, `dass` и запятые. За один проход глаз ловит что-то одно.' }
    ],

    exercises: [
        // ---- выбор
        { id: 'g11-01', type: 'choice', q: 'Какое предложение написано правильно?',
          options: ['Ich habe morgen einen Termin beim Arzt.', 'Ich habe morgen einen termin beim arzt.', 'Ich habe Morgen einen Termin beim Arzt.'], answer: 0,
          explain: '`Termin` и `Arzt` — существительные, они пишутся с заглавной. А `morgen` в значении «завтра» — наречие, со строчной; `Morgen` с заглавной — это «утро».', tag: 'schreibung', diag: true },
        { id: 'g11-02', type: 'choice', q: 'Какое предложение написано правильно?',
          options: ['Ich rufe Sie heute Abend an.', 'Ich rufe Sie heute abend an.', 'Ich rufe Sie Heute Abend an.'], answer: 0,
          explain: '`heute` — наречие, со строчной. `Abend` после `heute` — существительное, с заглавной.', tag: 'schreibung' },
        { id: 'g11-03', type: 'choice', q: 'Вы пишете господину Веберу. Как правильно продолжить письмо после обращения?',
          text: 'Sehr geehrter Herr Weber,',
          options: ['ich schreibe Ihnen wegen der Rechnung.', 'Ich schreibe Ihnen wegen der Rechnung.', 'ich schreibe ihnen wegen der Rechnung.'], answer: 0,
          explain: 'После запятой в обращении письмо продолжается со строчной: `ich`. Вежливое `Ihnen` — всегда с заглавной, а `ihnen` со строчной значит «им».', tag: 'schreibung' },
        { id: 'g11-04', type: 'choice', q: 'Какое написание верное?',
          options: ['Ich muss morgen arbeiten.', 'Ich muß morgen arbeiten.'], answer: 0,
          explain: 'В `muss` гласный краткий, поэтому `ss`. `ß` пишут после долгого гласного или дифтонга: `Straße`, `heißen`. `muß` — написание до реформы.', tag: 'schreibung' },
        { id: 'g11-05', type: 'choice', q: 'Выберите слово.',
          text: 'Ich wohne ___ drei Jahren in dieser Wohnung.',
          options: ['seit', 'seid'], answer: 0,
          explain: '`seit` — предлог времени: `seit drei Jahren` — «уже три года». `seid` — форма глагола `sein`: `ihr seid`.', tag: 'schreibung' },
        { id: 'g11-06', type: 'choice', q: 'Выберите слово.',
          text: 'Können wir uns am Freitag ___ am Donnerstag treffen?',
          options: ['statt', 'Stadt'], answer: 0,
          explain: '`statt` — «вместо», со строчной и с `tt`. `die Stadt` — «город», существительное. Звучат они одинаково.', tag: 'schreibung' },
        { id: 'g11-07', type: 'choice', q: 'Выберите слово.',
          text: '___ beginnt der Kurs?',
          options: ['Wann', 'Wenn', 'Wan'], answer: 0,
          explain: 'В вопросе «когда?» — `wann`. `wenn` — союз «если» или «всякий раз, когда», вопросов он не задаёт, а слова `wan` нет: после краткого `a` пишется `nn`.', tag: 'schreibung' },
        { id: 'g11-08', type: 'choice', q: 'Где запятая стоит правильно?',
          options: ['Leider kann ich nicht kommen.', 'Leider, kann ich nicht kommen.', 'Leider kann ich, nicht kommen.'], answer: 0,
          explain: '`Leider` — обычное первое место, запятой после него нет, хотя по-русски «к сожалению» выделяется запятыми. Внутри простого предложения запятая тоже не нужна.', tag: 'zeichen', diag: true },
        { id: 'g11-09', type: 'choice', q: 'Где запятые стоят правильно?',
          options: ['Die Wohnung hat zwei Zimmer, eine Küche und einen Balkon.', 'Die Wohnung hat zwei Zimmer, eine Küche, und einen Balkon.', 'Die Wohnung hat, zwei Zimmer, eine Küche und einen Balkon.'], answer: 0,
          explain: 'В перечислении запятые стоят между частями, но перед `und` — нет. Между глаголом и дополнением запятая не нужна.', tag: 'zeichen' },
        { id: 'g11-10', type: 'choice', q: 'Как правильно написать дату?',
          options: ['Der Termin ist am 5. Mai um 10 Uhr.', 'Der Termin ist am 5 Mai um 10 Uhr.', 'Der Termin ist am Mai 5. um 10 Uhr.'], answer: 0,
          explain: 'Число в дате порядковое (`am fünften Mai`), поэтому после цифры точка. Число стоит перед месяцем, как в русском.', tag: 'schreibung' },

        // ---- пропуски
        { id: 'g11-11', type: 'gap', q: 'Вставьте das или dass.',
          text: 'Es tut mir leid, ___ ich gestern nicht im Kurs war.', hint: 'das или dass', answer: ['dass'],
          explain: 'Это союз «что»: глагол `war` ушёл в конец, а заменить слово на `dieses` нельзя. Значит, `dass`.', tag: 'schreibung' },
        { id: 'g11-12', type: 'gap', q: 'Вставьте das или dass.',
          text: 'Ich glaube, ___ Sie ___ Formular falsch ausgefüllt haben.', hint: 'das или dass', answer: [['dass'], ['das']],
          explain: 'Первое — союз «что», после него глагол `haben` в конце. Второе — артикль `das Formular`, его можно заменить на `dieses`.', tag: 'schreibung', diag: true },
        { id: 'g11-13', type: 'gap', q: 'Вставьте das или dass.',
          text: 'Das ist das Zimmer, ___ ich mieten möchte.', hint: 'das или dass', answer: ['das'],
          explain: 'Это относительное местоимение «которое» к `das Zimmer`, его можно заменить на `welches`. Значит, `das` с одной `s`.', tag: 'schreibung' },
        { id: 'g11-14', type: 'gap', q: 'Вставьте вежливое «вам».',
          text: 'Ich danke ___ für die schnelle Antwort.', hint: 'вам', answer: ['Ihnen'],
          explain: 'Вежливое «вам» — `Ihnen`, с заглавной в любом месте предложения. `ihnen` со строчной значит «им».', tag: 'schreibung' },
        { id: 'g11-15', type: 'gap', q: 'Вставьте вежливое «вашему».',
          text: 'Wie geht es ___ Sohn?', hint: 'вашему', answer: ['Ihrem'],
          explain: 'Вежливое «ваш» — `Ihr` с заглавной; после `es geht` нужен Dativ: `Ihrem Sohn`. `ihrem` со строчной — «её» или «их».', tag: 'schreibung' },
        { id: 'g11-16', type: 'gap', q: 'Вставьте слово.',
          text: 'Ich bleibe heute zu ___, weil ich krank bin.', hint: 'дом', answer: ['Hause'],
          explain: '`Hause` — форма существительного `Haus`, поэтому с заглавной: `zu Hause`, `nach Hause`.', tag: 'schreibung' },
        { id: 'g11-17', type: 'gap', q: 'Вставьте слово.',
          text: 'Ich rufe Sie heute ___ an.', hint: 'вечером', answer: ['Abend'],
          explain: 'После `heute` время суток — существительное: `heute Abend`, с заглавной.', tag: 'schreibung' },
        { id: 'g11-18', type: 'gap', q: 'Вставьте слово.',
          text: 'Der Kurs beginnt ___ um 9 Uhr.', hint: 'завтра', answer: ['morgen'],
          explain: '«Завтра» — наречие `morgen`, со строчной. `der Morgen` с заглавной — «утро».', tag: 'schreibung' },
        { id: 'g11-19', type: 'gap', q: 'Вставьте слово.',
          text: 'Vielen Dank für Ihr ___.', hint: 'понимание', answer: ['Verständnis'],
          explain: '`das Verständnis` — существительное, с заглавной; внутри `ä`, на конце `-nis` с одной `s`.', tag: 'schreibung' },
        { id: 'g11-20', type: 'gap', q: 'Вставьте слово.',
          text: 'Ich bringe Ihnen morgen die ___ vom Arzt.', hint: 'справка', answer: ['Bescheinigung'],
          explain: '`die Bescheinigung`: `ei` в середине, на конце `-igung`, с заглавной, как всякое существительное.', tag: 'schreibung' },
        { id: 'g11-21', type: 'gap', q: 'Вставьте слово.',
          text: 'Sehr ___ Frau Schulz,', hint: 'уважаемая', answer: ['geehrte'],
          explain: '`geehrte` — от глагола `ehren` («уважать»): `ge-` + `ehrt` + окончание. Отсюда два `e` и `h`. Женщине — `geehrte`, мужчине — `geehrter`.', tag: 'schreibung' },
        { id: 'g11-22', type: 'gap', q: 'Вставьте слово.',
          text: 'Mit freundlichen ___', hint: 'приветами', answer: ['Grüßen'],
          explain: '`Grüßen` — существительное, с заглавной; `ü` и `ß` после долгого гласного. Без умлаута получится ошибка в слове.', tag: 'schreibung' },

        // ---- составить из слов
        { id: 'g11-23', type: 'build', q: 'Составьте предложение. Одна плашка лишняя.',
          ru: 'Я надеюсь, что вы сможете мне помочь.',
          answer: ['Ich hoffe, dass Sie mir helfen können.'], extra: ['das'],
          explain: 'После запятой — союз «что»: `dass` с двумя `s`. `das` — артикль или «это», здесь оно не подходит.', tag: 'schreibung' },
        { id: 'g11-24', type: 'build', q: 'Составьте предложение.',
          ru: 'Если у вас есть время, позвоните мне, пожалуйста.',
          answer: ['Wenn Sie Zeit haben, rufen Sie mich bitte an.'],
          explain: 'Придаточное с `wenn` стоит впереди и отделяется запятой после глагола `haben`. Главная часть начинается сразу с глагола `rufen`.', tag: 'zeichen' },
        { id: 'g11-25', type: 'build', q: 'Составьте предложение.',
          ru: 'К сожалению, я не могу прийти, потому что я болен.',
          answer: ['Leider kann ich nicht kommen, weil ich krank bin.', 'Ich kann leider nicht kommen, weil ich krank bin.', 'Ich kann nicht kommen, weil ich leider krank bin.'],
          explain: 'После `Leider` запятой нет — это просто первое место. Запятая стоит перед `weil`.', tag: 'zeichen' },
        { id: 'g11-26', type: 'build', q: 'Составьте предложение. Одна плашка лишняя.',
          ru: 'Я живу в этой квартире с мая.',
          answer: ['Ich wohne seit Mai in dieser Wohnung.', 'Seit Mai wohne ich in dieser Wohnung.', 'In dieser Wohnung wohne ich seit Mai.', 'Ich wohne in dieser Wohnung seit Mai.'], extra: ['seid'],
          explain: '«С мая» — предлог `seit`. `seid` — форма глагола `sein`: `ihr seid`.', tag: 'schreibung' },
        { id: 'g11-27', type: 'build', q: 'Составьте предложение.',
          ru: 'Квартира маленькая, но очень светлая.',
          answer: ['Die Wohnung ist klein, aber sehr hell.'],
          explain: 'Перед `aber` запятая обязательна, даже если после него нет целого предложения.', tag: 'zeichen' },
        { id: 'g11-28', type: 'build', q: 'Составьте предложение. Одна плашка лишняя.',
          ru: 'Я не знаю, когда я смогу прийти.',
          answer: ['Ich weiß nicht, wann ich kommen kann.'], extra: ['wenn'],
          explain: '«Когда» в косвенном вопросе — тоже `wann`. Перед ним запятая, глагол `kann` в конце.', tag: 'schreibung' },

        // ---- исправить ошибку
        { id: 'g11-29', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Meine Tochter hat seit gestern fieber.',
          answer: ['Meine Tochter hat seit gestern Fieber.'],
          explain: '`das Fieber` — существительное, пишется с заглавной.', tag: 'schreibung' },
        { id: 'g11-30', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Liebe Frau Berger, vielen Dank für ihre Hilfe.',
          answer: ['Liebe Frau Berger, vielen Dank für Ihre Hilfe.'],
          explain: 'Вы благодарите адресата, значит, «ваша» — вежливое `Ihre`, с заглавной. `ihre` со строчной — «её» или «их».', tag: 'schreibung', diag: true },
        { id: 'g11-31', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Sehr geehrte Frau Schulz, Ich schreibe Ihnen, weil ich krank bin.',
          answer: ['Sehr geehrte Frau Schulz, ich schreibe Ihnen, weil ich krank bin.'],
          explain: 'После запятой в обращении письмо продолжается со строчной: `ich schreibe …`.', tag: 'schreibung' },
        { id: 'g11-32', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Mein Sohn bleibt heute zu hause.',
          answer: ['Mein Sohn bleibt heute zu Hause.', 'Mein Sohn bleibt heute zuhause.'],
          explain: '`Hause` — существительное, поэтому `zu Hause` с заглавной. Слитное `zuhause` тоже допустимо.', tag: 'schreibung' },
        { id: 'g11-33', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich hoffe, das Sie mir bald antworten.',
          answer: ['Ich hoffe, dass Sie mir bald antworten.'],
          explain: 'Это союз «что»: глагол `antworten` в конце, заменить слово на `dieses` нельзя. Пишется `dass`.', tag: 'schreibung' },
        { id: 'g11-34', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich komme nächste Woche wider in den Kurs.',
          answer: ['Ich komme nächste Woche wieder in den Kurs.'],
          explain: '«Снова» — `wieder`, с `ie`. `wider` значит «против» и встречается в основном внутри слов вроде `widersprechen`.', tag: 'schreibung' },
        { id: 'g11-35', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich kann leiter nicht kommen.',
          answer: ['Ich kann leider nicht kommen.', 'Leider kann ich nicht kommen.'],
          explain: '«К сожалению» — `leider`, с `d`. `der Leiter` — «руководитель».', tag: 'schreibung' },
        { id: 'g11-36', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Können Sie mir sagen, wan der Kurs beginnt?',
          answer: ['Können Sie mir sagen, wann der Kurs beginnt?'],
          explain: 'После краткого `a` — два `n`: `wann`. Слова `wan` в немецком нет.', tag: 'schreibung' },
        { id: 'g11-37', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich mochte einen Termin vereinbaren.',
          answer: ['Ich möchte einen Termin vereinbaren.'],
          explain: 'Без умлаута получилось другое слово: `mochte` — «любил», прошедшее время от `mögen`. «Хотел бы» — `möchte`, с `ö`.', tag: 'schreibung' },
        { id: 'g11-38', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Bitte schicken Sie mir Ihre neue Addresse.',
          answer: ['Bitte schicken Sie mir Ihre neue Adresse.'],
          explain: 'По-немецки `Adresse` пишется с одной `d` и двумя `s` — не как английское `address`.', tag: 'schreibung' },

        // ---- соединить
        { id: 'g11-39', type: 'join', q: 'Соедините предложения союзом dass.',
          parts: ['Ich habe gehört.', 'Der Kurs fällt morgen aus.'], connector: 'dass',
          answer: ['Ich habe gehört, dass der Kurs morgen ausfällt.', 'Ich habe gehört, dass morgen der Kurs ausfällt.'],
          explain: 'Перед `dass` запятая, а сам союз пишется с двумя `s`. Глагол `ausfällt` уходит в конец и пишется слитно с приставкой.', tag: 'zeichen' },
        { id: 'g11-40', type: 'join', q: 'Соедините предложения союзом obwohl.',
          parts: ['Ich bin erkältet.', 'Ich gehe zur Arbeit.'], connector: 'obwohl',
          answer: ['Ich gehe zur Arbeit, obwohl ich erkältet bin.', 'Obwohl ich erkältet bin, gehe ich zur Arbeit.'],
          explain: 'Придаточное с `obwohl` отделяется запятой — и когда оно после главного, и когда впереди. Впереди оно занимает первое место, поэтому дальше сразу `gehe`.', tag: 'zeichen' },

        // ---- перевод
        { id: 'g11-41', type: 'translate', q: 'Переведите на немецкий (вежливо, на «Sie»).',
          ru: 'Большое спасибо за вашу помощь.',
          answer: ['Vielen Dank für Ihre Hilfe.', 'Herzlichen Dank für Ihre Hilfe.', 'Ich danke Ihnen für Ihre Hilfe.', 'Ich danke Ihnen sehr für Ihre Hilfe.', 'Danke für Ihre Hilfe.', 'Vielen Dank für Ihre Unterstützung.'],
          explain: '`Dank` и `Hilfe` — существительные, с заглавной. Вежливое «ваша» — `Ihre`, тоже с заглавной.', tag: 'schreibung' },
        { id: 'g11-42', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Сегодня вечером я буду дома.',
          answer: ['Heute Abend bin ich zu Hause.', 'Ich bin heute Abend zu Hause.', 'Heute Abend bin ich zuhause.', 'Ich bin heute Abend zuhause.', 'Heute Abend werde ich zu Hause sein.', 'Ich werde heute Abend zu Hause sein.', 'Heute Abend werde ich zuhause sein.', 'Ich werde heute Abend zuhause sein.'],
          explain: '`heute` в середине предложения — со строчной, `Abend` и `Hause` — существительные, с заглавной. Будущее здесь обычно передают настоящим временем: `bin`.', tag: 'schreibung' },
        { id: 'g11-43', type: 'translate', q: 'Переведите на немецкий (вежливо, на «Sie»).',
          ru: 'Я пишу вам, потому что у меня есть вопрос.',
          answer: ['Ich schreibe Ihnen, weil ich eine Frage habe.', 'Ich schreibe Ihnen, denn ich habe eine Frage.', 'Ich schreibe Ihnen, da ich eine Frage habe.'],
          explain: 'Вежливое `Ihnen` — с заглавной, `Frage` — существительное. Перед `weil` или `denn` — запятая.', tag: 'schreibung' }
    ],

    apply: {
        task: 'Напишите 4–5 предложений соседке на «Sie»: поблагодарите за помощь, сообщите, что завтра вечером вас не будет дома, и попросите принять для вас посылку.',
        checks: [
            'Все существительные — с заглавной (`Hilfe`, `Abend`, `Paket`)',
            '`Sie`, `Ihnen`, `Ihr` — с заглавной в любом месте предложения',
            'После обращения — запятая, и письмо продолжается со строчной буквы',
            'Перед `weil` и `dass` стоит запятая, `dass` написан с двумя `s`'
        ],
        model: 'Liebe Frau Schneider, vielen Dank für Ihre Hilfe beim Umzug. Morgen Abend bin ich leider nicht zu Hause, weil ich einen Kurs habe. Ich erwarte aber ein Paket. Könnten Sie es bitte für mich annehmen? Ich hoffe, dass das kein Problem für Sie ist. Viele Grüße Olga',
        modelRu: 'Дорогая госпожа Шнайдер, большое спасибо за вашу помощь при переезде. Завтра вечером меня, к сожалению, не будет дома, потому что у меня курс. Но я жду посылку. Не могли бы вы, пожалуйста, принять её для меня? Надеюсь, что это не проблема для вас. Всего доброго, Ольга'
    }
};
