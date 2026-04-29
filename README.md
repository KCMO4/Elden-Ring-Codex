# Elden Ring: Códice del Orden Fracturado

Lore book / wiki personal y sin fines de lucro sobre el lore del **juego base** de Elden Ring. Aplicación React de página única, en español, con estética de manuscrito oscuro y dorado envejecido.

---

## Descargo de responsabilidad

> Este proyecto es un códice fan-made, personal y sin fines de lucro sobre el lore del juego base de Elden Ring. No está afiliado, patrocinado ni aprobado por FromSoftware, Bandai Namco ni ningún titular de derechos. El repositorio no incluye assets oficiales del juego ni URLs de imágenes protegidas. El usuario puede configurar imágenes locales o URLs externas mediante un archivo local ignorado por Git para uso personal en localhost. Si el proyecto se publica, distribuye o comparte públicamente, se recomienda usar únicamente imágenes propias, con licencia compatible o con permiso del autor. El uso sin fines de lucro no implica autorización automática para usar material protegido por copyright.

Solo cubre contenido del juego base. **No** incluye Shadow of the Erdtree.

---

## Instalación y uso

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Stack

- React 18 + TypeScript + Vite
- React Router v6 (rutas y páginas detalladas)
- Tailwind CSS (sistema de colores `codex-*`)
- Framer Motion (transiciones y animaciones)
- lucide-react (iconos)

---

## Sistema de imágenes locales

El códice resuelve cada imagen de entidad en este orden de prioridad:

1. **`public/image-sources.local.json`** (override remoto/local — *gitignored*).
2. **`public/art/{categoria}/{id}.{jpg|png|webp}`** (archivo local en disco).
3. **Ilustración SVG fallback** generada automáticamente por categoría.

Si todas fallan, el SVG fallback siempre se renderiza — el códice nunca se queda sin imagen.

### `image-sources.local.json` — archivo local

Este archivo es **personal y nunca debe ser commiteado**. Está en `.gitignore`.

Se carga al inicio de la app desde `/image-sources.local.json`. Si existe y es JSON válido, sus URLs sustituyen a cualquier imagen local o fallback.

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
# .gitignore:8:public/image-sources.local.json (debe coincidir)
```

### Imágenes locales en disco

Si prefieres tener imágenes guardadas localmente (en lugar de URLs):

```
public/
└── art/
    ├── characters/   → retratos          (400×500 px, 4:5)
    ├── regions/      → banners           (800×350 px, 16:7)
    ├── factions/     → emblemas          (600×400 px, 3:2)
    ├── endings/      → ilustraciones     (600×400 px, 3:2)
    └── concepts/     → arte conceptual   (800×350 px, 16:7)
