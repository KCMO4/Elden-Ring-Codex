# Elden Ring: Códice — Instrucciones para el Agente

## Proyecto
Wiki SPA React de lore para Elden Ring **juego base** (sin Shadow of the Erdtree). UI completa en español. Stack: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + lucide-react + React Router v6.

**Estado**: codex completo al 100 %. **375 entradas base con deep lore** (107 personajes + 68 facciones + 34 regiones + 90 conceptos + 70 eventos + 6 finales). **Las 14 fases completas + UX expansion + glow-up final**. **0 referencias rotas** verificado por script automatizado. Cobertura cosmológica integral del juego base — todas las reliquias remembrance individualmente, sacramentos del régimen (Estacas / Wondrous Physick / Sites of Grace / Roundtable Hold), y figuras históricas referenciadas (Storm-Hawk King). **Imágenes 100 % ≥1080p** (Real-ESRGAN AI upscaling para sub-1080p).

## Reglas críticas
- **Solo juego base.** Cero contenido del DLC. Tratar el codex como si Shadow of the Erdtree no existiera.
- **Terminología "Tierras Intermedias"**, no "Interregno". El término "Lands Between" se traduce como **Tierras Intermedias** (plural femenino) en todo el codex. Cualquier nuevo lore debe respetar el género/número (las Tierras Intermedias son, están, fueron, etc.).
- **Terminología "Árbol Áureo"**, no "Erdtree" ni "Árbol del Inmenso". Es la traducción oficial española de FromSoft. Capitalizado en texto visible. Los IDs/slugs lowercase (`erdtree`, `minor-erdtrees`) se preservan tal cual — son identificadores internos, no texto visible.
- **No hotlinking de imágenes.** Cero URLs externas committeadas. Las imágenes se resuelven en este orden:
  1. `public/image-sources.local.json` (override remoto/local — **gitignored**, NUNCA committear)
  2. `public/art/{categoria}/{id}.{jpg|png|webp}` (archivo local, todos ≥1080p)
  3. Ilustración SVG fallback generada automáticamente (chunk lazy `fallback-illustrations`)
- **No assets oficiales.** Solo ilustraciones SVG originales en `src/components/images/`.
- **No comentarios redundantes.** Solo comentar WHY no obvio, nunca WHAT.
- **No abstracciones prematuras.** No generalizar hasta que haya 3+ casos reales.
- **Solo committear cuando el usuario lo pida explícitamente.**

## Rutas (React Router v6, future flags v7)
| Ruta | Página |
|---|---|
| `/` | Portada (LandingPage con Featured Entry diario + "Continuar leyendo") |
| `/timeline` | Lista timeline |
| `/timeline/:slug` | Detalle de evento |
| `/personajes` | Lista personajes |
| `/personajes/:slug` | Detalle personaje |
| `/facciones` | Lista facciones |
| `/facciones/:slug` | Detalle facción |
| `/regiones` | Lista regiones |
| `/regiones/:slug` | Detalle región |
| `/conceptos` | Glosario |
| `/conceptos/:slug` | Detalle concepto |
| `/finales` | Los 6 finales |
| `/finales/:slug` | Detalle final |
| `/rutas` | Rutas narrativas (lecturas guiadas) |
| `/rutas/:id` | Detalle de ruta narrativa |
| `/lectura/:category` | Modo lectura full-categoría (CategoryReadingPage) |
| `/genealogia` | Genealogía del Erdtree (3 uniones, 11 herederos) |
| `/favoritos` | Bookmarks (localStorage, EntityType-typed) |
| `/etiqueta/:slug` | Página de agregación cross-categoría por tag |
| `/busqueda` | Búsqueda global (Ctrl+K / ⌘K) con highlight + filtro por tipo |

Cualquier cambio de ruta requiere actualizar también `src/data/lookups.ts` (`pathFor` / `ROUTE_PREFIX`) y `src/components/RichLoreText.tsx` (`entityRouteMap`).

