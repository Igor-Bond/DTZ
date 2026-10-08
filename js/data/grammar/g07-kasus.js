/**
 * Модуль 7. Падежи: Nominativ, Akkusativ, Dativ и местоимения.
 *
 * Только три падежа и минимум Genitiv (wegen, Annas). Главное — какой падеж
 * требует глагол и где русский подсказывает неверно (anrufen, danken, свой).
 * Предлоги и их падежи — в модуле 9, здесь только одна ловушка с mit и für.
 */

export default {
    id: 'g07',
    order: 7,
    title: 'Падежи: Nominativ, Akkusativ, Dativ и местоимения',
    short: 'Падежи и местоимения',
    goal: 'Вы ставите артикль, притяжательное слово и местоимение в нужный падеж: знаете, какие глаголы требуют Akkusativ, а какие Dativ, и пишете `einen Termin`, `Ich rufe Sie an`, `Ich danke Ihnen` без ошибок.',
    why: 'Почти в каждом предложении письма есть дополнение: вы что-то просите, кому-то пишете, кого-то благодарите. Ошибки вроде `ein Termin` вместо `einen Termin` или `Ich rufe Ihnen an` встречаются у русскоговорящих постоянно и стоят баллов за Korrektheit. Правил немного, а частых глаголов с Dativ — меньше десятка.',

    theory: [
        { type: 'h', text: '1. Падеж: меняется артикль, а не слово' },
        { type: 'p', text: 'В русском меняется само слово: «врач — врача — врачу». В немецком меняется в основном **артикль**: `der Arzt — den Arzt — dem Arzt`. Поэтому ошибка в артикле часто и есть ошибка падежа. Падежей четыре, но для письма достаточно трёх.' },
        {
            type: 'table',
            head: ['Падеж', 'Вопрос', 'Роль', 'Пример'],
            rows: [
                ['Nominativ', '`Wer?` `Was?`', 'кто, что — подлежащее', '**Der Vermieter** antwortet nicht.'],
                ['Akkusativ', '`Wen?` `Was?`', 'кого, что — прямое дополнение', 'Ich rufe **den Vermieter** an.'],
                ['Dativ', '`Wem?`', 'кому — адресат', 'Ich schreibe **dem Vermieter**.']
            ],
            note: 'Какой падеж нужен, решает глагол (или предлог). Спрашивайте от глагола: «Ich rufe — wen?», «Ich helfe — wem?».'
        },

        { type: 'h', text: '2. Артикли в трёх падежах' },
        {
            type: 'table',
            head: ['Падеж', 'm: der Termin', 'n: das Formular', 'f: die Rechnung', 'Pl: die Kinder'],
            rows: [
                ['Nominativ', 'der · ein · kein', 'das · ein · kein', 'die · eine · keine', 'die · — · keine'],
                ['Akkusativ', '**den · einen · keinen**', 'das · ein · kein', 'die · eine · keine', 'die · — · keine'],
                ['Dativ', 'dem · einem · keinem', 'dem · einem · keinem', 'der · einer · keiner', 'den · — · keinen, у слова -n']
            ],
            note: 'Читайте по строке: определённый · неопределённый · `kein`. Неопределённого артикля во множественном числе нет.'
        },
        { type: 'rule', text: 'Akkusativ отличается от Nominativ **только в мужском роде**: `der → den`, `ein → einen`, `kein → keinen`. У среднего и женского рода и во множественном числе формы те же, что в Nominativ.' },
        {
            type: 'exs',
            items: [
                { de: 'Ich habe **einen** Termin beim Arzt.', ru: 'У меня приём у врача.' },
                { de: 'Ich brauche **ein** Formular.', ru: 'Мне нужен бланк.' },
                { de: 'Ich habe **eine** Frage.', ru: 'У меня вопрос.' },
                { de: 'Haben Sie **den** Brief bekommen?', ru: 'Вы получили письмо?' },
                { de: 'Wir haben noch **keinen** Mietvertrag.', ru: 'У нас ещё нет договора аренды.' }
            ]
        },
        { type: 'trap', wrong: 'Ich habe ein Termin.', right: 'Ich habe einen Termin.', why: '`der Termin` — мужской род, а `haben` требует Akkusativ. В мужском роде он виден: `einen`. Это самая частая ошибка падежа в письмах.' },
        { type: 'p', text: 'В Dativ мужской и средний род получают `dem`, `einem`, женский — `der`, `einer`, множественное — `den`, и к самому существительному добавляется **-n**: `mit den Kindern`. Если слово во множественном уже кончается на `-n` или `-s`, ничего не добавляется: `den Eltern`, `den Büros`.' },
        { type: 'p', text: 'Несколько слов мужского рода получают `-n` или `-en` во всех падежах, кроме Nominativ: `der Herr` → `Herrn`, `der Nachbar` → `Nachbarn`, `der Kollege` → `Kollegen`, `der Kunde` → `Kunden`. В письме чаще всего это `Herrn`: `Ich habe Herrn Weber angerufen.` В обращении `Sehr geehrter Herr Weber` — Nominativ, без `-n`.' },

        { type: 'h', text: '3. Притяжательные слова: mein, Ihr, unser …' },
        { type: 'p', text: 'У каждого лица своё слово: `ich` → `mein`, `du` → `dein`, `er`, `es` → `sein`, `sie` (она) → `ihr`, `wir` → `unser`, `ihr` → `euer`, `sie` (они) → `ihr`, `Sie` → `Ihr`. Окончания у всех такие же, как у `kein`.' },
        {
            type: 'table',
            head: ['Падеж', 'm', 'n', 'f', 'Pl'],
            rows: [
                ['Nominativ', 'mein Sohn', 'mein Kind', 'meine Tochter', 'meine Kinder'],
                ['Akkusativ', '**meinen** Sohn', 'mein Kind', 'meine Tochter', 'meine Kinder'],
                ['Dativ', 'meinem Sohn', 'meinem Kind', 'meiner Tochter', 'meinen Kindern']
            ],
            note: 'Так же меняются `dein`, `sein`, `ihr`, `unser`, `Ihr`: `Vielen Dank für Ihren Brief.`, `Ich schicke Ihnen meinen Arbeitsvertrag.` У `euer` выпадает `e`: `eure`, `euren`, `eurem`.'
        },
        { type: 'trap', wrong: 'Meine Tochter hat sein Heft vergessen.', right: 'Meine Tochter hat ihr Heft vergessen.', why: 'В русском одно слово «свой» для всех. В немецком его нет: у неё — `ihr`, у него — `sein`, у меня — `mein`. `sein Heft` значит «его тетрадь», то есть чужую.' },

        { type: 'h', text: '4. Какой падеж требует глагол' },
        { type: 'p', text: 'Большинство глаголов с одним дополнением требуют Akkusativ. Глаголов с Dativ мало, их стоит выучить списком. Русский иногда подсказывает верно, а иногда нет: опасные случаи отмечены знаком **!**.' },
        {
            type: 'table',
            head: ['Akkusativ: wen? was?', 'Пример', 'По-русски'],
            rows: [
                ['`haben`, `bekommen`', 'Ich habe **einen** Brief bekommen.', 'иметь, получить что'],
                ['`brauchen`', 'Ich brauche **einen** Arzt.', '**!** «**мне** нужен», а здесь `ich` и Akkusativ'],
                ['`anrufen`', 'Ich rufe **den** Vermieter an.', '**!** звонить **кому**, а здесь Akkusativ'],
                ['`fragen`', 'Ich frage **die** Lehrerin.', 'спросить кого, у кого'],
                ['`besuchen`, `einladen`', 'Ich lade **Sie** ein.', 'навестить, пригласить кого'],
                ['`kennen`, `sehen`, `verstehen`', 'Ich verstehe **den** Brief nicht.', 'знать, видеть, понимать что']
            ]
        },
        {
            type: 'table',
            head: ['Dativ: wem?', 'Пример', 'По-русски'],
            rows: [
                ['`helfen`', 'Können Sie **mir** helfen?', 'помогать кому — как в русском'],
                ['`danken`', 'Ich danke **Ihnen**.', '**!** благодарить **кого**, а здесь Dativ'],
                ['`gratulieren`', 'Wir gratulieren **dir**!', '**!** поздравлять **кого**, а здесь Dativ'],
                ['`antworten`', 'Bitte antworten Sie **mir** bald.', 'отвечать кому'],
                ['`gefallen`', 'Die Wohnung gefällt **uns**.', 'нравиться кому'],
                ['`gehören`', 'Das Fahrrad gehört **meinem** Sohn.', 'принадлежать кому'],
                ['`passen`', 'Der Termin passt **mir** gut.', 'подходить кому'],
                ['`fehlen`', '**Mir** fehlt noch ein Formular.', 'не хватать кому'],
                ['`schmecken`', 'Das Essen schmeckt **den** Kindern.', 'нравиться (о еде) кому']
            ],
            note: 'Как русское «мне» работают и готовые фразы: `Es tut mir leid.` — «Мне жаль». `Wie geht es Ihnen?` — `Mir geht es gut.`'
        },
        { type: 'rule', text: 'Из частых глаголов письма Dativ требуют `helfen`, `danken`, `antworten`, `gratulieren`, `gefallen`, `gehören`, `passen`, `fehlen`, `schmecken`. Если глагола нет в этом списке, скорее всего, нужен Akkusativ. Но адресат («кому?») при `schreiben`, `sagen`, `schicken` и других глаголах из раздела 5 — тоже Dativ: `Ich schreibe Ihnen`.' },
        { type: 'trap', wrong: 'Ich rufe Ihnen morgen an.', right: 'Ich rufe Sie morgen an.', why: '«Позвоню вам» — по-русски дательный падеж, поэтому рука пишет `Ihnen`. Но `anrufen` требует Akkusativ: `Sie`, `dich`, `den Vermieter`. Одна из самых частых ошибок русскоговорящих.' },
        { type: 'trap', wrong: 'Ich danke Sie für Ihre Hilfe.', right: 'Ich danke Ihnen für Ihre Hilfe.', why: '«Благодарю вас» — по-русски винительный падеж. А `danken` требует Dativ: `Ihnen`, `dir`, `dem Lehrer`.' },
        { type: 'trap', wrong: 'Ich helfe dich gern.', right: 'Ich helfe dir gern.', why: '`helfen` — Dativ, как и русское «помогу тебе». Здесь родной язык подсказывает верно, а ошибка возникает от привычки писать `dich`.' },
        { type: 'trap', wrong: 'Darf ich Ihnen etwas fragen?', right: 'Darf ich Sie etwas fragen?', why: '`fragen` требует Akkusativ — и для человека, и для вопроса. Его путают с `sagen`: `Ich sage Ihnen etwas` — там действительно Dativ.' },
        { type: 'trap', wrong: 'Mein Mann kommt mit mich.', right: 'Mein Mann kommt mit mir.', why: 'Падеж задают и предлоги. После `mit` всегда Dativ: `mit mir`, `mit Ihnen`. После `für`, наоборот, Akkusativ: `für mich`, а не `für mir`. Подробно о предлогах — в модуле 9.' },

        { type: 'h', text: '5. Два дополнения: кому и что' },
        { type: 'p', text: 'У глаголов `geben`, `schicken`, `zeigen`, `bringen`, `erklären`, `schreiben`, `sagen` два дополнения: **кому** — Dativ, **что** — Akkusativ. Как в русском: «послать хозяину письмо». Трудность только в порядке слов.' },
        {
            type: 'table',
            head: ['Что стоит', 'Порядок', 'Пример'],
            rows: [
                ['два существительных', 'Dativ → Akkusativ', 'Ich schicke **dem Vermieter** einen Brief.'],
                ['местоимение и существительное', 'местоимение раньше', 'Ich schicke **ihm** einen Brief. Ich schicke **ihn** dem Vermieter.'],
                ['два местоимения', 'Akkusativ → Dativ', 'Ich bringe **sie** **Ihnen** morgen. (`sie` — это die Bescheinigung)']
            ],
            note: 'Местоимение — короткое слово, оно стоит раньше существительного в любом падеже.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Können Sie **mir** die Adresse schicken?', ru: 'Можете прислать мне адрес?' },
                { de: 'Der Arzt hat **mir** ein Rezept gegeben.', ru: 'Врач дал мне рецепт.' },
                { de: 'Ich zeige **dem Hausmeister** den Schaden.', ru: 'Я покажу смотрителю дома повреждение.' },
                { de: 'Können Sie **es mir** erklären?', ru: 'Можете мне это объяснить?' }
            ]
        },
        { type: 'trap', wrong: 'Ich schicke dem Vermieter ihn.', right: 'Ich schicke ihn dem Vermieter.', why: 'По-русски «пошлю хозяину его» звучит нормально. По-немецки местоимение `ihn` стоит раньше существительного, хотя оно в Akkusativ.' },

        { type: 'h', text: '6. Личные местоимения' },
        {
            type: 'table',
            head: ['Nominativ', 'Akkusativ', 'Dativ', 'По-русски'],
            rows: [
                ['ich', 'mich', 'mir', 'я — меня — мне'],
                ['du', 'dich', 'dir', 'ты — тебя — тебе'],
                ['er', 'ihn', 'ihm', 'он — его — ему'],
                ['es', 'es', 'ihm', 'оно — его — ему'],
                ['sie', 'sie', 'ihr', 'она — её — ей'],
                ['wir', 'uns', 'uns', 'мы — нас — нам'],
                ['ihr', 'euch', 'euch', 'вы (несколько друзей) — вас — вам'],
                ['sie', 'sie', 'ihnen', 'они — их — им'],
                ['**Sie**', '**Sie**', '**Ihnen**', 'Вы (вежливо) — Вас — Вам']
            ],
            note: 'Вежливые `Sie`, `Ihnen`, `Ihr` всегда пишутся с большой буквы, в любом месте предложения. `ihnen` со строчной — это «им». Подробнее — в модуле 11.'
        },
        { type: 'rule', text: 'Местоимение берёт род **немецкого** слова: `der Vertrag` → `er`, `ihn`; `die Rechnung` → `sie`; `das Formular` → `es`.' },
        { type: 'trap', wrong: 'Die Rechnung ist da. Ich habe ihn schon bezahlt.', right: 'Die Rechnung ist da. Ich habe sie schon bezahlt.', why: '«Счёт? Я его оплатил»: по-русски «счёт» мужского рода. Но `die Rechnung` — женского, поэтому `sie`.' },
        { type: 'trap', wrong: 'Vielen Dank für ihre Antwort.', right: 'Vielen Dank für Ihre Antwort.', why: '`ihre` со строчной — «её» или «их». В письме адресату на «Sie» нужно `Ihre` с большой буквы, иначе вы благодарите кого-то третьего.' },

        { type: 'h', text: '7. Genitiv: только самое нужное' },
        { type: 'p', text: 'Четвёртый падеж, Genitiv («чей?»), в письме нужен в двух случаях. После `wegen` («из-за», «по поводу»): у мужского и среднего рода `des` и `-s` у существительного, у женского и во множественном — `der`. И имя с `-s`: `Annas Buch` — «книга Анны», обычно без апострофа.' },
        {
            type: 'exs',
            items: [
                { de: 'Ich schreibe Ihnen **wegen des Termins**.', ru: 'Я пишу вам по поводу приёма.' },
                { de: '**Wegen meiner Krankheit** kann ich nicht kommen.', ru: 'Из-за болезни я не могу прийти.' },
                { de: 'Ich rufe **wegen der Heizung** an.', ru: 'Я звоню по поводу отопления.' },
                { de: '**Annas** Lehrerin heißt Frau Meinert.', ru: 'Учительницу Анны зовут госпожа Майнерт.' }
            ]
        },
        { type: 'tip', text: 'В разговоре часто говорят `wegen dem Termin`, но в письме на экзамене пишите Genitiv: `wegen des Termins`. Не уверены в форме — скажите то же через `weil`: `…, weil ich krank bin.`' },

        { type: 'h', text: '8. Проверка за минуту' },
        {
            type: 'list',
            items: [
                'Найдите глагол и спросите: кого, что? — Akkusativ; кому? — Dativ. Глагол из списка Dativ?',
                'Мужской род в Akkusativ: `den`, `einen`, `keinen`, `meinen`, `ihn`.',
                'Местоимение того же рода, что немецкое слово: `die Rechnung` → `sie`, `das Formular` → `es`.',
                'Вежливые `Sie`, `Ihnen`, `Ihr` — с большой буквы.'
            ]
        }
    ],

    exercises: [
        // ---- выбор
        { id: 'g07-01', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich habe einen Termin beim Arzt.', 'Ich habe ein Termin beim Arzt.', 'Ich habe einem Termin beim Arzt.'], answer: 0,
          explain: '`der Termin` — мужской род, а `haben` требует Akkusativ: `einen`. `ein` — это Nominativ, `einem` — Dativ.', tag: 'kasus', diag: true },
        { id: 'g07-02', type: 'choice', q: 'Как сказать «Я позвоню вам завтра»?',
          options: ['Ich rufe Sie morgen an.', 'Ich rufe Ihnen morgen an.', 'Ich rufe Ihr morgen an.'], answer: 0,
          explain: '`anrufen` требует Akkusativ: `Sie`. Русское «позвонить вам» с дательным падежом здесь подводит.', tag: 'kasus', diag: true },
        { id: 'g07-03', type: 'choice', q: 'Как сказать «Благодарю вас за помощь»?',
          options: ['Ich danke Ihnen für Ihre Hilfe.', 'Ich danke Sie für Ihre Hilfe.', 'Ich danke Ihr für Ihre Hilfe.'], answer: 0,
          explain: '`danken` требует Dativ: `Ihnen`. По-русски «благодарить вас» — винительный падеж, отсюда ошибка `Sie`.', tag: 'kasus' },
        { id: 'g07-04', type: 'choice', q: 'Как вежливо спросить «Можно вас кое о чём спросить?»',
          options: ['Darf ich Sie etwas fragen?', 'Darf ich Ihnen etwas fragen?', 'Darf ich Ihr etwas fragen?'], answer: 0,
          explain: '`fragen` требует Akkusativ: `Sie`. Не путайте с `sagen`: `Ich sage Ihnen etwas` — там Dativ.', tag: 'kasus' },
        { id: 'g07-05', type: 'choice', q: 'Как сказать «Нам нравится квартира»?',
          options: ['Die Wohnung gefällt uns.', 'Die Wohnung gefällt wir.', 'Wir gefallen die Wohnung.'], answer: 0,
          explain: 'Как в русском: квартира нравится кому — нам. Подлежащее — `die Wohnung`, а `uns` — Dativ.', tag: 'kasus' },
        { id: 'g07-06', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich helfe meinen Kindern bei den Hausaufgaben.', 'Ich helfe meine Kinder bei den Hausaufgaben.', 'Ich helfe meinen Kinder bei den Hausaufgaben.'], answer: 0,
          explain: '`helfen` требует Dativ. Во множественном числе это `meinen` и `-n` у самого существительного: `meinen Kindern`.', tag: 'kasus' },
        { id: 'g07-07', type: 'choice', q: 'Как продолжить: «Она не сделала свои домашние задания»?',
          text: 'Meine Tochter ist krank.',
          options: ['Sie hat ihre Hausaufgaben nicht gemacht.', 'Sie hat seine Hausaufgaben nicht gemacht.', 'Sie hat sie Hausaufgaben nicht gemacht.'], answer: 0,
          explain: '«Свой» зависит от владельца: дочь — она, значит, `ihre`. `seine` означало бы «его задания», `sie` — не притяжательное слово, а «её» как дополнение.', tag: 'pronomen' },
        { id: 'g07-08', type: 'choice', q: 'Как сказать «Я пошлю его хозяину квартиры»?',
          text: 'Der Brief ist fertig.',
          options: ['Ich schicke ihn dem Vermieter.', 'Ich schicke dem Vermieter ihn.', 'Ich schicke ihm den Vermieter.'], answer: 0,
          explain: 'Местоимение `ihn` (это `der Brief`) стоит раньше существительного, хотя оно в Akkusativ. Кому — `dem Vermieter`, Dativ.', tag: 'pronomen' },
        { id: 'g07-09', type: 'choice', q: 'Как правильно написать в письме?',
          options: ['Ich schreibe Ihnen wegen des Termins.', 'Ich schreibe Ihnen wegen der Termin.', 'Ich schreibe Ihnen wegen den Termin.'], answer: 0,
          explain: 'После `wegen` в письме — Genitiv. У мужского рода это `des` и `-s` у существительного: `wegen des Termins`.', tag: 'kasus' },
        { id: 'g07-10', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich habe Herrn Weber gestern angerufen.', 'Ich habe Herr Weber gestern angerufen.', 'Ich habe Herren Weber gestern angerufen.'], answer: 0,
          explain: '`Herr` в Akkusativ и Dativ получает `-n`: `Herrn Weber`. `Herren` — это множественное число.', tag: 'kasus' },
        { id: 'g07-11', type: 'choice', q: 'Как поблагодарить учительницу в письме?',
          options: ['Vielen Dank für Ihre Hilfe.', 'Vielen Dank für ihre Hilfe.', 'Vielen Dank für Ihnen Hilfe.'], answer: 0,
          explain: '`Ihre` — вежливое «ваша», всегда с большой буквы. `ihre` со строчной — «её» или «их». `Ihnen` — не притяжательное слово, а «вам».', tag: 'schreibung' },

        // ---- пропуски
        { id: 'g07-12', type: 'gap', q: 'Вставьте неопределённый артикль.',
          text: 'Ich suche ___ Kindergarten für meinen Sohn.', answer: ['einen'],
          explain: '`der Kindergarten` — мужской род (по `der Garten`), а `suchen` требует Akkusativ: `einen`.', tag: 'kasus' },
        { id: 'g07-13', type: 'gap', q: 'Вставьте определённый артикль.',
          text: 'Haben Sie ___ Mietvertrag schon unterschrieben?', answer: ['den'],
          explain: '`der Mietvertrag` — мужской род, а `unterschreiben` требует Akkusativ: `den`.', tag: 'kasus' },
        { id: 'g07-14', type: 'gap', q: 'Вставьте местоимение.',
          text: 'Können Sie ___ bitte helfen?', hint: 'ich', answer: ['mir'],
          explain: '`helfen` требует Dativ: `mir`. Как и в русском — «помочь мне».', tag: 'kasus' },
        { id: 'g07-15', type: 'gap', q: 'Вставьте местоимение.',
          text: 'Vielen Dank! Ich danke ___ sehr.', hint: 'Sie, вежливо', answer: ['Ihnen'],
          explain: '`danken` — глагол с Dativ: `Ihnen`. По-русски «благодарю вас», но падеж здесь другой.', tag: 'kasus', diag: true },
        { id: 'g07-16', type: 'gap', q: 'Вставьте местоимение.',
          text: 'Passt ___ der Termin am Montag?', hint: 'Sie, вежливо', answer: ['Ihnen'],
          explain: '`passen` («подходить кому») требует Dativ: `Ihnen`, с большой буквы, как всё вежливое.', tag: 'kasus' },
        { id: 'g07-17', type: 'gap', q: 'Вставьте определённый артикль.',
          text: 'Ich schicke ___ Vermieter eine E-Mail.', answer: ['dem'],
          explain: 'Кому? — `dem Vermieter`, Dativ мужского рода. Что? — `eine E-Mail`, Akkusativ.', tag: 'kasus' },
        { id: 'g07-18', type: 'gap', q: 'Вставьте существительное в нужной форме.',
          text: 'Die Lehrerin gibt den ___ viele Hausaufgaben.', hint: 'die Kinder', answer: ['Kindern'],
          explain: 'Кому? — детям: Dativ множественного числа. К существительному добавляется `-n`: `den Kindern`.', tag: 'kasus' },
        { id: 'g07-19', type: 'gap', q: 'Вставьте притяжательное слово.',
          text: 'Mein Sohn hat ___ Jacke in der Schule vergessen.', hint: 'свою', answer: ['seine'],
          explain: '«Свой» у сына — `sein`. `die Jacke` — женский род, поэтому `seine`.', tag: 'pronomen' },
        { id: 'g07-20', type: 'gap', q: 'Вставьте притяжательное слово.',
          text: 'Frau Petrenko hat ___ Ausweis verloren.', hint: 'свой', answer: ['ihren'],
          explain: '«Свой» у женщины — `ihr`. `der Ausweis` — мужской род, Akkusativ: `ihren`.', tag: 'pronomen', diag: true },
        { id: 'g07-21', type: 'gap', q: 'Вставьте местоимение.',
          text: 'Die Rechnung ist da. Ich bezahle ___ morgen.', hint: 'её (die Rechnung)', answer: ['sie'],
          explain: '`die Rechnung` — женского рода, поэтому `sie`. По-русски «счёт — его», но род берётся из немецкого слова.', tag: 'pronomen' },
        { id: 'g07-22', type: 'gap', q: 'Вставьте местоимение.',
          text: 'Ich habe den Hausmeister angerufen, aber ich habe ___ nicht erreicht.', hint: 'его', answer: ['ihn'],
          explain: '`erreichen` требует Akkusativ. Hausmeister — он, Akkusativ от `er` — `ihn`.', tag: 'pronomen' },
        { id: 'g07-23', type: 'gap', q: 'Вставьте артикль.',
          text: 'Ich schreibe Ihnen wegen ___ Heizung.', hint: 'die Heizung', answer: ['der'],
          explain: 'После `wegen` — Genitiv. У женского рода это `der`: `wegen der Heizung`.', tag: 'kasus' },
        { id: 'g07-24', type: 'gap', q: 'Вставьте притяжательное слово.',
          text: 'Gehört das Fahrrad ___ Sohn?', hint: 'Ihr', answer: ['Ihrem'],
          explain: '`gehören` требует Dativ. `der Sohn` — мужской род: `Ihrem Sohn`, с большой буквы, как всё вежливое.', tag: 'kasus' },

        // ---- составить из слов
        { id: 'g07-25', type: 'build', q: 'Составьте предложение.',
          ru: 'Я пошлю хозяину квартиры письмо.',
          answer: ['Ich schicke dem Vermieter einen Brief.', 'Dem Vermieter schicke ich einen Brief.', 'Einen Brief schicke ich dem Vermieter.'],
          explain: 'Кому — `dem Vermieter` (Dativ), что — `einen Brief` (Akkusativ). Когда оба дополнения — существительные, Dativ обычно идёт первым.', tag: 'kasus' },
        { id: 'g07-26', type: 'build', q: 'Составьте предложение.',
          ru: 'Можете объяснить мне письмо?',
          answer: ['Können Sie mir den Brief erklären?'],
          explain: '`mir` — кому (Dativ), `den Brief` — что (Akkusativ). Местоимение стоит раньше существительного.', tag: 'kasus' },
        { id: 'g07-27', type: 'build', q: 'Составьте предложение. Одна плашка лишняя.',
          ru: 'Я позвоню вам в понедельник.',
          answer: ['Ich rufe Sie am Montag an.', 'Am Montag rufe ich Sie an.'], extra: ['Ihnen'],
          explain: '`anrufen` требует Akkusativ: `Sie`. Лишняя плашка `Ihnen` — это русский дательный «вам».', tag: 'kasus' },
        { id: 'g07-28', type: 'build', q: 'Составьте предложение.',
          ru: 'Я принесу вам справку завтра.',
          answer: ['Ich bringe Ihnen morgen die Bescheinigung.', 'Ich bringe Ihnen die Bescheinigung morgen.', 'Morgen bringe ich Ihnen die Bescheinigung.', 'Die Bescheinigung bringe ich Ihnen morgen.'],
          explain: 'Кому — `Ihnen` (Dativ), что — `die Bescheinigung` (Akkusativ). Местоимение `Ihnen` стоит раньше существительного.', tag: 'kasus' },
        { id: 'g07-29', type: 'build', q: 'Составьте предложение. Одна плашка лишняя.',
          ru: 'Моя дочь забыла свою тетрадь.',
          answer: ['Meine Tochter hat ihr Heft vergessen.'], extra: ['sein'],
          explain: '«Свой» у дочери — `ihr`. `sein Heft` значило бы «его тетрадь».', tag: 'pronomen' },
        { id: 'g07-30', type: 'build', q: 'Составьте предложение.',
          ru: 'Из-за моей болезни я не могу прийти на курс.',
          answer: ['Wegen meiner Krankheit kann ich nicht in den Kurs kommen.', 'Ich kann wegen meiner Krankheit nicht in den Kurs kommen.'],
          explain: 'После `wegen` — Genitiv: `die Krankheit` → `meiner Krankheit`. Если `wegen …` стоит первым, глагол `kann` идёт сразу за ним.', tag: 'kasus' },

        // ---- исправить ошибку
        { id: 'g07-31', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich habe gestern ein Brief vom Jobcenter bekommen.', answer: ['Ich habe gestern einen Brief vom Jobcenter bekommen.', 'Gestern habe ich einen Brief vom Jobcenter bekommen.'],
          explain: '`der Brief` — мужской род, а `bekommen` требует Akkusativ: `einen Brief`.', tag: 'kasus' },
        { id: 'g07-32', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich rufe dir heute Abend an.', answer: ['Ich rufe dich heute Abend an.', 'Heute Abend rufe ich dich an.'],
          explain: '`anrufen` требует Akkusativ: `dich`. По-русски «позвоню тебе», но немецкий глагол спрашивает «кого?».', tag: 'kasus' },
        { id: 'g07-33', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich danke dich für die Einladung.', answer: ['Ich danke dir für die Einladung.'],
          explain: '`danken` требует Dativ: `dir`. Русское «благодарю тебя» здесь подводит.', tag: 'kasus' },
        { id: 'g07-34', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich helfe meine Nachbarin beim Umzug.', answer: ['Ich helfe meiner Nachbarin beim Umzug.'],
          explain: '`helfen` требует Dativ. У женского рода Dativ — `meiner`: `meiner Nachbarin`.', tag: 'kasus' },
        { id: 'g07-35', type: 'fix', q: 'Исправьте ошибку. Муж ищет свои очки.',
          text: 'Mein Mann sucht ihre Brille.', answer: ['Mein Mann sucht seine Brille.'],
          explain: '«Свой» у мужа — `sein`: `seine Brille` (`die Brille` — женский род). `ihre Brille` — очки какой-то женщины.', tag: 'pronomen' },
        { id: 'g07-36', type: 'fix', q: 'Исправьте ошибку. Местоимение заменяет слово Formular.',
          text: 'Wo ist das Formular? Ich finde sie nicht.', answer: ['Wo ist das Formular? Ich finde es nicht.'],
          explain: '`das Formular` — среднего рода, поэтому `es`. По-русски «анкета — её», отсюда ошибка `sie`.', tag: 'pronomen' },
        { id: 'g07-37', type: 'fix', q: 'Исправьте порядок слов.',
          text: 'Der Schlüssel ist hier. Ich gebe dem Hausmeister ihn.', answer: ['Der Schlüssel ist hier. Ich gebe ihn dem Hausmeister.'],
          explain: 'Местоимение `ihn` стоит раньше существительного `dem Hausmeister`, хотя оно в Akkusativ.', tag: 'pronomen' },

        // ---- соединить и перевести
        { id: 'g07-38', type: 'join', q: 'Соедините союзом und, а во второй части замените `dem Vermieter` местоимением.',
          parts: ['Ich rufe den Vermieter an.', 'Ich erkläre dem Vermieter das Problem.'], connector: 'und',
          answer: ['Ich rufe den Vermieter an und erkläre ihm das Problem.', 'Ich rufe den Vermieter an und ich erkläre ihm das Problem.', 'Ich rufe den Vermieter an, und ich erkläre ihm das Problem.'],
          explain: '`erklären` — кому? — `dem Vermieter`, это Dativ, а местоимение в Dativ — `ihm`. Подлежащее `ich` после `und` можно не повторять.', tag: 'pronomen' },
        { id: 'g07-39', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Завтра я позвоню учительнице.',
          answer: ['Morgen rufe ich die Lehrerin an.', 'Ich rufe morgen die Lehrerin an.', 'Ich rufe die Lehrerin morgen an.'],
          explain: '`anrufen` требует Akkusativ: `die Lehrerin` — у женского рода форма та же, что в Nominativ. `der Lehrerin` — Dativ, как в русском «учительнице», и здесь это ошибка.', tag: 'kasus' },
        { id: 'g07-40', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Благодарю вас за ваш ответ.',
          answer: ['Ich danke Ihnen für Ihre Antwort.', 'Für Ihre Antwort danke ich Ihnen.', 'Ich bedanke mich bei Ihnen für Ihre Antwort.'],
          explain: '`danken` требует Dativ: `Ihnen`. `Ihre Antwort` — после `für` Akkusativ, у женского рода он не отличается от Nominativ.', tag: 'kasus' },
        { id: 'g07-41', type: 'translate', q: 'Переведите на немецкий, используя fehlen.',
          ru: 'Мне не хватает ещё одной справки.',
          answer: ['Mir fehlt noch eine Bescheinigung.', 'Es fehlt mir noch eine Bescheinigung.', 'Eine Bescheinigung fehlt mir noch.'],
          explain: 'Как в русском: не хватает кому — `mir`, Dativ. А то, чего не хватает, — подлежащее: `eine Bescheinigung`.', tag: 'kasus' },
        { id: 'g07-42', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Я покажу вам квартиру в субботу.',
          answer: ['Ich zeige Ihnen die Wohnung am Samstag.', 'Ich zeige Ihnen am Samstag die Wohnung.', 'Am Samstag zeige ich Ihnen die Wohnung.', 'Die Wohnung zeige ich Ihnen am Samstag.'],
          explain: 'Кому — `Ihnen` (Dativ), что — `die Wohnung` (Akkusativ). Местоимение `Ihnen` стоит сразу после глагола, раньше существительного.', tag: 'kasus' }
    ],

    apply: {
        task: 'Напишите 5–7 предложений хозяину квартиры, господину Беккеру: вы получили от него письмо и не всё поняли. Попросите помочь и позвонить вам, скажите, что в пятницу покажете ему повреждение в ванной, поблагодарите.',
        checks: [
            'Мужской род в Akkusativ изменён: `Ihren Brief`, `den Schaden`, `ihn`',
            'После `helfen` и `danken` — Dativ (`mir`, `Ihnen`), после `anrufen` — Akkusativ (`mich`)',
            'В предложении с двумя дополнениями местоимение стоит раньше существительного: `Ihnen den Schaden`',
            'Вежливые `Sie`, `Ihnen`, `Ihr` написаны с большой буквы'
        ],
        model: 'Sehr geehrter Herr Becker, vielen Dank für Ihren Brief. Leider verstehe ich ihn nicht ganz. Können Sie mir bitte helfen? Bitte rufen Sie mich morgen an. Am Freitag bin ich zu Hause. Dann kann ich Ihnen auch den Schaden im Bad zeigen. Ich danke Ihnen für Ihre Hilfe. Mit freundlichen Grüßen Irina Melnyk',
        modelRu: 'Уважаемый господин Беккер, большое спасибо за ваше письмо. К сожалению, я понимаю его не до конца. Можете мне, пожалуйста, помочь? Пожалуйста, позвоните мне завтра. В пятницу я дома. Тогда я смогу показать вам и повреждение в ванной. Благодарю вас за помощь. С уважением, Ирина Мельник'
    }
};
