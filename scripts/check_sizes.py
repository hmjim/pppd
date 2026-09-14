import os

src_dir = 'chapters_src'
en_dir = 'chapters_en'

for f in sorted(os.listdir(src_dir)):
    src_p = os.path.join(src_dir, f)
    en_p = os.path.join(en_dir, f)
    src_sz = os.path.getsize(src_p)
    en_sz = os.path.getsize(en_p) if os.path.exists(en_p) else 0
    ratio = (en_sz / src_sz * 100) if src_sz else 0
    print(f"{f:35} | RU: {src_sz:6} b | EN: {en_sz:6} b | Ratio: {ratio:5.1f}%")
