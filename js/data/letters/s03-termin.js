/**
 * Ситуация 3. Отмена и перенос приёма.
 *
 * Задание A — зубной врач (Sie, знакомый адресат): не можете прийти, просите
 * новую дату. Задание B — Jobcenter (строго формально): перенос встречи.
 */

export default {
    id: 's03',
    order: 3,
    title: 'Запись и перенос приёма: врач, ведомство',
    short: 'Перенос приёма',
    register: 'formell',
    intro: 'У вас назначен приём у врача или встреча в ведомстве, но прийти вы не можете, и приём надо отменить или перенести. Пишут вежливо, на «Sie», коротко и по делу: какой приём, почему вы не придёте, когда вам удобно, и просьба подтвердить. В ведомство пишут строго формально; если есть номер клиента, его указывают.',

    phrases: [
        { de: 'Sehr geehrte Frau Dr. …,', ru: 'Уважаемая госпожа доктор …,', use: 'Anrede' },
        { de: 'Sehr geehrte Damen und Herren,', ru: 'Уважаемые дамы и господа, (если имя неизвестно)', use: 'Anrede' },
        { de: 'Liebes Praxisteam,', ru: 'Дорогая команда практики, (мягче, в знакомую приёмную врача)', use: 'Anrede' },
        { de: 'Ich habe am … um … Uhr einen Termin bei Ihnen.', ru: 'У меня приём у вас … в … часов.', use: 'Einleitung' },
        { de: 'Leider kann ich zu diesem Termin nicht kommen.', ru: 'К сожалению, я не смогу прийти на этот приём.', use: 'Absage' },
        { de: 'Ich möchte den Termin verschieben.', ru: 'Я хотел бы перенести приём.', use: 'Termin' },
        { de: 'An diesem Tag habe ich eine Prüfung.', ru: 'В этот день у меня экзамен.', use: 'Grund' },
        { de: 'Mein Kind ist krank, deshalb muss ich zu Hause bleiben.', ru: 'Мой ребёнок болен, поэтому я должен остаться дома.', use: 'Grund' },
        { de: 'Bitte entschuldigen Sie, dass ich so spät absage.', ru: 'Извините, пожалуйста, что я так поздно отменяю.', use: 'Entschuldigung' },
        { de: 'Hätten Sie nächste Woche einen anderen Termin für mich?', ru: 'Не найдётся ли у вас для меня другого приёма на следующей неделе?', use: 'Frage' },
        { de: 'Am Montag und am Mittwoch habe ich den ganzen Tag Zeit.', ru: 'В понедельник и в среду я свободен весь день.', use: 'Vorschlag' },
        { de: 'Könnten Sie mir den neuen Termin bitte bestätigen?', ru: 'Не могли бы вы подтвердить мне новый приём?', use: 'Bitte' },
        { de: 'Welche Unterlagen soll ich mitbringen?', ru: 'Какие документы мне принести?', use: 'Frage' },
        { de: 'Meine Kundennummer ist …', ru: 'Мой номер клиента …', use: 'Information' },
        { de: 'Vielen Dank im Voraus.', ru: 'Заранее большое спасибо.', use: 'Dank' },
        { de: 'Mit freundlichen Grüßen', ru: 'С уважением', use: 'Gruß' }
    ],

    tasks: [
        {
            id: 's03-a',
            label: 'A',
            situation: 'Sie haben am Dienstag um 10 Uhr einen Termin bei Ihrer Zahnärztin. Leider können Sie an diesem Tag nicht kommen. Schreiben Sie an Ihre Zahnärztin, Frau Dr. Krämer.',
            recipient: 'Frau Dr. Krämer',
            register: 'halbformell',
            points: [
                { de: 'Grund für Ihr Schreiben', hint: 'Назовите день и время приёма и скажите, что не сможете прийти.',
                  starters: ['Ich habe am … um … Uhr einen Termin bei Ihnen.', 'Leider kann ich an diesem Tag nicht kommen.'],
                  keys: ['Termin', 'leider', 'nicht kommen', 'absag'] },
                { de: 'Grund für die Absage', hint: 'Объясните, почему вы не можете прийти.',
                  starters: ['Ich kann nicht kommen, weil …', 'Mein Chef hat mir gesagt, dass …'],
                  keys: ['weil', 'muss', 'arbeit', 'krank'] },
                { de: 'Terminvorschlag', hint: 'Назовите один-два дня и время, когда вам удобно.',
                  starters: ['Hätten Sie vielleicht … einen Termin für mich?', 'Am … habe ich ab … Uhr Zeit.'],
                  keys: ['Montag', 'Mittwoch', 'Donnerstag', 'Freitag', 'nächste Woche', 'Zeit'] },
                { de: 'Bitte um Bestätigung', hint: 'Попросите подтвердить новый приём по телефону или по e-mail.',
                  starters: ['Könnten Sie mir den neuen Termin bitte bestätigen?'],
                  keys: ['bestätig', 'Bescheid', 'Antwort'] }
            ],
            model: {
                text: 'Sehr geehrte Frau Dr. Krämer, ich habe am Dienstag um 10 Uhr einen Termin bei Ihnen. Leider kann ich an diesem Tag nicht kommen. Mein Chef hat mir gestern gesagt, dass ich am Dienstag den ganzen Tag arbeiten muss, weil ein Kollege krank ist. Es tut mir leid, dass ich so spät absage. Hätten Sie vielleicht nächste Woche einen Termin für mich? Am Montag und am Donnerstag habe ich ab 14 Uhr Zeit. Könnten Sie mir den neuen Termin bitte per E-Mail bestätigen? Vielen Dank im Voraus. Mit freundlichen Grüßen Oleg Smirnov',
                ru: 'Уважаемая госпожа доктор Кремер, у меня приём у вас во вторник в 10 часов. К сожалению, в этот день я не смогу прийти. Вчера начальник сказал мне, что во вторник я должен работать весь день, потому что заболел коллега. Мне жаль, что я так поздно отменяю приём. Не найдётся ли у вас приёма для меня на следующей неделе? В понедельник и в четверг я свободен с 14 часов. Не могли бы вы подтвердить мне новый приём по электронной почте? Заранее большое спасибо. С уважением, Олег Смирнов',
                notes: [
                    'Первые два предложения раскрывают пункт 1: какой приём (`am Dienstag um 10 Uhr`) и что вы не придёте (`Leider kann ich … nicht kommen`).',
                    'Причина — в одном сложном предложении: Perfekt `hat … gesagt` и два придаточных, `dass … arbeiten muss` и `weil … krank ist`, с глаголами в конце.',
                    'Короткое извинение `Es tut mir leid, dass ich so spät absage` показывает уважение к врачу; отделяемый `absagen` в придаточном пишется слитно и стоит в конце.',
                    'Новая дата предложена конкретно — два дня и время (`ab 14 Uhr`), поэтому практике легко ответить.',
                    'Две вежливые формы Konjunktiv II: `Hätten Sie …?` и `Könnten Sie … bestätigen?` — вместо резкого `Ich will …`.',
                    'Рамка письма вежливая: `Sehr geehrte Frau Dr. Krämer,` с титулом, в конце `Vielen Dank im Voraus` и `Mit freundlichen Grüßen`.'
                ]
            },
            weak: {
                text: 'Hallo Frau Krämer. Ich habe Termin bei Sie am Dienstag um 10 Uhr, aber ich kann nicht kommen. Gestern mein Chef hat gesagt, dass ich muss arbeiten. Ich will einen neuen Termin. Am Montag habe ich ab 14 Uhr Zeit. Bitte schreiben Sie mir. Danke. Oleg',
                fixes: [
                    { was: 'Hallo Frau Krämer.', wird: 'Sehr geehrte Frau Dr. Krämer,', why: 'Врачу пишут вежливо: `Sehr geehrte Frau Dr. …` с титулом и запятой после обращения. `Hallo` подходит только знакомым.' },
                    { was: 'habe Termin', wird: 'habe einen Termin', why: 'В русском артикля нет, а в немецком исчисляемое существительное без него не стоит: `einen Termin` (Akkusativ, мужской род).' },
                    { was: 'bei Sie', wird: 'bei Ihnen', why: 'Предлог `bei` требует Dativ. Вежливое «у вас» — `bei Ihnen`.' },
                    { was: 'Gestern mein Chef hat gesagt', wird: 'Gestern hat mein Chef gesagt', why: 'После `Gestern` на первом месте сразу идёт глагол `hat`, а подлежащее `mein Chef` — за ним.' },
                    { was: 'dass ich muss arbeiten', wird: 'dass ich arbeiten muss', why: 'В придаточном с `dass` спрягаемый глагол стоит последним: `arbeiten muss`.' },
                    { was: 'Ich will einen neuen Termin.', wird: 'Ich hätte gern einen neuen Termin.', why: '`Ich will` звучит как требование. Вежливо: `Ich hätte gern …` или `Hätten Sie … einen Termin für mich?`' },
                    { was: 'Bitte schreiben Sie mir.', wird: 'Könnten Sie mir den neuen Termin bitte bestätigen?', why: 'Пункт «Bitte um Bestätigung» не раскрыт: неясно, что написать. Попросите именно подтверждение — нужно слово `bestätigen`.' },
                    { was: 'Danke. Oleg', wird: 'Vielen Dank im Voraus. Mit freundlichen Grüßen Oleg Smirnov', why: 'В вежливом письме нужна формула прощания `Mit freundlichen Grüßen` и полное имя, иначе теряются баллы за оформление.' }
                ]
            }
        },
        {
            id: 's03-b',
            label: 'B',
            situation: 'Das Jobcenter hat Sie für nächsten Mittwoch um 9 Uhr zu einem Gespräch eingeladen. Am selben Tag haben Sie ein Vorstellungsgespräch bei einer Firma. Schreiben Sie an Ihren Sachbearbeiter, Herrn Vogel.',
            recipient: 'Herr Vogel',
            register: 'formell',
            points: [
                { de: 'Grund für Ihr Schreiben', hint: 'Скажите, на какую встречу вас пригласили и что вы не сможете прийти.',
                  starters: ['Sie haben mich für … zu einem Gespräch eingeladen.', 'Leider kann ich zu diesem Termin nicht kommen.'],
                  keys: ['Termin', 'eingeladen', 'Einladung', 'nicht kommen'] },
                { de: 'Grund für die Absage', hint: 'Объясните, что в этот день у вас собеседование на работу.',
                  starters: ['Ich kann nicht kommen, weil ich … ein Vorstellungsgespräch habe.'],
                  keys: ['Vorstellungsgespräch', 'Firma', 'Stelle', 'weil'] },
                { de: 'Unterlagen', hint: 'Скажите, что прилагаете приглашение от фирмы, или спросите, какие документы принести.',
                  starters: ['Im Anhang finden Sie …', 'Welche Unterlagen soll ich mitbringen?'],
                  keys: ['Unterlagen', 'Kopie', 'Anhang', 'Dokument', 'mitbring'] },
                { de: 'Bitte um einen neuen Termin', hint: 'Попросите новую встречу и скажите, когда вы свободны.',
                  starters: ['Könnten Sie mir bitte einen neuen Termin geben?', 'Außer am … habe ich … Zeit.'],
                  keys: ['neuen Termin', 'anderen Termin', 'Zeit', 'Vormittag'] }
            ],
            model: {
                text: 'Sehr geehrter Herr Vogel, Sie haben mich für nächsten Mittwoch um 9 Uhr zu einem Gespräch eingeladen. Leider kann ich zu diesem Termin nicht kommen, weil ich am selben Tag ein Vorstellungsgespräch bei einer Baufirma habe. Ich habe mich dort als Bauhelfer beworben und hoffe, dass ich die Stelle bekomme. Im Anhang finden Sie die Einladung von der Firma. Könnten Sie mir bitte einen neuen Termin geben? Außer am Mittwoch habe ich nächste Woche jeden Vormittag Zeit. Wenn ich noch andere Unterlagen mitbringen soll, geben Sie mir bitte Bescheid. Mit freundlichen Grüßen Ruslan Akhmedov',
                ru: 'Уважаемый господин Фогель, вы пригласили меня на беседу в следующую среду в 9 часов. К сожалению, я не смогу прийти на эту встречу, потому что в тот же день у меня собеседование в строительной фирме. Я подал туда заявление на место подсобного рабочего и надеюсь, что получу это место. Во вложении вы найдёте приглашение от фирмы. Не могли бы вы назначить мне новую встречу? На следующей неделе я свободен каждый день до обеда, кроме среды. Если мне нужно принести ещё какие-то документы, сообщите мне, пожалуйста. С уважением, Руслан Ахмедов',
                notes: [
                    'Письмо начинается со ссылки на приглашение: `Sie haben mich … zu einem Gespräch eingeladen` (Perfekt) — сразу ясно, о какой встрече речь.',
                    'Причина уважительная и конкретная: собеседование, оформленное придаточным `weil … habe` с глаголом в конце.',
                    '`Im Anhang finden Sie …` — готовая формула для e-mail в ведомство: документ уже приложен, и пункт «Unterlagen» раскрыт.',
                    'Просьба через Konjunktiv II `Könnten Sie mir bitte …?` и сразу удобное время (`Außer am Mittwoch …`) — так ведомству легче назначить новую встречу.',
                    '`Wenn …, geben Sie mir bitte Bescheid` — после придаточного главное начинается с глагола; так закрыт вопрос о документах.',
                    'Регистр строго формальный: `Sehr geehrter Herr Vogel,`, без разговорных слов, в конце `Mit freundlichen Grüßen` и полное имя.'
                ]
            }
        }
    ],

    drills: [
        { id: 's03-d1', type: 'order', q: 'Расставьте части письма в правильном порядке.',
          items: ['Sehr geehrte Damen und Herren,', 'ich habe am Freitag um 11 Uhr einen Termin bei Ihnen.', 'Leider kann ich an diesem Tag nicht kommen, weil mein Sohn krank ist.', 'Könnten Sie mir bitte einen neuen Termin geben?', 'Vielen Dank im Voraus.', 'Mit freundlichen Grüßen'],
          explain: 'Сначала обращение, потом о каком приёме речь, затем отказ с причиной, просьба о новом приёме, благодарность и прощание. Просить «новый» приём можно только после того, как вы отказались от старого.', tag: 'aufbau' },
        { id: 's03-d2', type: 'choice', q: 'Вы пишете в Bürgeramt и не знаете, кто прочитает письмо. Какое обращение подходит?',
          options: ['Sehr geehrte Damen und Herren,', 'Liebe Damen und Herren,', 'Hallo Bürgeramt,'], answer: 0,
          explain: 'Если имя неизвестно, пишут `Sehr geehrte Damen und Herren,`. `Liebe` — для знакомых, а `Hallo` в письме в ведомство невежливо.', tag: 'register' },
        { id: 's03-d3', type: 'join', q: 'Соедините предложения союзом weil.',
          parts: ['Ich muss den Termin absagen.', 'Ich habe an diesem Tag eine Prüfung.'], connector: 'weil',
          answer: ['Ich muss den Termin absagen, weil ich an diesem Tag eine Prüfung habe.', 'Weil ich an diesem Tag eine Prüfung habe, muss ich den Termin absagen.'],
          explain: 'После `weil` спрягаемый глагол `habe` уходит в конец. Если придаточное стоит первым, главное начинается с глагола: `…, muss ich …`.', tag: 'nebensatz' },
        { id: 's03-d4', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Bitte entschuldigen Sie, dass ich den Termin so spät ___.', hint: 'absagen', answer: ['absage'],
          explain: 'В придаточном с `dass` отделяемый глагол не разделяется: он пишется слитно и стоит в конце — `absage`.', tag: 'nebensatz' },
        { id: 's03-d5', type: 'gap', q: 'Вставьте союз.',
          text: 'Könnten Sie mir sagen, ___ ich noch andere Unterlagen mitbringen muss?', hint: 'союз «ли»', answer: ['ob'],
          explain: 'Вопрос без вопросительного слова («нужно ли …») становится придаточным с `ob`. Глагол `muss` при этом уходит в конец.', tag: 'nebensatz' },
        { id: 's03-d6', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich habe gestern Ihre Einladung bekommt.',
          answer: ['Ich habe gestern Ihre Einladung bekommen.', 'Gestern habe ich Ihre Einladung bekommen.', 'Ich habe Ihre Einladung gestern bekommen.'],
          explain: '`bekommen` — глагол с неотделяемой приставкой `be-`. Его Partizip II совпадает с инфинитивом: `bekommen`, без `ge-` и без `-t`.', tag: 'perfekt' },
        { id: 's03-d7', type: 'build', q: 'Составьте вежливую просьбу.',
          ru: 'Не могли бы вы, пожалуйста, подтвердить мне новый приём?',
          answer: ['Könnten Sie mir bitte den neuen Termin bestätigen?', 'Könnten Sie mir den neuen Termin bitte bestätigen?'],
          explain: '`Könnten Sie …?` — вежливая просьба. Сначала местоимение в Dativ (`mir`), потом Akkusativ (`den neuen Termin`), а `bestätigen` — в конце.', tag: 'konj2' },
        { id: 's03-d8', type: 'build', q: 'Составьте предложение для e-mail.',
          ru: 'Во вложении вы найдёте приглашение от фирмы.',
          answer: ['Im Anhang finden Sie die Einladung von der Firma.', 'Die Einladung von der Firma finden Sie im Anhang.', 'Sie finden die Einladung von der Firma im Anhang.', 'Sie finden im Anhang die Einladung von der Firma.'],
          explain: 'Какой бы блок ни стоял первым (`Im Anhang`, `Die Einladung …`, `Sie`), глагол `finden` идёт вторым. Это готовая формула для письма с приложением.', tag: 'verb2' },
        { id: 's03-d9', type: 'gap', q: 'Вставьте предлог.',
          text: 'Ich möchte den Termin ___ nächsten Montag verschieben.', hint: 'перенести на …', answer: ['auf'],
          explain: '«Перенести на понедельник» — `verschieben auf` + Akkusativ: `auf nächsten Montag`.', tag: 'verbprep' },
        { id: 's03-d10', type: 'choice', q: 'Какая просьба подходит для письма в ведомство?',
          options: ['Ich will sofort einen neuen Termin.', 'Ich hätte gern einen neuen Termin.', 'Gib mir bitte einen neuen Termin.'], answer: 1,
          explain: '`Ich hätte gern …` — вежливая форма Konjunktiv II. `Ich will sofort` звучит как требование, а `Gib` — обращение на «du».', tag: 'konj2' }
    ]
};
