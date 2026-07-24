const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function buildFullPDF() {
    console.log('🚀 Starting Full Book PDF Generation...');
    
    // Import marked
    const { marked } = await import('marked');
    
    const CHAPTERS_DIR = path.join(__dirname, 'chapters_src');
    const DOCS_DIR = path.join(__dirname, 'docs');
    const OUTPUT_HTML = path.join(__dirname, 'full_book_export.html');
    const OUTPUT_PDF = path.join(DOCS_DIR, 'dl_a7f3e9d2c1b8.pdf');

    // Chapters order according to build_seo.js
    const CHAPTER_FILES = [
        { id: '00_introduction', num: '0', title: 'Вступление', module: 'Вводная часть' },
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
        { id: '09_adrenaline_loop', num: '10', title: 'Адреналиновая петля', module: 'Модуль 2: Батарейка' },
        { id: '10_cas_trap', num: '11', title: 'Капкан CAS', module: 'Модуль 2: Батарейка' },
        { id: '11_hypochondria', num: '12', title: 'Ипохондрия', module: 'Модуль 2: Батарейка' },
        { id: '12_exposure', num: '13', title: 'Экспозиция', module: 'Модуль 2: Батарейка' },
        { id: '13_sport', num: '14', title: 'Спорт и перезагрузка', module: 'Модуль 2: Батарейка' },
        { id: '27_depersonalization', num: '15', title: 'Дереализация и деперсонализация', module: 'Модуль 2: Батарейка' },
        { id: '14_neuroplasticity', num: '16', title: 'Нейропластичность', module: 'Модуль 3: Мышление' },
        { id: '15_metacognition', num: '17', title: 'Метакогнитивная терапия', module: 'Модуль 3: Мышление' },
        { id: '16_cognitive_distortions', num: '18', title: 'Когнитивные искажения', module: 'Модуль 3: Мышление' },
        { id: '17_root_causes', num: '19', title: 'Где мы свернули не туда?', module: 'Модуль 3: Мышление' },
        { id: '18_ego', num: '20', title: 'Эго: ложная личность', module: 'Модуль 3: Мышление' },
        { id: '19_inner_child', num: '21', title: 'Внутренний ребёнок', module: 'Модуль 3: Мышление' },
        { id: '28_suppressed_emotions', num: '22', title: 'Подавленные эмоции', module: 'Модуль 3: Мышление' },
        { id: '20_setback_anatomy', num: '23', title: 'Анатомия отката', module: 'Модуль 4: Выход' },
        { id: '21_storm_strategy', num: '24', title: 'Стратегия «Шторм»', module: 'Модуль 4: Выход' },
        { id: '22_new_identity', num: '25', title: 'Новая личность', module: 'Модуль 4: Выход' },
        { id: '23_farewell', num: '26', title: 'Выход в жизнь', module: 'Модуль 4: Выход' },
        { id: '29_loved_ones', num: '27', title: 'Близкие и ПППГ', module: 'Модуль 4: Выход' },
        { id: '24_case_studies', num: '28', title: 'Истории выздоровления', module: 'Кейсы' },
        { id: '25_appendix', num: '29', title: 'Приложения и материалы', module: 'Приложения' }
    ];

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

        // Clean out any leftover prompt instruction artifacts if present
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

        tocListHTML += `<div class="toc-item-row"><span class="toc-num">Глава ${ch.num}.</span> <span class="toc-title">${ch.title}</span></div>\n`;

        const parsedHTML = marked.parse(rawMd);

        chaptersHTML += `
            <article class="pdf-chapter">
                ${parsedHTML}
            </article>
        `;
    });

    const fullBookHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Точка Опоры — Полное руководство по выходу из ПППГ</title>
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

        /* ── Cover Page ── */
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

        /* ── Table of Contents ── */
        .toc-page {
            page-break-after: always;
            padding-top: 20px;
        }

        .toc-heading {
            font-size: 22pt;
            font-weight: 700;
            color: #111827;
            border-bottom: 3px solid #4f46e5;
            padding-bottom: 8px;
            margin-bottom: 24px;
        }

        .toc-module-heading {
            font-size: 12pt;
            font-weight: 700;
            color: #4f46e5;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-top: 20px;
            margin-bottom: 8px;
            border-bottom: 1px dashed #cbd5e1;
            padding-bottom: 4px;
        }

        .toc-item-row {
            font-size: 10.5pt;
            padding: 4px 0;
            color: #334155;
        }

        .toc-num {
            font-weight: 700;
            color: #4f46e5;
            margin-right: 6px;
        }

        /* ── Module Dividers ── */
        .module-divider-page {
            page-break-before: always;
            page-break-after: always;
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .module-tag {
            font-size: 26pt;
            font-weight: 800;
            color: #4f46e5;
            background: #f0fdf4;
            border: 2px solid #86efac;
            padding: 24px 48px;
            border-radius: 16px;
            text-align: center;
        }

        /* ── Chapters ── */
        .pdf-chapter {
            page-break-before: always;
            margin-bottom: 40px;
        }

        .pdf-chapter h1 {
            font-size: 20pt;
            font-weight: 700;
            color: #111827;
            border-bottom: 2px solid #6366f1;
            padding-bottom: 8px;
            margin-top: 0;
            margin-bottom: 20px;
            page-break-after: avoid;
        }

        .pdf-chapter h2 {
            font-size: 15pt;
            font-weight: 700;
            color: #1f2937;
            margin-top: 28px;
            margin-bottom: 12px;
            page-break-after: avoid;
        }

        .pdf-chapter h3 {
            font-size: 12.5pt;
            font-weight: 600;
            color: #374151;
            margin-top: 20px;
            margin-bottom: 10px;
            page-break-after: avoid;
        }

        .pdf-chapter p {
            margin-bottom: 14px;
            text-align: justify;
        }

        .pdf-chapter ul, .pdf-chapter ol {
            margin-bottom: 16px;
            padding-left: 24px;
        }

        .pdf-chapter li {
            margin-bottom: 6px;
        }

        .pdf-chapter blockquote {
            margin: 20px 0;
            padding: 14px 20px;
            background: #f8fafc;
            border-left: 4px solid #6366f1;
            border-radius: 0 8px 8px 0;
            color: #334155;
            font-style: italic;
        }

        .pdf-chapter strong {
            color: #111827;
        }

        .pdf-chapter hr {
            border: none;
            border-top: 1px solid #e2e8f0;
            margin: 28px 0;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }

        th, td {
            border: 1px solid #cbd5e1;
            padding: 8px 12px;
            font-size: 10pt;
            text-align: left;
        }

        th {
            background: #f1f5f9;
            font-weight: 700;
        }
    </style>
</head>
<body>
    <!-- Cover -->
    <div class="cover-page">
        <div class="cover-badge">Книга и руководство</div>
        <h1 class="cover-title">ТОЧКА ОПОРЫ</h1>
        <div class="cover-subtitle">Пошаговая система выхода из ПППГ, невроза, шаткости и тревожных расстройств</div>
        <div class="cover-meta">
            <div class="cover-author">Автор: Максим</div>
            <div>30 глав &nbsp;|&nbsp; 5 модулей &nbsp;|&nbsp; Доказательный подход</div>
            <div style="margin-top:8px;font-size:9pt;color:#9ca3af;">Издание 2026 года</div>
        </div>
    </div>

    <!-- TOC -->
    <div class="toc-page">
        <div class="toc-heading">Оглавление книги</div>
        ${tocListHTML}
    </div>

    <!-- Content -->
    ${chaptersHTML}
</body>
</html>`;

    fs.writeFileSync(OUTPUT_HTML, fullBookHTML, 'utf8');
    console.log(`✅ Compiled full book HTML: ${OUTPUT_HTML}`);

    // Convert HTML to PDF using MS Edge Headless
    const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
    if (!fs.existsSync(edgePath)) {
        throw new Error(`Edge executable not found at ${edgePath}`);
    }

    console.log('⏳ Rendering PDF via MS Edge...');
    const cmd = `"${edgePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${OUTPUT_PDF}" "file:///${OUTPUT_HTML.replace(/\\/g, '/')}"`;
    execSync(cmd);



    const pdfStats = fs.statSync(OUTPUT_PDF);
    console.log(`🎉 Full Book PDF successfully created!`);
    console.log(`   Path: ${OUTPUT_PDF}`);
    console.log(`   Size: ${(pdfStats.size / (1024 * 1024)).toFixed(2)} MB (${pdfStats.size} bytes)`);

    // Clean up temporary HTML export
    if (fs.existsSync(OUTPUT_HTML)) {
        fs.unlinkSync(OUTPUT_HTML);
    }
}

buildFullPDF().catch(err => {
    console.error('❌ Error building PDF:', err);
    process.exit(1);
});
