import { describe, it, assert, equal } from '../runner.js';
import { проверитьПисьмо, запросНаПроверку } from '../../js/core/brief.js';
import { СИТУАЦИИ, ОШИБКИ, ГРАММАТИКА, ТЕХНИКА, ФРАЗЫ, всеУпражнения } from '../../js/data/catalog.js';
import { заполнить } from '../../js/core/check.js';

/** Правила предложения: без тех, что судят о письме целиком. */
const ЦЕЛЫЕ = new Set(['нет-обращения', 'нет-прощания', 'мало-слов', 'много-слов', 'мало-связок', 'одни-ich', 'du-и-sie', 'регистр-обращение']);

const правила = (текст, опции) => проверитьПисьмо(текст, опции).замечания
    .filter((з) => з.уровень === 'ошибка' && !ЦЕЛЫЕ.has(з.id))
    .map((з) => з.id);

const есть = (текст, id) => правила(текст).includes(id);

describe('Проверка писем: порядок слов', () => {
    it('глагол не в конце придаточного', () => {
        assert(есть('Ich komme nicht, weil ich bin krank.', 'глагол-в-конец'));
        assert(есть('Ich weiß, dass ich kann nicht kommen.', 'глагол-в-конец'));
        assert(!есть('Ich komme nicht, weil ich krank bin.', 'глагол-в-конец'));
    });

    it('«ob ich frei haben kann» — не ошибка', () => {
        assert(!есть('Ich möchte fragen, ob ich am Montag frei haben kann.', 'глагол-в-конец'));
    });

    it('Ersatzinfinitiv и «haben werden» — не ошибка', () => {
        assert(!правила('Ich schreibe, weil wir keine Zeit haben werden.').length);
        assert(!правила('Ich schreibe, weil ich nicht habe kommen können.').length);
    });

    it('сочинение внутри придаточного не считается ошибкой', () => {
        assert(!правила('Ich komme nicht, weil ich krank bin und nicht kommen kann.').length);
    });

    it('инверсия: подлежащее сразу после «Heute»', () => {
        assert(есть('Heute ich bin krank.', 'инверсия'));
        assert(есть('Leider ich kann nicht kommen.', 'инверсия'));
        assert(!есть('Heute bin ich krank.', 'инверсия'));
    });

    it('инверсия после группы времени, но не после «Ab Januar arbeite ich»', () => {
        assert(есть('Am Montag ich komme wieder.', 'инверсия'));
        assert(!есть('Ab Januar arbeite ich in Berlin.', 'инверсия'));
    });

    it('«deshalb ich» после запятой', () => {
        assert(есть('Ich bin krank, deshalb ich bleibe zu Hause.', 'инверсия'));
        assert(!есть('Ich bin krank, deshalb bleibe ich zu Hause.', 'инверсия'));
    });

    it('«denn» с глаголом в конце', () => {
        assert(есть('Ich bleibe hier, denn ich Fieber habe.', 'denn-порядок'));
        assert(!есть('Ich bleibe hier, denn ich habe Fieber.', 'denn-порядок'));
    });

    it('после придаточного в начале главная часть начинается с глагола', () => {
        assert(есть('Wenn ich Zeit habe, ich komme gern.', 'после-придаточного'));
        assert(!есть('Wenn ich Zeit habe, komme ich gern.', 'после-придаточного'));
    });

    it('косвенный вопрос с прямым порядком', () => {
        assert(есть('Ich möchte wissen, wann beginnt der Kurs.', 'косвенный-вопрос'));
        assert(!есть('Ich möchte wissen, wann der Kurs beginnt.', 'косвенный-вопрос'));
        assert(!есть('Ich weiß nicht, wer kommt.', 'косвенный-вопрос'));
    });

    it('модальный глагол: «zu» не нужен, но «etwas zu trinken» — можно', () => {
        assert(есть('Ich muss jetzt zu gehen.', 'модальный-zu'));
        assert(!правила('Soll ich etwas zu trinken mitbringen?').includes('модальный-zu'));
    });

    it('инфинитив и причастие — в самом конце', () => {
        assert(есть('Ich kann nicht kommen morgen.', 'инфинитив-в-конец'));
        assert(есть('Ich habe gestern angerufen Sie.', 'партицип-в-конец'));
        assert(!правила('Ich habe Sie gestern angerufen.').length);
    });
});

