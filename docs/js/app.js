/* ═══════════════════════════════════════════
   ТОЧКА ОПОРЫ — App Controller
   Loads MD chapters, builds TOC, handles navigation
   ═══════════════════════════════════════════ */

const CHAPTERS = [
    { id: '00_introduction',           title: 'Вступление',                          module: null },
    { id: '01_what_is_pppg',           title: 'Что такое ПППГ',                      module: 'Модуль 0: База' },
    { id: '02_medical_checkup',        title: 'Закрываем дверь в поликлинику',       module: 'Модуль 0: База' },
    { id: '03_baseline_tests',         title: 'Оцифровка: тесты',                    module: 'Модуль 0: База' },
    { id: '04_muscle_armor',           title: 'Мышечный панцирь',                    module: 'Модуль 1: Тело' },
    { id: '05_relaxation',             title: 'Релаксация по Джекобсону',            module: 'Модуль 1: Тело' },
    { id: '06_vestibular',             title: 'Вестибулярная гимнастика',            module: 'Модуль 1: Тело' },
    { id: '06b_biofeedback',           title: 'Тренажёры: перекалибровка мозга',     module: 'Модуль 1: Тело' },
    { id: '07_neurophysiology_basics', title: 'Базовые настройки',                   module: 'Модуль 1: Тело' },
    { id: '08_visual_dependence',      title: 'Зрительная зависимость',              module: 'Модуль 1: Тело' },
    { id: '26_sleep',                  title: 'Сон и ПППГ',                          module: 'Модуль 1: Тело' },
    { id: '09_adrenaline_loop',        title: 'Адреналиновая петля',                 module: 'Модуль 2: Батарейка', paid: true },
    { id: '10_cas_trap',               title: 'Капкан CAS',                          module: 'Модуль 2: Батарейка', paid: true },
    { id: '11_hypochondria',           title: 'Ипохондрия',                          module: 'Модуль 2: Батарейка', paid: true },
    { id: '12_exposure',               title: 'Экспозиция',                          module: 'Модуль 2: Батарейка', paid: true },
    { id: '13_sport',                  title: 'Спорт и перезагрузка',                module: 'Модуль 2: Батарейка', paid: true },
    { id: '27_depersonalization',      title: 'Дереализация',                      module: 'Модуль 2: Батарейка', paid: true },
    { id: '14_neuroplasticity',        title: 'Нейропластичность',                   module: 'Модуль 3: Мышление', paid: true },
    { id: '15_metacognition',          title: 'Метакогнитивная терапия',              module: 'Модуль 3: Мышление', paid: true },
    { id: '16_cognitive_distortions',  title: 'Когнитивные искажения',               module: 'Модуль 3: Мышление', paid: true },
    { id: '17_root_causes',            title: 'Где мы свернули не туда?',            module: 'Модуль 3: Мышление', paid: true },
    { id: '18_ego',                    title: 'Эго: ложная личность',                module: 'Модуль 3: Мышление', paid: true },
    { id: '19_inner_child',            title: 'Внутренний ребёнок',                  module: 'Модуль 3: Мышление', paid: true },
    { id: '28_suppressed_emotions',    title: 'Подавленные эмоции',                  module: 'Модуль 3: Мышление', paid: true },
    { id: '20_setback_anatomy',        title: 'Анатомия отката',                     module: 'Модуль 4: Выход', paid: true },
    { id: '21_storm_strategy',         title: 'Стратегия «Шторм»',                   module: 'Модуль 4: Выход', paid: true },
    { id: '22_new_identity',           title: 'Новая личность',                      module: 'Модуль 4: Выход', paid: true },
    { id: '23_farewell',               title: 'Выход в жизнь',                       module: 'Модуль 4: Выход', paid: true },
    { id: '29_loved_ones',             title: 'Близкие и ПППГ',                      module: 'Модуль 4: Выход', paid: true },
    { id: '24_case_studies',           title: 'Истории выздоровления',               module: 'Кейсы', paid: true },
    { id: '25_appendix',              title: 'Приложения',                           module: 'Приложения', paid: true },
];

