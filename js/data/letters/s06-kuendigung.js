/**
 * Ситуация 6. Расторжение договора и просьба подтвердить.
 *
 * Два задания в стиле DTZ: расторжение договора с фитнес-клубом и договора
 * аренды квартиры с вопросом о залоге. Письмо короткое, деловое, с точными датами.
 */

export default {
    id: 's06',
    order: 6,
    title: 'Расторжение договора и просьба подтвердить',
    short: 'Расторжение договора',
    register: 'formell',
    intro: 'Вы расторгаете договор: мобильную связь, фитнес-клуб, подписку или аренду квартиры. Письмо короткое и деловое: номер клиента, ясная фраза `Hiermit kündige ich … zum …`, причина и просьба письменно подтвердить расторжение. Если речь о квартире, спросите про залог (`Kaution`) и оставьте контакты для ответа.',

    phrases: [
        { de: 'Sehr geehrte Damen und Herren,', ru: 'Уважаемые дамы и господа, — в фирму, если имя сотрудника неизвестно', use: 'Anrede' },
        { de: 'Sehr geehrte Frau …,', ru: 'Уважаемая госпожа …,', use: 'Anrede' },
        { de: 'Lieber Herr …,', ru: 'Дорогой господин …, — хозяину квартиры, с которым вы давно в тёплых отношениях', use: 'Anrede' },
        { de: 'Hiermit kündige ich meinen Vertrag zum 31. Dezember.', ru: 'Настоящим расторгаю свой договор к 31 декабря.', use: 'Einleitung' },
        { de: 'Hiermit kündige ich den Mietvertrag zum nächstmöglichen Termin.', ru: 'Настоящим расторгаю договор аренды к ближайшему возможному сроку.', use: 'Einleitung' },
        { de: 'Meine Kundennummer ist …', ru: 'Мой номер клиента — …', use: 'Information' },
        { de: 'Ich ziehe in eine andere Stadt um.', ru: 'Я переезжаю в другой город.', use: 'Grund' },
        { de: 'Leider habe ich meine Arbeit verloren.', ru: 'К сожалению, я потерял работу.', use: 'Grund' },
        { de: 'Bitte bestätigen Sie mir die Kündigung schriftlich.', ru: 'Пожалуйста, подтвердите мне расторжение письменно.', use: 'Bitte' },
        { de: 'Könnten Sie mir bitte sagen, wann ich die Kaution zurückbekomme?', ru: 'Не могли бы вы сказать, когда я получу обратно залог?', use: 'Frage' },
        { de: 'Außerdem möchte ich wissen, ob ich noch etwas bezahlen muss.', ru: 'Кроме того, я хотел бы знать, нужно ли мне ещё что-то платить.', use: 'Frage' },
        { de: 'Für die Wohnungsübergabe schlage ich den 28. Januar vor.', ru: 'Для передачи квартиры предлагаю 28 января.', use: 'Termin' },
        { de: 'Sie erreichen mich unter meiner Handynummer oder per E-Mail.', ru: 'Со мной можно связаться по мобильному телефону или по электронной почте.', use: 'Information' },
        { de: 'Vielen Dank im Voraus.', ru: 'Заранее большое спасибо.', use: 'Dank' },
        { de: 'Mit freundlichen Grüßen', ru: 'С уважением', use: 'Gruß' },
        { de: 'Viele Grüße', ru: 'Всего доброго — после обращения `Lieber …`', use: 'Gruß' }
    ],

    tasks: [
        {
            id: 's06-a',
            label: 'A',
            situation: 'Sie sind seit einem Jahr Mitglied im Fitnessstudio Sonnenfeld. Sie möchten Ihren Vertrag kündigen. Schreiben Sie an das Fitnessstudio.',
            recipient: 'Fitnessstudio Sonnenfeld',
            register: 'formell',
            points: [
                { de: 'Ihre Kundennummer', hint: 'Назовите номер клиента, чтобы клуб сразу нашёл ваш договор.',
                  starters: ['Meine Kundennummer ist …', 'Ich bin seit … Mitglied in Ihrem Studio.'],
                  keys: ['Kundennummer', 'Nummer', 'Mitglied'] },
                { de: 'Kündigung und Datum', hint: 'Ясно скажите, что расторгаете договор, и к какой дате.',
                  starters: ['Hiermit kündige ich meinen Vertrag zum …'],
                  keys: ['kündige', 'Kündigung', 'Vertrag'] },
                { de: 'Grund für die Kündigung', hint: 'Коротко объясните причину: потеря работы, переезд, болезнь.',
                  starters: ['Leider habe ich … verloren, deshalb …', 'Ich ziehe im … um.'],
                  keys: ['Arbeit', 'weil', 'deshalb', 'umzieh', 'ziehe'] },
                { de: 'Bitte um Bestätigung', hint: 'Попросите письменно подтвердить расторжение и дату окончания договора.',
                  starters: ['Bitte bestätigen Sie mir die Kündigung schriftlich.', 'Könnten Sie mir bitte schriftlich bestätigen, dass …'],
                  keys: ['bestätig', 'Bestätigung', 'schriftlich'] }
            ],
            model: {
                text: 'Sehr geehrte Damen und Herren, ich bin seit einem Jahr Mitglied in Ihrem Studio. Meine Kundennummer ist 204817. Hiermit kündige ich meinen Vertrag zum 31. Dezember. Leider habe ich im September meine Arbeit verloren, deshalb kann ich den monatlichen Beitrag nicht mehr bezahlen. Ich habe gern bei Ihnen trainiert, aber im Moment muss ich sparen. Könnten Sie mir bitte schriftlich bestätigen, dass mein Vertrag am 31. Dezember endet? Außerdem möchte ich wissen, ob ich noch etwas bezahlen muss. Vielen Dank im Voraus. Mit freundlichen Grüßen Galina Shevchuk',
                ru: 'Уважаемые дамы и господа, я уже год занимаюсь в вашем клубе. Мой номер клиента — 204817. Настоящим расторгаю свой договор к 31 декабря. К сожалению, в сентябре я потеряла работу, поэтому больше не могу платить ежемесячный взнос. Мне нравилось у вас заниматься, но сейчас мне нужно экономить. Не могли бы вы письменно подтвердить, что мой договор заканчивается 31 декабря? Кроме того, я хотела бы знать, нужно ли мне ещё что-то платить. Заранее большое спасибо. С уважением, Галина Шевчук',
                notes: [
                    'Номер клиента назван в начале письма: фирма сразу найдёт ваш договор, и пункт 1 раскрыт.',
                    '`Hiermit kündige ich meinen Vertrag zum 31. Dezember.` — главная фраза письма: `hiermit` («настоящим»), `meinen Vertrag` в Akkusativ и `zum` перед датой.',
                    'Причина раскрыта через Perfekt `habe … verloren` и связку `deshalb` с инверсией: `deshalb kann ich …`.',
                    'Просьба о подтверждении вежливая: `Könnten Sie mir bitte schriftlich bestätigen, dass …`, а глагол `endet` стоит в конце придаточного.',
                    '`möchte ich wissen, ob …` — косвенный вопрос с `ob`: так вежливо спрашивают «нужно ли …», не задавая прямого вопроса.',
                    'Фраза `Ich habe gern bei Ihnen trainiert, aber …` смягчает тон: расторжение без упрёков звучит по-деловому.'
                ]
            },
            weak: {
                text: 'Hallo Fitnessstudio. Ich möchte kündigen meinen Vertrag. Meine Kundennummer ist 204817. Ich habe im September meine Arbeit verlieren, und jetzt ich habe kein Geld für den Beitrag. Bitte schicken Sie mir Bestätigung, dass der Vertrag endet am 31. Dezember. Danke. Galina Shevchuk',
                fixes: [
                    { was: 'Hallo Fitnessstudio.', wird: 'Sehr geehrte Damen und Herren,', why: 'В фирму пишут официально: `Sehr geehrte Damen und Herren,` — с запятой после обращения.' },
                    { was: 'Ich möchte kündigen meinen Vertrag', wird: 'Ich möchte meinen Vertrag kündigen', why: 'Инфинитив `kündigen` стоит в самом конце. Ещё лучше деловая формула: `Hiermit kündige ich meinen Vertrag zum …`.' },
                    { was: 'meine Arbeit verlieren', wird: 'meine Arbeit verloren', why: 'После `habe` нужен Partizip II: `verlieren` → `verloren`.' },
                    { was: 'jetzt ich habe', wird: 'jetzt habe ich', why: '`und` места в предложении не занимает, первое место — `jetzt`, поэтому глагол `habe` идёт сразу за ним, а `ich` — после.' },
                    { was: 'mir Bestätigung', wird: 'mir eine Bestätigung', why: 'Перед исчисляемым существительным нужен артикль: `eine Bestätigung`. В русском артикля нет, поэтому его часто пропускают.' },
                    { was: 'dass der Vertrag endet am 31. Dezember', wird: 'dass der Vertrag am 31. Dezember endet', why: 'После `dass` спрягаемый глагол `endet` уходит в самый конец придаточного.' },
                    { was: 'Danke.', wird: 'Mit freundlichen Grüßen', why: '`Danke` не заменяет прощание. Официальное письмо заканчивается `Mit freundlichen Grüßen` и полным именем.' }
                ]
            }
        },
        {
            id: 's06-b',
            label: 'B',
            situation: 'Sie wohnen seit vier Jahren in einer Mietwohnung. Ihre Familie braucht jetzt eine größere Wohnung. Schreiben Sie an Ihre Vermieterin, Frau Albrecht.',
            recipient: 'Frau Albrecht',
            register: 'formell',
            points: [
                { de: 'Kündigung und Termin', hint: 'Скажите, что расторгаете договор аренды, и к какой дате: у жильца срок обычно три месяца.',
                  starters: ['Hiermit kündige ich den Mietvertrag für meine Wohnung zum …'],
                  keys: ['kündige', 'Kündigung', 'Mietvertrag'] },
                { de: 'Frage zur Kaution', hint: 'Спросите, когда вы получите обратно залог и нужно ли что-то доплатить.',
                  starters: ['Könnten Sie mir bitte sagen, wann …', 'Außerdem möchte ich wissen, ob …'],
                  keys: ['Kaution', 'zurück', 'Nebenkosten'] },
                { de: 'Bitte um Bestätigung', hint: 'Попросите письменно подтвердить расторжение.',
                  starters: ['Bitte bestätigen Sie mir die Kündigung schriftlich.'],
                  keys: ['bestätig', 'Bestätigung', 'schriftlich'] },
                { de: 'Ihre Kontaktdaten', hint: 'Напишите, как и когда с вами лучше связаться.',
                  starters: ['Sie erreichen mich …', 'Am besten rufen Sie mich … an.'],
                  keys: ['erreichen', 'Telefon', 'Handy', 'E-Mail', 'anrufen'] }
            ],
            model: {
                text: 'Sehr geehrte Frau Albrecht, hiermit kündige ich den Mietvertrag für meine Wohnung zum 31. Januar. Wir haben vier Jahre gern hier gewohnt, aber jetzt brauchen wir eine größere Wohnung, weil wir ein Baby bekommen haben. Könnten Sie mir bitte sagen, wann ich die Kaution zurückbekomme? Außerdem möchte ich wissen, ob ich noch Nebenkosten nachzahlen muss. Bitte bestätigen Sie mir die Kündigung schriftlich. Sie erreichen mich am besten abends unter meiner Handynummer oder per E-Mail. Vielen Dank für die schöne Zeit in Ihrem Haus. Mit freundlichen Grüßen Denis Klimenko',
                ru: 'Уважаемая госпожа Альбрехт, настоящим расторгаю договор аренды моей квартиры к 31 января. Мы с удовольствием прожили здесь четыре года, но теперь нам нужна квартира побольше, потому что у нас родился ребёнок. Не могли бы вы сказать, когда я получу обратно залог? Кроме того, я хотел бы знать, нужно ли мне доплатить за коммунальные услуги. Пожалуйста, подтвердите мне расторжение письменно. Связаться со мной лучше всего вечером по мобильному телефону или по электронной почте. Спасибо вам за эти годы. С уважением, Денис Клименко',
                notes: [
                    '`hiermit kündige ich den Mietvertrag … zum 31. Januar` — в одном предложении и расторжение, и срок: пункт 1 раскрыт полностью.',
                    'Причина подана мягко и с Perfekt: `Wir haben vier Jahre gern hier gewohnt, aber …` — хозяйка читает благодарность, а не претензию.',
                    'Два косвенных вопроса — `wann ich die Kaution zurückbekomme` и `ob ich noch Nebenkosten nachzahlen muss`: в обоих глагол в конце, а `zurückbekomme` пишется слитно.',
                    'Просьба о подтверждении — короткий Imperativ с `bitte`: в деловом письме это вежливо и ясно.',
                    'Контакты конкретные: как (`unter meiner Handynummer oder per E-Mail`) и когда (`am besten abends`).',
                    'Связки `aber`, `weil`, `Außerdem` и тёплая благодарность в конце делают письмо цельным и вежливым.'
                ]
            }
        }
    ],

    drills: [
        { id: 's06-d1', type: 'order', q: 'Расставьте части письма в правильном порядке.',
          items: ['Sehr geehrte Damen und Herren,', 'hiermit kündige ich meinen Vertrag zum 31. Dezember.', 'Leider habe ich meine Arbeit verloren.', 'Deshalb kann ich den Beitrag nicht mehr bezahlen.', 'Bitte bestätigen Sie mir die Kündigung schriftlich.', 'Mit freundlichen Grüßen'],
          explain: 'Обращение, расторжение с датой, причина и вывод из неё (`Deshalb …`), просьба подтвердить, прощание. `hiermit` со строчной буквы — значит, идёт сразу после обращения.', tag: 'aufbau' },
        { id: 's06-d2', type: 'choice', q: 'Какое начало подходит для письма о расторжении договора с фитнес-клубом?',
          options: ['Sehr geehrte Damen und Herren, hiermit kündige ich meinen Vertrag.', 'Hallo, ich will nicht mehr bei Ihnen trainieren.', 'Liebes Fitnessstudio, ich habe keine Lust mehr.'], answer: 0,
          explain: 'Расторжение — деловое письмо: официальное обращение и чёткая формула `hiermit kündige ich …`. `Hallo` и `keine Lust` звучат фамильярно и не называют главного — что вы расторгаете договор.', tag: 'register' },
        { id: 's06-d3', type: 'gap', q: 'Вставьте местоимение в нужной форме.',
          text: 'Ich möchte ___ Handyvertrag kündigen.', hint: 'mein', answer: ['meinen'],
          explain: '`kündigen` требует Akkusativ без предлога. `der Handyvertrag` мужского рода, поэтому `mein` → `meinen`.', tag: 'kasus' },
        { id: 's06-d4', type: 'join', q: 'Соедините предложения союзом dass.',
          parts: ['Bitte bestätigen Sie mir schriftlich.', 'Mein Vertrag endet am 31. Dezember.'], connector: 'dass',
          answer: ['Bitte bestätigen Sie mir schriftlich, dass mein Vertrag am 31. Dezember endet.'],
          explain: 'После `dass` спрягаемый глагол `endet` уходит в конец, а перед `dass` ставится запятая.', tag: 'nebensatz' },
        { id: 's06-d5', type: 'join', q: 'Соедините предложения союзом ob.',
          parts: ['Ich möchte wissen.', 'Muss ich noch etwas bezahlen?'], connector: 'ob',
          answer: ['Ich möchte wissen, ob ich noch etwas bezahlen muss.'],
          explain: 'Вопрос без вопросительного слова («нужно ли …») в придаточном вводится союзом `ob`, а глагол `muss` уходит в конец.', tag: 'nebensatz' },
        { id: 's06-d6', type: 'gap', q: 'Вставьте глагол в нужной форме.',
          text: 'Könnten Sie mir bitte sagen, wann ich die Kaution ___?', hint: 'zurückbekommen', answer: ['zurückbekomme'],
          explain: 'В придаточном с `wann` отделяемый глагол не разделяется: `zurückbekomme` пишется одним словом и стоит в самом конце.', tag: 'nebensatz' },
        { id: 's06-d7', type: 'fix', q: 'Исправьте ошибку.',
          text: 'Ich umziehe im Dezember nach Kiel.', answer: ['Ich ziehe im Dezember nach Kiel um.', 'Im Dezember ziehe ich nach Kiel um.'],
          explain: '`umziehen` — глагол с отделяемой приставкой: `ziehe` стоит на втором месте, а `um` уходит в самый конец.', tag: 'klammer' },
        { id: 's06-d8', type: 'build', q: 'Составьте просьбу.',
          ru: 'Пожалуйста, подтвердите мне расторжение письменно.',
          answer: ['Bitte bestätigen Sie mir die Kündigung schriftlich.', 'Bestätigen Sie mir bitte die Kündigung schriftlich.', 'Bestätigen Sie mir die Kündigung bitte schriftlich.', 'Bitte bestätigen Sie mir schriftlich die Kündigung.', 'Bestätigen Sie mir bitte schriftlich die Kündigung.'],
          explain: 'Просьба на «Sie» начинается с глагола: `Bestätigen Sie …`, а `bitte` может стоять в начале или в середине. Дательный `mir` идёт перед винительным `die Kündigung`.', tag: 'verb2' },
        { id: 's06-d9', type: 'build', q: 'Составьте предложение.',
          ru: 'Настоящим расторгаю свой договор к 31 декабря.',
          answer: ['Hiermit kündige ich meinen Vertrag zum 31. Dezember.', 'Ich kündige hiermit meinen Vertrag zum 31. Dezember.', 'Ich kündige meinen Vertrag hiermit zum 31. Dezember.', 'Meinen Vertrag kündige ich hiermit zum 31. Dezember.', 'Hiermit kündige ich zum 31. Dezember meinen Vertrag.', 'Ich kündige hiermit zum 31. Dezember meinen Vertrag.', 'Zum 31. Dezember kündige ich hiermit meinen Vertrag.'],
          explain: 'Глагол `kündige` стоит на втором месте: после `Hiermit` сначала глагол, потом `ich`. Дата окончания договора — `zum 31. Dezember`.', tag: 'verb2' },
        { id: 's06-d10', type: 'choice', q: 'Как сказать, что договор аренды заканчивается 31 января?',
          options: ['Ich kündige die Wohnung zum 31. Januar.', 'Ich kündige die Wohnung in 31. Januar.', 'Ich kündige die Wohnung für 31. Januar.'], answer: 0,
          explain: 'Дату, к которой заканчивается договор, вводят через `zum` (`zu dem`): `zum 31. Januar`. С датой не ставят `in`, а `für` в этой формуле не употребляют.', tag: 'zeit' }
    ]
};
