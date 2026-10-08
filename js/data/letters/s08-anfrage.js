/**
 * Ситуация 8. Запрос информации: курс и детский сад.
 *
 * Формальный тон к незнакомому адресату, вопросы в косвенной форме
 * (wann …, wie viel …, ob …) вместо прямых «Was kostet?».
 */

export default {
    id: 's08',
    order: 8,
    title: 'Запрос информации: курсы, детский сад, школа',
    short: 'Запрос информации',
    register: 'formell',
    intro: 'Вы хотите записаться на курс или записать ребёнка в детский сад и пишете в учреждение, где вас ещё не знают. Тон формальный: если имя неизвестно, пишите `Sehr geehrte Damen und Herren,`. Главное — задать вопросы вежливо и понятно: косвенный вопрос (`Könnten Sie mir sagen, wann …`), а для вопроса «есть ли…» — союз `ob`.',

    phrases: [
        { de: 'Sehr geehrte Damen und Herren,', ru: 'Уважаемые дамы и господа, — если вы не знаете имени', use: 'Anrede' },
        { de: 'Sehr geehrte Frau …,', ru: 'Уважаемая госпожа …,', use: 'Anrede' },
        { de: 'Guten Tag, Herr …,', ru: 'Здравствуйте, господин …, — чуть проще, для электронного письма', use: 'Anrede' },
        { de: 'Ich interessiere mich für Ihren Deutschkurs.', ru: 'Меня интересует ваш курс немецкого.', use: 'Einleitung' },
        { de: 'Ich schreibe Ihnen, weil ich einige Fragen habe.', ru: 'Я пишу вам, потому что у меня есть несколько вопросов.', use: 'Einleitung' },
        { de: 'Wir sind vor Kurzem nach … gezogen.', ru: 'Мы недавно переехали в …', use: 'Grund' },
        { de: 'Ich suche einen Platz im Kindergarten für meine Tochter.', ru: 'Я ищу место в детском саду для дочери.', use: 'Grund' },
        { de: 'Könnten Sie mir bitte sagen, wann der Kurs beginnt?', ru: 'Не могли бы вы сказать, когда начинается курс?', use: 'Frage' },
        { de: 'Außerdem möchte ich wissen, wie viel der Kurs kostet.', ru: 'Кроме того, мне хотелось бы узнать, сколько стоит курс.', use: 'Frage' },
        { de: 'Ich möchte gern wissen, ob noch ein Platz frei ist.', ru: 'Мне хотелось бы узнать, есть ли ещё свободное место.', use: 'Frage' },
        { de: 'Welche Unterlagen brauche ich für die Anmeldung?', ru: 'Какие документы нужны для записи?', use: 'Frage' },
        { de: 'Ist es möglich, an einer Probestunde teilzunehmen?', ru: 'Можно ли прийти на пробное занятие?', use: 'Frage' },
        { de: 'Könnten Sie mir bitte einen Termin für ein Gespräch vorschlagen?', ru: 'Не могли бы вы предложить мне время для разговора?', use: 'Termin' },
        { de: 'Vielen Dank im Voraus für Ihre Antwort.', ru: 'Заранее большое спасибо за ответ.', use: 'Dank' },
        { de: 'Ich freue mich auf Ihre Antwort.', ru: 'Буду рад(а) вашему ответу.', use: 'Schluss' },
        { de: 'Mit freundlichen Grüßen', ru: 'С уважением', use: 'Gruß' }
    ],

    tasks: [
        {
            id: 's08-a',
            label: 'A',
            situation: 'Sie möchten abends einen Deutschkurs besuchen. Die Volkshochschule bietet einen Kurs für das Niveau B1 an, aber im Internet finden Sie nicht alle Informationen. Deshalb schreiben Sie an Frau Albers von der Volkshochschule.',
            recipient: 'Frau Albers',
            register: 'formell',
            points: [
                { de: 'Grund für Ihr Schreiben', hint: 'Скажите, какой курс вас интересует и что у вас есть вопросы.',
                  starters: ['Ich interessiere mich für …', 'Ich schreibe Ihnen, weil …'],
                  keys: ['interess', 'schreib', 'Frage'] },
                { de: 'Kursbeginn und Dauer', hint: 'Спросите, когда начинается курс и сколько он длится.',
                  starters: ['Könnten Sie mir sagen, wann …', 'Wie lange dauert …?'],
                  keys: ['beginn', 'dauer', 'wie lange'] },
                { de: 'Kosten und Kurszeiten', hint: 'Спросите о цене и о том, в какое время идут занятия.',
                  starters: ['Außerdem möchte ich wissen, wie viel …', 'Um wie viel Uhr …?'],
                  keys: ['kost', 'Preis', 'Uhr', 'Zeit'] },
                { de: 'Anmeldung und Probestunde', hint: 'Спросите, как записаться и можно ли сначала прийти на пробное занятие.',
                  starters: ['Wie kann ich mich anmelden?', 'Ich würde gern vorher …'],
                  keys: ['anmeld', 'Probe'] }
            ],
            model: {
                text: 'Sehr geehrte Frau Albers, ich interessiere mich für den Deutschkurs B1 am Abend und schreibe Ihnen, weil ich noch einige Fragen habe. Ich habe im Internet gelesen, dass der Kurs im November beginnt. Könnten Sie mir sagen, an welchem Tag er genau beginnt und wie lange er dauert? Außerdem möchte ich wissen, wie viel der Kurs kostet und um wie viel Uhr der Unterricht anfängt. Ich arbeite nämlich bis 17 Uhr. Wie kann ich mich anmelden? Ich würde gern vorher eine Probestunde besuchen, wenn das möglich ist. Vielen Dank im Voraus für Ihre Antwort. Mit freundlichen Grüßen Daria Marenko',
                ru: 'Уважаемая госпожа Альберс, меня интересует вечерний курс немецкого уровня B1, и я пишу вам, потому что у меня есть ещё несколько вопросов. Я прочитала в интернете, что курс начинается в ноябре. Не могли бы вы сказать, в какой именно день он начинается и сколько длится? Кроме того, мне хотелось бы узнать, сколько стоит курс и во сколько начинаются занятия. Дело в том, что я работаю до 17 часов. Как мне записаться? Я бы хотела сначала прийти на пробное занятие, если это возможно. Заранее большое спасибо за ответ. С уважением, Дарья Маренко',
                notes: [
                    'Пункт 1 раскрыт сразу: `ich interessiere mich für …` называет курс, а `weil ich noch einige Fragen habe` объясняет, зачем письмо.',
                    'Вопросы заданы косвенно — `Könnten Sie mir sagen, an welchem Tag er genau beginnt und wie lange er dauert?`: глаголы в конце, тон вежливый.',
                    'В придаточном отделяемый глагол пишется слитно и стоит последним: `um wie viel Uhr der Unterricht anfängt`.',
                    'Perfekt `Ich habe im Internet gelesen, dass …` показывает, что вы уже кое-что знаете, и даёт ещё одно придаточное.',
                    '`Ich arbeite nämlich bis 17 Uhr` объясняет, почему вам важно время: вопросы связаны с вашей жизнью, а не стоят голым списком.',
                    '`Ich würde gern …, wenn das möglich ist` — вежливое желание с Konjunktiv II и условием вместо прямого «Kann ich kommen?».'
                ]
            },
            weak: {
                text: 'Hallo Frau Albers! Ich interessiere für den Kurs B1. Wann beginnt Kurs und wie lange dauert er? Wie viel kostet? Ich möchte auch wissen, wann ist der Unterricht, weil ich arbeite bis 17 Uhr. Kann ich kommen zu Probestunde? Wie kann ich mich anmelden? Danke. Tschüss Daria',
                fixes: [
                    { was: 'Hallo Frau Albers!', wird: 'Sehr geehrte Frau Albers,', why: 'Вы пишете в учреждение человеку, которого не знаете: нужен формальный тон. `Sehr geehrte Frau …` и запятая после обращения.' },
                    { was: 'Ich interessiere für', wird: 'Ich interessiere mich für', why: '`sich interessieren für` — возвратный глагол, `mich` обязателен. В русском «интересуюсь» возвратность спрятана в «-сь», а в немецком это отдельное слово.' },
                    { was: 'Wann beginnt Kurs', wird: 'Wann beginnt der Kurs', why: 'В русском артиклей нет, а в немецком перед существительным почти всегда нужен артикль: `der Kurs`.' },
                    { was: 'Wie viel kostet?', wird: 'Wie viel kostet der Kurs?', why: 'По-русски можно сказать «Сколько стоит?», а в немецком подлежащее не пропускают: `kostet der Kurs`.' },
                    { was: 'wann ist der Unterricht', wird: 'wann der Unterricht ist', why: 'После `Ich möchte wissen, …` вопрос становится придаточным: глагол `ist` уходит в конец.' },
                    { was: 'weil ich arbeite bis 17 Uhr', wird: 'weil ich bis 17 Uhr arbeite', why: 'После `weil` спрягаемый глагол стоит в самом конце придаточного.' },
                    { was: 'Kann ich kommen zu Probestunde?', wird: 'Kann ich zu einer Probestunde kommen?', why: 'Инфинитив `kommen` стоит в конце, а перед `Probestunde` нужен артикль: `zu einer Probestunde`. Ещё вежливее: `Ich würde gern eine Probestunde besuchen.`' },
                    { was: 'Tschüss Daria', wird: 'Mit freundlichen Grüßen Daria Marenko', why: '`Tschüss` говорят друзьям. В официальном письме — `Mit freundlichen Grüßen` и полное имя.' }
                ]
            }
        },
        {
            id: 's08-b',
            label: 'B',
            situation: 'Sie sind mit Ihrer Familie neu in der Stadt. Ihre Tochter Mila ist drei Jahre alt und braucht einen Platz im Kindergarten. Deshalb schreiben Sie an Frau Wendt vom Kindergarten Sonnenblume.',
            recipient: 'Frau Wendt',
            register: 'formell',
            points: [
                { de: 'Grund für Ihr Schreiben', hint: 'Скажите, что вы недавно переехали и ищете место для дочери, и назовите её возраст.',
                  starters: ['Wir sind im … nach … gezogen.', 'Ich suche einen Platz für meine Tochter.'],
                  keys: ['Tochter', 'Jahre alt', 'gezogen', 'suche'] },
                { de: 'Freier Platz und Öffnungszeiten', hint: 'Спросите, есть ли свободное место и до которого часа работает детский сад.',
                  starters: ['Ich möchte gern wissen, ob …', 'Wie lange ist der Kindergarten geöffnet?'],
                  keys: ['frei', 'geöffnet', 'Öffnungszeit', 'offen'] },
                { de: 'Unterlagen für die Anmeldung', hint: 'Спросите, какие документы нужны, чтобы записать ребёнка.',
                  starters: ['Welche Unterlagen brauche ich …?', 'Außerdem möchte ich fragen, welche …'],
                  keys: ['Unterlagen', 'Dokument', 'Papiere', 'Anmeldung'] },
                { de: 'Bitte um einen Termin', hint: 'Попросите о встрече или о возможности прийти и посмотреть детский сад.',
                  starters: ['Könnten Sie mir bitte einen Termin vorschlagen?', 'Ich würde gern mit … vorbeikommen.'],
                  keys: ['Termin', 'vorbeikommen', 'besuchen', 'Gespräch', 'kennenlernen'] }
            ],
            model: {
                text: 'Sehr geehrte Frau Wendt, wir sind im September nach Kassel gezogen. Jetzt suche ich einen Platz im Kindergarten für meine Tochter Mila. Sie ist drei Jahre alt und spricht schon ein bisschen Deutsch. Ich möchte gern wissen, ob in Ihrem Kindergarten noch ein Platz frei ist. Wie lange ist der Kindergarten geöffnet? Ab Januar arbeite ich bis 16 Uhr, deshalb ist das für mich wichtig. Außerdem möchte ich fragen, welche Unterlagen ich für die Anmeldung brauche. Könnten Sie mir bitte einen Termin vorschlagen? Ich würde gern mit Mila vorbeikommen, damit sie den Kindergarten kennenlernt. Mit freundlichen Grüßen Oksana Bondar',
                ru: 'Уважаемая госпожа Вендт, в сентябре мы переехали в Кассель. Теперь я ищу место в детском саду для моей дочери Милы. Ей три года, и она уже немного говорит по-немецки. Мне хотелось бы узнать, есть ли в вашем детском саду свободное место. До которого часа открыт детский сад? С января я работаю до 16 часов, поэтому для меня это важно. Кроме того, я хотела бы спросить, какие документы нужны для записи. Не могли бы вы предложить мне время встречи? Я бы хотела зайти с Милой, чтобы она познакомилась с детским садом. С уважением, Оксана Бондарь',
                notes: [
                    'Причина письма и возраст дочери названы в первых трёх предложениях — пункт 1 проверяющий находит сразу.',
                    'Perfekt с `sein`: `wir sind … gezogen` — переезд это движение, поэтому `sind`, а не `haben`.',
                    '`Ich möchte gern wissen, ob …` — вопрос «есть ли» в косвенной форме: союз `ob`, глагол `ist` в конце.',
                    'Вопрос о часах работы объяснён: `Ab Januar arbeite ich bis 16 Uhr, deshalb ist das …` — после `deshalb` сразу глагол.',
                    'Документы спрошены косвенно: `welche Unterlagen ich für die Anmeldung brauche` — тоже придаточное с глаголом в конце.',
                    'Просьба о встрече вежливая (`Könnten Sie mir bitte …`), а `damit sie den Kindergarten kennenlernt` называет цель визита.'
                ]
            }
        }
    ],

    drills: [
        { id: 's08-d1', type: 'order', q: 'Расставьте части письма в правильном порядке.',
          items: ['Sehr geehrte Damen und Herren,', 'ich interessiere mich für Ihren Deutschkurs am Abend.', 'Könnten Sie mir sagen, wann der Kurs beginnt?', 'Außerdem möchte ich wissen, wie viel er kostet.', 'Vielen Dank im Voraus für Ihre Antwort.', 'Mit freundlichen Grüßen'],
          explain: 'Сначала обращение и то, чем вы интересуетесь, потом вопросы: второй вводится словом `Außerdem`. В конце благодарность и прощание.', tag: 'aufbau' },
        { id: 's08-d2', type: 'choice', q: 'Вы пишете в детский сад и не знаете, кто прочитает письмо. Какое обращение верное?',
          options: ['Sehr geehrte Damen und Herren,', 'Sehr geehrter Damen und Herren,', 'Hallo zusammen,'], answer: 0,
          explain: 'Если имя неизвестно, пишут `Sehr geehrte Damen und Herren,` — с окончанием `-e`, потому что обращаются ко многим. `Hallo zusammen` подходит для друзей или коллег, для официального запроса это слишком просто.', tag: 'register' },
        { id: 's08-d3', type: 'gap', q: 'Вставьте союз.',
          text: 'Ich würde gern eine Probestunde besuchen, ___ das möglich ist.', hint: 'союз «если»', answer: [['wenn', 'falls', 'sofern']],
          explain: '`wenn` (или `falls`) вводит условие. Глагол `ist` стоит в конце придаточного, а перед союзом нужна запятая.', tag: 'konnektor' },
        { id: 's08-d4', type: 'join', q: 'Соедините предложения союзом ob.',
          parts: ['Ich möchte gern wissen.', 'Ist noch ein Platz frei?'], connector: 'ob',
          answer: ['Ich möchte gern wissen, ob noch ein Platz frei ist.', 'Ich möchte gern wissen, ob ein Platz noch frei ist.'],
          explain: 'Вопрос без вопросительного слова («есть ли…?») в придаточном начинается с `ob`, а глагол `ist` уходит в конец. Русское «ли» — это `ob`, а не `wenn`.', tag: 'nebensatz' },
        { id: 's08-d5', type: 'join', q: 'Соедините предложения: второе станет придаточным с wann.',
          parts: ['Könnten Sie mir sagen?', 'Wann beginnt der Kurs?'], connector: 'wann',
          answer: ['Könnten Sie mir sagen, wann der Kurs beginnt?'],
          explain: 'Вопрос внутри просьбы становится придаточным: `wann` остаётся впереди, а глагол `beginnt` уходит в конец. Знак вопроса остаётся, потому что всё предложение — вопрос.', tag: 'nebensatz' },
        { id: 's08-d6', type: 'gap', q: 'Вставьте предлоги.',
          text: 'Ich suche einen Platz ___ Kindergarten ___ meine Tochter.', hint: '«в», «для»', answer: [['im', 'in dem', 'in einem'], ['für']],
          explain: '«В детском саду» — где? — `im` (это `in dem`, Dativ). «Для кого» — `für` с Akkusativ: `für meine Tochter`.', tag: 'praeposition' },
        { id: 's08-d7', type: 'gap', q: 'Вставьте вспомогательный глагол Perfekt.',
          text: 'Wir ___ im August nach Leipzig gezogen.', hint: 'sein или haben, настоящее время', answer: ['sind'],
          explain: '`ziehen` в значении «переезжать» — движение с места на место, поэтому Perfekt образуется с `sein`: `wir sind … gezogen`.', tag: 'perfekt' },
        { id: 's08-d8', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich interessiere für den Abendkurs B1.', answer: ['Ich interessiere mich für den Abendkurs B1.'],
          explain: '`sich interessieren für` — возвратный глагол: без `mich` предложение неполное. В русском «интересуюсь» возвратность в окончании «-сь», в немецком — отдельное слово.', tag: 'pronomen' },
        { id: 's08-d9', type: 'build', q: 'Составьте вежливую просьбу.',
          ru: 'Не могли бы вы, пожалуйста, прислать мне информацию о курсе?',
          answer: ['Könnten Sie mir bitte Informationen über den Kurs schicken?'],
          explain: '`Könnten Sie …` — вежливая просьба, инфинитив `schicken` стоит в конце. «Информация о чём-то» по-немецки обычно во множественном числе: `Informationen über` + Akkusativ.', tag: 'konj2' },
        { id: 's08-d10', type: 'build', q: 'Составьте предложение.',
          ru: 'Я бы хотела записать сына в детский сад.',
          answer: ['Ich würde meinen Sohn gern im Kindergarten anmelden.', 'Ich würde gern meinen Sohn im Kindergarten anmelden.', 'Meinen Sohn würde ich gern im Kindergarten anmelden.', 'Gern würde ich meinen Sohn im Kindergarten anmelden.'],
          explain: '`würde … gern` и инфинитив в конце — вежливое желание. Сына записывают — это Akkusativ, поэтому `meinen Sohn`. Куда записать — `im Kindergarten anmelden`, с Dativ.', tag: 'kasus' }
    ]
};
