import os
import subprocess

html_content = """<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<style>
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0;
    padding: 60px 40px;
    background: #0f172a;
    color: #f8fafc;
    text-align: center;
    box-sizing: border-box;
}
.card {
    max-width: 540px;
    margin: 60px auto;
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}
h1 { font-size: 26px; margin-bottom: 12px; color: #38bdf8; }
p { font-size: 16px; line-height: 1.6; color: #94a3b8; margin-bottom: 24px; }
.btn {
    display: inline-block;
    background: #0284c7;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    padding: 14px 28px;
    border-radius: 8px;
    text-decoration: none;
}
</style>
</head>
<body>
<div class='card'>
    <h1>Точка Опоры — Выход из ПППГ</h1>
    <p>Книга полностью перенесена на официальный сайт с бесплатными главами, оцифровкой тестов и материалами.</p>
    <a class='btn' href='https://hmjim.github.io/pppd/'>Открыть книгу онлайн &rarr;</a>
    <p style='margin-top: 24px; font-size: 13px; color: #64748b;'>https://hmjim.github.io/pppd/</p>
</div>
</body>
</html>"""

root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
temp_html = os.path.join(root_dir, 'temp_redirect_pdf.html')
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
