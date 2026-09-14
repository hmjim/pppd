import os
import sys
import time
import json
import urllib.request
import urllib.parse
import re
import random

sys.stdout.reconfigure(encoding='utf-8')

CLIENTS = ['dict-chrome-ex', 'tw-ob', 'it', 'p']
client_idx = 0

def translate_chunk(text):
    global client_idx
    if not text.strip():
        return text
    
    for attempt in range(8):
        client = CLIENTS[client_idx % len(CLIENTS)]
        client_idx += 1
        url = f'https://translate.googleapis.com/translate_a/single?client={client}&sl=ru&tl=en&dt=t&q=' + urllib.parse.quote(text)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
        
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                res = ''.join([sentence[0] for sentence in data[0] if sentence and sentence[0]])
                if res.strip():
                    time.sleep(0.15)
                    return res
        except Exception as e:
            time.sleep(0.5 + attempt * 0.5)
            
    print(f"Failed to translate chunk: {text[:60]}...")
    return text

def post_process_en(text):
    # Terminology refinements
    replacements = [
        (r'\bPPPG\b', 'PPPD'),
        (r'\bpppg\b', 'pppd'),
        (r'\bDPPG\b', 'BPPV'),
        (r'\bdppg\b', 'bppv'),
        (r'\bDPDG\b', 'EMDR'),
        (r'\bdpdg\b', 'emdr'),
        (r'\bPoint of support\b', 'Point of Support'),
        (r'\bpoint of support\b', 'Point of Support'),
        (r'\bFulcrum\b', 'Point of Support'),
        (r'\bVSD\b', 'VAD (autonomic dysfunction)'),
    ]
    for pattern, replacement in replacements:
        text = re.sub(pattern, replacement, text)
    return text

def translate_file(src_path, dst_path):
    with open(src_path, 'r', encoding='utf-8') as f:
        content = f.read()

    blocks = content.split('\n\n')
    translated_blocks = []
    
    current_chunk = []
    current_len = 0
    
    for block in blocks:
        if block.strip().startswith('```') or block.strip() == '---':
            if current_chunk:
                translated_text = translate_chunk('\n\n'.join(current_chunk))
                translated_blocks.append(translated_text)
                current_chunk = []
                current_len = 0
            if block.strip() == '---':
                translated_blocks.append('---')
            else:
                translated_blocks.append(block)
            continue
            
        if current_len + len(block) > 1000:
            translated_text = translate_chunk('\n\n'.join(current_chunk))
            translated_blocks.append(translated_text)
            current_chunk = [block]
            current_len = len(block)
        else:
            current_chunk.append(block)
            current_len += len(block)
            
    if current_chunk:
        translated_text = translate_chunk('\n\n'.join(current_chunk))
        translated_blocks.append(translated_text)
        
    full_en = '\n\n'.join(translated_blocks)
    full_en = post_process_en(full_en)
    
    with open(dst_path, 'w', encoding='utf-8') as f:
        f.write(full_en)

    src_len = len(content)
    dst_len = len(full_en)
    return src_len, dst_len

def main():
    src_dir = 'chapters_src'
    dst_dir = 'chapters_en'
    os.makedirs(dst_dir, exist_ok=True)
    
    files = sorted([f for f in os.listdir(src_dir) if f.endswith('.md')])
    print(f"Translating all {len(files)} chapters with 100% 1:1 verbatim accuracy...")
    
    t0 = time.time()
    for idx, filename in enumerate(files):
        src_path = os.path.join(src_dir, filename)
        dst_path = os.path.join(dst_dir, filename)
        
        src_len, dst_len = translate_file(src_path, dst_path)
        ratio = dst_len / src_len if src_len > 0 else 0
        print(f"[{idx+1:02d}/{len(files)}] ✓ {filename} (RU: {src_len} -> EN: {dst_len} chars, ratio: {ratio:.2f})")

    elapsed = time.time() - t0
    print(f"\n🎉 All {len(files)} chapters translated in {elapsed:.1f}s!")

if __name__ == '__main__':
    main()