let currentIndex = 0;

// ── Build TOC ──
function buildTOC() {
    const toc = document.getElementById('toc');
    if (!toc) return;
    toc.innerHTML = ''; // Clear statically pre-rendered links to prevent duplication
    let lastModule = null;

    CHAPTERS.forEach((ch, i) => {
        if (ch.module && ch.module !== lastModule) {
            const moduleDiv = document.createElement('div');
            moduleDiv.className = 'toc-module';
            moduleDiv.textContent = ch.module;
            toc.appendChild(moduleDiv);
            lastModule = ch.module;
        }

        const link = document.createElement('a');
        link.className = 'toc-item';
        link.textContent = ch.title;
        link.dataset.index = i;
        // SEO: add crawlable href to static pages
        link.href = 'chapters/' + ch.id + '.html';
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loadChapter(i);
        });
        toc.appendChild(link);
    });
}

// ── Decrypt Helper (Web Crypto API) ──
async function decryptContent(encryptedPayload, password) {
    try {
        const [ivBase64, ciphertextBase64] = encryptedPayload.split('.');
        if (!ivBase64 || !ciphertextBase64) {
            throw new Error('Invalid encrypted format');
        }

        const base64ToArrayBuffer = (base64) => {
            const binaryString = atob(base64);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes.buffer;
        };

        const iv = base64ToArrayBuffer(ivBase64);
        const combined = base64ToArrayBuffer(ciphertextBase64);

        // Hash the password with SHA-256 to generate the 256-bit key
        const encoder = new TextEncoder();
        const keyData = encoder.encode(password.trim());
        const hash = await window.crypto.subtle.digest('SHA-256', keyData);

        const cryptoKey = await window.crypto.subtle.importKey(
            'raw',
            hash,
            { name: 'AES-GCM' },
            false,
            ['decrypt']
        );

        const decrypted = await window.crypto.subtle.decrypt(
            { name: 'AES-GCM', iv: iv },
            cryptoKey,
            combined
        );

        const decoder = new TextDecoder();
        return decoder.decode(decrypted);
    } catch (err) {
        throw new Error('Decryption failed');
    }
}

// ── Render Paywall ──
function renderPaywall(chapterEl, index) {
    chapterEl.innerHTML = `
        <div class="paywall-container">
            <span class="paywall-icon">🔐</span>
            <h2 class="paywall-title">Доступ ограничен: Модули 2–4</h2>
            <p class="paywall-text">
                Практическая и терапевтическая часть системы «Точка Опоры» по работе с адреналиновыми петлями, 
                когнитивными ловушками, вторичными выгодами и выходом в полноценную жизнь заблокирована.
            </p>
            <div class="paywall-features">
                <ul>
                    <li>Работа с адреналиновой петлей и переключение сканера 5-4-3-2-1</li>
                    <li>Соматический трекинг и тренировка фокуса внимания</li>
                    <li>Экспозиция страхов и парадоксальная интенция</li>
                    <li>Метакогнитивная терапия, разбор Эго и Внутреннего ребенка</li>
                    <li>Анализ вторичных выгод, синдрома жертвы и преодоление откатов</li>
                </ul>
            </div>
            <div class="paywall-form">
                <input type="text" id="paywall-key" class="paywall-input" placeholder="Введи ключ доступа">
                <button id="paywall-submit" class="paywall-btn">Активировать доступ</button>
            </div>
            <a href="https://t.me/Hmjim" target="_blank" class="paywall-link">Связаться с автором в Telegram (@Hmjim) для покупки доступа</a>
        </div>
    `;

    document.getElementById('paywall-submit').addEventListener('click', async () => {
        const keyInput = document.getElementById('paywall-key').value.trim();
        if (!keyInput) {
            alert('Пожалуйста, введи ключ доступа.');
            return;
        }

        const btn = document.getElementById('paywall-submit');
        const origText = btn.textContent;
        btn.textContent = 'Проверка...';
        btn.disabled = true;

        try {
            // Fetch the current chapter to verify the key mathematically
            const ch = CHAPTERS[index];
            const res = await fetch(`chapters/${ch.id}.md`);
            if (!res.ok) throw new Error('Failed to fetch');
            const encryptedPayload = await res.text();

            // Attempt decryption
            await decryptContent(encryptedPayload, keyInput);

            // Decryption succeeded! Store the key and reload
            localStorage.setItem('tochka-opory-license-key', keyInput);
            alert('Доступ успешно активирован! Все модули разблокированы.');
            loadChapter(index);
        } catch (err) {
            alert('Неверный ключ доступа. Пожалуйста, проверьте правильность ввода.');
            btn.textContent = origText;
            btn.disabled = false;
        }
    });
}

