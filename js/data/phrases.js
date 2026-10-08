/**
 * Готовые фразы для письма: пятнадцать групп по назначению.
 *
 * Фразу вставляют в письмо целиком, «…» — место для своих слов. В note —
 * только то, что нужно знать при вставке: регистр, порядок слов, запятая, падеж.
 */

export default [
    { id: 'p01', title: 'Обращение', items: [
        { de: 'Sehr geehrte Frau …,', ru: 'Уважаемая госпожа …,', note: 'формально; после обращения запятая, а письмо продолжается со строчной буквы: `ich schreibe Ihnen …`' },
        { de: 'Sehr geehrter Herr …,', ru: 'Уважаемый господин …,', note: 'формально; к мужчине — `geehrter`, с окончанием -er' },
        { de: 'Sehr geehrte Damen und Herren,', ru: 'Уважаемые дамы и господа,', note: 'формально, когда имя адресата неизвестно: фирма, ведомство, управляющая компания' },
        { de: 'Sehr geehrte Frau …, sehr geehrter Herr …,', ru: 'Уважаемая госпожа …, уважаемый господин …,', note: 'формально, двум адресатам; второе обращение — со строчной буквы' },
        { de: 'Guten Tag, Frau …,', ru: 'Добрый день, госпожа …,', note: 'полуформально и нейтрально; так же `Guten Tag, Herr …,`' },
        { de: 'Liebe Frau …,', ru: 'Дорогая госпожа …,', note: 'полуформально: знакомой, с которой вы на «Sie» (учительнице, соседке)' },
        { de: 'Lieber Herr …,', ru: 'Дорогой господин …,', note: 'полуформально: знакомому на «Sie»; к мужчине — `Lieber`' },
        { de: 'Liebe …,', ru: 'Дорогая …,', note: 'дружески, на «du»: подруге по имени' },
        { de: 'Lieber …,', ru: 'Дорогой …,', note: 'дружески, на «du»: другу по имени' },
        { de: 'Liebe …, lieber …,', ru: 'Дорогая …, дорогой …,', note: 'дружески, двоим: у каждого имени своё окончание' },
        { de: 'Hallo, …,', ru: 'Привет, …,', note: 'дружески' },
        { de: 'Hallo zusammen,', ru: 'Всем привет,', note: 'дружески, нескольким людям сразу: друзьям, группе на курсе' },
        { de: 'Liebe Nachbarinnen und Nachbarn,', ru: 'Дорогие соседи,', note: 'всем соседям сразу, например в объявлении в подъезде' }
    ]},

    { id: 'p02', title: 'Начало письма и причина письма', items: [
        { de: 'Ich schreibe Ihnen, weil …', ru: 'Я пишу вам, потому что …', note: 'сразу после обращения — со строчной: `ich schreibe …`; после weil глагол в конце' },
        { de: 'Ich schreibe dir, weil …', ru: 'Я пишу тебе, потому что …', note: 'дружески' },
        { de: 'Ich schreibe Ihnen wegen …', ru: 'Я пишу вам по поводу …', note: 'после wegen — существительное: `wegen der Reparatur`, `wegen des Termins`' },
        { de: 'Ich möchte Ihnen mitteilen, dass …', ru: 'Я хотел бы сообщить вам, что …', note: 'после dass глагол в конце' },
        { de: 'Leider muss ich Ihnen mitteilen, dass …', ru: 'К сожалению, я должен сообщить вам, что …' },
        { de: 'Ich habe eine Frage zu …', ru: 'У меня вопрос по поводу …', note: 'zu + Dativ: `zum Kurs`, `zur Rechnung`' },
        { de: 'Ich habe Ihre Anzeige gelesen und interessiere mich für …', ru: 'Я прочитал ваше объявление и интересуюсь …', note: 'für + Akkusativ: `für die Wohnung`, `für den Kurs`' },
        { de: 'Vielen Dank für Ihre E-Mail.', ru: 'Большое спасибо за ваше письмо.', note: 'начало ответа на письмо' },
        { de: 'Danke für deine Nachricht!', ru: 'Спасибо за твоё сообщение!', note: 'дружески' },
        { de: 'Ich hoffe, es geht Ihnen gut.', ru: 'Надеюсь, у вас всё хорошо.' },
        { de: 'Wie geht es dir? Mir geht es gut.', ru: 'Как у тебя дела? У меня всё хорошо.', note: 'дружески, в начале письма перед главной темой' }
    ]},

    { id: 'p03', title: 'Причина и объяснение', items: [
        { de: '…, weil ich krank bin.', ru: '…, потому что я болен.', note: 'перед weil запятая; спрягаемый глагол — в конце' },
        { de: '…, denn ich muss arbeiten.', ru: '…, потому что мне нужно работать.', note: 'после denn обычный порядок: глагол на втором месте' },
        { de: 'Da ich an diesem Tag arbeiten muss, kann ich nicht kommen.', ru: 'Так как в этот день мне нужно работать, я не могу прийти.', note: 'придаточное впереди — главное начинается с глагола: `kann ich`' },
        { de: 'Der Grund ist, dass …', ru: 'Причина в том, что …', note: 'после dass глагол в конце' },
        { de: 'Mein Kind ist krank, deshalb muss ich zu Hause bleiben.', ru: 'Мой ребёнок болен, поэтому мне нужно остаться дома.', note: 'после deshalb сразу глагол: `deshalb muss ich`' },
        { de: 'Ich habe an diesem Tag einen Arzttermin.', ru: 'В этот день у меня приём у врача.' },
        { de: 'Ich muss an diesem Tag länger arbeiten.', ru: 'В этот день мне нужно дольше работать.' },
        { de: 'Mein Zug hatte Verspätung.', ru: 'Мой поезд опоздал.' },
        { de: 'Ich habe die Nachricht leider zu spät gelesen.', ru: 'К сожалению, я слишком поздно прочитал сообщение.' },
        { de: 'Ich bin umgezogen und habe jetzt einen längeren Weg zur Arbeit.', ru: 'Я переехал, и теперь мне дальше добираться до работы.', note: '`umziehen` — Perfekt с sein: `ich bin umgezogen`' },
        { de: 'Ich hatte leider keine Zeit, weil …', ru: 'К сожалению, у меня не было времени, потому что …' }
    ]},

    { id: 'p04', title: 'Извинение', items: [
        { de: 'Es tut mir leid, dass …', ru: 'Мне жаль, что …', note: 'после dass глагол в конце: `dass ich nicht kommen konnte`' },
        { de: 'Bitte entschuldigen Sie, dass ich mich erst jetzt melde.', ru: 'Пожалуйста, извините, что я даю о себе знать только сейчас.' },
        { de: 'Entschuldigen Sie bitte die späte Antwort.', ru: 'Извините, пожалуйста, за поздний ответ.', note: '`Entschuldigen Sie` + Akkusativ, без предлога; но `sich entschuldigen für …`' },
        { de: 'Ich möchte mich für … entschuldigen.', ru: 'Я хотел бы извиниться за …', note: 'für + Akkusativ: `für den Lärm`, `für die Verspätung`' },
        { de: 'Ich möchte mich bei Ihnen entschuldigen.', ru: 'Я хотел бы извиниться перед вами.', note: '«перед кем» — bei + Dativ: `bei Ihnen`, `bei dir`' },
        { de: 'Entschuldige bitte, dass …', ru: 'Извини, пожалуйста, что …', note: 'дружески' },
        { de: 'Sei mir bitte nicht böse!', ru: 'Пожалуйста, не сердись на меня!', note: 'дружески' },
        { de: 'Leider habe ich den Termin vergessen.', ru: 'К сожалению, я забыл о встрече.' },
        { de: 'Das kommt nicht wieder vor.', ru: 'Это больше не повторится.' },
        { de: 'Natürlich bezahle ich den Schaden.', ru: 'Конечно, я возмещу ущерб.' },
        { de: 'Ich bitte um Ihr Verständnis.', ru: 'Прошу отнестись к этому с пониманием.' }
    ]},

    { id: 'p05', title: 'Вежливая просьба', items: [
        { de: 'Könnten Sie mir bitte … schicken?', ru: 'Не могли бы вы прислать мне …?', note: 'вежливо: Konjunktiv II; инфинитив в конце' },
        { de: 'Könnten Sie mir bitte sagen, wann …?', ru: 'Не могли бы вы сказать мне, когда …?', note: 'после wann глагол в конце: `wann der Kurs beginnt`' },
        { de: 'Würden Sie mich bitte zurückrufen?', ru: 'Не могли бы вы мне перезвонить?' },
        { de: 'Ich möchte Sie bitten, mir … zu schicken.', ru: 'Я хотел бы попросить вас прислать мне …', note: '`zu` + инфинитив — в конце' },
        { de: 'Ich bitte Sie um eine schnelle Antwort.', ru: 'Прошу вас ответить как можно скорее.', note: 'bitten um + Akkusativ' },
        { de: 'Wäre es möglich, den Termin zu verschieben?', ru: 'Можно ли перенести встречу?' },
        { de: 'Es wäre sehr nett, wenn Sie mir helfen könnten.', ru: 'Было бы очень любезно, если бы вы мне помогли.', note: 'после wenn оба глагола в конце, спрягаемый — последним' },
        { de: 'Ich wäre Ihnen sehr dankbar, wenn …', ru: 'Я был бы вам очень благодарен, если бы …' },
        { de: 'Schicken Sie mir bitte die Unterlagen.', ru: 'Пришлите мне, пожалуйста, документы.', note: 'просьба на «Sie»: сначала глагол, потом `Sie`' },
        { de: 'Ich brauche bis Freitag eine Bescheinigung.', ru: 'Мне нужна справка до пятницы.' },
        { de: 'Kannst du mir bitte helfen?', ru: 'Ты можешь мне помочь?', note: 'дружески; helfen + Dativ: `mir`, `dir`, `Ihnen`' },
        { de: 'Könntest du bitte meine Blumen gießen?', ru: 'Не мог бы ты полить мои цветы?', note: 'дружески' }
    ]},

    { id: 'p06', title: 'Вопрос и запрос информации', items: [
        { de: 'Ich möchte gern wissen, wann …', ru: 'Я хотел бы узнать, когда …', note: 'косвенный вопрос: глагол в конце — `wann der Kurs beginnt`' },
        { de: 'Können Sie mir sagen, ob noch Plätze frei sind?', ru: 'Не скажете, есть ли ещё свободные места?', note: 'ob = «ли»; глагол в конце' },
        { de: 'Wie viel kostet der Kurs?', ru: 'Сколько стоит курс?', note: '`wie viel` — два слова' },
        { de: 'Wann und wo findet das Treffen statt?', ru: 'Когда и где будет встреча?', note: 'stattfinden: приставка `statt` в конце' },
        { de: 'Was muss ich mitbringen?', ru: 'Что мне нужно взять с собой?' },
        { de: 'Welche Unterlagen brauche ich?', ru: 'Какие документы мне нужны?' },
        { de: 'Muss ich mich vorher anmelden?', ru: 'Нужно ли записываться заранее?' },
        { de: 'Wie lange dauert die Reparatur?', ru: 'Сколько времени займёт ремонт?' },
        { de: 'Bis wann muss ich das Formular abgeben?', ru: 'До какого срока нужно сдать бланк?' },
        { de: 'Ich habe noch eine Frage: Gibt es auch einen Abendkurs?', ru: 'У меня ещё один вопрос: есть ли также вечерний курс?', note: 'после двоеточия целое предложение пишется с заглавной' },
        { de: 'Weißt du schon, wann du kommst?', ru: 'Ты уже знаешь, когда приедешь?', note: 'дружески' }
    ]},

    { id: 'p07', title: 'Сообщение информации и планов', items: [
        { de: 'Ich sage Ihnen rechtzeitig Bescheid.', ru: 'Я сообщу вам заранее.' },
        { de: 'Ich habe vor, im Sommer einen Deutschkurs zu machen.', ru: 'Летом я собираюсь пойти на курс немецкого.', note: '`zu` + инфинитив — в конце' },
        { de: 'Ich werde im Herbst einen Computerkurs besuchen.', ru: 'Осенью я буду ходить на компьютерные курсы.', note: 'werden + инфинитив в конце' },
        { de: 'Nächste Woche fange ich eine neue Arbeit an.', ru: 'На следующей неделе я выхожу на новую работу.', note: 'anfangen: приставка `an` в конце' },
        { de: 'Ich ziehe am 1. November um.', ru: 'Я переезжаю 1 ноября.', note: 'umziehen: приставка `um` в конце' },
        { de: 'Meine neue Adresse ist: …', ru: 'Мой новый адрес: …' },
        { de: 'Ich bin vom … bis zum … im Urlaub.', ru: 'С … по … я в отпуске.', note: 'с датами: `vom 3. bis zum 17. August`' },
        { de: 'In dieser Zeit können Sie mich per E-Mail erreichen.', ru: 'В это время со мной можно связаться по электронной почте.' },
        { de: 'Ich habe die Prüfung bestanden.', ru: 'Я сдал экзамен.' },
        { de: 'Ich habe eine neue Stelle gefunden.', ru: 'Я нашёл новую работу.' },
        { de: 'Ich melde mich wieder, wenn ich mehr weiß.', ru: 'Я снова напишу, когда буду знать больше.' }
    ]},

    { id: 'p08', title: 'Предложение и договорённость о времени', items: [
        { de: 'Wie wäre es am Freitagnachmittag?', ru: 'Как насчёт пятницы во второй половине дня?' },
        { de: 'Ich schlage vor, dass wir uns am Samstag treffen.', ru: 'Я предлагаю встретиться в субботу.', note: 'после dass глагол в конце' },
        { de: 'Hätten Sie am Dienstag um 15 Uhr Zeit?', ru: 'Найдётся ли у вас время во вторник в 15 часов?', note: 'вежливо: hätten — Konjunktiv II от haben' },
        { de: 'Passt Ihnen der Donnerstag?', ru: 'Вам подходит четверг?', note: 'passen + Dativ: `Ihnen`, `dir`' },
        { de: 'Passt es dir am Wochenende?', ru: 'Тебе удобно в выходные?', note: 'дружески' },
        { de: 'Könnten wir den Termin auf Donnerstag verschieben?', ru: 'Могли бы мы перенести встречу на четверг?', note: 'verschieben auf + Akkusativ' },
        { de: 'Ich hätte am Mittwochvormittag Zeit.', ru: 'Я был бы свободен в среду до обеда.' },
        { de: 'Am besten passt es mir am Montag.', ru: 'Мне удобнее всего в понедельник.' },
        { de: 'Wir könnten zusammen ins Kino gehen.', ru: 'Мы могли бы вместе сходить в кино.', note: 'дружески' },
        { de: 'Was hältst du davon, wenn wir zusammen kochen?', ru: 'Как ты смотришь на то, чтобы вместе что-нибудь приготовить?', note: 'дружески; после wenn глагол в конце' },
        { de: 'Wenn Ihnen der Termin nicht passt, finden wir gern einen anderen.', ru: 'Если вам это время не подходит, мы охотно найдём другое.', note: 'придаточное впереди — главное начинается с глагола: `finden wir`' },
        { de: 'Sagen Sie mir bitte Bescheid, ob der Termin passt.', ru: 'Сообщите мне, пожалуйста, подходит ли вам это время.' }
    ]},

    { id: 'p09', title: 'Согласие и отказ', items: [
        { de: 'Ja, gern!', ru: 'Да, с удовольствием!' },
        { de: 'Vielen Dank für die Einladung, ich komme sehr gern.', ru: 'Большое спасибо за приглашение, я с удовольствием приду.' },
        { de: 'Das ist eine gute Idee.', ru: 'Это хорошая идея.' },
        { de: 'Der Termin passt mir gut.', ru: 'Это время мне хорошо подходит.' },
        { de: 'Ich bin damit einverstanden.', ru: 'Я с этим согласен.' },
        { de: 'Natürlich helfe ich dir gern.', ru: 'Конечно, я с удовольствием тебе помогу.', note: 'дружески' },
        { de: 'Leider kann ich nicht kommen, weil …', ru: 'К сожалению, я не могу прийти, потому что …' },
        { de: 'Leider habe ich an diesem Tag keine Zeit.', ru: 'К сожалению, в этот день у меня нет времени.' },
        { de: 'Ich muss den Termin leider absagen.', ru: 'К сожалению, мне придётся отменить встречу.', note: 'absagen: инфинитив в конце' },
        { de: 'Vielleicht klappt es ein anderes Mal.', ru: 'Может быть, получится в другой раз.' },
        { de: 'Ich bin damit nicht ganz einverstanden.', ru: 'Я с этим не совсем согласен.' }
    ]},

    { id: 'p10', title: 'Жалоба и требование', items: [
        { de: 'Ich möchte mich über … beschweren.', ru: 'Я хотел бы пожаловаться на …', note: 'über + Akkusativ: `über den Lärm`, `über die Heizung`' },
        { de: 'Leider bin ich mit … nicht zufrieden.', ru: 'К сожалению, я недоволен …', note: 'mit + Dativ: `mit dem Service`, `mit der Reparatur`' },
        { de: 'Seit einer Woche funktioniert die Heizung nicht.', ru: 'Уже неделю не работает отопление.', note: 'seit + Dativ; глагол в Präsens, потому что проблема есть и сейчас' },
        { de: 'Ich habe die Waschmaschine am 3. Oktober bei Ihnen gekauft.', ru: 'Я купил у вас стиральную машину 3 октября.' },
        { de: 'Das Gerät ist schon nach zwei Wochen kaputtgegangen.', ru: 'Прибор сломался уже через две недели.', note: '«через» о прошлом — nach + Dativ; `kaputtgehen` — Perfekt с sein' },
        { de: 'Die laute Musik stört mich, besonders nachts.', ru: 'Громкая музыка мне мешает, особенно ночью.' },
        { de: 'Ich habe Sie schon dreimal angerufen, aber niemand hat sich gemeldet.', ru: 'Я уже трижды вам звонил, но никто не ответил.' },
        { de: 'Das ist für mich nicht akzeptabel.', ru: 'Для меня это неприемлемо.' },
        { de: 'Bitte schicken Sie so schnell wie möglich einen Handwerker.', ru: 'Пожалуйста, пришлите мастера как можно скорее.' },
        { de: 'Ich bitte Sie, das Problem bis Freitag zu lösen.', ru: 'Прошу вас решить проблему до пятницы.', note: '`zu` + инфинитив — в конце' },
        { de: 'Bitte überweisen Sie mir das Geld zurück.', ru: 'Пожалуйста, верните мне деньги на счёт.' },
        { de: 'Ich erwarte Ihre Antwort bis zum 15. November.', ru: 'Жду вашего ответа до 15 ноября.', note: 'читается: `bis zum fünfzehnten November`' }
    ]},

    { id: 'p11', title: 'Благодарность и поздравления', items: [
        { de: 'Vielen Dank für Ihre Hilfe.', ru: 'Большое спасибо за вашу помощь.', note: 'für + Akkusativ' },
        { de: 'Ich danke Ihnen für Ihre Unterstützung.', ru: 'Благодарю вас за поддержку.', note: 'danken + Dativ: `Ihnen`, `dir`' },
        { de: 'Das war sehr nett von Ihnen.', ru: 'Это было очень любезно с вашей стороны.' },
        { de: 'Danke, dass du mir geholfen hast.', ru: 'Спасибо, что ты мне помог.', note: 'дружески; после dass глагол в конце' },
        { de: 'Ich habe mich sehr über deinen Brief gefreut.', ru: 'Я очень обрадовался твоему письму.', note: 'sich freuen über + Akkusativ — о том, что уже случилось' },
        { de: 'Herzlichen Glückwunsch zum Geburtstag!', ru: 'Поздравляю с днём рождения!', note: '`zum` = `zu dem`' },
        { de: 'Herzlichen Glückwunsch zur bestandenen Prüfung!', ru: 'Поздравляю со сданным экзаменом!', note: '`zur` = `zu der`' },
        { de: 'Ich gratuliere dir herzlich zur Hochzeit!', ru: 'Сердечно поздравляю тебя со свадьбой!', note: 'gratulieren + Dativ: `dir`, `Ihnen`; поздравляют zu + Dativ' },
        { de: 'Ich wünsche Ihnen alles Gute!', ru: 'Желаю вам всего хорошего!' },
        { de: 'Ich wünsche dir gute Besserung!', ru: 'Желаю тебе скорее поправиться!', note: 'дружески; на «Sie» — `Ich wünsche Ihnen gute Besserung!`' },
        { de: 'Viel Erfolg bei der Prüfung!', ru: 'Удачи на экзамене!' }
    ]},

    { id: 'p12', title: 'Связки и переходы', items: [
        { de: 'Außerdem möchte ich Sie fragen, ob der Kurs auch im Sommer stattfindet.', ru: 'Кроме того, я хотел бы спросить, проходит ли курс и летом.', note: 'после Außerdem сразу глагол, потом подлежащее' },
        { de: 'Deshalb schreibe ich Ihnen.', ru: 'Поэтому я вам и пишу.', note: 'после Deshalb сразу глагол' },
        { de: 'Trotzdem möchte ich gern am Kurs teilnehmen.', ru: 'Тем не менее я хотел бы участвовать в курсе.', note: 'trotzdem = «несмотря на это»; глагол следом' },
        { de: 'Zuerst möchte ich mich kurz vorstellen.', ru: 'Сначала я хотел бы коротко представиться.', note: 'шаги по порядку: Zuerst … Danach … Zum Schluss …; после каждого — глагол' },
        { de: 'Danach können wir zusammen essen.', ru: 'После этого мы можем вместе поесть.' },
        { de: 'Zum Schluss habe ich noch eine Bitte.', ru: 'И напоследок у меня ещё одна просьба.' },
        { de: 'Ich möchte noch sagen, dass …', ru: 'Я хотел бы ещё сказать, что …', note: 'после dass глагол в конце' },
        { de: 'Erstens ist die Heizung kaputt, zweitens funktioniert das Licht im Bad nicht.', ru: 'Во-первых, сломано отопление, во-вторых, в ванной не работает свет.' },
        { de: '…, aber ich habe am Montag keine Zeit.', ru: '…, но в понедельник у меня нет времени.', note: 'aber, und, oder, denn не меняют порядок слов; перед aber — запятая' },
        { de: 'Ich kann Ihnen zum Beispiel beim Umzug helfen.', ru: 'Я могу, например, помочь вам с переездом.', note: 'helfen bei + Dativ: `beim Umzug`' },
        { de: 'Übrigens habe ich eine neue Telefonnummer.', ru: 'Кстати, у меня новый номер телефона.' },
        { de: 'Also treffen wir uns am Freitag um 18 Uhr.', ru: 'Итак, мы встречаемся в пятницу в 18 часов.', note: 'also = «итак»: подводит итог; глагол следом' }
    ]},

    { id: 'p13', title: 'Конец письма', items: [
        { de: 'Ich hoffe, dass …', ru: 'Надеюсь, что …', note: 'после dass глагол в конце: `dass Sie mir helfen können`' },
        { de: 'Ich freue mich auf Ihre Antwort.', ru: 'Буду рад вашему ответу.', note: 'sich freuen auf + Akkusativ — о том, что будет' },
        { de: 'Ich würde mich über eine baldige Antwort freuen.', ru: 'Я был бы рад скорому ответу.' },
        { de: 'Ich freue mich schon auf dich!', ru: 'Очень жду встречи с тобой!', note: 'дружески' },
        { de: 'Bitte antworten Sie mir bis Freitag.', ru: 'Пожалуйста, ответьте мне до пятницы.', note: 'antworten + Dativ: `mir`' },
        { de: 'Schreib mir bald!', ru: 'Напиши мне поскорее!', note: 'дружески' },
        { de: 'Vielen Dank im Voraus.', ru: 'Заранее большое спасибо.' },
        { de: 'Vielen Dank für Ihr Verständnis.', ru: 'Большое спасибо за понимание.' },
        { de: 'Wenn Sie Fragen haben, rufen Sie mich gern an.', ru: 'Если у вас есть вопросы, звоните мне.', note: 'придаточное впереди — главное начинается с глагола: `rufen Sie`' },
        { de: 'Sie erreichen mich unter der Telefonnummer …', ru: 'Со мной можно связаться по номеру …' },
        { de: 'Ich hoffe, wir sehen uns bald.', ru: 'Надеюсь, мы скоро увидимся.', note: 'дружески' }
    ]},

    { id: 'p14', title: 'Прощание', items: [
        { de: 'Mit freundlichen Grüßen', ru: 'С уважением', note: 'формально; без запятой и точки, имя — на следующей строке' },
        { de: 'Freundliche Grüße', ru: 'С уважением', note: 'формально, чуть короче' },
        { de: 'Viele Grüße', ru: 'Всего доброго', note: 'полуформально и дружески' },
        { de: 'Herzliche Grüße', ru: 'Сердечный привет', note: 'тепло: хорошим знакомым' },
        { de: 'Liebe Grüße', ru: 'С тёплым приветом', note: 'дружески' },
        { de: 'Viele Grüße aus …', ru: 'Привет из …', note: 'aus + Dativ; город без артикля: `aus Köln`' },
        { de: 'Viele Grüße auch an deine Familie!', ru: 'Привет и твоей семье!', note: 'дружески; an + Akkusativ' },
        { de: 'Bis bald!', ru: 'До скорого!', note: 'дружески' },
        { de: 'Bis Samstag!', ru: 'До субботы!', note: 'дружески; день недели без артикля' },
        { de: 'Ihr … / Ihre …', ru: 'Ваш … / Ваша …', note: 'полуформально, перед подписью: `Ihr Max Weber`, `Ihre Anna Petrenko`' },
        { de: 'Dein … / Deine …', ru: 'Твой … / Твоя …', note: 'дружески, перед подписью: `Dein Max`, `Deine Anna`' }
    ]},

    { id: 'p15', title: 'Время и даты', items: [
        { de: 'Ich habe am Montag um 10 Uhr einen Termin.', ru: 'В понедельник в 10 часов у меня назначена встреча.', note: 'am + день недели, um + время на часах' },
        { de: 'Nächste Woche bin ich wieder im Kurs.', ru: 'На следующей неделе я снова буду на курсе.', note: 'без предлога: `nächste Woche`, `nächsten Monat`, `nächstes Jahr`' },
        { de: 'Ab dem 1. November habe ich eine neue Adresse.', ru: 'С 1 ноября у меня новый адрес.', note: 'читается: `ab dem ersten November`' },
        { de: 'Bitte schicken Sie mir die Unterlagen bis spätestens Freitag.', ru: 'Пожалуйста, пришлите мне документы не позднее пятницы.', note: 'с датой: `spätestens bis zum 10. Mai`' },
        { de: 'In zwei Wochen ziehe ich um.', ru: 'Через две недели я переезжаю.', note: '«через» о будущем — in + Dativ: `in einer Woche`, `in zwei Wochen`' },
        { de: 'Ich habe die Waschmaschine vor drei Tagen gekauft.', ru: 'Я купил стиральную машину три дня назад.', note: '«назад» — vor + Dativ, перед словом: `vor einem Monat`' },
        { de: 'Ich bin seit gestern krank.', ru: 'Я болею со вчерашнего дня.', note: 'seit: началось раньше и длится сейчас, поэтому Präsens' },
        { de: 'Vom 3. bis zum 17. August bin ich im Urlaub.', ru: 'С 3 по 17 августа я в отпуске.', note: 'читается: `vom dritten bis zum siebzehnten August`' },
        { de: 'Im Mai mache ich die Prüfung.', ru: 'В мае я сдаю экзамен.', note: 'im + месяц или время года: `im Mai`, `im Sommer`' },
        { de: 'Die Praxis ist von 8 bis 12 Uhr geöffnet.', ru: 'Кабинет врача работает с 8 до 12 часов.' },
        { de: 'Ich rufe Sie morgen Vormittag an.', ru: 'Я позвоню вам завтра до обеда.', note: 'часть дня с заглавной: `heute Abend`, `morgen Vormittag`; но `morgen früh`' },
        { de: 'Ende Oktober bin ich wieder zu Hause.', ru: 'В конце октября я снова буду дома.', note: 'без предлога: `Anfang Mai`, `Mitte Juni`, `Ende Oktober`' }
    ]}
];
