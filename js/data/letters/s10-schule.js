/**
 * Ситуация 10. Письмо учительнице: разговор, разрешение, отказ.
 *
 * Полуформальный тон к знакомому адресату: «Liebe Frau …» и «Sie»,
 * просьба о встрече с предложением времени, решение о поездке с причиной.
 */

export default {
    id: 's10',
    order: 10,
    title: 'Школа и детсад: разговор, разрешение, отказ',
    short: 'Письмо в школу',
    register: 'halbformell',
    intro: 'Вы пишете учительнице своего ребёнка: просите о разговоре, разрешаете или не разрешаете поездку, задаёте вопросы. Учительницу вы знаете, поэтому тон полуформальный: на «Sie», обращение `Liebe Frau …,` или `Sehr geehrte Frau …,`. Ясно скажите, о каком ребёнке речь, что вы решили и что хотите узнать.',

    phrases: [
        { de: 'Liebe Frau …,', ru: 'Дорогая госпожа …, — если вы знакомы с учительницей', use: 'Anrede' },
        { de: 'Sehr geehrte Frau …,', ru: 'Уважаемая госпожа …, — официальнее', use: 'Anrede' },
        { de: 'Ich schreibe Ihnen, weil mein Sohn im Moment Probleme in Mathematik hat.', ru: 'Я пишу вам, потому что у сына сейчас проблемы с математикой.', use: 'Einleitung' },
        { de: 'Vielen Dank für die Informationen zur Klassenfahrt.', ru: 'Большое спасибо за информацию о поездке класса.', use: 'Einleitung' },
        { de: 'Er sagt, dass er die neuen Aufgaben nicht versteht.', ru: 'Он говорит, что не понимает новые задания.', use: 'Grund' },
        { de: 'Ich würde gern mit Ihnen darüber sprechen.', ru: 'Я хотел(а) бы поговорить с вами об этом.', use: 'Bitte' },
        { de: 'Hätten Sie nächste Woche Zeit für ein kurzes Gespräch?', ru: 'Не найдётся ли у вас на следующей неделе время для короткого разговора?', use: 'Termin' },
        { de: 'Am Dienstag kann ich ab 14 Uhr in die Schule kommen.', ru: 'Во вторник я могу прийти в школу с 14 часов.', use: 'Vorschlag' },
        { de: 'Wie kann ich meinem Sohn zu Hause helfen?', ru: 'Как я могу помочь сыну дома?', use: 'Frage' },
        { de: 'Meine Tochter darf an der Klassenfahrt teilnehmen.', ru: 'Моей дочери можно участвовать в поездке класса.', use: 'Zusage' },
        { de: 'Leider kann mein Sohn nicht mitfahren, weil …', ru: 'К сожалению, мой сын не сможет поехать, потому что …', use: 'Absage' },
        { de: 'Könnten Sie mir bitte sagen, wie viel die Fahrt kostet?', ru: 'Не могли бы вы сказать, сколько стоит поездка?', use: 'Frage' },
        { de: 'Was muss meine Tochter mitnehmen?', ru: 'Что дочери нужно взять с собой?', use: 'Frage' },
        { de: 'Vielen Dank für Ihre Hilfe.', ru: 'Большое спасибо за помощь.', use: 'Dank' },
        { de: 'Viele Grüße', ru: 'Всего доброго — после `Liebe Frau …`', use: 'Gruß' },
        { de: 'Mit freundlichen Grüßen', ru: 'С уважением', use: 'Gruß' }
    ],

    tasks: [
        {
            id: 's10-a',
            label: 'A',
            situation: 'Ihr Sohn Timur geht in die fünfte Klasse. Im Moment hat er große Probleme in Mathematik. Deshalb schreiben Sie an seine Klassenlehrerin, Frau Lorenz.',
            recipient: 'Frau Lorenz',
            register: 'halbformell',
            points: [
                { de: 'Grund für Ihr Schreiben', hint: 'Скажите, по какому предмету сын отстаёт и в чём это видно.',
                  starters: ['Ich schreibe Ihnen, weil …', 'In der letzten Klassenarbeit …'],
                  keys: ['Mathe', 'Problem', 'Note'] },
                { de: 'Bitte um ein Gespräch', hint: 'Вежливо попросите учительницу о встрече.',
                  starters: ['Ich würde gern mit Ihnen … sprechen.', 'Hätten Sie Zeit für …?'],
                  keys: ['Gespräch', 'sprechen', 'treffen'] },
                { de: 'Terminvorschlag', hint: 'Предложите день и время, когда вы можете прийти.',
                  starters: ['Am … kann ich ab … Uhr …'],
                  keys: ['Uhr', 'Termin', 'Dienstag', 'Donnerstag', 'Zeit'] },
                { de: 'Hilfe zu Hause', hint: 'Спросите, как вы можете помочь сыну дома.',
                  starters: ['Außerdem möchte ich wissen, wie …', 'Wie kann ich … helfen?'],
                  keys: ['zu Hause', 'helfen', 'üben'] }
            ],
            model: {
                text: 'Liebe Frau Lorenz, ich schreibe Ihnen, weil Timur im Moment große Probleme in Mathematik hat. In der letzten Klassenarbeit hat er eine schlechte Note bekommen. Er sagt, dass er die neuen Aufgaben nicht versteht. Ich würde gern mit Ihnen darüber sprechen. Hätten Sie vielleicht nächste Woche Zeit für ein kurzes Gespräch? Am Dienstag und am Donnerstag kann ich ab 14 Uhr in die Schule kommen. Außerdem möchte ich wissen, wie ich Timur zu Hause helfen kann. Sollen wir jeden Tag zusammen üben? Vielen Dank für Ihre Hilfe. Viele Grüße Tatjana Belowa',
                ru: 'Дорогая госпожа Лоренц, я пишу вам, потому что у Тимура сейчас большие проблемы с математикой. За последнюю контрольную он получил плохую оценку. Он говорит, что не понимает новые задания. Я бы хотела поговорить с вами об этом. Не найдётся ли у вас на следующей неделе время для короткого разговора? Во вторник и в четверг я могу прийти в школу с 14 часов. Кроме того, я хотела бы узнать, как я могу помочь Тимуру дома. Нам заниматься вместе каждый день? Большое спасибо за помощь. Всего доброго, Татьяна Белова',
                notes: [
                    'Обращение `Liebe Frau Lorenz,` и прощание `Viele Grüße` подходят друг к другу: учительницу вы знаете, тон тёплый, но на «Sie».',
                    'Пункт 1 раскрыт конкретно: предмет, плохая оценка и слова сына — придаточные с `weil` и `dass`, глагол в конце.',
                    'Perfekt `hat … bekommen` — рассказ о контрольной, которая уже прошла.',
                    'Просьба о разговоре вежливая дважды: `Ich würde gern …` и `Hätten Sie vielleicht … Zeit …?` — Konjunktiv II.',
                    'Время предложено точно — два дня и час (`ab 14 Uhr`): учительнице остаётся только выбрать.',
                    '`Außerdem möchte ich wissen, wie ich Timur … helfen kann` — косвенный вопрос, глагол `kann` в конце; `helfen` требует Dativ («помочь кому»).'
                ]
            },
            weak: {
                text: 'Liebe Frau Lorenz, ich schreibe, weil mein Sohn Timur hat Probleme in Mathematik. Er hat bekommen schlechte Note. Ich will sprechen mit Ihnen. Haben Sie in Dienstag um 14 Uhr Zeit? Was ich kann machen zu Hause? Wir können zusammen lernen jeden Tag. Ich danke Sie. Viele Grüße Tatjana Belowa',
                fixes: [
                    { was: 'weil mein Sohn Timur hat Probleme in Mathematik', wird: 'weil mein Sohn Timur Probleme in Mathematik hat', why: 'После `weil` спрягаемый глагол `hat` уходит в самый конец придаточного.' },
                    { was: 'Er hat bekommen schlechte Note', wird: 'Er hat eine schlechte Note bekommen', why: 'Partizip II `bekommen` стоит в конце, а перед `schlechte Note` нужен артикль: `eine schlechte Note`.' },
                    { was: 'Ich will sprechen mit Ihnen', wird: 'Ich würde gern mit Ihnen sprechen', why: 'Инфинитив `sprechen` — в конце. А `Ich will` звучит как требование; учительнице вежливее написать `Ich würde gern …`.' },
                    { was: 'in Dienstag', wird: 'am Dienstag', why: 'С днями недели — `am`. Русское «во вторник» подталкивает к `in`, но так не говорят.' },
                    { was: 'Was ich kann machen zu Hause?', wird: 'Was kann ich zu Hause machen?', why: 'В вопросе глагол `kann` идёт сразу после `Was`, а инфинитив `machen` — в конце.' },
                    { was: 'Wir können zusammen lernen jeden Tag', wird: 'Wir können jeden Tag zusammen lernen', why: 'Инфинитив `lernen` — последнее слово; время `jeden Tag` стоит внутри рамки, перед ним.' },
                    { was: 'Ich danke Sie', wird: 'Ich danke Ihnen', why: '`danken` требует Dativ: `Ihnen`, а не `Sie`. Ещё проще: `Vielen Dank für Ihre Hilfe.`' }
                ]
            }
        },
        {
            id: 's10-b',
            label: 'B',
            situation: 'Ihre Tochter Sofia geht in die vierte Klasse. Im Mai fährt die Klasse für drei Tage an die Ostsee. Schreiben Sie an die Klassenlehrerin, Frau Hartmann.',
            recipient: 'Frau Hartmann',
            register: 'halbformell',
            points: [
                { de: 'Ihre Entscheidung', hint: 'Скажите, разрешаете ли вы дочери поехать.',
                  starters: ['Sofia darf …', 'Leider kann Sofia nicht …'],
                  keys: ['darf', 'mitfahren', 'teilnehmen', 'einverstanden'] },
                { de: 'Grund für die Entscheidung', hint: 'Объясните, почему вы так решили.',
                  starters: ['Sie freut sich sehr, weil …', '…, denn …'],
                  keys: ['weil', 'denn', 'freut'] },
                { de: 'Kosten und Gepäck', hint: 'Спросите, сколько стоит поездка и что дочь должна взять с собой.',
                  starters: ['Könnten Sie mir bitte sagen, wie viel …', 'Was muss Sofia mitnehmen?'],
                  keys: ['kost', 'Geld', 'Euro', 'mitnehmen'] },
                { de: 'Fragen zur Organisation', hint: 'Спросите, как дети поедут и кто будет за ними присматривать.',
                  starters: ['Fahren die Kinder mit …?', 'Es ist mir wichtig, dass …'],
                  keys: ['Bus', 'Zug', 'Organisation', 'Lehrer', 'aufpass'] }
            ],
            model: {
                text: 'Liebe Frau Hartmann, vielen Dank für die Informationen zur Klassenfahrt. Sofia darf natürlich mitfahren. Sie freut sich sehr, weil sie noch nie am Meer war. Könnten Sie mir bitte sagen, wie viel die Fahrt kostet und bis wann ich das Geld überweisen soll? Außerdem möchte ich wissen, was Sofia mitnehmen muss. Braucht sie zum Beispiel einen Schlafsack? Ich habe auch eine Frage zur Organisation: Fahren die Kinder mit dem Bus oder mit dem Zug? Sofia kann noch nicht gut schwimmen. Deshalb ist es mir wichtig, dass beim Baden immer ein Lehrer aufpasst. Viele Grüße Galina Sorokina',
                ru: 'Дорогая госпожа Хартманн, большое спасибо за информацию о поездке класса. Софии, конечно, можно поехать. Она очень радуется, потому что ещё ни разу не была на море. Не могли бы вы сказать, сколько стоит поездка и до какого числа я должна перевести деньги? Кроме того, я хотела бы узнать, что Софии нужно взять с собой. Нужен ли ей, например, спальный мешок? У меня есть ещё вопрос об организации: дети поедут на автобусе или на поезде? София пока плохо плавает. Поэтому мне важно, чтобы во время купания за детьми всегда присматривал учитель. Всего доброго, Галина Сорокина',
                notes: [
                    'Решение сказано прямо во втором предложении — `Sofia darf natürlich mitfahren`: пункт 1 нельзя не заметить.',
                    'Причина — придаточное с `weil` и Präteritum `war`: `weil sie noch nie am Meer war`.',
                    'Два вопроса о деньгах собраны в одну вежливую просьбу: `Könnten Sie mir bitte sagen, wie viel … kostet und bis wann …?` — оба глагола в конце.',
                    '`Außerdem` и `auch` ведут от вопроса к вопросу, поэтому письмо читается как связный текст, а не как анкета.',
                    'Вопрос об организации подкреплён причиной: `Sofia kann noch nicht gut schwimmen. Deshalb ist es mir wichtig, …` — после `Deshalb` сразу глагол.',
                    'В `dass beim Baden immer ein Lehrer aufpasst` отделяемый глагол в придаточном пишется слитно и стоит в конце.'
                ]
            }
        }
    ],

    drills: [
        { id: 's10-d1', type: 'order', q: 'Расставьте части письма в правильном порядке.',
          items: ['Liebe Frau Lorenz,', 'ich schreibe Ihnen, weil mein Sohn Probleme in Mathematik hat.', 'Ich würde gern mit Ihnen darüber sprechen.', 'Am Dienstag kann ich ab 14 Uhr in die Schule kommen.', 'Vielen Dank für Ihre Hilfe.', 'Viele Grüße'],
          explain: 'Сначала обращение и причина, потом просьба о разговоре (`darüber` отсылает к проблеме), затем время, благодарность и прощание.', tag: 'aufbau' },
        { id: 's10-d2', type: 'choice', q: 'Как правильно обратиться к учительнице, которую вы хорошо знаете?',
          options: ['Liebe Frau Lorenz,', 'Lieber Frau Lorenz,', 'Liebe Lorenz,'], answer: 0,
          explain: 'К женщине пишут `Liebe` (с `-e`), к мужчине — `Lieber`. Фамилию без `Frau` или `Herr` в письме учителю не пишут.', tag: 'register' },
        { id: 's10-d3', type: 'gap', q: 'Вставьте предлог.',
          text: 'Hätten Sie ___ Donnerstag um 15 Uhr Zeit?', hint: '«в» (четверг)', answer: ['am'],
          explain: 'С днями недели — `am`: `am Donnerstag`. Русское «в четверг» подталкивает к `in`, но с днями недели его не употребляют.', tag: 'zeit' },
        { id: 's10-d4', type: 'join', q: 'Соедините предложения союзом dass.',
          parts: ['Timur sagt.', 'Er versteht die neuen Aufgaben nicht.'], connector: 'dass',
          answer: ['Timur sagt, dass er die neuen Aufgaben nicht versteht.'],
          explain: 'После `dass` глагол `versteht` уходит в конец, `nicht` стоит перед ним. Перед `dass` — запятая.', tag: 'nebensatz' },
        { id: 's10-d5', type: 'join', q: 'Соедините предложения союзом wenn.',
          parts: ['Sofia darf mitfahren.', 'Ein Lehrer passt beim Baden auf.'], connector: 'wenn',
          answer: ['Sofia darf mitfahren, wenn ein Lehrer beim Baden aufpasst.', 'Sofia darf mitfahren, wenn beim Baden ein Lehrer aufpasst.', 'Wenn ein Lehrer beim Baden aufpasst, darf Sofia mitfahren.', 'Wenn beim Baden ein Lehrer aufpasst, darf Sofia mitfahren.'],
          explain: 'В придаточном отделяемый глагол пишется слитно и стоит последним: `aufpasst`. Если придаточное впереди, главное начинается с глагола: `…, darf Sofia mitfahren`.', tag: 'nebensatz' },
        { id: 's10-d6', type: 'gap', q: 'Вставьте глагол в прошедшем времени.',
          text: 'Sofia freut sich sehr, weil sie noch nie am Meer ___.', hint: 'sein', answer: [['war', 'gewesen ist']],
          explain: 'Для `sein` в рассказе о прошлом обычно берут Präteritum: `war`. В придаточном с `weil` он стоит в конце.', tag: 'praeteritum' },
        { id: 's10-d7', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Wenn Sie keine Zeit haben, rufe ich Ihnen am Montag an.', answer: ['Wenn Sie keine Zeit haben, rufe ich Sie am Montag an.'],
          explain: 'По-русски «позвоню вам» — кому?, а `anrufen` требует Akkusativ: `Sie anrufen`, а не `Ihnen`.', tag: 'kasus' },
        { id: 's10-d8', type: 'build', q: 'Составьте вежливый вопрос.',
          ru: 'Не найдётся ли у вас на следующей неделе время для короткого разговора?',
          answer: ['Hätten Sie nächste Woche Zeit für ein kurzes Gespräch?', 'Hätten Sie nächste Woche für ein kurzes Gespräch Zeit?', 'Hätten Sie für ein kurzes Gespräch nächste Woche Zeit?'],
          explain: '`Hätten Sie … Zeit` — вежливый вопрос с Konjunktiv II от `haben`. Глагол стоит первым, потому что это вопрос «да или нет».', tag: 'konj2' },
        { id: 's10-d9', type: 'build', q: 'Составьте предложение.',
          ru: 'Моей дочери можно участвовать в поездке класса.',
          answer: ['Meine Tochter darf an der Klassenfahrt teilnehmen.', 'An der Klassenfahrt darf meine Tochter teilnehmen.'],
          explain: '`darf` — «можно, разрешено». `teilnehmen an` + Dativ: `an der Klassenfahrt`, а инфинитив `teilnehmen` — в конце.', tag: 'verbprep' },
        { id: 's10-d10', type: 'choice', q: 'Какое предложение с отказом правильное?',
          options: ['Leider kann mein Sohn nicht mitfahren, weil er krank ist.', 'Leider mein Sohn kann nicht mitfahren, weil er krank ist.', 'Leider kann mein Sohn nicht mitfahren, weil er ist krank.'], answer: 0,
          explain: 'После `Leider` сразу идёт глагол `kann`, а в придаточном с `weil` глагол `ist` стоит в конце. В остальных вариантах нарушено одно из этих правил.', tag: 'nebensatz' }
    ]
};
