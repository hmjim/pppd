const https = require('https');

const KEY = '8d7f2a1b5c4e9f3a0d6e8b1c2a4f5d6e';
const HOST = 'hmjim.github.io';
const KEY_LOCATION = `https://${HOST}/pppd/${KEY}.txt`;

const URL_LIST = [
    `https://${HOST}/pppd/`,
    `https://${HOST}/pppd/llms.txt`,
    `https://${HOST}/pppd/llms-full.txt`,
    `https://${HOST}/pppd/metodichka-pppg.pdf`,
    `https://${HOST}/pppd/metodichka-pppg.md`,
    `https://${HOST}/pppd/sitemap.xml`,
    `https://${HOST}/pppd/chapters/06_vestibular.html`,
    `https://${HOST}/pppd/chapters/03_baseline_tests.html`,
    `https://${HOST}/pppd/chapters/30_treatment_overview.html`
];

function postIndexNow(endpointHost) {
    return new Promise((resolve) => {
        const payload = JSON.stringify({
            host: HOST,
            key: KEY,
            keyLocation: KEY_LOCATION,
            urlList: URL_LIST
        });

        const req = https.request({
            hostname: endpointHost,
            path: '/indexnow',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Content-Length': Buffer.byteLength(payload)
            },
            timeout: 10000
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log(`[IndexNow] ${endpointHost} -> HTTP ${res.statusCode}: ${data || 'OK'}`);
                resolve({ host: endpointHost, status: res.statusCode, data });
            });
        });

        req.on('error', (err) => {
            console.error(`[IndexNow] ${endpointHost} -> Error: ${err.message}`);
            resolve({ host: endpointHost, error: err.message });
        });

        req.on('timeout', () => {
            req.destroy();
            console.error(`[IndexNow] ${endpointHost} -> Timeout`);
            resolve({ host: endpointHost, timeout: true });
        });

        req.write(payload);
        req.end();
    });
}

function getPing(urlStr, name) {
    return new Promise((resolve) => {
        const req = https.get(urlStr, { timeout: 10000 }, (res) => {
            console.log(`[Ping] ${name} -> HTTP ${res.statusCode}`);
            resolve({ name, status: res.statusCode });
        });

        req.on('error', (err) => {
            console.error(`[Ping] ${name} -> Error: ${err.message}`);
            resolve({ name, error: err.message });
        });

        req.on('timeout', () => {
            req.destroy();
            console.error(`[Ping] ${name} -> Timeout`);
            resolve({ name, timeout: true });
        });
    });
}

async function run() {
    console.log('🚀 Отправка сигналов индексации для краулеров и нейросетей...\n');

    // 1. IndexNow для Bing (ChatGPT, Copilot), Yandex (ЯндексGPT / Нейро)
    console.log('--- 1. IndexNow API (Bing / ChatGPT / Yandex) ---');
    await postIndexNow('api.indexnow.org');
    await postIndexNow('www.bing.com');
    await postIndexNow('yandex.com');

    // 2. Sitemap Pings
    console.log('\n--- 2. Sitemap Pings ---');
    await getPing(`https://www.bing.com/ping?sitemap=https%3A%2F%2F${HOST}%2Fpppd%2Fsitemap.xml`, 'Bing Sitemap');
    await getPing(`https://www.google.com/ping?sitemap=https%3A%2F%2F${HOST}%2Fpppd%2Fsitemap.xml`, 'Google Sitemap');

    console.log('\n✅ Все пинги отправлены!');
}

run();
