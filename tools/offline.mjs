/**
 * Офлайн: курс открывается без сети.
 *
 * Настоящий браузер, воркер разрешён. Загружаем страницу, ждём, пока
 * воркер положит в кэш всё, что перечислено в sw.js, отключаем сеть и
 * открываем разные экраны. Забытый в списке файл в обычной проверке не виден:
 * в сети всё работает, и обнаруживается он только там, где связи нет.
 *
 * Запуск:  node tools/offline.mjs [адрес]
 * Ответ:   0 — всё открылось без сети, 1 — нет.
 */

import { chromium } from 'playwright';

const АДРЕС = (process.argv[2] || 'http://localhost:4190/').replace(/\/?$/, '/');

const браузер = await chromium.launch();
const контекст = await браузер.newContext();
const стр = await контекст.newPage();

const ошибки = [];
стр.on('pageerror', (e) => ошибки.push(e.message));

await стр.goto(АДРЕС, { waitUntil: 'networkidle' });

const готов = await стр.evaluate(async () => {
    if (!('serviceWorker' in navigator)) return 'нет поддержки воркера';
    const р = await Promise.race([navigator.serviceWorker.ready, new Promise((г) => setTimeout(() => г(null), 8000))]);
    return р ? 'ok' : 'воркер не стал активным за 8 секунд';
});

if (готов !== 'ok') {
    console.error(`Воркер: ${готов}`);
    await браузер.close();
    process.exit(1);
}

// Даём воркеру дойти до конца установки: кэш наполняется после события install
await стр.waitForTimeout(2500);

const в_кэше = await стр.evaluate(async () => {
    const имена = (await caches.keys()).filter((н) => н.startsWith('briefe-'));
    if (!имена.length) return 0;
    return (await (await caches.open(имена[0])).keys()).length;
});

console.log(`В кэше воркера файлов: ${в_кэше}`);

await контекст.setOffline(true);

const провалы = [];

for (const хэш of ['', 'cheat', 'module/g02', 'theory/g05', 'drill/g01', 'situation/s03', 'write/s03-a', 'letters', 'errors', 'phrases', 'about']) {
    await стр.goto(`${АДРЕС}#/${хэш}`, { waitUntil: 'domcontentloaded' });
    await стр.reload({ waitUntil: 'domcontentloaded' });

    try {
        await стр.waitForSelector('#screen .page', { timeout: 6000 });
        const длина = await стр.evaluate(() => document.getElementById('screen').innerText.trim().length);
        if (длина < 40) провалы.push(`#/${хэш}: пусто`);
    } catch {
        провалы.push(`#/${хэш}: не открылся без сети`);
    }
}

await браузер.close();

if (ошибки.length) console.log('Ошибки страницы:', [...new Set(ошибки)].slice(0, 5).join(' | '));

if (провалы.length) {
    console.error(`Без сети не открылось (${провалы.length}):`);
    for (const п of провалы) console.error(`  ✗ ${п}`);
    process.exit(1);
}

console.log('Без сети открылись все экраны.');
