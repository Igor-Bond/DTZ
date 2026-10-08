/**
 * Модуль 3. Глаголы в настоящем времени.
 *
 * Окончания, чередование гласных, sein/haben/werden/wissen, приставки,
 * возвратные глаголы, Imperativ и Präsens в значении будущего.
 */

export default {
    id: 'g03',
    order: 3,
    title: 'Глаголы в настоящем времени',
    short: 'Настоящее время',
    goal: 'Вы спрягаете глаголы в Präsens без ошибок: верные окончания, `er spricht` и `er fährt`, формы `sein`, `haben`, `werden`, `wissen`, отделяемые и возвратные глаголы, а ещё вежливо просите в Imperativ.',
    why: 'В письме почти каждое предложение — в настоящем времени: `Ich wohne …`, `Mein Sohn hat …`, `Der Kurs beginnt …`. Неверное окончание (`er komm`, `er sprecht`) проверяющий видит сразу, и такие мелочи складываются в потерянные баллы за корректность. Кроме того, через Präsens по-немецки говорят и о будущем: `Morgen rufe ich Sie an`.',

    theory: [
        { type: 'h', text: '1. Окончания: ich -e, er -t, Sie -en' },
        { type: 'p', text: 'Немецкий глагол, как и русский, меняет окончание по лицам: «я живу, он живёт». Основа — инфинитив без `-en`: `wohn-en`, `brauch-en`. К ней прибавляется окончание из таблицы.' },
        {
            type: 'table',
            head: ['Лицо', 'Окончание', 'wohnen', 'brauchen'],
            rows: [
                ['ich', '-e', 'wohn**e**', 'brauch**e**'],
                ['du', '-st', 'wohn**st**', 'brauch**st**'],
                ['er / sie / es', '-t', 'wohn**t**', 'brauch**t**'],
                ['wir', '-en', 'wohn**en**', 'brauch**en**'],
                ['ihr', '-t', 'wohn**t**', 'brauch**t**'],
                ['sie / Sie', '-en', 'wohn**en**', 'brauch**en**']
            ],
            note: 'Вежливое `Sie` («вы») спрягается как `sie` («они»): `Sie wohnen`, `Sie brauchen` — даже если вы пишете одному человеку. У правильных глаголов формы `wir` и `Sie` совпадают с инфинитивом.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Ich **wohne** seit drei Jahren in Leipzig.', ru: 'Я живу в Лейпциге три года.' },
                { de: 'Meine Tochter **geht** in die zweite Klasse.', ru: 'Моя дочь ходит во второй класс.' },
                { de: 'Wir **suchen** eine größere Wohnung.', ru: 'Мы ищем квартиру побольше.' },
                { de: '**Brauchen** Sie noch eine Kopie von meinem Pass?', ru: 'Вам нужна ещё копия моего паспорта?' },
                { de: 'Der Kurs **beginnt** um 18 Uhr.', ru: 'Курс начинается в 18 часов.' }
            ]
        },
        { type: 'trap', wrong: 'Mein Sohn gehen heute nicht in die Schule.', right: 'Mein Sohn geht heute nicht in die Schule.', why: 'Инфинитив не заменяет спрягаемую форму. `Mein Sohn` — это `er`, значит, окончание `-t`: `geht`. Так же `meine Frau`, `der Arzt`, `die Lehrerin` — это `er` или `sie`.' },
        { type: 'trap', wrong: 'Wann hat Sie Zeit?', right: 'Wann haben Sie Zeit?', why: 'Вежливое `Sie` по форме — множественное число, даже если вы пишете одному человеку: `Sie haben`, `Sie wohnen`. `hat` подходит только к `er`, `sie` («она») и `es`.' },

        { type: 'h', text: '2. Основы на -t, -d и на -s, -ß, -z' },
        {
            type: 'table',
            head: ['Лицо', 'arbeiten', 'finden', 'heißen', 'reisen'],
            rows: [
                ['ich', 'arbeite', 'finde', 'heiße', 'reise'],
                ['du', 'arbeit**est**', 'find**est**', 'heiß**t**', 'reis**t**'],
                ['er / sie / es', 'arbeit**et**', 'find**et**', 'heiß**t**', 'reis**t**'],
                ['ihr', 'arbeit**et**', 'find**et**', 'heiß**t**', 'reis**t**']
            ],
            note: 'Основа на `-t` или `-d`, а также на согласный и `-m`/`-n` (`arbeiten`, `warten`, `kosten`, `finden`, `öffnen`, `rechnen`): перед `-st` и `-t` вставляется `e`, иначе окончание не слышно; исключение — глаголы с чередованием гласной: `er lädt … ein`, `er erhält`, `er gilt`. Основа на `-s`, `-ß`, `-z` (`heißen`, `reisen`, `benutzen`): у `du` только `-t`, и форма совпадает с `er`. Формы `wir` и `Sie` обычные.'
        },
        { type: 'trap', wrong: 'Mein Mann arbeit bis 18 Uhr.', right: 'Mein Mann arbeitet bis 18 Uhr.', why: 'Основа `arbeit-` уже кончается на `t`, и кажется, что окончание есть. Но у `er/sie` нужно `-et`: `arbeitet`, `wartet`, `findet`.' },

        { type: 'h', text: '3. Глаголы, которые меняют гласную' },
        { type: 'p', text: 'У части сильных глаголов в формах `du` и `er/sie/es` меняется гласная: `e` → `i` или `ie`, `a` → `ä`. В остальных лицах — как в инфинитиве: `ich spreche`, `wir fahren`, `Sie nehmen`. Эти формы надо выучить; самые нужные для письма — в таблице.' },
        {
            type: 'table',
            head: ['Инфинитив', 'ich', 'du', 'er / sie / es'],
            rows: [
                ['sprechen', 'spreche', 'spr**i**chst', 'spr**i**cht'],
                ['helfen', 'helfe', 'h**i**lfst', 'h**i**lft'],
                ['geben', 'gebe', 'g**i**bst', 'g**i**bt'],
                ['nehmen', 'nehme', 'n**imm**st', 'n**imm**t'],
                ['treffen', 'treffe', 'tr**i**ffst', 'tr**i**fft'],
                ['vergessen', 'vergesse', 'verg**i**sst', 'verg**i**sst'],
                ['lesen', 'lese', 'l**ie**st', 'l**ie**st'],
                ['sehen', 'sehe', 's**ie**hst', 's**ie**ht'],
                ['fahren', 'fahre', 'f**ä**hrst', 'f**ä**hrt'],
                ['schlafen', 'schlafe', 'schl**ä**fst', 'schl**ä**ft'],
                ['laufen', 'laufe', 'l**ä**ufst', 'l**ä**uft'],
                ['waschen', 'wasche', 'w**ä**schst', 'w**ä**scht']
            ],
            note: '`nehmen` меняет и согласную: `nimmst`, `nimmt`. У `lesen` и `vergessen` основа на `s`, поэтому формы `du` и `er` совпадают. С приставкой чередование сохраняется: `er lädt … ein`, `er erhält`, `er nimmt … mit`.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Meine Tochter **spricht** schon gut Deutsch.', ru: 'Моя дочь уже хорошо говорит по-немецки.' },
                { de: 'Mein Mann **fährt** jeden Tag mit dem Bus zur Arbeit.', ru: 'Мой муж каждый день ездит на работу на автобусе.' },
                { de: 'Die Nachbarin **hilft** mir oft mit den Kindern.', ru: 'Соседка часто помогает мне с детьми.' },
                { de: 'Mein Sohn **läuft** jeden Morgen zur Schule.', ru: 'Мой сын каждое утро ходит в школу пешком.' },
                { de: 'Der Arzt **gibt** mir eine Bescheinigung für die Arbeit.', ru: 'Врач даёт мне справку для работы.' }
            ]
        },
        { type: 'trap', wrong: 'Mein Sohn sprecht gut Deutsch.', right: 'Mein Sohn spricht gut Deutsch.', why: 'У `sprechen` в форме `er/sie` гласная меняется: `spricht`. Форма `sprecht` существует, но только для `ihr`.' },

        { type: 'h', text: '4. sein, haben, werden, wissen' },
        {
            type: 'table',
            head: ['Лицо', 'sein', 'haben', 'werden', 'wissen'],
            rows: [
                ['ich', 'bin', 'habe', 'werde', 'weiß'],
                ['du', 'bist', 'hast', 'wirst', 'weißt'],
                ['er / sie / es', 'ist', 'hat', 'wird', 'weiß'],
                ['wir', 'sind', 'haben', 'werden', 'wissen'],
                ['ihr', 'seid', 'habt', 'werdet', 'wisst'],
                ['sie / Sie', 'sind', 'haben', 'werden', 'wissen']
            ],
            note: 'Эти глаголы неправильные, их формы учат наизусть. У `wissen` формы `ich` и `er` одинаковы и без окончания: `ich weiß`, `er weiß` — как у модальных глаголов (модуль 5). Русское «у меня есть», «у сына температура» — это `haben`.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Ich **bin** seit Montag krank.', ru: 'Я болею с понедельника.' },
                { de: 'Mein Sohn **hat** Fieber.', ru: 'У моего сына температура.' },
                { de: 'Meine Tochter **wird** im Mai sechs Jahre alt.', ru: 'В мае моей дочери исполнится шесть лет.' },
                { de: 'Ich **weiß** leider nicht, wann der Kurs beginnt.', ru: 'К сожалению, я не знаю, когда начинается курс.' },
                { de: '**Haben** Sie am Freitag Zeit?', ru: 'У вас есть время в пятницу?' }
            ]
        },
        { type: 'trap', wrong: 'Ich weiße nicht, ob ich kommen kann.', right: 'Ich weiß nicht, ob ich kommen kann.', why: '`wissen` — особый глагол: `ich weiß` без окончания `-e`. Рука тянется дописать его по образцу `ich wohne`, `ich mache`.' },

        { type: 'h', text: '5. Приставки: отделяемые и неотделяемые' },
        { type: 'p', text: 'Многие нужные в письме глаголы — с отделяемой приставкой: `anrufen`, `abholen`, `einladen`. В Präsens приставка отрывается и уходит в **конец** предложения, а спрягается основная часть. Ударение в таких глаголах падает на приставку: **an**rufen, **ab**holen.' },
        {
            type: 'table',
            head: ['Инфинитив', 'Präsens', 'Перевод'],
            rows: [
                ['anrufen', 'Ich **rufe** Sie morgen **an**.', 'позвонить'],
                ['abholen', 'Ich **hole** meine Tochter um 16 Uhr **ab**.', 'забрать'],
                ['mitbringen', 'Ich **bringe** die Unterlagen **mit**.', 'принести с собой'],
                ['einladen', 'Wir **laden** Sie zu unserem Fest **ein**.', 'пригласить'],
                ['ausfüllen', 'Mein Mann **füllt** den Antrag **aus**.', 'заполнить'],
                ['absagen', 'Ich **sage** den Termin **ab**.', 'отменить'],
                ['zurückkommen', 'Wir **kommen** am Sonntag **zurück**.', 'вернуться'],
                ['vorbeikommen', 'Ich **komme** heute Nachmittag bei Ihnen **vorbei**.', 'зайти'],
                ['aufpassen', 'Meine Mutter **passt** auf die Kinder **auf**.', 'присматривать'],
                ['anmelden', 'Ich **melde** meine Tochter in der Schule **an**.', 'записать'],
                ['einziehen', 'Wir **ziehen** am 1. Mai in die neue Wohnung **ein**.', 'въехать']
            ],
            note: 'В придаточном и после модального глагола приставка не отрывается: `weil ich Sie morgen anrufe`, `Ich möchte Sie anrufen` (модули 2 и 5).'
        },
        { type: 'trap', wrong: 'Ich rufe Sie morgen.', right: 'Ich rufe Sie morgen an.', why: 'Без приставки получается другой глагол: `rufen` — «звать», `anrufen` — «звонить по телефону». Отделившуюся приставку легко забыть — проверяйте конец предложения.' },
        { type: 'p', text: 'Приставки `be-`, `emp-`, `ent-`, `er-`, `ge-`, `ver-`, `zer-` не отделяются никогда, и ударение на них не падает. Как отличить: отделяемая приставка обычно совпадает с предлогом или наречием (`an`, `ab`, `auf`, `aus`, `mit`, `zurück`, `vorbei`), неотделяемая — безударный слог, который отдельным словом не бывает.' },
        {
            type: 'exs',
            items: [
                { de: 'Ich **bekomme** jeden Monat eine Rechnung.', ru: 'Я каждый месяц получаю счёт.' },
                { de: 'Ich **verstehe** dieses Formular nicht.', ru: 'Я не понимаю этот формуляр.' },
                { de: 'Die Lehrerin **erklärt** die Hausaufgaben sehr gut.', ru: 'Учительница очень хорошо объясняет домашние задания.' },
                { de: 'Mein Sohn **vergisst** oft seine Sportsachen.', ru: 'Мой сын часто забывает спортивную форму.' },
                { de: 'Am Sonntag **besuchen** wir meine Schwester.', ru: 'В воскресенье мы едем в гости к моей сестре.' }
            ]
        },

        { type: 'h', text: '6. Возвратные глаголы: mich, dich, sich' },
        { type: 'p', text: 'Возвратный глагол идёт с местоимением, как русское «-ся»: `sich freuen` — «радоваться». Но в немецком это отдельное слово, и оно меняется по лицам. Стоит оно сразу после спрягаемого глагола; если подлежащее — местоимение, возвратное местоимение идёт после него: `Morgen treffen wir uns.` Если подлежащее — существительное, возвратное местоимение обычно идёт перед ним: `Morgen treffen sich die Nachbarn.`' },
        {
            type: 'table',
            head: ['Лицо', 'Местоимение', 'Пример'],
            rows: [
                ['ich', '**mich**', 'Ich freue **mich** auf das Wochenende.'],
                ['du', '**dich**', 'Interessierst du **dich** für den Kurs?'],
                ['er / sie / es', '**sich**', 'Meine Mutter kümmert **sich** um die Kinder.'],
                ['wir', '**uns**', 'Wir treffen **uns** vor der Schule.'],
                ['ihr', '**euch**', 'Meldet ihr **euch** online an?'],
                ['sie / Sie', '**sich**', 'Die Nachbarn beschweren **sich** über den Lärm.']
            ],
            note: 'Для вежливого `Sie` — тоже `sich`: `Bitte melden Sie sich im Sekretariat.` Ещё частые: `Ich entschuldige mich für die Verspätung.`, `Ich melde mich beim Arzt an.` Какой предлог нужен (`auf`, `für`, `um`, `über`), — модуль 9.'
        },
        { type: 'trap', wrong: 'Ich freue sich auf den Kurs.', right: 'Ich freue mich auf den Kurs.', why: 'В русском «-ся» одно для всех лиц: «радуюсь, радуемся». В немецком местоимение подстраивается под подлежащее: `ich … mich`, `wir … uns`. `sich` — только для `er/sie/es`, `sie` и `Sie`.' },
        { type: 'trap', wrong: 'Ich interessiere für den Abendkurs.', right: 'Ich interessiere mich für den Abendkurs.', why: 'В русском «интересуюсь» возвратность спрятана в окончании, и при переводе её легко потерять. По-немецки `mich` — отдельное слово, без него предложение неполное.' },

        { type: 'h', text: '7. Просьба: Imperativ' },
        { type: 'p', text: 'В просьбе глагол стоит **первым**. Для `Sie` берут форму `Sie` и оставляют местоимение: `Warten Sie`. Для `du` — форму `du` без местоимения и без окончания: `du rufst` → `Ruf`. Для `ihr` — форму `ihr` без местоимения: `Ruft`. Отделяемая приставка уходит в конец.' },
        {
            type: 'table',
            head: ['Инфинитив', 'Sie', 'du', 'ihr'],
            rows: [
                ['anrufen', '**Rufen** Sie mich **an**.', '**Ruf** mich **an**.', '**Ruft** mich **an**.'],
                ['warten', '**Warten** Sie bitte.', '**Warte** bitte.', '**Wartet** bitte.'],
                ['sprechen', '**Sprechen** Sie langsam.', '**Sprich** langsam.', '**Sprecht** langsam.'],
                ['geben', '**Geben** Sie mir die Adresse.', '**Gib** mir die Adresse.', '**Gebt** mir die Adresse.'],
                ['nehmen', '**Nehmen** Sie Platz.', '**Nimm** Platz.', '**Nehmt** Platz.'],
                ['lesen', '**Lesen** Sie den Brief.', '**Lies** den Brief.', '**Lest** den Brief.'],
                ['fahren', '**Fahren** Sie vorsichtig.', '**Fahr** vorsichtig.', '**Fahrt** vorsichtig.'],
                ['sein', '**Seien** Sie pünktlich.', '**Sei** pünktlich.', '**Seid** pünktlich.']
            ],
            note: 'Чередование `e` → `i/ie` в просьбе к `du` остаётся (`Sprich!`, `Gib!`, `Nimm!`, `Lies!`), а умлаут `a` → `ä` — нет: `Fahr!`, `Schlaf gut!`. Основы на `-t`, `-d` получают `-e`: `Warte!`, `Antworte mir bitte!`'
        },
        { type: 'trap', wrong: 'Geben mir bitte Bescheid.', right: 'Geben Sie mir bitte Bescheid.', why: 'В русском «Сообщите мне» обходится без «вы», поэтому `Sie` легко пропустить. В немецкой вежливой просьбе `Sie` обязательно, сразу после глагола.' },
        { type: 'trap', wrong: 'Nehm doch den Bus.', right: 'Nimm doch den Bus.', why: 'Форма для `du` берётся из `du nimmst`, а не из инфинитива: `Nimm!`. Так же `Sprich!`, `Gib!`, `Lies!`, `Hilf!`.' },

        { type: 'h', text: '8. Präsens о будущем' },
        {
            type: 'exs',
            items: [
                { de: 'Morgen **rufe** ich Sie **an**.', ru: 'Завтра я вам позвоню.' },
                { de: 'Nächste Woche **komme** ich wieder in den Kurs.', ru: 'На следующей неделе я снова приду на курс.' },
                { de: 'Am Montag **bringe** ich die Bescheinigung **mit**.', ru: 'В понедельник я принесу справку.' },
                { de: 'Wir **ziehen** im Juli **um**.', ru: 'В июле мы переезжаем.' }
            ]
        },
        { type: 'tip', text: 'Русское «позвоню», «принесу», «приду» переводите настоящим временем и словом времени: `Ich rufe Sie morgen an.` Форма с `werden` (`Ich werde Sie anrufen`) не ошибка, но в коротком письме она не нужна.' },

        { type: 'h', text: '9. Проверка за десять секунд' },
        {
            type: 'list',
            items: [
                'Кто подлежащее? `ich` → `-e`, `er/sie` (`mein Sohn`, `die Lehrerin`) → `-t`, `Sie` → `-en`.',
                'Глагол с чередованием (`spricht`, `fährt`, `nimmt`)? Гласная меняется только у `du` и `er/sie`.',
                'Отделяемая приставка стоит в конце предложения?',
                'Возвратное местоимение подходит к лицу: `ich … mich`, `wir … uns`?',
                'В просьбе на «вы» есть `Sie` сразу после глагола?'
            ]
        }
    ],

    exercises: [
        // ---- выбор
        { id: 'g03-01', type: 'choice', q: 'Какая форма правильная?',
          text: 'Unser Vermieter ___ leider kein Englisch.',
          options: ['spricht', 'sprecht', 'sprechen', 'sprichst'], answer: 0,
          explain: '`Unser Vermieter` — это `er`. У `sprechen` в форме `er` гласная меняется: `spricht`. `sprecht` — форма для `ihr`, `sprichst` — для `du`.', tag: 'verbform', diag: true },
        { id: 'g03-02', type: 'choice', q: 'Какой вопрос правильный?',
          options: ['Wo wohnen Sie jetzt?', 'Wo wohnt Sie jetzt?', 'Wo wohnst Sie jetzt?'], answer: 0,
          explain: 'Вежливое `Sie` спрягается как множественное число: `Sie wohnen`. `wohnt` подходит к `sie` — «она», `wohnst` — к `du`.', tag: 'verbform' },
        { id: 'g03-03', type: 'choice', q: 'Какая форма правильная?',
          text: 'Ich ___ morgen mit dem Zug nach Hamburg.',
          options: ['fahre', 'fähre', 'fährt', 'fahrst'], answer: 0,
          explain: 'Умлаут появляется только у `du fährst` и `er fährt`. У `ich` — как в инфинитиве: `fahre`.', tag: 'verbform' },
        { id: 'g03-04', type: 'choice', q: 'Какая форма правильная?',
          text: '___ du morgen Zeit?',
          options: ['Hast', 'Habst', 'Hat'], answer: 0,
          explain: '`haben` — неправильный глагол: `du hast`, `er hat`. Формы `habst` нет, а `hat` — для `er/sie`.', tag: 'verbform' },
        { id: 'g03-05', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich hole meinen Sohn um 15 Uhr vom Kindergarten ab.', 'Ich abhole meinen Sohn um 15 Uhr vom Kindergarten.', 'Ich hole ab meinen Sohn um 15 Uhr vom Kindergarten.'], answer: 0,
          explain: '`abholen` — отделяемый глагол: `hole` на втором месте, приставка `ab` — последнее слово.', tag: 'klammer' },
        { id: 'g03-06', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich freue mich auf Ihren Besuch.', 'Ich freue sich auf Ihren Besuch.', 'Ich freue auf Ihren Besuch.'], answer: 0,
          explain: 'Возвратное местоимение подстраивается под подлежащее: `ich … mich`. `sich` — только для третьего лица и `Sie`, а без местоимения `sich freuen` не работает.', tag: 'verbform', diag: true },
        { id: 'g03-07', type: 'choice', q: 'Выберите вежливую просьбу.',
          options: ['Schicken Sie mir bitte die Unterlagen.', 'Schicken mir bitte die Unterlagen.', 'Schickt Sie mir bitte die Unterlagen.'], answer: 0,
          explain: 'В просьбе на «вы» глагол стоит первым в форме `Sie`, а `Sie` идёт сразу за ним: `Schicken Sie …`. Без `Sie` просьба неполная.', tag: 'verbform' },
        { id: 'g03-08', type: 'choice', q: 'Как попросить друга (на «ты»)?',
          options: ['Gib mir bitte deine Telefonnummer.', 'Geb mir bitte deine Telefonnummer.', 'Gibst mir bitte deine Telefonnummer.'], answer: 0,
          explain: 'Imperativ для `du` берётся из формы `du gibst` без окончания: `Gib!`. Чередование `e` → `i` сохраняется.', tag: 'verbform' },
        { id: 'g03-09', type: 'choice', q: 'Какая форма правильная?',
          text: 'Meine Frau ___ im Krankenhaus.',
          options: ['arbeitet', 'arbeit', 'arbeitest'], answer: 0,
          explain: 'Основа `arbeit-` кончается на `t`, поэтому перед окончанием `-t` вставляется `e`: `arbeitet`. `arbeitest` — форма для `du`.', tag: 'verbform' },
        { id: 'g03-10', type: 'choice', q: 'Какая форма правильная?',
          text: 'Wie ___ du? — Ich heiße Lena.',
          options: ['heißt', 'heißst', 'heiß'], answer: 0,
          explain: 'Основа `heiß-` кончается на `ß`, поэтому у `du` добавляется только `-t`: `du heißt`.', tag: 'verbform' },

        // ---- пропуски
        { id: 'g03-11', type: 'gap', q: 'Вставьте глагол в Präsens.',
          text: 'Der Kurs ___ 150 Euro im Monat.', hint: 'kosten', answer: ['kostet'],
          explain: 'Основа `kost-` кончается на `t`, поэтому у `er/sie/es` окончание `-et`: `kostet`.', tag: 'verbform' },
        { id: 'g03-12', type: 'gap', q: 'Вставьте глагол в Präsens.',
          text: 'Mein Bruder ___ mir beim Umzug.', hint: 'helfen', answer: ['hilft'],
          explain: '`helfen` меняет `e` на `i` у `du` и `er/sie`: `er hilft`.', tag: 'verbform' },
        { id: 'g03-13', type: 'gap', q: 'Вставьте глагол в Präsens.',
          text: 'Meine Tochter ___ am Wochenende zu ihrer Oma.', hint: 'fahren', answer: ['fährt'],
          explain: 'У `fahren` в форме `er/sie` появляется умлаут: `fährt`. Без умлаута — у `ich`, `wir`, `ihr`, `Sie`.', tag: 'verbform', diag: true },
        { id: 'g03-14', type: 'gap', q: 'Вставьте глагол в Präsens.',
          text: '___ Sie morgen Vormittag einen Termin frei?', hint: 'haben', answer: ['Haben'],
          explain: 'Вежливое `Sie` спрягается как множественное число: `Haben Sie …?`. Русское «у вас есть» передаётся через `haben`.', tag: 'verbform' },
        { id: 'g03-15', type: 'gap', q: 'Вставьте глагол в Präsens.',
          text: 'Das Wetter ___ morgen besser.', hint: 'werden', answer: ['wird'],
          explain: '`werden` неправильный: `er/sie/es wird`. Значение — «становиться»: «погода станет лучше». О будущем — Präsens со словом `morgen`.', tag: 'verbform' },
        { id: 'g03-16', type: 'gap', q: 'Вставьте глагол в Präsens.',
          text: 'Mein Sohn ___ jeden Abend ein Buch.', hint: 'lesen', answer: ['liest'],
          explain: '`lesen` меняет `e` на `ie`, а основа кончается на `s`, поэтому у `er` только `-t`: `liest`.', tag: 'verbform' },
        { id: 'g03-17', type: 'gap', q: 'Вставьте обе части глагола.',
          text: 'Der Techniker ___ morgen um 9 Uhr ___.', hint: 'vorbeikommen', answer: [['kommt'], ['vorbei']],
          explain: '`vorbeikommen` — отделяемый: `kommt` на втором месте, приставка `vorbei` — в конце.', tag: 'klammer' },
        { id: 'g03-18', type: 'gap', q: 'Вставьте обе части глагола.',
          text: 'Ich ___ das Formular heute ___.', hint: 'ausfüllen', answer: [['fülle'], ['aus']],
          explain: 'Спрягается основная часть: `fülle`. Приставка `aus` уходит в конец предложения.', tag: 'klammer' },
        { id: 'g03-19', type: 'gap', q: 'Вставьте возвратное местоимение.',
          text: 'Ich interessiere ___ sehr für diese Wohnung.', hint: 'sich interessieren', answer: ['mich'],
          explain: 'К `ich` — `mich`. `sich` подходит только к `er/sie/es`, `sie` и `Sie`.', tag: 'verbform' },
        { id: 'g03-20', type: 'gap', q: 'Вставьте возвратное местоимение.',
          text: 'Mein Vater kümmert ___ um den Garten.', hint: 'sich kümmern', answer: ['sich'],
          explain: '`Mein Vater` — это `er`, значит, `sich`.', tag: 'verbform' },
        { id: 'g03-21', type: 'gap', q: 'Вставьте обе части глагола.',
          text: '___ Sie mich bitte nach 17 Uhr ___.', hint: 'anrufen; просьба на «вы»', answer: [['Rufen'], ['an']],
          explain: 'В просьбе на «вы» глагол стоит первым в форме `Sie`, приставка `an` — в конце.', tag: 'verbform' },
        { id: 'g03-22', type: 'gap', q: 'Вставьте глагол.',
          text: '___ bitte lauter, ich höre dich nicht.', hint: 'sprechen; просьба на «ты»', answer: ['Sprich'],
          explain: 'Imperativ для `du` сохраняет `e` → `i` из формы `du sprichst`: `Sprich!`.', tag: 'verbform' },
        { id: 'g03-23', type: 'gap', q: 'Вставьте глагол.',
          text: '___ bitte leise, das Baby schläft.', hint: 'sein; просьба на «ты»', answer: ['Sei'],
          explain: 'У `sein` особые формы просьбы: для `du` — `Sei`, для `Sie` — `Seien Sie`, для `ihr` — `Seid`.', tag: 'verbform' },

        // ---- составить из слов
        { id: 'g03-24', type: 'build', q: 'Составьте предложение.',
          ru: 'Завтра я заберу посылку.',
          answer: ['Morgen hole ich das Paket ab.', 'Ich hole das Paket morgen ab.', 'Ich hole morgen das Paket ab.', 'Das Paket hole ich morgen ab.'],
          explain: 'О будущем — Präsens со словом времени. `hole` на втором месте, приставка `ab` — в конце.', tag: 'klammer' },
        { id: 'g03-25', type: 'build', q: 'Составьте предложение.',
          ru: 'В понедельник я принесу справку.',
          answer: ['Am Montag bringe ich die Bescheinigung mit.', 'Ich bringe die Bescheinigung am Montag mit.', 'Ich bringe am Montag die Bescheinigung mit.', 'Die Bescheinigung bringe ich am Montag mit.'],
          explain: '«Принесу» — Präsens `bringe … mit`. Глагол на втором месте, приставка `mit` — последняя.', tag: 'klammer' },
        { id: 'g03-26', type: 'build', q: 'Составьте предложение.',
          ru: 'Ты часто забываешь ключ.',
          answer: ['Du vergisst oft deinen Schlüssel.', 'Oft vergisst du deinen Schlüssel.'],
          explain: '`vergessen` меняет `e` на `i` у `du` и `er`, а основа кончается на `ss`, поэтому `du vergisst`. Приставка `ver-` неотделяемая и остаётся на месте.', tag: 'verbform' },
        { id: 'g03-27', type: 'build', q: 'Составьте предложение.',
          ru: 'Мы встречаемся в субботу в 10 часов.',
          answer: ['Wir treffen uns am Samstag um 10 Uhr.', 'Am Samstag treffen wir uns um 10 Uhr.', 'Am Samstag um 10 Uhr treffen wir uns.'],
          explain: 'К `wir` — местоимение `uns`. Если впереди стоит время, `wir` идёт за глаголом, а `uns` — сразу за `wir`.', tag: 'verbform' },
        { id: 'g03-28', type: 'build', q: 'Составьте просьбу.',
          ru: 'Заполните, пожалуйста, этот формуляр.',
          answer: ['Füllen Sie bitte dieses Formular aus.', 'Bitte füllen Sie dieses Formular aus.', 'Füllen Sie dieses Formular bitte aus.'],
          explain: 'Просьба на «вы»: глагол `Füllen` первым, сразу за ним `Sie`, приставка `aus` — в конце.', tag: 'verbform' },
        { id: 'g03-29', type: 'build', q: 'Составьте просьбу.',
          ru: 'Возьми, пожалуйста, с собой зонт.',
          answer: ['Nimm bitte einen Regenschirm mit.', 'Bitte nimm einen Regenschirm mit.'],
          explain: 'Imperativ для `du`: из `du nimmst` получается `Nimm`. Приставка `mit` уходит в конец.', tag: 'verbform' },
        { id: 'g03-30', type: 'build', q: 'Составьте предложение.',
          ru: 'Я записываюсь на курс немецкого.',
          answer: ['Ich melde mich für den Deutschkurs an.'],
          explain: '`sich anmelden` — и возвратный, и отделяемый: `melde` на втором месте, `mich` сразу за ним, приставка `an` — в конце.', tag: 'verbform' },

        // ---- исправить ошибку
        { id: 'g03-31', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Die Ärztin sprecht ein bisschen Russisch.', answer: ['Die Ärztin spricht ein bisschen Russisch.'],
          explain: '`sprecht` — форма для `ihr`. Для `sie` (`die Ärztin`) — `spricht`.', tag: 'verbform' },
        { id: 'g03-32', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich fähre jeden Tag mit dem Fahrrad zur Arbeit.', answer: ['Ich fahre jeden Tag mit dem Fahrrad zur Arbeit.'],
          explain: 'Умлаут бывает только у `du fährst` и `er fährt`. У `ich` — `fahre`.', tag: 'verbform' },
        { id: 'g03-33', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich anmelde meinen Sohn im Sportverein.', answer: ['Ich melde meinen Sohn im Sportverein an.'],
          explain: 'В Präsens отделяемая приставка отрывается: `melde` на втором месте, `an` — последнее слово.', tag: 'klammer', diag: true },
        { id: 'g03-34', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Wir treffen sich am Montag im Café.', answer: ['Wir treffen uns am Montag im Café.'],
          explain: 'К `wir` — местоимение `uns`. `sich` бывает только у `er/sie/es`, `sie` и `Sie`.', tag: 'verbform' },
        { id: 'g03-35', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich weiße nicht, wo das Büro ist.', answer: ['Ich weiß nicht, wo das Büro ist.'],
          explain: '`wissen` неправильный: `ich weiß` без окончания `-e`.', tag: 'verbform' },
        { id: 'g03-36', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Rufen mich bitte morgen an.', answer: ['Rufen Sie mich bitte morgen an.', 'Rufen Sie mich morgen bitte an.'],
          explain: 'В вежливой просьбе нужно `Sie` сразу после глагола: `Rufen Sie mich …`. Русское «позвоните» обходится без «вы», немецкое — нет.', tag: 'verbform' },
        { id: 'g03-37', type: 'fix', q: 'Исправьте ошибку. Имеется в виду «позвоню вам по телефону».',
          text: 'Ich rufe Sie heute Abend.', answer: ['Ich rufe Sie heute Abend an.'],
          explain: 'Без приставки `an` получается «я зову вас», а не «позвоню». Отделённая приставка стоит в конце.', tag: 'klammer' },

        // ---- перевод
        { id: 'g03-38', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Летом к нам приедут мои родители.',
          answer: ['Im Sommer besuchen uns meine Eltern.', 'Meine Eltern besuchen uns im Sommer.', 'Im Sommer besuchen meine Eltern uns.', 'Im Sommer kommen meine Eltern zu uns.', 'Meine Eltern kommen im Sommer zu uns.', 'Im Sommer kommen uns meine Eltern besuchen.', 'Meine Eltern kommen uns im Sommer besuchen.', 'Im Sommer werden uns meine Eltern besuchen.', 'Meine Eltern werden uns im Sommer besuchen.'],
          explain: 'О будущем — Präsens со словом времени: `Im Sommer besuchen uns …`. `besuchen` неотделяемый, глагол на втором месте.', tag: 'verbform' },
        { id: 'g03-39', type: 'translate', q: 'Переведите на немецкий (другу, на «ты»).',
          ru: 'Позвони мне, пожалуйста, завтра.',
          answer: ['Ruf mich bitte morgen an.', 'Ruf mich morgen bitte an.', 'Bitte ruf mich morgen an.', 'Rufe mich bitte morgen an.', 'Rufe mich morgen bitte an.', 'Bitte rufe mich morgen an.'],
          explain: 'Просьба к `du`: форма `du rufst` без `du` и без окончания — `Ruf`. Приставка `an` в конце.', tag: 'verbform' },
        { id: 'g03-40', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Я не понимаю письмо из ведомства.',
          answer: ['Ich verstehe den Brief vom Amt nicht.', 'Den Brief vom Amt verstehe ich nicht.', 'Ich verstehe das Schreiben vom Amt nicht.', 'Ich verstehe den Brief von der Behörde nicht.', 'Ich verstehe das Schreiben von der Behörde nicht.'],
          explain: '`verstehen` — неотделяемый: `ver-` остаётся на месте, `verstehe` стоит на втором месте. `nicht` отрицает весь глагол и стоит в конце.', tag: 'verbform' },
        { id: 'g03-41', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Мой муж забирает детей из детского сада.',
          answer: ['Mein Mann holt die Kinder vom Kindergarten ab.', 'Mein Mann holt die Kinder aus dem Kindergarten ab.', 'Mein Mann holt die Kinder im Kindergarten ab.', 'Mein Mann holt die Kinder von der Kita ab.', 'Mein Mann holt die Kinder aus der Kita ab.', 'Mein Mann holt die Kinder in der Kita ab.'],
          explain: '`abholen` отделяется: `holt` на втором месте, `ab` — последнее слово. `Mein Mann` — это `er`, окончание `-t`.', tag: 'klammer' },
        { id: 'g03-42', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Мой сын плохо спит, потому что у него кашель.',
          answer: ['Mein Sohn schläft schlecht, weil er Husten hat.', 'Mein Sohn schläft nicht gut, weil er Husten hat.', 'Weil mein Sohn Husten hat, schläft er schlecht.', 'Weil mein Sohn Husten hat, schläft er nicht gut.', 'Mein Sohn schläft schlecht, denn er hat Husten.', 'Mein Sohn schläft nicht gut, denn er hat Husten.', 'Mein Sohn schläft schlecht, weil er hustet.', 'Mein Sohn schläft nicht gut, weil er hustet.', 'Weil er Husten hat, schläft mein Sohn schlecht.', 'Weil er Husten hat, schläft mein Sohn nicht gut.'],
          explain: '`schlafen` меняет `a` на `ä` у `er`: `schläft`. «У него кашель» — `er hat Husten`: русское «у него» передаётся через `haben`.', tag: 'verbform' }
    ],

    apply: {
        task: 'Напишите 5–6 предложений соседке, госпоже Шмидт: на следующей неделе вы уезжаете, попросите её вынимать почту и поливать цветы, скажите, кто принесёт ключ и когда вы вернётесь, пригласите её на кофе. Пишите в Präsens.',
        checks: [
            'У каждого глагола окончание подходит к подлежащему (`ich fahre`, `meine Tochter bringt`, `wir kommen`)',
            'Отделяемые приставки стоят в конце: `Wir kommen … zurück.`',
            'Есть просьба на «вы» с `Sie` сразу после глагола',
            'О будущем — Präsens со словом времени: `Nächste Woche fahre ich …`',
            'Возвратное местоимение подходит к лицу: `ich freue mich`'
        ],
        model: 'Liebe Frau Schmidt, nächste Woche fahre ich mit meiner Familie zu meinen Eltern nach Polen. Nehmen Sie bitte die Post aus meinem Briefkasten und gießen Sie meine Blumen. Meine Tochter bringt Ihnen morgen den Schlüssel. Wir kommen am Samstag zurück. Dann lade ich Sie zum Kaffee ein. Ich freue mich schon darauf! Viele Grüße Olga',
        modelRu: 'Дорогая госпожа Шмидт, на следующей неделе я с семьёй еду к родителям в Польшу. Пожалуйста, вынимайте почту из моего ящика и поливайте мои цветы. Завтра моя дочь принесёт вам ключ. Мы вернёмся в субботу. Тогда я приглашу вас на кофе. Я уже жду этого с нетерпением! Всего доброго, Ольга'
    }
};
