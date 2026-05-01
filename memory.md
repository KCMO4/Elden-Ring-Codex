# Memory — Códice del Orden Fracturado

Notas clave sobre decisiones tomadas en este proyecto. Documento vivo: actualizar cuando se tomen nuevas decisiones arquitectónicas.

**Estado del codex: 100 % completo. 375 entradas base con lore profundo (107 chars + 68 facciones + 34 regiones + 90 conceptos + 70 timeline + 6 finales). Las 14 fases completas + UX expansion + Image audit + Code audit (12 fixes) + Terminology rename (Interregno → Tierras Intermedias) + Glow-up final. 0 referencias rotas verificado por audit automatizado. Imágenes 100 % ≥1080p (Real-ESRGAN AI upscaling para sub-1080p). Initial bundle 148 kB gz.**

---

## Decisiones de arquitectura

### Patrón de capas para datos + lore
Cada tipo de entidad sigue: `base data + lore supplement + deep lore supplement`, fusionados con spread merge en el momento de exportar.

```ts
export const xData = baseX.map((x) => ({
  ...x,
  ...(xLore[x.id] ?? {}),
  ...(xDeepLore[x.id] ?? {}),
}))
```

Razón: permite añadir lore profundo a entidades existentes sin modificar archivos base de 1000+ líneas. El supplement vive en `src/data/lore/*.ts` indexado por `id`. Es la clave que permitió escalar el codex de 30 entradas a 317 sin convertir los archivos base en monstruos.

### FallbackType en types.ts
`FallbackType` está definido en `src/data/types.ts`, no en `FallbackIllustrations.tsx`.
Razón: evitar imports circulares cuando los datos referencian el tipo.

### fallbackMap.ts separado
Los mapeos `id → FallbackType` viven en `src/lib/fallbackMap.ts`, no en los archivos de datos.
Razón: añadir ~30+ campos `fallbackType` opcionales a cada entidad sería ruido; el mapa externo es más limpio.

### Endings con datos completos en data/endings.ts
Los 6 finales viven en `src/data/endings.ts` como datos completos (no usan supplement deep lore). Tienen propiedades de estilo (colores, iconos) directamente embebidas.
Razón: los finales son pocos y altamente específicos; no se ganan nada al separarlos en capas.

### GlossaryModal exporta GlossarySection
El archivo `GlossaryModal.tsx` exporta la función `GlossarySection` (el grid con modal).
El wrapper `GlossarySection.tsx` importa desde ahí, aplica filtros con FilterBar, y pasa entries filtradas al grid.
Razón: histórico — se separó cuando se añadió SectionHero, no se renombró para no romper imports.

### Image-sources.local.json gitignored
El archivo `public/image-sources.local.json` está gitignored (línea 8 del .gitignore).
Cualquier URL de imagen externa que el usuario configure vive ahí, NUNCA en archivos committeados.
Razón: el repo es público; URLs de imágenes oficiales de FromSoftware son propiedad protegida.

### Coverage plan como gobernanza programable
`src/data/coveragePlan.ts` es TypeScript explorable, no markdown. Permite computar stats, filtrar missing/partial, y generar `docs/coverage-report.md` automáticamente.
Razón: el codex tiene 317 entradas; la auditoría manual no escala.

### Bulk status flips via node scripts efímeros
Para flippear muchos statuses a la vez se han usado scripts efímeros en `scripts/*.mjs` que se eliminan tras correr. Razón: hacer 60 Edit calls manuales sería absurdo, pero tampoco queremos que los scripts queden en el repo.

### FilterBar y TagPicker desacoplados
`FilterBar` provee un único bloque de filtros (search + certainty + 1 tag picker + sort + counter). Cuando una página necesita 2 ejes de filtrado (ej. CharacterSection con facciones + tags), renderiza FilterBar + un TagPicker adicional como sibling.
Razón: extender FilterBar a múltiples picker bars era acoplamiento prematuro; renderizar el segundo picker manualmente es más explícito y flexible.

### TagPicker con AND semantics
Cuando hay múltiples tags activas, una entrada matchea solo si tiene TODAS las tags seleccionadas (no ANY).
Razón: el caso "personajes que sean A Y B" es más restrictivo y útil para reducir resultados; "A O B" se logra desactivando filtros.

### Bookmarks en localStorage con event sync
Bookmarks usan `localStorage` (key `codex-bookmarks-v1`) y propagan cambios mediante un CustomEvent (`codex-bookmarks-change`).
Razón: codex es localhost-first; no requiere backend. Event sync permite que múltiples componentes (BookmarkButton + BookmarksPage) vean el mismo estado en una sesión.

### EntityGraph con hover-only labels
Los 18 nodos del grafo tienen labels visibles SOLO al hover/focus, no siempre. Hay un readout central que muestra el label completo del nodo activo.
Razón: 18 labels permanentes saturan visualmente el SVG; hover-only mantiene el grafo limpio. Tooltip SVG `<title>` original era inaccesible en muchos navegadores.

---

## Estado del contenido (al cierre del proyecto)

**Cobertura final: 368 entradas base con deep lore (375+ contando supplements). Cosmología integral del juego base.**

| Categoría | Entradas |
|---|---:|
| Characters (todos los tiers: mayores + secundarios + históricos) | 103 |
| Factions / razas / órdenes | 67 |
| Regions (mayores + subregiones) | 32 |
| Concepts (cosmológicos + reliquias + sacramentos) | 90 |
| Timeline events (atómicos + sub-atómicos) | 70 |
| Endings | 6 |
| **Total entradas base** | **368** |

Glossary se expandió de 33 → 90 entradas a través de Phases 3, 7 y 10-14. Es ahora el archivo más denso del codex (76 kB gz tras Phase 14).

Ver `docs/coverage-report.md` para detalle por categoría y `src/data/coveragePlan.ts` para estado granular.

### Imágenes locales
Ninguna sección tiene imágenes locales todavía. Todo se renderiza con sigilos SVG fallback. El usuario puede:
1. Colocar archivos en `public/art/{categoria}/{id}.jpg`
2. Configurar URLs en `public/image-sources.local.json`

---

## Trayectoria del proyecto

| Hito | existing | partial | missing | % deep |
|---|---:|---:|---:|---:|
| Audit inicial | 115 | 94 | 104 | 37 % |
| Post Phases 1-6 | 122 | 87 | 104 | 39 % |
| Post Phases 7-10 | 246 | 71 | 0 | 78 % |
| Post Mass Promotion | 308 | 9 | 0 | 97 % |
| Cierre Total | 317 | 0 | 0 | 100 % |
| **Phase 1 (filters/UX)** | 317 | 0 | 0 | 100 % |
| **Phase 2 (facciones expandidas)** | 317 | 0 | 0 | 100 % |
| **Phase 3 (conceptos expandidos)** | 317 | 0 | 0 | 100 % |
| **Phase 4 (compact characters)** | 317 | 0 | 0 | 100 % |
| **Phase 5 (timeline events)** | 317 | 0 | 0 | 100 % |
| **Phase 6 (regiones expandidas)** | 317 | 0 | 0 | 100 % |
| **Phase 7 (polish + verif.)** | 324 | 0 | 0 | 100 % |
| **Phase 8 (sub-atómicos)** | 343 | 0 | 0 | 100 % · 0 refs rotas |
| **Phase 9 (UX polish + QoL)** | 343 | 0 | 0 | 100 % · 0 refs rotas |
| **UX expansion (Tag pages, history, skeleton, mobile ToC)** | 343 | 0 | 0 | 100 % · 0 refs rotas |
| **Phase 10 (7 Grandes Runas)** | 350 | 0 | 0 | 100 % · 0 refs rotas |
| **Phase 11 (8 armas legendarias)** | 358 | 0 | 0 | 100 % · 0 refs rotas |
| **Phase 12 (3 cenizas) + Phase 13 (Estaca)** | 362 | 0 | 0 | 100 % · 0 refs rotas |
| **Phase 14 (8 remembrance + 4 conceptos)** | 374 | 0 | 0 | 100 % · 0 refs rotas |
| **Image audit + AI upscaling (1080p · sesión 2026-04-30)** | 374 | 0 | 0 | 100 % · 0 refs rotas |
| **Code audit + 12 fixes (sesión 2026-04-30)** | 374 | 0 | 0 | 100 % · 0 refs rotas |
| **Tierras Intermedias rename (sesión 2026-04-30)** | 374 | 0 | 0 | 100 % · 0 refs rotas |
| **7 nuevas entradas orphan-driven** | 375 | 0 | 0 | 100 % · 0 refs rotas |
| **Glow-up UI (sesión 2026-04-30)** | 375 | 0 | 0 | 100 % · 0 refs rotas |

---

## Phase 1 — Foundation (completa)

Aplicada en sesión 2026-04-29.

### Componentes nuevos
- `src/components/FilterBar.tsx` — panel reutilizable
- `src/components/TagPicker.tsx` — multi-select con popover, búsqueda y conteos
- `src/lib/pageMeta.ts` — `usePageMeta()` para `<title>` + OG meta
- `src/lib/bookmarks.ts` — `useBookmarks()` hook con localStorage
- `src/lib/deepText.ts` — `flattenLore()` + `extractSnippet()`
- `src/components/BookmarkButton.tsx` — toggle en heroes
- `src/components/detail/EntityGraph.tsx` — mini grafo SVG con hover labels
- `src/pages/BookmarksPage.tsx` — listado de favoritos
- `src/pages/GenealogyPage.tsx` — dinastía del Erdtree (3 uniones)

