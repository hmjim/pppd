/* ═══════════════════════════════════════════
   ТОЧКА ОПОРЫ / POINT OF SUPPORT — App Controller
   Loads MD chapters, builds TOC, handles navigation & paywall
   ═══════════════════════════════════════════ */

const CHAPTERS_RU = [
    { id: '00_introduction',           title: 'Вступление',                          module: null },
    { id: '41_psychosomatics',         title: 'Психосоматика: универсальный ключ',    module: 'Модуль 0: База' },
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
    { id: '44_attention_training',     title: 'Фокус внимания при тревоге',          module: 'Модуль 1: Тело' },
    { id: '47_meditation',             title: 'Медитация при ПППГ и тревоге',        module: 'Модуль 1: Тело' },
    { id: '09_adrenaline_loop',        title: 'Адреналиновая петля',                 module: 'Модуль 2: Батарейка', paid: true },
    { id: '10_cas_trap',               title: 'Капкан CAS',                          module: 'Модуль 2: Батарейка', paid: true },
    { id: '11_hypochondria',           title: 'Ипохондрия',                          module: 'Модуль 2: Батарейка', paid: true },
    { id: '12_exposure',               title: 'Экспозиция',                          module: 'Модуль 2: Батарейка', paid: true },
    { id: '13_sport',                  title: 'Спорт и перезагрузка',                module: 'Модуль 2: Батарейка', paid: true },
    { id: '42_vestibular_migraine',    title: 'Вестибулярная мигрень',               module: 'Модуль 2: Батарейка', paid: true },
    { id: '27_depersonalization',      title: 'Дереализация',                      module: 'Модуль 2: Батарейка', paid: true },
    { id: '43_ptsd_emdr',              title: 'ПТСР и техника ДПДГ (EMDR)',        module: 'Модуль 2: Батарейка', paid: true },
    { id: '14_neuroplasticity',        title: 'Нейропластичность',                   module: 'Модуль 3: Мышление', paid: true },
    { id: '15_metacognition',          title: 'Метакогнитивная терапия',              module: 'Модуль 3: Мышление', paid: true },
    { id: '16_cognitive_distortions',  title: 'Когнитивные искажения',               module: 'Модуль 3: Мышление', paid: true },
    { id: '17_root_causes',            title: 'Где мы свернули не туда?',            module: 'Модуль 3: Мышление', paid: true },
    { id: '18_ego',                    title: 'Эго: ложная личность',                module: 'Модуль 3: Мышление', paid: true },
    { id: '19_inner_child',            title: 'Внутренний ребёнок',                  module: 'Модуль 3: Мышление', paid: true },
    { id: '28_suppressed_emotions',    title: 'Подавленные эмоции',                  module: 'Модуль 3: Мышление', paid: true },
    { id: '46_victim_state',           title: 'Выход из позиции Жертвы',             module: 'Модуль 3: Мышление', paid: true },
    { id: '45_shadow_work',            title: 'Принятие Тени',                       module: 'Модуль 3: Мышление', paid: true },
    { id: '20_setback_anatomy',        title: 'Анатомия отката',                     module: 'Модуль 4: Выход', paid: true },
    { id: '21_storm_strategy',         title: 'Стратегия «Шторм»',                   module: 'Модуль 4: Выход', paid: true },
    { id: '22_new_identity',           title: 'Новая личность',                      module: 'Модуль 4: Выход', paid: true },
    { id: '23_farewell',               title: 'Выход в жизнь',                       module: 'Модуль 4: Выход', paid: true },
    { id: '29_loved_ones',             title: 'Близкие и ПППГ',                      module: 'Модуль 4: Выход', paid: true },
    { id: '24_case_studies',           title: 'Истории выздоровления',               module: 'Кейсы', paid: true },
    { id: '25_appendix',              title: 'Приложения',                           module: 'Приложения', paid: true },
];

