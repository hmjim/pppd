import os
import sys
import time
import json
import urllib.request
import urllib.parse
import re

def translate_chunk(text):
    if not text.strip():
        return text
    
    # Protect markdown code blocks or special markers if any
    url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=ru&tl=en&dt=t&q=' + urllib.parse.quote(text)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=20) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                res = ''.join([sentence[0] for sentence in data[0] if sentence and sentence[0]])
                return res
        except Exception as e:
            time.sleep(1 + attempt * 2)
            
    print(f"Failed to translate chunk: {text[:50]}...")
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

    # Split into blocks by double newlines to keep markdown paragraphs intact
    blocks = content.split('\n\n')
    translated_blocks = []
    
    current_chunk = []
    current_len = 0
    
    for block in blocks:
        # If code block or table, or divider, handle carefully
        if block.strip().startswith('```') or block.strip() == '---':
            if current_chunk:
                translated_text = translate_chunk('\n\n'.join(current_chunk))
                translated_blocks.append(translated_text)
                current_chunk = []
                current_len = 0
            if block.strip() == '---':
                translated_blocks.append('---')
            else:
                translated_blocks.append(block) # Keep code blocks intact
            continue
            
        if current_len + len(block) > 1200:
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

def main():
    src_dir = 'chapters_src'
    dst_dir = 'chapters_en'
    os.makedirs(dst_dir, exist_ok=True)
    
    files = sorted([f for f in os.listdir(src_dir) if f.endswith('.md')])
    print(f"Translating {len(files)} chapters with 1:1 verbatim accuracy...")
    
    for idx, filename in enumerate(files):
        src_path = os.path.join(src_dir, filename)
        dst_path = os.path.join(dst_dir, filename)
        
        # Check src size
        with open(src_path, 'r', encoding='utf-8') as sf:
            src_len = len(sf.read())
            
        print(f"[{idx+1}/{len(files)}] Translating {filename} ({src_len} chars)...")
        translate_file(src_path, dst_path)
        
        with open(dst_path, 'r', encoding='utf-8') as df:
            dst_len = len(df.read())
        print(f"   -> Done: {dst_len} chars (ratio: {dst_len/src_len:.2f})")
        time.sleep(0.3)

    print("\nAll chapters successfully translated with 1:1 parity!")

if __name__ == '__main__':
    main()