```

El nombre del archivo debe coincidir con el `id` de la entidad: `public/art/characters/malenia.jpg`.

Estas carpetas también están **gitignoreadas** (excepto los `.gitkeep`). Tus imágenes propias permanecen locales.

---

## Rutas

La app es un wiki completo con páginas dedicadas para cada entidad:

| Ruta                    | Página                              |
|-------------------------|-------------------------------------|
| `/`                     | Portada                             |
| `/timeline`             | Lista de capítulos del timeline     |
| `/timeline/:slug`       | Página detallada del capítulo       |
| `/personajes`           | Enciclopedia de personajes          |
| `/personajes/:slug`     | Página detallada del personaje      |
| `/facciones`            | Lista de facciones                  |
| `/facciones/:slug`      | Página detallada de la facción      |
| `/regiones`             | Lista de regiones                   |
| `/regiones/:slug`       | Página detallada de la región       |
| `/conceptos`            | Glosario de conceptos               |
| `/conceptos/:slug`      | Página detallada del concepto       |
| `/finales`              | Los seis finales                    |
| `/finales/:slug`        | Página detallada del final          |
| `/busqueda`             | Búsqueda global (`Ctrl+K`)          |

Cada página detallada incluye: hero image, breadcrumbs, tabla de contenido, tags, certainty badge, summary, lore detallado con enlaces internos cruzados, lo confirmado / inferido / ambiguo, beneficiarios y víctimas, listas de entidades relacionadas, y navegación previo/siguiente.

---

## Agregar contenido nuevo

### Personaje nuevo

1. Edita `src/data/characters.ts`, añade un objeto siguiendo el tipo `Character`.
2. (Opcional) Añade lore profunda en `src/data/lore/charactersLore.ts` con su `id` como clave.
3. (Opcional) Imagen en `public/art/characters/<id>.jpg`.
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

---

## Estructura del proyecto

```
src/
├── App.tsx                            # BrowserRouter + AppShell con sidebar/header
├── data/
│   ├── types.ts                       # Tipos compartidos + RichBlock + DeepEntity
│   ├── timeline.ts                    # 16 capítulos
│   ├── characters.ts                  # 30 + 16 personajes (mancillados/NPCs)
│   ├── factions.ts                    # 21 facciones
│   ├── regions.ts                     # 18 regiones
│   ├── glossary.ts                    # 26 conceptos
│   ├── endings.ts                     # 6 finales
│   ├── lookups.ts                     # findX, pathFor, resolveX, neighbors
│   ├── lore/
│   │   ├── charactersLore.ts          # Deep lore de personajes (RichBlock[])
│   │   ├── regionsLore.ts             # Deep lore de regiones
│   │   ├── factionsLore.ts            # Deep lore de facciones
│   │   ├── glossaryLore.ts            # Deep lore de conceptos
│   │   └── timelineLore.ts            # Deep lore de capítulos
│   └── index.ts                       # Re-exports
├── lib/
│   ├── assetPaths.ts                  # categoryToArtPath
│   ├── fallbackMap.ts                 # ID → FallbackType
│   └── imageSources.ts                # Provider + useImageSources + useEntityImage
├── pages/
│   ├── CharacterDetailPage.tsx
│   ├── RegionDetailPage.tsx
│   ├── FactionDetailPage.tsx
│   ├── ConceptDetailPage.tsx
│   ├── TimelineDetailPage.tsx
│   ├── EndingDetailPage.tsx
│   ├── SearchPage.tsx
│   └── NotFoundPage.tsx
└── components/
    ├── SidebarNav.tsx                 # NavLink-based sidebar
    ├── LandingPage.tsx                # Portada
    ├── TimelineSection.tsx            # Lista timeline
    ├── CharacterSection.tsx           # Lista personajes
    ├── FactionSection.tsx             # Lista facciones
    ├── RegionSection.tsx              # Lista regiones
    ├── GlossarySection.tsx            # Lista conceptos
    ├── EndingsSection.tsx             # Grid finales
    ├── RichLoreText.tsx               # Renderiza RichBlock[] con enlaces internos
    ├── detail/
    │   └── DetailLayout.tsx           # Layout genérico con hero + ToC + sidebar
    ├── images/
    │   ├── CodexImage.tsx             # Resolver con prioridad override→/art→fallback
    │   └── FallbackIllustrations.tsx  # ~20 sigilos SVG originales
    └── ...
```

---

## Características

- **Wiki completo** con páginas dedicadas para cada entidad
- **Enlaces internos cruzados** entre lore via `RichLoreText`
- **Tabla de contenido** auto-generada en cada página detallada
- **Búsqueda global** (Ctrl+K) con resultados agrupados
- **Sistema de imágenes 3-niveles** (override remoto → local → fallback SVG)
- **Filtros por certeza** (Confirmado / Inferencia / Teoría)
- **Modo Lectura** (oculta UI secundaria)
- **Ilustraciones SVG originales** — no usa assets de FromSoftware
- **Responsive**: desktop, tablet, móvil

---

## Notas de licencia

El código fuente del códice (componentes, lógica, ilustraciones SVG originales) puede ser reutilizado por el usuario para fines personales. El **lore textual** se basa en interpretación del juego base; el copyright del lore subyacente pertenece a FromSoftware/Bandai Namco. Las imágenes externas que el usuario configure mediante `image-sources.local.json` permanecen propiedad de sus respectivos titulares y solo deben ser usadas localmente.