const CHAPTERS_EN = [
    { id: '00_introduction',           title: 'Introduction',                        module: null },
    { id: '41_psychosomatics',         title: 'Psychosomatics: Universal Key',       module: 'Module 0: Foundation' },
    { id: '01_what_is_pppg',           title: 'What is PPPD',                        module: 'Module 0: Foundation' },
    { id: '02_medical_checkup',        title: 'Closing the Clinic Door',             module: 'Module 0: Foundation' },
    { id: '03_baseline_tests',         title: 'Baseline Assessment & Tests',         module: 'Module 0: Foundation' },
    { id: '04_muscle_armor',           title: 'Muscle Armor',                        module: 'Module 1: Body' },
    { id: '05_relaxation',             title: 'Jacobson Progressive Relaxation',     module: 'Module 1: Body' },
    { id: '06_vestibular',             title: 'Vestibular Rehabilitation',           module: 'Module 1: Body' },
    { id: '06b_biofeedback',           title: 'Simulators & Brain Recalibration',    module: 'Module 1: Body' },
    { id: '07_neurophysiology_basics', title: 'Neurophysiology Basics',              module: 'Module 1: Body' },
    { id: '08_visual_dependence',      title: 'Visual Dependence',                   module: 'Module 1: Body' },
    { id: '26_sleep',                  title: 'Sleep & PPPD',                        module: 'Module 1: Body' },
    { id: '44_attention_training',     title: 'Attention Focus in Anxiety',          module: 'Module 1: Body' },
    { id: '47_meditation',             title: 'Meditation in PPPD & Anxiety',        module: 'Module 1: Body' },
    { id: '09_adrenaline_loop',        title: 'The Adrenaline Loop',                 module: 'Module 2: Battery', paid: true },
    { id: '10_cas_trap',               title: 'The CAS Trap',                        module: 'Module 2: Battery', paid: true },
    { id: '11_hypochondria',           title: 'Health Anxiety & Hypochondria',       module: 'Module 2: Battery', paid: true },
    { id: '12_exposure',               title: 'Graded Exposure',                     module: 'Module 2: Battery', paid: true },
    { id: '13_sport',                  title: 'Physical Activity & Reset',           module: 'Module 2: Battery', paid: true },
    { id: '42_vestibular_migraine',    title: 'Vestibular Migraine',                 module: 'Module 2: Battery', paid: true },
    { id: '27_depersonalization',      title: 'Derealization & Depersonalization',   module: 'Module 2: Battery', paid: true },
    { id: '43_ptsd_emdr',              title: 'PTSD & EMDR Therapy',                 module: 'Module 2: Battery', paid: true },
    { id: '14_neuroplasticity',        title: 'Neuroplasticity & Rewiring',          module: 'Module 3: Cognition', paid: true },
    { id: '15_metacognition',          title: 'Metacognitive Therapy (MCT)',         module: 'Module 3: Cognition', paid: true },
    { id: '16_cognitive_distortions',  title: 'Cognitive Distortions',               module: 'Module 3: Cognition', paid: true },
    { id: '17_root_causes',            title: 'Where Did We Go Wrong?',              module: 'Module 3: Cognition', paid: true },
    { id: '18_ego',                    title: 'The Ego: The False Identity',         module: 'Module 3: Cognition', paid: true },
    { id: '19_inner_child',            title: 'The Inner Child & Trauma',            module: 'Module 3: Cognition', paid: true },
    { id: '28_suppressed_emotions',    title: 'Suppressed Emotions',                 module: 'Module 3: Cognition', paid: true },
    { id: '46_victim_state',           title: 'Exiting the Victim Role',             module: 'Module 3: Cognition', paid: true },
    { id: '45_shadow_work',            title: 'Shadow Work & Integration',           module: 'Module 3: Cognition', paid: true },
    { id: '20_setback_anatomy',        title: 'Anatomy of a Setback',                module: 'Module 4: Breakthrough', paid: true },
    { id: '21_storm_strategy',         title: 'The Storm Protocol',                  module: 'Module 4: Breakthrough', paid: true },
    { id: '22_new_identity',           title: 'New Identity & Integration',          module: 'Module 4: Breakthrough', paid: true },
    { id: '23_farewell',               title: 'Return to Full Life',                 module: 'Module 4: Breakthrough', paid: true },
    { id: '29_loved_ones',             title: 'Loved Ones & PPPD Support',           module: 'Module 4: Breakthrough', paid: true },
    { id: '24_case_studies',           title: 'Clinical Case Studies',               module: 'Case Studies', paid: true },
    { id: '25_appendix',              title: 'Clinical Protocols & Exercises',      module: 'Appendix', paid: true },
];

