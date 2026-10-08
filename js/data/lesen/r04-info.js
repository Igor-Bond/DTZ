/**
 * Lesen, Teil 4. Один длинный текст — инструкция, листок-вкладыш, условия договора или правила — и три утверждения richtig/falsch.
 *
 * Теория учит искать, а не читать подряд: сначала утверждения, потом заголовки,
 * потом один абзац; слова правил и ловушки с подменой одного слова. Шесть наборов — шесть разных жанров.
 */

export default {
    id: 'r04',
    order: 4,
    teil: 4,
    title: 'Teil 4: инструкции и условия',
    short: 'Teil 4 · Инструкции',
    goal: 'После раздела вы находите в длинной инструкции или в условиях договора место, о котором спрашивает утверждение, и точно решаете, richtig оно или falsch: по числу, сроку, запрету и условию.',
    why: 'Teil 4 — самый длинный текст в Lesen, а заданий к нему всего три. Кто читает его подряд, теряет минуты, нужные другим частям. Кто ищет по заголовкам и знает слова правил (`darf nicht`, `muss nicht`, `höchstens`, `es sei denn`), отвечает быстро и не попадается на подмену одного слова.',

    theory: [
        { type: 'h', text: '1. Что проверяют в Teil 4' },
        { type: 'p', text: 'Навык можно назвать так: `Informationen und Anweisungen selektiv verstehen` — понимать информацию и указания выборочно. Вам дают один длинный текст с заголовками разделов: описание товара, инструкцию к прибору, листок-вкладыш лекарства, условия договора или правила дома. К нему — три утверждения (в пробе курса — задания 17–19). Про каждое надо решить: richtig или falsch.' },
        {
            type: 'table',
            head: ['Что', 'Как в экзамене'],
            rows: [
                ['Текст', 'один, примерно 200–300 слов, с заголовками разделов'],
                ['Задания', 'три утверждения: 17, 18, 19'],
                ['Ответ', '`richtig` или `falsch`, крестиком на листе ответов'],
                ['Порядок', 'утверждения идут в том же порядке, что и нужные места в тексте'],
                ['Время', 'около 9 минут — ориентир, а не правило: время на части делите сами']
            ],
            note: 'Ответ на 17 стоит в тексте раньше, чем ответ на 18. Нашли место для 17 — место для 18 ищите дальше, а не с начала.'
        },

        { type: 'h', text: '2. Сначала утверждения, потом текст' },
        { type: 'p', text: 'Не читайте текст подряд от первого слова: он нарочно длиннее, чем нужно для трёх ответов. Сначала прочитайте три утверждения и выделите в каждом ключевые слова: о чём речь (таблетки, роуминг, возврат) и что именно спрашивают (число, срок, запрет, условие). Потом пробегите глазами заголовки и найдите раздел, где может быть ответ. Внимательно читайте только его.' },
        {
            type: 'table',
            head: ['Утверждение', 'Где искать', 'Что сверить'],
            rows: [
                ['`Man darf das Gerät im Bad benutzen.`', '`Aufstellen`, `Sicherheit`', 'запрет или разрешение'],
                ['`Den Vertrag kann man jeden Monat kündigen.`', '`Laufzeit`, `Kündigung`', 'срок'],
                ['`Kinder unter 12 Jahren dürfen das Mittel nehmen.`', '`Dosierung`, `Gegenanzeigen`', 'возраст и условие'],
                ['`Der Versand kostet immer 4,95 Euro.`', '`Lieferung`, `Versand`', 'число и слово `immer`']
            ]
        },
        { type: 'tip', text: 'Заголовки — ваша карта. Слово из утверждения часто стоит в заголовке в другой форме: `kündigen` — `Kündigung`, `zurückgeben` — `Rückgabe`, `liefern` — `Lieferung`, `bezahlen` — `Zahlung`.' },

        { type: 'h', text: '3. Пошагово' },
        {
            type: 'list',
            items: [
                '**Шаг 1.** Прочитайте утверждение и решите, что в нём проверяют: число, срок, запрет, разрешение или условие (кто, когда, в каком случае).',
                '**Шаг 2.** По заголовкам найдите раздел. Заголовок не помогает — ищите в тексте ключевое слово или его «родственника».',
                '**Шаг 3.** Прочитайте абзац целиком, а не только строку с совпавшим словом. Сверяйте **смысл**, а не слова: совпадение слов ещё не значит richtig.',
                '**Шаг 4.** Решите: текст говорит то же самое (richtig) или другое — другое число, срок, условие, запрет вместо разрешения (falsch).',
                '**Шаг 5.** Не переносите на текст жизненный опыт. «Обычно в праздники закрыто» — не довод. Считается только то, что написано в этом тексте.',
                'Место не находится за две-три минуты — отметьте самый вероятный ответ и переходите дальше: пустая клетка балла не даёт.'
            ]
        },
        { type: 'rule', text: 'Richtig — текст говорит **то же самое** другими словами. Falsch — текст говорит **другое**: другое число или срок, другое условие, запрет вместо разрешения.' },

        { type: 'h', text: '4. Как устроены ловушки' },
        { type: 'p', text: 'Неверное утверждение похоже на текст: те же слова, тот же раздел. Отличается одна деталь, и её надо заметить. В ловушках ниже неверный вариант — утверждение-подмена, верный — то, что на самом деле следует из текста.' },
        {
            type: 'table',
            head: ['Ловушка', 'В тексте', 'В утверждении (falsch)'],
            rows: [
                ['Противоположное условие', '`nach dem Essen`', '`vor dem Essen`'],
                ['`darf nicht` вместо `muss nicht`', '`Sie müssen die Karte nicht zeigen.`', '`Man darf die Karte nicht zeigen.`'],
                ['Другое число или срок', '`innerhalb von 30 Tagen`', '`nur 14 Tage`'],
                ['«Никогда» вместо условия', '`nur unter ärztlicher Aufsicht`', '`Kinder dürfen das Mittel nie nehmen.`'],
                ['Частичная правда', '`ab 50 Euro kostenlos`', '`Der Versand ist immer kostenlos.`']
            ],
            note: 'Число из текста может стоять в утверждении, но относиться к другому: 14 дней на оплату счёта — не 14 дней на возврат товара.'
        },
        { type: 'trap', wrong: 'Sie müssen den Ausweis nicht zeigen. → Zeigen ist verboten.', right: 'Sie müssen den Ausweis nicht zeigen. → Zeigen ist nicht nötig.', why: 'Русское «вы не должны» часто значит «нельзя», поэтому `müssen nicht` хочется прочитать как запрет. Но `müssen nicht` — «не обязаны»: можно показать, можно и нет. Запрет — только `dürfen nicht`.' },
        { type: 'trap', wrong: 'Nur unter ärztlicher Aufsicht. → Kinder dürfen das Mittel nie nehmen.', right: 'Nur unter ärztlicher Aufsicht. → Wenn ein Arzt aufpasst, dürfen Kinder das Mittel nehmen.', why: '`nur unter …`, `nur mit …`, `nur wenn …` — это условие: если оно выполнено, можно. `nie` или `auf keinen Fall` — уже другое правило, полный запрет.' },
        { type: 'trap', wrong: 'Ab 50 Euro liefern wir kostenlos. → Die Lieferung ist immer kostenlos.', right: 'Ab 50 Euro liefern wir kostenlos. → Bei 60 Euro ist die Lieferung kostenlos.', why: 'Частичная правда: `immer` стирает условие `ab 50 Euro`. Утверждения с `immer`, `alle`, `jeder`, `nie` проверяйте на исключения: `ab`, `nur`, `außer`, `es sei denn`.' },

        { type: 'h', text: '5. Слова правил' },
        {
            type: 'table',
            head: ['Слово', 'Значение', 'Пример'],
            rows: [
                ['`darf nicht`, `dürfen nicht`', 'нельзя, запрещено', '`Das Gerät darf nicht nass werden.`'],
                ['`muss`, `müssen`', 'обязательно', '`Sie müssen den Vertrag unterschreiben.`'],
                ['`muss nicht`, `müssen nicht`', 'не обязательно', '`Sie müssen nicht anrufen.`'],
                ['`soll`, `sollten`', 'следует, рекомендуется', '`Sie sollten das Sieb jeden Monat reinigen.`'],
                ['`kann`, `können`', 'можно, есть возможность', '`Sie können auch online bezahlen.`'],
                ['`nur`, `ausschließlich`', 'только', '`ausschließlich mit Kassenbon`'],
                ['`grundsätzlich`', 'как общее правило (исключения бывают)', '`Grundsätzlich ist ein Umtausch möglich.`'],
                ['`in der Regel`', 'обычно, как правило', '`Die Lieferung dauert in der Regel drei Tage.`'],
                ['`auf Wunsch`', 'по желанию, если попросите', '`Auf Wunsch schicken wir eine Rechnung.`'],
                ['`kostenlos`, `gegen Gebühr`', 'бесплатно, за плату', '`Eine neue Karte gibt es gegen eine Gebühr.`'],
                ['`ohne`, `mit`', 'без, с', '`ohne Rezept`, `nur mit Ausweis`']
            ],
            note: 'Можно, нельзя, нужно: модальный глагол и `nicht` вместе решают, о чём правило — о запрете или о свободе выбора.'
        },
        {
            type: 'table',
            head: ['Слово', 'Значение', 'Пример'],
            rows: [
                ['`mindestens`', 'не меньше', '`mindestens sechs Stunden Pause`'],
                ['`höchstens`', 'не больше', '`höchstens drei Tabletten pro Tag`'],
                ['`innerhalb von`', 'в течение, не позже чем', '`innerhalb von 14 Tagen`'],
                ['`ab`', 'начиная с', '`ab 12 Jahren`, `ab 50 Euro`'],
                ['`bis`', 'до', '`bis 22 Uhr`, `bis zum 10. des Monats`'],
                ['`vor`, `nach`', 'до, после', '`vor dem Essen`, `nach dem Programmende`'],
                ['`während`', 'во время', '`während der Fahrt`'],
                ['`bei`, `im Fall von`', 'при, в случае', '`bei Fieber`, `im Fall von Schäden`'],
                ['`es sei denn`', 'если только не', '`Tiere sind verboten, es sei denn, der Vermieter erlaubt es.`'],
                ['`außer`', 'кроме', '`täglich außer sonntags`']
            ],
            note: 'Эти слова стоят в ловушках парами: `mindestens` и `höchstens`, `vor` и `nach`, `ab` и `bis`. Одно слово переворачивает утверждение.'
        },
        {
            type: 'table',
            head: ['В утверждении', 'В тексте'],
            rows: [
                ['`Man darf nicht …`', '`… ist verboten`, `… ist nicht erlaubt`, `Bitte nicht …`'],
                ['`Man muss …`', '`… ist Pflicht`, `… ist nötig`, `Sie brauchen …`'],
                ['`Es kostet nichts.`', '`kostenlos`, `gratis`, `ohne Aufpreis`, `inklusive`'],
                ['`nicht mehr als drei`', '`höchstens drei`, `maximal drei`, `bis zu drei`'],
                ['`spätestens nach 14 Tagen`', '`innerhalb von 14 Tagen`'],
                ['`jeden Monat kündigen`', '`monatlich kündbar`, `jederzeit mit einer Frist von einem Monat`'],
                ['`Eine andere Person darf es benutzen.`', '`übertragbar`']
            ],
            note: 'Текст и утверждение почти никогда не совпадают слово в слово. Ищите тот же смысл.'
        },

        { type: 'h', text: '6. Жанры Teil 4' },
        {
            type: 'table',
            head: ['Жанр', 'Типичные заголовки', 'О чём спрашивают'],
            rows: [
                ['Инструкция к прибору (`Bedienungsanleitung`)', '`Aufstellen`, `Erste Inbetriebnahme`, `Programme`, `Sicherheit`, `Pflege`', 'что сделать до первого запуска, чего нельзя, сколько загружать'],
                ['Лекарство (`Packungsbeilage`)', '`Anwendung`, `Dosierung`, `Gegenanzeigen`, `Nebenwirkungen`, `Aufbewahrung`', 'когда и сколько принимать, кому нельзя, как долго'],
                ['Договор и тариф (`AGB`, `Tarifbedingungen`)', '`Preis`, `Laufzeit`, `Zahlung`, `Kündigung`, `Ausland`', 'что входит в цену, срок договора, как расторгнуть'],
                ['Покупка и возврат', '`Lieferung`, `Bezahlung`, `Rückgabe`, `Garantie`', 'сколько стоит доставка, сколько дней на возврат'],
                ['Билет, абонемент, членство', '`Geltungsbereich`, `Mitnahme`, `Verlust`, `Öffnungszeiten`, `Mitgliedschaft`', 'где действует, кто может пользоваться, что при потере'],
                ['Правила дома (`Hausordnung`)', '`Ruhezeiten`, `Müll`, `Treppenhaus`, `Haustiere`', 'когда соблюдать тишину, что запрещено']
            ],
            note: '`AGB` — `Allgemeine Geschäftsbedingungen`, общие условия договора. Слова в заголовках бывают трудными; понимать их полностью не нужно, достаточно узнать тему.'
        },

        { type: 'h', text: '7. Разбор примера' },
        { type: 'ex', de: '**Ausleihe und Verlängerung.** Bücher können Sie vier Wochen lang ausleihen. Eine Verlängerung ist **bis zu zweimal** möglich, online oder an der Theke, **es sei denn**, ein anderer Kunde hat das Buch vorbestellt. DVDs leihen Sie höchstens eine Woche aus; eine Verlängerung ist bei DVDs nicht möglich.', ru: '**Выдача и продление.** Книги можно брать на четыре недели. Продлить можно **до двух раз**, онлайн или у стойки, **если только** книгу не заказал другой читатель. DVD берут максимум на неделю, продлить их нельзя.' },
        {
            type: 'list',
            items: [
                'Утверждение: `Man kann jedes Buch zweimal verlängern.` Что проверяют: условие продления и число. Сигнал — обобщение `jedes`.',
                'Раздел: заголовок `Ausleihe und Verlängerung`; ключевое слово `verlängern` = `Verlängerung`.',
                'Абзац: `bis zu zweimal` — число совпадает. Но дальше `es sei denn, ein anderer Kunde hat das Buch vorbestellt`: книгу, которую заказал другой читатель, продлить нельзя.',
                'Решение: «каждую книгу» — неверно, ответ **falsch**. А утверждение `Man kann ein Buch höchstens zweimal verlängern.` было бы richtig: `bis zu zweimal` = `höchstens zweimal`.'
            ]
        },

        { type: 'h', text: '8. Длинное предложение и незнакомые слова' },
        { type: 'p', text: 'Предложения в условиях длинные: перечисления, придаточные, вставки. Не переводите слово за словом. Найдите спрягаемый глагол, модальный глагол и отрицание `nicht` или `kein`: они и несут правило. Остальное — подробности: кто, когда, в каком случае.' },
        { type: 'ex', de: 'Kinder unter 12 Jahren und Personen mit Magenproblemen **dürfen** das Mittel **nicht ohne** Rücksprache mit dem Arzt **nehmen**.', ru: 'Детям до 12 лет и людям с проблемами желудка **нельзя** принимать средство **без** консультации с врачом — то есть только после неё.' },
        { type: 'p', text: 'Текст Teil 4 нарочно длиннее, чем нужно: в нём есть разделы, о которых не спрашивают, и трудные слова вроде `Inbetriebnahme`, `Gegenanzeigen`, `Gewährleistung`. Понимать каждое слово не нужно. В местах, от которых зависит ответ, лексика простая — уровня A2–B1.' },
        { type: 'tip', text: 'Незнакомое слово в нужном абзаце разберите на части (`Rück·sendung` — обратная отправка, `Kündigungs·frist` — срок предупреждения о расторжении) или поймите из соседних слов. Чаще всего ответ решают не длинные существительные, а маленькие слова: `nicht`, `nur`, `ab`, `bis`, `mindestens`, `außer`.' }
    ],

    exercises: [
        // ---- слова правил
        { id: 'r04-01', type: 'choice', q: 'Что значит это предложение из правил?',
          text: 'Sie müssen den Ausweis nicht mitbringen.',
          options: ['Брать удостоверение с собой не обязательно.', 'Брать удостоверение с собой запрещено.', 'Удостоверение нужно взять обязательно.'], answer: 0,
          explain: '`müssen nicht` — «не обязаны»: можете взять, можете не брать. Запрет звучал бы `Sie dürfen den Ausweis nicht mitbringen.` Русское «вы не должны» часто значит «нельзя», поэтому эти выражения легко спутать.', tag: 'lesen_wort' },
        { id: 'r04-02', type: 'choice', q: 'Что значит это правило из инструкции?',
          text: 'Das Gerät darf nicht nass werden.',
          options: ['Нельзя допускать, чтобы прибор намок.', 'Прибор можно и не мочить.', 'Прибор обычно не намокает.'], answer: 0,
          explain: '`darf nicht` — запрет: прибор нельзя мочить. «Можно и не…» — это было бы `muss nicht`, а «обычно» — `in der Regel`.', tag: 'lesen_wort' },
        { id: 'r04-03', type: 'choice', q: 'Что значит «höchstens drei Tabletten pro Tag»?',
          options: ['не больше трёх таблеток в день', 'не меньше трёх таблеток в день', 'ровно три таблетки в день'], answer: 0,
          explain: '`höchstens` — верхняя граница: три или меньше. Нижняя граница — `mindestens`, «ровно» — `genau`.', tag: 'lesen_wort' },
        { id: 'r04-04', type: 'gap', q: 'Вставьте слово правил.',
          text: 'Zwischen zwei Tabletten müssen ___ sechs Stunden liegen.', hint: 'не меньше', answer: [['mindestens', 'wenigstens', 'zumindest']],
          explain: '«Не меньше» — `mindestens`: ждать можно шесть часов или дольше, но не меньше. Противоположное слово — `höchstens`.', tag: 'lesen_wort' },
        { id: 'r04-05', type: 'gap', q: 'Вставьте слово правил.',
          text: 'Sie können die Ware ___ von 30 Tagen zurückschicken.', hint: 'в течение', answer: ['innerhalb'],
          explain: '`innerhalb von 30 Tagen` — в течение 30 дней, то есть не позже чем через 30 дней. В утверждении это часто пересказывают как `spätestens 30 Tage nach dem Kauf`.', tag: 'lesen_wort' },
        { id: 'r04-06', type: 'gap', q: 'Вставьте слово правил.',
          text: 'Der Versand ist ___ einem Bestellwert von 50 Euro kostenlos.', hint: 'начиная с', answer: ['ab'],
          explain: '`ab` — «начиная с»: при заказе на 50 евро и больше доставка бесплатна, при меньшей сумме — платная. В утверждении это пересказывают числом: «заказ на 60 евро — доставка бесплатна».', tag: 'lesen_wort' },
        { id: 'r04-07', type: 'gap', q: 'Вставьте предлог.',
          text: 'Nehmen Sie die Tabletten ___ dem Essen, nicht auf leeren Magen.', hint: 'после', answer: ['nach'],
          explain: '`nach dem Essen` — после еды; `auf leeren Magen` — натощак. В утверждении-ловушке пишут `vor dem Essen`: одно слово меняет смысл на противоположный.', tag: 'lesen_wort' },
        { id: 'r04-08', type: 'gap', q: 'Вставьте слово.',
          text: 'Der Kurs ist ___: Sie bezahlen nichts.', hint: 'бесплатный', answer: [['kostenlos', 'gratis', 'umsonst', 'kostenfrei', 'gebührenfrei']],
          explain: '«Бесплатно» в условиях: `kostenlos`, `gratis`, `umsonst`, `kostenfrei`. Противоположное — `gegen Gebühr`, `kostenpflichtig`.', tag: 'lesen_wort' },
        { id: 'r04-09', type: 'choice', q: 'Что значит «gegen eine Gebühr»?',
          options: ['за плату', 'бесплатно', 'по желанию клиента'], answer: 0,
          explain: '`die Gebühr` — плата, сбор; `gegen eine Gebühr` — «за плату». «По желанию» — `auf Wunsch`. Эти выражения часто стоят рядом: `auf Wunsch gegen eine Gebühr` — если попросите, но платно.', tag: 'lesen_wort' },
        { id: 'r04-10', type: 'choice', q: 'Что значит в условиях «in der Regel»?',
          options: ['обычно, но бывают исключения', 'всегда, без исключений', 'так требует закон'], answer: 0,
          explain: '`in der Regel` — «как правило, обычно». Если в тексте `Die Lieferung dauert in der Regel drei Tage`, а в утверждении `immer genau drei Tage`, это falsch: текст оставляет место исключениям.', tag: 'lesen_wort' },
        { id: 'r04-11', type: 'choice', q: 'Какое предложение значит то же, что правило?',
          text: 'Rauchen ist im ganzen Haus verboten.',
          options: ['Im ganzen Haus darf man nicht rauchen.', 'Im ganzen Haus muss man nicht rauchen.', 'Im ganzen Haus soll man weniger rauchen.'], answer: 0,
          explain: '`verboten` = `darf man nicht`. `muss man nicht` — «не обязательно», это не запрет. `soll weniger` — совет, а не запрет.', tag: 'lesen_wort' },

        // ---- стратегия и ловушки
        { id: 'r04-12', type: 'order', q: 'Расставьте шаги работы с Teil 4 по порядку.',
          items: ['Прочитать три утверждения до текста', 'Выделить в каждом ключевые слова: число, срок, запрет, условие', 'По заголовкам найти нужный раздел', 'Прочитать этот абзац целиком и сверить смысл', 'Отметить richtig или falsch и искать следующее место дальше по тексту'],
          explain: 'Сначала задание, потом текст: так вы знаете, что ищете. Утверждения идут в порядке текста, поэтому место для следующего ищите дальше, а не с начала.', tag: 'lesen_info' },
        { id: 'r04-13', type: 'choice', q: 'В каком разделе договора искать ответ на это утверждение?',
          text: 'Aussage: Den Vertrag kann man jeden Monat kündigen.',
          options: ['Laufzeit und Kündigung', 'Roaming im Ausland', 'Zahlung und Rechnung'], answer: 0,
          explain: 'Ключевое слово — `kündigen`; в заголовке оно стоит как существительное `Kündigung`. Срок договора (`Laufzeit`) — там же.', tag: 'lesen_info' },
        { id: 'r04-14', type: 'choice', q: 'В каком разделе листка-вкладыша искать ответ на это утверждение?',
          text: 'Aussage: Kinder unter 6 Jahren dürfen das Medikament nicht nehmen.',
          options: ['Gegenanzeigen', 'Aufbewahrung', 'Zusammensetzung'], answer: 0,
          explain: '`Gegenanzeigen` — противопоказания: кому и когда лекарство нельзя. `Aufbewahrung` — хранение (про детей там только «хранить в недоступном месте»), `Zusammensetzung` — состав.', tag: 'lesen_info' },
        { id: 'r04-15', type: 'choice', q: 'Утверждение richtig или falsch?',
          text: 'Text: „Das Ticket gilt täglich außer samstags.“ Aussage: Am Samstag kann man mit dem Ticket fahren.',
          options: ['richtig', 'falsch'], answer: 1,
          explain: '`außer samstags` — «кроме суббот»: в субботу билет не действует. Утверждение говорит обратное — falsch.', tag: 'lesen_info' },
        { id: 'r04-16', type: 'choice', q: 'Утверждение richtig или falsch?',
          text: 'Text: „Haustiere sind nicht erlaubt, es sei denn, der Vermieter ist schriftlich einverstanden.“ Aussage: In der Wohnung darf man nie ein Haustier haben.',
          options: ['richtig', 'falsch'], answer: 1,
          explain: '`es sei denn` — «если только не»: с письменного согласия хозяина животное держать можно. `nie` («никогда») этого исключения не допускает — falsch.', tag: 'lesen_info' },
        { id: 'r04-17', type: 'choice', q: 'Утверждение richtig или falsch?',
          text: 'Text: „Eine Rückgabe ist nur mit Kassenbon möglich.“ Aussage: Ohne Kassenbon kann man die Ware nicht zurückgeben.',
          options: ['richtig', 'falsch'], answer: 0,
          explain: '`nur mit Kassenbon` = `ohne Kassenbon nicht`. Отрицание в утверждении не делает его ложным: смысл тот же — richtig.', tag: 'lesen_info' },
        { id: 'r04-18', type: 'choice', q: 'Утверждение richtig или falsch?',
          text: 'Text: „Sie müssen die Kundenkarte an der Kasse nicht zeigen: Ihre Telefonnummer genügt.“ Aussage: An der Kasse darf man die Kundenkarte nicht zeigen.',
          options: ['richtig', 'falsch'], answer: 1,
          explain: 'В тексте `müssen … nicht zeigen` — показывать не обязательно, хватит номера телефона. Утверждение с `darf nicht` превращает это в запрет — falsch.', tag: 'lesen_info' },
        { id: 'r04-19', type: 'choice', q: 'Утверждение richtig или falsch?',
          text: 'Text: „Kinder unter 6 Jahren fahren kostenlos, ältere Kinder brauchen eine Kinderfahrkarte.“ Aussage: Ein achtjähriges Kind fährt kostenlos.',
          options: ['richtig', 'falsch'], answer: 1,
          explain: 'Бесплатно — только `unter 6 Jahren`. Восьмилетний ребёнок старше, ему нужна `Kinderfahrkarte`. Возраст в утверждении другой — falsch.', tag: 'lesen_info' },
        { id: 'r04-20', type: 'choice', q: 'Утверждение richtig или falsch?',
          text: 'Text: „Sie bekommen Ihr Geld innerhalb von zehn Tagen zurück.“ Aussage: Man bekommt das Geld spätestens nach zehn Tagen zurück.',
          options: ['richtig', 'falsch'], answer: 0,
          explain: '`innerhalb von zehn Tagen` — в течение десяти дней, то есть не позже чем через десять. `spätestens nach zehn Tagen` — то же другими словами: richtig.', tag: 'lesen_info' },
        { id: 'r04-21', type: 'choice', q: 'Утверждение richtig или falsch?',
          text: 'Text: „Das Studio ist auch an Feiertagen von 8 bis 20 Uhr geöffnet.“ Aussage: An Feiertagen ist das Studio geschlossen.',
          options: ['richtig', 'falsch'], answer: 1,
          explain: 'Многие заведения в праздники закрыты, но решает не опыт, а текст: `auch an Feiertagen … geöffnet`. Утверждение противоречит тексту — falsch.', tag: 'lesen_info' },
        { id: 'r04-22', type: 'choice', q: 'Что разрешает или запрещает это правило?',
          text: 'Gäste, die nicht Mitglied im Verein sind, dürfen das Schwimmbad am Wochenende nicht ohne Badekappe benutzen.',
          options: ['По выходным гостям можно в бассейн, но только в шапочке.', 'По выходным гостям в бассейн нельзя.', 'По выходным шапочка гостям не нужна.'], answer: 0,
          explain: 'Главное: `dürfen … nicht ohne Badekappe benutzen`. `nicht ohne` — «не без», то есть «только с»: в шапочке можно. Придаточное `die nicht Mitglied im Verein sind` лишь уточняет, о ком речь.', tag: 'lesen_info' }
    ],

    sets: [
        {
            id: 'r04-s1',
            title: 'Лекарство от головной боли: листок-вкладыш',
            situation: 'Sie haben oft Kopfschmerzen. In der Apotheke haben Sie ein Medikament gekauft und lesen jetzt die Packungsbeilage.',
            material: [
                { kind: 'text', id: 't', title: 'DOLAFIX 250 mg Tabletten — Gebrauchsinformation',
                  paragraphs: ['Bitte lesen Sie diese Information genau, bevor Sie das Medikament nehmen. Heben Sie die Packungsbeilage auf: Vielleicht möchten Sie sie später noch einmal lesen.'],
                  sections: [
                      { h: 'Wogegen hilft DOLAFIX?', paragraphs: ['DOLAFIX hilft bei leichten bis mittelstarken Kopfschmerzen und bei Zahnschmerzen. Gegen Fieber wirkt das Mittel nicht.'] },
                      { h: 'Wie nehmen Sie DOLAFIX ein?', paragraphs: ['Erwachsene und Jugendliche ab 14 Jahren nehmen eine Tablette mit einem Glas Wasser. Nehmen Sie die Tablette nach dem Essen, nicht auf leeren Magen. Wenn die Schmerzen nicht besser werden, dürfen Sie frühestens nach sechs Stunden eine zweite Tablette nehmen. Pro Tag dürfen Sie höchstens drei Tabletten nehmen.'] },
                      { h: 'Wann dürfen Sie DOLAFIX nicht nehmen?', paragraphs: ['Nehmen Sie DOLAFIX nicht, wenn Sie gegen den Wirkstoff allergisch sind oder Probleme mit dem Magen haben. Kinder unter 14 Jahren dürfen DOLAFIX nur nehmen, wenn ein Arzt es verschrieben hat. Wenn Sie schwanger sind, fragen Sie vorher Ihre Ärztin oder Ihren Arzt.'] },
                      { h: 'Wie lange dürfen Sie DOLAFIX nehmen?', paragraphs: ['Ohne ärztlichen Rat nehmen Sie DOLAFIX höchstens drei Tage lang. Haben Sie danach noch Schmerzen, gehen Sie bitte zum Arzt.'] },
                      { h: 'Nebenwirkungen und Aufbewahrung', paragraphs: ['Manchmal bekommt man Magenschmerzen oder wird müde. Fahren Sie dann kein Auto. Bewahren Sie die Tabletten bei Zimmertemperatur und für Kinder unerreichbar auf.'] }
                  ] }
            ],
            items: [
                { id: 'r04-s1-1', type: 'rf', q: 'Man soll DOLAFIX vor dem Essen nehmen.',
                  answer: false, evidence: 'Nehmen Sie die Tablette nach dem Essen, nicht auf leeren Magen.',
                  why: 'Раздел `Wie nehmen Sie DOLAFIX ein?`: таблетку принимают `nach dem Essen, nicht auf leeren Magen` — после еды, не натощак. Утверждение переворачивает условие (`vor dem Essen`) — falsch.' },
                { id: 'r04-s1-2', type: 'rf', q: 'Man darf an einem Tag nicht mehr als drei Tabletten nehmen.',
                  answer: true, evidence: 'Pro Tag dürfen Sie höchstens drei Tabletten nehmen.',
                  why: 'Там же: `höchstens drei Tabletten` в день. `höchstens` = `nicht mehr als`, утверждение пересказывает правило другими словами — richtig. Не спутайте с `höchstens drei Tage` в разделе о сроке приёма: там речь о днях.' },
                { id: 'r04-s1-3', type: 'rf', q: 'Kinder unter 14 Jahren dürfen DOLAFIX auf keinen Fall nehmen.',
                  answer: false, evidence: 'Kinder unter 14 Jahren dürfen DOLAFIX nur nehmen, wenn ein Arzt es verschrieben hat.',
                  why: 'Раздел `Wann dürfen Sie DOLAFIX nicht nehmen?`: детям до 14 лет можно, если врач выписал лекарство (`nur …, wenn ein Arzt es verschrieben hat`). Это условие, а не полный запрет; `auf keinen Fall` («ни в коем случае») противоречит тексту — falsch.' }
            ],
            glossary: [
                { de: 'die Gebrauchsinformation', ru: 'инструкция к лекарству' },
                { de: 'die Packungsbeilage', ru: 'листок-вкладыш' },
                { de: 'mittelstark', ru: 'средней силы' },
                { de: 'auf leeren Magen', ru: 'натощак' },
                { de: 'frühestens', ru: 'не раньше чем' },
                { de: 'höchstens', ru: 'не больше' },
                { de: 'der Wirkstoff', ru: 'действующее вещество' },
                { de: 'allergisch gegen', ru: 'с аллергией на' },
                { de: 'verschreiben', ru: 'выписать (лекарство)' },
                { de: 'schwanger', ru: 'беременная' },
                { de: 'ärztlicher Rat', ru: 'совет врача' },
                { de: 'die Nebenwirkung', ru: 'побочное действие' },
                { de: 'aufbewahren', ru: 'хранить' },
                { de: 'unerreichbar', ru: 'вне досягаемости' }
            ]
        },

        {
            id: 'r04-s2',
            title: 'Стиральная машина: инструкция',
            situation: 'Sie haben eine neue Waschmaschine gekauft. Bevor Sie zum ersten Mal waschen, lesen Sie die Anleitung.',
            material: [
                { kind: 'text', id: 't', title: 'KLARWASCH 7 — Bedienungsanleitung (Kurzfassung)',
                  paragraphs: ['Vielen Dank, dass Sie sich für eine Waschmaschine von KLARWASCH entschieden haben. Bitte lesen Sie diese Anleitung, bevor Sie das Gerät zum ersten Mal benutzen.'],
                  sections: [
                      { h: 'Aufstellen', paragraphs: ['Stellen Sie die Maschine auf einen festen, geraden Boden. Sie darf nicht im Freien stehen, auch nicht in einer Garage, in der es im Winter friert. Entfernen Sie vor dem ersten Waschen die drei Transportschrauben auf der Rückseite. Wenn Sie die Schrauben nicht entfernen, kann die Maschine kaputtgehen.'] },
                      { h: 'Die erste Wäsche', paragraphs: ['Lassen Sie die Maschine beim ersten Mal ohne Wäsche laufen. Wählen Sie das Programm Baumwolle 60 °C und geben Sie nur wenig Waschmittel in die Schublade. So reinigen Sie die Maschine innen.'] },
                      { h: 'Programme', paragraphs: ['Baumwolle 40 °C oder 60 °C: für Handtücher, Bettwäsche und T-Shirts, bis 7 kg. Kurz 30: für leicht verschmutzte Kleidung, höchstens 3 kg, Dauer 30 Minuten. Wolle: nur für Kleidung mit dem Zeichen „Handwäsche“. Eco 40-60: dauert länger, spart aber Strom und Wasser.'] },
                      { h: 'Sicherheit', paragraphs: ['Kinder unter 8 Jahren dürfen die Maschine nur benutzen, wenn ein Erwachsener dabei ist. Versuchen Sie nicht, die Tür zu öffnen, solange das Programm läuft. Die Tür öffnet sich erst zwei Minuten nach dem Programmende. Ziehen Sie vor jeder Reinigung den Stecker.'] },
                      { h: 'Pflege', paragraphs: ['Reinigen Sie das Flusensieb unten rechts einmal im Monat. Die Schublade für das Waschmittel können Sie herausnehmen und mit warmem Wasser abspülen.'] }
                  ] }
            ],
            items: [
                { id: 'r04-s2-1', type: 'rf', q: 'Vor der ersten Wäsche muss man Schrauben an der Rückseite herausnehmen.',
                  answer: true, evidence: 'Entfernen Sie vor dem ersten Waschen die drei Transportschrauben auf der Rückseite.',
                  why: 'Раздел `Aufstellen`: `Entfernen Sie vor dem ersten Waschen die drei Transportschrauben`. `entfernen` = `herausnehmen`, а повелительное наклонение в инструкции — это обязанность (`muss man`). Richtig.' },
                { id: 'r04-s2-2', type: 'rf', q: 'Im Programm „Kurz 30“ soll man nicht mehr als drei Kilo Wäsche waschen.',
                  answer: true, evidence: 'für leicht verschmutzte Kleidung, höchstens 3 kg',
                  why: 'Раздел `Programme`: у `Kurz 30` — `höchstens 3 kg`. `nicht mehr als drei Kilo` — то же другими словами, richtig. `bis 7 kg` относится к программе `Baumwolle`, не путайте.' },
                { id: 'r04-s2-3', type: 'rf', q: 'Sobald das Programm zu Ende ist, kann man die Tür sofort öffnen.',
                  answer: false, evidence: 'Die Tür öffnet sich erst zwei Minuten nach dem Programmende.',
                  why: 'Раздел `Sicherheit`: дверь открывается `erst zwei Minuten nach dem Programmende` — только через две минуты после конца программы. `sofort` противоречит слову `erst` — falsch.' }
            ],
            glossary: [
                { de: 'die Bedienungsanleitung', ru: 'инструкция по эксплуатации' },
                { de: 'aufstellen', ru: 'установить' },
                { de: 'im Freien', ru: 'на улице, под открытым небом' },
                { de: 'es friert', ru: 'морозит, вода замерзает' },
                { de: 'die Transportschraube', ru: 'транспортировочный болт' },
                { de: 'entfernen', ru: 'убрать, снять' },
                { de: 'kaputtgehen', ru: 'сломаться' },
                { de: 'die Schublade', ru: 'выдвижной лоток, ящик' },
                { de: 'leicht verschmutzt', ru: 'слегка загрязнённый' },
                { de: 'die Dauer', ru: 'продолжительность' },
                { de: 'sparen', ru: 'экономить' },
                { de: 'solange', ru: 'пока' },
                { de: 'der Stecker', ru: 'вилка (штепсель)' },
                { de: 'das Flusensieb', ru: 'фильтр для ворса' },
                { de: 'abspülen', ru: 'промыть, сполоснуть' }
            ]
        },

        {
            id: 'r04-s3',
            title: 'Тариф мобильной связи: условия',
            situation: 'Sie möchten einen neuen Handyvertrag abschließen und lesen die Bedingungen eines Tarifs.',
            material: [
                { kind: 'text', id: 't', title: 'TELLA Flex 10 — Ihre Tarifbedingungen',
                  paragraphs: ['Mit TELLA Flex 10 telefonieren Sie und schreiben SMS ohne zusätzliche Kosten in alle deutschen Netze. Zum Surfen haben Sie jeden Monat 10 GB. Hier finden Sie die wichtigsten Bedingungen.'],
                  sections: [
                      { h: 'Preis und Laufzeit', paragraphs: ['Der Tarif kostet 12,99 Euro im Monat. Eine Anschlussgebühr gibt es nicht. Der Vertrag hat eine Mindestlaufzeit von 24 Monaten. Wenn Ihre 10 GB verbraucht sind, surfen Sie langsamer weiter. Zusätzliche Daten können Sie in der App buchen: 1 GB kostet 2,99 Euro.'] },
                      { h: 'Zahlung und Rechnung', paragraphs: ['Wir buchen den Betrag immer am Monatsanfang von Ihrem Konto ab. Ihre Rechnung finden Sie kostenlos im Kundenportal. Eine Rechnung auf Papier schicken wir Ihnen auf Wunsch gegen eine Gebühr von 1,50 Euro im Monat.'] },
                      { h: 'Kündigung', paragraphs: ['Sie können den Vertrag mit einer Frist von drei Monaten zum Ende der Mindestlaufzeit kündigen. Wenn Sie nicht kündigen, läuft der Vertrag weiter. Dann können Sie jederzeit mit einer Frist von einem Monat kündigen. Schicken Sie Ihre Kündigung per Post, per E-Mail oder über das Kundenportal. Am Telefon ist eine Kündigung nicht möglich.'] },
                      { h: 'Im Ausland', paragraphs: ['In allen EU-Ländern telefonieren und surfen Sie zu den gleichen Bedingungen wie in Deutschland. In der Schweiz und in der Türkei kostet jede Minute 1,49 Euro und jedes Megabyte 0,49 Euro. Anrufe von Deutschland ins Ausland sind nicht im Tarif enthalten.'] }
                  ] }
            ],
            items: [
                { id: 'r04-s3-1', type: 'rf', q: 'Eine Rechnung auf Papier bekommt man kostenlos.',
                  answer: false, evidence: 'gegen eine Gebühr von 1,50 Euro im Monat',
                  why: 'Раздел `Zahlung und Rechnung`: бесплатен только счёт в `Kundenportal`, а бумажный присылают `gegen eine Gebühr von 1,50 Euro im Monat`. Утверждение переносит `kostenlos` на бумажный счёт — falsch.' },
                { id: 'r04-s3-2', type: 'rf', q: 'Wenn der Vertrag schon länger als 24 Monate läuft, beträgt die Kündigungsfrist drei Monate.',
                  answer: false, evidence: 'Dann können Sie jederzeit mit einer Frist von einem Monat kündigen.',
                  why: 'Раздел `Kündigung`: три месяца — срок, чтобы расторгнуть договор к концу первых 24 месяцев. Если договор продлился, `Dann können Sie jederzeit mit einer Frist von einem Monat kündigen` — один месяц, а не три. Falsch.' },
                { id: 'r04-s3-3', type: 'rf', q: 'Wer in der Schweiz im Internet surft, muss extra bezahlen.',
                  answer: true, evidence: 'jedes Megabyte 0,49 Euro',
                  why: 'Раздел `Im Ausland`: в странах ЕС условия как дома, а в Швейцарии `jedes Megabyte 0,49 Euro`. Платить за каждый мегабайт сверх тарифа — это и есть `extra bezahlen`. Richtig.' }
            ],
            glossary: [
                { de: 'der Tarif', ru: 'тариф' },
                { de: 'das Netz', ru: 'сеть (оператора)' },
                { de: 'die Anschlussgebühr', ru: 'плата за подключение' },
                { de: 'die Mindestlaufzeit', ru: 'минимальный срок договора' },
                { de: 'verbraucht', ru: 'израсходован' },
                { de: 'buchen', ru: 'заказать, подключить' },
                { de: 'abbuchen', ru: 'списать со счёта' },
                { de: 'das Kundenportal', ru: 'личный кабинет на сайте' },
                { de: 'auf Wunsch', ru: 'по желанию, если попросите' },
                { de: 'die Gebühr', ru: 'плата, сбор' },
                { de: 'die Frist', ru: 'срок (уведомления)' },
                { de: 'kündigen', ru: 'расторгнуть договор' },
                { de: 'jederzeit', ru: 'в любое время' },
                { de: 'enthalten', ru: 'включён, входит' }
            ]
        },

        {
            id: 'r04-s4',
            title: 'Абонемент на транспорт: условия',
            situation: 'Sie fahren jeden Tag mit Bus und Straßenbahn zur Arbeit. Sie möchten ein Monatsticket im Abo bestellen und lesen die Bedingungen.',
            material: [
                { kind: 'text', id: 't', title: 'MonatsTicket Plus im Abo — Verkehrsverbund Lindtal',
                  paragraphs: ['Mit dem MonatsTicket Plus fahren Sie einen ganzen Monat lang beliebig oft mit Bus, Straßenbahn und S-Bahn. Im Abo zahlen Sie 64 Euro im Monat. Wir schicken Ihnen das Ticket als Chipkarte nach Hause.'],
                  sections: [
                      { h: 'Wo gilt das Ticket?', paragraphs: ['Das Ticket gilt in allen Bussen und Bahnen in Lindtal und in den zwölf Nachbargemeinden. In Fernzügen (IC und ICE) gilt es nicht. Ein Fahrrad können Sie montags bis freitags ab 9 Uhr und am Wochenende den ganzen Tag kostenlos mitnehmen.'] },
                      { h: 'Wer darf mit dem Ticket fahren?', paragraphs: ['Das Ticket ist übertragbar. Wenn Sie es nicht brauchen, kann auch eine andere Person damit fahren, zum Beispiel Ihr Partner oder Ihre Nachbarin. Abends ab 19 Uhr und am Wochenende dürfen Sie außerdem einen Erwachsenen und bis zu drei Kinder unter 15 Jahren kostenlos mitnehmen.'] },
                      { h: 'Verlust der Karte', paragraphs: ['Haben Sie Ihre Chipkarte verloren, melden Sie das bitte sofort im Kundenzentrum oder unter 0123 456789. Wir sperren die alte Karte und schicken Ihnen eine neue. Die neue Karte kostet 15 Euro.'] },
                      { h: 'Kündigung', paragraphs: ['Sie können das Abo zu jedem Monatsende kündigen. Ihre Kündigung muss spätestens am 10. des Monats bei uns sein. Für Tage, an denen Sie nicht gefahren sind, zahlen wir kein Geld zurück.'] }
                  ] }
            ],
            items: [
                { id: 'r04-s4-1', type: 'rf', q: 'Am Samstagvormittag kann man ein Fahrrad kostenlos mitnehmen.',
                  answer: true, evidence: 'am Wochenende den ganzen Tag kostenlos mitnehmen',
                  why: 'Раздел `Wo gilt das Ticket?`: велосипед бесплатно `montags bis freitags ab 9 Uhr und am Wochenende den ganzen Tag`. Суббота — выходной, а ограничение «с 9 часов» действует только в будни. Richtig.' },
                { id: 'r04-s4-2', type: 'rf', q: 'Nur die Person, die das Abo bestellt hat, darf mit dem Ticket fahren.',
                  answer: false, evidence: 'kann auch eine andere Person damit fahren',
                  why: 'Раздел `Wer darf mit dem Ticket fahren?`: `Das Ticket ist übertragbar`, по нему `kann auch eine andere Person damit fahren`. Утверждение с `nur` говорит обратное — falsch.' },
                { id: 'r04-s4-3', type: 'rf', q: 'Wer seine Karte verloren hat, muss für die neue Karte bezahlen.',
                  answer: true, evidence: 'Die neue Karte kostet 15 Euro.',
                  why: 'Раздел `Verlust der Karte`: `Die neue Karte kostet 15 Euro.` Значит, за новую карту платят — richtig.' }
            ],
            glossary: [
                { de: 'das Abo (Abonnement)', ru: 'подписка, абонемент' },
                { de: 'beliebig oft', ru: 'сколько угодно раз' },
                { de: 'die Chipkarte', ru: 'карта с чипом' },
                { de: 'gelten', ru: 'действовать (о билете)' },
                { de: 'die Nachbargemeinde', ru: 'соседний населённый пункт' },
                { de: 'der Fernzug', ru: 'поезд дальнего следования' },
                { de: 'mitnehmen', ru: 'взять с собой' },
                { de: 'übertragbar', ru: 'можно передать другому' },
                { de: 'der Verlust', ru: 'потеря' },
                { de: 'sperren', ru: 'заблокировать' },
                { de: 'das Kundenzentrum', ru: 'центр обслуживания клиентов' },
                { de: 'spätestens', ru: 'не позже' },
                { de: 'zurückzahlen', ru: 'вернуть деньги' }
            ]
        },

        {
            id: 'r04-s5',
            title: 'Интернет-магазин: доставка и возврат',
            situation: 'Sie möchten im Internet ein Regal und zwei Lampen bestellen. Vorher lesen Sie die Bedingungen im Online-Shop.',
            material: [
                { kind: 'text', id: 't', title: 'Online-Shop Wohnkiste — Lieferung, Bezahlung, Rückgabe',
                  paragraphs: ['Bei Wohnkiste finden Sie Möbel, Lampen und alles für den Haushalt. Bitte lesen Sie vor Ihrer ersten Bestellung unsere wichtigsten Bedingungen.'],
                  sections: [
                      { h: 'Lieferung', paragraphs: ['Wir liefern nur in Deutschland. Die Lieferung dauert in der Regel drei bis fünf Werktage. Wo Ihr Paket gerade ist, sehen Sie jederzeit in Ihrem Kundenkonto. Ab einem Bestellwert von 50 Euro liefern wir kostenlos, darunter kostet der Versand 4,95 Euro. Große Möbel bringt eine Spedition. Sie ruft Sie vorher an und vereinbart mit Ihnen einen Termin.'] },
                      { h: 'Bezahlung', paragraphs: ['Sie können mit Kreditkarte, per Lastschrift oder auf Rechnung bezahlen. Bei Zahlung auf Rechnung haben Sie 14 Tage Zeit. Neukunden können bei ihrer ersten Bestellung leider nicht auf Rechnung bezahlen.'] },
                      { h: 'Rückgabe', paragraphs: ['Sie können jede Ware innerhalb von 30 Tagen nach der Lieferung ohne Begründung zurückschicken. Das Rücksendeetikett finden Sie in Ihrem Kundenkonto. Die Rücksendung ist für Sie kostenlos, außer bei Möbeln, die eine Spedition abholen muss: Dafür berechnen wir 39 Euro. Wenn die Ware bei uns angekommen ist, bekommen Sie Ihr Geld spätestens nach 14 Tagen zurück.'] },
                      { h: 'Garantie und Kundenservice', paragraphs: ['Für alle Artikel gilt die gesetzliche Gewährleistung von zwei Jahren. Ist ein Artikel beschädigt oder haben Sie Fragen? Rufen Sie uns an: 0123 456789, montags bis freitags von 8 bis 18 Uhr.'] }
                  ] }
            ],
            items: [
                { id: 'r04-s5-1', type: 'rf', q: 'Wer für 60 Euro bestellt, muss keine Versandkosten bezahlen.',
                  answer: true, evidence: 'Ab einem Bestellwert von 50 Euro liefern wir kostenlos',
                  why: 'Раздел `Lieferung`: `Ab einem Bestellwert von 50 Euro liefern wir kostenlos`. 60 евро больше 50, значит, доставка бесплатная — richtig. 4,95 евро платят только при заказе меньше 50 евро (`darunter`).' },
                { id: 'r04-s5-2', type: 'rf', q: 'Auch bei der ersten Bestellung kann man auf Rechnung bezahlen.',
                  answer: false, evidence: 'Neukunden können bei ihrer ersten Bestellung leider nicht auf Rechnung bezahlen.',
                  why: 'Раздел `Bezahlung`: `Neukunden können bei ihrer ersten Bestellung leider nicht auf Rechnung bezahlen`. Кто заказывает впервые, тот и есть `Neukunde`. Утверждение говорит обратное — falsch.' },
                { id: 'r04-s5-3', type: 'rf', q: 'Für die Rückgabe hat man nur 14 Tage Zeit.',
                  answer: false, evidence: 'innerhalb von 30 Tagen nach der Lieferung',
                  why: 'Раздел `Rückgabe`: вернуть товар можно `innerhalb von 30 Tagen nach der Lieferung`. Число 14 в тексте есть, но о другом: это срок оплаты счёта и срок, в который возвращают деньги. Falsch.' }
            ],
            glossary: [
                { de: 'der Bestellwert', ru: 'сумма заказа' },
                { de: 'der Werktag', ru: 'рабочий день' },
                { de: 'der Versand', ru: 'пересылка, доставка' },
                { de: 'darunter', ru: 'ниже этого, меньше' },
                { de: 'die Spedition', ru: 'транспортная компания' },
                { de: 'vereinbaren', ru: 'договориться (о времени)' },
                { de: 'die Lastschrift', ru: 'списание со счёта' },
                { de: 'auf Rechnung', ru: 'по счёту, оплата после получения' },
                { de: 'der Neukunde', ru: 'новый покупатель' },
                { de: 'die Begründung', ru: 'объяснение причины' },
                { de: 'das Rücksendeetikett', ru: 'наклейка для возврата' },
                { de: 'berechnen', ru: 'ставить в счёт, брать плату' },
                { de: 'die Gewährleistung', ru: 'гарантия по закону' },
                { de: 'beschädigt', ru: 'повреждённый' }
            ]
        },

        {
            id: 'r04-s6',
            title: 'Фитнес-клуб: правила и членство',
            situation: 'Sie möchten in einem Fitnessstudio trainieren. Vor der Anmeldung lesen Sie die Hausordnung.',
            material: [
                { kind: 'text', id: 't', title: 'Fitnessstudio VITALO — Hausordnung und Mitgliedschaft',
                  paragraphs: ['Herzlich willkommen bei VITALO! Damit sich alle Mitglieder bei uns wohlfühlen, bitten wir Sie, diese Regeln zu beachten.'],
                  sections: [
                      { h: 'Öffnungszeiten', paragraphs: ['Wir haben montags bis freitags von 6 bis 23 Uhr geöffnet, am Wochenende und an Feiertagen von 8 bis 20 Uhr. Die Sauna öffnet jeden Tag erst um 14 Uhr. Letzter Einlass ist eine Stunde vor Schluss.'] },
                      { h: 'Im Studio', paragraphs: ['Trainieren Sie bitte nur in sauberen Sportschuhen, die Sie nicht draußen tragen. Legen Sie an allen Geräten ein Handtuch unter und bringen Sie Hanteln nach dem Training wieder an ihren Platz. An den Geräten dürfen Sie Getränke in Plastikflaschen haben, Glasflaschen sind im ganzen Studio verboten. Essen ist nur im Bistro erlaubt.'] },
                      { h: 'Mitgliedschaft', paragraphs: ['Ihre Mitgliedskarte ist persönlich: Andere Personen dürfen damit nicht trainieren. Gäste können Sie mitbringen, wenn sie an der Theke eine Tageskarte für 12 Euro kaufen. Mitglieder unter 16 Jahren trainieren nur, wenn eine Trainerin oder ein Trainer dabei ist.'] },
                      { h: 'Pause und Kündigung', paragraphs: ['Bei Krankheit oder Schwangerschaft können Sie Ihre Mitgliedschaft für bis zu drei Monate pausieren. Dafür brauchen Sie ein Attest vom Arzt. Die Mitgliedschaft läuft zunächst zwölf Monate. Danach können Sie jederzeit mit einer Frist von einem Monat kündigen, schriftlich oder an der Theke.'] }
                  ] }
            ],
            items: [
                { id: 'r04-s6-1', type: 'rf', q: 'Getränke sind nur im Bistro erlaubt.',
                  answer: false, evidence: 'An den Geräten dürfen Sie Getränke in Plastikflaschen haben',
                  why: 'Раздел `Im Studio`: у тренажёров пить можно, если бутылка пластиковая; запрещено только стекло. `nur im Bistro` в тексте сказано про еду (`Essen ist nur im Bistro erlaubt`), а не про напитки. Falsch.' },
                { id: 'r04-s6-2', type: 'rf', q: 'Mitglieder dürfen einen Gast mitbringen, wenn der Gast eine Tageskarte bezahlt.',
                  answer: true, evidence: 'wenn sie an der Theke eine Tageskarte für 12 Euro kaufen',
                  why: 'Раздел `Mitgliedschaft`: гостей приводить можно, `wenn sie an der Theke eine Tageskarte für 12 Euro kaufen` — richtig. Запрет `Andere Personen dürfen damit nicht trainieren` касается вашей личной карты, а не гостей.' },
                { id: 'r04-s6-3', type: 'rf', q: 'Wer krank ist, kann die Mitgliedschaft mit einem Attest für zwei Monate unterbrechen.',
                  answer: true, evidence: 'für bis zu drei Monate pausieren',
                  why: 'Раздел `Pause und Kündigung`: при болезни членство можно приостановить `für bis zu drei Monate`, нужна справка (`Attest vom Arzt`). Два месяца — меньше трёх, справка есть: richtig. `pausieren` = `unterbrechen`.' }
            ],
            glossary: [
                { de: 'die Hausordnung', ru: 'правила внутреннего распорядка' },
                { de: 'sich wohlfühlen', ru: 'хорошо себя чувствовать' },
                { de: 'beachten', ru: 'соблюдать' },
                { de: 'der Einlass', ru: 'вход, впуск посетителей' },
                { de: 'das Gerät', ru: 'тренажёр' },
                { de: 'unterlegen', ru: 'подложить' },
                { de: 'verboten', ru: 'запрещено' },
                { de: 'erlaubt', ru: 'разрешено' },
                { de: 'die Theke', ru: 'стойка администратора' },
                { de: 'die Tageskarte', ru: 'разовый билет на день' },
                { de: 'die Schwangerschaft', ru: 'беременность' },
                { de: 'pausieren', ru: 'приостановить' },
                { de: 'das Attest', ru: 'справка от врача' },
                { de: 'zunächst', ru: 'сначала, в первое время' },
                { de: 'die Frist', ru: 'срок (уведомления)' }
            ]
        }
    ]
};
