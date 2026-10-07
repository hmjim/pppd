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
    const ch = CHAPTERS[index] || {};
    if (isEn) {
        chapterEl.innerHTML = `
            <div class="paywall-container">
                <div class="paywall-badge-pill">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    FULL PROTOCOL ACCESS
                </div>
                <div class="paywall-icon-glow">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
                </div>
                <h2 class="paywall-title">Unlock the Complete Protocol</h2>
                <p class="paywall-text">
                    The chapter "${ch.title || 'Protected Chapter'}" is part of the advanced modules. 
                    The first 14 foundational chapters are <strong>completely free</strong>. Get full 1-year access to all clinical modules, advanced protocols, worksheets, and the complete PDF book edition.
                </p>
                
                <div class="paywall-benefits">
                    <div class="paywall-benefit-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                        <span>58 In-Depth Chapters</span>
                    </div>
                    <div class="paywall-benefit-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                        <span>Full PDF Book Edition</span>
                    </div>
                    <div class="paywall-benefit-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                        <span>Printable DHI / HADS Scales</span>
                    </div>
                    <div class="paywall-benefit-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                        <span>Direct Support (@Hmjim)</span>
                    </div>
                </div>

                <div class="paywall-cta-box">
                    <div class="paywall-price-tag">
                        <span>$99</span>
                        <span class="paywall-price-sub">/ 1-year license</span>
                    </div>
                    <a href="https://t.me/Hmjim" target="_blank" class="paywall-buy-btn">
                        <span>Get Instant Access via Telegram</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </a>
                    <div class="paywall-methods-row">
                        <span class="paywall-method-badge" title="Visa">
                            <svg width="34" height="11" viewBox="0 0 34 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 0.5L8.9 10.5H6.2L3.8 2.3C3.6 1.7 3.2 1.2 2.6 0.9C1.6 0.4 0.7 0.2 0 0.1L0.1 0.1H4.8C5.4 0.1 6 0.5 6.1 1.2L7.3 7.3L10.3 0.5H13.5ZM25.2 6.9C25.2 4.3 21.6 4.2 21.6 3C21.6 2.6 22 2.2 22.8 2.1C23.2 2.1 24.3 2 25.3 2.5L25.8 0.4C25.1 0.2 24.3 0 23.2 0C20.4 0 18.4 1.4 18.4 3.4C18.4 5 19.9 5.8 21 6.3C22.1 6.8 22.5 7.2 22.5 7.6C22.5 8.3 21.6 8.7 20.7 8.7C19.3 8.7 18.5 8.3 17.8 8L17.3 10.2C18 10.5 19.3 10.8 20.6 10.8C23.6 10.8 25.2 9.4 25.2 6.9ZM32.8 10.5H35.3L33.1 0.5H30.8C30.2 0.5 29.8 0.8 29.6 1.3L25.3 10.5H28.1L28.7 8.9H32.2L32.8 10.5ZM29.5 6.9L31 2.9L31.8 6.9H29.5ZM17.6 0.5L15.4 10.5H12.7L14.9 0.5H17.6Z" fill="#1A1F71"/></svg>
                        </span>
                        <span class="paywall-method-badge" title="Mastercard">
                            <svg width="22" height="14" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="7.5" fill="#EB001B"/><circle cx="16.5" cy="7.5" r="7.5" fill="#F79E1B" fill-opacity="0.9"/><path d="M12 2.2a7.46 7.46 0 0 1 2.9 5.3 7.46 7.46 0 0 1-2.9 5.3 7.46 7.46 0 0 1-2.9-5.3A7.46 7.46 0 0 1 12 2.2z" fill="#FF5F00"/></svg>
                            <span style="color:#222;font-size:0.72rem;">Mastercard</span>
                        </span>
                        <span class="paywall-method-badge" title="USDT (TRC20 / ERC20)">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#26A17B"/><path d="M13.2 8.4V6.5h3.6V5H7.2v1.5h3.6v1.9c-3.1.2-5.4.9-5.4 1.8 0 .9 2.3 1.6 5.4 1.8v5.8h2.4V12c3.1-.2 5.4-.9 5.4-1.8 0-.9-2.3-1.6-5.4-1.8zm0 2.6c-2.3.1-4-.3-4-.8s1.7-.9 4-.9 4 .4 4 .9c0 .5-1.7.9-4 .8z" fill="#FFF"/></svg>
                            <span style="color:#26A17B;font-size:0.72rem;">USDT</span>
                        </span>
                        <span class="paywall-method-badge" title="PayPal">
                            <svg width="13" height="15" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.3 23.5l1.2-7.5h3.8c4.2 0 7.4-2.1 8-6.1.4-2.6-.7-4.5-2.6-5.7C15.7 3.5 13.9 3 11.5 3H3.2L0 23.5h6.3z" fill="#003087"/><path d="M7.5 16l1.3-8.3h4.7c3 0 5.3 1.2 5.8 4.2.5 3.3-1.6 5.6-4.9 5.6H10l-1 5.5H5.8L7.5 16z" fill="#0079C1"/></svg>
                            <span style="color:#003087;font-size:0.72rem;">PayPal</span>
                        </span>
                    </div>
                </div>

                <div class="paywall-key-section">
                    <div class="paywall-key-title">Already have an access key?</div>
                    <div class="paywall-form-compact">
                        <input type="text" id="paywall-key" class="paywall-input-compact" placeholder="Enter access key...">
                        <button id="paywall-submit" class="paywall-btn-compact">Unlock →</button>
                    </div>
                    <p id="paywall-error" style="color:#ff6b6b;font-size:0.85rem;display:none;margin-top:8px;"></p>
                </div>
            </div>
        `;
    } else {
        chapterEl.innerHTML = `
            <div class="paywall-container">
                <div class="paywall-badge-pill">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    ПОЛНЫЙ ДОСТУП К СИСТЕМЕ
                </div>
                <div class="paywall-icon-glow">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
                </div>
                <h2 class="paywall-title">Открыть полную систему выздоровления</h2>
                <p class="paywall-text">
                    Глава «${ch.title || 'Закрытая глава'}» входит в платный блок. Первые 14 глав доступны <strong>бесплатно</strong>. 
                    Получи полный доступ на 1 год ко всем клиническим протоколам, практическим тетрадям и PDF-версии руководства.
                </p>
                
                <div class="paywall-benefits">
                    <div class="paywall-benefit-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                        <span>58 глав книги (Модули 0–4)</span>
                    </div>
                    <div class="paywall-benefit-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                        <span>Полная PDF-версия книги</span>
                    </div>
                    <div class="paywall-benefit-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                        <span>Шкалы DHI / HADS и протоколы</span>
                    </div>
                    <div class="paywall-benefit-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                        <span>Поддержка автора в Telegram</span>
                    </div>
                </div>

                <div class="paywall-cta-box">
                    <div class="paywall-price-tag">
                        <span>5 000 ₽</span>
                        <span class="paywall-price-sub">/ лицензия на 1 год</span>
                    </div>
                    <a href="https://t.me/Hmjim" target="_blank" class="paywall-buy-btn">
                        <span>Получить доступ в Telegram</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </a>
                    <div class="paywall-methods-row">
                        <span class="paywall-method-badge" title="СБП">
                            <span style="color:#000;font-size:0.75rem;font-weight:800;">СБП</span>
                        </span>
                        <span class="paywall-method-badge" title="МИР">
                            <span style="color:#008b45;font-size:0.75rem;font-weight:800;">МИР</span>
                        </span>
                        <span class="paywall-method-badge" title="Банковская карта">
                            <span style="color:#1a1a2e;font-size:0.72rem;">Карты РФ / Мир</span>
                        </span>
                        <span class="paywall-method-badge" title="USDT">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#26A17B"/><path d="M13.2 8.4V6.5h3.6V5H7.2v1.5h3.6v1.9c-3.1.2-5.4.9-5.4 1.8 0 .9 2.3 1.6 5.4 1.8v5.8h2.4V12c3.1-.2 5.4-.9 5.4-1.8 0-.9-2.3-1.6-5.4-1.8zm0 2.6c-2.3.1-4-.3-4-.8s1.7-.9 4-.9 4 .4 4 .9c0 .5-1.7.9-4 .8z" fill="#FFF"/></svg>
                            <span style="color:#26A17B;font-size:0.72rem;">USDT</span>
                        </span>
                    </div>
                </div>

                <div class="paywall-key-section">
                    <div class="paywall-key-title">Уже есть ключ доступа?</div>
                    <div class="paywall-form-compact">
                        <input type="text" id="paywall-key" class="paywall-input-compact" placeholder="Введи ключ доступа...">
                        <button id="paywall-submit" class="paywall-btn-compact">Активировать →</button>
                    </div>
                    <p id="paywall-error" style="color:#ff6b6b;font-size:0.85rem;display:none;margin-top:8px;"></p>
                </div>
            </div>
        `;
    }

    const submitBtn = document.getElementById('paywall-submit');
    const keyInputEl = document.getElementById('paywall-key');
    const errorEl = document.getElementById('paywall-error');

    async function handleKeySubmit() {
        const keyInput = keyInputEl.value.trim();
        if (!keyInput) {
            errorEl.textContent = isEn ? 'Please enter your license key.' : 'Пожалуйста, введи ключ доступа.';
            errorEl.style.display = 'block';
            return;
        }

        const origText = submitBtn.textContent;
        submitBtn.textContent = isEn ? 'Verifying...' : 'Проверка...';
        submitBtn.disabled = true;
        errorEl.style.display = 'none';

        try {
            const ch = CHAPTERS[index];
            const isSubdir = window.location.pathname.includes('/chapters/');
            const mdUrl = isSubdir ? `${ch.id}.md` : `chapters/${ch.id}.md`;
            const res = await fetch(mdUrl);
            if (!res.ok) throw new Error('Failed to fetch');
            const encryptedPayload = await res.text();

            await decryptContent(encryptedPayload, keyInput);

            localStorage.setItem(LICENSE_KEY_STORAGE, keyInput);
            loadChapter(index);
        } catch (err) {
            errorEl.textContent = isEn ? 'Invalid license key. Please verify and try again.' : 'Неверный ключ доступа. Пожалуйста, проверьте правильность ввода.';
            errorEl.style.display = 'block';
            submitBtn.textContent = origText;
            submitBtn.disabled = false;
        }
    }

    submitBtn.addEventListener('click', handleKeySubmit);
    keyInputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleKeySubmit();
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

    const savedKey = localStorage.getItem(LICENSE_KEY_STORAGE);
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
                    const pdfFile = isEn ? 'e_8b3a9c72d1f40e56.pdf' : 'r_015744dc3f28b49e.pdf';
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
    const overlay = document.getElementById('sidebar-overlay');

    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('open');
        if (toggle) toggle.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }

    function openSidebar() {
        if (sidebar) sidebar.classList.add('open');
        if (toggle) toggle.classList.add('active');
        if (overlay) overlay.classList.add('active');
        document.body.classList.add('sidebar-open');
    }

    if (toggle && sidebar) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (sidebar.classList.contains('open')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });

        if (overlay) {
            overlay.addEventListener('click', closeSidebar);
        }

        const content = document.getElementById('content');
        if (content) {
            content.addEventListener('click', () => {
                if (sidebar.classList.contains('open')) closeSidebar();
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
