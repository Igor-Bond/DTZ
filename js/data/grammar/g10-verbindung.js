/**
 * Модуль 10. Связность: союзы и связки, zu-Infinitiv, Relativsatz.
 *
 * Как связать предложения письма и не сломать порядок слов: союзы «нулевого
 * места» против наречий-связок, zu-Infinitiv и um … zu, простой Relativsatz.
 */

export default {
    id: 'g10',
    order: 10,
    title: 'Связность: союзы, zu-Infinitiv, Relativsatz',
    short: 'Связность текста',
    goal: 'Вы связываете предложения письма союзами и связками, не ломая порядок слов, строите zu-Infinitiv и um … zu и пишете простой Relativsatz с запятыми.',
    why: 'Связность — часть критерия II (Kommunikative Gestaltung): письмо из коротких отдельных фраз читается как список, а не как текст. Но у каждой связки свой порядок слов, и здесь русскоговорящие ошибаются особенно часто: в русском «но», «поэтому», «потому что» и «чтобы» порядок слов не меняют.',

    theory: [
        { type: 'h', text: '1. Три вида связок' },
        {
            type: 'table',
            head: ['Вид', 'Примеры', 'Где глагол', 'Пример'],
            rows: [
                ['Союз «нулевого места»', '`und`, `aber`, `oder`, `denn`, `sondern`', 'на втором месте, как обычно', '…, denn ich **habe** Fieber.'],
                ['Наречие-связка', '`deshalb`, `trotzdem`, `außerdem`, `dann` …', 'сразу после связки', 'Deshalb **bleibe** ich zu Hause.'],
                ['Подчинительный союз', '`weil`, `dass`, `wenn`, `obwohl` …', 'в самом конце', '…, weil ich Fieber **habe**.']
            ],
            note: 'По-русски «потому что», «поэтому» и «но» порядок слов не меняют, а по-немецки каждая связка требует своего. Подчинительные союзы разобраны в модуле 2, здесь — первые два вида.'
        },

        { type: 'h', text: '2. und, aber, oder, denn, sondern и парные союзы' },
        { type: 'rule', text: 'Пять союзов `und`, `aber`, `oder`, `denn`, `sondern` стоят на «нулевом» месте и мест не занимают. После них порядок обычный: первое место, потом глагол. Перед `aber`, `denn`, `sondern` ставится запятая.' },
        {
            type: 'exs',
            items: [
                { de: 'Ich kann heute nicht kommen, **denn** ich **habe** Fieber.', ru: 'Я не могу сегодня прийти, потому что у меня температура.' },
                { de: 'Am Montag habe ich Zeit, **aber** am Dienstag **muss** ich arbeiten.', ru: 'В понедельник у меня есть время, но во вторник мне надо работать.' },
                { de: 'Ich möchte nicht im Mai umziehen, **sondern** im Juni.', ru: 'Я хочу переехать не в мае, а в июне.' },
                { de: 'Ich brauche **nicht nur** das Formular, **sondern auch** eine Bescheinigung.', ru: 'Мне нужен не только бланк, но и справка.' },
                { de: 'Ich komme **entweder** am Montag **oder** am Dienstag.', ru: 'Я приду или в понедельник, или во вторник.' },
                { de: 'Die Wohnung hat **sowohl** einen Balkon **als auch** einen Keller.', ru: 'В квартире есть и балкон, и подвал.' }
            ]
        },
        { type: 'p', text: '`sondern` — это русское «а» после отрицания: «не в мае, а в июне». `aber` — просто «но». Так же устроена пара `nicht nur …, sondern auch` («не только…, но и»). Пары `entweder … oder` и `sowohl … als auch` соединяют слова без запятой.' },
        { type: 'trap', wrong: 'Ich kann heute nicht kommen, denn ich Fieber habe.', right: 'Ich kann heute nicht kommen, denn ich habe Fieber.', why: '`denn` и `weil` значат одно и то же, но ведут себя по-разному. После `weil` глагол уходит в конец, а после `denn` порядок обычный: подлежащее, потом глагол.' },

        { type: 'h', text: '3. deshalb, trotzdem, außerdem: связка на первом месте' },
        { type: 'rule', text: 'Наречие-связка — полноценный член предложения. Если оно стоит в начале, оно **занимает первое место**: сразу за ним глагол, потом подлежащее. Это правило из модуля 1.' },
        {
            type: 'table',
            head: ['Смысл', 'Союз: порядок обычный', 'Наречие: сразу глагол'],
            rows: [
                ['причина / следствие', '…, **denn** ich habe Fieber.', '…, **deshalb** bleibe ich zu Hause.'],
                ['«и» / «кроме того»', '… **und** die Heizung ist kaputt.', '**Außerdem** ist die Heizung kaputt.'],
                ['«но» / «всё равно»', '…, **aber** ich habe keine Zeit.', '**Trotzdem** möchte ich kommen.'],
                ['«или» / «иначе»', '… **oder** Sie rufen mich an.', '**Sonst** rufe ich Sie an.']
            ],
            note: 'Союз или наречие? Смысл близкий, порядок разный: слева после связки идёт подлежащее, справа — сразу глагол.'
        },
        {
            type: 'table',
            head: ['Связка', 'Значение', 'Пример'],
            rows: [
                ['`deshalb`, `deswegen`, `darum`', 'поэтому', '**Deshalb** **schreibe** ich Ihnen.'],
                ['`trotzdem`', 'всё равно, несмотря на это', '**Trotzdem** **möchte** ich den Kurs machen.'],
                ['`außerdem`', 'кроме того', '**Außerdem** **ist** das Fenster kaputt.'],
                ['`sonst`', 'иначе', '**Sonst** **muss** ich den Vertrag kündigen.'],
                ['`also`', 'итак, значит (не «также»)', '**Also** **komme** ich am Freitag.'],
                ['`übrigens`', 'кстати', '**Übrigens** **habe** ich eine neue Adresse.'],
                ['`leider`', 'к сожалению', '**Leider** **kann** ich nicht kommen.'],
                ['`zuerst`, `dann`, `danach`, `später`', 'сначала, потом, после этого, позже', '**Danach** **gehe** ich zur Arbeit.']
            ]
        },
        { type: 'trap', wrong: 'Ich bin krank, deshalb ich bleibe zu Hause.', right: 'Ich bin krank, deshalb bleibe ich zu Hause.', why: 'По-русски «поэтому я остаюсь» — подлежащее сразу после «поэтому». Но `deshalb` — не союз, а наречие: оно занимает первое место, за ним глагол, потом `ich`. Так же с `trotzdem`, `außerdem`, `dann`.' },
        { type: 'tip', text: 'Запомните пять союзов, после которых порядок обычный: `und`, `aber`, `oder`, `denn`, `sondern`. После остальных связок в начале предложения сразу идёт глагол, а после `weil`, `dass`, `wenn` глагол уходит в конец.' },

        { type: 'h', text: '4. Цепочка: zuerst, dann, danach, zum Schluss' },
        {
            type: 'exs',
            items: [
                { de: '**Zuerst** **habe** ich das Formular ausgefüllt.', ru: 'Сначала я заполнил бланк.' },
                { de: '**Dann** **bin** ich zum Amt gegangen.', ru: 'Потом я пошёл в ведомство.' },
                { de: '**Danach** **musste** ich eine Stunde warten.', ru: 'После этого мне пришлось ждать час.' },
                { de: '**Zum Schluss** **habe** ich einen neuen Ausweis bekommen.', ru: 'В конце концов я получил новое удостоверение.' }
            ]
        },
        { type: 'tip', text: 'Цепочка `Zuerst … Dann … Danach … Zum Schluss …` — простой способ связно рассказать, что произошло. Каждая связка занимает первое место, и глагол идёт сразу за ней.' },

        { type: 'h', text: '5. zu-Infinitiv: «нет времени позвонить», «важно прийти»' },
        { type: 'p', text: 'Когда по-русски после глагола или выражения идёт неопределённая форма («нет времени позвонить», «важно прийти»), по-немецки нужен **zu + инфинитив в самом конце** (но не после модальных глаголов `kann`, `möchte` …, см. шаг 6). Своего подлежащего у этой части нет: кто действует, понятно из главной части.' },
        {
            type: 'table',
            head: ['Главная часть', 'Часть с zu'],
            rows: [
                ['Ich habe keine Zeit,', 'Sie **anzurufen**.'],
                ['Es ist wichtig,', 'pünktlich **zu kommen**.'],
                ['Ich bitte Sie,', 'mir **zu helfen**.'],
                ['Ich freue mich,', 'Sie **zu sehen**.'],
                ['Ich habe vergessen,', 'Sie **anzurufen**.']
            ],
            note: 'Чаще всего zu-Infinitiv нужен после `keine Zeit haben`, `keine Möglichkeit haben`, `es ist wichtig / schwer / nicht möglich`, `vergessen`, `versuchen`, `bitten`, `hoffen`, `vorhaben`, `sich freuen`.'
        },
        { type: 'rule', text: 'Запятая перед частью с `zu` обязательна после существительного (`keine Zeit, …`), после `es` (`Es ist wichtig, …`) и с `um`, `ohne`, `statt`. После `vergessen`, `bitten` и подобных она не обязательна, но и не ошибка — ставьте её всегда.' },
        {
            type: 'exs',
            items: [
                { de: 'Ich habe am Freitag keine Möglichkeit, zum Kurs **zu kommen**.', ru: 'В пятницу у меня нет возможности прийти на курс.' },
                { de: 'Es ist nicht möglich, den Termin **zu verschieben**.', ru: 'Перенести приём невозможно.' },
                { de: 'Ich versuche, jeden Tag eine Stunde Deutsch **zu lernen**.', ru: 'Я стараюсь каждый день час заниматься немецким.' },
                { de: 'Ich hoffe, bald von Ihnen **zu hören**.', ru: 'Надеюсь скоро получить от вас ответ.' }
            ]
        },
        { type: 'trap', wrong: 'Ich habe keine Zeit, rufen Sie an.', right: 'Ich habe keine Zeit, Sie anzurufen.', why: 'По-русски «нет времени позвонить вам» — инфинитив идёт сразу за словом «времени». По-немецки нужен zu-Infinitiv в конце: `Sie anzurufen`. А `rufen Sie an` — это просьба: получается «У меня нет времени, позвоните».' },
        { type: 'trap', wrong: 'Ich habe vergessen, Sie anrufen.', right: 'Ich habe vergessen, Sie anzurufen.', why: 'В русском перед инфинитивом нет никакой частицы, поэтому `zu` легко потерять. После `vergessen`, `versuchen`, `bitten`, `keine Zeit` без `zu` нельзя.' },

        { type: 'h', text: '6. anzurufen, mitzubringen — и когда zu не нужен' },
        {
            type: 'table',
            head: ['Глагол', 'С zu', 'Почему'],
            rows: [
                ['anrufen', '**anzurufen**', 'отделяемая приставка: `zu` внутри, одним словом'],
                ['mitbringen', '**mitzubringen**', 'отделяемая приставка'],
                ['absagen', '**abzusagen**', 'отделяемая приставка'],
                ['einladen', '**einzuladen**', 'отделяемая приставка'],
                ['bezahlen', '**zu bezahlen**', 'приставка `be-` не отделяется: `zu` отдельно'],
                ['verschieben', '**zu verschieben**', 'приставка `ver-` не отделяется']
            ]
        },
        { type: 'rule', text: 'После модальных глаголов (`kann`, `muss`, `möchte` …), `werden` и `lassen` инфинитив идёт **без** `zu`: `Ich möchte den Termin verschieben.`, `Ich lasse die Waschmaschine reparieren.`' },
        { type: 'trap', wrong: 'Ich habe vergessen, Sie zu anrufen.', right: 'Ich habe vergessen, Sie anzurufen.', why: '`anrufen` — отделяемый глагол, и `zu` встаёт между приставкой и корнем: `an-zu-rufen`, одним словом. Отдельно `zu` пишется только у глаголов без отделяемой приставки: `zu bezahlen`.' },

        { type: 'h', text: '7. um … zu или damit: «чтобы»' },
        {
            type: 'table',
            head: ['Когда', 'Связка', 'Пример'],
            rows: [
                ['действует тот же человек', '`um … zu`', 'Ich schreibe Ihnen, **um** einen Termin **zu vereinbaren**.'],
                ['действуют разные люди', '`damit` + придаточное', 'Ich gebe Ihnen meine Nummer, **damit** Sie mich anrufen **können**.'],
                ['«не сделав»', '`ohne … zu`', 'Mein Nachbar hat mein Fahrrad genommen, **ohne** mich **zu fragen**.'],
                ['«вместо того чтобы»', '`statt … zu`', 'Er hat mir eine Nachricht geschrieben, **statt** mich **anzurufen**.']
            ],
            note: 'У `um … zu` нет своего подлежащего, поэтому оно возможно, только если действует тот же человек. `damit` вводит придаточное со своим подлежащим, подробнее о нём — в модуле 2.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Ich besuche einen Kurs, **um** besser Deutsch **zu sprechen**.', ru: 'Я хожу на курс, чтобы лучше говорить по-немецки.' },
                { de: 'Ich komme früher, **um** mit Ihnen **zu sprechen**.', ru: 'Я приду пораньше, чтобы поговорить с вами.' },
                { de: 'Bitte schreiben Sie mir Ihre Adresse, **damit** ich Ihnen die Rechnung schicken **kann**.', ru: 'Пожалуйста, напишите мне ваш адрес, чтобы я мог прислать вам счёт.' }
            ]
        },
        { type: 'trap', wrong: 'Ich gebe Ihnen meine Nummer, um Sie mich anzurufen.', right: 'Ich gebe Ihnen meine Nummer, damit Sie mich anrufen können.', why: 'Номер даю я, а звонить будете вы — действуют разные люди. В `um … zu` нет места для второго подлежащего, поэтому нужен `damit` с придаточным.' },
        { type: 'trap', wrong: 'Ich schreibe Ihnen für einen Termin zu vereinbaren.', right: 'Ich schreibe Ihnen, um einen Termin zu vereinbaren.', why: 'Русское «для того чтобы» тянет к `für`. Но `für` — предлог перед существительным (`für den Kurs`), а цель с инфинитивом выражает `um … zu`.' },

        { type: 'h', text: '8. Relativsatz: der, die, das вместо «который»' },
        { type: 'p', text: 'Русское «который» по-немецки — `der`, `die`, `das`. **Род и число** местоимение берёт от слова, к которому относится, а **падеж** — от своей роли в придаточном. Глагол стоит в конце, а придаточное отделяется запятыми с обеих сторон.' },
        {
            type: 'table',
            head: ['Падеж', 'm', 'f', 'n', 'Pl'],
            rows: [
                ['Nominativ', 'der', 'die', 'das', 'die'],
                ['Akkusativ', '**den**', 'die', 'das', 'die'],
                ['Dativ', '**dem**', '**der**', '**dem**', '**denen**']
            ],
            note: 'Формы почти как у определённого артикля, кроме Dativ множественного числа: `denen`. Если перед местоимением стоит предлог, падеж задаёт предлог: `der Mann, mit dem …`, `die Nachbarn, mit denen …`.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Das ist die Wohnung, **die** ich gestern gesehen **habe**.', ru: 'Это квартира, которую я видел вчера.' },
                { de: 'Der Kurs, **der** am Montag **beginnt**, ist leider schon voll.', ru: 'Курс, который начинается в понедельник, к сожалению, уже заполнен.' },
                { de: 'Ich habe den Schlüssel, **den** Sie mir gegeben **haben**, leider verloren.', ru: 'Я, к сожалению, потерял ключ, который вы мне дали.' },
                { de: 'Die Nachbarn, **mit denen** ich oft **spreche**, sind sehr nett.', ru: 'Соседи, с которыми я часто разговариваю, очень милые.' }
            ]
        },
        { type: 'trap', wrong: 'Das ist die Wohnung, die ich habe gesehen.', right: 'Das ist die Wohnung, die ich gesehen habe.', why: 'Relativsatz — придаточное, спрягаемый глагол в нём стоит последним, после Partizip II. По-русски «квартира, которую я видел» — глагол рядом с «которую», отсюда ошибка.' },
        { type: 'trap', wrong: 'Der Techniker, dem ich angerufen habe, kommt morgen.', right: 'Der Techniker, den ich angerufen habe, kommt morgen.', why: 'По-русски «звонить кому» — дательный падеж, а `anrufen` требует Akkusativ: `jemanden anrufen`. Падеж местоимения берётся из придаточного, поэтому `den`.' },
        { type: 'trap', wrong: 'Der Kurs der am Montag beginnt ist schon voll.', right: 'Der Kurs, der am Montag beginnt, ist schon voll.', why: 'Придаточное в середине предложения отделяется **двумя** запятыми. Вторую, после глагола придаточного, забывают чаще всего.' },
        { type: 'tip', text: 'Relativsatz экономит предложения: вместо `Ich habe eine Wohnung gesehen. Die Wohnung ist sehr hell.` — `Die Wohnung, die ich gesehen habe, ist sehr hell.` Одного-двух таких предложений в письме хватит.' }
    ],

    exercises: [
        // ---- выбор
        { id: 'g10-01', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich kann nicht kommen, denn ich habe Fieber.', 'Ich kann nicht kommen, denn ich Fieber habe.', 'Ich kann nicht kommen, denn habe ich Fieber.'], answer: 0,
          explain: '`denn` стоит на нулевом месте и порядок слов не меняет: после него подлежащее `ich`, потом глагол `habe`. Глагол уходит в конец после `weil`, а не после `denn`.', tag: 'konnektor', diag: true },
        { id: 'g10-02', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich bin krank, deshalb bleibe ich zu Hause.', 'Ich bin krank, deshalb ich bleibe zu Hause.', 'Ich bin krank, deshalb ich zu Hause bleibe.'], answer: 0,
          explain: '`deshalb` — наречие, оно занимает первое место. Сразу за ним глагол `bleibe`, потом `ich`. В конец глагол не уходит: `deshalb` — не подчинительный союз.', tag: 'konnektor' },
        { id: 'g10-03', type: 'choice', q: 'Какое слово подходит?',
          text: 'Die Heizung ist kaputt. ___ funktioniert das Licht im Bad nicht.',
          options: ['Außerdem', 'Und', 'Denn'], answer: 0,
          explain: 'Сразу после пропуска стоит глагол `funktioniert` — значит, первое место занимает связка. Так ведёт себя наречие `Außerdem`. После `Und` и `Denn` порядок был бы обычный: `Und das Licht funktioniert …`.', tag: 'konnektor' },
        { id: 'g10-04', type: 'choice', q: 'Какое слово подходит?',
          text: 'Ich möchte den Vertrag nicht verlängern, ___ kündigen.',
          options: ['sondern', 'aber', 'denn'], answer: 0,
          explain: 'После отрицания русское «а» («не продлить, а расторгнуть») — это `sondern`. `aber` значит «но» и сказанное не исправляет, а `denn` вводит причину.', tag: 'konnektor' },
        { id: 'g10-05', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich habe vergessen, Sie anzurufen.', 'Ich habe vergessen, Sie zu anrufen.', 'Ich habe vergessen, Sie anrufen.'], answer: 0,
          explain: 'После `vergessen` нужен zu-Infinitiv. У отделяемого `anrufen` частица `zu` встаёт внутрь слова: `anzurufen`.', tag: 'infinitiv' },
        { id: 'g10-06', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich möchte den Termin verschieben.', 'Ich möchte den Termin zu verschieben.', 'Ich möchte zu verschieben den Termin.'], answer: 0,
          explain: 'После модального `möchte` инфинитив идёт без `zu` и стоит в конце. `zu` нужен после обычных глаголов и выражений: `Ich habe vergessen, … zu …`.', tag: 'infinitiv' },
        { id: 'g10-07', type: 'choice', q: 'Какое слово подходит?',
          text: 'Ich gebe Ihnen meine Telefonnummer, ___ Sie mich anrufen können.',
          options: ['damit', 'um', 'denn'], answer: 0,
          explain: 'Номер даю я, звонить будете вы — подлежащие разные, поэтому `damit`, и глагол `können` в конце. `um … zu` требует того же подлежащего и `zu`, а после `denn` глагол стоял бы вторым.', tag: 'infinitiv' },
        { id: 'g10-08', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Ich schreibe Ihnen, um einen Termin zu vereinbaren.', 'Ich schreibe Ihnen, für einen Termin zu vereinbaren.', 'Ich schreibe Ihnen, um einen Termin vereinbaren.'], answer: 0,
          explain: 'Цель при том же подлежащем — `um … zu` с инфинитивом в конце. `für` — предлог перед существительным, перед инфинитивом его не ставят. А без `zu` конструкция с `um` не работает.', tag: 'infinitiv' },
        { id: 'g10-09', type: 'choice', q: 'Выберите местоимение.',
          text: 'Der Techniker, ___ ich gestern angerufen habe, kommt morgen.',
          options: ['den', 'der', 'dem'], answer: 0,
          explain: '`anrufen` требует Akkusativ, а `der Techniker` — мужского рода: значит, `den`. Русское «звонить кому» тянет к `dem`, но по-немецки `jemanden anrufen`. `der` — Nominativ, а подлежащее в придаточном — `ich`.', tag: 'relativ', diag: true },
        { id: 'g10-10', type: 'choice', q: 'Какое предложение правильное?',
          options: ['Das ist die Wohnung, die ich gesehen habe.', 'Das ist die Wohnung, die ich habe gesehen.', 'Das ist die Wohnung, was ich gesehen habe.'], answer: 0,
          explain: 'В Relativsatz спрягаемый глагол `habe` стоит последним. Местоимение берёт род от `die Wohnung`: `die`. `was` после существительного не ставится, хотя по-русски можно сказать «квартира, что я видел».', tag: 'relativ' },
        { id: 'g10-11', type: 'choice', q: 'Где запятые стоят правильно?',
          options: ['Der Kurs, der am Montag beginnt, ist schon voll.', 'Der Kurs, der am Montag beginnt ist schon voll.', 'Der Kurs der am Montag beginnt, ist schon voll.'], answer: 0,
          explain: 'Relativsatz в середине предложения отделяется двумя запятыми: перед `der` и после `beginnt`.', tag: 'zeichen' },

        // ---- пропуски
        { id: 'g10-12', type: 'gap', q: 'Вставьте denn или weil.',
          text: 'Ich komme heute nicht, ___ ich habe einen Termin beim Arzt.', hint: 'denn или weil', answer: ['denn'],
          explain: 'После пропуска обычный порядок: `ich habe …`, глагол на втором месте. Так бывает только после `denn`. После `weil` было бы `… einen Termin beim Arzt habe`.', tag: 'konnektor' },
        { id: 'g10-13', type: 'gap', q: 'Вставьте denn или weil.',
          text: 'Ich komme heute nicht, ___ ich einen Termin beim Arzt habe.', hint: 'denn или weil', answer: ['weil'],
          explain: 'Глагол `habe` стоит в конце — это придаточное, значит, `weil`. После `denn` глагол шёл бы сразу за подлежащим.', tag: 'konnektor' },
        { id: 'g10-14', type: 'gap', q: 'Вставьте deshalb или denn.',
          text: 'Die Waschmaschine ist kaputt, ___ rufe ich den Hausmeister an.', hint: 'deshalb или denn', answer: [['deshalb', 'deswegen', 'darum']],
          explain: 'После пропуска сразу глагол `rufe`, а `ich` — за ним: первое место занимает наречие `deshalb`. И по смыслу это следствие («поэтому»), а `denn` вводит причину.', tag: 'konnektor' },
        { id: 'g10-15', type: 'gap', q: 'Вставьте aber или trotzdem.',
          text: 'Der Kurs ist sehr teuer. ___ möchte ich ihn machen.', hint: 'aber или trotzdem', answer: ['Trotzdem'],
          explain: 'После пропуска сразу глагол `möchte` — так бывает после наречия `Trotzdem`. С `Aber` порядок был бы обычный: `Aber ich möchte ihn machen.`', tag: 'konnektor' },
        { id: 'g10-16', type: 'gap', q: 'Вставьте sondern или aber.',
          text: 'Der Termin ist nicht am Montag, ___ am Dienstag.', hint: 'sondern или aber', answer: ['sondern'],
          explain: 'После отрицания `nicht am Montag` идёт исправление: «не в понедельник, а во вторник». Это `sondern`.', tag: 'konnektor' },
        { id: 'g10-17', type: 'gap', q: 'Вставьте глагол с zu.',
          text: 'Ich habe leider keine Zeit, Sie morgen ___.', hint: 'anrufen', answer: ['anzurufen'],
          explain: 'После `keine Zeit` нужен zu-Infinitiv в конце. `anrufen` — отделяемый глагол, поэтому `zu` встаёт внутрь: `anzurufen`.', tag: 'infinitiv', diag: true },
        { id: 'g10-18', type: 'gap', q: 'Вставьте глагол с zu.',
          text: 'Bitte vergessen Sie nicht, Ihren Pass ___.', hint: 'mitbringen', answer: ['mitzubringen'],
          explain: '`mitbringen` — отделяемый глагол: `mit` + `zu` + `bringen`, одним словом.', tag: 'infinitiv' },
        { id: 'g10-19', type: 'gap', q: 'Вставьте глагол с zu.',
          text: 'Es ist wichtig, die Miete pünktlich ___.', hint: 'bezahlen', answer: ['zu bezahlen'],
          explain: 'После `Es ist wichtig` — zu-Infinitiv. Приставка `be-` не отделяется, поэтому `zu` пишется отдельно: `zu bezahlen`.', tag: 'infinitiv' },
        { id: 'g10-20', type: 'gap', q: 'Вставьте um или damit.',
          text: 'Ich lerne jeden Abend, ___ die Prüfung zu bestehen.', hint: 'um или damit', answer: ['um'],
          explain: 'Учусь я, и сдавать экзамен буду тоже я — подлежащее одно. В конце стоит `zu bestehen`, значит, нужен `um`.', tag: 'infinitiv' },
        { id: 'g10-21', type: 'gap', q: 'Вставьте um или damit.',
          text: 'Ich schicke Ihnen die Unterlagen, ___ Sie alles prüfen können.', hint: 'um или damit', answer: ['damit'],
          explain: 'Присылаю я, а проверять будете вы — подлежащие разные. У придаточного своё подлежащее `Sie` и глагол в конце: это `damit`.', tag: 'infinitiv' },
        { id: 'g10-22', type: 'gap', q: 'Вставьте относительное местоимение.',
          text: 'Das ist die Wohnung, ___ ich gestern gesehen habe.', hint: 'der, die или das', answer: [['die', 'welche']],
          explain: '`die Wohnung` — женского рода. В придаточном квартиру видят — это Akkusativ, а у женского рода он совпадает с Nominativ: `die`.', tag: 'relativ' },
        { id: 'g10-23', type: 'gap', q: 'Вставьте относительное местоимение.',
          text: 'Die Nachbarn, mit ___ ich oft spreche, sind sehr nett.', hint: 'после mit — Dativ, мн. ч.', answer: [['denen', 'welchen']],
          explain: '`mit` требует Dativ, `die Nachbarn` — множественное число. Относительное местоимение в Dativ мн. ч. — `denen`, а не `den`, как у артикля.', tag: 'relativ' },

        // ---- составить из слов
        { id: 'g10-24', type: 'build', q: 'Составьте предложение с denn.',
          ru: 'Я не могу прийти, потому что у меня температура.',
          answer: ['Ich kann nicht kommen, denn ich habe Fieber.'],
          explain: 'После `denn` порядок обычный: `ich habe Fieber`. Перед `denn` стоит запятая.', tag: 'konnektor' },
        { id: 'g10-25', type: 'build', q: 'Составьте предложение.',
          ru: 'Кроме того, сломано отопление.',
          answer: ['Außerdem ist die Heizung kaputt.', 'Die Heizung ist außerdem kaputt.'],
          explain: '`Außerdem` в начале занимает первое место, за ним сразу глагол `ist`. Если начать с `Die Heizung`, связка встаёт после глагола.', tag: 'konnektor' },
        { id: 'g10-26', type: 'build', q: 'Составьте предложение.',
          ru: 'У меня нет времени позвонить вам.',
          answer: ['Ich habe keine Zeit, Sie anzurufen.'],
          explain: 'После `keine Zeit` — запятая и zu-Infinitiv: дополнение `Sie` впереди, `anzurufen` в самом конце.', tag: 'infinitiv' },
        { id: 'g10-27', type: 'build', q: 'Составьте предложение.',
          ru: 'Важно приходить вовремя.',
          answer: ['Es ist wichtig, pünktlich zu kommen.'],
          explain: 'Русское «важно» начинается с `Es ist wichtig`. Дальше запятая и zu-Infinitiv: `pünktlich zu kommen`.', tag: 'infinitiv' },
        { id: 'g10-28', type: 'build', q: 'Составьте предложение.',
          ru: 'Я учу немецкий, чтобы найти работу.',
          answer: ['Ich lerne Deutsch, um eine Arbeit zu finden.'],
          explain: 'Учу я и работу искать буду я — подлежащее одно, поэтому `um … zu`. `zu finden` стоит в самом конце.', tag: 'infinitiv' },
        { id: 'g10-29', type: 'build', q: 'Составьте предложение.',
          ru: 'Это курс, который начинается в понедельник.',
          answer: ['Das ist der Kurs, der am Montag beginnt.'],
          explain: '`der Kurs` мужского рода, в придаточном курс начинается сам — это Nominativ: `der`. Глагол `beginnt` уходит в конец.', tag: 'relativ' },
        { id: 'g10-30', type: 'build', q: 'Составьте предложение.',
          ru: 'Это женщина, с которой я работаю.',
          answer: ['Das ist die Frau, mit der ich arbeite.'],
          explain: 'Предлог стоит перед местоимением: `mit der`. `mit` требует Dativ, а Dativ женского рода — `der`. Глагол `arbeite` — в конце.', tag: 'relativ' },

        // ---- исправить ошибку
        { id: 'g10-31', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich bin krank, deshalb ich bleibe zu Hause.',
          answer: ['Ich bin krank, deshalb bleibe ich zu Hause.', 'Ich bin krank. Deshalb bleibe ich zu Hause.', 'Ich bin krank, ich bleibe deshalb zu Hause.'],
          explain: 'После `deshalb` в начале части сразу идёт глагол: `deshalb bleibe ich`. По-русски «поэтому я остаюсь», но `deshalb` занимает первое место.', tag: 'konnektor', diag: true },
        { id: 'g10-32', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich kann heute nicht kommen, denn ich Fieber habe.',
          answer: ['Ich kann heute nicht kommen, denn ich habe Fieber.', 'Ich kann heute nicht kommen, weil ich Fieber habe.'],
          explain: 'После `denn` порядок обычный: `ich habe Fieber`. Если хотите глагол в конце, нужен `weil`.', tag: 'konnektor' },
        { id: 'g10-33', type: 'fix', q: 'Исправьте ошибку. Смысл: «У меня нет времени позвонить вам».',
          text: 'Ich habe keine Zeit, rufen Sie an.',
          answer: ['Ich habe keine Zeit, Sie anzurufen.'],
          explain: '`rufen Sie an` — просьба «позвоните». Чтобы сказать «нет времени позвонить», нужен zu-Infinitiv: `Sie anzurufen`.', tag: 'infinitiv' },
        { id: 'g10-34', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich habe vergessen, die Rechnung bezahlen.',
          answer: ['Ich habe vergessen, die Rechnung zu bezahlen.'],
          explain: 'После `vergessen` инфинитив без `zu` не употребляется: `die Rechnung zu bezahlen`.', tag: 'infinitiv' },
        { id: 'g10-35', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich habe vor, meine Eltern zu einladen.',
          answer: ['Ich habe vor, meine Eltern einzuladen.'],
          explain: '`einladen` — отделяемый глагол, `zu` встаёт внутрь: `einzuladen`, одним словом.', tag: 'infinitiv' },
        { id: 'g10-36', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich gebe Ihnen meine Nummer, um Sie mich anrufen können.',
          answer: ['Ich gebe Ihnen meine Nummer, damit Sie mich anrufen können.', 'Ich gebe Ihnen meine Nummer, damit Sie mich anrufen.'],
          explain: 'Номер даю я, а звонить будете вы: подлежащие разные. Нужен `damit` с придаточным, а не `um … zu`.', tag: 'infinitiv' },
        { id: 'g10-37', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Das ist die Wohnung, die ich habe gesehen.',
          answer: ['Das ist die Wohnung, die ich gesehen habe.'],
          explain: 'В Relativsatz спрягаемый глагол стоит последним: `gesehen habe`.', tag: 'relativ' },

        // ---- соединить
        { id: 'g10-38', type: 'join', q: 'Соедините предложения с помощью deshalb.',
          parts: ['Mein Auto ist kaputt.', 'Ich komme mit dem Bus.'], connector: 'deshalb',
          answer: ['Mein Auto ist kaputt, deshalb komme ich mit dem Bus.', 'Mein Auto ist kaputt. Deshalb komme ich mit dem Bus.', 'Mein Auto ist kaputt, ich komme deshalb mit dem Bus.', 'Mein Auto ist kaputt. Ich komme deshalb mit dem Bus.'],
          explain: '`deshalb` начинает вторую часть и занимает первое место: дальше глагол `komme`, потом `ich`. Можно оставить `ich` первым — тогда `deshalb` стоит после глагола.', tag: 'konnektor' },
        { id: 'g10-39', type: 'join', q: 'Соедините предложения с помощью um … zu.',
          parts: ['Ich rufe Sie an.', 'Ich möchte einen Termin vereinbaren.'], connector: 'um',
          answer: ['Ich rufe Sie an, um einen Termin zu vereinbaren.', 'Um einen Termin zu vereinbaren, rufe ich Sie an.'],
          explain: 'Подлежащее в обеих частях — `ich`, поэтому `um … zu`. `ich` и `möchte` из второй части уходят, остаётся `einen Termin zu vereinbaren`.', tag: 'infinitiv' },
        { id: 'g10-40', type: 'join', q: 'Сделайте из второго предложения Relativsatz.',
          parts: ['Der Kurs ist sehr gut.', 'Ich besuche den Kurs seit Mai.'], connector: 'den',
          answer: ['Der Kurs, den ich seit Mai besuche, ist sehr gut.'],
          explain: 'Курс я посещаю — в придаточном это Akkusativ: `den`. Придаточное встаёт сразу за `Der Kurs`: глагол `besuche` в конце, запятые с двух сторон.', tag: 'relativ' },

        // ---- перевод
        { id: 'g10-41', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'К сожалению, в субботу у меня нет времени навестить вас.',
          answer: ['Leider habe ich am Samstag keine Zeit, Sie zu besuchen.', 'Am Samstag habe ich leider keine Zeit, Sie zu besuchen.', 'Ich habe am Samstag leider keine Zeit, Sie zu besuchen.', 'Ich habe leider am Samstag keine Zeit, Sie zu besuchen.', 'Leider habe ich keine Zeit, Sie am Samstag zu besuchen.', 'Ich habe leider keine Zeit, Sie am Samstag zu besuchen.'],
          explain: '«Нет времени» + действие — `keine Zeit, … zu …`. Перед группой с `zu` запятая, `zu besuchen` — в самом конце.', tag: 'infinitiv' },
        { id: 'g10-42', type: 'translate', q: 'Переведите на немецкий.',
          ru: 'Я позвоню вам завтра, чтобы перенести встречу.',
          answer: ['Ich rufe Sie morgen an, um den Termin zu verschieben.', 'Morgen rufe ich Sie an, um den Termin zu verschieben.', 'Ich werde Sie morgen anrufen, um den Termin zu verschieben.', 'Morgen werde ich Sie anrufen, um den Termin zu verschieben.', 'Um den Termin zu verschieben, rufe ich Sie morgen an.'],
          explain: 'Звоню я и переношу я — подлежащее одно, поэтому `um … zu`. «Встреча» в смысле назначенного времени — `der Termin`.', tag: 'infinitiv' },

        // ---- порядок
        { id: 'g10-43', type: 'order', q: 'Расставьте предложения по порядку.',
          items: ['Zuerst habe ich den Vermieter angerufen.', 'Dann ist der Hausmeister gekommen und hat sich die Heizung angesehen.', 'Danach hat er ein neues Teil bestellt.', 'Zum Schluss hat er die Heizung repariert.'],
          explain: '`Zuerst` — всегда первым, `Zum Schluss` — последним. В середине сначала приходит мастер (`der Hausmeister`), и только потом о нём можно сказать `er`. После каждой связки сразу идёт глагол.', tag: 'konnektor' }
    ],

    apply: {
        task: 'Напишите 5–6 предложений хозяину квартиры: не работает отопление, есть ещё одна проблема, вы просите прислать мастера. Используйте `denn` или `aber`, `deshalb` или `außerdem`, одну конструкцию с `zu` и один Relativsatz.',
        checks: [
            'После `denn` и `aber` порядок обычный: первое место, потом глагол',
            'После `deshalb` или `außerdem` в начале части сразу идёт глагол',
            'Есть конструкция с `zu`; у отделяемого глагола `zu` стоит внутри (`anzurufen`)',
            'Есть Relativsatz: глагол в конце, перед ним запятая (а если он в середине — и после него)'
        ],
        model: 'Sehr geehrter Herr Krüger, ich schreibe Ihnen, denn in meiner Wohnung funktioniert die Heizung nicht. Es ist sehr kalt, deshalb können meine Kinder nachts nicht gut schlafen. Außerdem schließt das Fenster in der Küche nicht richtig. Ich habe schon versucht, den Hausmeister anzurufen, aber er ist im Urlaub. Könnten Sie bitte einen Techniker schicken, der die Heizung repariert? Mit freundlichen Grüßen',
        modelRu: 'Уважаемый господин Крюгер, пишу вам, потому что в моей квартире не работает отопление. Очень холодно, поэтому мои дети плохо спят по ночам. Кроме того, окно на кухне плохо закрывается. Я уже пытался позвонить смотрителю дома, но он в отпуске. Не могли бы вы прислать мастера, который починит отопление? С уважением'
    }
};