### Filtros aplicados
| Sección | Antes | Ahora |
|---|---|---|
| Personajes | Solo facción (chips lineales) | Search + certeza + multi-facción + multi-etiqueta + sort |
| Facciones | Solo búsqueda | Search + certeza + multi-tag (32 etiquetas) + sort |
| Regiones | Solo búsqueda | Search + certeza + multi-tag + sort |
| Glosario | Solo búsqueda inline | Search + certeza + multi-relacionado + sort |
| Timeline | Search + certeza + tag chips slice(0,20) | Search + certeza + multi-tag completo + sort + inverso |

### Búsqueda mejorada
- Resaltado `<mark>` de términos coincidentes
- Filtro por tipo de entidad con conteos
- Sugerencias rápidas en empty state

### Bug fixes
- B1 ⌘K detection en macOS
- B4 EntityGraph hover labels visibles
- B6 BookmarksPage orden canónico (`character → region → faction → concept → timeline → ending`)

---

## Phase 2 — Expansión de facciones (completa)

Aplicada en sesión 2026-04-29.

### Audit inicial
De 32 entradas en `factionsLore.ts`:
- 12 ya tenían estructura completa (5 secciones + 4 buckets + cross-links): `cuchillos-negros`, `haligtree`, `fundamentalistas`, `finger-readers`, `fire-giants`, `golden-lineage`, `silver-mimic-tears`, `living-jars`, `omenkillers`, `banished-knights`, `frenzied-victims`, `crucible-knights`
- 20 eran shallow (1-3 secciones, sin buckets) — se expandieron en Phase 2

### Estructura estándar para faction deep lore (post Phase 2)
1. Resumen esencial (1-2 párrafos)
2. Sección "Origen" o equivalente
3. Sección "Doctrina y función" o equivalente
4. Sección "Estado actual" o "Caída" o equivalente
5. Sección "Significado simbólico"
+ Buckets: `confirmed` (4-5), `inferred` (3-4), `theories` (3-4), `ambiguous` (3-4)
+ Cross-links: `relatedCharacters`, `relatedFactions`, `relatedRegions`, `relatedConcepts`, `relatedTimelineEvents`, `relatedEndings`

### Bloques expandidos
- **Bloque 1 (cosmología núcleo)**: orden-dorado, dos-dedos, tres-dedos, pieles-de-dios, nox, dragones-antiguos, hombres-bestia
- **Bloque 2 (pueblos excluidos)**: omens, misbegotten, albinauricos, cleanrot-knights, those-who-live-in-death, kindred-of-rot
- **Bloque 3 (instituciones y dinastías)**: redmanes, volcano-manor, bloody-fingers, raya-lucaria, caria
- **Bloque 4 (especies y restos)**: deathbirds, perfumers

### Bundle impact
- `lore-factions` chunk: 47.96 kB → 127.56 kB (16 kB → 40 kB gzipped)
- Total bundle index: sin cambio significativo (lazy-loaded)

### Helpers añadidos en factionsLore.ts
- `em(text)` — para énfasis inline (no estaba antes en este archivo)

---

## Phase 3 — Expansión de conceptos / glosario (completa)

Aplicada en sesión 2026-04-29.

### Audit inicial
De 34 entradas en `glossaryLore.ts`:
- 8 ya tenían estructura completa (5 secciones + 4 buckets + cross-links): `minor-erdtrees`, `full-moon`, `glintstone`, `primeval-current`, `law-of-regression`, `law-of-causality`, `gravity-magic`, `radahn-holds-stars`
- 26 eran shallow (1-3 secciones, sin buckets) — se expandieron en Phase 3

### Estructura estándar para concept deep lore (post Phase 3)
1. Resumen esencial (1-2 párrafos)
2. Naturaleza ontológica o "Naturaleza física y cosmológica"
3. Origen / Función / Estructura interna
4. Manifestaciones / Aplicaciones / Conexiones
5. (opcional) Crisis post-fractura o Significado político
6. Significado simbólico
+ Buckets: `confirmed` (4-6), `inferred` (3-4), `theories` (3-4), `ambiguous` (3-4)
+ Cross-links completos a personajes, facciones, regiones, otros conceptos, eventos, finales

### Bloques expandidos
- **Bloque 1 (cosmología fundamental, 5)**: elden-ring, erdtree, golden-order, voluntad-mayor, dioses-exteriores
- **Bloque 2 (muerte y sello, 5)**: destined-death, rune-of-death, deathroot, black-flame, bestia-elden
- **Bloque 3 (dioses externos rivales, 5)**: frenzied-flame, formless-mother, scarlet-rot, dark-moon, ghostflame
- **Bloque 4 (identidades cosmológicas, 5)**: empyrean, shadow-bound-beast, great-rune, grace, tarnished, crucible
- **Bloque 5 (artefactos e instrumentos, 6)**: those-who-live-in-death, unalloyed-gold, bloodflame, haligtree (concepto), age-of-stars

### Ya completas pre-Phase 3 (no tocadas)
`minor-erdtrees`, `full-moon`, `glintstone`, `primeval-current`, `law-of-regression`, `law-of-causality`, `gravity-magic`, `radahn-holds-stars`

### Bundle impact
- `lore-glossary` chunk: 42.83 kB → 158.84 kB (13.30 → 45.54 kB gz)
- Index sin cambio significativo (chunk lazy-loaded)

### Helpers añadidos en glossaryLore.ts
- `em(text)` — para énfasis inline

### Patrón consistente con Phase 2
Las dos fases usan estructura comparable de 5 secciones + buckets + cross-links. El estándar es replicable para Phase 4 (compact characters), Phase 5 (timeline) y Phase 6 (regiones/subregiones) con adaptaciones menores por tipo de entidad.

---

## Phase 4 — Compact characters promovidos a deep tier (completa)

Aplicada en sesión 2026-04-29.

### Audit inicial
De `charactersLore.ts` (35 entradas totales):
- 15 también en `charactersDeepLore.ts` (deep tier — no se tocan, ya completas)
- **20 solo en charactersLore** (compact tier — promovidas a deep en Phase 4)

Las 20 promovidas:
- Mesa Redonda: gideon, goldmask, corhyn, miriel
- Caria sphere: blaidd, iji, seluvis
- Triángulo Muerte/Crepúsculo: fia, d, rogier
- Caelid Rot: millicent, gowry
- Limgrave/legados pre-Orden: nepheli-loux, kenneth-haight, jar-bairn, gostoc
- Dragones legacy: fortissax, placidusax
- Frenéticos / antagonistas: vyke, dung-eater

### Estructura estándar promovida
Todas pasan de 2-3 secciones sin buckets a 5-6 secciones + 4 buckets + cross-links completos:
1. Resumen extendido (1-2 párrafos)
2. Origen
3. Función / Doctrina / Operación específica
4. Crisis / Quest / Conflicto central
5. Posibles desenlaces o consecuencias
6. Significado simbólico
+ Buckets: confirmed, inferred, theories, ambiguous
+ Cross-links: relatedCharacters, relatedFactions, relatedRegions, relatedConcepts, relatedTimelineEvents, relatedEndings

### Bundle impact
- `lore-characters` chunk: 85.48 kB → 179.35 kB (28 → 55 kB gz)
- Index sin cambio significativo (chunk lazy-loaded)

### Helpers añadidos en charactersLore.ts
- `em(text)` — para énfasis inline (no estaba antes en este archivo)

### Característica especial: estilo narrativo más rico
Los 20 expandidos incluyen análisis filosófico explícito en sección "Significado simbólico" — cada personaje plantea pregunta cosmológica o ética específica (¿se hereda el conflicto entre cosmologías?, ¿es válida la fe sin comprensión?, ¿es el saber paralizante?, ¿cuándo es correcto soltar a quien amamos?). Es el bloque más filosóficamente denso del codex.

### Pendientes para futuras fases
Aún faltan ~46 personajes base-only sin supplement (dragones, soldiers, dungeon bosses, NPCs menores). No se manejan en Phase 4 — pendientes para Phase 7 (polish) o adaptaciones futuras.

---

## Phase 5 — Timeline events expandidos (completa)

Aplicada en sesión 2026-04-29.

### Audit inicial
De `timelineLore.ts` (16 entradas totales):
- **0 con estructura completa** — todas eran shallow (1-3 secciones, sin buckets)
- **16 expandidas** en Phase 5 al estándar de 4-5 secciones + 4 buckets + cross-links completos

### Estructura estándar para timeline event (post Phase 5)
1. Resumen extendido (1-2 párrafos en `summary`)
2. **Resumen del evento** (sección expositiva)
3. **Historia detallada** (puede dividirse en sub-secciones por etapas)
4. **Causas y consecuencias** (análisis estructural)
5. **Significado simbólico**
+ Buckets idénticos a Phases 2/3/4: `confirmed` (5-7), `inferred` (3-4), `theories` (3-4), `ambiguous` (3-4)
+ Cross-links completos a personajes, facciones, regiones, conceptos, otros timeline events, finales

### Bloques expandidos
- **Bloque 1 — Eras antiguas (3)**: antes-orden-dorado, era-antigua, muerte-predestinada
- **Bloque 2 — Fundación del Orden (4)**: marika-godfrey, hijos-marika-godfrey, exilio-godfrey, radagon-rennala
- **Bloque 3 — Linaje complicado (4)**: radagon-es-marika, miquella-malenia, empyreans-fingers-shadows, ranni-noche-cuchillos
- **Bloque 4 — Fractura y presente (5)**: la-fractura, demidioses-fractura, estado-mundo-mancillado, viaje-mancillado, finales

### Bundle impact
- `lore-timeline` chunk: 14.62 kB → 98.46 kB (5 → 28 kB gz)
- Index sin cambio significativo (chunk lazy-loaded)

### Helpers añadidos en timelineLore.ts
- `em(text)` — para énfasis inline (no estaba antes)

