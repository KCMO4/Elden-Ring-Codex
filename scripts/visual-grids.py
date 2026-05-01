"""
Captura full-page screenshots de las paginas-lista para inspeccionar el grid
de imagenes completo (vs solo viewport visible).
"""
from playwright.sync_api import sync_playwright
import os

OUT_DIR = '/tmp/codex-grids'
os.makedirs(OUT_DIR, exist_ok=True)

PAGES = [
    ('regions',    'http://localhost:5173/regiones'),
    ('characters', 'http://localhost:5173/personajes'),
    ('factions',   'http://localhost:5173/facciones'),
    ('concepts',   'http://localhost:5173/conceptos'),
    ('timeline',   'http://localhost:5173/timeline'),
    ('endings',    'http://localhost:5173/finales'),
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(viewport={'width': 1440, 'height': 900})
    page = context.new_page()

    for label, url in PAGES:
        try:
            page.goto(url, wait_until='networkidle', timeout=30000)
            # Scroll to bottom to trigger lazy-load
            page.evaluate('''() => {
                return new Promise(resolve => {
                    let total = 0;
                    const step = () => {
                        window.scrollBy(0, 800);
                        total += 800;
                        if (total < document.body.scrollHeight) {
                            setTimeout(step, 200);
                        } else {
                            window.scrollTo(0, 0);
                            resolve();
                        }
                    };
                    step();
                });
            }''')
            page.wait_for_timeout(1500)
            screenshot = f'{OUT_DIR}/{label}-full.png'
            page.screenshot(path=screenshot, full_page=True)
            print(f"  {label}: saved {screenshot}")
        except Exception as e:
            print(f"  {label}: ERROR {e}")

    browser.close()

print("Done")
