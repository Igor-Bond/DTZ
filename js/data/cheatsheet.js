/**
 * Шпаргалка для быстрого освежения в памяти: схемы порядка слов, союзы и
 * готовые конструкции для письма с переводами. Таблицы форм (спряжение,
 * склонение, предлоги подробно) — в reference.js, здесь только то, что
 * пробегают глазами за несколько минут перед занятием или экзаменом.
 */

export default [
    {
        id: 'c-wortstellung',
        title: 'Порядок слов: схемы',
        drill: 'g01',
        blocks: [
            { type: 'rule', text: 'Спрягаемый глагол — **второй** в утверждении, **первый** в вопросе «да/нет» и в просьбе, **последний** в придаточном. Вторая часть глагола — в самом конце главного предложения.' },

            { type: 'h', text: '1. Простое предложение' },
            { type: 'formula', parts: ['подлежащее', '**глагол**', 'остальное'], note: 'Прямой порядок: глагол — второй.' },
            { type: 'ex', de: 'Ich **komme** morgen etwas später.', ru: 'Завтра я приду немного позже.' },
            { type: 'formula', parts: ['время / `Leider` / `Deshalb`', '**глагол**', 'подлежащее', 'остальное'], note: 'Инверсия: первым стоит не подлежащее — оно уходит за глагол.' },
            { type: 'ex', de: 'Deshalb **bleibe** ich heute zu Hause.', ru: 'Поэтому сегодня я остаюсь дома.' },
            { type: 'formula', parts: ['подлежащее', '**модальный глагол**', 'середина', '**инфинитив**'], note: 'Рамка: инфинитив — последнее слово.' },
            { type: 'ex', de: 'Ich **kann** am Freitag leider nicht **kommen**.', ru: 'В пятницу я, к сожалению, не смогу прийти.' },
            { type: 'formula', parts: ['подлежащее', '**haben / sein**', 'середина', '**Partizip II**'], note: 'Perfekt: Partizip II — последнее слово.' },
            { type: 'ex', de: 'Ich **habe** gestern mit Ihrer Kollegin **gesprochen**.', ru: 'Вчера я разговаривал с вашей коллегой.' },
            { type: 'formula', parts: ['подлежащее', '**глагол**', 'середина', '**приставка**'], note: 'Отделяемая приставка (`anfangen`, `anrufen`, `absagen`) уходит в конец.' },
            { type: 'ex', de: 'Der Kurs **fängt** am Montag um 9 Uhr **an**.', ru: 'Курс начинается в понедельник в 9 часов.' },
            { type: 'formula', parts: ['подлежащее', '**глагол**', 'середина', '`nicht`', '**2-я часть**'], note: '`nicht` — перед второй частью глагола, перед прилагательным и местом (`nicht krank`, `nicht zu Hause`). Иначе — в конце: `Ich komme heute nicht.`' },
            { type: 'ex', de: 'Ich habe Ihre E-Mail leider **nicht** bekommen.', ru: 'К сожалению, я не получил ваше письмо.' },

            { type: 'h', text: '2. Вопрос и просьба' },
            { type: 'formula', parts: ['**глагол**', 'подлежащее', 'середина', '(**2-я часть**)', '?'], note: 'Вопрос «да/нет»: глагол — первый.' },
            { type: 'ex', de: '**Können** Sie mir die Unterlagen per E-Mail **schicken**?', ru: 'Вы можете прислать мне документы по электронной почте?' },
            { type: 'formula', parts: ['`Wann` / `Wo` / `Wie` …', '**глагол**', 'подлежащее', 'остальное', '?'], note: 'Вопрос с вопросительным словом: глагол сразу за ним.' },
            { type: 'ex', de: 'Wann **beginnt** der nächste Kurs?', ru: 'Когда начинается следующий курс?' },
            { type: 'formula', parts: ['**глагол**', '`Sie`', '`bitte`', 'остальное', '(**приставка**)'], note: 'Просьба (Imperativ, `Sie`): глагол первый, приставка — в конце.' },
            { type: 'ex', de: '**Rufen** Sie mich bitte morgen Vormittag **an**.', ru: 'Позвоните мне, пожалуйста, завтра до обеда.' },

            { type: 'h', text: '3. Два предложения' },
            { type: 'formula', parts: ['главное', ',', '`weil` / `dass` / `wenn`', 'подлежащее', 'середина', '**глагол**'], note: 'Придаточное: спрягаемый глагол — последний, перед союзом — запятая.' },
            { type: 'ex', de: 'Ich komme heute nicht, weil mein Sohn krank **ist**.', ru: 'Я сегодня не приду, потому что мой сын болен.' },
            { type: 'formula', parts: ['`Weil` … **глагол**', ',', '**глагол**', 'подлежащее', 'остальное'], note: 'Придаточное впереди занимает первое место, поэтому дальше сразу глагол: «глагол, глагол».' },
            { type: 'ex', de: 'Weil ich bis 18 Uhr arbeiten **muss**, **komme** ich erst um 19 Uhr.', ru: 'Так как мне нужно работать до 18 часов, я приду только в 19.' },
            { type: 'formula', parts: ['главное', ',', '`aber` / `denn` / `sondern`', 'подлежащее', '**глагол**', 'остальное'], note: 'Союзы позиции 0 (`und`, `aber`, `oder`, `denn`, `sondern`) места не занимают: дальше порядок обычного предложения, чаще всего прямой. Запятая — перед `aber`, `denn`, `sondern`.' },
            { type: 'ex', de: 'Ich komme heute nicht, denn mein Sohn **ist** krank.', ru: 'Я сегодня не приду, так как мой сын болен.' },
            { type: 'tip', text: 'Сравните: `…, weil mein Sohn krank ist.` и `…, denn mein Sohn ist krank.` Смысл один, место глагола разное. Не уверены в придаточном — пишите `denn`.' }
        ]
    },

    {
        id: 'c-konnektoren',
        title: 'Союзы и связки: быстрая карта',
        drill: 'g10',
        blocks: [
            { type: 'p', text: 'Три группы — три порядка слов. Сначала узнайте группу, потом ставьте глагол.' },

            { type: 'h', text: '1. Позиция 0: порядок прямой' },
            { type: 'formula', parts: ['предложение 1', ',', '`aber`', 'подлежащее', '**глагол**', 'остальное'], note: 'Союз стоит «вне счёта»: после него подлежащее и глагол — как обычно.' },
            {
                type: 'table',
                head: ['Союз', 'Перевод', 'Пример'],
                rows: [
                    ['`und`', 'и', '`Mein Sohn ist krank und ich **muss** zu Hause bleiben.`'],
                    ['`aber`', 'но', '`Ich möchte gern kommen, aber ich **habe** keine Zeit.`'],
                    ['`oder`', 'или', '`Ich komme vorbei oder ich **rufe** Sie **an**.`'],
                    ['`denn`', 'так как, ведь', '`Ich schreibe Ihnen, denn ich **habe** eine Frage.`'],
                    ['`sondern`', 'а (после отрицания)', '`Der Kurs beginnt nicht am Montag, **sondern** am Dienstag.`']
                ],
                note: 'Запятая — перед `aber`, `denn`, `sondern`. Перед `und` и `oder` между двумя предложениями её можно не ставить.'
            },

            { type: 'h', text: '2. Первое место: сразу глагол, потом подлежащее' },
            { type: 'formula', parts: ['`Deshalb`', '**глагол**', 'подлежащее', 'остальное'], note: 'Связка занимает первое место. Её можно поставить и после глагола: `Ich komme deshalb später.`' },
            {
                type: 'table',
                head: ['Связка', 'Перевод', 'Пример'],
                rows: [
                    ['`deshalb`', 'поэтому', '`Mein Auto ist kaputt. Deshalb **komme** ich später.`'],
                    ['`deswegen`', 'поэтому', '`Mein Sohn hat Fieber. Deswegen **kann** ich heute nicht kommen.`'],
                    ['`darum`', 'поэтому', '`Die Heizung funktioniert nicht. Darum **schreibe** ich Ihnen.`'],
                    ['`trotzdem`', 'всё равно, тем не менее', '`Ich war krank. Trotzdem **habe** ich die Hausaufgaben gemacht.`'],
                    ['`außerdem`', 'кроме того', '`Außerdem **brauche** ich eine Bescheinigung.`'],
                    ['`dann`', 'потом; тогда', '`Dann **können** wir einen neuen Termin vereinbaren.`'],
                    ['`danach`', 'после этого', '`Zuerst gehe ich zum Arzt. Danach **komme** ich in den Kurs.`'],
                    ['`zuerst`', 'сначала', '`Zuerst **möchte** ich mich für Ihre Hilfe bedanken.`'],
                    ['`also`', 'итак, значит (не «тоже»!)', '`Also **sehen** wir uns am Freitag um 10 Uhr.`'],
                    ['`sonst`', 'иначе', '`Ich muss früh losfahren, sonst **komme** ich zu spät.`'],
                    ['`übrigens`', 'кстати', '`Übrigens **habe** ich jetzt eine neue Telefonnummer.`'],
                    ['`leider`', 'к сожалению', '`Leider **habe** ich Ihren Brief zu spät bekommen.`'],
                    ['`hoffentlich`', 'надеюсь, …', '`Hoffentlich **geht** es Ihnen bald besser.`']
                ]
            },

            { type: 'h', text: '3. Придаточные: глагол в конец' },
            { type: 'formula', parts: ['главное', ',', '`weil`', 'подлежащее', 'середина', '**глагол**'], note: 'Перед союзом — всегда запятая.' },
            {
                type: 'table',
                head: ['Союз', 'Перевод', 'Пример'],
                rows: [
                    ['`weil`', 'потому что', '`Ich schreibe Ihnen, weil ich eine Frage **habe**.`'],
                    ['`dass`', 'что', '`Ich denke, dass das eine gute Idee **ist**.`'],
                    ['`wenn`', 'если; когда (каждый раз, в будущем)', '`Wenn Sie Fragen **haben**, rufen Sie mich bitte an.`'],
                    ['`ob`', 'ли', '`Ich möchte wissen, ob der Kurs am Montag **stattfindet**.`'],
                    ['`obwohl`', 'хотя', '`Ich komme zum Kurs, obwohl ich noch erkältet **bin**.`'],
                    ['`damit`', 'чтобы (подлежащие разные)', '`Bitte schicken Sie mir die Rechnung, damit ich sie bezahlen **kann**.`'],
                    ['`bevor`', 'перед тем как', '`Bitte rufen Sie mich an, bevor Sie **kommen**.`'],
                    ['`nachdem`', 'после того как', '`Nachdem ich die Prüfung gemacht **habe**, suche ich eine Arbeit.`'],
                    ['`während`', 'пока, в то время как', '`Während ich im Kurs **bin**, ist mein Sohn im Kindergarten.`'],
                    ['`als`', 'когда (один раз в прошлом)', '`Als ich gestern beim Arzt **war**, haben Sie angerufen.`'],
                    ['`falls`', 'если вдруг', '`Falls ich krank **werde**, sage ich Ihnen sofort Bescheid.`'],
                    ['`sobald`', 'как только', '`Ich rufe Sie an, sobald ich die Unterlagen **habe**.`'],
                    ['`um … zu`', 'чтобы (подлежащее одно)', '`Ich schreibe Ihnen, um einen Termin **zu vereinbaren**.`']
                ],
                note: '`um … zu` — без подлежащего, `zu` + инфинитив в конце; с отделяемой приставкой — одним словом: `um Sie **anzurufen**`.'
            }
        ]
    },

    {
        id: 'c-hoeflichkeit',
        title: 'Просьбы и вежливые формулы',
        drill: 'g05',
        blocks: [
            { type: 'rule', text: 'Просьба в письме — через `könnten`, `würden`, `hätte gern`, `wäre` и слово `bitte`. Прямое `Ich will …` или голый приказ звучат резко.' },
            {
                type: 'table',
                head: ['Конструкция', 'Перевод', 'Пример', 'Тон'],
                rows: [
                    ['`Könnten Sie mir bitte …?`', 'Не могли бы вы …?', '`Könnten Sie mir bitte die Unterlagen **schicken**?`', 'формально; дружески: `Könntest du …?`'],
                    ['`Würden Sie bitte …?`', 'Не будете ли вы так добры …?', '`Würden Sie bitte den Termin **bestätigen**?`', 'формально; дружески: `Würdest du …?`'],
                    ['`Dürfte ich …?`', 'Можно мне …? (очень вежливо)', '`Dürfte ich Sie um einen Rückruf **bitten**?`', 'формально'],
                    ['`Ich möchte Sie bitten, … zu …`', 'Я хотел бы попросить вас …', '`Ich möchte Sie bitten, mir einen neuen Termin **zu geben**.`', 'формально'],
                    ['`Ich hätte gern …`', 'Я хотел бы (получить) …', '`Ich hätte gern einen Termin am Vormittag.`', 'нейтрально'],
                    ['`Ich würde gern …`', 'Я хотел бы (сделать) …', '`Ich würde gern den Abendkurs **besuchen**.`', 'нейтрально'],
                    ['`Es wäre schön, wenn …`', 'Было бы хорошо, если бы …', '`Es wäre schön, wenn Sie mich zurückrufen **könnten**.`', 'нейтрально'],
                    ['`Ich wäre Ihnen dankbar, wenn …`', 'Я был бы вам благодарен, если бы …', '`Ich wäre Ihnen dankbar, wenn Sie mir bald antworten **könnten**.`', 'формально; дружески: `Ich wäre dir dankbar, wenn …`'],
                    ['`Wäre es möglich, … zu …?`', 'Можно ли было бы …?', '`Wäre es möglich, den Termin auf Freitag **zu verschieben**?`', 'формально'],
                    ['`Bitte schicken Sie mir …`', 'Пришлите мне, пожалуйста, …', '`Bitte **schicken** Sie mir eine Bestätigung per E-Mail.`', 'формально; дружески: `Bitte schick mir …`'],
                    ['`Rufen Sie mich bitte an.`', 'Позвоните мне, пожалуйста.', '`**Rufen** Sie mich bitte heute Abend **an**.`', 'формально; дружески: `Ruf mich bitte an.`'],
                    ['`Ich bitte um …` + Akk', 'Прошу …', '`Ich bitte um Ihr Verständnis.`', 'формально'],
                    ['`Ich wollte fragen, ob …`', 'Я хотел спросить, … ли … (прошедшее здесь — для мягкости)', '`Ich wollte fragen, ob der Kurs morgen **stattfindet**.`', 'нейтрально'],
                    ['`Haben Sie vielleicht …?`', 'Нет ли у вас …? / Может быть, у вас есть …?', '`Haben Sie vielleicht am Donnerstag Zeit?`', 'формально; дружески: `Hast du vielleicht …?`'],
                    ['`Können Sie mir bitte sagen, …?`', 'Скажите, пожалуйста, …', '`Können Sie mir bitte sagen, wann der Kurs **beginnt**?`', 'нейтрально'],
                    ['`Vielen Dank im Voraus!`', 'Заранее большое спасибо!', '`Vielen Dank im Voraus für Ihre Hilfe.`', 'нейтрально']
                ]
            },

            { type: 'h', text: 'Вместо резкого — вежливое' },
            {
                type: 'table',
                head: ['Резко', 'Вежливо', 'Перевод'],
                rows: [
                    ['`Ich will einen Termin.`', '`Ich **möchte** einen Termin.` / `Ich **hätte gern** einen Termin.`', 'Я хотел бы записаться на приём.'],
                    ['`Gib mir die Telefonnummer.`', '`**Könntest** du mir die Telefonnummer **geben**?`', 'Не мог бы ты дать мне номер телефона?'],
                    ['`Schicken Sie mir das Formular.`', '`**Könnten** Sie mir **bitte** das Formular schicken?`', 'Не могли бы вы прислать мне бланк?'],
                    ['`Rufen Sie mich an!`', '`Rufen Sie mich **bitte** an.`', 'Позвоните мне, пожалуйста.'],
                    ['`Antworten Sie mir sofort.`', '`Ich **wäre** Ihnen **dankbar**, wenn Sie mir bald antworten könnten.`', 'Буду вам благодарен за скорый ответ.'],
                    ['`Sie müssen die Heizung reparieren.`', '`**Könnten** Sie die Heizung **bitte** reparieren lassen?`', 'Не могли бы вы организовать ремонт отопления?']
                ]
            },
            { type: 'tip', text: 'В письме на `Sie` не переходите на `du`: `Sie`, `Ihnen`, `Ihr` — везде и с большой буквы.' }
        ]
    },

    {
        id: 'c-gruende',
        title: 'Причина, цель, условие, уступка',
        drill: 'g02',
        blocks: [
            {
                type: 'table',
                head: ['Конструкция', 'Перевод', 'Пример', 'Глагол'],
                rows: [
                    ['`weil`', 'потому что', '`Ich komme nicht, weil ich krank **bin**.`', 'в конце'],
                    ['`denn`', 'так как, ведь', '`Ich komme nicht, denn ich **bin** krank.`', 'прямой порядок'],
                    ['`deshalb`', 'поэтому', '`Ich bin krank, deshalb **komme** ich nicht.`', 'сразу за связкой'],
                    ['`damit`', 'чтобы (подлежащие разные)', '`Ich schreibe Ihnen, damit Sie Bescheid **wissen**.`', 'в конце'],
                    ['`um … zu`', 'чтобы (подлежащее одно)', '`Ich rufe an, um den Termin **abzusagen**.`', '`zu` + инфинитив в конце'],
                    ['`wenn`', 'если', '`Wenn ich Zeit **habe**, **komme** ich gern.`', 'в конце; дальше «глагол, глагол»'],
                    ['`falls`', 'если вдруг', '`Falls der Kurs **ausfällt**, informieren Sie mich bitte.`', 'в конце'],
                    ['`obwohl`', 'хотя', '`Ich komme, obwohl ich wenig Zeit **habe**.`', 'в конце'],
                    ['`trotzdem`', 'всё равно, тем не менее', '`Ich habe wenig Zeit, trotzdem **komme** ich.`', 'сразу за связкой'],
                    ['`als`', 'когда (один раз в прошлом)', '`Als ich krank **war**, hat mir meine Nachbarin geholfen.`', 'в конце'],
                    ['`wenn`', 'когда (каждый раз или в будущем)', '`Wenn ich nach Hause **komme**, rufe ich Sie an.`', 'в конце'],
                    ['`ob`', 'ли', '`Ich weiß nicht, ob ich morgen kommen **kann**.`', 'в конце'],
                    ['`wann`, `wo`, `wie`, `warum`', 'когда, где, как, почему (в косвенном вопросе)', '`Können Sie mir sagen, wo das Büro **ist**?`', 'в конце'],
                    ['`dass`', 'что', '`Ich hoffe, dass Sie mich **verstehen**.`', 'в конце']
                ]
            },
            { type: 'rule', text: 'Одно подлежащее — `um … zu`, разные — `damit`. Прошлое, один раз — `als`; каждый раз, сейчас или в будущем — `wenn`.' },

            { type: 'h', text: 'Две части глагола в придаточном' },
            { type: 'formula', parts: ['`weil`', 'подлежащее', 'середина', 'инфинитив / Partizip II', '**спрягаемый глагол**'], note: 'Спрягаемый глагол — самый последний. Отделяемая приставка снова приклеивается: `anfängt`.' },
            {
                type: 'exs',
                items: [
                    { de: '…, weil ich bis 18 Uhr arbeiten **muss**.', ru: '…, потому что мне нужно работать до 18 часов.' },
                    { de: '…, weil ich den Bus verpasst **habe**.', ru: '…, потому что я опоздал на автобус.' },
                    { de: '…, weil der Kurs schon um 8 Uhr **anfängt**.', ru: '…, потому что курс начинается уже в 8 часов.' }
                ]
            },
            { type: 'trap', wrong: 'Können Sie mir sagen, wann beginnt der Kurs?', right: 'Können Sie mir sagen, wann der Kurs beginnt?', why: 'После `Können Sie mir sagen, …` вопрос становится придаточным: глагол уходит в конец.' }
        ]
    },

    {
        id: 'c-gefuehle',
        title: 'Чувства, надежда, мнение, сожаление',
        drill: 'g09',
        blocks: [
            { type: 'h', text: '1. Радость, надежда, сожаление' },
            {
                type: 'table',
                head: ['Конструкция', 'Перевод', 'Пример'],
                rows: [
                    ['`Ich freue mich auf` + Akk', 'Я с радостью жду … (то, что будет)', '`Ich freue mich **auf** unser Treffen.`'],
                    ['`Ich freue mich über` + Akk', 'Я рад … (тому, что уже есть или было)', '`Ich freue mich **über** Ihre Einladung.`'],
                    ['`Ich freue mich, dass …`', 'Я рад, что …', '`Ich freue mich, dass Sie Zeit **haben**.`'],
                    ['`Es tut mir leid, dass …`', 'Мне жаль, что … / Простите, что …', '`Es tut mir leid, dass ich nicht kommen **konnte**.`'],
                    ['`Leider …`', 'К сожалению, …', '`Leider **muss** ich den Termin absagen.`'],
                    ['`Ich hoffe, dass …`', 'Я надеюсь, что …', '`Ich hoffe, dass wir eine Lösung **finden**.`'],
                    ['`Hoffentlich …`', 'Надеюсь, … (стоит на первом месте)', '`Hoffentlich **klappt** es mit dem Termin.`'],
                    ['`Ich bin froh, dass …`', 'Я рад, что …', '`Ich bin froh, dass alles geklappt **hat**.`'],
                    ['`Ich bin traurig / enttäuscht, dass …`', 'Мне грустно / Я разочарован, что …', '`Ich bin enttäuscht, dass niemand geantwortet **hat**.`']
                ]
            },
            { type: 'rule', text: '`auf` — то, что будет: `Ich freue mich auf den Urlaub.` `über` — то, что уже есть: `Ich freue mich über Ihren Brief.`' },

            { type: 'h', text: '2. Мнение и отношение' },
            {
                type: 'table',
                head: ['Конструкция', 'Перевод', 'Пример'],
                rows: [
                    ['`Ich finde, dass …`', 'Я считаю, что …', '`Ich finde, dass die Miete zu hoch **ist**.`'],
                    ['`Meiner Meinung nach …`', 'По-моему, …', '`Meiner Meinung nach **ist** das zu teuer.`'],
                    ['`Ich finde es schade / gut / wichtig, dass …`', 'Жаль / Хорошо / Важно, что …', '`Ich finde es schade, dass der Kurs **endet**.`'],
                    ['`Es ist mir wichtig, dass …`', 'Для меня важно, чтобы …', '`Es ist mir wichtig, dass die Kinder nachts schlafen **können**.`'],
                    ['`Ich bin damit einverstanden, dass …`', 'Я согласен с тем, что …', '`Ich bin damit einverstanden, dass wir den Termin **verschieben**.`'],
                    ['`Ich bin mit` + Dat `einverstanden`', 'Я согласен с …', '`Ich bin **mit** Ihrem Vorschlag einverstanden.`'],
                    ['`Ich bin zufrieden / unzufrieden mit` + Dat', 'Я доволен / недоволен …', '`Ich bin **mit** der Reparatur nicht zufrieden.`'],
                    ['`Ich habe Angst vor` + Dat', 'Я боюсь …', '`Ich habe Angst **vor** der Prüfung.`'],
                    ['`Ich interessiere mich für` + Akk', 'Я интересуюсь …', '`Ich interessiere mich **für** den Computerkurs.`']
                ]
            },
            { type: 'tip', text: 'Одна фраза о чувствах в начале или в конце письма (`Es tut mir leid, dass …`, `Ich freue mich auf …`) делает текст живым и связным.' }
        ]
    },

    {
        id: 'c-zeit',
        title: 'Время, даты, договорённости',
        drill: 'g09',
        blocks: [
            { type: 'h', text: '1. Когда и как долго' },
            {
                type: 'table',
                head: ['Конструкция', 'Перевод', 'Пример'],
                rows: [
                    ['`am` + день, дата', 'в (понедельник, 3 марта)', '`Der Kurs beginnt **am** 3. März.`'],
                    ['`um` + время', 'в (… часов)', '`Der Termin ist **um** halb zehn.`'],
                    ['`im` + месяц, время года', 'в (мае, летом)', '`**Im** Mai mache ich die Prüfung.`'],
                    ['`nächste Woche`, `letzte Woche`', 'на следующей / на прошлой неделе (без предлога!)', '`**Nächste Woche** bin ich im Urlaub.`'],
                    ['`in` + Dat', 'через (о будущем)', '`Ich ziehe **in** zwei Wochen um.`'],
                    ['`vor` + Dat', '… назад', '`Ich habe Ihnen **vor** drei Tagen eine E-Mail geschrieben.`'],
                    ['`seit` + Dat', 'с (и до сих пор), уже …', '`**Seit** gestern habe ich Fieber.`'],
                    ['`ab` + Dat', 'с, начиная с', '`**Ab** nächster Woche arbeite ich wieder.`'],
                    ['`bis`', 'до', '`Bitte antworten Sie mir **bis** Freitag.`'],
                    ['`bis spätestens`', 'не позднее', '`Ich gebe Ihnen **bis spätestens** Mittwoch Bescheid.`'],
                    ['`von … bis …`', 'с … по …', '`Ich bin **von** Montag **bis** Mittwoch krankgeschrieben.`'],
                    ['`für` + Akk', 'на (срок)', '`Ich fahre **für** zwei Wochen zu meiner Familie.`'],
                    ['`vor` + Dat', 'перед', '`Ich rufe Sie **vor** dem Termin an.`'],
                    ['`nach` + Dat', 'после', '`**Nach** dem Kurs habe ich Zeit.`']
                ]
            },
            { type: 'rule', text: '`vor` + срок — назад (прошлое), `in` + срок — через (будущее), `seit` — длится до сих пор, глагол в Präsens: `Seit Montag bin ich krank.`' },

            { type: 'h', text: '2. Договориться о встрече' },
            {
                type: 'table',
                head: ['Конструкция', 'Перевод', 'Пример'],
                rows: [
                    ['`einen Termin vereinbaren`', 'договориться о встрече, записаться', '`Ich möchte gern einen Termin **vereinbaren**.`'],
                    ['`einen Termin verschieben`', 'перенести встречу', '`Können wir den Termin auf Freitag **verschieben**?`'],
                    ['`einen Termin absagen`', 'отменить встречу', '`Leider muss ich den Termin am Montag **absagen**.`'],
                    ['`einen Termin bestätigen`', 'подтвердить встречу', '`Bitte **bestätigen** Sie den neuen Termin.`'],
                    ['`Ich bitte um einen neuen Termin.`', 'Прошу назначить новую встречу.', '`Deshalb **bitte** ich um einen neuen Termin.`'],
                    ['`Wann haben Sie Zeit?`', 'Когда у вас есть время?', '`Wann haben Sie nächste Woche Zeit?`'],
                    ['`Passt es Ihnen am …?`', 'Вам удобно в …?', '`Passt es Ihnen am Mittwoch um 10 Uhr?`'],
                    ['`Ich schlage vor, dass wir uns am … treffen.`', 'Предлагаю встретиться в …', '`Ich schlage vor, dass wir uns am Donnerstag um 15 Uhr **treffen**.`'],
                    ['`Ich kann leider nur am …`', 'К сожалению, я могу только в …', '`Ich kann leider nur am Freitag nach 16 Uhr.`'],
                    ['`Der Termin passt mir (nicht).`', 'Мне это время (не) подходит.', '`Der Termin am Montag passt mir leider nicht.`']
                ],
                note: '`der Termin` — мужской род: `einen Termin`, `den Termin`.'
            }
        ]
    },

    {
        id: 'c-vergangenheit',
        title: 'Рассказ о прошлом',
        drill: 'g04',
        blocks: [
            { type: 'rule', text: '`sein`, `haben` и модальные глаголы в письме обычно — в Präteritum: `war`, `hatte`, `konnte`, `musste`. Большинство остальных глаголов — в Perfekt, но `es gab` — обычно в Präteritum.' },
            { type: 'formula', parts: ['подлежащее', '**habe / bin**', 'когда · что · куда', '**Partizip II**'], note: 'Perfekt: Partizip II — последнее слово.' },
            {
                type: 'table',
                head: ['Конструкция', 'Перевод', 'Пример'],
                rows: [
                    ['`Ich war …`', 'Я был …', '`Ich **war** letzte Woche krank.`'],
                    ['`Ich hatte …`', 'У меня был(а) …', '`Gestern **hatte** ich hohes Fieber.`'],
                    ['`Ich konnte nicht …`', 'Я не мог …', '`Ich **konnte** am Freitag leider nicht kommen.`'],
                    ['`Ich musste …`', 'Мне пришлось …', '`Ich **musste** mit meiner Tochter zum Arzt gehen.`'],
                    ['`Ich habe … angerufen`', 'Я позвонил …', '`Ich **habe** sofort den Hausmeister **angerufen**.`'],
                    ['`Ich habe … bekommen`', 'Я получил …', '`Ich **habe** Ihre E-Mail leider zu spät **bekommen**.`'],
                    ['`Ich habe … gemacht`', 'Я сделал …', '`Ich **habe** alle Hausaufgaben **gemacht**.`'],
                    ['`Ich bin … gegangen`', 'Я ходил, пошёл …', '`Ich **bin** gestern zum Arzt **gegangen**.`'],
                    ['`Ich bin … gekommen`', 'Я пришёл, приехал …', '`Ich **bin** zu spät zur Arbeit **gekommen**.`'],
                    ['`Ich bin … geblieben`', 'Я остался …', '`Ich **bin** drei Tage zu Hause **geblieben**.`'],
                    ['`Ich habe versucht, … zu …`', 'Я пытался …', '`Ich habe **versucht**, Sie **anzurufen**.`'],
                    ['`Ich habe vergessen, … zu …`', 'Я забыл …', '`Ich habe **vergessen**, das Formular **mitzubringen**.`'],
                    ['`Es gab …` + Akk', 'Был, была, были … (имелось)', '`Gestern **gab** es keinen Strom im Haus.`'],
                    ['`Gestern` / `Letzte Woche` / `Vor drei Tagen` …', 'Вчера / На прошлой неделе / Три дня назад …', '`Letzte Woche **ist** meine Waschmaschine **kaputtgegangen**.`'],
                    ['`Seit … bin ich …`', 'Я уже … (с … и до сих пор)', '`Seit Montag **bin** ich krankgeschrieben.`']
                ],
                note: '`Seit` + то, что длится до сих пор, — Präsens, не Perfekt.'
            },
            { type: 'rule', text: 'Perfekt с `sein`: движение и перемена состояния — `gehen`, `kommen`, `fahren`, `fliegen`, `umziehen`, `aufstehen`, а также `bleiben`, `sein`, `werden`, `passieren`. Остальные — с `haben`.' }
        ]
    },

    {
        id: 'c-infinitiv',
        title: 'Модальные глаголы, zu-Infinitiv, um … zu',
        drill: 'g10',
        blocks: [
            { type: 'h', text: '1. Модальные глаголы' },
            {
                type: 'table',
                head: ['Глагол', 'Значение', 'Пример'],
                rows: [
                    ['`können` — `ich kann`', 'могу, умею', '`Ich **kann** leider erst um 18 Uhr **kommen**.`'],
                    ['`müssen` — `ich muss`', 'должен, надо (необходимо)', '`Ich **muss** am Dienstag lange **arbeiten**.`'],
                    ['`wollen` — `ich will`', 'хочу, собираюсь (твёрдо)', '`Ich **will** im Juni die Prüfung **machen**.`'],
                    ['`dürfen` — `ich darf`', 'можно, разрешено', '`**Darf** ich meinen Sohn **mitbringen**?`'],
                    ['`sollen` — `ich soll`', 'должен (так велели другие)', '`Der Arzt sagt, ich **soll** zu Hause **bleiben**.`'],
                    ['`möchten` — `ich möchte`', 'хотел бы (вежливо)', '`Ich **möchte** mich für den Kurs **anmelden**.`']
                ],
                note: 'Модальный глагол — на 2-м месте, инфинитив без `zu` — в конце. `nicht müssen` — «не нужно», `nicht dürfen` — «нельзя».'
            },
            { type: 'trap', wrong: 'Ich muss am Montag zu arbeiten.', right: 'Ich muss am Montag arbeiten.', why: 'После `muss`, `kann`, `möchte` инфинитив идёт без `zu`.' },

            { type: 'h', text: '2. zu-Infinitiv' },
            {
                type: 'table',
                head: ['Конструкция', 'Перевод', 'Пример'],
                rows: [
                    ['`Ich habe keine Zeit, … zu …`', 'У меня нет времени …', '`Ich habe keine Zeit, am Vormittag **zu kommen**.`'],
                    ['`Es ist wichtig, … zu …`', 'Важно …', '`Es ist wichtig, die Miete pünktlich **zu bezahlen**.`'],
                    ['`Es ist nicht möglich, … zu …`', 'Невозможно …', '`Es ist leider nicht möglich, den Kurs **zu wechseln**.`'],
                    ['`Ich habe vor, … zu …`', 'Я собираюсь …', '`Ich habe vor, im Sommer **umzuziehen**.`'],
                    ['`Ich freue mich, … zu …`', 'Я рад …', '`Ich freue mich, Sie bald **kennenzulernen**.`'],
                    ['`Ich bitte Sie, … zu …`', 'Прошу вас …', '`Ich bitte Sie, mich **zurückzurufen**.`'],
                    ['`Hast du Lust, … zu …?`', 'Хочешь …? (дружески)', '`Hast du Lust, am Samstag mit uns **zu grillen**?`'],
                    ['`um … zu`', 'чтобы', '`Ich gehe zum Amt, um den Antrag **abzugeben**.`'],
                    ['`ohne … zu`', 'не делая …, без того чтобы', '`Die Nachbarn feiern laut, ohne uns **zu fragen**.`'],
                    ['`statt … zu`', 'вместо того чтобы', '`Der Vermieter schreibt nur E-Mails, statt die Heizung **zu reparieren**.`']
                ]
            },
            { type: 'formula', parts: ['приставка', '+ `zu` +', 'глагол', '= **anzurufen**'], note: 'Отделяемая приставка: `zu` в середине, всё одним словом — `mitzubringen`, `abzusagen`, `kennenzulernen`.' },
            { type: 'trap', wrong: 'Ich habe vor, zu umziehen.', right: 'Ich habe vor, umzuziehen.', why: 'У отделяемого глагола `zu` встаёт между приставкой и корнем: `umzuziehen`, `anzurufen`.' }
        ]
    },

    {
        id: 'c-kasus',
        title: 'Падежи за полминуты',
        drill: 'g07',
        blocks: [
            { type: 'h', text: '1. Wer? Wen? Wem?' },
            {
                type: 'table',
                head: ['Род', 'Nom (wer?)', 'Akk (wen?)', 'Dat (wem?)', 'Он / она / оно / они'],
                rows: [
                    ['м. р.', '`der / ein / kein / mein Termin`', '`**den / einen / keinen / meinen** Termin`', '`dem / einem / keinem / meinem Termin`', '`er → ihn → ihm`'],
                    ['ж. р.', '`die / eine / keine / meine Wohnung`', '`die / eine / keine / meine Wohnung`', '`der / einer / keiner / meiner Wohnung`', '`sie → sie → ihr`'],
                    ['ср. р.', '`das / ein / kein / mein Formular`', '`das / ein / kein / mein Formular`', '`dem / einem / keinem / meinem Formular`', '`es → es → ihm`'],
                    ['мн. ч.', '`die / – / keine / meine Kinder`', '`die / – / keine / meine Kinder`', '`den / – / keinen / meinen Kindern`', '`sie → sie → ihnen`']
                ],
                note: 'В Akk меняется только мужской род. В Dat меняются все; во мн. ч. существительное получает `-n` (кроме форм на -n и -s): `mit den Kindern`.'
            },
            {
                type: 'table',
                head: ['Лицо', 'Nom → Akk → Dat'],
                rows: [
                    ['я', '`ich → mich → mir`'],
                    ['ты', '`du → dich → dir`'],
                    ['мы', '`wir → uns → uns`'],
                    ['вы (друзьям)', '`ihr → euch → euch`'],
                    ['Вы (вежливо)', '`Sie → Sie → Ihnen`']
                ]
            },

            { type: 'h', text: '2. Глаголы с Dativ' },
            {
                type: 'table',
                head: ['Глагол + Dat', 'Перевод', 'Пример'],
                rows: [
                    ['`helfen`', 'помогать', '`Können Sie **mir** bitte helfen?`'],
                    ['`danken`', 'благодарить (по-немецки «кому»)', '`Ich danke **Ihnen** für Ihre Hilfe.`'],
                    ['`gefallen`', 'нравиться', '`Die neue Wohnung gefällt **uns** sehr gut.`'],
                    ['`gehören`', 'принадлежать', '`Gehört das Fahrrad im Flur **Ihnen**?`'],
                    ['`passen`', 'подходить, быть удобным', '`Der Termin am Montag passt **mir** gut.`'],
                    ['`antworten`', 'отвечать', '`Bitte antworten Sie **mir** bis Freitag.`'],
                    ['`gratulieren`', 'поздравлять (по-немецки «кому»)', '`Ich gratuliere **dir** zum Geburtstag!`'],
                    ['`fehlen`', 'не хватать, недоставать', '`Leider fehlt **mir** noch ein Formular.`']
                ]
            },

            { type: 'h', text: '3. Кому и что: порядок' },
            { type: 'formula', parts: ['**глагол**', 'кому (Dat)', 'что (Akk)'], note: 'Два существительных: сначала человек (Dat), потом вещь (Akk).' },
            { type: 'ex', de: 'Ich schicke **meiner Lehrerin** **die Hausaufgaben**.', ru: 'Я пришлю учительнице домашние задания.' },
            { type: 'formula', parts: ['**глагол**', 'местоимение', 'существительное'], note: 'Местоимение — вперёд, в каком бы падеже оно ни было.' },
            {
                type: 'exs',
                items: [
                    { de: 'Ich schicke **Ihnen** die Unterlagen.', ru: 'Я пришлю вам документы.' },
                    { de: 'Ich schicke **sie** meiner Lehrerin.', ru: 'Я пришлю их учительнице.' }
                ]
            },
            { type: 'formula', parts: ['**глагол**', '`sie`, `ihn`, `es` (Akk)', '`Ihnen`, `mir` (Dat)'], note: 'Два местоимения: сначала Akk, потом Dat.' },
            { type: 'ex', de: 'Ich schicke **sie** **Ihnen** morgen.', ru: 'Я пришлю их вам завтра.' }
        ]
    },

    {
        id: 'c-praepositionen',
        title: 'Предлоги: быстрая карта',
        drill: 'g09',
        blocks: [
            { type: 'h', text: '1. Когда?' },
            {
                type: 'table',
                head: ['Предлог', 'Когда', 'Пример'],
                rows: [
                    ['`am`', 'день, дата, часть дня', '`am Montag`, `am 5. Mai`, `am Abend`'],
                    ['`um`', 'время по часам', '`um 9 Uhr`, `um halb drei`'],
                    ['`im`', 'месяц, время года', '`im Mai`, `im Sommer`'],
                    ['`in` + Dat', 'через (о будущем)', '`in einer Woche`, `in zwei Tagen`'],
                    ['`vor` + Dat', '… назад; перед', '`vor zwei Tagen`, `vor dem Kurs`'],
                    ['`nach` + Dat', 'после', '`nach der Arbeit`, `nach dem Termin`'],
                    ['`seit` + Dat', 'с (и до сих пор)', '`seit einem Monat`, `seit Montag`'],
                    ['`ab`', 'с, начиная с', '`ab Montag`, `ab nächster Woche`'],
                    ['`bis`', 'до', '`bis Freitag`, `bis 18 Uhr`'],
                    ['`von … bis`', 'с … до', '`von 9 bis 12 Uhr`, `von Montag bis Freitag`']
                ],
                note: 'Но ночью — `in der Nacht`.'
            },

            { type: 'h', text: '2. Где? Куда? Откуда?' },
            {
                type: 'table',
                head: ['Wo? (где)', 'Wohin? (куда)', 'Woher? (откуда)'],
                rows: [
                    ['`in der Schule`', '`in die Schule`', '`aus der Schule`'],
                    ['`im Büro`', '`ins Büro`', '`aus dem Büro`'],
                    ['`beim Arzt`', '`zum Arzt`', '`vom Arzt`'],
                    ['`bei mir`', '`zu mir`', '`von mir`'],
                    ['`zu Hause`', '`nach Hause`', '`von zu Hause`'],
                    ['`in Berlin`', '`nach Berlin`', '`aus Berlin`']
                ],
                note: 'Здание, комната — `in / in / aus`; человек — `bei / zu / von`; город или страна без артикля — `in / nach / aus`.'
            },
            { type: 'trap', wrong: 'Ich gehe morgen in den Arzt.', right: 'Ich gehe morgen zum Arzt.', why: 'К человеку (врачу, другу) — `zu`; `in` — в здание или помещение: `ins Krankenhaus`, `in die Praxis`.' },

            { type: 'h', text: '3. Какой падеж после предлога' },
            {
                type: 'table',
                head: ['Падеж', 'Предлоги', 'Пример'],
                rows: [
                    ['всегда Dat', '`aus`, `bei`, `mit`, `nach`, `seit`, `von`, `zu`', '`mit **dem** Bus`, `seit **einer** Woche`'],
                    ['всегда Akk', '`durch`, `für`, `gegen`, `ohne`, `um`', '`für **den** Kurs`, `ohne **meinen** Mann`'],
                    ['где? → Dat', '`in`, `an`, `auf`, `vor`, `hinter`, `über`, `unter`, `neben`, `zwischen`', '`Ich bin **in der** Stadt.`'],
                    ['куда? → Akk', 'те же', '`Ich gehe **in die** Stadt.`']
                ]
            },
            { type: 'rule', text: 'Слияния: `im` = `in dem`, `ins` = `in das`, `am` = `an dem`, `zum` = `zu dem`, `zur` = `zu der`, `beim` = `bei dem`, `vom` = `von dem`.' }
        ]
    },

    {
        id: 'c-fallen',
        title: 'Топ-20 ловушек: так не пишут',
        blocks: [
            {
                type: 'table',
                head: ['Неверно', 'Верно', 'Почему'],
                rows: [
                    ['`Leider ich kann morgen nicht kommen.`', '`Leider **kann** ich morgen nicht kommen.`', 'После `Heute`, `Leider`, `Deshalb` — сразу глагол, потом подлежащее.'],
                    ['`…, weil ich bin krank.`', '`…, weil ich krank **bin**.`', 'После `weil`, `dass`, `wenn` спрягаемый глагол — в конец.'],
                    ['`Ich komme nicht weil ich krank bin.`', '`Ich komme nicht**,** weil ich krank bin.`', 'Перед `weil`, `dass`, `wenn`, `ob` — всегда запятая.'],
                    ['`Ich habe zum Arzt gegangen.`', '`Ich **bin** zum Arzt gegangen.`', 'Движение (`gehen`, `kommen`, `fahren`) — Perfekt с `sein`.'],
                    ['`Ich habe angerufen Sie gestern.`', '`Ich habe Sie gestern **angerufen**.`', 'Partizip II — последнее слово предложения.'],
                    ['`Kannst du mit mich zum Arzt gehen?`', '`Kannst du mit **mir** zum Arzt gehen?`', '`mit` — всегда Dativ: `mit mir`, `mit Ihnen`.'],
                    ['`Ich brauche ein Termin.`', '`Ich brauche **einen** Termin.`', '`der Termin` — мужской род, в Akk: `einen`, `den`.'],
                    ['`Ich will einen neuen Termin.`', '`Ich **möchte** einen neuen Termin.`', 'Грамматика верна, но `will` звучит как требование.'],
                    ['`Ich warte für Ihre Antwort.`', '`Ich warte **auf** Ihre Antwort.`', '`warten auf` + Akk.'],
                    ['`Ich freue mich von Ihrem Brief.`', '`Ich freue mich **über** Ihren Brief.`', '`sich freuen über` + Akk (уже есть), `auf` + Akk (будет).'],
                    ['`Ich hoffe, das Sie kommen.`', '`Ich hoffe, **dass** Sie kommen.`', 'Союз «что» — `dass`; `das` — артикль или «это».'],
                    ['`Ich bin zu hause.`', '`Ich bin zu **Hause**.`', 'Существительное — с большой буквы: `zu Hause`, `nach Hause`.'],
                    ['`Liebe Frau Krause, Ich …`', '`Liebe Frau Krause, **ich** …`', 'После запятой в обращении текст идёт со строчной буквы.'],
                    ['`Ich habe Angst von der Prüfung.`', '`Ich habe Angst **vor** der Prüfung.`', '`Angst vor` + Dat.'],
                    ['`Ich bin 30 Jahre.`', '`Ich bin 30 Jahre **alt**.`', 'Возраст: `… Jahre alt` или просто `Ich bin 30.`'],
                    ['`Ich kenne, dass der Kurs ausfällt.`', '`Ich **weiß**, dass der Kurs ausfällt.`', 'Знать факт — `wissen`; `kennen` — знать человека, место, вещь.'],
                    ['`Ich danke Sie für die Hilfe.`', '`Ich danke **Ihnen** für die Hilfe.`', '`danken`, `helfen`, `antworten` — с Dativ.'],
                    ['`Ich gehe zu Hause.`', '`Ich gehe **nach** Hause.`', 'Куда — `nach Hause`, где — `zu Hause`.'],
                    ['`Sehr geehrte Herr Krause,`', '`Sehr **geehrter** Herr Krause,`', 'Мужчине — `geehrter`, женщине — `geehrte`.'],
                    ['`Mit freundlichen Grüßen,`', '`Mit freundlichen Grüßen`', 'После прощальной формулы запятая не ставится.']
                ]
            }
        ]
    },

    {
        id: 'c-check',
        title: 'Чек-лист: 10 вопросов к своему письму',
        blocks: [
            { type: 'p', text: 'Последние 5 минут экзамена. Идите сверху вниз: сначала то, что стоит больше баллов.' },
            {
                type: 'list',
                items: [
                    '**1. Все четыре пункта раскрыты?** На каждый — хотя бы одно-два предложения. Забыли предложить время → `Passt es Ihnen am Freitag um 10 Uhr?`',
                    '**2. Есть обращение и прощание?** `Sehr geehrte Herr Krause` → `Sehr geehrter Herr Krause,` … `Mit freundlichen Grüßen`',
                    '**3. Один регистр?** `Sehr geehrte Frau Meinert, kannst du …` → `Sehr geehrte Frau Meinert, können Sie …`',
                    '**4. Глагол на втором месте?** `Morgen ich komme später.` → `Morgen komme ich später.`',
                    '**5. Придаточные: глагол в конце, перед союзом запятая?** `Ich komme nicht weil ich bin krank.` → `Ich komme nicht, weil ich krank bin.`',
                    '**6. Perfekt: haben или sein, Partizip II в конце?** `Ich habe gekommen zu spät.` → `Ich bin zu spät gekommen.`',
                    '**7. У каждого существительного верный артикль и падеж?** `Ich brauche ein Termin.` → `Ich brauche einen Termin.`',
                    '**8. У прилагательных есть окончание?** `Ich habe eine neu Wohnung.` → `Ich habe eine neue Wohnung.`',
                    '**9. Существительные и вежливое Sie — с большой буквы?** `Können sie mir den termin bestätigen?` → `Können Sie mir den Termin bestätigen?`',
                    '**10. Читается ли от руки?** Умлауты `ä`, `ö`, `ü` и буква `ß` написаны чётко: `Grusse` → `Grüße`.'
                ]
            },
            { type: 'tip', text: 'Мало времени — проверьте хотя бы вопросы 1, 2 и 4: пункты задания и обращение оцениваются отдельно, а порядок слов — одна из самых частых ошибок.' }
        ]
    }
];
