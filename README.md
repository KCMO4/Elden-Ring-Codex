# Elden Ring: Códice del Orden Fracturado

Lore book / wiki personal y sin fines de lucro sobre el lore del **juego base** de Elden Ring. Aplicación React de página única, en español, con estética de manuscrito oscuro y dorado envejecido.

**Estado:** **375 entradas** con lore profundo, **0 referencias rotas** verificadas por script, **14 fases de mejora completadas + UX expansion + glow-up final**. Cobertura cosmológica integral del juego base: las 7 Grandes Runas individuales, todas las armas remembrance, principales cenizas espirituales, sacramentos cosmológicos (Estacas de Marika, Sites of Grace, Wondrous Physick), figuras históricas referenciadas (Storm-Hawk King), y narrativa cronológica completa pre-Orden → Era de las Estrellas. Todas las imágenes ≥1080p.

---

## Descargo de responsabilidad

> Este proyecto es un códice fan-made, personal y sin fines de lucro sobre el lore del juego base de Elden Ring. No está afiliado, patrocinado ni aprobado por FromSoftware, Bandai Namco ni ningún titular de derechos. El repositorio no incluye assets oficiales del juego ni URLs de imágenes protegidas. El usuario puede configurar imágenes locales o URLs externas mediante un archivo local ignorado por Git para uso personal en localhost. Si el proyecto se publica, distribuye o comparte públicamente, se recomienda usar únicamente imágenes propias, con licencia compatible o con permiso del autor. El uso sin fines de lucro no implica autorización automática para usar material protegido por copyright.

Solo cubre contenido del juego base. **No** incluye Shadow of the Erdtree.

> **Terminología**: el codex traduce *Lands Between* como **Tierras Intermedias** (no "Interregno") y *Erdtree* como **Árbol Áureo** (la traducción oficial de FromSoft, no "Árbol del Inmenso"). Cualquier nuevo lore debe respetar género/número en "Tierras Intermedias" (plural femenino) y mantener "Árbol Áureo" capitalizado en texto visible (los slugs lowercase `erdtree`, `minor-erdtrees` son IDs internos y se preservan).

---

## Instalación y uso

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Stack

- React 18 + TypeScript + Vite
- React Router v6 con future flags v7 (`v7_startTransition`, `v7_relativeSplatPath`)
- Tailwind CSS (sistema de colores `codex-*`)
- Framer Motion (transiciones, parallax, FLIP)
- lucide-react (iconos)

---

## Sistema de imágenes locales

El códice resuelve cada imagen de entidad en este orden de prioridad:

1. **`public/image-sources.local.json`** (override remoto/local — *gitignored*).
2. **`public/art/{categoria}/{id}.{jpg|png|webp}`** (archivo local en disco, todos ≥1080p).
3. **Ilustración SVG fallback** generada automáticamente por categoría (chunk lazy, ~10 kB gz).

Si todas fallan, el SVG fallback siempre se renderiza — el códice nunca se queda sin imagen.

### `image-sources.local.json` — archivo local

Este archivo es **personal y nunca debe ser commiteado**. Está en `.gitignore`.

Se carga al inicio de la app desde `/image-sources.local.json` con `AbortController` + cleanup (no fugas si el componente desmonta antes de la respuesta). Si existe y es JSON válido, sus URLs sustituyen a cualquier imagen local o fallback.

#### Cómo crearlo / poblarlo

1. Copia `public/image-sources.example.json` como `public/image-sources.local.json`.
2. Rellena las URLs externas (o rutas locales `/art/...`) que quieras usar para tu sesión personal.
3. Recarga el navegador. La app aplicará las imágenes automáticamente.

#### Forma del JSON

```json
{
  "characters": {
    "malenia": {
      "image": "https://...",
      "banner": "https://...",
      "source": "https://página-origen",
      "credit": "Artista o fuente",
      "localOnly": true,
      "note": "Imagen configurada localmente para uso personal en localhost"
    }
  },
  "regions": {},
  "factions": {},
  "concepts": {},
  "endings": {},
  "timelineEvents": {}
}
```

Las claves de cada sección coinciden con los `id` de los datos en `src/data/`. Por ejemplo:

| Sección       | Categoría JSON   | ID ejemplo        |
|---------------|------------------|-------------------|
| Personajes    | `characters`     | `malenia`         |
| Regiones      | `regions`        | `caelid`          |
| Facciones     | `factions`       | `orden-dorado`    |
| Conceptos     | `concepts`       | `scarlet-rot`     |
| Finales       | `endings`        | `fracture`        |
| Timeline      | `timelineEvents` | `la-fractura`     |

