import os
import subprocess

html_content = """<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<title>Точка Опоры — Полное руководство по выходу из ПППГ</title>
<style>
@page {
    margin: 0;
    size: A4;
}
* {
    box-sizing: border-box;
}
html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #0b1329;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;
}
.card {
    max-width: 580px;
    width: 85%;
    margin: auto;
    background: #152238;
    border: 1px solid #2d3e5a;
    border-radius: 20px;
    padding: 48px 36px;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}
h1 {
    font-size: 28px;
    margin: 0 0 16px 0;
    color: #38bdf8;
    line-height: 1.3;
}
p {
    font-size: 17px;
    line-height: 1.6;
    color: #94a3b8;
    margin: 0 0 32px 0;
}
.btn {
    display: inline-block;
    background: #0284c7;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    padding: 16px 36px;
    border-radius: 10px;
    text-decoration: none;
    transition: background 0.2s;
}
.url {
    margin-top: 28px;
    font-size: 14px;
    color: #64748b;
}
</style>
</head>
<body>
<div class='card'>
    <h1>Точка Опоры — Выход из ПППГ</h1>
    <p>Книга полностью перенесена на официальный сайт с бесплатными главами, оцифровкой тестов и материалами.</p>
    <a class='btn' href='https://hmjim.github.io/pppd/'>Открыть книгу онлайн &rarr;</a>
    <div class='url'>https://hmjim.github.io/pppd/</div>
</div>
</body>
</html>"""

root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
temp_html = os.path.join(root_dir, 'tochka_opory.html')
with open(temp_html, 'w', encoding='utf-8') as f:
    f.write(html_content)

edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
targets = [
    os.path.join(root_dir, 'docs', 'dl_a7f3e9d2c1b8.pdf'),
    os.path.join(root_dir, 'docs', 'point_of_support.pdf')
]

for target in targets:
    cmd = f'"{edge_path}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="{target}" "file:///{temp_html.replace(os.sep, "/")}"'
    subprocess.run(cmd, shell=True, check=True)
    print("Created:", target)

if os.path.exists(temp_html):
    os.remove(temp_html)