const isEn = document.documentElement.lang === 'en' || window.location.pathname.includes('/en/');
const CHAPTERS = isEn ? CHAPTERS_EN : CHAPTERS_RU;
const LICENSE_KEY_STORAGE = isEn ? 'point-of-support-license-key' : 'tochka-opory-license-key';

let currentIndex = 0;

// ── Update TOC URLs to Prevent Double /chapters/ Nesting ──
function updateTocHrefs() {
    const isSubdir = window.location.pathname.includes('/chapters/');
    document.querySelectorAll('.toc-item').forEach(link => {
        const i = parseInt(link.dataset.index, 10);
        if (!isNaN(i) && CHAPTERS[i]) {
            link.href = isSubdir ? (CHAPTERS[i].id + '.html') : ('chapters/' + CHAPTERS[i].id + '.html');
        }
    });
}

// ── Update Language Switcher Links ──
function updateLangSwitcher(index) {
    const isSubdir = window.location.pathname.includes('/chapters/');
    const container = document.querySelector('.lang-switch-container');
    if (!container) return;

    if (index === -1) {
        if (isEn) {
            const ruTarget = isSubdir ? '../../' : '../';
            container.innerHTML = `<a href="${ruTarget}" style="color:var(--text-secondary);text-decoration:none;padding:2px 8px;border-radius:4px;border:1px solid var(--border);">RU</a><span style="background:var(--accent);color:#fff;padding:2px 8px;border-radius:4px;font-weight:600;">EN</span>`;
        } else {
            const enTarget = isSubdir ? '../en/' : 'en/';
            container.innerHTML = `<span style="background:var(--accent);color:#fff;padding:2px 8px;border-radius:4px;font-weight:600;">RU</span><a href="${enTarget}" style="color:var(--text-secondary);text-decoration:none;padding:2px 8px;border-radius:4px;border:1px solid var(--border);">EN</a>`;
        }
        return;
    }

    const chId = (index >= 0 && index < CHAPTERS.length) ? CHAPTERS[index].id : '00_introduction';
    if (isEn) {
        const ruTarget = isSubdir ? `../../chapters/${chId}.html` : `../chapters/${chId}.html`;
        container.innerHTML = `<a href="${ruTarget}" style="color:var(--text-secondary);text-decoration:none;padding:2px 8px;border-radius:4px;border:1px solid var(--border);">RU</a><span style="background:var(--accent);color:#fff;padding:2px 8px;border-radius:4px;font-weight:600;">EN</span>`;
    } else {
        const enTarget = isSubdir ? `../en/chapters/${chId}.html` : `en/chapters/${chId}.html`;
        container.innerHTML = `<span style="background:var(--accent);color:#fff;padding:2px 8px;border-radius:4px;font-weight:600;">RU</span><a href="${enTarget}" style="color:var(--text-secondary);text-decoration:none;padding:2px 8px;border-radius:4px;border:1px solid var(--border);">EN</a>`;
    }
}

