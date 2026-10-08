/**
 * Ситуация 9. Рекламация: не тот товар или поломка.
 *
 * Формальное письмо в магазин: точные данные покупки, спокойное описание
 * проблемы, ясное требование и срок ответа.
 */

export default {
    id: 's09',
    order: 9,
    title: 'Покупка: ошибка в заказе, поломка, возврат',
    short: 'Жалоба на покупку',
    register: 'formell',
    intro: 'Вы купили вещь в интернете или в магазине, а прислали не то или она быстро сломалась. Пишете в службу поддержки, чаще всего с обращением `Sehr geehrte Damen und Herren,`. Тон формальный и спокойный: назовите товар, дату и номер заказа, точно опишите проблему и скажите, чего вы хотите — обмен, ремонт или деньги назад — и до какого числа.',

    phrases: [
        { de: 'Sehr geehrte Damen und Herren,', ru: 'Уважаемые дамы и господа, — если имя неизвестно', use: 'Anrede' },
        { de: 'Sehr geehrter Herr …,', ru: 'Уважаемый господин …,', use: 'Anrede' },
        { de: 'Am … habe ich in Ihrem Online-Shop … bestellt.', ru: 'Такого-то числа я заказал(а) в вашем интернет-магазине …', use: 'Einleitung' },
        { de: 'Meine Bestellnummer ist …', ru: 'Номер моего заказа — …', use: 'Information' },
        { de: 'Leider haben Sie mir die falsche Größe geschickt.', ru: 'К сожалению, вы прислали мне не тот размер.', use: 'Beschwerde' },
        { de: 'Ich habe eine blaue Jacke bestellt, aber eine schwarze bekommen.', ru: 'Я заказал(а) синюю куртку, а получил(а) чёрную.', use: 'Beschwerde' },
        { de: 'Das Gerät funktioniert seit gestern nicht mehr.', ru: 'Со вчерашнего дня прибор больше не работает.', use: 'Beschwerde' },
        { de: 'Ich habe den Wasserkocher erst vor drei Wochen gekauft.', ru: 'Я купил(а) чайник всего три недели назад.', use: 'Information' },
        { de: 'Deshalb möchte ich die Ware umtauschen.', ru: 'Поэтому я хотел(а) бы обменять товар.', use: 'Bitte' },
        { de: 'Könnten Sie das Gerät bitte reparieren?', ru: 'Не могли бы вы отремонтировать прибор?', use: 'Bitte' },
        { de: 'Wenn das nicht möglich ist, hätte ich gern mein Geld zurück.', ru: 'Если это невозможно, я хотел(а) бы получить деньги обратно.', use: 'Bitte' },
        { de: 'Wie kann ich die Ware zurückschicken?', ru: 'Как мне отправить товар обратно?', use: 'Frage' },
        { de: 'Den Kassenbon schicke ich Ihnen als Kopie mit.', ru: 'Копию чека я прикладываю к письму.', use: 'Information' },
        { de: 'Bitte antworten Sie mir bis zum …', ru: 'Пожалуйста, ответьте мне до …', use: 'Schluss' },
        { de: 'Vielen Dank für Ihre Hilfe.', ru: 'Большое спасибо за помощь.', use: 'Dank' },
        { de: 'Mit freundlichen Grüßen', ru: 'С уважением', use: 'Gruß' }
    ],

    tasks: [
        {
            id: 's09-a',
            label: 'A',
            situation: 'Sie haben in einem Online-Shop eine Winterjacke bestellt. Heute ist das Paket gekommen, aber die Jacke hat die falsche Größe. Deshalb schreiben Sie an den Kundenservice.',
            recipient: 'Kundenservice',
            register: 'formell',
            points: [
                { de: 'Ihre Bestellung', hint: 'Скажите, что и когда вы заказали, и назовите номер заказа.',
                  starters: ['Am … habe ich bei Ihnen … bestellt.', 'Meine Bestellnummer ist …'],
                  keys: ['bestellt', 'Bestellnummer', 'Nummer'] },
                { de: 'Fehler bei der Lieferung', hint: 'Опишите ошибку: какой размер вы заказали и какой пришёл.',
                  starters: ['Leider haben Sie mir … geschickt.', 'Ich habe Größe … bestellt, aber …'],
                  keys: ['Größe', 'falsch', 'statt'] },
                { de: 'Bitte um Umtausch', hint: 'Попросите обменять куртку на нужный размер.',
                  starters: ['Deshalb möchte ich … umtauschen.', 'Könnten Sie mir bitte … schicken?'],
                  keys: ['tausch', 'richtig'] },
                { de: 'Rücksendung und Frist', hint: 'Скажите, как вы вернёте неверный товар и до какого числа вам нужен правильный.',
                  starters: ['Die falsche Jacke schicke ich Ihnen …', 'Ich brauche die Jacke bis zum …'],
                  keys: ['zurück', 'Etikett', 'bis zum'] }
            ],
            model: {
                text: 'Sehr geehrte Damen und Herren, am 2. Oktober habe ich in Ihrem Online-Shop eine Winterjacke in Größe M bestellt. Meine Bestellnummer ist 48213. Heute ist das Paket angekommen, aber leider haben Sie mir Größe XL statt M geschickt. Deshalb möchte ich die Jacke umtauschen. Könnten Sie mir bitte die gleiche Jacke in Größe M liefern? Die falsche Jacke schicke ich Ihnen gern zurück, wenn Sie mir ein Rücksendeetikett per E-Mail senden. Da es schon kalt ist, brauche ich die neue Jacke bis zum 20. Oktober. Vielen Dank für Ihre Hilfe. Mit freundlichen Grüßen Dmitri Lebedew',
                ru: 'Уважаемые дамы и господа, 2 октября я заказал в вашем интернет-магазине зимнюю куртку размера M. Номер моего заказа — 48213. Сегодня пришла посылка, но, к сожалению, вы прислали мне размер XL вместо M. Поэтому я хотел бы обменять куртку. Не могли бы вы доставить мне такую же куртку размера M? Неправильную куртку я охотно отправлю вам обратно, если вы пришлёте мне по электронной почте этикетку для возврата. Так как уже холодно, новая куртка нужна мне до 20 октября. Большое спасибо за помощь. С уважением, Дмитрий Лебедев',
                notes: [
                    'Пункт 1 закрыт двумя короткими предложениями: дата, товар, размер и номер заказа — магазину не нужно ничего переспрашивать.',
                    'Ошибка описана точно и спокойно: `leider haben Sie mir Größe XL statt M geschickt` — без упрёков, но ясно.',
                    'Прошедшее время — Perfekt: `habe … bestellt`, `ist … angekommen`, `haben … geschickt`; `ankommen` — движение, поэтому `ist`.',
                    'Просьба вежливая: `Könnten Sie mir bitte …` — Konjunktiv II, а `Deshalb möchte ich …` связывает её с проблемой.',
                    'Пункт 4 раскрыт двумя придаточными: `wenn Sie mir … senden` (условие) и `Da es schon kalt ist` (почему важен срок).',
                    'Срок назван точно: `bis zum 20. Oktober` — порядковое число с точкой.'
                ]
            },
            weak: {
                text: 'Hallo! Ich habe bestellt eine Jacke in Größe M. Meine Bestellnummer ist 48213. Heute ich habe bekommen Größe XL. Das ist falsch. Ich will andere Jacke. Schicken Sie mir richtige Größe schnell! Wie ich kann die Jacke zurückschicken? Ich brauche die Jacke bis Ende Oktober. Ich warte Ihre Antwort. Danke Dmitri',
                fixes: [
                    { was: 'Hallo!', wird: 'Sehr geehrte Damen und Herren,', why: 'В магазин пишут официально. Если имя неизвестно — `Sehr geehrte Damen und Herren,` с запятой.' },
                    { was: 'Ich habe bestellt eine Jacke', wird: 'Ich habe eine Jacke bestellt', why: 'Partizip II `bestellt` стоит в конце предложения, а то, что вы заказали, — между `habe` и `bestellt`.' },
                    { was: 'Heute ich habe bekommen Größe XL', wird: 'Heute habe ich Größe XL bekommen', why: 'После `Heute` сразу идёт глагол `habe`, потом `ich`. А `bekommen` — в самый конец.' },
                    { was: 'Ich will andere Jacke', wird: 'Ich möchte die Jacke umtauschen', why: '`Ich will` звучит как требование, вежливее `Ich möchte`. Перед существительным нужен артикль, а точное слово для «обменять» — `umtauschen`.' },
                    { was: 'Schicken Sie mir richtige Größe schnell!', wird: 'Könnten Sie mir bitte schnell die richtige Größe schicken?', why: 'Приказ с восклицательным знаком звучит грубо — лучше вопрос с `Könnten Sie …`. Перед `richtige Größe` нужен артикль `die`.' },
                    { was: 'Wie ich kann', wird: 'Wie kann ich', why: 'В вопросе после вопросительного слова сразу идёт глагол: `Wie kann ich …?`' },
                    { was: 'Ich warte Ihre Antwort.', wird: 'Ich warte auf Ihre Antwort.', why: 'По-русски «жду ответа» без предлога, а по-немецки `warten auf` + Akkusativ.' },
                    { was: 'Danke Dmitri', wird: 'Vielen Dank. Mit freundlichen Grüßen Dmitri Lebedew', why: 'В конце нужно прощание: `Mit freundlichen Grüßen` и полное имя.' }
                ]
            }
        },
        {
            id: 's09-b',
            label: 'B',
            situation: 'Sie haben vor drei Wochen in einem Elektrogeschäft einen Wasserkocher gekauft. Seit gestern funktioniert er nicht mehr. Deshalb schreiben Sie an Herrn Kessler vom Kundenservice.',
            recipient: 'Herr Kessler',
            register: 'formell',
            points: [
                { de: 'Grund für Ihr Schreiben', hint: 'Скажите, что и когда вы купили в этом магазине.',
                  starters: ['Am … habe ich in Ihrem Geschäft … gekauft.'],
                  keys: ['gekauft', 'Wasserkocher'] },
                { de: 'Problem mit dem Gerät', hint: 'Опишите, что именно не работает и с какого времени.',
                  starters: ['Leider funktioniert … seit … nicht mehr.', 'Wenn ich … einschalte, …'],
                  keys: ['funktioniert', 'kaputt', 'nicht mehr', 'Defekt'] },
                { de: 'Reparatur oder Geld zurück', hint: 'Скажите, чего вы хотите: ремонт, новый прибор или деньги назад.',
                  starters: ['Ich möchte Sie bitten, …', 'Wenn das nicht möglich ist, hätte ich gern …'],
                  keys: ['reparier', 'Reparatur', 'neu', 'Geld'] },
                { de: 'Kassenbon und Antwort', hint: 'Сообщите, что прикладываете копию чека, и попросите ответить до определённого числа.',
                  starters: ['Den Kassenbon habe ich noch.', 'Könnten Sie mir bitte bis zum … antworten?'],
                  keys: ['Kassenbon', 'Quittung', 'Rechnung', 'antworten', 'Antwort'] }
            ],
            model: {
                text: 'Sehr geehrter Herr Kessler, am 15. September habe ich in Ihrem Geschäft einen Wasserkocher gekauft. Leider funktioniert er seit gestern nicht mehr. Wenn ich ihn einschalte, leuchtet die Lampe, aber das Wasser wird nicht heiß. Da das Gerät noch ganz neu ist, möchte ich Sie bitten, es zu reparieren oder mir einen neuen Wasserkocher zu geben. Wenn das nicht möglich ist, hätte ich gern mein Geld zurück. Den Kassenbon habe ich noch. Eine Kopie finden Sie im Anhang. Könnten Sie mir bitte bis zum 15. Oktober antworten? Mit freundlichen Grüßen Larissa Popowa',
                ru: 'Уважаемый господин Кесслер, 15 сентября я купила в вашем магазине электрический чайник. К сожалению, со вчерашнего дня он больше не работает. Когда я его включаю, лампочка горит, но вода не нагревается. Так как прибор ещё совсем новый, я хотела бы попросить вас отремонтировать его или дать мне новый чайник. Если это невозможно, я бы хотела получить деньги обратно. Чек у меня сохранился. Его копию вы найдёте во вложении. Не могли бы вы ответить мне до 15 октября? С уважением, Лариса Попова',
                notes: [
                    'Пункты 1 и 2 раскрыты в первых трёх предложениях: что купили, когда и что именно не работает.',
                    'Дефект описан через условие: `Wenn ich ihn einschalte, leuchtet die Lampe, …` — придаточное впереди, поэтому главное начинается с глагола `leuchtet`.',
                    '`Da das Gerät noch ganz neu ist, …` объясняет, почему вы просите ремонт или замену; `da` здесь значит то же, что `weil`.',
                    'Просьба с инфинитивом с `zu` — `möchte ich Sie bitten, es zu reparieren oder mir … zu geben` — и запасной вариант: `Wenn das nicht möglich ist, hätte ich gern …`.',
                    'Чек упомянут отдельно (`Den Kassenbon habe ich noch.`): магазин сразу видит, что покупка подтверждена.',
                    'Срок ответа назван вежливо: `Könnten Sie mir bitte bis zum 15. Oktober antworten?` — `antworten` с Dativ (`mir`).'
                ]
            }
        }
    ],

    drills: [
        { id: 's09-d1', type: 'order', q: 'Расставьте части письма в правильном порядке.',
          items: ['Sehr geehrte Damen und Herren,', 'am 2. Oktober habe ich bei Ihnen eine Jacke bestellt.', 'Leider haben Sie mir die falsche Größe geschickt.', 'Deshalb möchte ich die Jacke umtauschen.', 'Vielen Dank für Ihre Hilfe.', 'Mit freundlichen Grüßen'],
          explain: 'Жалоба строится так: обращение, что и когда заказали, в чём ошибка, чего вы хотите (`Deshalb …` опирается на ошибку), благодарность, прощание.', tag: 'aufbau' },
        { id: 's09-d2', type: 'choice', q: 'Как закончить письмо в службу поддержки магазина?',
          options: ['Mit freundlichen Grüßen', 'Liebe Grüße', 'Tschüss'], answer: 0,
          explain: '`Mit freundlichen Grüßen` — стандарт для официального письма. `Liebe Grüße` пишут друзьям и родным, а `Tschüss` — устное прощание.', tag: 'register' },
        { id: 's09-d3', type: 'gap', q: 'Вставьте обе части Perfekt.',
          text: 'Heute ___ das Paket ___.', hint: 'ankommen', answer: [['ist'], ['angekommen']],
          explain: '`ankommen` — глагол движения, поэтому Perfekt с `ist`. Приставка `an` стоит перед `ge`: `angekommen`, и Partizip II — в конце.', tag: 'perfekt' },
        { id: 's09-d4', type: 'join', q: 'Соедините предложения союзом weil.',
          parts: ['Ich möchte die Jacke umtauschen.', 'Die Größe ist falsch.'], connector: 'weil',
          answer: ['Ich möchte die Jacke umtauschen, weil die Größe falsch ist.', 'Weil die Größe falsch ist, möchte ich die Jacke umtauschen.'],
          explain: 'После `weil` глагол `ist` уходит в конец. Если придаточное стоит первым, главное предложение начинается с глагола: `…, möchte ich …`.', tag: 'nebensatz' },
        { id: 's09-d5', type: 'join', q: 'Соедините предложения союзом wenn.',
          parts: ['Ich schalte das Gerät ein.', 'Das Wasser wird nicht heiß.'], connector: 'wenn',
          answer: ['Wenn ich das Gerät einschalte, wird das Wasser nicht heiß.', 'Das Wasser wird nicht heiß, wenn ich das Gerät einschalte.'],
          explain: 'В придаточном отделяемый глагол снова пишется слитно и стоит в конце: `einschalte`. Если придаточное впереди, дальше сразу глагол главного: `wird das Wasser …`.', tag: 'nebensatz' },
        { id: 's09-d6', type: 'gap', q: 'Вставьте предлог.',
          text: 'Ich warte ___ Ihre Antwort.', hint: 'предлог', answer: ['auf'],
          explain: 'По-русски «жду ответа» — без предлога, а по-немецки `warten auf` + Akkusativ: `auf Ihre Antwort`.', tag: 'verbprep' },
        { id: 's09-d7', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Könnten Sie mir ein neuer Wasserkocher geben?', answer: ['Könnten Sie mir einen neuen Wasserkocher geben?'],
          explain: 'Что дать — Akkusativ. `der Wasserkocher` мужского рода, поэтому `einen neuen Wasserkocher`: меняются и артикль, и окончание прилагательного.', tag: 'kasus' },
        { id: 's09-d8', type: 'build', q: 'Составьте вежливую просьбу.',
          ru: 'Не могли бы вы, пожалуйста, отремонтировать прибор?',
          answer: ['Könnten Sie das Gerät bitte reparieren?', 'Könnten Sie bitte das Gerät reparieren?'],
          explain: '`Könnten Sie …` в начале — вежливый вопрос, инфинитив `reparieren` стоит в конце. `bitte` может стоять до или после `das Gerät`.', tag: 'konj2' },
        { id: 's09-d9', type: 'build', q: 'Составьте предложение.',
          ru: 'Если это невозможно, я бы хотела получить свои деньги обратно.',
          answer: ['Wenn das nicht möglich ist, hätte ich gern mein Geld zurück.', 'Wenn das nicht möglich ist, hätte ich mein Geld gern zurück.'],
          explain: 'Придаточное с `wenn` стоит первым, поэтому главное начинается с глагола: `hätte ich`. `hätte … gern` — вежливое «хотел(а) бы получить».', tag: 'nebensatz' },
        { id: 's09-d10', type: 'choice', q: 'Как правильно написать дату в письме?',
          text: 'Ich habe die Jacke ___ bestellt.',
          options: ['am 2. Oktober', 'am 2 Oktober', 'im 2. Oktober'], answer: 0,
          explain: 'Перед датой нужен предлог `am`, а число — порядковое, с точкой: `am 2. Oktober`. Без точки это ошибка, а `im` ставят перед месяцем без числа: `im Oktober`.', tag: 'zeit' }
    ]
};
