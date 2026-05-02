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

---

## Auditoría de traducción y redacción (sesión 2026-05-01)

### Alcance
Auditoría completa de los 8 archivos de lore (~19.400 líneas) buscando: terminología canon, anglicismos no resueltos, inconsistencias de traducción, errores ortográficos, calcos sintácticos.

### Pasadas limpias (cero hallazgos)
- `Interregno` leftovers — 0
- `Erdtree` capitalizado en prosa — 0
- `Árbol del Inmenso` leftovers — 0
- Contenido SOTE (Messmer, Scadutree, Bayle, Rellana…) — 0
- Concordancia rota `el/del Tierras Intermedias` — 0
- Doble palabra (`que que`, `de de`…) — 0

### Fixes aplicados (16 ediciones)

1. **"Mancillado/Mancillados" → "Tarnished"** (3 hits) — violaba la regla canon "Tarnished no se traduce".
   - `timelineLore.ts:448` — "Caballeros Mancillados originales" → "Tarnished originales"
   - `timelineDeepLore.ts:1254, 2646` — "post-Mancillado" → "post-Tarnished"

2. **"Gloam-Eyed Queen" → "Reina de Ojos Crepusculares"** (10 hits) — el codex ya usaba la forma traducida en 7 lugares vía `link()`; el resto eran prosa o buckets sin traducir.
   - `charactersLore.ts:1093, 1099`
   - `charactersDeepLore.ts:1443, 1455, 1493, 1507, 1520`
   - `timelineDeepLore.ts:196, 258, 2640`

3. **"Black Blade" → "Hoja Negra"** (2 hits en prosa) — coexistía con 15 usos correctos de "Hoja Negra".
   - `charactersDeepLore.ts:1411, 1494`
   - Excepción preservada: `glossaryLore.ts:3668` mantiene "Skill Black Blade" como nombre técnico del weapon art.

4. **"academico" → "académico"** (1 hit) — única tilde faltante detectada en prosa.
   - `charactersLore.ts:612`

### Hallazgos NO accionados (decisión deliberada)

