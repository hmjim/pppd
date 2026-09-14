const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function buildPDFForLang(lang) {
    const isEn = lang === 'en';
    const langLabel = isEn ? 'EN' : 'RU';
    console.log(`\n🚀 Starting Full Book PDF Generation [${langLabel}]...`);

    const { marked } = await import('marked');

    const CHAPTERS_DIR = path.join(__dirname, isEn ? 'chapters_en' : 'chapters_src');
    const DOCS_DIR = path.join(__dirname, 'docs');
    const OUTPUT_HTML = path.join(__dirname, `full_book_export_${lang}.html`);
    const OUTPUT_PDF = isEn
        ? path.join(DOCS_DIR, 'en', 'point_of_support.pdf')
        : path.join(DOCS_DIR, 'r_015744dc3f28b49e.pdf');

    const destDir = path.dirname(OUTPUT_PDF);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    const CHAPTER_FILES_RU = [
        { id: '00_introduction', num: '0', title: 'Вступление', module: 'Вводная часть' },
        { id: '41_psychosomatics', num: '0b', title: 'Психосоматика: универсальный ключ', module: 'Модуль 0: База' },
        { id: '01_what_is_pppg', num: '1', title: 'Что такое ПППГ', module: 'Модуль 0: База' },
        { id: '02_medical_checkup', num: '2', title: 'Закрываем дверь в поликлинику', module: 'Модуль 0: База' },
        { id: '03_baseline_tests', num: '3', title: 'Оцифровка: тесты HADS и DHI', module: 'Модуль 0: База' },
        { id: '04_muscle_armor', num: '4', title: 'Мышечный панцирь', module: 'Модуль 1: Тело' },
        { id: '05_relaxation', num: '5', title: 'Релаксация по Джекобсону', module: 'Модуль 1: Тело' },
        { id: '06_vestibular', num: '6', title: 'Вестибулярная гимнастика', module: 'Модуль 1: Тело' },
        { id: '06b_biofeedback', num: '6b', title: 'Тренажёры: перекалибровка мозга', module: 'Модуль 1: Тело' },
        { id: '07_neurophysiology_basics', num: '7', title: 'Нейрофизиология: базовые настройки', module: 'Модуль 1: Тело' },
        { id: '08_visual_dependence', num: '8', title: 'Зрительная зависимость', module: 'Модуль 1: Тело' },
        { id: '26_sleep', num: '9', title: 'Сон и ПППГ', module: 'Модуль 1: Тело' },
        { id: '44_attention_training', num: '9b', title: 'Фокус внимания при тревоге', module: 'Модуль 1: Тело' },
        { id: '47_meditation', num: '9c', title: 'Медитация при ПППГ и тревоге', module: 'Модуль 1: Тело' },
        { id: '09_adrenaline_loop', num: '10', title: 'Адреналиновая петля', module: 'Модуль 2: Батарейка' },
        { id: '10_cas_trap', num: '11', title: 'Капкан CAS', module: 'Модуль 2: Батарейка' },
        { id: '11_hypochondria', num: '12', title: 'Ипохондрия', module: 'Модуль 2: Батарейка' },
        { id: '12_exposure', num: '13', title: 'Экспозиция', module: 'Модуль 2: Батарейка' },
        { id: '13_sport', num: '14', title: 'Спорт и перезагрузка', module: 'Модуль 2: Батарейка' },
        { id: '42_vestibular_migraine', num: '14b', title: 'Вестибулярная мигрень', module: 'Модуль 2: Батарейка' },
        { id: '27_depersonalization', num: '15', title: 'Дереализация и деперсонализация', module: 'Модуль 2: Батарейка' },
        { id: '43_ptsd_emdr', num: '15b', title: 'ПТСР и техника ДПДГ (EMDR)', module: 'Модуль 2: Батарейка' },
        { id: '14_neuroplasticity', num: '16', title: 'Нейропластичность', module: 'Модуль 3: Мышление' },
        { id: '15_metacognition', num: '17', title: 'Метакогнитивная терапия', module: 'Модуль 3: Мышление' },
        { id: '16_cognitive_distortions', num: '18', title: 'Когнитивные искажения', module: 'Модуль 3: Мышление' },
        { id: '17_root_causes', num: '19', title: 'Где мы свернули не туда?', module: 'Модуль 3: Мышление' },
        { id: '18_ego', num: '20', title: 'Эго: ложная личность', module: 'Модуль 3: Мышление' },
        { id: '19_inner_child', num: '21', title: 'Внутренний ребёнок', module: 'Модуль 3: Мышление' },
        { id: '28_suppressed_emotions', num: '22', title: 'Подавленные эмоции', module: 'Модуль 3: Мышление' },
        { id: '46_victim_state', num: '22a', title: 'Выход из позиции Жертвы', module: 'Модуль 3: Мышление' },
        { id: '45_shadow_work', num: '22b', title: 'Принятие Тени: интеграция подавленного', module: 'Модуль 3: Мышление' },
        { id: '20_setback_anatomy', num: '23', title: 'Анатомия отката', module: 'Модуль 4: Выход' },
        { id: '21_storm_strategy', num: '24', title: 'Стратегия «Шторм»', module: 'Модуль 4: Выход' },
        { id: '22_new_identity', num: '25', title: 'Новая личность', module: 'Модуль 4: Выход' },
        { id: '23_farewell', num: '26', title: 'Выход в жизнь', module: 'Модуль 4: Выход' },
        { id: '29_loved_ones', num: '27', title: 'Близкие и ПППГ', module: 'Модуль 4: Выход' },
        { id: '24_case_studies', num: '28', title: 'Истории выздоровления', module: 'Кейсы' },
        { id: '25_appendix', num: '29', title: 'Приложения и материалы', module: 'Приложения' }
    ];

    const CHAPTER_FILES_EN = [
        { id: '00_introduction', num: '0', title: 'Introduction', module: 'Introduction' },
        { id: '41_psychosomatics', num: '0b', title: 'Psychosomatics: The Universal Key', module: 'Module 0: Foundation' },
        { id: '01_what_is_pppg', num: '1', title: 'What is PPPD', module: 'Module 0: Foundation' },
        { id: '02_medical_checkup', num: '2', title: 'Closing the Clinic Door', module: 'Module 0: Foundation' },
        { id: '03_baseline_tests', num: '3', title: 'Quantifying Metrics: HADS and DHI', module: 'Module 0: Foundation' },
        { id: '04_muscle_armor', num: '4', title: 'Muscle Armor', module: 'Module 1: The Body' },
        { id: '05_relaxation', num: '5', title: 'Jacobson Progressive Relaxation', module: 'Module 1: The Body' },
        { id: '06_vestibular', num: '6', title: 'Vestibular Rehabilitation Exercises', module: 'Module 1: The Body' },
        { id: '06b_biofeedback', num: '6b', title: 'Simulators: Recalibrating the Brain', module: 'Module 1: The Body' },
        { id: '07_neurophysiology_basics', num: '7', title: 'Neurophysiology: Factory Settings', module: 'Module 1: The Body' },
        { id: '08_visual_dependence', num: '8', title: 'Visual Dependence', module: 'Module 1: The Body' },
        { id: '26_sleep', num: '9', title: 'Sleep and PPPD', module: 'Module 1: The Body' },
        { id: '44_attention_training', num: '9b', title: 'Attentional Focus Training', module: 'Module 1: The Body' },
        { id: '47_meditation', num: '9c', title: 'Meditation & Vagal Protocols', module: 'Module 1: The Body' },
        { id: '09_adrenaline_loop', num: '10', title: 'The Adrenaline Loop', module: 'Module 2: The Battery' },
        { id: '10_cas_trap', num: '11', title: 'The CAS Trap', module: 'Module 2: The Battery' },
        { id: '11_hypochondria', num: '12', title: 'Health Anxiety & Hypochondria', module: 'Module 2: The Battery' },
        { id: '12_exposure', num: '13', title: 'Graded Exposure Therapy', module: 'Module 2: The Battery' },
        { id: '13_sport', num: '14', title: 'Exercise & Cardiovascular Reset', module: 'Module 2: The Battery' },
        { id: '42_vestibular_migraine', num: '14b', title: 'Vestibular Migraine & PPPD', module: 'Module 2: The Battery' },
        { id: '27_depersonalization', num: '15', title: 'Derealization and Depersonalization', module: 'Module 2: The Battery' },
        { id: '43_ptsd_emdr', num: '15b', title: 'Medical PTSD & EMDR Protocols', module: 'Module 2: The Battery' },
        { id: '14_neuroplasticity', num: '16', title: 'Neuroplasticity in Practice', module: 'Module 3: Mindset' },
        { id: '15_metacognition', num: '17', title: 'Metacognitive Therapy', module: 'Module 3: Mindset' },
        { id: '16_cognitive_distortions', num: '18', title: 'Cognitive Distortions', module: 'Module 3: Mindset' },
        { id: '17_root_causes', num: '19', title: 'Root Causes & Perfectionism', module: 'Module 3: Mindset' },
        { id: '18_ego', num: '20', title: 'Ego & The Patient Identity', module: 'Module 3: Mindset' },
        { id: '19_inner_child', num: '21', title: 'The Inner Child & Somatic Safety', module: 'Module 3: Mindset' },
        { id: '28_suppressed_emotions', num: '22', title: 'Suppressed Emotions & TMS', module: 'Module 3: Mindset' },
        { id: '46_victim_state', num: '22a', title: 'Exiting the Victim State', module: 'Module 3: Mindset' },
        { id: '45_shadow_work', num: '22b', title: 'Shadow Work & Healthy Boundaries', module: 'Module 3: Mindset' },
        { id: '20_setback_anatomy', num: '23', title: 'Anatomy of a Setback', module: 'Module 4: Recovery' },
        { id: '21_storm_strategy', num: '24', title: 'The "Storm" Protocol', module: 'Module 4: Recovery' },
        { id: '22_new_identity', num: '25', title: 'The New Identity', module: 'Module 4: Recovery' },
        { id: '23_farewell', num: '26', title: 'Stepping Out Into the World', module: 'Module 4: Recovery' },
        { id: '29_loved_ones', num: '27', title: 'Loved Ones & PPPD', module: 'Module 4: Recovery' },
        { id: '24_case_studies', num: '28', title: 'Recovery Case Studies', module: 'Case Studies' },
        { id: '25_appendix', num: '29', title: 'Appendices & Scales', module: 'Appendices' }
    ];

    const CHAPTER_FILES = isEn ? CHAPTER_FILES_EN : CHAPTER_FILES_RU;

    let tocListHTML = '';
    let chaptersHTML = '';
    let currentModule = null;

    CHAPTER_FILES.forEach((ch) => {
        const filePath = path.join(CHAPTERS_DIR, `${ch.id}.md`);
        if (!fs.existsSync(filePath)) {
            console.warn(`⚠️  Chapter file missing: ${filePath}`);
            return;
        }

        let rawMd = fs.readFileSync(filePath, 'utf8');
        rawMd = rawMd.replace(/МАТЕРИАЛЫ К КУРСУ[\s\S]*?(?=\n#|\n##|$)/gi, '');

        if (ch.module && ch.module !== currentModule) {
            currentModule = ch.module;
            tocListHTML += `<div class="toc-module-heading">${currentModule}</div>\n`;
            chaptersHTML += `
                <div class="module-divider-page">
                    <div class="module-tag">${currentModule}</div>
                </div>
            `;
        }

        const chPrefix = isEn ? 'Chapter' : 'Глава';
        tocListHTML += `<div class="toc-item-row"><span class="toc-num">${chPrefix} ${ch.num}.</span> <span class="toc-title">${ch.title}</span></div>\n`;

        const parsedHTML = marked.parse(rawMd);

        chaptersHTML += `
            <article class="pdf-chapter">
                ${parsedHTML}
            </article>
        `;
    });

    const docTitle = isEn
        ? 'Point of Support — Comprehensive Guide for Overcoming PPPD'
        : 'Точка Опоры — Полное руководство по выходу из ПППГ';

    const badgeText = isEn ? 'Clinical Manual & Recovery Protocol' : 'Практическое руководство';
    const mainTitle = isEn ? 'Point of Support' : 'Точка Опоры';
    const subTitle = isEn
        ? 'A Step-by-Step System for Overcoming PPPD (Persistent Postural-Perceptual Dizziness)'
        : 'Пошаговая система выхода из ПППГ (персистирующего постурально-перцептивного головокружения)';
    const authorText = isEn ? 'Author: Maxim' : 'Автор: Максим';
    const metaNote = isEn
        ? '34 Chapters · 5 Modules · Evidence-Based Neuro-Vestibular Protocols'
        : '34 главы · 5 модулей · Доказательная база и практика';
    const tocTitle = isEn ? 'Table of Contents' : 'Оглавление';

    const fullBookHTML = `<!DOCTYPE html>
<html lang="${isEn ? 'en' : 'ru'}">
<head>
    <meta charset="UTF-8">
    <title>${docTitle}</title>
    <style>
        @page {
            size: A4;
            margin: 20mm 15mm 20mm 15mm;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-size: 11pt;
            line-height: 1.6;
            color: #1f2937;
            background: #ffffff;
            margin: 0;
            padding: 0;
        }

        .cover-page {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            page-break-after: always;
            box-sizing: border-box;
            padding: 40px 20px;
        }

        .cover-badge {
            display: inline-block;
            padding: 6px 16px;
            background: #eef2ff;
            color: #4f46e5;
            font-weight: 700;
            font-size: 12pt;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 24px;
        }

        .cover-title {
            font-size: 34pt;
            font-weight: 800;
            color: #111827;
            line-height: 1.15;
            margin: 0 0 16px 0;
        }

        .cover-subtitle {
            font-size: 16pt;
            color: #4b5563;
            max-width: 600px;
            line-height: 1.5;
            margin: 0 0 40px 0;
        }

        .cover-meta {
            font-size: 11pt;
            color: #6b7280;
            border-top: 2px solid #e5e7eb;
            padding-top: 24px;
            width: 80%;
            max-width: 500px;
            margin: 0 auto;
        }

        .cover-author {
            font-size: 14pt;
            font-weight: 600;
            color: #111827;
            margin-bottom: 6px;
        }

        .toc-page {
            page-break-after: always;
            padding-top: 20px;
        }

        .toc-heading {
            font-size: 24pt;
            font-weight: 800;
            color: #111827;
            border-bottom: 3px solid #4f46e5;
            padding-bottom: 12px;
            margin-bottom: 28px;
        }

        .toc-module-heading {
            font-size: 13pt;
            font-weight: 700;
            color: #4f46e5;
            margin-top: 20px;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 1px solid #e0e7ff;
            padding-bottom: 4px;
        }

        .toc-item-row {
            display: flex;
            justify-content: space-between;
            padding: 4px 0;
            font-size: 10.5pt;
            border-bottom: 1px dotted #e5e7eb;
        }

        .toc-num {
            font-weight: 600;
            color: #4f46e5;
            margin-right: 8px;
        }

        .toc-title {
            color: #374151;
            flex-grow: 1;
        }

        .module-divider-page {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            page-break-before: always;
            page-break-after: always;
            text-align: center;
        }

        .module-tag {
            font-size: 28pt;
            font-weight: 800;
            color: #4f46e5;
            border: 3px solid #4f46e5;
            padding: 20px 40px;
            border-radius: 16px;
            background: #f5f3ff;
        }

        .pdf-chapter {
            page-break-before: always;
            padding-top: 10px;
        }

        .pdf-chapter h1 {
            font-size: 20pt;
            font-weight: 800;
            color: #111827;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 10px;
            margin-bottom: 16px;
            page-break-after: avoid;
        }

        .pdf-chapter h2 {
            font-size: 15pt;
            font-weight: 700;
            color: #374151;
            margin-top: 24px;
            margin-bottom: 12px;
            page-break-after: avoid;
        }

        .pdf-chapter h3 {
            font-size: 12pt;
            font-weight: 600;
            color: #4b5563;
            margin-top: 18px;
            margin-bottom: 8px;
            page-break-after: avoid;
        }

        .pdf-chapter p {
            margin: 0 0 12px 0;
            text-align: justify;
        }

        .pdf-chapter ul, .pdf-chapter ol {
            margin: 0 0 16px 0;
            padding-left: 24px;
        }

        .pdf-chapter li {
            margin-bottom: 6px;
        }

        .pdf-chapter blockquote {
            margin: 16px 0;
            padding: 12px 20px;
            background: #f8fafc;
            border-left: 4px solid #4f46e5;
            color: #475569;
            font-style: italic;
        }

        .pdf-chapter table {
            width: 100%;
            border-collapse: collapse;
            margin: 16px 0;
            font-size: 10pt;
        }

        .pdf-chapter th, .pdf-chapter td {
            border: 1px solid #d1d5db;
            padding: 8px 12px;
            text-align: left;
        }

        .pdf-chapter th {
            background: #f3f4f6;
            font-weight: 700;
        }

        .pdf-chapter hr {
            border: 0;
            height: 1px;
            background: #e5e7eb;
            margin: 24px 0;
        }

        .pdf-chapter em {
            color: #4b5563;
        }

        .pdf-chapter strong {
            color: #111827;
        }
    </style>
</head>
<body>
    <!-- Cover -->
    <div class="cover-page">
        <div class="cover-badge">${badgeText}</div>
        <h1 class="cover-title">${mainTitle}</h1>
        <div class="cover-subtitle">${subTitle}</div>
        <div class="cover-meta">
            <div class="cover-author">${authorText}</div>
            <div>${metaNote}</div>
        </div>
    </div>

    <!-- TOC -->
    <div class="toc-page">
        <h2 class="toc-heading">${tocTitle}</h2>
        ${tocListHTML}
    </div>

    <!-- Content -->
    ${chaptersHTML}
</body>
</html>`;

    fs.writeFileSync(OUTPUT_HTML, fullBookHTML, 'utf8');
    console.log(`✅ Compiled full book HTML [${langLabel}]: ${OUTPUT_HTML}`);

    // Convert HTML to PDF using MS Edge Headless
    const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
    if (!fs.existsSync(edgePath)) {
        throw new Error(`Edge executable not found at ${edgePath}`);
    }

    console.log(`⏳ Rendering PDF via MS Edge [${langLabel}]...`);
    const cmd = `"${edgePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${OUTPUT_PDF}" "file:///${OUTPUT_HTML.replace(/\\/g, '/')}"`;
    execSync(cmd);

    const pdfStats = fs.statSync(OUTPUT_PDF);
    console.log(`🎉 Full Book PDF successfully created [${langLabel}]!`);
    console.log(`   Path: ${OUTPUT_PDF}`);
    console.log(`   Size: ${(pdfStats.size / (1024 * 1024)).toFixed(2)} MB (${pdfStats.size} bytes)`);

    // Clean up temporary HTML export
    if (fs.existsSync(OUTPUT_HTML)) {
        fs.unlinkSync(OUTPUT_HTML);
    }
}

async function main() {
    await buildPDFForLang('ru');
    await buildPDFForLang('en');
    console.log('\n🌟 Both RU and EN PDF editions compiled successfully!');
}

if (require.main === module) {
    main().catch(err => {
        console.error('❌ Error building PDF:', err);
        process.exit(1);
    });
}

module.exports = { buildPDFForLang, main };