`BrowserRouter` lleva `future={{ v7_startTransition: true, v7_relativeSplatPath: true }}` para silenciar warnings y preparar la migración a RR v7.

**Importante para AnimatePresence**: las rutas se renderizan dentro de `<Suspense>` (fuera) → `<AnimatePresence mode="wait">` → `<motion.div key={location.pathname}>` → `<Routes location={location}>`. La `location` explícita es esencial: sin ella, el motion.div viejo durante exit re-renderiza con la nueva ubicación, causando flicker visible al navegar a páginas detalle.

## Paleta de colores (Tailwind custom — paleta brillante, post brightness boost)
```
codex-black:        #13110d    fondo principal
codex-brown:        #261b15    marrón oscuro / paneles
codex-green:        #15211c    verde oscuro apagado
codex-gold:         #d4ad62    acento principal
codex-gold-dim:     #b08e58    acento secundario
codex-gold-bright:  #f2deb0    headings brillantes
codex-parchment:    #ede0c5    texto principal
codex-parchment-dim:#d4c8b0    texto secundario
codex-ink:          #352a20    bordes/divisores
codex-crimson:      #bf4848    sangre/muerte
codex-rot:          #a04270    rot/scarlet
codex-ghost:        #5a72b5    azul espectral
codex-flame:        #c97352    llama frenética
```

La paleta entera subió un escalón de luminosidad para legibilidad (mantiene la estética "manuscrito oscuro y dorado" pero respira más). Acompañado de `body { line-height: 1.65 }` y `p { line-height: 1.75 }` en `index.css`. Los radial gradients de fondo se subieron de 0.03 → 0.05 opacity. Los paneles (`parchment-panel`, `gold-border`, `text-glow`) tienen bordes y glows ligeramente más visibles.

## Tipografía
- `font-heading` → Cinzel (headings, UI labels)
- `font-subheading` → Cormorant Garamond (subtítulos, nombres)
- `font-body` → Merriweather (cuerpo de texto, lore)

## Sistema de datos — patrón de capas

Cada tipo de entidad sigue el mismo patrón en `src/data/`:

```
src/data/
├── types.ts                      # Tipos compartidos + RichBlock + DeepEntity
├── characters.ts                 # baseCharacters + merge con lore (107 entradas)
├── regions.ts                    # baseRegions + merge con lore (34 entradas)
├── factions.ts                   # baseFactions + merge con lore (68 entradas)
├── glossary.ts                   # baseGlossary + merge con lore (90 entradas)
├── timeline.ts                   # baseTimeline + merge con lore (70 entradas)
├── endings.ts                    # endingsData (datos completos inline, 6 entradas)
├── narrativeRoutes.ts            # Rutas narrativas (Ranni, Fia, etc.)
├── coveragePlan.ts               # Plan de cobertura programable (legado, 100 % cubierto)
├── lookups.ts                    # findBySlug<T>, resolveByIds<T>, pathFor, ROUTE_PREFIX, neighbors, randomEntryPath
├── index.ts                      # Re-exports
└── lore/
    ├── charactersLore.ts         # Lore base de personajes (capa 1)
    ├── charactersDeepLore.ts     # Lore deep de TODOS los personajes (capa 2, ~3700 líneas)
    ├── regionsLore.ts            # Lore base de regiones
    ├── regionsDeepLore.ts        # Lore deep de subregiones
    ├── factionsLore.ts           # Lore base + deep de facciones (~2400 líneas, post Phase 2)
    ├── glossaryLore.ts           # Lore deep de conceptos (~2000 líneas)
    ├── timelineLore.ts           # Lore base de eventos
    └── timelineDeepLore.ts       # Lore deep de eventos atómicos (~3000 líneas)
```

### Patrón de merge (importante)
Cada `data/X.ts` exporta así:
```ts
export const xData = baseX.map((x) => ({
  ...x,
  ...(xLore[x.id] ?? {}),
  ...(xDeepLore[x.id] ?? {}),  // si existe; deep > lore > base
}))
```

