/**
 * Справочник: двенадцать шпаргалок, которые открывают во время письма.
 *
 * Каждый раздел — одна страница таблиц: формы, окончания, предлоги, даты.
 * Минимум слов, в конце — один совет, как применить шпаргалку в письме.
 */

export default [
    {
        id: 'r-anrede',
        title: 'Обращение и прощание',
        blocks: [
            {
                type: 'table',
                head: ['Кому пишете', 'Регистр', 'Обращение', 'Прощание'],
                rows: [
                    ['Фирма, ведомство, имя неизвестно', 'формально', '`Sehr geehrte Damen und Herren,`', '`Mit freundlichen Grüßen`'],
                    ['Хозяин квартиры, врач, сотрудник ведомства, руководитель курса', 'формально', '`Sehr geehrte Frau Krause,` / `Sehr geehrter Herr Krause,`', '`Mit freundlichen Grüßen` / `Freundliche Grüße`'],
                    ['Знакомый на «Sie»: учительница, сосед, коллега', 'полуформально', '`Liebe Frau Krause,` / `Lieber Herr Krause,` / `Guten Tag, Frau Krause,`', '`Viele Grüße` / `Herzliche Grüße`'],
                    ['Все соседи в доме', 'полуформально', '`Liebe Nachbarinnen und Nachbarn,`', '`Viele Grüße`'],
                    ['Друг, подруга, коллега на «du»', 'дружески', '`Liebe Anna,` / `Lieber Tom,` / `Hallo, Anna,`', '`Viele Grüße` / `Liebe Grüße` / `Bis bald!`'],
                    ['Несколько друзей, группа', 'дружески', '`Liebe Anna, lieber Tom,` / `Hallo zusammen,`', '`Liebe Grüße` / `Viele Grüße`']
                ],
                note: 'Если сомневаетесь, выбирайте формальный вариант: в письме на «Sie» `Sehr geehrte …` и `Mit freundlichen Grüßen` ошибкой не будут.'
            },
            {
                type: 'table',
                head: ['Регистр', 'Женщине', 'Мужчине', 'Нескольким'],
                rows: [
                    ['формально', 'Sehr geehrt**e** Frau Krause,', 'Sehr geehrt**er** Herr Krause,', 'Sehr geehrt**e** Damen und Herren,'],
                    ['полуформально', 'Lieb**e** Frau Krause,', 'Lieb**er** Herr Krause,', 'Lieb**e** Nachbarinnen und Nachbarn,'],
                    ['дружески', 'Lieb**e** Anna,', 'Lieb**er** Tom,', 'Lieb**e** Freunde,']
                ],
                note: 'К мужчине — окончание -er, к женщине и к нескольким — -e.'
            },
            {
                type: 'list',
                items: [
                    'После обращения — запятая, и текст продолжается со строчной буквы: `Liebe Anna,` → `vielen Dank für deine Nachricht.`',
                    'Вежливые `Sie`, `Ihnen`, `Ihr` — всегда с заглавной. `du`, `dir`, `dein` пишут со строчной, в письме можно и с заглавной.',
                    'После прощания — ни запятой, ни точки. Имя — на следующей строке.',
                    'Обращение, текст и прощание — в одном регистре: `Sehr geehrte …` + `Sie` + `Mit freundlichen Grüßen`; `Liebe Anna` + `du` + `Liebe Grüße`.',
                    'Перед подписью можно поставить `Ihr` / `Ihre` (полуформально) или `Dein` / `Deine` (дружески): `Deine Anna`.'
                ]
            },
            { type: 'trap', wrong: 'Sehr geehrte Herr Krause,', right: 'Sehr geehrter Herr Krause,', why: 'К мужчине — окончание -er: `geehrter`, `Lieber`. Эту ошибку проверяющий видит в первой же строке.' },
            { type: 'trap', wrong: 'Mit freundlichen Grüßen,', right: 'Mit freundlichen Grüßen', why: 'По-русски после «С уважением» часто ставят запятую. По-немецки после прощания запятой нет — она есть только после обращения.' },
            { type: 'tip', text: 'На экзамене напишите обращение и прощание сразу, до основного текста: без них теряются баллы за оформление. Строку берите из первой таблицы — по тому, кому пишете.' }
        ]
    },

    {
        id: 'r-konnektoren',
        title: 'Союзы и связки',
        blocks: [
            {
                type: 'table',
                head: ['Слово', 'Тип', 'Порядок слов', 'Пример'],
                rows: [
                    ['weil', 'союз придаточного', 'глагол в конец', 'Ich komme nicht, weil ich krank **bin**.'],
                    ['denn', 'союз «нулевого места»', 'порядок не меняется', 'Ich komme nicht, denn ich **bin** krank.'],
                    ['deshalb', 'связка-наречие', 'глагол сразу за ней', 'Ich bin krank, deshalb **komme** ich nicht.']
                ],
                note: 'Смысл один — «потому что» или «поэтому», а порядок слов разный. Это три самые частые связки письма.'
            },
            {
                type: 'table',
                head: ['Союз', 'Значение', 'Пример: порядок не меняется'],
                rows: [
                    ['und', 'и', 'Ich bin krank und bleibe heute zu Hause.'],
                    ['aber', 'но', 'Ich möchte kommen, aber ich habe keine Zeit.'],
                    ['oder', 'или', 'Kommen Sie am Montag oder am Dienstag?'],
                    ['denn', 'потому что', 'Ich rufe an, denn ich habe eine Frage.'],
                    ['sondern', 'а (после отрицания)', 'Der Kurs ist nicht am Montag, sondern am Dienstag.']
                ],
                note: 'После этих союзов — порядок обычного предложения: чаще всего подлежащее, потом глагол. Перед `aber`, `denn`, `sondern` всегда запятая.'
            },
            {
                type: 'table',
                head: ['Связка', 'Значение', 'Пример: глагол сразу за связкой'],
                rows: [
                    ['deshalb, deswegen', 'поэтому', 'Deshalb **kann** ich nicht kommen.'],
                    ['trotzdem', 'тем не менее', 'Trotzdem **möchte** ich den Kurs machen.'],
                    ['außerdem', 'кроме того', 'Außerdem **brauche** ich eine Bescheinigung.'],
                    ['zuerst', 'сначала', 'Zuerst **möchte** ich mich vorstellen.'],
                    ['dann', 'потом; тогда', 'Dann **rufe** ich Sie an.'],
                    ['danach', 'после этого', 'Danach **gehen** wir zusammen essen.'],
                    ['zum Schluss', 'в конце, напоследок', 'Zum Schluss **habe** ich noch eine Frage.'],
                    ['sonst', 'иначе', 'Bitte antworten Sie bis Freitag, sonst **muss** ich den Termin absagen.'],
                    ['also', 'итак, значит', 'Also **treffen** wir uns um 18 Uhr.'],
                    ['übrigens', 'кстати', 'Übrigens **habe** ich eine neue Adresse.'],
                    ['leider', 'к сожалению', 'Leider **habe** ich keine Zeit.'],
                    ['zum Beispiel', 'например', 'Zum Beispiel **könnten** wir ins Kino gehen.']
                ],
                note: 'Связка занимает первое место, поэтому дальше сразу глагол, потом подлежащее. Её можно поставить и после глагола: `Ich kann deshalb nicht kommen.`'
            },
            {
                type: 'table',
                head: ['Пара', 'Значение', 'Пример'],
                rows: [
                    ['entweder … oder', 'или … или', 'Ich komme entweder am Montag oder am Dienstag.'],
                    ['nicht nur … sondern auch', 'не только … но и', 'Die Wohnung ist nicht nur laut, sondern auch kalt.'],
                    ['sowohl … als auch', 'как … так и', 'Ich spreche sowohl Russisch als auch Deutsch.'],
                    ['zwar … aber', 'хотя и … но', 'Die Wohnung ist zwar klein, aber sie ist günstig.'],
                    ['weder … noch', 'ни … ни', 'Ich habe weder Zeit noch Geld.']
                ]
            },
            { type: 'p', text: 'Союзы придаточных (`weil`, `dass`, `wenn`, `ob`, `obwohl` …) отправляют глагол в конец — они собраны в разделе «Придаточные: союзы и порядок».' },
            { type: 'trap', wrong: 'Ich bin krank, deshalb ich komme nicht.', right: 'Ich bin krank, deshalb komme ich nicht.', why: 'По-русски «поэтому я не приду»: подлежащее сразу после связки. По-немецки после `deshalb` сначала глагол.' },
            { type: 'tip', text: 'В каждом письме используйте связки трёх видов: одну без инверсии (`aber`, `denn`), одну с инверсией (`deshalb`, `außerdem`) и один союз придаточного (`weil`, `dass`). Так текст становится связным.' }
        ]
    },

    {
        id: 'r-nebensatz',
        title: 'Придаточные: союзы и порядок',
        blocks: [
            {
                type: 'table',
                head: ['Главное предложение', 'Союз', 'Подлежащее и середина', 'В конце — глагол'],
                rows: [
                    ['Ich komme heute nicht,', 'weil', 'ich krank', '**bin**.'],
                    ['Ich hoffe,', 'dass', 'Sie mir helfen', '**können**.'],
                    ['Es tut mir leid,', 'dass', 'ich nicht', '**gekommen bin**.'],
                    ['Ich weiß nicht,', 'ob', 'ich am Montag', '**kommen kann**.'],
                    ['Bitte sagen Sie mir,', 'wann', 'der Kurs', '**anfängt**.']
                ],
                note: 'Если глаголов два, спрягаемый — последним: `kommen kann`, `gekommen bin`. Отделяемая приставка в придаточном не отделяется: `anfängt`.'
            },
            { type: 'rule', text: 'Перед союзом — запятая. В придаточном спрягаемый глагол стоит **последним**.' },
            {
                type: 'table',
                head: ['Союз', 'Значение', 'Пример из письма'],
                rows: [
                    ['weil', 'потому что', 'Ich komme später, weil mein Bus Verspätung hat.'],
                    ['dass', 'что', 'Ich hoffe, dass es Ihnen gut geht.'],
                    ['wenn', 'если; когда (в будущем или каждый раз)', 'Wenn Sie Fragen haben, rufen Sie mich bitte an.'],
                    ['ob', 'ли', 'Bitte sagen Sie mir, ob der Termin noch frei ist.'],
                    ['obwohl', 'хотя', 'Die Heizung ist kalt, obwohl der Handwerker schon da war.'],
                    ['damit', 'чтобы (подлежащие разные)', 'Ich schreibe Ihnen, damit Sie Bescheid wissen.'],
                    ['als', 'когда (один раз в прошлом)', 'Als ich nach Hause kam, war die Tür offen.'],
                    ['bevor', 'прежде чем, до того как', 'Bitte rufen Sie an, bevor Sie kommen.'],
                    ['nachdem', 'после того как', 'Nachdem ich die Rechnung bezahlt habe, schicke ich Ihnen die Quittung.'],
                    ['während', 'пока, в то время как', 'Während ich im Urlaub bin, gießt meine Nachbarin die Blumen.'],
                    ['wann, wo, was, wie, warum …', 'косвенный вопрос', 'Können Sie mir sagen, wo das Büro ist?']
                ],
                note: 'Если подлежащее одно и то же, вместо `damit` проще `um … zu`: `Ich lerne viel, um die Prüfung zu bestehen.` После `nachdem` время на шаг раньше, чем в главном: Perfekt при Präsens.'
            },
            {
                type: 'table',
                head: ['1-е место: придаточное', '2-е место: глагол', 'Дальше'],
                rows: [
                    ['Weil ich krank bin,', '**kann**', 'ich nicht kommen.'],
                    ['Wenn Sie Zeit haben,', '**rufen**', 'Sie mich bitte an.'],
                    ['Als ich nach Hause kam,', '**war**', 'die Tür offen.']
                ],
                note: 'Придаточное целиком занимает первое место, поэтому сразу после запятой — глагол главного предложения: «глагол, запятая, глагол».'
            },
            {
                type: 'table',
                head: ['Прямой вопрос', 'Косвенный вопрос'],
                rows: [
                    ['Wann beginnt der Kurs?', 'Können Sie mir sagen, wann der Kurs beginnt?'],
                    ['Wo ist das Büro?', 'Ich möchte wissen, wo das Büro ist.'],
                    ['Was kostet der Kurs?', 'Könnten Sie mir sagen, was der Kurs kostet?'],
                    ['Wie lange dauert die Reparatur?', 'Bitte teilen Sie mir mit, wie lange die Reparatur dauert.'],
                    ['Ist noch ein Platz frei?', 'Ich möchte wissen, ob noch ein Platz frei ist.']
                ],
                note: 'Вопрос без вопросительного слова → `ob`. Знак вопроса — только если всё предложение вопрос: `Können Sie mir sagen, …?`'
            },
            { type: 'trap', wrong: 'Ich komme nicht, weil ich bin krank.', right: 'Ich komme nicht, weil ich krank bin.', why: 'По-русски после «потому что» порядок обычный. По-немецки после `weil` спрягаемый глагол уходит в самый конец.' },
            { type: 'trap', wrong: 'Können Sie mir sagen, wann beginnt der Kurs?', right: 'Können Sie mir sagen, wann der Kurs beginnt?', why: 'Косвенный вопрос — это придаточное: после `wann` глагол идёт в конец.' },
            { type: 'trap', wrong: 'Wenn ich gestern nach Hause kam, war die Tür offen.', right: 'Als ich gestern nach Hause kam, war die Tür offen.', why: 'Один раз в прошлом — `als`. `wenn` — о будущем и о том, что повторяется.' },
            { type: 'tip', text: 'Перечитывая письмо, найдите каждую запятую перед `weil`, `dass`, `wenn`, `ob` и проверьте: спрягаемый глагол стоит последним перед точкой или следующей запятой?' }
        ]
    },

    {
        id: 'r-verben',
        title: 'Спряжение: sein, haben, модальные и Konjunktiv II',
        blocks: [
            {
                type: 'table',
                head: ['Лицо', 'sein', 'haben', 'werden', 'wissen'],
                rows: [
                    ['ich', 'bin', 'habe', 'werde', 'weiß'],
                    ['du', 'bist', 'hast', 'wirst', 'weißt'],
                    ['er, sie, es', 'ist', 'hat', 'wird', 'weiß'],
                    ['wir', 'sind', 'haben', 'werden', 'wissen'],
                    ['ihr', 'seid', 'habt', 'werdet', 'wisst'],
                    ['sie, Sie', 'sind', 'haben', 'werden', 'wissen']
                ]
            },
            {
                type: 'table',
                head: ['Лицо', 'können', 'müssen', 'wollen', 'dürfen', 'sollen', 'möchten'],
                rows: [
                    ['ich', 'kann', 'muss', 'will', 'darf', 'soll', 'möchte'],
                    ['du', 'kannst', 'musst', 'willst', 'darfst', 'sollst', 'möchtest'],
                    ['er, sie, es', 'kann', 'muss', 'will', 'darf', 'soll', 'möchte'],
                    ['wir', 'können', 'müssen', 'wollen', 'dürfen', 'sollen', 'möchten'],
                    ['ihr', 'könnt', 'müsst', 'wollt', 'dürft', 'sollt', 'möchtet'],
                    ['sie, Sie', 'können', 'müssen', 'wollen', 'dürfen', 'sollen', 'möchten']
                ],
                note: 'Формы `ich` и `er/sie/es` совпадают: `ich kann` — `er kann`. Второй глагол — инфинитив в конце: `Ich kann morgen nicht kommen.`'
            },
            {
                type: 'table',
                head: ['Глагол', 'Значение', 'Пример'],
                rows: [
                    ['können', 'мочь, уметь', 'Ich kann am Montag nicht kommen.'],
                    ['müssen', 'должен, нужно', 'Ich muss am Montag arbeiten.'],
                    ['wollen', 'хотеть (твёрдо)', 'Wir wollen im Sommer umziehen.'],
                    ['möchten', 'хотел бы (вежливо)', 'Ich möchte einen Termin vereinbaren.'],
                    ['dürfen', 'можно, разрешено', 'Darf ich meinen Sohn mitbringen?'],
                    ['sollen', 'должен (так велели или советуют)', 'Der Arzt sagt, ich soll im Bett bleiben.'],
                    ['nicht müssen', 'не нужно, не обязательно', 'Sie müssen nicht kommen.'],
                    ['nicht dürfen', 'нельзя', 'Hier darf man nicht parken.']
                ],
                note: '«Нельзя» — `nicht dürfen`, а `nicht müssen` — «не нужно». Русское «не должен» переводите по смыслу.'
            },
            {
                type: 'table',
                head: ['Лицо', 'sein → wäre', 'haben → hätte', 'können → könnte', 'werden → würde'],
                rows: [
                    ['ich', 'wäre', 'hätte', 'könnte', 'würde'],
                    ['du', 'wärst', 'hättest', 'könntest', 'würdest'],
                    ['er, sie, es', 'wäre', 'hätte', 'könnte', 'würde'],
                    ['wir', 'wären', 'hätten', 'könnten', 'würden'],
                    ['ihr', 'wärt', 'hättet', 'könntet', 'würdet'],
                    ['sie, Sie', 'wären', 'hätten', 'könnten', 'würden']
                ],
                note: 'Konjunktiv II: на этих четырёх формах держится вежливость письма.'
            },
            {
                type: 'exs',
                items: [
                    { de: '**Könnten** Sie mir bitte die Unterlagen schicken?', ru: 'Не могли бы вы прислать мне документы?' },
                    { de: '**Würden** Sie mich bitte zurückrufen?', ru: 'Не могли бы вы мне перезвонить?' },
                    { de: 'Ich **hätte** gern einen Termin am Montag.', ru: 'Я хотел бы записаться на понедельник.' },
                    { de: 'Es **wäre** schön, wenn Sie kommen könnten.', ru: 'Было бы хорошо, если бы вы смогли прийти.' },
                    { de: 'Ich **würde** gern am Kurs teilnehmen.', ru: 'Я бы с удовольствием участвовал в курсе.' }
                ]
            },
            { type: 'trap', wrong: 'Ich will einen Termin.', right: 'Ich möchte einen Termin.', why: '`Ich will` в письме звучит как требование. Вежливо — `Ich möchte …` или `Ich hätte gern …`.' },
            { type: 'tip', text: 'Для вежливой просьбы хватает двух форм: `Könnten Sie …?` и `Ich würde gern …`. Инфинитив — в конец: `Könnten Sie mir die Unterlagen schicken?`' }
        ]
    },

    {
        id: 'r-partizip',
        title: 'Perfekt: 50 частых глаголов письма',
        blocks: [
            { type: 'rule', text: 'Perfekt = `haben` или `sein` на втором месте + Partizip II в конце: `Ich habe den Vertrag gekündigt.`' },
            {
                type: 'table',
                head: ['Тип глагола', 'Partizip II', 'Пример'],
                rows: [
                    ['правильный', '`ge-` … `-t`', 'machen → gemacht, arbeiten → gearbeitet'],
                    ['неправильный', '`ge-` … `-en`, часто с другим гласным', 'schreiben → geschrieben, helfen → geholfen; но на `-t`: bringen → gebracht, denken → gedacht, wissen → gewusst'],
                    ['с отделяемой приставкой (`an-`, `ab-`, `auf-`, `aus-`, `ein-`, `mit-`, `um-`, `zurück-` …)', '`-ge-` после приставки', 'anrufen → angerufen, abholen → abgeholt'],
                    ['с неотделяемой приставкой (`be-`, `emp-`, `ent-`, `er-`, `ge-`, `miss-`, `ver-`, `zer-`)', 'без `ge-`', 'bezahlen → bezahlt, verstehen → verstanden'],
                    ['на `-ieren`', 'без `ge-`', 'reparieren → repariert']
                ]
            },
            {
                type: 'list',
                items: [
                    '`sein` — движение с места на место: `gehen`, `kommen`, `fahren`, `fliegen`, `ankommen`, `umziehen`.',
                    '`sein` — изменение состояния: `werden`, `kaputtgehen`; а также `sein`, `bleiben`, `passieren`.',
                    '`haben` — все остальные, в том числе все глаголы с `sich` и с прямым дополнением.'
                ]
            },
            {
                type: 'table',
                head: ['Инфинитив', '3-е лицо (er)', 'Präteritum (er)', 'Perfekt (er)', 'Перевод'],
                rows: [
                    ['abholen', '—', '—', 'hat abgeholt', 'забрать'],
                    ['absagen', '—', '—', 'hat abgesagt', 'отменить, отказаться'],
                    ['anfangen', 'fängt an', '—', 'hat angefangen', 'начинать'],
                    ['ankommen', 'kommt an', '—', 'ist angekommen', 'прибыть'],
                    ['anrufen', 'ruft an', '—', 'hat angerufen', 'позвонить'],
                    ['antworten', '—', '—', 'hat geantwortet', 'ответить'],
                    ['arbeiten', '—', '—', 'hat gearbeitet', 'работать'],
                    ['beginnen', 'beginnt', '—', 'hat begonnen', 'начинать(ся)'],
                    ['bekommen', 'bekommt', '—', 'hat bekommen', 'получить'],
                    ['bestehen', 'besteht', '—', 'hat bestanden', 'сдать (экзамен)'],
                    ['bestellen', '—', '—', 'hat bestellt', 'заказать'],
                    ['besuchen', '—', '—', 'hat besucht', 'посетить'],
                    ['bezahlen', '—', '—', 'hat bezahlt', 'заплатить'],
                    ['bleiben', 'bleibt', '—', 'ist geblieben', 'оставаться'],
                    ['bringen', 'bringt', '—', 'hat gebracht', 'принести'],
                    ['denken', 'denkt', 'dachte', 'hat gedacht', 'думать'],
                    ['einladen', 'lädt ein', '—', 'hat eingeladen', 'пригласить'],
                    ['erklären', '—', '—', 'hat erklärt', 'объяснить'],
                    ['essen', 'isst', '—', 'hat gegessen', 'есть'],
                    ['fahren', 'fährt', '—', 'ist gefahren', 'ехать'],
                    ['finden', 'findet', 'fand', 'hat gefunden', 'найти; считать'],
                    ['fliegen', 'fliegt', '—', 'ist geflogen', 'лететь'],
                    ['fragen', '—', '—', 'hat gefragt', 'спросить'],
                    ['geben', 'gibt', 'gab', 'hat gegeben', 'дать; `es gab` — было, имелось'],
                    ['gehen', 'geht', 'ging', 'ist gegangen', 'идти'],
                    ['haben', 'hat', 'hatte', 'hat gehabt', 'иметь'],
                    ['helfen', 'hilft', '—', 'hat geholfen', 'помочь'],
                    ['kaputtgehen', 'geht kaputt', '—', 'ist kaputtgegangen', 'сломаться'],
                    ['kaufen', '—', '—', 'hat gekauft', 'купить'],
                    ['kommen', 'kommt', 'kam', 'ist gekommen', 'прийти'],
                    ['kündigen', '—', '—', 'hat gekündigt', 'расторгнуть (договор)'],
                    ['lesen', 'liest', '—', 'hat gelesen', 'читать'],
                    ['machen', '—', '—', 'hat gemacht', 'делать'],
                    ['nehmen', 'nimmt', '—', 'hat genommen', 'взять'],
                    ['passieren', '—', '—', 'ist passiert', 'случиться'],
                    ['reparieren', '—', '—', 'hat repariert', 'отремонтировать'],
                    ['sagen', '—', '—', 'hat gesagt', 'сказать'],
                    ['schicken', '—', '—', 'hat geschickt', 'отправить'],
                    ['schreiben', 'schreibt', '—', 'hat geschrieben', 'писать'],
                    ['sehen', 'sieht', '—', 'hat gesehen', 'видеть'],
                    ['sein', 'ist', 'war', 'ist gewesen', 'быть'],
                    ['sprechen', 'spricht', '—', 'hat gesprochen', 'говорить'],
                    ['stattfinden', 'findet statt', '—', 'hat stattgefunden', 'состояться'],
                    ['treffen', 'trifft', '—', 'hat getroffen', 'встретить'],
                    ['umziehen', 'zieht um', '—', 'ist umgezogen', 'переехать'],
                    ['vergessen', 'vergisst', '—', 'hat vergessen', 'забыть'],
                    ['verstehen', 'versteht', '—', 'hat verstanden', 'понять'],
                    ['warten', '—', '—', 'hat gewartet', 'ждать'],
                    ['werden', 'wird', 'wurde', 'ist geworden', 'стать'],
                    ['wissen', 'weiß', 'wusste', 'hat gewusst', 'знать']
                ],
                note: '3-е лицо дано только у неправильных глаголов, Präteritum — только там, где в письме он нужен часто: `war`, `hatte`, `es gab`, `kam`, `ging`, `wusste`, `dachte`, `fand`, `wurde`.'
            },
            {
                type: 'table',
                head: ['Лицо', 'sein', 'haben', 'können', 'müssen', 'wollen', 'dürfen', 'sollen'],
                rows: [
                    ['ich', 'war', 'hatte', 'konnte', 'musste', 'wollte', 'durfte', 'sollte'],
                    ['du', 'warst', 'hattest', 'konntest', 'musstest', 'wolltest', 'durftest', 'solltest'],
                    ['er, sie, es', 'war', 'hatte', 'konnte', 'musste', 'wollte', 'durfte', 'sollte'],
                    ['wir', 'waren', 'hatten', 'konnten', 'mussten', 'wollten', 'durften', 'sollten'],
                    ['ihr', 'wart', 'hattet', 'konntet', 'musstet', 'wolltet', 'durftet', 'solltet'],
                    ['sie, Sie', 'waren', 'hatten', 'konnten', 'mussten', 'wollten', 'durften', 'sollten']
                ],
                note: 'Präteritum. Эти глаголы о прошлом почти всегда ставят в Präteritum, а не в Perfekt: `Ich war krank.`, `Ich konnte nicht kommen.`'
            },
            { type: 'trap', wrong: 'Ich habe gestern beim Arzt gewesen.', right: 'Ich war gestern beim Arzt.', why: 'У `sein` в Perfekt вспомогательный глагол тоже `sein` (`ich bin … gewesen`), но в письме проще и естественнее `ich war`.' },
            { type: 'trap', wrong: 'Ich habe nach Berlin gefahren.', right: 'Ich bin nach Berlin gefahren.', why: 'Движение из одного места в другое — Perfekt с `sein`. В русском вспомогательного глагола нет, поэтому выбор легко пропустить.' },
            { type: 'tip', text: 'О прошлом в письме: `sein`, `haben` и модальные — обычно в Präteritum (`war`, `hatte`, `konnte`), большинство остальных глаголов — в Perfekt по этой таблице. Если нужного глагола здесь нет и форма неизвестна, возьмите глагол из таблицы.' }
        ]
    },

    {
        id: 'r-artikel',
        title: 'Артикль и склонение',
        blocks: [
            {
                type: 'table',
                head: ['Падеж', 'м. р.', 'ж. р.', 'ср. р.', 'мн. ч.'],
                rows: [
                    ['Nominativ', '**der** Termin', '**die** Wohnung', '**das** Kind', '**die** Kinder'],
                    ['Akkusativ', '**den** Termin', '**die** Wohnung', '**das** Kind', '**die** Kinder'],
                    ['Dativ', '**dem** Termin', '**der** Wohnung', '**dem** Kind', '**den** Kinder**n**']
                ],
                note: 'Определённый артикль. Больше всего меняется мужской род: der → den → dem. В Dativ мн. ч. к существительному добавляется -n (`den Kindern`), кроме слов на -s и -n (`den Autos`, `den Wohnungen`).'
            },
            {
                type: 'table',
                head: ['Падеж', 'м. р.', 'ж. р.', 'ср. р.', 'мн. ч.'],
                rows: [
                    ['Nominativ', '**ein** / **kein** Termin', '**eine** / **keine** Wohnung', '**ein** / **kein** Kind', '— / **keine** Kinder'],
                    ['Akkusativ', '**einen** / **keinen** Termin', '**eine** / **keine** Wohnung', '**ein** / **kein** Kind', '— / **keine** Kinder'],
                    ['Dativ', '**einem** / **keinem** Termin', '**einer** / **keiner** Wohnung', '**einem** / **keinem** Kind', '— / **keinen** Kinder**n**']
                ],
                note: 'Неопределённый артикль и `kein`. У `ein` нет множественного числа: `Ich habe Kinder.`, но `Ich habe keine Kinder.`'
            },
            {
                type: 'table',
                head: ['Кто', 'Чей', 'Пример'],
                rows: [
                    ['ich', 'mein', 'mein Sohn, meine Tochter'],
                    ['du', 'dein', 'dein Brief, deine Nachricht'],
                    ['er, es', 'sein', 'sein Vater, seine Mutter'],
                    ['sie (она)', 'ihr', 'ihr Mann, ihre Kinder'],
                    ['wir', 'unser', 'unser Vermieter, unsere Wohnung'],
                    ['ihr (вы, друзья)', 'euer', 'euer Haus, eure Einladung'],
                    ['sie (они)', 'ihr', 'ihr Auto, ihre Eltern'],
                    ['Sie (вежливо)', 'Ihr', 'Ihr Brief, Ihre Antwort']
                ]
            },
            {
                type: 'table',
                head: ['Падеж', 'м. р.', 'ж. р.', 'ср. р.', 'мн. ч.'],
                rows: [
                    ['Nominativ', 'mein Sohn', 'mein**e** Tochter', 'mein Kind', 'mein**e** Kinder'],
                    ['Akkusativ', 'mein**en** Sohn', 'mein**e** Tochter', 'mein Kind', 'mein**e** Kinder'],
                    ['Dativ', 'mein**em** Sohn', 'mein**er** Tochter', 'mein**em** Kind', 'mein**en** Kinder**n**']
                ],
                note: 'Притяжательные склоняются как `kein`: `deinen`, `seinem`, `ihrer`, `unsere`, `Ihrem`. У `euer` выпадает -e-: `eure`, `euren`, `eurem`.'
            },
            {
                type: 'table',
                head: ['Nominativ', 'Akkusativ и Dativ', 'Пример'],
                rows: [
                    ['der Herr', 'den / dem Herr**n**', 'Ich schreibe an Herrn Weber.'],
                    ['der Nachbar', 'den / dem Nachbar**n**', 'Ich habe mit dem Nachbarn gesprochen.'],
                    ['der Kollege', 'den / dem Kollege**n**', 'Ich frage meinen Kollegen.'],
                    ['der Kunde', 'den / dem Kunde**n**', 'Wir helfen dem Kunden gern.']
                ],
                note: 'Эти слова мужского рода получают -(e)n во всех формах, кроме Nominativ ед. ч. В обращении `Sehr geehrter Herr Weber` — Nominativ, без -n.'
            },
            {
                type: 'table',
                head: ['Падеж', 'Вопрос', 'Когда нужен'],
                rows: [
                    ['Nominativ', 'wer? was?', 'подлежащее; после `sein`: `Das ist mein Sohn.`'],
                    ['Akkusativ', 'wen? was?', 'прямое дополнение: `Ich habe einen Termin.`; после `für`, `ohne`, `um`, `bis`, `gegen`, `durch`'],
                    ['Dativ', 'wem?', 'кому: `Ich helfe meiner Nachbarin.`; после `mit`, `bei`, `von`, `zu`, `nach`, `aus`, `seit`']
                ]
            },
            { type: 'trap', wrong: 'Ich habe am Montag ein Termin.', right: 'Ich habe am Montag einen Termin.', why: 'После `haben` — Akkusativ, а `der Termin` мужского рода, поэтому `einen`. В русском артикля нет, и падеж легко «потерять».' },
            { type: 'trap', wrong: 'Ich komme mit meine Tochter.', right: 'Ich komme mit meiner Tochter.', why: '`mit` всегда требует Dativ: `meiner Tochter`, `meinem Sohn`.' },
            { type: 'tip', text: 'Пишете артикль — задайте два вопроса: какого рода слово и какой падеж требует глагол или предлог. Ответ на оба — и клетка таблицы найдена.' }
        ]
    },

    {
        id: 'r-pronomen',
        title: 'Личные местоимения',
        blocks: [
            {
                type: 'table',
                head: ['Nominativ', 'Akkusativ', 'Dativ', 'Значение'],
                rows: [
                    ['ich', 'mich', 'mir', 'я'],
                    ['du', 'dich', 'dir', 'ты'],
                    ['er', 'ihn', 'ihm', 'он'],
                    ['sie', 'sie', 'ihr', 'она'],
                    ['es', 'es', 'ihm', 'оно'],
                    ['wir', 'uns', 'uns', 'мы'],
                    ['ihr', 'euch', 'euch', 'вы (друзьям)'],
                    ['sie', 'sie', 'ihnen', 'они'],
                    ['Sie', 'Sie', 'Ihnen', 'вы (вежливо)']
                ],
                note: 'Вежливые `Sie` и `Ihnen` — всегда с заглавной, даже в середине предложения.'
            },
            {
                type: 'exs',
                items: [
                    { de: 'Ich rufe **Sie** morgen an.', ru: 'Я позвоню вам завтра.' },
                    { de: 'Ich danke **Ihnen** für Ihre Hilfe.', ru: 'Благодарю вас за помощь.' },
                    { de: 'Können Sie **mir** bitte helfen?', ru: 'Не могли бы вы мне помочь?' },
                    { de: 'Ich habe **ihn** gestern angerufen.', ru: 'Я вчера ему позвонил.' },
                    { de: 'Ich schicke **dir** die Adresse.', ru: 'Я пришлю тебе адрес.' }
                ]
            },
            {
                type: 'table',
                head: ['Глагол + Dativ', 'Пример', 'Перевод'],
                rows: [
                    ['helfen', 'Können Sie mir helfen?', 'Вы можете мне помочь?'],
                    ['danken', 'Ich danke Ihnen.', 'Благодарю вас.'],
                    ['antworten', 'Bitte antworten Sie mir bald.', 'Пожалуйста, ответьте мне поскорее.'],
                    ['gefallen', 'Die Wohnung gefällt mir.', 'Квартира мне нравится.'],
                    ['passen', 'Der Termin passt mir gut.', 'Это время мне подходит.'],
                    ['gehören', 'Das Fahrrad gehört mir.', 'Это мой велосипед.'],
                    ['gratulieren', 'Ich gratuliere dir!', 'Поздравляю тебя!'],
                    ['wehtun', 'Der Kopf tut mir weh.', 'У меня болит голова.']
                ],
                note: 'Русское «звонить кому» — по-немецки Akkusativ: `Ich rufe Sie an.` А «благодарить кого» — Dativ: `Ich danke Ihnen.`'
            },
            {
                type: 'table',
                head: ['Лицо', 'Возвратное', 'Пример'],
                rows: [
                    ['ich', 'mich', 'Ich freue mich auf Ihre Antwort.'],
                    ['du', 'dich', 'Melde dich bitte bald.'],
                    ['er, sie, es', 'sich', 'Er entschuldigt sich.'],
                    ['wir', 'uns', 'Wir treffen uns am Samstag.'],
                    ['ihr', 'euch', 'Freut ihr euch auf den Urlaub?'],
                    ['sie, Sie', 'sich', 'Bitte melden Sie sich bei mir.']
                ],
                note: '`sich` всегда со строчной, даже рядом с вежливым `Sie`.'
            },
            {
                type: 'table',
                head: ['Что стоит', 'Порядок', 'Пример'],
                rows: [
                    ['два существительных', 'Dativ → Akkusativ', 'Ich gebe dem Lehrer die Bescheinigung.'],
                    ['местоимение и существительное', 'местоимение первым', 'Ich gebe ihm die Bescheinigung. / Ich gebe sie dem Lehrer.'],
                    ['два местоимения', 'Akkusativ → Dativ', 'Ich gebe sie ihm.']
                ]
            },
            { type: 'trap', wrong: 'Ich danke Sie für die Einladung.', right: 'Ich danke Ihnen für die Einladung.', why: '`danken` требует Dativ: `Ihnen`, `dir`. По-русски «благодарю вас» — винительный падеж, отсюда ошибка.' },
            { type: 'tip', text: 'Проверьте каждое `Sie` и `Ihnen` в письме: вежливые формы — с заглавной, а после `helfen`, `danken`, `antworten`, `gefallen`, `passen` нужен Dativ (`Ihnen`, `dir`).' }
        ]
    },

    {
        id: 'r-adjektiv',
        title: 'Окончания прилагательных',
        blocks: [
            {
                type: 'table',
                head: ['После der / die / das', 'м. р.', 'ж. р.', 'ср. р.', 'мн. ч.'],
                rows: [
                    ['Nominativ', 'der neu**e** Kurs', 'die neu**e** Wohnung', 'das neu**e** Formular', 'die neu**en** Unterlagen'],
                    ['Akkusativ', 'den neu**en** Kurs', 'die neu**e** Wohnung', 'das neu**e** Formular', 'die neu**en** Unterlagen'],
                    ['Dativ', 'dem neu**en** Kurs', 'der neu**en** Wohnung', 'dem neu**en** Formular', 'den neu**en** Unterlagen']
                ],
                note: 'Только -e или -en. -e — в пяти клетках: Nominativ ед. ч. и Akkusativ ж. и ср. р., всё остальное — -en. Так же после `dieser`, `jeder`, `welcher`.'
            },
            {
                type: 'table',
                head: ['После ein / kein / mein', 'м. р.', 'ж. р.', 'ср. р.', 'мн. ч.'],
                rows: [
                    ['Nominativ', 'ein neu**er** Kurs', 'eine neu**e** Wohnung', 'ein neu**es** Formular', 'keine neu**en** Unterlagen'],
                    ['Akkusativ', 'einen neu**en** Kurs', 'eine neu**e** Wohnung', 'ein neu**es** Formular', 'keine neu**en** Unterlagen'],
                    ['Dativ', 'einem neu**en** Kurs', 'einer neu**en** Wohnung', 'einem neu**en** Formular', 'keinen neu**en** Unterlagen']
                ],
                note: 'Где у `ein` нет окончания (Nominativ м. и ср. р., Akkusativ ср. р.), род показывает прилагательное: `ein neuer Kurs`, `ein neues Formular`. Во мн. ч. после `keine`, `meine` — всегда -en.'
            },
            {
                type: 'table',
                head: ['Без артикля', 'м. р.', 'ж. р.', 'ср. р.', 'мн. ч.'],
                rows: [
                    ['Nominativ', 'frisch**er** Kaffee', 'frisch**e** Milch', 'frisch**es** Brot', 'frisch**e** Brötchen'],
                    ['Akkusativ', 'frisch**en** Kaffee', 'frisch**e** Milch', 'frisch**es** Brot', 'frisch**e** Brötchen'],
                    ['Dativ', 'frisch**em** Kaffee', 'frisch**er** Milch', 'frisch**em** Brot', 'frisch**en** Brötchen']
                ],
                note: 'Без артикля у прилагательного то же окончание, что у артикля der / die / das: der → -er, die → -e, das → -es, den → -en, dem → -em. Так же после чисел: `zwei neue Termine`.'
            },
            {
                type: 'exs',
                items: [
                    { de: 'Mit freundlich**en** Grüßen', ru: 'С уважением (Dativ мн. ч.: -en)' },
                    { de: 'Herzlich**en** Glückwunsch!', ru: 'Поздравляю! (Akkusativ м. р.: -en)' },
                    { de: 'Lieb**e** Grüße', ru: 'С тёплым приветом (мн. ч.: -e)' },
                    { de: 'Gut**e** Besserung!', ru: 'Выздоравливайте! (ж. р.: -e)' },
                    { de: 'Schön**es** Wochenende!', ru: 'Хороших выходных! (ср. р.: -es)' }
                ]
            },
            { type: 'rule', text: 'После `sein` и `werden` прилагательное стоит **без окончания**: `Die Wohnung ist zu klein.`, `Der Kurs war sehr gut.`' },
            { type: 'trap', wrong: 'Mit freundliche Grüße', right: 'Mit freundlichen Grüßen', why: '`mit` — Dativ, мн. ч. без артикля: у прилагательного -en, у существительного -n.' },
            { type: 'trap', wrong: 'Ich suche eine Wohnung mit einem großem Balkon.', right: 'Ich suche eine Wohnung mit einem großen Balkon.', why: 'Окончание рода уже есть у артикля `einem`, поэтому у прилагательного -en.' },
            { type: 'tip', text: 'Порядок проверки: 1) род и падеж существительного; 2) есть ли артикль и видно ли в нём окончание рода; 3) если видно — у прилагательного -e или -en, если нет — прилагательное берёт окончание рода само.' }
        ]
    },

    {
        id: 'r-praep',
        title: 'Предлоги',
        blocks: [
            {
                type: 'table',
                head: ['Всегда Akkusativ', 'Значение', 'Пример'],
                rows: [
                    ['für', 'для; за', 'Danke für die Einladung.'],
                    ['ohne', 'без', 'Ich komme ohne meinen Mann.'],
                    ['um', 'в (о времени на часах)', 'Der Kurs beginnt um 9 Uhr.'],
                    ['gegen', 'около (о времени); против', 'Ich komme gegen 18 Uhr.'],
                    ['bis', 'до', 'Bitte antworten Sie bis Freitag.'],
                    ['durch', 'через, по', 'Wir sind durch die Stadt gegangen.']
                ]
            },
            {
                type: 'table',
                head: ['Всегда Dativ', 'Значение', 'Пример'],
                rows: [
                    ['mit', 'с; на (о транспорте)', 'Ich komme mit meiner Tochter. Ich fahre mit dem Bus.'],
                    ['bei', 'у; при; в (на фирме)', 'Ich war beim Arzt. Ich arbeite bei einer Baufirma.'],
                    ['von', 'от', 'Ich habe einen Brief von meinem Vermieter bekommen.'],
                    ['zu', 'к; в (к человеку, в учреждение)', 'Ich gehe zum Arzt. Mein Sohn geht zur Schule.'],
                    ['nach', 'после; в (город, страну без артикля); домой', 'nach dem Kurs, nach Berlin, nach Hause'],
                    ['aus', 'из', 'Ich ziehe aus der Wohnung aus.'],
                    ['seit', 'с (и до сих пор); уже', 'Ich wohne seit drei Jahren hier.']
                ]
            },
            {
                type: 'table',
                head: ['Предлог', 'Wo? (где) — Dativ', 'Wohin? (куда) — Akkusativ'],
                rows: [
                    ['in', 'Ich bin im Kurs.', 'Ich gehe in den Kurs.'],
                    ['an', 'Der Zettel hängt an der Tür.', 'Ich hänge einen Zettel an die Tür.'],
                    ['auf', 'Das Paket liegt auf dem Tisch.', 'Ich lege das Paket auf den Tisch.'],
                    ['über', 'Die Nachbarn über mir sind sehr laut.', 'Ich hänge die Lampe über den Tisch.'],
                    ['unter', 'Der Schlüssel liegt unter der Matte.', 'Ich lege den Schlüssel unter die Matte.'],
                    ['vor', 'Das Fahrrad steht vor dem Haus.', 'Ich stelle das Fahrrad vor das Haus.'],
                    ['hinter', 'Der Parkplatz ist hinter dem Haus.', 'Ich fahre das Auto hinter das Haus.'],
                    ['neben', 'Die Apotheke ist neben der Bank.', 'Ich stelle den Stuhl neben das Bett.'],
                    ['zwischen', 'Die Post ist zwischen dem Bahnhof und der Bank.', 'Ich stelle den Tisch zwischen die Fenster.']
                ],
                note: 'Где? (место) — Dativ. Куда? (движение к месту) — Akkusativ. О времени `in`, `an`, `vor` — с Dativ: `am Montag`, `im Mai`, `vor einer Woche`.'
            },
            {
                type: 'table',
                head: ['Слитно', 'Полностью', 'Пример'],
                rows: [
                    ['im', 'in dem', 'im Kurs, im Mai'],
                    ['ins', 'in das', 'ins Kino, ins Krankenhaus'],
                    ['am', 'an dem', 'am Montag, am Bahnhof'],
                    ['zum', 'zu dem', 'zum Arzt, zum Geburtstag'],
                    ['zur', 'zu der', 'zur Schule, zur Arbeit'],
                    ['beim', 'bei dem', 'beim Arzt, beim Umzug'],
                    ['vom', 'von dem', 'vom Arzt, vom 3. bis zum 10. Mai']
                ],
                note: 'В письме почти всегда пишут слитную форму. `zu` + женский род — `zur`, не `zum`.'
            },
            {
                type: 'table',
                head: ['Выражение', 'Перевод'],
                rows: [
                    ['zu Hause', 'дома'],
                    ['nach Hause', 'домой'],
                    ['beim Arzt / zum Arzt', 'у врача / к врачу'],
                    ['zur Arbeit / zur Schule', 'на работу / в школу'],
                    ['im Urlaub', 'в отпуске'],
                    ['mit dem Bus / mit dem Auto', 'на автобусе / на машине'],
                    ['zu Fuß', 'пешком'],
                    ['per E-Mail / am Telefon', 'по электронной почте / по телефону'],
                    ['im Internet / in der Zeitung', 'в интернете / в газете'],
                    ['auf Deutsch', 'по-немецки'],
                    ['im Erdgeschoss / im ersten Stock', 'на первом этаже / на втором этаже'],
                    ['in der Nähe', 'поблизости'],
                    ['in der …straße', 'на улице …']
                ]
            },
            { type: 'trap', wrong: 'Ich gehe zu Hause.', right: 'Ich gehe nach Hause.', why: '`zu Hause` — где (дома), `nach Hause` — куда (домой).' },
            { type: 'trap', wrong: 'Ich fahre mit Bus.', right: 'Ich fahre mit dem Bus.', why: 'В русском «на автобусе» артикля нет, а в немецком после `mit` нужен артикль в Dativ.' },
            { type: 'tip', text: 'Сомневаетесь в падеже после предлога — сначала найдите его в списках «всегда Akkusativ» и «всегда Dativ». Если его там нет, спросите себя: «где?» (Dativ) или «куда?» (Akkusativ).' }
        ]
    },

    {
        id: 'r-verbprep',
        title: 'Глаголы с предлогами',
        blocks: [
            {
                type: 'table',
                head: ['Глагол', 'Предлог и падеж', 'Пример', 'Значение'],
                rows: [
                    ['achten', 'auf + Akk', 'Bitte achten Sie auf die Ruhezeiten.', 'обращать внимание на'],
                    ['abhängen', 'von + Dat', 'Das hängt vom Preis ab.', 'зависеть от'],
                    ['sich anmelden', 'für + Akk', 'Ich möchte mich für den Abendkurs anmelden.', 'записаться на'],
                    ['antworten', 'auf + Akk', 'Ich antworte auf Ihre Anzeige.', 'отвечать на'],
                    ['sich ärgern', 'über + Akk', 'Ich ärgere mich über den Lärm.', 'сердиться на'],
                    ['aufhören', 'mit + Dat', 'Bitte hören Sie mit der lauten Musik auf.', 'прекратить'],
                    ['sich bedanken', 'für + Akk', 'Ich bedanke mich für Ihre Hilfe.', 'благодарить за'],
                    ['beginnen', 'mit + Dat', 'Nächste Woche beginne ich mit dem Deutschkurs.', 'начинать (что-то)'],
                    ['sich beschweren', 'über + Akk', 'Ich möchte mich über die Heizung beschweren.', 'жаловаться на'],
                    ['sich bewerben', 'um + Akk', 'Ich bewerbe mich um die Stelle als Verkäufer.', 'подавать заявку на (место)'],
                    ['bitten', 'um + Akk', 'Ich bitte Sie um einen neuen Termin.', 'просить о'],
                    ['danken', 'für + Akk', 'Ich danke Ihnen für die Einladung.', 'благодарить за'],
                    ['denken', 'an + Akk', 'Ich denke oft an dich.', 'думать о'],
                    ['einladen', 'zu + Dat', 'Ich lade dich zu meiner Geburtstagsfeier ein.', 'приглашать на'],
                    ['sich entschuldigen', 'für + Akk', 'Ich entschuldige mich für die Verspätung.', 'извиняться за'],
                    ['sich erinnern', 'an + Akk', 'Erinnern Sie sich an unser Gespräch?', 'помнить о, вспоминать'],
                    ['erzählen', 'von + Dat', 'Ich erzähle dir von meiner neuen Arbeit.', 'рассказывать о'],
                    ['fragen', 'nach + Dat', 'Ich möchte nach dem Preis fragen.', 'спрашивать о'],
                    ['sich freuen', 'auf + Akk', 'Ich freue mich auf das Wochenende.', 'радоваться (тому, что будет)'],
                    ['sich freuen', 'über + Akk', 'Ich habe mich über dein Geschenk gefreut.', 'радоваться (тому, что есть)'],
                    ['sich gewöhnen', 'an + Akk', 'Ich habe mich an die neue Arbeit gewöhnt.', 'привыкать к'],
                    ['gratulieren', 'zu + Dat', 'Ich gratuliere dir zur Hochzeit.', 'поздравлять с'],
                    ['helfen', 'bei + Dat', 'Kannst du mir beim Umzug helfen?', 'помогать с'],
                    ['hoffen', 'auf + Akk', 'Ich hoffe auf eine schnelle Antwort.', 'надеяться на'],
                    ['sich informieren', 'über + Akk', 'Ich möchte mich über Ihre Kurse informieren.', 'узнавать о'],
                    ['sich interessieren', 'für + Akk', 'Ich interessiere mich für die Wohnung.', 'интересоваться'],
                    ['sich kümmern', 'um + Akk', 'Wer kümmert sich um die Reparatur?', 'заботиться о, заниматься'],
                    ['sich melden', 'bei + Dat', 'Bitte melden Sie sich bei mir.', 'связаться с'],
                    ['nachdenken', 'über + Akk', 'Ich denke noch über Ihr Angebot nach.', 'обдумывать'],
                    ['rechnen', 'mit + Dat', 'Ich rechne mit Ihrer Antwort bis Freitag.', 'рассчитывать на'],
                    ['schreiben', 'an + Akk', 'Ich schreibe an die Hausverwaltung.', 'писать (кому)'],
                    ['sprechen', 'mit + Dat', 'Ich habe mit dem Vermieter gesprochen.', 'говорить с'],
                    ['sprechen', 'über + Akk', 'Wir müssen über die Nebenkosten sprechen.', 'говорить о'],
                    ['teilnehmen', 'an + Dat', 'Ich möchte am Kurs teilnehmen.', 'участвовать в'],
                    ['telefonieren', 'mit + Dat', 'Ich habe mit Ihrer Kollegin telefoniert.', 'говорить по телефону с'],
                    ['sich treffen', 'mit + Dat', 'Ich treffe mich am Samstag mit meiner Freundin.', 'встречаться с'],
                    ['sich vorbereiten', 'auf + Akk', 'Ich bereite mich auf die Prüfung vor.', 'готовиться к'],
                    ['warten', 'auf + Akk', 'Ich warte seit zwei Wochen auf Ihre Antwort.', 'ждать'],
                    ['sich wenden', 'an + Akk', 'Bitte wenden Sie sich an das Sekretariat.', 'обращаться к'],
                    ['sich verabschieden', 'von + Dat', 'Ich möchte mich von allen verabschieden.', 'прощаться с']
                ]
            },
            {
                type: 'table',
                head: ['Предлог', 'Вопрос о вещи', 'Ссылка на вещь', 'О человеке'],
                rows: [
                    ['auf', 'Worauf warten Sie?', 'Ich warte darauf.', 'Ich warte auf ihn.'],
                    ['über', 'Worüber ärgern Sie sich?', 'Ich ärgere mich darüber.', 'Ich ärgere mich über ihn.'],
                    ['mit', 'Womit sind Sie nicht zufrieden?', 'Ich bin damit nicht zufrieden.', 'Ich spreche mit ihr.']
                ],
                note: 'О вещах — `wo-` / `da-` + предлог (перед гласной `wor-` / `dar-`), о людях — предлог + местоимение.'
            },
            { type: 'trap', wrong: 'Ich warte Ihre Antwort.', right: 'Ich warte auf Ihre Antwort.', why: 'По-русски «жду ответа» — без предлога. По-немецки `warten auf` + Akkusativ.' },
            { type: 'trap', wrong: 'Ich habe mich sehr auf Ihren Brief gefreut.', right: 'Ich habe mich sehr über Ihren Brief gefreut.', why: '`sich freuen über` — о том, что уже есть или случилось; `sich freuen auf` — о том, что будет.' },
            { type: 'tip', text: 'Учите глагол вместе с предлогом и падежом как одно целое: `warten auf + Akk`. В письмах чаще всего нужны `sich freuen auf`, `sich beschweren über`, `bitten um`, `sich entschuldigen für` и `danken für`.' }
        ]
    },

    {
        id: 'r-zeit',
        title: 'Время и даты',
        blocks: [
            {
                type: 'table',
                head: ['День', 'Когда', 'Регулярно', 'Перевод'],
                rows: [
                    ['der Montag', 'am Montag', 'montags', 'понедельник'],
                    ['der Dienstag', 'am Dienstag', 'dienstags', 'вторник'],
                    ['der Mittwoch', 'am Mittwoch', 'mittwochs', 'среда'],
                    ['der Donnerstag', 'am Donnerstag', 'donnerstags', 'четверг'],
                    ['der Freitag', 'am Freitag', 'freitags', 'пятница'],
                    ['der Samstag', 'am Samstag', 'samstags', 'суббота'],
                    ['der Sonntag', 'am Sonntag', 'sonntags', 'воскресенье'],
                    ['das Wochenende', 'am Wochenende', '—', 'выходные']
                ],
                note: 'Все дни недели — мужского рода. `montags` — «по понедельникам», пишется со строчной.'
            },
            {
                type: 'table',
                head: ['Часть дня', 'Когда', 'Регулярно', 'Перевод'],
                rows: [
                    ['der Morgen', 'am Morgen', 'morgens', 'утро'],
                    ['der Vormittag', 'am Vormittag', 'vormittags', 'первая половина дня'],
                    ['der Mittag', 'am Mittag', 'mittags', 'полдень'],
                    ['der Nachmittag', 'am Nachmittag', 'nachmittags', 'вторая половина дня'],
                    ['der Abend', 'am Abend', 'abends', 'вечер'],
                    ['die Nacht', 'in der Nacht', 'nachts', 'ночь']
                ],
                note: 'Ночью — `in der Nacht`, а не «am Nacht».'
            },
            {
                type: 'table',
                head: ['Месяц', 'Перевод', 'Месяц', 'Перевод'],
                rows: [
                    ['Januar', 'январь', 'Juli', 'июль'],
                    ['Februar', 'февраль', 'August', 'август'],
                    ['März', 'март', 'September', 'сентябрь'],
                    ['April', 'апрель', 'Oktober', 'октябрь'],
                    ['Mai', 'май', 'November', 'ноябрь'],
                    ['Juni', 'июнь', 'Dezember', 'декабрь']
                ],
                note: 'Все месяцы — мужского рода: `im Mai`. Но с числом — `am`: `am 3. Mai`.'
            },
            {
                type: 'table',
                head: ['Время года', 'Когда', 'Перевод'],
                rows: [
                    ['der Frühling', 'im Frühling', 'весна'],
                    ['der Sommer', 'im Sommer', 'лето'],
                    ['der Herbst', 'im Herbst', 'осень'],
                    ['der Winter', 'im Winter', 'зима']
                ]
            },
            {
                type: 'table',
                head: ['1–10', '11–20', '21–31'],
                rows: [
                    ['1. der erste', '11. der elfte', '21. der einundzwanzigste'],
                    ['2. der zweite', '12. der zwölfte', '22. der zweiundzwanzigste'],
                    ['3. der dritte', '13. der dreizehnte', '23. der dreiundzwanzigste'],
                    ['4. der vierte', '14. der vierzehnte', '24. der vierundzwanzigste'],
                    ['5. der fünfte', '15. der fünfzehnte', '25. der fünfundzwanzigste'],
                    ['6. der sechste', '16. der sechzehnte', '26. der sechsundzwanzigste'],
                    ['7. der siebte', '17. der siebzehnte', '27. der siebenundzwanzigste'],
                    ['8. der achte', '18. der achtzehnte', '28. der achtundzwanzigste'],
                    ['9. der neunte', '19. der neunzehnte', '29. der neunundzwanzigste'],
                    ['10. der zehnte', '20. der zwanzigste', '30. der dreißigste'],
                    ['', '', '31. der einunddreißigste']
                ],
                note: 'Порядковые числительные: до 19 — число + -te, с 20 — число + -ste. Особые: `erste`, `dritte`, `siebte`, `achte`. После `am`, `vom`, `zum`, `bis zum` — окончание -en: `am ersten Mai`, `bis zum dritten Juni`.'
            },
            {
                type: 'table',
                head: ['Что', 'Как писать', 'Как читать или что значит'],
                rows: [
                    ['дата', 'am 3. Mai', 'am dritten Mai'],
                    ['дата цифрами', 'am 03.05.', 'сначала день, потом месяц'],
                    ['период', 'vom 3. bis zum 10. Mai', 'vom dritten bis zum zehnten Mai'],
                    ['время официально', 'um 14:30 Uhr', 'um vierzehn Uhr dreißig'],
                    ['время в разговоре', 'um halb drei', '2:30 или 14:30'],
                    ['время в разговоре', 'um Viertel nach drei', '3:15 или 15:15'],
                    ['время в разговоре', 'um Viertel vor vier', '3:45 или 15:45'],
                    ['время в разговоре', 'um zehn nach drei / um zehn vor drei', '3:10 / 2:50'],
                    ['год', '2027 / im Jahr 2027', 'без предлога или с `im Jahr`']
                ],
                note: 'Число с точкой — порядковое числительное: `3.` читается `dritte`. В письме надёжнее писать время цифрами: `um 14:30 Uhr`.'
            },
            {
                type: 'table',
                head: ['Предлог', 'Когда используют', 'Пример'],
                rows: [
                    ['um', 'время на часах', 'um 10 Uhr'],
                    ['am', 'день недели, дата, часть дня', 'am Montag, am 3. Mai, am Abend'],
                    ['im', 'месяц, время года', 'im Mai, im Winter'],
                    ['in', '«через» (о будущем)', 'in zwei Wochen, in einem Monat'],
                    ['vor', '«назад»; «перед»', 'vor drei Tagen, vor dem Kurs'],
                    ['nach', 'после', 'nach dem Kurs, nach der Arbeit'],
                    ['seit', 'с (и до сих пор); уже', 'seit gestern, seit einem Monat'],
                    ['ab', 'начиная с', 'ab Montag, ab dem 1. November'],
                    ['bis', 'до', 'bis Freitag, bis zum 15. Mai'],
                    ['von … bis', 'с … до', 'von 9 bis 12 Uhr'],
                    ['gegen', 'около', 'gegen 18 Uhr'],
                    ['zwischen', 'между', 'zwischen 8 und 10 Uhr']
                ],
                note: 'Без предлога: `nächste Woche`, `letzten Monat`, `Anfang Mai`, `Ende Oktober`.'
            },
            {
                type: 'table',
                head: ['Слово', 'Перевод', 'Слово', 'Перевод'],
                rows: [
                    ['vorgestern', 'позавчера', 'letzte Woche', 'на прошлой неделе'],
                    ['gestern', 'вчера', 'diese Woche', 'на этой неделе'],
                    ['heute', 'сегодня', 'nächste Woche', 'на следующей неделе'],
                    ['morgen', 'завтра', 'letzten Monat', 'в прошлом месяце'],
                    ['übermorgen', 'послезавтра', 'nächsten Monat', 'в следующем месяце'],
                    ['heute Morgen', 'сегодня утром', 'letztes Jahr', 'в прошлом году'],
                    ['heute Abend', 'сегодня вечером', 'nächstes Jahr', 'в следующем году'],
                    ['gestern Abend', 'вчера вечером', 'jetzt', 'сейчас'],
                    ['morgen früh', 'завтра утром', 'bald', 'скоро'],
                    ['morgen Nachmittag', 'завтра во второй половине дня', 'später', 'позже']
                ],
                note: 'Окончание у `nächste`, `letzte` — по роду: die Woche → `nächste Woche`, der Monat → `nächsten Monat`, das Jahr → `nächstes Jahr`. «Завтра утром» — `morgen früh`.'
            },
            { type: 'trap', wrong: 'Nach zwei Wochen ziehe ich um.', right: 'In zwei Wochen ziehe ich um.', why: '«Через две недели» от сегодняшнего дня — `in`. `nach` + срок говорят о прошлом или о времени после другого события.' },
            { type: 'trap', wrong: 'Ich bin in 2020 nach Deutschland gekommen.', right: 'Ich bin 2020 nach Deutschland gekommen.', why: 'Русское «в 2020 году» переводится без предлога: `2020` или `im Jahr 2020`.' },
            { type: 'tip', text: 'Дату и время в письме пишите цифрами (`am 3. Mai um 14:30 Uhr`) — короче и без ошибок в окончаниях. Предлог берите из таблицы: час — `um`, день и дата — `am`, месяц — `im`.' }
        ]
    },

    {
        id: 'r-genus',
        title: 'Род и множественное число',
        blocks: [
            {
                type: 'table',
                head: ['Окончание', 'Род', 'Примеры'],
                rows: [
                    ['-ung', 'die', 'die Wohnung, die Rechnung, die Einladung'],
                    ['-heit, -keit', 'die', 'die Gesundheit, die Möglichkeit'],
                    ['-ion', 'die', 'die Information, die Situation'],
                    ['-tät', 'die', 'die Universität, die Qualität'],
                    ['-schaft', 'die', 'die Nachbarschaft, die Freundschaft'],
                    ['-in (о женщине)', 'die', 'die Lehrerin, die Nachbarin'],
                    ['-e', 'чаще die', 'die Woche, die Miete; но der Kollege, das Ende'],
                    ['-chen', 'das', 'das Mädchen, das Brötchen'],
                    ['-ment', 'das', 'das Dokument, das Medikament'],
                    ['-um', 'das', 'das Zentrum, das Datum'],
                    ['инфинитив как существительное', 'das', 'das Essen, das Treffen'],
                    ['-er (кто что-то делает)', 'der', 'der Lehrer, der Vermieter'],
                    ['дни, месяцы, времена года', 'der', 'der Montag, der Mai, der Sommer']
                ],
                note: 'Подсказки верны почти всегда, кроме `-e`: там исключений больше.'
            },
            {
                type: 'table',
                head: ['Слово', 'Мн. число', 'Перевод'],
                rows: [
                    ['der Arzt', 'die Ärzte', 'врач'],
                    ['der Brief', 'die Briefe', 'письмо'],
                    ['der Herr', 'die Herren', 'господин'],
                    ['der Kollege', 'die Kollegen', 'коллега'],
                    ['der Kurs', 'die Kurse', 'курс'],
                    ['der Monat', 'die Monate', 'месяц'],
                    ['der Nachbar', 'die Nachbarn', 'сосед'],
                    ['der Platz', 'die Plätze', 'место'],
                    ['der Schaden', 'die Schäden', 'ущерб, повреждение'],
                    ['der Schlüssel', 'die Schlüssel', 'ключ'],
                    ['der Sohn', 'die Söhne', 'сын'],
                    ['der Termin', 'die Termine', 'встреча, приём (по записи)'],
                    ['der Vermieter', 'die Vermieter', 'хозяин квартиры'],
                    ['der Vertrag', 'die Verträge', 'договор'],
                    ['die Adresse', 'die Adressen', 'адрес'],
                    ['die Antwort', 'die Antworten', 'ответ'],
                    ['die Bescheinigung', 'die Bescheinigungen', 'справка'],
                    ['die E-Mail', 'die E-Mails', 'электронное письмо'],
                    ['die Einladung', 'die Einladungen', 'приглашение'],
                    ['die Frage', 'die Fragen', 'вопрос'],
                    ['die Heizung', 'die Heizungen', 'отопление'],
                    ['die Miete', 'die Mieten', 'квартплата'],
                    ['die Nachricht', 'die Nachrichten', 'сообщение'],
                    ['die Prüfung', 'die Prüfungen', 'экзамен'],
                    ['die Rechnung', 'die Rechnungen', 'счёт'],
                    ['die Reparatur', 'die Reparaturen', 'ремонт'],
                    ['die Tochter', 'die Töchter', 'дочь'],
                    ['die Woche', 'die Wochen', 'неделя'],
                    ['die Wohnung', 'die Wohnungen', 'квартира'],
                    ['das Angebot', 'die Angebote', 'предложение'],
                    ['das Büro', 'die Büros', 'офис'],
                    ['das Formular', 'die Formulare', 'бланк, анкета'],
                    ['das Geschenk', 'die Geschenke', 'подарок'],
                    ['das Gespräch', 'die Gespräche', 'разговор'],
                    ['das Haus', 'die Häuser', 'дом'],
                    ['das Kind', 'die Kinder', 'ребёнок'],
                    ['das Problem', 'die Probleme', 'проблема'],
                    ['das Zimmer', 'die Zimmer', 'комната'],
                    ['—', 'die Eltern', 'родители (только мн. ч.)'],
                    ['—', 'die Unterlagen', 'документы (в этом значении только мн. ч.)']
                ]
            },
            {
                type: 'table',
                head: ['Образец', 'Пример', 'У каких слов'],
                rows: [
                    ['-e', 'der Termin → die Termine', 'многие м. и ср. р.'],
                    ['¨-e', 'der Arzt → die Ärzte', 'многие м. р.'],
                    ['-er, ¨-er', 'das Kind → die Kinder, das Haus → die Häuser', 'многие ср. р.'],
                    ['-n, -en', 'die Frage → die Fragen, die Wohnung → die Wohnungen', 'почти все ж. р.'],
                    ['-nen', 'die Nachbarin → die Nachbarinnen', 'ж. р. на -in'],
                    ['-s', 'das Büro → die Büros, die E-Mail → die E-Mails', 'иностранные слова'],
                    ['без окончания или только ¨', 'der Schlüssel → die Schlüssel, die Tochter → die Töchter', 'м. и ср. р. на -er, -el, -en; из ж. р. — только Mutter и Tochter']
                ],
                note: 'Во множественном числе артикль всегда `die`, в Dativ — `den` и -n у существительного (кроме форм на -n и -s): `mit den Kindern`, `in den Büros`.'
            },
            { type: 'trap', wrong: 'Ich habe eine Problem mit der Heizung.', right: 'Ich habe ein Problem mit der Heizung.', why: 'По-русски «проблема» женского рода, по-немецки `das Problem`. Род в двух языках часто не совпадает: `das Zimmer` (комната), `der Brief` (письмо), `das Kind` (ребёнок).' },
            { type: 'tip', text: 'Учите слово сразу с артиклем и множественным числом: `der Termin, die Termine`. Если род забыт, проверьте окончание-подсказку из первой таблицы — у `-ung`, `-heit`, `-keit`, `-ion`, `-chen` она почти никогда не подводит.' }
        ]
    }
];
