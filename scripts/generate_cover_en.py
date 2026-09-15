import os
import numpy as np
from PIL import Image, ImageDraw, ImageFont

def generate_cover_en():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    docs_dir = os.path.join(root_dir, 'docs')
    src_cover_path = os.path.join(docs_dir, 'cover.png')
    dst_cover_path = os.path.join(docs_dir, 'cover_en.png')
    dst_cover_en_dir = os.path.join(docs_dir, 'en', 'cover_en.png')

    orig = Image.open(src_cover_path).convert('RGBA')
    arr = np.array(orig, dtype=float)

    # 1. Inpaint Russian title area: y: 165..245, x: 220..790
    top_clean = arr[160:165, 220:790].mean(axis=0)
    bot_clean = arr[245:250, 220:790].mean(axis=0)
    np.random.seed(42)
    for y in range(165, 245):
        t = (y - 165) / (245 - 165)
        noise = np.random.normal(0, 0.8, (570, 4))
        arr[y, 220:790] = (1 - t) * top_clean + t * bot_clean + noise

    # 2. Inpaint Russian author area: y: 800..855, x: 380..640
    top_b = arr[795:800, 380:640].mean(axis=0)
    bot_b = arr[855:860, 380:640].mean(axis=0)
    for y in range(800, 855):
        t = (y - 800) / (855 - 800)
        noise = np.random.normal(0, 0.8, (260, 4))
        arr[y, 380:640] = (1 - t) * top_b + t * bot_b + noise

    base = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), mode='RGBA')

    def draw_spaced_text(draw, text, font, center_x, center_y, fill, letter_spacing=0):
        chars = list(text)
        widths = [draw.textbbox((0, 0), c, font=font)[2] - draw.textbbox((0, 0), c, font=font)[0] for c in chars]
        total_w = sum(widths) + letter_spacing * (len(chars) - 1)
        bbox_sample = draw.textbbox((0, 0), 'H', font=font)
        h = bbox_sample[3] - bbox_sample[1]
        cur_x = center_x - total_w / 2
        top_y = center_y - h / 2
        for c, w in zip(chars, widths):
            c_bbox = draw.textbbox((0, 0), c, font=font)
            draw.text((cur_x - c_bbox[0], top_y - c_bbox[1]), c, font=font, fill=fill)
            cur_x += w + letter_spacing

    img = base.copy()
    draw = ImageDraw.Draw(img)

    font_path_bold = 'C:/Windows/Fonts/segoeuib.ttf'
    if not os.path.exists(font_path_bold):
        font_path_bold = 'C:/Windows/Fonts/arialbd.ttf'

    font_top = ImageFont.truetype(font_path_bold, 68)
    font_bot = ImageFont.truetype(font_path_bold, 32)

    # Top title: "POINT OF SUPPORT" in solid white
    draw_spaced_text(draw, 'POINT OF SUPPORT', font_top, 509, 203, (255, 255, 255, 255), letter_spacing=5)
    # Bottom author: "MAX" in muted slate matching original cover style
    draw_spaced_text(draw, 'M A X', font_bot, 509, 825, (155, 165, 180, 255), letter_spacing=32)

    # Save to docs/cover_en.png and docs/en/cover_en.png
    img.convert('RGB').save(dst_cover_path, format='PNG', optimize=True)
    os.makedirs(os.path.dirname(dst_cover_en_dir), exist_ok=True)
    img.convert('RGB').save(dst_cover_en_dir, format='PNG', optimize=True)
    print(f'Generated: {dst_cover_path}')
    print(f'Generated: {dst_cover_en_dir}')

if __name__ == '__main__':
    generate_cover_en()
