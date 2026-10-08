import { describe, it, assert, equal } from '../runner.js';
import { подготовить, проверить, перемешать, разложитьПлашки, можноЗасчитать, правильныйОтвет } from '../../js/core/exercise.js';
import { всеУпражнения } from '../../js/data/catalog.js';

/** Правильный ответ из данных — в том виде, в каком его вводит читатель. */
function верный(у, карточка) {
    switch (у.type) {
        case 'choice': return у.answer;
        case 'gap': return у.answer.map((а) => (Array.isArray(а) ? а[0] : а));
        case 'build': return разложитьПлашки(у.answer[0]);
        case 'order': return [...у.items];
        default: return у.answer[0];
    }
}

/** Заведомо неверный ответ того же вида. */
function неверный(у) {
    switch (у.type) {
        case 'choice': return у.options.findIndex((_, i) => i !== у.answer);
        case 'gap': return у.answer.map(() => 'qqqq');
        case 'build': return ['qqqq'];
        case 'order': return [...у.items].reverse();
        default: return 'qqqq qqqq';
    }
}

const случайное = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();

describe('Упражнения: подготовка', () => {
    it('перемешивание сохраняет состав', () => {
        const м = перемешать([1, 2, 3, 4, 5], случайное);
        equal([...м].sort(), [1, 2, 3, 4, 5]);
    });

    it('плашки никогда не лежат уже собранными', () => {
        const у = { id: 'x-1', type: 'build', answer: ['Ich komme.'], ru: 'x', q: 'x', explain: 'x', tag: 'verb2' };
        for (let i = 0; i < 40; i++) {
            const к = подготовить({ ...у, answer: ['Heute bin ich krank.'] }, случайное);
            const порядок = к.плашки.map((п) => п.текст).join(' ');
            assert(порядок !== 'Heute bin ich krank.', 'плашки в готовом порядке');
        }
    });

    it('у choice порядок вариантов перемешан, но индексы исходные', () => {
        const у = { id: 'x-2', type: 'choice', options: ['а', 'б', 'в'], answer: 1, q: 'x', explain: 'x', tag: 'verb2' };
        const к = подготовить(у, случайное);
        equal([...к.порядок].sort(), [0, 1, 2]);
        assert(проверить(к, 1).ok, 'индекс 1 — исходный верный');
    });

    it('лишние плашки extra лежат на столе, но в ответ не входят', () => {
        const у = { id: 'x-3', type: 'build', ru: 'x', q: 'x', explain: 'x', tag: 'artikel', answer: ['Ich sehe den Brief.'], extra: ['dem'] };
        const к = подготовить(у, случайное);
        equal(к.плашки.map((п) => п.текст).sort(), ['Brief', 'Ich', 'dem', 'den', 'sehe']);
        assert(проверить(у, ['Ich', 'sehe', 'den', 'Brief.']).ok);
        assert(!проверить(у, ['Ich', 'sehe', 'dem', 'Brief.']).ok);
    });
});

