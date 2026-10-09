/**
 * DTZ B1 · Письмо — сервис-воркер.
 *
 * Стратегии:
 *   - переходы по страницам (HTML) → сначала сеть, при неудаче кэш index.html
 *   - код, стили, данные            → сначала сеть, чтобы правки доезжали сразу
 *   - значки                        → сначала кэш, меняются вместе с версией
 *
 * У «сначала сеть» есть срок ожидания: без него запуск на слабой связи ждал
 * бы ответа до срабатывания таймаута самого браузера, хотя рабочая копия
 * лежит в кэше. Курсом пользуются в метро и в очереди у врача, и офлайн здесь
 * не запасной режим, а обычный.
 *
 * ВАЖНО: при изменении состава файлов запустить `node tools/make-sw.mjs`
 * (он перепишет список ФАЙЛЫ) и поднять APP_VERSION, иначе у установленных
 * приложений останется старый кэш.
 */

const APP_VERSION = 'v3';
const CACHE_NAME = `briefe-${APP_VERSION}`;

const СРОК_СЕТИ = 3000;

const ФАЙЛЫ = [
    './',
    'index.html',
    'manifest.json',
    'css/print.css',
    'css/style.css',
    'assets/icon-192.png',
    'assets/icon-512.png',
    'assets/icon-maskable-192.png',
    'assets/icon-maskable-512.png',
    'js/app.js',
    'js/core/actions.js',
    'js/core/brief.js',
    'js/core/check.js',
    'js/core/exercise.js',
    'js/core/install.js',
    'js/core/lesen.js',
    'js/core/markup.js',
    'js/core/progress.js',
    'js/core/session.js',
    'js/core/sources.js',
    'js/core/store.js',
    'js/core/ui.js',
    'js/data/catalog.js',
    'js/data/cheatsheet.js',
    'js/data/errors.js',
    'js/data/exam.js',
    'js/data/grammar/g01-satz.js',
    'js/data/grammar/g02-nebensatz.js',
    'js/data/grammar/g03-praesens.js',
    'js/data/grammar/g04-vergangenheit.js',
    'js/data/grammar/g05-modal.js',
    'js/data/grammar/g06-nomen.js',
    'js/data/grammar/g07-kasus.js',
    'js/data/grammar/g08-adjektive.js',
    'js/data/grammar/g09-praepositionen.js',
    'js/data/grammar/g10-verbindung.js',
    'js/data/grammar/g11-schreibung.js',
    'js/data/index.js',
    'js/data/lesen/r01-verzeichnisse.js',
    'js/data/lesen/r02-anzeigen.js',
    'js/data/lesen/r03-meldungen.js',
    'js/data/lesen/r04-info.js',
    'js/data/lesen/r05-brief.js',
    'js/data/lesen-ref.js',
    'js/data/letters/l01-aufbau.js',
    'js/data/letters/l02-leitpunkte.js',
    'js/data/letters/s01-fehlen.js',
    'js/data/letters/s02-einladung.js',
    'js/data/letters/s03-termin.js',
    'js/data/letters/s04-wohnung.js',
    'js/data/letters/s05-beschwerde.js',
    'js/data/letters/s06-kuendigung.js',
    'js/data/letters/s07-arbeit.js',
    'js/data/letters/s08-anfrage.js',
    'js/data/letters/s09-reklamation.js',
    'js/data/letters/s10-schule.js',
    'js/data/letters/s11-freunde.js',
    'js/data/letters/s12-bewerbung.js',
    'js/data/phrases.js',
    'js/data/reference.js',
    'js/data/tags.js',
    'js/main.js',
    'js/modules/blocks.js',
    'js/modules/drill.js',
    'js/modules/home.js',
    'js/modules/input.js',
    'js/modules/install.js',
    'js/modules/lesen.js',
    'js/modules/letters.js',
    'js/modules/module.js',
    'js/modules/shell.js',
    'js/modules/tools.js',
    'js/print.js',
    'js/version.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            /*
             * Каждый файл кладётся отдельно.
             *
             * cache.addAll валит установку целиком, стоит одному адресу
             * ответить не так, — и приложение остаётся вовсе без офлайна
             * из-за одного значка.
             */
            .then((кэш) => Promise.all(ФАЙЛЫ.map((адрес) => кэш.add(адрес).catch(
                (e) => console.warn('[SW] Не удалось положить в кэш', адрес, e)
            ))))
            .then(() => self.skipWaiting())
    );
});

/**
 * Удаляются только прежние версии этого курса — по префиксу briefe-.
 *
 * Хранилище кэшей у браузера одно на источник, а не на каталог: на
 * igor-bond.github.io в нём же лежат кэши журнала тренировок, шахмат, нот и
 * wortschatz. «Всё, кроме своего» стирало бы их при каждом обновлении, и
 * соседи без сети переставали бы открываться.
 */
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((имена) => Promise.all(имена
                .filter((имя) => имя.startsWith('briefe-') && имя !== CACHE_NAME)
                .map((имя) => caches.delete(имя))))
            .then(() => self.clients.claim())
    );
});

/** Сеть со сроком: не дождались — берём из кэша. */
function изСети(запрос) {
    return new Promise((готово, мимо) => {
        const часы = setTimeout(() => мимо(new Error('Сеть не ответила')), СРОК_СЕТИ);

        fetch(запрос).then((ответ) => {
            clearTimeout(часы);
            готово(ответ);
        }).catch((e) => {
            clearTimeout(часы);
            мимо(e);
        });
    });
}

self.addEventListener('fetch', (event) => {
    const запрос = event.request;

    if (запрос.method !== 'GET') return;

    const адрес = new URL(запрос.url);
    if (адрес.origin !== location.origin) return;

    const значок = /\.(png|svg|ico)$/.test(адрес.pathname);

    // Значки — сначала кэш: они не меняются иначе как вместе с версией,
    // а ходить за ними в сеть на каждом запуске незачем
    if (значок) {
        event.respondWith(
            caches.match(запрос).then((найдено) => найдено || fetch(запрос).then((ответ) => {
                const копия = ответ.clone();
                caches.open(CACHE_NAME).then((кэш) => кэш.put(запрос, копия));
                return ответ;
            }))
        );
        return;
    }

    event.respondWith(
        изСети(запрос)
            .then((ответ) => {
                if (ответ.ok) {
                    const копия = ответ.clone();
                    caches.open(CACHE_NAME).then((кэш) => кэш.put(запрос, копия));
                }
                return ответ;
            })
            .catch(() => caches.match(запрос)
                // Переход по адресу вроде #/drill/g01 в офлайне ведёт в тот
                // же index.html — своего файла у него нет
                .then((найдено) => найдено
                    || (запрос.mode === 'navigate' ? caches.match('index.html') : undefined)
                    || new Response('Нет сети', { status: 503, statusText: 'Нет сети' })))
    );
});
