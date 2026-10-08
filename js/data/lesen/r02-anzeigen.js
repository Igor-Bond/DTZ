/**
 * Lesen, Teil 2: объявления и ситуации.
 *
 * Теория (стратегия, «переодетые» факты, ловушки «почти подходит», «ищу» и
 * «предлагаю», сокращения), упражнения на навык и шесть наборов по восемь
 * объявлений и пять ситуаций, в каждом ровно одна «x».
 */

export default {
    id: 'r02',
    order: 2,
    teil: 2,
    title: 'Teil 2: объявления и ситуации',
    short: 'Teil 2 · Объявления',
    goal: 'Вы находите для пяти ситуаций подходящие объявления из восьми: выделяете в ситуации два-три факта, узнаёте их в объявлении в другой формулировке, отличаете «ищу» от «предлагаю» и уверенно ставите `x`, когда целиком не подходит ни одно.',
    why: 'Teil 2 — пять баллов из 25 в Lesen, а вместе с Hören эти баллы решают, будет ли B1. Слова в объявлениях простые, и баллы здесь теряют из-за спешки: выбирают объявление по одному совпавшему слову. Каждое лишнее объявление «почти подходит», и отличить его можно только проверкой всех фактов.',

    theory: [
        { type: 'h', text: '1. Что проверяют в Teil 2' },
        { type: 'p', text: 'Во второй части Lesen вы читаете **восемь коротких объявлений** (a–h) и **пять ситуаций**. К каждой ситуации надо найти подходящее объявление. Задачу можно описать так: `sich in mehreren Kurztexten orientieren, um spezifische Informationen zu finden` — сориентироваться в нескольких коротких текстах и найти конкретные сведения.' },
        {
            type: 'list',
            items: [
                'Объявления — из газеты, с сайта, с доски в супермаркете: работа, жильё, курсы, вещи, услуги, досуг.',
                'В ситуации 2–3 **ключевых факта**: что нужно, когда, где, сколько стоит, для кого. Часть фактов стоит в объявлении теми же словами, часть — в пересказе.',
                'Одно объявление подходит только одной ситуации. Из восьми объявлений четыре останутся лишними: это ловушки.',
                'Для **одной** ситуации подходящего объявления нет, тогда ответ — `x`. Такая ситуация в задании ровно одна.',
                'За каждый верный ответ — один балл, всего пять. На всю часть — около 9 минут.'
            ]
        },
        { type: 'rule', text: 'Объявление подходит, только если в нём есть **все** факты ситуации. Совпал один факт из двух — это ловушка, а не ответ.' },

        { type: 'h', text: '2. Стратегия по шагам' },
        {
            type: 'list',
            items: [
                '**Шаг 1.** Прочитайте ситуацию и выделите 2–3 ключевых факта: **что** нужно (место повара, курс, стиральная машина), **условие** (время, цена, место, возраст) и **кто вы**: ищете или предлагаете.',
                '**Шаг 2.** Пробегите глазами все восемь объявлений по главному факту и сразу отбросьте те, что о другом. Обычно остаётся два-три.',
                '**Шаг 3.** В оставшихся проверьте остальные факты по одному: время, цену, место, возраст, «ищет» или «предлагает».',
                '**Шаг 4.** Подходит ровно одно — это ответ. Подходят два — вы пропустили факт: перечитайте ситуацию слово за словом. Целиком не подходит ни одно — `x`.',
                '**Шаг 5.** Вычеркните использованное объявление: второй раз оно не понадобится.'
            ]
        },
        { type: 'tip', text: 'Не обязательно идти по порядку. Начните с самых лёгких ситуаций — где главный факт редкий и сразу виден (`Waschmaschine`, `Erste Hilfe`, `Fußball`). Каждое вычеркнутое объявление сужает выбор для трудных ситуаций.' },

        { type: 'h', text: '3. Как экзамен «переодевает» факты' },
        { type: 'p', text: 'Если бы ситуация и объявление совпадали слово в слово, задание решалось бы поиском одинаковых слов. Поэтому один-два факта в объявлении сказаны иначе: синонимом, числом, часами работы, примером.' },
        {
            type: 'table',
            head: ['В ситуации', 'В объявлении', 'Смысл'],
            rows: [
                ['`stundenweise`, `nur vormittags`', '`Teilzeit`, `20 Std./Woche`, `Mo–Fr 8–12 Uhr`', 'неполный день'],
                ['`eine Vollzeitstelle`', '`40 Stunden pro Woche`', 'полный день'],
                ['`möglichst schnell`', '`ab sofort`, `sofort frei`', 'сразу'],
                ['`keine Berufserfahrung`', '`Anfänger willkommen`, `Berufseinsteiger willkommen`', 'опыт не нужен'],
                ['`Anfängerkurs`', '`für Einsteiger`, `ohne Vorkenntnisse`', 'курс с нуля'],
                ['`nichts bezahlen`', '`kostenlos`, `gratis`, `Eintritt frei`', 'бесплатно'],
                ['`mit allen Nebenkosten`', '`warm`, `WM`, `inkl. NK`', 'всё включено'],
                ['`am Wochenende`', '`Sa/So`, `samstags und sonntags`', 'выходные'],
                ['`einen Hund haben`', '`Haustiere erlaubt`', 'животные разрешены'],
                ['`Kinderbetreuung`', '`Wir passen auf Ihre Kinder auf`', 'присмотр за детьми']
            ],
            note: 'Ищите не слово, а смысл: что нужно человеку из ситуации.'
        },
        {
            type: 'exs',
            items: [
                { de: 'Situation: Er möchte **nur vormittags** arbeiten. — Anzeige: Arbeitszeit **Mo–Fr 7–12 Uhr**.', ru: 'Работа с 7 до 12 — это и есть «только до обеда».' },
                { de: 'Situation: Sie suchen einen **Anfängerkurs**. — Anzeige: **Keine Vorkenntnisse nötig.**', ru: 'Курс, для которого не нужны знания, — курс для начинающих.' },
                { de: 'Situation: Sie möchten **keinen Eintritt** bezahlen. — Anzeige: **Eintritt frei!**', ru: 'Вход свободный — значит, бесплатный.' }
            ]
        },

        { type: 'h', text: '4. Ловушки: «почти подходит»' },
        { type: 'p', text: 'Лишние объявления написаны нарочно: в каждом совпадает часть фактов. Ловят обычно на четырёх вещах: другой город или время, цена вместо «бесплатно», продажа вместо аренды и ещё одна ловушка — объявление того, кто **сам ищет**, когда вам нужен тот, кто предлагает.' },
        { type: 'trap', wrong: 'Krankenpfleger (m/w/d) gesucht – Klinik am See, Dresden.', right: 'Krankenpfleger (m/w/d) gesucht – Stadtklinik Leipzig.', why: 'Ситуация: «Вы медбрат в Лейпциге и ищете работу в своём городе». Профессия совпадает в обоих объявлениях, но первое — из другого города. Проверяйте все факты, а не только первый.' },
        { type: 'trap', wrong: 'Tanzkurs: Probestunde kostenlos, danach 40 € im Monat.', right: 'Tanztreff im Jugendzentrum: jeden Freitag, Teilnahme kostenlos.', why: 'Ситуация: «Вы хотите регулярно танцевать и ничего не платить». В первом объявлении бесплатно только пробное занятие (`Probestunde`), дальше — 40 € в месяц.' },
        { type: 'trap', wrong: 'Garage zu verkaufen, 12.000 €.', right: 'Garage zu vermieten, 60 € im Monat.', why: 'Ситуация: «Вы хотите снять гараж». Первый гараж тоже есть, но его **продают**, а не **сдают**. Не путайте `verkaufen` (продавать) и `vermieten` (сдавать).' },
        { type: 'trap', wrong: 'Erzieherin (28) sucht Stelle in Teilzeit.', right: 'Kita Sonnenschein sucht Erzieherin in Teilzeit.', why: 'Ситуация: «Вы воспитательница и ищете работу на неполный день». Профессия и `Teilzeit` совпадают в обоих, но первое написала женщина, которая **сама ищет** работу. Вам нужно объявление того, кто работу **предлагает**.' },
        {
            type: 'table',
            head: ['В объявлении', 'Кто пишет', 'Подходит, если вы …'],
            rows: [
                ['`Suche …`, `Ich suche …`', 'тот, кому что-то **нужно**', 'это предлагаете: работу, комнату, услугу, вещь'],
                ['`Biete …`, `Ich biete …`', 'тот, кто **предлагает**', 'это ищете'],
                ['`Verkaufe …`, `Zu verkaufen`', 'продавец', 'хотите купить'],
                ['`Kaufe …`', 'покупатель', 'хотите продать'],
                ['`Vermiete …`, `Zu vermieten`', 'хозяин сдаёт', 'хотите снять'],
                ['`Koch gesucht`, `Wir suchen …`', 'фирма или семья ищет работника', 'ищете работу'],
                ['`Nachmieter gesucht`', 'жилец съезжает и ищет, кто въедет', 'ищете квартиру'],
                ['`Tausche … gegen …`', 'хочет обменять', 'у вас есть то, что он ищет, и наоборот'],
                ['`Zu verschenken`', 'отдаёт даром', 'ищете вещь бесплатно']
            ],
            note: '`gesucht` в объявлении фирмы значит «ищем работника», то есть фирма **предлагает работу**. А `Ich suche Arbeit` пишет тот, кто сам ищет.'
        },
        { type: 'tip', text: 'Перед ответом спросите себя: «Автор объявления мне что-то даёт или сам чего-то хочет?» Если вы оба ищете одно и то же, объявление не подходит, как бы ни совпадали слова.' },

        { type: 'h', text: '5. Сокращения и слова объявлений' },
        {
            type: 'table',
            head: ['Сокращение', 'Полностью', 'Значение'],
            rows: [
                ['`Zi.`', '`Zimmer`', 'комната (`3-Zi.-Whg.` — трёхкомнатная квартира)'],
                ['`Whg.`', '`Wohnung`', 'квартира'],
                ['`Kü.`, `Bad`', '`Küche`, `Badezimmer`', 'кухня, ванная'],
                ['`KM`', '`Kaltmiete`', 'аренда без коммунальных'],
                ['`NK`', '`Nebenkosten`', 'коммунальные: отопление, вода, мусор'],
                ['`WM`, `warm`', '`Warmmiete`', 'аренда вместе с коммунальными: KM + NK'],
                ['`EG`, `OG`', '`Erdgeschoss`, `Obergeschoss`', 'первый этаж; этаж выше (`1. OG` — второй этаж по-русски)'],
                ['`VB`', '`Verhandlungsbasis`', 'цена для торга, можно договориться'],
                ['`ca.`', '`circa`', 'примерно'],
                ['`zzgl.`', '`zuzüglich`', 'плюс, сверх этого'],
                ['`inkl.`', '`inklusive`', 'включая'],
                ['`mtl.`', '`monatlich`', 'в месяц'],
                ['`Std.`', '`Stunde`, `Stunden`', 'час, часы'],
                ['`Tel.`', '`Telefon`', 'телефон'],
                ['`Mo–Fr`, `Sa`, `So`', '`Montag bis Freitag`, `Samstag`, `Sonntag`', 'дни недели'],
                ['`m/w/d`', '`männlich/weiblich/divers`', 'вакансия для людей любого пола']
            ],
            note: '`3-Zi.-Whg., 70 m², Kü., Bad, KM 600 € zzgl. NK` — трёхкомнатная квартира, 70 м², кухня, ванная, 600 € плюс коммунальные.'
        },
        {
            type: 'table',
            head: ['Слово', 'Значение'],
            rows: [
                ['`ab sofort`', 'с этого момента, сразу'],
                ['`Teilzeit` / `Vollzeit`', 'неполный / полный рабочий день (около 40 часов в неделю)'],
                ['`Minijob`', 'подработка на несколько часов в неделю с небольшим заработком'],
                ['`Aushilfe`', 'помощник на подработке'],
                ['`Probe-`: `Probetraining`, `Probestunde`', 'пробный: бесплатно или дёшево **один раз**, чтобы попробовать'],
                ['`Nachhilfe`', 'дополнительные занятия со школьником, репетиторство'],
                ['`Flohmarkt`', 'барахолка, рынок подержанных вещей'],
                ['`kostenlos`, `gratis`, `Eintritt frei`', 'бесплатно'],
                ['`Anmeldung`', 'запись: на курс, на место на барахолке'],
                ['`möbliert`', 'с мебелью'],
                ['`Kaution`', 'залог за квартиру'],
                ['`nur Abholung`, `Selbstabholer`', 'забрать самому, доставки нет'],
                ['`zu verschenken`', 'отдам даром']
            ]
        },

        { type: 'h', text: '6. Разбор примера' },
        { type: 'ex', de: 'Ihr Sohn (7) möchte schwimmen lernen. Sie können nur am Samstag mit ihm zum Kurs gehen.', ru: 'Ваш сын (7 лет) хочет научиться плавать. Ходить с ним на курс вы можете только в субботу.' },
        {
            type: 'table',
            head: ['Буква', 'Объявление'],
            rows: [
                ['**a**', '`Schwimmkurs für Kinder von 5 bis 8 Jahren, ohne Vorkenntnisse. Montags und mittwochs 16–17 Uhr, Hallenbad Nord.`'],
                ['**b**', '`Schwimmen lernen für Erwachsene: Kurs für Nichtschwimmer, samstags 10–11 Uhr.`'],
                ['**c**', '`Kinderschwimmkurs für Kinder ab 5 Jahren, die noch nicht schwimmen können. Samstags 9–10 Uhr, 10 Termine, 90 €.`'],
                ['**d**', '`Suche Schwimmlehrer für meine Tochter (6), am liebsten samstags.`']
            ]
        },
        {
            type: 'list',
            items: [
                '**Факты.** Ребёнок семи лет; научиться плавать, то есть курс для начинающих; только суббота.',
                '**Отсев по главному факту.** Все четыре объявления про плавание, по теме не отбросить ни одно. Решают остальные факты.',
                '**a:** дети и начинающие (`ohne Vorkenntnisse`) — да, но понедельник и среда — нет.',
                '**b:** суббота — да, но курс `für Erwachsene` — нет.',
                '**d:** `Suche Schwimmlehrer` — автор сам ищет учителя, курса он не предлагает.',
                '**c:** дети с пяти лет — да; `die noch nicht schwimmen können` — это и есть «научиться плавать» — да; суббота — да. Ответ: **c**.',
                'Если бы объявления c не было, ответ был бы `x`: у a и b совпадает только часть фактов.'
            ]
        },

        { type: 'h', text: '7. Незнакомое слово' },
        { type: 'p', text: 'В объявлениях много слов, которых нет в словнике B1: названия вещей, профессий, фирм. Факты, от которых зависит ответ, экзамен даёт простыми словами, а трудные слова стоят вокруг. Поэтому сначала спросите себя: нужно ли это слово для **факта** из ситуации?' },
        {
            type: 'list',
            items: [
                'Не нужно (название фирмы, улица, `Kochnische`, `Gangschaltung`) — читайте дальше, не останавливаясь.',
                'Нужно — разберите слово на части: `Kinder|betreuung` — присмотр за детьми, `Selbst|abholer` — тот, кто забирает сам, `Nicht|schwimmer` — тот, кто не умеет плавать.',
                'В сложном слове главная часть — **последняя**: `Tischlampe` — лампа, а не стол; `Fahrradhelm` — шлем, а не велосипед. На этом строят ловушки.',
                'Числа и знаки читаются без словаря: `€`, `Std.`, `Mo–Fr`, `ab 16 Jahren`, `m²`. Часто именно они и есть факт.'
            ]
        },
        { type: 'tip', text: 'Не переводите объявление целиком. Как только все факты ситуации найдены и проверены, остальное можно не понимать — переходите к следующей ситуации.' }
    ],

    exercises: [
        // ---- слова и сокращения
        { id: 'r02-01', type: 'choice', q: 'Что значит `ab sofort` в объявлении?',
          options: ['сразу, с этого момента', 'с понедельника', 'после испытательного срока'], answer: 0,
          explain: '`ab sofort` — «начиная с сейчас»: работа или квартира свободна немедленно. В ситуации это часто пересказано: `möglichst schnell`, `so bald wie möglich`.', tag: 'lesen_wort' },
        { id: 'r02-02', type: 'choice', q: 'В ситуации сказано `stundenweise arbeiten`. Какое слово в объявлении значит то же?',
          options: ['Teilzeit', 'Vollzeit', 'Schichtdienst'], answer: 0,
          explain: '`stundenweise` — по несколько часов, то есть неполный день: `Teilzeit`. `Vollzeit` — полный день, `Schichtdienst` — работа сменами, в том числе ночью.', tag: 'lesen_wort' },
        { id: 'r02-03', type: 'choice', q: 'Что входит в `WM 650 €` в объявлении о квартире?',
          options: ['аренда вместе с отоплением, водой и другими коммунальными', 'только аренда, без коммунальных', 'залог за квартиру'], answer: 0,
          explain: '`WM` — `Warmmiete`: всё, что вы платите хозяину в месяц. Аренда без коммунальных — `KM` (`Kaltmiete`), залог — `Kaution`.', tag: 'lesen_wort' },
        { id: 'r02-04', type: 'gap', q: 'Сколько вы будете платить в месяц? Впишите число.',
          text: 'KM 480 € zzgl. 120 € NK = WM ___ €', hint: 'KM + NK', answer: ['600'],
          explain: '`zzgl.` (`zuzüglich`) — «плюс». К аренде без коммунальных (`KM`) прибавляются коммунальные (`NK`): 480 + 120 = 600 €. Это и есть `WM`.', tag: 'lesen_wort' },
        { id: 'r02-05', type: 'gap', q: 'Расшифруйте сокращения.',
          text: 'zzgl. = ___, inkl. = ___', hint: 'плюс; включая', answer: [['zuzüglich'], ['inklusive']],
          explain: '`zzgl.` — `zuzüglich` (плюс, сверх того), `inkl.` — `inklusive` (включая). `500 € inkl. NK` — коммунальные уже в цене, `500 € zzgl. NK` — коммунальные сверху.', tag: 'lesen_wort' },
        { id: 'r02-06', type: 'choice', q: 'Что значит `VB` в объявлении `Sofa, 120 € VB`?',
          options: ['о цене можно договориться', 'цена окончательная', 'доставка входит в цену'], answer: 0,
          explain: '`VB` — `Verhandlungsbasis`: 120 € — исходная цена, можно торговаться. Окончательная цена в объявлениях — `Festpreis`.', tag: 'lesen_wort' },
        { id: 'r02-07', type: 'choice', q: 'Что значит `Nachmieter gesucht`?',
          options: ['жилец съезжает и ищет того, кто въедет в квартиру после него', 'ищут соседа в общую квартиру', 'человек ищет квартиру для себя'], answer: 0,
          explain: '`Nachmieter` — следующий жилец. Объявление пишет тот, кто выезжает: если вы ищете квартиру, это предложение для вас, хотя в нём стоит `gesucht`.', tag: 'lesen_wort' },
        { id: 'r02-08', type: 'choice', q: 'В объявлении спортклуба: `Probetraining kostenlos`. Что бесплатно?',
          options: ['первая, пробная тренировка', 'все тренировки', 'тренировка перед соревнованием'], answer: 0,
          explain: 'Часть `Probe-` значит «на пробу»: `Probetraining`, `Probestunde`, `Probezeit`. Бесплатен только этот первый раз, дальше обычно платят.', tag: 'lesen_wort' },
        { id: 'r02-09', type: 'gap', q: 'Вставьте слово, которым в объявлениях пишут, что знания не нужны.',
          text: 'Keine ___ nötig: Der Kurs ist für Anfänger.', hint: 'Vor… — предварительные знания', answer: ['Vorkenntnisse'],
          explain: '`Vorkenntnisse` — то, что вы знаете заранее. `Keine Vorkenntnisse nötig` или `ohne Vorkenntnisse` — курс с нуля; в ситуации это часто `Anfängerkurs` или `noch nie gelernt`.', tag: 'lesen_wort' },
        { id: 'r02-10', type: 'build', q: 'Составьте фразу из объявления.',
          ru: 'Квартира свободна с этого момента.',
          answer: ['Die Wohnung ist ab sofort frei.', 'Ab sofort ist die Wohnung frei.', 'Die Wohnung ist frei ab sofort.'],
          explain: '`ab sofort` — «с этого момента», `frei` — свободна. Глагол `ist` стоит на втором месте. В самих объявлениях часто короче: `frei ab sofort`.', tag: 'lesen_wort' },

        // ---- кто ищет, кто предлагает
        { id: 'r02-11', type: 'choice', q: 'Какое объявление — Gesuch, то есть автор сам что-то ищет?',
          options: ['Biete Nachhilfe in Mathe.', 'Verkaufe Kinderwagen, 50 €.', 'Suche Nachhilfe in Mathe für meinen Sohn.', 'Zimmer frei ab 1. Mai.'], answer: 2,
          explain: '`Suche …` — Gesuch: автору нужна помощь. `Biete`, `Verkaufe`, `Zimmer frei` — предложения (Angebot): их автор что-то даёт.', tag: 'lesen_ads' },
        { id: 'r02-12', type: 'choice', q: 'Вы ищете квартиру. Какое объявление вам НЕ поможет?',
          options: ['Suche 2-Zi.-Whg. ab sofort.', 'Vermiete 2-Zi.-Whg. ab sofort.', 'Nachmieter für 2-Zi.-Whg. gesucht.'], answer: 0,
          explain: '`Suche …` пишет тот, кто сам ищет квартиру: он такой же, как вы. `Vermiete` — квартиру сдают, `Nachmieter gesucht` — жилец съезжает и отдаёт квартиру следующему.', tag: 'lesen_ads' },
        { id: 'r02-13', type: 'choice', q: 'Ситуация: `Sie möchten Ihr altes Fahrrad verkaufen.` Какое объявление вам подходит?',
          options: ['Verkaufe Damenfahrrad, 80 €.', 'Kaufe gebrauchte Fahrräder, auch kaputt.', 'Fahrradverleih: 10 € pro Tag.'], answer: 1,
          explain: 'Вам, продавцу, нужен покупатель: `Kaufe …` — «куплю». `Verkaufe` пишет другой продавец, а `Fahrradverleih` — прокат велосипедов.', tag: 'lesen_ads' },
        { id: 'r02-14', type: 'fix', q: 'Это объявление — предложение (Angebot). Замените одно слово, чтобы автор искал репетитора (Gesuch).',
          text: 'Biete Nachhilfe in Mathematik.', answer: ['Suche Nachhilfe in Mathematik.'],
          explain: '`Biete` — предлагаю, `Suche` — ищу. Одно слово меняет направление объявления: репетитору нужен ученик, родителям — репетитор.', tag: 'lesen_ads' },
        { id: 'r02-15', type: 'fix', q: 'Замените одно слово, чтобы из объявления «ищу» получилось объявление «продаю».',
          text: 'Suche gebrauchten Kinderwagen.', answer: ['Verkaufe gebrauchten Kinderwagen.', 'Biete gebrauchten Kinderwagen.'],
          explain: '`Suche` пишет покупатель, `Verkaufe` или `Biete` — продавец. Если вы хотите купить коляску, вам нужно объявление продавца.', tag: 'lesen_ads' },
        { id: 'r02-16', type: 'build', q: 'Составьте предложение.',
          ru: 'Я ищу работу на неполный день.',
          answer: ['Ich suche eine Stelle in Teilzeit.'],
          explain: '`in Teilzeit` — на неполный день. В объявлении этот факт может стоять иначе: `stundenweise`, `halbtags`, `20 Std./Woche`. А если так пишут в объявлении, автор сам ищет работу.', tag: 'lesen_ads' },

        // ---- факты и ловушки
        { id: 'r02-17', type: 'choice', q: 'Ситуация: `Ihre Tochter (12) möchte Gitarre lernen. Der Unterricht soll bei Ihnen zu Hause sein.` Какие факты искать?',
          options: ['уроки гитары + у вас дома', 'Ihre Tochter + möchte', 'музыкальная школа + выходные'], answer: 0,
          explain: 'Ключевые факты — что нужно (уроки гитары) и условие (дома). Слово `möchte` факта не несёт, а возраст дочери станет фактом, только если объявления различаются по возрасту. Про музыкальную школу и выходные в ситуации ничего нет.', tag: 'lesen_ads' },
        { id: 'r02-18', type: 'choice', q: 'Ситуация: `Sie haben keine Berufserfahrung.` Какая фраза вакансии значит, что вас возьмут без опыта?',
          options: ['Auch Berufseinsteiger sind willkommen.', 'Mehrjährige Berufserfahrung ist Bedingung.', 'Sie haben schon in einem Hotel gearbeitet.'], answer: 0,
          explain: '`Berufseinsteiger` — тот, кто только начинает работать. `Bedingung` — обязательное условие, а третья фраза описывает опыт, который у вас уже должен быть.', tag: 'lesen_ads' },
        { id: 'r02-19', type: 'choice', q: 'Ситуация: `Sie suchen in Kassel einen Deutschkurs am Abend.` Подходит ли это объявление?',
          text: 'Deutsch B1 am Abend: Di + Do 18–20 Uhr, Sprachinstitut Merkur, Göttingen, Bahnhofstraße 3.',
          options: ['нет: курс в другом городе', 'да: курс вечером', 'да: уровень B1 подходит всем'], answer: 0,
          explain: 'Вечер совпадает, но курс в Гёттингене, а нужен в Касселе. Это главная ловушка Teil 2: один факт совпал, другой — нет.', tag: 'lesen_ads' },
        { id: 'r02-20', type: 'choice', q: 'Ситуация: `Sie möchten regelmäßig Yoga machen und dafür nichts bezahlen.` Подходит ли это объявление?',
          text: 'Yoga für alle: Die erste Stunde ist gratis, danach 10 € pro Stunde.',
          options: ['нет: бесплатно только первое занятие', 'да: `gratis` значит бесплатно', 'да, если записаться заранее'], answer: 0,
          explain: '`gratis` относится только к первому занятию. «Регулярно и бесплатно» — это каждое занятие без платы, а здесь дальше по 10 €.', tag: 'lesen_ads' },
        { id: 'r02-21', type: 'choice', q: 'Вы проверили все восемь объявлений. В двух совпадает по одному факту из двух, остальные о другом. Что ответить?',
          options: ['x', 'объявление, где больше общих слов с ситуацией', 'первое из двух «почти подходящих»'], answer: 0,
          explain: 'Объявление подходит, только если совпали все факты. «Почти подходит» — это ловушка. Если целиком не подходит ни одно, ответ — `x`.', tag: 'lesen_ads' },
        { id: 'r02-22', type: 'order', q: 'Расставьте шаги решения Teil 2 по порядку.',
          items: [
              'Прочитать ситуацию и выделить 2–3 ключевых факта',
              'Пробежать все объявления по главному факту и отбросить лишние',
              'В оставшихся проверить остальные факты: время, цену, место, кто ищет',
              'Совпали все факты — это ответ; не подошло ни одно — x',
              'Вычеркнуть использованное объявление'
          ],
          explain: 'Сначала факты, потом быстрый отсев по главному, потом проверка деталей. Каждое объявление подходит только одной ситуации, поэтому использованное можно вычеркнуть.', tag: 'lesen_ads' }
    ],

    sets: [
        // ================= 1. Работа =================
        {
            id: 'r02-s1',
            title: 'Работа: вакансии и поиск работы',
            situation: 'Sie und Ihre Bekannten suchen Arbeit oder Mitarbeiter. Sie lesen die Stellenanzeigen in der Wochenzeitung. Welche Anzeige passt zu welcher Situation? Für eine Situation gibt es keine passende Anzeige.',
            material: [
                { kind: 'ads', ads: [
                    { letter: 'a', title: 'Restaurant „Zum Anker“', text: 'Wir suchen ab 1. November einen Koch oder eine Köchin (m/w/d) in Vollzeit. Arbeitszeit: Dienstag bis Sonntag ab 16 Uhr. Voraussetzung: abgeschlossene Ausbildung und Berufserfahrung. Bewerbung an: Hafenstraße 12 oder Tel. 0123 456789.' },
                    { letter: 'b', title: 'Malerbetrieb Kowalski', text: 'Wir haben viele Aufträge und suchen ab sofort Maler und Lackierer (m/w/d) für 40 Stunden pro Woche. Wir bieten einen unbefristeten Vertrag, gutes Gehalt und Arbeitskleidung. Rufen Sie einfach an: Mo–Fr 7–16 Uhr, Tel. 0123 456789.' },
                    { letter: 'c', title: 'Zuverlässige Bürokauffrau', text: 'Ich (35) habe zehn Jahre Erfahrung im Büro und in der Buchhaltung und suche eine Teilzeitstelle, am liebsten vormittags von 8 bis 12 Uhr. Gute PC-Kenntnisse sind vorhanden. Ich freue mich auf Ihren Anruf: Tel. 0123 456789 (ab 17 Uhr).' },
                    { letter: 'd', title: 'Kantine der Firma Hartwig', text: 'Für unsere Küche suchen wir einen Koch oder eine Köchin (m/w/d) in Teilzeit, 25 Std./Woche. Arbeitszeit: Mo–Fr 6.30–11.30 Uhr. Am Nachmittag, am Abend und am Wochenende haben Sie frei! Kontakt: Frau Lenz, Industriestraße 4, Tel. 0123 456789.' },
                    { letter: 'e', title: 'Getränkemarkt Brause', text: 'Wir suchen einen Fahrer (m/w/d) für samstags, 8–14 Uhr, als Minijob. Sie bringen Getränkekisten zu unseren Kunden. Führerschein Klasse B und Erfahrung als Fahrer sind Bedingung. Bewerbungen bitte an: Lindenweg 7, Tel. 0123 456789.' },
                    { letter: 'f', title: 'Student mit Führerschein', text: 'Ich bin 24, studiere Informatik und suche einen Nebenjob als Fahrer, am liebsten freitags oder samstags. Den Führerschein Klasse B habe ich seit sechs Jahren. Ich bin pünktlich und zuverlässig. Bitte rufen Sie mich an: Tel. 0123 456789.' },
                    { letter: 'g', title: 'Bäckerei Sonnenkorn', text: 'Wir suchen eine Aushilfe (m/w/d) für den Verkauf, samstags und sonntags von 7 bis 12 Uhr, als Minijob. Auch Anfänger sind herzlich willkommen: Wir zeigen Ihnen alles! Kommen Sie einfach vorbei: Marktplatz 3, oder rufen Sie an: 0123 456789.' },
                    { letter: 'h', title: 'Malerbetrieb Hoffmann & Sohn', text: 'Für unser Büro suchen wir ab sofort eine Bürokraft (m/w/d) in Vollzeit, 40 Std./Woche. Ihre Aufgaben: Telefon, Termine und Rechnungen. Sie haben eine kaufmännische Ausbildung und gute PC-Kenntnisse. Bewerbung bitte per Post: Gartenstraße 21.' }
                ] }
            ],
            items: [
                { id: 'r02-s1-1', q: 'Ihr Mann hat in seiner Heimat als Koch gearbeitet. Er möchte nur vormittags arbeiten, weil er nachmittags einen Deutschkurs besucht.',
                  answer: 'd', evidence: 'Mo–Fr 6.30–11.30 Uhr',
                  why: 'Факты: повар и только до обеда. В d ищут повара, а «vormittags» переодето во время работы: `Mo–Fr 6.30–11.30 Uhr`. Объявление a тоже про повара, но там полный день и работа `ab 16 Uhr`.' },
                { id: 'r02-s1-2', q: 'Sie möchten am Wochenende etwas Geld verdienen. Sie haben aber keine Berufserfahrung.',
                  answer: 'g', evidence: 'Auch Anfänger sind herzlich willkommen',
                  why: 'Факты: выходные и нет опыта. В g работа `samstags und sonntags`, а «нет опыта» пересказано: `Auch Anfänger sind herzlich willkommen`. В e тоже суббота, но опыт водителя — `Bedingung`; в a нужна `Berufserfahrung`.' },
                { id: 'r02-s1-3', q: 'Ihre Schwester hat zwei kleine Kinder. Sie sucht eine Arbeit im Büro, aber nur für ein paar Stunden am Vormittag.',
                  answer: 'x', evidence: '',
                  why: 'Факты: офис и несколько часов утром. В c совпадает всё, но его написала женщина, которая **сама ищет** такую работу. В h работа в офисе, но полный день (`in Vollzeit, 40 Std./Woche`), а в d утро и `Teilzeit`, но это кухня. Подходящего объявления нет — x.' },
                { id: 'r02-s1-4', q: 'Ihr Bruder ist Maler und hat zurzeit keine Arbeit. Er möchte möglichst schnell eine Stelle in Vollzeit finden.',
                  answer: 'b', evidence: 'ab sofort Maler und Lackierer (m/w/d) für 40 Stunden pro Woche',
                  why: 'Факты: маляр, как можно скорее, полный день. В b `ab sofort` = сразу, `40 Stunden pro Woche` = Vollzeit. В h тоже малярная фирма, `ab sofort` и `Vollzeit`, но ищут не маляра, а офисного работника (`Bürokraft`).' },
                { id: 'r02-s1-5', q: 'Sie haben einen Blumenladen. Sie suchen jemanden, der samstags mit Ihrem Lieferwagen die Blumen zu den Kunden bringt.',
                  answer: 'f', evidence: 'suche einen Nebenjob als Fahrer, am liebsten freitags oder samstags',
                  why: 'Здесь вы работодатель: вам нужен человек, который **ищет** работу водителем. Это f: студент с правами ищет подработку водителем, в том числе по субботам. Объявление e тоже про водителя по субботам, но его дал магазин, который сам ищет водителя.' }
            ],
            glossary: [
                { de: 'die Kantine', ru: 'столовая на предприятии' },
                { de: 'in Teilzeit / in Vollzeit', ru: 'на неполный / на полный рабочий день' },
                { de: 'die Voraussetzung', ru: 'обязательное условие, требование' },
                { de: 'die Bewerbung', ru: 'заявление о приёме на работу' },
                { de: 'der Auftrag', ru: 'заказ' },
                { de: 'unbefristet', ru: 'бессрочный (о договоре)' },
                { de: 'der Lackierer', ru: 'маляр-лакировщик' },
                { de: 'die Buchhaltung', ru: 'бухгалтерия' },
                { de: 'die Aushilfe', ru: 'помощник на подработке' },
                { de: 'der Minijob', ru: 'подработка на несколько часов с небольшим заработком' },
                { de: 'die Bedingung', ru: 'условие' },
                { de: 'der Nebenjob', ru: 'подработка помимо учёбы или основной работы' },
                { de: 'die Bürokraft', ru: 'офисный сотрудник' },
                { de: 'kaufmännisch', ru: 'коммерческий (о профессиональном образовании)' }
            ]
        },

        // ================= 2. Жильё =================
        {
            id: 'r02-s2',
            title: 'Жильё: комнаты, квартиры, обмен',
            situation: 'Sie und Ihre Bekannten suchen eine Wohnung oder einen Mieter. Sie lesen Anzeigen auf einem Wohnungsportal im Internet. Welche Anzeige passt zu welcher Situation? Für eine Situation gibt es keine passende Anzeige.',
            material: [
                { kind: 'ads', ads: [
                    { letter: 'a', title: 'Familienwohnung mit Balkon', text: '4-Zi.-Whg., 96 m², Wohnküche, Bad, Gäste-WC, großer Balkon, Keller. Kindergarten und Grundschule sind in der Nähe. Haustiere sind erlaubt. 1.150 € WM, frei ab 1. Dezember. Hausverwaltung Brandt, Mo–Fr 9–15 Uhr, Tel. 0123 456789.' },
                    { letter: 'b', title: 'Seniorengerechte 2-Zimmer-Wohnung', text: '2-Zi.-Whg., 61 m², 1. OG mit Aufzug, Bad ohne Stufen, Balkon, Bushaltestelle direkt vor dem Haus. Kaufpreis: 189.000 €, provisionsfrei. Besichtigung nach Vereinbarung: Immobilien Sommer, Tel. 0123 456789.' },
                    { letter: 'c', title: 'Tausche Wohnung', text: 'Biete: 1-Zi.-Whg., 34 m², Dachgeschoss (5. Stock, kein Aufzug), Kochnische, Dusche, 420 € warm. Suche: 2- bis 3-Zi.-Whg., denn bald kommt unser Baby. Wir freuen uns über Ihren Anruf: Tel. 0123 456789.' },
                    { letter: 'd', title: 'Zimmer in WG frei', text: 'Möbliertes Zimmer (16 m²) in netter 3er-WG, 3. Stock (Altbau, kein Aufzug). Bett, Schrank und Schreibtisch sind da. Frei vom 1. Oktober bis 31. März. Miete: 390 € warm, Internet inklusive. Melde dich bei Lena: 0123 456789.' },
                    { letter: 'e', title: 'Ruhiger Mieter sucht Wohnung', text: 'Ingenieur (38), Nichtraucher, keine Haustiere, sucht ab 1. November für zwölf Monate eine möblierte 1- oder 2-Zi.-Whg. Ich arbeite für ein Projekt in Ihrer Stadt. Miete bis 850 € warm. Angebote bitte an Tel. 0123 456789.' },
                    { letter: 'f', title: 'Apartment am Stadtpark', text: 'Möbl. 1-Zi.-Apartment, 28 m², 4. OG (kein Aufzug), Kochnische, Duschbad. KM 350 € zzgl. 90 € NK, Kaution: zwei Monatsmieten. Mindestmietdauer: ein Jahr. Frei ab sofort. Besichtigung nach Vereinbarung, Tel. 0123 456789.' },
                    { letter: 'g', title: 'Wohnungstausch', text: 'Biete: helle 2-Zi.-Whg., 58 m², 3. OG (ohne Aufzug), Kü., Bad, Balkon, 640 € warm. Suche: kleinere Wohnung, 1 Zimmer reicht, denn ich lebe jetzt allein und brauche nicht mehr so viel Platz. Tel. 0123 456789 (abends).' },
                    { letter: 'h', title: 'Erdgeschosswohnung mit Garten', text: 'Schöne 3-Zi.-Whg., 72 m², EG, Kü., Bad, kleiner Garten. 890 € WM. Ideal für ruhige Mieter. Leider keine Haustiere! Frei ab 1. November. Anfragen bitte per SMS an 0123 456789.' }
                ] }
            ],
            items: [
                { id: 'r02-s2-1', q: 'Ein Kollege arbeitet ab Oktober sechs Monate in Ihrer Stadt. Er sucht ein möbliertes Zimmer und möchte mit allen Nebenkosten nicht mehr als 400 Euro im Monat bezahlen.',
                  answer: 'd', evidence: 'Miete: 390 € warm',
                  why: 'Факты: мебель, полгода с октября, не дороже 400 € со всеми расходами. В d `Möbliertes Zimmer`, с 1 октября по 31 марта — ровно шесть месяцев, и `390 € warm` — уже с коммунальными. Апартамент f тоже с мебелью, но `350 € zzgl. 90 € NK` — это 440 €, и снять его можно минимум на год.' },
                { id: 'r02-s2-2', q: 'Sie suchen mit Ihrer Familie eine Wohnung mit mindestens drei Zimmern. Sie haben einen kleinen Hund.',
                  answer: 'a', evidence: 'Haustiere sind erlaubt',
                  why: 'Факты: от трёх комнат и собака. В a четыре комнаты (`4-Zi.-Whg.`), а собака — это домашнее животное: `Haustiere sind erlaubt`. В h три комнаты, но `Leider keine Haustiere!`' },
                { id: 'r02-s2-3', q: 'Sie und Ihr Mann wohnen in einer 1-Zimmer-Wohnung und bekommen bald ein Baby. Sie möchten Ihre Wohnung gegen eine größere tauschen.',
                  answer: 'g', evidence: 'Suche: kleinere Wohnung, 1 Zimmer reicht',
                  why: 'Обмен работает, только если каждый получает то, что ищет. У вас одна комната, нужна больше. В g предлагают две комнаты и ищут меньшую: `1 Zimmer reicht`. Объявление c написали люди в той же ситуации, что и вы: у них тоже одна комната и тоже скоро ребёнок.' },
                { id: 'r02-s2-4', q: 'Sie arbeiten ab November ein Jahr im Ausland. In dieser Zeit möchten Sie Ihre möblierte 2-Zimmer-Wohnung vermieten.',
                  answer: 'e', evidence: 'sucht ab 1. November für zwölf Monate eine möblierte 1- oder 2-Zi.-Whg.',
                  why: 'Здесь вы сдаёте квартиру, значит, нужен тот, кто жильё **ищет**. Это e: с 1 ноября `für zwölf Monate` (год) ищут квартиру с мебелью на одну-две комнаты. Остальные объявления сами предлагают жильё.' },
                { id: 'r02-s2-5', q: 'Ihre Mutter möchte eine 1- oder 2-Zimmer-Wohnung mieten. Sie kann keine Treppen mehr steigen.',
                  answer: 'x', evidence: '',
                  why: 'Факты: одна-две комнаты, снять, без лестниц. В b две комнаты и лифт, но квартиру продают (`Kaufpreis`), а не сдают. В h первый этаж (`EG`), но три комнаты, а в f одна комната, но `4. OG (kein Aufzug)`. Подходящего объявления нет — x.' }
            ],
            glossary: [
                { de: 'die WG (Wohngemeinschaft)', ru: 'квартира, где вместе живут несколько человек' },
                { de: 'möbliert (möbl.)', ru: 'с мебелью' },
                { de: 'warm, die Warmmiete (WM)', ru: 'аренда вместе с отоплением и коммунальными' },
                { de: 'die Kaltmiete (KM)', ru: 'аренда без коммунальных' },
                { de: 'die Nebenkosten (NK)', ru: 'коммунальные расходы' },
                { de: 'die Kaution', ru: 'залог' },
                { de: 'die Mindestmietdauer', ru: 'минимальный срок аренды' },
                { de: 'das Erdgeschoss (EG)', ru: 'первый этаж' },
                { de: 'das Obergeschoss (OG)', ru: 'этаж выше первого: 1. OG — второй этаж по-русски' },
                { de: 'der Aufzug', ru: 'лифт' },
                { de: 'seniorengerecht', ru: 'удобный для пожилых людей' },
                { de: 'der Kaufpreis', ru: 'цена при покупке' },
                { de: 'provisionsfrei', ru: 'без комиссии маклеру' },
                { de: 'der Tausch', ru: 'обмен' }
            ]
        },

        // ================= 3. Курсы =================
        {
            id: 'r02-s3',
            title: 'Курсы: язык, компьютер, подготовка к экзамену',
            situation: 'Sie und Ihre Bekannten möchten einen Kurs besuchen. Sie lesen Anzeigen in der Stadtteilzeitung. Welche Anzeige passt zu welcher Situation? Für eine Situation gibt es keine passende Anzeige.',
            material: [
                { kind: 'ads', ads: [
                    { letter: 'a', title: 'Computer für Einsteiger', text: 'Sie haben noch nie am Computer gearbeitet? In unserem Kurs lernen Sie Schritt für Schritt: Maus und Tastatur, Internet, E-Mails schreiben. Keine Vorkenntnisse nötig! 8 Termine, montags und mittwochs 18–20 Uhr, 96 €. Bildungszentrum Ost, Bahnhofstraße 5, Tel. 0123 456789.' },
                    { letter: 'b', title: 'Erste Hilfe für den Führerschein', text: 'Sie brauchen für den Führerschein einen Erste-Hilfe-Kurs? Bei uns schaffen Sie ihn an einem Tag: jeden Samstag 8.30–16.30 Uhr, 45 €. Die Bescheinigung bekommen Sie sofort. Rettungsdienst Nord, Parkallee 9, Anmeldung unter Tel. 0123 456789.' },
                    { letter: 'c', title: 'Volkshochschule – Deutsch B1', text: 'Neuer Kurs ab 1. Oktober, Mo–Fr 8.30–12 Uhr. Während des Unterrichts spielen Ihre Kinder (1 bis 6 Jahre) in unserem Kinderzimmer, eine Erzieherin passt auf sie auf. Das kostet nichts extra. Anmeldung: Mo–Do 9–12 Uhr, Zimmer 104, Tel. 0123 456789.' },
                    { letter: 'd', title: 'Erste Hilfe am Kind', text: 'Was tun, wenn das Baby hohes Fieber hat oder wenn sich ein Kind verletzt? Kurs für Eltern, Großeltern und Babysitter, mittwochs 18–21 Uhr, 35 €. Achtung: Dieser Kurs gilt nicht für den Führerschein. Familienzentrum Lindenhof, Tel. 0123 456789.' },
                    { letter: 'e', title: 'Sprachschule Linguaplus', text: 'Vorbereitung auf den DTZ: vier Wochen, Mo–Do 17.30–20.30 Uhr. Kleine Gruppen (höchstens 10 Personen), erfahrene Lehrerinnen und ein Modelltest am Ende. 290 €. Information und Anmeldung: Mo–Fr 10–18 Uhr, Tel. 0123 456789.' },
                    { letter: 'f', title: 'Word und Excel – Aufbaukurs', text: 'Sie kennen sich mit dem Computer schon aus und möchten Briefe und Tabellen professionell gestalten? Dieser Kurs ist für Teilnehmer mit Grundkenntnissen. 5 Termine, samstags 9–13 Uhr, 120 €. Bildungszentrum Ost, Bahnhofstraße 5, Tel. 0123 456789.' },
                    { letter: 'g', title: 'Deutsch für Frauen', text: 'Treffen, sprechen, lernen: Deutschkurs A2/B1 nur für Frauen, dienstags und donnerstags 15–17 Uhr im Familienzentrum Lindenhof. Für Kinder ab einem Jahr gibt es eine Betreuung. Kosten: 2 € pro Termin. Information: Frau Yilmaz, Tel. 0123 456789.' },
                    { letter: 'h', title: 'Fit für den DTZ', text: 'Intensives Prüfungstraining für den DTZ (A2–B1): Wir üben alle Teile der Prüfung – Hören, Lesen, Schreiben und Sprechen. Zwei Wochenenden, jeweils Sa und So 9–15 Uhr, 180 €. Sprachschule Wortwerk, Kaiserstraße 18, Tel. 0123 456789.' }
                ] }
            ],
            items: [
                { id: 'r02-s3-1', q: 'Ihr Nachbar hat noch nie mit einem Computer gearbeitet und möchte es jetzt lernen. Er hat aber nur samstags Zeit.',
                  answer: 'x', evidence: '',
                  why: 'Факты: компьютер с нуля и только суббота. Курс a как раз для тех, кто `noch nie am Computer gearbeitet`, но по понедельникам и средам. В f суббота подходит, но курс `für Teilnehmer mit Grundkenntnissen`, не для начинающих; в b суббота, но это первая помощь. Подходящего объявления нет — x.' },
                { id: 'r02-s3-2', q: 'Sie möchten vormittags einen Deutschkurs besuchen. Ihre Tochter ist zwei Jahre alt und braucht in dieser Zeit eine Betreuung.',
                  answer: 'c', evidence: 'eine Erzieherin passt auf sie auf',
                  why: 'Факты: немецкий, утром, присмотр за ребёнком двух лет. В c занятия `Mo–Fr 8.30–12 Uhr`, а «Betreuung» пересказана: дети от года до шести играют в детской комнате, `eine Erzieherin passt auf sie auf`. В g присмотр тоже есть, но занятия днём, с 15 до 17.' },
                { id: 'r02-s3-3', q: 'Sie möchten sich auf den Deutsch-Test für Zuwanderer vorbereiten. Von Montag bis Freitag arbeiten Sie, Zeit haben Sie nur am Wochenende.',
                  answer: 'h', evidence: 'Zwei Wochenenden, jeweils Sa und So 9–15 Uhr',
                  why: 'Факты: подготовка к экзамену и только выходные. `Deutsch-Test für Zuwanderer` в объявлениях сокращён до `DTZ`. В h тренировка к экзамену по субботам и воскресеньям. В e тоже подготовка к DTZ, но с понедельника по четверг вечером.' },
                { id: 'r02-s3-4', q: 'Ihre Kollegin hat schon einen Computerkurs für Anfänger gemacht. Jetzt möchte sie lernen, wie man mit Word und Excel arbeitet.',
                  answer: 'f', evidence: 'Dieser Kurs ist für Teilnehmer mit Grundkenntnissen.',
                  why: 'Факты: курс для начинающих уже пройден, нужны Word и Excel. В f `Aufbaukurs` — следующая ступень, `für Teilnehmer mit Grundkenntnissen`. Курс a — для тех, кто садится за компьютер впервые: коллеге он уже не нужен.' },
                { id: 'r02-s3-5', q: 'Sie machen gerade den Führerschein und brauchen noch einen Kurs in Erster Hilfe. Sie möchten dafür nicht mehr als 50 Euro bezahlen.',
                  answer: 'b', evidence: 'Erste Hilfe für den Führerschein',
                  why: 'Факты: первая помощь для водительских прав и не дороже 50 €. Курс b сделан именно для прав и стоит 45 €. Курс d дешевле (35 €), но он про детей и `gilt nicht für den Führerschein` — для прав не засчитывается.' }
            ],
            glossary: [
                { de: 'der Einsteiger', ru: 'начинающий' },
                { de: 'die Vorkenntnisse', ru: 'предварительные знания' },
                { de: 'die Grundkenntnisse', ru: 'базовые знания' },
                { de: 'der Aufbaukurs', ru: 'курс следующего уровня' },
                { de: 'der Termin', ru: 'здесь: занятие' },
                { de: 'gestalten', ru: 'оформлять' },
                { de: 'die Volkshochschule', ru: 'городские курсы для взрослых' },
                { de: 'die Erzieherin', ru: 'воспитательница' },
                { de: 'die Betreuung', ru: 'присмотр (за детьми)' },
                { de: 'die Bescheinigung', ru: 'справка, свидетельство' },
                { de: 'gelten für', ru: 'действовать, засчитываться для' },
                { de: 'jeweils', ru: 'каждый раз' },
                { de: 'die Anmeldung', ru: 'запись (на курс)' }
            ]
        },

        // ================= 4. Купить и продать =================
        {
            id: 'r02-s4',
            title: 'Купить и продать: вещи, мебель, барахолка',
            situation: 'Sie und Ihre Bekannten möchten etwas kaufen, verkaufen oder verschenken. Sie lesen die Kleinanzeigen im Stadtanzeiger. Welche Anzeige passt zu welcher Situation? Für eine Situation gibt es keine passende Anzeige.',
            material: [
                { kind: 'ads', ads: [
                    { letter: 'a', title: 'Kinderfahrrad 20 Zoll', text: 'Rotes Kinderfahrrad mit Licht und Klingel, für Kinder von 6 bis 9 Jahren. Nur ein Jahr gefahren, wie neu. Preis: 85 €, Festpreis. Abholung in der Gartenstadt, Tel. 0123 456789 (nach 18 Uhr).' },
                    { letter: 'b', title: 'Schreibtisch für Schulkinder', text: 'Verkaufe Kinderschreibtisch, weiß, 90 × 60 cm, höhenverstellbar, mit Schublade. Sehr guter Zustand. Preis: 40 €. Nur Abholung: Rosenweg 14, Tel. 0123 456789.' },
                    { letter: 'c', title: 'Waschmaschine günstig', text: 'Verkaufe meine Waschmaschine (6 kg, 5 Jahre alt), sie funktioniert einwandfrei. Preis: 90 €. Nur für Selbstabholer: 4. Stock ohne Aufzug, bitte bringen Sie eine zweite Person mit. Tel. 0123 456789.' },
                    { letter: 'd', title: 'Verein „Zweite Chance“', text: 'Ihre Möbel sind noch gut, aber Sie brauchen sie nicht mehr? Wir holen Schränke, Tische, Betten und Sofas kostenlos bei Ihnen ab. Ihre Spende hilft Menschen in unserer Stadt. Termin vereinbaren: Mo–Fr 9–16 Uhr, Tel. 0123 456789.' },
                    { letter: 'e', title: 'Fahrrad gesucht', text: 'Für meinen Sohn (7) suche ich ein gebrauchtes Kinderfahrrad, 20 Zoll, gern mit Gangschaltung. Ich zahle bis 50 €. Bitte schicken Sie mir ein Foto per WhatsApp: 0123 456789.' },
                    { letter: 'f', title: 'Kinderflohmarkt in der Grundschule am Park', text: 'Jeden ersten Sonntag im Monat, 10–14 Uhr, in der Turnhalle. Hier verkaufen Eltern Kinderkleidung, Spielzeug und Bücher. Einen Tisch bekommen Sie für 6 €. Anmeldung für Verkäufer bis Freitag vorher: Tel. 0123 456789.' },
                    { letter: 'g', title: 'Zu verschenken', text: 'Schreibtischstuhl für Kinder, blau, höhenverstellbar, ein paar Kratzer, sonst gut. Kostenlos, bitte bis Samstag abholen! Familie Berger, Ahornstraße 2, Tel. 0123 456789.' },
                    { letter: 'h', title: 'Waschmaschine, fast neu', text: 'Verkaufe Waschmaschine, 7 kg, erst zwei Jahre alt, wegen Umzug. 160 € VB. Ich bringe die Maschine gern zu Ihnen nach Hause und schließe sie an (im Stadtgebiet kostenlos). Tel. 0123 456789, auch am Wochenende.' }
                ] }
            ],
            items: [
                { id: 'r02-s4-1', q: 'Sie brauchen eine Waschmaschine. Sie haben kein Auto, deshalb soll der Verkäufer die Maschine liefern.',
                  answer: 'h', evidence: 'Ich bringe die Maschine gern zu Ihnen nach Hause',
                  why: 'Факты: стиральная машина и доставка. «liefern» в h пересказано: `Ich bringe die Maschine gern zu Ihnen nach Hause`. Машина в c дешевле, но `Nur für Selbstabholer` — забирать самому, да ещё с четвёртого этажа без лифта.' },
                { id: 'r02-s4-2', q: 'Ihr Sohn kommt bald in die Schule und braucht einen Schreibtisch. Der Tisch darf höchstens 50 Euro kosten.',
                  answer: 'b', evidence: 'Verkaufe Kinderschreibtisch',
                  why: 'Факты: письменный стол и не дороже 50 €. В b `Kinderschreibtisch` за 40 €. В g отдают даром, но не стол, а `Schreibtischstuhl` — стул к столу: в сложном слове главная часть последняя.' },
                { id: 'r02-s4-3', q: 'Ihre Kinder brauchen ihre alte Kleidung und viele Spielsachen nicht mehr. Sie möchten alles an einem Sonntag selbst verkaufen.',
                  answer: 'f', evidence: 'Hier verkaufen Eltern Kinderkleidung, Spielzeug und Bücher.',
                  why: 'Факты: продать детские вещи самим, в воскресенье. В f детская барахолка `Jeden ersten Sonntag im Monat`, продают сами родители, стол стоит 6 €. Объединение d бесплатно забирает только мебель — продать там ничего нельзя.' },
                { id: 'r02-s4-4', q: 'Ihre Tochter ist sieben Jahre alt und braucht ein Fahrrad. Sie möchten ein gebrauchtes Fahrrad für höchstens 50 Euro kaufen.',
                  answer: 'x', evidence: '',
                  why: 'Факты: детский велосипед, не дороже 50 €. В a велосипед для 6–9 лет, но `85 €, Festpreis` — торга не будет. В e есть и велосипед, и «до 50 €», но автор сам **ищет** велосипед для сына. Подходящего объявления нет — x.' },
                { id: 'r02-s4-5', q: 'Sie möchten Ihren Kleiderschrank und Ihr Sofa verschenken. Beide sind noch gut, aber Sie können sie nicht selbst transportieren.',
                  answer: 'd', evidence: 'Wir holen Schränke, Tische, Betten und Sofas kostenlos bei Ihnen ab.',
                  why: 'Факты: отдать мебель даром и не везти самому. В d `Wir holen … kostenlos bei Ihnen ab` — приедут и заберут бесплатно. В g тоже `Zu verschenken`, но там отдают свою вещь, а вам нужен тот, кто возьмёт.' }
            ],
            glossary: [
                { de: 'der Zoll', ru: 'дюйм (размер колеса)' },
                { de: 'der Festpreis', ru: 'твёрдая цена, без торга' },
                { de: 'VB (Verhandlungsbasis)', ru: 'цену можно обсудить' },
                { de: 'höhenverstellbar', ru: 'регулируется по высоте' },
                { de: 'der Zustand', ru: 'состояние' },
                { de: 'der Selbstabholer', ru: 'покупатель, который забирает вещь сам' },
                { de: 'einwandfrei', ru: 'безупречно, без неполадок' },
                { de: 'anschließen', ru: 'подключить' },
                { de: 'die Spende', ru: 'пожертвование, дар' },
                { de: 'die Gangschaltung', ru: 'переключение скоростей' },
                { de: 'der Flohmarkt', ru: 'барахолка' },
                { de: 'zu verschenken', ru: 'отдам даром' },
                { de: 'der Kratzer', ru: 'царапина' }
            ]
        },

        // ================= 5. Услуги =================
        {
            id: 'r02-s5',
            title: 'Услуги: переезд, ремонт, няня, репетитор',
            situation: 'Sie und Ihre Bekannten brauchen Hilfe im Alltag. Sie lesen Anzeigen an der Pinnwand im Supermarkt und in der Zeitung. Welche Anzeige passt zu welcher Situation? Für eine Situation gibt es keine passende Anzeige.',
            material: [
                { kind: 'ads', ads: [
                    { letter: 'a', title: 'Nachhilfe in Englisch', text: 'Ich studiere Englisch und Französisch auf Lehramt und gebe Nachhilfe für die Klassen 5 bis 10. Ich erkläre geduldig und übe mit Ihrem Kind für die nächste Klassenarbeit. 12 € pro Stunde, gern auch bei Ihnen zu Hause. Tel. 0123 456789.' },
                    { letter: 'b', title: 'Babysitterin gesucht', text: 'Wir, Familie Roth, suchen eine liebe Babysitterin für unsere Zwillinge (5 Jahre), Mo–Fr 14–18 Uhr. Sie holen die Kinder vom Kindergarten ab und spielen mit ihnen. Wir zahlen 13 € pro Stunde. Tel. 0123 456789.' },
                    { letter: 'c', title: 'Hausgeräte-Service Becker', text: 'Kühlschrank, Waschmaschine oder Herd kaputt? Wir reparieren alle großen Hausgeräte direkt bei Ihnen zu Hause. Mo–Sa 8–18 Uhr. Anfahrt im Stadtgebiet: 25 €. Rufen Sie an: 0123 456789.' },
                    { letter: 'd', title: 'Autovermietung Stern', text: 'Transporter zu vermieten: 3,5 t, ideal für Umzüge, Führerschein Klasse B genügt. 59 € pro Tag, Wochenende (Sa und So) 99 €. Abholung und Rückgabe Mo–Sa 7–19 Uhr, Industriestraße 30, Tel. 0123 456789.' },
                    { letter: 'e', title: 'Erfahrene Babysitterin', text: 'Ich bin Studentin (22, Pädagogik) und habe abends und am Wochenende Zeit für Ihre Kinder. Ich habe Erfahrung mit Kindern von 1 bis 10 Jahren. Einen Erste-Hilfe-Kurs habe ich auch gemacht. 11 € pro Stunde. Sofia, Tel. 0123 456789.' },
                    { letter: 'f', title: 'Reparatur-Café im Nachbarschaftshaus', text: 'Ihr Toaster, Ihre Lampe oder Ihr Radio ist kaputt? Jeden Dienstag 17–20 Uhr reparieren Ehrenamtliche kleine Elektrogeräte zusammen mit Ihnen. Bringen Sie Ihr Gerät einfach mit! Die Reparatur ist kostenlos, wir freuen uns über eine Spende.' },
                    { letter: 'g', title: 'Umzüge Kaya', text: 'Wir bringen Ihre Möbel sicher in die neue Wohnung: Transporter mit Fahrer und zwei Helfern, 79 € pro Stunde. Wir arbeiten Mo–Sa, auch früh am Morgen. Kostenloses Angebot nach Besichtigung. Tel. 0123 456789.' },
                    { letter: 'h', title: 'Lernstudio Lernfix', text: 'Nachhilfe in Mathe, Deutsch und Englisch für alle Klassen. Einzelunterricht: 28 € pro Stunde, kleine Gruppen (bis 4 Schüler): 18 € pro Stunde. Die erste Probestunde ist kostenlos! Unterricht in unseren Räumen, Schillerplatz 2, Mo–Fr 14–19 Uhr.' }
                ] }
            ],
            items: [
                { id: 'r02-s5-1', q: 'Sie ziehen am Samstag in eine neue Wohnung. Sie haben keinen Führerschein und brauchen Leute, die Ihre Möbel transportieren.',
                  answer: 'g', evidence: 'Transporter mit Fahrer und zwei Helfern',
                  why: 'Факты: суббота, нет прав, нужны люди с машиной. В g фургон `mit Fahrer und zwei Helfern`, работают `Mo–Sa`. В d фургон и суббота тоже есть, но фургон только сдают — вести его придётся самому, а прав нет.' },
                { id: 'r02-s5-2', q: 'Sie suchen eine Babysitterin für Ihren Sohn (4). Sie soll ihn von Montag bis Freitag nachmittags vom Kindergarten abholen.',
                  answer: 'x', evidence: '',
                  why: 'Факты: няня по будням после обеда, забирать из садика. В e няня есть, но свободна только `abends und am Wochenende`. В b совпадает почти всё — будни, после обеда, садик, — но это семья, которая **сама ищет** няню. Подходящего объявления нет — x.' },
                { id: 'r02-s5-3', q: 'Sie möchten am Freitagabend mit Ihrem Mann ins Kino gehen. Sie suchen jemanden, der in dieser Zeit auf Ihre Kinder aufpasst.',
                  answer: 'e', evidence: 'habe abends und am Wochenende Zeit für Ihre Kinder',
                  why: 'Факты: присмотр за детьми вечером в пятницу. В e студентка предлагает себя как няню и свободна `abends und am Wochenende`. Объявление b тоже про няню, но его дала семья, которая сама ищет няню на будние дни.' },
                { id: 'r02-s5-4', q: 'Ihre Tochter geht in die 7. Klasse und hat Probleme in Englisch. Die Nachhilfe soll nicht mehr als 15 Euro pro Stunde kosten.',
                  answer: 'a', evidence: '12 € pro Stunde',
                  why: 'Факты: английский, 7-й класс, не дороже 15 € в час. В a английский для классов 5–10 за `12 € pro Stunde`. В h английский тоже есть, но час стоит 18 или 28 €; бесплатна только первая пробная (`Probestunde`).' },
                { id: 'r02-s5-5', q: 'Ihr Kühlschrank ist kaputt. Sie können ihn nicht selbst in eine Werkstatt bringen.',
                  answer: 'c', evidence: 'direkt bei Ihnen zu Hause',
                  why: 'Факты: холодильник и ремонт без доставки в мастерскую. В c `Kühlschrank` и ремонт `direkt bei Ihnen zu Hause`. В f ремонт бесплатный, но только мелких приборов, и их надо принести самому: `Bringen Sie Ihr Gerät einfach mit!`' }
            ],
            glossary: [
                { de: 'der Transporter', ru: 'грузовой фургон' },
                { de: 'genügen', ru: 'хватать, быть достаточным' },
                { de: 'die Rückgabe', ru: 'возврат' },
                { de: 'die Besichtigung', ru: 'осмотр (квартиры, вещей)' },
                { de: 'das Hausgerät', ru: 'бытовой прибор' },
                { de: 'die Anfahrt', ru: 'выезд мастера, дорога к клиенту' },
                { de: 'der Ehrenamtliche', ru: 'волонтёр, работает бесплатно' },
                { de: 'auf Lehramt studieren', ru: 'учиться на учителя' },
                { de: 'die Klassenarbeit', ru: 'контрольная работа в школе' },
                { de: 'der Einzelunterricht', ru: 'индивидуальные занятия' },
                { de: 'die Probestunde', ru: 'пробное занятие' },
                { de: 'die Zwillinge', ru: 'близнецы' },
                { de: 'aufpassen auf', ru: 'присматривать за' }
            ]
        },

        // ================= 6. Досуг =================
        {
            id: 'r02-s6',
            title: 'Досуг: клубы, спорт, праздники',
            situation: 'Sie und Ihre Bekannten suchen etwas für die Freizeit. Sie lesen Anzeigen im Stadtmagazin. Welche Anzeige passt zu welcher Situation? Für eine Situation gibt es keine passende Anzeige.',
            material: [
                { kind: 'ads', ads: [
                    { letter: 'a', title: 'Seniorentreff im Nachbarschaftshaus', text: 'Jeden Donnerstag 14–17 Uhr: Bei Kaffee und Kuchen spielen wir Karten und Brettspiele und erzählen viel. Neue Gäste sind herzlich willkommen, kommen Sie einfach vorbei! Kaffee und Kuchen: 2 €. Gartenweg 8, Information: Frau Albers, Tel. 0123 456789.' },
                    { letter: 'b', title: 'FitWerk – Ihr Fitnessstudio', text: 'Über 100 Geräte, Sauna und Kurse, Mo–So 6–23 Uhr geöffnet. Jetzt nur 29,90 € mtl., Vertragslaufzeit 24 Monate. Die Anmeldegebühr sparen Sie, wenn Sie bis Ende Oktober Mitglied werden. Lindenallee 40, Tel. 0123 456789.' },
                    { letter: 'c', title: 'FC Blau-Weiß 1921', text: 'Unsere Fußballjugend sucht Verstärkung! Jungen und Mädchen von 8 bis 10 Jahren trainieren dienstags und donnerstags 16.30–18 Uhr auf dem Sportplatz am Wald. Komm doch zu einem kostenlosen Probetraining! Danach Mitgliedsbeitrag: 5 € im Monat. Trainer Herr Wolf, Tel. 0123 456789.' },
                    { letter: 'd', title: 'Gospelkonzert in der Pauluskirche', text: 'Der Gospelchor „Happy Voices“ singt am Samstag um 19 Uhr. Freuen Sie sich auf einen Abend voller Musik! Eintritt: 12 €, Kinder bis 12 Jahre 6 €. Karten an der Abendkasse und im Gemeindebüro, Tel. 0123 456789.' },
                    { letter: 'e', title: 'Herbstfest im Stadtpark', text: 'Samstag und Sonntag, 11–18 Uhr: Live-Musik, Flohmarkt, Spiele für Kinder und Kinderschminken. Essen und Getränke gibt es an vielen Ständen. Der Eintritt ist frei! Veranstalter: Bürgerverein Stadtmitte, Tel. 0123 456789.' },
                    { letter: 'f', title: 'Chor „Stimmen der Welt“', text: 'Sie singen gern? Unser internationaler Chor sucht neue Sängerinnen und Sänger. Notenkenntnisse sind nicht nötig. Wir proben jeden Mittwoch von 19.30 bis 21 Uhr im Gemeindehaus, Kirchstraße 3. Kommen Sie einfach vorbei! Information: Tel. 0123 456789.' },
                    { letter: 'g', title: 'Freizeitfußball für Erwachsene', text: 'Unsere Hobbymannschaft (Männer und Frauen ab 30) sucht neue Spielerinnen und Spieler! Wir trainieren jeden Freitag um 19 Uhr in der Sporthalle Nord. Das erste Training ist kostenlos, danach zahlen Sie 8 € im Monat. Kontakt: Markus, Tel. 0123 456789.' },
                    { letter: 'h', title: 'Lauftreff Stadtpark', text: 'Wir laufen jeden Sonntag um 9 Uhr und jeden Mittwoch um 18 Uhr, 5 oder 10 km. Anfänger sind willkommen! Die Teilnahme ist kostenlos, eine Anmeldung ist nicht nötig. Für alle ab 16 Jahren. Treffpunkt: Haupteingang Stadtpark.' }
                ] }
            ],
            items: [
                { id: 'r02-s6-1', q: 'Ihr Sohn ist neun Jahre alt und möchte Fußball spielen. Bevor Sie ihn im Verein anmelden, soll er einmal ohne Kosten mittrainieren.',
                  answer: 'c', evidence: 'Komm doch zu einem kostenlosen Probetraining!',
                  why: 'Факты: мальчик девяти лет, футбол, сначала попробовать бесплатно. В c команда для детей 8–10 лет и `kostenlosen Probetraining` — бесплатная пробная тренировка. В g первая тренировка тоже бесплатная, но команда для взрослых `ab 30`.' },
                { id: 'r02-s6-2', q: 'Sie möchten regelmäßig Sport machen, aber kein Geld dafür ausgeben. Einen Vertrag möchten Sie auch nicht unterschreiben.',
                  answer: 'h', evidence: 'Die Teilnahme ist kostenlos, eine Anmeldung ist nicht nötig.',
                  why: 'Факты: спорт регулярно, бесплатно, без договора. В h бег два раза в неделю, `Die Teilnahme ist kostenlos`, записываться не надо. В b нужен договор на 24 месяца по 29,90 €, а в g бесплатна только первая тренировка.' },
                { id: 'r02-s6-3', q: 'Sie singen gern und möchten selbst in einem Chor mitsingen. Sie haben aber nur am Wochenende Zeit.',
                  answer: 'x', evidence: '',
                  why: 'Факты: петь самому в хоре и только выходные. Хор f ищет певцов, но репетиции `jeden Mittwoch`. В d суббота и хор, но это концерт: там слушают, а не поют. Подходящего объявления нет — x.' },
                { id: 'r02-s6-4', q: 'Sie möchten am Sonntag mit Ihren Kindern (3 und 5 Jahre) etwas unternehmen. Sie möchten keinen Eintritt bezahlen.',
                  answer: 'e', evidence: 'Der Eintritt ist frei!',
                  why: 'Факты: воскресенье, маленькие дети, без платы за вход. В e праздник в субботу и воскресенье, игры для детей и `Der Eintritt ist frei!`. В h по воскресеньям тоже бесплатно, но бег `für alle ab 16 Jahren`, а концерт d — в субботу и платный.' },
                { id: 'r02-s6-5', q: 'Ihre Mutter (68) wohnt seit Kurzem in Ihrer Stadt und möchte neue Leute kennenlernen. Sie spielt sehr gern Karten.',
                  answer: 'a', evidence: 'spielen wir Karten und Brettspiele',
                  why: 'Факты: познакомиться с людьми и карты. В a по четвергам встречаются за кофе, `spielen wir Karten und Brettspiele`, а новым гостям рады — это и есть «познакомиться». В хоре f тоже можно найти знакомых, но там поют, а не играют.' }
            ],
            glossary: [
                { de: 'der Verein', ru: 'клуб, общество' },
                { de: 'die Verstärkung', ru: 'пополнение (новые игроки)' },
                { de: 'das Probetraining', ru: 'пробная тренировка' },
                { de: 'der Mitgliedsbeitrag', ru: 'членский взнос' },
                { de: 'die Vertragslaufzeit', ru: 'срок договора' },
                { de: 'die Anmeldegebühr', ru: 'плата за запись' },
                { de: 'die Hobbymannschaft', ru: 'любительская команда' },
                { de: 'proben', ru: 'репетировать' },
                { de: 'die Notenkenntnisse', ru: 'знание нот' },
                { de: 'die Abendkasse', ru: 'касса перед концертом' },
                { de: 'der Eintritt', ru: 'вход, плата за вход' },
                { de: 'die Teilnahme', ru: 'участие' },
                { de: 'das Brettspiel', ru: 'настольная игра' },
                { de: 'der Treffpunkt', ru: 'место встречи' }
            ]
        }
    ]
};