// ── Build TOC ──
function buildTOC() {
    const toc = document.getElementById('toc');
    if (!toc) return;
    toc.innerHTML = '';
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
        const isSubdir = window.location.pathname.includes('/chapters/');
        link.href = isSubdir ? (ch.id + '.html') : ('chapters/' + ch.id + '.html');
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
    if (isEn) {
        chapterEl.innerHTML = `
            <div class="paywall-container">
                <span class="paywall-icon">🔐</span>
                <h2 class="paywall-title">Restricted Access: Modules 2–4</h2>
                <p class="paywall-text">
                    The clinical and therapeutic system of "Point of Support" covering adrenaline loops, 
                    cognitive traps, secondary gain, and full neuro-vestibular recovery is locked.
                </p>
                <div class="paywall-features">
                    <ul>
                        <li>Adrenaline loop regulation and 5-4-3-2-1 scanner switching</li>
                        <li>Somatic tracking and attention focus recalibration</li>
                        <li>Graded exposure and paradoxical intention protocols</li>
                        <li>Metacognitive therapy, Ego analysis, and Inner Child healing</li>
                        <li>Secondary gain analysis, victim mindset exit, and setback mastery</li>
                    </ul>
                </div>
                <div class="paywall-form">
                    <input type="text" id="paywall-key" class="paywall-input" placeholder="Enter license key">
                    <button id="paywall-submit" class="paywall-btn">Unlock All Modules</button>
                </div>
                <a href="https://t.me/Hmjim" target="_blank" class="paywall-link">Contact the author on Telegram (@Hmjim) to purchase access</a>
            </div>
        `;
    } else {
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
    }

    document.getElementById('paywall-submit').addEventListener('click', async () => {
        const keyInput = document.getElementById('paywall-key').value.trim();
        if (!keyInput) {
            alert(isEn ? 'Please enter your license key.' : 'Пожалуйста, введи ключ доступа.');
            return;
        }

        const btn = document.getElementById('paywall-submit');
        const origText = btn.textContent;
        btn.textContent = isEn ? 'Verifying...' : 'Проверка...';
        btn.disabled = true;

        try {
            const ch = CHAPTERS[index];
            const isSubdir = window.location.pathname.includes('/chapters/');
            const mdUrl = isSubdir ? `${ch.id}.md` : `chapters/${ch.id}.md`;
            const res = await fetch(mdUrl);
            if (!res.ok) throw new Error('Failed to fetch');
            const encryptedPayload = await res.text();

            await decryptContent(encryptedPayload, keyInput);

            localStorage.setItem(LICENSE_KEY_STORAGE, keyInput);
            alert(isEn ? 'Access granted! All modules unlocked.' : 'Доступ успешно активирован! Все модули разблокированы.');
            loadChapter(index);
        } catch (err) {
            alert(isEn ? 'Invalid license key. Please verify and try again.' : 'Неверный ключ доступа. Пожалуйста, проверьте правильность ввода.');
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

    if (!loadChapter._fromPopState) {
        const isSubdir = window.location.pathname.includes('/chapters/');
        const targetUrl = isSubdir ? (ch.id + '.html') : ('chapters/' + ch.id + '.html');
        history.pushState({ chapterIndex: index }, ch.title, targetUrl);
    }
    loadChapter._fromPopState = false;

    chapterEl.innerHTML = isEn 
        ? '<div class="chapter-loading"><div class="spinner"></div><p>Loading chapter...</p></div>'
        : '<div class="chapter-loading"><div class="spinner"></div><p>Загрузка...</p></div>';

    const seoLanding = document.getElementById('seo-landing');
    if (seoLanding) seoLanding.style.display = 'none';
    chapterEl.style.display = '';
    const navBar = document.getElementById('chapter-nav-bar');
    if (navBar) navBar.style.display = '';

    const savedKey = localStorage.getItem(LICENSE_KEY_STORAGE) || localStorage.getItem('point-of-support-license-key') || localStorage.getItem('tochka-opory-license-key');
    const isLicensed = !!savedKey;

    if (ch.paid && !isLicensed) {
        renderPaywall(chapterEl, index);
    } else {
        try {
            const isSubdir = window.location.pathname.includes('/chapters/');
            const mdUrl = isSubdir ? `${ch.id}.md` : `chapters/${ch.id}.md`;
            const res = await fetch(mdUrl);
            if (!res.ok) {
                chapterEl.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:80px 0;">Chapter "${ch.title}" is coming soon.</p>`;
            } else {
                let md = await res.text();

                if (ch.paid) {
                    try {
                        md = await decryptContent(md, savedKey);
                    } catch (e) {
                        localStorage.removeItem(LICENSE_KEY_STORAGE);
                        renderPaywall(chapterEl, index);
                        return;
                    }
                }

                let html = marked.parse(md);
                chapterEl.innerHTML = html;

                if (isLicensed) {
                    const isSubdir = window.location.pathname.includes('/chapters/');
                    const pdfFile = isEn ? 'point_of_support.pdf' : 'r_015744dc3f28b49e.pdf';
                    const pdfPath = (isSubdir ? '../' : '') + pdfFile + '?v=' + Date.now();
                    const pdfBtn = document.createElement('button');
                    pdfBtn.className = 'pdf-download-btn';
                    pdfBtn.innerHTML = `<span class="pdf-icon">📄</span> ${isEn ? 'Download PDF' : 'Скачать PDF'}`;
                    pdfBtn.addEventListener('click', async () => {
                        const ua = navigator.userAgent || '';
                        const isTelegramWebView = /Telegram/i.test(ua) || (typeof window.TelegramWebviewProxy !== 'undefined');
                        if (!isTelegramWebView) {
                            window.print();
                            return;
                        }
                        const key = encodeURIComponent(savedKey);
                        const baseUrl = window.location.origin + window.location.pathname;
                        const printUrl = baseUrl + '#tochka-print=' + key + '&ch=' + currentIndex;
                        try {
                            await navigator.clipboard.writeText(printUrl);
                        } catch {
                            const ta = document.createElement('textarea');
                            ta.value = printUrl;
                            ta.style.cssText = 'position:fixed;left:-9999px';
                            document.body.appendChild(ta);
                            ta.select();
                            document.execCommand('copy');
                            document.body.removeChild(ta);
                        }
                        const overlay = document.createElement('div');
                        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;';
                        overlay.innerHTML = `
                            <div style="background:#1a1a2e;border-radius:16px;padding:28px 24px;max-width:340px;text-align:center;color:#fff;font-family:Inter,sans-serif;">
                                <div style="font-size:40px;margin-bottom:12px;">✅</div>
                                <div style="font-size:17px;font-weight:600;margin-bottom:16px;">${isEn ? 'Link Copied!' : 'Ссылка скопирована!'}</div>
                                <div style="font-size:14px;line-height:1.6;color:#aab;margin-bottom:20px;">
                                    ${isEn ? 'Open Safari / Chrome and paste the link to download the complete PDF book.' : 'Telegram не поддерживает скачивание PDF.<br><br><strong style="color:#fff;">Открой Safari</strong> и вставь ссылку из буфера обмена — PDF скачается автоматически.'}
                                </div>
                                <button onclick="this.parentElement.parentElement.remove()" style="background:#4a6adf;color:#fff;border:none;border-radius:10px;padding:12px 32px;font-size:15px;font-weight:600;cursor:pointer;">OK</button>
                            </div>
                        `;
                        document.body.appendChild(overlay);
                        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
                    });
                    chapterEl.insertBefore(pdfBtn, chapterEl.firstChild.nextSibling);
                }

                chapterEl.querySelectorAll('a[href$=".pdf"]').forEach(link => {
                    link.setAttribute('download', '');
                    link.setAttribute('target', '_blank');
                });
            }
        } catch {
            chapterEl.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:80px 0;">Error loading chapter.</p>`;
        }
    }

    chapterEl.style.animation = 'none';
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            chapterEl.style.animation = '';
        });
    });

    document.querySelectorAll('.toc-item').forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });

    const prevBtn = document.getElementById('prev-chapter');
    const nextBtn = document.getElementById('next-chapter');
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === CHAPTERS.length - 1;

    const pct = Math.round(((index + 1) / CHAPTERS.length) * 100);
    const progText = document.getElementById('progress-text');
    const progFill = document.getElementById('progress-fill');
    if (progText) progText.textContent = pct + '%';
    if (progFill) progFill.style.width = pct + '%';

    updateTocHrefs();
    updateLangSwitcher(index);

    requestAnimationFrame(() => {
        const activeItem = document.querySelector('.toc-item.active');
        if (activeItem) {
            activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        requestAnimationFrame(() => {
            updateCachedHeight();
        });
    });

    localStorage.setItem(isEn ? 'point-of-support-chapter' : 'tochka-opory-chapter', index);

    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');
    if (sidebar) sidebar.classList.remove('open');
    if (menuToggle) menuToggle.classList.remove('active');
}