### Característica especial: narración cosmológica integral
Los 16 eventos expandidos forman ahora una **narrativa cosmológica continua** que el lector puede seguir cronológicamente desde la era pre-Orden hasta los seis finales posibles. Cada evento documenta no solo "qué pasó" sino "por qué pasó" y "qué significa". Las cuatro hipótesis sobre la motivación de Marika al romper el Anillo Elden están explícitamente catalogadas con base textual. Los seis finales tienen ahora explicación detallada de precondiciones y consecuencias específicas.

### Cross-links añadidos
Cada evento expandido referencia ahora múltiples eventos relacionados (`relatedTimelineEvents`), creando malla densa de navegación cronológica. Algunos eventos referenciados (como `gloam-eyed-queen-fall`, `aeonia-bloom`, `mohg-toma-miquella`, `morgott-mohg-imprisonment`) podrían no existir aún como entradas dedicadas — quedan como pendientes para Phase 7 audit de cross-links.

---

## Phase 6 — Regiones expandidas (completa)

Aplicada en sesión 2026-04-29.

### Audit inicial
De `regionsLore.ts` (18 entradas mayores totales):
- **0 con estructura completa** — solo `limgrave` tenía 2 buckets parciales (confirmed/inferred)
- **18 expandidas** en Phase 6 al estándar de 5-6 secciones + 4 buckets + cross-links completos

`regionsDeepLore.ts` ya tenía 12 subregiones con estructura completa (castle-morne, caria-manor, three-sisters, siofra-river, ainsel-river, sellia, redmane-castle, subterranean-shunning-grounds, volcano-manor, ordina, elphael, dragonbarrow) — no se tocaron en esta fase.

### Estructura estándar para región (post Phase 6)
1. Resumen extendido (1-2 párrafos en `summary`)
2. **Geografía** (ubicación, conexiones, subdivisiones)
3. **Historia detallada** (puede dividirse en sub-secciones temáticas)
4. **Estado actual** (post-fractura)
5. **Significado simbólico**
+ Buckets: `confirmed` (5-7), `inferred` (3-4), `theories` (3-4), `ambiguous` (3-4)
+ Cross-links completos a personajes, facciones, regiones, conceptos, eventos, finales

### Bloques expandidos
- **Bloque 1 — Núcleo del Orden (5)**: limgrave, liurnia, caelid, altus-plateau, leyndell
- **Bloque 2 — Periferia cosmológica (5)**: mountaintops, mt-gelmir, haligtree, farum-azula, deeproot-depths
- **Bloque 3 — Fortalezas y zonas tóxicas (4)**: stormveil, mohgwyn, lake-of-rot, consecrated-snowfield
- **Bloque 4 — Academia y subterráneas (4)**: raya-lucaria, peninsula-llorosa, nokron, nokstella

### Bundle impact
- `lore-regions` chunk: 69.76 kB → 170.85 kB (23 → 52 kB gz)
- Index sin cambio significativo (chunk lazy-loaded)

### Helpers añadidos en regionsLore.ts
- `em(text)` — para énfasis inline (no estaba antes)

### Característica especial: estratos cosmológicos por región
Cada región expandida documenta los estratos cosmológicos superpuestos que la conforman: civilizaciones pre-Orden bajo la superficie, régimen actual operando con grietas progresivas, regímenes alternativos cosmológicamente activos en zonas específicas. Limgrave esconde Crisol bajo catacumbas; Liurnia es palimpsesto cosmológico de tradiciones Caria + Nox + Orden; Leyndell tiene tres estratos subterráneos contradictorios (alcantarillas Omens, raíces Deathroot, cripta de los Tres Dedos); Mt. Gelmir tiene fachada Volcano Manor sobre entidad serpentina pre-Crisol. La operación analítica documenta cómo cada región es geografía cosmológicamente densa.

---

## Phase 7 — Polish final + verificación canon (completa)

Aplicada en sesión 2026-04-29.

### Audit inicial: cross-links rotos
Se creó `scripts/audit-cross-links.mts` que escanea todos los lore files y reporta referencias rotas en `relatedX` arrays + `link()` calls en deepLore. Resultado inicial: **108 referencias rotas a 28 entidades únicas**.

### B1 — Audit script
Script reutilizable que verifica cada `relatedCharacters/Regions/Factions/Concepts/TimelineEvents/Endings` y cada `link()` call contra los IDs existentes en cada capa. Reportado por entidad-tipo, frecuencia, y origen.

### B2 — Reducción de refs rotas: dos estrategias combinadas
1. **Tolerancia en render** (`RichLoreText.tsx`): si un `link(label, type, slug)` no resuelve a entidad existente, se renderiza como texto enfático con underline punteado en lugar de `<Link>` que llevaría a 404. Tooltip "Referencia mencionada pero sin página dedicada todavía".
2. **Stubs base para los más referenciados** (7 nuevas entradas):
  - `factions.ts`: `haligtree` (×13 refs), `crucible-knights` (×9)
  - `glossary.ts`: `fingerslayer-blade` (×9), `gravity-magic` (×9)
  - `characters.ts`: `astel` (×9)
  - `regions.ts`: `aeonia` (×5), `mistwood` (×1)

Resultado: **108 → 61 refs rotas**. Las 61 restantes son timeline events sub-atómicos que ya degradan gracefully.

### B3 — Lazy loading de pages
12 detail/secondary pages convertidas a `React.lazy(() => import(...))` con `Suspense` fallback. Cada page ahora es chunk independiente. **Index bundle: 483 → 411 kB (140 → 122 kB gz, -13%)**. Reducción real de carga inicial significativa.

### B4 — UI polish: EmptyState reutilizable
Componente nuevo `src/components/EmptyState.tsx` con tres variantes (search, filter, rune), animación fade-in, iconografía coherente, y botón opcional CTA. Aplicado en CharacterSection, FactionSection, RegionSection, GlossarySection, TimelineSection. El botón "Limpiar todos los filtros" ahora resetea search + certainty + tags + sort en una operación.

### B5 — Accesibilidad
- `TagPill`: `type="button"` + `aria-pressed` cuando es toggleable
- `FilterBar` certainty chips: `role="radiogroup"` + `role="radio"` + `aria-checked`
- Confirmados focus-visible existentes (2px solid gold con offset 2px)
- Confirmado `prefers-reduced-motion` ya respetado
- `aria-label` consistente en todos los icon-only buttons (verificado en EntityGraph, FilterBar, TagPicker, GlossaryModal, TimelineRibbon, DetailLayout, SidebarNav, BookmarkButton)

### B6 — Cierre y verificación final
Build limpio. Final stats:
- Initial bundle: 122 kB gz (vs 140 kB pre-Phase 7)
- 12 page chunks lazy-loaded (1-3 kB gz cada uno)
- DetailLayout shared chunk: 5.3 kB gz
- 7 lore chunks lazy-loaded por categoría
- Cero TS errors, cero broken `<Link>` reachable

### Pendientes documentados (no bloqueantes)
- **61 refs a timeline events sub-atómicos** que solo aparecen como menciones en `relatedTimelineEvents` y son filtradas automáticamente por `resolveTimelineIds`. No producen UX visible degradado. Si se quisiera completarlos plenamente, requeriría crear ~15 nuevos timeline events base con lore propio.
- **Canon vs comunidad audit**: skipped por ser subjetivo y labor-intensivo. Cada bucket `confirmed/inferred/theories/ambiguous` ya distingue intencionalmente entre estos niveles en cada entrada expandida.

---

## Phase 9 — UX Polish + QoL (completa)

Aplicada en sesión 2026-04-29.

### B1 — Bug fixes consolidados
- `TimelineRibbon.tsx` — eliminadas clases Tailwind no funcionales del scrollbar; mantenido `scrollbarWidth: 'thin'` inline para Firefox y selectores nativos para WebKit.
- `LandingPage.tsx` — reescrita para usar `<Link>` (componente `CtaLink`) en vez de `onNavigate` callback. Stats actualizados a `70+ Capítulos · 190+ Personajes · 32 Facciones · 30+ Regiones`.
- `App.tsx` — la ruta `/` simplificada a `<LandingPage />` (sin prop `onNavigate`).

### B2 — Filtros sincronizados con URL
Hook nuevo `src/lib/useFilters.ts` con firma `useFilters<TSort>({ defaultSort, validSorts, withSecondaryTags? })`. Sincroniza con `URLSearchParams`:
- `q` — search query
- `cert` — certainty filter
- `tags` — tags activos (CSV)
- `factions` — secondary axis tags (solo si `withSecondaryTags: true`)
- `sort` — sort option (validado contra `validSorts`)

Aplicado en `CharacterSection`, `FactionSection`, `RegionSection`, `GlossarySection`, `TimelineSection`. Reemplazó múltiples `useState` por una sola llamada al hook. Beneficios: link compartible reproduce filtros, recargar la página los preserva, back/forward del browser navega entre estados.

### B3 — Animaciones FLIP
Añadido `layout` prop a `motion.article` en `FactionCard`, `RegionCard`, `TimelineEntryCard` (CharacterCard ya lo tenía). Con `transition={{ layout: { duration: 0.3 } }}` Framer Motion calcula el FLIP automáticamente. Al filtrar, las cards reordenan suavemente en vez de saltar.

### B4 — BackToTop component
Nuevo `src/components/BackToTop.tsx`. Escucha scroll, muestra botón flotante (bottom-6 right-6, fade in vía AnimatePresence) cuando `window.scrollY > threshold` (default 400). Click hace `scrollTo({ top: 0, behavior: 'smooth' })`. Renderizado dentro de `DetailLayout` para que existe en todas las páginas detalle automáticamente.

