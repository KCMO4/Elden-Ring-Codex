from PIL import Image
import glob
import os

expected = {
    'characters': 4/5,
    'regions':    16/7,
    'factions':   3/2,
    'concepts':   16/7,
    'endings':    3/2,
    'timeline':   16/7,
}

issues = []
for path in glob.glob('public/art/*/*.jpg'):
    norm = path.replace(os.sep, '/')
    parts = norm.split('/')
    cat = parts[2]
    im = Image.open(path)
    w, h = im.size
    actual = w/h
    exp = expected.get(cat)
    if exp is None:
        continue
    diff = abs(actual - exp) / exp
    if diff > 0.30:
        issues.append((path, w, h, actual, exp, diff, cat))

issues.sort(key=lambda x: -x[5])
print(f'Aspect ratio outliers (>30% off): {len(issues)}\n')

for cat_filter in ['characters', 'regions', 'factions', 'concepts', 'endings', 'timeline']:
    matching = [it for it in issues if it[6] == cat_filter]
    if not matching:
        continue
    exp = expected[cat_filter]
    print(f'\n=== {cat_filter.upper()} (expected {exp:.2f}) — {len(matching)} issues ===')
    for p, w, h, a, e, d, c in matching:
        direction = 'WIDE' if a > e else 'TALL'
        print(f'  {os.path.basename(p):40s} {w}x{h} ratio={a:.2f} {direction}')