// ── Load Chapter ──
async function loadChapter(index) {
    if (index < 0 || index >= CHAPTERS.length) return;
    currentIndex = index;
    const ch = CHAPTERS[index];
    const chapterEl = document.getElementById('chapter');

    // Show loading
    chapterEl.innerHTML = '<div class="chapter-loading"><div class="spinner"></div><p>Загрузка...</p></div>';

    // Hide SEO landing, show chapter content and nav
    const seoLanding = document.getElementById('seo-landing');
    if (seoLanding) seoLanding.style.display = 'none';
    chapterEl.style.display = '';
    const navBar = document.getElementById('chapter-nav-bar');
    if (navBar) navBar.style.display = '';

    const savedKey = localStorage.getItem('tochka-opory-license-key');
    const isLicensed = !!savedKey;
    let isPaywall = false;

    if (ch.paid && !isLicensed) {
        isPaywall = true;
        renderPaywall(chapterEl, index);
    } else {
        try {
            const res = await fetch(`chapters/${ch.id}.md`);
            if (!res.ok) {
                chapterEl.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:80px 0;">Глава «${ch.title}» пока не написана.<br>Скоро будет.</p>`;
            } else {
                let md = await res.text();

                if (ch.paid) {
                    try {
                        md = await decryptContent(md, savedKey);
                    } catch (e) {
                        // Stored key is invalid or failed to decrypt
                        localStorage.removeItem('tochka-opory-license-key');
                        renderPaywall(chapterEl, index);
                        return;
                    }
                }

                let html = marked.parse(md);
                // Fix relative paths: in SPA context (URL is /pppd/),
                // ../materials/ resolves to /materials/ (wrong).
                // Rewrite to materials/ which resolves to /pppd/materials/ (correct).
                html = html.replace(/href="\.\.\/materials\//g, 'href="materials/');
                chapterEl.innerHTML = html;

                // Inject PDF download button for licensed users
                if (isLicensed) {
                    const pdfBtn = document.createElement('button');
                    pdfBtn.className = 'pdf-download-btn';
                    pdfBtn.innerHTML = '<span class="pdf-icon">📄</span> Скачать PDF';
                    pdfBtn.addEventListener('click', async () => {
                        const ua = navigator.userAgent || '';
                        const isTelegramWebView = /Telegram/i.test(ua) || (typeof window.TelegramWebviewProxy !== 'undefined');
                        if (!isTelegramWebView) {
                            window.print();
                            return;
                        }
                        // iOS WKWebView cannot download files or open external browser programmatically.
                        // Copy URL with embedded license key to clipboard + show instruction.
                        const key = encodeURIComponent(savedKey);
                        const baseUrl = window.location.origin + window.location.pathname;
                        const printUrl = baseUrl + '#tochka-print=' + key + '&ch=' + currentIndex;
                        try {
                            await navigator.clipboard.writeText(printUrl);
                        } catch {
                            // Fallback for clipboard API failure
                            const ta = document.createElement('textarea');
                            ta.value = printUrl;
                            ta.style.cssText = 'position:fixed;left:-9999px';
                            document.body.appendChild(ta);
                            ta.select();
                            document.execCommand('copy');
                            document.body.removeChild(ta);
                        }
                        // Show instruction overlay
                        const overlay = document.createElement('div');
                        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;';
                        overlay.innerHTML = `
                            <div style="background:#1a1a2e;border-radius:16px;padding:28px 24px;max-width:340px;text-align:center;color:#fff;font-family:Inter,sans-serif;">
                                <div style="font-size:40px;margin-bottom:12px;">✅</div>
                                <div style="font-size:17px;font-weight:600;margin-bottom:16px;">Ссылка скопирована!</div>
                                <div style="font-size:14px;line-height:1.6;color:#aab;margin-bottom:20px;">
                                    Telegram не поддерживает скачивание PDF.<br><br>
                                    <strong style="color:#fff;">Открой Safari</strong> и вставь ссылку из буфера обмена — PDF скачается автоматически.
                                </div>
                                <button onclick="this.parentElement.parentElement.remove()" style="background:#4a6adf;color:#fff;border:none;border-radius:10px;padding:12px 32px;font-size:15px;font-weight:600;cursor:pointer;">Понятно</button>
                            </div>
                        `;
                        document.body.appendChild(overlay);
                        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
                    });
                    chapterEl.insertBefore(pdfBtn, chapterEl.firstChild.nextSibling);
                }

                // Fix PDF material links for Telegram WebView:
                // Add download attribute so in-app browser triggers download instead of inline render
                chapterEl.querySelectorAll('a[href$=".pdf"]').forEach(link => {
                    link.setAttribute('download', '');
                    link.setAttribute('target', '_blank');
                });
            }
        } catch {
            chapterEl.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:80px 0;">Глава «${ch.title}» пока не написана.</p>`;
        }
    }

    // Force re-animation asynchronously to avoid layout thrashing
    chapterEl.style.animation = 'none';
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            chapterEl.style.animation = '';
        });
    });

    // Update TOC active state
    document.querySelectorAll('.toc-item').forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });

    // Update nav buttons
    document.getElementById('prev-chapter').disabled = index === 0;
    document.getElementById('next-chapter').disabled = index === CHAPTERS.length - 1;

    // Update progress
    const pct = Math.round(((index + 1) / CHAPTERS.length) * 100);
    document.getElementById('progress-text').textContent = pct + '%';
    document.getElementById('progress-fill').style.width = pct + '%';

    // Defer layout-dependent scroll actions to next animation frame
    requestAnimationFrame(() => {
        const activeItem = document.querySelector('.toc-item.active');
        if (activeItem) {
            activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Recalculate dimensions after layout settles
        requestAnimationFrame(() => {
            updateCachedHeight();
        });
    });

    // Save position
    localStorage.setItem('tochka-opory-chapter', index);

    // Close mobile sidebar
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('menu-toggle').classList.remove('active');
}