### B5 — Accesibilidad
- **Focus trap en GlossaryModal**: cuando una entrada se abre, el primer focusable recibe focus, Tab/Shift+Tab cicla dentro del modal, Escape cierra, y al cerrar el focus vuelve al elemento previamente activo. Modal lleva `role="dialog"`, `aria-modal="true"`, `aria-labelledby="glossary-modal-title"`, `id` en h3.
- **Body scroll lock en sidebar móvil**: `useEffect` en `SidebarNav.tsx` setea `document.body.style.overflow = 'hidden'` mientras el cajón está abierto y restaura el valor previo al cerrarlo. Impide scroll del fondo cuando el sidebar móvil está visible.
- **aria-current** ya viene automático vía `NavLink` de React Router en SidebarNav (no requiere cambio).
- **Color contrast** ya conforme con focus-visible globales (2px solid gold con offset).

### B6 — Verificación + docs
- `npm run build` limpio. Bundle final initial: 445.75 kB (132.56 kB gz) — sin cambio significativo desde Phase 8 (los nuevos componentes son small).
- `scripts/audit-cross-links.mts` confirma `✅ All cross-links resolve. Zero broken references.`
- `agent.md`, `memory.md`, `PHASES.md` actualizados.

### Bundle impact
- Initial bundle: 132 → 132.56 kB gz (+0.5 kB por useFilters + BackToTop + focus trap + scroll lock)
- Sin cambios en chunks lore (no se tocó contenido).
- Sin nuevas dependencias.

### U2 — Botón compartir (excluido a petición del usuario)
"haz la phase 9, menos el boton compartir" — quedó fuera del alcance. Si se quisiera implementar después: copy-link-to-clipboard en hero de DetailLayout con feedback visual ("Enlace copiado"). El sistema de URL-synced filters de B2 ya hace que cualquier link sea estable y compartible.

---

## UX expansion (post-Phase 9, completa)

Conjunto de mejoras que rebasan el alcance de Phase 9. Aplicadas durante la sesión 2026-04-29/30.

### Tag pages cross-categoría
- `src/lib/tagAggregator.ts` — `slugifyTag` (lowercase + diacritics strip + non-alnum to hyphen), `findEntriesByTag`, `getAllTags`, `tagPath`. Indexa todos los tags de characters/factions/regions/timeline al cargar el módulo.
- `src/pages/TagPage.tsx` — agrupa resultados por tipo, muestra suggestions cuando el slug no resuelve, bloque "otras etiquetas" con conteos. Ruta `/etiqueta/:slug` lazy-cargada.
- `TagPill` reescrito: con `onClick` sigue siendo botón-toggle (filtros), sin `onClick` se vuelve `<Link to={tagPath(tag)}>`. Eliminó el dead-end donde un tag clicado solo filtraba la sección actual.

### Reading history + "Continuar leyendo"
- `src/lib/readingHistory.ts` — localStorage `codex-reading-history-v1`, capped a 24 entradas, custom event sync. `recordVisit()` y hook `useReadingHistory()`.
- `DetailLayout` registra cada visita vía useEffect (deps en bookmark.slug + title + subtitle). Datos: type, slug, label, sublabel.
- `LandingPage` muestra hasta 6 visitas recientes como cards con icono por tipo, solo aparece cuando hay historial.

### PageSkeleton
- `src/components/PageSkeleton.tsx` con tres variantes: `detail` (hero band + tags + parágrafos + sidebar shapes), `list` (filter bar + grid 2-3 cols), `generic` (bloques sueltos).
- `App.tsx` Suspense fallback usa `pageSkeletonVariant(pathname)` para elegir según ruta.

### Mobile ToC bottom-sheet
- `MobileToC` inline en `DetailLayout`: botón flotante `bottom-left` (`lg:hidden`), drawer con `motion.aside` que sube desde el bottom usando spring. Lock de scroll mientras abierto, cierra en Escape. Detecta TimelineDetailPage para subir el botón a `bottom-20` y no chocar con `ChronoFloatingBar`.
- Tap en heading scroll smooth tras `requestAnimationFrame` (espera a que el body-overflow se restaure).

### Random entry button
- `randomEntryPath()` en `lookups.ts` — recorre las 6 categorías y genera ruta `pathFor`-equivalente. `SidebarNav` añadió botón `Shuffle` arriba del Reading Mode toggle.

### Certainty tooltip
- `CertaintyBadge` añade `title` con explicación específica por nivel y `cursor-help`. Solución nativa, accesible, sin coste runtime.

### j/k shortcuts
- `DetailLayout` escucha keydown global, navega `next.to` con `j` y `prev.to` con `k`. Inerte si el target es input/textarea/contenteditable o si hay modificador (Cmd/Ctrl/Alt).

### ScrollToTop global + fix de routing
- `src/components/ScrollToTop.tsx` (nuevo) — listener de `useLocation`, scroll-to-top en cambio de pathname, scroll-to-anchor con retry de 250 ms si hay hash, no interfiere si solo cambia el hash (ToC clicks).
- `App.tsx`: `<Routes location={location}>` explícito + `<Suspense>` movido **fuera** de `<AnimatePresence>`. Fix del bug clásico AnimatePresence + React Router v6 donde el `motion.div` viejo durante exit re-renderizaba el contenido nuevo (causaba flicker en "Leer más" → detalle).
- `BackToTop` con `bottom-20` en `/timeline/:slug` para no chocar con `ChronoFloatingBar`.
- DetailLayout removió su `useEffect(() => window.scrollTo({top:0}), [title])` redundante ahora que el reset es global.

### SVG illustrations rewrite
- `GoldenTree.tsx` — rediseño completo: 11 capas (aureola, rayos, halo, raíces, mist, tronco, ramas en 3 niveles, copa multi-cloud, orbes parpadeantes, hojas cayendo, estrella-corona). Determinístico, sin `Math.random()` en render.
- `BrokenRing.tsx` — anillos concéntricos con rupturas en ángulos distintos, sparks gemelos en cada break, fragmentos a la deriva, glyph cruz central pulsante.
- `RuneSeparator.tsx` + `RuneOrnament` — heráldica refinada con flares cardinales, ticks múltiples, 8-pointed star.
- `FallbackIllustrations.tsx` — 24 escenas reescritas con helpers nuevos (`StarField` con cross-flares, `LightRays`, `Vignette` multi-stop, `GoldFrame` refinado). Cada escena con 8-15 elementos compuestos (gradients, masks, particles).

### Bundle impact (UX expansion)
- Initial bundle: 132.75 → 142.44 kB gz (+9.7 kB)
- Nuevos chunks: TagPage 2.09 kB gz
- DetailLayout: 5.59 → 6.23 kB gz
- Nuevas dependencias: ninguna

---

## Phase 10 — Las 7 Grandes Runas individuales (completa)

Aplicada en sesión 2026-04-29.

### Objetivo
El concepto `great-rune` general existía como concept único. Cada shardbearer tiene runa con lore propio cosmológicamente significativo. Phase 10 promovió cada una a entrada dedicada.

### Las 7 entradas
1. `godricks-great-rune` — linaje diluido, +5 a todos atributos
2. `radahns-great-rune` — vitalidad marcial, +15% HP/FP/stamina
3. `morgotts-great-rune` — obstinación obstinada, +25% HP (la más alta)
4. `mohgs-great-rune` — pacto sangriento compartido, heal a aliados con flask
5. `rykards-great-rune` — devoración como teología, recuperación al impactar
6. `malenias-great-rune` — regeneración continua contra dios externo
7. `great-rune-of-the-unborn` — única no-de-combate, redistribución de atributos

### Estructura
Cada runa con summary + 3 secciones (Naturaleza / Mecánica u Origen / Significado simbólico) + 4 buckets + cross-links plenos. Cada una conecta cosmológicamente con su shardbearer, su region/dinastía, y los conceptos relevantes.

### Bundle
lore-glossary chunk: 158.84 → 184.29 kB (45.54 → 53.16 kB gz, +7.6 kB gz).

---

## Phase 11 — Armas legendarias (completa)

8 armas con lore propio significativo, todas como entradas en glossary:

1. `bolt-of-gransax` — monumento dragón en Leyndell
2. `sword-of-night-and-flame` — síntesis Carian fuego+luna
3. `helphens-steeple` — Llama Fantasma de los ritos pre-Orden
4. `eclipse-shotel` — culto Carian del eclipse de sangre
5. `devourers-scepter` — instrumento ritual de Bernahl/Volcano Manor
6. `ruins-greatsword` — fragmento meteórico cosmológico (Astel-related)
7. `marais-executioners-sword` — ejecutores oficiales del Orden, usurpada por Elemer
8. `marikas-hammer` — el instrumento exacto de la Fractura

### Bundle
lore-glossary: 184.29 → 207.88 kB (53.16 → 60.44 kB gz).

---

## Phase 12 — Cenizas espirituales clave (completa)

3 cenizas con lore cosmológicamente significativo:

1. `black-knife-tiche` — la ceniza más poderosa del juego, hija de Alecto, técnica del Cuchillo Negro preservada
2. `lhutel-the-headless` — caballera Nox jurada al linaje monárquico depuesto
3. `banished-knight-oleg` — disciplina marcial Storm-Hawk pre-Orden conservada

---

## Phase 13 — Sacramento físico (completa)

1. `stake-of-marika` — micro-sacramentos territoriales plantados por la propia Marika antes/durante la Fractura. Documenta la dimensión "cariñosa" del régimen.

---

## Phase 14 — Reliquias remembrance + conceptos cosmológicos finales (completa)

12 entradas adicionales (ronda final) cerrando el Tier 1 de contenido pendiente:

### 8 armas remembrance (con peso cosmológico)
1. `blasphemous-blade` — doctrina runica de Rykard hecha objeto, hoja "habla" con Eiglay residual
2. `rivers-of-blood` — confirma culto sangriento como religión geopolítica más allá de Mohg
3. `inseparable-sword` — pacto Godfrey/Serosh hecho herramienta
4. `maliketh-black-blade` — única arma del juego que opera Muerte Predestinada genuina (reduce HP máximo)
5. `dark-moon-greatsword` — primer instrumento ritual de la Era de las Estrellas
6. `mohgwyn-sacred-spear` — tridente sacerdotal, simbología trinitaria del culto
7. `dragon-king-cragblade` — reliquia portable más antigua, régimen Dragón pre-Orden
8. `bastards-stars` — anomalía cosmológica, fragmentos extraídos del cuerpo de Astel

### 4 conceptos cosmológicos finales
1. `wondrous-physick` — sacramento marcial paralelo a Estacas, con Lágrimas de Cristal
2. `sites-of-grace` — infraestructura literal del peregrinaje cosmológico
3. `roundtable-hold` — bolsillo temporal estabilizado por los Dos Dedos
4. `storm-hawk-king` — figura histórica fundacional referenciada por descendencia

### Bundle final post-Phase 14
- Initial: 149.52 → 155.23 kB gz (+5.7 kB gz)
- lore-glossary: 64.60 → 76.00 kB gz (la más densa del codex)
- 0 referencias rotas verificadas

### Cierre canon
Tras Phase 14, el codex cubre objetivamente todo el contenido cosmológicamente significativo del juego base. Lo que quedaría (talismanes individuales, cookbooks, smithing stones, etc.) sería encyclopedia, no codex. La decisión declarada fue: parar después del Tier 1.

---

## Problemas resueltos durante el desarrollo

### Build error: noUnusedLocals
Recurrente cuando se añaden imports y luego se eliminan. Solución: `npx tsc --noEmit` después de cada edit grande.

### Helpers `em`/`q`/`ul` declarados sin usar
Al copiar el patrón de helpers entre archivos `*Lore.ts`, a veces sobran. Eliminar sin pensar. En Phase 2 añadí `em` a `factionsLore.ts` solo después de confirmar que lo usaría.

### CSS warning en build (EndingsSection)
`EndingsSection` usa template literals en estilos inline (`0 0 40px ${ending.bgGlow}`).
Vite los ve como CSS crudo al minificar y lanza warnings. No es error; funciona en runtime. No requiere fix.

### CRLF warnings al hacer git add
Es normal en Windows con `core.autocrlf=true`. No requiere acción.

### LandingPage onNavigate type
LandingPage acepta una prop `onNavigate?` opcional. Se usa para navegar desde los CTAs de la portada. La firma cambió cuando se introdujo React Router (de `Section` literal a `string`).

### Edit/Read race conditions con linters externos
Algunos editors externos modifican archivos durante operaciones largas. Si Edit falla con "File has been modified since read", basta con re-leer el archivo y reintentar.

### Tag overflow en filtros (resuelto en Phase 1)
Las facciones y conceptos tienen 30-50+ tags únicos. Mostrarlos linealmente en chips saturaba el viewport. Solución: TagPicker con top-N visible (default 6) + cajón colapsable con búsqueda interna.

---

## Patrones a respetar

### Estructura de major character page (12 secciones)
1. Resumen esencial
2. Rol en el mundo
3. Historia detallada
4. Motivaciones
5. Relaciones importantes
6. Eventos clave
7. Consecuencias
8. Simbolismo / interpretación temática
9. Conexiones internas

Más buckets:
- Hechos confirmados
- Inferencias fuertes
- Teorías razonables
- Ambigüedades abiertas

### Estructura de faction deep lore (5 secciones, post Phase 2)
1. Resumen esencial
2. Origen / Fundación / Origen ecológico (según tipo)
3. Doctrina / Función / Estructura interna
4. Estado actual / Crisis post-fractura / Caída
5. Significado simbólico

### Estructura de timeline event (4 secciones)
1. Resumen del evento
2. Historia detallada
3. Causas y consecuencias
4. Significado simbólico

### Estructura de subregion deep (5 secciones)
1. Resumen del lugar
2. Historia detallada
3. Estado actual
4. Tragedia oculta
5. Significado simbólico

### Estructura de compact character (3-4 secciones)
1. Resumen esencial
2-3. Secciones temáticas
4. Significado simbólico (opcional)

### Tono de escritura
Spanish prose. Mezcla entre wiki article + dark fantasy codex + lore essay + archaeological report. Evitar memes, evitar certeza no soportada, hacer ambigüedad explícita.

### Convenciones de buckets
- **confirmed**: hecho directamente afirmado en items o diálogo del juego
- **inferred**: consecuencia lógica fuerte sostenida por la cosmología, no enunciada literalmente
- **theories**: lectura comunitaria popular pero no sostenida por items específicos — siempre marcar como teoría
- **ambiguous**: pregunta abierta que el juego no responde

---

## Convenciones de git

- **NO committer sin pedido explícito del usuario.**
- Cuando se commitee: solo source code, README, example config, `.gitignore`, lore supplements, coverage plan/report. **Nunca** `image-sources.local.json` ni archivos de `public/art/*` (excepto `.gitkeep`).
- `agent.md`, `memory.md` y `PHASES.md` permanecen untracked deliberadamente (docs personales del usuario).
- Mensajes de commit en formato: párrafo de resumen + secciones con bullets de qué cambió + nota de build/coverage al final.
- Remote: `https://github.com/KCMO4/Elden-Ring-Codex.git` rama `main`.
- Última head: commit `2bc6ac7` (rutas narrativas + lectura cronológica + visual timeline).

---

## Pendientes y posibles mejoras futuras

Ver `PHASES.md` para el plan completo. En cualquier sesión futura, abrir ese archivo para ver qué fase corresponde siguiente.

### Imágenes locales no configuradas
El usuario aún no ha poblado `public/art/` ni `public/image-sources.local.json`. La portada y todas las páginas funcionan con sigilos SVG fallback. Esto es intencional — el sistema soporta imágenes locales pero no requiere ninguna.

### Bundle size
Chunks actuales (gzipped, post Phase 14):
- **index: 155.23 kB** (vs 132 kB post-Phase 9; +9.7 kB por UX expansion + ~12 kB por contenido Phases 10-14 propagado a SVGs y rutas)
- lore-glossary: **76 kB** (la más densa, post Phase 14 — 90 entradas con deep lore)
- lore-characters-deep: 68 kB
- lore-characters: 55 kB
- lore-regions: 52 kB
- vendor-react: 51 kB
- lore-timeline-deep: 45 kB
- vendor-motion: 43 kB
- lore-factions: 40 kB
- lore-timeline: 28 kB
- DetailLayout: 6 kB (shared, +0.6 kB por MobileToC + history + j/k)
- narrativeRoutes: 7 kB
- TagPage: 2.09 kB (lazy)
- 13 page chunks individuales: 1-3 kB cada uno
- vendor-icons: 3 kB

Initial download para un usuario que llega a `/`: **~155 kB gz** (index) + **~52 kB gz** (vendor-react) = ~207 kB gz. Las páginas detalle se cargan bajo demanda (PageSkeleton aparece mientras tanto). Los chunks lore se cargan al visitar la categoría correspondiente.

### Decisiones arquitectónicas tardías (UX expansion + Phase 10-14)

**ScrollToTop fuera de AnimatePresence** — `<Suspense>` debe envolver `<AnimatePresence>` y `<Routes location={location}>` debe pasar location explícita. Sin esto, AnimatePresence + Router v6 produce flicker al navegar a páginas detalle (el motion.div viejo durante exit re-renderiza con la nueva location). Es el bug más sutil que se arregló.

**TagPill polimórfico** — botón cuando se le pasa onClick (filtros), Link cuando no (navegación a tag page). Mantiene un solo componente para dos roles narrativos sin duplicación.

**Reading history como hook + función pura** — `recordVisit()` es función pura imperativa (puede llamarse desde useEffect sin dependencia del hook), `useReadingHistory()` solo lee y se sincroniza. Patrón más flexible que un solo hook combinado.

**MobileToC inline en DetailLayout** — no se extrajo como componente separado porque solo lo usa DetailLayout y comparte el contexto de `headings`. Si en el futuro se necesita en otra layout, extraer.

**Glossary como bucket de "sacramentos físicos"** — Estaca de Marika, Wondrous Physick, Sites of Grace, Roundtable Hold son mecánicas con teología, no objetos individuales. Encajan en glossary (concepts) en lugar de crear un nuevo entity type.

### Características no implementadas (decisiones explícitas)
- No hay sistema de comentarios ni autenticación (codex personal localhost)
- No hay sistema de búsqueda full-text indexada (la búsqueda es lineal con `Array.filter` + `flattenLore` + `extractSnippet`, suficiente para 375 entradas)
- No hay i18n (UI siempre en español)
- ~~No hay botón compartir~~ → añadido en glow-up final (`ShareButton` copy-link via clipboard)
- No se cubre Tier 2/3 (talismanes individuales, cookbooks, smithing stones) por decisión explícita: cruza de "codex de lore" hacia "wiki del juego"

---

## Image audit + AI upscaling (sesión 2026-04-30)