#### Por qué no se commitea

- URLs de imágenes oficiales de FromSoftware son **propiedad protegida**. No se redistribuyen.
- Hotlinking de imágenes externas viola los términos de servicio de la mayoría de los hosts.
- El archivo es **personal**: cada usuario configura las imágenes que quiera para su uso local.

Antes de hacer commit, verifica:

```bash
git status            # public/image-sources.local.json no debe aparecer
git check-ignore -v public/image-sources.local.json
```

### Imágenes locales en disco

Si prefieres tener imágenes guardadas localmente (en lugar de URLs):

```
public/
└── art/
    ├── characters/   → retratos          (≥1080×1350 px, 4:5)
    ├── regions/      → banners           (≥1920×840 px, 16:7)
    ├── factions/     → emblemas          (≥1080×720 px, 3:2)
    ├── endings/      → ilustraciones     (≥1080×720 px, 3:2)
    ├── concepts/     → arte conceptual   (≥1920×840 px, 16:7)
    └── timeline/     → escenas evento    (≥1920×840 px, 16:7)
```

El nombre del archivo debe coincidir con el `id` de la entidad: `public/art/characters/malenia.jpg`.

Estas carpetas también están **gitignoreadas** (excepto los `.gitkeep`). Tus imágenes propias permanecen locales.

### Pipeline de imágenes (scripts/)

El proyecto incluye un pipeline reproducible para construir y mantener el corpus de arte:

| Script | Propósito |
|---|---|
| `scripts/fandom-fetch.mjs` | Scraper del wiki Fandom (Cloudflare bypass + selección por área) |
| `scripts/download-replacements.mjs` | Descarga + dedup |
| `scripts/audit-assets.mjs` | Verifica resoluciones, ratios, integridad |
| `scripts/upscale-batch.mjs` | Real-ESRGAN ncnn-vulkan 4x (binario en `tools/`, gitignored) |
| `scripts/compress-upscaled.py` | Pillow JPEG q90 tras upscaling |
| `scripts/verify-upscaled.py` | Confirma ≥1080px |
| `scripts/convert-to-webp.py` | Conversor Pillow → WebP (NO usar: rompe rendering en navegador si se guarda con extensión `.jpg` — el navegador no decodifica WebP cuando `Content-Type: image/jpeg`) |
| `scripts/visual-grids.py` | Playwright thumbs grid para QA visual rápida |
| `scripts/rename-erdtree.mjs` | Erdtree → Árbol Áureo (preserva IDs lowercase) |
| `scripts/rename-interregno.mjs` | Interregno → Tierras Intermedias |
| `scripts/fix-tierras-grammar.mjs` | Concordancia fem/plur tras rename |

---

## Rutas

La app es un wiki completo con páginas dedicadas para cada entidad:

| Ruta                    | Página                                |
|-------------------------|---------------------------------------|
| `/`                     | Portada con Featured Entry diario + "Continuar leyendo" |
| `/timeline`             | Lista de capítulos del timeline       |
| `/timeline/:slug`       | Página detallada del capítulo         |
| `/personajes`           | Enciclopedia de personajes            |
| `/personajes/:slug`     | Página detallada del personaje        |
| `/facciones`            | Lista de facciones                    |
| `/facciones/:slug`      | Página detallada de la facción        |
| `/regiones`             | Lista de regiones                     |
| `/regiones/:slug`       | Página detallada de la región         |
| `/conceptos`            | Glosario de conceptos                 |
| `/conceptos/:slug`      | Página detallada del concepto         |
| `/finales`              | Los seis finales                      |
| `/finales/:slug`        | Página detallada del final            |
| `/rutas`                | Rutas narrativas (lecturas guiadas)   |
| `/rutas/:id`            | Detalle de ruta narrativa             |
| `/lectura/:category`    | Modo lectura full-categoría           |
| `/genealogia`           | Genealogía del Erdtree (3 uniones)    |
| `/favoritos`            | Bookmarks (localStorage)              |
| `/etiqueta/:slug`       | Página de agregación por etiqueta     |
| `/busqueda`             | Búsqueda global (`Ctrl+K` / `⌘K`)     |

Cada página detallada incluye: hero image **con parallax**, breadcrumbs, tabla de contenido, tags clicables (que enlazan a su página de etiqueta), certainty badge con tooltip, summary, lore detallado con enlaces internos cruzados, los 4 buckets (confirmado / inferencia / teoría / ambigüedad), beneficiarios y víctimas, listas de entidades relacionadas, mini-grafo de relaciones, navegación previo/siguiente con atajos `j`/`k` y prefetch de la imagen adyacente, **bookmark + share button**.