Para añadir lore profundo a una entidad existente: añadir entrada en el archivo `*DeepLore.ts` o `*Lore.ts` con su `id` como clave. NO modificar el archivo base si solo es lore.

### Helpers genéricos en lookups.ts
- `findBySlug<T extends { id: string }>(slug, list)` — reemplazó 6 `findX` específicos
- `resolveByIds<T extends { id: string }>(ids, list)` — reemplazó 6 `resolveX` específicos
- `ROUTE_PREFIX: Record<EntityType, string>` — fuente única de verdad para mapping
- `pathFor.character(c)` etc. delega a `ROUTE_PREFIX`

## Estructura del DeepEntity (RichBlock)

Los `deepLore` se construyen con bloques tipados en `RichBlock[]`:
- `h(2|3, text, id?)` — heading
- `p(...children)` — paragraph con `RichInline[]`
- `q(text, attribution?)` — quote
- `link(label, targetType, slug)` — enlace interno
- `em(text)`, `strong(text)` — énfasis

### Convenciones por tipo de entidad

**Major character (12 secciones)**: Resumen / Rol / Historia / Motivaciones / Relaciones / Eventos / Consecuencias / Simbolismo / Conexiones + 4 buckets (confirmed/inferred/theories/ambiguous).

**Faction (5 secciones, post Phase 2)**: Resumen / Origen / Doctrina o función / Estado actual / Significado simbólico + buckets + cross-links completos.

**Concept (5-6 secciones, post Phase 3)**: Resumen / Naturaleza ontológica / Origen o estructura / Manifestaciones o aplicaciones / Significado simbólico + buckets + cross-links completos.

**Timeline event (4 secciones)**: Resumen del evento / Historia detallada / Causas y consecuencias / Significado simbólico + buckets.

**Subregion deep (5 secciones)**: Resumen / Historia / Estado actual / Tragedia oculta / Significado.

**Compact character (3-4 secciones)**: Resumen + 2-3 secciones temáticas + buckets reducidos.

## Sistema de imágenes
- `src/lib/imageSources.ts` — Provider que fetcha `/image-sources.local.json` al inicio (con AbortController + async/await tras code audit)
- `src/lib/assetPaths.ts` — `categoryToArtPath(category, id)` resuelve path on-disk (simplificada a 1 fn)
- `src/components/images/CodexImage.tsx` — componente con resolución de cadena (override → /art → SVG fallback) + skeleton shimmer mientras carga
- `src/components/images/FallbackIllustrations.tsx` — ~24 sigilos SVG originales (lazy chunk `fallback-illustrations`, ~10 kB gz, solo se carga si hace falta)
- `FallbackType` definido en `src/data/types.ts` (fuente única de verdad)
- `src/lib/fallbackMap.ts` — mapeo `id → FallbackType` para cada entidad

### Variantes de CodexImage
- `portrait` → aspect-[4/5] — personajes
- `banner` → aspect-[16/7] — regiones, conceptos, heroes de sección
- `card` → aspect-[3/2] — facciones, finales
- `square` → aspect-square

### Categorías de imagen (image-sources.local.json)
`characters | regions | factions | concepts | endings | timelineEvents`

### Pipeline de imágenes (scripts/)
- `fandom-fetch.mjs` — scraper del wiki Fandom con Cloudflare bypass (headers + selección por área)
- `download-replacements.mjs` — pipeline de descarga + dedup
- `audit-assets.mjs` — verifica resoluciones, ratios, integridad
- `upscale-batch.mjs` — Real-ESRGAN ncnn-vulkan 4x (binario en `tools/`, gitignored)
- `compress-upscaled.py` — Pillow JPEG q90 tras upscaling
- `verify-upscaled.py` — verifica dimensiones finales ≥1080px
- `convert-to-webp.py` — conversor Pillow → WebP (NO aplicar nuevamente: causó silent breakage de 375 archivos cuando los outputs WebP se guardaron con extensión `.jpg`; el navegador veía `Content-Type: image/jpeg` pero el contenido era WebP, falla de decode = "imagen rota")
- `visual-grids.py` — Playwright + thumbs en grids para review visual rápida
- `rename-erdtree.mjs` — Erdtree → Árbol Áureo (preserva IDs/slugs lowercase)
- `rename-interregno.mjs` + `fix-tierras-grammar.mjs` — Interregno → Tierras Intermedias + concordancia gramatical

