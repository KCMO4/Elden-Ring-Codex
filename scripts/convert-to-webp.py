"""
Convert all images in public/art/ from JPEG/PNG to WebP at quality 85.
WebP keeps the original .jpg extension on disk so the resolver doesn't
need to change — browsers honor magic bytes regardless of extension.

Skip if already WebP. Replace in-place. Print savings.
"""
from PIL import Image
import os
import json

ROOT = 'public/art'
QUALITY = 85
results = []
total_before = 0
total_after = 0
skipped = 0
errors = 0

for category in os.listdir(ROOT):
    cat_dir = os.path.join(ROOT, category)
    if not os.path.isdir(cat_dir):
        continue
    for fn in os.listdir(cat_dir):
        if fn.startswith('.'):
            continue
        path = os.path.join(cat_dir, fn)
        if not os.path.isfile(path):
            continue
        try:
            before = os.path.getsize(path)
            with open(path, 'rb') as f:
                head = f.read(12)
            # Skip if already WebP
            if head[:4] == b'RIFF' and head[8:12] == b'WEBP':
                skipped += 1
                continue
            with Image.open(path) as im:
                # Drop alpha for JPEG-style images (preserve for PNG with transparency)
                if im.mode == 'P':
                    im = im.convert('RGBA')
                im.save(path, 'WEBP', quality=QUALITY, method=6)
            after = os.path.getsize(path)
            total_before += before
            total_after += after
            results.append({
                'path': path.replace('\\', '/'),
                'before_kb': before // 1024,
                'after_kb': after // 1024,
                'savings_kb': (before - after) // 1024,
            })
        except Exception as e:
            errors += 1
            print(f'  ERROR {path}: {e}')

savings = total_before - total_after
pct = (savings / total_before * 100) if total_before else 0

print(f'\nConvertidas: {len(results)} | ya-WebP: {skipped} | errores: {errors}')
print(f'Antes: {total_before // 1024 // 1024} MB')
print(f'Después: {total_after // 1024 // 1024} MB')
print(f'Ahorro: {savings // 1024 // 1024} MB ({pct:.1f}%)')

os.makedirs('reports', exist_ok=True)
with open('reports/webp-conversion.json', 'w', encoding='utf-8') as f:
    json.dump({
        'converted': len(results),
        'skipped': skipped,
        'errors': errors,
        'before_mb': total_before / 1024 / 1024,
        'after_mb': total_after / 1024 / 1024,
        'savings_pct': pct,
    }, f, indent=2)