describe('Проверка писем: формы', () => {
    it('Perfekt с haben и sein', () => {
        assert(есть('Ich habe gestern zum Arzt gegangen.', 'perfekt-sein'));
        assert(есть('Ich bin gestern gearbeitet.', 'perfekt-haben'));
        assert(!правила('Ich habe Sie angerufen und bin dann nach Hause gegangen.').length);
    });

    it('переходный глагол со sein', () => {
        assert(есть('Ich bin meine Mutter besucht.', 'perfekt-haben'));
        assert(!правила('Ich bin gestern ins Büro gegangen.').length);
        assert(!правила('Ich bin vom Arzt angerufen worden.').length);
    });

    it('лишнее ge-', () => {
        assert(есть('Ich habe Sie gestern geanrufen.', 'причастие-ge'));
        assert(есть('Ich habe den Brief gebekommen.', 'причастие-ge'));
        assert(!правила('Ich habe Ihnen geantwortet und bin gebeten worden.').length);
    });

    it('падеж после частых глаголов', () => {
        assert(есть('Ich helfe dich gern.', 'падеж-глагола'));
        assert(есть('Ich rufe Ihnen morgen an.', 'падеж-глагола'));
        assert(!правила('Ich helfe Ihnen gern und rufe Sie morgen an.').length);
    });

    it('падеж после предлога', () => {
        assert(есть('Ich komme mit mich.', 'предлог-падеж'));
        assert(есть('Das ist für mir.', 'предлог-падеж'));
        assert(!правила('Ich komme mit mir und für dich.').length);
    });

    it('«ein Termin» вместо «einen Termin»', () => {
        assert(есть('Ich habe ein Termin.', 'артикль-akk'));
        assert(есть('Heute brauche ich kein Brief.', 'артикль-akk'));
        assert(!правила('Am Montag hat mein Sohn keinen Unterricht.').length, 'подлежащее после глагола — не ошибка');
        assert(!правила('Ich habe einen Termin.').length);
    });

    it('dass и das', () => {
        assert(есть('Ich hoffe, das ich bald gesund bin.', 'dass-das'));
        assert(!правила('Ich hoffe, dass ich bald gesund bin.').length);
    });

    it('«wenn» вместо «ob»', () => {
        assert(есть('Ich weiß nicht, wenn ich kommen kann.', 'wenn-ob'));
        assert(!правила('Rufen Sie mich an, wenn Sie Zeit haben.').includes('wenn-ob'));
    });
});

describe('Проверка писем: запятые, регистр, начало', () => {
    it('запятая перед придаточным', () => {
        assert(есть('Ich komme nicht weil ich krank bin.', 'запятая-придаточное'));
        assert(!есть('Ich komme nicht, weil ich krank bin.', 'запятая-придаточное'));
        assert(!есть('Weil ich krank bin, komme ich nicht.', 'запятая-придаточное'));
        assert(!есть('Ich komme, auch wenn ich krank bin.', 'запятая-придаточное'));
    });

    it('«ich» после обращения пишется с маленькой буквы', () => {
        assert(есть('Sehr geehrte Frau Berg,\nIch schreibe Ihnen.', 'ich-заглавная'));
        assert(есть('Heute Ich komme später.', 'ich-заглавная'));
        assert(!есть('Sehr geehrte Frau Berg,\nich schreibe Ihnen.', 'ich-заглавная'));
        assert(!есть('Das ist gut. Ich komme.', 'ich-заглавная'));
    });

    it('существительное с маленькой буквы', () => {
        assert(есть('Ich habe einen termin am montag.', 'существительное-строчная'));
        assert(!есть('Ich habe einen Termin am Montag.', 'существительное-строчная'));
        assert(!есть('Bitte antworten Sie mir.', 'существительное-строчная'), '«antworten» здесь глагол');
    });

    it('предложение начинается с большой буквы', () => {
        assert(есть('Ich komme. morgen bin ich da.', 'начало-строчная'));
        assert(!есть('Der Termin ist am 12. Oktober. Ich komme.', 'начало-строчная'));
        assert(!есть('Ich komme z. B. am Montag.', 'начало-строчная'));
    });

    it('«zu hause», «heute abend»', () => {
        assert(есть('Ich bleibe zu hause.', 'написание'));
        assert(есть('Ich komme heute abend.', 'написание'));
        assert(!правила('Ich bleibe zu Hause und komme heute Abend.').length);
    });

    it('опечатки', () => {
        assert(есть('Ich komme villeicht später.', 'написание'));
    });

    it('смесь «Sie» и «du»', () => {
        const р = проверитьПисьмо('Sehr geehrte Frau Berg, ich danke Ihnen. Kannst du mir helfen?');
        assert(р.замечания.some((з) => з.id === 'du-и-sie'));
    });

    it('обращение и прощание', () => {
        const хорошо = проверитьПисьмо('Sehr geehrte Frau Berg, ich komme morgen. Mit freundlichen Grüßen Anna');
        assert(хорошо.обращение && хорошо.прощание);

        const плохо = проверитьПисьмо('Ich komme morgen.');
        assert(!плохо.обращение && !плохо.прощание);
        assert(плохо.замечания.some((з) => з.id === 'нет-обращения'));
    });

    it('«Hallo» в формальном письме', () => {
        const р = проверитьПисьмо('Hallo Frau Berg, ich komme morgen. Mit freundlichen Grüßen Anna', { регистр: 'formell' });
        assert(р.замечания.some((з) => з.id === 'регистр-обращение'));
    });

    it('пустое письмо не даёт замечаний', () => {
        equal(проверитьПисьмо('').замечания, []);
    });
});