- **"Reina del Crepúsculo"** (1 hit en `charactersLore.ts:1095`) — variante elíptica estilística, coexiste con la forma canónica "Reina de Ojos Crepusculares" en el mismo párrafo. Aceptable como variación estilística.
- **"Amber Egg"** (25 hits, todos en pasajes sobre Rennala) — el codex deja deliberadamente nombres de items en inglés (Roundtable Hold, Bestial Sanctum, Warmaster's Shack…). Documentado en agent.md como excepción explícita.
- **Tildes diacríticas arcaicas** (`éste/ésta/sólo`, 11 hits) — la RAE las eliminó en 2010, pero el registro arcaico encaja con el tono dark fantasy del codex. Decisión: dejarlas.

### Verificación
- `grep "Gloam-Eyed Queen"` → 0 hits
- `grep "Mancillad[oa]s?"` → 0 hits
- `grep "Black Blade"` → 1 hit (el de "Skill Black Blade", aceptado)
- `grep "academico"` → 0 hits
- `audit-cross-links.mts` → 0 broken refs
- `npm run build` → limpio, **155.73 kB gz initial** (vs 155.14 previo, +0.6 kB porque las traducciones son ligeramente más largas)

### Decisión documentada en agent.md
Se añadió a las "Reglas críticas":
- "Tarnished" NO se traduce.
- `gloam-eyed-queen` → "Reina de Ojos Crepusculares" (canon).
- `black-blade` → "Hoja Negra" (canon, excepto skill).
- Lista explícita de nombres propios que sí permanecen en inglés (Castle Morne, Roundtable Hold, Volcano Manor, Two/Three Fingers, Cleanrot Knights, Banished Knights, Warmaster's Shack, Bestial Sanctum, Amber Egg).

### Veredicto general
Calidad de redacción **alta**. Densidad de errores < 1 cada 4.000 líneas. Reglas canon respetadas en >99% de los casos pre-auditoría; tras los 16 fixes, consistencia terminológica cerrada al 100%. La prosa mantiene registro coherente (wiki + dark fantasy + ensayo arqueológico) sin calcos sintácticos del inglés ni pasivas innecesarias.

---

## Corrección a traducción oficial: Reina del Ojo Velado (sesión 2026-05-01, post-auditoría)

### Motivación
Tras la auditoría inicial, búsqueda en fuentes oficiales reveló que la traducción que el codex usaba ("Reina de Ojos Crepusculares") es una traducción literal de la comunidad, NO la traducción oficial de FromSoft/Bandai Namco.

La forma oficial española — confirmada en items in-game (Apóstol sacrodermo, Noble sacrodermo, Espadón del exterminador de dioses, Maliketh la Hoja Negra) y en la wiki Fandom es — es **"Reina del Ojo Velado"**. Referencia visual al velo/paño que cubre los ojos en el arte concept del personaje, no a la idea de "ojos de penumbra" del término inglés `gloam-eyed`.

### Decisión
Aplicar la regla "Árbol Áureo" (la traducción oficial de FromSoft prevalece sobre traducciones in-house) también a este término. Migración completa.

### Implementación
Replace_all en 11 archivos:
- `src/data/characters.ts`, `factions.ts`, `glossary.ts`, `timeline.ts` — datos base
- `src/data/lore/charactersLore.ts`, `charactersDeepLore.ts`, `factionsLore.ts`, `glossaryLore.ts`, `regionsLore.ts`, `timelineLore.ts`, `timelineDeepLore.ts` — lore + deep lore

Total: **92 reemplazos** (91 de "Reina de Ojos Crepusculares" + 1 de la variante elíptica "Reina del Crepúsculo" en `charactersLore.ts:1095`).

Slug interno `gloam-eyed-queen` se preservó intacto (es ID, no texto visible). Tags como "Era del Crepúsculo" / "Ruta del Crepúsculo" no se tocaron — son nombres canónicos del final Duskborn, sin relación con el personaje.

### Verificación
- `grep "Reina de Ojos Crepusculares|Reina del Crepúsculo"` en `src/` → 0 hits
- `grep "Reina del Ojo Velado"` → 92 hits distribuidos correctamente
- `audit-cross-links.mts` → 0 broken refs
- `npm run build` → limpio, **155.70 kB gz initial** (vs 155.73 previo, -30 B porque "Reina del Ojo Velado" es ligeramente más corto que "Reina de Ojos Crepusculares")

### Actualización de docs
- `agent.md` regla canon actualizada: "Reina del Ojo Velado" ahora es el término obligatorio. "Reina de Ojos Crepusculares" y "Reina del Crepúsculo" explícitamente rechazados como traducciones literales de la comunidad.
- `PHASES.md` línea 308 actualizada.

### Lección
Antes de adoptar una traducción "obvia" para un término del juego, validar con la localización oficial española. Las traducciones literales del inglés a menudo difieren de la elección de FromSoft (Erdtree → Árbol Áureo, no Árbol del Inmenso; gloam-eyed → del Ojo Velado, no de Ojos Crepusculares).

---

## Auto-link masivo: enlazado completo de menciones (sesión 2026-05-01)

### Motivación
Tras la auditoría, se identificó que muchas menciones en prosa de entidades con entrada propia (Marika, Llama Negra, Anillo Elden, etc.) estaban como **texto plano** en lugar de `link()` calls — lo que privaba al lector del hover-card y la navegación cruzada. Decisión del usuario: **opción C** (enlazar TODA mención de entidad, sin reservar a primera mención).

### Implementación: dos scripts

**`scripts/auto-link-pass.mts`** — script principal. Importa entidades vía tsx, construye tabla de targets (name + manual aliases + auto-aliases del primer nombre de personajes), recorre archivos lore con parser stack-based (rastrea contexto `p()` vs `h()`/`q()`/`link()`/`em()`/`strong()`/buckets), y reemplaza string literals dentro de `p()` con concatenaciones `'pre ', link(...), ' post'`. Reglas:
- Solo procesa strings dentro de `p()` (paragraph). NO toca `h()`, `q()`, `ol()`/`ul()` (sus helpers en este codex toman `string[]`, no `RichInline[]`), buckets `confirmed`/`inferred`/`theories`/`ambiguous` (renderer `KnowledgeBox` no procesa RichInline), ni campos `summary`/`definition`/`historical`/etc. en `data/*.ts`.
- Match case-insensitive con boundary que respeta letras acentuadas españolas. El label preserva el case del input (no del target canónico) — así "Oro sin Aleación" en prosa enlaza al concepto "Oro Sin Aleación" sin alterar el case visible.
- **Self-references excluidas**: el slug actual nunca se enlaza a sí mismo.
- **Longest-first matching**: "Reina del Ojo Velado" matchea antes que el alias "Reina" de cualquier personaje.
- **Aliases manuales curados** (`MANUAL_ALIASES`): 19 entradas cubriendo terms cuyo nombre canónico tiene artículo o forma larga (Crisol, Árbol Áureo, Hoja Negra, Anillo Elden, Empyrean/Empíreo, Cuchillos Negros, Pieles de Dios, Dos Dedos, Hombres-Bestia, etc.). Validados contra slugs reales en boot.
- **Aliases auto-generados** (66 entradas): primer palabra del `name` de cada personaje cuyo name es multi-palabra (Marika para "Marika la Eterna", Radagon, Ranni, etc.). Filtrado por unicidad (no se aplica si dos personajes comparten primera palabra).
- **Stopwords**: artículos y títulos genéricos (reina, lord, lady, era, primer, etc.) no se convierten en aliases.

**`scripts/normalize-link-articles.mjs`** — fix-up post-pass. Detecta `link('el X', 'type', 'slug')` cuyo label empieza con artículo español y lo extrae: convierte en `'el ', link('X', 'type', 'slug')`. Convención Wikipedia: el artículo queda como texto plano, solo el nombre propio es link.

### Resultados

Total `link()` calls en los 8 archivos lore:
- Antes: **2.123**
- Después: **5.435**
- Delta: **+3.312 nuevas inserciones (+156%)**

Distribución por archivo:
| Archivo | Antes | Después | Delta |
|---|---:|---:|---:|
| charactersDeepLore.ts | 416 | 1.034 | +618 |
| charactersLore.ts | 265 | 696 | +431 |
| factionsLore.ts | 224 | 495 | +271 |
| glossaryLore.ts | 424 | 1.115 | +691 |
| regionsLore.ts | 204 | 542 | +338 |
| regionsDeepLore.ts | 77 | 203 | +126 |
| timelineLore.ts | 206 | 596 | +390 |
| timelineDeepLore.ts | 307 | 754 | +447 |

### Verificación
- `audit-cross-links.mts` → 0 broken refs
- `npm run build` → limpio, **155.71 kB gz initial** (sin cambio significativo: el código de los lore files crece pero está en chunks lazy)
- Lore chunks: cada uno creció +1.4 a +1.9 kB gz por las nuevas link calls.

### Decisiones técnicas no obvias

**Solo `p()` en este pass** — los helpers `ol`/`ul` en este codex toman `...items: string[]`, no `...items: RichInline[][]`. Cambiar la signatura sería invasivo. Para enlazar dentro de listas, se requiere refactorizar el helper. Decisión: postergar.

**Buckets sin links** — `KnowledgeBox` renderer toma `items: string[]` y los muestra como `<li>{t}</li>` (text node). No procesa RichInline. Para enlazar dentro de buckets habría que cambiar el tipo del prop y el renderer. Decisión: postergar — los buckets son resúmenes secos donde el lector NO espera navegar.

**Ortogonalidad del idempotent run** — el script puede correrse múltiples veces. Strings ya enlazadas no se re-procesan (los matches están dentro de `link()` calls que el parser excluye). Cada pasada solo añade nuevos links que el target table tenga.

**Strip de artículos en label** — implementado en el script principal y reforzado por `normalize-link-articles.mjs` para fix-up de pasadas previas. La convención: artículo afuera, nombre propio adentro del link.

**Idempotencia de manual aliases** — `MANUAL_ALIASES` se valida en boot contra slugs reales; los que no resuelven se imprimen con warning y se skipean. Esto previene refs rotas si un slug cambia o se elimina.

### Scripts en el repo
Tras esta sesión los scripts quedan disponibles para futuras pasadas (cuando se añadan nuevas entries):
- `scripts/auto-link-pass.mts` — herramienta reusable. Para extender: editar `MANUAL_ALIASES` con nuevos aliases conocidos.
- `scripts/normalize-link-articles.mjs` — fix-up de artículos en labels de links existentes.

### Observaciones sobre estética
La densidad de links en prosa es ahora alta: una página típica de personaje (Marika, Maliketh, Miquella) tiene 30+ links coloreados por tipo. Visualmente es una decisión consciente de "wiki-completa cross-referenced" elegida por el usuario (opción C). La saturación es manejable porque:
- Los colores por tipo (parchment/gold/flame/ghost/rot/crimson) crean jerarquía visual
- Los hover-cards aparecen solo a 220ms intencionales (no spam)
- Self-references quedan como texto plano (la página actual no se enlaza a sí misma)
- Artículos quedan fuera del link (texto plano)

Si en el futuro la saturación resulta excesiva, una mitigación es mover a "opción B" (links sutiles para menciones repetidas, fuertes para primera mención) — requiere CSS tweak en `RichLoreText.tsx` y un script que detecte primera vs subsiguientes menciones por entrada.

---

## Auto-link Fase 2: cobertura completa de la página (sesión 2026-05-01)

### Motivación
La pasada anterior solo enlazó strings dentro de `p()`. El usuario pidió "TODO el contenido de la web" — incluyendo buckets (confirmed/inferred/theories/ambiguous), beneficiaries/victims, listas (`ol`/`ul`), y los campos prosa de `data/*.ts` (summary, definition, historical, theme, tragedy, etc.) que se renderizan en cards y heroes.

### Implementación: dos vectores

**Build-time (extensión del script)** — `scripts/auto-link-pass.mts` ahora soporta:
- **Buckets**: detecta `confirmed: [`/`inferred: [`/`theories: [`/`ambiguous: [`, procesa cada string-item dentro y emite `[parts...]` array literal (cada item del bucket pasa de string a `RichInline[]`).
- **Prose-fields**: detecta `beneficiaries:`/`victims:` (multiline) o `beneficiaries: '...'` (inline), y reemplaza el string-value con array literal.
- **Listas (`ol()`)**: el helper en charactersDeepLore.ts ahora acepta `(string | RichInline[])[]` (compat backwards). El script trata `ol`/`ul` como `linkableKind: 'list'` y emite `[parts...]` array literal en vez de comma-separated args.
- **Paragraph (`p()`)**: emite comma-separated args (comportamiento original).

State machine ampliado: `linkableKind` en stack + `inBucket` flag + `proseFieldPending` flag.

**Cambios de tipos** (`src/data/types.ts`):
- `BucketItem = string | RichInline[]` — un fact en bucket puede ser texto plano o tener cross-links inline
- `ProseField = string | RichInline[]` — beneficiaries/victims pueden ser texto o array
- `DeepEntity.confirmed/inferred/theories/ambiguous` ahora son `BucketItem[]`
- `DeepEntity.beneficiaries/victims` ahora son `ProseField`

**Cambios de renderer** (`src/components/RichLoreText.tsx` + `DetailLayout.tsx`):
- Exportado `InlineNode` (era interno)
- Nuevo `<InlineProse node={string | RichInline[]} />` para renderizar mixed content
- `KnowledgeBox.items: BucketItem[]` itera y delega a `<InlineProse>`
- beneficiaries/victims usan `<InlineProse>`

**Runtime (nuevo)** — para los campos string en `data/*.ts` (que se renderizan directamente en cards y heroes):
- `src/lib/enrichText.ts` — función `enrichText(text, selfId): RichInline[]` que carga la lookup table de targets una vez al import (mismo conjunto que el script: targets canonical + 66 auto-aliases de characters + 19 manual aliases). Aplica regex case-insensitive con boundaries unicode-aware, longest-first, retorna `RichInline[]` con links insertados.
- `<EnrichedText text={...} selfId={...} />` componente en `RichLoreText.tsx` que envuelve `enrichText` con `useMemo` (memoización por re-render).
- Aplicado en: DetailLayout (hero summary), CharacterCard (tragedy/events/theme), RegionCard (historical/hiddenTragedy/timelineRelation/bosses), FactionCard (what/belief/whyMatters/relationToOrder), GlossaryModal (definition/deepDive en mosaico y modal), EndingsSection (description/meaning), TimelineEntryCard (poeticIntro/lore/whyItMatters), TimelineRibbon (poeticIntro), ConceptDetailPage / TimelineDetailPage / EndingDetailPage (campos custom en legacyContent).

### Resultados

Total `link()` calls en archivos de lore (build-time):
| | Antes pase 1 | Después pase 1 | Después pase 2 |
|---|---:|---:|---:|
| charactersDeepLore.ts | 416 | 1.034 | 1.494 |
| charactersLore.ts | 265 | 696 | 987 |
| factionsLore.ts | 224 | 495 | 743 |
| glossaryLore.ts | 424 | 1.115 | 1.626 |
| regionsLore.ts | 204 | 542 | 708 |
| regionsDeepLore.ts | 77 | 203 | 300 |
| timelineLore.ts | 206 | 596 | 782 |
| timelineDeepLore.ts | 307 | 754 | 1.064 |
| **Total lore** | **2.123** | **5.435** | **7.704** |

Delta total desde el origen: **+5.581 inserciones (+263%)**.

Plus runtime enrichment activo en ~10 componentes, cubriendo todos los string fields visibles de `data/*.ts`.

### Verificación
- `audit-cross-links.mts` → 0 broken refs
- `npm run build` → limpio
- Initial bundle: **157.05 kB gz** (vs 155.71 antes = +1.3 kB gz por enrichText.ts y EnrichedText component)
- Lore chunks: cada uno creció +1-3 kB gz por las nuevas link() calls
- glossary chunk: 78.08 → 80.01 kB gz (la mayor — buckets numerosos en glossary)

### Decisiones técnicas no obvias

**Buckets como `BucketItem[]`** — preserve compat: items existentes que son strings simples siguen siendo strings; auto-link solo cambia los items que TIENEN una mención, los demás quedan plain. El renderer `<InlineProse>` distingue `typeof === 'string'` vs array y renderiza correspondientemente.

**`ol()` helper compat** — la signature pasó de `string[]` a `(string | RichInline[])[]` con normalización en el helper (`Array.isArray(s) ? s : [s]`). Items existentes con strings siguen funcionando.

**Runtime vs build-time enrichment** — el enrichment de `data/*.ts` se hace en runtime (`enrichText` en `useMemo`) en vez de pre-procesar los datos. Razones:
1. Los strings `data/*.ts` están renderizados en muchos lugares (cards, heroes, search snippets, OG meta). Pre-procesar los datos a `RichInline[]` requiere cambiar el tipo de muchos campos y todos los renderers.
2. Si en el futuro se añade una nueva entidad, automáticamente se enlazará en todos los textos existentes sin re-procesar.
3. El costo runtime es trivial: regex sobre strings cortos (< 500 chars) con memoización, < 1ms por card.

**Lookup table compartida** — `enrichText.ts` y `auto-link-pass.mts` mantienen la misma lista de `MANUAL_ALIASES` y stopwords. Si se añade un alias en uno, copiarlo al otro (riesgo de drift documentado).

**Self-reference excluida en runtime** — `<EnrichedText selfId={entity.id} />` para que la página de Marika no enlace "Marika" a sí misma.

### Cobertura final
Tras Fase 2, **prácticamente todo texto visible en la wiki está enlazado** (excepto headings y quotes — decisión deliberada por estética y respeto a citas literales del juego).

Lugares NO enriquecidos por decisión:
- **Headings (`h(...)`)**: la tipografía heading (Cinzel, gold-bright) no admite color de link sin romper jerarquía visual.
- **Quotes (`q(...)`)**: las citas son literales del juego — links serían anacrónicos.
- **Names canónicos en cards** (`character.name`, `faction.name`, `region.name`): son el TÍTULO de la card, ya tienen su propio link a la página detalle (Link wrapping).
- **Tags y tag pills**: ya tienen su propia navegación a `/etiqueta/:slug`.
- **Search snippets**: el enriquecimiento aquí confundiría con el `<mark>` highlight.

### Mantener consistencia futura
Cuando se añadan nuevas entidades:
1. Correr `npx tsx scripts/auto-link-pass.mts --all` para enlazar retroactivamente menciones existentes en lore files (idempotente).
2. Runtime enrichment se actualiza automáticamente al recargar (lookup table se reconstruye al import de enrichText.ts).
3. Si el nombre canónico de la nueva entidad no coincide con cómo la prosa la menciona típicamente, agregar alias manual a `MANUAL_ALIASES` en AMBOS `auto-link-pass.mts` Y `enrichText.ts`.

---

## Auto-link Fase 3: cobertura full-site + InlineProse universal (sesión 2026-05-01)

### Motivación
La Fase 2 cubrió lore files y cards de personajes/regiones/facciones. Pero faltaban: rutas narrativas, genealogía, ending detail page (whoLeads), section headers (subtítulos genéricos), tag pages (sublabels), character/region meta rows.

### Implementación

**InlineProse universal** — el componente `<InlineProse node={...} selfId={...} />` ahora aplica `enrichText` automáticamente cuando el `node` es un string plano (con memoización). Esto significa:
- `<InlineProse node={someString} selfId={id} />` → escanea + enlaza menciones
- `<InlineProse node={richInlineArray} />` → renderiza directamente
- `<EnrichedText text={...} selfId={...} />` → wrapper de conveniencia, delega a InlineProse

Resultado: cualquier bucket item que el script auto-link **dejó como string** (porque no detectó menciones a build-time) ahora se enriquece en runtime — captura nuevos aliases del runtime aunque no estén en el script.

**Páginas faltantes enriquecidas**:
- `RouteDetailPage` — `route.description`, `currentStop.why` (NO `route.poeticIntro`, que es cita).
- `RoutesListPage` — `route.description` en cards.
- `GenealogyPage` — `note` en cada UnionSection y `epithet` en PersonCard.
- `EndingDetailPage` — `MetaRow` (`whoLeads`).
- `CharacterDetailPage` / `RegionDetailPage` — `MetaRow` values.
- `TagPage` — `ResultCard.sublabel` (que muestra summary/role/historical/poeticIntro de cada resultado).

**KnowledgeBox con selfId** — DetailLayout ahora pasa `bookmark?.slug` como `selfId` a cada KnowledgeBox y a beneficiaries/victims, para que strings simples dentro de buckets también auto-enriquezcan en runtime sin enlazar a la entidad actual.

### Decisión: las citas NO se enlazan
Por petición explícita del usuario, los **poeticIntro** (citas literarias al inicio de entrada/sección/ruta) quedan como prosa plana, sin enrichment:
- `SectionHeader.tsx` — `"{poeticIntro}"`
- `RouteDetailPage` — `"{route.poeticIntro}"`
- `RoutesListPage` — `"{route.poeticIntro}"` en cards
- `TimelineEntryCard` — `"{entry.poeticIntro}"`
- `TimelineRibbon` — `{entry.poeticIntro}` (italic, sin comillas explícitas pero misma función)
- `CharacterCard` — `"{character.poeticDesc}"` (ya estaba sin enrichment)

Razón estética: las citas son introducciones poéticas, los enlaces dentro las recargan visualmente y rompen el efecto narrativo.

### Verificación
- `audit-cross-links.mts` → 0 broken refs
- `npm run build` → limpio
- Initial bundle: **157.04 kB gz** (sin cambio)
- Cobertura final: **toda la prosa de la wiki está enlazada**, excepto headings, quotes (`q()`) del lore, y las citas poéticas (`poeticIntro` / `poeticDesc`).

### Patrón final consolidado
Para cualquier display de prosa de entidades, usar:

```tsx
<EnrichedText text={someStringField} selfId={entity.id} />
```

O para campos que pueden ser `string | RichInline[]` (buckets, beneficiaries):

```tsx
<InlineProse node={field} selfId={entity.id} />
```

Ambos delegan internamente al mismo enrichText cuando es string. La diferencia es semántica: `EnrichedText` para campos de `data/*.ts` que siempre son string; `InlineProse` para campos del DeepEntity que pueden ser ambos.

---

## Refinamientos post-feedback (sesión 2026-05-01, post-cobertura completa)

### 1. Quitar enrichment de TODAS las "citas estilo blockquote"
El usuario reportó que ciertas citas seguían con links después de la pasada anterior. Identificadas y corregidas:

| Lugar | Campo | Estado anterior | Estado actual |
|---|---|---|---|
| `DetailLayout` hero | `summary` (italic + border-l dorada) | Enriquecido | **Plain text** |
| `CharacterCard` panel rojo | `tragedy` (italic) | Enriquecido | **Plain text** |
| `RegionCard` panel rojo | `hiddenTragedy` (italic) | Enriquecido | **Plain text** |
| `FactionCard` panel verde | `belief` (italic) | Enriquecido | **Plain text** |

**Regla operativa**: cualquier prosa renderizada como cita visual (italic + barra lateral dorada/roja) NO se enriquece. Las citas son el "voice opener" — los links rompen el momento narrativo.

Lugares donde sí se enriquece prosa italic (no citas): MetaRow values en heroes (subtítulos descriptivos, no citas), historical/whyMatters/whoLeads/etc. (texto descriptivo).

### 2. Unificación de colores de links
El usuario reportó que la diversidad de colores por tipo de entidad (parchment / gold / flame / ghost / rot / crimson) era visualmente mareante con thousands de links por página.

**Cambio**: `entityLinkClass` en `RichLoreText.tsx` ahora mapea TODOS los tipos al mismo styling:
```ts
const UNIFIED_LINK_CLASS = 'text-codex-parchment decoration-codex-parchment-dim/55 hover:text-white ...'
```

El hover-card sigue mostrando type/faction/era del target — la información sigue accesible, solo que sin dispersarse en color de texto.

**Consecuencias**:
- `ColorLegend` (componente colapsable arriba de cada lista) — la sección "colores de enlaces" eliminada del tip footer; las secciones de Eras / Franja facción / Read marker siguen siendo válidas y se mantienen.
- `ShortcutsCheatsheet` (modal `?`) — sección "Colores de enlaces en el lore" eliminada. Sección "Eras" preservada (los era badges sí mantienen colores distintos).

### Verificación
- `audit-cross-links.mts` → 0 broken refs
- `npm run build` → limpio
- Initial bundle: **156.91 kB gz** (-130 B vs anterior, por el cleanup de imports)

### Decisión consolidada (regla canon de la wiki)
- **Texto descriptivo** (resúmenes, historias, whyMatters, definitions, etc.) → enriquecido, todos los links color parchment.
- **Citas estilo blockquote** (poeticIntro, summary del hero, tragedy/hiddenTragedy/belief en paneles italicizados) → texto plano, sin links.
- **Headings y `q()` quotes** → sin links (ya era convención).
- **Cards / heroes / sublabels** → texto descriptivo, enriquecido.

---

## EntityGraph: refactor HTML overlay + EntityHoverCard (sesión 2026-05-01)

### Problemas reportados
1. El tooltip SVG `<text>` del nodo hover sobrepasaba el contenedor padre.
2. Los nodos no tenían el popup preview (thumbnail + summary + faction + era) que el usuario quería.

### Solución
Refactor de `src/components/detail/EntityGraph.tsx`:

1. **SVG queda solo para decoración**: anillos concéntricos, edges (líneas centro-a-nodo), glow radial, centro.
2. **Nodos como HTML overlay**: cada nodo es un `<button>` absolute-positioned (porcentaje x/y) encima del SVG dentro de un stage `<div>` con `aspect-ratio: 1/1`.
3. **EntityHoverCard integrado**: cada nodo se envuelve con `<EntityHoverCard targetType={node.group} slug={...}>` — mismo popup que los links de prosa (220ms hover delay, smart side detection top/bottom).
4. **`overflow-visible` en parchment-panel**: el popup escapa correctamente del contenedor.
5. **Slug extraído de `to`**: `ResolvedRelatedItem` no expone slug directo, se obtiene como última parte del path URL (`'/personajes/marika' → 'marika'`).
6. **Hover styling HTML**: dots animados con `transition-all` + box-shadow glow (más control que SVG).
7. **Hover readout HTML conservado**: el texto bajo el grafo ("Pasa el ratón sobre un nodo") sigue mostrando el label completo, complementario al popup.

### Verificación
- `audit-cross-links.mts` → 0 broken refs
- `npm run build` → limpio, **156.92 kB gz**

### Beneficios
- Tooltip ya no sale del contenedor (era SVG `<text>` con overflow descontrolado).
- Click + hover preview consistente con el resto de los links del codex.
- Soporte de teclado nativo (button con focus state).

---

## Major UX overhaul (sesión 2026-05-02)

Auditoría integral solicitada por el usuario derivó en una sesión grande con ~18 tareas. Resumen consolidado en commit `681a7a2` ("Major UX overhaul: light mode, PWA, full cross-linking", +15.761/-5.369 líneas, 72 archivos).

### W1 — Quick wins

- **`MentionedGlossary` eliminado**: archivo + import borrado. Su función la cubren los hover-cards de cada link.
- **ToC scroll-spy con barra activa**: el `<TableOfContents>` ahora muestra una barra dorada lateral (2px + glow) marcando la sección actual. Vertical guide rail para las inactivas.
- **Búsqueda con typo-tolerance**: `Fuse.js` (9 kB) integrado con threshold 0.32. Search ahora hace 3 pases: substring exact → fuzzy match → substring deep lore. Tolera `"malena" → Malenia`, `"radhan" → Radahn`.
- **Búsqueda con facetas**: nuevo `src/lib/searchQuery.ts` que parsea `tag:rot cert:teoria type:character` en query libre. Facets soportadas: `tag:`, `cert:`/`certainty:`, `type:`. Aliases en español: `personaje`, `región`, `concepto`, etc.
- **Lecturas relacionadas** (`<RelatedReadings>`): panel post-artículo con scoring de tags compartidos (×3) + cross-references curados (×2) + referencias mutuas (×1). Top 5 sugerencias.
- **Notas personales** (`<NoteEditor>`): textarea por entrada en sidebar, persiste a `localStorage[codex-notes-v1]`. Hook `useNote(type, slug)` reactivo con sync entre tabs.

### W2 — Light mode + features mid

- **Light mode** (sesión más invasiva del W2): toda la paleta `codex-*` migrada a CSS vars en `src/index.css`. Tokens: `--codex-black, --codex-brown, --codex-gold, ...` definidos en `:root` (dark default) y `[data-theme="light"]` (paleta cream-on-ink). `tailwind.config.js` ahora usa `rgb(var(--codex-X) / <alpha-value>)`. Toggle 3-state (dark/light/system) en `src/components/ThemeToggle.tsx`, persiste en `localStorage[codex-theme-v1]`. `initTheme()` se llama en `main.tsx` antes del render. Respeta `prefers-color-scheme` cuando theme === 'system'. Transición body 300ms.
- **Comparador de finales** (`/finales/comparar`): tabla 6 finales × 4 ejes (whoLeads/description/consequence/meaning), header sticky a la izquierda, snap-scroll horizontal en móvil, axis-focus dimming. Lazy-loaded chunk.
- **Exportador a Markdown** (`<ExportButton>` en hero): genera `.md` con frontmatter YAML + `# Title` + body con cross-links resueltos a paths relativos. Implementado en `src/lib/markdownExport.ts`. `downloadMarkdown(filename, content)` usa Blob + `URL.createObjectURL`. Útil para Obsidian/Logseq imports.
- **Quote-share floating bubble** (`<QuoteShareBubble>`): listener global de `selectionchange`. Si la selección cae dentro de `[data-quote-source="true"]` (DetailLayout main column) y tiene > 6 chars, muestra burbuja flotante "Copiar cita" que copia al clipboard formateado como blockquote Markdown con back-link. Position calculada con `getBoundingClientRect`.
- **Glosario inline expandido**: para conceptos, `getEntityPreview` truncate sube de 120 → 220 chars. EntityHoverCard hace `line-clamp-6` solo cuando `preview.type === 'concept'`.

### W3 — Refactor + infra

- **Refactor `EntityCard` genérica**: `<EntityCard>` reemplaza `CharacterCard`/`FactionCard`/`RegionCard` (eran 85% idénticos tras la simplificación previa). Los 3 antiguos quedan como wrappers thin (~25 líneas cada uno) que delegan a `EntityCard`. Props: `to`, `imageVariant`, `imageCategory`, `imageId`, `eyebrow?`, `body`, `poetic?`, `cta`, `index`. Spacing standarizado en uno solo (mb-2/mb-3, gap-1.5, p-4). Click en cualquier zona → Link al detail.
- **PWA**: `public/manifest.webmanifest` (name, icons, theme_color codex-black/parchment según theme) + `public/sw.js` con strategy:
  - App shell HTML/JS/CSS → stale-while-revalidate
  - `/art/...` → cache-first
  - Navigation requests → network-first con fallback `/`
  - Cross-origin (Google Fonts, image-sources.local.json) → bypass
  - Cache name versioned (`codex-v1`); bump en cada release.
  Registro condicional en `main.tsx` — skipped en localhost para no chocar con Vite HMR. `<link rel="manifest">` + `apple-touch-icon` + theme-color media queries en `index.html`.
- **EntityGraph parametrizado para themes**: dos paletas (`GROUP_COLOR_DARK` vs `_LIGHT`) seleccionadas por `useTheme().resolved`. Decoración (rings, ticks, center halo) usa `DECO` constants también theme-aware. Mantiene compass-style con 24 ticks y center starburst.
- **Compartir excerpt de selección**: ya descrito en W2 (QuoteShareBubble).
- **DetailLayout split**: `MobileToC` y `TableOfContents` extraídos a archivos propios en `src/components/detail/`. DetailLayout pasa de 800 → ~580 líneas. Imports limpiados (AnimatePresence, List, X removidos).

### Genealogía expandida (sesión 2026-05-02)

`src/pages/GenealogyPage.tsx` re-escrita completa de 11 personas / 3 secciones a **47 personas / 14 secciones**:

**Secciones**:
1. **0. Antes del Orden** — Reina del Ojo Velado, Placidusax, Storm-Hawk King
2. **∞. Marika ⊗ Radagon** — sección destacada con `⊗` (misma alma)
3. **I-III. Las 3 uniones** (sangre) — los 11 herederos directos
4. **IV. Lazos cosmológicos** — Maliketh (sombra), Blaidd, Serosh, Melina
5. **V. Casa Caria** — Rennala + corte (Iji, Seluvis, Pidia)
6. **VI. Linaje Empyrean** — los 4 candidatos cosmológicos
7. **VII. Sucesión del trono** — Placidusax → Godfrey → trono vacante con card "El Tarnished"
8. **VIII. Linaje de la podredumbre** — Malenia → Millicent ↔ Gowry
9. **IX. Los fundamentalistas** — Radagon → Goldmask → Corhyn
10. **X. La cuestión de los muertos** — Fia × D ≈ Hermano de D
11. **XI. La Mesa Redonda** — Gideon, Miriel, Roderika, Diallos
12. **XII. Volcano Manor** — Rykard, Tanith, Bernahl, Patches
13. **XIII. Vínculos regionales** — Castle Morne (Edgar/Irina), Limgrave (Kenneth/Nepheli), Jarburg (Alexander/Jar-Bairn), Periferia (Boc/Latenna/Albus/Hyetta/Vyke)

**Tipos de Status** (6): alive / fallen / cursed / missing / unknown / historical
**Tipos de Relation** (12): blood / bond-soul / bond-shadow / bond-mount / bond-court / ambiguous / historical / mentor / family / twin / rival / agent

**UI**:
- Cada PersonCard con thumbnail (CodexImage square 48×48)
- EntityHoverCard wrapper para cards con entrada real (popup preview al hover)
- Era badge compact por persona
- Relation badge tonal (parchment, gold, ghost, etc.) según relation kind
- Gran Runa indicator para shardbearers (`◈ <name>`)
- Status filter chips toggleable + botón "Todos"
- Cards no-elegibles para hover-card se renderizan sin Link (Storm-Hawk King por ejemplo es concept-kind, sí tiene preview)
- Marika ⊗ Radagon resaltado: símbolo distinto (`⊗` vs `∞`), borde dorado emphasized, label "= misma alma"

### 4 NPCs con deep lore añadidos

`src/data/lore/charactersLore.ts` ganó entradas completas (summary + deepLore + 4 buckets + cross-links) para:
- **Yura** — el cazador devorado por su propia caza · Posesión por Shabriri
- **Shabriri** — espíritu calumniador · heraldo de los Tres Dedos · método de posesión
- **Eleonora** — Lanza Violeta · el amor que se vuelve cómplice
- **Lanya** — la muerte invisible que define la quest de Diallos · duelo sin cierre

Tras añadir, auto-link aplicado: +60 nuevos enlaces en charactersLore.ts conectando los 4 con el resto del codex.

### Cleanup colateral
- **Modo lectura eliminado**: state, toggle en sidebar, overlay flotante "× Salir Lectura", lógica condicional en TimelineSection/TimelineEntryCard. Era poco usado y duplicaba función con `/lectura/:category`.
- **RelatedLists del sidebar eliminadas**: las listas verbales por tipo (Personajes/Regiones/Facciones/Conceptos/Timeline) se quitaron — el `EntityGraph` cubre la misma información visualmente con popup + click.
- **MentionedGlossary del sidebar eliminado**: cada link en deep lore ya tiene hover-card preview.
- **Cards expandibles eliminadas**: el state `open` y los paneles internos (tragedy/events/theme en CharacterCard, what/belief/whyMatters en FactionCard, historical/bosses/hiddenTragedy en RegionCard) se eliminaron. Esa información se movió a `structuralFacts` que **siempre** se renderiza en la página detalle (antes solo aparecía si NO había deepLore). Cards quedan como `<Link>` puro al detail con info compacta.
- **Subtitle redundante oculto automáticamente**: `isSubtitleRedundant(subtitle, summary)` detecta cuando el summary contiene el subtitle (normalizado sin tildes/case) y oculta el subtitle del hero. Soluciona casos como Orden Dorado donde subtitle = `faction.what` y summary también deriva de what.
- **Franjas laterales en cards eliminadas**: `border-l-[3px]` con color tonal por facción + label en color tonal eliminados. Cards más limpias, eras + read marker conservados.
- **Color de links unificado**: los 6 tipos de entidad ahora comparten styling parchment (antes tenían 6 colores distintos). Resolvió mareo visual con thousands de links por página. ColorLegend y ShortcutsCheatsheet adaptados.
- **Citas (`poeticIntro`) sin links**: SectionHeader, RouteDetailPage, RoutesListPage, TimelineEntryCard, TimelineRibbon, hero summary del DetailLayout, tragedy/hiddenTragedy/belief italic en cards. Decisión estética del usuario: las citas son aperturas narrativas, los links recargan el momento poético.

### Hero summary fallback enriquecido

Para entradas sin `summary` explícito (131 entries), los detail pages ahora generan summary uniforme:
- **CharacterDetailPage** → `buildCharacterSummary(c)`: combina `role + tragedy`
- **RegionDetailPage** → `buildRegionSummary(r)`: primeras 2 oraciones de `historical + hiddenTragedy`
- **FactionDetailPage** → `buildFactionSummary(f)`: combina `what + belief`
- **ConceptDetailPage** → ya usa `definition`

Resultado: hero uniforme en todas las entradas, sin tener que generar 131 summaries a mano.

### `agent.md` cookbook expandido

Nuevas recetas concretas:
- Verificación pre-commit
- Añadir entrada nueva (5 pasos)
- Añadir alias canónico (sincronizar runtime + build-time)
- Pipeline de imagen: fandom-fetch → JPEG fix → upscale → compress (con warning sobre `convert-to-webp.py`)
- Renames terminológicos masivos
- Auto-link retroactivo
- Detectar problemas latentes (orphan mentions)
- Limpiar artefactos pre-commit

### Imagen de Boc actualizada

Cambiada a `ER_NPC_Closeup_Boc.png` del wiki Fandom (forma Misbegotten original, no la Reborn humana). Pipeline: WebP → JPEG → Real-ESRGAN 4x → JPEG q92 max edge 2400 → 2000×2000, 299 KB. La imagen anterior queda en `.trash-art/characters/boc.jpg` por si se necesita revertir.

### Bundle final (post sesión 2026-05-02)

```
index                           154 kB gz   (initial — bajó 1 kB net pese a todas las features
                                              gracias al cleanup masivo)
lore-glossary                    80 kB gz
lore-characters-deep             71 kB gz
lore-characters                  57 kB gz
lore-regions                     54 kB gz
vendor-react                     51 kB gz
lore-timeline-deep               47 kB gz
vendor-motion                    43 kB gz
lore-factions                    42 kB gz
lore-timeline                    28 kB gz
fallback-illustrations           11 kB gz   (lazy)
DetailLayout                     ~6 kB gz   (shared)
EndingsComparePage               2 kB gz    (lazy, nuevo)
GenealogyPage                    chunk lazy (más rico, no afecta initial)
+ chunks lazy nuevos para SearchPage (incluye Fuse.js), ThemeToggle, etc.
```

### Decisiones técnicas no obvias de esta sesión

**InlineProse universal con auto-enrich** — `<InlineProse node={string | RichInline[]} selfId={...} />` ahora aplica `enrichText` automáticamente cuando node es string (con useMemo). Significa que cualquier bucket item que el script auto-link dejó como string se enriquece en runtime. Captura nuevos aliases del runtime aunque no estén en el script.

**Service worker en localhost skipeado** — `if ('serviceWorker' in navigator && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1')` evita cache headaches con Vite HMR.

**`isSubtitleRedundant` con normalización Unicode** — `s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')` quita tildes para comparar; si summary contiene subtitle al inicio o como substring, se oculta subtitle automáticamente.

**Theme tokens via CSS vars con `rgb(var(--X) / <alpha-value>)`** — sintaxis Tailwind CSS-vars que permite mantener `bg-codex-gold/30` con opacidad funcionando. Los componentes existentes no requieren cambios.

**EntityGraph con z-index dinámico** — el nodo hovered sale a `zIndex: 50`, los demás `10`. Resuelve el caso de popup tapado por nodos vecinos.

**Saltados deliberadamente**:
- ❌ Timeline visual horizontal — implementado pero eliminado por el usuario
- ❌ Ruta builder dinámico — saltado (las 6 rutas curadas son superiores en calidad narrativa)
- ❌ OG image dinámica — requiere serverless, imposible en SPA estática
- ❌ Split FallbackIllustrations — refactor cosmético sin impacto user (chunk lazy 10kB)

### Verificación final
- `audit-cross-links.mts` → 0 broken refs
- `npm run build` → limpio
- Initial bundle: **154 kB gz** (sin cambio significativo pese a todas las features)
- Push a `origin/main`: commit `681a7a2`

## Arquitectura SOTE: marca a nivel bloque + entidad (sesión 2026-05-02, post-overhaul)

### Motivación
El usuario pidió poder añadir contenido del DLC Shadow of the Erdtree sin generar entradas paralelas ni un apartado "DLC" al final de cada entrada. La razón explícita: cuando el DLC revela el origen de Marika o reescribe la motivación de Mogh, leerlo "abajo en una caja aparte" rompe la narrativa coherente. Decisión: el SOTE se **intercala** dentro de las secciones que afecta y se etiqueta con un marcador `expansion: 'sote'`.

Tras la primera implementación (Opción A, solo a nivel bloque) el usuario pidió **Opción B**: que el filtro también oculte **entidades enteras** (ej. un NPC exclusivo del DLC) — no solo bloques dentro de entradas.

### Decisión de diseño
Tres niveles de granularidad para el marcador `expansion`:
1. **Bloque** (`RichBlock`) — paragraph / heading / quote / list pueden tener `expansion?: Expansion`. Aplica cuando el DLC añade un párrafo dentro de una sección existente.
2. **Item de bucket** (`BucketItem`) — wrapper `{ expansion?: Expansion; content: string | RichInline[] }` que envuelve un dato puntual dentro de `confirmed`/`inferred`/`theories`/`ambiguous`.
3. **Entidad entera** (`DeepEntity` mixin) — campo `expansion?: Expansion` en el objeto raíz. Cuando se filtra Base, la entrada desaparece de listados, búsqueda, tag pages, grafos, related readings.

El default es `'base'`. No marcar nada en juego base es lo correcto — solo se marca lo que sea SOTE.

### Implementación

**Tipos** (`src/data/types.ts`):
```ts
export type Expansion = 'base' | 'sote'

export interface RichParagraph { type: 'paragraph'; children: RichInline[]; expansion?: Expansion }
export interface RichHeading   { type: 'heading'; level: 2|3; text: string; id?: string; expansion?: Expansion }
export interface RichQuote     { type: 'quote'; text: string; attribution?: string; expansion?: Expansion }
export interface RichList      { type: 'list'; ordered?: boolean; items: RichInline[][]; expansion?: Expansion }

export type BucketItem =
  | string
  | RichInline[]
  | { expansion?: Expansion; content: string | RichInline[] }

export interface DeepEntity {
  // ...campos previos
  expansion?: Expansion  // ← añadido para filtrado a nivel entidad (Opción B)
}
```

**Hooks** (`src/lib/expansion.ts`):
- `useExpansion()` — devuelve `{ filter: 'all'|'base', setFilter, hideSote: boolean }`. Estado en `localStorage[codex-expansion-v1]` con event `codex-expansion-change` para sync.
- `useEntityFilter()` — wrapper genérico:
  ```ts
  visible:     <T extends { expansion?: Expansion }>(items: T[]) => T[]
  isVisible:   (entity: { expansion?: Expansion }) => boolean
  hiddenCount: <T extends { expansion?: Expansion }>(items: T[]) => number
  ```
- `isVisible(expansion, filter)` — helper puro para uso fuera de React.

**Toggle UI** (`src/components/ExpansionToggle.tsx`) — segmented control 2-state (Todo / Base) en sidebar. Default 'all'. Persistente.

**Puntos de integración del filtro**:
| Componente | Cambio |
|---|---|
| `RichLoreText` | `blocks.filter((b) => b.expansion !== 'sote')` cuando hideSote; muestra contador "N bloques ocultos" |
| `DetailLayout` (KnowledgeBox) | Filtra items wrapper `{expansion, content}`; unwrappea `content` para render |
| 6 secciones-listado (`Character/Faction/Region/Glossary/Timeline/Endings Section`) | `byExpansion(items)` antes del resto de filtros |
| `SearchPage` | `byExpansion()` aplicado a los 6 datasets antes de indexar Fuse |
| `TagPage` | Filtra cada categoría tras `findEntriesByTag` |
| `RelatedReadings` | Resuelve cada candidato con `getEntityPreview` y descarta SOTE-only |
| `EntityGraph` | Skipea nodos relacionados cuyo preview es SOTE-only |
| `EntityHoverCard` | Mantiene la card (el link sigue siendo navegable), pero añade badge "SOTE" si `preview.expansion === 'sote'` |
| `getEntityPreview` | Propaga `expansion` desde el entity al `EntityPreview` |

### Decisiones técnicas no obvias

**`expansion?` en `DeepEntity` (no en cada interfaz hija)** — añadirlo al mixin común propaga a Character / Faction / Region / GlossaryEntry / TimelineEntry / Ending sin duplicación. Con la propiedad opcional satisfaciendo el constraint `<T extends { expansion?: Expansion }>`, el genérico `byExpansion()` infiere correctamente sin casting.

**Hover-card NO se filtra**: si el reader pasa el cursor sobre un link a entidad SOTE en modo Base, la card aparece igual con badge "SOTE". Razón: el link en prosa sigue ahí (es lectura inline, no listado). Ocultar la card crearía la sensación de "link muerto" sin explicación. Mejor mostrar la card explícitamente etiquetada como DLC.

**Cross-links base → SOTE no rompen el audit**: el script `audit-cross-links.mts` valida que el slug exista, no que la entidad sea visible bajo el filtro actual. El filtro es runtime, los cross-links son data — son dimensiones ortogonales.

**Bug encontrado y arreglado**: la primera versión de `byExpansion()` con `<T extends { expansion?: Expansion }>` fallaba con `Type 'Character' has no properties in common with type '{ expansion?: Expansion | undefined }'` porque `Character` no declaraba el campo. El fix fue añadir `expansion?: Expansion` a `DeepEntity`, no inflar la firma del genérico ni hacer casting en cada call site.

**Quote blocks ahora pueden tener `expansion`** — antes los quote blocks no se enriquecían ni se procesaban. Para SOTE se decidió permitirles también el marcador (citas in-game añadidas por el DLC). El renderer de quotes en `RichLoreText` ya respeta el filtro porque el filtrado ocurre en el array de blocks padre antes de iterar.

**No se filtran imágenes ni heroes** — un personaje SOTE-only (entidad entera marcada) sigue mostrando hero/imagen si el reader entra directamente por URL. La filosofía es: el filtro afecta listados/discoverability, no el acceso directo. Quien quiera ocultar SOTE para evitar spoilers no debería navegar manualmente a `/personajes/<dlc-npc-slug>`; el filtro asegura que esos slugs no aparecen en listados ni en búsquedas, pero respeta la URL directa.

### Verificación
- `npx tsc --noEmit` → 0 errores tras añadir `expansion?` a `DeepEntity`
- `npm run build` → limpio, bundle initial sin cambio significativo
- `npx tsx scripts/audit-cross-links.mts` → 0 broken refs
- Toggle manual Todo / Base en `/personajes/marika` con bloques SOTE de ejemplo: muestra contador "X bloques ocultos" y re-renderiza sin parpadeos
- `localStorage` persistente entre reloads via `codex-expansion-v1`

### Patrón de uso futuro (cuando se añada lore real de SOTE)
1. Para info que **expande** una entrada base (mayoría de casos: Marika, Mogh, Miquella, Messmer) — añadir bloques `p({ expansion: 'sote' }, ...)` o headings `h(2, '...', undefined, { expansion: 'sote' })` intercalados donde temáticamente pertenezcan.
2. Para items específicos en buckets — envolver con `{ expansion: 'sote', content: '...' }`.
3. Para entradas **nuevas DLC-only** (NPCs, regiones, conceptos del Realm of Shadow) — añadir `expansion: 'sote'` en el objeto raíz de la entidad. La entrada se ocultará automáticamente de listados/search/grafos en modo Base.
4. Tras añadir contenido, correr `auto-link-pass.mts --all` para que las menciones SOTE se enlacen retroactivamente. El script no distingue base/sote — los links se generan igualmente y el filtro los oculta en runtime.

### Saltado deliberadamente
- ❌ **`BookmarksPage` no filtra por SOTE**: si el reader marcó un favorito en modo Todo y luego activa Base, sigue viéndolo en /favoritos. Razón: los bookmarks son intencionales del usuario; ocultarlos podría confundirlo ("¿perdí mi marcador?").
- ❌ **No hay filtro tri-estado (`base | sote | all`)**: solo `all` (default) y `base`. El caso "solo SOTE" no tiene utilidad práctica — ningún reader querría leer SOTE sin contexto base.
- ❌ **No hay marcador a nivel `RichInline`** (ej. un solo link dentro de un párrafo marcado SOTE): demasiada granularidad, complica el render. Si un link es SOTE-only, mover el bloque entero a `expansion: 'sote'`.

## Entrada macro: Las Tierras Intermedias (sesión 2026-05-02, post-arquitectura SOTE)

### Motivación
La entrada macro del continente faltaba pese a 568 menciones a "Tierras Intermedias" repartidas en los 8 archivos de lore. La hover-card y el sistema de cross-links no podía ofrecer contexto al lector que pasaba el cursor sobre el término más mencionado del codex. El usuario detectó la carencia y pidió entrada exhaustiva con info del juego base + teorías comunidad aceptadas.

### Decisión de diseño
1. **Entrada en `regionsLore.ts` (no `regionsDeepLore.ts`)** — `regionsDeepLore.ts` está reservado para sub-regiones promovidas en Phase 8 (castle-morne, sellia, ordina, elphael, dragonbarrow). Las regiones macro viven en `regionsLore.ts` junto con limgrave / liurnia / caelid / leyndell / haligtree / mohgwyn / nokron / nokstella.
2. **Estructura de 6 secciones**, distinta de la plantilla estándar de subregión (5 secciones: Resumen / Historia / Estado actual / Tragedia oculta / Significado). Esta entrada requería estructura propia porque es macro-cosmológica, no histórico-territorial. Las 6 secciones:
   - **Naturaleza cosmológica: por qué se llaman "Intermedias"** — explicación de la liminalidad triple (vida/muerte, dioses externos, eras superpuestas)
   - **Geografía: las regiones que componen el continente** — 6 sub-bloques organizados por zona (sur, centro-oeste, este podrido, centro-norte, norte glacial, subterráneo, anexo cosmológico Farum Azula)
   - **Historia detallada: las eras cosmológicas superpuestas** — 5 sub-secciones h(3) (pre-Erdtree / llegada Voluntad Mayor / Edad Dorada / Cuchillos Negros / Fractura / Guerra y estado actual)
   - **El Árbol Áureo como eje cosmológico y prisión** — desarrollo de la teoría aceptada por la comunidad
   - **Significado simbólico** — pregunta estructural del juego ("régimen que no puede morir y por tanto no puede renovarse")
3. **Cross-link exhaustivo desde la entrada hacia 17 personajes, 12 facciones, 16 regiones, 15 conceptos, 5 timeline events** — la macro region debe ser hub gravitacional del codex.
4. **Auto-link retroactivo** corrido tras añadir la entrada: 360 inserciones distribuidas en los 8 archivos de lore. Las 568 menciones existentes ahora navegan a `/regiones/tierras-intermedias`.

### Posicionamiento en el array `baseRegions`
La entrada va **primera** (antes de Limgrave). Razón: orden semántico — el continente macro precede a sus regiones componentes. El listado `/regiones` la mostrará al inicio, lo que tiene sentido editorial (lectura top-down: continente → regiones → subregiones).

### Decisiones técnicas no obvias
**Slugs concept→faction**: varios términos que parecían concepts (`omen`, `two-fingers`, `three-fingers`) son en realidad facciones en el codex (`omens`, `dos-dedos`, `tres-dedos`). El audit lo detectó. Lección: antes de cross-linkear un término muy mencionado, verificar el slug exacto en `glossary.ts | factions.ts | characters.ts`. Para términos cosmológicos limítrofes, el sistema favorece `faction` cuando hay agentes activos (Omen son individuos, Two Fingers operan), `concept` cuando es noción abstracta.

**Términos sin entry → `em()` en lugar de `link()`**: `Llama de Ruina`, `Señor Elden`, `Fundamentalismo del Orden Dorado`, `Demidioses`, `finales` y `Tierras de los Cañaverales` no tienen entries dedicadas. Decisión: usar `em()` italic en vez de forzar links a entries inexistentes o crear stubs vacíos. Cada uno de estos podría merecer su propio entry futuro — quedan documentados aquí como gaps detectados.

**`Bestia Elden` como concept, no character**: `bestia-elden` vive en `glossary.ts` (concept), no `characters.ts`. Razón: la Bestia Elden es la forma física del Anillo Elden, una manifestación cosmológica más que un personaje psicológico. Existe `bestia-elden-concept` también en glossary — duplicado histórico que el codex tolera.

**`gloam-eyed-queen` es character**: pese a ser figura cosmológica, el codex la trata como character en `characters.ts`. La decisión venía de antes de esta sesión.

**Entrada `'tierras-intermedias'` con guiones (no `'tierras_intermedias'` ni `'lands-between'`)**: el slug refleja el nombre canon traducido del codex. Decisión consistente con la regla de terminología — cuando se traduce, el slug también se traduce (a diferencia de `roundtable-hold` que el codex deja en inglés).

**Buckets con `RichInline[] | string`**: los buckets confirmed/inferred/theories/ambiguous mezclan strings planos y arrays con links. Cuando un item es solo prosa sin cross-links, va como string. Cuando lleva cross-links, va como array. No envolver en `{expansion, content}` salvo necesidad de marca SOTE (no aplica aquí, esta entrada es 100 % base).

### Verificación
- `npx tsc --noEmit` → limpio
- `audit-cross-links.mts` → 0 broken refs (tras corregir 47 slugs en pasada inicial)
- `auto-link-pass.mts --all` → 360 link insertions retroactivas, idempotente
- `npm run build` → bundle initial 155 kB gz (+1 kB por entrada masiva), `lore-regions` 220 kB → 60 kB gz
- 335 cross-links totales hacia `tierras-intermedias` distribuidos en `src/data/`

### Gaps detectados al crear la entrada (cerrados en batch siguiente)
Términos que aparecieron como `em()` en la entrada por falta de entry dedicada:
- **Llama de Ruina** (Flame of Ruin) — fuerza cosmológica de los Gigantes, antagonista del Orden
- **Señor Elden** (Elden Lord) — título cosmológico (Godfrey, Radagon, Tarnished elegible)
- **Fundamentalismo del Orden Dorado** — doctrina específica de Radagon
- **Demidioses** — categoría cosmológica de los hijos de Marika
- **Tierras de los Cañaverales** (Land of Reeds) — región periférica fuera del continente

Todos cerrados en batch posterior (ver sección siguiente). El gap restante `finales` como concept se mantiene como `em()` deliberado — la categoría meta ya tiene su ruta `/finales` y no necesita glossary entry duplicado.

## 5 conceptos macro: gap-fill pre-DLC (sesión 2026-05-02)

### Motivación
Antes de empezar contenido SOTE, cerrar los 5 gaps detectados al crear Tierras Intermedias. Razón estratégica: dos de ellos (`flame-of-ruin`, `lands-of-reeds`) son particularmente expandidos por el DLC (Furnace Golems / Fire Knights de Messmer / samuráis Hornsent en Land of Shadow), por lo que tener entries base sólidas hace que las menciones SOTE se intercalen limpiamente en lugar de crear entries en mitad del trabajo DLC.

### Entradas añadidas
1. **`flame-of-ruin`** (concept, glossary) — Llama de Ruina. Fuerza cosmológica de los Gigantes del Fuego; cosmología rival pre-Orden; última brasa custodiada por gigante encadenado en Mountaintops; dispositivo simétrico del Árbol Áureo (lo único que el régimen conservó pero no eliminó es lo único que finalmente puede destruirlo).
2. **`elden-lord`** (concept, glossary) — Señor Elden. Título cosmológico del consorte ritual de la divinidad portadora del Anillo Elden. Tres en eras conocidas (Placidusax, Godfrey, Tarnished candidato). Los seis finales del juego son seis configuraciones distintas.
3. **`golden-order-fundamentalism`** (concept, glossary) — Doctrina reformada de Radagon que endureció el Orden Dorado en sistema cerrado de leyes puras. Introduce Law of Regression + Law of Causality. Goldmask es discípulo que la lleva a su conclusión lógica (Era de la Perfección).
4. **`demidios`** (concept, glossary) — Categoría cosmológica de los hijos de Marika con sangre divina parcial. Cada uno hereda Gran Runa tras la Fractura. La Guerra de la Fractura es guerra civil cosmológica entre vasijas-fragmento que no pueden ni unirse ni separarse limpiamente.
5. **`lands-of-reeds`** (region) — Las Tierras de los Cañaverales. Región periférica al este, samuráis (Okina). Cosmología paralela no vinculada al Anillo Elden. Documenta que el continente principal no es el cosmos entero.

### Posicionamiento
Las 4 entries de glossary se insertaron al final de `glossary.ts` bajo bloque `/* ═══════ Phase 15 — Conceptos macro detectados al crear Tierras Intermedias ═══════ */`. La entry de region se insertó antes de `fort-haight` para mantener orden cronológico/geográfico (no es subregión peripheral, es región externa).

### Reemplazo de em() por link()
9 ocurrencias de `em()` en la entrada `tierras-intermedias` reemplazadas por `link()` apuntando a las nuevas entries. Mantenido `em('finales')` como único `em()` deliberado restante.

### Auto-link retroactivo
125 inserciones distribuidas en 8 archivos de lore. Las menciones existentes de "Llama de Ruina", "Señor Elden", "Demidioses", "Fundamentalismo", "Tierras de los Cañaverales" en otras entradas ahora navegan a las nuevas entries.

### Decisiones técnicas no obvias

**`elden-lord` como concept, no character** — pese a que tres seres han ocupado el rol (Placidusax, Godfrey, potencialmente Tarnished), el título mismo es categoría cosmológica abstracta. Hacerlo character forzaría elegir un titular canónico, lo cual contradice la naturaleza dispositiva del título.

**`demidios` en singular** — el slug usa singular (no `demidioses`) por consistencia con el patrón del resto del glossary (`tarnished`, `empyrean`, `omen-curse` todos en forma básica). El término `term` sí está en singular en la entry. La prosa puede usar plural porque el auto-link maneja ambas formas.

**`lands-of-reeds` con guiones** — slug en inglés (no `tierras-de-los-cañaverales`). Razón: es topónimo de región externa al continente principal del codex; el codex ya deja en inglés otras regiones periféricas (`Castle Morne`, `Roundtable Hold`). Excepción al patrón "traducimos slugs cuando traducimos prosa".

**`flame-of-ruin` con `fallbackType: 'flame'`** — el sistema tiene un fallback dedicado para Llama Frenética / temas ígneos. Reutilizado para distinguir visualmente esta entrada de cosmologías áureas o de muerte.

**4 entries en glossary, 1 en regions** — decidido por naturaleza ontológica, no por importancia: Land of Reeds es lugar geográfico (region), los otros 4 son nociones cosmológicas (concept). El sistema soporta cross-links entre tipos sin fricción.

### Verificación
- `npx tsc --noEmit` → limpio
- `audit-cross-links.mts` → 0 broken refs
- `auto-link-pass.mts --all` → 125 link insertions retroactivas
- `npm run build` → bundle initial 158 kB gz (+3 kB por las 5 entries macro), `lore-glossary` 308 kB → 80 kB gz
- Total entradas: **381** (107 personajes + 68 facciones + **36 regiones** + **94 conceptos** + 70 eventos + 6 finales)

### Estado pre-DLC
Con esto cerrado, el codex está listo para empezar Phase 15: contenido SOTE. La arquitectura está probada (filtro a nivel block + entity + bucket item), las macro entries del juego base están todas presentes, los gaps conceptuales están cerrados, y el siguiente trabajo puede focalizarse exclusivamente en intercalar lore DLC sin tener que construir infrastructure colateral.

## Auditoría de código + auditoría visual pre-DLC (sesión 2026-05-02, post-macro-entries)

### Motivación
Antes de empezar Phase 15 (contenido SOTE), barrer deuda técnica latente. Dos auditorías separadas: una técnica (bugs, redundancias, código muerto) y una visual/UX (light mode, mobile, a11y, content gaps).

### Auditoría #1 — Código (24 fixes aplicados)

**Bugs reales (5)**:
- 3 violaciones de Rules-of-Hooks (early return ANTES de hooks): `EntityGraph.tsx`, `CategoryReadingPage.tsx`, `TagPage.tsx`. Patrón de fix: split en outer-router-gate + inner-content-component.
- Timer leaks sin cleanup: `QuoteShareBubble.tsx` (asignación a ref faltante), `ExportButton.tsx` (sin useEffect cleanup).
- `TimelineRibbon.tsx:184` Tailwind JIT no detectaba clases generadas dinámicamente con `${styles.bg.replace(...)}` — el border ni siquiera se aplicaba en producción.

**Bugs latentes (5)**:
- `TimelineRibbon` no respetaba el filtro SOTE (recibía `entries` en vez de `byExpansion(entries)`).
- `useEntityFilter()` retornaba objeto nuevo cada render → rebuild de Fuse index en SearchPage cada render. Fix: `useMemo([hideSote])`.
- `ShortcutsCheatsheet` sin focus trap (Tab escapaba). Fix: espejo del patrón de `GlossaryModal`.
- Conflicto de scroll-lock entre `SidebarNav` y `ShortcutsCheatsheet` (cada uno guardaba/restauraba `body.style.overflow` independientemente). Fix: nuevo `src/lib/scrollLock.ts` con counted lock compartido.
- Stale "Solo juego base" copy en footer y tagline contradiciendo arquitectura SOTE.

**Cleanup (8)**:
- Borrado completo: `src/lib/factionColors.ts` (171 líneas, sin imports), `docs/coverage-report.md`, `public/art/factions/zamor-heroes.jpg` (orphan).
- Dead exports eliminados: `progressByType` (readingHistory), `unmarkRead`+`isRead` (readStatus), `getAllNotes` (notes), `useEntityImageMeta` (imageSources), `isVisible` non-hook (expansion).
- Stale doc refs a `coveragePlan.ts` (archivo eliminado anteriormente) en agent.md, README.md.
- "Modo Lectura global" en README.md:347 (feature removida hace sesiones).

### Auditoría #2 — Visual / UX / contenido (36 fixes aplicados)

**Imágenes (3)**:
- 10 imágenes faltantes para macro concepts añadidos en sesiones previas (tierras-intermedias, lands-of-reeds, elden-lord, demidios, flame-of-ruin, storm-hawk-king, law-of-causality, blind-swordsman, golden-order-fundamentalism, stormhawk-deenh). Decisión: añadir entradas explícitas en `regionFallbacks` y `glossaryFallbacks` con SVG fallback temáticamente apropiado (golden-order/flame/cosmic/war/character) en vez de fetchear (las macro concepts son abstractas, no tienen art canónico de FromSoft). 3 imágenes de baja resolución documentadas para sesión dedicada de imágenes.

**Light mode hardcoded colors (8)**:
- Migración masiva de hex literales (`#c5a059`, `#0a0a08`) y palette Tailwind (`amber-300`, `blue-300`, `purple-300`) a CSS vars `rgb(var(--codex-X))` y palette `codex-*`. Archivos tocados: `index.css` (skip-to-content, focus-visible), `ScrollProgress.tsx`, `LandingPage.tsx` (radial gradients), `EndingsSection.tsx` (text-shadow theme-aware), `RoutesListPage.tsx` + `RouteDetailPage.tsx` (accentClasses), `TimelineRibbon.tsx` (eraStyles), `DetailLayout.tsx` (KnowledgeBox tone='moon').
- Mapping de colores de rutas narrativas: `gold|order|dusk|frenzied|stars|despair` ahora apuntan a `codex-gold|gold-dim|ghost|flame|rot|crimson` respectivamente.
- Mapping de eras del timeline: `pre-orden→codex-rot`, `orden-dorado→codex-gold`, `pre-fractura→codex-flame`, `fractura→codex-crimson`, `Tarnished→codex-ghost`.

**Funcional / contenido (4)**:
- `NotFoundPage` ahora tiene `usePageMeta` (antes el title quedaba con la página anterior).
- `SectionHeader` con prop nueva `asPageHeading` que renderiza `<h1>` en vez de `<h2>`. Aplicado en las 6 list pages (CharacterSection, FactionSection, RegionSection, GlossarySection, TimelineSection, EndingsSection).
- Botón visible "Atajos" en sidebar con kbd `?` que sintetiza `KeyboardEvent` (`new KeyboardEvent('keydown', { key: '?' })`) para abrir el cheatsheet — evita acoplar SidebarNav a ShortcutsCheatsheet.
- LandingPage hero CTAs: segunda CTA "Ver Timeline" → "Rutas Narrativas" (`Compass` icon, ruta `/rutas`). Antes ambas apuntaban a `/timeline`.

**Visual / mobile / a11y (13)**:
- `SectionHero` tamaño aumentado: `h-44 md:h-56` → `h-56 md:h-72` (mejor cadencia visual con DetailLayout `aspect-[16/6]`).
- `SectionHero` gradient bottom theme-aware (`var(--codex-black)`).
- `TimelineEntryCard` añadido `whileHover y:-3` + multi-layer shadow (paridad con EntityCard).
- `GenealogyPage` PersonCard: `min-w-[180px]` → `min-w-0 sm:min-w-[180px]` para evitar overflow horizontal en iPhone narrow.
- `TimelineRibbon` controls: `flex-row` → `flex-col sm:flex-row` para no wrappear awkward.
- `CertaintyBadge`: añadido `aria-label` + `<span class="sr-only">` con tooltip; color `text-amber-300` migrado a `text-codex-flame`.
- `EraBadge size="compact"`: añadido `<span class="sr-only">` para que screen readers anuncien la era.

**Polish (8)**:
- `CategoryReadingPage:224` bug fix: `meta.label.split(' ')[0]` daba "Enciclopedia" para personajes; cambiado a `category.charAt(0).toUpperCase() + slice(1)` que da "Personajes".
- `SidebarNav`: "70 capítulos" hardcoded → `${timelineData.length} capítulos`.
- `RouteDetailPage:92`: removidas comillas dobles dentro del blockquote (doble frame).
- `SearchPage`: añadido botón "Borrar búsqueda" cuando 0 resultados.
- `EmptyState`: title `font-heading uppercase` (estilo header) → `font-subheading italic` (mensaje).
- `ColorLegend:82`: `&gt;70 %` → `&gt;70%` (sin espacio).
- `DetailLayout:340`: Clock badge `size={9}` → `size={11}` con `text-[10px]` para legibilidad.
- `ScrollProgress` ahora se oculta en rutas de detalle (`useLocation()` + check de prefijo) para evitar solape con la barra per-article de DetailLayout.

### Decisiones técnicas no obvias

**Counted scroll lock** (`src/lib/scrollLock.ts`) — múltiples modales/drawers pueden lock body scroll independientemente sin pelearse por `body.style.overflow`. El lock solo se libera cuando el último acquirer llama su release function. Patrón previo: cada componente guardaba/restauraba `prevOverflow` por su cuenta — si dos consumidores lockaban simultáneamente, uno restauraba el `''` que el otro había guardado, dejando el body con scroll cuando debería estar bloqueado (o viceversa). El nuevo helper expone `acquireScrollLock(): () => void` que retorna release function — uso ergonómico desde `useEffect` cleanup.

**Hook order: gate component pattern** — para componentes que early-return basado en URL params (CategoryReadingPage, TagPage), el patrón consistente del proyecto es: outer component recibe `useParams`, valida, retorna `<Navigate>` o `<InnerComponent params={...} />`. El inner component recibe params como props y todos los hooks se llaman incondicionalmente. Esto preserva Rules-of-Hooks sin perder la conveniencia del early return.

**`?` synthetic keypress** — para añadir un botón visible que abra el cheatsheet sin acoplar SidebarNav a ShortcutsCheatsheet, el botón sintetiza `new KeyboardEvent('keydown', { key: '?' })`. El listener global de ShortcutsCheatsheet ya escucha la tecla `?`; sintetizarla es API-de-dispatch correcta, no hack. Previene que el cheatsheet tenga que exponer un imperative handle.

**Theme-aware vía CSS vars `rgb(var(--codex-X) / <alpha>)`** — el patrón existente del proyecto para colores que deben adaptarse a light mode. Cualquier hex literal como `#c5a059` o `rgba(212,173,98,0.5)` es deuda técnica: fija el color a la variante dark. Migración a `rgb(var(--codex-gold))` o `rgb(var(--codex-gold) / 0.5)` resuelve. Inline glow effects con literal RGB son tolerables porque son efectos atmosféricos, no tokens semánticos — pero la regla por defecto es: si un color tiene significado semántico (border, text, bg), usar var.

**Tailwind palette vs codex palette** — los colores Tailwind directos (`amber-300`, `blue-300`, `purple-300`) son dark-tuned por design system de Tailwind. En light mode (cream background) se desvanecen. La paleta `codex-*` definida con CSS vars sí adapta. Regla: para cualquier color UI que necesite distinción (era, accent, status), usar `codex-{gold|gold-dim|ghost|flame|rot|crimson|parchment}` — son los 7 tonos canónicos del proyecto.

**Tailwind JIT y nombres de clase dinámicos** — Tailwind solo detecta clases que aparecen literalmente en el código fuente. `${styles.bg.replace('bg-', 'border-l border-')}` produce nombres reales pero el JIT no los ve, así que el CSS de esas clases nunca se genera. El border resultante no se aplica en producción aunque el className sea correcto en runtime. Solución: hardcodear todas las clases posibles en un map estático, o usar clases base + inline style para color dinámico.

### Promoción de 5 macro concepts a deep-tier
Los 5 macro concepts añadidos en la sesión anterior (`flame-of-ruin`, `elden-lord`, `golden-order-fundamentalism`, `demidios`, `lands-of-reeds`) tenían solo `term`+`definition`+`deepDive` (prosa básica). Sus páginas de detalle eran thinner que las vecinas. Esta sesión los promovió a deep-tier completo: cada uno tiene ahora `deepLore: RichBlock[]` con 5-6 secciones h2/h3, los 4 buckets `confirmed`/`inferred`/`theories`/`ambiguous`, y `relatedX` cross-links. Total: ~60 link insertions retroactivas tras `auto-link-pass.mts --all`.

### Verificación
- `npx tsc --noEmit` → limpio
- `audit-cross-links.mts` → 0 broken refs
- `auto-link-pass.mts --all` → 63 link insertions retroactivas
- `npm run build` → limpio (initial 159 kB gz, +1 kB por deep-tier de 5 entries)
- Dev server boot: `curl http://localhost:5173/conceptos/elden-lord` → 200 OK (mismo para flame-of-ruin, lands-of-reeds)
- MANUAL_ALIASES sync: `diff scripts/auto-link-pass.mts vs src/lib/enrichText.ts` → solo diferencia comentario (no funcional)

### Smoke test pendiente para el usuario
El dev server boota y los nuevos endpoints retornan 200. Pero la verificación visual necesita inspección humana:
- Light mode (toggle en sidebar): ScrollProgress visible, LandingPage hero readable, Routes accent colors readable, TimelineRibbon era dots con buen contraste, KnowledgeBox-moon legible
- Mobile (DevTools responsive ≤375px): Genealogy cards no overflow, TimelineRibbon controls stack, h1 swap no rompe layouts
- `?` shortcut: botón nuevo en sidebar abre cheatsheet, Tab cycla dentro del modal sin escapar
- Detail pages: SectionHero más alto no rompe layouts, hero parallax sigue funcionando

### Estado final pre-DLC
Codex con 381 entradas + arquitectura SOTE + 0 broken refs + 0 deuda técnica conocida + light mode totalmente theme-aware. Listo para empezar Phase 15 — el siguiente trabajo es exclusivamente contenido DLC.
