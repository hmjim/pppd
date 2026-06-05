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
    { id: '07_neurophysiology_basics', title: 'Базовые настройки',                   module: 'Модуль 1: Тело' },
    { id: '08_visual_dependence',      title: 'Зрительная зависимость',              module: 'Модуль 1: Тело' },
    { id: '09_adrenaline_loop',        title: 'Адреналиновая петля',                 module: 'Модуль 2: Батарейка' },
    { id: '10_cas_trap',               title: 'Капкан CAS',                          module: 'Модуль 2: Батарейка' },
    { id: '11_hypochondria',           title: 'Ипохондрия',                          module: 'Модуль 2: Батарейка' },
    { id: '12_exposure',               title: 'Экспозиция',                          module: 'Модуль 2: Батарейка' },
    { id: '13_sport',                  title: 'Спорт и перезагрузка',                module: 'Модуль 2: Батарейка' },
    { id: '14_neuroplasticity',        title: 'Нейропластичность',                   module: 'Модуль 3: Мышление' },
    { id: '15_metacognition',          title: 'Метакогнитивная терапия',              module: 'Модуль 3: Мышление' },
    { id: '16_cognitive_distortions',  title: 'Когнитивные искажения',               module: 'Модуль 3: Мышление' },
    { id: '17_root_causes',            title: 'Где мы свернули не туда?',            module: 'Модуль 3: Мышление' },
    { id: '18_ego',                    title: 'Эго: ложная личность',                module: 'Модуль 3: Мышление' },
    { id: '19_inner_child',            title: 'Внутренний ребёнок',                  module: 'Модуль 3: Мышление' },
    { id: '20_setback_anatomy',        title: 'Анатомия отката',                     module: 'Модуль 4: Выход' },
    { id: '21_storm_strategy',         title: 'Стратегия «Шторм»',                   module: 'Модуль 4: Выход' },
    { id: '22_new_identity',           title: 'Новая личность',                      module: 'Модуль 4: Выход' },
    { id: '23_farewell',               title: 'Выход в жизнь',                       module: 'Модуль 4: Выход' },
    { id: '24_case_studies',           title: 'Истории выздоровления',               module: 'Кейсы' },
    { id: '25_appendix',              title: 'Приложения',                           module: 'Приложения' },
];

let currentIndex = 0;

// ── Build TOC ──
function buildTOC() {
    const toc = document.getElementById('toc');
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

    // Hide SEO landing, show chapter nav
    const seoLanding = document.getElementById('seo-landing');
    if (seoLanding) seoLanding.style.display = 'none';
    const navBar = document.getElementById('chapter-nav-bar');
    if (navBar) navBar.style.display = '';

    const savedKey = localStorage.getItem('tochka-opory-license-key');
    const isLicensed = !!savedKey;
    let isPaywall = false;

    if (index >= 9 && !isLicensed) {
        isPaywall = true;
        renderPaywall(chapterEl, index);
    } else {
        try {
            const res = await fetch(`chapters/${ch.id}.md`);
            if (!res.ok) {
                chapterEl.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:80px 0;">Глава «${ch.title}» пока не написана.<br>Скоро будет.</p>`;
            } else {
                let md = await res.text();

                if (index >= 9) {
                    try {
                        md = await decryptContent(md, savedKey);
                    } catch (e) {
                        // Stored key is invalid or failed to decrypt
                        localStorage.removeItem('tochka-opory-license-key');
                        renderPaywall(chapterEl, index);
                        return;
                    }
                }

                chapterEl.innerHTML = marked.parse(md);
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
function initScrollProgress() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0) {
            // Blend chapter progress with scroll progress within current chapter
            const scrollPct = scrollTop / docHeight;
            const chapterBase = currentIndex / CHAPTERS.length;
            const chapterStep = 1 / CHAPTERS.length;
            const totalPct = Math.round((chapterBase + chapterStep * scrollPct) * 100);
            document.getElementById('progress-fill').style.width = totalPct + '%';
        }
    });
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

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
    buildTOC();
    initTheme();
    initMobileMenu();
    initScrollProgress();
    initKeyboard();
    initCopyProtection();

    document.getElementById('prev-chapter').addEventListener('click', () => loadChapter(currentIndex - 1));
    document.getElementById('next-chapter').addEventListener('click', () => loadChapter(currentIndex + 1));

    // Restore last read position
    const saved = parseInt(localStorage.getItem('tochka-opory-chapter'), 10);
    loadChapter(isNaN(saved) ? 0 : saved);
});
