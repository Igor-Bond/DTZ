/**
 * Ситуация 5. Жалоба: шум, поломка, нарушение.
 *
 * Два задания в стиле DTZ: шум от соседей (письмо в управляющую компанию)
 * и сломанное отопление (письмо хозяину квартиры). Тон формальный и твёрдый.
 */

export default {
    id: 's05',
    order: 5,
    title: 'Жалоба: шум, поломка, нарушение',
    short: 'Жалоба: шум и поломка',
    register: 'formell',
    intro: 'Вы жалуетесь хозяину квартиры или управляющей компании (`Hausverwaltung`): соседи шумят по ночам, сломалось отопление, не работает домофон. Тон вежливый, но твёрдый: опишите проблему фактами (что, с каких пор, как часто), скажите, что вы уже сделали, и попросите решить её к определённому сроку. Угрозы и упрёки не нужны — точные факты убеждают лучше.',

    phrases: [
        { de: 'Sehr geehrte Damen und Herren,', ru: 'Уважаемые дамы и господа, — в фирму, если имя сотрудника неизвестно', use: 'Anrede' },
        { de: 'Sehr geehrter Herr …,', ru: 'Уважаемый господин …,', use: 'Anrede' },
        { de: 'Liebe Frau …,', ru: 'Дорогая госпожа …, — знакомой соседке, мягче, чем `Sehr geehrte`', use: 'Anrede' },
        { de: 'Ich schreibe Ihnen, weil ich mich über den Lärm im Haus beschweren möchte.', ru: 'Я пишу вам, потому что хочу пожаловаться на шум в доме.', use: 'Einleitung' },
        { de: 'Seit drei Wochen ist es fast jede Nacht bis zwei Uhr laut.', ru: 'Уже три недели почти каждую ночь шумно до двух часов.', use: 'Beschwerde' },
        { de: 'Seit Samstag funktioniert die Heizung nicht mehr.', ru: 'С субботы не работает отопление.', use: 'Beschwerde' },
        { de: 'Das ist für uns ein großes Problem, weil …', ru: 'Для нас это большая проблема, потому что …', use: 'Grund' },
        { de: 'Ich habe schon mit den Nachbarn gesprochen, aber es hat sich nichts geändert.', ru: 'Я уже говорил с соседями, но ничего не изменилось.', use: 'Information' },
        { de: 'Könnten Sie bitte so schnell wie möglich einen Handwerker schicken?', ru: 'Не могли бы вы как можно скорее прислать мастера?', use: 'Bitte' },
        { de: 'Ich bitte Sie, das Problem bis zum … zu lösen.', ru: 'Прошу вас решить проблему до …', use: 'Bitte' },
        { de: 'Könnten Sie mir bitte mitteilen, wann der Handwerker kommt?', ru: 'Не могли бы вы сообщить мне, когда придёт мастер?', use: 'Frage' },
        { de: 'Der Handwerker kann gern am Montag zwischen 8 und 14 Uhr kommen.', ru: 'Мастер может прийти в понедельник с 8 до 14 часов.', use: 'Termin' },
        { de: 'Sonst muss ich mich an den Mieterverein wenden.', ru: 'Иначе мне придётся обратиться в союз арендаторов.', use: 'Information' },
        { de: 'Ich hoffe auf eine schnelle Lösung.', ru: 'Надеюсь на быстрое решение.', use: 'Schluss' },
        { de: 'Mit freundlichen Grüßen', ru: 'С уважением', use: 'Gruß' },
        { de: 'Viele Grüße', ru: 'Всего доброго — после обращения `Liebe …`', use: 'Gruß' }
    ],

    tasks: [
        {
            id: 's05-a',
            label: 'A',
            situation: 'Sie wohnen seit zwei Jahren in einer Mietwohnung. Seit einigen Wochen ist die neue Familie in der Wohnung über Ihnen nachts sehr laut. Schreiben Sie an die Hausverwaltung Rothe.',
            recipient: 'Hausverwaltung Rothe',
            register: 'formell',
            points: [
                { de: 'Grund für Ihr Schreiben', hint: 'Скажите, в какой квартире вы живёте и что хотите пожаловаться на шум.',
                  starters: ['Ich schreibe Ihnen, weil …', 'Leider muss ich mich über … beschweren.'],
                  keys: ['schreib', 'beschwer', 'Lärm'] },
                { de: 'Lärm: wann und wie oft', hint: 'Опишите, что мешает, с каких пор, как часто и до которого часа.',
                  starters: ['Seit … ist es fast jede Nacht …', 'Die Nachbarn hören oft bis … Uhr …'],
                  keys: ['seit', 'Nacht', 'Uhr', 'jede'] },
                { de: 'Gespräch mit den Nachbarn', hint: 'Скажите, что вы уже говорили с соседями и что из этого вышло.',
                  starters: ['Ich habe schon mit den Nachbarn gesprochen, aber …'],
                  keys: ['gesprochen', 'Gespräch', 'geredet', 'gesagt'] },
                { de: 'Bitte um Hilfe und Frist', hint: 'Попросите вмешаться, назовите срок и что вы сделаете, если ничего не изменится.',
                  starters: ['Ich bitte Sie, das Problem bis zum … zu lösen.', 'Sonst muss ich …'],
                  keys: ['bis zum', 'Frist', 'sonst', 'Mieterverein'] }
            ],
            model: {
                text: 'Sehr geehrte Damen und Herren, ich wohne in Wohnung 7 und schreibe Ihnen, weil ich mich über den Lärm im Haus beschweren möchte. Seit drei Wochen hört die neue Familie über mir fast jede Nacht bis zwei Uhr laute Musik. Deshalb kann ich nachts kaum schlafen und bin morgens sehr müde. Ich habe schon zweimal mit den Nachbarn gesprochen, aber es hat sich nichts geändert. Könnten Sie die Familie bitte an die Hausordnung erinnern? Ich bitte Sie, das Problem bis zum 20. Oktober zu lösen. Sonst muss ich mich an den Mieterverein wenden. Mit freundlichen Grüßen Tamara Sokolova',
                ru: 'Уважаемые дамы и господа, я живу в квартире 7 и пишу вам, потому что хочу пожаловаться на шум в доме. Уже три недели новая семья над моей квартирой почти каждую ночь до двух часов слушает громкую музыку. Поэтому я почти не могу спать ночью и по утрам очень устаю. Я уже дважды говорила с соседями, но ничего не изменилось. Не могли бы вы напомнить этой семье о правилах дома? Прошу вас решить проблему до 20 октября. Иначе мне придётся обратиться в союз арендаторов. С уважением, Тамара Соколова',
                notes: [
                    'Обращение `Sehr geehrte Damen und Herren,` — верный выбор для письма в фирму, когда имя сотрудника неизвестно.',
                    'Первое предложение сразу говорит, кто пишет (`Wohnung 7`) и зачем (`weil ich mich über den Lärm … beschweren möchte`), — пункт 1 раскрыт.',
                    'Проблема описана фактами: с каких пор (`Seit drei Wochen`), как часто (`fast jede Nacht`) и до которого часа (`bis zwei Uhr`), — это убедительнее любых эмоций.',
                    'Perfekt `habe … gesprochen` и `hat sich nichts geändert` показывает, что вы уже пытались решить проблему сами, — это и есть пункт 3.',
                    'Просьба вежливая (`Könnten Sie … erinnern?`), а срок и следующий шаг названы твёрдо (`bis zum 20. Oktober`, `Sonst muss ich …`) — деловой тон без грубости.',
                    'Связки `weil`, `deshalb`, `aber`, `Sonst` и оборот `Ich bitte Sie, … zu lösen` соединяют факты в цепочку: проблема → последствие → попытка → требование.'
                ]
            },
            weak: {
                text: 'Hallo Hausverwaltung. Ich will mich beschweren über die Nachbarn. Seit drei Wochen sie machen jede Nacht laut Musik bis zwei Uhr. Ich habe mit Nachbarn gesprecht, aber das hat nicht geholfen. Ich bin sehr müde, weil ich muss früh aufstehen. Bitte machen Sie schnell etwas. Danke, Tamara',
                fixes: [
                    { was: 'Hallo Hausverwaltung.', wird: 'Sehr geehrte Damen und Herren,', why: 'В фирму пишут официально. Если имя сотрудника неизвестно — `Sehr geehrte Damen und Herren,` с запятой, а не `Hallo`.' },
                    { was: 'Ich will mich beschweren über die Nachbarn', wird: 'Ich möchte mich über die Nachbarn beschweren', why: 'Инфинитив `beschweren` стоит в самом конце. И `möchte` вежливее, чем `will`: `will` звучит как требование.' },
                    { was: 'Seit drei Wochen sie machen', wird: 'Seit drei Wochen machen sie', why: 'Первое место занято словами `Seit drei Wochen`, поэтому глагол идёт сразу за ними, а `sie` — после глагола.' },
                    { was: 'laut Musik', wird: 'laute Musik', why: 'Прилагательное перед существительным получает окончание: `die Musik` → `laute Musik`.' },
                    { was: 'mit Nachbarn', wird: 'mit den Nachbarn', why: 'Речь об определённых соседях, поэтому нужен артикль: `mit den Nachbarn`. В русском артикля нет, и его легко забыть.' },
                    { was: 'gesprecht', wird: 'gesprochen', why: '`sprechen` — сильный глагол, его Partizip II — `gesprochen`. Окончание `-t` бывает у слабых глаголов: `gemacht`, `gesagt`.' },
                    { was: 'weil ich muss früh aufstehen', wird: 'weil ich früh aufstehen muss', why: 'После `weil` спрягаемый глагол `muss` уходит в самый конец, после инфинитива.' },
                    { was: 'Danke, Tamara', wird: 'Mit freundlichen Grüßen Tamara Sokolova', why: 'Официальное письмо заканчивается прощанием `Mit freundlichen Grüßen` и полным именем; `Danke` его не заменяет.' }
                ]
            }
        },
        {
            id: 's05-b',
            label: 'B',
            situation: 'In Ihrer Wohnung funktioniert die Heizung nicht mehr. Es ist Oktober, und nachts ist es schon sehr kalt. Schreiben Sie an Ihren Vermieter, Herrn Brenner.',
            recipient: 'Herr Brenner',
            register: 'formell',
            points: [
                { de: 'Problem mit der Heizung', hint: 'Опишите, что именно не работает и с какого дня.',
                  starters: ['Leider muss ich Ihnen mitteilen, dass …', 'Seit … funktioniert die Heizung nicht mehr.'],
                  keys: ['Heizung', 'funktioniert', 'kaputt', 'kalt'] },
                { de: 'Folgen für Ihre Familie', hint: 'Объясните, почему это неудобно: холод, маленький ребёнок, кто-то болеет.',
                  starters: ['Das ist für uns ein großes Problem, weil …'],
                  keys: ['Problem', 'Kind', 'Sohn', 'Tochter', 'krank', 'erkältet'] },
                { de: 'Bitte um schnelle Reparatur', hint: 'Попросите как можно скорее прислать мастера.',
                  starters: ['Könnten Sie bitte so schnell wie möglich …'],
                  keys: ['Handwerker', 'Reparatur', 'reparier', 'schnell'] },
                { de: 'Terminvorschlag für den Handwerker', hint: 'Назовите дни и часы, когда вы дома и мастер может прийти.',
                  starters: ['Er kann gern am … zwischen … und … Uhr kommen.', 'Ich bin am … zu Hause.'],
                  keys: ['Uhr', 'zu Hause', 'Montag', 'Dienstag', 'Termin'] }
            ],
            model: {
                text: 'Sehr geehrter Herr Brenner, leider muss ich Ihnen mitteilen, dass die Heizung in meiner Wohnung nicht mehr funktioniert. Seit Samstag bleiben alle Heizkörper kalt, obwohl ich sie ganz aufgedreht habe. Das ist für uns ein großes Problem, weil es nachts sehr kalt ist und mein kleiner Sohn erkältet ist. Könnten Sie bitte so schnell wie möglich einen Handwerker schicken? Er kann gern am Montag oder Dienstag zwischen 8 und 14 Uhr kommen, denn da bin ich zu Hause. Wenn das nicht passt, rufen Sie mich bitte an. Vielen Dank für Ihre Hilfe. Mit freundlichen Grüßen Viktor Lysenko',
                ru: 'Уважаемый господин Бреннер, к сожалению, вынужден сообщить вам, что отопление в моей квартире больше не работает. С субботы все батареи холодные, хотя я открыл их полностью. Для нас это большая проблема, потому что ночью очень холодно, а мой маленький сын простудился. Не могли бы вы как можно скорее прислать мастера? Он может прийти в понедельник или во вторник с 8 до 14 часов, потому что в это время я дома. Если это неудобно, позвоните мне, пожалуйста. Спасибо за помощь. С уважением, Виктор Лысенко',
                notes: [
                    'Начало `leider muss ich Ihnen mitteilen, dass …` — привычная формула делового письма с плохой новостью; глагол `funktioniert` стоит в конце придаточного.',
                    '`obwohl ich sie ganz aufgedreht habe` показывает, что простое решение вы уже проверили, и даёт Perfekt: `aufgedreht habe`, спрягаемый глагол последним.',
                    'Неудобство (пункт 2) названо конкретно — холод ночью и простуженный ребёнок, — а не просто «это плохо».',
                    'Просьба одновременно вежливая и срочная: `Könnten Sie bitte so schnell wie möglich …`.',
                    'Пункт 4 раскрыт точно: дни, часы (`zwischen 8 und 14 Uhr`) и запасной вариант `Wenn das nicht passt, rufen Sie mich bitte an.`',
                    'Пять разных связок — `dass`, `obwohl`, `weil`, `denn`, `wenn` — делают текст связным, это заметно в критерии II.'
                ]
            }
        }
    ],

    drills: [
        { id: 's05-d1', type: 'order', q: 'Расставьте части жалобы в правильном порядке.',
          items: ['Sehr geehrte Damen und Herren,', 'ich schreibe Ihnen, weil ich mich über den Lärm im Haus beschweren möchte.', 'Seit drei Wochen ist es fast jede Nacht bis zwei Uhr laut.', 'Ich habe schon mit den Nachbarn gesprochen, aber es hat sich nichts geändert.', 'Ich bitte Sie, das Problem bis zum 20. Oktober zu lösen.', 'Mit freundlichen Grüßen'],
          explain: 'Жалоба идёт по цепочке: обращение, повод письма, факты (с каких пор, как часто), что вы уже сделали, просьба со сроком, прощание.', tag: 'aufbau' },
        { id: 's05-d2', type: 'choice', q: 'Вы пишете в управляющую компанию и не знаете имени сотрудника. Какое обращение подходит?',
          options: ['Sehr geehrte Damen und Herren,', 'Sehr geehrter Herr,', 'Hallo Hausverwaltung,'], answer: 0,
          explain: 'Если имя неизвестно, пишут `Sehr geehrte Damen und Herren,`. `Sehr geehrter Herr` без фамилии по-немецки не пишут, а `Hallo` слишком фамильярно для жалобы.', tag: 'register' },
        { id: 's05-d3', type: 'join', q: 'Соедините предложения союзом weil.',
          parts: ['Ich bin morgens sehr müde.', 'Die Nachbarn hören nachts laute Musik.'], connector: 'weil',
          answer: ['Ich bin morgens sehr müde, weil die Nachbarn nachts laute Musik hören.', 'Weil die Nachbarn nachts laute Musik hören, bin ich morgens sehr müde.'],
          explain: 'После `weil` спрягаемый глагол `hören` уходит в конец. Если придаточное стоит первым, главное начинается с глагола: `bin ich …`.', tag: 'nebensatz' },
        { id: 's05-d4', type: 'join', q: 'Соедините предложения союзом obwohl.',
          parts: ['Die Wohnung bleibt kalt.', 'Die Heizung läuft den ganzen Tag.'], connector: 'obwohl',
          answer: ['Die Wohnung bleibt kalt, obwohl die Heizung den ganzen Tag läuft.', 'Obwohl die Heizung den ganzen Tag läuft, bleibt die Wohnung kalt.'],
          explain: '`obwohl` («хотя») вводит придаточное: глагол `läuft` стоит в конце. Если придаточное первое, главное начинается с глагола `bleibt`.', tag: 'nebensatz' },
        { id: 's05-d5', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich habe schon mit den Nachbarn gesprecht.', answer: ['Ich habe schon mit den Nachbarn gesprochen.'],
          explain: '`sprechen` — сильный глагол, его Partizip II — `gesprochen`. Окончание `-t` (`gemacht`, `gesagt`) бывает у слабых глаголов.', tag: 'perfekt' },
        { id: 's05-d6', type: 'build', q: 'Составьте вежливую просьбу.',
          ru: 'Не могли бы вы как можно скорее прислать мастера?',
          answer: ['Könnten Sie so schnell wie möglich einen Handwerker schicken?', 'Könnten Sie einen Handwerker so schnell wie möglich schicken?'],
          explain: '`Könnten Sie …` — вежливая просьба (Konjunktiv II). Инфинитив `schicken` стоит в самом конце; `so schnell wie möglich` — «как можно скорее».', tag: 'konj2' },
        { id: 's05-d7', type: 'build', q: 'Составьте предложение.',
          ru: 'Прошу вас решить проблему до 20 октября.',
          answer: ['Ich bitte Sie, das Problem bis zum 20. Oktober zu lösen.', 'Ich bitte Sie, bis zum 20. Oktober das Problem zu lösen.'],
          explain: 'После `Ich bitte Sie,` идёт инфинитив с `zu`, и `zu lösen` стоит в самом конце. Запятая отделяет этот оборот от главного предложения.', tag: 'infinitiv' },
        { id: 's05-d8', type: 'gap', q: 'Вставьте предлог.',
          text: 'Ich möchte mich ___ den Lärm in unserem Haus beschweren.', hint: 'жаловаться «на»', answer: ['über'],
          explain: 'По-русски «жаловаться на», по-немецки `sich beschweren über` + Akkusativ: `über den Lärm`. Предлог `auf` здесь — калька с русского.', tag: 'verbprep' },
        { id: 's05-d9', type: 'gap', q: 'Вставьте артикль в нужной форме.',
          text: 'Die Heizung funktioniert seit ___ Woche nicht mehr.', hint: 'eine', answer: ['einer'],
          explain: '`seit` всегда требует Dativ: `seit einer Woche`, `seit einem Monat`, `seit zwei Tagen`. Женский род в Dativ — `einer`.', tag: 'kasus' },
        { id: 's05-d10', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Seit Samstag die Heizung funktioniert nicht mehr.', answer: ['Seit Samstag funktioniert die Heizung nicht mehr.', 'Die Heizung funktioniert seit Samstag nicht mehr.'],
          explain: 'Первое место заняли слова `Seit Samstag`, поэтому глагол `funktioniert` идёт сразу за ними, а подлежащее `die Heizung` — после глагола.', tag: 'verb2' }
    ]
};