## Páginas de detalle

`src/pages/` contiene las páginas detalle por tipo, todas usando `DetailLayout`:
- `CharacterDetailPage.tsx`
- `RegionDetailPage.tsx`
- `FactionDetailPage.tsx`
- `ConceptDetailPage.tsx`
- `TimelineDetailPage.tsx`
- `EndingDetailPage.tsx`
- `RoutesListPage.tsx` + `RouteDetailPage.tsx` (rutas narrativas, key+remount tras code audit)
- `BookmarksPage.tsx` (favoritos via localStorage)
- `GenealogyPage.tsx` (dinastía del Erdtree, 3 uniones)
- `CategoryReadingPage.tsx` (modo lectura full-categoría, `/lectura/:category`)
- `TagPage.tsx` (agregación cross-categoría por tag)
- `SearchPage.tsx`
- `NotFoundPage.tsx`

`src/components/detail/DetailLayout.tsx` provee: hero **con parallax** (`useScroll` + `useTransform`), breadcrumbs, ToC scrollspy, sidebar de relacionados, prev/next con prefetch de imágenes adyacentes, knowledge boxes (4 tonos: gold/parchment/moon/rot), bookmark + share buttons, EntityGraph (mini grafo de relaciones), atajos `j`/`k` (con refs para evitar stale closures).

## Sistema de filtros (post Phase 1, URL-synced en Phase 9)

`src/components/FilterBar.tsx` es el panel reutilizable de filtros. Combina:
- `SearchBar` — búsqueda full-text
- Chips de certeza (`Confirmado | Inferencia | Teoría`)
- `TagPicker` — multi-select con popover de tags + conteos + búsqueda interna
- Sort dropdown (alfabético, por certeza, etc.)
- Contador `filtered/total` + botón "Limpiar filtros"

`src/lib/useFilters.ts` (Phase 9) centraliza el estado de filtros y lo sincroniza con `URLSearchParams`. Cualquier sección que filtra usa `useFilters<TSort>({ defaultSort, validSorts, withSecondaryTags? })`.

`src/lib/filterHelpers.ts` (post code audit) provee `buildTagOptions<T>()` y `compareByCertainty<T>()` — extraídos de 5 secciones que duplicaban la lógica.

`src/lib/certaintyRank.ts` (post code audit) — fuente única de `CERTAINTY_RANK: Record<Certainty, number>` (extraída de 5 duplicados).

Aplicado en: `CharacterSection`, `FactionSection`, `RegionSection`, `GlossarySection`, `TimelineSection`. CharacterSection usa `withSecondaryTags: true` para combinar facciones + tags en dos ejes.

`SearchPage` resalta términos coincidentes con `<mark>` dorado y filtra resultados por tipo de entidad.

## Sistema de bookmarks (favoritos)

`src/lib/bookmarks.ts` — hook `useBookmarks()` con `localStorage` key `codex-bookmarks-v1`. Eventos custom `codex-bookmarks-change` para sincronizar entre instancias.

`src/components/BookmarkButton.tsx` — toggle en hero de cada DetailLayout.

`src/pages/BookmarksPage.tsx` — listado agrupado por tipo en orden canónico (`character → region → faction → concept → timeline → ending`).

## Componentes de polish (glow-up final)

