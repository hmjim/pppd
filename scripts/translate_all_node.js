const fs = require('fs');
const path = require('path');
const { translate } = require('google-translate-api-x');

function postProcessEn(text) {
    return text
        .replace(/\bPPPG\b/g, 'PPPD')
        .replace(/\bpppg\b/g, 'pppd')
        .replace(/\bDPPG\b/g, 'BPPV')
        .replace(/\bdppg\b/g, 'bppv')
        .replace(/\bDPDG\b/g, 'EMDR')
        .replace(/\bdpdg\b/g, 'emdr')
        .replace(/\bPoint of support\b/g, 'Point of Support')
        .replace(/\bpoint of support\b/g, 'Point of Support')
        .replace(/\bFulcrum\b/g, 'Point of Support')
        .replace(/\bVSD\b/g, 'VAD (autonomic dysfunction)');
}

async function translateChunk(text, retries = 5) {
    if (!text.trim()) return text;
    for (let i = 0; i < retries; i++) {
        try {
            const res = await translate(text, { from: 'ru', to: 'en', forceBatch: false });
            return res.text;
        } catch (e) {
            await new Promise(r => setTimeout(r, 1000 * (i + 1)));
        }
    }
    throw new Error(`Failed to translate chunk after ${retries} attempts: ${text.slice(0, 50)}...`);
}

async function translateFile(srcPath, dstPath) {
    const content = fs.readFileSync(srcPath, 'utf8');
    const blocks = content.split('\n\n');
    const translatedBlocks = [];

    let currentChunk = [];
    let currentLen = 0;

    for (const block of blocks) {
        if (block.trim().startsWith('```') || block.trim() === '---') {
            if (currentChunk.length > 0) {
                const tr = await translateChunk(currentChunk.join('\n\n'));
                translatedBlocks.push(tr);
                currentChunk = [];
                currentLen = 0;
            }
            if (block.trim() === '---') {
                translatedBlocks.push('---');
            } else {
                translatedBlocks.push(block);
            }
            continue;
        }

        if (currentLen + block.length > 2500) {
            const tr = await translateChunk(currentChunk.join('\n\n'));
            translatedBlocks.push(tr);
            currentChunk = [block];
            currentLen = block.length;
        } else {
            currentChunk.push(block);
            currentLen += block.length;
        }
    }

    if (currentChunk.length > 0) {
        const tr = await translateChunk(currentChunk.join('\n\n'));
        translatedBlocks.push(tr);
    }

    let fullEn = translatedBlocks.join('\n\n');
    fullEn = postProcessEn(fullEn);

    fs.writeFileSync(dstPath, fullEn, 'utf8');
    return { srcLen: content.length, dstLen: fullEn.length };
}

async function main() {
    const srcDir = path.join(__dirname, '..', 'chapters_src');
    const dstDir = path.join(__dirname, '..', 'chapters_en');
    if (!fs.existsSync(dstDir)) fs.mkdirSync(dstDir, { recursive: true });

    const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.md')).sort();
    console.log(`Starting 1:1 verbatim translation for ${files.length} chapters...`);

    const startTime = Date.now();
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const srcPath = path.join(srcDir, file);
        const dstPath = path.join(dstDir, file);

        const { srcLen, dstLen } = await translateFile(srcPath, dstPath);
        const ratio = (dstLen / srcLen).toFixed(2);
        console.log(`[${String(i + 1).padStart(2, '0')}/${files.length}] ✓ ${file} (RU: ${srcLen} -> EN: ${dstLen}, ratio: ${ratio})`);
        await new Promise(r => setTimeout(r, 200));
    }

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\n🎉 Successfully translated all ${files.length} chapters in ${elapsed}s!`);
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
