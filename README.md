# Elden Ring: Códice del Orden Fracturado

Lore book / wiki del juego base de Elden Ring. Aplicación React de página única, en español, con estética de manuscrito oscuro y dorado envejecido.

## Instalación y uso

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS (sistema de colores `codex-*`)
- Framer Motion (transiciones y animaciones)
- lucide-react (iconos)

## Imágenes locales

El códice soporta imágenes locales para personajes, regiones, facciones, finales y conceptos del glosario. Si no hay imagen, se muestra una ilustración SVG original automáticamente.

### Dónde colocar las imágenes

```
public/
└── art/
    ├── characters/   → retratos de personajes      (400×500 px recomendado, 4:5)
    ├── regions/      → banners de regiones          (800×350 px recomendado, 16:7)
    ├── factions/     → emblemas de facciones        (600×400 px recomendado, 3:2)
    ├── endings/      → ilustraciones de finales     (600×400 px recomendado, 3:2)
    └── concepts/     → arte conceptual del glosario (800×350 px recomendado, 16:7)
```

### Nombres de archivo

El nombre del archivo debe coincidir con el `id` del elemento en los datos, en formato `.jpg` (también acepta `.png`, `.webp`).

Ejemplos:

| Sección     | ID del dato        | Archivo esperado                        |
|-------------|--------------------|-----------------------------------------|
| Personajes  | `marika`           | `public/art/characters/marika.jpg`      |
| Personajes  | `malenia`          | `public/art/characters/malenia.jpg`     |
| Regiones    | `caelid`           | `public/art/regions/caelid.jpg`         |
| Regiones    | `farum-azula`      | `public/art/regions/farum-azula.jpg`    |
| Facciones   | `golden-order`     | `public/art/factions/golden-order.jpg`  |
| Finales     | `fracture`         | `public/art/endings/fracture.jpg`       |
| Glosario    | `elden-ring-item`  | `public/art/concepts/elden-ring-item.jpg` |

Los IDs están definidos en `src/data/` (campo `id` de cada objeto). Puedes listarlos todos con:

```bash
grep -h '"id":' src/data/characters.ts src/data/regions.ts src/data/factions.ts src/data/glossary.ts
```

### Nota sobre imágenes externas

No uses URLs externas ni enlaces directos a imágenes de FromSoftware. Solo imágenes colocadas localmente en `public/art/`. El códice no hace peticiones a servidores externos.

## Agregar contenido nuevo

### Nuevo personaje

1. Abre `src/data/characters.ts`
2. Añade un objeto siguiendo el tipo `Character` definido en `src/data/types.ts`
3. Coloca la imagen en `public/art/characters/<id>.jpg`
4. Si quieres un sigilo SVG específico, añade una entrada en `src/lib/fallbackMap.ts` → `characterFallbacks`

### Nueva región

1. Abre `src/data/regions.ts`, añade objeto tipo `Region`
2. Imagen en `public/art/regions/<id>.jpg`
3. Fallback en `src/lib/fallbackMap.ts` → `regionFallbacks`

### Nueva facción

1. Abre `src/data/factions.ts`, añade objeto tipo `Faction`
2. Imagen en `public/art/factions/<id>.jpg`
3. Fallback en `src/lib/fallbackMap.ts` → `factionFallbacks`

### Nuevo término de glosario

1. Abre `src/data/glossary.ts`, añade objeto tipo `GlossaryEntry`
2. Imagen en `public/art/concepts/<id>.jpg`
3. Fallback en `src/lib/fallbackMap.ts` → `glossaryFallbacks`

## Estructura del proyecto

```
src/
├── App.tsx                        # Raíz: navegación, búsqueda global, modo lectura
├── data/
│   ├── types.ts                   # Tipos compartidos + FallbackType
│   ├── timeline.ts                # 16 capítulos del timeline
│   ├── characters.ts              # 30 personajes
│   ├── factions.ts                # 21 facciones
│   ├── regions.ts                 # 18 regiones
│   ├── glossary.ts                # 26 términos del glosario
│   └── index.ts                   # Re-exports
├── lib/
│   ├── assetPaths.ts              # Helpers para rutas de imágenes en public/art/
│   └── fallbackMap.ts             # Mapeo ID → FallbackType para ilustraciones SVG
└── components/
    ├── SidebarNav.tsx             # Navegación lateral (desktop + mobile drawer)
    ├── LandingPage.tsx            # Portada con árbol animado
    ├── TimelineSection.tsx        # Timeline con filtros
    ├── CharacterSection.tsx       # Enciclopedia de personajes
    ├── FactionSection.tsx         # Facciones y enemigos
    ├── RegionSection.tsx          # Regiones del Interregno
    ├── GlossarySection.tsx        # Wrapper con SectionHero
    ├── GlossaryModal.tsx          # Grid + modal de detalle del glosario
    ├── EndingsSection.tsx         # Los 6 finales
    ├── SectionHero.tsx            # Banner hero de cada sección
    ├── SearchBar.tsx              # Barra de búsqueda
    ├── CertaintyBadge.tsx         # Badge: Confirmado / Inferencia / Teoría
    ├── TagPill.tsx                # Etiquetas filtrables
    ├── ScrollProgress.tsx         # Barra de progreso de scroll
    ├── SectionHeader.tsx          # Encabezados de sección
    └── images/
        ├── CodexImage.tsx         # Imagen con fallback SVG automático
        └── FallbackIllustrations.tsx  # ~20 sigilos SVG originales
```

## Características

- **Timeline profundo**: 16 capítulos desde la era pre-Orden hasta los finales
- **30 personajes** con rol, tragedia, eventos, relaciones y significado temático
- **21 facciones** con creencias y relación con el Orden Dorado
- **18 regiones** con historia, jefes y tragedia oculta
- **26 términos** en el glosario interactivo con análisis profundo
- **6 finales** explicados filosóficamente
- Búsqueda global (Ctrl+K) a través de todas las secciones
- Filtros por certeza (Confirmado / Inferencia / Teoría)
- Modo Lectura (oculta UI secundaria)
- Ilustraciones SVG originales — no usa assets de FromSoftware
- Soporte de imágenes locales con fallback automático
- Responsive: desktop, tablet, móvil

## Nota

Solo cubre el juego base. No incluye contenido de Shadow of the Erdtree.
"# Elden-Ring-Codex" 
