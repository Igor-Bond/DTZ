/**
 * Модуль 6. Существительные: род, артикль, множественное число, nicht и kein.
 *
 * Артикля в русском нет, поэтому здесь ошибаются чаще всего: пропускают его,
 * берут род из русского, ставят единственное число после «два», путают
 * nicht и kein. Падежи артикля — только намёком, подробно они в модуле 7.
 */

export default {
    id: 'g06',
    order: 6,
    title: 'Существительные: род, артикль, число, отрицание',
    short: 'Существительные',
    goal: 'Вы ставите артикль перед существительным и знаете, когда он не нужен, определяете род по окончанию и по последней части слова, образуете множественное число частых слов письма и выбираете между `kein` и `nicht`.',
    why: 'В русском артиклей нет, поэтому их пропускают или ставят наугад, и ошибка появляется почти в каждом предложении письма. Проверяющий видит её сразу, а Korrektheit — это 5 баллов из 20. Хорошая новость: род многих слов выдаёт окончание, а слов, без которых не обойтись в письме, не так много.',

    theory: [
        { type: 'h', text: '1. Артикль: то, чего нет в русском' },
        { type: 'p', text: 'По-русски говорят «У меня вопрос», и перед словом «вопрос» ничего не стоит. По-немецки перед существительным почти всегда стоит маленькое слово — **артикль**: `eine Frage`, `die Wohnung`, `der Termin`. По нему видно род, число и падеж. Пропущенный артикль — одна из самых частых ошибок русскоговорящих.' },
        {
            type: 'table',
            head: ['Род', 'Определённый', 'Неопределённый', 'Пример'],
            rows: [
                ['мужской (m)', '`der`', '`ein`', '`der Termin`, `ein Termin`'],
                ['средний (n)', '`das`', '`ein`', '`das Formular`, `ein Formular`'],
                ['женский (f)', '`die`', '`eine`', '`die Rechnung`, `eine Rechnung`'],
                ['множественное (Pl)', '`die`', '—', '`die Termine`, `Termine`']
            ],
            note: 'Неопределённого артикля во множественном числе нет: `ein Termin` → `Termine`. В винительном падеже у мужского рода `der` меняется на `den`, `ein` — на `einen`: `Ich habe einen Termin.` Подробно — в модуле 7.'
        },
        { type: 'rule', text: '`ein`, `eine` — когда предмет называется впервые или это «какой-то, один из»: `Ich habe eine Frage.` `der`, `das`, `die` — когда ясно, о каком именно идёт речь: `Die Frage ist: …`' },
        {
            type: 'exs',
            items: [
                { de: 'Ich habe **eine** Frage.', ru: 'У меня вопрос.' },
                { de: '**Die** Heizung ist kaputt.', ru: 'Отопление сломалось.' },
                { de: 'Ich habe **eine** Rechnung bekommen. **Die** Rechnung ist zu hoch.', ru: 'Я получила счёт. Счёт слишком большой.' },
                { de: 'Wir suchen **eine** Wohnung.', ru: 'Мы ищем квартиру.' },
                { de: '**Das** Formular liegt im Büro.', ru: 'Бланк лежит в офисе.' }
            ]
        },
        { type: 'trap', wrong: 'Ich habe Frage.', right: 'Ich habe eine Frage.', why: 'По-русски «у меня вопрос» — без всякого слова перед «вопрос». По-немецки исчисляемое существительное в единственном числе не стоит «голым»: перед ним нужен `ein`, `der`, `mein` или `kein`.' },

        { type: 'h', text: '2. Когда артикль не нужен' },
        { type: 'p', text: 'Есть случаи, когда артикля нет. Здесь ошибаются наоборот: выучив артикли, начинают ставить их везде.' },
        {
            type: 'list',
            items: [
                'Профессия после `sein` и `arbeiten als`: `Ich bin Lehrerin.`, `Mein Mann arbeitet als Fahrer.` С прилагательным артикль возвращается: `Sie ist eine gute Lehrerin.`',
                'Язык: `Ich lerne Deutsch.`, `Ich spreche Russisch.`',
                'То, что не считают штуками, — время, деньги: `Ich habe Zeit.`, `Ich brauche Geld.`',
                'Устойчивые сочетания с `haben`: `Ich habe Fieber.`, `Ich habe Hunger.`, `Ich habe Angst.`',
                'Множественное число в смысле «какие-то»: `Ich habe noch Fragen.`, `Haben Sie Kinder?`',
                'Имена, большинство городов и стран: `Frau Meinert`, `Berlin`, `Deutschland`. Но некоторые страны — с артиклем: `Ich komme aus der Ukraine.`, `in der Türkei`, `in der Schweiz`.'
            ]
        },
        { type: 'trap', wrong: 'Mein Sohn hat ein Fieber.', right: 'Mein Sohn hat Fieber.', why: '`Fieber haben`, `Zeit haben`, `Hunger haben` — устойчивые сочетания без артикля, как русское «у него температура». Артикль здесь лишний.' },

        { type: 'h', text: '3. Род: не переносите его из русского' },
        { type: 'p', text: 'Род есть и в русском, но он часто не совпадает с немецким. Поэтому учите существительное сразу с артиклем: не «Termin», а «der Termin».' },
        {
            type: 'table',
            head: ['По-русски', 'По-немецки'],
            rows: [
                ['проблема (ж. р.)', '`das Problem`'],
                ['письмо (ср. р.)', '`der Brief`'],
                ['счёт (м. р.)', '`die Rechnung`'],
                ['вопрос (м. р.)', '`die Frage`'],
                ['ребёнок (м. р.)', '`das Kind`'],
                ['девочка (ж. р.)', '`das Mädchen`'],
                ['деньги (мн. ч.)', '`das Geld` — единственное число']
            ]
        },
        {
            type: 'table',
            head: ['Род', 'Окончание', 'Примеры'],
            rows: [
                ['`die`', '-ung, -heit, -keit, -schaft', '`die Wohnung`, `die Krankheit`, `die Möglichkeit`, `die Nachbarschaft`'],
                ['`die`', '-tion, -ion, -ik, -ur, -ei', '`die Information`, `die Klinik`, `die Reparatur`, `die Polizei`'],
                ['`der`', '-er у людей и приборов, -ling, -ismus', '`der Lehrer`, `der Vermieter`, `der Drucker`, `der Frühling`, `der Tourismus`'],
                ['`der`', 'дни недели, месяцы, времена года', '`der Montag`, `der Mai`, `der Winter`'],
                ['`das`', '-chen, -lein, -um, -ment', '`das Mädchen`, `das Brötchen`, `das Zentrum`, `das Dokument`']
            ],
            note: 'Исключения есть: `das Abitur`, `der Moment`. А `-er` само по себе ещё не значит `der`: `die Mutter`, `die Tochter`, `das Zimmer`, `das Fenster`. Надёжнее всего `-chen` (всегда `das`) и `-ung`, `-heit`, `-keit` (`die`).'
        },
        { type: 'trap', wrong: 'Die Problem ist die Heizung.', right: 'Das Problem ist die Heizung.', why: '«Проблема» по-русски женского рода, отсюда `die`. Но `das Problem` — среднего. Род из русского не переносится — его учат вместе со словом.' },

        { type: 'h', text: '4. Составные слова: род по последней части' },
        { type: 'p', text: 'Немецкий легко складывает слова: `der Arzt` + `der Termin` = `der Arzttermin`. Род всего слова — род **последней** части. Первая часть только уточняет, какой это приём.' },
        {
            type: 'table',
            head: ['Первая часть', 'Последняя часть', 'Слово'],
            rows: [
                ['`der Arzt`', '`der Termin`', '`der Arzttermin`'],
                ['`das Haus`', '`die Aufgabe`', '`die Hausaufgabe`'],
                ['`die Miete`', '`der Vertrag`', '`der Mietvertrag`'],
                ['`der Strom`', '`die Rechnung`', '`die Stromrechnung`'],
                ['`die Sprache`', '`der Kurs`', '`der Sprachkurs`'],
                ['`die Wohnung`', '`der Schlüssel`', '`der Wohnungsschlüssel`'],
                ['`die Kinder`', '`der Garten`', '`der Kindergarten`']
            ],
            note: 'Иногда между частями появляется `-s-` или `-n-` (`Wohnungsschlüssel`), иногда пропадает `-e` (`Sprachkurs`), иногда первая часть стоит во множественном числе (`Kinder` + `Garten`). На род это не влияет.'
        },
        { type: 'trap', wrong: 'Das Hausaufgabe ist leicht.', right: 'Die Hausaufgabe ist leicht.', why: 'Впереди стоит `das Haus`, но род даёт последняя часть — `die Aufgabe`. Значит, `die Hausaufgabe`.' },

        { type: 'h', text: '5. Слова письма: учите вместе с артиклем' },
        {
            type: 'table',
            head: ['der', 'das', 'die'],
            rows: [
                ['`der Termin` — приём, встреча', '`das Problem` — проблема', '`die Wohnung` — квартира'],
                ['`der Brief` — письмо', '`das Formular` — бланк', '`die Rechnung` — счёт к оплате'],
                ['`der Kurs` — курс', '`das Geld` — деньги', '`die Antwort` — ответ'],
                ['`der Vertrag` — договор', '`das Kind` — ребёнок', '`die Schule` — школа'],
                ['`der Arzt` — врач', '`das Zimmer` — комната', '`die Hausaufgabe` — домашнее задание'],
                ['`der Vermieter` — арендодатель', '`das Büro` — офис', '`die Bescheinigung` — справка'],
                ['`der Antrag` — заявление', '`das Konto` — счёт в банке', '`die Miete` — квартплата'],
                ['`der Schlüssel` — ключ', '`das Amt` — ведомство', '`die Heizung` — отопление'],
                ['`der Nachbar` — сосед', '`das Medikament` — лекарство', '`die Frage` — вопрос'],
                ['`der Unterricht` — занятия', '`das Wochenende` — выходные', '`die Prüfung` — экзамен']
            ],
            note: 'Эти слова встречаются почти в каждом письме DTZ, и род многих из них по окончанию не угадать. «Выходные» и «деньги» по-русски — множественное число, а `das Wochenende` и `das Geld` — единственное.'
        },
        { type: 'tip', text: 'Записывайте новое слово сразу с артиклем и множественным числом: `der Termin, die Termine`. И повторяйте вслух с артиклем, как одно слово: «der Termin». Тогда на экзамене артикль придёт сам.' },

        { type: 'h', text: '6. Множественное число' },
        { type: 'p', text: 'Во множественном числе артикль у всех родов один — `die`. А вот окончаний несколько, и по смыслу их не выбрать. Но у каждой модели есть «свои» слова.' },
        {
            type: 'table',
            head: ['Модель', 'Пример', 'У каких слов чаще'],
            rows: [
                ['-e', '`der Termin` → `die Termine`, `das Problem` → `die Probleme`', 'мужской и средний род'],
                ['-e и умлаут', '`der Vertrag` → `die Verträge`, `der Arzt` → `die Ärzte`', 'мужской род'],
                ['-er', '`das Kind` → `die Kinder`', 'средний род'],
                ['-er и умлаут', '`das Amt` → `die Ämter`, `das Haus` → `die Häuser`', 'средний род'],
                ['-n, -en', '`die Frage` → `die Fragen`, `die Rechnung` → `die Rechnungen`', 'почти весь женский род; `der Nachbar` → `die Nachbarn`'],
                ['-s', '`das Büro` → `die Büros`, `das Handy` → `die Handys`', 'слова на гласную, иностранные'],
                ['без окончания', '`der Lehrer` → `die Lehrer`, `das Zimmer` → `die Zimmer`, `die Mutter` → `die Mütter`', 'm и n на -er, -el, -en; `die Mutter`, `die Tochter` — с умлаутом']
            ],
            note: 'Умлаут (`a` → `ä`, `o` → `ö`, `u` → `ü`) на письме легко забыть — и это тоже ошибка. Только во множественном бывают `die Eltern`, `die Leute`, `die Kosten`, `die Ferien`.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Ich habe noch zwei **Fragen**.', ru: 'У меня ещё два вопроса.' },
                { de: 'Die **Kinder** sind seit Montag krank.', ru: 'Дети болеют с понедельника.' },
                { de: 'Die **Rechnungen** für Strom und Gas sind zu hoch.', ru: 'Счета за электричество и газ слишком большие.' },
                { de: 'In der Wohnung sind drei **Zimmer**.', ru: 'В квартире три комнаты.' },
                { de: 'Unsere **Nachbarn** sind sehr nett.', ru: 'Наши соседи очень милые.' }
            ]
        },
        { type: 'trap', wrong: 'Ich habe zwei Kind.', right: 'Ich habe zwei Kinder.', why: 'По-русски после «два, три, четыре» стоит особая форма: «два ребёнка», «три вопроса». В немецком после любого числа больше одного — обычное множественное: `zwei Kinder`, `drei Fragen`.' },
        { type: 'trap', wrong: 'Das Geld sind noch nicht da.', right: 'Das Geld ist noch nicht da.', why: '«Деньги» по-русски — множественное число, а `das Geld` — единственное, поэтому и глагол `ist`. Так же `die Brille` (очки) и `die Uhr` (часы).' },

        { type: 'h', text: '7. kein или nicht' },
        { type: 'p', text: 'В русском одно отрицание — «не» (и «нет»). В немецком их два: `kein` отрицает существительное, `nicht` — всё остальное. Перепутать их — частая ошибка.' },
        { type: 'rule', text: '`kein` — вместо `ein` и там, где артикля не было: `ein Auto` → `kein Auto`, `Zeit` → `keine Zeit`. `nicht` — с глаголом, прилагательным, местом и с существительным после `der/das/die` или `mein`.' },
        {
            type: 'table',
            head: ['Без отрицания', 'С отрицанием', 'Почему'],
            rows: [
                ['Ich habe ein Auto.', 'Ich habe **kein** Auto.', 'был `ein`'],
                ['Ich habe Zeit.', 'Ich habe **keine** Zeit.', 'артикля не было'],
                ['Ich habe Fragen.', 'Ich habe **keine** Fragen.', 'множественное без артикля'],
                ['Ich komme.', 'Ich komme **nicht**.', 'глагол'],
                ['Die Wohnung ist teuer.', 'Die Wohnung ist **nicht** teuer.', 'прилагательное'],
                ['Das ist mein Brief.', 'Das ist **nicht** mein Brief.', 'есть `mein`'],
                ['Ich habe den Brief bekommen.', 'Ich habe den Brief **nicht** bekommen.', 'есть определённый артикль']
            ]
        },
        {
            type: 'exs',
            items: [
                { de: 'Ich habe leider **keine** Zeit.', ru: 'К сожалению, у меня нет времени.' },
                { de: 'Das ist **kein** Problem.', ru: 'Это не проблема.' },
                { de: 'Wir haben noch **keine** Antwort bekommen.', ru: 'Мы ещё не получили ответа.' },
                { de: 'Die Heizung funktioniert **nicht**.', ru: 'Отопление не работает.' },
                { de: 'Der Termin am Montag passt mir **nicht**.', ru: 'Приём в понедельник мне не подходит.' }
            ]
        },
        { type: 'trap', wrong: 'Ich habe nicht Zeit.', right: 'Ich habe keine Zeit.', why: 'По-русски «нет времени» — то же «не/нет», что и с глаголом. По-немецки существительное без артикля отрицается словом `kein`: `keine Zeit`, `kein Geld`.' },
        { type: 'trap', wrong: 'Das ist kein mein Brief.', right: 'Das ist nicht mein Brief.', why: '`kein` занимает место артикля, поэтому рядом с `mein`, `Ihr`, `der/die/das` ему места нет. Здесь отрицание — `nicht`.' },
        {
            type: 'table',
            head: ['Падеж', 'm', 'n', 'f', 'Pl'],
            rows: [
                ['Nominativ', 'kein', 'kein', 'keine', 'keine'],
                ['Akkusativ', '**keinen**', 'kein', 'keine', 'keine'],
                ['Dativ', 'keinem', 'keinem', 'keiner', 'keinen']
            ],
            note: '`kein` меняется так же, как `ein`. В Akkusativ меняется только мужской род: `Ich habe keinen Termin.` Падежи подробно — в модуле 7.'
        },
        {
            type: 'list',
            items: [
                '`nicht` стоит в конце, если отрицается весь глагол: `Ich komme heute nicht.`',
                '`nicht` стоит перед второй частью глагола, перед прилагательным и местом: `Ich kann heute nicht kommen.`, `Ich bin nicht zu Hause.` Подробнее — в модуле 1.',
                '«Больше не» — `nicht mehr` или `kein … mehr`: `Ich wohne nicht mehr in Köln.`, `Mein Sohn hat kein Fieber mehr.`'
            ]
        },
        { type: 'tip', text: 'Хотите исправить недоразумение — продолжите отрицание словом `sondern` («а»): `Der Termin ist nicht am Montag, sondern am Dienstag.`, `Ich brauche kein Formular, sondern eine Bescheinigung.` О союзах — в модуле 10.' },

        { type: 'h', text: '8. Проверка за минуту' },
        {
            type: 'list',
            items: [
                'Перед каждым существительным в единственном числе есть артикль, `mein` или `kein`? Если нет — это профессия, язык, `Zeit`, `Geld`, `Fieber`?',
                'Род: подсказывает ли окончание (`-ung` → `die`)? У составного слова род взят от последней части?',
                'После числа больше одного стоит множественное число?',
                'Существительное без `der/die/das` и `mein` отрицается словом `kein`, всё остальное — `nicht`.'
            ]
        }
    ],

    exercises: [
        // ---- выбор
        { id: 'g06-01', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich habe eine Frage.', 'Ich habe Frage.', 'Ich habe ein Frage.'], answer: 0,
          explain: 'Перед `Frage` нужен артикль: в единственном числе существительное «голым» не стоит. `die Frage` — женского рода, поэтому `eine`, а не `ein`.', tag: 'artikel', diag: true },
        { id: 'g06-02', type: 'choice', q: 'Какой артикль у слова Bescheinigung?',
          options: ['die', 'der', 'das'], answer: 0,
          explain: 'Окончание `-ung` указывает на женский род: `die Bescheinigung`, как `die Wohnung` и `die Rechnung`.', tag: 'artikel' },
        { id: 'g06-03', type: 'choice', q: 'Как правильно?',
          options: ['die Hausaufgabe', 'das Hausaufgabe', 'der Hausaufgabe'], answer: 0,
          explain: 'Род составного слова даёт последняя часть: `die Aufgabe`. То, что впереди стоит `das Haus`, на род не влияет.', tag: 'artikel' },
        { id: 'g06-04', type: 'choice', q: 'У какого слова артикль der?',
          options: ['Montag', 'Rechnung', 'Medikament', 'Mädchen'], answer: 0,
          explain: 'Дни недели — мужского рода: `der Montag`. Остальные выдают окончания: `die Rechnung` (-ung), `das Medikament` (-ment), `das Mädchen` (-chen).', tag: 'artikel' },
        { id: 'g06-05', type: 'choice', q: 'Как сказать «У моего сына температура»?',
          options: ['Mein Sohn hat Fieber.', 'Mein Sohn hat ein Fieber.', 'Mein Sohn hat das Fieber.'], answer: 0,
          explain: '`Fieber haben` — устойчивое сочетание без артикля, как `Zeit haben` и `Hunger haben`.', tag: 'artikel' },
        { id: 'g06-06', type: 'choice', q: 'Как сказать «У меня ещё есть вопросы»?',
          options: ['Ich habe noch Fragen.', 'Ich habe noch eine Fragen.', 'Ich habe noch ein Fragen.'], answer: 0,
          explain: 'У неопределённого артикля нет множественного числа. «Какие-то вопросы» — просто `Fragen`, без артикля.', tag: 'artikel' },
        { id: 'g06-07', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich habe zwei Verträge unterschrieben.', 'Ich habe zwei Vertrag unterschrieben.', 'Ich habe zwei Vertrage unterschrieben.'], answer: 0,
          explain: 'После «два» — множественное число: `der Vertrag` → `die Verträge`, с окончанием `-e` и умлаутом. Без умлаута — ошибка.', tag: 'plural' },
        { id: 'g06-08', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Das Geld ist noch nicht auf meinem Konto.', 'Das Geld sind noch nicht auf meinem Konto.'], answer: 0,
          explain: '«Деньги» по-русски — множественное число, а `das Geld` — единственное. Поэтому глагол `ist`.', tag: 'plural' },
        { id: 'g06-09', type: 'choice', q: 'Как сказать «У меня нет времени»?',
          options: ['Ich habe keine Zeit.', 'Ich habe nicht Zeit.', 'Ich habe kein Zeit.'], answer: 0,
          explain: '`Zeit` стоит без артикля, поэтому отрицание — `kein`. `die Zeit` — женского рода, значит, `keine`.', tag: 'negation', diag: true },
        { id: 'g06-10', type: 'choice', q: 'Как сказать «Это не моё письмо»?',
          options: ['Das ist nicht mein Brief.', 'Das ist kein mein Brief.', 'Das ist mein kein Brief.'], answer: 0,
          explain: 'Перед существительным уже стоит `mein`, а `kein` занимает то же место. Поэтому отрицание — `nicht`.', tag: 'negation' },
        { id: 'g06-11', type: 'choice', q: 'Как ответить: «Нет, мне не назначено»?',
          text: 'Haben Sie einen Termin?',
          options: ['Nein, ich habe keinen Termin.', 'Nein, ich habe kein Termin.', 'Nein, ich habe keine Termin.'], answer: 0,
          explain: '`der Termin` — мужской род, а после `haben` нужен Akkusativ. `kein` меняется как `ein`: `einen` → `keinen`.', tag: 'negation' },

        // ---- пропуски
        { id: 'g06-12', type: 'gap', q: 'Вставьте неопределённый артикль.',
          text: 'Ich schreibe Ihnen, weil ich ___ Frage habe.', answer: ['eine'],
          explain: '`die Frage` — женского рода, неопределённый артикль — `eine`. Вопрос называется впервые, поэтому не `die`.', tag: 'artikel' },
        { id: 'g06-13', type: 'gap', q: 'Вставьте определённый артикль.',
          text: '___ Problem ist die Heizung.', answer: ['Das'],
          explain: '`das Problem` — среднего рода, хотя «проблема» по-русски женского. Род из русского не переносится.', tag: 'artikel', diag: true },
        { id: 'g06-14', type: 'gap', q: 'Вставьте определённые артикли.',
          text: '___ Rechnung für ___ Reparatur ist zu hoch.', answer: [['Die'], ['die']],
          explain: '`-ung` и `-ur` указывают на женский род: `die Rechnung`, `die Reparatur`. После `für` у женского рода артикль не меняется.', tag: 'artikel' },
        { id: 'g06-15', type: 'gap', q: 'Вставьте определённый артикль.',
          text: 'Wo ist ___ Wohnungsschlüssel?', answer: ['der'],
          explain: 'Последняя часть — `der Schlüssel`, поэтому `der Wohnungsschlüssel`. `die Wohnung` впереди на род не влияет.', tag: 'artikel' },
        { id: 'g06-16', type: 'gap', q: 'Вставьте определённый артикль.',
          text: '___ Fernseher im Wohnzimmer ist kaputt.', answer: ['Der'],
          explain: 'Приборы на `-er` — мужского рода: `der Fernseher`, `der Drucker`, `der Computer`.', tag: 'artikel' },
        { id: 'g06-17', type: 'gap', q: 'Вставьте существительное во множественном числе.',
          text: 'Ich habe zwei ___.', hint: 'das Kind', answer: ['Kinder'],
          explain: 'После «два» — множественное число. `das Kind` → `die Kinder`, модель `-er`.', tag: 'plural' },
        { id: 'g06-18', type: 'gap', q: 'Вставьте существительное во множественном числе.',
          text: 'Die ___ für Strom und Gas sind sehr hoch.', hint: 'die Rechnung', answer: ['Rechnungen'],
          explain: 'Слова на `-ung` во множественном получают `-en`: `die Rechnungen`. На множественное указывает и глагол `sind`.', tag: 'plural' },
        { id: 'g06-19', type: 'gap', q: 'Вставьте существительное во множественном числе.',
          text: 'Ich habe alle ___ schon abgegeben.', hint: 'der Antrag', answer: ['Anträge'],
          explain: '`der Antrag` → `die Anträge`: окончание `-e` и умлаут, как `der Vertrag` → `die Verträge`.', tag: 'plural' },
        { id: 'g06-20', type: 'gap', q: 'Вставьте существительное во множественном числе.',
          text: 'Die ___ in meiner Wohnung sind klein.', hint: 'das Zimmer', answer: ['Zimmer'],
          explain: 'Слова мужского и среднего рода на `-er` во множественном часто не меняются: `das Zimmer` → `die Zimmer`. Число видно по артиклю `die` и глаголу `sind`.', tag: 'plural' },
        { id: 'g06-21', type: 'gap', q: 'Вставьте существительное во множественном числе.',
          text: 'Unsere ___ sind sehr laut.', hint: 'der Nachbar', answer: ['Nachbarn'],
          explain: '`der Nachbar` → `die Nachbarn`: это слово мужского рода получает `-n`, как женский род.', tag: 'plural' },
        { id: 'g06-22', type: 'gap', q: 'Вставьте kein или nicht в нужной форме.',
          text: 'Mein Sohn hat ___ Fieber mehr.', answer: ['kein'],
          explain: '`Fieber` стоит без артикля, поэтому отрицание — `kein`. `das Fieber` среднего рода: `kein`. «Больше не» — `kein … mehr`.', tag: 'negation' },
        { id: 'g06-23', type: 'gap', q: 'Вставьте kein в нужной форме.',
          text: 'Wir haben noch ___ Mietvertrag.', answer: ['keinen'],
          explain: '`der Mietvertrag` — мужской род (по `der Vertrag`), после `haben` — Akkusativ. Поэтому `keinen`, как `einen`.', tag: 'negation' },
        { id: 'g06-24', type: 'gap', q: 'Вставьте kein или nicht в нужной форме.',
          text: 'Ich habe ___ Geld, deshalb kaufe ich das Handy ___.', answer: [['kein'], ['nicht']],
          explain: '`Geld` без артикля — `kein Geld`. `das Handy` стоит с определённым артиклем, поэтому здесь отрицание — `nicht`, в конце предложения.', tag: 'negation' },

        // ---- составить из слов
        { id: 'g06-25', type: 'build', q: 'Составьте предложение. Одна плашка лишняя.',
          ru: 'У меня проблема с отоплением.',
          answer: ['Ich habe ein Problem mit der Heizung.', 'Mit der Heizung habe ich ein Problem.'], extra: ['eine'],
          explain: '`das Problem` — среднего рода: `ein Problem`, а не `eine`. `der Heizung` — это женский род после `mit` (Dativ, см. модуль 9).', tag: 'artikel' },
        { id: 'g06-26', type: 'build', q: 'Составьте предложение. Одна плашка лишняя.',
          ru: 'Моя дочь тоже учит немецкий.',
          answer: ['Meine Tochter lernt auch Deutsch.', 'Auch meine Tochter lernt Deutsch.'], extra: ['das'],
          explain: 'Название языка после `lernen` идёт без артикля: `Deutsch lernen`. Плашка `das` лишняя.', tag: 'artikel' },
        { id: 'g06-27', type: 'build', q: 'Составьте предложение. Одна плашка лишняя.',
          ru: 'К сожалению, у меня нет справки.',
          answer: ['Leider habe ich keine Bescheinigung.', 'Ich habe leider keine Bescheinigung.'], extra: ['nicht'],
          explain: 'Справка названа без определённого артикля, поэтому отрицание — `kein`. `die Bescheinigung` — женского рода: `keine`.', tag: 'negation' },
        { id: 'g06-28', type: 'build', q: 'Составьте предложение. Одна плашка лишняя.',
          ru: 'Это не моя квартира.',
          answer: ['Das ist nicht meine Wohnung.'], extra: ['keine'],
          explain: 'Перед `Wohnung` уже стоит `meine`, поэтому отрицание — `nicht`, а не `keine`.', tag: 'negation' },
        { id: 'g06-29', type: 'build', q: 'Составьте предложение. Одна плашка лишняя.',
          ru: 'Счета за отопление очень высокие.',
          answer: ['Die Rechnungen für die Heizung sind sehr hoch.', 'Für die Heizung sind die Rechnungen sehr hoch.'], extra: ['ist'],
          explain: '`die Rechnung` → `die Rechnungen`. Подлежащее во множественном числе, поэтому глагол — `sind`, а не `ist`.', tag: 'plural' },
        { id: 'g06-30', type: 'build', q: 'Составьте предложение. Одна плашка лишняя.',
          ru: 'Мы больше не живём в Кёльне.',
          answer: ['Wir wohnen nicht mehr in Köln.', 'In Köln wohnen wir nicht mehr.'], extra: ['kein'],
          explain: '«Больше не» при глаголе — `nicht mehr`. `kein` здесь невозможен: отрицается не существительное, а глагол `wohnen`.', tag: 'negation' },

        // ---- исправить ошибку
        { id: 'g06-31', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich habe zwei Kind.', answer: ['Ich habe zwei Kinder.'],
          explain: 'После «два» — множественное число: `zwei Kinder`. Русское «два ребёнка» здесь не подсказка.', tag: 'plural', diag: true },
        { id: 'g06-32', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Das Heizung ist seit Montag kaputt.', answer: ['Die Heizung ist seit Montag kaputt.', 'Seit Montag ist die Heizung kaputt.'],
          explain: 'Окончание `-ung` — признак женского рода: `die Heizung`.', tag: 'artikel' },
        { id: 'g06-33', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Mein Mann hat ein Fieber.', answer: ['Mein Mann hat Fieber.'],
          explain: '`Fieber haben` — устойчивое сочетание без артикля, как `Zeit haben` или `Hunger haben`.', tag: 'artikel' },
        { id: 'g06-34', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich arbeite als eine Verkäuferin.', answer: ['Ich arbeite als Verkäuferin.'],
          explain: 'Профессия после `als` и после `sein` идёт без артикля: `als Verkäuferin`, `Ich bin Verkäuferin`.', tag: 'artikel' },
        { id: 'g06-35', type: 'fix', q: 'Исправьте ошибку.',
          text: 'In der Stadt sind die Wohnungs sehr teuer.', answer: ['In der Stadt sind die Wohnungen sehr teuer.', 'Die Wohnungen in der Stadt sind sehr teuer.'],
          explain: 'Множественное на `-s` — у слов на гласную и иностранных (`die Büros`). Слова на `-ung` получают `-en`: `die Wohnungen`.', tag: 'plural' },
        { id: 'g06-36', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Wir haben nicht Geld für die Reparatur.', answer: ['Wir haben kein Geld für die Reparatur.', 'Wir haben nicht genug Geld für die Reparatur.'],
          explain: '`Geld` стоит без артикля, поэтому отрицание — `kein Geld`. Можно и `nicht genug Geld` («недостаточно денег»), но голое `nicht Geld` — ошибка.', tag: 'negation' },
        { id: 'g06-37', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Die Wohnung ist kein teuer.', answer: ['Die Wohnung ist nicht teuer.'],
          explain: '`teuer` — прилагательное, а не существительное. Прилагательное отрицается словом `nicht`.', tag: 'negation' },

        // ---- соединить и перевести
        { id: 'g06-38', type: 'join', q: 'Соедините союзом sondern.',
          parts: ['Ich habe kein Auto.', 'Ich habe ein Fahrrad.'], connector: 'sondern',
          answer: ['Ich habe kein Auto, sondern ein Fahrrad.', 'Ich habe kein Auto, sondern ich habe ein Fahrrad.'],
          explain: 'После отрицания `kein` вторая часть вводится словом `sondern` («а»). Перед `sondern` всегда запятая, а `ich habe` повторять не обязательно.', tag: 'negation' },
        { id: 'g06-39', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'К сожалению, у меня сегодня нет времени.',
          answer: ['Leider habe ich heute keine Zeit.', 'Heute habe ich leider keine Zeit.', 'Ich habe heute leider keine Zeit.', 'Ich habe leider heute keine Zeit.'],
          explain: '«Нет времени» — `keine Zeit`: существительное без артикля отрицается словом `kein`. Глагол `habe` — на втором месте.', tag: 'negation' },
        { id: 'g06-40', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Сейчас у меня температура и кашель.',
          answer: ['Ich habe jetzt Fieber und Husten.', 'Jetzt habe ich Fieber und Husten.', 'Im Moment habe ich Fieber und Husten.', 'Ich habe im Moment Fieber und Husten.', 'Zurzeit habe ich Fieber und Husten.', 'Ich habe zurzeit Fieber und Husten.'],
          explain: '`Fieber` и `Husten` после `haben` идут без артикля, как `Zeit` и `Hunger`.', tag: 'artikel' },
        { id: 'g06-41', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Моя жена — врач.',
          answer: ['Meine Frau ist Ärztin.', 'Meine Frau ist von Beruf Ärztin.', 'Meine Frau ist Ärztin von Beruf.', 'Meine Frau arbeitet als Ärztin.'],
          explain: 'Профессия после `sein` — без артикля. И для женщины — женская форма: `Ärztin`, а не `Arzt`, хотя по-русски «врач» и о женщине.', tag: 'artikel' },
        { id: 'g06-42', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'В понедельник у моего сына нет уроков.',
          answer: ['Am Montag hat mein Sohn keinen Unterricht.', 'Mein Sohn hat am Montag keinen Unterricht.', 'Am Montag hat mein Sohn keine Schule.', 'Mein Sohn hat am Montag keine Schule.'],
          explain: '«Уроки» — `der Unterricht` (единственное число) или `die Schule`. Артикля нет, значит, отрицание — `kein`: `keinen Unterricht` (мужской род, Akkusativ) или `keine Schule`.', tag: 'negation' }
    ],

    apply: {
        task: 'Напишите 5–6 предложений хозяину квартиры: с понедельника не работает отопление, нет горячей воды, дети заболели, счёт за отопление слишком высокий. Попросите прислать мастера. Используйте и `kein`, и `nicht`.',
        checks: [
            'Перед каждым существительным в единственном числе стоит артикль, `mein` или `kein` — или вы знаете, почему его нет (`Fieber`, `seit Montag`)',
            'Род проверен: `das Problem`, `die Heizung`, `die Rechnung`, `das Wasser`',
            'После числа больше одного — множественное число: `zwei Kinder`',
            'Есть `kein` перед существительным без артикля и `nicht` при глаголе'
        ],
        model: 'Sehr geehrter Herr Krause, ich habe ein Problem in der Wohnung. Die Heizung funktioniert seit Montag nicht, und wir haben kein warmes Wasser. Meine zwei Kinder haben schon Fieber. Außerdem ist die Rechnung für die Heizung zu hoch. Das verstehe ich nicht. Bitte schicken Sie schnell einen Handwerker. Mit freundlichen Grüßen Olga Lewtschenko',
        modelRu: 'Уважаемый господин Краузе, у меня проблема в квартире. С понедельника не работает отопление, и у нас нет горячей воды. Двое моих детей уже с температурой. Кроме того, счёт за отопление слишком большой. Этого я не понимаю. Пожалуйста, пришлите поскорее мастера. С уважением, Ольга Левченко'
    }
};
