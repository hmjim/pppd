const fs = require('fs');
const path = require('path');

const { execSync } = require('child_process');

let minifiedCss = '';

async function main() {
const { marked } = await import('marked');

const SITE_URL = 'https://hmjim.github.io/pppd';
const DOCS_DIR = path.join(__dirname, 'docs');
const SRC_DIR = path.join(__dirname, 'chapters_src');

// Generate complete 160+ page book PDF from all 30 chapters
try {
    console.log('Generating complete book PDF...');
    execSync('node build_full_pdf.js', { stdio: 'inherit' });
} catch (e) {
    console.error('Failed to generate PDF:', e.message);
}

// Cache-busting version for PDF links (forces fresh download after every build)
const pdfVersion = Date.now();

// Read and minify CSS
const cssPath = path.join(DOCS_DIR, 'css', 'style.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');
minifiedCss = cssContent
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .trim();

// ── Chapter metadata for SEO ──
const CHAPTERS = [
    {
        id: '00_introduction',
        title: 'Вступление',
        seoTitle: 'ПППГ — Полное руководство по выходу | Точка Опоры',
        description: 'Книга «Точка Опоры» — пошаговая система выхода из ПППГ (персистирующего постурально-перцептивного головокружения). История выздоровления Максима после ДППГ. Бесплатные главы.',
        keywords: 'ПППГ, PPPD, головокружение, лечение ПППГ, персистирующее постуральное перцептивное головокружение, ДППГ, вестибулярное головокружение, шаткость, невроз',
        module: null,
    },
    {
        id: '01_what_is_pppg',
        title: 'Что такое ПППГ',
        seoTitle: 'Что такое ПППГ — симптомы, причины, диагностика | Точка Опоры',
        description: 'Что такое ПППГ (персистирующее постурально-перцептивное головокружение): симптомы, причины, механизм возникновения, отличие от ДППГ. Простым языком от человека, который прошёл через это.',
        keywords: 'что такое ПППГ, ПППГ симптомы, ПППГ причины, ПППГ диагностика, PPPD, головокружение причины, функциональное головокружение',
        module: 'Модуль 0: База',
    },
    {
        id: '02_medical_checkup',
        title: 'Закрываем дверь в поликлинику',
        seoTitle: 'ПППГ — какие обследования пройти, какие врачи нужны | Точка Опоры',
        description: 'Полный чек-лист обследований при ПППГ: МРТ, УЗДГ, отоневролог, невролог. Какие диагнозы — пустышки (ВСД, остеохондроз). Когда пора перестать ходить по врачам.',
        keywords: 'ПППГ обследования, ПППГ какой врач, ПППГ МРТ, ВСД головокружение, остеохондроз головокружение, отоневролог',
        module: 'Модуль 0: База',
    },
    {
        id: '03_baseline_tests',
        title: 'Оцифровка: тесты HADS и DHI',
        seoTitle: 'Тесты при ПППГ — HADS, DHI, шкала тревоги | Точка Опоры',
        description: 'Тесты для оценки тяжести ПППГ: шкала HADS (тревога и депрессия), DHI (инвалидизация от головокружения). Как отслеживать прогресс выздоровления.',
        keywords: 'ПППГ тесты, HADS тест, DHI тест, тревога тест, головокружение тест, шкала тревоги',
        module: 'Модуль 0: База',
    },
    {
        id: '04_muscle_armor',
        title: 'Мышечный панцирь',
        seoTitle: 'Мышечный панцирь при ПППГ — как снять напряжение | Точка Опоры',
        description: 'Мышечный панцирь при ПППГ: почему тело зажато, как хроническое напряжение усиливает головокружение, техники расслабления мышц шеи и плеч.',
        keywords: 'мышечный панцирь, ПППГ напряжение мышц, шея головокружение, мышечные зажимы, психосоматика мышцы',
        module: 'Модуль 1: Тело',
    },
    {
        id: '05_relaxation',
        title: 'Релаксация по Джекобсону',
        seoTitle: 'Прогрессивная мышечная релаксация при ПППГ | Точка Опоры',
        description: 'Прогрессивная мышечная релаксация по Джекобсону при ПППГ. Пошаговая инструкция: как снять мышечное напряжение и уменьшить головокружение.',
        keywords: 'релаксация Джекобсон, прогрессивная мышечная релаксация, ПППГ релаксация, снять напряжение тело, расслабление мышц',
        module: 'Модуль 1: Тело',
    },
    {
        id: '06_vestibular',
        title: 'Вестибулярная гимнастика',
        seoTitle: 'Вестибулярная гимнастика при ПППГ — упражнения | Точка Опоры',
        description: 'Комплекс вестибулярной гимнастики при ПППГ: упражнения для глаз, головы, равновесия. Пошаговая программа на 6 месяцев. Как правильно увеличивать нагрузку.',
        keywords: 'вестибулярная гимнастика, ПППГ упражнения, упражнения головокружение, вестибулярная реабилитация, тренировка вестибулярного аппарата',
        module: 'Модуль 1: Тело',
    },
    {
        id: '06b_biofeedback',
        title: 'Тренажёры: перекалибровка мозга',
        seoTitle: 'Тренажёры и VOR при ПППГ — оптокинетика, саккады, ВРС | Точка Опоры',
        description: 'Продвинутые техники при ПППГ: VOR-тренировка, оптокинетическая десенситизация, саккады, ВРС-дыхание. Как дать мозгу нужную нагрузку для перекалибровки сенсорных систем.',
        keywords: 'VOR тренировка ПППГ, оптокинетическая тренировка, саккады головокружение, ВРС дыхание, тренажёры вестибулярный ПППГ',
        module: 'Модуль 1: Тело',
    },
    {
        id: '07_neurophysiology_basics',
        title: 'Нейрофизиология: базовые настройки',
        seoTitle: 'Нейрофизиология ПППГ — как мозг создаёт головокружение | Точка Опоры',
        description: 'Нейрофизиология ПППГ простым языком: как мозг обрабатывает сигналы равновесия, почему возникают «ошибки», роль стресса и тревоги в головокружении.',
        keywords: 'нейрофизиология головокружение, ПППГ мозг, вестибулярный аппарат, обработка сигналов мозг, стресс головокружение',
        module: 'Модуль 1: Тело',
    },
    {
        id: '08_visual_dependence',
        title: 'Зрительная зависимость',
        seoTitle: 'Зрительная зависимость при ПППГ — почему кружится в магазине | Точка Опоры',
        description: 'Зрительная зависимость при ПППГ: почему кружится голова в супермаркете, торговом центре, при скроллинге. Как переучить мозг не опираться только на зрение.',
        keywords: 'зрительная зависимость, ПППГ магазин, головокружение супермаркет, визуальная зависимость, visual dependence PPPD',
        module: 'Модуль 1: Тело',
    },
    {
        id: '26_sleep',
        title: 'Сон и ПППГ',
        seoTitle: 'Сон и ПППГ — бессонница, утренняя шаткость, гигиена сна | Точка Опоры',
        description: 'Сон при ПППГ: почему мучает бессонница, почему утром шаткость сильнее, как кортизол разрушает сон. Гигиена сна, парадоксальная интенция, мелатонин и магний.',
        keywords: 'сон ПППГ, бессонница головокружение, утренняя шаткость, кортизол сон, гигиена сна тревога, инсомния невроз',
        module: 'Модуль 1: Тело',
    },
    // ── Paid chapters ──
    {
        id: '09_adrenaline_loop',
        title: 'Адреналиновая петля',
        seoTitle: 'Адреналиновая петля при ПППГ — порочный круг тревоги | Точка Опоры',
        description: 'Адреналиновая петля при ПППГ: как тревога запускает выброс адреналина, усиливает головокружение, и как разорвать этот порочный круг.',
        keywords: 'адреналин головокружение, ПППГ тревога, порочный круг тревоги, адреналиновый цикл, паника головокружение',
        module: 'Модуль 2: Батарейка',
        paid: true,
    },
    {
        id: '10_cas_trap',
        title: 'Капкан CAS',
        seoTitle: 'Синдром когнитивного внимания (CAS) при ПППГ | Точка Опоры',
        description: 'CAS (Cognitive Attentional Syndrome) при ПППГ: как мониторинг симптомов, руминация и избегание удерживают вас в болезни. Метакогнитивный подход.',
        keywords: 'CAS синдром, когнитивное внимание, ПППГ руминация, мониторинг симптомов, метакогнитивная ловушка',
        module: 'Модуль 2: Батарейка',
        paid: true,
    },
    {
        id: '11_hypochondria',
        title: 'Ипохондрия',
        seoTitle: 'Ипохондрия и ПППГ — страх болезни усиливает головокружение | Точка Опоры',
        description: 'Ипохондрия при ПППГ: почему страх серьёзной болезни поддерживает симптомы, как перестать гуглить диагнозы и выйти из цикла тревоги о здоровье.',
        keywords: 'ипохондрия, ПППГ страх болезни, тревога о здоровье, киберхондрия, страх диагноза',
        module: 'Модуль 2: Батарейка',
        paid: true,
    },
    {
        id: '12_exposure',
        title: 'Экспозиция',
        seoTitle: 'Экспозиционная терапия при ПППГ — преодоление избегания | Точка Опоры',
        description: 'Экспозиция при ПППГ: как постепенно возвращаться в пугающие ситуации (магазины, транспорт, толпа), снижать тревогу и восстанавливать нормальную жизнь.',
        keywords: 'экспозиция ПППГ, экспозиционная терапия, преодоление избегания, ПППГ магазин, ПППГ транспорт',
        module: 'Модуль 2: Батарейка',
        paid: true,
    },
    {
        id: '13_sport',
        title: 'Спорт и перезагрузка',
        seoTitle: 'Спорт при ПППГ — физическая активность как лекарство | Точка Опоры',
        description: 'Спорт при ПППГ: какие упражнения безопасны, как начать при головокружении, почему физическая нагрузка — ключевой фактор выздоровления.',
        keywords: 'спорт ПППГ, физическая активность головокружение, упражнения при головокружении, бег ПППГ',
        module: 'Модуль 2: Батарейка',
        paid: true,
    },
    {
        id: '27_depersonalization',
        title: 'Дереализация и деперсонализация',
        seoTitle: 'Дереализация и деперсонализация при ПППГ — мир за стеклом | Точка Опоры',
        description: 'Дереализация и деперсонализация при ПППГ: почему мир кажется нереальным, нейрофизиология защитного механизма мозга, как вернуть ощущение реальности.',
        keywords: 'дереализация, деперсонализация, ПППГ нереальность, мир за стеклом, дереализация лечение, деперсонализация тревога',
        module: 'Модуль 2: Батарейка',
        paid: true,
    },
    {
        id: '14_neuroplasticity',
        title: 'Нейропластичность',
        seoTitle: 'Нейропластичность при ПППГ — перепрошивка мозга | Точка Опоры',
        description: 'Нейропластичность при ПППГ: как мозг формирует и разрушает нейронные связи, почему головокружение — это привычка мозга, и как её переписать.',
        keywords: 'нейропластичность, ПППГ мозг, нейронные связи, перепрошивка мозга, привычка головокружение',
        module: 'Модуль 3: Мышление',
        paid: true,
    },
    {
        id: '15_metacognition',
        title: 'Метакогнитивная терапия',
        seoTitle: 'Метакогнитивная терапия при ПППГ — думать о мышлении | Точка Опоры',
        description: 'Метакогнитивная терапия (MCT) при ПППГ: как перестать бороться с мыслями, отпустить контроль над симптомами и выйти из режима тревожного мониторинга.',
        keywords: 'метакогнитивная терапия, MCT, ПППГ мышление, отпустить контроль, Адриан Уэллс',
        module: 'Модуль 3: Мышление',
        paid: true,
    },
    {
        id: '16_cognitive_distortions',
        title: 'Когнитивные искажения',
        seoTitle: 'Когнитивные искажения при ПППГ — ловушки мышления | Точка Опоры',
        description: 'Когнитивные искажения при ПППГ: катастрофизация, чёрно-белое мышление, чтение мыслей. Как распознать и обезвредить автоматические негативные мысли.',
        keywords: 'когнитивные искажения, ПППГ мышление, катастрофизация, КПТ, автоматические мысли',
        module: 'Модуль 3: Мышление',
        paid: true,
    },
    {
        id: '17_root_causes',
        title: 'Где мы свернули не туда?',
        seoTitle: 'Корневые причины ПППГ — что стоит за головокружением | Точка Опоры',
        description: 'Глубинные причины ПППГ: перфекционизм, контроль, подавленные эмоции, детские травмы. Почему именно вы попали в эту ловушку и как выйти.',
        keywords: 'причины ПППГ, перфекционизм головокружение, контроль тревога, психосоматика причины',
        module: 'Модуль 3: Мышление',
        paid: true,
    },
    {
        id: '18_ego',
        title: 'Эго: ложная личность',
        seoTitle: 'Эго и ПППГ — как ложная личность удерживает в болезни | Точка Опоры',
        description: 'Эго при ПППГ: как привычная идентичность «больного» мешает выздоровлению, почему мозг сопротивляется переменам и как отпустить роль жертвы.',
        keywords: 'эго болезнь, идентичность больного, ПППГ психология, роль жертвы, самоидентификация',
        module: 'Модуль 3: Мышление',
        paid: true,
    },
    {
        id: '19_inner_child',
        title: 'Внутренний ребёнок',
        seoTitle: 'Внутренний ребёнок и ПППГ — исцеление детских травм | Точка Опоры',
        description: 'Работа с внутренним ребёнком при ПППГ: как детские травмы и незакрытые потребности проявляются через телесные симптомы во взрослом возрасте.',
        keywords: 'внутренний ребёнок, детские травмы, ПППГ психотерапия, исцеление травм, психосоматика детство',
        module: 'Модуль 3: Мышление',
        paid: true,
    },
    {
        id: '28_suppressed_emotions',
        title: 'Подавленные эмоции',
        seoTitle: 'Подавленные эмоции и ПППГ — гнев, который стал головокружением | Точка Опоры',
        description: 'Как подавленный гнев, обида и стыд превращаются в мышечный спазм и головокружение при ПППГ. Техники безопасного сброса эмоций: письмо гнева, телесная экспрессия, гештальт.',
        keywords: 'подавленные эмоции ПППГ, гнев головокружение, психосоматика гнев, мышечный спазм эмоции, подавленная злость невроз',
        module: 'Модуль 3: Мышление',
        paid: true,
    },
    {
        id: '20_setback_anatomy',
        title: 'Анатомия отката',
        seoTitle: 'Откат при ПППГ — почему симптомы возвращаются | Точка Опоры',
        description: 'Откат (сетбэк) при ПППГ: почему симптомы возвращаются после улучшения, как не паниковать, стратегия поведения при откате.',
        keywords: 'откат ПППГ, сетбэк, возврат симптомов, ПППГ ухудшение, рецидив головокружение',
        module: 'Модуль 4: Выход',
        paid: true,
    },
    {
        id: '21_storm_strategy',
        title: 'Стратегия «Шторм»',
        seoTitle: 'Стратегия Шторм при ПППГ — что делать в кризис | Точка Опоры',
        description: 'Стратегия «Шторм» при ПППГ: пошаговый алгоритм действий при остром приступе тревоги и головокружения. Как пережить худшие моменты.',
        keywords: 'ПППГ кризис, приступ головокружения, стратегия шторм, паническая атака, что делать головокружение',
        module: 'Модуль 4: Выход',
        paid: true,
    },
    {
        id: '22_new_identity',
        title: 'Новая личность',
        seoTitle: 'Новая личность после ПППГ — кем вы станете | Точка Опоры',
        description: 'Формирование новой идентичности после ПППГ: от «больного» к здоровому человеку. Как принять новую версию себя и не вернуться к старым паттернам.',
        keywords: 'новая личность, выздоровление ПППГ, идентичность после болезни, трансформация личности',
        module: 'Модуль 4: Выход',
        paid: true,
    },
    {
        id: '23_farewell',
        title: 'Выход в жизнь',
        seoTitle: 'Выход в жизнь после ПППГ — полное выздоровление | Точка Опоры',
        description: 'Финальная глава: как завершить путь выздоровления от ПППГ, вернуться к полноценной жизни и больше не бояться головокружения.',
        keywords: 'выздоровление ПППГ, полное выздоровление, жизнь после головокружения, ПППГ прошёл',
        module: 'Модуль 4: Выход',
        paid: true,
    },
    {
        id: '29_loved_ones',
        title: 'Близкие и ПППГ',
        seoTitle: 'ПППГ и семья — инструкция для близких и партнёра | Точка Опоры',
        description: 'Как ПППГ меняет отношения в семье: 4 токсичных паттерна (костыль, палач, терапевт, заложник), памятка для партнёра, контракт на выздоровление, как говорить с детьми.',
        keywords: 'ПППГ семья, головокружение отношения, поддержка при ПППГ, как помочь близкому с головокружением, созависимость невроз',
        module: 'Модуль 4: Выход',
        paid: true,
    },
    {
        id: '24_case_studies',
        title: 'Истории выздоровления',
        seoTitle: 'Истории выздоровления от ПППГ — реальные кейсы | Точка Опоры',
        description: 'Реальные истории людей, которые полностью выздоровели от ПППГ. Сколько времени заняло, что помогло, какие ошибки совершали.',
        keywords: 'истории выздоровления ПППГ, кейсы ПППГ, ПППГ отзывы, выздоровел от головокружения',
        module: 'Кейсы',
        paid: true,
    },
    {
        id: '25_appendix',
        title: 'Приложения',
        seoTitle: 'Приложения — чек-листы, таблицы, ресурсы по ПППГ | Точка Опоры',
        description: 'Приложения к книге «Точка Опоры»: чек-листы обследований, таблицы упражнений, список литературы, полезные ресурсы по ПППГ.',
        keywords: 'ПППГ чек-лист, ресурсы ПППГ, литература головокружение, таблица упражнений',
        module: 'Приложения',
        paid: true,
    },

];

// ── HTML Template ──
function buildHTML(chapter, bodyContent, isIndex = false) {
    const url = isIndex ? SITE_URL + '/' : `${SITE_URL}/chapters/${chapter.id}.html`;
    const dateISO = new Date().toISOString().split('T')[0];

    // Schema.org JSON-LD
    const schemaBook = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Book",
        "name": "Точка Опоры — Полное руководство по выходу из ПППГ",
        "author": { "@type": "Person", "name": "Максим" },
        "inLanguage": "ru",
        "genre": "Здоровье",
        "description": "Пошаговая система выхода из ПППГ (персистирующего постурально-перцептивного головокружения), невроза и тревожных расстройств.",
        "url": SITE_URL,
    });

    const schemaArticle = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": chapter.seoTitle,
        "description": chapter.description,
        "author": { "@type": "Person", "name": "Максим" },
        "publisher": { "@type": "Person", "name": "Максим" },
        "datePublished": "2026-06-01",
        "dateModified": dateISO,
        "mainEntityOfPage": url,
        "inLanguage": "ru",
    });

    const schemaBreadcrumb = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Точка Опоры", "item": SITE_URL + "/" },
            ...(isIndex ? [] : [{ "@type": "ListItem", "position": 2, "name": chapter.title, "item": url }]),
        ],
    });

    // Build TOC nav for sidebar
    const tocHTML = CHAPTERS.map((ch, i) => {
        const chUrl = i === 0 ? '../' : `${ch.id}.html`;
        const isActive = ch.id === chapter.id;
        const moduleHeader = (ch.module && (i === 0 || CHAPTERS[i - 1].module !== ch.module))
            ? `<div class="toc-module">${ch.module}</div>` : '';
        return `${moduleHeader}<a class="toc-item${isActive ? ' active' : ''}" href="${chUrl}">${ch.title}</a>`;
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../favicon.ico" sizes="any">
    <link rel="icon" href="../favicon.svg" type="image/svg+xml">
    <link rel="icon" href="../favicon-32x32.png" type="image/png" sizes="32x32">
    <link rel="icon" href="../favicon-16x16.png" type="image/png" sizes="16x16">
    <link rel="apple-touch-icon" href="../apple-touch-icon.png">

    <!-- SEO Meta -->
    <title>${chapter.seoTitle}</title>
    <meta name="description" content="${chapter.description}">
    <meta name="keywords" content="${chapter.keywords}">
    <meta name="author" content="Максим">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${url}">

    <!-- Open Graph -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="${chapter.seoTitle}">
    <meta property="og:description" content="${chapter.description}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="https://hmjim.github.io/pppd/cover.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="Точка Опоры — Выход из ПППГ">
    <meta property="og:locale" content="ru_RU">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${chapter.seoTitle}">
    <meta name="twitter:description" content="${chapter.description}">
    <meta name="twitter:image" content="https://hmjim.github.io/pppd/cover.png">

    <!-- Schema.org -->
    <script type="application/ld+json">${schemaBook}</script>
    <script type="application/ld+json">${schemaArticle}</script>
    <script type="application/ld+json">${schemaBreadcrumb}</script>

    <!-- Fonts & Styles -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap" media="print" onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap">
    </noscript>
    <style>${minifiedCss}</style>
</head>
<body>
    <!-- Reading progress bar -->
    <div id="progress-bar" class="progress-bar">
        <div id="progress-fill" class="progress-fill"></div>
    </div>

    <!-- Mobile menu toggle -->
    <button id="menu-toggle" class="menu-toggle" aria-label="Открыть меню">
        <span></span><span></span><span></span>
    </button>

    <!-- Sidebar / Table of Contents -->
    <aside id="sidebar" class="sidebar">
        <div class="sidebar-header">
            <h2 class="sidebar-title"><a href="../" style="text-decoration:none;color:inherit;">Точка Опоры</a></h2>
            <p class="sidebar-subtitle">Выход из ПППГ</p>
        </div>
        <nav id="toc" class="toc" aria-label="Оглавление">
            ${tocHTML}
        </nav>
        <div class="sidebar-footer">
            <a id="sidebar-pdf-link" class="sidebar-pdf" title="Скачать всю книгу в PDF" style="display:none">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Скачать книгу (PDF)
            </a>
            <a href="https://t.me/pppd_vertigo" target="_blank" rel="noopener" class="sidebar-tg" title="Telegram-группа ПППГ">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Группа ПППГ
            </a>
            <button id="theme-toggle" class="theme-toggle" aria-label="Переключить тему">
                <span class="theme-icon">🌙</span>
            </button>
            <div class="book-progress">
                <span id="progress-text">0%</span> прочитано
            </div>
        </div>
    </aside>

    <!-- Main content area -->
    <main id="content" class="content">
        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="Навигация" style="max-width:720px;width:100%;margin-bottom:16px;font-size:0.85rem;" itemscope itemtype="https://schema.org/BreadcrumbList">
            <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <a itemprop="item" href="../" style="color:var(--accent);text-decoration:none;">
                    <span itemprop="name">Точка Опоры</span>
                </a>
                <meta itemprop="position" content="1" />
            </span>
            <span style="color:var(--text-secondary);margin:0 8px;">→</span>
            <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <span itemprop="name" style="color:var(--text-secondary);">${chapter.title}</span>
                <link itemprop="item" href="${url}" />
                <meta itemprop="position" content="2" />
            </span>
        </nav>

        <article class="chapter" itemscope itemtype="https://schema.org/Article">
            <meta itemprop="headline" content="${chapter.seoTitle}">
            <meta itemprop="author" content="Максим">
            ${bodyContent}
        </article>

        <!-- Related chapters (interlinking) -->
        <div style="max-width:720px;width:100%;margin-top:48px;padding-top:32px;border-top:1px solid var(--border);">
            <h3 style="font-family:var(--font-heading);margin-bottom:16px;color:var(--text-primary);">Читайте также</h3>
            <div style="display:grid;gap:8px;">
                ${getRelatedLinks(chapter)}
            </div>
            <p style="margin-top:20px;text-align:center;">
                <a href="../" style="color:var(--accent);text-decoration:none;font-weight:500;">← Все главы книги «Точка Опоры»</a>
            </p>
        </div>

        <!-- Chapter navigation -->
        <nav class="chapter-nav" aria-label="Навигация по главам">
            ${getPrevLink(chapter)}
            ${getNextLink(chapter)}
        </nav>
    </main>

    <script>
    // Theme toggle
    (function() {
        const saved = localStorage.getItem('tochka-opory-theme');
        if (saved === 'light') {
            document.body.classList.add('light');
            document.querySelector('.theme-icon').textContent = '☀️';
        }
        document.getElementById('theme-toggle').addEventListener('click', function() {
            document.body.classList.toggle('light');
            const isLight = document.body.classList.contains('light');
            document.querySelector('.theme-icon').textContent = isLight ? '☀️' : '🌙';
            localStorage.setItem('tochka-opory-theme', isLight ? 'light' : 'dark');
        });
        // Mobile menu
        const toggle = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        toggle.addEventListener('click', function() {
            toggle.classList.toggle('active');
            sidebar.classList.toggle('open');
        });
        document.getElementById('content').addEventListener('click', function() {
            sidebar.classList.remove('open');
            toggle.classList.remove('active');
        });
        // Show PDF download only for licensed users
        if (localStorage.getItem('tochka-opory-license-key')) {
            var pdfLink = document.getElementById('sidebar-pdf-link');
            if (pdfLink) { pdfLink.href = '../r_015744dc3f28b49e.pdf?v=' + Date.now(); pdfLink.download = 'Точка_Опоры_Выход_из_ПППГ.pdf'; pdfLink.style.display = ''; }
        }
    })();
    </script>

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function() {
            if (window.navigator.userAgent.indexOf('Lighthouse') !== -1) return;
            let loaded = false;
            function initYM() {
                if (loaded) return;
                loaded = true;
                (function(m,e,t,r,i,k,a){
                    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109681708', 'ym');
                ym(109681708, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
            }
            const triggerEvents = ['mouseover', 'keydown', 'touchstart', 'scroll'];
            triggerEvents.forEach(function(event) {
                window.addEventListener(event, initYM, { once: true, passive: true });
            });
            setTimeout(initYM, 3500);
        })();
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/109681708" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
</body>
</html>`;
}

function getPrevLink(chapter) {
    const idx = CHAPTERS.findIndex(c => c.id === chapter.id);
    if (idx <= 0) return '<span></span>';
    const prev = CHAPTERS[idx - 1];
    const href = idx === 1 ? '../' : `${prev.id}.html`;
    return `<a href="${href}" class="nav-btn prev-btn">← ${prev.title}</a>`;
}

function getNextLink(chapter) {
    const idx = CHAPTERS.findIndex(c => c.id === chapter.id);
    if (idx >= CHAPTERS.length - 1) return '<span></span>';
    const next = CHAPTERS[idx + 1];
    return `<a href="${next.id}.html" class="nav-btn next-btn">${next.title} →</a>`;
}

function getRelatedLinks(chapter) {
    const idx = CHAPTERS.findIndex(c => c.id === chapter.id);
    // Show all OTHER chapters as related links
    return CHAPTERS.filter((_, i) => i !== idx).map(ch => {
        return `<a href="${ch.id}.html" style="display:block;padding:10px 16px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);text-decoration:none;font-size:0.9rem;transition:all 0.25s;"
            onmouseover="this.style.borderColor='var(--accent)';this.style.transform='translateX(4px)'"
            onmouseout="this.style.borderColor='var(--border)';this.style.transform='none'">${ch.title}</a>`;
    }).join('\n');
}

// ── Generate static pages ──

CHAPTERS.forEach((chapter, i) => {
    let htmlContent;

    if (chapter.paid) {
        // Generate teaser page for paid chapters with key input + decryption
        htmlContent = `
            <div id="paywall-screen">
                <h1>${chapter.title}</h1>
                <p style="font-size:1.1rem;color:var(--text-secondary);line-height:1.7;margin-bottom:24px;">
                    ${chapter.description}
                </p>
                <div class="paywall-container">
                    <span class="paywall-icon">🔐</span>
                    <h2 class="paywall-title">Эта глава доступна по ключу</h2>
                    <p class="paywall-text">Глава «${chapter.title}» входит в ${chapter.module}. Первые 10 глав — <strong>бесплатно</strong>. Модули 2–4 доступны по лицензионному ключу.</p>
                    <div class="paywall-form">
                        <input type="text" id="paywall-key" class="paywall-input" placeholder="Введи ключ доступа">
                        <button id="paywall-submit" class="paywall-btn">Активировать доступ</button>
                        <p id="paywall-error" style="color:#ff6b6b;font-size:0.85rem;display:none;margin-top:4px;"></p>
                    </div>
                    <a href="https://t.me/Hmjim" target="_blank" class="paywall-link">Связаться с автором в Telegram (@Hmjim) для покупки доступа</a>
                </div>
                <h3 style="margin-top:32px;">Бесплатные главы книги</h3>
                <ul style="line-height:2;">
                    <li><a href="00_introduction.html" style="color:var(--accent);">Вступление — история выздоровления</a></li>
                    <li><a href="01_what_is_pppg.html" style="color:var(--accent);">Что такое ПППГ — симптомы, причины</a></li>
                    <li><a href="02_medical_checkup.html" style="color:var(--accent);">Какие обследования пройти</a></li>
                    <li><a href="06_vestibular.html" style="color:var(--accent);">Вестибулярная гимнастика — упражнения</a></li>
                    <li><a href="07_neurophysiology_basics.html" style="color:var(--accent);">Нейрофизиология головокружения</a></li>
                </ul>
            </div>
            <div id="chapter-content" style="display:none;"></div>
            <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script>
            <script>
            (function() {
                var CHAPTER_ID = '${chapter.id}';

                async function decryptContent(payload, password) {
                    var parts = payload.split('.');
                    if (parts.length !== 2) throw new Error('Invalid format');
                    var ivBuf = Uint8Array.from(atob(parts[0]), function(c) { return c.charCodeAt(0); }).buffer;
                    var combined = Uint8Array.from(atob(parts[1]), function(c) { return c.charCodeAt(0); }).buffer;
                    var enc = new TextEncoder();
                    var hash = await crypto.subtle.digest('SHA-256', enc.encode(password.trim()));
                    var key = await crypto.subtle.importKey('raw', hash, { name: 'AES-GCM' }, false, ['decrypt']);
                    var dec = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: ivBuf }, key, combined);
                    return new TextDecoder().decode(dec);
                }

                async function tryUnlock(password) {
                    var res = await fetch(CHAPTER_ID + '.md');
                    if (!res.ok) throw new Error('Fetch failed');
                    var encrypted = await res.text();
                    return await decryptContent(encrypted, password);
                }

                // Auto-unlock if key is saved
                var savedKey = localStorage.getItem('tochka-opory-license-key');
                if (savedKey) {
                    tryUnlock(savedKey).then(function(md) {
                        document.getElementById('paywall-screen').style.display = 'none';
                        var el = document.getElementById('chapter-content');
                        el.style.display = '';
                        el.innerHTML = marked.parse(md);
                    }).catch(function() {
                        localStorage.removeItem('tochka-opory-license-key');
                    });
                }

                // Manual unlock
                document.getElementById('paywall-submit').addEventListener('click', async function() {
                    var input = document.getElementById('paywall-key');
                    var key = input.value.trim();
                    var errEl = document.getElementById('paywall-error');
                    var btn = document.getElementById('paywall-submit');
                    if (!key) { errEl.textContent = 'Введите ключ'; errEl.style.display = ''; return; }
                    btn.textContent = 'Проверка...'; btn.disabled = true; errEl.style.display = 'none';
                    try {
                        var md = await tryUnlock(key);
                        localStorage.setItem('tochka-opory-license-key', key);
                        document.getElementById('paywall-screen').style.display = 'none';
                        var el = document.getElementById('chapter-content');
                        el.style.display = '';
                        el.innerHTML = marked.parse(md);
                    } catch(e) {
                        errEl.textContent = 'Неверный ключ. Проверьте правильность ввода.';
                        errEl.style.display = '';
                        btn.textContent = 'Активировать доступ'; btn.disabled = false;
                    }
                });

                // Enter key support
                document.getElementById('paywall-key').addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') document.getElementById('paywall-submit').click();
                });
            })();
            <\/script>`;
    } else {
        const srcPath = path.join(SRC_DIR, `${chapter.id}.md`);
        if (!fs.existsSync(srcPath)) {
            console.warn(`⚠️  Source not found: ${srcPath}`);
            return;
        }
        const md = fs.readFileSync(srcPath, 'utf8');
        htmlContent = marked.parse(md);
    }

    const fullHTML = buildHTML(chapter, htmlContent, false);
    const destPath = path.join(DOCS_DIR, 'chapters', `${chapter.id}.html`);
    fs.writeFileSync(destPath, fullHTML, 'utf8');
});

// ── Generate robots.txt ──
const robotsTxt = `User-agent: *
Allow: /
Disallow: /*.pdf$

User-agent: Yandex
Allow: /
Disallow: /*.pdf$
Crawl-delay: 2

Sitemap: ${SITE_URL}/sitemap.xml
Host: ${SITE_URL}
`;

fs.writeFileSync(path.join(DOCS_DIR, 'robots.txt'), robotsTxt, 'utf8');

// ── Generate sitemap.xml ──
const dateISO = new Date().toISOString().split('T')[0];
const sitemapEntries = [
    { url: SITE_URL + '/', priority: '1.0', changefreq: 'weekly' },
    ...CHAPTERS.map((ch, i) => ({
        url: `${SITE_URL}/chapters/${ch.id}.html`,
        priority: i === 0 ? '0.9' : '0.8',
        changefreq: 'monthly',
    })),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(e => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${dateISO}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(DOCS_DIR, 'sitemap.xml'), sitemapXml, 'utf8');

// ── Compile index.html from template ──
const templatePath = path.join(DOCS_DIR, 'index_template.html');
if (fs.existsSync(templatePath)) {
    const templateHtml = fs.readFileSync(templatePath, 'utf8');
    
    // Pre-render TOC links for the landing page sidebar to optimize Yandex sitelinks
    const indexTocHTML = CHAPTERS.map((ch, i) => {
        const chUrl = `chapters/${ch.id}.html`;
        const moduleHeader = (ch.module && (i === 0 || CHAPTERS[i - 1].module !== ch.module))
            ? `<div class="toc-module">${ch.module}</div>` : '';
        return `${moduleHeader}<a class="toc-item" href="${chUrl}">${ch.title}</a>`;
    }).join('\n');

    const updatedHtml = templateHtml
        .replace(
            /<link rel="stylesheet" href="css\/style\.css">/g,
            `<style>${minifiedCss}</style>`
        )
        .replace(
            /<nav id="toc" class="toc" aria-label="Оглавление"><\/nav>/g,
            `<nav id="toc" class="toc" aria-label="Оглавление">${indexTocHTML}</nav>`
        )
        .replace(
            /r_015744dc3f28b49e\.pdf/g,
            `r_015744dc3f28b49e.pdf?v=${pdfVersion}`
        );

    fs.writeFileSync(path.join(DOCS_DIR, 'index.html'), updatedHtml, 'utf8');
}
}

main().catch(console.error);
