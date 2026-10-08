/**
 * Шпаргалка к Lesen: слова, сокращения и приёмы чтения.
 *
 * Девять разделов для быстрого освежения перед занятием или экзаменом:
 * устройство пяти частей, сокращения объявлений, сроки, «переодетые» слова,
 * таблички и рубрики, слова уведомлений и условий, сигналы для
 * richtig/falsch и формулы формального письма. В конце раздела — совет.
 */

export default [
    {
        id: 'lr-ueberblick',
        title: 'Lesen: пять частей одним взглядом',
        drill: 'r01',
        blocks: [
            { type: 'rule', text: '**45 минут, 25 заданий, по баллу за каждое.** Словарей нет, писать ничего не надо: ответы отмечают крестиком. Время между частями распределяете сами — ориентир около **9 минут на часть**. Результаты Hören и Lesen считаются вместе: уровень B1 — от 33 из 45 баллов.' },
            {
                type: 'table',
                head: ['Teil', 'Текст', 'Заданий', 'Что делать', 'Минут'],
                rows: [
                    ['1', 'Указатель, список, оглавление: этажи универмага, рубрики сайта, таблички врачей и ведомств', '5, варианты a, b, c', 'Найти нужную рубрику по ключевому слову', '≈ 9'],
                    ['2', 'Восемь коротких объявлений a–h', '5 ситуаций', 'Подобрать объявление к ситуации; для одной ситуации объявления нет — ответ `x`', '≈ 9'],
                    ['3', 'Три коротких текста: заметка из газеты, письмо домовладельца, записка из школы, объявление службы', '6: к каждому тексту `richtig`/`falsch` и выбор из трёх', 'Понять главную мысль и найти деталь: число, срок, условие', '≈ 9'],
                    ['4', 'Один длинный текст: описание товара, инструкция, условия договора', '3 `richtig`/`falsch`', 'Найти нужное место и точно понять правило', '≈ 9'],
                    ['5', 'Формальное письмо с шестью пропусками', '6, по три варианта', 'Выбрать слово или форму: обращение, падеж, глагол, вежливость, связка', '≈ 9']
                ],
                note: '5 × 9 = 45 минут. Это ориентир, а не правило: на лёгкой части можно сэкономить и потратить время на трудную.'
            },

            { type: 'h', text: '1. Что читать первым' },
            {
                type: 'table',
                head: ['Teil', 'Сначала', 'Потом'],
                rows: [
                    ['1', 'Ситуацию: что вам нужно? Одно ключевое слово', 'Список: ищите это слово или его «переодетый» вариант'],
                    ['2', 'Все пять ситуаций: в каждой 2–3 факта (что, где, когда)', 'Объявления: проверяйте каждый факт, а не одно слово'],
                    ['3', 'Утверждение и вопрос к тексту', 'Текст целиком (главная мысль), потом место с деталью'],
                    ['4', 'Три утверждения: они идут по порядку текста', 'Текст по заголовкам: место первого утверждения, потом второго и третьего'],
                    ['5', 'Письмо целиком, быстро: кто пишет, кому и зачем', 'Каждый пропуск: варианты и слова вокруг него']
                ]
            },
            { type: 'rule', text: 'В Teil 1–4 правило одно: **сначала задание, потом текст**. Вы знаете, что ищете, и не читаете лишнего. В Teil 5 наоборот: сначала пробегите письмо — ответ зависит от смысла и грамматики всего предложения.' },

            { type: 'h', text: '2. Порядок решения' },
            {
                type: 'list',
                items: [
                    'Сначала лёгкое. Ответ ясен — отметьте и идите дальше. Над трудным заданием не сидите дольше минуты: запомните номер и вернитесь в конце.',
                    'Не понимаете слово — не останавливайтесь. В местах, от которых зависит ответ, слова уровня A1–B1; остальной текст можно понимать приблизительно.',
                    'Пустое задание — это точно ноль баллов. В конце отметьте хотя бы самый вероятный вариант.'
                ]
            },

            { type: 'h', text: '3. `x` и `andere` — тоже ответы' },
            {
                type: 'table',
                head: ['Часть', 'Вариант', 'Когда он верен'],
                rows: [
                    ['Teil 1', '`andere Etage`, `andere Abteilung`, `andere Seite` …', 'Ни одна из двух рубрик в вариантах не подходит к ситуации'],
                    ['Teil 2', '`x`', 'Ни одно объявление не подходит по всем фактам ситуации; такая ситуация в наборе ровно одна']
                ]
            },
            { type: 'trap', wrong: 'Sie suchen eine Arbeit am Wochenende. → „Kellner (m/w/d) gesucht, Mo–Fr“', right: 'Sie suchen eine Arbeit am Wochenende. → x: Keine Anzeige passt.', why: 'Работа подходит, дни — нет. Если ни в одном объявлении не совпадают **все** факты ситуации, ответ — `x`.' },
            { type: 'tip', text: 'Следите за часами: если одна часть отняла больше 12 минут, отметьте самые вероятные ответы и переходите к следующей. Каждое задание стоит один балл — лёгкие задания в конце не должны остаться без ответа.' }
        ]
    },

    {
        id: 'lr-anzeigen',
        title: 'Объявления: сокращения и слова',
        drill: 'r02',
        blocks: [
            { type: 'h', text: '1. Квартира и комната' },
            {
                type: 'table',
                head: ['Слово', 'Перевод', 'Пример'],
                rows: [
                    ['`Zi.` = `Zimmer`', 'комната', '`Helle **3-Zi.-Wohnung**, 72 m², Balkon`'],
                    ['`Kü.` = `Küche`', 'кухня', '`2 Zi., **Kü.**, Bad, 55 m²`'],
                    ['`Bad`', 'ванная', '`1 Zi., Kü., **Bad** mit Fenster`'],
                    ['`Whg.` = `Wohnung`', 'квартира', '`Kleine **Whg.** im Zentrum`'],
                    ['`EG` = `Erdgeschoss`', 'первый этаж (вход с улицы)', '`2-Zi.-Whg. im **EG** mit Garten`'],
                    ['`OG` = `Obergeschoss`', 'этаж над первым: `1. OG` — по-русски второй', '`3 Zi., Kü., Bad, **2. OG**, kein Aufzug`'],
                    ['`DG` = `Dachgeschoss`', 'мансарда, этаж под крышей', '`Gemütliche **DG**-Wohnung, 45 m²`'],
                    ['`KM` = `Kaltmiete`', 'аренда без коммунальных платежей', '`**KM** 520 € + NK 140 €`'],
                    ['`NK` = `Nebenkosten`', 'коммунальные платежи: вода, мусор, отопление …', '`Miete 480 € + **NK** 130 €`'],
                    ['`WM` = `Warmmiete`', 'аренда вместе с коммунальными', '`**WM** 660 €, Strom extra`'],
                    ['`zzgl.` = `zuzüglich`', 'плюс, платится отдельно', '`450 € **zzgl.** NK`'],
                    ['`inkl.` = `inklusive`', 'включая', '`Zimmer 390 € **inkl.** NK und Internet`'],
                    ['`mtl.` = `monatlich`', 'в месяц', '`Stellplatz, 40 € **mtl.**`'],
                    ['`ca.` = `circa`', 'примерно', '`**ca.** 60 m², ruhige Lage`'],
                    ['`zur Miete`', 'в аренду', '`Garage **zur Miete** gesucht`'],
                    ['`zu vermieten`', 'сдаётся', '`Schönes Zimmer **zu vermieten**`'],
                    ['`zu verkaufen`', 'продаётся', '`Reihenhaus **zu verkaufen**`'],
                    ['`möbliert`', 'с мебелью', '`**Möbliertes** Zimmer für Studentin`'],
                    ['`Nichtraucher`', 'некурящий', '`Nur an **Nichtraucher** zu vermieten`'],
                    ['`ab sofort`', 'с этого момента, сразу', '`Wohnung **ab sofort** frei`'],
                    ['`Nachmieter`', 'следующий жилец (въедет после вас)', '`**Nachmieter** für 2-Zi.-Whg. gesucht`']
                ]
            },

            { type: 'h', text: '2. Работа и курсы' },
            {
                type: 'table',
                head: ['Слово', 'Перевод', 'Пример'],
                rows: [
                    ['`Vollzeit`', 'полный рабочий день', '`Fahrer in **Vollzeit** gesucht`'],
                    ['`Teilzeit`', 'неполный рабочий день', '`Verkäuferin in **Teilzeit**, 20 Std. pro Woche`'],
                    ['`Minijob`', 'подработка с небольшим заработком', '`Aushilfe auf **Minijob**-Basis gesucht`'],
                    ['`Aushilfe`', 'временный помощник, подработка', '`**Aushilfe** für Samstage gesucht`'],
                    ['`auf Honorarbasis`', 'за гонорар, без трудового договора', '`Kursleiterin **auf Honorarbasis** gesucht`'],
                    ['`(m/w/d)`', 'мужчина / женщина / другой пол — то есть любой', '`Koch **(m/w/d)** gesucht`'],
                    ['`Probezeit`', 'испытательный срок', '`Sechs Monate **Probezeit**`'],
                    ['`Berufserfahrung`', 'опыт работы', '`**Berufserfahrung** erwünscht`'],
                    ['`erwünscht` / `erforderlich`', 'желательно / обязательно', '`Deutschkenntnisse B1 **erforderlich**`'],
                    ['`Führerschein Klasse B`', 'права на легковую машину (категория B)', '`**Führerschein Klasse B** erforderlich`'],
                    ['`Std.` = `Stunde(n)`', 'час, часы', '`Nachhilfe: 12 € pro **Std.**`'],
                    ['`Mo–Fr`', 'с понедельника по пятницу', '`Arbeitszeit **Mo–Fr** 8–14 Uhr`'],
                    ['`Tel.` = `Telefon`', 'телефон', '`**Tel.** 0123 456789, ab 18 Uhr`'],
                    ['`u. a.` = `unter anderem`', 'в том числе, среди прочего', '`Sprachkurse **u. a.** in Englisch und Spanisch`'],
                    ['`ohne Vorkenntnisse`', 'без предварительных знаний, для начинающих', '`Computerkurs **ohne Vorkenntnisse**`']
                ]
            },

            { type: 'h', text: '3. Купить, продать, отдать' },
            {
                type: 'table',
                head: ['Слово', 'Перевод', 'Пример'],
                rows: [
                    ['`Suche …` / `… gesucht`', 'ищу / требуется', '`**Suche** gebrauchtes Kinderfahrrad`'],
                    ['`Biete …`', 'предлагаю', '`**Biete** Nachhilfe in Mathe`'],
                    ['`Verkaufe …`', 'продаю', '`**Verkaufe** Waschmaschine, 2 Jahre alt`'],
                    ['`Gebe … ab`', 'отдам, продам (мне больше не нужно)', '`**Gebe** Babybett **ab**, 30 €`'],
                    ['`Verschenke …`', 'отдам даром', '`**Verschenke** Sofa an Selbstabholer`'],
                    ['`VB` = `Verhandlungsbasis`', 'торг возможен', '`Kinderwagen, 80 € **VB**`'],
                    ['`Preis verhandelbar`', 'цена договорная', '`E-Bike, 600 €, **Preis verhandelbar**`'],
                    ['`Abholung`', 'самовывоз: забрать самому', '`Nur **Abholung**, kein Versand`'],
                    ['`Selbstabholer`', 'тот, кто заберёт сам', '`Schrank, nur an **Selbstabholer**`'],
                    ['`o. Ä.` = `oder Ähnliches`', 'или что-то подобное', '`Suche Roller, Fahrrad **o. Ä.**`'],
                    ['`neuwertig`', 'как новый', '`Kaffeemaschine, **neuwertig**, 25 €`'],
                    ['`gebraucht`', 'подержанный, б/у', '`**Gebrauchter** Kühlschrank, funktioniert gut`']
                ]
            },

            { type: 'h', text: '4. `Suche` или `Biete`: кто ищет, кто предлагает' },
            {
                type: 'table',
                head: ['В объявлении', 'Пишет тот, кто …', 'Подходит вам, если вы …'],
                rows: [
                    ['`Suche …`, `… gesucht`', 'ищет', 'это **предлагаете**: у вас есть вещь, работа, жильё'],
                    ['`Biete …`, `Verkaufe …`, `Gebe … ab`, `Verschenke …`', 'предлагает', 'это **ищете**'],
                    ['`… zu vermieten`', 'сдаёт', 'хотите **снять**'],
                    ['`… zu verkaufen`', 'продаёт', 'хотите **купить** (снять не получится)'],
                    ['`… zur Miete gesucht`', 'хочет снять', 'хотите **сдать**']
                ]
            },
            { type: 'trap', wrong: 'Sie suchen einen Nachhilfelehrer. → „Suche Nachhilfe in Mathe“', right: 'Sie suchen einen Nachhilfelehrer. → „Biete Nachhilfe in Mathe“', why: 'Тема совпала, направление нет: `Suche Nachhilfe` пишет ученик, которому самому нужен учитель.' },
            { type: 'trap', wrong: 'Sie möchten eine Garage mieten. → „Garage zu verkaufen“', right: 'Sie möchten eine Garage mieten. → „Garage zu vermieten“', why: 'Та же вещь, но её продают, а не сдают. Такое «почти подходящее» объявление — типичная ловушка Teil 2.' },
            { type: 'tip', text: 'В ситуации отметьте 2–3 факта: что, где или когда, сколько. Объявление подходит, только если совпадают **все** факты. Совпал один — это ловушка: ищите дальше или отвечайте `x`.' }
        ]
    },

    {
        id: 'lr-zeit',
        title: 'Время, даты и сроки в текстах',
        drill: 'r03',
        blocks: [
            { type: 'p', text: 'Дни недели: `Mo` пн · `Di` вт · `Mi` ср · `Do` чт · `Fr` пт · `Sa` сб · `So` вс. Не путайте `Di` (вторник) и `Do` (четверг).' },

            { type: 'h', text: '1. Слова времени' },
            {
                type: 'table',
                head: ['Слово', 'Перевод', 'Пример'],
                rows: [
                    ['`werktags`', 'в рабочие дни: все, кроме воскресенья и праздников', '`Der Bus fährt **werktags** alle 20 Minuten.`'],
                    ['`wochentags`', 'в будни; суббота входит не всегда (в отличие от `werktags`)', '`Die Bibliothek ist **wochentags** bis 19 Uhr geöffnet.`'],
                    ['`sonn- und feiertags`', 'по воскресеньям и праздникам', '`**Sonn- und feiertags** geschlossen.`'],
                    ['`am Wochenende`', 'в выходные (суббота и воскресенье)', '`**Am Wochenende** ist die Praxis geschlossen.`'],
                    ['`vormittags`', 'до обеда, утром', '`Die Beratung findet nur **vormittags** statt.`'],
                    ['`nachmittags`', 'после обеда, днём', '`Termine **nachmittags** nur nach Vereinbarung.`'],
                    ['`abends`', 'вечером', '`Der Kurs ist **abends** von 18 bis 20 Uhr.`'],
                    ['`täglich`', 'ежедневно', '`**Täglich** von 7 bis 22 Uhr geöffnet.`'],
                    ['`rund um die Uhr`', 'круглосуточно', '`Der Notdienst ist **rund um die Uhr** erreichbar.`'],
                    ['`ab dem 1. Oktober`', 'с 1 октября', '`**Ab dem 1. Oktober** gelten neue Öffnungszeiten.`'],
                    ['`vom … bis …`', 'с … по …', '`Die Praxis ist **vom** 4. **bis** 15. August geschlossen.`'],
                    ['`bis einschließlich Freitag`', 'до пятницы включительно', '`Das Büro bleibt **bis einschließlich Freitag** geschlossen.`'],
                    ['`innerhalb von zwei Wochen`', 'в течение двух недель', '`Bitte bezahlen Sie die Rechnung **innerhalb von zwei Wochen**.`'],
                    ['`spätestens`', 'не позднее, самое позднее', '`Bitte melden Sie sich **spätestens** am Mittwoch an.`'],
                    ['`frühestens`', 'не раньше, самое раннее', '`Die Wohnung ist **frühestens** ab März frei.`'],
                    ['`jeden zweiten Montag`', 'раз в две недели по понедельникам', '`Die Müllabfuhr kommt **jeden zweiten Montag**.`'],
                    ['`einmal pro Woche`', 'раз в неделю', '`Der Elterntreff findet **einmal pro Woche** statt.`'],
                    ['`monatlich`', 'ежемесячно', '`Die Miete zahlen Sie **monatlich** bis zum 3. Werktag.`'],
                    ['`jährlich`', 'ежегодно, раз в год', '`Der Techniker prüft die Heizung **jährlich**.`'],
                    ['`die Frist`', 'срок', '`Die **Frist** endet am 30. Juni.`'],
                    ['`fristgerecht`', 'в установленный срок', '`Wir haben Ihre Kündigung **fristgerecht** erhalten.`'],
                    ['`rechtzeitig`', 'вовремя, заранее', '`Bitte sagen Sie den Termin **rechtzeitig** ab.`'],
                    ['`ab sofort`', 'с этого момента', '`**Ab sofort** können Sie auch online bezahlen.`'],
                    ['`vorübergehend`', 'временно', '`Das Büro ist **vorübergehend** im 2. Stock.`'],
                    ['`dauerhaft`', 'постоянно, насовсем', '`Die Filiale in der Bahnhofstraße schließt **dauerhaft**.`'],
                    ['`bis auf Weiteres`', 'пока, до новых сообщений', '`Die Sauna bleibt **bis auf Weiteres** geschlossen.`']
                ],
                note: 'Суббота по закону — тоже `Werktag`. Если важна именно суббота, ищите в тексте `Mo–Fr` или `Mo–Sa`.'
            },

            { type: 'h', text: '2. Часы работы и приёма' },
            { type: 'formula', parts: ['`Mo–Do`', '`8–16 Uhr`'], note: 'Сначала дни, потом часы: с понедельника по четверг, с 8 до 16.' },
            { type: 'formula', parts: ['`Fr`', '`8–12 Uhr`'], note: 'В пятницу — только до обеда: после 12 закрыто.' },
            {
                type: 'table',
                head: ['Запись', 'Читается', 'Значит'],
                rows: [
                    ['`Mo–Do 8–16 Uhr`', '`montags bis donnerstags von 8 bis 16 Uhr`', 'четыре дня подряд, с 8 до 16'],
                    ['`Fr 8–12 Uhr`', '`freitags von 8 bis 12 Uhr`', 'пятница короче'],
                    ['`Mo, Mi 14–18 Uhr`', '`montags und mittwochs von 14 bis 18 Uhr`', 'только два дня; во вторник закрыто'],
                    ['`Di + Do 9–12 und 14–17 Uhr`', '`dienstags und donnerstags von 9 bis 12 und von 14 bis 17 Uhr`', 'с 12 до 14 — перерыв'],
                    ['`Mo–Fr 9.30–18 Uhr`', '`montags bis freitags von halb zehn bis 18 Uhr`', 'с 9:30 до 18'],
                    ['`Sa 10–13 Uhr`', '`samstags von 10 bis 13 Uhr`', 'в субботу коротко'],
                    ['`Mittagspause 12.30–13.30 Uhr`', '`Mittagspause von halb eins bis halb zwei`', 'обеденный перерыв'],
                    ['`So geschlossen`', '`sonntags geschlossen`', 'в воскресенье закрыто'],
                    ['`nach Vereinbarung`', '`nur mit Termin`', 'по предварительной записи']
                ]
            },
            { type: 'trap', wrong: 'Mo, Do 9–12 Uhr = montags bis donnerstags', right: 'Mo, Do 9–12 Uhr = nur montags und donnerstags', why: 'Запятая — отдельные дни, тире — промежуток. `Mo, Do` — два дня, `Mo–Do` — четыре дня подряд.' },
            { type: 'trap', wrong: 'jeden zweiten Montag = am zweiten Montag im Monat', right: 'jeden zweiten Montag = alle zwei Wochen am Montag', why: '`jeden zweiten` — «через один», раз в две недели. Второй понедельник месяца — `am zweiten Montag im Monat`.' },
            { type: 'trap', wrong: 'frühestens am Montag = am Montag oder früher', right: 'frühestens am Montag = am Montag oder später', why: '`frühestens` — «не раньше»: в понедельник или позже. `spätestens` — «не позже»: в понедельник или раньше.' },
            { type: 'tip', text: 'В Teil 3 вопрос с вариантами часто спрашивает день, час или срок. Отметьте в тексте все числа и дни и сверяйте с вариантами по одному признаку: день, время, `bis` или `ab`.' }
        ]
    },

    {
        id: 'lr-paraphrase',
        title: 'Как экзамен переодевает слова',
        drill: 'r02',
        blocks: [
            { type: 'p', text: 'Приёмы: **синоним** (другое слово), **часть речи** (`umziehen` → `Umzug`), **обобщение** (вещь → отдел), **сокращение** (`Montag bis Freitag` → `Mo–Fr`), **описание** (`Anfänger` → `ohne Vorkenntnisse`), **место** (кто или где это делает).' },
            {
                type: 'table',
                head: ['В задании', 'В тексте', 'Приём'],
                rows: [
                    ['`stundenweise arbeiten`', '`in Teilzeit`, `Minijob`, `Aushilfe`', 'синоним'],
                    ['`ein gebrauchtes Auto`', '`Gebrauchtwagen`, `PKW`', 'часть речи: два слова → одно; `PKW` — синоним'],
                    ['`ein Geschenk für ein Kind`', '`Spielwaren`', 'по смыслу: что дарят ребёнку'],
                    ['`eine Karte zum Geburtstag`', '`Schreibwaren`, `Glückwunschkarten`', 'обобщение'],
                    ['`umziehen`', '`der Umzug`, `Umzugshilfe`', 'часть речи: глагол → существительное'],
                    ['`kostenlos`', '`gratis`, `umsonst`, `ohne Gebühr`, `Eintritt frei`', 'синоним'],
                    ['`ab sofort`', '`sofort frei`, `ab heute`', 'синоним'],
                    ['`Anfänger`', '`ohne Vorkenntnisse`, `für Einsteiger`', 'описание'],
                    ['`mit Kindern`', '`für die ganze Familie`, `familienfreundlich`', 'обобщение'],
                    ['`krank sein`', '`Arzt`, `Praxis`, `Sprechstunde`', 'место: кто поможет'],
                    ['`einkaufen`', '`Kaufhaus`, `Geschäft`, `Supermarkt`', 'место'],
                    ['`eine Wohnung suchen`', '`Immobilien`, `Mietwohnungen`', 'рубрика'],
                    ['`eine Arbeit suchen`', '`Stellenangebote`, `Jobs`', 'рубрика'],
                    ['`von Montag bis Freitag`', '`Mo–Fr`, `unter der Woche`', 'сокращение, синоним'],
                    ['`außer sonntags`', '`werktags`, `Mo–Sa`', 'синоним, сокращение'],
                    ['`am Wochenende`', '`Sa/So`, `samstags und sonntags`', 'сокращение'],
                    ['`abends`', '`ab 18 Uhr`, `nach Feierabend`', 'число вместо слова, описание'],
                    ['`günstig`', '`preiswert`, `reduziert`, `im Angebot`', 'синоним'],
                    ['`einen Kurs am Abend besuchen`', '`Abendkurs`', 'часть речи: два слова → одно'],
                    ['`Deutsch lernen`', '`Sprachkurs`, `Integrationskurs`, `Sprachschule`', 'обобщение'],
                    ['`etwas reparieren lassen`', '`Reparatur`, `Werkstatt`, `Kundendienst`', 'часть речи, место'],
                    ['`sich für einen Kurs anmelden`', '`Anmeldung`, `Kursanmeldung`', 'часть речи'],
                    ['`eine neue Adresse melden`', '`Meldeamt`, `Bürgerbüro`, `Ummeldung`', 'место'],
                    ['`heiraten`', '`Standesamt`', 'место'],
                    ['`einen neuen Reisepass brauchen`', '`Pass- und Ausweisstelle`, `Bürgerbüro`', 'место'],
                    ['`Zahnschmerzen haben`', '`Zahnarzt`, `Zahnheilkunde`', 'место: кто поможет'],
                    ['`Ihr Kind hat Fieber.`', '`Kinderarzt`, `Kinder- und Jugendmedizin`', 'место: кто поможет'],
                    ['`einen Fernseher kaufen`', '`Elektro`, `Unterhaltungselektronik`', 'обобщение'],
                    ['`Bettwäsche kaufen`', '`Heimtextilien`', 'обобщение'],
                    ['`Töpfe und Teller`', '`Haushaltswaren`, `Geschirr`', 'обобщение'],
                    ['`Futter für den Hund`', '`Tierbedarf`, `Tiernahrung`', 'обобщение'],
                    ['`mit dem Bus fahren`', '`Nahverkehr`, `Fahrplan`, `Haltestelle`', 'обобщение'],
                    ['`etwas zurückgeben`', '`Rückgabe`, `Umtausch`', 'часть речи'],
                    ['`nicht rauchen`', '`Nichtraucher`, `Rauchverbot`', 'часть речи'],
                    ['`nur für ein paar Monate`', '`befristet`, `Zwischenmiete`', 'описание'],
                    ['`nicht weit vom Bahnhof`', '`5 Minuten zum Bahnhof`, `in Bahnhofsnähe`', 'описание, число']
                ]
            },
            { type: 'rule', text: 'Ищите не то же слово, а **тот же смысл**. Слово, совпавшее буквально, проверяйте особенно строго: оно бывает и в объявлении, которое подходит только наполовину.' },
            { type: 'trap', wrong: 'Ihr Kind hat Fieber. → Kinderbetreuung', right: 'Ihr Kind hat Fieber. → Kinder- und Jugendmedizin', why: 'Корень `Kinder-` есть в обоих словах, но `Kinderbetreuung` — присмотр за детьми. Лечит детей врач: `Kinderarzt`, `Kinder- und Jugendmedizin`.' },
            { type: 'tip', text: 'Прочитав ситуацию, спросите себя: как это ещё называют? Где это продают, кто это делает, в какой рубрике это ищут? Два-три ответа — и вы узнаете нужное слово в тексте, даже если оно другое.' }
        ]
    },

    {
        id: 'lr-verzeichnisse',
        title: 'Таблички, этажи, рубрики',
        drill: 'r01',
        blocks: [
            { type: 'rule', text: '`Erdgeschoss` — это русский **первый** этаж. Счёт начинается над ним: `1. Stock` — второй, `2. Stock` — третий.' },

            { type: 'h', text: '1. Универмаг: этажи и места' },
            {
                type: 'table',
                head: ['Табличка', 'Перевод', 'Пример'],
                rows: [
                    ['`UG` = `Untergeschoss`', 'цокольный (подземный) этаж', '`**UG**: Lebensmittel, Getränke`'],
                    ['`EG` = `Erdgeschoss`', 'первый этаж, вход с улицы', '`**EG**: Kosmetik, Schmuck, Information`'],
                    ['`1. Stock` / `1. Etage` / `1. OG`', 'второй этаж по-русски', '`**1. Stock**: Damenmode`'],
                    ['`OG` = `Obergeschoss`', 'этаж выше первого', '`Kundenservice im **3. OG**`'],
                    ['`die Rolltreppe`', 'эскалатор', '`Die **Rolltreppe** ist links vom Eingang.`'],
                    ['`der Aufzug` / `der Fahrstuhl`', 'лифт', '`Mit dem **Aufzug** in alle Etagen`'],
                    ['`die Kasse`', 'касса', '`Bitte zahlen Sie an der **Kasse** im EG.`'],
                    ['`der Kundenservice`', 'служба клиентов: возврат, обмен, жалобы', '`Umtausch nur beim **Kundenservice**`'],
                    ['`die Information`', 'справочная, стойка информации', '`Fragen Sie an der **Information**.`'],
                    ['`die Abteilung`', 'отдел', '`Die **Abteilung** Spielwaren ist im 3. Stock.`'],
                    ['`die Umkleidekabine`', 'примерочная', '`**Umkleidekabinen** neben der Kasse`'],
                    ['`die Toiletten` / `WC`', 'туалет', '`**Toiletten** im 2. Stock`'],
                    ['`der Notausgang`', 'запасный выход', '`**Notausgang** freihalten!`']
                ]
            },

            { type: 'h', text: '2. Универмаг: отделы' },
            {
                type: 'table',
                head: ['Отдел', 'Перевод', 'Что там найти'],
                rows: [
                    ['`Damenmode`', 'женская одежда', '`Kleider`, `Blusen`, `Röcke`'],
                    ['`Herrenmode`', 'мужская одежда', '`Anzüge`, `Hemden`, `Krawatten`'],
                    ['`Kindermode`', 'детская одежда', '`Babykleidung`, `Kinderjacken`'],
                    ['`Schuhe`', 'обувь', '`Stiefel`, `Sandalen`, `Hausschuhe`'],
                    ['`Spielwaren`', 'игрушки', '`Puppen`, `Puzzles`, `Brettspiele`'],
                    ['`Schreibwaren`', 'канцтовары', '`Hefte`, `Stifte`, `Glückwunschkarten`'],
                    ['`Haushaltswaren`', 'посуда и мелочи для дома', '`Töpfe`, `Pfannen`, `Geschirr`'],
                    ['`Haushaltsgeräte`', 'бытовая техника', '`Waschmaschinen`, `Staubsauger`, `Kaffeemaschinen`'],
                    ['`Elektro` / `Elektronik`', 'электроника', '`Fernseher`, `Laptops`, `Handys`'],
                    ['`Heimtextilien`', 'домашний текстиль', '`Bettwäsche`, `Handtücher`, `Gardinen`'],
                    ['`Lebensmittel`', 'продукты', '`Brot`, `Obst`, `Käse`'],
                    ['`Sportartikel`', 'спорттовары', '`Bälle`, `Trainingsanzüge`, `Fahrradhelme`'],
                    ['`Parfümerie` / `Kosmetik`', 'парфюмерия, косметика', '`Parfüm`, `Lippenstift`, `Hautcreme`'],
                    ['`Schmuck` / `Uhren`', 'украшения, часы', '`Ringe`, `Ketten`, `Armbanduhren`'],
                    ['`Lederwaren`', 'изделия из кожи', '`Taschen`, `Koffer`, `Geldbörsen`'],
                    ['`Möbel`', 'мебель', '`Tische`, `Stühle`, `Regale`']
                ]
            },
            { type: 'trap', wrong: 'Sie brauchen einen Staubsauger. → Haushaltswaren', right: 'Sie brauchen einen Staubsauger. → Haushaltsgeräte', why: '`Haushaltswaren` — посуда и мелочи для кухни, `Haushaltsgeräte` — приборы с вилкой: пылесос, стиральная машина.' },

            { type: 'h', text: '3. Ратуша и ведомства' },
            {
                type: 'table',
                head: ['Табличка', 'Перевод', 'Зачем туда идут'],
                rows: [
                    ['`das Bürgerbüro` / `das Bürgeramt`', 'бюро обслуживания граждан', 'много услуг в одном месте: регистрация адреса, паспорт, справки'],
                    ['`das Meldeamt`', 'отдел регистрации по месту жительства', 'сообщить адрес: `anmelden`, `ummelden`, `abmelden`'],
                    ['`die Pass- und Ausweisstelle`', 'паспортный отдел', '`Reisepass`, `Personalausweis`'],
                    ['`die Ausländerbehörde`', 'ведомство по делам иностранцев', '`Aufenthaltstitel`, `Visum`'],
                    ['`das Standesamt`', 'ЗАГС', '`Heirat`, `Geburtsurkunde`'],
                    ['`das Sozialamt`', 'отдел социальной помощи', '`Sozialhilfe`'],
                    ['`das Jugendamt`', 'ведомство по делам детей и семьи', 'помощь и консультации для родителей и детей'],
                    ['`die Kfz-Zulassung`', 'регистрация автомобилей (`Kfz` = `Kraftfahrzeug`)', '`Auto anmelden`, `Kennzeichen`'],
                    ['`das Fundbüro`', 'бюро находок', 'что-то потеряли или нашли'],
                    ['`das Ordnungsamt`', 'отдел общественного порядка', 'жалобы на шум, на неправильную парковку'],
                    ['`die Anmeldung`', 'регистратура, приёмная; а также регистрация адреса', '`Bitte melden Sie sich zuerst an der **Anmeldung**.`'],
                    ['`Zimmer 112` / `Zi. 112`', 'кабинет 112', '`Wohngeld: **Zimmer 112**, 1. Stock`'],
                    ['`die Sprechzeiten`', 'часы приёма', '`**Sprechzeiten**: Mo, Do 8–12 Uhr`'],
                    ['`die Wartenummer`', 'номер в очереди', '`Bitte ziehen Sie eine **Wartenummer**.`'],
                    ['`nur mit Termin`', 'только по записи', '`Beratung **nur mit Termin**`']
                ]
            },

            { type: 'h', text: '4. Врачи' },
            {
                type: 'table',
                head: ['Табличка', 'Перевод', 'Когда туда'],
                rows: [
                    ['`der Hausarzt` / `Allgemeinmedizin`', 'семейный врач, терапевт', 'простуда, первый визит, направление к специалисту'],
                    ['`der Facharzt`', 'врач-специалист', 'часто нужно направление: `Überweisung`'],
                    ['`der Zahnarzt` / `Zahnheilkunde`', 'стоматолог', 'болит зуб'],
                    ['`der Frauenarzt` / `Gynäkologie`', 'гинеколог', 'беременность, осмотр'],
                    ['`der Kinderarzt` / `Kinder- und Jugendmedizin`', 'педиатр', 'болеет ребёнок'],
                    ['`der Hautarzt` / `Dermatologie`', 'дерматолог', 'сыпь, проблемы с кожей'],
                    ['`der Augenarzt` / `Augenheilkunde`', 'окулист', 'плохо видите, болят глаза'],
                    ['`HNO` = `Hals-Nasen-Ohren-Heilkunde`', 'ЛОР', 'болит ухо, горло, нос'],
                    ['`der Orthopäde` / `Orthopädie`', 'ортопед', 'болит спина, колено'],
                    ['`die Sprechstunde`', 'часы приёма врача', '`**Sprechstunde**: Mo–Fr 8–12 Uhr`'],
                    ['`nach Vereinbarung`', 'по договорённости, по записи', '`Nachmittags **nach Vereinbarung**`'],
                    ['`die offene Sprechstunde`', 'приём без записи', '`**Offene Sprechstunde**: Mi 8–10 Uhr`'],
                    ['`der Notdienst`', 'дежурная служба (ночью, в выходные)', '`Am Wochenende: ärztlicher **Notdienst**`'],
                    ['`die Überweisung`', 'направление к специалисту', '`Bitte bringen Sie die **Überweisung** mit.`']
                ]
            },

            { type: 'h', text: '5. Интернет-магазин и сайт' },
            {
                type: 'table',
                head: ['Рубрика', 'Перевод', 'Что там найти'],
                rows: [
                    ['`Mein Konto` / `Kundenkonto`', 'личный кабинет', 'ваши заказы, адрес, пароль'],
                    ['`Warenkorb`', 'корзина', 'выбранные товары'],
                    ['`Zur Kasse`', 'оформить заказ', 'адрес, оплата, подтверждение'],
                    ['`Versand und Lieferung`', 'доставка', 'сроки и `Versandkosten`'],
                    ['`Zahlungsarten`', 'способы оплаты', '`auf Rechnung`, `per Kreditkarte`'],
                    ['`Rückgabe und Umtausch` / `Retouren`', 'возврат и обмен', 'как вернуть товар'],
                    ['`Sendungsverfolgung`', 'отслеживание посылки', 'где сейчас ваш заказ'],
                    ['`Hilfe` / `FAQ` / `Häufige Fragen`', 'помощь, частые вопросы', 'ответы на типичные вопросы'],
                    ['`Kontakt`', 'контакты', 'написать или позвонить в службу'],
                    ['`Angebote` / `Sale`', 'скидки, распродажа', 'товары дешевле'],
                    ['`Neuheiten`', 'новинки', 'новые товары'],
                    ['`Gutscheine`', 'подарочные сертификаты', 'подарок без выбора вещи'],
                    ['`AGB` = `Allgemeine Geschäftsbedingungen`', 'общие условия договора', 'правила покупки'],
                    ['`Datenschutz`', 'защита данных', 'что фирма делает с вашими данными'],
                    ['`Impressum`', 'выходные данные сайта', 'кто владелец, адрес фирмы']
                ]
            },
            { type: 'tip', text: 'В Teil 1 спрашивайте себя не «как это называется?», а «где это бывает?»: в каком отделе, у какого врача, в каком окне. Если обе рубрики в вариантах «рядом, но не то» — выбирайте `andere …`.' }
        ]
    },

    {
        id: 'lr-mitteilungen',
        title: 'Слова писем от домовладельца, школы, ведомства',
        drill: 'r03',
        blocks: [
            { type: 'h', text: '1. Дом и квартира' },
            {
                type: 'table',
                head: ['Слово', 'Перевод', 'Пример'],
                rows: [
                    ['`die Hausverwaltung`', 'управляющая компания', '`Bei Fragen wenden Sie sich an die **Hausverwaltung**.`'],
                    ['`der Vermieter`, `die Vermieterin`', 'хозяин квартиры, арендодатель', '`Der **Vermieter** erhöht die Miete ab Januar.`'],
                    ['`der Mieter`, `die Mieterin`', 'жилец, арендатор', '`Liebe **Mieterinnen und Mieter**, …`'],
                    ['`der Hausmeister`', 'завхоз, дворник', '`Den Schlüssel bekommen Sie beim **Hausmeister**.`'],
                    ['`die Nebenkosten` (Pl.)', 'коммунальные расходы', '`Die **Nebenkosten** steigen um 20 Euro im Monat.`'],
                    ['`die Abrechnung`', 'расчёт, итоговый счёт', '`Die **Abrechnung** für das letzte Jahr bekommen Sie im Mai.`'],
                    ['`die Nachzahlung`', 'доплата', '`Die **Nachzahlung** beträgt 60 Euro.`'],
                    ['`das Guthaben`', 'переплата (её вернут)', '`Ihr **Guthaben** von 85 Euro überweisen wir im Juni.`'],
                    ['`die Wartung`', 'техобслуживание, проверка', '`Die **Wartung** der Heizung findet am Dienstag statt.`'],
                    ['`die Heizung`', 'отопление', '`Am Montag funktioniert die **Heizung** von 8 bis 12 Uhr nicht.`'],
                    ['`der Aufzug`; `außer Betrieb`', 'лифт; не работает', '`Der **Aufzug** ist bis Freitag außer Betrieb.`'],
                    ['`das Treppenhaus`', 'подъезд, лестница', '`Bitte stellen Sie keine Fahrräder ins **Treppenhaus**.`'],
                    ['`die Hausordnung`', 'правила дома', '`Laut **Hausordnung** ist ab 22 Uhr Ruhe.`'],
                    ['`die Müllabfuhr`', 'вывоз мусора', '`Die **Müllabfuhr** kommt diese Woche erst am Donnerstag.`'],
                    ['`die Stadtwerke` (Pl.)', 'городские службы: свет, вода, газ', '`Die **Stadtwerke** lesen am 12. Mai die Zähler ab.`'],
                    ['`der Strom`', 'электричество', '`Am Mittwoch gibt es von 9 bis 11 Uhr keinen **Strom**.`'],
                    ['`das Wasser`', 'вода', '`Am Freitag gibt es kein warmes **Wasser**.`'],
                    ['`das Gas`', 'газ', '`Riechen Sie **Gas**? Rufen Sie sofort den Notdienst an.`'],
                    ['`der Zählerstand`', 'показания счётчика', '`Bitte schicken Sie uns den **Zählerstand** bis zum Monatsende.`']
                ]
            },
            { type: 'trap', wrong: 'Guthaben: Sie müssen 85 Euro bezahlen.', right: 'Guthaben: Sie bekommen 85 Euro zurück.', why: '`Guthaben` — переплата, деньги вернут. Доплачивать придётся при `Nachzahlung`.' },

            { type: 'h', text: '2. Школа и детский сад' },
            {
                type: 'table',
                head: ['Слово', 'Перевод', 'Пример'],
                rows: [
                    ['`der Elternbrief`', 'письмо родителям', '`Bitte unterschreiben Sie den **Elternbrief**.`'],
                    ['`der Elternabend`', 'родительское собрание', '`Der **Elternabend** ist am Dienstag um 19 Uhr.`'],
                    ['`die Klassenfahrt`', 'поездка класса с ночёвкой', '`Die **Klassenfahrt** dauert drei Tage.`'],
                    ['`der Ausflug`', 'экскурсия на день', '`Am Freitag machen wir einen **Ausflug** in den Zoo.`'],
                    ['`der Unterrichtsausfall`', 'отмена уроков; `fällt aus` — не состоится', '`Am Montag **fällt** der Sportunterricht **aus**.`'],
                    ['`die Ferien` (Pl.)', 'каникулы', '`In den **Ferien** ist das Sekretariat geschlossen.`'],
                    ['`der Schulbeginn`', 'начало занятий', '`Am ersten Schultag ist **Schulbeginn** um 9 Uhr.`'],
                    ['`die Anmeldung`', 'запись, регистрация', '`Die **Anmeldung** für die Kita ist ab 1. März möglich.`'],
                    ['`die Genehmigung`', 'разрешение', '`Für den Ausflug brauchen wir Ihre **Genehmigung**.`'],
                    ['`die Einverständniserklärung`', 'письменное согласие родителей', '`Bitte geben Sie die **Einverständniserklärung** bis Freitag ab.`'],
                    ['`die Entschuldigung`', 'записка о причине пропуска; извинение', '`Bei Krankheit brauchen wir eine schriftliche **Entschuldigung**.`'],
                    ['`das Sekretariat`', 'канцелярия школы', '`Melden Sie Ihr Kind morgens im **Sekretariat** krank.`'],
                    ['`die Klassenlehrerin`', 'классная руководительница', '`Bei Fragen wenden Sie sich an die **Klassenlehrerin**.`'],
                    ['`die Notbetreuung`', 'дежурная группа, присмотр', '`In den Ferien gibt es eine **Notbetreuung** von 8 bis 14 Uhr.`'],
                    ['`der Beitrag`', 'взнос, плата', '`Der **Beitrag** für das Mittagessen beträgt 3,50 Euro pro Tag.`'],
                    ['`mitgeben`', 'дать с собой', '`Bitte geben Sie Ihrem Kind Regenkleidung **mit**.`']
                ]
            },

            { type: 'h', text: '3. Город и община' },
            {
                type: 'table',
                head: ['Слово', 'Перевод', 'Пример'],
                rows: [
                    ['`die Gemeinde`', 'община, муниципалитет', '`Die **Gemeinde** lädt alle Bürger zum Sommerfest ein.`'],
                    ['`der Stadtrat`', 'городской совет', '`Der **Stadtrat** hat ein neues Schwimmbad beschlossen.`'],
                    ['`der Bürgermeister`, `die Bürgermeisterin`', 'мэр, глава общины', '`Die **Bürgermeisterin** eröffnet das Fest um 10 Uhr.`'],
                    ['`die Bürgersprechstunde`', 'приём граждан у мэра', '`Die **Bürgersprechstunde** ist jeden ersten Dienstag im Monat.`'],
                    ['`die Veranstaltung`', 'мероприятие', '`Die **Veranstaltung** ist kostenlos.`'],
                    ['`stattfinden`', 'состояться, проходить', '`Das Fest **findet** im Rathaus **statt**.`'],
                    ['`ausfallen`', 'не состояться, отменяться', '`Das Konzert **fällt** wegen Regen **aus**.`'],
                    ['`verschieben`', 'перенести на другое время', '`Wir **verschieben** den Flohmarkt auf Juni.`'],
                    ['`die Bauarbeiten` (Pl.)', 'строительные, ремонтные работы', '`Wegen **Bauarbeiten** fährt der Bus 12 nicht.`'],
                    ['`die Verkehrsbehinderung`', 'затруднение движения', '`In der Hauptstraße gibt es **Verkehrsbehinderungen**.`'],
                    ['`die Sperrung`; `gesperrt`', 'перекрытие; перекрыт', '`Die Brücke ist ab Montag **gesperrt**.`'],
                    ['`die Umleitung`', 'объезд', '`Bitte folgen Sie der **Umleitung** über die Bahnhofstraße.`'],
                    ['`die Öffnungszeiten` (Pl.)', 'часы работы', '`In den Ferien gelten andere **Öffnungszeiten**.`'],
                    ['`der Eintritt`', 'вход, плата за вход', '`Der **Eintritt** ist frei.`']
                ]
            },
            { type: 'trap', wrong: 'Das Fest fällt aus. = Das Fest findet draußen statt.', right: 'Das Fest fällt aus. = Das Fest findet nicht statt.', why: '`aus` здесь не «наружу»: `ausfallen` — не состояться. Праздник на улице — `im Freien` или `draußen`.' },
            { type: 'tip', text: 'Тему уведомления обычно видно по заголовку и первому предложению: `Wartung der Heizung`, `Elternabend`, `Sperrung`. Утверждение `richtig`/`falsch` в Teil 3 проверяет именно её: что происходит, когда и для кого.' }
        ]
    },

    {
        id: 'lr-bedingungen',
        title: 'Слова инструкций, условий и правил',
        drill: 'r04',
        blocks: [
            { type: 'h', text: '1. Можно, нельзя, нужно' },
            {
                type: 'table',
                head: ['Слово', 'Перевод', 'Пример'],
                rows: [
                    ['`darf nicht`', 'нельзя, запрещено', '`Das Gerät **darf nicht** nass werden.`'],
                    ['`muss`', 'обязательно, должен', '`Sie **müssen** den Kassenbon aufbewahren.`'],
                    ['`muss nicht`', 'не обязательно: можно, но не нужно', '`Sie **müssen** sich **nicht** anmelden.`'],
                    ['`soll`', 'следует, так рекомендуют', '`Man **soll** die Tabletten mit Wasser nehmen.`'],
                    ['`kann`', 'можно, есть возможность', '`Sie **können** das Gerät 30 Tage lang testen.`'],
                    ['`ist verboten` / `nicht erlaubt`', 'запрещено', '`Grillen ist auf dem Balkon **nicht erlaubt**.`'],
                    ['`ist erlaubt`', 'разрешено', '`Kleine Haustiere sind **erlaubt**.`'],
                    ['`ist erforderlich` / `ist nötig`', 'необходимо', '`Eine Anmeldung ist **erforderlich**.`'],
                    ['`ist nicht nötig`', 'не требуется', '`Eine Anmeldung ist **nicht nötig**.`']
                ]
            },
            { type: 'trap', wrong: 'Sie müssen nicht anrufen. = Sie dürfen nicht anrufen.', right: 'Sie müssen nicht anrufen. = Anrufen ist nicht nötig.', why: '`muss nicht` — «не обязательно», а `darf nicht` — «запрещено». По-русски «не должен» звучит как запрет, поэтому их легко спутать.' },

            { type: 'h', text: '2. Ограничители и условия' },
            {
                type: 'table',
                head: ['Слово', 'Перевод', 'Пример'],
                rows: [
                    ['`nur`', 'только', '`Die Garantie gilt **nur** mit Kassenbon.`'],
                    ['`ausschließlich`', 'исключительно, только', '`Zahlung **ausschließlich** per Überweisung.`'],
                    ['`mindestens`', 'не меньше, минимум', '`Der Vertrag läuft **mindestens** zwölf Monate.`'],
                    ['`höchstens`', 'не больше, максимум', '`Nehmen Sie **höchstens** drei Tabletten pro Tag.`'],
                    ['`bis zu`', 'до (максимум)', '`Der Akku hält **bis zu** zehn Stunden.`'],
                    ['`ab`', 'от, начиная с', '`**Ab** 50 Euro liefern wir kostenlos.`'],
                    ['`innerhalb von`', 'в течение', '`Rückgabe **innerhalb von** 14 Tagen.`'],
                    ['`außer`', 'кроме', '`Täglich geöffnet **außer** montags.`'],
                    ['`es sei denn, …`', 'если только не …', '`Der Kurs findet statt, **es sei denn**, es gibt weniger als fünf Anmeldungen.`'],
                    ['`in der Regel`', 'как правило, обычно', '`Die Lieferung dauert **in der Regel** drei Werktage.`'],
                    ['`grundsätzlich`', 'в принципе, как правило (исключения возможны)', '`Haustiere sind **grundsätzlich** nicht erlaubt.`'],
                    ['`auf Wunsch`', 'по желанию, по запросу', '`**Auf Wunsch** schicken wir die Rechnung per E-Mail.`'],
                    ['`gegen Gebühr`', 'за плату', '`Ein zweiter Schlüssel ist **gegen Gebühr** erhältlich.`'],
                    ['`kostenlos` / `gebührenfrei`', 'бесплатно', '`Die Rücksendung ist **kostenlos**.`'],
                    ['`im Voraus`', 'заранее, вперёд', '`Die Kursgebühr zahlen Sie **im Voraus**.`'],
                    ['`zusätzlich`', 'дополнительно', '`Für den Aufbau zahlen Sie **zusätzlich** 30 Euro.`']
                ]
            },

            { type: 'h', text: '3. Товар, договор, лекарство' },
            {
                type: 'table',
                head: ['Слово', 'Перевод', 'Пример'],
                rows: [
                    ['`die Gebrauchsanweisung`', 'инструкция по применению', '`Lesen Sie zuerst die **Gebrauchsanweisung**.`'],
                    ['`die Bedienungsanleitung`', 'инструкция по эксплуатации (прибора)', '`Die **Bedienungsanleitung** finden Sie auch online.`'],
                    ['`die Garantie`', 'гарантия производителя', '`Auf das Gerät haben Sie drei Jahre **Garantie**.`'],
                    ['`die Gewährleistung`', 'гарантия по закону (отвечает продавец)', '`Die gesetzliche **Gewährleistung** beträgt zwei Jahre.`'],
                    ['`die Rückgabe`', 'возврат', '`Eine **Rückgabe** ist nur in der Originalverpackung möglich.`'],
                    ['`der Umtausch`', 'обмен', '`Reduzierte Ware ist vom **Umtausch** ausgeschlossen.`'],
                    ['`der Widerruf` / `widerrufen`', 'отказ от договора в установленный срок', '`Sie können den Vertrag innerhalb von 14 Tagen **widerrufen**.`'],
                    ['`die Lieferung`', 'доставка', '`Die **Lieferung** dauert zwei bis vier Werktage.`'],
                    ['`die Versandkosten` (Pl.)', 'стоимость пересылки', '`Die **Versandkosten** betragen 4,90 Euro.`'],
                    ['`die Zahlung`', 'оплата', '`**Zahlung** auf Rechnung oder mit Kreditkarte.`'],
                    ['`die Vertragslaufzeit`', 'срок действия договора', '`Die **Vertragslaufzeit** beträgt 24 Monate.`'],
                    ['`die Kündigungsfrist`', 'срок предупреждения о расторжении', '`Die **Kündigungsfrist** beträgt einen Monat.`'],
                    ['`die Verlängerung` / `sich verlängern`', 'продление / продлевается', '`Der Vertrag **verlängert sich** automatisch um ein Jahr.`'],
                    ['`die Haftung` / `haften`', 'ответственность за ущерб', '`Für Wertsachen **haften** wir nicht.`'],
                    ['`die Einnahme`', 'приём (лекарства)', '`Fragen Sie vor der **Einnahme** Ihren Arzt.`'],
                    ['`die Dosierung`', 'дозировка', '`**Dosierung**: zweimal täglich eine Tablette.`'],
                    ['`die Nebenwirkungen` (Pl.)', 'побочные действия', '`Mögliche **Nebenwirkungen**: Müdigkeit, Kopfschmerzen.`'],
                    ['`die Gegenanzeigen` (Pl.)', 'противопоказания', '`**Gegenanzeigen**: Schwangerschaft, Kinder unter 12 Jahren.`']
                ]
            },

            { type: 'h', text: '4. Ловушки утверждений' },
            { type: 'trap', wrong: 'Parken nur für Kunden = Kunden dürfen hier nicht parken.', right: 'Parken nur für Kunden = Nur Kunden dürfen hier parken.', why: '`nur` ограничивает, а не запрещает: клиенты парковаться могут, все остальные — нет. Не путайте `nur` и `nicht`.' },
            { type: 'trap', wrong: 'Vor dem Essen einnehmen = erst essen, dann die Tablette', right: 'Vor dem Essen einnehmen = erst die Tablette, dann essen', why: '`vor` — до, `nach` — после. Поменяйте их местами — и правило перевернётся. Спросите себя: что **сначала**?' },
            { type: 'trap', wrong: 'höchstens drei Tabletten = mindestens drei Tabletten', right: 'höchstens drei Tabletten = nicht mehr als drei Tabletten', why: '`höchstens` — максимум, `mindestens` — минимум. Одно слово меняет правило на противоположное.' },
            { type: 'tip', text: 'В Teil 4 утверждения идут в порядке текста. Найдя место, сравните его с утверждением слово за словом: кто, что, сколько, когда, при каком условии. Одно изменённое слово (`nur` → `nicht`, `vor` → `nach`) — и ответ `falsch`.' }
        ]
    },

    {
        id: 'lr-signale',
        title: 'Слова-сигналы для richtig/falsch',
        drill: 'r04',
        blocks: [
            { type: 'rule', text: '`richtig` — если совпадает **всё**: кто, что, сколько, когда, при каком условии. `falsch` — если хотя бы одна деталь противоречит тексту.' },

            { type: 'h', text: '1. Усилители: абсолютные слова' },
            {
                type: 'table',
                head: ['Слово', 'Перевод', 'В тексте часто мягче'],
                rows: [
                    ['`immer`', 'всегда', '`meistens`, `in der Regel`'],
                    ['`nie`, `niemals`', 'никогда', '`selten`, `nur in Ausnahmefällen`'],
                    ['`alle`', 'все', '`viele`, `die meisten`'],
                    ['`jeder`, `jede`, `jedes`', 'каждый', '`fast jeder`, `viele`'],
                    ['`niemand`', 'никто', '`kaum jemand`, `wenige`'],
                    ['`kein`, `nichts`', 'никакой, ничего', '`wenig`, `kaum`'],
                    ['`nur`', 'только', '`auch`, `unter anderem`, `vor allem`'],
                    ['`ausschließlich`', 'исключительно', '`hauptsächlich`, `besonders`'],
                    ['`sofort`', 'сразу', '`innerhalb von drei Tagen`, `bald`'],
                    ['`auf jeden Fall`', 'в любом случае', '`wenn möglich`, `falls nötig`']
                ]
            },

            { type: 'h', text: '2. Смягчители' },
            {
                type: 'table',
                head: ['Слово', 'Перевод', 'Значит'],
                rows: [
                    ['`meistens`, `meist`', 'чаще всего', 'не всегда'],
                    ['`oft`, `häufig`', 'часто', 'не всегда'],
                    ['`manchmal`', 'иногда', 'не регулярно'],
                    ['`selten`', 'редко', 'значит «бывает», а не «никогда»'],
                    ['`kann`, `können`', 'может, можно', 'не обязательно'],
                    ['`in der Regel`, `normalerweise`', 'как правило, обычно', 'бывают исключения'],
                    ['`vielleicht`, `eventuell`', 'может быть', 'не точно'],
                    ['`fast`', 'почти', 'не полностью'],
                    ['`etwa`, `ca.`, `ungefähr`', 'примерно', 'не точное число'],
                    ['`kaum`', 'почти не', '`kaum jemand` — почти никто'],
                    ['`vor allem`', 'прежде всего', 'но не только']
                ]
            },
            { type: 'rule', text: 'Абсолютное слово в утверждении (`immer`, `alle`, `nur`) при мягком в тексте (`meistens`, `viele`, `auch`) — это `falsch`. Если и в тексте стоит такое же строгое слово, утверждение может быть `richtig`.' },

            { type: 'h', text: '3. Числа, сроки, условия' },
            {
                type: 'list',
                items: [
                    'Числа: сравните и число, и единицу — `zwei Wochen` ≠ `zwei Monate`, `pro Tag` ≠ `pro Woche`, `ab 18 Uhr` ≠ `bis 18 Uhr`.',
                    'Сроки: `bis` — до, `ab` — с, `seit` — с … и до сих пор, `nach` — после, `vor` — до или назад, `innerhalb von` — в течение.',
                    'Условия: `wenn`, `falls`, `nur mit`, `außer`, `es sei denn` — правило действует не всегда. Утверждение потеряло условие — проверьте, не стало ли оно `falsch`.',
                    'Отрицания: `kein`, `nicht`, `ohne`, приставка `un-` (`ungültig`, `unbegrenzt`) — одно короткое слово переворачивает смысл.'
                ]
            },
            { type: 'trap', wrong: 'Im Text steht ein anderes Wort. → falsch', right: 'Andere Wörter, gleicher Sinn → richtig', why: 'Верное утверждение почти всегда пересказывает текст своими словами. Причина для `falsch` — другой смысл, а не другие слова.' },

            { type: 'h', text: '4. В тексте → в утверждении' },
            {
                type: 'table',
                head: ['В тексте', 'В утверждении', 'Ответ', 'Почему'],
                rows: [
                    ['`Die Praxis ist **meistens** bis 18 Uhr geöffnet.`', '`Die Praxis ist **immer** bis 18 Uhr geöffnet.`', '`falsch`', '`meistens` ≠ `immer`'],
                    ['`Kinder **unter 6 Jahren** zahlen keinen Eintritt.`', '`Ein **vierjähriges** Kind muss nichts bezahlen.`', '`richtig`', '4 меньше 6; `keinen Eintritt zahlen` = `nichts bezahlen`'],
                    ['`Rückgabe **innerhalb von 14 Tagen**.`', '`Man kann die Ware auch noch **nach einem Monat** zurückgeben.`', '`falsch`', 'месяц больше 14 дней'],
                    ['`Nehmen Sie die Tropfen **nach** dem Essen.`', '`Die Tropfen soll man **nicht vor** dem Essen nehmen.`', '`richtig`', '«после еды» = «не до еды»'],
                    ['`Der Kurs findet statt, **wenn** sich mindestens acht Personen anmelden.`', '`Der Kurs findet **auf jeden Fall** statt.`', '`falsch`', 'в тексте условие: `wenn`'],
                    ['`Haustiere **nur nach Absprache** mit dem Vermieter.`', '`Man darf **ohne Erlaubnis** einen Hund halten.`', '`falsch`', 'нужно согласие хозяина'],
                    ['`Die Lieferung ist **ab 50 Euro** kostenlos.`', '`Bei einem Bestellwert **von 30 Euro** muss man die Lieferung bezahlen.`', '`richtig`', '30 меньше 50'],
                    ['`Das Schwimmbad ist **vom 1. bis 15. August** geschlossen.`', '`Das Schwimmbad ist **den ganzen August** geschlossen.`', '`falsch`', 'закрыто только до 15-го'],
                    ['`Anmeldung **bis spätestens Freitag**.`', '`**Nach Freitag** kann man sich nicht mehr anmelden.`', '`richtig`', '`spätestens` — позже нельзя'],
                    ['`**Viele** Eltern haben beim Fest geholfen.`', '`**Alle** Eltern haben beim Fest geholfen.`', '`falsch`', '`viele` ≠ `alle`'],
                    ['`Ab Oktober ist die Bibliothek **auch samstags** geöffnet.`', '`Ab Oktober kann man die Bibliothek **am Samstag** besuchen.`', '`richtig`', 'другие слова, тот же смысл'],
                    ['`Der Aufzug ist **von Montag bis Mittwoch** außer Betrieb.`', '`**Am Dienstag** funktioniert der Aufzug nicht.`', '`richtig`', 'вторник — между понедельником и средой'],
                    ['`Die Garantie gilt **nicht** bei falscher Benutzung.`', '`**Auch** bei falscher Benutzung repariert die Firma das Gerät kostenlos.`', '`falsch`', 'при неправильном использовании гарантии нет'],
                    ['`Rauchen ist **nur im Hof** erlaubt.`', '`Im Treppenhaus darf man **nicht** rauchen.`', '`richtig`', '`nur im Hof` — больше нигде']
                ]
            },
            { type: 'tip', text: 'Сначала найдите в утверждении «опасное» слово (`immer`, `nur`, `alle`, число, срок, условие), потом — его пару в тексте. Совпали по смыслу — `richtig`, противоречат — `falsch`.' }
        ]
    },

    {
        id: 'lr-brief',
        title: 'Формальное письмо: слова и формы для Teil 5',
        drill: 'r05',
        blocks: [
            { type: 'h', text: '1. Обращение и прощание' },
            {
                type: 'table',
                head: ['Формула', 'Перевод', 'Когда'],
                rows: [
                    ['`Sehr geehrte Damen und Herren,`', 'Уважаемые дамы и господа,', 'имя адресата неизвестно'],
                    ['`Sehr geehrte Frau Becker,`', 'Уважаемая госпожа Беккер,', 'женщине: окончание `-e`'],
                    ['`Sehr geehrter Herr Becker,`', 'Уважаемый господин Беккер,', 'мужчине: окончание `-er`'],
                    ['`Mit freundlichen Grüßen`', 'С уважением', 'стандарт официального письма'],
                    ['`Freundliche Grüße`', 'С уважением (чуть проще)', 'тоже вежливо и уместно'],
                    ['`Hochachtungsvoll`', 'С глубоким уважением', 'устарело, сегодня почти не пишут'],
                    ['`Viele Grüße`, `Liebe Grüße`', 'Всего доброго, с приветом', 'знакомым; в официальное письмо — нет']
                ],
                note: 'После обращения — запятая, дальше текст со строчной буквы: `… Herren, ich schreibe Ihnen …`. После прощания — ни запятой, ни точки.'
            },
            { type: 'trap', wrong: 'Sehr geehrter Frau Becker,', right: 'Sehr geehrte Frau Becker,', why: '`-er` — только к мужчине: `Sehr geehrter Herr …`. К женщине и к «дамам и господам» — `-e`.' },
            { type: 'trap', wrong: 'Mit freundliche Grüße', right: 'Mit freundlichen Grüßen', why: 'После `mit` — Dativ: во множественном числе `-en` у прилагательного и `-n` у существительного.' },

            { type: 'h', text: '2. Начало письма' },
            {
                type: 'table',
                head: ['Начало', 'Перевод', 'Пример'],
                rows: [
                    ['`Hiermit kündige ich …`', 'Настоящим я расторгаю …', '`**Hiermit kündige ich** meinen Handyvertrag zum 31.12.`'],
                    ['`Ich beziehe mich auf …`', 'Я пишу по поводу … (ссылаюсь на …)', '`**Ich beziehe mich auf** Ihr Schreiben vom 3. Mai.`'],
                    ['`Bezüglich …` + Gen', 'Относительно …', '`**Bezüglich** Ihrer Anzeige habe ich noch eine Frage.`'],
                    ['`Ich interessiere mich für …`', 'Меня интересует …', '`**Ich interessiere mich für** den Abendkurs.`'],
                    ['`Leider muss ich …`', 'К сожалению, я должен …', '`**Leider muss ich** den Termin am Montag absagen.`'],
                    ['`Ich schreibe Ihnen, weil …`', 'Я пишу вам, потому что …', '`**Ich schreibe Ihnen, weil** die Heizung nicht funktioniert.`'],
                    ['`Ich möchte mich über … beschweren.`', 'Я хочу пожаловаться на …', '`**Ich möchte mich über** den Lärm **beschweren**.`'],
                    ['`Ich möchte mich für … anmelden.`', 'Я хочу записаться на …', '`**Ich möchte mich für** den Kurs **anmelden**.`']
                ]
            },

            { type: 'h', text: '3. Вежливая просьба' },
            {
                type: 'table',
                head: ['Формула', 'Перевод', 'Пример'],
                rows: [
                    ['`Könnten Sie …?`', 'Не могли бы вы …?', '`**Könnten** Sie mir bitte einen neuen Termin geben?`'],
                    ['`Würden Sie bitte …?`', 'Будьте добры, …', '`**Würden** Sie mir bitte die Unterlagen schicken?`'],
                    ['`Dürfte ich …?`', 'Позвольте мне …? (очень вежливо)', '`**Dürfte** ich Sie um einen Rückruf bitten?`'],
                    ['`Ich wäre Ihnen dankbar, wenn …`', 'Я был бы вам благодарен, если бы …', '`Ich **wäre** Ihnen **dankbar**, wenn Sie mir bald antworten könnten.`'],
                    ['`Ich bitte Sie um …` + Akk', 'Прошу вас о …', '`Ich **bitte** Sie **um** eine schriftliche Bestätigung.`'],
                    ['`Wäre es möglich, … zu …?`', 'Можно ли было бы …?', '`**Wäre** es möglich, den Termin zu verschieben?`']
                ],
                note: 'Вежливая просьба — в форме Konjunktiv II: `könnten`, `würden`, `dürfte`, `wäre`. `Können Sie …?` — не ошибка, но звучит проще.'
            },

            { type: 'h', text: '4. Связки' },
            {
                type: 'table',
                head: ['Связка', 'Перевод', 'Пример'],
                rows: [
                    ['`deshalb`, `deswegen`, `daher`', 'поэтому', '`Ich ziehe nach Köln. **Deshalb** kündige ich die Wohnung.`'],
                    ['`trotzdem`', 'тем не менее, всё равно', '`Ich habe zweimal angerufen. **Trotzdem** hat sich niemand gemeldet.`'],
                    ['`außerdem`', 'кроме того', '`**Außerdem** funktioniert die Klingel nicht.`'],
                    ['`leider`', 'к сожалению', '`**Leider** habe ich noch keine Antwort bekommen.`'],
                    ['`denn`', 'так как (порядок слов прямой)', '`Ich kündige, **denn** ich ziehe um.`'],
                    ['`weil`', 'потому что (глагол в конце)', '`Ich kündige, **weil** ich **umziehe**.`'],
                    ['`obwohl`', 'хотя (глагол в конце)', '`Das Gerät ist wieder kaputt, **obwohl** es erst zwei Monate alt **ist**.`']
                ],
                note: 'После `deshalb`, `trotzdem`, `außerdem`, `leider` на первом месте — сразу глагол: `Deshalb kündige ich …`.'
            },

            { type: 'h', text: '5. Перед прощанием' },
            {
                type: 'table',
                head: ['Фраза', 'Перевод'],
                rows: [
                    ['`Vielen Dank im Voraus.`', 'Заранее большое спасибо.'],
                    ['`Ich freue mich auf Ihre Antwort.`', 'Жду вашего ответа.'],
                    ['`Bitte bestätigen Sie mir den Eingang meiner Kündigung.`', 'Пожалуйста, подтвердите получение моего заявления о расторжении.'],
                    ['`Für Rückfragen stehe ich Ihnen gern zur Verfügung.`', 'Если будут вопросы, я охотно отвечу.'],
                    ['`Über eine baldige Antwort würde ich mich freuen.`', 'Буду рад скорому ответу.']
                ],
                note: '`sich freuen auf` + Akk — о том, что будет: `auf Ihre Antwort`.'
            },

            { type: 'h', text: '6. `Sie`, `Ihnen`, `Ihr` — с заглавной' },
            {
                type: 'table',
                head: ['Форма', 'Значение', 'Пример'],
                rows: [
                    ['`Sie`', 'вы (кто? кого?)', '`Könnten **Sie** mich anrufen?` · `Ich bitte **Sie** um Hilfe.`'],
                    ['`Ihnen`', 'вам (кому?); после `mit`, `bei`, `von`', '`Ich danke **Ihnen**.` · `Ich habe **bei Ihnen** ein Sofa gekauft.`'],
                    ['`Ihr`, `Ihre`', 'ваш, ваша, ваши', '`**Ihr** Angebot ist interessant.` · `**Ihre** Rechnung ist falsch.`'],
                    ['`Ihren`', 'ваш (кого? что? — мужской род)', '`Vielen Dank für **Ihren** Brief.`'],
                    ['`Ihrem`', 'вашему, вашем (мужской и средний род)', '`In **Ihrem** Schreiben steht ein falsches Datum.`'],
                    ['`Ihrer`', 'вашей (женский род)', '`Ich bin mit **Ihrer** Antwort nicht zufrieden.`']
                ]
            },
            { type: 'rule', text: 'Вежливые `Sie`, `Ihnen`, `Ihr` — всегда с заглавной, в любом месте предложения. `sie` со строчной — «она» или «они».' },
            { type: 'trap', wrong: 'Ich danke Sie für Ihre Hilfe.', right: 'Ich danke Ihnen für Ihre Hilfe.', why: '`danken` требует Dativ: `Ihnen`. По-русски «благодарю вас», поэтому рука тянется к `Sie`.' },

            { type: 'h', text: '7. Предлоги в письме' },
            {
                type: 'table',
                head: ['Сочетание', 'Падеж', 'Пример'],
                rows: [
                    ['`für mich`, `für Sie`', 'Akk', '`Der Termin ist **für mich** leider zu früh.`'],
                    ['`an Sie`', 'Akk', '`Ich wende mich **an Sie**, weil ich Hilfe brauche.`'],
                    ['`bei Ihnen`', 'Dat', '`Ich habe **bei Ihnen** einen Kühlschrank gekauft.`'],
                    ['`mit Ihnen`, `von Ihnen`', 'Dat', '`Ich habe **von Ihnen** noch keine Antwort bekommen.`'],
                    ['`auf Ihre Anzeige`', 'Akk', '`Ich antworte **auf Ihre Anzeige** in der Zeitung.`'],
                    ['`in Bezug auf`', 'Akk', '`**In Bezug auf** Ihre Rechnung habe ich eine Frage.`'],
                    ['`bitten um`', 'Akk', '`Ich bitte Sie **um** einen Rückruf.`'],
                    ['`sich beschweren über`', 'Akk', '`Ich beschwere mich **über** den Lärm.`'],
                    ['`zum 31.12.`', 'Dat (`zu dem`)', '`Ich kündige den Vertrag **zum 31.12.**`'],
                    ['`bis spätestens`', 'срок', '`Bitte antworten Sie mir **bis spätestens** Freitag.`'],
                    ['`seit`', 'Dat', '`**Seit** drei Wochen ist die Heizung kaputt.`'],
                    ['`wegen`', 'Gen', '`**Wegen** meiner Krankheit kann ich nicht kommen.`']
                ],
                note: '`zum 31.12.` — договор заканчивается в этот день; `am 31.12.` — что-то происходит в этот день.'
            },
            { type: 'trap', wrong: 'Der Termin ist für mir zu früh.', right: 'Der Termin ist für mich zu früh.', why: '`für` — всегда Akkusativ: `für mich`, `für Sie`, `für meinen Sohn`.' },
            { type: 'tip', text: 'В Teil 5 сначала смотрите на соседей пропуска: предлог перед ним (падеж), подлежащее (форма глагола), адресат (`Sie` → `Ihnen`, `Ihr`). Потом — смысл: `deshalb` или `trotzdem`? Подставьте вариант и прочитайте предложение целиком.' }
        ]
    }
];
