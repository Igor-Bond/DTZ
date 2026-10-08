/**
 * Ситуация 11. Письмо другу: благодарность, просьба, предложение.
 *
 * Единственная ситуация на «du»: тон тёплый, но письмо всё равно строится по
 * четырём пунктам. Главные ловушки — смешение du и Sie и резкое «Ich will».
 */

export default {
    id: 's11',
    order: 11,
    title: 'Письмо другу: благодарность, просьба, предложение',
    short: 'Письмо другу',
    register: 'informell',
    intro: 'Вы пишете другу или подруге: благодарите за помощь, приглашаете в гости или просите помочь. Тон тёплый, обращение на «du» (`Liebe Katja,`, `Lieber Tom,`), прощание `Viele Grüße` или `Liebe Grüße`. Но и дружеское письмо проверяют по пунктам задания: каждый должен быть раскрыт.',

    phrases: [
        { de: 'Liebe …,', ru: 'Дорогая …,', use: 'Anrede' },
        { de: 'Lieber …,', ru: 'Дорогой …,', use: 'Anrede' },
        { de: 'Vielen Dank, dass du mir geholfen hast.', ru: 'Большое спасибо, что ты мне помог(ла).', use: 'Dank' },
        { de: 'Das Geschenk hat mir sehr gut gefallen.', ru: 'Подарок мне очень понравился.', use: 'Dank' },
        { de: 'Die Kinder hatten viel Spaß mit dir.', ru: 'Детям было с тобой очень весело.', use: 'Information' },
        { de: 'Als Dankeschön möchte ich dich zum Kaffee einladen.', ru: 'В благодарность я хочу пригласить тебя на кофе.', use: 'Vorschlag' },
        { de: 'Hast du am Sonntag Zeit?', ru: 'У тебя есть время в воскресенье?', use: 'Frage' },
        { de: 'Wie wäre es mit Samstag um 15 Uhr?', ru: 'Как насчёт субботы в 15 часов?', use: 'Termin' },
        { de: 'Ich ziehe am … um.', ru: 'Я переезжаю …', use: 'Information' },
        { de: 'Kannst du mir beim Umzug helfen?', ru: 'Можешь помочь мне с переездом?', use: 'Bitte' },
        { de: 'Ich würde mich freuen, wenn du mir helfen könntest.', ru: 'Я был(а) бы рад(а), если бы ты мог(ла) мне помочь.', use: 'Bitte' },
        { de: 'Als Dank lade ich dich zum Mittagessen ein.', ru: 'В благодарность я приглашаю тебя на обед.', use: 'Vorschlag' },
        { de: 'Ruf mich bitte an, dann können wir alles besprechen.', ru: 'Позвони мне, пожалуйста, тогда мы всё обсудим.', use: 'Schluss' },
        { de: 'Ich freue mich auf deine Antwort.', ru: 'Жду твоего ответа.', use: 'Schluss' },
        { de: 'Viele Grüße', ru: 'Всего доброго', use: 'Gruß' },
        { de: 'Liebe Grüße', ru: 'Обнимаю', use: 'Gruß' }
    ],

    tasks: [
        {
            id: 's11-a',
            label: 'A',
            situation: 'Sie hatten am Samstag einen Arzttermin. Ihre Freundin Katja hat in dieser Zeit auf Ihre Kinder aufgepasst. Sie möchten sich bedanken und schreiben an Katja.',
            recipient: 'Katja',
            register: 'informell',
            points: [
                { de: 'Dank für die Hilfe', hint: 'Поблагодарите Катю и скажите, за что именно.',
                  starters: ['Vielen Dank, dass du …', 'Du hast mir sehr geholfen.'],
                  keys: ['dank', 'aufgepasst', 'geholfen'] },
                { de: 'Was den Kindern gefallen hat', hint: 'Расскажите, что детям особенно понравилось.',
                  starters: ['Die Kinder haben mir erzählt, dass …', 'Besonders gut hat ihnen … gefallen.'],
                  keys: ['gefallen', 'Spaß', 'erzählt'] },
                { de: 'Einladung zum Kaffee', hint: 'В благодарность пригласите Катю на кофе.',
                  starters: ['Als Dankeschön möchte ich dich … einladen.', 'Hast du Lust auf einen Kaffee?'],
                  keys: ['einladen', 'Kaffee', 'Lust'] },
                { de: 'Terminvorschlag', hint: 'Предложите день и время и попросите предложить другой, если этот не подходит.',
                  starters: ['Hast du am … um … Uhr Zeit?', 'Wie wäre es mit …?'],
                  keys: ['Uhr', 'Zeit', 'passt', 'Termin'] }
            ],
            model: {
                text: 'Liebe Katja, vielen Dank, dass du am Samstag auf meine Kinder aufgepasst hast. So konnte ich in Ruhe zum Arzt gehen. Die Kinder haben mir erzählt, dass ihr zusammen einen Kuchen gebacken habt. Danach seid ihr noch auf den Spielplatz gegangen. Das hat ihnen besonders gut gefallen. Als Dankeschön möchte ich dich gern zum Kaffee einladen. Hast du am Sonntag um 15 Uhr Zeit? Wenn dir der Termin nicht passt, schlag mir bitte einen anderen Tag vor. Ich würde mich sehr freuen! Liebe Grüße Vera',
                ru: 'Дорогая Катя, большое спасибо, что ты в субботу присмотрела за моими детьми. Так я смогла спокойно сходить к врачу. Дети рассказали мне, что вы вместе испекли пирог. Потом вы ещё ходили на детскую площадку. Это им особенно понравилось. В благодарность я хотела бы пригласить тебя на кофе. У тебя есть время в воскресенье в 15 часов? Если тебе это время не подходит, предложи мне, пожалуйста, другой день. Я была бы очень рада! Обнимаю, Вера',
                notes: [
                    'Пункт 1 раскрыт первым же предложением: `vielen Dank, dass du … aufgepasst hast` — благодарность и сразу за что.',
                    'Что понравилось детям, рассказано конкретно — пирог и детская площадка, а не просто «всё было хорошо».',
                    'Perfekt с `haben` и с `sein` выбран верно: `haben … erzählt`, `gebacken habt`, `seid … gegangen`.',
                    'Придаточные с `dass` и `wenn` построены правильно: спрягаемый глагол в конце (`aufgepasst hast`, `nicht passt`).',
                    'Приглашение мягкое: `möchte ich dich gern … einladen` и `Ich würde mich sehr freuen` — даже подруге так лучше, чем `Ich will`.',
                    'Во всём письме одна форма — `du`, `dir`, `dich`, и к ней подходят `Liebe Katja,` и `Liebe Grüße`.'
                ]
            },
            weak: {
                text: 'Hallo Katja, vielen Dank fur deine Hilfe am Samstag. Du hast meine Kinder aufgepasst. Kinder haben erzählt, dass ihr einen Kuchen gebackt habt. Das war sehr gefallen. Ich will dich einladen zum Kaffee. Hast du am Sonntag um 15 Uhr Zeit? Wenn passt nicht, schreiben Sie mir bitte. Tschüss Vera',
                fixes: [
                    { was: 'fur deine Hilfe', wird: 'für deine Hilfe', why: 'Без умлаута получается слово, которого нет. На экзамене пишите `ü` от руки.' },
                    { was: 'Du hast meine Kinder aufgepasst', wird: 'Du hast auf meine Kinder aufgepasst', why: 'Глагол `aufpassen` требует предлога: `auf jemanden aufpassen` — «присматривать за кем-то». Без `auf` предложение неверно.' },
                    { was: 'Kinder haben erzählt', wird: 'Die Kinder haben erzählt', why: 'Речь о конкретных детях — ваших, поэтому нужен артикль `die` (или `Meine Kinder`). В русском артиклей нет, и их легко забыть.' },
                    { was: 'gebackt', wird: 'gebacken', why: 'Partizip II от `backen` — `gebacken`, с окончанием `-en`, а не `-t`.' },
                    { was: 'Das war sehr gefallen', wird: 'Das hat ihnen sehr gut gefallen', why: 'Perfekt от `gefallen` строится с `haben`: `hat … gefallen`. Кому понравилось — в дательном падеже: `ihnen`, «им».' },
                    { was: 'Ich will dich einladen zum Kaffee', wird: 'Ich möchte dich gern zum Kaffee einladen', why: 'Инфинитив `einladen` стоит в самом конце. А `möchte gern` звучит мягче и теплее, чем `will`.' },
                    { was: 'Wenn passt nicht', wird: 'Wenn es dir nicht passt', why: 'В немецком предложении нужно подлежащее (`es`), а в придаточном с `wenn` глагол `passt` уходит в конец.' },
                    { was: 'schreiben Sie mir', wird: 'schreib mir', why: 'Письмо подруге — на `du`, просьба звучит `schreib mir bitte`. `Sie` здесь — смешение регистров.' }
                ]
            }
        },
        {
            id: 's11-b',
            label: 'B',
            situation: 'Sie ziehen bald in eine neue Wohnung. Allein schaffen Sie den Umzug nicht. Deshalb schreiben Sie an Ihren Freund Tom.',
            recipient: 'Tom',
            register: 'informell',
            points: [
                { de: 'Termin für den Umzug', hint: 'Скажите, когда вы переезжаете, и спросите, свободен ли Том в этот день.',
                  starters: ['Ich ziehe am … um.', 'Hast du an diesem Tag Zeit?'],
                  keys: ['Umzug', 'ziehe', 'Samstag', 'Oktober'] },
                { de: 'Aufgaben beim Umzug', hint: 'Объясните, что нужно сделать: например, носить коробки и собирать мебель.',
                  starters: ['Zuerst müssen wir …', 'Danach …'],
                  keys: ['Kisten', 'Möbel', 'tragen', 'aufbauen', 'Schrank'] },
                { de: 'Einladung zum Essen', hint: 'Предложите в благодарность пригласить Тома на обед.',
                  starters: ['Als Dank lade ich dich … ein.', 'Ich koche für dich …'],
                  keys: ['Essen', 'koche', 'Dank', 'lade'] },
                { de: 'Anruf oder Treffen', hint: 'Предложите созвониться или встретиться, чтобы всё обсудить.',
                  starters: ['Ruf mich bitte … an.', 'Können wir uns am … treffen?'],
                  keys: ['ruf', 'anrufen', 'treffen', 'besprechen', 'telefonieren'] }
            ],
            model: {
                text: 'Lieber Tom, ich habe endlich eine neue Wohnung gefunden! Ich ziehe am 24. Oktober um. Das ist ein Samstag. Hast du an diesem Tag Zeit? Ich würde mich sehr freuen, wenn du mir helfen könntest. Zuerst müssen wir die Kisten ins Auto tragen. Danach wollen wir in der neuen Wohnung die Möbel aufbauen. Allein schaffe ich das nicht, weil der Schrank sehr schwer ist. Als Dank lade ich dich nach der Arbeit zum Mittagessen ein. Ich koche dein Lieblingsessen! Ruf mich bitte am Mittwochabend an, dann können wir alles besprechen. Viele Grüße Maxim',
                ru: 'Дорогой Том, я наконец нашёл новую квартиру! Я переезжаю 24 октября. Это суббота. У тебя есть время в этот день? Я был бы очень рад, если бы ты мог мне помочь. Сначала нам нужно отнести коробки в машину. Потом мы хотим собрать мебель в новой квартире. Один я не справлюсь, потому что шкаф очень тяжёлый. В благодарность я приглашаю тебя после работы на обед. Я приготовлю твоё любимое блюдо! Позвони мне, пожалуйста, в среду вечером, тогда мы всё обсудим. Всего доброго, Максим',
                notes: [
                    'Повод назван сразу: новая квартира и точная дата — `Ich ziehe am 24. Oktober um.`',
                    'Просьба тёплая, но вежливая: `Ich würde mich sehr freuen, wenn du mir helfen könntest` — Konjunktiv II уместен и в письме другу.',
                    'Связки `Zuerst … Danach …` выстраивают работу по шагам, а `weil` объясняет, зачем нужна помощь.',
                    'Отделяемые глаголы стоят в рамке: `ziehe … um`, `lade … ein`, `Ruf … an` — приставка в конце.',
                    'Императив для `du` — основа глагола без окончания и без `du`: `Ruf mich bitte … an`.',
                    'Perfekt `habe … gefunden` в первом предложении и одна форма `du` во всём письме — то, что ожидается от B1.'
                ]
            }
        }
    ],

    drills: [
        { id: 's11-d1', type: 'order', q: 'Расставьте части письма подруге по порядку.',
          items: ['Liebe Katja,', 'vielen Dank für deine Hilfe am Samstag.', 'Die Kinder hatten viel Spaß mit dir.', 'Hast du am Sonntag Zeit für einen Kaffee?', 'Ich freue mich auf deine Antwort.', 'Liebe Grüße', 'Vera'],
          explain: 'Обращение, благодарность, подробности, приглашение, завершение, прощание и имя: письмо другу строится так же, как официальное.', tag: 'aufbau' },
        { id: 's11-d2', type: 'choice', q: 'Какое обращение подходит для письма другу Тому?',
          options: ['Lieber Tom,', 'Liebe Tom,', 'Sehr geehrter Tom,'], answer: 0,
          explain: 'Другу пишут `Lieber` и имя: окончание `-r`, потому что Том — мужчина. `Sehr geehrter` пишут только перед `Herr` и фамилией.', tag: 'register' },
        { id: 's11-d3', type: 'gap', q: 'Вставьте местоимение.',
          text: 'Ich möchte ___ gern zum Kaffee einladen.', hint: 'тебя', answer: [['dich', 'Dich']],
          explain: '`einladen` требует винительного падежа: `dich` — «тебя». `dir` — дательный, «тебе». В письме можно писать и `Dich`.', tag: 'pronomen' },
        { id: 's11-d4', type: 'gap', q: 'Вставьте вспомогательный глагол.',
          text: 'Vielen Dank, dass du am Samstag auf meine Kinder aufgepasst ___.', hint: 'haben', answer: ['hast'],
          explain: 'В придаточном с `dass` спрягаемая часть Perfekt стоит последней: `aufgepasst hast`. Форма для `du` — `hast`.', tag: 'nebensatz' },
        { id: 's11-d5', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Das Geschenk hat mich sehr gut gefallen.', answer: ['Das Geschenk hat mir sehr gut gefallen.'],
          explain: '`gefallen` требует дательного падежа: кому нравится — `mir`, а не `mich`.', tag: 'kasus' },
        { id: 's11-d6', type: 'fix', q: 'Том — ваш друг. Исправьте ошибку.',
          text: 'Lieber Tom, ich hoffe, Sie haben am Samstag Zeit.', answer: ['Lieber Tom, ich hoffe, du hast am Samstag Zeit.', 'Lieber Tom, ich hoffe, Du hast am Samstag Zeit.'],
          explain: 'Другу пишут на `du`, и глагол меняет форму: `du hast`. `Sie` с обращением `Lieber Tom` не сочетается.', tag: 'register' },
        { id: 's11-d7', type: 'build', q: 'Составьте просьбу.',
          ru: 'Позвони мне, пожалуйста, в среду вечером.',
          answer: ['Ruf mich bitte am Mittwochabend an.', 'Ruf mich am Mittwochabend bitte an.', 'Bitte ruf mich am Mittwochabend an.'],
          explain: 'Императив для `du` — `Ruf`, без окончания и без `du`. Приставка `an` уходит в конец, а `anrufen` требует винительного: `mich`.', tag: 'klammer' },
        { id: 's11-d8', type: 'join', q: 'Соедините предложения союзом wenn.',
          parts: ['Ich würde mich sehr freuen.', 'Du kannst mir beim Umzug helfen.'], connector: 'wenn',
          answer: ['Ich würde mich sehr freuen, wenn du mir beim Umzug helfen kannst.', 'Ich würde mich sehr freuen, wenn du mir beim Umzug helfen könntest.', 'Wenn du mir beim Umzug helfen kannst, würde ich mich sehr freuen.', 'Wenn du mir beim Umzug helfen könntest, würde ich mich sehr freuen.', 'Ich würde mich sehr freuen, wenn Du mir beim Umzug helfen kannst.', 'Ich würde mich sehr freuen, wenn Du mir beim Umzug helfen könntest.', 'Wenn Du mir beim Umzug helfen kannst, würde ich mich sehr freuen.', 'Wenn Du mir beim Umzug helfen könntest, würde ich mich sehr freuen.'],
          explain: 'После `wenn` спрягаемый глагол уходит в конец: `helfen kannst` (вежливее — `könntest`). Если придаточное стоит первым, главное начинается с глагола: `würde ich …`.', tag: 'nebensatz' },
        { id: 's11-d9', type: 'gap', q: 'Вставьте глагол в форме просьбы.',
          text: '___ mir bitte, wann du Zeit hast.', hint: 'schreiben, просьба к другу', answer: [['Schreib', 'Schreibe']],
          explain: 'Просьба к другу — императив для `du`: основа глагола без `du` и без `-st`: `Schreib` (или `Schreibe`).', tag: 'verbform' },
        { id: 's11-d10', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Als Dank lade ich dich zum Essen ein.', 'Als Dank ich lade dich zum Essen ein.', 'Als Dank einlade ich dich zum Essen.'], answer: 0,
          explain: '`Als Dank` занимает первое место, глагол `lade` — второе, потом `ich`. Приставка `ein` уходит в конец.', tag: 'verb2' }
    ]
};