---

## Agregar contenido nuevo

### Personaje nuevo

1. Edita `src/data/characters.ts`, añade un objeto siguiendo el tipo `Character`.
2. (Opcional) Añade lore profunda en `src/data/lore/charactersLore.ts` con su `id` como clave.
3. (Opcional) Imagen en `public/art/characters/<id>.jpg` (≥1080p; usa `scripts/upscale-batch.mjs` si la fuente es menor).
4. (Opcional) Sigilo SVG personalizado en `src/lib/fallbackMap.ts` → `characterFallbacks`.

### Región / Facción / Concepto / Timeline

Mismo patrón:
- Datos base en `src/data/{regions|factions|glossary|timeline}.ts`.
- Lore detallada en `src/data/lore/{regions|factions|glossary|timeline}Lore.ts`.
- Imágenes en `public/art/{categoria}/<id>.jpg`.
- Mapa de fallback en `src/lib/fallbackMap.ts`.

### Enlaces cruzados internos

En la lore detallada, los enlaces a otras entidades se escriben como nodos `RichLink`:

```ts
import type { RichInline } from '../types'

const link = (label, targetType, slug): RichInline =>
  ({ type: 'link', label, targetType, slug })

// Uso:
p('Marika selló la ', link('Muerte Predestinada', 'concept', 'destined-death'), ' en Maliketh.')
```

Los `targetType` válidos son: `character | region | faction | concept | ending | timeline`. El `slug` es el `id` de la entidad destino.

### Auditor de menciones huérfanas

`npx tsx scripts/audit-orphan-mentions.mts` escanea el lore y reporta sustantivos propios mencionados N+ veces que no tienen entrada propia. Útil para decidir qué entradas faltarían — guió los últimos 7 personajes/facciones/regiones añadidos.

---

## Estructura del proyecto

