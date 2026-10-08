/**
 * Ситуация 4. Квартира: запрос по объявлению и ответ после осмотра.
 *
 * Задание A — письмо незнакомой арендодательнице (формально): вопросы и осмотр.
 * Задание B — после осмотра: квартира нравится, немного о себе, документы, въезд.
 */

export default {
    id: 's04',
    order: 4,
    title: 'Жильё: запрос и осмотр квартиры',
    short: 'Квартира',
    register: 'formell',
    intro: 'Вы ищете квартиру: пишете по объявлению, чтобы задать вопросы и договориться об осмотре, или после осмотра сообщаете арендодателю, что хотите её снять. Тон вежливый и деловой, на «Sie». Важны конкретные вопросы (аренда, дополнительные расходы, дата въезда) и короткий, но убедительный рассказ о себе.',

    phrases: [
        { de: 'Sehr geehrte Frau …,', ru: 'Уважаемая госпожа …,', use: 'Anrede' },
        { de: 'Sehr geehrte Damen und Herren,', ru: 'Уважаемые дамы и господа, (если имени в объявлении нет)', use: 'Anrede' },
        { de: 'Guten Tag, Herr …,', ru: 'Добрый день, господин …, (чуть проще, когда вы уже знакомы)', use: 'Anrede' },
        { de: 'Ich habe Ihre Anzeige im Internet gelesen.', ru: 'Я прочитал ваше объявление в интернете.', use: 'Einleitung' },
        { de: 'Ich interessiere mich sehr für Ihre Wohnung.', ru: 'Ваша квартира меня очень интересует.', use: 'Einleitung' },
        { de: 'Wie hoch sind die Nebenkosten?', ru: 'Сколько составляют дополнительные расходы?', use: 'Frage' },
        { de: 'Ab wann ist die Wohnung frei?', ru: 'С какого числа квартира свободна?', use: 'Frage' },
        { de: 'Sind Haustiere in der Wohnung erlaubt?', ru: 'Можно ли держать в квартире домашних животных?', use: 'Frage' },
        { de: 'Ich würde die Wohnung gern besichtigen.', ru: 'Я хотел бы посмотреть квартиру.', use: 'Bitte' },
        { de: 'Am Samstagvormittag hätte ich Zeit.', ru: 'В субботу до обеда я был бы свободен.', use: 'Termin' },
        { de: 'Die Wohnung hat mir sehr gut gefallen.', ru: 'Квартира мне очень понравилась.', use: 'Information' },
        { de: 'Ich arbeite seit drei Jahren als Krankenpfleger und habe ein festes Einkommen.', ru: 'Я уже три года работаю медбратом, и у меня постоянный доход.', use: 'Information' },
        { de: 'Welche Unterlagen brauchen Sie von mir?', ru: 'Какие документы вам от меня нужны?', use: 'Frage' },
        { de: 'Wir möchten zum 1. Dezember einziehen.', ru: 'Мы хотели бы въехать 1 декабря.', use: 'Information' },
        { de: 'Über eine Antwort würde ich mich sehr freuen.', ru: 'Я был бы очень рад ответу.', use: 'Schluss' },
        { de: 'Mit freundlichen Grüßen', ru: 'С уважением', use: 'Gruß' }
    ],

    tasks: [
        {
            id: 's04-a',
            label: 'A',
            situation: 'Sie suchen mit Ihrer Familie eine größere Wohnung. Im Internet haben Sie eine Anzeige für eine Drei-Zimmer-Wohnung gefunden. Schreiben Sie an die Vermieterin, Frau Jansen.',
            recipient: 'Frau Jansen',
            register: 'formell',
            points: [
                { de: 'Grund für Ihr Schreiben', hint: 'Скажите, что прочитали объявление и квартира вас интересует.',
                  starters: ['Ich habe Ihre Anzeige … gelesen.', 'Ich interessiere mich sehr für …'],
                  keys: ['Anzeige', 'interessier', 'Wohnung'] },
                { de: 'Fragen zu Miete und Nebenkosten', hint: 'Спросите, сколько стоит аренда и какие дополнительные расходы.',
                  starters: ['Könnten Sie mir bitte sagen, wie hoch … ist?', 'Wie hoch sind die Nebenkosten?'],
                  keys: ['Miete', 'Nebenkosten', 'Kosten'] },
                { de: 'Einzug und Haustiere', hint: 'Спросите, с какого числа квартира свободна и можно ли держать кошку или собаку.',
                  starters: ['Ab wann ist die Wohnung frei?', 'Sind Haustiere erlaubt?'],
                  keys: ['frei', 'einzieh', 'Haustier', 'Katze', 'Hund'] },
                { de: 'Terminvorschlag für eine Besichtigung', hint: 'Попросите показать квартиру и предложите день и время.',
                  starters: ['Ich würde die Wohnung gern besichtigen.', 'Hätten Sie am … um … Uhr Zeit?'],
                  keys: ['besichtig', 'ansehen', 'anschauen', 'Uhr', 'Zeit'] }
            ],
            model: {
                text: 'Sehr geehrte Frau Jansen, ich habe Ihre Anzeige im Internet gelesen und interessiere mich sehr für die Drei-Zimmer-Wohnung. Ich wohne mit meiner Familie in einer kleinen Wohnung, deshalb suchen wir etwas Größeres. Könnten Sie mir bitte sagen, wie hoch die Miete und die Nebenkosten sind? Außerdem möchte ich wissen, ab wann die Wohnung frei ist. Wir haben eine kleine Katze. Sind Haustiere erlaubt? Ich würde die Wohnung gern besichtigen. Hätten Sie am Samstag um 11 Uhr Zeit? Wenn das nicht geht, kann ich auch an einem Abend nach der Arbeit kommen. Mit freundlichen Grüßen Larisa Gromova',
                ru: 'Уважаемая госпожа Янсен, я прочитала ваше объявление в интернете, и меня очень интересует трёхкомнатная квартира. Я живу с семьёй в маленькой квартире, поэтому мы ищем что-нибудь побольше. Не могли бы вы сказать, сколько составляют аренда и дополнительные расходы? Кроме того, я хотела бы знать, с какого числа квартира свободна. У нас есть маленькая кошка. Можно ли держать домашних животных? Я бы с удовольствием посмотрела квартиру. Вы были бы свободны в субботу в 11 часов? Если это не получится, я могу прийти и вечером после работы. С уважением, Лариса Громова',
                notes: [
                    'Первое предложение раскрывает пункт 1: откуда вы знаете о квартире (Perfekt `habe … gelesen`) и что она вас интересует (`sich interessieren für` + Akkusativ).',
                    'Одна фраза о себе с `deshalb` объясняет, зачем вам квартира, и показывает инверсию: `deshalb suchen wir`.',
                    'Вопросы о деньгах и сроке заданы косвенно: `wie hoch die Miete und die Nebenkosten sind`, `ab wann die Wohnung frei ist` — глагол в конце придаточного.',
                    'Про животное — коротко и честно: сначала факт (`Wir haben eine kleine Katze.`), потом прямой вопрос.',
                    'Осмотр предложен конкретно (`am Samstag um 11 Uhr`) и с запасным вариантом через `Wenn das nicht geht, …`.',
                    'Konjunktiv II трижды (`Könnten`, `würde … gern`, `Hätten`) создаёт вежливый деловой тон, нужный в письме незнакомому арендодателю.'
                ]
            },
            weak: {
                text: 'Hallo Frau Jansen, ich habe gelesen Ihre Anzeige. Ich interessiere mich für die Wohnung. Wie viel kostet Miete? Ich möchte wissen, ab wann ist die Wohnung frei. Wir haben einen Katze. Ich möchte sehen die Wohnung am Samstag. Ist es gut für Sie? Tschüss, Larisa',
                fixes: [
                    { was: 'Hallo Frau Jansen,', wird: 'Sehr geehrte Frau Jansen,', why: 'Незнакомой арендодательнице пишут формально: `Sehr geehrte Frau …`. `Hallo` — для знакомых.' },
                    { was: 'ich habe gelesen Ihre Anzeige', wird: 'ich habe Ihre Anzeige gelesen', why: 'Partizip II `gelesen` — вторая часть Perfekt, он стоит в самом конце предложения.' },
                    { was: 'Wie viel kostet Miete?', wird: 'Wie hoch ist die Miete?', why: 'Нужен артикль: `die Miete`. И об аренде спрашивают `Wie hoch ist …?` — «сколько стоит» здесь звучит неуклюже.' },
                    { was: 'ab wann ist die Wohnung frei', wird: 'ab wann die Wohnung frei ist', why: 'После `Ich möchte wissen,` вопрос становится придаточным: глагол `ist` уходит в конец.' },
                    { was: 'einen Katze', wird: 'eine Katze', why: '`Katze` женского рода (`die Katze`), поэтому в Akkusativ — `eine Katze`. Окончание `-en` бывает только у мужского рода.' },
                    { was: 'Ich möchte sehen die Wohnung am Samstag', wird: 'Ich möchte die Wohnung am Samstag besichtigen', why: 'При `möchte` инфинитив стоит в конце. Для квартиры есть точное слово: `besichtigen`.' },
                    { was: 'Ist es gut für Sie?', wird: 'Passt Ihnen das?', why: 'Русское «вам это удобно?» дословно не переводится. По-немецки: `Passt Ihnen das?` или `Hätten Sie da Zeit?`' },
                    { was: 'Tschüss, Larisa', wird: 'Mit freundlichen Grüßen Larisa Gromova', why: '`Tschüss` — для друзей. В формальном письме — `Mit freundlichen Grüßen` и полное имя.' }
                ]
            }
        },
        {
            id: 's04-b',
            label: 'B',
            situation: 'Sie haben am Wochenende eine Wohnung besichtigt. Die Wohnung hat Ihnen sehr gut gefallen, und Sie möchten sie mieten. Schreiben Sie an den Vermieter, Herrn Brückner.',
            recipient: 'Herr Brückner',
            register: 'halbformell',
            points: [
                { de: 'Dank für die Besichtigung', hint: 'Поблагодарите за осмотр и скажите, что квартира понравилась и вы хотите её снять.',
                  starters: ['Vielen Dank für die Besichtigung am …', 'Die Wohnung hat mir sehr gut gefallen.'],
                  keys: ['Besichtigung', 'gefallen', 'mieten', 'Interesse'] },
                { de: 'Informationen über Sie und Ihre Familie', hint: 'Коротко расскажите о работе, семье и о том, что у вас стабильный доход.',
                  starters: ['Ich arbeite seit … Jahren als …', 'Wir haben ein sicheres Einkommen.'],
                  keys: ['arbeite', 'Arbeit', 'Familie', 'Einkommen', 'verdien'] },
                { de: 'Frage nach den Unterlagen', hint: 'Спросите, какие документы нужно подать.',
                  starters: ['Könnten Sie mir bitte sagen, welche Unterlagen Sie brauchen?'],
                  keys: ['Unterlagen', 'Dokument', 'Nachweis', 'Bescheinigung'] },
                { de: 'Einzugstermin', hint: 'Назовите дату, с которой вы могли бы въехать.',
                  starters: ['Wir würden gern zum … einziehen.', 'Ab … könnten wir einziehen.'],
                  keys: ['einzieh', 'Einzug', 'umzieh', 'zum 1.'] }
            ],
            model: {
                text: 'Sehr geehrter Herr Brückner, vielen Dank für die Besichtigung am Samstag. Die Wohnung hat meiner Frau und mir sehr gut gefallen. Deshalb möchten wir sie gern mieten. Ich arbeite seit vier Jahren als Elektriker bei einer großen Firma und habe eine feste Stelle. Meine Frau arbeitet halbtags in einer Bäckerei. Wir haben also ein sicheres Einkommen. Könnten Sie mir bitte sagen, welche Unterlagen Sie von uns brauchen? Ich kann Ihnen zum Beispiel Gehaltsnachweise schicken. Wenn das möglich ist, würden wir gern zum 1. Dezember einziehen. Ich freue mich auf Ihre Antwort. Mit freundlichen Grüßen Viktor Kuzmin',
                ru: 'Уважаемый господин Брюкнер, большое спасибо за осмотр в субботу. Квартира очень понравилась моей жене и мне. Поэтому мы хотели бы её снять. Я уже четыре года работаю электриком в большой фирме, у меня постоянное место. Моя жена работает на полставки в пекарне. Так что у нас надёжный доход. Не могли бы вы сказать, какие документы вам от нас нужны? Я могу, например, прислать вам справки о зарплате. Если это возможно, мы хотели бы въехать 1 декабря. Жду вашего ответа. С уважением, Виктор Кузьмин',
                notes: [
                    'Благодарность за осмотр и `Die Wohnung hat … gefallen` (Perfekt) сразу раскрывают пункт 1, а `Deshalb möchten wir …` делает из этого вывод.',
                    '`gefallen` требует Dativ: квартира нравится **кому** — `meiner Frau und mir`; себя из вежливости называют последним.',
                    'О себе — только то, что важно арендодателю: работа, стаж (`seit vier Jahren`), постоянное место и доход, без лишних подробностей.',
                    'Вопрос о документах — косвенный: `Könnten Sie mir bitte sagen, welche Unterlagen Sie … brauchen?` — `brauchen` в конце.',
                    'Дата въезда названа через `zum 1. Dezember`, а после придаточного с `Wenn` главное предложение начинается с глагола: `würden wir gern …`.',
                    '`Ich freue mich auf Ihre Antwort` — `sich freuen auf` + Akkusativ для того, что ещё впереди.'
                ]
            }
        }
    ],

    drills: [
        { id: 's04-d1', type: 'order', q: 'Расставьте части письма в правильном порядке.',
          items: ['Sehr geehrte Damen und Herren,', 'ich habe Ihre Anzeige gelesen und interessiere mich sehr für die Wohnung.', 'Ich würde die Wohnung gern besichtigen.', 'Hätten Sie am Samstag um 11 Uhr Zeit?', 'Wenn das nicht geht, kann ich auch an einem Abend kommen.', 'Über eine Antwort würde ich mich sehr freuen.', 'Mit freundlichen Grüßen'],
          explain: 'Обращение, откуда вы знаете о квартире, просьба об осмотре, конкретное время, запасной вариант (`das` указывает на названное время), фраза об ответе и прощание.', tag: 'aufbau' },
        { id: 's04-d2', type: 'choice', q: 'Как правильно начать письмо господину Брюкнеру?',
          options: ['Sehr geehrter Herr Brückner,', 'Sehr geehrte Herr Brückner,', 'Sehr geehrter Herrn Brückner,'], answer: 0,
          explain: 'К мужчине — `Sehr geehrter Herr …`: у `geehrter` окончание `-er`, а `Herr` в обращении без `-n`. Форма `Herrn` нужна в адресе и после предлогов: `an Herrn Brückner`.', tag: 'register' },
        { id: 's04-d3', type: 'join', q: 'Сделайте из вопроса придаточное со словом wie.',
          parts: ['Könnten Sie mir bitte sagen?', 'Wie hoch sind die Nebenkosten?'], connector: 'wie',
          answer: ['Könnten Sie mir bitte sagen, wie hoch die Nebenkosten sind?'],
          explain: 'Вопрос `Wie hoch sind …?` стал придаточным: после `wie hoch` идёт подлежащее, а глагол `sind` уходит в конец.', tag: 'nebensatz' },
        { id: 's04-d4', type: 'join', q: 'Соедините предложения союзом ob.',
          parts: ['Ich möchte wissen.', 'Sind Haustiere in der Wohnung erlaubt?'], connector: 'ob',
          answer: ['Ich möchte wissen, ob Haustiere in der Wohnung erlaubt sind.', 'Ich möchte wissen, ob in der Wohnung Haustiere erlaubt sind.'],
          explain: 'Вопрос «да или нет» становится придаточным с `ob`, глагол `sind` — в конце. `dass` здесь не подходит: ответа вы ещё не знаете.', tag: 'nebensatz' },
        { id: 's04-d5', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Wenn das möglich ist, ___ wir gern zum 1. Dezember einziehen.', hint: 'werden, вежливая форма', answer: ['würden'],
          explain: 'Вежливое «хотели бы» — `würden … gern`. После придаточного с `Wenn` главное предложение начинается сразу с глагола.', tag: 'konj2' },
        { id: 's04-d6', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Die Wohnung hat mich sehr gut gefallen.',
          answer: ['Die Wohnung hat mir sehr gut gefallen.', 'Mir hat die Wohnung sehr gut gefallen.'],
          explain: '`gefallen` требует Dativ: нравится **кому** — `mir`, а не `mich`. Как по-русски: «мне понравилась».', tag: 'kasus' },
        { id: 's04-d7', type: 'build', q: 'Составьте вопрос.',
          ru: 'Какие документы вам от меня нужны?',
          answer: ['Welche Unterlagen brauchen Sie von mir?'],
          explain: 'В вопросе с вопросительным словом (`Welche Unterlagen`) глагол стоит сразу после него, затем подлежащее `Sie`.', tag: 'verb2' },
        { id: 's04-d8', type: 'build', q: 'Составьте предложение.',
          ru: 'Я уже четыре года работаю электриком.',
          answer: ['Ich arbeite seit vier Jahren als Elektriker.', 'Seit vier Jahren arbeite ich als Elektriker.', 'Als Elektriker arbeite ich seit vier Jahren.', 'Ich arbeite als Elektriker seit vier Jahren.'],
          explain: '«Уже четыре года» — `seit vier Jahren`: Dativ (`Jahren`) и настоящее время `arbeite`, потому что работа продолжается. Профессия — через `als`, без артикля.', tag: 'zeit' },
        { id: 's04-d9', type: 'gap', q: 'Вставьте предлог.',
          text: 'Ich interessiere mich sehr ___ Ihre Wohnung.', hint: 'предлог', answer: ['für'],
          explain: '`sich interessieren für` + Akkusativ: `für Ihre Wohnung`. Предлог при этом глаголе надо запомнить вместе с ним.', tag: 'verbprep' },
        { id: 's04-d10', type: 'choice', q: 'Квартира освободится в будущем, с 1 декабря. Как это сказать?',
          options: ['Die Wohnung ist ab 1. Dezember frei.', 'Die Wohnung ist seit 1. Dezember frei.', 'Die Wohnung ist von 1. Dezember frei.'], answer: 0,
          explain: 'Начало в будущем — `ab`: `ab 1. Dezember`. `seit` — только о том, что началось в прошлом и длится сейчас. `von` без `bis` здесь не работает.', tag: 'zeit' }
    ]
};
