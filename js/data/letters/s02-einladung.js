/**
 * Ситуация 2. Ответ на приглашение.
 *
 * Задание A — дружеское (du): подруга зовёт на вечеринку в новой квартире.
 * Задание B — полуформальное (Sie): учительница зовёт курс к себе в сад.
 */

export default {
    id: 's02',
    order: 2,
    title: 'Приглашение: принять или отказаться',
    short: 'Приглашение',
    register: 'informell',
    intro: 'Вас пригласили на день рождения, новоселье или праздник, и нужно ответить: поблагодарить, согласиться или отказаться с причиной, спросить о деталях. Другу или подруге пишут на «du», тепло и просто; учительнице, соседке или начальнику — на «Sie», вежливо, но без канцелярских формул. Главное — сразу и ясно сказать «да» или «нет».',

    phrases: [
        { de: 'Lieber …,', ru: 'Дорогой …, (другу, на «du»)', use: 'Anrede' },
        { de: 'Liebe Frau …,', ru: 'Дорогая госпожа …, (полуформально: учительнице, соседке)', use: 'Anrede' },
        { de: 'Vielen Dank für deine Einladung!', ru: 'Большое спасибо за твоё приглашение!', use: 'Dank' },
        { de: 'Ich habe mich sehr über Ihre Einladung gefreut.', ru: 'Ваше приглашение меня очень обрадовало.', use: 'Einleitung' },
        { de: 'Ich komme sehr gern.', ru: 'Я с большим удовольствием приду.', use: 'Zusage' },
        { de: 'Leider kann ich nicht kommen, weil …', ru: 'К сожалению, я не смогу прийти, потому что …', use: 'Absage' },
        { de: 'An diesem Tag muss ich arbeiten.', ru: 'В этот день мне нужно работать.', use: 'Grund' },
        { de: 'Ich wünsche dir trotzdem eine schöne Feier.', ru: 'Всё равно желаю тебе хорошего праздника.', use: 'Absage' },
        { de: 'Soll ich etwas mitbringen?', ru: 'Мне что-нибудь принести?', use: 'Frage' },
        { de: 'Wie komme ich am besten zu dir?', ru: 'Как мне лучше до тебя добраться?', use: 'Frage' },
        { de: 'Könnten Sie mir bitte sagen, wann das Fest anfängt?', ru: 'Не могли бы вы сказать, когда начинается праздник?', use: 'Frage' },
        { de: 'Kann ich Ihnen bei der Vorbereitung helfen?', ru: 'Могу я помочь вам с подготовкой?', use: 'Vorschlag' },
        { de: 'Ich bin dann um sieben Uhr bei dir.', ru: 'Тогда я буду у тебя в семь часов.', use: 'Termin' },
        { de: 'Ich freue mich schon auf den Abend!', ru: 'Уже с радостью жду этого вечера!', use: 'Schluss' },
        { de: 'Liebe Grüße', ru: 'Тёплый привет (другу)', use: 'Gruß' },
        { de: 'Herzliche Grüße', ru: 'Сердечный привет (полуформально)', use: 'Gruß' }
    ],

    tasks: [
        {
            id: 's02-a',
            label: 'A',
            situation: 'Ihre Freundin Sabine hat eine neue Wohnung. Am Samstag feiert sie eine Party und lädt Sie ein. Schreiben Sie an Sabine.',
            recipient: 'Sabine',
            register: 'informell',
            points: [
                { de: 'Dank für die Einladung', hint: 'Поблагодарите за приглашение и порадуйтесь новой квартире.',
                  starters: ['Vielen Dank für deine Einladung!', 'Ich habe mich sehr gefreut, dass …'],
                  keys: ['Dank', 'danke', 'Einladung'] },
                { de: 'Zusage oder Absage', hint: 'Скажите, придёте ли вы; если нет — назовите причину.',
                  starters: ['Natürlich komme ich gern.', 'Leider kann ich nicht kommen, weil …'],
                  keys: ['komme', 'gern', 'leider', 'kann nicht'] },
                { de: 'Was Sie mitbringen', hint: 'Предложите, что принести, или спросите, что нужно.',
                  starters: ['Soll ich etwas mitbringen?', 'Ich würde gern … mitbringen.'],
                  keys: ['bring', 'Kuchen', 'Salat', 'Getränk'] },
                { de: 'Weg und Uhrzeit', hint: 'Спросите, как к ней добраться и во сколько начинается вечеринка.',
                  starters: ['Wie komme ich am besten zu dir?', 'Kannst du mir schreiben, wann …?'],
                  keys: ['Weg', 'Adresse', 'Uhr', 'wann', 'Bus'] }
            ],
            model: {
                text: 'Liebe Sabine, vielen Dank für deine Einladung! Ich habe mich sehr gefreut, dass du eine schöne Wohnung gefunden hast. Natürlich komme ich am Samstag sehr gern zu deiner Party. Ich würde gern einen Kuchen mitbringen, weil du Apfelkuchen so magst. Oder soll ich lieber etwas zu trinken mitbringen? Außerdem habe ich eine Frage: Wie komme ich am besten zu dir? Könntest du mir bitte deine neue Adresse schicken und schreiben, um wie viel Uhr die Party anfängt? Dann kann ich im Internet nachsehen, welcher Bus zu dir fährt. Ich freue mich schon auf Samstag! Liebe Grüße Alina',
                ru: 'Дорогая Сабина, большое спасибо за приглашение! Я очень обрадовалась, что ты нашла хорошую квартиру. Конечно, я с большим удовольствием приду в субботу на твою вечеринку. Я бы с радостью принесла пирог, потому что ты так любишь яблочный пирог. Или лучше принести что-нибудь попить? Кроме того, у меня вопрос: как мне лучше до тебя добраться? Не могла бы ты прислать мне свой новый адрес и написать, во сколько начинается вечеринка? Тогда я посмотрю в интернете, какой автобус к тебе идёт. Уже жду субботу! Обнимаю, Алина',
                notes: [
                    'Пункт 1 раскрыт первой же фразой: `vielen Dank für deine Einladung!` — сразу ясно, что это ответ на приглашение.',
                    'Perfekt с возвратным глаголом и придаточным: `Ich habe mich sehr gefreut, dass du … gefunden hast` — частая и нужная конструкция в ответе на приглашение.',
                    'Согласие сказано прямо: `Natürlich komme ich …` — после `Natürlich` глагол на втором месте, подлежащее за ним.',
                    'Вежливость уместна и среди друзей: `Ich würde gern …` и `Könntest du mir bitte …` звучат мягко, но не официально.',
                    'Косвенные вопросы `um wie viel Uhr die Party anfängt` и `welcher Bus zu dir fährt` построены верно: глагол в конце, приставка не отрывается.',
                    'Регистр выдержан от начала до конца: `Liebe Sabine,` — `du`, `deine`, `dir` — `Liebe Grüße`; `du` в письме пишется со строчной буквы.'
                ]
            },
            weak: {
                text: 'Hallo Sabine, danke für Einladung. Ich habe sie gestern gebekommen. Natürlich ich komme zu deine Party am Samstag. Ich bin froh, dass du hast eine neue Wohnung. Ich kann bringen einen Kuchen. Wie ich kann zu dir fahren? Schreib mir bitte, wann beginnt die Party. Bis Samstag! Alina',
                fixes: [
                    { was: 'danke für Einladung', wird: 'danke für deine Einladung', why: 'В русском артикля нет, а в немецком перед существительным он почти всегда нужен: `für die Einladung` или `für deine Einladung`.' },
                    { was: 'gebekommen', wird: 'bekommen', why: 'У глаголов с неотделяемой приставкой (`be-`, `ver-`, `er-`) Partizip II без `ge-`: `bekommen`, `verstanden`, `erzählt`.' },
                    { was: 'Natürlich ich komme', wird: 'Natürlich komme ich', why: 'После `Natürlich` на первом месте сразу идёт глагол, а подлежащее `ich` — за ним.' },
                    { was: 'zu deine Party', wird: 'zu deiner Party', why: 'Предлог `zu` всегда требует Dativ: `die Party` → `zu deiner Party`.' },
                    { was: 'dass du hast eine neue Wohnung', wird: 'dass du eine neue Wohnung hast', why: 'После `dass` спрягаемый глагол уходит в конец придаточного: `… eine neue Wohnung hast`.' },
                    { was: 'Ich kann bringen einen Kuchen', wird: 'Ich kann einen Kuchen mitbringen', why: 'При модальном глаголе инфинитив стоит в конце. «Принести с собой в гости» — `mitbringen`.' },
                    { was: 'Wie ich kann zu dir fahren?', wird: 'Wie kann ich zu dir fahren?', why: 'В вопросе с вопросительным словом глагол идёт сразу за ним: `Wie kann ich …?` Ещё естественнее: `Wie komme ich am besten zu dir?`' },
                    { was: 'wann beginnt die Party', wird: 'wann die Party beginnt', why: 'После `Schreib mir bitte,` вопрос становится придаточным: глагол `beginnt` уходит в конец.' }
                ]
            }
        },
        {
            id: 's02-b',
            label: 'B',
            situation: 'Ihr Deutschkurs ist bald zu Ende. Ihre Kursleiterin, Frau Winkler, lädt alle Teilnehmer am Freitagabend zu einem Grillfest in ihren Garten ein. Schreiben Sie an Frau Winkler.',
            recipient: 'Frau Winkler',
            register: 'halbformell',
            points: [
                { de: 'Antwort auf die Einladung', hint: 'Поблагодарите и скажите, придёте ли вы.',
                  starters: ['Herzlichen Dank für Ihre Einladung!', 'Ich komme sehr gern, denn …'],
                  keys: ['Einladung', 'Dank', 'komme', 'gern'] },
                { de: 'Familie mitbringen?', hint: 'Спросите, можно ли прийти с мужем, женой или детьми.',
                  starters: ['Darf ich vielleicht … mitbringen?'],
                  keys: ['Familie', 'Mann', 'Tochter', 'Sohn', 'Kind'] },
                { de: 'Hilfe bei der Vorbereitung', hint: 'Предложите помочь: испечь что-нибудь, прийти пораньше, расставить столы.',
                  starters: ['Ich würde Ihnen gern bei der Vorbereitung helfen.', 'Wenn Sie möchten, kann ich …'],
                  keys: ['helfen', 'Hilfe', 'Vorbereitung', 'Kuchen', 'bring'] },
                { de: 'Bitte um Wegbeschreibung', hint: 'Попросите описать дорогу или сказать, на каком автобусе ехать.',
                  starters: ['Könnten Sie mir bitte beschreiben, wie ich zu Ihnen komme?'],
                  keys: ['Weg', 'Adresse', 'Bus', 'Bahn', 'Haltestelle', 'beschreib'] }
            ],
            model: {
                text: 'Liebe Frau Winkler, herzlichen Dank für Ihre Einladung zum Grillfest! Ich komme sehr gern, denn der Kurs hat mir viel Spaß gemacht. Darf ich vielleicht meinen Mann und unsere Tochter mitbringen? Die beiden haben schon viel von Ihnen gehört. Außerdem würde ich Ihnen gern bei der Vorbereitung helfen. Wenn Sie möchten, kann ich einen Kuchen backen oder früher kommen und die Tische aufstellen. Leider war ich noch nie in Ihrem Stadtteil. Könnten Sie mir bitte beschreiben, wie ich mit dem Bus zu Ihnen komme? Ich freue mich schon sehr auf den Abend. Herzliche Grüße Darja Belova',
                ru: 'Дорогая госпожа Винклер, сердечное спасибо за приглашение на барбекю! Я с большим удовольствием приду, ведь курс доставил мне много радости. Можно мне взять с собой мужа и нашу дочь? Они оба уже много о вас слышали. Кроме того, я с радостью помогла бы вам с подготовкой. Если хотите, я могу испечь пирог или прийти пораньше и расставить столы. К сожалению, я ещё никогда не была в вашем районе. Не могли бы вы описать, как доехать к вам на автобусе? Я уже очень жду этого вечера. С сердечным приветом, Дарья Белова',
                notes: [
                    'Обращение `Liebe Frau Winkler,` — полуформальное: на «Sie», но теплее, чем `Sehr geehrte`. Для личного приглашения от учительницы это уместно.',
                    'Согласие сразу с причиной: `Ich komme sehr gern, denn …`. После `denn` порядок слов обычный, глагол на втором месте: `der Kurs hat …`.',
                    'Прошедшее время — трижды и без ошибок: Perfekt `hat … gemacht`, `haben … gehört` и Präteritum `war ich noch nie`.',
                    'Вопрос-разрешение `Darf ich … mitbringen?` вежлив и короток: глагол с приставкой стоит в конце целиком.',
                    'Помощь предложена через `würde … gern` и `Wenn Sie möchten, kann ich …`: после придаточного главное предложение начинается сразу с глагола.',
                    'Просьба о дороге — косвенный вопрос `Könnten Sie mir bitte beschreiben, wie ich … komme?` с глаголом в конце.'
                ]
            }
        }
    ],

    drills: [
        { id: 's02-d1', type: 'order', q: 'Расставьте части письма-отказа в правильном порядке.',
          items: ['Lieber Jonas,', 'vielen Dank für deine Einladung zum Abendessen!', 'Leider kann ich am Freitag nicht kommen, weil ich arbeiten muss.', 'Ich wünsche dir trotzdem einen schönen Abend.', 'Liebe Grüße'],
          explain: 'Отказ строится так: обращение, благодарность, отказ с причиной, пожелание, прощание. После обращения с запятой текст продолжается со строчной буквы, а `trotzdem` («всё равно») имеет смысл только после отказа.', tag: 'aufbau' },
        { id: 's02-d2', type: 'choice', q: 'Подруга Сабина пригласила вас на вечеринку. Какое начало ответа правильное?',
          options: ['Liebe Sabine, vielen Dank für deine Einladung!', 'Liebe Sabine, vielen Dank für Ihre Einladung!', 'Sehr geehrte Sabine, vielen Dank für deine Einladung!'], answer: 0,
          explain: 'Подруге пишут на «du»: `Liebe Sabine` и `deine Einladung`. `Ihre` — форма для «Sie», а `Sehr geehrte` с одним именем не употребляют: только с `Frau` и фамилией.', tag: 'register' },
        { id: 's02-d3', type: 'join', q: 'Соедините предложения союзом weil.',
          parts: ['Ich kann leider nicht kommen.', 'Ich muss am Samstag arbeiten.'], connector: 'weil',
          answer: ['Ich kann leider nicht kommen, weil ich am Samstag arbeiten muss.', 'Weil ich am Samstag arbeiten muss, kann ich leider nicht kommen.', 'Leider kann ich nicht kommen, weil ich am Samstag arbeiten muss.'],
          explain: 'После `weil` спрягаемый глагол уходит в самый конец: сначала инфинитив, потом модальный — `arbeiten muss`. Перед `weil` ставится запятая.', tag: 'nebensatz' },
        { id: 's02-d4', type: 'join', q: 'Соедините предложения союзом dass.',
          parts: ['Ich freue mich sehr.', 'Du hast eine schöne Wohnung gefunden.'], connector: 'dass',
          answer: ['Ich freue mich sehr, dass du eine schöne Wohnung gefunden hast.'],
          explain: 'В придаточном с `dass` весь Perfekt уходит в конец, а спрягаемая часть стоит последней: `gefunden hast`.', tag: 'nebensatz' },
        { id: 's02-d5', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Kannst du mir sagen, wann die Party ___?', hint: 'anfangen', answer: ['anfängt'],
          explain: 'В косвенном вопросе после `wann` глагол уходит в конец, а отделяемая приставка не отрывается: `anfängt` пишется слитно.', tag: 'nebensatz' },
        { id: 's02-d6', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Soll ich etwas bringen mit?', answer: ['Soll ich etwas mitbringen?'],
          explain: '`mitbringen` — глагол с отделяемой приставкой. При модальном `soll` он стоит в конце целиком, в инфинитиве: `mitbringen`.', tag: 'klammer' },
        { id: 's02-d7', type: 'build', q: 'Составьте вопрос.',
          ru: 'Можно мне взять с собой в субботу мужа?',
          answer: ['Darf ich am Samstag meinen Mann mitbringen?', 'Darf ich meinen Mann am Samstag mitbringen?'],
          explain: '`Darf ich …?` — вежливый вопрос-разрешение. `mitbringen` при модальном глаголе стоит в конце, `meinen Mann` — Akkusativ.', tag: 'klammer' },
        { id: 's02-d8', type: 'build', q: 'Составьте вежливое предложение.',
          ru: 'Я с удовольствием помог(ла) бы вам с подготовкой.',
          answer: ['Ich würde Ihnen gern bei der Vorbereitung helfen.', 'Ich würde Ihnen bei der Vorbereitung gern helfen.', 'Gern würde ich Ihnen bei der Vorbereitung helfen.', 'Bei der Vorbereitung würde ich Ihnen gern helfen.'],
          explain: '`würde … gern` — вежливое предложение. `helfen` требует Dativ (`Ihnen`), `würde` стоит на втором месте, а инфинитив — в конце.', tag: 'konj2' },
        { id: 's02-d9', type: 'gap', q: 'Вставьте слово в нужной форме.',
          text: 'Am Samstag komme ich gern zu ___ Party.', hint: 'dein', answer: ['deiner'],
          explain: 'После `zu` всегда Dativ. `Party` женского рода: `die Party` → `zu deiner Party`.', tag: 'kasus' },
        { id: 's02-d10', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich komme gern, denn der Kurs hat mir gefallen.', 'Ich komme gern, denn hat mir der Kurs gefallen.', 'Ich komme gern, denn der Kurs mir gefallen hat.'], answer: 0,
          explain: '`denn` не меняет порядок слов: после него обычное предложение, глагол на втором месте (`der Kurs hat …`). Глагол в конце — это правило для `weil`, а не для `denn`.', tag: 'konnektor' }
    ]
};
