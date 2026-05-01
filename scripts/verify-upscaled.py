"""Capture screenshots of detail pages with upscaled images to verify quality."""
from playwright.sync_api import sync_playwright
import os
os.makedirs('/tmp/codex-upscaled', exist_ok=True)

PAGES = [
    ('character-eleonora',  'http://localhost:5173/personajes/eleonora'),
    ('character-kenneth',   'http://localhost:5173/personajes/kenneth-haight'),
    ('character-varre',     'http://localhost:5173/personajes/varre'),
    ('character-pidia',     'http://localhost:5173/personajes/pidia'),
    ('character-corhyn',    'http://localhost:5173/personajes/corhyn'),
    ('faction-fire-giants', 'http://localhost:5173/facciones/fire-giants'),
    ('faction-orden-dorado','http://localhost:5173/facciones/orden-dorado'),
    ('faction-banished',    'http://localhost:5173/facciones/banished-knights'),
    ('faction-imps',        'http://localhost:5173/facciones/imps'),
    ('concept-blind-sword', 'http://localhost:5173/conceptos/blind-swordsman'),
    ('concept-lhutel',      'http://localhost:5173/conceptos/lhutel-the-headless'),
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_context(viewport={'width': 1440, 'height': 900}).new_page()
    for label, url in PAGES:
        try:
            page.goto(url, wait_until='networkidle', timeout=15000)
            page.wait_for_timeout(800)
            page.screenshot(path=f'/tmp/codex-upscaled/{label}.png', full_page=False)
            print(f'  {label}: OK')
        except Exception as e:
            print(f'  {label}: ERROR {e}')
    browser.close()
print('Done')
