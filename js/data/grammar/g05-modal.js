/**
 * Модуль 5. Модальные глаголы и вежливость.
 *
 * Формы и значения können … möchten, «нельзя» и «не нужно», прошедшее кратко
 * и Konjunktiv II для вежливых просьб: könnte, würde, hätte, wäre.
 */

export default {
    id: 'g05',
    order: 5,
    title: 'Модальные глаголы и вежливость',
    short: 'Модальные и вежливость',
    goal: 'Вы правильно спрягаете модальные глаголы, ставите инфинитив в конец, различаете «нельзя» и «не нужно» и вежливо просите: `Könnten Sie …?`, `Würden Sie …?`, `Ich hätte gern …`.',
    why: 'Почти в каждом письме DTZ есть просьба, вопрос или предложение, и почти всегда в них стоит модальный глагол. Тон оценивается отдельно (Kommunikative Gestaltung): `Ich will …` звучит как требование, а `Könnten Sie mir bitte …?` — как вежливое письмо. А ошибки в формах (`er kannt`, `Ich muss zu gehen`) бьют по Korrektheit.',

    theory: [
        { type: 'h', text: '1. Формы: у ich и er нет окончания' },
        {
            type: 'table',
            head: ['Лицо', 'können', 'müssen', 'dürfen'],
            rows: [
                ['ich', '`kann`', '`muss`', '`darf`'],
                ['du', '`kannst`', '`musst`', '`darfst`'],
                ['er / sie / es', '`kann`', '`muss`', '`darf`'],
                ['wir', '`können`', '`müssen`', '`dürfen`'],
                ['ihr', '`könnt`', '`müsst`', '`dürft`'],
                ['sie / Sie', '`können`', '`müssen`', '`dürfen`']
            ]
        },
        {
            type: 'table',
            head: ['Лицо', 'sollen', 'wollen', 'möchten'],
            rows: [
                ['ich', '`soll`', '`will`', '`möchte`'],
                ['du', '`sollst`', '`willst`', '`möchtest`'],
                ['er / sie / es', '`soll`', '`will`', '`möchte`'],
                ['wir', '`sollen`', '`wollen`', '`möchten`'],
                ['ihr', '`sollt`', '`wollt`', '`möchtet`'],
                ['sie / Sie', '`sollen`', '`wollen`', '`möchten`']
            ],
            note: '`möchte` — вежливое «хотел бы». Гласная у него не меняется: `ich möchte`, `wir möchten`.'
        },
        { type: 'rule', text: 'У `ich` и `er / sie / es` форма одна и та же. У `können`, `müssen`, `dürfen`, `wollen`, `sollen` она **без окончания**: `ich kann` — `er kann`, `ich muss` — `sie muss`; у первых четырёх в единственном числе другая гласная: `kann`, `muss`, `darf`, `will`. У `möchte` окончание `-e` одинаково для обоих лиц: `ich möchte` — `er möchte`.' },
        { type: 'trap', wrong: 'Mein Mann kannt heute nicht kommen.', right: 'Mein Mann kann heute nicht kommen.', why: 'Обычный глагол в 3-м лице получает `-t` (`er kommt`), и рука переносит это на модальный. Но у модальных `er / sie / es` без окончания, как `ich`: `er kann`, `sie muss`, `er will`.' },

        { type: 'h', text: '2. Что значит каждый' },
        { type: 'p', text: 'Модальный глагол выражает отношение к действию: могу, должен, можно, хочу. Само действие — инфинитив в конце предложения.' },
        {
            type: 'table',
            head: ['Глагол', 'Значение', 'Пример'],
            rows: [
                ['`können`', 'могу, умею; есть возможность', '`Ich kann am Dienstag um 15 Uhr kommen.`'],
                ['`müssen`', 'должен, надо', '`Ich muss morgen arbeiten.`'],
                ['`dürfen`', 'можно, разрешено', '`Darf ich meinen Hund mitbringen?`'],
                ['`sollen`', 'велели, поручили', '`Der Arzt sagt, ich soll viel trinken.`'],
                ['`wollen`', 'хочу, собираюсь (твёрдо)', '`Wir wollen im Sommer umziehen.`'],
                ['`möchten`', 'хотел бы (вежливо)', '`Ich möchte einen Termin vereinbaren.`']
            ],
            note: '`sollen` особенно полезен: русское «Мне …?» в смысле «Хотите, я …?» — это `Soll ich …?`. «Мне позвонить вам завтра?» — `Soll ich Sie morgen anrufen?`'
        },
        { type: 'trap', wrong: 'Muss ich Ihnen helfen?', right: 'Soll ich Ihnen helfen?', why: 'Предлагая помощь, спрашивают, хочет ли этого адресат: `Soll ich …?` — «Давайте я …». `Muss ich …?` значит «Я обязан?» и звучит так, будто помогать вам не хочется.' },

        { type: 'h', text: '3. Инфинитив — в конце и без zu' },
        { type: 'p', text: 'Модальный глагол спрягается и стоит на втором месте, а смысловой глагол — **в конце, в инфинитиве и без `zu`** (рамка, модуль 1). Отделяемый глагол в конце не делится: `anrufen`, `absagen`. В придаточном модальный глагол уходит в самый конец, за инфинитив (модуль 2).' },
        {
            type: 'exs',
            items: [
                { de: 'Ich **kann** morgen leider nicht **kommen**.', ru: 'Завтра я, к сожалению, не могу прийти.' },
                { de: '**Können** Sie mich morgen **anrufen**?', ru: 'Вы можете позвонить мне завтра?' },
                { de: 'Ich **muss** heute früher **gehen**.', ru: 'Сегодня мне нужно уйти раньше.' },
                { de: 'Ich komme nicht, weil ich am Montag **arbeiten muss**.', ru: 'Я не приду, потому что в понедельник мне нужно работать.' }
            ]
        },
        { type: 'trap', wrong: 'Ich muss jetzt zu gehen.', right: 'Ich muss jetzt gehen.', why: 'После модальных глаголов `zu` не ставится никогда. Путаница идёт от `Ich habe viel zu tun` и `Ich versuche, pünktlich zu sein`: там `zu` нужно, но это не модальные глаголы (модуль 10).' },
        { type: 'trap', wrong: 'Ich kann nicht kommen morgen.', right: 'Ich kann morgen nicht kommen.', why: 'По-русски «не могу прийти завтра» звучит нормально, и рука ставит время в конец. По-немецки инфинитив — последнее слово, а `morgen` и `nicht` стоят перед ним.' },

        { type: 'h', text: '4. Отрицание: «нельзя» и «не нужно»' },
        { type: 'p', text: 'Здесь русский подводит сильнее всего. «Не должен» по-русски часто значит «нельзя»: «вы не должны здесь курить». По-немецки `nicht müssen` — это «**не нужно, не обязательно**», а запрет — `nicht dürfen`.' },
        {
            type: 'table',
            head: ['Смысл', 'По-немецки', 'Пример'],
            rows: [
                ['нельзя, запрещено', '`nicht dürfen`', '`Im Haus darf man nicht rauchen.`'],
                ['не нужно, не обязательно', '`nicht müssen`', '`Sie müssen nicht anrufen, eine E-Mail reicht.`'],
                ['не могу', '`nicht können`', '`Ich kann am Freitag nicht kommen.`']
            ],
            note: '`nicht` стоит перед инфинитивом в конце: `Sie müssen den Vertrag nicht unterschreiben.`'
        },
        { type: 'trap', wrong: 'Kinder müssen im Treppenhaus nicht spielen.', right: 'Kinder dürfen im Treppenhaus nicht spielen.', why: 'Если это запрет («детям нельзя играть на лестнице»), нужен `dürfen`. `müssen nicht` значит «не обязаны», запрета в нём нет — смысл письма перевернётся.' },

        { type: 'h', text: '5. Прошедшее время: konnte, musste' },
        {
            type: 'table',
            head: ['Инфинитив', 'ich / er / sie', 'wir / Sie', 'Пример'],
            rows: [
                ['`können`', '`konnte`', '`konnten`', '`Wir konnten nicht kommen.`'],
                ['`müssen`', '`musste`', '`mussten`', '`Ich musste lange warten.`'],
                ['`dürfen`', '`durfte`', '`durften`', '`Ich durfte nicht aufstehen.`'],
                ['`sollen`', '`sollte`', '`sollten`', '`Ich sollte die Bescheinigung mitbringen.`'],
                ['`wollen`', '`wollte`', '`wollten`', '`Wir wollten im Mai umziehen.`']
            ],
            note: 'Умлаута нет: `konnte` — «мог», а `könnte` — «мог бы» (раздел 6). У `möchten` прошедшего нет, «хотел» — `wollte`. Подробнее о прошедшем — модуль 4.'
        },

        { type: 'h', text: '6. Вежливая форма: könnte, würde, hätte' },
        { type: 'p', text: 'Самые вежливые просьбы строятся на Konjunktiv II — это немецкое «бы». В письме хватит шести форм. Они похожи на Präteritum, но с умлаутом: `konnte` — «мог», `könnte` — «мог бы».' },
        {
            type: 'table',
            head: ['Глагол', 'ich / er / sie', 'wir / Sie', 'Значение'],
            rows: [
                ['`können`', '`könnte`', '`könnten`', 'мог бы'],
                ['`werden`', '`würde`', '`würden`', '«бы» + инфинитив'],
                ['`haben`', '`hätte`', '`hätten`', 'имел бы'],
                ['`sein`', '`wäre`', '`wären`', 'был бы'],
                ['`dürfen`', '`dürfte`', '`dürften`', 'можно было бы'],
                ['`mögen`', '`möchte`', '`möchten`', 'хотел бы']
            ],
            note: 'Для `du`: `könntest`, `würdest`, `hättest`, `wärst` — в письме другу: `Könntest du mir helfen?`'
        },
        { type: 'rule', text: 'После `könnte` и `würde` — инфинитив в конце: `Könnten Sie mir helfen?`, `Würden Sie mich anrufen?`. `hätte` и `wäre` в просьбах стоят без инфинитива: `Ich hätte gern …`, `Es wäre schön, wenn …`.' },

        { type: 'h', text: '7. Как вежливо попросить' },
        { type: 'p', text: 'Просьба в письме обычно звучит как вопрос. `Können Sie …?` — вежливо, но буднично: так просят учителя или соседа. `Könnten Sie …?` и `Würden Sie …?` — «Не могли бы вы …?» — оставляют адресату право отказать; так пишут в учреждение и незнакомым людям.' },
        {
            type: 'table',
            head: ['Тон', 'Пример', 'Кому'],
            rows: [
                ['Требование', '`Schicken Sie mir die Unterlagen!`', 'в письме не годится'],
                ['Нейтрально', '`Schicken Sie mir bitte die Unterlagen.`', 'короткая просьба к знакомому'],
                ['Вежливо', '`Können Sie mir bitte die Unterlagen schicken?`', 'учителю, соседу'],
                ['Очень вежливо', '`Könnten Sie mir bitte die Unterlagen schicken?`', 'в учреждение, хозяину квартиры'],
                ['Очень вежливо', '`Würden Sie mir bitte die Unterlagen schicken?`', 'так же']
            ]
        },
        {
            type: 'exs',
            items: [
                { de: '**Könnten** Sie mir bitte einen neuen Termin **geben**?', ru: 'Не могли бы вы, пожалуйста, назначить мне новый приём?' },
                { de: '**Würden** Sie bitte den Hausmeister **informieren**?', ru: 'Не могли бы вы, пожалуйста, сообщить смотрителю дома?' },
                { de: 'Ich **hätte** gern einen Platz im Abendkurs.', ru: 'Я хотел бы получить место в вечерней группе.' },
                { de: 'Ich **würde** gern mit Ihnen über die Nebenkosten **sprechen**.', ru: 'Я хотел бы поговорить с вами о коммунальных платежах.' },
                { de: 'Es **wäre** schön, wenn Sie mich bald **anrufen könnten**.', ru: 'Было бы хорошо, если бы вы мне скоро позвонили.' },
                { de: 'Ich **möchte** Sie **bitten**, mir den Mietvertrag noch einmal **zu schicken**.', ru: 'Я хотел бы попросить вас ещё раз прислать мне договор аренды.' }
            ]
        },
        { type: 'trap', wrong: 'Ich will mit dem Vermieter sprechen.', right: 'Ich möchte mit dem Vermieter sprechen.', why: 'Русское «я хочу» нейтрально, а немецкое `ich will` в просьбе звучит как требование: «я желаю, и всё». О своём желании в письме говорят `ich möchte` или `ich würde gern`.' },
        { type: 'trap', wrong: 'Vielen Dank für die Einladung. Ich würde gern kommen.', right: 'Vielen Dank für die Einladung. Ich komme gern.', why: 'Это ответ «да». А `Ich würde gern kommen` звучит как начало отказа: «я бы с радостью, но…». Если вы придёте, пишите прямо. Konjunktiv нужен в просьбе, а не в сообщении о факте.' },
        { type: 'trap', wrong: 'Ich hätte gern einen Termin machen.', right: 'Ich würde gern einen Termin machen.', why: '`Ich hätte gern` — только с существительным: `Ich hätte gern einen Termin.` Если в конце есть глагол, нужен `würde`: `Ich würde gern … machen.`' },

        { type: 'h', text: '8. Разрешение, предложение, отказ' },
        {
            type: 'table',
            head: ['Цель', 'Как сказать', 'Пример'],
            rows: [
                ['Спросить разрешения', '`Darf ich …?` / `Dürfte ich …?`', '`Dürfte ich die Unterlagen später abgeben?`'],
                ['Предложить помощь', '`Soll ich …?` / `Ich kann gern …`', '`Ich kann gern Ihre Blumen gießen.`'],
                ['Предложить вариант', '`Wir könnten …` / `Wie wäre es mit …?`', '`Wir könnten uns am Montag treffen.`'],
                ['Вежливо отказать', '`Leider kann ich nicht …` / `Ich würde gern …, aber …`', '`Ich würde gern helfen, aber ich muss arbeiten.`']
            ]
        },
        { type: 'ex', de: 'Ich **würde** gern zu Ihrer Feier **kommen**, aber am Samstag **muss** ich leider **arbeiten**.', ru: 'Я бы с радостью пришёл на ваш праздник, но в субботу мне, к сожалению, нужно работать.' },

        { type: 'h', text: '9. «Если бы»: Wenn ich Zeit hätte, …' },
        { type: 'rule', text: 'Схема одна: `Wenn ich …` + `hätte` или `wäre` в конце, запятая, затем `würde ich …` + инфинитив в конце. Придаточное стоит первым, поэтому главное начинается с глагола `würde`.' },
        { type: 'ex', de: '**Wenn** ich am Samstag Zeit **hätte**, **würde** ich gern **helfen**.', ru: 'Если бы у меня в субботу было время, я бы с радостью помог.' },

        { type: 'h', text: '10. Проверка за десять секунд' },
        {
            type: 'list',
            items: [
                'Модальный глагол спрягается, инфинитив стоит последним и без `zu`?',
                'У `ich` и `er / sie` нет окончания: `ich kann`, `sie muss`?',
                '«Нельзя» — `nicht dürfen`, «не нужно» — `nicht müssen`?',
                'Просьба к учреждению или незнакомому — `Könnten Sie …?` или `Würden Sie …?`, а не `Ich will …`? А факт — без `würde`?'
            ]
        },
        { type: 'tip', text: 'Выучите три готовые рамки и ставьте их в каждое письмо: `Könnten Sie mir bitte … ?`, `Ich möchte Sie bitten, … zu …`, `Ich würde gern …`. Одна такая фраза уже показывает проверяющему вежливый регистр.' }
    ],

    exercises: [
        // ---- выбор
        { id: 'g05-01', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Mein Mann muss am Samstag arbeiten.', 'Mein Mann musst am Samstag arbeiten.', 'Mein Mann müsst am Samstag arbeiten.'], answer: 0,
          explain: 'У `er / sie / es` модальный глагол без окончания и с той же гласной, что у `ich`: `er muss`. `musst` — форма для `du`, `müsst` — для `ihr`.', tag: 'modal' },
        { id: 'g05-02', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich muss morgen zum Arzt gehen.', 'Ich muss morgen zum Arzt zu gehen.', 'Ich muss gehen morgen zum Arzt.'], answer: 0,
          explain: 'После модального глагола — инфинитив без `zu`, и стоит он в самом конце предложения.', tag: 'modal', diag: true },
        { id: 'g05-03', type: 'choice', q: 'Как сказать «Во дворе нельзя играть в футбол»?',
          options: ['Im Hof darf man nicht Fußball spielen.', 'Im Hof muss man nicht Fußball spielen.', 'Im Hof will man nicht Fußball spielen.'], answer: 0,
          explain: '«Нельзя» — запрет, это `nicht dürfen`. `nicht müssen` значит «не обязательно», а `nicht wollen` — «не хотеть».', tag: 'modal', diag: true },
        { id: 'g05-04', type: 'choice', q: 'Что значит это предложение?',
          text: 'Sie müssen den Antrag nicht persönlich abgeben.',
          options: ['Заявление не обязательно сдавать лично.', 'Заявление нельзя сдавать лично.', 'Заявление нужно сдать лично.'], answer: 0,
          explain: '`nicht müssen` — «не нужно, не обязательно». Запрет звучал бы так: `Sie dürfen den Antrag nicht persönlich abgeben.`', tag: 'modal' },
        { id: 'g05-05', type: 'choice', q: 'Какая просьба подходит для письма в учреждение?',
          options: ['Könnten Sie mir bitte ein Formular schicken?', 'Schicken Sie mir ein Formular!', 'Ich will ein Formular.'], answer: 0,
          explain: '`Könnten Sie …?` — вежливый вопрос с Konjunktiv II. Приказ без `bitte` и `Ich will` звучат как требование.', tag: 'konj2', diag: true },
        { id: 'g05-06', type: 'choice', q: 'Выберите вежливую форму.',
          text: '___ Sie mir bitte sagen, wann die Praxis wieder offen ist?',
          options: ['Könnten', 'Konnten', 'Könnte'], answer: 0,
          explain: '«Не могли бы вы» — Konjunktiv II с умлаутом. `Konnten` без умлаута — прошедшее «могли», а `könnte` — форма для `ich / er`, для `Sie` нужно `könnten`.', tag: 'konj2' },
        { id: 'g05-07', type: 'choice', q: 'Как предложить соседке помощь, пока она в отпуске?',
          options: ['Soll ich Ihre Post aus dem Briefkasten holen?', 'Muss ich Ihre Post aus dem Briefkasten holen?', 'Sollen Sie Ihre Post aus dem Briefkasten holen?'], answer: 0,
          explain: 'Предложение помощи — `Soll ich …?`: «Давайте я …». `Muss ich …?` значит «Я обязан?», а `Sollen Sie …?` спрашивает, велели ли что-то самой соседке.', tag: 'modal' },
        { id: 'g05-08', type: 'choice', q: 'Где правильный порядок слов?',
          options: ['Ich schreibe Ihnen, weil ich morgen nicht kommen kann.', 'Ich schreibe Ihnen, weil ich kann morgen nicht kommen.', 'Ich schreibe Ihnen, weil ich morgen kann nicht kommen.'], answer: 0,
          explain: 'В придаточном с `weil` модальный глагол — последнее слово, после инфинитива: `kommen kann`.', tag: 'nebensatz' },
        { id: 'g05-09', type: 'choice', q: 'Врач предложил вам время, и вы его подтверждаете. Что написать?',
          options: ['Ich komme am Dienstag um 9 Uhr.', 'Ich würde am Dienstag um 9 Uhr kommen.'], answer: 0,
          explain: 'Подтверждение — это факт, его сообщают в Präsens: `Ich komme …`. `Ich würde … kommen` звучит условно — «я пришёл бы (если…)», и непонятно, придёте ли вы.', tag: 'konj2' },
        { id: 'g05-10', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich hätte gern einen Termin am Vormittag.', 'Ich hätte gern einen Termin am Vormittag machen.', 'Ich habe gern einen Termin am Vormittag.'], answer: 0,
          explain: '`Ich hätte gern` + существительное — вежливое «я хотел бы». Инфинитив сюда не добавляют: с глаголом нужен `würde`. `Ich habe gern` значит «я люблю иметь».', tag: 'konj2' },
        { id: 'g05-11', type: 'choice', q: 'Какое слово подходит?',
          text: 'Ich ___ Sie gestern anrufen, aber ich hatte Ihre Nummer nicht.',
          options: ['wollte', 'möchte', 'will'], answer: 0,
          explain: '«Я хотел вам позвонить» — прошлое: `wollte`. У `möchte` прошедшего нет, его заменяет `wollte`. `will` — настоящее время, с `gestern` не сочетается.', tag: 'praeteritum' },

        // ---- пропуски
        { id: 'g05-12', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Mein Sohn ___ morgen nicht in die Schule gehen.', hint: 'können', answer: ['kann'],
          explain: 'Для `er / sie / es` — как для `ich`, без окончания: `er kann`.', tag: 'modal', diag: true },
        { id: 'g05-13', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Wir ___ leider umziehen, weil die Wohnung zu klein ist.', hint: 'müssen', answer: ['müssen'],
          explain: 'Для `wir` форма совпадает с инфинитивом: `wir müssen`. Умлаут во множественном числе сохраняется.', tag: 'modal' },
        { id: 'g05-14', type: 'gap', q: 'Спросите разрешения: вставьте глагол.',
          text: '___ ich am Samstag im Garten grillen?', hint: 'dürfen', answer: [['Darf', 'Dürfte']],
          explain: 'Разрешение спрашивают через `Darf ich …?`: гласная меняется на `a`, окончания нет. Ещё вежливее — `Dürfte ich …?`', tag: 'modal' },
        { id: 'g05-15', type: 'gap', q: 'Вставьте sollen в настоящем времени.',
          text: 'Die Lehrerin sagt, wir ___ die Hausaufgaben bis Freitag abgeben.', hint: 'sollen', answer: ['sollen'],
          explain: 'Чужое поручение («учительница велела») передают через `sollen`. Для `wir` — `sollen`, как в инфинитиве.', tag: 'modal' },
        { id: 'g05-16', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: '___ du mir am Wochenende beim Umzug helfen?', hint: 'können', answer: [['Kannst', 'Könntest']],
          explain: 'У `du` модальный глагол получает `-st`: `kannst`. В дружеской просьбе подойдёт и вежливое `Könntest du …?`', tag: 'modal' },
        { id: 'g05-17', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Meine Tochter ___ im Herbst eine Ausbildung machen.', hint: 'wollen', answer: ['will'],
          explain: 'Твёрдое намерение, план — `wollen`. Для `sie` — `will`: гласная меняется, окончания нет.', tag: 'modal' },
        { id: 'g05-18', type: 'gap', q: 'Вставьте глагол в Präteritum.',
          text: 'Ich ___ Sie gestern leider nicht erreichen.', hint: 'können', answer: ['konnte'],
          explain: 'О прошлом модальные глаголы говорят в Präteritum, без умлаута: `ich konnte`. `könnte` было бы «мог бы».', tag: 'praeteritum' },
        { id: 'g05-19', type: 'gap', q: 'Вставьте вежливую форму.',
          text: '___ Sie mir bitte die Rechnung noch einmal schicken?', hint: 'werden', answer: ['Würden'],
          explain: '`Würden Sie bitte …?` — вежливая просьба: Konjunktiv II от `werden` на первом месте, инфинитив `schicken` — в конце.', tag: 'konj2' },
        { id: 'g05-20', type: 'gap', q: 'Вставьте вежливую форму.',
          text: 'Ich ___ gern einen Termin für nächste Woche.', hint: 'haben', answer: ['hätte'],
          explain: 'С существительным — `Ich hätte gern …`: Konjunktiv II от `haben`, с умлаутом.', tag: 'konj2' },
        { id: 'g05-21', type: 'gap', q: 'Вставьте вежливую форму.',
          text: 'Es ___ sehr nett, wenn Sie mir helfen könnten.', hint: 'sein', answer: ['wäre'],
          explain: '`Es wäre nett, wenn …` — «было бы мило, если бы …». Konjunktiv II от `sein` — `wäre`.', tag: 'konj2' },
        { id: 'g05-22', type: 'gap', q: 'Вставьте вежливую форму.',
          text: 'Ich ___ gern nächste Woche bei Ihnen vorbeikommen.', hint: 'werden', answer: ['würde'],
          explain: 'С глаголом — `Ich würde gern` + инфинитив в конце (`vorbeikommen`). Это мягкое пожелание вместо резкого `Ich will`.', tag: 'konj2' },
        { id: 'g05-23', type: 'gap', q: 'Вставьте пропущенное слово.',
          text: 'Ich möchte Sie bitten, mir eine Bescheinigung ___ schicken.', hint: 'частица', answer: ['zu'],
          explain: 'После `Ich möchte Sie bitten,` идёт инфинитив с `zu`: он зависит от `bitten`, а не от модального глагола. Подробно о `zu` — в модуле 10.', tag: 'infinitiv' },
        { id: 'g05-24', type: 'gap', q: 'Вставьте обе части глагола.',
          text: 'Ich ___ meinen Sohn um 16 Uhr ___.', hint: 'müssen, abholen', answer: [['muss'], ['abholen']],
          explain: '`muss` — на втором месте, инфинитив `abholen` — в конце и целиком: при модальном глаголе приставка не отделяется.', tag: 'modal' },

        // ---- составить из слов
        { id: 'g05-25', type: 'build', q: 'Составьте вежливую просьбу.',
          ru: 'Не могли бы вы мне, пожалуйста, перезвонить?',
          answer: ['Könnten Sie mich bitte zurückrufen?'],
          explain: '`Könnten Sie …?` — вежливая просьба, `zurückrufen` — в конце и целиком. «Перезвонить мне» — `mich`: `zurückrufen`, как и `anrufen`, требует Akkusativ.', tag: 'konj2' },
        { id: 'g05-26', type: 'build', q: 'Спросите разрешения.',
          ru: 'Можно мне прийти с ребёнком?',
          answer: ['Darf ich mit meinem Kind kommen?'],
          explain: 'Разрешение — `Darf ich …?`. Вопрос «да или нет» начинается с глагола, инфинитив `kommen` — в конце.', tag: 'modal' },
        { id: 'g05-27', type: 'build', q: 'Составьте предложение.',
          ru: 'Я хотел бы записаться на приём.',
          answer: ['Ich würde gern einen Termin vereinbaren.', 'Einen Termin würde ich gern vereinbaren.', 'Gern würde ich einen Termin vereinbaren.'],
          explain: '`Ich würde gern` + инфинитив — мягкое «я хотел бы». `würde` — на втором месте, `vereinbaren` — последним.', tag: 'konj2' },
        { id: 'g05-28', type: 'build', q: 'Составьте предложение.',
          ru: 'Я не могу прийти, потому что мне нужно работать.',
          answer: ['Ich kann nicht kommen, weil ich arbeiten muss.'],
          explain: 'В главном `kann` на втором месте, `kommen` — в конце. В придаточном модальный `muss` — самый последний, после инфинитива.', tag: 'nebensatz' },
        { id: 'g05-29', type: 'build', q: 'Составьте предложение.',
          ru: 'Вам не нужно приходить завтра.',
          answer: ['Sie müssen morgen nicht kommen.', 'Morgen müssen Sie nicht kommen.', 'Sie müssen nicht morgen kommen.'],
          explain: '«Не нужно» — `nicht müssen`, а не `nicht dürfen`. `nicht` стоит перед инфинитивом; `nicht morgen` подчёркивает: «не завтра, а в другой день».', tag: 'modal' },
        { id: 'g05-30', type: 'build', q: 'Составьте предложение.',
          ru: 'Если бы у меня было время, я бы пришёл.',
          answer: ['Wenn ich Zeit hätte, würde ich kommen.'],
          explain: 'В придаточном с `wenn` — `hätte` в конце. Главное после него начинается с `würde`, инфинитив `kommen` — последний.', tag: 'konj2' },

        // ---- исправить ошибку
        { id: 'g05-31', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich muss am Montag zu arbeiten.', answer: ['Ich muss am Montag arbeiten.', 'Am Montag muss ich arbeiten.'],
          explain: 'После модального глагола `zu` не ставится: `muss … arbeiten`.', tag: 'modal' },
        { id: 'g05-32', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Wir können nicht kommen am Samstag.', answer: ['Wir können am Samstag nicht kommen.', 'Am Samstag können wir nicht kommen.'],
          explain: 'Инфинитив `kommen` — последнее слово. Время и `nicht` стоят внутри рамки, перед ним.', tag: 'klammer' },
        { id: 'g05-33', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Meine Frau kannt leider nicht zum Elternabend kommen.', answer: ['Meine Frau kann leider nicht zum Elternabend kommen.', 'Leider kann meine Frau nicht zum Elternabend kommen.'],
          explain: 'У `er / sie / es` модальный глагол без окончания, как у `ich`: `sie kann`.', tag: 'modal' },
        { id: 'g05-34', type: 'fix', q: 'Исправьте: фраза звучит как требование.',
          text: 'Ich will einen Termin beim Hausarzt.', answer: ['Ich möchte einen Termin beim Hausarzt.', 'Ich hätte gern einen Termin beim Hausarzt.', 'Ich hätte gerne einen Termin beim Hausarzt.', 'Ich möchte gern einen Termin beim Hausarzt.', 'Ich möchte gerne einen Termin beim Hausarzt.'],
          explain: '`Ich will` в просьбе звучит резко. Вежливо — `Ich möchte …` или `Ich hätte gern …`.', tag: 'konj2' },
        { id: 'g05-35', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Sie müssen hier nicht rauchen, das ist verboten.', answer: ['Sie dürfen hier nicht rauchen, das ist verboten.', 'Hier dürfen Sie nicht rauchen, das ist verboten.'],
          explain: '«Это запрещено» — значит, нужен запрет: `nicht dürfen`. `nicht müssen` — только «не обязательно».', tag: 'modal' },
        { id: 'g05-36', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich konnte Sie gestern nicht anrufen, weil ich musste lange arbeiten.', answer: ['Ich konnte Sie gestern nicht anrufen, weil ich lange arbeiten musste.'],
          explain: 'В придаточном с `weil` модальный глагол уходит в самый конец: `lange arbeiten musste`.', tag: 'nebensatz' },
        { id: 'g05-37', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich hätte gern einen neuen Termin vereinbaren.', answer: ['Ich würde gern einen neuen Termin vereinbaren.', 'Ich würde gerne einen neuen Termin vereinbaren.', 'Ich möchte einen neuen Termin vereinbaren.', 'Ich möchte gern einen neuen Termin vereinbaren.', 'Ich möchte gerne einen neuen Termin vereinbaren.', 'Ich hätte gern einen neuen Termin.', 'Ich hätte gerne einen neuen Termin.'],
          explain: '`hätte gern` — с существительным, `würde gern` — с инфинитивом. Здесь в конце глагол `vereinbaren`, значит, нужен `würde`.', tag: 'konj2' },

        // ---- соединить и перевести
        { id: 'g05-38', type: 'join', q: 'Соедините предложения союзом weil.',
          parts: ['Ich kann nicht zum Kurs kommen.', 'Ich muss meine Mutter zum Arzt bringen.'], connector: 'weil',
          answer: ['Ich kann nicht zum Kurs kommen, weil ich meine Mutter zum Arzt bringen muss.', 'Weil ich meine Mutter zum Arzt bringen muss, kann ich nicht zum Kurs kommen.'],
          explain: 'В придаточном — `bringen muss`: модальный глагол последний. Если придаточное стоит первым, главное начинается с `kann`.', tag: 'nebensatz' },
        { id: 'g05-39', type: 'join', q: 'Соедините предложения союзом aber.',
          parts: ['Ich würde Ihnen gern helfen.', 'Ich habe am Wochenende keine Zeit.'], connector: 'aber',
          answer: ['Ich würde Ihnen gern helfen, aber ich habe am Wochenende keine Zeit.', 'Ich würde Ihnen gern helfen, aber am Wochenende habe ich keine Zeit.'],
          explain: '`aber` не меняет порядок слов: после него глагол на втором месте. Перед `aber` — запятая. Так строится мягкий отказ.', tag: 'konnektor' },
        { id: 'g05-40', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Не могли бы вы, пожалуйста, объяснить мне договор?',
          answer: ['Könnten Sie mir bitte den Vertrag erklären?', 'Könnten Sie mir den Vertrag bitte erklären?', 'Würden Sie mir bitte den Vertrag erklären?', 'Würden Sie mir den Vertrag bitte erklären?'],
          explain: '«Не могли бы вы» — `Könnten Sie …?` или `Würden Sie …?`. Спрягаемый глагол стоит первым, инфинитив `erklären` — последним.', tag: 'konj2' },
        { id: 'g05-41', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Мне принести справку?',
          answer: ['Soll ich die Bescheinigung mitbringen?', 'Soll ich eine Bescheinigung mitbringen?', 'Soll ich die Bescheinigung bringen?', 'Soll ich eine Bescheinigung bringen?'],
          explain: 'Русское «Мне …?» в смысле «Хотите, чтобы я …?» — это `Soll ich …?`. Инфинитив `mitbringen` — в конце.', tag: 'modal' },
        { id: 'g05-42', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Здесь нельзя парковаться.',
          answer: ['Hier darf man nicht parken.', 'Man darf hier nicht parken.', 'Hier dürfen Sie nicht parken.', 'Sie dürfen hier nicht parken.'],
          explain: '«Нельзя» — `nicht dürfen`, а безличное «нельзя» передают через `man`: `man darf nicht`.', tag: 'modal' },
        { id: 'g05-43', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Я хотел бы узнать, сколько стоит курс.',
          answer: ['Ich würde gern wissen, wie viel der Kurs kostet.', 'Ich würde gerne wissen, wie viel der Kurs kostet.', 'Ich möchte wissen, wie viel der Kurs kostet.', 'Ich möchte gern wissen, wie viel der Kurs kostet.', 'Ich möchte gerne wissen, wie viel der Kurs kostet.', 'Ich würde gern wissen, was der Kurs kostet.', 'Ich würde gerne wissen, was der Kurs kostet.', 'Ich möchte wissen, was der Kurs kostet.', 'Ich möchte gern wissen, was der Kurs kostet.', 'Ich möchte gerne wissen, was der Kurs kostet.'],
          explain: '«Я хотел бы» — `Ich würde gern` или `Ich möchte`. Вопрос внутри стал придаточным: `wie viel der Kurs kostet`, глагол — в конце.', tag: 'konj2' }
    ],

    apply: {
        task: 'Напишите 5–7 предложений хозяйке квартиры, фрау Ланге: в ванной не работает душ. Сообщите о проблеме, вежливо попросите прислать мастера, спросите, можно ли вызвать мастера самому, и скажите, когда вы дома.',
        checks: [
            'Модальный глагол спрягается (`kann`, `darf`), инфинитив стоит в конце, без `zu`',
            'Есть вежливая просьба с `Könnten Sie …?` или `Würden Sie …?`',
            'Разрешение спрашивается через `Darf ich …?` или `Dürfte ich …?`',
            'Факты сообщаются без `würde`: `Ich bin … zu Hause.`'
        ],
        model: 'Sehr geehrte Frau Lange, seit Montag funktioniert die Dusche in meiner Wohnung nicht. Könnten Sie bitte einen Handwerker schicken? Oder darf ich selbst einen Handwerker anrufen? Die Rechnung schicke ich Ihnen dann sofort. Ich bin jeden Tag ab 16 Uhr zu Hause. Vielen Dank im Voraus. Mit freundlichen Grüßen',
        modelRu: 'Уважаемая госпожа Ланге, с понедельника в моей квартире не работает душ. Не могли бы вы, пожалуйста, прислать мастера? Или можно мне самому вызвать мастера? Счёт я тогда сразу вам пришлю. Я дома каждый день с 16 часов. Заранее большое спасибо. С уважением'
    }
};
