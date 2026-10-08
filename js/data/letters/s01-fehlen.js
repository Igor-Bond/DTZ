/**
 * Ситуация 1. Извинение за пропуск.
 *
 * Эталон для остальных ситуаций: два задания в стиле DTZ, у каждого четыре
 * пункта, образец уровня B1 без единой ошибки, у задания A — слабый ответ
 * с разбором.
 */

export default {
    id: 's01',
    order: 1,
    title: 'Извинение: пропуск курса или школы',
    short: 'Пропуск курса',
    register: 'halbformell',
    intro: 'Вы не можете прийти на курс, на урок или в школу и сообщаете об этом учителю. В официальном описании экзамена в качестве примера задания приведено именно извинение за пропуск курса. Тон вежливый, обращение на «Sie»: назовите причину, извинитесь, попросите материал и скажите, когда вернётесь.',

    phrases: [
        { de: 'Sehr geehrte Frau …,', ru: 'Уважаемая госпожа …,', use: 'Anrede' },
        { de: 'Sehr geehrter Herr …,', ru: 'Уважаемый господин …,', use: 'Anrede' },
        { de: 'Ich schreibe Ihnen, weil …', ru: 'Я пишу вам, потому что …', use: 'Einleitung' },
        { de: 'Leider kann ich diese Woche nicht in den Kurs kommen.', ru: 'К сожалению, на этой неделе я не могу прийти на курс.', use: 'Einleitung' },
        { de: 'Ich bin seit gestern krank.', ru: 'Я болею со вчерашнего дня.', use: 'Grund' },
        { de: 'Mein Sohn hat Fieber.', ru: 'У моего сына температура.', use: 'Grund' },
        { de: 'Der Arzt hat gesagt, dass ich bis Freitag zu Hause bleiben muss.', ru: 'Врач сказал, что я должен остаться дома до пятницы.', use: 'Information' },
        { de: 'Es tut mir sehr leid, dass …', ru: 'Мне очень жаль, что …', use: 'Entschuldigung' },
        { de: 'Bitte entschuldigen Sie, dass …', ru: 'Пожалуйста, извините, что …', use: 'Entschuldigung' },
        { de: 'Könnten Sie mir bitte sagen, was wir im Unterricht machen?', ru: 'Не могли бы вы мне сказать, что мы делаем на уроке?', use: 'Bitte' },
        { de: 'Ich möchte Sie bitten, mir die Hausaufgaben zu schicken.', ru: 'Я хотел бы попросить вас прислать мне домашние задания.', use: 'Bitte' },
        { de: 'Ich bringe Ihnen die Bescheinigung vom Arzt.', ru: 'Я принесу вам справку от врача.', use: 'Information' },
        { de: 'Ich komme am Montag wieder in den Kurs.', ru: 'В понедельник я снова приду на курс.', use: 'Information' },
        { de: 'Vielen Dank für Ihr Verständnis.', ru: 'Большое спасибо за понимание.', use: 'Dank' },
        { de: 'Mit freundlichen Grüßen', ru: 'С уважением', use: 'Gruß' },
        { de: 'Viele Grüße', ru: 'Всего доброго', use: 'Gruß' }
    ],

    tasks: [
        {
            id: 's01-a',
            label: 'A',
            situation: 'Sie besuchen einen Deutschkurs. Sie sind seit gestern krank und können diese Woche nicht in den Kurs kommen. Deshalb schreiben Sie an Ihren Kursleiter, Herrn Weber.',
            recipient: 'Herr Weber',
            register: 'halbformell',
            points: [
                { de: 'Grund für Ihr Schreiben', hint: 'Скажите, что вы пишете, потому что не можете прийти на курс.',
                  starters: ['Ich schreibe Ihnen, weil …', 'Leider kann ich diese Woche nicht …'],
                  keys: ['schreib', 'weil', 'Kurs', 'nicht kommen'] },
                { de: 'Ihre Krankheit', hint: 'Скажите, что вы больны, были ли у врача и что он сказал.',
                  starters: ['Ich bin seit gestern krank.', 'Der Arzt hat gesagt, dass …'],
                  keys: ['krank', 'Arzt'] },
                { de: 'Bitte um den Unterrichtsstoff', hint: 'Вежливо спросите, что вы пропускаете, или попросите материал.',
                  starters: ['Könnten Sie mir bitte sagen, was …', 'Ich möchte Sie bitten, mir … zu schicken.'],
                  keys: ['Unterricht', 'Hausaufgabe', 'Stoff', 'Material'] },
                { de: 'Rückkehr in den Kurs', hint: 'Скажите, когда вы снова придёте.',
                  starters: ['Ich komme am … wieder.', 'Wenn ich gesund bin, …'],
                  keys: ['wieder', 'Montag', 'komme', 'gesund'] }
            ],
            model: {
                text: 'Sehr geehrter Herr Weber, ich schreibe Ihnen, weil ich diese Woche leider nicht in den Kurs kommen kann. Ich bin seit gestern krank und war schon beim Arzt. Er hat gesagt, dass ich bis Freitag zu Hause bleiben muss. Es tut mir sehr leid, dass ich fehle. Könnten Sie mir bitte sagen, was wir im Unterricht machen? Dann kann ich zu Hause lernen. Ich komme am Montag wieder in den Kurs, wenn ich gesund bin. Vielen Dank für Ihr Verständnis. Mit freundlichen Grüßen Anna Petrenko',
                ru: 'Уважаемый господин Вебер, я пишу вам, потому что на этой неделе, к сожалению, не могу прийти на курс. Я болею со вчерашнего дня и уже была у врача. Он сказал, что я должна оставаться дома до пятницы. Мне очень жаль, что я пропускаю. Не могли бы вы мне сказать, что мы делаем на уроке? Тогда я смогу заниматься дома. В понедельник я снова приду на курс, если буду здорова. Большое спасибо за понимание. С уважением, Анна Петренко',
                notes: [
                    'Пункт 1 раскрыт первым же предложением формулой `ich schreibe Ihnen, weil …` — проверяющему не нужно искать причину.',
                    'Придаточные с `weil`, `dass` и `wenn` построены правильно: спрягаемый глагол стоит в конце (`kommen kann`, `bleiben muss`, `gesund bin`).',
                    'Прошедшее время подобрано удачно: `war` для «была у врача» и Perfekt `hat gesagt` для «сказал».',
                    'Просьба вежливая: `Könnten Sie mir bitte sagen, was …` — Konjunktiv II и косвенный вопрос вместо резкого «Was machen wir?».',
                    'После запятой в обращении слово пишется со строчной буквы: `Sehr geehrter Herr Weber,` → `ich schreibe …`.',
                    'Благодарность в конце (`Vielen Dank für Ihr Verständnis`) и формальное прощание закрывают письмо в вежливом тоне.'
                ]
            },
            weak: {
                text: 'Hallo Herr Weber. Ich nicht kommen diese Woche weil ich bin krank. Ich war beim Doktor, er sagt ich muss bleiben zu Hause bis Freitag. Entschuldigung. Was wir machen im Kurs? Ich komme wieder nachste Montag. Tschüss',
                fixes: [
                    { was: 'Hallo Herr Weber.', wird: 'Sehr geehrter Herr Weber,', why: 'Руководителю курса пишут вежливо: обращение `Sehr geehrter Herr …` с запятой. `Hallo` слишком разговорно для письма руководителю курса.' },
                    { was: 'Ich nicht kommen diese Woche', wird: 'Ich kann diese Woche nicht kommen', why: 'Нужен модальный глагол `kann` на втором месте, а `kommen` — в конце: `Ich kann … nicht kommen`.' },
                    { was: 'weil ich bin krank', wird: 'weil ich krank bin', why: 'После `weil` спрягаемый глагол уходит в конец придаточного, а перед `weil` ставится запятая.' },
                    { was: 'er sagt ich muss bleiben zu Hause', wird: 'er hat gesagt, dass ich zu Hause bleiben muss', why: 'Рассказ о прошедшем — Perfekt (`hat gesagt`), а после `dass` глагол в конце: `zu Hause bleiben muss`.' },
                    { was: 'Was wir machen im Kurs?', wird: 'Könnten Sie mir sagen, was wir im Kurs machen?', why: 'Вежливая просьба с `Könnten Sie …`, а в придаточном `was wir … machen` глагол идёт в конец.' },
                    { was: 'nachste Montag', wird: 'nächsten Montag', why: 'Здесь нужны умлаут и окончание: `nächsten Montag`. Короче: `am Montag`.' },
                    { was: 'Tschüss', wird: 'Mit freundlichen Grüßen', why: '`Tschüss` — прощание для друзей. В письме учителю — `Mit freundlichen Grüßen`.' }
                ]
            }
        },
        {
            id: 's01-b',
            label: 'B',
            situation: 'Ihr Sohn Max geht in die dritte Klasse. Er hat Fieber und kann morgen und übermorgen nicht in die Schule gehen. Deshalb schreiben Sie an die Klassenlehrerin, Frau Schulz.',
            recipient: 'Frau Schulz',
            register: 'halbformell',
            points: [
                { de: 'Grund für Ihr Schreiben', hint: 'Скажите, что сын не придёт в школу, и почему.',
                  starters: ['Mein Sohn kann morgen nicht in die Schule kommen, weil …'],
                  keys: ['Sohn', 'Max', 'Schule', 'Fieber'] },
                { de: 'Arztbesuch', hint: 'Скажите, были ли вы у врача и что он сказал.',
                  starters: ['Ich war heute mit ihm beim Arzt.', 'Der Arzt hat gesagt, dass …'],
                  keys: ['Arzt', 'Bescheinigung'] },
                { de: 'Bitte um Hausaufgaben', hint: 'Попросите прислать домашние задания, чтобы сын не отстал.',
                  starters: ['Ich möchte Sie bitten, mir … zu schicken.'],
                  keys: ['Hausaufgabe', 'bitten', 'schicken'] },
                { de: 'Rückkehr in die Schule', hint: 'Скажите, когда сын, как вы надеетесь, снова пойдёт в школу.',
                  starters: ['Ich hoffe, dass er am … wieder …'],
                  keys: ['wieder', 'Montag', 'gesund', 'hoffe'] }
            ],
            model: {
                text: 'Sehr geehrte Frau Schulz, mein Sohn Max kann morgen und übermorgen nicht in die Schule kommen, weil er Fieber hat. Ich war heute mit ihm beim Arzt. Der Arzt hat gesagt, dass Max ein paar Tage im Bett bleiben muss. Ich bringe Ihnen die Bescheinigung vom Arzt, wenn er wieder gesund ist. Außerdem möchte ich Sie bitten, mir die Hausaufgaben per E-Mail zu schicken. Max möchte nämlich nichts verpassen. Ich hoffe, dass er am Montag wieder in die Schule gehen kann. Mit freundlichen Grüßen Anna Petrenko',
                ru: 'Уважаемая госпожа Шульц, мой сын Макс не сможет прийти в школу завтра и послезавтра, потому что у него температура. Сегодня я была с ним у врача. Врач сказал, что Максу нужно несколько дней пролежать в постели. Справку от врача я принесу вам, когда он снова будет здоров. Кроме того, я хотела бы попросить вас прислать мне домашние задания по электронной почте. Макс ведь не хочет ничего пропустить. Надеюсь, что в понедельник он снова сможет пойти в школу. С уважением, Анна Петренко',
                notes: [
                    'Все четыре пункта идут в том порядке, в каком даны в задании: проверяющему легко найти каждый.',
                    'Причина названа в первом же предложении (`weil er Fieber hat`), поэтому пункт 1 нельзя пропустить.',
                    'Для прошедшего использованы `war` («была у врача») и Perfekt `hat gesagt` — оба времени верны и ожидаемы на B1.',
                    'Просьба оформлена вежливо: `Außerdem möchte ich Sie bitten, mir … zu schicken` — конструкция `bitten, … zu` с инфинитивом.',
                    'Связки `Außerdem` и `nämlich` и придаточные с `weil`, `dass`, `wenn` делают текст связным, а не набором отдельных фраз.'
                ]
            }
        }
    ],

    drills: [
        { id: 's01-d1', type: 'order', q: 'Расставьте части письма в правильном порядке.',
          items: ['Sehr geehrter Herr Weber,', 'ich schreibe Ihnen, weil ich diese Woche nicht kommen kann.', 'Ich bin seit gestern krank.', 'Könnten Sie mir bitte die Hausaufgaben schicken?', 'Vielen Dank für Ihr Verständnis.', 'Mit freundlichen Grüßen'],
          explain: 'Письмо идёт так: обращение, причина, подробности, просьба, благодарность, прощание.', tag: 'aufbau' },
        { id: 's01-d2', type: 'choice', q: 'Какое обращение подходит для письма учителю, которого вы знаете по фамилии?',
          options: ['Sehr geehrter Herr Weber,', 'Lieber Weber,', 'Hey Herr Weber,'], answer: 0,
          explain: 'Учителю пишут на «Sie» с уважительным обращением. `Lieber Weber` и `Hey` — для знакомых и друзей.', tag: 'register' },
        { id: 's01-d3', type: 'join', q: 'Соедините предложения союзом weil.',
          parts: ['Ich kann nicht in den Kurs kommen.', 'Ich bin krank.'], connector: 'weil',
          answer: ['Ich kann nicht in den Kurs kommen, weil ich krank bin.', 'Weil ich krank bin, kann ich nicht in den Kurs kommen.'],
          explain: 'После `weil` спрягаемый глагол уходит в конец придаточного. Перед придаточным ставится запятая.', tag: 'nebensatz' },
        { id: 's01-d4', type: 'join', q: 'Соедините предложения союзом dass.',
          parts: ['Der Arzt hat gesagt.', 'Ich muss zu Hause bleiben.'], connector: 'dass',
          answer: ['Der Arzt hat gesagt, dass ich zu Hause bleiben muss.'],
          explain: 'После `dass` порядок как в придаточном: подлежащее, остальное, а оба глагола — в конце, причём спрягаемый последний.', tag: 'nebensatz' },
        { id: 's01-d5', type: 'gap', q: 'Вставьте союз.',
          text: 'Es tut mir leid, ___ ich nicht kommen kann.', hint: 'союз «что»', answer: ['dass'],
          explain: 'После выражения чувства (`Es tut mir leid`) следует придаточное с `dass`: глагол `kann` — в конце.', tag: 'nebensatz' },
        { id: 's01-d6', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich habe gestern beim Arzt gewesen.', answer: ['Ich war gestern beim Arzt.', 'Ich bin gestern beim Arzt gewesen.'],
          explain: 'С глаголом `sein` в рассказе о прошлом чаще всего Präteritum: `war`. Perfekt тоже возможен, но со вспомогательным `bin`: `bin … gewesen`.', tag: 'perfekt' },
        { id: 's01-d7', type: 'build', q: 'Составьте вежливую просьбу.',
          ru: 'Не могли бы вы мне, пожалуйста, сказать, что мы делаем на уроке?',
          answer: ['Könnten Sie mir bitte sagen, was wir im Unterricht machen?'],
          explain: '`Könnten Sie …` — вежливая форма. Вопрос стал придаточным (`was wir … machen`), и глагол `machen` ушёл в конец.', tag: 'konj2' },
        { id: 's01-d8', type: 'gap', q: 'Вставьте союз.',
          text: 'Ich komme am Montag wieder in den Kurs, ___ ich gesund bin.', hint: 'союз «если»', answer: [['wenn', 'falls']],
          explain: '`wenn` (или `falls`) вводит условие. Глагол `bin` уходит в конец, перед `wenn` стоит запятая.', tag: 'nebensatz' },
        { id: 's01-d9', type: 'build', q: 'Составьте предложение.',
          ru: 'Я принесу вам справку от врача.',
          answer: ['Ich bringe Ihnen die Bescheinigung vom Arzt.', 'Die Bescheinigung vom Arzt bringe ich Ihnen.'],
          explain: 'Сначала дательный падеж лица (`Ihnen`), потом винительный предмета (`die Bescheinigung`); предмет можно и вынести вперёд, тогда глагол всё равно второй. `vom` — это `von dem`.', tag: 'kasus' },
        { id: 's01-d10', type: 'choice', q: 'Как правильно продолжить письмо после обращения?',
          text: 'Sehr geehrte Frau Schulz,',
          options: ['mein Sohn kann morgen nicht kommen.', 'Mein Sohn kann morgen nicht kommen.'], answer: 0,
          explain: 'После запятой в обращении текст продолжается со строчной буквы, если это не существительное и не `Sie`.', tag: 'schreibung' }
    ]
};