describe('Проверка писем: пункты и объём', () => {
    it('пункты ищутся по ключам', () => {
        const р = проверитьПисьмо('Sehr geehrte Frau Berg, ich bin krank.', {
            пункты: [{ de: 'Krankheit', keys: ['krank'] }, { de: 'Termin', keys: ['Termin', 'Montag'] }]
        });
        equal(р.пункты.map((п) => п.найден), [true, false]);
    });

    it('мало слов — совет, а не ошибка', () => {
        const з = проверитьПисьмо('Sehr geehrte Frau Berg, ich komme.').замечания.find((х) => х.id === 'мало-слов');
        assert(з && з.уровень === 'совет');
    });

    it('запрос на проверку содержит задание, письмо и критерии', () => {
        const з = СИТУАЦИИ[0].tasks[0];
        const запрос = запросНаПроверку(з, 'Sehr geehrter Herr Weber, ...');
        assert(запрос.includes(з.situation));
        assert(запрос.includes('Sehr geehrter Herr Weber'));
        assert(запрос.includes('Korrektheit') && запрос.includes('Aufgabenbewältigung'));
        assert(запрос.includes(з.points[0].de));
    });
});

describe('Проверка писем: на всём курсе', () => {
    it('образцы писем проходят без ошибок и раскрывают все пункты', () => {
        const сломаны = [];

        for (const с of СИТУАЦИИ) {
            for (const з of с.tasks) {
                const р = проверитьПисьмо(з.model.text, { пункты: з.points, регистр: з.register });
                const ошибки = р.замечания.filter((х) => х.уровень === 'ошибка');
                if (ошибки.length) сломаны.push(`${з.id}: ${ошибки.map((х) => х.id).join(',')}`);
                if (р.пункты.some((п) => !п.найден)) сломаны.push(`${з.id}: пункт не найден`);
            }
        }

        assert(!сломаны.length, сломаны.join(' | '));
    });

    it('слабые ответы вызывают замечания', () => {
        const молчат = [];

        for (const с of СИТУАЦИИ) {
            for (const з of с.tasks) {
                if (з.weak && !проверитьПисьмо(з.weak.text, { регистр: з.register }).замечания.length) молчат.push(з.id);
            }
        }

        assert(!молчат.length, `ничего не найдено в слабых ответах: ${молчат.join(', ')}`);
    });

    it('верные предложения курса не вызывают ложных замечаний', () => {
        const тревоги = [];
        const проверить = (т, откуда) => {
            const текст = String(т).replace(/\*\*/g, '').replace(/…/g, '').trim();
            if (текст.length < 9 || /[Ѐ-ӿ]/.test(текст)) return;
            const найдено = правила(текст);
            if (найдено.length) тревоги.push(`${откуда}: ${найдено.join(',')} «${текст.slice(0, 60)}»`);
        };

        for (const у of всеУпражнения()) {
            if (у.type === 'gap') проверить(заполнить(у.text, у.answer), у.id);
            if (['fix', 'join', 'translate', 'build'].includes(у.type)) у.answer.forEach((а) => проверить(а, у.id));
        }

        for (const м of [...ГРАММАТИКА, ...ТЕХНИКА]) {
            for (const б of м.theory) {
                if (б.type === 'ex') проверить(б.de, `${м.id} ex`);
                if (б.type === 'exs') б.items.forEach((х) => проверить(х.de, `${м.id} exs`));
                if (б.type === 'trap') проверить(б.right, `${м.id} trap.right`);
            }
        }

        for (const с of ОШИБКИ) for (const э of с.items) проверить(э.right, `${э.id} right`);
        for (const г of ФРАЗЫ) г.items.forEach((ф, i) => проверить(ф.de, `${г.id}[${i}]`));

        assert(!тревоги.length, `ложные срабатывания (${тревоги.length}): ${тревоги.slice(0, 5).join(' | ')}`);
    });

    it('правила ловят хотя бы пятую часть неверных примеров', () => {
        let всего = 0;
        let поймано = 0;

        for (const с of ОШИБКИ) {
            for (const э of с.items) {
                всего += 1;
                if (правила(э.wrong).length) поймано += 1;
            }
        }

        assert(!всего || поймано / всего >= 0.2, `поймано ${поймано} из ${всего}`);
    });
});
