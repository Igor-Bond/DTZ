/**
 * Модуль 9. Предлоги: время, место и глаголы с предлогами.
 *
 * Три вопроса письма: когда, где или куда, и какой предлог требует глагол.
 * Везде опора на то, где русский предлог подсказывает верно, а где сбивает.
 */

export default {
    id: 'g09',
    order: 9,
    title: 'Предлоги: время, место и глаголы с предлогами',
    short: 'Предлоги',
    goal: 'Вы правильно называете время (am Montag, um 10 Uhr, in zwei Wochen, seit einem Jahr, nächste Woche) и место (beim Arzt, zum Arzt, zu Hause, nach Hause), ставите верный падеж после предлога и пишете глаголы с предлогами, нужные в каждом письме: warten auf, sich freuen auf, sich bedanken für, sich beschweren über.',
    why: 'Почти в каждом письме DTZ есть время и место: когда вы придёте, где вы были, куда пойдёте, сколько уже ждёте. Русские предлоги переводятся не один к одному («в понедельник» — am Montag, «через неделю» — in einer Woche, «у врача» — beim Arzt), поэтому ошибок здесь много. А глаголы с предлогами — основа жалобы, просьбы и благодарности.',

    theory: [
        { type: 'h', text: '1. Время: am, um, im' },
        { type: 'p', text: 'Русское «в» перед временем переводится тремя разными предлогами. Выбор зависит от того, что это за время: день, час или месяц.' },
        {
            type: 'table',
            head: ['Предлог', 'Для чего', 'Примеры'],
            rows: [
                ['`am`', 'день недели, дата, часть дня, выходные', '`am Montag`, `am 3. Mai`, `am Abend`, `am Wochenende`'],
                ['`um`', 'точное время по часам', '`um 10 Uhr`, `um halb acht`'],
                ['`im`', 'месяц, время года', '`im Mai`, `im Winter`, `im Sommer`']
            ],
            note: '`am` = `an dem`, `im` = `in dem`. Среди частей дня одно исключение: `in der Nacht` (ночью).'
        },
        {
            type: 'exs',
            items: [
                { de: 'Ich habe **am Dienstag um 9 Uhr** einen Termin.', ru: 'Во вторник в 9 часов у меня назначена встреча.' },
                { de: 'Der neue Kurs beginnt **im März**.', ru: 'Новый курс начинается в марте.' },
                { de: '**Am Wochenende** bin ich nicht zu Hause.', ru: 'На выходных меня нет дома.' },
                { de: 'Können Sie mich **am Abend** anrufen?', ru: 'Вы можете позвонить мне вечером?' }
            ]
        },
        { type: 'trap', wrong: 'Ich komme im Montag.', right: 'Ich komme am Montag.', why: 'По-русски и «в понедельник», и «в мае» — с одним предлогом. По-немецки день недели — всегда `am`, а `im` — только для месяцев и времён года.' },

        { type: 'h', text: '2. Срок: in, vor, nach, seit, für' },
        { type: 'rule', text: '«Через неделю» — `in einer Woche`. «Неделю назад» — `vor einer Woche`. «Уже неделю» — `seit einer Woche`. «На неделю» — `für eine Woche`.' },
        {
            type: 'table',
            head: ['Предлог', 'Значение', 'Примеры'],
            rows: [
                ['`in`', 'через (считая от сегодня)', '`in zwei Wochen`, `in einem Monat`'],
                ['`vor`', '… назад', '`vor drei Tagen`, `vor einer Woche`'],
                ['`nach`', 'после (события)', '`nach dem Kurs`, `nach der Arbeit`'],
                ['`seit`', 'уже … (началось и продолжается)', '`seit einem Jahr`, `seit Montag`'],
                ['`für`', 'на (какой срок)', '`für zwei Wochen`, `für einen Monat`'],
                ['`ab`', 'начиная с', '`ab Montag`, `ab nächster Woche`'],
                ['`bis`', 'до', '`bis Freitag`, `bis 18 Uhr`'],
                ['`von … bis`', 'с … до', '`von Montag bis Freitag`, `von 8 bis 12 Uhr`'],
                ['`gegen`', 'около (о часе)', '`gegen 10 Uhr`'],
                ['`zwischen … und`', 'между', '`zwischen 8 und 9 Uhr`']
            ],
            note: 'После `in`, `vor`, `nach` и `seit` — Dativ: `seit einem Jahr`, `vor einer Woche`, во множественном `vor drei Tagen` (с `-n`). После `für` — Akkusativ: `für einen Monat`.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Der Handwerker kommt **in einer Woche** wieder.', ru: 'Мастер придёт снова через неделю.' },
                { de: 'Ich habe Ihnen **vor drei Tagen** eine E-Mail geschickt.', ru: 'Три дня назад я отправил вам электронное письмо.' },
                { de: 'Meine Tochter ist **seit Montag** krank.', ru: 'Моя дочь болеет с понедельника.' },
                { de: 'Wir fahren **für zwei Wochen** nach Polen.', ru: 'Мы едем в Польшу на две недели.' },
                { de: 'Die Praxis ist **von 8 bis 12 Uhr** geöffnet.', ru: 'Кабинет врача открыт с 8 до 12 часов.' }
            ]
        },
        { type: 'trap', wrong: 'Ich komme nach zwei Wochen wieder.', right: 'Ich komme in zwei Wochen wieder.', why: 'Русское «через» тянет к `nach`, но «через две недели» от сегодняшнего дня — только `in`. `nach` со сроком значит «спустя … после чего-то»: `Nach zwei Wochen war ich wieder gesund.`' },

        { type: 'h', text: '3. Без предлога: heute, nächste Woche, letzten Montag' },
        {
            type: 'table',
            head: ['Без предлога', 'Перевод'],
            rows: [
                ['`heute`, `morgen`, `gestern`, `übermorgen`', 'сегодня, завтра, вчера, послезавтра'],
                ['`heute Morgen`, `morgen Abend`', 'сегодня утром, завтра вечером'],
                ['`diese Woche`, `nächste Woche`', 'на этой неделе, на следующей неделе'],
                ['`letzten Montag`, `nächsten Monat`', 'в прошлый понедельник, в следующем месяце'],
                ['`nächstes Jahr`, `jeden Tag`', 'в следующем году, каждый день']
            ],
            note: 'С `diese`, `nächste`, `letzte`, `jede` предлог не нужен. Если всё-таки ставите предлог, нужен и артикль: `am nächsten Montag`, `in der nächsten Woche`. Окончания `nächsten`, `nächstes` — в модуле 8.'
        },
        { type: 'trap', wrong: 'Ich komme am nächste Woche.', right: 'Ich komme nächste Woche.', why: '«На следующей неделе» — просто `nächste Woche`, без предлога. `am` ставят перед днём (`am Montag`), а не перед неделей.' },

        { type: 'h', text: '4. Где? Куда? Откуда?' },
        { type: 'p', text: 'В русском «в школе» и «в школу» различаются падежом. В немецком — иногда тоже падежом (`in der Schule` / `in die Schule`), а иногда разными предлогами (`beim Arzt` / `zum Arzt`). Поэтому перед каждым местом спросите себя: где? куда? откуда?' },
        {
            type: 'table',
            head: ['Что', 'Wo? (где)', 'Wohin? (куда)', 'Woher? (откуда)'],
            rows: [
                ['Здание, учреждение', '`in der Schule`', '`in die Schule`', '`aus der Schule`'],
                ['Врач, человек', '`beim Arzt`', '`zum Arzt`', '`vom Arzt`'],
                ['У кого-то, к кому-то', '`bei mir`, `bei Frau Kraus`', '`zu mir`, `zu Frau Kraus`', '`von Frau Kraus`'],
                ['Свой дом', '`zu Hause`', '`nach Hause`', '`von zu Hause`'],
                ['Город, страна без артикля', '`in Berlin`, `in Polen`', '`nach Berlin`, `nach Polen`', '`aus Berlin`, `aus Polen`'],
                ['Страна с артиклем', '`in der Türkei`', '`in die Türkei`', '`aus der Türkei`']
            ],
            note: 'Большинство стран — без артикля. С артиклем чаще всего встречаются `die Schweiz`, `die Türkei`, `die Ukraine`: для них «куда» — `in die`, а не `nach`.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Ich war gestern **beim Arzt**.', ru: 'Вчера я был у врача.' },
                { de: 'Morgen gehe ich mit meinem Sohn **zum Arzt**.', ru: 'Завтра я иду с сыном к врачу.' },
                { de: 'Meine Tochter bleibt heute **zu Hause**.', ru: 'Сегодня дочь остаётся дома.' },
                { de: 'Nach dem Kurs fahre ich direkt **nach Hause**.', ru: 'После курса я еду прямо домой.' },
                { de: 'Kommen Sie doch am Samstag **zu uns**!', ru: 'Приходите к нам в субботу!' },
                { de: 'Mein Bruder arbeitet **in der Schweiz**.', ru: 'Мой брат работает в Швейцарии.' }
            ]
        },
        { type: 'trap', wrong: 'Ich gehe morgen bei dem Arzt.', right: 'Ich gehe morgen zum Arzt.', why: '`bei` отвечает на вопрос «где?»: `Ich bin beim Arzt.` С `gehen`, `fahren`, `kommen` нужен ответ на «куда?» — `zum Arzt`. Русский тут подсказывает верно: «у врача» — `bei`, «к врачу» — `zu`.' },
        { type: 'trap', wrong: 'Am Montag bleibe ich nach Hause.', right: 'Am Montag bleibe ich zu Hause.', why: '`zu Hause` — «дома» (где?), `nach Hause` — «домой» (куда?). Русские «дома» и «домой» различают ровно то же самое, просто не перепутайте пары.' },

        { type: 'h', text: '5. Предлоги, после которых падеж всегда один' },
        {
            type: 'table',
            head: ['Падеж', 'Предлоги', 'Примеры'],
            rows: [
                ['Всегда Dativ', '`aus`, `bei`, `mit`, `nach`, `seit`, `von`, `zu`', '`aus der Ukraine`, `bei meiner Schwester`, `mit dem Bus`, `von meinem Chef`'],
                ['Всегда Akkusativ', '`durch`, `für`, `gegen`, `ohne`, `um`', '`durch die Stadt`, `für meinen Sohn`, `ohne den Vertrag`, `um 8 Uhr`']
            ],
            note: 'Эти два ряда выучите наизусть, как считалку. Формы артикля в Dativ и Akkusativ — в модуле 7.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Ich fahre **mit dem** Bus zur Arbeit.', ru: 'Я езжу на работу на автобусе.' },
                { de: 'Ich wohne zurzeit **bei meiner** Schwester.', ru: 'Сейчас я живу у сестры.' },
                { de: 'Ich habe einen Brief **von meinem** Vermieter bekommen.', ru: 'Я получил письмо от арендодателя.' },
                { de: 'Ich brauche die Bescheinigung **für meinen** Arbeitgeber.', ru: 'Мне нужна справка для работодателя.' },
                { de: '**Ohne Ihre** Unterschrift ist der Antrag nicht gültig.', ru: 'Без вашей подписи заявление недействительно.' }
            ]
        },
        {
            type: 'table',
            head: ['Слияние', 'Из чего', 'Примеры'],
            rows: [
                ['`am`', '`an dem`', '`am Montag`, `am Bahnhof`'],
                ['`im`', '`in dem`', '`im Mai`, `im Kurs`'],
                ['`ins`', '`in das`', '`ins Kino`, `ins Büro`'],
                ['`ans`', '`an das`', '`ans Fenster`, `ans Meer`'],
                ['`zum`', '`zu dem`', '`zum Arzt`, `zum Bahnhof`'],
                ['`zur`', '`zu der`', '`zur Schule`, `zur Arbeit`'],
                ['`beim`', '`bei dem`', '`beim Arzt`, `beim Zahnarzt`'],
                ['`vom`', '`von dem`', '`vom Arzt`, `vom Bahnhof`']
            ],
            note: 'В письме пишите слитно: `zum Arzt`, `beim Arzt`. Полная форма (`zu dem Arzt`) не ошибка, но звучит как «к тому самому врачу».'
        },

        { type: 'h', text: '6. in, an, auf и другие: где — Dativ, куда — Akkusativ' },
        { type: 'p', text: 'Девять предлогов места берут то Dativ, то Akkusativ: `in`, `an`, `auf`, `neben`, `vor`, `hinter`, `über`, `unter`, `zwischen`. Решает вопрос: «где?» — Dativ, «куда?» — Akkusativ. Русский делает почти то же: «в школе» — «в школу», «на столе» — «на стол».' },
        {
            type: 'table',
            head: ['Вопрос', 'Падеж', 'Пример'],
            rows: [
                ['Wo? (где)', 'Dativ', '`Mein Sohn ist in der Schule.`'],
                ['Wohin? (куда)', 'Akkusativ', '`Mein Sohn geht in die Schule.`'],
                ['Wo? (где)', 'Dativ', '`Die Papiere liegen auf dem Tisch.`'],
                ['Wohin? (куда)', 'Akkusativ', '`Ich lege die Papiere auf den Tisch.`'],
                ['Wo? (где)', 'Dativ', '`Das Fahrrad steht vor dem Haus.`'],
                ['Wohin? (куда)', 'Akkusativ', '`Stellen Sie das Fahrrad bitte nicht vor die Tür.`']
            ],
            note: 'Вопрос подсказывает глагол: `sein`, `liegen`, `stehen`, `wohnen` — «где?»; `gehen`, `fahren`, `legen`, `stellen` — «куда?». С `vor` русский не помогает: «перед домом» говорят и про «стоит», и про «поставить».'
        },
        {
            type: 'exs',
            items: [
                { de: 'Die Waschmaschine steht **im** Keller.', ru: 'Стиральная машина стоит в подвале.' },
                { de: 'Ich habe den Brief **in den** Briefkasten geworfen.', ru: 'Я бросил письмо в почтовый ящик.' },
                { de: 'Der Zettel hängt **an der** Tür.', ru: 'Записка висит на двери.' },
                { de: 'Bitte stellen Sie die Kinderwagen nicht **in den** Flur.', ru: 'Пожалуйста, не ставьте коляски в коридор.' }
            ]
        },

        { type: 'h', text: '7. Глаголы с предлогами' },
        { type: 'p', text: 'Многие глаголы требуют своего предлога, и он редко совпадает с русским: «ждать ответа» — `warten auf`, «бояться экзамена» — `Angst haben vor`. Учите глагол сразу с предлогом и падежом, как одно слово.' },
        {
            type: 'table',
            head: ['С Akkusativ', 'Перевод', 'Пример'],
            rows: [
                ['`warten auf`', 'ждать (кого, что)', '`Ich warte auf Ihre Antwort.`'],
                ['`sich freuen auf`', 'радоваться тому, что будет', '`Ich freue mich auf den Kurs.`'],
                ['`Lust haben auf`', 'хотеть (чего-то)', '`Hast du Lust auf einen Kaffee?`'],
                ['`sich freuen über`', 'радоваться тому, что уже есть', '`Ich habe mich über Ihren Brief gefreut.`'],
                ['`sich beschweren über`', 'жаловаться на', '`Ich beschwere mich über den Lärm.`'],
                ['`sich ärgern über`', 'злиться на', '`Ich ärgere mich über die hohen Kosten.`'],
                ['`sprechen über`', 'говорить о', '`Wir müssen über die Nebenkosten sprechen.`'],
                ['`berichten über`', 'рассказывать, сообщать о', '`Ich berichte Ihnen kurz über das Problem.`'],
                ['`sich informieren über`', 'узнавать, получать сведения о', '`Ich möchte mich über den Kurs informieren.`'],
                ['`sich bedanken für`', 'благодарить за', '`Ich bedanke mich für Ihre Hilfe.`'],
                ['`danken für`', 'благодарить (кого) за', '`Ich danke Ihnen für die Einladung.`'],
                ['`sich entschuldigen für`', 'извиняться за', '`Ich entschuldige mich für die Verspätung.`'],
                ['`sich interessieren für`', 'интересоваться', '`Ich interessiere mich für die Stelle.`'],
                ['`sich anmelden für`', 'записываться на', '`Ich möchte mich für den Kurs anmelden.`'],
                ['`bitten um`', 'просить (о чём)', '`Ich bitte Sie um Hilfe.`'],
                ['`sich kümmern um`', 'заботиться о, заниматься', '`Wer kümmert sich um die Reparatur?`'],
                ['`sich bewerben um`', 'претендовать на (место)', '`Ich bewerbe mich um die Stelle als Verkäuferin.`'],
                ['`denken an`', 'думать о, не забыть', '`Bitte denken Sie an die Unterlagen.`'],
                ['`sich erinnern an`', 'помнить, вспоминать', '`Erinnern Sie sich an unser Gespräch?`'],
                ['`schreiben an`', 'писать (кому, куда)', '`Ich schreibe an die Hausverwaltung.`']
            ]
        },
        {
            type: 'table',
            head: ['С Dativ', 'Перевод', 'Пример'],
            rows: [
                ['`teilnehmen an`', 'участвовать в', '`Ich nehme an der Prüfung teil.`'],
                ['`Angst haben vor`', 'бояться', '`Mein Sohn hat Angst vor dem Zahnarzt.`'],
                ['`fragen nach`', 'спрашивать о, уточнять', '`Ich möchte nach dem Preis fragen.`'],
                ['`abhängen von`', 'зависеть от', '`Das hängt von meinem Dienstplan ab.`'],
                ['`erzählen von`', 'рассказывать о', '`Ich erzähle dir von meiner neuen Arbeit.`'],
                ['`sich verabschieden von`', 'прощаться с', '`Ich möchte mich von der Gruppe verabschieden.`'],
                ['`sprechen mit`', 'говорить с', '`Ich möchte mit Ihnen über die Miete sprechen.`'],
                ['`anfangen mit`', 'начинать (что)', '`Wir fangen um 9 Uhr mit dem Unterricht an.`'],
                ['`einladen zu`', 'приглашать на', '`Ich lade Sie zu meinem Geburtstag ein.`'],
                ['`gehören zu`', 'входить в, относиться к', '`Der Keller gehört zur Wohnung.`'],
                ['`sich anmelden zu`', 'записываться на', '`Ich melde mich zum Kurs an.`'],
                ['`helfen bei`', 'помогать с (чем)', '`Können Sie mir beim Umzug helfen?`'],
                ['`sich bewerben bei`', 'подавать заявку (в фирму)', '`Ich bewerbe mich bei Ihrer Firma.`']
            ]
        },
        { type: 'rule', text: 'С `auf`, `über`, `für`, `um` в этих глаголах — Akkusativ. С `mit`, `von`, `zu`, `bei`, `nach`, `vor` — Dativ. Отдельно запомните `an`: `denken an` + Akkusativ, но `teilnehmen an` + Dativ.' },
        {
            type: 'exs',
            items: [
                { de: 'Ich **warte** seit zwei Wochen **auf** Ihre Antwort.', ru: 'Я уже две недели жду вашего ответа.' },
                { de: 'Ich **freue mich** schon **auf** Ihren Besuch.', ru: 'Я уже с радостью жду вашего приезда.' },
                { de: 'Ich **möchte mich über** den Lärm im Treppenhaus **beschweren**.', ru: 'Я хочу пожаловаться на шум на лестнице.' },
                { de: 'Ich **bedanke mich für** Ihre schnelle Hilfe.', ru: 'Благодарю вас за быструю помощь.' },
                { de: 'Mein Sohn **nimmt** gern **am** Schwimmkurs **teil**.', ru: 'Мой сын с удовольствием ходит на курс плавания.' }
            ]
        },
        { type: 'trap', wrong: 'Ich warte für Sie.', right: 'Ich warte auf Sie.', why: 'Русское «жду вас» — без предлога, а английское «wait for» подсказывает `für`. Оба сбивают: ждут по-немецки всегда `auf` + Akkusativ.' },
        { type: 'trap', wrong: 'Ich freue mich schon von Ihrem Besuch.', right: 'Ich freue mich schon auf Ihren Besuch.', why: 'С `sich freuen` предлога `von` не бывает. О том, что впереди, — `auf`, о том, что уже случилось, — `über`. Оба с Akkusativ: `auf Ihren Besuch`.' },
        { type: 'trap', wrong: 'Mein Sohn hat Angst von dem Hund.', right: 'Mein Sohn hat Angst vor dem Hund.', why: 'По-русски «боится собаки» — без предлога, и рука тянется к знакомому `von` («от»). Правильно — `Angst haben vor` + Dativ.' },

        { type: 'h', text: '8. darauf, dafür, worauf' },
        { type: 'p', text: 'Если после глагола с предлогом идёт целое предложение (`dass …` или `zu …`), предлог соединяется с `da-`: `darauf`, `dafür`, `darüber`; перед гласной вставляется `-r-`. Это русское «то» в «за то, что», «о том, что». В вопросе о вещи вместо `da-` — `wo-`: `worauf`, `wofür`, `worüber`.' },
        {
            type: 'exs',
            items: [
                { de: 'Ich **freue mich darauf**, Sie bald zu sehen.', ru: 'Я радуюсь тому, что скоро вас увижу.' },
                { de: 'Ich **warte darauf**, dass der Handwerker kommt.', ru: 'Я жду, когда придёт мастер.' },
                { de: 'Ich **bedanke mich dafür**, dass Sie so schnell geantwortet haben.', ru: 'Благодарю вас за то, что вы так быстро ответили.' },
                { de: '**Worüber** möchten Sie sich beschweren?', ru: 'На что вы хотите пожаловаться?' },
                { de: '**Auf wen** warten Sie? – Auf meinen Mann.', ru: 'Кого вы ждёте? — Мужа.' }
            ]
        },
        { type: 'tip', text: 'Для письма хватит шести глаголов с предлогом: `sich bedanken für`, `sich freuen auf`, `warten auf`, `bitten um`, `sich beschweren über`, `teilnehmen an`. Выучите их с падежом, и два-три таких глагола сделают ваше письмо по-настоящему немецким.' }
    ],

    exercises: [
        // ---- выбор
        { id: 'g09-01', type: 'choice', q: 'Как сказать «Я приду в понедельник»?',
          options: ['Ich komme am Montag.', 'Ich komme im Montag.', 'Ich komme um Montag.'], answer: 0,
          explain: 'День недели — всегда `am` (`an dem`). `im` — для месяцев и времён года, `um` — для часов.', tag: 'zeit' },
        { id: 'g09-02', type: 'choice', q: 'Как сказать «Курс начинается в мае»?',
          options: ['Der Kurs beginnt im Mai.', 'Der Kurs beginnt am Mai.', 'Der Kurs beginnt um Mai.'], answer: 0,
          explain: 'Месяц и время года — `im`: `im Mai`, `im Winter`. `am` нужен с конкретной датой: `am 3. Mai`.', tag: 'zeit' },
        { id: 'g09-03', type: 'choice', q: 'Как сказать «Я приду снова через две недели»?',
          options: ['Ich komme in zwei Wochen wieder.', 'Ich komme nach zwei Wochen wieder.', 'Ich komme vor zwei Wochen wieder.'], answer: 0,
          explain: '«Через … от сегодняшнего дня» — `in` + Dativ. `nach zwei Wochen` значит «спустя две недели после чего-то», а `vor zwei Wochen` — «две недели назад».', tag: 'zeit', diag: true },
        { id: 'g09-04', type: 'choice', q: 'Как сказать «Я живу здесь уже год»?',
          options: ['Ich wohne seit einem Jahr hier.', 'Ich wohne für ein Jahr hier.', 'Ich wohne vor einem Jahr hier.'], answer: 0,
          explain: '«Уже … (и до сих пор)» — `seit` + Dativ, глагол в Präsens, как и в русском. `für ein Jahr` — «на год» (заранее известный срок), `vor einem Jahr` — «год назад».', tag: 'zeit' },
        { id: 'g09-05', type: 'choice', q: 'Как сказать «Завтра я иду к врачу»?',
          options: ['Morgen gehe ich zum Arzt.', 'Morgen gehe ich beim Arzt.', 'Morgen gehe ich nach Arzt.'], answer: 0,
          explain: 'Куда? К человеку — `zu`: `zum Arzt` (= `zu dem Arzt`). `beim Arzt` отвечает на вопрос «где?», а `nach` в значении «куда?» — только с городами, странами без артикля и в `nach Hause`.', tag: 'praeposition' },
        { id: 'g09-06', type: 'choice', q: 'Как сказать «На выходных я дома»?',
          options: ['Am Wochenende bin ich zu Hause.', 'Am Wochenende bin ich nach Hause.', 'Am Wochenende bin ich bei Hause.'], answer: 0,
          explain: '«Дома» (где?) — `zu Hause`, «домой» (куда?) — `nach Hause`. С глаголом `bin` речь о месте, значит `zu Hause`.', tag: 'praeposition' },
        { id: 'g09-07', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich warte auf Ihre Antwort.', 'Ich warte für Ihre Antwort.', 'Ich warte Ihre Antwort.'], answer: 0,
          explain: 'Ждут по-немецки всегда `auf` + Akkusativ: `auf Ihre Antwort`, `auf den Bus`. Ни русское «жду ответа», ни английское «wait for» здесь не помогают.', tag: 'verbprep', diag: true },
        { id: 'g09-08', type: 'choice', q: 'Приглашение уже пришло, и вы ему рады. Как правильно?',
          options: ['Ich freue mich über Ihre Einladung.', 'Ich freue mich auf Ihre Einladung.', 'Ich freue mich von Ihrer Einladung.'], answer: 0,
          explain: 'Радоваться тому, что уже есть, — `sich freuen über` + Akkusativ. `auf` — о том, что ещё впереди, а `von` с этим глаголом не бывает.', tag: 'verbprep' },
        { id: 'g09-09', type: 'choice', q: 'Как сказать «Я хочу пожаловаться на шум»?',
          options: ['Ich möchte mich über den Lärm beschweren.', 'Ich möchte mich auf den Lärm beschweren.', 'Ich möchte mich über dem Lärm beschweren.'], answer: 0,
          explain: 'Жалуются `über` + Akkusativ: `über den Lärm`. Русское «на» подталкивает к `auf`, но с `sich beschweren` его не бывает.', tag: 'verbprep' },
        { id: 'g09-10', type: 'choice', q: 'Где стоит велосипед? Выберите правильное предложение.',
          options: ['Das Fahrrad steht vor dem Haus.', 'Das Fahrrad steht vor das Haus.', 'Das Fahrrad steht vor den Haus.'], answer: 0,
          explain: '`stehen` — «где?», поэтому после `vor` Dativ: `vor dem Haus`. Akkusativ нужен с «куда?»: `Ich stelle das Fahrrad vor das Haus.`', tag: 'praeposition' },
        { id: 'g09-11', type: 'choice', q: 'Как сказать «Я езжу на работу на автобусе»?',
          options: ['Ich fahre mit dem Bus zur Arbeit.', 'Ich fahre auf dem Bus zur Arbeit.', 'Ich fahre mit den Bus zur Arbeit.'], answer: 0,
          explain: 'Транспорт — `mit` + Dativ: `mit dem Bus`, `mit der U-Bahn`. Русское «на автобусе» через `auf` не переводится.', tag: 'praeposition' },

        // ---- пропуски
        { id: 'g09-12', type: 'gap', q: 'Вставьте предлог.',
          text: 'Der Termin ist am Dienstag ___ 10 Uhr.', hint: 'ровно в', answer: ['um'],
          explain: 'Точное время по часам — `um`: `um 10 Uhr`, `um halb neun`. Примерное время — `gegen 10 Uhr`.', tag: 'zeit' },
        { id: 'g09-13', type: 'gap', q: 'Вставьте предлог.',
          text: 'Ich habe Sie ___ drei Tagen angerufen.', hint: 'назад', answer: ['vor'],
          explain: '«Три дня назад» — `vor drei Tagen`: предлог стоит перед сроком, а не после, как русское «назад». После `vor` — Dativ, поэтому `Tagen` с `-n`.', tag: 'zeit' },
        { id: 'g09-14', type: 'gap', q: 'Вставьте предлог.',
          text: 'Mein Mann ist ___ Montag krank.', hint: 'с (и до сих пор)', answer: ['seit'],
          explain: '`seit` — началось в прошлом и продолжается сейчас. Глагол при этом в Präsens: `ist … krank`, как в русском «болеет с понедельника».', tag: 'zeit' },
        { id: 'g09-15', type: 'gap', q: 'Вставьте предлог.',
          text: '___ nächster Woche arbeite ich wieder.', hint: 'начиная с', answer: ['Ab'],
          explain: '`ab` — «начиная с» какого-то момента и дальше: `ab Montag`, `ab nächster Woche`, `ab 8 Uhr`.', tag: 'zeit' },
        { id: 'g09-16', type: 'gap', q: 'Вставьте два предлога.',
          text: 'Die Praxis ist ___ 8 ___ 12 Uhr geöffnet.', hint: 'с … до', answer: [['von'], ['bis']],
          explain: '«С … до» — `von … bis`: `von 8 bis 12 Uhr`, `von Montag bis Freitag`.', tag: 'zeit' },
        { id: 'g09-17', type: 'gap', q: 'Вставьте предлог с артиклем.',
          text: 'Ich war gestern ___ Arzt.', hint: 'у врача', answer: [['beim', 'bei dem']],
          explain: '«Где?» у человека — `bei` + Dativ: `beim Arzt` (= `bei dem Arzt`). На вопрос «куда?» было бы `zum Arzt`.', tag: 'praeposition', diag: true },
        { id: 'g09-18', type: 'gap', q: 'Вставьте предлог.',
          text: 'Nach dem Kurs fahre ich direkt ___ Hause.', hint: 'домой', answer: ['nach'],
          explain: '«Домой» — `nach Hause`, «дома» — `zu Hause`. Обе пары учат готовыми.', tag: 'praeposition' },
        { id: 'g09-19', type: 'gap', q: 'Вставьте артикль.',
          text: 'Mein Sohn geht ab Montag wieder in ___ Schule.', hint: 'определённый артикль', answer: ['die'],
          explain: '`gehen` — «куда?», поэтому после `in` Akkusativ: `in die Schule`. На вопрос «где?» было бы `in der Schule`.', tag: 'praeposition' },
        { id: 'g09-20', type: 'gap', q: 'Вставьте артикль.',
          text: 'Die Unterlagen liegen auf ___ Tisch im Büro.', hint: 'определённый артикль', answer: ['dem'],
          explain: '`liegen` — «где?», значит после `auf` Dativ: `auf dem Tisch`. С `legen` («куда?») было бы `auf den Tisch`.', tag: 'praeposition' },
        { id: 'g09-21', type: 'gap', q: 'Вставьте предлог.',
          text: 'Ich möchte mich ___ Ihre Hilfe bedanken.', hint: 'предлог', answer: ['für'],
          explain: 'Благодарят `für` + Akkusativ: `sich bedanken für`, `danken für`. Здесь русское «за» подсказывает верно.', tag: 'verbprep' },
        { id: 'g09-22', type: 'gap', q: 'Вставьте предлог.',
          text: 'Ich bitte Sie ___ einen neuen Termin.', hint: 'предлог', answer: ['um'],
          explain: 'Просят о чём-то — `bitten um` + Akkusativ: `um einen Termin`, `um Hilfe`. Русское «о» здесь не переводится через `über`.', tag: 'verbprep' },
        { id: 'g09-23', type: 'gap', q: 'Вставьте предлог с артиклем.',
          text: 'Leider kann ich nicht ___ Ausflug teilnehmen.', hint: 'предлог + артикль', answer: [['am', 'an dem']],
          explain: '`teilnehmen an` + Dativ: `an dem Ausflug` = `am Ausflug`. В простом предложении приставка уходит в конец: `Ich nehme am Ausflug teil.`', tag: 'verbprep' },
        { id: 'g09-24', type: 'gap', q: 'Вставьте предлог.',
          text: 'Ich freue mich schon ___ unser Treffen nächste Woche.', hint: 'предлог', answer: ['auf'],
          explain: 'Встреча ещё впереди (`schon`, `nächste Woche`), поэтому `sich freuen auf` + Akkusativ. О том, что уже случилось, — `über`.', tag: 'verbprep' },
        { id: 'g09-25', type: 'gap', q: 'Вставьте вопросительное слово.',
          text: '___ warten Sie noch? – Auf die Antwort vom Amt.', hint: 'wo- + предлог', answer: ['Worauf'],
          explain: 'О вещи спрашивают `wo-` + предлог из глагола: `warten auf` → `Worauf?`. Перед гласной вставляется `-r-`. О человеке спрашивают иначе: `Auf wen?`', tag: 'verbprep' },

        // ---- составить из слов
        { id: 'g09-26', type: 'build', q: 'Составьте предложение.',
          ru: 'Вчера я была у врача.',
          answer: ['Gestern war ich beim Arzt.', 'Ich war gestern beim Arzt.'],
          explain: '«У врача» — где? — `beim Arzt`. Глагол `war` стоит на втором месте.', tag: 'praeposition' },
        { id: 'g09-27', type: 'build', q: 'Составьте предложение.',
          ru: 'Мы уже две недели ждём мастера.',
          answer: ['Wir warten seit zwei Wochen auf den Handwerker.', 'Seit zwei Wochen warten wir auf den Handwerker.', 'Auf den Handwerker warten wir seit zwei Wochen.'],
          explain: '«Уже две недели» — `seit zwei Wochen` (Dativ). «Ждать кого» — `warten auf` + Akkusativ: `auf den Handwerker`.', tag: 'verbprep' },
        { id: 'g09-28', type: 'build', q: 'Составьте предложение.',
          ru: 'Я уже с нетерпением жду курса.',
          answer: ['Ich freue mich schon auf den Kurs.', 'Auf den Kurs freue ich mich schon.'],
          explain: 'Курс ещё впереди, поэтому `sich freuen auf` + Akkusativ: `auf den Kurs`.', tag: 'verbprep' },
        { id: 'g09-29', type: 'build', q: 'Составьте предложение.',
          ru: 'Я хотела бы пожаловаться на отопление.',
          answer: ['Ich möchte mich über die Heizung beschweren.', 'Über die Heizung möchte ich mich beschweren.'],
          explain: '`sich beschweren über` + Akkusativ. Возвратное `mich` стоит сразу после `möchte`, инфинитив `beschweren` — в конце.', tag: 'verbprep' },
        { id: 'g09-30', type: 'build', q: 'Составьте предложение.',
          ru: 'К сожалению, я не могу прийти на родительское собрание.',
          answer: ['Leider kann ich nicht am Elternabend teilnehmen.', 'Leider kann ich am Elternabend nicht teilnehmen.', 'Ich kann leider nicht am Elternabend teilnehmen.', 'Ich kann leider am Elternabend nicht teilnehmen.', 'Ich kann am Elternabend leider nicht teilnehmen.', 'Am Elternabend kann ich leider nicht teilnehmen.'],
          explain: '`teilnehmen an` + Dativ: `am Elternabend` (= `an dem`). Инфинитив `teilnehmen` — в конце, `nicht` можно поставить до или после `am Elternabend`.', tag: 'verbprep' },
        { id: 'g09-31', type: 'build', q: 'Составьте предложение.',
          ru: 'Летом мы едем в Турцию.',
          answer: ['Im Sommer fahren wir in die Türkei.', 'Wir fahren im Sommer in die Türkei.'],
          explain: '`die Türkei` — страна с артиклем, поэтому «куда?» — `in die Türkei`, а не `nach`. Время года — `im Sommer`.', tag: 'praeposition' },
        { id: 'g09-32', type: 'build', q: 'Составьте предложение.',
          ru: 'На следующей неделе я снова приду на курс.',
          answer: ['Nächste Woche komme ich wieder in den Kurs.', 'Ich komme nächste Woche wieder in den Kurs.'],
          explain: '`nächste Woche` — без предлога. «На курс» — куда? — `in den Kurs` (Akkusativ).', tag: 'zeit' },

        // ---- исправить ошибку
        { id: 'g09-33', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich habe Angst von der Prüfung.', answer: ['Ich habe Angst vor der Prüfung.'],
          explain: 'Бояться — `Angst haben vor` + Dativ. Привычное «от» (`von`) здесь не подходит.', tag: 'verbprep', diag: true },
        { id: 'g09-34', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Am nächste Woche habe ich Urlaub.', answer: ['Nächste Woche habe ich Urlaub.', 'Ich habe nächste Woche Urlaub.', 'In der nächsten Woche habe ich Urlaub.', 'Ich habe in der nächsten Woche Urlaub.'],
          explain: '«На следующей неделе» — `nächste Woche`, без предлога. Если нужен предлог, то `in der nächsten Woche`, но не `am`.', tag: 'zeit' },
        { id: 'g09-35', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich gehe morgen bei dem Arzt.', answer: ['Ich gehe morgen zum Arzt.', 'Ich gehe morgen zu dem Arzt.', 'Morgen gehe ich zum Arzt.', 'Morgen gehe ich zu dem Arzt.'],
          explain: '`gehen` — «куда?», значит `zum Arzt`. `bei dem Arzt` (`beim Arzt`) отвечает на вопрос «где?»: `Ich bin beim Arzt.`', tag: 'praeposition' },
        { id: 'g09-36', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich wohne seit ein Jahr in Köln.', answer: ['Ich wohne seit einem Jahr in Köln.', 'Seit einem Jahr wohne ich in Köln.'],
          explain: 'После `seit` — Dativ: `seit einem Jahr`, `seit einer Woche`, `seit zwei Jahren`.', tag: 'praeposition' },
        { id: 'g09-37', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich warte für den Brief vom Amt.', answer: ['Ich warte auf den Brief vom Amt.'],
          explain: '`warten` всегда с `auf` + Akkusativ. `für` — калька с английского «wait for».', tag: 'verbprep' },
        { id: 'g09-38', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Am Abend gehe ich zu Hause.', answer: ['Am Abend gehe ich nach Hause.', 'Ich gehe am Abend nach Hause.'],
          explain: '`gehen` — движение «куда?»: «домой» — `nach Hause`. `zu Hause` значит «дома».', tag: 'praeposition' },
        { id: 'g09-39', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich lege die Schlüssel auf dem Tisch.', answer: ['Ich lege die Schlüssel auf den Tisch.'],
          explain: '`legen` — «куда?», поэтому после `auf` Akkusativ: `auf den Tisch`. Dativ был бы с `liegen`: `Die Schlüssel liegen auf dem Tisch.`', tag: 'praeposition' },

        // ---- соединить
        { id: 'g09-40', type: 'join', q: 'Соедините предложения союзом dass.',
          parts: ['Ich warte darauf.', 'Sie schicken mir den Vertrag.'], connector: 'dass',
          answer: ['Ich warte darauf, dass Sie mir den Vertrag schicken.'],
          explain: '`darauf` стоит вместо `auf` + целое предложение: «жду того, что…». После `dass` глагол `schicken` уходит в конец, перед `dass` — запятая.', tag: 'verbprep' },
        { id: 'g09-41', type: 'join', q: 'Соедините предложения союзом dass.',
          parts: ['Ich ärgere mich darüber.', 'Der Aufzug ist schon wieder kaputt.'], connector: 'dass',
          answer: ['Ich ärgere mich darüber, dass der Aufzug schon wieder kaputt ist.'],
          explain: '`darüber, dass` — это русское «на то, что» после `sich ärgern über`. В придаточном `ist` стоит последним.', tag: 'verbprep' },

        // ---- перевод
        { id: 'g09-42', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Я живу в Германии уже два года.',
          answer: ['Ich wohne seit zwei Jahren in Deutschland.', 'Seit zwei Jahren wohne ich in Deutschland.', 'Ich lebe seit zwei Jahren in Deutschland.', 'Seit zwei Jahren lebe ich in Deutschland.', 'Ich wohne schon seit zwei Jahren in Deutschland.', 'Ich lebe schon seit zwei Jahren in Deutschland.', 'Schon seit zwei Jahren wohne ich in Deutschland.', 'Schon seit zwei Jahren lebe ich in Deutschland.', 'Ich wohne schon zwei Jahre in Deutschland.', 'Ich lebe schon zwei Jahre in Deutschland.'],
          explain: '«Уже два года» — `seit zwei Jahren` (Dativ, с `-n`) или `schon zwei Jahre`. Глагол в Präsens, как и в русском. Время стоит перед местом.', tag: 'zeit' },
        { id: 'g09-43', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Я приду снова через неделю.',
          answer: ['Ich komme in einer Woche wieder.', 'In einer Woche komme ich wieder.', 'Ich komme in einer Woche noch einmal.', 'In einer Woche komme ich noch einmal.'],
          explain: '«Через неделю» от сегодняшнего дня — `in einer Woche` (Dativ). `nach einer Woche` значило бы «спустя неделю после чего-то».', tag: 'zeit' },
        { id: 'g09-44', type: 'translate', q: 'Переведите на немецкий. «Записаться» — sich anmelden.',
          ru: 'Я хотел бы записаться на этот курс.',
          answer: ['Ich möchte mich für diesen Kurs anmelden.', 'Ich möchte mich zu diesem Kurs anmelden.', 'Ich möchte mich gern für diesen Kurs anmelden.', 'Ich möchte mich gern zu diesem Kurs anmelden.', 'Ich möchte mich gerne für diesen Kurs anmelden.', 'Ich möchte mich gerne zu diesem Kurs anmelden.','Ich würde mich gern für diesen Kurs anmelden.', 'Ich würde mich gern zu diesem Kurs anmelden.', 'Ich würde mich gerne für diesen Kurs anmelden.', 'Ich würde mich gerne zu diesem Kurs anmelden.'],
          explain: '`sich anmelden für` + Akkusativ (`für diesen Kurs`) или `zu` + Dativ (`zu diesem Kurs`). Оба варианта верны, главное — падеж после предлога.', tag: 'verbprep' }
    ],

    apply: {
        task: 'Напишите учительнице, госпоже Краус, 5–7 предложений: вы болеете со вчерашнего дня, сегодня утром были у врача и до пятницы должны оставаться дома. Скажите, когда вернётесь на курс, и поблагодарите. Не забудьте обращение и прощание.',
        checks: [
            'Минимум три указания времени с верным предлогом: `seit gestern`, `bis Freitag`, `am Montag um 18 Uhr`',
            '`diese Woche`, `nächste Woche`, `heute Morgen` стоят без предлога',
            '«Где?» и «куда?» не перепутаны: `beim Arzt`, `zu Hause`, но `in den Kurs`',
            'Есть хотя бы один глагол с предлогом и верным падежом: `sich freuen auf` + Akk или `sich bedanken für` + Akk'
        ],
        model: 'Sehr geehrte Frau Kraus, leider kann ich diese Woche nicht in den Kurs kommen. Ich bin seit gestern krank und war heute Morgen beim Arzt. Ich muss bis Freitag zu Hause bleiben. Am Montag um 18 Uhr komme ich wieder in den Kurs. Vielen Dank für Ihr Verständnis! Ich freue mich schon auf den Unterricht. Mit freundlichen Grüßen Olga Iwanowa',
        modelRu: 'Уважаемая госпожа Краус, к сожалению, на этой неделе я не могу прийти на курс. Я болею со вчерашнего дня и сегодня утром была у врача. До пятницы мне нужно оставаться дома. В понедельник в 18 часов я снова приду на курс. Большое спасибо за понимание! Я уже с нетерпением жду занятий. С уважением, Ольга Иванова'
    }
};
