"""
After Real-ESRGAN upscaling, the outputs are large PNGs (often 5-15MB each).
This pass compresses them to JPEG quality 90, downscaling so the longest edge
is at most 2400 px (more than enough for the codex's largest hero size).
"""
from PIL import Image
import json
import os

results_path = 'reports/upscale-results.json'
if not os.path.exists(results_path):
    print('no upscale-results.json — run upscale-batch first')
    raise SystemExit(1)

results = json.load(open(results_path, encoding='utf-8'))
MAX_EDGE = 2400
JPEG_QUALITY = 90

savings = 0
for r in results:
    path = f'public/art/{r["category"]}/{r["id"]}.jpg'
    if not os.path.exists(path):
        continue
    try:
        before = os.path.getsize(path)
        with Image.open(path) as im:
            # Drop alpha if present (JPEG doesn't support it)
            if im.mode in ('RGBA', 'LA', 'P'):
                bg = Image.new('RGB', im.size, (10, 10, 8))
                if im.mode == 'P':
                    im = im.convert('RGBA')
                bg.paste(im, mask=im.split()[-1] if im.mode == 'RGBA' else None)
                im = bg
            elif im.mode != 'RGB':
                im = im.convert('RGB')
            # Cap longest edge
            w, h = im.size
            longest = max(w, h)
            if longest > MAX_EDGE:
                ratio = MAX_EDGE / longest
                im = im.resize((int(w * ratio), int(h * ratio)), Image.LANCZOS)
            im.save(path, 'JPEG', quality=JPEG_QUALITY, optimize=True, progressive=True)
        after = os.path.getsize(path)
        savings += (before - after)
        print(f'  {r["category"]}/{r["id"]}: {before//1024}kB -> {after//1024}kB ({im.size[0]}x{im.size[1]})')
    except Exception as e:
        print(f'  {r["category"]}/{r["id"]}: ERROR {e}')

print(f'\nTotal savings: {savings // 1024 // 1024} MB')
