import os
import sys
import time
import json
import urllib.request
import urllib.parse
import re

sys.stdout.reconfigure(encoding='utf-8')

CLIENTS = ['dict-chrome-ex', 'tw-ob', 'it', 'p']
client_idx = 0

def translate_chunk_reliable(text):
    global client_idx
    if not text.strip():
        return text
    
    for attempt in range(15):
        client = CLIENTS[client_idx % len(CLIENTS)]
        client_idx += 1
        url = f'https://translate.googleapis.com/translate_a/single?client={client}&sl=ru&tl=en&dt=t'
        post_data = urllib.parse.urlencode({'q': text}).encode('utf-8')
        req = urllib.request.Request(url, data=post_data, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                res = ''.join([sentence[0] for sentence in data[0] if sentence and sentence[0]])
                if res.strip():
                    time.sleep(0.25)
                    return res
        except Exception as e:
            time.sleep(1.0 + attempt * 0.5)
            
    raise RuntimeError(f"Could not translate chunk after 15 attempts: {text[:60]}")

def post_process_en(text):
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
                translated_text = translate_chunk_reliable('\n\n'.join(current_chunk))
                translated_blocks.append(translated_text)
                current_chunk = []
                current_len = 0
            if block.strip() == '---':
                translated_blocks.append('---')
            else:
                translated_blocks.append(block)
            continue
            
        if current_len + len(block) > 1200:
            translated_text = translate_chunk_reliable('\n\n'.join(current_chunk))
            translated_blocks.append(translated_text)
            current_chunk = [block]
            current_len = len(block)
        else:
            current_chunk.append(block)
            current_len += len(block)
            
    if current_chunk:
        translated_text = translate_chunk_reliable('\n\n'.join(current_chunk))
        translated_blocks.append(translated_text)
        
    full_en = '\n\n'.join(translated_blocks)
    full_en = post_process_en(full_en)
    
    with open(dst_path, 'w', encoding='utf-8') as f:
        f.write(full_en)

    return len(content), len(full_en)

def main():
    src_dir = 'chapters_src'
    dst_dir = 'chapters_en'
    os.makedirs(dst_dir, exist_ok=True)
    
    files = sorted([f for f in os.listdir(src_dir) if f.endswith('.md')])
    print(f"Starting 100% reliable 1:1 translation for all {len(files)} chapters...", flush=True)
    
    t0 = time.time()
    for idx, filename in enumerate(files):
        src_path = os.path.join(src_dir, filename)
        dst_path = os.path.join(dst_dir, filename)
        
        src_len, dst_len = translate_file(src_path, dst_path)
        ratio = dst_len / src_len if src_len > 0 else 0
        print(f"[{idx+1:02d}/{len(files)}] OK: {filename} (RU {src_len} -> EN {dst_len}, ratio {ratio:.2f})", flush=True)

    elapsed = time.time() - t0
    print(f"\nAll {len(files)} chapters successfully translated in {elapsed:.1f}s!", flush=True)

if __name__ == '__main__':
    main()