// ── Theme Toggle ──
function initTheme() {
    const saved = localStorage.getItem('tochka-opory-theme');
    if (saved === 'light') {
        document.body.classList.add('light');
        document.querySelector('.theme-icon').textContent = '☀️';
    }

    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('light');
        const isLight = document.body.classList.contains('light');
        document.querySelector('.theme-icon').textContent = isLight ? '☀️' : '🌙';
        localStorage.setItem('tochka-opory-theme', isLight ? 'light' : 'dark');
    });
}

// ── Mobile Menu ──
function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        sidebar.classList.toggle('open');
    });

    // Close on content click (mobile)
    document.getElementById('content').addEventListener('click', () => {
        sidebar.classList.remove('open');
        toggle.classList.remove('active');
    });
}

// ── Scroll Progress ──
let cachedDocHeight = 0;

function updateCachedHeight() {
    cachedDocHeight = document.documentElement.scrollHeight - window.innerHeight;
}

function initScrollProgress() {
    window.addEventListener('scroll', () => {
        if (cachedDocHeight <= 0) return;
        const scrollTop = window.scrollY;
        const scrollPct = Math.min(1, Math.max(0, scrollTop / cachedDocHeight));
        const chapterBase = currentIndex / CHAPTERS.length;
        const chapterStep = 1 / CHAPTERS.length;
        const totalPct = Math.round((chapterBase + chapterStep * scrollPct) * 100);
        document.getElementById('progress-fill').style.width = totalPct + '%';
    }, { passive: true });

    window.addEventListener('resize', () => {
        updateCachedHeight();
    }, { passive: true });
}

