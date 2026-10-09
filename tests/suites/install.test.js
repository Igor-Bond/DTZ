/**
 * Установка как приложения: всё, что Chrome требует от страницы, и своя кнопка.
 *
 * Поломка здесь не видна ни на одном экране: курс открывается и работает, а
 * пункта «Установить» в меню нет или он говорит «уже установлено» — и узнаётся
 * это только на устройстве. Поэтому требования проверяются по списку, как их
 * проверяет сам Chrome: манифест, имя, режим окна, постоянный id, стартовый
 * адрес внутри области, значки 192 и 512 точек настоящего размера,
 * сервис-воркер.
 */

import { describe, it, equal, assert } from '../runner.js';
import { app } from '../../js/app.js';
import { установка } from '../../js/core/install.js';

const КОРЕНЬ = new URL('../', location.href);

async function манифест() {
    const ответ = await fetch(new URL('manifest.json', КОРЕНЬ), { cache: 'no-store' });
    assert(ответ.ok, `манифест не отдаётся: ${ответ.status}`);
    return ответ.json();
}

function размер(адрес) {
    return new Promise((готово) => {
        const img = new Image();
        img.onload = () => готово(`${img.naturalWidth}x${img.naturalHeight}`);
        img.onerror = () => готово('не загрузилась');
        img.src = адрес;
    });
}

describe('Установка как приложения', () => {
    it('страница ссылается на манифест', async () => {
        const html = await (await fetch(new URL('index.html', КОРЕНЬ), { cache: 'no-store' })).text();
        assert(/<link rel="manifest" href="manifest\.json">/.test(html), 'нет ссылки на манифест в index.html');
    });

    it('имя, короткое имя и режим отдельного окна', async () => {
        const м = await манифест();
        assert(м.name && м.short_name, 'нет имени');
        assert(м.short_name.length <= 12, `короткое имя длиннее 12 знаков — под значком обрежется: ${м.short_name}`);
        equal(м.display, 'standalone');
    });

    it('у приложения постоянный идентификатор, не зависящий от адреса страницы', async () => {
        // Без id Chrome выводит личность приложения из стартового адреса и
        // может держать старую запись «установлено», когда значка уже нет
        const м = await манифест();
        assert(typeof м.id === 'string' && м.id.startsWith('/') && м.id.length > 1, 'в манифесте нет id вида /имя');
        assert(!/index\.html|DTZ\//i.test(м.id), `id привязан к адресу страницы: ${м.id}`);
    });

    it('стартовый адрес внутри области приложения и отвечает', async () => {
        const м = await манифест();
        const база = new URL('manifest.json', КОРЕНЬ);
        const старт = new URL(м.start_url, база).href;
        const область = new URL(м.scope, база).href;

        assert(старт.startsWith(область), `старт ${старт} вне области ${область}`);
        equal((await fetch(старт, { cache: 'no-store' })).status, 200);
    });

    it('значки 192 и 512 точек — и настоящего размера', async () => {
        const м = await манифест();
        const база = new URL('manifest.json', КОРЕНЬ);

        for (const нужно of ['192x192', '512x512']) {
            const значок = м.icons.find((з) => з.sizes === нужно && (з.purpose || 'any').includes('any'));
            assert(значок, `нет значка ${нужно} для обычного вида`);
            equal(await размер(new URL(значок.src, база).href), нужно, значок.src);
        }

        for (const з of м.icons) {
            equal(await размер(new URL(з.src, база).href), з.sizes, `${з.src} заявлен как ${з.sizes}`);
        }
    });

    it('сервис-воркер на месте, умеет отвечать на запросы и регистрируется', async () => {
        const текст = await (await fetch(new URL('sw.js', КОРЕНЬ), { cache: 'no-store' })).text();
        assert(/addEventListener\('fetch'/.test(текст), 'в сервис-воркере нет обработчика запросов');

        const main = await (await fetch(new URL('js/main.js', КОРЕНЬ), { cache: 'no-store' })).text();
        assert(/serviceWorker\s*\.register\('sw\.js'\)/.test(main), 'приложение не регистрирует сервис-воркер');
        assert(/установка\.init\(\)/.test(main), 'событие установки не ловится: кнопки «Установить» не будет');
    });
});

/** Событие установки, как его шлёт Chrome: с prompt() и обещанием выбора. */
function событиеУстановки(ответ = 'accepted') {
    const e = new Event('beforeinstallprompt', { cancelable: true });
    e.показано = false;
    e.prompt = () => { e.показано = true; };
    e.userChoice = Promise.resolve({ outcome: ответ });
    return e;
}

const экран = () => document.getElementById('screen');

describe('Своя кнопка установки', () => {
    it('событие Chrome ловится, кнопка ставит, повторно не ставит', async () => {
        установка.init();
        установка.сбросить();

        const e = событиеУстановки();
        window.dispatchEvent(e);
        assert(e.defaultPrevented, 'системный баннер не придержан');
        assert(установка.можно, 'кнопка не стала доступной');

        equal(await установка.установить(), true);
        assert(e.показано, 'окно установки не показано');
        assert(!установка.можно, 'одноразовое событие использовано дважды');
    });

    it('отказ в окне установки не считается установкой', async () => {
        установка.init();
        установка.сбросить();

        window.dispatchEvent(событиеУстановки('dismissed'));
        equal(await установка.установить(), false);
        assert(!установка.можно, 'использованное событие осталось');
    });

    it('кнопка на главной и в «Ещё» есть, пока Chrome готов, и пропадает после установки', async () => {
        установка.init();
        установка.сбросить();

        app.go('home');
        assert(!экран().querySelector('[data-action="установить"]'), 'кнопка есть, хотя Chrome установку не предложил');

        window.dispatchEvent(событиеУстановки());
        app.go('home');
        assert(экран().querySelector('.hero [data-action="установить"]'), 'на главной нет кнопки «Установить»');

        app.go('more');
        assert(экран().querySelector('[data-action="установить"]'), 'в «Ещё» нет кнопки «Установить»');

        await установка.установить();
        app.go('home');
        assert(!экран().querySelector('[data-action="установить"]'), 'кнопка осталась после установки');

        app.go('more');
        assert(/Установить как приложение/.test(экран().textContent), 'в «Ещё» нет пояснения про установку');
    });

    it('кнопка нажимается через экран и вызывает окно установки', async () => {
        установка.init();
        установка.сбросить();

        const e = событиеУстановки();
        window.dispatchEvent(e);
        app.go('home');

        экран().querySelector('[data-action="установить"]').click();
        await new Promise((г) => setTimeout(г, 0));

        assert(e.показано, 'по нажатию окно установки не открылось');
        assert(!экран().querySelector('[data-action="установить"]'), 'после нажатия кнопка осталась');
    });
});