### Pipeline de imágenes establecido
- `scripts/fandom-fetch.mjs` — scraper del wiki Fandom con headers de bypass de Cloudflare (`Accept: text/html`, `Accept-Language: en-US`, `Accept-Encoding: identity`, `Cache-Control: no-cache`) + selección de mejor imagen por área (probar primeras 8 candidatas y elegir la de mayor área, no la primera que pasa el threshold).
- `scripts/upscale-batch.mjs` — invoca el binario Real-ESRGAN ncnn-vulkan (`tools/realesrgan-ncnn-vulkan.exe`) con modelo `realesrgan-x4plus-anime` para imágenes ≤1080p, expandiéndolas 4x.
- `scripts/compress-upscaled.py` — Pillow recomprime los outputs upscale a JPEG q90 con max edge 2400px (suficiente para 4K-grade).
- `scripts/verify-upscaled.py` — confirma dimensiones finales ≥1080px en menor edge.
- `scripts/visual-grids.py` — genera thumbs grid via Playwright para QA visual rápida.

### Fixes específicos de identidad / consistencia
- 17 imágenes con identidad incorrecta corregidas (Maliketh donde iba Gloam-Eyed Queen, arma donde iba Kenneth Haight, etc.).
- 24 regiones convertidas de mapas/screenshots a vistas paisajísticas (más decorativas en cards).
- Labels de facción/región movidos fuera del overlay sobre la imagen (cubrían a Mohg en cards verticales).
- Tamaño de título de card reducido (`text-base`).

### Decisiones técnicas
- **execSync con paths Windows backslash**: el binario Real-ESRGAN bajo `cmd.exe` no acepta `./tools/...`; hay que usar `tools\\realesrgan-ncnn-vulkan.exe`. Mismo patrón para input/output paths.
- **Filter `noarticletext` en lugar de `does not exist`**: el primer filter rechazaba páginas válidas (Patches, etc.) cuyo diálogo de NPC contenía la frase literal.
- **WebP no aplicado**: aunque `convert-to-webp.py` existe, los archivos finales en `public/art/` siguen siendo `.jpg`. La conversión queda como opcional para reducción futura de espacio.

### Resultado
- **375 imágenes**, todas ≥1080p, identidad consistente, vistas (no mapas) en regiones.
- Disco actual: ~159MB para `public/art/`.

---

## Code audit + 12 fixes (sesión 2026-04-30)

Auditoría sistemática de bugs, edge cases, dead code y duplicación. 12 hallazgos aplicados:

### HIGH severity
1. **AbortController + async/await en imageSources.ts** — la cadena `.then()` original podía race con desmonte y dejar el provider en estado inconsistente. Reescrito con async/await + AbortController + cleanup en useEffect.
2. **Stale closure en DetailLayout keyboard handler** — el handler de `j`/`k` capturaba `next.to`/`prev.to` del primer render. Corregido introduciendo `nextRef`/`prevRef` actualizados en cada render via useEffect.
3. **RouteDetailPage no remontaba al cambiar `:id`** — agregado `key={id}` a los componentes internos para forzar remount limpio.

### MEDIUM
4. **5 duplicados de `CERTAINTY_RANK`** consolidados en `src/lib/certaintyRank.ts` (single source of truth).
5. **5 duplicados de `buildTagOptions`** consolidados en `src/lib/filterHelpers.ts` con generic `<T>` + `compareByCertainty<T>()`.
6. **6 funciones `findX` y `resolveX`** específicas reemplazadas por `findBySlug<T>` y `resolveByIds<T>` genéricas en `lookups.ts`.
7. **`assetPaths.ts` tenía 3 fns redundantes** colapsadas a `categoryToArtPath` única; `ROUTE_PREFIX: Record<EntityType, string>` extraído como mapping declarativo.
8. **Heading IDs duplicados en RichLoreText** (mismas h2/h3 producían IDs colisionados → ToC rota). Fix: contador interno por slug.