- `src/components/FeaturedEntry.tsx` — entrada destacada en portada con rotación diaria (hash determinístico day-of-year). Reemplaza el primer slot estático del landing.
- `src/components/ShareButton.tsx` — copy-link via clipboard API con feedback visual ("Copiado") en hero de cada detalle.
- `src/components/CornerOrnaments.tsx` — esquineros decorativos (corchetes dorados); props `size="sm"|"md"`, `corners="all"|"top"`. Usado en hero, cards destacadas, modal frames.
- Hover en `CharacterCard` / `FactionCard` / `RegionCard` — multi-layer gold glow + lift sutil; label movido fuera del overlay (cubría imágenes en cards verticales como Mohg).
- `PageSkeleton` — añadida clase `.codex-shimmer` (keyframe `codex-shimmer-slide` en `index.css`) para shimmer en placeholders.

## Comprensión del lore (lore-comprehension layer)

Capa visual+semántica añadida para que el lector no se pierda navegando entradas con 5-15 referencias cruzadas cada una:

- **Color por tipo de entidad en links** — `entityLinkClass: Record<EntityType, string>` en `RichLoreText.tsx`. Personaje (parchment), facción (gold), región (flame), concepto (ghost), evento (rot), final (crimson). Hover da glow del mismo tono.
- **`src/lib/factionColors.ts`** — `factionTone(idOrName)` mapea facción → tono de la paleta (gold / ghost / rot / crimson / flame / parchment / parchment-dim / gold-dim / gold-bright / neutral). `toneBorderClass` y `toneTextClass` exportan los tokens de Tailwind. Aplicado en `CharacterCard`, `FactionCard`, `RegionCard` como franja lateral 4px + color del label.
- **`src/lib/eraOf.ts`** — `eraOf(entity) → 'pre-order' | 'marika' | 'shattering' | 'tarnished' | undefined`. Combina overrides explícitos para 40+ entities clave + regex sobre tags como fallback. `ERA_LABEL` y `ERA_TONE` exportan label y clases Tailwind. **"Tarnished" no se traduce.**
- **`src/components/EraBadge.tsx`** — chip pequeño con dot + label; `size="compact"` solo dot, `size="full"` dot + label. Devuelve `null` si no hay era confiable (preferimos omitir antes que clasificar mal).
- **`src/components/EntityHoverCard.tsx`** — popover Wikipedia-style en cualquier link interno del lore. 220ms hover delay, smart side detection (arriba/abajo según viewport). Renderiza thumbnail + name + summary 1-line + faction + era. Lookup O(1) via `getEntityPreview` en `lookups.ts`.
- **`src/components/MentionedGlossary.tsx`** — panel colapsable en sidebar de cada DetailLayout. Auto-extrae los top-12 entities referenciados en el `deepLore` actual (excluye self), muestra summary de 1 línea + tipo. El lector lo abre cuando se pierde sin navegar a otra pestaña.

### `getEntityPreview` (lookups.ts)
Función O(1) que normaliza cualquier entidad a la forma `{ id, name, summary, faction?, tags?, imageCategory, imageId, type }` para hover-card y mini-glossary. Centraliza la lógica de "qué campo usar como summary" por tipo (Region usa `historical` truncado, GlossaryEntry usa `definition`, etc.). Helper `truncate(s, n)` corta en word-boundary + ellipsis.

## QoL hooks + utilidades

- **`src/lib/readStatus.ts`** — `markRead(type, slug)` / `unmarkRead` / `isRead` / `useReadSet(type)`. localStorage key `codex-read-v1`, custom event `codex-read-change` para sync. DetailLayout marca al cruzar 70% del `articleProgress`. `<ReadCheck type slug />` (en `src/components/ReadCheck.tsx`) renderiza ✓ dorado.
- **`src/lib/readingTime.ts`** — `readingTimeMinutes(blocks, summary?)` con `WORDS_PER_MINUTE = 220` (prosa narrativa española), redondeo arriba, mínimo 1.
- **`src/lib/navDirection.ts`** — `NavDirectionContext` (forward/backward/neutral). DetailLayout setea `forward` en `j`/next, `backward` en `k`/prev. App.tsx usa variants direccionales para slide-from-right/left (page-turn). Reset a neutral 600ms post-navegación.
- **`src/lib/useFilters.ts`** — opción `storageKey?: string`. Cuando se provee, mirror del estado a `localStorage[codex-filters-v1:<key>]`. URL gana en hidratación inicial (share-links). Aplicado en las 5 secciones (`characters`, `factions`, `regions`, `concepts`, `timeline`).