// ── Keyboard Nav ──
function initKeyboard() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') loadChapter(currentIndex - 1);
        if (e.key === 'ArrowRight') loadChapter(currentIndex + 1);
    });
}

// ── Copy Protection ──
function initCopyProtection() {
    // Disable right click
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // Disable text selection start (except inputs)
    document.addEventListener('selectstart', (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });

    // Disable copy
    document.addEventListener('copy', (e) => {
        e.preventDefault();
        alert('Копирование материалов книги «Точка Опоры» защищено авторским правом.');
    });

    // Disable key shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl+C, Ctrl+A, Ctrl+U, Ctrl+S
        if (e.ctrlKey && ['c', 'a', 'u', 's'].includes(e.key.toLowerCase())) {
            e.preventDefault();
            return false;
        }
        // F12
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I / Ctrl+Shift+J
        if (e.ctrlKey && e.shiftKey && ['i', 'j'].includes(e.key.toLowerCase())) {
            e.preventDefault();
            return false;
        }
    });
}

// ── Show Landing Page ──
function showLanding() {
    const seoLanding = document.getElementById('seo-landing');
    if (seoLanding) seoLanding.style.display = '';
    const chapterEl = document.getElementById('chapter');
    if (chapterEl) chapterEl.style.display = 'none';
    const navBar = document.getElementById('chapter-nav-bar');
    if (navBar) navBar.style.display = 'none';
    
    // Reset TOC active state
    document.querySelectorAll('.toc-item').forEach(el => el.classList.remove('active'));
    
    // Save position
    localStorage.removeItem('tochka-opory-chapter');

    // Recalculate dimensions
    requestAnimationFrame(() => {
        updateCachedHeight();
    });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
    // Import license key from URL hash (sent by Telegram WebView PDF button)
    const hashParams = window.location.hash;
    if (hashParams.startsWith('#tochka-print=')) {
        const match = hashParams.match(/^#tochka-print=([^&]+)&ch=(\d+)$/);
        if (match) {
            const importedKey = decodeURIComponent(match[1]);
            const chapterIdx = parseInt(match[2], 10);
            // Save key and clean URL hash
            localStorage.setItem('tochka-opory-license-key', importedKey);
            history.replaceState(null, '', window.location.pathname);
            // Load chapter and auto-print after render
            buildTOC();
            initTheme();
            initMobileMenu();
            initScrollProgress();
            initKeyboard();
            initCopyProtection();
            document.getElementById('prev-chapter').addEventListener('click', () => loadChapter(currentIndex - 1));
            document.getElementById('next-chapter').addEventListener('click', () => loadChapter(currentIndex + 1));
            loadChapter(chapterIdx);
            // Wait for chapter to render, then print
            setTimeout(() => window.print(), 1500);
            return; // Skip normal init
        }
    }

    buildTOC();
    initTheme();
    initMobileMenu();
    initScrollProgress();
    initKeyboard();
    initCopyProtection();

    document.getElementById('prev-chapter').addEventListener('click', () => loadChapter(currentIndex - 1));
    document.getElementById('next-chapter').addEventListener('click', () => loadChapter(currentIndex + 1));

    // Home link listener
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            showLanding();
        });
    }

    // Intercept clicks on landing page TOC items to prevent full page reloads in SPA
    document.querySelectorAll('.seo-toc-item').forEach(link => {
        if (!link.classList.contains('locked')) {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('chapters/')) {
                    const id = href.replace('chapters/', '').replace('.html', '');
                    const idx = CHAPTERS.findIndex(ch => ch.id === id);
                    if (idx !== -1) {
                        e.preventDefault();
                        loadChapter(idx);
                    }
                }
            });
        }
    });

    // Intercept CTA button click
    const ctaBtn = document.querySelector('.seo-cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loadChapter(0);
        });
    }

    // Restore last read position (if empty, stay on landing page)
    const saved = parseInt(localStorage.getItem('tochka-opory-chapter'), 10);
    if (!isNaN(saved)) {
        loadChapter(saved);
    } else {
        showLanding();
    }
});
