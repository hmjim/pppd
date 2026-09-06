const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function buildMetodichkaPDF() {
    console.log('🚀 Compiling Metodichka PDF...');
    const { marked } = await import('marked');

    const INPUT_MD = path.join(__dirname, 'docs', 'metodichka-pppg.md');
    const TEMP_HTML = path.join(__dirname, 'metodichka_export.html');
    const OUTPUT_PDF = path.join(__dirname, 'docs', 'metodichka-pppg.pdf');

    if (!fs.existsSync(INPUT_MD)) {
        throw new Error(`Input markdown not found: ${INPUT_MD}`);
    }

    const mdContent = fs.readFileSync(INPUT_MD, 'utf8');
    const htmlBody = marked.parse(mdContent);

    const fullHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Клинический протокол: Вестибулярная гимнастика и оценка по шкале DHI при ПППГ</title>
    <style>
        @page {
            size: A4;
            margin: 20mm 15mm 20mm 15mm;
            @bottom-right {
                content: counter(page);
            }
        }

        *, *::before, *::after {
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-size: 10.5pt;
            line-height: 1.6;
            color: #1e293b;
            background: #ffffff;
            margin: 0;
            padding: 0;
        }

        h1 {
            font-size: 20pt;
            font-weight: 800;
            color: #0f172a;
            border-bottom: 3px solid #3b82f6;
            padding-bottom: 12px;
            margin-top: 0;
            margin-bottom: 16px;
            page-break-after: avoid;
        }

        h2 {
            font-size: 14pt;
            font-weight: 700;
            color: #1e3a8a;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 6px;
            margin-top: 26px;
            margin-bottom: 12px;
            page-break-after: avoid;
        }

        h3 {
            font-size: 12pt;
            font-weight: 600;
            color: #1e40af;
            margin-top: 18px;
            margin-bottom: 8px;
            page-break-after: avoid;
        }

        p, li {
            font-size: 10.5pt;
            color: #334155;
            margin-top: 0;
            margin-bottom: 8px;
        }

        ul, ol {
            padding-left: 22px;
            margin-bottom: 14px;
        }

        li {
            margin-bottom: 4px;
        }

        strong {
            color: #0f172a;
        }

        hr {
            border: none;
            border-top: 1px solid #cbd5e1;
            margin: 20px 0;
        }

        blockquote {
            border-left: 4px solid #3b82f6;
            background: #eff6ff;
            margin: 16px 0;
            padding: 10px 16px;
            border-radius: 0 8px 8px 0;
            color: #1e40af;
            font-size: 10pt;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 16px 0 20px 0;
            font-size: 9.5pt;
            page-break-inside: auto;
        }

        tr {
            page-break-inside: avoid;
            page-break-after: auto;
        }

        th, td {
            border: 1px solid #cbd5e1;
            padding: 7px 10px;
            text-align: left;
            vertical-align: top;
        }

        th {
            background-color: #f1f5f9;
            color: #0f172a;
            font-weight: 700;
        }

        tr:nth-child(even) td {
            background-color: #f8fafc;
        }

        code {
            font-family: Consolas, "Courier New", monospace;
            background: #f1f5f9;
            padding: 2px 4px;
            border-radius: 4px;
            font-size: 9pt;
        }

        .header-box {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border: 1px solid #bae6fd;
            border-radius: 8px;
            padding: 14px 18px;
            margin-bottom: 24px;
        }

        a {
            color: #2563eb;
            text-decoration: none;
        }
    </style>
</head>
<body>
    ${htmlBody}
</body>
</html>`;

    fs.writeFileSync(TEMP_HTML, fullHTML, 'utf8');
    console.log(`✅ Temporary HTML written to ${TEMP_HTML}`);

    const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
    if (!fs.existsSync(edgePath)) {
        throw new Error(`Edge executable not found at ${edgePath}`);
    }

    console.log('⏳ Rendering PDF via MS Edge...');
    const cmd = `"${edgePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${OUTPUT_PDF}" "file:///${TEMP_HTML.replace(/\\/g, '/')}"`;
    execSync(cmd);

    const stats = fs.statSync(OUTPUT_PDF);
    console.log(`🎉 PDF generated successfully!`);
    console.log(`   Path: ${OUTPUT_PDF}`);
    console.log(`   Size: ${(stats.size / 1024).toFixed(1)} KB`);

    if (fs.existsSync(TEMP_HTML)) {
        fs.unlinkSync(TEMP_HTML);
    }
}

buildMetodichkaPDF().catch(err => {
    console.error('❌ Build failed:', err);
    process.exit(1);
});