## Modal de atajos
- **`src/components/ShortcutsCheatsheet.tsx`** — abre con `?`, focus trap + body scroll lock + restore focus. Lista atajos por sección (Navegación / Lectura), leyenda de colores de links, leyenda de eras, nota sobre `✓` ya-leído. Montado globalmente en `App.tsx`.

## Atajos de teclado
| Atajo | Acción |
|---|---|
| `Ctrl+K` / `⌘K` | Buscar |
| `/` | Ir a búsqueda |
| `?` | Ayuda / cheatsheet |
| `Esc` | Cerrar modal / sidebar / drawer |
| `j` | Siguiente entrada (en detalle) — page-turn slide derecha |
| `k` | Entrada anterior (en detalle) — page-turn slide izquierda |

## Patrones de componentes
- Secciones-lista envuelven en `<section id="...">` → `<SectionHero>` → `<div className="codex-section pt-6">`
- Cards de detalle usan `Link` a `/personajes/:slug` etc. mediante `pathFor.character(c)` de lookups
- AnimatePresence para expand/collapse y transiciones de página
- Clases utilitarias clave: `parchment-panel`, `codex-section`, `font-heading`, `text-glow`, `codex-shimmer`
- `usePageMeta()` (en `src/lib/pageMeta.ts`) actualiza `<title>` + meta tags por página

## Coverage plan

`src/data/coveragePlan.ts` queda como artefacto histórico programable; cobertura efectiva: **100 %**. Helpers `computeCoverageStats()`, `getMissingCore()`, `getPartialCore()` siguen disponibles si se quiere auditar.

**Estado actual: 375 entradas base con deep lore. Cero missing. Phases 1-14 + UX expansion + glow-up completos. Cobertura cosmológica integral.**

## Phases (mejora continua)

Ver `PHASES.md` para el plan completo. Estado actual:
- ✅ Phase 1: Foundation (filtros + búsqueda + bug fixes)
- ✅ Phase 2: Lore expansion — Facciones
- ✅ Phase 3: Lore expansion — Conceptos/Glosario
- ✅ Phase 4: Lore expansion — Compact characters (20 promovidos a deep tier)
- ✅ Phase 5: Lore expansion — Timeline events (16 expandidos)
- ✅ Phase 6: Lore expansion — Regiones (18 expandidas)
- ✅ Phase 7: Polish final + verificación canon
- ✅ Phase 8: Timeline events sub-atómicos (17 + 4 stubs = 0 refs rotas)
- ✅ Phase 9: UX Polish + QoL (URL filters, FLIP, BackToTop, focus trap, scroll lock)
- ✅ UX expansion: Tag pages, reading history, PageSkeleton, MobileToC, random entry, j/k, certainty tooltips, ScrollToTop global, SVG illustrations rewrite
- ✅ Phase 10-14: Las 7 Grandes Runas + 16 armas remembrance + 3 cenizas + Estaca + 4 conceptos cosmológicos
- ✅ **Image audit + AI upscaling**: 100 % imágenes ≥1080p, identidad consistente, vistas (no mapas) en regiones
- ✅ **Code audit + 12 fixes**: AbortController en imageSources, refs vs stale closure, helpers genéricos, color contrast, lazy fallback chunk, RouteDetailPage key+remount, RichLoreText unique heading IDs, etc.
- ✅ **Terminología**: Interregno → Tierras Intermedias en todo el codex (581 reemplazos + 56 fixes de concordancia gramatical fem/plur)
- ✅ **Orphan auditor**: `scripts/audit-orphan-mentions.mts` detecta sustantivos propios mencionados sin entrada propia → 7 nuevas entradas añadidas
- ✅ **Glow-up UI**: parallax hero, hover gold glow, skeleton shimmer, FeaturedEntry diario, ShareButton, CornerOrnaments, prefetch prev/next hero, lazy fallback-illustrations chunk