// ── Theme Toggle ──
function initTheme() {
    const saved = localStorage.getItem('tochka-opory-theme');
    if (saved === 'light') {
        document.body.classList.add('light');
        const icon = document.querySelector('.theme-icon');
        if (icon) icon.textContent = '☀️';
    }

    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('light');
            const isLight = document.body.classList.contains('light');
            const icon = document.querySelector('.theme-icon');
            if (icon) icon.textContent = isLight ? '☀️' : '🌙';
            localStorage.setItem('tochka-opory-theme', isLight ? 'light' : 'dark');
        });
    }
}

// ── Mobile Menu ──
function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            sidebar.classList.toggle('open');
        });

        const content = document.getElementById('content');
        if (content) {
            content.addEventListener('click', () => {
                sidebar.classList.remove('open');
                toggle.classList.remove('active');
            });
        }
    }
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
        const fill = document.getElementById('progress-fill');
        if (fill) fill.style.width = totalPct + '%';
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
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    document.addEventListener('selectstart', (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });

    document.addEventListener('copy', (e) => {
        e.preventDefault();
        alert(isEn 
            ? 'The materials of "Point of Support" are protected by copyright.' 
            : 'Копирование материалов книги «Точка Опоры» защищено авторским правом.');
    });

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && ['c', 'a', 'u', 's'].includes(e.key.toLowerCase())) {
            e.preventDefault();
            return false;
        }
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
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
    
    if (!showLanding._fromPopState) {
        const isSubdir = window.location.pathname.includes('/chapters/');
        const targetUrl = isSubdir ? '../' : './';
        history.pushState(null, isEn ? 'Point of Support — Overcoming PPPD' : 'Точка Опоры — Выход из ПППГ', targetUrl);
    }
    showLanding._fromPopState = false;
    
    document.querySelectorAll('.toc-item').forEach(el => el.classList.remove('active'));
    
    localStorage.removeItem(isEn ? 'point-of-support-chapter' : 'tochka-opory-chapter');

    updateTocHrefs();
    updateLangSwitcher(-1);

    requestAnimationFrame(() => {
        updateCachedHeight();
    });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
    const hashParams = window.location.hash;
    if (hashParams.startsWith('#tochka-print=')) {
        const match = hashParams.match(/^#tochka-print=([^&]+)&ch=(\d+)$/);
        if (match) {
            const importedKey = decodeURIComponent(match[1]);
            const chapterIdx = parseInt(match[2], 10);
            localStorage.setItem(LICENSE_KEY_STORAGE, importedKey);
            history.replaceState(null, '', window.location.pathname);
            buildTOC();
            initTheme();
            initMobileMenu();
            initScrollProgress();
            initKeyboard();
            initCopyProtection();
            const prevBtn = document.getElementById('prev-chapter');
            const nextBtn = document.getElementById('next-chapter');
            if (prevBtn) prevBtn.addEventListener('click', () => loadChapter(currentIndex - 1));
            if (nextBtn) nextBtn.addEventListener('click', () => loadChapter(currentIndex + 1));
            loadChapter(chapterIdx);
            setTimeout(() => window.print(), 1500);
            return;
        }
    }

    buildTOC();
    initTheme();
    initMobileMenu();
    initScrollProgress();
    initKeyboard();
    initCopyProtection();

    const prevBtn = document.getElementById('prev-chapter');
    const nextBtn = document.getElementById('next-chapter');
    if (prevBtn) prevBtn.addEventListener('click', () => loadChapter(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => loadChapter(currentIndex + 1));

    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            showLanding();
        });
    }

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

    const ctaBtn = document.querySelector('.seo-cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loadChapter(0);
        });
    }

    window.addEventListener('popstate', (e) => {
        const match = window.location.pathname.match(/\/chapters\/([^/]+)\.html$/);
        if (match) {
            const idx = CHAPTERS.findIndex(ch => ch.id === match[1]);
            if (idx !== -1) {
                loadChapter._fromPopState = true;
                loadChapter(idx);
                return;
            }
        }
        if (e.state && typeof e.state.chapterIndex === 'number') {
            loadChapter._fromPopState = true;
            loadChapter(e.state.chapterIndex);
        } else {
            showLanding._fromPopState = true;
            showLanding();
        }
    });

    const initialMatch = window.location.pathname.match(/\/chapters\/([^/]+)\.html$/);
    if (initialMatch) {
        const idx = CHAPTERS.findIndex(ch => ch.id === initialMatch[1]);
        if (idx !== -1) {
            loadChapter(idx);
        } else {
            showLanding();
        }
    } else {
        const saved = parseInt(localStorage.getItem(isEn ? 'point-of-support-chapter' : 'tochka-opory-chapter'), 10);
        if (!isNaN(saved)) {
            loadChapter(saved);
        } else {
            showLanding();
        }
    }
});
