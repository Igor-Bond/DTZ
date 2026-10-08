/**
 * Модуль 8. Прилагательные: окончания и сравнение.
 *
 * Три таблицы окончаний сведены к двум правилам и к формулам письма, которые
 * учат целиком. Сравнение — только то, что нужно в письме: -er, am -sten,
 * неправильные формы, als и so … wie.
 */

export default {
    id: 'g08',
    order: 8,
    title: 'Прилагательные: окончания и сравнение',
    short: 'Прилагательные',
    goal: 'Вы ставите верное окончание прилагательного после der, ein, mein и без артикля, пишете формулы письма без ошибок и правильно сравниваете: größer als, so teuer wie, am besten.',
    why: 'Окончания прилагательных — одна из самых частых ошибок в письмах русскоговорящих: на слух их не различить, а подобрать на ходу трудно. Ошибка в обращении или в прощании (`Mit freundliche Grüße`) стоит на виду, в первой и последней строке. Хорошая новость: прилагательные в письме повторяются в одних и тех же сочетаниях, и их можно выучить готовыми.',

    theory: [
        { type: 'h', text: '1. После sein и werden — без окончания' },
        { type: 'p', text: 'В русском прилагательное согласуется всегда: «курс новый», «квартира новая», «дети больны». В немецком прилагательное после `sein`, `werden` или `bleiben` не меняется вообще: ни род, ни число на нём не видны.' },
        {
            type: 'exs',
            items: [
                { de: 'Der Kurs ist **neu**.', ru: 'Курс новый.' },
                { de: 'Die Wohnung ist **klein**, aber **hell**.', ru: 'Квартира маленькая, но светлая.' },
                { de: 'Meine Kinder sind **krank**.', ru: 'Мои дети больны.' },
                { de: 'Die Miete ist zu **hoch**.', ru: 'Квартплата слишком высокая.' },
                { de: 'Ich hoffe, er wird bald **gesund**.', ru: 'Надеюсь, он скоро поправится.' }
            ]
        },
        { type: 'trap', wrong: 'Die Wohnung ist kleine.', right: 'Die Wohnung ist klein.', why: 'По-русски «квартира маленькая» — с женским окончанием, и рука тянется добавить `-e`. После `ist` и `sind` окончания нет никогда: `ist klein`, `sind klein`.' },

        { type: 'h', text: '2. После der, die, das: только -e или -en' },
        { type: 'p', text: 'Если прилагательное стоит между артиклем и существительным, у него всегда есть окончание. После определённого артикля (`der`, `die`, `das`, а также `dieser`) окончаний всего два: `-e` и `-en`.' },
        {
            type: 'table',
            head: ['Падеж', 'Мужской (der)', 'Средний (das)', 'Женский (die)', 'Мн. число (die)'],
            rows: [
                ['Nominativ', 'der neu**e** Kurs', 'das neu**e** Formular', 'die neu**e** Wohnung', 'die neu**en** Kurse'],
                ['Akkusativ', 'den neu**en** Kurs', 'das neu**e** Formular', 'die neu**e** Wohnung', 'die neu**en** Kurse'],
                ['Dativ', 'dem neu**en** Kurs', 'dem neu**en** Formular', 'der neu**en** Wohnung', 'den neu**en** Kursen']
            ],
            note: '`-e` — только в пяти клетках: весь Nominativ единственного числа и Akkusativ среднего и женского рода. Во всех остальных — `-en`: после `den` и `dem`, после `der` в Dativ и во всём множественном числе.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Wann bekomme ich den **neuen** Vertrag?', ru: 'Когда я получу новый договор?' },
                { de: 'Die **erste** Woche im Kurs war sehr interessant.', ru: 'Первая неделя на курсе была очень интересной.' },
                { de: 'Das **alte** Formular gilt nicht mehr.', ru: 'Старый бланк больше не действует.' },
                { de: 'Ich spreche morgen mit dem **neuen** Lehrer.', ru: 'Завтра я поговорю с новым учителем.' },
                { de: 'Seit Mai wohnen wir in der **neuen** Wohnung.', ru: 'С мая мы живём в новой квартире.' }
            ]
        },
        { type: 'trap', wrong: 'Der neuen Kurs beginnt am Montag.', right: 'Der neue Kurs beginnt am Montag.', why: 'После `der` в Nominativ мужского рода — `-e`. `-en` появляется, только когда меняется сам артикль: `den neuen Kurs` (Akkusativ), `mit dem neuen Kurs` (Dativ).' },

        { type: 'h', text: '3. После ein, kein, mein: прилагательное показывает род' },
        { type: 'p', text: 'У `ein` в трёх клетках нет своего окончания: в мужском Nominativ и в среднем Nominativ и Akkusativ. По артиклю род не понять, поэтому его показывает прилагательное: `-er` для мужского, `-es` для среднего. В женском роде в Nominativ и Akkusativ — `-e`, а всё остальное — `-en`.' },
        {
            type: 'table',
            head: ['Падеж', 'Мужской', 'Средний', 'Женский', 'Мн. число'],
            rows: [
                ['Nominativ', 'ein neu**er** Kurs', 'ein neu**es** Formular', 'eine neu**e** Wohnung', 'meine neu**en** Kurse'],
                ['Akkusativ', 'einen neu**en** Kurs', 'ein neu**es** Formular', 'eine neu**e** Wohnung', 'meine neu**en** Kurse'],
                ['Dativ', 'einem neu**en** Kurs', 'einem neu**en** Formular', 'einer neu**en** Wohnung', 'meinen neu**en** Kursen']
            ],
            note: 'Так же склоняются `kein`, `mein`, `dein`, `sein`, `ihr`, `unser`, `Ihr`. У `ein` нет множественного числа, поэтому в последней колонке `meine`: после `meine` и `keine` во множественном всегда `-en`.'
        },
        { type: 'rule', text: 'Подсказка: окончание похоже на конец определённого артикля. `der Kurs` → `ein neuer Kurs`, `das Problem` → `ein großes Problem`, `die Wohnung` → `eine kleine Wohnung`.' },
        {
            type: 'exs',
            items: [
                { de: 'Ich brauche einen **neuen** Termin.', ru: 'Мне нужно новое время приёма.' },
                { de: 'Das ist für uns ein **großes** Problem.', ru: 'Для нас это большая проблема.' },
                { de: 'Meine Schwester sucht eine **kleine** Wohnung.', ru: 'Моя сестра ищет маленькую квартиру.' },
                { de: 'Unser **neuer** Nachbar ist sehr freundlich.', ru: 'Наш новый сосед очень приветливый.' },
                { de: 'Ich arbeite bei einer **großen** Firma.', ru: 'Я работаю в большой фирме.' }
            ]
        },
        { type: 'trap', wrong: 'Ich suche ein neue Wohnung.', right: 'Ich suche eine neue Wohnung.', why: 'Окончание теряют не только у прилагательного, но и у самого артикля. `Wohnung` — женского рода, а в женском роде в Nominativ и Akkusativ артикль всегда с `-e`: `eine neue Wohnung`, `meine neue Wohnung`. Род — в модуле 6.' },
        { type: 'trap', wrong: 'Das ist ein große Problem.', right: 'Das ist ein großes Problem.', why: 'Русская «проблема» — женского рода, и это сбивает. Немецкое `das Problem` — среднего: после `ein` род не виден, поэтому прилагательное берёт `-es`, как у `das`.' },

        { type: 'h', text: '4. Без артикля: окончание работает за артикль' },
        { type: 'p', text: 'Если артикля нет (обращение, пожелание, множественное число), прилагательное получает окончание, которое было бы у артикля: `der` → `-er`, `das` → `-es`, `die` → `-e`, `den` → `-en`, `dem` → `-em`. Так устроены почти все формулы письма.' },
        {
            type: 'table',
            head: ['Падеж', 'Мужской', 'Средний', 'Женский', 'Мн. число'],
            rows: [
                ['Nominativ', 'Lieb**er** Herr Weber', 'Lieb**es** Team', 'Lieb**e** Frau Meinert', 'Sehr geehrt**e** Damen und Herren'],
                ['Akkusativ', 'Viel**en** Dank', 'Schön**es** Wochenende!', 'Gut**e** Besserung!', 'Lieb**e** Grüße'],
                ['Dativ', 'mit groß**em** Erfolg', 'bei schlecht**em** Wetter', 'mit groß**er** Freude', 'mit freundlich**en** Grüßen']
            ],
            note: 'В Dativ то же правило: `dem` → `-em`, `der` (женский род) → `-er`, `den` (мн. число) → `-en`.'
        },

        { type: 'h', text: '5. Формулы письма: учите целиком' },
        { type: 'p', text: 'Большая часть прилагательных в письме стоит в готовых сочетаниях. Их не нужно склонять в уме: выучите каждое как одно слово, вместе с окончанием.' },
        {
            type: 'table',
            head: ['Формула', 'Перевод', 'Почему такое окончание'],
            rows: [
                ['`Sehr geehrte Damen und Herren,`', 'Уважаемые дамы и господа,', 'мн. число без артикля: `-e`'],
                ['`Sehr geehrte Frau Schulz,`', 'Уважаемая госпожа Шульц,', 'женский род без артикля: `-e`'],
                ['`Sehr geehrter Herr Weber,`', 'Уважаемый господин Вебер,', 'мужской род без артикля: `-er`'],
                ['`Mit freundlichen Grüßen`', 'С уважением', 'Dativ мн. числа после `mit`: `-en`'],
                ['`Viele Grüße`, `Liebe Grüße`', 'Всего доброго; сердечный привет', 'мн. число без артикля: `-e`'],
                ['`Vielen Dank`', 'Большое спасибо', 'Akkusativ, `der Dank`: `-en`'],
                ['`Gute Besserung!`', 'Выздоравливайте!', '`die Besserung` без артикля: `-e`'],
                ['`ein neuer Termin`', 'новое время встречи или приёма', '`ein` + мужской род: `-er`'],
                ['`ein großes Problem`', 'большая проблема', '`ein` + средний род: `-es`'],
                ['`eine kleine Wohnung`', 'маленькая квартира', '`eine` + женский род: `-e`'],
                ['`der erste Tag`', 'первый день', 'после `der`: `-e`'],
                ['`die nächste Woche`', 'следующая неделя', 'после `die`: `-e`'],
                ['`am nächsten Montag`', 'в следующий понедельник', '`am` = `an dem`, Dativ: `-en`'],
                ['`im letzten Monat`', 'в прошлом месяце', '`im` = `in dem`, Dativ: `-en`'],
                ['`alle anderen`', 'все остальные', 'после `alle`: `-en`']
            ],
            note: 'Без предлога время стоит в Akkusativ: `nächste Woche`, `nächsten Montag`, `letzten Monat`. Подробнее о том, как называть время, — в модуле 9.'
        },
        { type: 'trap', wrong: 'Mit freundliche Grüße', right: 'Mit freundlichen Grüßen', why: 'После `mit` всегда Dativ, а во множественном числе Dativ даёт `-n` и прилагательному, и существительному: `freundlichen Grüßen`. Это последняя строка письма — ошибку в ней увидят обязательно.' },
        { type: 'tip', text: 'Обращение и прощание есть в каждом письме, и ошибку в них видно сразу. Выучите эти строки так, чтобы писать их не думая: `Sehr geehrte Frau …,`, `Sehr geehrter Herr …,` и `Mit freundlichen Grüßen`.' },

        { type: 'h', text: '6. Сравнение: größer, am größten' },
        { type: 'rule', text: 'Komparativ — прилагательное + `-er`: `billig` → `billiger`. Superlativ после глагола — `am` + прилагательное + `-sten`: `am billigsten`. Русские «более» и «самый» отдельным словом не переводятся.' },
        {
            type: 'table',
            head: ['Основа', 'Komparativ', 'Superlativ', 'Перевод'],
            rows: [
                ['billig', 'billig**er**', 'am billig**sten**', 'дешёвый'],
                ['schnell', 'schnell**er**', 'am schnell**sten**', 'быстрый'],
                ['klein', 'klein**er**', 'am klein**sten**', 'маленький'],
                ['spät', 'spät**er**', 'am spät**esten**', 'поздний'],
                ['teuer', 'teur**er**', 'am teuer**sten**', 'дорогой']
            ],
            note: 'После `-t` в Superlativ вставляется `-e-`: `am spätesten`, `am ältesten`. У `teuer` в Komparativ выпадает одна `e`: `teurer`, а не «teuerer».'
        },
        {
            type: 'table',
            head: ['Основа', 'Komparativ', 'Superlativ', 'Перевод'],
            rows: [
                ['alt', 'ält**er**', 'am ält**esten**', 'старый'],
                ['groß', 'größ**er**', 'am größ**ten**', 'большой'],
                ['jung', 'jüng**er**', 'am jüng**sten**', 'молодой'],
                ['gut', '**besser**', 'am **besten**', 'хороший, хорошо'],
                ['viel', '**mehr**', 'am **meisten**', 'много'],
                ['gern', '**lieber**', 'am **liebsten**', 'охотно'],
                ['hoch', '**höher**', 'am **höchsten**', 'высокий'],
                ['nah', '**näher**', 'am **nächsten**', 'близкий']
            ],
            note: 'Первые три получают умлаут, остальные — неправильные, их учат наизусть. Перед существительным `hoch` теряет `c`: `die hohe Miete`. А `nächste Woche` — это и есть превосходная степень от `nah`.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Die neue Wohnung ist **größer** als meine alte.', ru: 'Новая квартира больше моей старой.' },
                { de: 'Am Vormittag habe ich **mehr** Zeit.', ru: 'До обеда у меня больше времени.' },
                { de: 'Der Termin am Freitag passt mir **am besten**.', ru: 'Встреча в пятницу подходит мне лучше всего.' },
                { de: 'Ich komme **lieber** am Nachmittag.', ru: 'Я лучше приду после обеда.' },
                { de: 'Wir suchen eine **größere** Wohnung.', ru: 'Мы ищем квартиру побольше.' }
            ]
        },
        { type: 'p', text: 'Перед существительным Komparativ и Superlativ получают обычные окончания, как любое прилагательное: `eine größere Wohnung`, `der nächste Termin`, `die beste Lösung`.' },

        { type: 'h', text: '7. als и so … wie' },
        {
            type: 'table',
            head: ['Что', 'Как', 'Пример'],
            rows: [
                ['больше или меньше', 'Komparativ + `als`', '`Die Miete ist höher als im letzten Jahr.`'],
                ['одинаково', '`so` + основа + `wie`', '`Der Kurs ist so teuer wie der andere.`'],
                ['не так, как', '`nicht so` + основа + `wie`', '`Der Weg ist nicht so lang wie früher.`']
            ]
        },
        { type: 'trap', wrong: 'Ich bin älter wie er.', right: 'Ich bin älter als er.', why: 'Русские «чем» и «как» в немецком легко перепутать. После Komparativ — только `als` («чем»), а `wie` («как») ставится после основной формы: `so alt wie`.' },
        { type: 'trap', wrong: 'Der Dienstag ist für mich mehr besser.', right: 'Der Dienstag ist für mich besser.', why: 'По-русски можно сказать «более удобный» — двумя словами. В немецком степень уже внутри слова: `besser`, `größer`, `billiger`. `mehr` перед Komparativ не ставят никогда.' },
        { type: 'trap', wrong: 'Die neue Wohnung ist mehr als die alte.', right: 'Die neue Wohnung ist größer als die alte.', why: 'Русское «больше» — это два немецких слова: `größer` — о размере (`eine größere Wohnung`), `mehr` — о количестве (`mehr Zeit`, `mehr Geld`).' },

        { type: 'h', text: '8. Прилагательное как наречие. Слова степени' },
        { type: 'p', text: 'В русском «быстрый» и «быстро» — разные слова. В немецком ответ на вопрос «как?» — та же основная форма прилагательного, без окончания: `schnell` — и «быстрый», и «быстро».' },
        {
            type: 'exs',
            items: [
                { de: 'Bitte antworten Sie mir **schnell**.', ru: 'Пожалуйста, ответьте мне быстро.' },
                { de: 'Meine Tochter liest schon sehr **gut**.', ru: 'Моя дочь уже очень хорошо читает.' },
                { de: 'Der Handwerker hat **schnell** und **gut** gearbeitet.', ru: 'Мастер работал быстро и хорошо.' },
                { de: 'Können Sie bitte **früher** kommen?', ru: 'Вы можете прийти пораньше?' }
            ]
        },
        {
            type: 'table',
            head: ['Слово', 'Значение', 'Пример'],
            rows: [
                ['`sehr`', 'очень', '`Die Wohnung ist sehr hell.`'],
                ['`ziemlich`', 'довольно', '`Der Weg zum Kurs ist ziemlich lang.`'],
                ['`zu`', 'слишком (больше, чем нужно)', '`Die Wohnung ist zu teuer für uns.`'],
                ['`ganz`', 'вполне, неплохо', '`Der Kurs ist ganz gut.`'],
                ['`besonders`', 'особенно', '`Die Lehrerin erklärt besonders gut.`']
            ],
            note: 'Слово степени не меняется и не влияет на окончание: `eine sehr kleine Wohnung`, `ein ziemlich großes Problem`. `ganz gut` значит «вполне неплохо», а не «совсем хорошо».'
        },
        { type: 'tip', text: 'Если окончание не вспоминается, перестройте фразу так, чтобы прилагательное встало после `ist`: вместо `Wir haben eine sehr kleine Wohnung` — `Unsere Wohnung ist sehr klein.` Смысл тот же, а ошибиться в окончании уже нельзя.' }
    ],

    exercises: [
        // ---- выбор
        { id: 'g08-01', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Die Wohnung ist klein.', 'Die Wohnung ist kleine.', 'Die Wohnung ist kleines.'], answer: 0,
          explain: 'После `ist` прилагательное не получает окончания, какого бы рода ни было существительное. Окончание появляется только перед существительным: `eine kleine Wohnung`.', tag: 'adjektiv' },
        { id: 'g08-02', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Wir suchen eine kleine Wohnung.', 'Wir suchen ein kleine Wohnung.', 'Wir suchen eine kleinen Wohnung.'], answer: 0,
          explain: '`die Wohnung` — женский род, поэтому артикль `eine`. В женском роде Akkusativ совпадает с Nominativ, и прилагательное получает `-e`: `eine kleine Wohnung`.', tag: 'adjektiv', diag: true },
        { id: 'g08-03', type: 'choice', q: 'Как начать официальное письмо, если вы не знаете имени адресата?',
          options: ['Sehr geehrte Damen und Herren,', 'Sehr geehrten Damen und Herren,', 'Sehr geehrter Damen und Herren,'], answer: 0,
          explain: 'Множественное число без артикля в Nominativ — окончание `-e`. Это готовая формула: учите её целиком, вместе с запятой.', tag: 'adjektiv' },
        { id: 'g08-04', type: 'choice', q: 'Как правильно закончить официальное письмо?',
          options: ['Mit freundlichen Grüßen', 'Mit freundliche Grüße', 'Mit freundlichen Grüße'], answer: 0,
          explain: 'После `mit` стоит Dativ. Во множественном числе Dativ даёт `-n` и прилагательному, и существительному: `freundlichen Grüßen`.', tag: 'adjektiv', diag: true },
        { id: 'g08-05', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Der neue Kurs beginnt am Montag.', 'Der neuen Kurs beginnt am Montag.', 'Der neuer Kurs beginnt am Montag.'], answer: 0,
          explain: '`Der Kurs` — подлежащее, Nominativ. После `der` в Nominativ — `-e`. `-en` бывает после `den` и `dem`, а `-er` — после `ein`: `ein neuer Kurs`.', tag: 'adjektiv' },
        { id: 'g08-06', type: 'choice', q: 'Выберите правильное сочетание.', text: 'Wir haben ___ mit der Heizung.',
          options: ['ein großes Problem', 'ein großer Problem', 'eine große Problem'], answer: 0,
          explain: '`das Problem` — средний род, хотя русская «проблема» — женского. Артикль `ein` род не показывает, поэтому его показывает прилагательное: `-es`, как у `das`.', tag: 'adjektiv' },
        { id: 'g08-07', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Die neue Wohnung ist größer als die alte.', 'Die neue Wohnung ist größer wie die alte.', 'Die neue Wohnung ist mehr groß als die alte.'], answer: 0,
          explain: 'Komparativ — одно слово с `-er` (у `groß` ещё и умлаут): `größer`. После него — `als`. Отдельное `mehr`, как русское «более», не нужно.', tag: 'adjektiv' },
        { id: 'g08-08', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Der Kurs ist so teuer wie der andere.', 'Der Kurs ist so teuer als der andere.', 'Der Kurs ist so teurer wie der andere.'], answer: 0,
          explain: 'Равенство — `so` + основная форма + `wie`: `so teuer wie`. `als` ставится только после Komparativ: `teurer als`.', tag: 'adjektiv' },
        { id: 'g08-09', type: 'choice', q: 'Как сказать «Вторник мне подходит лучше всего»?',
          options: ['Der Dienstag passt mir am besten.', 'Der Dienstag passt mir am gutesten.', 'Der Dienstag passt mir am meisten gut.'], answer: 0,
          explain: '`gut` — неправильное прилагательное: `gut – besser – am besten`. Формы `gutesten` нет, а `am meisten` относится к `viel`.', tag: 'adjektiv' },
        { id: 'g08-10', type: 'choice', q: 'Как сказать «Мне нужно больше времени»?',
          options: ['Ich brauche mehr Zeit.', 'Ich brauche größer Zeit.', 'Ich brauche mehrere Zeit.'], answer: 0,
          explain: 'Русское «больше» — два немецких слова: `mehr` о количестве (`mehr Zeit`, `mehr Geld`) и `größer` о размере. `mehr` не склоняется, а `mehrere` значит «несколько».', tag: 'adjektiv' },
        { id: 'g08-11', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Mein Sohn spricht schon gut Deutsch.', 'Mein Sohn spricht schon guter Deutsch.', 'Mein Sohn spricht schon guten Deutsch.'], answer: 0,
          explain: '`gut` здесь отвечает на вопрос «как говорит?» — это наречие, и окончания у него нет. В русском «хороший» и «хорошо» различаются, в немецком это одно слово.', tag: 'adjektiv' },

        // ---- пропуски
        { id: 'g08-12', type: 'gap', q: 'Вставьте прилагательное в нужной форме.',
          text: 'Der ___ Tag in der neuen Schule war für meinen Sohn schwer.', hint: 'erst- (первый)', answer: ['erste'],
          explain: 'После `der` в Nominativ — `-e`: `der erste Tag`. Порядковые числительные (`erste`, `zweite`, `letzte`) склоняются как обычные прилагательные.', tag: 'adjektiv' },
        { id: 'g08-13', type: 'gap', q: 'Вставьте прилагательное в нужной форме.',
          text: 'Leider muss ich einen ___ Termin vereinbaren.', hint: 'neu', answer: ['neuen'],
          explain: '`vereinbaren` требует Akkusativ: `einen Termin`. После `einen` прилагательное всегда получает `-en`. Сравните Nominativ: `Ein neuer Termin ist frei.`', tag: 'adjektiv', diag: true },
        { id: 'g08-14', type: 'gap', q: 'Вставьте прилагательное в нужной форме.',
          text: 'Unsere Tochter braucht ein ___ Zimmer.', hint: 'eigen (собственный)', answer: ['eigenes'],
          explain: '`das Zimmer` — средний род. После `ein` род не виден, поэтому прилагательное берёт `-es`: `ein eigenes Zimmer`.', tag: 'adjektiv' },
        { id: 'g08-15', type: 'gap', q: 'Вставьте прилагательное в нужной форме.',
          text: 'Ich habe den ___ Vertrag noch nicht bekommen.', hint: 'neu', answer: ['neuen'],
          explain: '`den Vertrag` — Akkusativ мужского рода. После `den` прилагательное всегда получает `-en`.', tag: 'adjektiv' },
        { id: 'g08-16', type: 'gap', q: 'Вставьте прилагательное в нужной форме.',
          text: 'Wir wohnen seit März in einer ___ Wohnung.', hint: 'klein', answer: ['kleinen'],
          explain: 'После `in` на вопрос «где?» стоит Dativ: `in einer Wohnung`. В Dativ после любого артикля прилагательное получает `-en`.', tag: 'adjektiv' },
        { id: 'g08-17', type: 'gap', q: 'Вставьте прилагательное в нужной форме.',
          text: 'Mit ___ Grüßen', hint: 'freundlich', answer: ['freundlichen'],
          explain: '`mit` требует Dativ. Во множественном числе Dativ даёт `-n`: `freundlichen Grüßen`. Эту строку пишут в конце каждого официального письма.', tag: 'adjektiv' },
        { id: 'g08-18', type: 'gap', q: 'Вставьте прилагательное в нужной форме.',
          text: 'Sehr ___ Herr Lang,', hint: 'geehrt', answer: ['geehrter'],
          explain: 'Мужской род без артикля: прилагательное берёт окончание артикля `der` — `-er`. К женщине — `Sehr geehrte Frau …`.', tag: 'adjektiv' },
        { id: 'g08-19', type: 'gap', q: 'Вставьте прилагательное в нужной форме.',
          text: 'Wir können die ___ Miete nicht mehr bezahlen.', hint: 'hoch', answer: ['hohe'],
          explain: 'После `die` в Akkusativ женского рода — `-e`. А `hoch` перед существительным теряет `c`: `die hohe Miete`, хотя `Die Miete ist hoch.`', tag: 'adjektiv' },
        { id: 'g08-20', type: 'gap', q: 'Вставьте прилагательное в нужной форме.',
          text: 'Am ___ Montag habe ich leider keine Zeit.', hint: 'nächst- (следующий)', answer: ['nächsten'],
          explain: '`am` = `an dem`, это Dativ. После `dem` — `-en`: `am nächsten Montag`.', tag: 'adjektiv' },
        { id: 'g08-21', type: 'gap', q: 'Вставьте прилагательное в нужной форме.',
          text: 'Der Montag passt mir nicht, aber alle ___ Tage sind gut.', hint: 'ander- (другой)', answer: ['anderen'],
          explain: 'После `alle` прилагательное получает `-en`: `alle anderen Tage`. Запомните это сочетание целиком.', tag: 'adjektiv' },
        { id: 'g08-22', type: 'gap', q: 'Вставьте сравнительную степень.',
          text: 'Die Miete ist jetzt ___ als im letzten Jahr.', hint: 'hoch', answer: ['höher'],
          explain: '`hoch` — неправильное: `hoch – höher – am höchsten`. Нужны умлаут и форма без `c`. После Komparativ — `als`.', tag: 'adjektiv' },
        { id: 'g08-23', type: 'gap', q: 'Вставьте сравнительную степень.',
          text: 'Meine Tochter ist zwei Jahre ___ als mein Sohn.', hint: 'jung', answer: ['jünger'],
          explain: 'Короткие прилагательные с `a`, `o`, `u` в Komparativ часто получают умлаут: `jung – jünger`, `alt – älter`, `groß – größer`.', tag: 'adjektiv' },
        { id: 'g08-24', type: 'gap', q: 'Вставьте превосходную степень.',
          text: 'Am ___ komme ich am Vormittag.', hint: 'gern', answer: ['liebsten'],
          explain: '`gern` — неправильное: `gern – lieber – am liebsten`. Так говорят о том, что вам удобнее всего или чего вы хотите больше всего.', tag: 'adjektiv' },
        { id: 'g08-25', type: 'gap', q: 'Вставьте прилагательное в нужной форме.',
          text: 'Mein ___ Vermieter heißt Herr Krause.', hint: 'neu', answer: ['neuer'],
          explain: '`mein` склоняется как `ein`. В мужском Nominativ род виден только по прилагательному: `mein neuer Vermieter`.', tag: 'adjektiv' },

        // ---- составить из слов
        { id: 'g08-26', type: 'build', q: 'Составьте предложение.',
          ru: 'Желаю вам скорейшего выздоровления!',
          answer: ['Ich wünsche Ihnen gute Besserung!', 'Gute Besserung wünsche ich Ihnen!'],
          explain: '`die Besserung` — женский род без артикля: окончание `-e`, как у `die`. Короткое пожелание — просто `Gute Besserung!`.', tag: 'adjektiv' },
        { id: 'g08-27', type: 'build', q: 'Составьте вежливый вопрос.',
          ru: 'Можете ли вы, пожалуйста, дать мне другое время приёма?',
          answer: ['Können Sie mir bitte einen anderen Termin geben?'],
          explain: '`geben` требует Akkusativ: `einen Termin`. После `einen` — `-en`: `einen anderen Termin`. Инфинитив `geben` — в конце.', tag: 'adjektiv' },
        { id: 'g08-28', type: 'build', q: 'Составьте предложение.',
          ru: 'Наша новая квартира больше, чем старая.',
          answer: ['Unsere neue Wohnung ist größer als die alte.'],
          explain: 'После `unsere` в женском Nominativ — `-e`: `unsere neue Wohnung`. После `ist` Komparativ стоит без окончания, а за ним — `als`.', tag: 'adjektiv' },
        { id: 'g08-29', type: 'build', q: 'Составьте предложение.',
          ru: 'Вечерний курс такой же дорогой, как утренний.',
          answer: ['Der Abendkurs ist so teuer wie der Morgenkurs.'],
          explain: 'Равенство — `so` + основная форма + `wie`. Komparativ здесь не нужен: `so teuer wie`.', tag: 'adjektiv' },
        { id: 'g08-30', type: 'build', q: 'Составьте предложение.',
          ru: 'Лучше всего мне подходит четверг.',
          answer: ['Am besten passt mir der Donnerstag.', 'Der Donnerstag passt mir am besten.', 'Mir passt der Donnerstag am besten.', 'Mir passt am besten der Donnerstag.'],
          explain: '«Лучше всего» — `am besten`, Superlativ от `gut`. Глагол `passt` стоит на втором месте, что бы ни стояло первым.', tag: 'adjektiv' },
        { id: 'g08-31', type: 'build', q: 'Составьте предложение.',
          ru: 'В прошлом месяце у нас была большая проблема.',
          answer: ['Im letzten Monat hatten wir ein großes Problem.', 'Wir hatten im letzten Monat ein großes Problem.', 'Ein großes Problem hatten wir im letzten Monat.'],
          explain: '`im` = `in dem`: это Dativ, поэтому `letzten`. `das Problem` — средний род, после `ein` — `-es`.', tag: 'adjektiv' },
        { id: 'g08-32', type: 'build', q: 'Составьте предложение.',
          ru: 'Это довольно длинное письмо.',
          answer: ['Das ist ein ziemlich langer Brief.'],
          explain: 'Русское «письмо» — среднего рода, а немецкое `der Brief` — мужского: после `ein` нужно `-er`. Слово `ziemlich` на окончание не влияет.', tag: 'adjektiv' },

        // ---- исправить ошибку
        { id: 'g08-33', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich bin zwei Jahre älter wie mein Bruder.', answer: ['Ich bin zwei Jahre älter als mein Bruder.'],
          explain: 'После Komparativ (`älter`) — только `als`. `wie` ставится после основной формы: `so alt wie`.', tag: 'adjektiv', diag: true },
        { id: 'g08-34', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich suche ein neue Wohnung.', answer: ['Ich suche eine neue Wohnung.'],
          explain: '`die Wohnung` — женский род, а в женском роде в Nominativ и Akkusativ у артикля всегда есть `-e`: `eine neue Wohnung`.', tag: 'adjektiv' },
        { id: 'g08-35', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Der neuen Lehrer ist sehr nett.', answer: ['Der neue Lehrer ist sehr nett.'],
          explain: '`Der Lehrer` — подлежащее, Nominativ. После `der` в Nominativ — `-e`. `-en` было бы после `den` или `dem`.', tag: 'adjektiv' },
        { id: 'g08-36', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Mit dem Bus bin ich mehr schneller im Kurs.', answer: ['Mit dem Bus bin ich schneller im Kurs.'],
          explain: '`schneller` — уже сравнительная степень. Лишнее `mehr` — калька с русского «более быстро».', tag: 'adjektiv' },
        { id: 'g08-37', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Meine Kinder sind seit Montag kranke.', answer: ['Meine Kinder sind seit Montag krank.'],
          explain: 'После `sind` прилагательное стоит без окончания, даже во множественном числе: `Die Kinder sind krank.`', tag: 'adjektiv' },
        { id: 'g08-38', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich habe eine klein Bitte an Sie.', answer: ['Ich habe eine kleine Bitte an Sie.'],
          explain: 'Перед существительным у прилагательного всегда есть окончание. `die Bitte` — женский род, после `eine` — `-e`.', tag: 'adjektiv' },
        { id: 'g08-39', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Am nächste Montag habe ich frei.', answer: ['Am nächsten Montag habe ich frei.', 'Ich habe am nächsten Montag frei.', 'Nächsten Montag habe ich frei.', 'Ich habe nächsten Montag frei.'],
          explain: '`am` = `an dem`, Dativ: после `dem` — `-en`. Без предлога тоже `nächsten Montag`, но это уже Akkusativ мужского рода.', tag: 'adjektiv' },

        // ---- перевод
        { id: 'g08-40', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Сейчас нам нужна квартира побольше.',
          answer: ['Jetzt brauchen wir eine größere Wohnung.', 'Wir brauchen jetzt eine größere Wohnung.', 'Eine größere Wohnung brauchen wir jetzt.'],
          explain: '«Побольше» — Komparativ `größer`. Перед существительным он получает обычное окончание: `eine größere Wohnung`.', tag: 'adjektiv' },
        { id: 'g08-41', type: 'translate', q: 'Переведите на немецкий. «Начинается» — beginnt.',
          ru: 'Новый курс начинается в следующий понедельник.',
          answer: ['Der neue Kurs beginnt am nächsten Montag.', 'Am nächsten Montag beginnt der neue Kurs.', 'Der neue Kurs beginnt nächsten Montag.', 'Nächsten Montag beginnt der neue Kurs.'],
          explain: '`der neue Kurs` — после `der` в Nominativ `-e`. «В следующий понедельник» — `am nächsten Montag` или без предлога `nächsten Montag`, в обоих случаях `-en`.', tag: 'adjektiv' },
        { id: 'g08-42', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Эта квартира не такая светлая, как старая.',
          answer: ['Diese Wohnung ist nicht so hell wie die alte.', 'Diese Wohnung ist nicht so hell wie die alte Wohnung.', 'Die Wohnung ist nicht so hell wie die alte.', 'Die Wohnung ist nicht so hell wie die alte Wohnung.'],
          explain: '«Не такой, как» — `nicht so` + основная форма + `wie`. `die alte` — после `die` в Nominativ `-e`; существительное можно не повторять.', tag: 'adjektiv' },
        { id: 'g08-43', type: 'translate', q: 'Переведите на немецкий. «Ответ» — die Antwort.',
          ru: 'Большое спасибо за ваш быстрый ответ.',
          answer: ['Vielen Dank für Ihre schnelle Antwort.', 'Herzlichen Dank für Ihre schnelle Antwort.', 'Ich danke Ihnen sehr für Ihre schnelle Antwort.'],
          explain: '`Vielen Dank` — готовая формула. После `für` — Akkusativ, `die Antwort` — женского рода, поэтому `Ihre schnelle Antwort`.', tag: 'adjektiv' },
        { id: 'g08-44', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'В прошлом месяце мой сын болел.',
          answer: ['Im letzten Monat war mein Sohn krank.', 'Letzten Monat war mein Sohn krank.', 'Mein Sohn war im letzten Monat krank.', 'Mein Sohn war letzten Monat krank.', 'Im letzten Monat ist mein Sohn krank gewesen.', 'Letzten Monat ist mein Sohn krank gewesen.', 'Mein Sohn ist im letzten Monat krank gewesen.', 'Mein Sohn ist letzten Monat krank gewesen.'],
          explain: '`im letzten Monat` (Dativ) или `letzten Monat` (Akkusativ) — оба раза `-en`. А `krank` после `war` остаётся без окончания.', tag: 'adjektiv' }
    ],

    apply: {
        task: 'Напишите подруге 5–7 предложений: вы переехали в новую квартиру. Опишите её, сравните со старой и пригласите в гости. Используйте минимум три прилагательных перед существительным и одно сравнение с `als`.',
        checks: [
            'После `ist` и `sind` прилагательное стоит без окончания: `Die Küche ist sehr hell.`',
            'Минимум три прилагательных перед существительным с верным окончанием (`eine neue Wohnung`, `einen kleinen Balkon`)',
            'Есть сравнение: Komparativ одним словом и `als` (`größer als die alte`)',
            'Обращение и прощание с готовыми окончаниями: `Liebe …,` и `Viele Grüße`'
        ],
        model: 'Liebe Marina, wir haben jetzt eine neue Wohnung! Sie ist größer als die alte und hat einen kleinen Balkon. Die Küche ist sehr hell. Die Miete ist leider höher, aber die Lage ist besser. Am nächsten Samstag machen wir eine kleine Party. Hast du Zeit? Viele Grüße Irina',
        modelRu: 'Дорогая Марина, у нас теперь новая квартира! Она больше старой, и в ней есть маленький балкон. Кухня очень светлая. Квартплата, к сожалению, выше, но расположение лучше. В следующую субботу мы устраиваем небольшую вечеринку. У тебя есть время? Всего доброго, Ирина'
    }
};
