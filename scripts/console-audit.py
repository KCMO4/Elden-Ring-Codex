"""Capture browser console errors/warnings while navigating key pages."""
from playwright.sync_api import sync_playwright

PAGES = [
    'http://localhost:5173/',
    'http://localhost:5173/regiones',
    'http://localhost:5173/personajes',
    'http://localhost:5173/facciones',
    'http://localhost:5173/conceptos',
    'http://localhost:5173/timeline',
    'http://localhost:5173/finales',
    'http://localhost:5173/personajes/marika',
    'http://localhost:5173/regiones/limgrave',
    'http://localhost:5173/conceptos/erdtree',
    'http://localhost:5173/timeline/marika-godfrey',
    'http://localhost:5173/genealogia',
    'http://localhost:5173/busqueda',
    'http://localhost:5173/favoritos',
    'http://localhost:5173/etiqueta/dragones',
    'http://localhost:5173/rutas',
    'http://localhost:5173/no-existe-404',
]

console_msgs = []
page_errors = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_context(viewport={'width': 1440, 'height': 900}).new_page()

    page.on('console', lambda msg: console_msgs.append({
        'url': page.url,
        'type': msg.type,
        'text': msg.text[:300],
    }) if msg.type in ('error', 'warning') else None)
    page.on('pageerror', lambda err: page_errors.append({
        'url': page.url,
        'message': str(err)[:300],
    }))

    for url in PAGES:
        try:
            page.goto(url, wait_until='networkidle', timeout=10000)
            page.wait_for_timeout(300)
            print(f'  {url} OK')
        except Exception as e:
            print(f'  {url} ERROR: {e}')

    browser.close()

import json
with open('/tmp/console-audit.json', 'w', encoding='utf-8') as f:
    json.dump({'console': console_msgs, 'errors': page_errors}, f, indent=2)
print(f'\nConsole msgs: {len(console_msgs)} | Page errors: {len(page_errors)}')
print('Details: /tmp/console-audit.json')