describe('Упражнения: проверка', () => {
    it('gap: пропуск в начале предложения прощает регистр', () => {
        const у = { id: 'x-4', type: 'gap', text: '___ Sie mir helfen?', answer: ['Können'], q: 'x', explain: 'x', tag: 'verb2' };
        assert(проверить(у, ['können']).ok);
        assert(проверить(у, ['Können']).ok);
    });

    it('gap: несколько пропусков — все должны быть верны', () => {
        const у = { id: 'x-5', type: 'gap', text: 'Ich ___ Sie morgen ___.', answer: [['rufe'], ['an']], q: 'x', explain: 'x', tag: 'klammer' };
        assert(проверить(у, ['rufe', 'an']).ok);
        const р = проверить(у, ['rufe', 'ab']);
        assert(!р.ok);
        equal(р.пропуски.map((п) => п.ok), [true, false]);
    });

    it('gap: «почти» — только когда ошибка лишь в регистре', () => {
        const у = { id: 'x-6', type: 'gap', text: 'Ich habe einen ___.', answer: ['Termin'], q: 'x', explain: 'x', tag: 'artikel' };
        equal(проверить(у, ['termin']).почти, 'регистр');
        equal(проверить(у, ['qqq']).почти, null);
    });

    it('order: верен только точный порядок', () => {
        const у = { id: 'x-7', type: 'order', items: ['a', 'b', 'c'], q: 'x', explain: 'x', tag: 'aufbau' };
        assert(проверить(у, ['a', 'b', 'c']).ok);
        assert(!проверить(у, ['a', 'c', 'b']).ok);
        assert(!проверить(у, ['a', 'b']).ok);
    });

    it('показ верного ответа не зависит от типа', () => {
        const у = { id: 'x-8', type: 'fix', text: 'Heute ich bin krank.', answer: ['Heute bin ich krank.', 'Ich bin heute krank.'], q: 'x', explain: 'x', tag: 'verb2' };
        equal(проверить(у, 'qqq').правильно, 'Heute bin ich krank.');
        equal(проверить(у, 'qqq').варианты, ['Ich bin heute krank.']);
        equal(правильныйОтвет(у), 'Heute bin ich krank.');
    });

    it('засчитать свой вариант можно только в свободном тексте', () => {
        assert(можноЗасчитать({ type: 'fix' }));
        assert(можноЗасчитать({ type: 'translate' }));
        assert(!можноЗасчитать({ type: 'choice' }));
        assert(!можноЗасчитать({ type: 'gap' }));
    });

    it('неизвестный тип — ошибка, а не молчание', () => {
        let упало = false;
        try { проверить({ type: 'nonsense' }, 1); } catch { упало = true; }
        assert(упало);
    });
});

describe('Упражнения: весь курс', () => {
    const все = всеУпражнения();

    it('в курсе есть упражнения', () => {
        assert(все.length > 100, `упражнений: ${все.length}`);
    });

    it('правильный ответ из данных засчитывается — для каждого упражнения', () => {
        const сломаны = [];

        for (const у of все) {
            const к = подготовить(у, случайное);
            if (!проверить(к, верный(у, к)).ok) сломаны.push(у.id);
        }

        assert(!сломаны.length, `не засчитан собственный ответ: ${сломаны.slice(0, 10).join(', ')}`);
    });

    it('заведомо неверный ответ не засчитывается — для каждого упражнения', () => {
        const сломаны = [];

        for (const у of все) {
            const к = подготовить(у, случайное);
            if (проверить(к, неверный(у)).ok) сломаны.push(у.id);
        }

        assert(!сломаны.length, `засчитан неверный ответ: ${сломаны.slice(0, 10).join(', ')}`);
    });

    it('у fix исходное предложение не принимается за ответ', () => {
        const сломаны = все.filter((у) => у.type === 'fix' && проверить(у, у.text).ok).map((у) => у.id);
        assert(!сломаны.length, `ошибка не отличается: ${сломаны.join(', ')}`);
    });

    it('у choice неверные варианты не засчитываются', () => {
        const сломаны = [];
        for (const у of все.filter((х) => х.type === 'choice')) {
            у.options.forEach((_, i) => { if (i !== у.answer && проверить(у, i).ok) сломаны.push(у.id); });
        }
        assert(!сломаны.length);
    });

    it('у build все допустимые порядки собираются из плашек', () => {
        const сломаны = [];
        for (const у of все.filter((х) => х.type === 'build')) {
            const плашки = [...разложитьПлашки(у.answer[0])].map((с) => с.toLowerCase()).sort().join('|');
            for (const а of у.answer) {
                if (разложитьПлашки(а).map((с) => с.toLowerCase()).sort().join('|') !== плашки) сломаны.push(`${у.id}`);
            }
            // …и собираются на самом деле: перебор в порядке каждого допустимого варианта
            for (const а of у.answer) {
                if (!проверить(у, разложитьПлашки(а)).ok) сломаны.push(`${у.id} (вариант «${а}»)`);
            }
        }
        assert(!сломаны.length, `плашки не сходятся: ${[...new Set(сломаны)].join(', ')}`);
    });
});
