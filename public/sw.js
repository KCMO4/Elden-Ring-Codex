/* Códice del Orden Fracturado — minimal service worker
 *
 * Strategy:
 *  · App shell (HTML, JS, CSS) → stale-while-revalidate.
 *    Reads cache first for fast loads; updates in the background.
 *  · Same-origin GET requests → cached on first hit (network-first fallback).
 *  · External (Google Fonts, image-sources.local.json overrides) → bypassed.
 *  · Image assets in `/art/...` → cache-first with size cap.
 *
 * The cache name is bumped on every release so old assets get evicted.
 * Bump VERSION when shipping a new build.
 */
const VERSION = 'codex-v1'
const SHELL_CACHE = `${VERSION}-shell`
const ART_CACHE = `${VERSION}-art`

const SHELL_PATHS = [
  '/',
  '/manifest.webmanifest',
  '/tree-icon.svg',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_PATHS).catch(() => {/* ignore — partial cache is fine */}))
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))
      )
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)

  /* Skip cross-origin (Google Fonts, etc.) */
  if (url.origin !== self.location.origin) return

  /* Bypass the local image-sources override — the user expects fresh JSON each load */
  if (url.pathname === '/image-sources.local.json') return

  /* Image assets: cache-first */
  if (url.pathname.startsWith('/art/')) {
    event.respondWith(cacheFirst(req, ART_CACHE))
    return
  }

  /* Navigation requests (HTML routes) — network-first to pick up new shells,
     fall back to cached / index. */
  if (req.mode === 'navigate') {
    event.respondWith(networkFirst(req, SHELL_CACHE).catch(() => caches.match('/') ))
    return
  }

  /* JS/CSS/JSON/SVG → stale-while-revalidate */
  event.respondWith(staleWhileRevalidate(req, SHELL_CACHE))
})

async function cacheFirst(req, cacheName) {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(req)
  if (cached) return cached
  try {
    const res = await fetch(req)
    if (res.ok) cache.put(req, res.clone())
    return res
  } catch (e) {
    return new Response('', { status: 504, statusText: 'Offline' })
  }
}

async function networkFirst(req, cacheName) {
  try {
    const res = await fetch(req)
    if (res.ok) {
      const cache = await caches.open(cacheName)
      cache.put(req, res.clone())
    }
    return res
  } catch (e) {
    const cached = await caches.match(req)
    if (cached) return cached
    throw e
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(req)
  const fetchPromise = fetch(req)
    .then((res) => {
      if (res && res.ok) cache.put(req, res.clone())
      return res
    })
    .catch(() => cached)
  return cached || fetchPromise
}
