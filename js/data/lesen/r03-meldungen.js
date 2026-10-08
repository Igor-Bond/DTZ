/**
 * Lesen, Teil 3. Три коротких текста — заметка из газеты, письмо управляющей компании, школы, службы или врача — и к каждому два задания.
 *
 * Теория учит двум чтениям: главная мысль для richtig/falsch и деталь для вопроса с тремя вариантами,
 * плюс устройство неверных вариантов и слова-сигналы. Шесть наборов, восемнадцать текстов, темы не повторяются.
 */

export default {
    id: 'r03',
    order: 3,
    teil: 3,
    title: 'Teil 3: короткие сообщения',
    short: 'Teil 3 · Сообщения',
    goal: 'После раздела вы понимаете короткую заметку или уведомление с одного прочтения, отличаете главную мысль от детали и не попадаетесь на неверные варианты: «слишком сильное» слово, верный факт не о том, другое число или срок.',
    why: 'Teil 3 — шесть баллов из двадцати пяти, а тексты в нём похожи на письма, которые вы получаете в жизни: от управляющей компании, школы, врача, банка. Ошибаются здесь чаще не из-за трудных слов, а из-за спешки: вариант выбирают по знакомому слову, не сверив деталь с текстом.',

    theory: [
        { type: 'h', text: '1. Что проверяют в Teil 3' },
        { type: 'p', text: 'В Teil 3 три коротких текста из повседневной жизни: заметка из местной газеты, письмо управляющей компании или городской службы, записка из школы или детского сада, объявление врача, аптеки, банка или библиотеки. Задание проверяет, понимаете ли вы сообщения и письма **в целом и в деталях** (по-немецки: `Informationen in Mitteilungen und Korrespondenz global und detailliert verstehen`).' },
        {
            type: 'table',
            head: ['Что', 'Как в Teil 3'],
            rows: [
                ['Тексты', 'три, по 55–130 слов, у каждого свой жанр и автор'],
                ['Задания', 'шесть: к каждому тексту два'],
                ['Первое задание к тексту', 'утверждение `richtig` или `falsch` — про **главную мысль**'],
                ['Второе задание к тексту', 'вопрос или начало фразы и три варианта — про **деталь**'],
                ['Время', 'около 9 минут на часть, то есть по 3 минуты на текст'],
                ['Баллы', 'по одному за задание: 6 из 25 в Lesen']
            ]
        },
        { type: 'rule', text: 'Два задания к одному тексту — **два разных чтения**. Утверждение richtig/falsch сверяют с главной мыслью: для него хватает одного прочтения. Вопрос с тремя вариантами требует вернуться в текст и сверить деталь.' },
        {
            type: 'table',
            head: ['', 'richtig / falsch', 'Три варианта'],
            rows: [
                ['О чём', 'главная мысль: что случилось, что меняется, о чём просят', 'деталь: число, срок, место, условие, для кого'],
                ['Где ответ', 'заголовок, первые предложения, общий смысл', 'одно предложение где угодно в тексте'],
                ['Как читать', 'один раз целиком', 'вернуться к нужному месту и сверить каждый вариант']
            ]
        },

        { type: 'h', text: '2. Стратегия: шесть шагов на один текст' },
        {
            type: 'list',
            items: [
                '**Заголовок и первое предложение.** Чаще всего главная мысль уже там: `Schwimmbad schließt im Juli`, `Neue Sprechzeiten ab Montag`.',
                '**Жанр: кто пишет и кому.** Обращение и подпись подсказывают, чего ждать: управляющая компания о чём-то просит, школа сообщает о событии, газета — о решении города.',
                '**Весь текст один раз**, без остановок на незнакомых словах. Цель — ответить себе одним предложением: о чём текст и что надо сделать?',
                '**Утверждение richtig/falsch.** Сравните его с главной мыслью. Если сомневаетесь, найдите в тексте предложение, которое его подтверждает или опровергает.',
                '**Вернуться за деталью.** Найдите в вопросе ключевое слово (срок, число, «кто», «что сделать») и его пересказ в тексте. Дальше читайте только это место.',
                '**Проверить все три варианта** по тексту, а не по ощущению. У верного есть подтверждение, у двух неверных — причина, которую вы можете назвать.'
            ]
        },

        { type: 'h', text: '3. Главная мысль и деталь' },
        { type: 'p', text: 'Главная мысль — то, ради чего текст написан: бассейн закрывается на ремонт, у врача новые часы приёма, в доме меняют окна. Её можно пересказать одним предложением. Деталь важна только для одного вопроса: во сколько, сколько стоит, кто может, до какого числа, что взять с собой.' },
        {
            type: 'table',
            head: ['Предложение из текста', 'Что это', 'Перевод'],
            rows: [
                ['`Die Stadtbibliothek hat ab Montag länger geöffnet.`', 'главная мысль', 'С понедельника библиотека работает дольше.'],
                ['`Donnerstags ist sie bis 20 Uhr geöffnet.`', 'деталь: время', 'По четвергам она открыта до 20 часов.'],
                ['`Der Kinderarzt Dr. Sommer schließt seine Praxis zum 30. Juni.`', 'главная мысль', 'Детский врач д-р Зоммер закрывает практику 30 июня.'],
                ['`Die Patientenakten bekommt die Praxis Dr. Kern.`', 'деталь: кто', 'Медицинские карты переходят в практику д-ра Керн.']
            ],
            note: 'Главную мысль проверяет утверждение richtig/falsch, деталь — вопрос с тремя вариантами.'
        },

        { type: 'h', text: '4. Пересказ: задание говорит другими словами' },
        {
            type: 'table',
            head: ['В задании', 'В тексте'],
            rows: [
                ['`Der Eintritt ist frei.`', '`kostenlos`, `Sie müssen nichts bezahlen.`'],
                ['`nicht allein`', '`nur mit einem Erwachsenen`'],
                ['`weniger als einen Monat`', '`etwa drei Wochen`'],
                ['`Ein anderer Arzt hilft.`', '`Vertretung: Dr. Lang`'],
                ['`sich vorher anmelden`', '`Bitte sagen Sie bis Montag Bescheid.`'],
                ['`Der Termin fällt aus.`', '`Der Termin findet nicht statt.`']
            ],
            note: 'Слово из варианта, которое стоит в тексте дословно, — ещё не доказательство: проверьте, к тому ли оно относится. Верный вариант чаще сказан другими словами.'
        },

        { type: 'h', text: '5. Как устроены неверные варианты' },
        {
            type: 'table',
            head: ['Способ', 'В тексте', 'Неверный вариант'],
            rows: [
                ['Противоречит тексту', '`Der Kurs ist kostenlos.`', '`Der Kurs kostet 20 Euro.`'],
                ['Верный факт, но про другое', '`Anmeldung in Raum 3, der Kurs ist in Raum 12.`', '`Der Kurs ist in Raum 3.`'],
                ['«Слишком сильное» слово: `nur`, `immer`, `alle`, `nie`', '`Die meisten Kurse beginnen um 18 Uhr.`', '`Alle Kurse beginnen um 18 Uhr.`'],
                ['Другое число, срок, адресат', '`Anmeldung bis zum 15. Mai`', '`Anmeldung bis zum 5. Mai`']
            ],
            note: 'Неверный вариант звучит правдоподобно: в нём слова из текста. Решает не узнавание слов, а сверка смысла.'
        },
        { type: 'trap', wrong: 'Die Bibliothek ist im August geschlossen.', right: 'Die Bibliothek ist im August nur vormittags geöffnet.', why: 'В тексте сказано, что в августе библиотека работает только до обеда. Кто зацепился за знакомое слово `August` и пропустил `nur vormittags`, отметит «закрыта». Работает меньше — не значит закрыта.' },
        { type: 'trap', wrong: 'Alle Kinder brauchen am Freitag Sportsachen.', right: 'Nur die Kinder der Klasse 2b brauchen am Freitag Sportsachen.', why: 'Записка адресована одному классу. Слова `alle`, `immer`, `nie`, `nur` в варианте — сигнал: такой вариант верен, только если в тексте сказано так же категорично.' },

        { type: 'h', text: '6. Слова-сигналы: одно слово меняет смысл' },
        { type: 'p', text: 'Короткие слова решают больше, чем длинные. Пропустите `nicht` или спутайте `ab` и `bis` — и верное утверждение станет неверным. Отмечайте такие слова и в задании, и в тексте: они должны совпасть по смыслу.' },
        {
            type: 'table',
            head: ['Слово', 'Значение', 'Пример'],
            rows: [
                ['`nicht`', 'не', '`Der Bus hält nicht am Markt.` — автобус у рынка не останавливается.'],
                ['`kein`', 'нет, никакой', '`Es gibt kein Mittagessen.` — обеда не будет.'],
                ['`nur`', 'только', '`Nur Erwachsene dürfen teilnehmen.` — участвовать могут только взрослые.'],
                ['`auch`', 'тоже, также', '`Wir haben auch samstags geöffnet.` — мы открыты и по субботам.'],
                ['`außer`', 'кроме', '`täglich außer Montag` — каждый день, кроме понедельника.'],
                ['`mindestens`', 'не меньше', '`mindestens zehn Teilnehmer` — не меньше десяти участников.'],
                ['`höchstens`', 'не больше', '`höchstens 20 Kinder` — не больше двадцати детей.'],
                ['`bis`', 'до', '`bis zum 15. Mai` — до 15 мая (в этот день ещё можно), потом поздно.'],
                ['`ab`', 'с, начиная с', '`ab 1. Oktober` — с 1 октября, раньше нельзя.'],
                ['`ab sofort`', 'уже сейчас, с этого момента', '`Ab sofort gelten neue Preise.` — новые цены действуют уже сейчас.'],
                ['`frühestens`', 'не раньше', '`frühestens im März` — в марте или позже.'],
                ['`spätestens`', 'не позже', '`spätestens am Freitag` — в пятницу или раньше.'],
                ['`wegen`', 'из-за (причина)', '`wegen Krankheit geschlossen` — закрыто из-за болезни.'],
                ['`trotz`', 'несмотря на', '`trotz der Bauarbeiten geöffnet` — открыто, несмотря на ремонт.'],
                ['`damit`', 'чтобы (цель)', '`Bitte räumen Sie den Flur auf, damit alle Wege frei sind.` — уберите вещи из коридора, чтобы проходы были свободны.']
            ],
            note: '`wegen` и `trotz` ведут к противоположным выводам: «закрыто из-за ремонта» и «открыто, несмотря на ремонт».'
        },
        { type: 'trap', wrong: 'Die Anmeldung ist ab dem 10. Mai möglich.', right: 'Die Anmeldung ist bis zum 10. Mai möglich.', why: 'В тексте `bis zum 10. Mai`: записаться можно до 10 мая, потом поздно. `ab` значит обратное — с 10 мая, а раньше нельзя. Одно короткое слово переворачивает срок.' },

        { type: 'h', text: '7. Слова жанров' },
        {
            type: 'table',
            head: ['Жанр', 'Как узнать', 'Слова'],
            rows: [
                ['Местная газета', 'заголовок, название города, обращения нет', '`die Gemeinde` — община, `der Stadtrat` — городской совет, `der Bürgermeister` — мэр, `die Polizei` — полиция, `der Verkehr` — движение, транспорт, `die Veranstaltung` — мероприятие, `die Eröffnung` — открытие, `der Preis` — цена; премия'],
                ['Управляющая компания, службы', '`Sehr geehrte Mieterinnen und Mieter`, `Liebe Bürgerinnen und Bürger`, подпись фирмы', '`die Hausverwaltung` — управляющая компания, `der Mieter` — жилец, `die Wartung` — техобслуживание, `die Nebenkosten` — коммунальные расходы, `die Abrechnung` — расчёт, `die Stadtwerke` — городские службы (свет, вода, газ), `der Strom` — электричество, `die Heizung` — отопление, `die Müllabfuhr` — вывоз мусора'],
                ['Школа, детский сад', '`Liebe Eltern`, подпись учителя или директора', '`der Elternbrief` — письмо родителям, `der Elternabend` — родительское собрание, `der Ausflug` — поездка на день, `die Klassenfahrt` — поездка класса с ночёвкой, `der Unterrichtsausfall` — отмена уроков'],
                ['Врач, аптека', '`Liebe Patientinnen und Patienten`, `Liebe Kundinnen und Kunden`', '`die Sprechzeiten` — часы приёма, `der Urlaub` — отпуск, `die Vertretung` — замещающий врач, `die Impfung` — прививка'],
                ['Почта, банк, библиотека', '`Sehr geehrte Kundin, sehr geehrter Kunde`, `Liebe Leserinnen und Leser`', '`die Filiale` — отделение, `der Geldautomat` — банкомат, `abholen` — забрать, `die Leihfrist` — срок выдачи, `verlängern` — продлить']
            ],
            note: 'Жанр подсказывает, что искать: в письме — просьбу и срок, в заметке — что изменилось и с какого дня.'
        },

        { type: 'h', text: '8. Разбор примера' },
        { type: 'ex', de: '**Liebe Mieterinnen und Mieter,** am Donnerstag gibt es im ganzen Haus **zwischen 9 und 14 Uhr kein Wasser**, weil die Stadtwerke eine Leitung in unserer Straße reparieren. **Bitte füllen Sie vorher Wasser in Flaschen.** Ab 14 Uhr können Sie das Wasser wieder normal benutzen. Ihre Hausverwaltung Klein', ru: 'Дорогие жильцы, в четверг с 9 до 14 часов во всём доме не будет воды, потому что городские службы ремонтируют трубу на нашей улице. Пожалуйста, заранее наберите воду в бутылки. С 14 часов можно снова пользоваться водой как обычно. Ваша управляющая компания Кляйн' },
        { type: 'p', text: 'Задание 1, richtig или falsch: `Die Mieter haben an einem Tag einige Stunden kein Wasser.` Задание 2: `Was sollen die Mieter tun?` Варианты: `die Stadtwerke anrufen` · `schon vor 9 Uhr Wasser in Flaschen füllen` · `bis 14 Uhr zu Hause bleiben`.' },
        {
            type: 'list',
            items: [
                '**Шаги 1–2.** Обращение `Liebe Mieterinnen und Mieter` и подпись `Hausverwaltung`: управляющая компания пишет жильцам. Ждём сообщения о неудобстве и просьбы.',
                '**Шаг 3.** Одно чтение целиком: в четверг несколько часов не будет воды, потому что чинят трубу.',
                '**Шаг 4.** Утверждение совпадает с главной мыслью: `zwischen 9 und 14 Uhr` — это и есть «несколько часов в один день». Ответ: richtig.',
                '**Шаг 5.** Вопрос — про просьбу. Ищем в тексте `Bitte …`: `Bitte füllen Sie vorher Wasser in Flaschen.`',
                '**Шаг 6.** `die Stadtwerke anrufen`: слово из текста, но звонить никто не просит — верное слово, чужой факт. `bis 14 Uhr zu Hause bleiben`: 14 часов в тексте есть, но это время, когда вода вернётся. Верен второй вариант: `vorher` = `vor 9 Uhr`.'
            ]
        },

        { type: 'h', text: '9. Незнакомые слова' },
        { type: 'p', text: 'В каждом тексте будут незнакомые слова: `Förderverein`, `Ersatzteile`, `Vollmacht`. Это нормально: тексты написаны «как настоящие», а то, от чего зависит ответ, сказано словами уровня B1. Teil 3 проверяет главную мысль и одну деталь, а не каждое слово: главную мысль понимают по знакомым словам.' },
        {
            type: 'list',
            items: [
                'Спросите себя: нужно ли это слово для ответа? Чаще всего нет — главная мысль понятна и без него.',
                'Если нужно — разберите на части: `Ersatz` + `Bus` — автобус взамен (трамвая), `Eltern` + `Abend` — вечер для родителей.',
                'Посмотрите на соседние слова: `Bitte bringen Sie eine Vollmacht und Ihren Ausweis mit` — значит, `Vollmacht` — какой-то документ.',
                'Не задерживайтесь на слове дольше нескольких секунд: время на часть ограничено, а одно слово редко решает ответ.'
            ]
        },
        { type: 'tip', text: 'Если два варианта кажутся верными, найдите в тексте предложение для каждого. У верного оно есть; у неверного найдётся слово, которое ему противоречит: `nur`, другое число, другой адресат.' }
    ],

    exercises: [
        // ---- слова жанров
        { id: 'r03-01', type: 'choice', q: 'Что значит `ab sofort` в объявлении `Ab sofort gelten neue Öffnungszeiten.`?',
          options: ['новые часы работы действуют уже сейчас', 'новые часы работы начнут действовать позже', 'новые часы работы действуют недолго'], answer: 0,
          explain: '`sofort` — «сразу», `ab sofort` — «начиная с этого момента». Новые часы действуют уже сегодня, ждать не надо.', tag: 'lesen_wort' },
        { id: 'r03-02', type: 'choice', q: 'Что значит `Wartung des Aufzugs` на табличке в подъезде?',
          options: ['плановая проверка и обслуживание лифта', 'ожидание лифта', 'замена старого лифта на новый'], answer: 0,
          explain: '`die Wartung` — техобслуживание: проверка, чистка, мелкий ремонт по плану. Слово похоже на `warten` («ждать»), но речь о работе техников. Новый лифт был бы `ein neuer Aufzug`.', tag: 'lesen_wort' },
        { id: 'r03-03', type: 'choice', q: 'В письме из школы стоит слово `Unterrichtsausfall`. Что это?',
          options: ['уроки отменяются', 'уроки ведёт другой учитель', 'уроки проходят в другом кабинете'], answer: 0,
          explain: '`der Unterricht` — уроки, `ausfallen` — не состояться. Урок с другим учителем — `Vertretung`, другой кабинет — `Raumänderung`.', tag: 'lesen_wort' },
        { id: 'r03-04', type: 'choice', q: 'Что присылает управляющая компания под названием `Nebenkostenabrechnung`?',
          options: ['расчёт расходов на воду, отопление и вывоз мусора за год', 'новый договор аренды квартиры', 'счёт за ремонт в вашей квартире'], answer: 0,
          explain: '`Nebenkosten` — расходы помимо самой аренды: вода, отопление, мусор, смотритель. `Abrechnung` — итоговый расчёт за период: по нему жилец получает деньги назад или доплачивает.', tag: 'lesen_wort' },
        { id: 'r03-05', type: 'choice', q: 'На двери практики: `Wegen Urlaub geschlossen. Vertretung: Dr. Lang, Ringstraße 4.` Что это значит?',
          options: ['Пока врач в отпуске, можно обратиться к д-ру Лангу.', 'Д-р Ланг тоже в отпуске.', 'Д-р Ланг теперь всегда принимает вместо этого врача.'], answer: 0,
          explain: '`die Vertretung` — врач, который временно замещает коллегу. Только на время отпуска, а не навсегда.', tag: 'lesen_wort' },
        { id: 'r03-06', type: 'choice', q: 'Текст начинается словами `Liebe Patientinnen und Patienten,`. Кто его, скорее всего, написал?',
          options: ['врачебная практика', 'управляющая компания', 'школа'], answer: 0,
          explain: 'Обращение называет адресата — пациентов. Управляющая компания пишет `Liebe Mieterinnen und Mieter`, школа — `Liebe Eltern`. Узнав жанр, вы заранее знаете, чего ждать: часы приёма, отпуск, замещение.', tag: 'lesen_wort' },

        // ---- главная мысль, деталь, ловушки
        { id: 'r03-07', type: 'choice', text: 'Ab dem 1. Mai fährt die Buslinie 12 auch am Wochenende. Samstags kommt der Bus alle 30 Minuten, sonntags einmal pro Stunde.',
          q: 'Утверждение `Die Linie 12 fährt ab Mai auch am Samstag und Sonntag.` — главная мысль текста или деталь?',
          options: ['главная мысль', 'деталь'], answer: 0,
          explain: 'Ради этого текст и написан: у автобуса 12 появились рейсы в выходные. Это говорит первое предложение, и это можно пересказать одной фразой.', tag: 'lesen_text' },
        { id: 'r03-08', type: 'choice', text: 'Ab dem 1. Mai fährt die Buslinie 12 auch am Wochenende. Samstags kommt der Bus alle 30 Minuten, sonntags einmal pro Stunde.',
          q: 'Утверждение `Sonntags fährt der Bus nur einmal in der Stunde.` — главная мысль текста или деталь?',
          options: ['главная мысль', 'деталь'], answer: 1,
          explain: 'Это деталь: интервал по воскресеньям. Такие сведения (число, время, день) проверяет вопрос с тремя вариантами, и за ними возвращаются в текст.', tag: 'lesen_text' },
        { id: 'r03-09', type: 'choice', text: 'Sprechzeiten: Montag bis Freitag 8 bis 12 Uhr, Dienstag und Donnerstag auch 15 bis 18 Uhr.',
          q: 'Утверждение: `Die Praxis hat nur vormittags Sprechstunde.` Верно ли оно по тексту?',
          options: ['richtig', 'falsch'], answer: 1,
          explain: '`nur` — «слишком сильное» слово. По вторникам и четвергам приём есть и после обеда, с 15 до 18, значит, не только утром: falsch.', tag: 'lesen_text' },
        { id: 'r03-10', type: 'choice', text: 'В тексте: `Kinder unter 6 Jahren fahren kostenlos.` Утверждение: `Alle Kinder fahren kostenlos.`',
          q: 'Какое слово делает утверждение неверным?',
          options: ['Alle', 'Kinder', 'kostenlos'], answer: 0,
          explain: 'Бесплатно ездят только дети младше шести лет, а `alle` распространяет это на всех детей. Слова `alle`, `immer`, `nie`, `nur` всегда сверяйте с текстом.', tag: 'lesen_text' },
        { id: 'r03-11', type: 'choice', text: 'В тексте: `Die Anmeldung ist im Sekretariat, Raum 3. Der Deutschkurs findet in Raum 12 statt.`',
          q: 'Где проходит курс?',
          options: ['in Raum 3', 'in Raum 12', 'im Sekretariat'], answer: 1,
          explain: 'Ловушка «верный факт, но про другое»: Raum 3 и секретариат в тексте есть, но это место записи. Сам курс — `findet in Raum 12 statt`.', tag: 'lesen_text' },
        { id: 'r03-12', type: 'choice', text: 'В тексте: `Die Bauarbeiten beginnen im Mai und dauern etwa drei Wochen.`',
          q: 'Какое утверждение передаёт текст верно?',
          options: ['Die Arbeiten dauern weniger als einen Monat.', 'Die Arbeiten dauern drei Monate.', 'Die Arbeiten beginnen in drei Wochen.'], answer: 0,
          explain: 'Три недели — меньше месяца: это пересказ. `drei Monate` — другое число, а `in drei Wochen` — другой смысл: не сколько длятся работы, а когда начнутся.', tag: 'lesen_text' },
        { id: 'r03-13', type: 'choice', q: 'Какой пересказ точно передаёт фразу `Kinder unter 14 Jahren dürfen nur mit einem Erwachsenen ins Schwimmbad.`?',
          options: ['Kinder unter 14 Jahren dürfen nicht allein ins Bad.', 'Kinder unter 14 Jahren dürfen nicht ins Bad.', 'Erwachsene dürfen nur mit Kindern ins Bad.'], answer: 0,
          explain: '`nur mit einem Erwachsenen` = `nicht allein`. Второй вариант запрещает вход совсем, третий переворачивает правило: ограничение касается детей, а не взрослых.', tag: 'lesen_text' },

        // ---- слова-сигналы
        { id: 'r03-14', type: 'gap', q: 'Вставьте слово-сигнал.',
          text: 'Die Bibliothek ist ___ 1. Oktober wieder geöffnet.', hint: 'начиная с', answer: ['ab'],
          explain: '`ab` + дата — «начиная с»: до 1 октября закрыто, с 1 октября открыто. В текстах пишут и `ab dem 1. Oktober`.', tag: 'lesen_wort' },
        { id: 'r03-15', type: 'gap', q: 'Вставьте слово-сигнал.',
          text: 'Bitte melden Sie sich ___ zum 15. März an.', hint: 'до (крайний срок)', answer: ['bis'],
          explain: '`bis zum 15. März` — до 15 марта; после этой даты записаться уже нельзя. Не путайте с `ab` — «начиная с».', tag: 'lesen_wort' },
        { id: 'r03-16', type: 'gap', q: 'Вставьте слово-сигнал.',
          text: 'In der Gruppe ist Platz für ___ zwölf Kinder, mehr geht nicht.', hint: 'самое большее', answer: [['höchstens', 'maximal']],
          explain: '`höchstens` — «не больше». Противоположность — `mindestens` («не меньше»). В вопросе на деталь такая пара переворачивает ответ.', tag: 'lesen_wort' },
        { id: 'r03-17', type: 'gap', q: 'Вставьте слово-сигнал.',
          text: 'Die Reparatur ist ___ am Freitag fertig, vielleicht schon früher.', hint: 'не позже', answer: ['spätestens'],
          explain: '`spätestens am Freitag` — в пятницу или раньше; на это указывает и `vielleicht schon früher`. Противоположность — `frühestens` («не раньше»).', tag: 'lesen_wort' },
        { id: 'r03-18', type: 'gap', q: 'Вставьте слово-сигнал.',
          text: '___ Bauarbeiten ist die Straße bis Freitag gesperrt.', hint: 'из-за', answer: ['Wegen'],
          explain: '`wegen` называет причину: улица закрыта из-за ремонта. Если в тексте стоит `trotz` («несмотря на»), вывод противоположный.', tag: 'lesen_wort' },
        { id: 'r03-19', type: 'gap', q: 'Вставьте слово-сигнал.',
          text: 'Das Café bleibt ___ der Bauarbeiten geöffnet.', hint: 'несмотря на', answer: ['trotz'],
          explain: '`trotz` — «несмотря на»: ремонт идёт, а кафе всё равно работает. Кто заметил только слово `Bauarbeiten`, решит, что кафе закрыто.', tag: 'lesen_wort' },

        // ---- исправить утверждение, порядок шагов
        { id: 'r03-20', type: 'fix', q: 'В тексте: `Der Kurs kostet 40 Euro, für Schüler nur 20 Euro.` Исправьте одно слово в утверждении, чтобы оно стало верным.',
          text: 'Der Kurs kostet für alle 20 Euro.',
          answer: ['Der Kurs kostet für Schüler 20 Euro.', 'Der Kurs kostet für Schüler nur 20 Euro.'],
          explain: '`alle` — «слишком сильное» слово: 20 евро платят только школьники, остальные — 40. Замените `alle` на `Schüler`.', tag: 'lesen_text' },
        { id: 'r03-21', type: 'fix', q: 'В тексте: `Die Müllabfuhr kommt diese Woche einen Tag später: am Freitag statt am Donnerstag.` Исправьте утверждение.',
          text: 'Die Müllabfuhr kommt diese Woche am Donnerstag.',
          answer: ['Die Müllabfuhr kommt diese Woche am Freitag.', 'Diese Woche kommt die Müllabfuhr am Freitag.'],
          explain: '`statt` — «вместо»: четверг — обычный день, а на этой неделе вывоз будет в пятницу. Слово после `statt` называет то, чего не будет.', tag: 'lesen_text' },
        { id: 'r03-22', type: 'order', q: 'Расставьте шаги работы с одним текстом Teil 3 по порядку.',
          items: ['Прочитать заголовок и первое предложение', 'Понять жанр: кто пишет и кому', 'Прочитать весь текст один раз', 'Решить утверждение richtig/falsch', 'Вернуться в текст за деталью', 'Проверить по тексту все три варианта'],
          explain: 'Сначала общее, потом частное: заголовок и жанр готовят к чтению, одного чтения хватает на главную мысль, а деталь ищут прицельно и сверяют с ней каждый вариант.', tag: 'lesen_text' }
    ],

    sets: [
        // ================== Набор 1 ==================
        {
            id: 'r03-s1',
            title: 'Рынок переезжает, отопление, отпуск врача',
            situation: 'Sie lesen eine Meldung in der Zeitung, einen Brief Ihrer Hausverwaltung und einen Aushang in Ihrer Arztpraxis. Ist die Aussage richtig oder falsch? Welche Lösung passt: a, b oder c?',
            material: [
                { kind: 'text', id: 't1', title: 'Wochenmarkt zieht um', paragraphs: [
                    'Ab dem 1. April findet der Wochenmarkt in Lindenau nicht mehr in der Marktstraße statt, sondern auf dem Rathausplatz. Der Grund: Die Marktstraße bekommt neue Wasserleitungen, und während der Bauarbeiten ist dort kein Platz für die Stände. Das hat der Stadtrat am Dienstag beschlossen.',
                    'Auch der Markttag ändert sich: Statt am Freitagnachmittag öffnen die Stände jetzt jeden Samstag von 7 bis 13 Uhr. Bürgermeisterin Karin Vogt hofft, dass am Wochenende mehr Familien kommen. Die Händler sind zufrieden, denn auf dem Rathausplatz gibt es mehr Platz und genug Parkplätze. Wenn die Bauarbeiten fertig sind, wahrscheinlich im Oktober, kehrt der Markt in die Marktstraße zurück.'
                ] },
                { kind: 'text', id: 't2', title: 'Wartung der Heizkörper', paragraphs: [
                    'Sehr geehrte Mieterinnen und Mieter,',
                    'am 14. Oktober prüft die Firma Wärmetechnik Ostmann die Heizkörper in allen Wohnungen im Haus Gartenweg 12. Die Techniker kommen zwischen 8 und 12 Uhr, die Arbeit dauert pro Wohnung etwa 15 Minuten.',
                    'Bitte sorgen Sie dafür, dass die Techniker in Ihre Wohnung kommen können. Wenn Sie an diesem Tag nicht zu Hause sind, geben Sie bitte spätestens am 13. Oktober Ihren Wohnungsschlüssel bei unserem Hausmeister, Herrn Brandt, ab. Ist das nicht möglich, rufen Sie uns bitte unter 0123 456789 an. Muss die Firma ein zweites Mal kommen, kostet das für Sie 25 Euro.',
                    'Mit freundlichen Grüßen',
                    'Hausverwaltung Kraft & Partner'
                ] },
                { kind: 'text', id: 't3', title: 'Praxis Dr. Sabine Roth: Urlaub', paragraphs: [
                    'Liebe Patientinnen und Patienten,',
                    'unsere Praxis ist vom 28. Juli bis zum 15. August wegen Urlaub geschlossen. Ab dem 18. August sind wir wieder zu den gewohnten Sprechzeiten für Sie da.',
                    'In dringenden Fällen wenden Sie sich bitte an unsere Vertretung: Praxis Dr. Ahmet Yilmaz, Bahnhofstraße 7, Telefon 0123 457120. Dr. Yilmaz hat in dieser Zeit montags bis freitags von 8 bis 12 Uhr Sprechstunde, am Mittwoch auch von 15 bis 18 Uhr.',
                    'Rezepte für Medikamente, die Sie regelmäßig brauchen, können Sie noch bis zum 25. Juli bei uns bestellen.',
                    'Ihr Praxisteam'
                ] }
            ],
            items: [
                { id: 'r03-s1-1', text: 't1', type: 'rf', q: 'Der Wochenmarkt findet für einige Monate an einem anderen Ort statt.',
                  answer: true, evidence: 'Wenn die Bauarbeiten fertig sind, wahrscheinlich im Oktober, kehrt der Markt in die Marktstraße zurück.',
                  why: 'С 1 апреля рынок стоит на Rathausplatz, а после ремонта, вероятно в октябре, возвращается на Marktstraße. Значит, другое место — только на несколько месяцев: richtig.' },
                { id: 'r03-s1-2', text: 't1', type: 'mc', q: 'Warum steht der Markt ab April auf dem Rathausplatz?',
                  options: ['Weil es in der Marktstraße eine Baustelle gibt.', 'Weil die Händler mehr Parkplätze wollen.', 'Weil mehr Familien kommen sollen.'], answer: 0,
                  evidence: 'Die Marktstraße bekommt neue Wasserleitungen, und während der Bauarbeiten ist dort kein Platz für die Stände.',
                  why: 'Причина названа сразу после `Der Grund:` — на Marktstraße меняют водопровод, и для прилавков нет места. Парковками торговцы довольны уже на новом месте, а больше семей мэр ждёт из-за нового дня (субботы), а не из-за площади.' },
                { id: 'r03-s1-3', text: 't2', type: 'rf', q: 'Die Mieter müssen am Tag der Prüfung auf jeden Fall zu Hause sein.',
                  answer: false, evidence: 'Wenn Sie an diesem Tag nicht zu Hause sind, geben Sie bitte spätestens am 13. Oktober Ihren Wohnungsschlüssel bei unserem Hausmeister',
                  why: 'Оставаться дома не обязательно: кто не может быть дома, отдаёт ключ смотрителю (`Hausmeister`) не позже 13 октября. `auf jeden Fall` противоречит тексту — falsch.' },
                { id: 'r03-s1-4', text: 't2', type: 'mc', q: 'Was passiert, wenn die Firma ein zweites Mal kommen muss?',
                  options: ['Der Hausmeister öffnet die Wohnung.', 'Die Hausverwaltung ruft den Mieter an.', 'Der Mieter muss dafür bezahlen.'], answer: 2,
                  evidence: 'Muss die Firma ein zweites Mal kommen, kostet das für Sie 25 Euro.',
                  why: 'Последнее предложение: второй приезд фирмы стоит 25 евро, и платит жилец (`für Sie`). Смотритель в тексте только принимает ключи, а звонить должен жилец (`rufen Sie uns … an`), а не управляющая компания.' },
                { id: 'r03-s1-5', text: 't3', type: 'rf', q: 'Die Praxis ist im Sommer geschlossen, aber für dringende Fälle gibt es einen anderen Arzt.',
                  answer: true, evidence: 'In dringenden Fällen wenden Sie sich bitte an unsere Vertretung',
                  why: 'С 28 июля по 15 августа практика закрыта, а в срочных случаях надо идти к замещающему врачу (`Vertretung`) — это и есть «другой врач»: richtig.' },
                { id: 'r03-s1-6', text: 't3', type: 'mc', q: 'Zu Dr. Yilmaz kann man in dieser Zeit …',
                  options: ['an jedem Tag auch nachmittags gehen.', 'an einem Nachmittag pro Woche gehen.', 'nur vormittags in die Sprechstunde gehen.'], answer: 1,
                  evidence: 'am Mittwoch auch von 15 bis 18 Uhr',
                  why: 'Д-р Йылмаз принимает с понедельника по пятницу утром и дополнительно в среду с 15 до 18 — после обеда только один день в неделю. «Каждый день после обеда» противоречит тексту, а `nur vormittags` — «слишком сильное» слово: среда после обеда тоже есть.' }
            ],
            glossary: [
                { de: 'der Wochenmarkt', ru: 'рынок раз в неделю' },
                { de: 'der Stand, die Stände', ru: 'прилавок, палатка на рынке' },
                { de: 'die Wasserleitung', ru: 'водопровод' },
                { de: 'der Stadtrat', ru: 'городской совет' },
                { de: 'der Händler', ru: 'торговец' },
                { de: 'zurückkehren', ru: 'возвращаться' },
                { de: 'die Wartung', ru: 'техобслуживание' },
                { de: 'der Heizkörper', ru: 'батарея отопления' },
                { de: 'der Hausmeister', ru: 'смотритель дома' },
                { de: 'sorgen für', ru: 'позаботиться о' },
                { de: 'die Vertretung', ru: 'замещающий врач' },
                { de: 'dringend', ru: 'срочный' },
                { de: 'gewohnt', ru: 'привычный, обычный' },
                { de: 'regelmäßig', ru: 'регулярно' }
            ]
        },

        // ================== Набор 2 ==================
        {
            id: 'r03-s2',
            title: 'Ремонт-кафе, поездка детского сада, библиотека',
            situation: 'Sie lesen einen Artikel aus der Stadtteilzeitung, einen Brief aus der Kita Ihres Sohnes und eine Information der Stadtbibliothek. Ist die Aussage richtig oder falsch? Welche Lösung passt: a, b oder c?',
            material: [
                { kind: 'text', id: 't1', title: 'Reparieren statt wegwerfen', paragraphs: [
                    'Im Stadtteilzentrum Nordstadt gibt es seit Kurzem ein Repair-Café. Einmal im Monat helfen dort ehrenamtliche Helferinnen und Helfer den Besuchern, kaputte Dinge selbst zu reparieren: Lampen, Toaster, Fahrräder oder Kleidung. Zum ersten Treffen kamen über 40 Gäste.',
                    'Die Hilfe ist kostenlos, nur Ersatzteile muss man selbst bezahlen. Wer möchte, kann eine kleine Spende geben. Handys und Computer reparieren die Helfer allerdings nicht, weil das zu lange dauert. Das nächste Repair-Café ist am letzten Samstag im Mai von 14 bis 17 Uhr in der Ahornstraße 5. Man muss sich nicht anmelden. Die Organisatoren suchen außerdem noch Helfer, die gut nähen können.'
                ] },
                { kind: 'text', id: 't2', title: 'Kita Sonnenblume: Ausflug zum Bauernhof', paragraphs: [
                    'Liebe Eltern der Igel-Gruppe,',
                    'am nächsten Donnerstag besuchen wir mit den Kindern den Bauernhof Lindner. Dort dürfen die Kinder Tiere füttern und mit der Bäuerin Brot backen. Der Bus fährt um 8:30 Uhr ab, deshalb bringen Sie Ihr Kind bitte schon um 8:15 Uhr in die Kita. Gegen 14 Uhr sind wir wieder zurück.',
                    'Bitte ziehen Sie Ihrem Kind wetterfeste Kleidung an und geben Sie ihm Gummistiefel und eine Flasche Wasser mit. Das Mittagessen bekommen die Kinder auf dem Hof. Der Ausflug kostet 6 Euro pro Kind. Bitte geben Sie das Geld bis Montag in einem Umschlag mit dem Namen Ihres Kindes bei uns ab.',
                    'Viele Grüße',
                    'Ihr Kita-Team'
                ] },
                { kind: 'text', id: 't3', title: 'Stadtbibliothek: Umbau im Erdgeschoss', paragraphs: [
                    'Ab dem 2. September renovieren wir das Erdgeschoss der Stadtbibliothek. Die Arbeiten dauern etwa sechs Wochen. Die Bibliothek bleibt in dieser Zeit trotzdem geöffnet, aber der Eingang ist an der Rückseite des Gebäudes im Schillerweg.',
                    'Die Kinderbücher und die Zeitschriften finden Sie während des Umbaus im 1. Stock. Die Computerplätze können Sie leider nicht benutzen. Bücher und DVDs geben Sie bitte nicht am Automaten zurück, sondern an der Information im 1. Stock. Für alle Medien, die Sie ausgeliehen haben, verlängern wir die Leihfrist automatisch um zwei Wochen.',
                    'Wir bitten um Ihr Verständnis!',
                    'Ihr Team der Stadtbibliothek'
                ] }
            ],
            items: [
                { id: 'r03-s2-1', text: 't1', type: 'rf', q: 'Im neuen Repair-Café muss man für die Hilfe beim Reparieren bezahlen.',
                  answer: false, evidence: 'Die Hilfe ist kostenlos',
                  why: '`Die Hilfe ist kostenlos`: помощь бесплатная, платят только за запчасти, пожертвование — по желанию. Утверждение, что за помощь надо платить, противоречит тексту — falsch.' },
                { id: 'r03-s2-2', text: 't1', type: 'mc', q: 'Die Helfer im Repair-Café …',
                  options: ['nähen keine Kleidung.', 'reparieren keine Fahrräder.', 'reparieren keine Handys.'], answer: 2,
                  evidence: 'Handys und Computer reparieren die Helfer allerdings nicht',
                  why: 'Телефоны и компьютеры здесь не чинят: это слишком долго. Велосипеды и одежда стоят в списке того, что чинят; то, что ищут ещё помощников, умеющих шить, не значит, что одежду не принимают.' },
                { id: 'r03-s2-3', text: 't2', type: 'rf', q: 'Die Igel-Gruppe fährt für einen Tag zu einem Bauernhof.',
                  answer: true, evidence: 'am nächsten Donnerstag besuchen wir mit den Kindern den Bauernhof Lindner',
                  why: 'Группа едет на ферму в четверг: автобус уходит в 8:30, вернутся около 14 часов. Поездка на один день: richtig.' },
                { id: 'r03-s2-4', text: 't2', type: 'mc', q: 'Was sollen die Eltern ihrem Kind für den Ausflug mitgeben?',
                  options: ['Gummistiefel und etwas zu trinken', 'ein Mittagessen und etwas zu trinken', 'Gummistiefel und Brot für die Tiere'], answer: 0,
                  evidence: 'geben Sie ihm Gummistiefel und eine Flasche Wasser mit',
                  why: 'С собой дают резиновые сапоги и бутылку воды (`eine Flasche Wasser` = `etwas zu trinken`). Обед дети получат на ферме, а хлеб там пекут сами — ни то ни другое приносить не просят.' },
                { id: 'r03-s2-5', text: 't3', type: 'rf', q: 'Während der Bauarbeiten kann man die Bibliothek nicht besuchen.',
                  answer: false, evidence: 'Die Bibliothek bleibt in dieser Zeit trotzdem geöffnet',
                  why: 'Несмотря на ремонт, библиотека работает, только вход с другой стороны здания. Утверждение противоречит тексту — falsch.' },
                { id: 'r03-s2-6', text: 't3', type: 'mc', q: 'Was ändert sich für die Leser während des Umbaus?',
                  options: ['Sie müssen ihre Bücher früher zurückgeben.', 'Sie können nicht an den Computern arbeiten.', 'Sie finden die Kinderbücher im Erdgeschoss.'], answer: 1,
                  evidence: 'Die Computerplätze können Sie leider nicht benutzen.',
                  why: 'Компьютерами во время ремонта пользоваться нельзя. Срок выдачи, наоборот, продлевают на две недели, а детские книги стоят `im 1. Stock`, а не `im Erdgeschoss`.' }
            ],
            glossary: [
                { de: 'das Stadtteilzentrum', ru: 'районный центр (досуга)' },
                { de: 'ehrenamtlich', ru: 'добровольно, без оплаты' },
                { de: 'das Ersatzteil', ru: 'запчасть' },
                { de: 'die Spende', ru: 'пожертвование' },
                { de: 'nähen', ru: 'шить' },
                { de: 'der Bauernhof', ru: 'ферма' },
                { de: 'füttern', ru: 'кормить (животных)' },
                { de: 'wetterfest', ru: 'непромокаемый, по погоде' },
                { de: 'der Gummistiefel', ru: 'резиновый сапог' },
                { de: 'der Umschlag', ru: 'конверт' },
                { de: 'der Umbau', ru: 'перестройка, ремонт' },
                { de: 'die Rückseite', ru: 'задняя сторона' },
                { de: 'die Leihfrist', ru: 'срок, на который выдают книги' },
                { de: 'verlängern', ru: 'продлевать' }
            ]
        },

        // ================== Набор 3 ==================
        {
            id: 'r03-s3',
            title: 'Жёлтые баки, расчёт за квартиру, поездка класса',
            situation: 'Sie lesen ein Schreiben vom Abfallbetrieb, einen Brief einer Wohnungsgesellschaft und einen Elternbrief aus der Schule Ihrer Tochter. Ist die Aussage richtig oder falsch? Welche Lösung passt: a, b oder c?',
            material: [
                { kind: 'text', id: 't1', title: 'Gelbe Tonnen statt gelber Säcke', paragraphs: [
                    'Liebe Bürgerinnen und Bürger,',
                    'ab dem 1. Januar sammeln wir Verpackungen aus Plastik und Metall nicht mehr in gelben Säcken, sondern in gelben Tonnen. Im Dezember bringen wir jedem Haushalt eine Tonne direkt vor die Haustür. Sie müssen dafür nichts bestellen und nichts extra bezahlen. Die Abholung bleibt gleich: Wir leeren die Tonnen alle zwei Wochen.',
                    'Gelbe Säcke, die Sie noch zu Hause haben, können Sie bis Ende Februar weiter benutzen: Stellen Sie sie einfach neben die Tonne. Ab März nehmen wir keine Säcke mehr mit.',
                    'Bei Fragen erreichen Sie uns montags bis freitags von 8 bis 16 Uhr unter 0123 451230.',
                    'Ihr Abfallbetrieb Weststadt'
                ] },
                { kind: 'text', id: 't2', title: 'Ihre Nebenkostenabrechnung', paragraphs: [
                    'Sehr geehrte Frau Kowalski,',
                    'mit diesem Brief erhalten Sie die Nebenkostenabrechnung für das letzte Jahr. Sie haben weniger Wasser verbraucht und weniger geheizt als im Jahr davor. Deshalb bekommen Sie 86,40 Euro zurück. Wir überweisen das Geld bis zum 30. Juni auf Ihr Konto.',
                    'Gleichzeitig sind die Kosten für die Müllabfuhr und den Hausmeister gestiegen. Deshalb erhöhen wir Ihre monatliche Vorauszahlung für die Nebenkosten ab dem 1. Juli um 12 Euro auf 198 Euro. Wenn Sie die Miete selbst überweisen, ändern Sie bitte Ihren Dauerauftrag.',
                    'Haben Sie Fragen zur Abrechnung? Dann rufen Sie Frau Maier an: 0123 458841.',
                    'Mit freundlichen Grüßen',
                    'Wohnbau Seefeld GmbH'
                ] },
                { kind: 'text', id: 't3', title: 'Klassenfahrt der 6a', paragraphs: [
                    'Liebe Eltern,',
                    'vom 22. bis 26. Mai fährt die Klasse 6a für fünf Tage in die Jugendherberge am Hohen See. Die Kinder wandern, fahren Kanu und lernen die Natur kennen.',
                    'Die Fahrt kostet 210 Euro pro Kind. Darin sind Bus, Übernachtung, Essen und Programm enthalten. Bitte überweisen Sie den Betrag bis zum 31. März auf das Konto des Fördervereins. Wenn Sie Hilfe bei den Kosten brauchen, sprechen Sie bitte mit mir. Die Schule kann dann einen Teil bezahlen.',
                    'Alle weiteren Informationen bekommen Sie beim Elternabend am 12. März um 19 Uhr in Raum 104.',
                    'Herzliche Grüße',
                    'Jana Becker, Klassenlehrerin'
                ] }
            ],
            items: [
                { id: 'r03-s3-1', text: 't1', type: 'rf', q: 'Statt Säcken bekommen alle Haushalte eine Tonne für Verpackungen.',
                  answer: true, evidence: 'Im Dezember bringen wir jedem Haushalt eine Tonne direkt vor die Haustür.',
                  why: 'В декабре каждому хозяйству привозят бак к двери, и упаковку теперь собирают в баки, а не в мешки. Утверждение пересказывает главную мысль: richtig.' },
                { id: 'r03-s3-2', text: 't1', type: 'mc', q: 'Was gilt für die gelben Säcke, die man noch zu Hause hat?',
                  options: ['Man darf sie im Januar und Februar noch benutzen.', 'Man muss sie im Dezember zurückgeben.', 'Die Müllabfuhr nimmt sie ab Januar nicht mehr mit.'], answer: 0,
                  evidence: 'können Sie bis Ende Februar weiter benutzen',
                  why: 'Старые мешки можно ставить рядом с баком `bis Ende Februar`, то есть ещё в январе и феврале; не забирают их только `ab März`. Поэтому «с января не забирают» противоречит тексту, а возвращать мешки никто не просит.' },
                { id: 'r03-s3-3', text: 't2', type: 'rf', q: 'Frau Kowalski bekommt Geld zurück, weil sie im letzten Jahr weniger verbraucht hat.',
                  answer: true, evidence: 'Deshalb bekommen Sie 86,40 Euro zurück.',
                  why: 'Госпожа Ковальски потратила меньше воды и тепла, поэтому ей возвращают 86,40 евро: richtig. Ежемесячная предоплата с июля растёт, но это уже о будущем, а не о расчёте за прошлый год.' },
                { id: 'r03-s3-4', text: 't2', type: 'mc', q: 'Wie viel zahlt Frau Kowalski ab Juli jeden Monat für die Nebenkosten?',
                  options: ['12 Euro', '198 Euro', '186 Euro'], answer: 1,
                  evidence: 'um 12 Euro auf 198 Euro',
                  why: 'Предоплата растёт `um 12 Euro auf 198 Euro`: `um` — на сколько, `auf` — до какой суммы. Значит, теперь 198 евро; 186 — прежняя сумма, а 12 — только прибавка.' },
                { id: 'r03-s3-5', text: 't3', type: 'rf', q: 'Die Klasse 6a fährt nur für einen Tag weg.',
                  answer: false, evidence: 'fährt die Klasse 6a für fünf Tage in die Jugendherberge am Hohen See',
                  why: 'Класс едет на пять дней, с 22 по 26 мая, и ночует на молодёжной турбазе (`Jugendherberge`). «Только на один день» противоречит тексту — falsch.' },
                { id: 'r03-s3-6', text: 't3', type: 'mc', q: 'Was steht im Brief über die Kosten?',
                  options: ['Das Essen muss man extra bezahlen.', 'Man bezahlt das Geld beim Elternabend.', 'Die Schule kann einen Teil übernehmen.'], answer: 2,
                  evidence: 'Die Schule kann dann einen Teil bezahlen.',
                  why: 'Если семье трудно, школа может оплатить часть (`einen Teil bezahlen` = `einen Teil übernehmen`). Еда уже входит в цену (`Darin sind … Essen … enthalten`), а деньги переводят на счёт до 31 марта, на собрании их не собирают.' }
            ],
            glossary: [
                { de: 'die Verpackung', ru: 'упаковка' },
                { de: 'die Tonne', ru: 'мусорный бак' },
                { de: 'der Haushalt', ru: 'хозяйство, семья в квартире' },
                { de: 'leeren', ru: 'опорожнять' },
                { de: 'die Nebenkostenabrechnung', ru: 'расчёт коммунальных расходов' },
                { de: 'verbrauchen', ru: 'расходовать' },
                { de: 'überweisen', ru: 'переводить (деньги)' },
                { de: 'die Vorauszahlung', ru: 'предоплата, ежемесячный взнос' },
                { de: 'der Dauerauftrag', ru: 'постоянное платёжное поручение' },
                { de: 'die Klassenfahrt', ru: 'поездка класса с ночёвкой' },
                { de: 'die Jugendherberge', ru: 'молодёжная турбаза' },
                { de: 'die Übernachtung', ru: 'ночёвка' },
                { de: 'enthalten sein', ru: 'входить (в цену)' },
                { de: 'der Förderverein', ru: 'общество поддержки школы' }
            ]
        },

        // ================== Набор 4 ==================
        {
            id: 'r03-s4',
            title: 'Бассейн, трамвай на ремонте, прививка в аптеке',
            situation: 'Sie lesen einen Artikel in der Lokalzeitung, eine Information der Verkehrsbetriebe und einen Aushang in Ihrer Apotheke. Ist die Aussage richtig oder falsch? Welche Lösung passt: a, b oder c?',
            material: [
                { kind: 'text', id: 't1', title: 'Hallenbad Süd öffnet wieder', paragraphs: [
                    'Nach fast zwei Jahren Bauzeit öffnet das Hallenbad Süd am 1. Oktober wieder. Die Stadt hat 4,5 Millionen Euro investiert: Das Bad hat jetzt ein neues Dach, moderne Umkleiden und ein eigenes Becken für kleine Kinder.',
                    'Die Eintrittspreise steigen leicht. Erwachsene zahlen jetzt 5 Euro statt 4 Euro, Kinder bis 14 Jahre weiterhin 2,50 Euro. Neu ist eine Familienkarte für 12 Euro. Montags bleibt das Bad geschlossen. Am Eröffnungstag ist der Eintritt für alle frei. Außerdem gibt es von 10 bis 16 Uhr ein Programm mit Musik und kostenlosen Schwimmkursen zum Ausprobieren.'
                ] },
                { kind: 'text', id: 't2', title: 'Linie 4: Bauarbeiten in den Sommerferien', paragraphs: [
                    'Vom 14. Juli bis zum 22. August erneuern wir die Gleise zwischen den Haltestellen Hauptbahnhof und Messeplatz. In dieser Zeit fährt die Straßenbahnlinie 4 nur zwischen Waldfriedhof und Hauptbahnhof.',
                    'Zwischen Hauptbahnhof und Messeplatz fahren Ersatzbusse. Sie kommen alle 10 Minuten und halten an allen Haltestellen der Linie 4. Bitte planen Sie für Ihre Fahrt etwa 15 Minuten mehr Zeit ein. Fahrräder können Sie in den Ersatzbussen leider nicht mitnehmen.',
                    'Ihre Fahrkarten gelten natürlich auch in den Bussen. Aktuelle Informationen finden Sie in unserer App und an den Haltestellen.',
                    'Ihre Verkehrsbetriebe Talstadt'
                ] },
                { kind: 'text', id: 't3', title: 'Grippeimpfung jetzt auch in der Apotheke', paragraphs: [
                    'Liebe Kundinnen und Kunden,',
                    'ab Oktober können Sie sich bei uns in der Linden-Apotheke gegen Grippe impfen lassen. Das Angebot gilt für alle Personen ab 18 Jahren. Kinder und Jugendliche impft weiterhin Ihre Kinderärztin oder Ihr Kinderarzt.',
                    'Bitte vereinbaren Sie vorher einen Termin, persönlich oder telefonisch unter 0123 453307. Bringen Sie Ihre Gesundheitskarte und, wenn vorhanden, Ihren Impfpass mit. Die Kosten übernimmt Ihre Krankenkasse. Die Impfung selbst dauert nur wenige Minuten. Danach sollen Sie noch etwa 15 Minuten in der Apotheke bleiben.',
                    'Ihr Team der Linden-Apotheke'
                ] }
            ],
            items: [
                { id: 'r03-s4-1', text: 't1', type: 'rf', q: 'Im Oktober beginnt die Renovierung des Hallenbads.',
                  answer: false, evidence: 'Nach fast zwei Jahren Bauzeit öffnet das Hallenbad Süd am 1. Oktober wieder.',
                  why: 'Ремонт уже позади: почти два года стройки, и 1 октября бассейн снова открывается. «В октябре ремонт начинается» противоречит тексту — falsch.' },
                { id: 'r03-s4-2', text: 't1', type: 'mc', q: 'Was ändert sich bei den Preisen?',
                  options: ['Kinder zahlen jetzt mehr als früher.', 'Erwachsene zahlen einen Euro mehr.', 'Montags kommt man kostenlos ins Bad.'], answer: 1,
                  evidence: 'Erwachsene zahlen jetzt 5 Euro statt 4 Euro',
                  why: 'Взрослые платят 5 евро вместо 4 — на евро больше. Для детей цена прежняя (`weiterhin 2,50 Euro`), бесплатный вход — только в день открытия, а по понедельникам бассейн закрыт.' },
                { id: 'r03-s4-3', text: 't2', type: 'rf', q: 'Auf einem Teil der Strecke fahren im Sommer Busse statt Straßenbahnen.',
                  answer: true, evidence: 'Zwischen Hauptbahnhof und Messeplatz fahren Ersatzbusse.',
                  why: 'С 14 июля по 22 августа между Hauptbahnhof и Messeplatz трамвай не ходит, вместо него — автобусы (`Ersatzbusse`). Это главная мысль объявления: richtig.' },
                { id: 'r03-s4-4', text: 't2', type: 'mc', q: 'Was gilt in dieser Zeit für die Fahrgäste?',
                  options: ['Für die Busse braucht man eine extra Fahrkarte.', 'Man kann sein Fahrrad im Bus mitnehmen.', 'Die Fahrt dauert länger als sonst.'], answer: 2,
                  evidence: 'Bitte planen Sie für Ihre Fahrt etwa 15 Minuten mehr Zeit ein.',
                  why: 'Просят заложить на поездку примерно на 15 минут больше — значит, дорога дольше обычного. Билеты действуют и в автобусах, а велосипеды в них брать нельзя.' },
                { id: 'r03-s4-5', text: 't3', type: 'rf', q: 'In der Apotheke können sich jetzt auch Kinder gegen Grippe impfen lassen.',
                  answer: false, evidence: 'Das Angebot gilt für alle Personen ab 18 Jahren.',
                  why: 'Прививку в аптеке делают только с 18 лет; детей и подростков по-прежнему прививает детский врач. Утверждение противоречит тексту — falsch.' },
                { id: 'r03-s4-6', text: 't3', type: 'mc', q: 'Was muss man bei der Impfung in der Apotheke beachten?',
                  options: ['Man bleibt danach noch kurz in der Apotheke.', 'Man kann ohne Termin vorbeikommen.', 'Man bezahlt die Impfung an der Kasse.'], answer: 0,
                  evidence: 'Danach sollen Sie noch etwa 15 Minuten in der Apotheke bleiben.',
                  why: 'После прививки нужно ещё около 15 минут побыть в аптеке. Записаться надо заранее (`vorher einen Termin`), а платит больничная касса (`Die Kosten übernimmt Ihre Krankenkasse`).' }
            ],
            glossary: [
                { de: 'das Hallenbad', ru: 'крытый бассейн' },
                { de: 'die Bauzeit', ru: 'время строительства, ремонта' },
                { de: 'die Umkleide', ru: 'раздевалка' },
                { de: 'das Becken', ru: 'бассейн, чаша бассейна' },
                { de: 'der Eintritt', ru: 'вход, плата за вход' },
                { de: 'die Gleise', ru: 'рельсы, пути' },
                { de: 'die Haltestelle', ru: 'остановка' },
                { de: 'der Ersatzbus', ru: 'автобус вместо трамвая' },
                { de: 'einplanen', ru: 'заложить (время)' },
                { de: 'die Grippe', ru: 'грипп' },
                { de: 'sich impfen lassen', ru: 'сделать прививку' },
                { de: 'die Gesundheitskarte', ru: 'карточка медицинской страховки' },
                { de: 'der Impfpass', ru: 'прививочный паспорт' },
                { de: 'die Krankenkasse', ru: 'больничная касса' }
            ]
        },

        // ================== Набор 5 ==================
        {
            id: 'r03-s5',
            title: 'Отмена уроков, отделение банка, бюро граждан',
            situation: 'Sie lesen einen Elternbrief aus der Grundschule, einen Brief Ihrer Bank und eine Information der Stadtverwaltung. Ist die Aussage richtig oder falsch? Welche Lösung passt: a, b oder c?',
            material: [
                { kind: 'text', id: 't1', title: 'Elternbrief: Unterrichtsausfall', paragraphs: [
                    'Liebe Eltern,',
                    'am kommenden Freitag nehmen alle Lehrerinnen und Lehrer unserer Schule an einer Fortbildung teil. Deshalb findet an diesem Tag kein Unterricht statt.',
                    'Wenn Ihr Kind an diesem Tag nicht zu Hause bleiben kann, bieten wir von 8 bis 13 Uhr eine Betreuung in der Schule an. Mitarbeiterinnen unseres Horts kümmern sich um die Kinder. Bitte melden Sie Ihr Kind dafür bis Mittwoch im Sekretariat an. Ein Mittagessen gibt es an diesem Tag leider nicht.',
                    'Ab Montag haben die Kinder wieder Unterricht nach Stundenplan.',
                    'Mit freundlichen Grüßen',
                    'Ulrike Hahn, Schulleiterin'
                ] },
                { kind: 'text', id: 't2', title: 'Wichtige Information zu Ihrer Filiale', paragraphs: [
                    'Sehr geehrte Kundin, sehr geehrter Kunde,',
                    'unsere Filiale in der Kirchstraße 8 schließt am 30. September. Immer mehr Kundinnen und Kunden erledigen ihre Bankgeschäfte online. Deshalb kommen nur noch wenige Menschen in die Filiale.',
                    'Der Geldautomat bleibt aber an seinem Platz: Dort können Sie weiterhin rund um die Uhr Geld abheben und Kontoauszüge drucken. Für eine persönliche Beratung besuchen Sie uns ab Oktober in unserer Filiale am Bahnhofsplatz 2. Ihre Kontonummer und Ihre Karten bleiben gleich.',
                    'Haben Sie Fragen? Unser Kundenservice hilft Ihnen gern: 0123 459910.',
                    'Mit freundlichen Grüßen',
                    'Ihre Talbank Neuhausen'
                ] },
                { kind: 'text', id: 't3', title: 'Bürgerbüro: Neue Regeln ab März', paragraphs: [
                    'Liebe Bürgerinnen und Bürger,',
                    'ab dem 1. März können Sie das Bürgerbüro nur noch mit Termin besuchen. So möchten wir lange Wartezeiten vermeiden.',
                    'Einen Termin buchen Sie auf unserer Internetseite oder telefonisch unter 0123 452266. Wenn Sie nicht kommen können, sagen Sie den Termin bitte spätestens einen Tag vorher ab.',
                    'Nur wenn Sie einen fertigen Personalausweis oder Reisepass abholen möchten, brauchen Sie keinen Termin. Dafür ist der Schalter 1 montags bis freitags von 8 bis 12 Uhr geöffnet. Bitte bringen Sie Ihren alten Ausweis mit.',
                    'Ihre Stadtverwaltung Neustadt'
                ] }
            ],
            items: [
                { id: 'r03-s5-1', text: 't1', type: 'rf', q: 'An einem Tag haben die Kinder keinen Unterricht, weil die Lehrer selbst etwas lernen.',
                  answer: true, evidence: 'nehmen alle Lehrerinnen und Lehrer unserer Schule an einer Fortbildung teil',
                  why: 'В пятницу все учителя на `Fortbildung` — курсах повышения квалификации, то есть учатся сами; поэтому уроков нет. Ровно это и говорит утверждение: richtig.' },
                { id: 'r03-s5-2', text: 't1', type: 'mc', q: 'Was ist bei der Betreuung am Freitag richtig?',
                  options: ['Die Kinder bekommen dort ein Mittagessen.', 'Die Betreuung dauert bis zum Abend.', 'Die Eltern müssen ihr Kind vorher anmelden.'], answer: 2,
                  evidence: 'Bitte melden Sie Ihr Kind dafür bis Mittwoch im Sekretariat an.',
                  why: 'На присмотр ребёнка надо записать в канцелярии до среды. Обеда в этот день не будет (`Ein Mittagessen gibt es … nicht`), а присмотр длится с 8 до 13 часов, не до вечера.' },
                { id: 'r03-s5-3', text: 't2', type: 'rf', q: 'Nach der Schließung können die Kunden ihre Bankgeschäfte nur noch im Internet erledigen.',
                  answer: false, evidence: 'Für eine persönliche Beratung besuchen Sie uns ab Oktober in unserer Filiale am Bahnhofsplatz 2.',
                  why: 'Интернет — не единственный путь: банкомат на Kirchstraße остаётся, а на консультацию ждут в отделении на Bahnhofsplatz. `nur noch` противоречит тексту — falsch.' },
                { id: 'r03-s5-4', text: 't2', type: 'mc', q: 'Was kann man in der Kirchstraße auch nach dem 30. September noch machen?',
                  options: ['sich persönlich beraten lassen', 'am Automaten Bargeld holen', 'eine neue Bankkarte abholen'], answer: 1,
                  evidence: 'Der Geldautomat bleibt aber an seinem Platz',
                  why: 'Банкомат остаётся на месте — снимать деньги на Kirchstraße можно и дальше. Консультация теперь в другом отделении, на Bahnhofsplatz, а новые карты не нужны: `Ihre Karten bleiben gleich`.' },
                { id: 'r03-s5-5', text: 't3', type: 'rf', q: 'Ab März muss man für die meisten Besuche im Bürgerbüro vorher einen Termin buchen.',
                  answer: true, evidence: 'ab dem 1. März können Sie das Bürgerbüro nur noch mit Termin besuchen',
                  why: 'С 1 марта в бюро приходят только по записи; исключение одно — получение готового паспорта. «В большинстве случаев нужна запись» — верный пересказ: richtig.' },
                { id: 'r03-s5-6', text: 't3', type: 'mc', q: 'Ohne Termin kann man im Bürgerbüro …',
                  options: ['einen fertigen Ausweis abholen.', 'einen neuen Ausweis beantragen.', 'am Nachmittag zum Schalter 1 gehen.'], answer: 0,
                  evidence: 'Nur wenn Sie einen fertigen Personalausweis oder Reisepass abholen möchten, brauchen Sie keinen Termin.',
                  why: 'Без записи можно только забрать готовое удостоверение или паспорт. Заявление на новый — обычный визит, он по записи; а окошко 1 работает с 8 до 12, после обеда оно закрыто.' }
            ],
            glossary: [
                { de: 'die Fortbildung', ru: 'курсы повышения квалификации' },
                { de: 'die Betreuung', ru: 'присмотр (за детьми)' },
                { de: 'der Hort', ru: 'группа продлённого дня' },
                { de: 'das Sekretariat', ru: 'канцелярия школы' },
                { de: 'der Stundenplan', ru: 'расписание уроков' },
                { de: 'die Filiale', ru: 'отделение (банка, почты)' },
                { de: 'die Bankgeschäfte', ru: 'банковские дела' },
                { de: 'der Geldautomat', ru: 'банкомат' },
                { de: 'Geld abheben', ru: 'снимать деньги' },
                { de: 'der Kontoauszug', ru: 'выписка по счёту' },
                { de: 'die Beratung', ru: 'консультация' },
                { de: 'das Bürgerbüro', ru: 'бюро обслуживания граждан' },
                { de: 'absagen', ru: 'отменять' },
                { de: 'der Schalter', ru: 'окошко, стойка' }
            ]
        },

        // ================== Набор 6 ==================
        {
            id: 'r03-s6',
            title: 'Подъезд, переезд стоматолога, посылка',
            situation: 'Sie lesen einen Aushang Ihrer Hausverwaltung, einen Brief Ihrer Zahnarztpraxis und eine Karte vom Paketdienst. Ist die Aussage richtig oder falsch? Welche Lösung passt: a, b oder c?',
            material: [
                { kind: 'text', id: 't1', title: 'Bitte Treppenhaus und Keller freihalten', paragraphs: [
                    'Liebe Bewohnerinnen und Bewohner der Rosenstraße 14,',
                    'bei unserer letzten Kontrolle haben wir gesehen, dass im Treppenhaus und in den Kellergängen viele Fahrräder, Kinderwagen und Kartons stehen. Das ist gefährlich: Bei einem Feuer müssen alle Wege frei sein.',
                    'Bitte räumen Sie Ihre Sachen bis zum 15. November weg. Fahrräder stellen Sie bitte in den Fahrradraum im Hof. Den Schlüssel dafür bekommen Sie bei unserem Hausmeister. Kinderwagen und Rollatoren dürfen weiterhin im Erdgeschoss unter der Treppe stehen.',
                    'Alles, was nach dem 15. November noch im Treppenhaus oder in den Kellergängen steht, lassen wir auf Ihre Kosten entsorgen.',
                    'Vielen Dank für Ihr Verständnis',
                    'Hausverwaltung Engel'
                ] },
                { kind: 'text', id: 't2', title: 'Zahnarztpraxis Dr. Weber zieht um', paragraphs: [
                    'Liebe Patientinnen und Patienten,',
                    'ab dem 3. Juni finden Sie unsere Praxis in neuen, größeren Räumen: im Ärztehaus am Stadtpark, Parkallee 21, 2. Stock. Es gibt einen Aufzug, und Parkplätze sind direkt vor dem Haus.',
                    'Wegen des Umzugs ist die Praxis vom 27. bis zum 31. Mai geschlossen. In dringenden Fällen hilft Ihnen in dieser Zeit die Zahnarztpraxis Dr. Nowak, Telefon 0123 454478.',
                    'Unsere Telefonnummer und unsere Sprechzeiten bleiben gleich. Alle Termine, die Sie schon vereinbart haben, gelten weiter. Sie müssen also nichts tun.',
                    'Wir freuen uns auf Ihren Besuch!',
                    'Ihr Praxisteam Dr. Lena Weber'
                ] },
                { kind: 'text', id: 't3', title: 'Benachrichtigung: Ihr Paket wartet auf Sie', paragraphs: [
                    'Sehr geehrte Empfängerin, sehr geehrter Empfänger,',
                    'heute wollten wir Ihnen ein Paket bringen, aber leider war niemand zu Hause. Auch bei Ihren Nachbarn konnten wir das Paket nicht abgeben.',
                    'Sie können das Paket ab morgen, 10 Uhr, in unserer Filiale im Supermarkt Frischmarkt, Lindenstraße 40, abholen. Die Filiale ist montags bis samstags von 8 bis 20 Uhr geöffnet. Das Paket bleibt sieben Werktage dort. Danach schicken wir es an den Absender zurück.',
                    'Bitte bringen Sie diese Karte und Ihren Personalausweis mit. Eine andere Person kann das Paket für Sie abholen, wenn sie eine Vollmacht von Ihnen und ihren eigenen Ausweis zeigt.',
                    'Ihr Paketdienst Blitzpost'
                ] }
            ],
            items: [
                { id: 'r03-s6-1', text: 't1', type: 'rf', q: 'Die Bewohner dürfen ihre Fahrräder auch in Zukunft im Treppenhaus abstellen.',
                  answer: false, evidence: 'Fahrräder stellen Sie bitte in den Fahrradraum im Hof.',
                  why: 'Вещи из подъезда надо убрать до 15 ноября, а велосипеды ставить в велосипедную комнату во дворе. Утверждение противоречит тексту — falsch.' },
                { id: 'r03-s6-2', text: 't1', type: 'mc', q: 'Wo dürfen die Bewohner ihre Kinderwagen auch weiterhin abstellen?',
                  options: ['im Fahrradraum im Hof', 'unter der Treppe im Erdgeschoss', 'in den Gängen im Keller'], answer: 1,
                  evidence: 'Kinderwagen und Rollatoren dürfen weiterhin im Erdgeschoss unter der Treppe stehen.',
                  why: 'Коляски и ходунки можно и дальше держать под лестницей на первом этаже. Комната во дворе — для велосипедов, а коридоры подвала надо освободить.' },
                { id: 'r03-s6-3', text: 't2', type: 'rf', q: 'Die Zahnarztpraxis schließt für immer.',
                  answer: false, evidence: 'ab dem 3. Juni finden Sie unsere Praxis in neuen, größeren Räumen',
                  why: 'Практика не закрывается, а переезжает: с 3 июня она в новом здании на Parkallee. Закрыта она только на дни переезда — falsch.' },
                { id: 'r03-s6-4', text: 't2', type: 'mc', q: 'Patienten, die schon einen Termin nach dem Umzug haben, …',
                  options: ['kommen zur selben Zeit in die neuen Räume.', 'müssen einen neuen Termin vereinbaren.', 'sollen vorher in der Praxis anrufen.'], answer: 0,
                  evidence: 'Alle Termine, die Sie schon vereinbart haben, gelten weiter.',
                  why: 'Записи остаются в силе, и делать ничего не нужно (`Sie müssen also nichts tun`): пациент приходит в своё время, но уже по новому адресу. Новая запись и звонок не нужны.' },
                { id: 'r03-s6-5', text: 't3', type: 'rf', q: 'Weil niemand zu Hause war, kann man das Paket in einer Filiale abholen.',
                  answer: true, evidence: 'Sie können das Paket ab morgen, 10 Uhr, in unserer Filiale im Supermarkt Frischmarkt, Lindenstraße 40, abholen.',
                  why: 'Дома никого не было, у соседей оставить не удалось, поэтому посылку можно забрать с завтрашнего дня в отделении в супермаркете: richtig.' },
                { id: 'r03-s6-6', text: 't3', type: 'mc', q: 'Eine andere Person darf das Paket abholen, wenn sie …',
                  options: ['nur diese Karte mitbringt.', 'den Ausweis des Empfängers zeigt.', 'eine Vollmacht und ihren Ausweis hat.'], answer: 2,
                  evidence: 'wenn sie eine Vollmacht von Ihnen und ihren eigenen Ausweis zeigt',
                  why: 'Другой человек показывает доверенность и свой собственный паспорт (`ihren eigenen Ausweis`). Одной карточки мало — `nur` здесь неверно, а паспорт получателя вместо своего не подходит.' }
            ],
            glossary: [
                { de: 'das Treppenhaus', ru: 'лестничная клетка, подъезд' },
                { de: 'der Kellergang', ru: 'коридор в подвале' },
                { de: 'der Kinderwagen', ru: 'детская коляска' },
                { de: 'der Rollator', ru: 'ходунки на колёсах' },
                { de: 'freihalten', ru: 'держать свободным' },
                { de: 'entsorgen', ru: 'вывезти как мусор' },
                { de: 'auf Ihre Kosten', ru: 'за ваш счёт' },
                { de: 'der Umzug', ru: 'переезд' },
                { de: 'das Ärztehaus', ru: 'здание с врачебными практиками' },
                { de: 'vereinbaren', ru: 'договориться (о приёме)' },
                { de: 'die Benachrichtigung', ru: 'извещение' },
                { de: 'der Werktag', ru: 'рабочий день' },
                { de: 'der Absender', ru: 'отправитель' },
                { de: 'die Vollmacht', ru: 'доверенность' }
            ]
        }
    ]
};
