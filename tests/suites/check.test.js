import { describe, it, assert, equal } from '../runner.js';
import {
    сверитьПредложение, сверитьПропуск, сверитьСборку, сколькоСлов, заполнить, почистить, разложить
} from '../../js/core/check.js';

describe('Сверка: предложения', () => {
    it('точное совпадение засчитывается', () => {
        const р = сверитьПредложение('Heute bin ich krank.', ['Heute bin ich krank.']);
        assert(р.ok);
        equal(р.замечания, []);
    });

    it('точка в конце не обязательна', () => {
        assert(сверитьПредложение('Heute bin ich krank', ['Heute bin ich krank.']).ok);
    });

    it('первое слово с маленькой буквы прощается', () => {
        assert(сверитьПредложение('heute bin ich krank.', ['Heute bin ich krank.']).ok);
    });

    it('неверный порядок слов — неверно', () => {
        assert(!сверитьПредложение('Heute ich bin krank.', ['Heute bin ich krank.']).ok);
    });

    it('лишнее и недостающее слово — неверно', () => {
        assert(!сверитьПредложение('Heute bin ich sehr krank.', ['Heute bin ich krank.']).ok);
        assert(!сверитьПредложение('Heute bin krank.', ['Heute bin ich krank.']).ok);
    });

    it('из нескольких допустимых берётся подходящий', () => {
        const допустимые = ['Leider kann ich heute nicht kommen.', 'Heute kann ich leider nicht kommen.'];
        assert(сверитьПредложение('Heute kann ich leider nicht kommen.', допустимые).ok);
    });

    it('не поставленная запятая — замечание, а не провал', () => {
        const р = сверитьПредложение('Ich komme nicht weil ich krank bin.', ['Ich komme nicht, weil ich krank bin.']);
        assert(р.ok, 'слова верны — ответ принят');
        equal(р.замечания, ['запятая']);
    });

    it('«nicht,weil» без пробела читается как «nicht, weil»', () => {
        assert(сверитьПредложение('Ich komme nicht,weil ich krank bin.', ['Ich komme nicht, weil ich krank bin.']).ok);
    });

    it('ae вместо ä засчитывается с напоминанием', () => {
        const р = сверитьПредложение('Ich muss spaeter kommen.', ['Ich muss später kommen.']);
        assert(р.ok);
        equal(р.замечания, ['умлаут']);
    });

    it('существительное с маленькой буквы — не верно, но «почти»', () => {
        const р = сверитьПредложение('Ich habe einen termin.', ['Ich habe einen Termin.']);
        assert(!р.ok);
        equal(р.почти, 'регистр');
    });

    it('безупречный вариант важнее варианта с замечанием', () => {
        const р = сверитьПредложение('Ich komme, weil ich krank bin.', ['Ich komme weil ich krank bin.', 'Ich komme, weil ich krank bin.']);
        equal(р.замечания, []);
    });

    it('пустой ответ — неверно', () => {
        assert(!сверитьПредложение('', ['Heute bin ich krank.']).ok);
        assert(!сверитьПредложение('   ', ['Heute bin ich krank.']).ok);
    });

    it('типографские кавычки и тире не мешают', () => {
        assert(сверитьПредложение('Er sagte: „Komm bitte“.', ['Er sagte: "Komm bitte".']).ok);
    });
});

describe('Сверка: пропуски и плашки', () => {
    it('слово из списка допустимых', () => {
        assert(сверитьПропуск('kann', ['kann']).ok);
        assert(сверитьПропуск('sobald', ['wenn', 'sobald']).ok);
        assert(!сверитьПропуск('kannst', ['kann']).ok);
    });

    it('регистр у пропуска в середине предложения учитывается', () => {
        const р = сверитьПропуск('termin', ['Termin']);
        assert(!р.ok);
        equal(р.почти, 'регистр');
    });

    it('в начале предложения регистр прощается', () => {
        assert(сверитьПропуск('können', ['Können'], true).ok);
        assert(сверитьПропуск('Können', ['können'], true).ok);
    });

    it('пустой пропуск — неверно', () => {
        assert(!сверитьПропуск('', ['kann']).ok);
    });

    it('плашки: регистр не сравнивается, порядок — да', () => {
        assert(сверитьСборку(['heute', 'bin', 'ich', 'krank.'], ['Heute bin ich krank.']));
        assert(!сверитьСборку(['ich', 'bin', 'heute', 'krank.'], ['Heute bin ich krank.']));
    });

    it('плашки: запятая — часть слова', () => {
        assert(сверитьСборку(['Ich', 'komme', 'nicht,', 'weil', 'ich', 'krank', 'bin.'], ['Ich komme nicht, weil ich krank bin.']));
        assert(!сверитьСборку(['Ich', 'komme', 'nicht', 'weil', 'ich', 'krank', 'bin.'], ['Ich komme nicht, weil ich krank bin.']));
    });
});

describe('Сверка: вспомогательное', () => {
    it('число слов считает слова и числа, но не знаки', () => {
        equal(сколькоСлов('Sehr geehrte Frau Weber, am 12.10.2026 komme ich – gern!'), 9);
        equal(сколькоСлов(''), 0);
    });

    it('заполнение пропусков берёт первый вариант', () => {
        equal(заполнить('Ich ___ Sie morgen ___.', [['rufe'], ['an', 'ab']]), 'Ich rufe Sie morgen an.');
    });

    it('чистка сжимает пробелы и убирает пробел перед знаками', () => {
        equal(почистить('  Ich   komme ,  gern !  '), 'Ich komme, gern!');
    });

    it('слова отделяются от знаков', () => {
        equal(разложить('Ich komme, weil ich krank bin.').map((с) => с.текст), ['Ich', 'komme', 'weil', 'ich', 'krank', 'bin']);
    });
});
