/**
 * Ситуация 7. Работа: больничный, отпуск, обмен сменой.
 *
 * Два задания в стиле DTZ: сообщение начальнице о болезни и просьба
 * начальнику о выходном с обменом сменой. Тон вежливый, на «Sie», без канцелярита.
 */

export default {
    id: 's07',
    order: 7,
    title: 'Работа: больничный, отпуск, обмен сменой',
    short: 'Больничный и смены',
    register: 'halbformell',
    intro: 'Вы пишете начальнику или начальнице: заболели, просите выходной или хотите поменяться сменой с коллегой. Тон вежливый, на «Sie», но не канцелярский: коротко сообщите факты, подумайте о работе (кто вас заменит, как отработать время) и попросите ответить. Из письма должно быть видно, что работа без вас не встанет.',

    phrases: [
        { de: 'Sehr geehrter Herr …,', ru: 'Уважаемый господин …,', use: 'Anrede' },
        { de: 'Liebe Frau …,', ru: 'Дорогая госпожа …, — начальнице, с которой вы давно работаете и общаетесь на «Sie»', use: 'Anrede' },
        { de: 'Hallo …,', ru: 'Привет, …, — коллеге, с которым вы на «ты»', use: 'Anrede' },
        { de: 'Leider kann ich heute nicht zur Arbeit kommen, weil ich krank bin.', ru: 'К сожалению, сегодня я не могу прийти на работу, потому что болен.', use: 'Einleitung' },
        { de: 'Der Arzt hat mich bis Freitag krankgeschrieben.', ru: 'Врач выписал мне больничный до пятницы.', use: 'Information' },
        { de: 'Meine Kollegin kennt meine Aufgaben und kann mich vertreten.', ru: 'Моя коллега знает мои задачи и может меня заменить.', use: 'Information' },
        { de: 'Sobald ich wieder gesund bin, melde ich mich bei Ihnen.', ru: 'Как только я поправлюсь, я с вами свяжусь.', use: 'Schluss' },
        { de: 'Ich möchte Sie fragen, ob ich am … frei haben kann.', ru: 'Я хотел бы спросить, можно ли мне взять выходной в …', use: 'Frage' },
        { de: 'An diesem Tag habe ich einen Termin bei der Ausländerbehörde.', ru: 'В этот день у меня приём в ведомстве по делам иностранцев.', use: 'Grund' },
        { de: 'Am Donnerstag muss ich mit meinem Sohn zum Arzt.', ru: 'В четверг мне нужно сходить с сыном к врачу.', use: 'Grund' },
        { de: 'Meine Kollegin würde gern mit mir die Schicht tauschen.', ru: 'Моя коллега охотно поменялась бы со мной сменой.', use: 'Vorschlag' },
        { de: 'Ich könnte dafür am Samstag arbeiten.', ru: 'Взамен я мог бы поработать в субботу.', use: 'Vorschlag' },
        { de: 'Könnten Sie mir bitte bis Montag Bescheid geben?', ru: 'Не могли бы вы дать мне знать до понедельника?', use: 'Bitte' },
        { de: 'Vielen Dank für Ihr Verständnis.', ru: 'Большое спасибо за понимание.', use: 'Dank' },
        { de: 'Mit freundlichen Grüßen', ru: 'С уважением', use: 'Gruß' },
        { de: 'Viele Grüße', ru: 'Всего доброго — после `Liebe …` или `Hallo …`', use: 'Gruß' }
    ],

    tasks: [
        {
            id: 's07-a',
            label: 'A',
            situation: 'Sie arbeiten in einer kleinen Firma im Büro. Sie sind krank und können ein paar Tage nicht arbeiten. Schreiben Sie an Ihre Chefin, Frau Neumann.',
            recipient: 'Frau Neumann',
            register: 'halbformell',
            points: [
                { de: 'Grund für Ihr Schreiben', hint: 'Сообщите, что вы заболели и не можете прийти на работу.',
                  starters: ['Leider kann ich … nicht zur Arbeit kommen, weil …'],
                  keys: ['krank', 'Grippe', 'Fieber', 'Arbeit'] },
                { de: 'Krankschreibung vom Arzt', hint: 'Скажите, что были у врача, до какого дня больничный и как вы передадите справку.',
                  starters: ['Der Arzt hat mich bis … krankgeschrieben.', 'Die Krankschreibung schicke ich Ihnen …'],
                  keys: ['krankgeschrieben', 'Krankschreibung', 'Arzt'] },
                { de: 'Ihre Aufgaben und Vertretung', hint: 'Скажите, что с вашими делами и кто из коллег может вас заменить.',
                  starters: ['Meine Kollegin … kennt meine Aufgaben.', 'Könnten Sie bitte … fragen, ob …'],
                  keys: ['vertret', 'Kolleg', 'Aufgabe', 'übernehm'] },
                { de: 'Rückkehr zur Arbeit', hint: 'Пообещайте сообщить, когда снова сможете работать.',
                  starters: ['Sobald ich wieder gesund bin, …', 'Ich melde mich, wenn …'],
                  keys: ['melde', 'gesund', 'sobald', 'wieder'] }
            ],
            model: {
                text: 'Liebe Frau Neumann, leider kann ich diese Woche nicht zur Arbeit kommen, weil ich eine starke Grippe habe. Es tut mir leid, dass ich so plötzlich fehle. Heute Morgen war ich beim Arzt, und er hat mich bis Freitag krankgeschrieben. Die Krankschreibung schicke ich Ihnen heute noch per E-Mail. Die Bestellungen für nächste Woche habe ich schon erledigt. Meine Kollegin Frau Vogt kennt meine Aufgaben gut. Könnten Sie bitte fragen, ob sie mich vertreten kann? Sobald ich wieder gesund bin, melde ich mich bei Ihnen. Viele Grüße Svetlana Ivanova',
                ru: 'Дорогая госпожа Нойман, к сожалению, на этой неделе я не могу прийти на работу, потому что у меня сильный грипп. Мне жаль, что я так внезапно выхожу из строя. Сегодня утром я была у врача, и он выписал мне больничный до пятницы. Справку я ещё сегодня пришлю вам по электронной почте. Заказы на следующую неделю я уже обработала. Моя коллега госпожа Фогт хорошо знает мои задачи. Не могли бы вы спросить, может ли она меня заменить? Как только я поправлюсь, я с вами свяжусь. Всего доброго, Светлана Иванова',
                notes: [
                    'Обращение `Liebe Frau Neumann,` вместе с «Sie» — обычное для начальницы, с которой вы давно работаете; `Sehr geehrte Frau Neumann,` тоже было бы верно.',
                    'Пункт 1 раскрыт первым же предложением: `leider kann ich … nicht zur Arbeit kommen, weil …` — инфинитив `kommen` в конце, `habe` в конце придаточного.',
                    'Präteritum `war ich beim Arzt` и Perfekt `hat mich … krankgeschrieben` уместны оба; `krankschreiben` требует Akkusativ — `mich`.',
                    'Замена (пункт 3) предложена через вежливую просьбу с косвенным вопросом: `Könnten Sie bitte fragen, ob sie mich vertreten kann?`',
                    '`Sobald ich wieder gesund bin, melde ich mich bei Ihnen.` — после придаточного главное предложение начинается с глагола: `melde ich`.',
                    'Извинение `Es tut mir leid, dass …` и прощание `Viele Grüße` держат тон вежливым, но не холодным.'
                ]
            },
            weak: {
                text: 'Liebe Frau Neumann, ich bin seit gestern krank und ich kann nicht kommen zur Arbeit. Ich war heute bei Arzt. Der Arzt hat mir bis Freitag krankgeschreibt. Meine Kollege Frau Vogt kann mich vertreten. Wenn ich bin gesund, ich rufe Sie an. Tschüss, Svetlana',
                fixes: [
                    { was: 'nicht kommen zur Arbeit', wird: 'nicht zur Arbeit kommen', why: 'После модального `kann` инфинитив `kommen` стоит в самом конце, а `zur Arbeit` — перед ним.' },
                    { was: 'bei Arzt', wird: 'beim Arzt', why: 'Нужен артикль: `bei dem Arzt` → `beim Arzt`. В русском артикля нет, поэтому его легко пропустить.' },
                    { was: 'hat mir', wird: 'hat mich', why: '`krankschreiben` — «кого?», это Akkusativ: `Der Arzt hat mich krankgeschrieben`.' },
                    { was: 'krankgeschreibt', wird: 'krankgeschrieben', why: '`schreiben` — сильный глагол, Partizip II — `geschrieben`. Значит, и `krankgeschrieben`.' },
                    { was: 'Meine Kollege', wird: 'Meine Kollegin', why: 'Коллега-женщина — `die Kollegin`; `der Kollege` — мужчина. С `Frau Vogt` нужна женская форма.' },
                    { was: 'Wenn ich bin gesund', wird: 'Wenn ich gesund bin', why: 'После `wenn` спрягаемый глагол `bin` уходит в конец придаточного.' },
                    { was: 'ich rufe Sie an', wird: 'rufe ich Sie an', why: 'Придаточное с `wenn` занимает первое место, поэтому дальше сразу глагол: `Wenn ich gesund bin, rufe ich Sie an.`' },
                    { was: 'Tschüss, Svetlana', wird: 'Viele Grüße Svetlana Ivanova', why: '`Tschüss` — для друзей. Начальнице пишут `Viele Grüße` или `Mit freundlichen Grüßen` и полное имя.' }
                ]
            }
        },
        {
            id: 's07-b',
            label: 'B',
            situation: 'Sie arbeiten in einem Hotel im Schichtdienst. Am nächsten Donnerstag haben Sie Frühschicht, aber an diesem Tag haben Sie einen wichtigen Termin. Schreiben Sie an Ihren Schichtleiter, Herrn Becker.',
            recipient: 'Herr Becker',
            register: 'halbformell',
            points: [
                { de: 'Bitte um einen freien Tag', hint: 'Спросите, можно ли вам не работать в этот день.',
                  starters: ['Ich möchte Sie fragen, ob ich am … frei haben kann.'],
                  keys: ['frei', 'Urlaub', 'Donnerstag'] },
                { de: 'Grund für den freien Tag', hint: 'Объясните причину (врач, школа ребёнка, ведомство) и почему её нельзя перенести.',
                  starters: ['An diesem Tag habe ich einen Termin bei …', 'Ich muss mit meinem Sohn …'],
                  keys: ['Termin', 'Behörde', 'Arzt', 'Schule', 'weil'] },
                { de: 'Vorschlag: Schicht tauschen', hint: 'Предложите, как отработать: поменяться с коллегой или выйти в другой день.',
                  starters: ['Meine Kollegin würde gern mit mir tauschen.', 'Ich könnte dafür am … arbeiten.'],
                  keys: ['tausch', 'dafür', 'übernehm', 'arbeite'] },
                { de: 'Bitte um Antwort', hint: 'Попросите ответить до определённого дня.',
                  starters: ['Könnten Sie mir bitte bis … Bescheid geben?'],
                  keys: ['Bescheid', 'Antwort', 'antworten'] }
            ],
            model: {
                text: 'Sehr geehrter Herr Becker, ich möchte Sie fragen, ob ich am nächsten Donnerstag frei haben kann. An diesem Tag habe ich um 9 Uhr einen Termin bei der Ausländerbehörde, weil ich meinen Aufenthaltstitel verlängern muss. Ich habe lange auf diesen Termin gewartet, deshalb möchte ich ihn nicht verschieben. Meine Kollegin Frau Kaya würde gern mit mir tauschen. Ich könnte dafür am Samstag ihre Frühschicht übernehmen. Könnten Sie mir bitte bis Montag Bescheid geben, ob das möglich ist? Vielen Dank für Ihr Verständnis. Mit freundlichen Grüßen Taras Tkachenko',
                ru: 'Уважаемый господин Беккер, хочу спросить вас, могу ли я взять выходной в следующий четверг. В этот день у меня в 9 часов приём в ведомстве по делам иностранцев, потому что мне нужно продлить вид на жительство. Я долго ждал этой записи, поэтому не хочу её переносить. Моя коллега госпожа Кая охотно поменялась бы со мной. Взамен я мог бы выйти в субботу в её утреннюю смену. Не могли бы вы до понедельника сообщить мне, возможно ли это? Спасибо за понимание. С уважением, Тарас Ткаченко',
                notes: [
                    'Пункт 1 — косвенный вопрос `ich möchte Sie fragen, ob …`: просьба звучит мягко, а глагол `kann` стоит в конце.',
                    'Причина конкретная: где, во сколько и зачем (`weil ich meinen Aufenthaltstitel verlängern muss`), — начальнику легко согласиться.',
                    'Perfekt `Ich habe lange auf diesen Termin gewartet` с управлением `warten auf` + Akkusativ объясняет, почему запись нельзя перенести.',
                    'Решение предложено в Konjunktiv II (`würde gern mit mir tauschen`, `Ich könnte dafür …`): вежливо, и начальнику не нужно самому искать замену.',
                    'Просьба ответить со сроком — `bis Montag Bescheid geben, ob das möglich ist` — раскрывает пункт 4 одной фразой.',
                    'Связки `ob`, `weil`, `deshalb`, `dafür` связывают просьбу, причину и предложение в один логичный текст.'
                ]
            }
        }
    ],

    drills: [
        { id: 's07-d1', type: 'order', q: 'Расставьте части письма в правильном порядке.',
          items: ['Liebe Frau Neumann,', 'leider kann ich heute nicht zur Arbeit kommen, weil ich krank bin.', 'Der Arzt hat mich bis Freitag krankgeschrieben.', 'Meine Kollegin Frau Vogt kann mich vertreten.', 'Sobald ich wieder gesund bin, melde ich mich bei Ihnen.', 'Viele Grüße'],
          explain: 'Сначала обращение и главное — вы больны и не придёте, потом больничный, кто вас заменит и когда вы дадите о себе знать, в конце прощание. `leider` со строчной — значит, идёт сразу после обращения.', tag: 'aufbau' },
        { id: 's07-d2', type: 'choice', q: 'Вы пишете начальнице, с которой общаетесь на «Sie». Какая просьба подходит?',
          text: 'Liebe Frau Neumann,',
          options: ['Könnten Sie mir bitte Bescheid geben?', 'Kannst du mir bitte Bescheid geben?', 'Könnt ihr mir bitte Bescheid geben?'], answer: 0,
          explain: 'Обращение `Liebe Frau …` не отменяет «Sie»: вся просьба тоже на «Sie» — `Könnten Sie …`. `du` и `ihr` — для коллег, с которыми вы на «ты».', tag: 'register' },
        { id: 's07-d3', type: 'join', q: 'Соедините предложения союзом sobald.',
          parts: ['Ich bin wieder gesund.', 'Ich melde mich bei Ihnen.'], connector: 'sobald',
          answer: ['Sobald ich wieder gesund bin, melde ich mich bei Ihnen.', 'Ich melde mich bei Ihnen, sobald ich wieder gesund bin.'],
          explain: '`sobald` («как только») вводит придаточное: глагол `bin` уходит в конец. Если придаточное стоит первым, главное начинается с глагола: `melde ich mich`.', tag: 'nebensatz' },
        { id: 's07-d4', type: 'gap', q: 'Вставьте союз.',
          text: 'Ich möchte Sie fragen, ___ ich am Donnerstag frei haben kann.', hint: 'союз «ли»', answer: ['ob'],
          explain: 'Косвенный вопрос «можно ли …» вводится союзом `ob`. Глагол `kann` стоит в конце придаточного.', tag: 'konnektor' },
        { id: 's07-d5', type: 'gap', q: 'Вставьте местоимение.',
          text: 'Der Arzt hat ___ bis Freitag krankgeschrieben.', hint: 'меня', answer: ['mich'],
          explain: '`krankschreiben` отвечает на вопрос «кого?» — нужен Akkusativ: `mich`, а не `mir`.', tag: 'kasus' },
        { id: 's07-d6', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich kann heute nicht kommen zur Arbeit.', answer: ['Ich kann heute nicht zur Arbeit kommen.', 'Heute kann ich nicht zur Arbeit kommen.'],
          explain: 'После модального `kann` инфинитив `kommen` стоит в самом конце, а `zur Arbeit` — внутри рамки, перед ним.', tag: 'klammer' },
        { id: 's07-d7', type: 'build', q: 'Составьте вежливую просьбу.',
          ru: 'Не могли бы вы дать мне знать до понедельника?',
          answer: ['Könnten Sie mir bitte bis Montag Bescheid geben?', 'Könnten Sie mir bis Montag bitte Bescheid geben?'],
          explain: '`Könnten Sie …` — вежливая просьба. `Bescheid geben` — «дать знать, сообщить»: `geben` стоит в самом конце.', tag: 'konj2' },
        { id: 's07-d8', type: 'build', q: 'Составьте предложение.',
          ru: 'Взамен я мог бы поработать в субботу.',
          answer: ['Ich könnte dafür am Samstag arbeiten.', 'Dafür könnte ich am Samstag arbeiten.', 'Am Samstag könnte ich dafür arbeiten.', 'Ich könnte am Samstag dafür arbeiten.'],
          explain: '`könnte` — вежливое «мог бы» (Konjunktiv II) — стоит на втором месте, `arbeiten` — в конце. `dafür` здесь значит «взамен».', tag: 'konj2' },
        { id: 's07-d9', type: 'join', q: 'Соедините предложения союзом weil.',
          parts: ['Ich brauche am Donnerstag einen freien Tag.', 'Ich habe einen Termin bei der Ausländerbehörde.'], connector: 'weil',
          answer: ['Ich brauche am Donnerstag einen freien Tag, weil ich einen Termin bei der Ausländerbehörde habe.', 'Weil ich einen Termin bei der Ausländerbehörde habe, brauche ich am Donnerstag einen freien Tag.'],
          explain: 'После `weil` спрягаемый глагол `habe` уходит в конец. Если придаточное стоит первым, главное начинается с глагола `brauche`.', tag: 'nebensatz' },
        { id: 's07-d10', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich habe diesen Termin lange gewartet.', answer: ['Ich habe lange auf diesen Termin gewartet.', 'Ich habe auf diesen Termin lange gewartet.', 'Auf diesen Termin habe ich lange gewartet.'],
          explain: 'По-русски «ждать что-то» — без предлога, а по-немецки `warten auf` + Akkusativ: `auf diesen Termin`.', tag: 'verbprep' }
    ]
};
