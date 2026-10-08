/**
 * Ситуация 12. Работа и практика: запрос в фирму и просьба к начальнику.
 *
 * Два письма на «Sie»: формальное в незнакомую фирму и полуформальное
 * начальнику. Учит коротко представиться и просить, а не требовать.
 */

export default {
    id: 's12',
    order: 12,
    title: 'Работа и практика: запрос и просьба к начальнику',
    short: 'Работа и практика',
    register: 'formell',
    intro: 'Вы пишете в фирму, где хотите пройти практику или получить место, или просите начальника изменить график. Это письма на «Sie»: в фирму — формально (`Sehr geehrte Damen und Herren,`), начальнику — полуформально. Коротко скажите, кто вы и чего хотите, и вежливо попросите о разговоре или об ответе — полное резюме не нужно.',

    phrases: [
        { de: 'Sehr geehrte Damen und Herren,', ru: 'Уважаемые дамы и господа,', use: 'Anrede' },
        { de: 'Sehr geehrter Herr …,', ru: 'Уважаемый господин …,', use: 'Anrede' },
        { de: 'Ich habe Ihre Anzeige im Internet gelesen.', ru: 'Я прочитал(а) ваше объявление в интернете.', use: 'Einleitung' },
        { de: 'Ich interessiere mich für das Praktikum in Ihrer Firma.', ru: 'Меня интересует практика в вашей фирме.', use: 'Einleitung' },
        { de: 'Ich schreibe Ihnen, weil ich meine Arbeitszeit ändern möchte.', ru: 'Я пишу вам, потому что хотел(а) бы изменить своё рабочее время.', use: 'Einleitung' },
        { de: 'Ich bin … Jahre alt und lebe seit … Jahren in Deutschland.', ru: 'Мне … лет, и я живу в Германии уже … лет.', use: 'Information' },
        { de: 'In meiner Heimat habe ich als … gearbeitet.', ru: 'На родине я работал(а) …', use: 'Information' },
        { de: 'Ich habe Erfahrung im Verkauf.', ru: 'У меня есть опыт работы в продажах.', use: 'Information' },
        { de: 'Ich arbeite gern im Team und lerne schnell.', ru: 'Я люблю работать в команде и быстро учусь.', use: 'Information' },
        { de: 'Ich würde mich über ein persönliches Gespräch sehr freuen.', ru: 'Я был(а) бы очень рад(а) личной беседе.', use: 'Bitte' },
        { de: 'Wäre es möglich, dass ich …?', ru: 'Нельзя ли мне …?', use: 'Bitte' },
        { de: 'Dafür könnte ich am Nachmittag länger arbeiten.', ru: 'Взамен я мог(ла) бы дольше работать во второй половине дня.', use: 'Vorschlag' },
        { de: 'Könnten Sie mir bitte bis Freitag antworten?', ru: 'Не могли бы вы ответить мне до пятницы?', use: 'Bitte' },
        { de: 'Vielen Dank für Ihr Verständnis.', ru: 'Большое спасибо за понимание.', use: 'Dank' },
        { de: 'Ich freue mich auf Ihre Antwort.', ru: 'Буду рад(а) вашему ответу.', use: 'Schluss' },
        { de: 'Mit freundlichen Grüßen', ru: 'С уважением', use: 'Gruß' }
    ],

    tasks: [
        {
            id: 's12-a',
            label: 'A',
            situation: 'Die Bäckerei Hoffmann sucht Praktikanten für den Verkauf. Sie interessieren sich für das Praktikum. Deshalb schreiben Sie an die Bäckerei.',
            recipient: 'Bäckerei Hoffmann',
            register: 'formell',
            points: [
                { de: 'Grund für Ihr Schreiben', hint: 'Скажите, где вы увидели объявление и что вас интересует практика.',
                  starters: ['Ich habe Ihre Anzeige … gelesen.', 'Ich interessiere mich für …'],
                  keys: ['Anzeige', 'Praktikum', 'interessiere'] },
                { de: 'Angaben zu Ihrer Person', hint: 'Коротко представьтесь: сколько вам лет, давно ли вы в Германии, чем заняты сейчас.',
                  starters: ['Ich bin … Jahre alt und lebe seit …', 'Zurzeit besuche ich …'],
                  keys: ['Jahre alt', 'lebe', 'wohne', 'Deutschkurs', 'Name'] },
                { de: 'Erfahrung und Kenntnisse', hint: 'Назовите в общих словах ваш опыт работы и что вы умеете.',
                  starters: ['In meiner Heimat habe ich als … gearbeitet.', 'Ich habe Erfahrung mit …'],
                  keys: ['gearbeitet', 'Erfahrung', 'Kenntnisse'] },
                { de: 'Bitte um ein Gespräch', hint: 'Вежливо попросите пригласить вас на собеседование.',
                  starters: ['Ich würde mich sehr freuen, wenn Sie mich …', 'Ich würde mich über ein Gespräch sehr freuen.'],
                  keys: ['Gespräch', 'Termin', 'einladen'] }
            ],
            model: {
                text: 'Sehr geehrte Damen und Herren, ich habe gestern Ihre Anzeige im Internet gelesen und interessiere mich sehr für das Praktikum im Verkauf. Mein Name ist Alina Bondar. Ich bin 32 Jahre alt und lebe seit zwei Jahren in Deutschland. Zurzeit besuche ich einen Deutschkurs. In meiner Heimat habe ich vier Jahre als Verkäuferin in einem Supermarkt gearbeitet. Deshalb habe ich schon Erfahrung mit Kunden und an der Kasse. Die Arbeit hat mir viel Spaß gemacht, weil ich gern mit Menschen spreche. Ich würde mich sehr freuen, wenn Sie mich zu einem Vorstellungsgespräch einladen. Mit freundlichen Grüßen Alina Bondar',
                ru: 'Уважаемые дамы и господа, вчера я прочитала ваше объявление в интернете, и меня очень интересует практика в продажах. Меня зовут Алина Бондарь. Мне 32 года, и я живу в Германии два года. Сейчас я хожу на курс немецкого языка. На родине я четыре года работала продавщицей в супермаркете. Поэтому у меня уже есть опыт работы с покупателями и на кассе. Работа мне очень нравилась, потому что я люблю общаться с людьми. Я была бы очень рада, если бы вы пригласили меня на собеседование. С уважением, Алина Бондарь',
                notes: [
                    'Первое предложение сразу говорит, где вы увидели объявление и что вас интересует, — пункт 1 раскрыт.',
                    'О себе — коротко и по делу: возраст, сколько вы в Германии, чем заняты сейчас. Полное резюме в письме не нужно.',
                    'Опыт связан с выводом: `Deshalb habe ich schon Erfahrung …` — инверсия после `Deshalb` и логика вместо списка.',
                    'Perfekt (`habe … gelesen`, `habe … gearbeitet`, `hat … gemacht`) и придаточные с `weil` и `wenn` — всё, что ждут от B1.',
                    'Просьба о собеседовании вежливая и без давления: `Ich würde mich sehr freuen, wenn Sie mich … einladen`.',
                    'Имя адресата неизвестно, поэтому обращение `Sehr geehrte Damen und Herren,`, а в конце — `Mit freundlichen Grüßen` и полное имя.'
                ]
            },
            weak: {
                text: 'Hallo, ich habe gelesen Ihre Anzeige im Internet. Ich will machen Praktikum in Ihre Bäckerei. Ich bin 32 Jahre alt und wohne in Deutschland seit zwei Jahre. In Heimat ich habe als Verkäuferin gearbeitet. Ich kann gut mit Kunden sprechen. Bitte schreiben Sie mir wann ich kommen kann. Tschüss Alina',
                fixes: [
                    { was: 'Hallo,', wird: 'Sehr geehrte Damen und Herren,', why: 'В фирму пишут формально. `Hallo` — для друзей, а если имени адресата нет, нужна формула `Sehr geehrte Damen und Herren,`.' },
                    { was: 'ich habe gelesen Ihre Anzeige', wird: 'ich habe Ihre Anzeige gelesen', why: 'Partizip II `gelesen` стоит в конце, всё остальное — между `habe` и `gelesen`.' },
                    { was: 'Ich will machen Praktikum', wird: 'Ich möchte gern ein Praktikum machen', why: '`will` в письме фирме звучит как требование — лучше `möchte gern`. Инфинитив `machen` уходит в конец, а перед `Praktikum` нужен артикль `ein`.' },
                    { was: 'in Ihre Bäckerei', wird: 'in Ihrer Bäckerei', why: 'Где? — дательный падеж: `in Ihrer Bäckerei`. Винительный `in Ihre` отвечает на вопрос «куда?».' },
                    { was: 'in Deutschland seit zwei Jahre', wird: 'seit zwei Jahren in Deutschland', why: 'После `seit` — дательный падеж, во множественном числе с `-n`: `seit zwei Jahren`. И время обычно стоит перед местом.' },
                    { was: 'In Heimat ich habe', wird: 'In meiner Heimat habe ich', why: 'По-русски «на родине» обходится без «моей», по-немецки нужно `meiner`. А после `In meiner Heimat` глагол `habe` стоит вторым, перед `ich`.' },
                    { was: 'schreiben Sie mir wann', wird: 'schreiben Sie mir, wann', why: 'Перед косвенным вопросом с `wann` ставится запятая. Порядок слов в нём уже верный: `kann` стоит в конце.' },
                    { was: 'Tschüss Alina', wird: 'Mit freundlichen Grüßen Alina Bondar', why: '`Tschüss` — прощание для друзей. В письме фирме — `Mit freundlichen Grüßen` и полное имя.' }
                ]
            }
        },
        {
            id: 's12-b',
            label: 'B',
            situation: 'Sie arbeiten in einem Lager und fangen jeden Tag um 7 Uhr an. Ab November geht Ihre Tochter in den Kindergarten. Deshalb schreiben Sie an Ihren Chef, Herrn Krüger.',
            recipient: 'Herr Krüger',
            register: 'halbformell',
            points: [
                { de: 'Neue Arbeitszeit', hint: 'Скажите, что с ноября вы хотите начинать работу позже.',
                  starters: ['Ich schreibe Ihnen, weil ich meine Arbeitszeit ändern möchte.', 'Ab November möchte ich gern …'],
                  keys: ['Arbeitszeit', 'ändern', 'anfangen', 'beginne'] },
                { de: 'Grund', hint: 'Объясните причину: дочь идёт в детский сад, а он открывается только в 7:30.',
                  starters: ['Meine Tochter geht ab … in den Kindergarten.', 'Der Kindergarten öffnet erst um …'],
                  keys: ['Tochter', 'Kindergarten'] },
                { de: 'Ihr Vorschlag', hint: 'Предложите, как отработать это время: например, оставаться на час дольше.',
                  starters: ['Dafür könnte ich …', 'Wäre es möglich, dass ich …?'],
                  keys: ['könnte', 'länger', 'dafür', 'Stunde'] },
                { de: 'Bitte um Antwort', hint: 'Попросите ответить к определённому сроку.',
                  starters: ['Könnten Sie mir bitte bis … antworten?', 'Ich freue mich auf Ihre Antwort.'],
                  keys: ['antworten', 'Antwort', 'Bescheid', 'Gespräch'] }
            ],
            model: {
                text: 'Sehr geehrter Herr Krüger, ich schreibe Ihnen, weil ich ab November meine Arbeitszeit ändern möchte. Meine Tochter geht dann in den Kindergarten. Leider öffnet der Kindergarten erst um 7:30 Uhr, deshalb kann ich nicht mehr um 7 Uhr anfangen. Wäre es möglich, dass ich jeden Tag erst um 8 Uhr beginne? Dafür könnte ich am Nachmittag eine Stunde länger arbeiten. Wenn es nötig ist, kann ich auch samstags arbeiten. Ich habe schon mit meinen Kollegen gesprochen. Alle sind einverstanden. Könnten Sie mir bitte bis Ende Oktober antworten? Vielen Dank für Ihr Verständnis. Freundliche Grüße Viktor Wolkow',
                ru: 'Уважаемый господин Крюгер, я пишу вам, потому что с ноября хотел бы изменить своё рабочее время. Моя дочь тогда пойдёт в детский сад. К сожалению, детский сад открывается только в 7:30, поэтому я больше не смогу начинать в 7 часов. Можно ли мне каждый день начинать только в 8 часов? Взамен я мог бы работать на час дольше во второй половине дня. Если нужно, я могу работать и по субботам. Я уже поговорил с коллегами. Все согласны. Не могли бы вы ответить мне до конца октября? Большое спасибо за понимание. С уважением, Виктор Волков',
                notes: [
                    'Цель письма названа в первом предложении: `ich schreibe Ihnen, weil ich … ändern möchte`.',
                    'Причина короткая и конкретная, а `deshalb` после запятой с инверсией (`deshalb kann ich`) связывает её со следствием.',
                    'Просьба смягчена Konjunktiv II: `Wäre es möglich, dass …`, `Dafür könnte ich …`, `Könnten Sie mir bitte …` — вежливо, но без лишних слов.',
                    'Компенсация конкретна: на час дольше во второй половине дня и при необходимости по субботам. На готовое предложение начальнику легче согласиться.',
                    'Тон полуформальный: `Sehr geehrter Herr Krüger,` и чуть менее строгое `Freundliche Grüße`; все `Sie`, `Ihnen`, `Ihr` — с заглавной.',
                    'Perfekt `habe … gesprochen` и придаточные с `weil`, `dass`, `wenn` показывают уровень B1.'
                ]
            }
        }
    ],

    drills: [
        { id: 's12-d1', type: 'order', q: 'Расставьте части письма в фирму по порядку.',
          items: ['Sehr geehrte Damen und Herren,', 'ich habe Ihre Anzeige in der Zeitung gelesen.', 'Ich interessiere mich für die Stelle als Fahrer.', 'In meiner Heimat habe ich fünf Jahre als Fahrer gearbeitet.', 'Ich würde mich über ein Gespräch sehr freuen.', 'Mit freundlichen Grüßen'],
          explain: 'Обращение, откуда вы знаете о месте, что вас интересует, ваш опыт, просьба о разговоре, прощание.', tag: 'aufbau' },
        { id: 's12-d2', type: 'choice', q: 'Вы не знаете, кто в фирме прочитает ваше письмо. Какое обращение выбрать?',
          options: ['Sehr geehrte Damen und Herren,', 'Hallo zusammen,', 'Liebe Kollegen,'], answer: 0,
          explain: 'Если имени нет, пишут `Sehr geehrte Damen und Herren,`. `Hallo zusammen` и `Liebe Kollegen` — для людей, которых вы знаете.', tag: 'register' },
        { id: 's12-d3', type: 'gap', q: 'Вставьте предлог.',
          text: 'Ich interessiere mich ___ das Praktikum in Ihrer Firma.', hint: 'предлог', answer: ['für'],
          explain: 'Глагол `sich interessieren` требует предлога `für` с винительным падежом: `für das Praktikum`.', tag: 'verbprep' },
        { id: 's12-d4', type: 'gap', q: 'Вставьте слово в нужной форме.',
          text: 'Ich lebe seit drei ___ in Deutschland.', hint: 'Jahr, множественное число', answer: ['Jahren'],
          explain: 'После `seit` — дательный падеж. Во множественном числе в дательном к существительному добавляется `-n`: `seit drei Jahren`.', tag: 'praeposition' },
        { id: 's12-d5', type: 'gap', q: 'Вставьте вспомогательный глагол.',
          text: 'In meiner Heimat ___ ich als Krankenschwester gearbeitet.', hint: 'haben', answer: ['habe'],
          explain: 'Perfekt от `arbeiten` — с `haben`. После `In meiner Heimat` глагол `habe` стоит вторым, а `ich` — за ним.', tag: 'perfekt' },
        { id: 's12-d6', type: 'gap', q: 'Вставьте местоимение.',
          text: 'Vielen Dank für ___ Verständnis.', hint: 'ваше, вежливо', answer: ['Ihr'],
          explain: '`Verständnis` — среднего рода, после `für` винительный: `Ihr Verständnis`. Вежливое «ваше» — с заглавной; `ihr` с маленькой значит «её» или «их».', tag: 'pronomen' },
        { id: 's12-d7', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Könnten Sie mir bitte sagen, wann ist das Gespräch?', answer: ['Könnten Sie mir bitte sagen, wann das Gespräch ist?'],
          explain: 'После `sagen, wann …` вопрос становится придаточным: глагол `ist` уходит в конец.', tag: 'nebensatz' },
        { id: 's12-d8', type: 'choice', q: 'Какая просьба к начальнику звучит вежливо?',
          options: ['Wäre es möglich, dass ich ab November später anfange?', 'Ich will ab November später anfangen.', 'Ab November fange ich später an, okay?'], answer: 0,
          explain: '`Wäre es möglich, dass …?` — вежливая просьба в Konjunktiv II. `Ich will` и `okay?` ставят начальника перед фактом.', tag: 'konj2' },
        { id: 's12-d9', type: 'build', q: 'Составьте предложение.',
          ru: 'Взамен я мог бы работать дольше во второй половине дня.',
          answer: ['Dafür könnte ich am Nachmittag länger arbeiten.', 'Ich könnte dafür am Nachmittag länger arbeiten.', 'Am Nachmittag könnte ich dafür länger arbeiten.', 'Ich könnte am Nachmittag dafür länger arbeiten.'],
          explain: '`könnte` — вежливое «мог бы», стоит на втором месте, а `arbeiten` — в конце. `Dafür` («взамен») можно поставить первым.', tag: 'konj2' },
        { id: 's12-d10', type: 'join', q: 'Соедините предложения союзом weil.',
          parts: ['Ich möchte meine Arbeitszeit ändern.', 'Meine Tochter geht ab November in den Kindergarten.'], connector: 'weil',
          answer: ['Ich möchte meine Arbeitszeit ändern, weil meine Tochter ab November in den Kindergarten geht.', 'Weil meine Tochter ab November in den Kindergarten geht, möchte ich meine Arbeitszeit ändern.'],
          explain: 'После `weil` глагол `geht` уходит в конец придаточного. Если придаточное стоит первым, главное начинается с глагола: `möchte ich …`.', tag: 'nebensatz' }
    ]
};