```
src/
├── App.tsx                            # BrowserRouter + AppShell con sidebar/header
├── data/
│   ├── types.ts                       # Tipos compartidos + RichBlock + DeepEntity
│   ├── timeline.ts                    # 70 capítulos / eventos sub-atómicos
│   ├── characters.ts                  # 107 personajes (mayores + secundarios + históricos)
│   ├── factions.ts                    # 68 facciones / razas / órdenes
│   ├── regions.ts                     # 34 regiones (mayores + subregiones)
│   ├── glossary.ts                    # 90 conceptos cosmológicos + reliquias + sacramentos
│   ├── endings.ts                     # 6 finales
│   ├── narrativeRoutes.ts             # Rutas narrativas (Ranni, Fia, etc.)
│   ├── coveragePlan.ts                # Plan de cobertura programable (legado, 100 % cubierto)
│   ├── lookups.ts                     # findBySlug<T>, resolveByIds<T>, pathFor, ROUTE_PREFIX, neighbors, randomEntryPath
│   ├── lore/
│   │   ├── charactersLore.ts          # Deep lore de personajes (capa 1)
│   │   ├── charactersDeepLore.ts      # Deep lore mayor (12 secciones + 4 buckets)
│   │   ├── regionsLore.ts / regionsDeepLore.ts
│   │   ├── factionsLore.ts
│   │   ├── glossaryLore.ts            # 90 entradas con secciones + buckets + cross-links
│   │   ├── timelineLore.ts / timelineDeepLore.ts
│   │   └── ...
│   └── index.ts                       # Re-exports
├── lib/
│   ├── assetPaths.ts                  # categoryToArtPath (1 fn)
│   ├── certaintyRank.ts               # CERTAINTY_RANK fuente única
│   ├── filterHelpers.ts               # buildTagOptions<T>, compareByCertainty<T>
│   ├── fallbackMap.ts                 # ID → FallbackType
│   ├── imageSources.ts                # Provider + useImageSources + useEntityImage (AbortController)
│   ├── bookmarks.ts                   # useBookmarks() + localStorage + event sync
│   ├── readingHistory.ts              # recordVisit + useReadingHistory()
│   ├── tagAggregator.ts               # slugifyTag, findEntriesByTag, getAllTags
│   ├── useFilters.ts                  # URL-synced filter state hook
│   ├── deepText.ts                    # flattenLore + extractSnippet (búsqueda)
│   └── pageMeta.ts                    # usePageMeta (title + OG tags)
├── pages/                              # Lazy-loaded
│   ├── CharacterDetailPage.tsx
│   ├── RegionDetailPage.tsx
│   ├── FactionDetailPage.tsx
│   ├── ConceptDetailPage.tsx
│   ├── TimelineDetailPage.tsx
│   ├── EndingDetailPage.tsx
│   ├── RoutesListPage.tsx / RouteDetailPage.tsx
│   ├── BookmarksPage.tsx
│   ├── GenealogyPage.tsx
│   ├── CategoryReadingPage.tsx        # /lectura/:category
│   ├── TagPage.tsx                    # Agregación cross-categoría
│   ├── SearchPage.tsx
│   └── NotFoundPage.tsx
└── components/
    ├── SidebarNav.tsx                 # NavLink-based sidebar + entrada aleatoria
    ├── LandingPage.tsx                # Portada con Featured Entry + "Continuar leyendo"
    ├── FeaturedEntry.tsx              # Entrada destacada con rotación diaria
    ├── ShareButton.tsx                # Copy-link via clipboard API
    ├── CornerOrnaments.tsx            # Esquineros decorativos dorados
    ├── PageSkeleton.tsx               # Skeleton variants + shimmer
    ├── ScrollToTop.tsx                # Reset de scroll global en route change
    ├── BackToTop.tsx                  # Botón flotante de retorno al inicio
    ├── ScrollProgress.tsx             # Barra de progreso de scroll
    ├── FilterBar.tsx                  # Search + certainty + TagPicker + sort
    ├── TagPicker.tsx                  # Multi-select con popover y conteos
    ├── TagPill.tsx                    # Botón-toggle o Link a /etiqueta/:slug
    ├── EmptyState.tsx                 # Variantes search / filter / rune
    ├── BookmarkButton.tsx             # Toggle en hero de cada DetailLayout
    ├── CertaintyBadge.tsx             # Con tooltip nativo explicativo
    ├── TimelineSection.tsx            # Lista timeline + visual ribbon
    ├── CharacterSection.tsx           # Lista personajes (2 ejes de filtrado)
    ├── FactionSection.tsx / RegionSection.tsx / GlossarySection.tsx
    ├── EndingsSection.tsx             # Grid finales
    ├── RichLoreText.tsx               # Renderiza RichBlock[] (heading IDs únicos tras code audit)
    ├── illustrations/                 # GoldenTree, BrokenRing, RuneSeparator
    ├── detail/
    │   ├── DetailLayout.tsx           # Hero parallax + ToC + sidebar + j/k + share
    │   └── EntityGraph.tsx            # Mini grafo SVG de relaciones
    └── images/
        ├── CodexImage.tsx             # Override → /art → SVG fallback + skeleton shimmer
        └── FallbackIllustrations.tsx  # 24 escenas SVG (chunk lazy ~10 kB gz)
```

---

## Características

### Contenido
- **Wiki completo** con páginas dedicadas para cada entidad (375 entradas con lore profundo)
- **Enlaces internos cruzados** entre lore via `RichLoreText` (con render tolerante)
- **Cobertura cosmológica integral**: las 7 Grandes Runas, armas remembrance, cenizas espirituales clave, sacramentos cosmológicos, figuras históricas referenciadas
- **0 referencias rotas** verificadas por `scripts/audit-cross-links.mts`

### Navegación y descubrimiento
- **Búsqueda global** (Ctrl+K / ⌘K, o `/`) con highlight de coincidencias y filtro por tipo
- **Cheatsheet de atajos** (presiona `?`) con leyenda de colores y eras
- **Featured Entry** — entrada destacada en portada con rotación determinística (día-año)
- **Modo Lectura por categoría** (`/lectura/:category`) — recorrido lineal de un tipo entero
- **Páginas de etiqueta** (`/etiqueta/:slug`) — agregación cross-categoría desde cualquier tag
- **Bookmarks** (favoritos en localStorage, sincronizados entre componentes)
- **Continuar leyendo** — historial de visitas en la portada
- **Entrada aleatoria** — botón en sidebar para descubrimiento serendípito
- **Genealogía del Erdtree** — visualización dedicada de las 3 uniones dinásticas
- **Rutas narrativas** — lecturas guiadas tipo "ruta de Ranni"
- **Atajos `j`/`k`** para navegación previo/siguiente con page-turn slide direccional + thumbnail preview en hover
- **Share button** — copy-link via clipboard API en cada detalle