### LOW
9. **Color contrast bajo** en `gold-dim`, `parchment-dim`, `crimson`, `rot` — subidos un escalón (#9c7d4a, #c8baa0, #a73a3a, #8c3960). User-reported.
10. **`FallbackIllustrations.tsx` (~1953 líneas) eager-loaded** aunque el caso común es que existe imagen → split como chunk lazy `fallback-illustrations` en `vite.config.ts` manualChunks. Ahorro: ~10 kB gz del initial.
11. **`coveragePlan.ts` referenciaba entradas obsoletas** — limpiado, helpers preservados.
12. **`endingFallbacks` no se usaba** (los 6 finales tienen imágenes asignadas) → eliminado.

### Bundle impact
- Initial: 155 → 148 kB gz (-7 kB, principalmente fallback-illustrations chunk separado).

---

## Terminology rename: Interregno → Tierras Intermedias (sesión 2026-04-30)

### Motivación
El usuario pidió cambiar la traducción "Interregno" por "Tierras Intermedias" (más correcta: *Lands Between*).

### Implementación
- `scripts/rename-interregno.mjs` — regex-based replacement preservando concordancia masculino/femenino (singular/plural) en artículos: `el Interregno → las Tierras Intermedias`, `del Interregno → de las Tierras Intermedias`, etc. **581 reemplazos**.
- `scripts/fix-tierras-grammar.mjs` — fix de concordancia adjetivos/verbos tras el rename (sg.masc → pl.fem):
  - Adjetivos: ~22 patrones (`entero → enteras`, `fracturado → fracturadas`, `quebrado → quebradas`, `golpeado → golpeadas`, `roto → rotas`, etc.)
  - Verbos: `es → son`, `está → están`, `entiende → entienden`, etc.
  - **56 fixes adicionales**.
- Edge cases manuales con `sed`: `"todo las Tierras Intermedias" → "todas las Tierras Intermedias"`, `"mucho las → muchas de las"`.

### Verificación
- `grep -r "Interregno" src/` → **0 matches**.
- `grep -r "Tierras Intermedias" src/` → **571 matches** (post-rename).

### Constraint crítico mantenido
**Cero contenido SOTE/DLC** durante el rename y las nuevas entradas. Solo lore del juego base.

---

## 7 nuevas entradas (orphan-mention-driven) (sesión 2026-04-30)

### Auditor de menciones huérfanas
`scripts/audit-orphan-mentions.mts` — escanea todo el lore, extrae sustantivos propios mencionados N+ veces (lookbehind regex + filtro de stopwords), y reporta los que no tienen entrada propia. Útil para decidir prioridades de expansion.

### Las 7 entradas añadidas
- **4 personajes**: extraídos del top de menciones huérfanas (top picks que tenían 5+ menciones sin página).
- **2 regiones**: subregiones referenciadas pero sin página (Fort Haight, Castle Sol entre ellas).
- **1 facción**: orden/raza referenciado pero sin página.

### Resultado
- 374 → 375 entradas. Todas con deep lore + cross-links + buckets, mismo standard que el resto del codex.

### `reports/new-entries-images.json`
Pipeline registrado para fetchear imágenes específicas de las nuevas entradas; quedó como artefacto en `reports/` (gitignored).

---

## Glow-up UI final (sesión 2026-04-30)

### Componentes nuevos
- **`src/components/FeaturedEntry.tsx`** — entrada destacada en portada con rotación determinística (hash day-of-year). Reemplaza el primer slot estático del landing. Garantiza variedad sin servidor.
- **`src/components/ShareButton.tsx`** — copy-link via clipboard API con feedback "Copiado" temporal. Añadido en hero de cada DetailLayout.
- **`src/components/CornerOrnaments.tsx`** — esquineros decorativos (corchetes dorados); props `size="sm"|"md"`, `corners="all"|"top"`. Usado en hero, cards destacadas, modal frames.
- **`src/pages/CategoryReadingPage.tsx`** — modo lectura full-categoría en `/lectura/:category`, recorre todas las entradas de un tipo en orden con navegación lineal.

### Efectos visuales
- **Hero parallax** — `useScroll` + `useTransform` en DetailLayout aplicado a la imagen del hero (movimiento sutil al scroll).
- **Hover gold glow** — multi-layer (shadow + ring + scale) en `CharacterCard`, `FactionCard`, `RegionCard`. Label movido fuera del overlay (cubría imágenes verticales como Mohg).
- **Skeleton shimmer** — clase `.codex-shimmer` (keyframe `codex-shimmer-slide` en `index.css`) en PageSkeleton placeholders.
- **Prefetch de hero adyacente** — DetailLayout precarga las imágenes de prev/next entry para que `j`/`k` tenga frame instantáneo.

### Decisiones de implementación
- **Day-of-year hash**: `(getDate() + getMonth()*31 + getYear()) % entries.length` — determinístico, mismo resultado durante todo el día, rota cada medianoche.
- **Refs para keyboard handler**: `nextRef`/`prevRef` en lugar de dependency array para evitar el bug de stale closure (uno de los 12 code fixes).
- **`CornerOrnaments` con polimorfismo de tamaño**: dos tamaños fijos en lugar de prop `size: number` continua → suficiente y más limpio.

### Bundle impact
- CategoryReadingPage chunk lazy: 2.17 kB gz.
- DetailLayout: 5.59 → 6.02 kB gz (+0.4 kB por parallax + share + prefetch).
- Initial: sin cambio significativo (componentes nuevos son small + lazy).

---

## Cleanup + polish (sesión 2026-04-30)

### Disk + housekeeping
- **`.trash-art/` y `reports/`** añadidos a `.gitignore` (intermediate files de pipeline).
- **`tools/`** añadido a `.gitignore` (binario Real-ESRGAN, ~150MB no committeable).
- **`MapPage.tsx`, `InteractiveMap.tsx`, `regionMap.ts`** removidos (feature de mapa interactivo no se mantenía estable).

### React Router v6 → v7 future flags
`BrowserRouter` lleva `future={{ v7_startTransition: true, v7_relativeSplatPath: true }}` para silenciar warnings y preparar migración.

### `RouteDetailPage` key+remount
Pasar `key={id}` fuerza remount limpio al navegar entre rutas narrativas (`/rutas/:id`); evitaba que el estado interno persistiera entre rutas.

### `RichLoreText` heading IDs únicos
Counter interno por slug evita colisiones cuando una página tiene dos h2 con el mismo texto.

---

## Estado del bundle (final, post sesión 2026-04-30)

```
index                       148.33 kB gz   (initial)
lore-glossary                76.08 kB gz   (más densa)
lore-characters-deep         68.02 kB gz
lore-characters              55.01 kB gz
lore-regions                 51.76 kB gz
vendor-react                 51.50 kB gz
lore-timeline-deep           44.60 kB gz
vendor-motion                43.28 kB gz
lore-factions                40.18 kB gz
lore-timeline                27.87 kB gz
fallback-illustrations       10.67 kB gz   (lazy, only-if-needed)
DetailLayout                  6.02 kB gz   (shared)
narrativeRoutes               6.60 kB gz
vendor-icons                  3.17 kB gz
SearchPage                    3.06 kB gz
RouteDetailPage               2.42 kB gz
GenealogyPage                 2.39 kB gz
CategoryReadingPage           2.17 kB gz
TagPage                       2.11 kB gz
TimelineDetailPage            1.97 kB gz
BookmarksPage                 1.69 kB gz
RichLoreText                  1.45 kB gz
CharacterDetailPage           1.35 kB gz
FactionDetailPage             1.26 kB gz
... (otros detail pages 1-2 kB gz cada uno)
```

**Initial download de un usuario que llega a `/`**: ~155 kB gz (index) + ~52 kB gz (vendor-react) ≈ 207 kB gz. Detail pages bajo demanda. Lore chunks por categoría visitada.

---

## Emergency fix: WebP-as-jpg silent breakage (sesión 2026-04-30, post-doc-update)

### Problema
Usuario reportó "imágenes corruptas" en Corhyn, Gowry, Shabriri, Diallos, Boc, Albus, Eleonora, Pidia, Mad Tongue Alberich, Finlay, varias facciones (Cleanrot Knights, Fire Giants, Banished Knights, Hombres de Arcilla, Hechiceros de Espinas, Caballeros del Haligtree, Lords Alabastro, Orden Dorado), etc.

### Causa raíz
**Los 375 archivos `.jpg` en `public/art/` eran en realidad WebP** con extensión `.jpg`. El script `convert-to-webp.py` de una sesión anterior produjo outputs WebP pero los guardó con extensión `.jpg`. El servidor responde `Content-Type: image/jpeg` para `.jpg`, el navegador intenta decodificar como JPEG, falla porque el contenido es WebP magic bytes (`RIFF...WEBP`) → "imagen rota".

Pillow detectaba `format == 'WEBP'` correctamente, lo que confirmó la divergencia. La sesión anterior reportó "WebP no aplicado" pero esto era falso — la conversión SÍ se hizo, solo que con extensión incorrecta.

### Fix
Pillow loop sobre `glob.glob('public/art/*/*.jpg')`:
- `if im.format != 'JPEG'`: convertir a `RGB` si necesario, `im.save(path, 'JPEG', quality=90, optimize=True, progressive=True)`.
- 375 archivos convertidos a JPEG real en una pasada (~30 s).
- Verificación: 0 mismatches restantes.

### Decisión documentada
**`scripts/convert-to-webp.py` no se debe ejecutar más** sin renombrar a `.webp`. El script queda en el repo como referencia histórica pero la documentación lo marca explícitamente como peligroso si se aplica con la extensión `.jpg` por defecto.

### Identidad colateral resuelta
- `irina.jpg` y `edgar.jpg` eran exactamente el mismo archivo (mismo MD5). Fandom devolvió la misma imagen compartida en ambos pages → mantener `edgar.jpg`, borrar `irina.jpg` (fallback SVG renderiza para Irina). Razón: Irina y Edgar aparecen juntos en su escena de Castle Morne; el wiki usa el mismo screenshot.
- `stormhawk-deenh.jpg` era literalmente `godfrey.jpg` copiado (mismo MD5). Fandom no tiene página dedicada para Stormhawk Deenh (es referenciado, no NPC). Borrar el archivo → fallback SVG.

---

## Erdtree → Árbol Áureo (sesión 2026-04-30)

### Motivación
Usuario aclaró que la traducción correcta de "Erdtree" en español oficial es **"Árbol Áureo"** (no "Árbol del Inmenso", traducción in-house que veníamos usando, ni "Erdtree" en inglés).

### Implementación
`scripts/rename-erdtree.mjs` — reemplazo regex preservando IDs/slugs lowercase:
- `Erdtrees` → `Árboles Áureos` (plural primero para evitar doble-replace)
- `Erdtree` → `Árbol Áureo` (singular capitalizado)
- `Árbol del Inmenso` → `Árbol Áureo`
- `Arbol del Inmenso` (sin acento) → `Árbol Áureo`

### Diseño clave: regex case-sensitive
El regex matchea solo la forma capitalizada. IDs lowercase como `id: 'erdtree'`, `id: 'minor-erdtrees'`, `relatedConcepts: ['erdtree']` se preservan automáticamente — son identificadores internos, no texto visible.

### Verificación
- 425 reemplazos en 20 archivos.
- 0 ocurrencias restantes de "Erdtree" capitalizado / "Árbol del Inmenso".
- 397 ocurrencias finales de "Árbol Áureo".
- `audit-cross-links.mts` pasa: 0 broken refs.
- Build: 148.32 kB gz (sin cambio).

### Edge case: tag URLs
`tagAggregator.ts` slugifica los tags al cargar. La etiqueta visible "Erdtree" → "Árbol Áureo" producirá ahora slug `arbol-aureo` en vez de `erdtree`. URLs antiguas `/etiqueta/erdtree` darán empty state pero el sistema sugiere alternativas. Aceptable.

---

## Brightness boost (sesión 2026-04-30)

### Motivación
Usuario reportó que la página se veía oscura "en términos de brillo no de ambientación" — quería más luminosidad sin cambiar la estética dark fantasy codex.

### Cambios
**Toda la paleta subió un escalón de luminosidad** en `tailwind.config.js`:

| Color | Antes | Ahora |
|---|---|---|
| `codex-black` | `#0a0a08` | `#13110d` |
| `codex-brown` | `#1c1410` | `#261b15` |
| `codex-green` | `#0f1a15` | `#15211c` |
| `codex-gold` | `#c5a059` | `#d4ad62` |
| `codex-gold-dim` | `#9c7d4a` | `#b08e58` |
| `codex-gold-bright` | `#e8d5a3` | `#f2deb0` |
| `codex-parchment` | `#e3d5b8` | `#ede0c5` |
| `codex-parchment-dim` | `#c8baa0` | `#d4c8b0` |
| `codex-ink` | `#2b2118` | `#352a20` |
| `codex-crimson` | `#a73a3a` | `#bf4848` |
| `codex-rot` | `#8c3960` | `#a04270` |
| `codex-ghost` | `#4860a0` | `#5a72b5` |
| `codex-flame` | `#b56240` | `#c97352` |

### Cambios complementarios en `src/index.css`
- `body` background-color literal actualizado a `#13110d`.
- Radial gradients del fondo: opacity `0.03 → 0.05` (más calidez ambiente).
- `body { line-height: 1.65 }` y `p { line-height: 1.75 }` — reduce fatiga visual en sesiones largas.
- `.parchment-panel` — `bg-codex-brown/50 → /60`, borde `30 → 40`, glow exterior `0.05 → 0.08`.
- `.gold-border` — borde `50 → 60`, glow `0.1 → 0.15`.
- `.text-glow` — shadow alpha `0.3 → 0.35`.
- `::-webkit-scrollbar-track` — `bg-codex-black → bg-codex-brown` (mejor contraste con thumb dorado).

### Decisión: subir todo, no solo "los dim"
La iteración previa (code audit) ya había subido `gold-dim`, `parchment-dim`, `crimson`, `rot`. El usuario seguía pidiendo más brillo. Esta vez se subió la paleta entera incluyendo el fondo (`codex-black`) y los acentos brillantes (`gold`, `gold-bright`). El delta se compensa porque al subir TODO simultáneamente, los contrastes relativos se preservan — solo el "punto cero" se mueve.

### Verificación
Build clean en 148.34 kB gz (sin cambio significativo, los colores son tokens en build time).

---

## Animations + UI glow-up + bug audit (sesión 2026-04-30)

Tres pedidos del usuario combinados en una sesión: bugs latentes, animaciones, y UI glow-up. 6 features cerradas + audit:

### Bug audit
- `scripts/audit-aspect-ratios.py` — escanea `public/art/*/*.jpg`, calcula ratio vs el esperado por categoría (4:5 / 16:7 / 3:2). 152 outliers detectados — todos manejados correctamente por `object-cover` + `object-position` per-variant en CodexImage (no son bugs visuales). Verificado.
- Fallbacks añadidos en `fallbackMap.ts` para `irina` (`'character'`) y `stormhawk-deenh` (`'war'`) — sus archivos fueron borrados por dup-identity en sesión previa, ahora renderizan SVG temáticos.

### Per-article reading progress
`useScroll({ target: articleRef, offset: ['start start', 'end end'] })` produce `articleProgress` 0-1 ligado al scroll del `<article>`, no del window. Barra de 2px fixed top con gradient gold-dim → gold → gold-bright + glow. Aparece tras ~5% del artículo (`progressOpacity` interpola con keyframes `[0, 0.04, 0.08, 0.97, 1]` a `[0, 0, 1, 1, 0]`) y se desvanece al final.

### Stagger entrance en cards
Cards (Character/Faction/Region/Timeline) reciben `index?: number` opcional. Aplican `transition.delay = (index % 12) * 0.04` con easing `[0.22, 1, 0.36, 1]` (cubic-bezier emphasized de Material 3). Modulo 12 evita delays acumulados absurdos en grids con 100+ cards. Cards 0-11 staggean cascada; cards 12+ tienen el mismo delay base. Las secciones pasan `i` desde el `.map()`.

### Page-turn transition (j/k)
Nuevo `src/lib/navDirection.ts` con `NavDirectionContext` (forward/backward/neutral). DetailLayout setea direction antes de `navigate()` en `goNext`/`goPrev`. App.tsx tiene 3 sets de variants (forward = slide-from-right, backward = slide-from-left, neutral = fade vertical). El reset a 'neutral' ocurre 600ms post-navegación en el provider.

### Gold ink reveal en headings
h2/h3 en `RichLoreText` convertidos a `motion.h2`/`motion.h3`. `whileInView` con keyframe array de 3 estados:
- opacity: 0.55 → 1 → 1
- textShadow: 0px → 22px gold glow → 6px sutil  
Timing `times: [0, 0.45, 1]` con `duration: 1.1`. `viewport={{ once: true, margin: '0px 0px -80px 0px' }}` previene re-trigger al scrollear arriba.

### TagPill hover preview
Nuevo `getTagCategoryCounts(slug)` en `tagAggregator.ts` precomputa Map en module load (O(1) lookup). Tooltip CSS-only via `group-hover/group-focus-within:opacity-100` + `transition-opacity`. Renderiza `[total] · 5 personajes · 2 facciones · 1 región` con singular/plural correcto. Solo activo cuando `linkable=true` (pills de filtro mantienen su semántica de toggle).

---

## Lore comprehension layer + QoL (sesión 2026-05-01)

12 features pedidas explícitamente: 5 fases de comprensión + 7 QoL. Bundle final: 155.14 kB gz initial (+5.8 kB desde la sesión previa).

### Fase 1 — Color por tipo de entidad en links
`entityLinkClass: Record<EntityType, string>` exportado desde `RichLoreText.tsx`. Cada link en lore renderiza con color distintivo:
- character → parchment, faction → gold, region → flame
- concept → ghost, timeline → rot, ending → crimson

Con hover glow del mismo tono. El lector ve qué tipo de cosa es cada link sin clicar. **Cambio cognitivo notable** porque el lore tiene 5-15 links por párrafo; antes todos eran dorados indiferenciados.

### Fase 2 — Identidad visual de facción en cards
`src/lib/factionColors.ts` con `factionTone(idOrName)` mapea ~80 facciones a 10 tonos de la paleta `codex-*`. Aplicado en CharacterCard / FactionCard / RegionCard como:
- Franja lateral 4px (`border-l-[3px]`) del color de la facción
- Label de facción en el mismo tono

Vista de lista: ves clusters de aliados (todos los Cuchillos Negros con franja ghost-blue, todos los Volcano Manor crimson, etc).

### Fase 3 — Hover preview en links internos
`src/components/EntityHoverCard.tsx` — popover Wikipedia-style. Wraps cada `<Link>` en `RichLoreText` cuando es un cross-reference interno.
- 220ms hover delay antes de mostrar (evita ruido al pasar)
- Smart side detection: arriba si hay 230px+ disponibles, abajo si no
- Renderiza thumbnail (80x96 cover) + tipo + facción + nombre + summary 1-line + EraBadge
- Lookup vía `getEntityPreview(type, slug)` (nuevo en `lookups.ts`) que normaliza cada entity type a la misma forma `{ id, name, summary, faction?, tags?, imageCategory, imageId }`
- `truncate(s, n)` corta en word-boundary + ellipsis

### Fase 4 — Era badge
`src/lib/eraOf.ts`: clasifica entities en 4 eras (`pre-order` / `marika` / `shattering` / `tarnished`).
- `ERA_OVERRIDES` map: ~40 entities clave con era explícita (Marika→marika, Placidusax→pre-order, Melina→tarnished, etc.)
- Fallback: regex sobre tags concatenados con patterns por era. Si nada matchea, devuelve `undefined` y el badge no se renderiza (preferimos omitir antes que clasificar mal)
- **"Tarnished" no se traduce** (decisión explícita del usuario; "Mancillado" se considera traducción imprecisa)

`src/components/EraBadge.tsx`: chip con dot + label. `size="compact"` solo dot (cards), `size="full"` dot + label (hero).

### Fase 5 — Mini-glosario sticky
`src/components/MentionedGlossary.tsx`: panel colapsable en sidebar de DetailLayout.
- Walks `deepLore` blocks, extrae todos los `RichInline` de tipo `link`, agrega por `(type, slug)` con conteo
- Top-12 ordenados por frecuencia (excluye el slug propio del artículo)
- Cada entry resuelto via `getEntityPreview` muestra: nombre con underline en color del tipo + tipo en eyebrow + summary line-clamp-2
- ChevronDown rota 180° al expandir

Permite al lector consultar "quién es X" sin abrir nueva pestaña.

### QoL #1 — Hover thumbnail en prev/next
DetailLayout ya prefetcheaba el hero adyacente. Refactor: extraída la `heroImageFor(to)` como helper compartido. Los botones prev/next renderizan `<PrevNextThumbnail src side="left|right" />` (definido inline en DetailLayout) — image absoluta que aparece en `group-hover` con `opacity-0 → 100`. La imagen ya está en cache por el prefetch, render instantáneo.

### QoL #2 — Sticky breadcrumbs
`useState(stickyVisible)` + scroll listener (passive). Visible cuando `window.scrollY > 280`. Renderiza un `<div className="fixed top-0">` con backdrop-blur, breadcrumbs + título truncado. Translate Y desde -100% a 0 con duration-300.

### QoL #3 — Reading time
`src/lib/readingTime.ts` — `countWords(blocks, summary?)` recorre RichBlock tree, suma palabras de paragraph children + heading text + quote text + list items. `WORDS_PER_MINUTE = 220` (prosa narrativa española). `Math.max(1, Math.ceil(...))` para evitar 0 min. Display: chip con `<Clock size={9}>` + `5 min` junto a certeza.

### QoL #4 — "Ya leído" marker
- `src/lib/readStatus.ts`: localStorage key `codex-read-v1`, custom event `codex-read-change`. Funciones puras `markRead/unmarkRead/isRead`. Hook `useReadSet(type)` sincroniza via storage events + custom events.
- DetailLayout: `articleProgress.on('change', v => v >= 0.7 → markRead)` con flag `alreadyMarked` para fire-once por artículo.
- `src/components/ReadCheck.tsx`: renderiza `✓` dorado si `useReadSet(type).has(slug)`. Aplicado en CharacterCard / FactionCard / RegionCard / TimelineEntryCard (no en GlossarySection que usa modal).

### QoL #5 — `?` cheatsheet modal
`src/components/ShortcutsCheatsheet.tsx` — montado globalmente en App.tsx. Listener de `?` (inert en inputs). Modal full-feature: focus trap, body-scroll-lock, restore focus, Esc closes.
Contenido:
- Lista de shortcuts agrupados por sección (Navegación / Lectura)
- Leyenda de colores de links (re-usa `entityLinkClass` y `entityTypeLabel`)
- Leyenda de eras (4 dots con sus tonos)
- Nota sobre el ✓ ya-leído

### QoL #6 — `/` para search
Extensión del keyboard handler en App.tsx: `if (e.key === '/' && !modifiers && !typing-in-field) navigate('/busqueda')`. Estándar de wikis modernas.

### QoL #7 — Filter persistence
`useFilters` ahora acepta `storageKey?: string`. Cuando se provee:
- En mount: si la URL no tiene filter params, hidrata desde `localStorage[codex-filters-v1:<key>]`
- En cada cambio: mirror del estado a localStorage (delete si vacío)

URL siempre gana en hidratación inicial → share-links siguen funcionando exactamente igual. Aplicado en las 5 secciones (`characters`, `factions`, `regions`, `concepts`, `timeline`).

### Decisiones arquitectónicas tardías

**`NavDirectionContext` en lugar de prop drilling** — la dirección de navegación tiene que llegar del DetailLayout (que sabe qué es prev/next) al AnimatePresence en App.tsx. Context aislado en `src/lib/navDirection.ts` con auto-reset post-navegación es más limpio que pasar prop por 5 niveles.

**`EraBadge` devuelve `null` cuando no hay match** — preferimos omitir el badge que mostrar "?" o "Desconocida". Visualmente menos ruido, y obliga a curar `ERA_OVERRIDES` para entities importantes.

**Hover preview con CSS animation timer + JS state combinado** — usamos React state para mount/unmount, pero el hover delay (220ms) lo manejamos con `setTimeout` en lugar de Framer transition delay porque el delay tiene que cancelarse al `mouseleave` antes del show. Los timers viven en `useRef` para no causar renders.

**Mini-glossary excluye self-slug** — si estás en la página de Marika, su mini-glossary no debe listar a Marika. `excludeIds={bookmark ? [bookmark.slug] : []}` en DetailLayout.

**`useFilters` storageKey vs URL precedence** — la regla "URL gana" preserva el contrato de share-links. Si copio un link con `?cert=teoria&tags=Mohg` y se lo paso a alguien, su localStorage no debe machacar mi config.

### Bundle delta (esta sesión)
- 148.65 → 155.14 kB gz initial (+6.5 kB)
- Componentes nuevos: EntityHoverCard, EraBadge, ReadCheck, ShortcutsCheatsheet, MentionedGlossary, PrevNextThumbnail (inline)
- Libs nuevas: eraOf.ts, readingTime.ts, readStatus.ts, factionColors.ts, navDirection.ts
- 0 cross-links rotos verificado.
