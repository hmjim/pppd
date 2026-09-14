import os

src_dir = 'chapters_src'
en_dir = 'chapters_en'

for f in sorted(os.listdir(src_dir)):
    with open(os.path.join(src_dir, f), encoding='utf-8') as sf:
        ru_lines = sf.readlines()
    en_p = os.path.join(en_dir, f)
    en_lines = open(en_p, encoding='utf-8').readlines() if os.path.exists(en_p) else []
    print(f"{f:35} | RU: {len(ru_lines):4} lines ({os.path.getsize(os.path.join(src_dir, f)):6} b) | EN: {len(en_lines):4} lines ({os.path.getsize(en_p) if os.path.exists(en_p) else 0:6} b)")
