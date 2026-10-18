/**
 * Поля ввода: ряд кнопок ä ö ü ß — по выбору, а не всегда (Р-18).
 *
 * Ряд лишний при немецкой раскладке и на узком экране выходил за край
 * карточки, поэтому по умолчанию выключен, включается в «Ещё» и хранится
 * отдельно от прогресса: прогресс переносят и стирают, а клавиатура — свойство
 * устройства.
 */

import { describe, it, assert, equal } from '../runner.js';
import { app } from '../../js/app.js';
import { сессия } from '../../js/core/session.js';
import { хранилище } from '../../js/core/store.js';

const КЛЮЧ = globalThis.__BRIEFE_KEY__;

const чисто = () => {
    localStorage.removeItem(КЛЮЧ);
    localStorage.removeItem(`${КЛЮЧ}.prefs`);
    сессия.сбросить();
    app.go('home');
};

const экран = () => document.getElementById('screen');
const тик = () => new Promise((г) => setTimeout(г, 0));

const пропуск = { id: 'z-1', type: 'gap', q: 'Вставьте глагол.', text: 'Ich ___ krank.', hint: 'sein', answer: ['bin'], explain: 'x', tag: 'verb2' };

describe('Кнопки умлаутов', () => {
    it('по умолчанию выключены: под полем ввода нет ряда', () => {
        чисто();
        сессия.начать('t', 'Тест', [пропуск]);
        app.go('drill', 't');

        assert(экран().querySelector('input'), 'на экране нет поля ввода');
        assert(!экран().querySelector('.umlauts'), 'ряд умлаутов показан без включения');
    });

    it('включённые: семь кнопок, нажатие вставляет знак в поле', async () => {
        чисто();
        хранилище.задатьНастройку('умлауты', true);
        сессия.начать('t', 'Тест', [пропуск]);
        app.go('drill', 't');

        const кнопки = [...экран().querySelectorAll('.umlauts .key')];
        equal(кнопки.map((к) => к.textContent.trim()), ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü']);

        const поле = экран().querySelector('input');
        поле.focus();
        поле.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));

        кнопки[2].click();
        await тик();
        equal(поле.value, 'ü');
    });

    it('переключатель в «Ещё» включает и выключает ряд', async () => {
        чисто();
        app.go('more');

        const кнопка = () => экран().querySelector('[data-action="умлауты-переключить"]');
        assert(кнопка(), 'в «Ещё» нет переключателя');
        assert(/Показывать/.test(кнопка().textContent), 'выключенное состояние подписано неверно');

        кнопка().click();
        await тик();
        equal(хранилище.настройка('умлауты'), true);
        assert(/Скрыть/.test(кнопка().textContent), 'после включения подпись не сменилась');

        кнопка().click();
        await тик();
        equal(хранилище.настройка('умлауты'), false);
    });

    it('настройка устройства не стирается сбросом прогресса и не попадает в выгрузку', () => {
        чисто();
        хранилище.задатьНастройку('умлауты', true);

        хранилище.сбросить();
        equal(хранилище.настройка('умлауты'), true);
        assert(!хранилище.выгрузить().includes('умлауты'), 'настройка попала в файл прогресса');
    });

    it('испорченная настройка не ломает запуск и не включает ряд', () => {
        чисто();

        localStorage.setItem(`${КЛЮЧ}.prefs`, '{"умлауты":"да"}');
        equal(хранилище.настройка('умлауты'), false);

        localStorage.setItem(`${КЛЮЧ}.prefs`, 'не json');
        equal(хранилище.настройка('умлауты'), false);

        хранилище.задатьНастройку('чужая', true);
        equal(хранилище.настройка('чужая'), undefined);

        localStorage.removeItem(`${КЛЮЧ}.prefs`);
    });
});