### Comprensión del lore (lore-comprehension layer)
- **Color por tipo de entidad** en cada link interno (personaje / facción / región / concepto / evento / final) — el lector ve qué es cada cosa sin clicar
- **Identidad visual de facción** en cards — franja lateral en el color de la facción + label tonal (clusters de aliados a primera vista)
- **Hover preview Wikipedia-style** en cualquier link del lore: thumbnail + nombre + rol + facción + era
- **Era badge** (Pre-Orden / Era de Marika / Fractura / Tarnished) — chip cromático en cards y hero
- **Mini-glosario sticky** en sidebar de cada detalle: top-12 entidades mencionadas en el artículo actual con summary de 1 línea (panel colapsable)
- **Tooltip de conteo** en TagPills (`5 personajes · 2 facciones`)

### Estado de lectura
- **Reading time** estimado (`~5 min lectura`) calculado del wordcount real
- **Per-article reading progress** — barra dorada slim ligada al scroll del artículo
- **"Ya leído" marker** — `✓` dorado en cards de listas para entradas donde scrolleaste >70%

### UX y polish
- **Filtros sincronizados con URL + persistencia localStorage** — el link compartible sigue funcionando, pero al volver a una sección se restauran tus filtros previos
- **TagPicker multi-select** con popover, conteos y búsqueda interna (escala a 30+ tags)
- **Animaciones FLIP** en grids al filtrar (Framer Motion `layout` prop)
- **Stagger entrance** en cards (cascada sutil al cargar listas)
- **Page-turn transitions** entre prev/next: slide-from-right (j/next) o slide-from-left (k/prev)
- **Gold ink reveal** en headings al entrar en viewport (text-shadow sweep)
- **Skeleton loaders** layout-aware con shimmer durante carga lazy
- **Hero parallax** sutil al scroll en cada página detalle
- **Sticky breadcrumbs** — aparecen pinned tras scrollear el hero, con backdrop-blur
- **Hover gold glow** multi-capa en cards
- **Corner ornaments** dorados en hero y cards destacadas
- **ToC móvil** con bottom-sheet drawer en pantallas <`lg`
- **BackToTop** flotante con detección de scroll
- **Modo Lectura global** (oculta UI secundaria, atajo desde sidebar)
- **Filtros por certeza** (Confirmado / Inferencia / Teoría) con tooltip explicativo

### Accesibilidad
- **Focus trap** en GlossaryModal con restauración de focus al cerrar
- **`aria-current`** automático en NavLinks, **`aria-pressed`** en TagPills filtro, **`aria-modal`** en drawers
- **`prefers-reduced-motion`** respetado globalmente vía `MotionConfig`
- **Skip-to-content** link, **focus-visible** con outline dorado, **body scroll lock** en sidebar móvil
- **Heading IDs únicos** en RichLoreText (post code audit)

### Visual
- **Ilustraciones SVG originales** — no usa assets de FromSoftware
- **Erdtree animado** en portada (11 capas, ramas en 3 niveles, copa multi-cloud, orbes parpadeantes)
- **24 escenas atmosféricas** multi-capa por tipo de entidad (golden-order, rot, moon, cosmic, etc.)
- **Sistema de imágenes 3-niveles** (override remoto → local → fallback SVG)
- **100 % imágenes ≥1080p** (Real-ESRGAN AI upscaling para sub-1080p originales)
- **Identidad consistente** (no hay personajes con la imagen de otro; vistas, no mapas, en regiones)
- **Responsive**: desktop, tablet, móvil
- **Paleta brillante** — toda la paleta `codex-*` subió un escalón de luminosidad para legibilidad sin perder el registro "manuscrito oscuro y dorado"
- **Line-height generoso** (1.65 body, 1.75 párrafos) para reducir fatiga visual en sesiones largas

### Performance
- **Lazy loading** de páginas detalle (14 chunks individuales de 1-3 kB gz)
- **Manual chunks** por categoría de lore (characters / factions / regions / glossary / timeline)
- **`fallback-illustrations` chunk** lazy (~10 kB gz, solo se carga si falta una imagen)
- **Prefetch de hero adyacente** al renderizar página detalle (mejora navegación j/k)
- **Initial bundle ~155 kB gz**

---

## Notas de licencia

El código fuente del códice (componentes, lógica, ilustraciones SVG originales) puede ser reutilizado por el usuario para fines personales. El **lore textual** se basa en interpretación del juego base; el copyright del lore subyacente pertenece a FromSoftware/Bandai Namco. Las imágenes externas que el usuario configure mediante `image-sources.local.json` permanecen propiedad de sus respectivos titulares y solo deben ser usadas localmente.