## Componentes UX globales

### Navegación + scroll
- `src/components/ScrollToTop.tsx` — listener global de `useLocation`, scroll-to-top en cambio de pathname, scroll-to-anchor con retry de 250 ms si hay hash. NO interfiere si solo cambia el hash (ToC clicks).
- `src/components/BackToTop.tsx` — botón flotante tras scroll > 400 px. `bottom-20` en `/timeline/:slug` para no chocar con `ChronoFloatingBar`.
- `src/components/PageSkeleton.tsx` — variantes `detail` / `list` / `generic` con shimmer.
- `src/components/ScrollProgress.tsx` — barra superior de progreso de scroll.

### Descubrimiento
- `src/lib/tagAggregator.ts` — `slugifyTag`, `findEntriesByTag`, `getAllTags`, `tagPath`. Página `/etiqueta/:slug` agrega cross-categoría.
- `src/lib/readingHistory.ts` — `recordVisit()` + `useReadingHistory()`. `DetailLayout` registra cada visita; `LandingPage` muestra hasta 6 recientes.
- `randomEntryPath()` en `lookups.ts` — `SidebarNav` tiene botón `Shuffle`.
- `FeaturedEntry` — rotación determinística día-año.

### Detalle
- `DetailLayout` registra historial automáticamente, escucha `j`/`k` (refs evitan stale closure), renderiza `MobileToC` inline (bottom-sheet drawer en `lg:hidden`) y `BackToTop`. Hero con parallax. Prefetch de hero prev/next al render.
- `MobileToC` (inline en DetailLayout) — `motion.aside` que sube desde el bottom con spring.
- `CertaintyBadge` con `title` nativo explicando cada nivel.

### Modal + focus
- Body scroll lock en sidebar móvil (`SidebarNav.tsx`).
- Focus trap + Escape close + restore focus en `GlossaryModal.tsx`.
- `motion.article` con prop `layout` en cards (FLIP animations al filtrar).

## Comandos
```bash
npm run dev      # desarrollo en localhost:5173
npm run build    # tsc + vite build (debe pasar limpio; bundle initial ~148 kB gz)
npm run preview  # servir build
```

### Scripts auxiliares (npx tsx / node / python)
```bash
node scripts/audit-assets.mjs                  # verifica resoluciones de /art
npx tsx scripts/audit-cross-links.mts          # 0 broken refs garantizado
npx tsx scripts/audit-orphan-mentions.mts      # menciones de proper-nouns sin entrada
node scripts/check-coverage.mjs                # estadísticas de cobertura
node scripts/upscale-batch.mjs                 # Real-ESRGAN 4x (requiere tools/)
python scripts/compress-upscaled.py            # JPEG q90 tras upscaling
python scripts/verify-upscaled.py              # confirma ≥1080px
python scripts/visual-grids.py                 # thumbs grid para QA visual
```

## Antes de cualquier commit
1. `npm run build` debe pasar limpio
2. `git status --short` no debe incluir `public/image-sources.local.json` ni archivos de `tools/`, `.trash-art/`, `reports/`
3. `git check-ignore -v public/image-sources.local.json` debe coincidir con `.gitignore`
4. `agent.md`, `memory.md`, `PHASES.md` están untracked deliberadamente (docs personales del usuario)

## GitHub
- Remote: `https://github.com/KCMO4/Elden-Ring-Codex.git`
- Branch principal: `main`
- Última head: commit `2bc6ac7` (rutas narrativas + lectura cronológica + visual timeline + interactive map [posteriormente removido])
