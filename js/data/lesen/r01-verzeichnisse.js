/**
 * Lesen, Teil 1: таблички, указатели, списки.
 *
 * Теория (поиск по ключевому слову, «переодетые» слова, ловушки, слова жанра,
 * разбор примера), упражнения на навык и шесть наборов в формате экзамена.
 */

export default {
    id: 'r01',
    order: 1,
    teil: 1,
    title: 'Teil 1: таблички, указатели, списки',
    short: 'Teil 1 · Таблички',
    goal: 'После раздела вы за минуту на ситуацию находите в указателе, табличке или оглавлении нужную рубрику — по ключевому слову, даже если в списке оно названо иначе, — и уверенно выбираете «andere», когда нужного нет.',
    why: 'Teil 1 — пять баллов, для которых не нужно понимать текст целиком: достаточно найти одну строку. Ошибаются здесь не от незнания слов, а от спешки: берут рубрику со знакомым словом, не дочитав строку. Быстрый и точный Teil 1 оставляет время на более длинные тексты Teil 3 и 4.',

    theory: [
        { type: 'h', text: '1. Что проверяют в Teil 1' },
        { type: 'p', text: 'Teil 1 открывает Lesen. Перед вами список — указатель этажей, таблички в ратуше или во врачебном доме, рубрики интернет-магазина, оглавление — и пять коротких ситуаций. Для каждой надо найти, куда идти или где искать. Навык можно описать так: `sich in einem Text orientieren und selektiv bestimmte Details verstehen` — сориентироваться в тексте и выборочно понять нужные детали. Понимать весь список не требуется.' },
        {
            type: 'table',
            head: ['Что', 'Как выглядит'],
            rows: [
                ['Список', '5–7 рубрик: этажи, кабинеты, разделы, страницы. В строке — название и что там есть'],
                ['Ситуация', 'Одно-два предложения: `Sie möchten …`, `Sie brauchen …`, `Ihr Sohn hat …`'],
                ['Варианты', 'a и b — две рубрики из списка, c — «отрицательный»: `andere Etage`, `anderes Zimmer`, `andere Seite`. Он верен, когда нужное не в a и не в b'],
                ['Баллы', '5 заданий, по баллу за каждое'],
                ['Время', 'Около 9 минут на часть, но Teil 1 можно решить быстрее']
            ],
            note: 'Вариант c обычно верен в одной-двух ситуациях из пяти.'
        },
        { type: 'rule', text: 'Вы ищете не смысл текста, а **место**: строку, где есть то, что нужно в ситуации. Остальные строки внимательно читать не нужно.' },

        { type: 'h', text: '2. В чём трудность' },
        { type: 'p', text: 'Трудность не в словах, а в том, что экзамен «переодевает» ключевое слово. В ситуации — `Sie möchten ein gebrauchtes Auto kaufen`, а в списке слова `Auto` нет: там `PKW` или `Fahrzeuge`. Поэтому решение в два хода: сначала понять, **что** вам нужно (вещь, услуга, врач), потом найти рубрику, где это названо **по-другому**. Искать «слово в слово» бесполезно, а если совпадение всё же есть, оно нередко ловушка.' },

        { type: 'h', text: '3. Стратегия: пять шагов' },
        {
            type: 'list',
            items: [
                '**Прочитайте ситуацию** и выделите ключевое слово: что нужно купить, сделать, найти. Не «дочь» и не «день рождения», а «кукла».',
                '**Пробегите список только по названиям рубрик** — отделов, разделов, специальностей. Отметьте одну-две, куда может относиться ваше слово.',
                '**Проверьте строку рубрики целиком.** Есть ли там именно ваша вещь или услуга? Дочитайте до конца: в строке бывает второй врач или второй отдел, а время приёма может решить выбор.',
                '**Сравните с вариантами a и b.** Нужное есть в одной из них — это ответ. Нет ни в a, ни в b — ставьте c, `andere …`, даже если нужная рубрика в списке есть: чаще всего так и бывает.',
                '**Не ищите совпадения слово в слово.** Совпавшее слово — ещё не ответ: проверьте, в том ли оно смысле.'
            ]
        },
        { type: 'tip', text: 'Сначала найдите место в списке сами, потом смотрите на варианты: так они не подталкивают к ловушке. На ситуацию уходит около минуты, и сэкономленное время пригодится в Teil 3 и 4, где тексты длиннее.' },

        { type: 'h', text: '4. Как экзамен переодевает слова' },
        { type: 'p', text: 'Чаще всего встречаются три приёма. **Синоним**: `Handy` — `Mobiltelefone`, `heiraten` — `Eheschließungen`. **Общее слово** вместо конкретного: `Ring` — `Schmuck`, `Waschmaschine` — `Haushaltsgeräte`. **Описание** вместо названия: `Sie frieren nachts im Bett` — `Bettdecken`.' },
        {
            type: 'table',
            head: ['В ситуации', 'В списке', 'Приём'],
            rows: [
                ['`Auto`, `Motorrad`', '`PKW`, `Kfz`, `Fahrzeuge`', 'общее слово, сокращение'],
                ['`ein Geschenk`', 'смотря что дарите: `Spielwaren`, `Schreibwaren`, `Schmuck`, `Bücher`', 'ищите саму вещь'],
                ['`Kühlschrank`, `Herd`', '`Haushaltsgeräte`, `Elektrogeräte`', 'общее слово'],
                ['`Hose`, `Jacke`, `Kleid`', '`Bekleidung`, `Mode`, `Textilien`', 'общее слово'],
                ['`Tabletten`, `Medikamente`', '`Apotheke`, `Arzneimittel`', 'место, синоним'],
                ['`Zahnschmerzen`', '`Zahnarzt`, `Zahnmedizin`', 'врач по органу'],
                ['`Ihr Kind hat Fieber`', '`Kinderarzt`, `Kinder- und Jugendmedizin`', 'врач по пациенту'],
                ['`umziehen`, `neue Adresse`', '`Anmeldung`, `Meldewesen`, `Bürgerbüro`', 'услуга вместо события'],
                ['`heiraten`', '`Standesamt`, `Eheschließungen`', 'ведомство, синоним'],
                ['`Kaffee trinken`, `etwas essen`', '`Café`, `Restaurant`, `Gastronomie`', 'место']
            ]
        },
        {
            type: 'exs',
            items: [
                { de: 'Sie möchten **ein gebrauchtes Auto** kaufen.', ru: 'Вы хотите купить подержанную машину. В списке ищите `PKW`, `Kfz`, `Fahrzeuge`.' },
                { de: 'Ihr Sohn hat **Zahnschmerzen**.', ru: 'У сына болят зубы. Ищите `Zahnarzt`: решают зубы, а не возраст.' },
                { de: 'Sie haben **eine neue Wohnung** in der Stadt.', ru: 'У вас новая квартира в городе. Ищите `Anmeldung` или `Meldewesen`: новый адрес надо зарегистрировать.' },
                { de: 'Sie möchten mit einer Freundin **Kaffee trinken**.', ru: 'Вы хотите выпить кофе с подругой. Ищите `Café`, `Cafeteria`, `Restaurant`.' }
            ]
        },

        { type: 'h', text: '5. Ловушки' },
        { type: 'trap', wrong: 'Sie möchten Ihrem Neffen einen Fußball schenken. → Erdgeschoss: Geschenkpapier · Karten', right: 'Sie möchten Ihrem Neffen einen Fußball schenken. → 3. Stock: Sportartikel', why: 'Совпало слово «подарок» (`schenken` — `Geschenkpapier`), но это подарочная бумага. Дарите вы мяч, а мяч — спорттовар. Совпадение слово в слово проверяйте вдвойне.' },
        { type: 'trap', wrong: 'Sie können nur am Samstag. → Dr. Lenz, Allgemeinmedizin: Mo–Fr 8–12 Uhr', right: 'Sie können nur am Samstag. → Dr. Weber, Allgemeinmedizin: Mo–Sa 8–12 Uhr', why: 'Оба врача семейные, обе таблички «почти» подходят. Решает вторая деталь — день: в субботу принимает только доктор Вебер. Если две рубрики похожи, ищите в ситуации день, время, возраст.' },
        { type: 'trap', wrong: 'Sie suchen Arbeit. a) Zimmer 12: Sozialamt b) Zimmer 14: Standesamt → a', right: 'Sie suchen Arbeit. a) Zimmer 12: Sozialamt b) Zimmer 14: Standesamt → c) anderes Zimmer (Zimmer 20: Jobcenter)', why: '`Sozialamt` помогает деньгами, но работу не ищет: это `Jobcenter` в кабинете 20. Его нет среди a и b, значит, верен c. Рубрика «рядом по смыслу» — ещё не ответ.' },
        { type: 'rule', text: '`andere …` — не «не знаю», а осознанный ответ: нужное не в рубрике a и не в рубрике b. Чаще всего оно лежит в **другой рубрике того же списка**, которую в вариантах не назвали; реже его нет в списке вовсе. Ставьте c, дочитав обе названные строки до конца.' },

        { type: 'h', text: '6. Слова жанра' },
        {
            type: 'table',
            head: ['Универмаг', 'Значит'],
            rows: [
                ['`Untergeschoss` (UG)', 'этаж ниже уровня улицы'],
                ['`Erdgeschoss` (EG)', 'этаж на уровне улицы, по-русски первый'],
                ['`1. Stock`, `1. Obergeschoss` (1. OG), `1. Etage`', 'по-русски второй этаж'],
                ['`Abteilung`', 'отдел'],
                ['`Kasse`', 'касса'],
                ['`Kundenservice`, `Information`', 'служба для покупателей, справочная: обмен, возврат, вопросы'],
                ['`Rolltreppe` / `Aufzug`, `Lift`', 'эскалатор / лифт'],
                ['`-waren`, `-artikel`, `-bedarf`', 'товары: `Spielwaren`, `Sportartikel`, `Bürobedarf`']
            ],
            note: 'Немцы считают этажи от `Erdgeschoss`. Поэтому `1. Stock` — по-русски второй этаж, `2. Stock` — третий.'
        },
        {
            type: 'table',
            head: ['Ратуша, ведомства', 'Что там делают'],
            rows: [
                ['`Zimmer`, `Raum`', 'кабинет'],
                ['`Anmeldung`, `Pass- und Meldewesen`, `Bürgerbüro`', 'регистрация адреса, паспорт, удостоверение личности'],
                ['`Standesamt`', 'ЗАГС: рождение, брак, смерть'],
                ['`Sozialamt`', 'социальная помощь'],
                ['`Ausländerbehörde`', 'вид на жительство, визы'],
                ['`Kfz-Zulassungsstelle`', 'регистрация машин, номера (`Kennzeichen`)'],
                ['`Fundbüro`', 'бюро находок'],
                ['`Jobcenter`, `Agentur für Arbeit`', 'поиск работы, пособие по безработице']
            ]
        },
        {
            type: 'table',
            head: ['Врачи', 'Значит'],
            rows: [
                ['`Hausarzt`, `Allgemeinmedizin`', 'семейный врач, терапевт'],
                ['`Facharzt`', 'врач-специалист'],
                ['`Zahnarzt`', 'стоматолог'],
                ['`Frauenarzt`, `Gynäkologie`', 'гинеколог'],
                ['`Hautarzt`, `Dermatologie`', 'дерматолог; не путайте с `Hausarzt`'],
                ['`Kinderarzt`, `Kinder- und Jugendmedizin`', 'педиатр'],
                ['`Augenarzt`; `HNO-Arzt` (Hals, Nase, Ohren)', 'окулист; лор'],
                ['`Sprechstunde`; `nach Vereinbarung`', 'часы приёма; по записи']
            ]
        },
        {
            type: 'table',
            head: ['Интернет-магазин', 'Что внутри'],
            rows: [
                ['`Haushalt`, `Haushaltsgeräte`', 'посуда, кухня, бытовая техника'],
                ['`Heimwerken`, `Baumarkt`', 'инструменты, краска, всё для ремонта'],
                ['`Bürobedarf`, `Schreibwaren`', 'бумага, ручки, папки'],
                ['`Drogerie`', 'мыло, шампунь, косметика, бытовая химия'],
                ['`Tierbedarf`', 'корм и вещи для животных'],
                ['`Unterhaltungselektronik`, `Audio`', 'телевизоры, музыка, наушники'],
                ['`Fahrzeuge`, `Kfz`', 'машины, мотоциклы и всё для них']
            ]
        },

        { type: 'h', text: '7. Разбор примера' },
        {
            type: 'table',
            head: ['Baumarkt Fuchs', 'Abteilungen'],
            rows: [
                ['Erdgeschoss', 'Werkzeug · Farben · Schrauben · Kasse'],
                ['1. Stock', 'Garten · Pflanzen · Grills'],
                ['2. Stock', 'Bad · Küche · Lampen']
            ],
            note: 'Ситуация: `Im Wohnzimmer ist es abends zu dunkel. Sie brauchen mehr Licht.` Варианты: a) `Erdgeschoss`, b) `1. Stock`, c) `andere Etage`.'
        },
        {
            type: 'list',
            items: [
                '**Шаг 1.** Ключевое слово — `mehr Licht`: нужна лампа. `Wohnzimmer` и `abends` — фон.',
                '**Шаг 2.** Пробегаем отделы: свет дают `Lampen`, они на `2. Stock`.',
                '**Шаг 3.** Проверяем названные рубрики. a) `Erdgeschoss`: `Werkzeug · Farben · Schrauben · Kasse` — ламп нет; краска вечером светлее не сделает. b) `1. Stock`: `Garten · Pflanzen · Grills` — тоже нет.',
                '**Шаг 4.** Лампы в списке есть, но их этаж (`2. Stock`) среди вариантов не назван. Не ищите «хоть что-то похожее» в a и b.',
                '**Ответ:** c, `andere Etage`. Это самый частый случай «andere»: нужная рубрика в списке есть, но в вариантах её нет.'
            ]
        },

        { type: 'h', text: '8. Незнакомое слово в списке' },
        { type: 'p', text: 'Словарей на экзамене нет, а в списке бывают длинные слова. Не застревайте на них: немецкое сложное слово собрано из коротких, и **главное — последнее**. Разберите слово на части и найдите знакомый корень.' },
        {
            type: 'table',
            head: ['Слово', 'Части', 'Значит'],
            rows: [
                ['`Haushaltsgeräte`', '`Haushalt` + `Geräte`', 'приборы для дома'],
                ['`Schreibwaren`', '`schreiben` + `Waren`', 'товары для письма: канцтовары'],
                ['`Bettwäsche`', '`Bett` + `Wäsche`', 'бельё для кровати, а не кровати'],
                ['`Lebensmittel`', '`Leben` + `Mittel`', 'продукты питания'],
                ['`Fundbüro`', '`Fund` (от `finden`) + `Büro`', 'бюро находок'],
                ['`Tierbedarf`', '`Tier` + `Bedarf`', 'всё, что нужно животным'],
                ['`Kfz`', '`Kraftfahrzeug`', 'машина, мотоцикл']
            ],
            note: '`Bettwäsche` — это `Wäsche`, а не `Bett`: смысл несёт последняя часть.'
        },
        { type: 'tip', text: 'Если корень не помог, решайте исключением: важны только две названные рубрики. Подходит одна из них — ответ найден. Ни одна не подходит (и в незнакомом слове нет ничего общего с ситуацией) — ставьте `andere …`. Непонятные строки, которых нет среди вариантов, на ответ не влияют.' }
    ],

    exercises: [
        // ---- слова жанра
        { id: 'r01-01', type: 'choice', q: 'Какой этаж немецкого универмага находится на уровне улицы?',
          options: ['Erdgeschoss', '1. Stock', 'Untergeschoss'], answer: 0,
          explain: '`Erdgeschoss` (EG) — этаж на уровне земли, по-русски первый. `1. Stock` — этажом выше, по-русски второй. `Untergeschoss` — ниже уровня улицы.', tag: 'lesen_wort' },
        { id: 'r01-02', type: 'choice', q: 'В лифте кнопки UG, EG, 1, 2, 3. Вам нужен третий этаж по-русскому счёту. Какую кнопку нажать?',
          options: ['2', '3', 'EG'], answer: 0,
          explain: 'Немцы начинают счёт с `Erdgeschoss`: EG — по-русски первый этаж, 1 — второй, 2 — третий.', tag: 'lesen_wort' },
        { id: 'r01-03', type: 'choice', q: 'Что значит `PKW` (или `Pkw`) в списке?',
          options: ['легковой автомобиль', 'грузовик', 'парковка'], answer: 0,
          explain: '`PKW` — `Personenkraftwagen`, легковая машина. Грузовик — `LKW`, парковка — `Parkplatz` или `Parkhaus`. В ситуации обычно стоит просто `Auto`.', tag: 'lesen_wort' },
        { id: 'r01-04', type: 'choice', q: 'Что продают в отделе `Bettwäsche`?',
          options: ['постельное бельё', 'кровати', 'стиральный порошок'], answer: 0,
          explain: '`Bettwäsche` = `Bett` + `Wäsche`: главное — последнее слово, бельё. Кровати ищите в `Möbel` или `Betten`, порошок (`Waschmittel`) — в `Drogerie`.', tag: 'lesen_wort' },
        { id: 'r01-05', type: 'choice', q: 'На табличке врача: `Termine nach Vereinbarung`. Что это значит?',
          options: ['приём по предварительной записи', 'приём без записи', 'приём только в экстренных случаях'], answer: 0,
          explain: '`Vereinbarung` — договорённость: время приёма надо заранее согласовать, позвонить или записаться. Приём без записи обозначают `offene Sprechstunde` или `ohne Termin`.', tag: 'lesen_wort' },
        { id: 'r01-06', type: 'choice', q: 'Какое слово в указателе значит то же, что `Aufzug`?',
          options: ['Lift', 'Rolltreppe', 'Treppenhaus'], answer: 0,
          explain: '`Aufzug` и `Lift` — лифт. `Rolltreppe` — эскалатор, `Treppenhaus` — лестничная клетка.', tag: 'lesen_wort' },
        { id: 'r01-07', type: 'gap', q: 'Разберите слово на части: вставьте вторую часть.',
          text: 'Haushaltsgeräte = Haushalt + ___', hint: 'приборы', answer: ['Geräte'],
          explain: 'Главное слово — последнее: `Geräte`, приборы. `Haushaltsgeräte` — приборы для дома: стиральная машина, холодильник, пылесос.', tag: 'lesen_wort' },
        { id: 'r01-08', type: 'gap', q: 'Вставьте названия врачей.',
          text: 'Mit Zahnschmerzen geht man zum ___, mit einem Ausschlag auf der Haut zum ___.', hint: 'стоматолог; дерматолог',
          answer: [['Zahnarzt'], ['Hautarzt', 'Dermatologen']],
          explain: '`Zahnarzt` — от `Zahn` (зуб), `Hautarzt` — от `Haut` (кожа). Не путайте `Hautarzt` с `Hausarzt`, семейным врачом: слова отличаются одной буквой.', tag: 'lesen_wort' },
        { id: 'r01-09', type: 'gap', q: 'Вставьте слово.',
          text: 'Medikamente auf Rezept bekommt man in der ___.', hint: 'аптека', answer: ['Apotheke'],
          explain: '`Apotheke` — аптека; в указателе врачебного дома она часто в `Erdgeschoss`. `Drogerie` — магазин косметики и бытовой химии: лекарств по рецепту там нет.', tag: 'lesen_wort' },
        { id: 'r01-10', type: 'gap', q: 'Вставьте глагол.',
          text: 'Nach dem Umzug muss man sich im Bürgerbüro ___.', hint: 'зарегистрироваться по новому адресу',
          answer: [['ummelden', 'anmelden', 'melden']],
          explain: 'Новый адрес надо зарегистрировать: `sich anmelden` (переехали в город) или `sich ummelden` (переехали внутри города). На табличках это `Anmeldung`, `Meldewesen`, `Bürgerbüro`.', tag: 'lesen_wort' },
        { id: 'r01-11', type: 'choice', q: 'Ратуша. Вы потеряли в парке кошелёк, его мог кто-то найти. Какая табличка вам нужна?',
          options: ['Fundbüro', 'Sozialamt', 'Standesamt'], answer: 0,
          explain: '`Fundbüro` — бюро находок: туда приносят найденные вещи (`Fund` от `finden`). `Sozialamt` — социальная помощь, `Standesamt` — ЗАГС.', tag: 'lesen_wort' },

        // ---- ключевое слово и рубрика
        { id: 'r01-12', type: 'choice', q: 'Какое слово в ситуации ключевое для поиска в списке?',
          text: 'Ihre Tochter kommt im September in die Schule. Sie braucht noch einen Schulranzen.',
          options: ['Schulranzen', 'Tochter', 'September'], answer: 0,
          explain: 'Ключевое слово — то, что нужно найти или купить: `Schulranzen`, школьный ранец. Дочь и сентябрь — фон: по ним рубрику не найти.', tag: 'lesen_suche' },
        { id: 'r01-13', type: 'choice', q: 'Какая рубрика подходит к ситуации?',
          text: 'Sie brauchen einen neuen Kühlschrank.',
          options: ['Haushaltsgeräte', 'Lebensmittel', 'Möbel'], answer: 0,
          explain: '`Kühlschrank`, холодильник, — прибор для дома: `Haushaltsgeräte`. В холодильнике хранят продукты, но `Lebensmittel` — это сами продукты. `Möbel` — мебель.', tag: 'lesen_suche' },
        { id: 'r01-14', type: 'choice', q: 'Какая рубрика подходит к ситуации?',
          text: 'Ihre Nichte wird sieben. Sie möchten ihr ein Puzzle schenken.',
          options: ['Spielwaren', 'Geschenkpapier', 'Kindermode'], answer: 0,
          explain: 'Пазл — игрушка: `Spielwaren`. В `Geschenkpapier` совпадает только слово «подарок», а это подарочная бумага. `Kindermode` — детская одежда.', tag: 'lesen_suche' },
        { id: 'r01-15', type: 'choice', q: 'Какое ведомство в ратуше вам нужно?',
          text: 'Sie und Ihr Partner möchten im Sommer heiraten.',
          options: ['Standesamt', 'Sozialamt', 'Bürgerbüro'], answer: 0,
          explain: 'Браки регистрирует `Standesamt` (ЗАГС); на табличке это `Eheschließungen`. `Sozialamt` — социальная помощь, `Bürgerbüro` — адрес и документы.', tag: 'lesen_suche' },

        // ---- ловушки
        { id: 'r01-16', type: 'choice', q: 'Ситуация: «Sie suchen einen Teppich für das Kinderzimmer.» Куда идти?',
          text: '1. Stock: Kindermode · Spielwaren | 3. Stock: Möbel · Teppiche · Gardinen',
          options: ['3. Stock', '1. Stock', 'andere Etage'], answer: 0,
          explain: 'Ключевое слово — `Teppich`, ковёр, а ковры на `3. Stock`. `Kinder` в ситуации тянет к детскому отделу, но там одежда и игрушки.', tag: 'lesen_suche' },
        { id: 'r01-17', type: 'choice', q: 'Ситуация: «Sie brauchen eine neue Waschmaschine.» Какой вариант верен?',
          text: 'Erdgeschoss: Zeitschriften · Bücher · Café | 1. Stock: Fernseher · Radios · Kameras',
          options: ['Erdgeschoss', '1. Stock', 'andere Etage'], answer: 2,
          explain: 'На `1. Stock` техника, но телевизоры, радио и фотоаппараты: стиральной машины в строке нет, и в списке её нет вообще. Не «дотягивайте» рубрику до ситуации — ответ `andere Etage`.', tag: 'lesen_suche' },
        { id: 'r01-18', type: 'choice', q: 'Ситуация: «Sie können nur am Donnerstag nach 17 Uhr zum Arzt gehen.» Какая табличка подходит?',
          text: 'Dr. Sander, Allgemeinmedizin: Mo–Fr 8–12 Uhr | Dr. Yilmaz, Allgemeinmedizin: Mo–Fr 8–12 Uhr, Di und Do 15–19 Uhr',
          options: ['Dr. Yilmaz', 'Dr. Sander', 'keine von beiden'], answer: 0,
          explain: 'Оба врача семейные, решает время: по четвергам с 15 до 19 принимает только доктор Йылмаз. Когда две рубрики похожи, ищите в ситуации второе условие.', tag: 'lesen_suche' },
        { id: 'r01-19', type: 'choice', q: 'Ситуация: «Sie möchten Ihrer Nachbarin einen Roman schenken.» Какой вариант верен?',
          text: '1. Stock: Damenmode · Herrenmode | 2. Stock: Haushaltswaren · Geschirr | 3. Stock: Spielwaren · Bücher',
          options: ['1. Stock', '2. Stock', 'andere Etage'], answer: 2,
          explain: 'Роман — книга, `Bücher` на `3. Stock`. На `1. Stock` одежда, на `2. Stock` посуда: оба не подходят, а `3. Stock` среди вариантов нет. Значит, `andere Etage` — это самый частый случай: нужная рубрика в списке есть, но не названа.', tag: 'lesen_suche' },
        { id: 'r01-20', type: 'choice', q: 'Когда в Teil 1 верен вариант «andere …»?',
          options: ['Нужного нет ни в рубрике a, ни в рубрике b', 'В ситуации есть незнакомое слово', 'Подходят обе рубрики, a и b'], answer: 0,
          explain: '`andere …` — осознанный ответ: вы дочитали обе названные строки, и нужного там нет. Чаще всего оно лежит в другой рубрике списка, реже его нет нигде. Незнакомое слово разбирают на части, а если подходят обе рубрики, перечитайте ситуацию: в ней есть второе условие.', tag: 'lesen_suche' },
        { id: 'r01-21', type: 'order', q: 'Расставьте шаги решения по порядку.',
          items: ['Прочитать ситуацию и найти ключевое слово', 'Пробежать список по названиям рубрик', 'Дочитать строку подходящей рубрики целиком', 'Сравнить с вариантами a и b, если нужного там нет — выбрать «andere»'],
          explain: 'Сначала — что нужно, потом — где это может быть, затем проверка строки и только в конце варианты. Кто начинает с вариантов, легче попадает в ловушку.', tag: 'lesen_suche' }
    ],

    sets: [
        {
            id: 'r01-s1',
            title: 'Универмаг: указатель этажей',
            situation: 'Sie sind im Kaufhaus Brenner und lesen den Wegweiser am Eingang. Wohin gehen Sie?',
            material: [
                { kind: 'list', title: 'Kaufhaus Brenner — Wegweiser',
                  rows: [
                      { head: 'Untergeschoss', text: 'Lebensmittel · Getränke · Süßwaren · Drogerie' },
                      { head: 'Erdgeschoss', text: 'Uhren · Schmuck · Taschen · Parfümerie · Zeitschriften' },
                      { head: '1. Stock', text: 'Damenmode · Wäsche · Strümpfe · Hüte' },
                      { head: '2. Stock', text: 'Herrenmode · Kindermode · Sportbekleidung · Schuhe' },
                      { head: '3. Stock', text: 'Haushaltswaren · Elektrogeräte · Lampen · Bettwäsche' },
                      { head: '4. Stock', text: 'Spielwaren · Schreibwaren · Bücher · Kundenservice · Café' }
                  ] }
            ],
            items: [
                { id: 'r01-s1-1', q: 'Ihre Tochter hat bald Geburtstag. Sie möchten ihr eine Puppe schenken.',
                  options: ['2. Stock', '4. Stock', 'andere Etage'], answer: 1,
                  evidence: 'Spielwaren',
                  why: 'Кукла — игрушка, а игрушки — это `Spielwaren` на `4. Stock`. На `2. Stock` есть `Kindermode`, но это детская одежда: слово «ребёнок» здесь ловушка.' },
                { id: 'r01-s1-2', q: 'Sie suchen für Ihre Mutter eine schöne Kette.',
                  options: ['Erdgeschoss', '1. Stock', 'andere Etage'], answer: 0,
                  evidence: 'Schmuck',
                  why: 'Цепочка (`Kette`) — украшение, то есть `Schmuck` в `Erdgeschoss`. На `1. Stock` — женская одежда и бельё, украшений там нет.' },
                { id: 'r01-s1-3', q: 'Ihre Kaffeemaschine ist kaputt. Sie brauchen eine neue.',
                  options: ['Untergeschoss', '3. Stock', 'andere Etage'], answer: 1,
                  evidence: 'Elektrogeräte',
                  why: 'Кофеварка — электроприбор: `Elektrogeräte` на `3. Stock`. В `Untergeschoss` есть `Getränke`, но там продают сами напитки, а не машины для них.' },
                { id: 'r01-s1-4', q: 'Sie feiern am Samstag eine Party und brauchen noch zehn Flaschen Mineralwasser.',
                  options: ['1. Stock', '2. Stock', 'andere Etage'], answer: 2,
                  evidence: 'Getränke',
                  why: 'Минеральная вода — напиток: `Getränke` в `Untergeschoss`. На `1. Stock` и `2. Stock` только одежда и обувь, а `Untergeschoss` среди вариантов нет — поэтому `andere Etage`.' },
                { id: 'r01-s1-5', q: 'Ihr Sohn braucht für die Schule Hefte und Buntstifte.',
                  options: ['4. Stock', 'Erdgeschoss', 'andere Etage'], answer: 0,
                  evidence: 'Schreibwaren',
                  why: 'Тетради и карандаши — канцтовары, `Schreibwaren` на `4. Stock`. В `Erdgeschoss` есть `Zeitschriften` — тоже бумага, но это журналы.' }
            ],
            glossary: [
                { de: 'das Untergeschoss', ru: 'этаж ниже уровня улицы' },
                { de: 'das Erdgeschoss', ru: 'этаж на уровне улицы (по-русски первый)' },
                { de: 'der Stock', ru: 'этаж; `1. Stock` — по-русски второй' },
                { de: 'die Lebensmittel', ru: 'продукты питания' },
                { de: 'die Süßwaren', ru: 'сладости' },
                { de: 'die Drogerie', ru: 'косметика и бытовая химия' },
                { de: 'der Schmuck', ru: 'украшения' },
                { de: 'die Wäsche', ru: 'бельё' },
                { de: 'die Getränke', ru: 'напитки' },
                { de: 'die Haushaltswaren', ru: 'товары для дома: посуда, кухня' },
                { de: 'die Elektrogeräte', ru: 'электроприборы' },
                { de: 'die Spielwaren', ru: 'игрушки' },
                { de: 'die Schreibwaren', ru: 'канцтовары' },
                { de: 'der Kundenservice', ru: 'служба для покупателей' }
            ]
        },
        {
            id: 'r01-s2',
            title: 'Ратуша: таблички с кабинетами',
            situation: 'Sie sind im Rathaus Bergfelden und lesen die Übersicht im Erdgeschoss. In welches Zimmer gehen Sie?',
            material: [
                { kind: 'list', title: 'Rathaus Bergfelden — Übersicht',
                  rows: [
                      { head: 'Zimmer 004', text: 'Bürgerbüro: Wohnsitz an- und ummelden · Personalausweis · Reisepass' },
                      { head: 'Zimmer 006', text: 'Kfz-Zulassung: Fahrzeuge an- und abmelden · Kennzeichen' },
                      { head: 'Zimmer 112', text: 'Standesamt: Geburten · Eheschließungen · Sterbefälle' },
                      { head: 'Zimmer 118', text: 'Sozialamt: Wohngeld · Sozialhilfe · Beratung bei Schulden' },
                      { head: 'Zimmer 205', text: 'Ausländerbehörde: Aufenthaltstitel · Verlängerung · Einbürgerung' },
                      { head: 'Zimmer 210', text: 'Fundbüro: verlorene Sachen abgeben und abholen' }
                  ] }
            ],
            items: [
                { id: 'r01-s2-1', q: 'Sie sind nach Bergfelden umgezogen. Sie müssen Ihre neue Adresse melden.',
                  options: ['Zimmer 004', 'Zimmer 205', 'anderes Zimmer'], answer: 0,
                  evidence: 'Wohnsitz an- und ummelden',
                  why: 'Новый адрес регистрируют в `Bürgerbüro`: `Wohnsitz an- und ummelden`, кабинет 004. `Ausländerbehörde` занимается видом на жительство, а не адресом, даже если вы иностранец.' },
                { id: 'r01-s2-2', q: 'Sie haben ein gebrauchtes Motorrad gekauft und brauchen jetzt ein Nummernschild.',
                  options: ['Zimmer 006', 'Zimmer 004', 'anderes Zimmer'], answer: 0,
                  evidence: 'Kennzeichen',
                  why: '`Nummernschild` на языке ведомств — `Kennzeichen`, а мотоцикл — это `Fahrzeug`: значит, `Kfz-Zulassung`, кабинет 006. `Bürgerbüro` оформляет документы людям, а не машинам.' },
                { id: 'r01-s2-3', q: 'Sie haben letzte Woche ein Baby bekommen. Sie brauchen eine Geburtsurkunde.',
                  options: ['Zimmer 205', 'Zimmer 112', 'anderes Zimmer'], answer: 1,
                  evidence: 'Geburten',
                  why: 'Рождение регистрирует `Standesamt` (ЗАГС), в строке — `Geburten`, кабинет 112. `Ausländerbehörde` выдаёт вид на жительство, а не свидетельство о рождении.' },
                { id: 'r01-s2-4', q: 'Sie verdienen wenig und können die Miete kaum bezahlen. Sie möchten Hilfe beantragen.',
                  options: ['Zimmer 004', 'Zimmer 118', 'anderes Zimmer'], answer: 1,
                  evidence: 'Wohngeld',
                  why: 'Помощь с квартплатой — `Wohngeld`, пособие на жильё; это `Sozialamt`, кабинет 118. В кабинете 004 жильё упомянуто в другом смысле: там регистрируют адрес.' },
                { id: 'r01-s2-5', q: 'Sie haben auf dem Marktplatz eine Geldbörse gefunden. Sie möchten sie abgeben.',
                  options: ['Zimmer 006', 'Zimmer 112', 'anderes Zimmer'], answer: 2,
                  evidence: 'verlorene Sachen abgeben',
                  why: 'Найденную вещь сдают в бюро находок: `Fundbüro`, `verlorene Sachen abgeben`, кабинет 210. Кабинеты 006 (машины) и 112 (ЗАГС) здесь ни при чём, а 210 среди вариантов нет — значит, `anderes Zimmer`.' }
            ],
            glossary: [
                { de: 'das Rathaus', ru: 'ратуша, здание городской администрации' },
                { de: 'das Bürgerbüro', ru: 'бюро обслуживания граждан' },
                { de: 'der Wohnsitz', ru: 'место жительства' },
                { de: 'anmelden / ummelden', ru: 'зарегистрировать / перерегистрировать (адрес, машину)' },
                { de: 'der Personalausweis', ru: 'удостоверение личности' },
                { de: 'der Reisepass', ru: 'заграничный паспорт' },
                { de: 'die Kfz-Zulassung', ru: 'регистрация машин и мотоциклов' },
                { de: 'das Kennzeichen', ru: 'номерной знак' },
                { de: 'das Standesamt', ru: 'ЗАГС' },
                { de: 'die Eheschließung', ru: 'заключение брака' },
                { de: 'das Wohngeld', ru: 'пособие на оплату жилья' },
                { de: 'die Ausländerbehörde', ru: 'ведомство по делам иностранцев' },
                { de: 'der Aufenthaltstitel', ru: 'вид на жительство' },
                { de: 'das Fundbüro', ru: 'бюро находок' }
            ]
        },
        {
            id: 'r01-s3',
            title: 'Дом врачей: таблички по этажам',
            situation: 'Sie stehen vor dem Ärztehaus am Lindenplatz und lesen das Schild neben der Tür. In welches Stockwerk gehen Sie?',
            material: [
                { kind: 'list', title: 'Ärztehaus am Lindenplatz',
                  rows: [
                      { head: 'Erdgeschoss', text: 'Linden-Apotheke · Mo–Fr 8–19 Uhr, Sa 9–14 Uhr' },
                      { head: '1. Stock', text: 'Dr. med. Petra Ahrens · Hausärztin (Allgemeinmedizin) · Sprechstunde Mo–Fr 8–12 Uhr' },
                      { head: '2. Stock', text: 'Dr. med. Martin Krüger · Hausarzt (Allgemeinmedizin) · Sprechstunde Mo–Fr 14–20 Uhr' },
                      { head: '3. Stock', text: 'Dr. med. Jan Wolter · Kinder- und Jugendarzt · Sprechstunde Mo–Fr 9–13 Uhr' },
                      { head: '4. Stock', text: 'Dr. med. dent. Selin Kaya · Zahnärztin · Termine nach Vereinbarung' },
                      { head: '5. Stock', text: 'Dr. med. Ulrike Sommer · Frauenärztin · Dr. med. Hakan Demir · Augenarzt' }
                  ] }
            ],
            items: [
                { id: 'r01-s3-1', q: 'Es ist Dienstag. Sie haben Rückenschmerzen und möchten nach der Arbeit, um 17 Uhr, zum Hausarzt gehen.',
                  options: ['1. Stock', '2. Stock', 'andere Etage'], answer: 1,
                  evidence: 'Mo–Fr 14–20 Uhr',
                  why: 'Семейных врачей двое, но в 17 часов принимает только доктор Крюгер: `Mo–Fr 14–20 Uhr`, `2. Stock`. Доктор Аренс на `1. Stock` принимает только до 12.' },
                { id: 'r01-s3-2', q: 'Ihr Arzt hat Ihnen eine Überweisung zum Hautarzt gegeben.',
                  options: ['2. Stock', '1. Stock', 'andere Etage'], answer: 2,
                  evidence: '',
                  why: 'Дерматолога (`Hautarzt`) нет нигде в списке. На `1. Stock` и `2. Stock` — `Hausärztin` и `Hausarzt`, семейные врачи: слова отличаются одной буквой. Поэтому `andere Etage`.' },
                { id: 'r01-s3-3', q: 'Ihr Baby ist vier Wochen alt und muss zur Vorsorgeuntersuchung.',
                  options: ['3. Stock', '5. Stock', 'andere Etage'], answer: 0,
                  evidence: 'Kinder- und Jugendarzt',
                  why: 'Осмотр младенца проводит детский врач — `Kinder- und Jugendarzt` на `3. Stock`. `Frauenärztin` на `5. Stock` — врач для мамы, а не для ребёнка.' },
                { id: 'r01-s3-4', q: 'Ihre Augen tun beim Lesen weh, und Sie sehen nicht mehr gut.',
                  options: ['4. Stock', '5. Stock', 'andere Etage'], answer: 1,
                  evidence: 'Augenarzt',
                  why: 'На `5. Stock` два врача: первой названа `Frauenärztin`, но дальше в той же строке — `Augenarzt`, окулист. Строку надо дочитать до конца. На `4. Stock` — стоматолог.' },
                { id: 'r01-s3-5', q: 'Ihre Ärztin hat Ihnen ein Rezept gegeben. Jetzt brauchen Sie die Tabletten.',
                  options: ['3. Stock', '4. Stock', 'andere Etage'], answer: 2,
                  evidence: 'Linden-Apotheke',
                  why: 'Лекарства по рецепту выдаёт аптека — `Linden-Apotheke` в `Erdgeschoss`. На `3. Stock` детский врач, на `4. Stock` стоматолог, таблеток там не выдают, а `Erdgeschoss` среди вариантов нет. Поэтому `andere Etage`.' }
            ],
            glossary: [
                { de: 'das Ärztehaus', ru: 'дом врачей: несколько практик в одном здании' },
                { de: 'die Apotheke', ru: 'аптека' },
                { de: 'der Hausarzt / die Hausärztin', ru: 'семейный врач' },
                { de: 'die Allgemeinmedizin', ru: 'общая медицина' },
                { de: 'die Sprechstunde', ru: 'часы приёма' },
                { de: 'der Kinder- und Jugendarzt', ru: 'педиатр' },
                { de: 'die Zahnärztin', ru: 'стоматолог (женщина)' },
                { de: 'nach Vereinbarung', ru: 'по предварительной договорённости' },
                { de: 'die Frauenärztin', ru: 'гинеколог (женщина)' },
                { de: 'der Augenarzt', ru: 'окулист' },
                { de: 'der Hautarzt', ru: 'дерматолог' },
                { de: 'die Überweisung', ru: 'направление к специалисту' },
                { de: 'das Rezept', ru: 'рецепт' },
                { de: 'die Vorsorgeuntersuchung', ru: 'профилактический осмотр' }
            ]
        },
        {
            id: 'r01-s4',
            title: 'Интернет-магазин: рубрики',
            situation: 'Sie möchten im Online-Kaufhaus „Marktplatz Nord“ etwas bestellen. In welcher Rubrik suchen Sie?',
            material: [
                { kind: 'list', title: 'Marktplatz Nord — alle Rubriken',
                  rows: [
                      { head: 'Elektronik', text: 'Fernseher · Kopfhörer · Lautsprecher · Kameras' },
                      { head: 'Computer', text: 'Laptops · Drucker · Tastaturen · Software' },
                      { head: 'Garten', text: 'Gartenmöbel · Rasenmäher · Pflanzen · Grills' },
                      { head: 'Baby & Kind', text: 'Kinderwagen · Spielzeug · Babykleidung · Kinderbetten' },
                      { head: 'Sport & Camping', text: 'Fahrräder · Zelte · Fitnessgeräte · Sportschuhe' },
                      { head: 'Mode', text: 'Damen · Herren · Taschen · Uhren' },
                      { head: 'Auto & Motorrad', text: 'Reifen · Ersatzteile · Motorradhelme · Motoröl' }
                  ] }
            ],
            items: [
                { id: 'r01-s4-1', q: 'Sie möchten Briefe und Fotos zu Hause ausdrucken. Dafür brauchen Sie ein Gerät.',
                  options: ['Elektronik', 'Computer', 'andere Rubrik'], answer: 1,
                  evidence: 'Drucker',
                  why: '`ausdrucken` — распечатать, для этого нужен принтер: `Drucker` в рубрике `Computer`. В `Elektronik` есть `Kameras`: фото ими снимают, но не печатают.' },
                { id: 'r01-s4-2', q: 'Sie erwarten ein Baby und suchen einen Wagen für Spaziergänge.',
                  options: ['Baby & Kind', 'Auto & Motorrad', 'andere Rubrik'], answer: 0,
                  evidence: 'Kinderwagen',
                  why: 'Коляска для прогулок с малышом — `Kinderwagen`, рубрика `Baby & Kind`. Слово `Wagen` тянет к `Auto & Motorrad`, но там шины, запчасти и масло.' },
                { id: 'r01-s4-3', q: 'Das Gras vor Ihrem Haus ist zu hoch. Sie brauchen ein Gerät, um es kurz zu schneiden.',
                  options: ['Mode', 'Baby & Kind', 'andere Rubrik'], answer: 2,
                  evidence: 'Rasenmäher',
                  why: 'Траву стригут газонокосилкой — `Rasenmäher` в рубрике `Garten`. `Mode` (одежда) и `Baby & Kind` (детские вещи) явно не подходят, а `Garten` среди вариантов нет. Поэтому `andere Rubrik`.' },
                { id: 'r01-s4-4', q: 'Sie möchten im Zug Musik hören. Die anderen Fahrgäste sollen aber nichts hören.',
                  options: ['Elektronik', 'Computer', 'andere Rubrik'], answer: 0,
                  evidence: 'Kopfhörer',
                  why: 'Музыку «только для себя» слушают в наушниках — `Kopfhörer`, рубрика `Elektronik`. В `Computer` наушников нет: там ноутбуки, принтеры, клавиатуры.' },
                { id: 'r01-s4-5', q: 'Sie fahren jeden Tag mit dem Motorrad zur Arbeit. Sie möchten dabei Ihren Kopf schützen.',
                  options: ['Sport & Camping', 'Auto & Motorrad', 'andere Rubrik'], answer: 1,
                  evidence: 'Motorradhelme',
                  why: 'Голову на мотоцикле защищает шлем: `Motorradhelme` в рубрике `Auto & Motorrad`. В `Sport & Camping` есть велосипеды, но шлемов нет.' }
            ],
            glossary: [
                { de: 'die Rubrik', ru: 'раздел, рубрика' },
                { de: 'der Kopfhörer', ru: 'наушники' },
                { de: 'der Lautsprecher', ru: 'колонка, динамик' },
                { de: 'der Drucker', ru: 'принтер' },
                { de: 'ausdrucken', ru: 'распечатать' },
                { de: 'die Tastatur', ru: 'клавиатура' },
                { de: 'die Gartenmöbel', ru: 'садовая мебель' },
                { de: 'der Rasenmäher', ru: 'газонокосилка' },
                { de: 'der Kinderwagen', ru: 'детская коляска' },
                { de: 'das Zelt', ru: 'палатка' },
                { de: 'der Reifen', ru: 'шина' },
                { de: 'das Ersatzteil', ru: 'запчасть' },
                { de: 'der Helm', ru: 'шлем' }
            ]
        },
        {
            id: 'r01-s5',
            title: 'Народная школа: оглавление программы',
            situation: 'Sie lesen das Programmheft der Volkshochschule Hasselbach. Auf welcher Seite finden Sie den passenden Kurs?',
            material: [
                { kind: 'list', title: 'VHS Hasselbach · Programm Herbst/Winter · Inhalt',
                  rows: [
                      { head: 'Seite 4', text: 'Gesellschaft und Umwelt: Politik · Geschichte · Stadtführungen' },
                      { head: 'Seite 12', text: 'Beruf und Computer: Textverarbeitung · Tabellen · Bewerbungstraining' },
                      { head: 'Seite 20', text: 'Sprachen: Deutsch als Fremdsprache · Englisch · Spanisch · Türkisch' },
                      { head: 'Seite 32', text: 'Gesundheit: Yoga · Rückengymnastik · Entspannung · Erste Hilfe' },
                      { head: 'Seite 40', text: 'Kochen und Ernährung: Internationale Küche · Backen · Gesund essen' },
                      { head: 'Seite 48', text: 'Kultur und Kreatives: Malen · Fotografie · Nähen · Theater' },
                      { head: 'Seite 56', text: 'Prüfungen: Deutsch-Test für Zuwanderer · Einbürgerungstest · Hauptschulabschluss' }
                  ] }
            ],
            items: [
                { id: 'r01-s5-1', q: 'Sie möchten für eine Feier zum ersten Mal selbst eine Torte machen.',
                  options: ['Seite 40', 'Seite 48', 'andere Seite'], answer: 0,
                  evidence: 'Backen',
                  why: 'Торт пекут: курс `Backen` в разделе `Kochen und Ernährung`, страница 40. На странице 48 — творчество (рисование, фото, шитьё, театр), выпечки там нет.' },
                { id: 'r01-s5-2', q: 'Sie suchen eine neue Arbeit und haben bald ein Vorstellungsgespräch. Sie möchten sich gut vorbereiten.',
                  options: ['Seite 4', 'Seite 12', 'andere Seite'], answer: 1,
                  evidence: 'Bewerbungstraining',
                  why: 'Подготовка к собеседованию — `Bewerbungstraining` в разделе `Beruf und Computer`, страница 12. На странице 4 — политика, история и экскурсии, о работе там ничего нет.' },
                { id: 'r01-s5-3', q: 'Sie fahren jeden Sommer nach Spanien und möchten dort mit den Leuten sprechen können.',
                  options: ['Seite 4', 'Seite 48', 'andere Seite'], answer: 2,
                  evidence: 'Spanisch',
                  why: 'Чтобы говорить с людьми в Испании, нужен испанский: `Spanisch` в разделе `Sprachen`, страница 20. Страницы 4 (политика, история) и 48 (рисование, фото, шитьё, театр) не подходят, а страницы 20 среди вариантов нет. Поэтому `andere Seite`.' },
                { id: 'r01-s5-4', q: 'Sie sitzen bei der Arbeit den ganzen Tag am Schreibtisch. Abends tut Ihnen oft der Rücken weh.',
                  options: ['Seite 12', 'Seite 32', 'andere Seite'], answer: 1,
                  evidence: 'Rückengymnastik',
                  why: 'Боль в спине — раздел `Gesundheit`, курс `Rückengymnastik`, страница 32. Работа за столом тянет к `Beruf und Computer`, но там курсы о компьютере, а не о спине.' },
                { id: 'r01-s5-5', q: 'Sie möchten die deutsche Staatsangehörigkeit beantragen. Dafür müssen Sie einen Test machen.',
                  options: ['Seite 56', 'Seite 4', 'andere Seite'], answer: 0,
                  evidence: 'Einbürgerungstest',
                  why: 'Получить гражданство — `Einbürgerung`; нужный тест — `Einbürgerungstest`, страница 56. Политика на странице 4 — тема этого теста, но самого экзамена там нет.' }
            ],
            glossary: [
                { de: 'die Volkshochschule (VHS)', ru: 'народная школа: курсы для взрослых' },
                { de: 'das Programmheft', ru: 'брошюра с программой курсов' },
                { de: 'die Gesellschaft', ru: 'общество' },
                { de: 'die Stadtführung', ru: 'экскурсия по городу' },
                { de: 'die Textverarbeitung', ru: 'работа с текстами на компьютере' },
                { de: 'das Bewerbungstraining', ru: 'подготовка к поиску работы и собеседованию' },
                { de: 'das Vorstellungsgespräch', ru: 'собеседование' },
                { de: 'die Rückengymnastik', ru: 'гимнастика для спины' },
                { de: 'die Entspannung', ru: 'расслабление' },
                { de: 'die Erste Hilfe', ru: 'первая помощь' },
                { de: 'die Ernährung', ru: 'питание' },
                { de: 'das Nähen', ru: 'шитьё' },
                { de: 'die Einbürgerung', ru: 'получение гражданства' },
                { de: 'die Staatsangehörigkeit', ru: 'гражданство' }
            ]
        },
        {
            id: 'r01-s6',
            title: 'Городской журнал: оглавление',
            situation: 'Sie lesen das Inhaltsverzeichnis im Stadtmagazin „Kompass“. In welcher Rubrik finden Sie den passenden Artikel?',
            material: [
                { kind: 'list', title: 'Kompass · Ihr Stadtmagazin · Inhalt',
                  rows: [
                      { head: 'Wohnen', text: 'Kleines Kinderzimmer, viel Platz: fünf Ideen (S. 6) · Balkonpflanzen für den Herbst (S. 10)' },
                      { head: 'Geld & Recht', text: 'Nebenkosten: Was darf der Vermieter verlangen? (S. 14) · Handyvertrag kündigen: So geht es (S. 18)' },
                      { head: 'Gesundheit', text: 'Gut schlafen: Was hilft wirklich? (S. 22) · Erkältung bei Kindern (S. 26)' },
                      { head: 'Familie', text: 'Der erste Schultag (S. 30) · Taschengeld: Wie viel ist richtig? (S. 33)' },
                      { head: 'Essen & Trinken', text: 'Suppen für kalte Tage (S. 36) · Kochen mit Kürbis (S. 39)' },
                      { head: 'Freizeit', text: 'Mit dem Fahrrad ins Grüne: drei Touren (S. 42) · Konzerte und Theater im Oktober (S. 46)' }
                  ] }
            ],
            items: [
                { id: 'r01-s6-1', q: 'Ihr Sohn ist zehn und möchte jede Woche eigenes Geld bekommen. Sie wissen nicht, wie viel.',
                  options: ['Familie', 'Geld & Recht', 'andere Rubrik'], answer: 0,
                  evidence: 'Taschengeld: Wie viel ist richtig?',
                  why: 'Деньги, которые ребёнок получает «на себя», — `Taschengeld`; статья стоит в рубрике `Familie`. Слово «деньги» тянет к `Geld & Recht`, но там коммунальные платежи и договор на телефон.' },
                { id: 'r01-s6-2', q: 'Ihre Tochter hat Schnupfen und Husten. Sie suchen Tipps.',
                  options: ['Familie', 'Gesundheit', 'andere Rubrik'], answer: 1,
                  evidence: 'Erkältung bei Kindern',
                  why: 'Насморк и кашель — простуда, `Erkältung`. Статья `Erkältung bei Kindern` стоит в `Gesundheit`, а не в `Familie`, хотя речь о ребёнке.' },
                { id: 'r01-s6-3', q: 'Am Sonntag möchten Sie mit Ihren Kindern eine Radtour machen. Sie suchen eine schöne Strecke.',
                  options: ['Wohnen', 'Essen & Trinken', 'andere Rubrik'], answer: 2,
                  evidence: 'Mit dem Fahrrad ins Grüne: drei Touren',
                  why: '`Radtour` — поездка на велосипеде; маршруты — в статье `Mit dem Fahrrad ins Grüne: drei Touren`, рубрика `Freizeit`. `Wohnen` и `Essen & Trinken` — о квартире и еде, а `Freizeit` среди вариантов нет. Поэтому `andere Rubrik`.' },
                { id: 'r01-s6-4', q: 'Ihr Vermieter hat Ihnen eine Abrechnung geschickt: Sie sollen 400 Euro nachzahlen. Sie möchten wissen, ob das richtig ist.',
                  options: ['Wohnen', 'Geld & Recht', 'andere Rubrik'], answer: 1,
                  evidence: 'Nebenkosten: Was darf der Vermieter verlangen?',
                  why: 'Счёт от арендодателя с доплатой — это `Nebenkosten`, статья в рубрике `Geld & Recht`. `Wohnen` подходит по теме «квартира», но там статьи о детской и о цветах на балконе.' },
                { id: 'r01-s6-5', q: 'Sie haben einen jungen Hund. Sie möchten wissen, was er fressen darf.',
                  options: ['Essen & Trinken', 'Familie', 'andere Rubrik'], answer: 2,
                  evidence: '',
                  why: 'Статей о животных нет нигде в журнале. `Essen & Trinken` — еда для людей (супы, тыква), `Familie` — о детях. Поэтому `andere Rubrik`.' }
            ],
            glossary: [
                { de: 'das Inhaltsverzeichnis', ru: 'оглавление' },
                { de: 'die Nebenkosten', ru: 'коммунальные платежи сверх аренды' },
                { de: 'der Vermieter', ru: 'арендодатель' },
                { de: 'die Abrechnung', ru: 'расчёт, итоговый счёт (обычно за год)' },
                { de: 'nachzahlen', ru: 'доплатить' },
                { de: 'kündigen', ru: 'расторгнуть (договор)' },
                { de: 'die Erkältung', ru: 'простуда' },
                { de: 'der Schnupfen', ru: 'насморк' },
                { de: 'das Taschengeld', ru: 'карманные деньги' },
                { de: 'der Kürbis', ru: 'тыква' },
                { de: 'ins Grüne', ru: 'на природу, за город' },
                { de: 'die Strecke', ru: 'маршрут' },
                { de: 'fressen', ru: 'есть (о животных)' }
            ]
        }
    ]
};
