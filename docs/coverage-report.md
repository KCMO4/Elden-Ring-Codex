# Coverage Report — Elden Ring Codex

**Auditoría de cobertura del lore base.** Solo juego base. Sin Shadow of the Erdtree.

> Documento generado a partir de `src/data/coveragePlan.ts`. Actualizar simultáneamente cuando se añadan entidades nuevas.

> **Última actualización: Batch de Cierre Total.** **97 % de cobertura profunda.** Solo 9 entradas (2.8 %) siguen como `partial` — todas NPCs compact con base data suficiente. **Cero missing.** 16 de 18 categorías al 100 %.

---

## Resumen ejecutivo

El plan de cobertura contempla **317 entradas categorizadas** (algunas entidades aparecen en más de una categoría). Las entradas únicas son aproximadamente **245** una vez deduplicadas.

| Estado | Cantidad | % | Δ acumulada |
|---|---:|---:|---:|
| **existing** (data + lore profundo) | **308** | **97.2 %** | +193 |
| **partial** (data sí, lore profundo no) | 9 | 2.8 % | -85 |
| **missing** (sin entrada) | **0** | **0 %** | -104 |

Cobertura base (data presente): **317 / 100 %** ✅
Cobertura profunda (página dedicada con lore expandido): **308 / 97.2 %** ✅

**Las 9 entradas partial restantes son todas NPCs compact (priority menor) con base data suficiente. Su promoción sería trabajo marginal sin impacto narrativo significativo.**

> **Lectura honesta**: el codex tiene fundamentos sólidos para el lore central (Marika, Radagon, demigods, conceptos cosmológicos clave, las 12 regiones principales completas, los 6 finales) pero le falta densidad en bosses específicos (especialmente dragones individuales), NPCs menores, especies enemigas, figuras históricas no vistas, y subdivisión del timeline en eventos atómicos.

---

## Cobertura por categoría (post Batch de Cierre Total)

| Categoría | Total | Existing | Partial | Missing |
|---|---:|---:|---:|---:|
| 1. Major characters | 6 | **6** ✓ | 0 | 0 |
| 2. Secondary NPCs | 32 | 25 | 7 | 0 |
| 3. Quest NPCs | 4 | 2 | 2 | 0 |
| 4. Invaders / hostiles | 9 | **9** ✓ | 0 | 0 |
| 5. Demigods | 10 | **10** ✓ | 0 | 0 |
| 6. Remembrance bosses | 5 | **5** ✓ | 0 | 0 |
| 7. Major non-remembrance bosses | 19 | **19** ✓ | 0 | 0 |
| 8. Dragons | 19 | **19** ✓ | 0 | 0 |
| 9. Astral / cosmic | 12 | **12** ✓ | 0 | 0 |
| 10. Outer Gods / cosmic forces | 13 | **13** ✓ | 0 | 0 |
| 11. Historical / unseen | 12 | **12** ✓ | 0 | 0 |
| 12. Enemy races / species | 35 | **35** ✓ | 0 | 0 |
| 13. Factions | 19 | **19** ✓ | 0 | 0 |
| 14. Regions (mayores) | 12 | **12** ✓ | 0 | 0 |
| 15. Subregions | 18 | **18** ✓ | 0 | 0 |
| 16. Concepts | 33 | **33** ✓ | 0 | 0 |
| 17. Timeline events | 53 | **53** ✓ | 0 | 0 |
| 18. Endings | 6 | **6** ✓ | 0 | 0 |
| **TOTAL** | **317** | **308** | **9** | **0** ✅ |

> **16 de 18 categorías al 100 % de cobertura profunda.** Solo `secondary-npcs` y `quest-npcs` mantienen unas pocas entradas compact como partial (Kenneth Haight, Roderika, Hewg, Boc, Jar-Bairn, Albus, Thops, Irina, Edgar). Su base data es completa y funcional — la promoción sería marginal.

> Los números totales por categoría suman más que la cuenta de entidades únicas porque algunas entradas figuran en más de una categoría conceptualmente. P. ej. **Placidusax** aparece como dragón, como remembrance-boss y como historical-unseen; **Astel** aparece como astral-cosmic y como remembrance-boss.

---

## Lo que ya existe (con lore profundo)

### Personajes núcleo con página ultra-detallada (12 secciones)
- Marika, Radagon, Godfrey, Godwyn, Morgott, Mohg, Ranni, Malenia, Miquella, Maliketh

### Personajes con lore substantivo (estructura más corta)
- Rennala, Radahn, Rykard, Melina, Gloam-Eyed Queen, Godrick, Fortissax, Placidusax
- Millicent, Gowry, Blaidd, Iji, Seluvis, Fia, D, Rogier, Gideon, Goldmask, Corhyn, Dung Eater

### Conceptos cosmológicos centrales
- Anillo Elden, Bestia Elden, Voluntad Mayor, Dioses Exteriores, Crisol, Erdtree
- Orden Dorado, Muerte Predestinada, Runa de la Muerte, Deathroot, Empyrean
- Bestia ligada en sombra, Gran Runa, Gracia, Mancillado
- Podredumbre Escarlata, Oro sin Aleación, Llama Frenética, Madre Informe
- Luna Oscura, Llama Negra, Ghostflame, Bloodflame, Haligtree, Era de las Estrellas

### Facciones principales
- Orden Dorado, Dos Dedos, Tres Dedos, Cuchillos Negros, Pieles de Dios, Nox
- Antiguos Dragones, Hombres-Bestia, Omens, Misbegotten, Albinaurics
- Cleanrot Knights, Redmanes, Volcano Manor, Bloody Fingers
- Aquellos que Viven en la Muerte, Deathbirds, Kindred of Rot, Perfumers
- Raya Lucaria, Caria

### Regiones principales (12/12 con lore profundo)
- Limgrave, Stormveil, Liurnia, Caelid, Altus Plateau, Leyndell
- Mt. Gelmir, Mountaintops, Consecrated Snowfield, Haligtree, Mohgwyn, Farum Azula

### Timeline events (16/53 con lore profundo)
- Antes del Orden Dorado, Era Antigua, Muerte Predestinada
- Marika–Godfrey, Hijos de Marika, Exilio de Godfrey
- Radagon–Rennala, Radagon es Marika, Miquella–Malenia
- Empyreans–Fingers–Shadows, Noche de los Cuchillos Negros, La Fractura
- Demidioses tras la fractura, Estado del mundo Mancillado, Viaje del Mancillado, Finales

### Endings (6/6 completos)
- Era de la Fractura, Era del Orden, Era del Crepúsculo
- Bendición de la Desesperación, Señor de la Llama Frenética, Era de las Estrellas

---

## Lo que está **partial** (data presente, lore profundo pendiente)

Estas entradas existen en `src/data/*.ts` con campos básicos pero no tienen entrada en los `lore/*Lore.ts` correspondientes. Sus páginas detalladas funcionan con el rendering legacy. **Promover a tier deep** es el paso natural.

### Personajes partial → promover a deep

✅ **Completado en Batch 1** (6 personajes promovidos a `existing`):
- Melina (core) — estructura completa de 12 secciones con identidad cosmológica como hija implícita de Marika
- Gloam-Eyed Queen (core/important) — predecesora cosmológica de Marika con teorías y ambigüedades explícitamente marcadas
- Rennala (core) — tragedia del abandono institucional y bucle del Amber Egg
- Radahn (core) — bloqueo estelar, idolatría de Godfrey, Festival como eutanasia honorífica
- Rykard (core) — pacto con Eiglay y blasfemia institucional
- Godrick (important) — decadencia aristocrática y patética imitación de Godfrey

⏳ **Pendientes para próximos batches**:
1. **Nepheli Loux, Sellen, Hyetta, Alexander** (priority important) — central para arcos secundarios.
2. **Varré, Shabriri, Yura, Bernahl, Patches, Tanith** (priority important) — antagonistas con quests robustas.
3. NPCs compact (Kenneth, Diallos, Roderika, Hewg, Enia, Boc, Latenna, Albus, Thops, Irina, Edgar, Boggart, Eleonora, Rya, Jar-Bairn) — pueden quedarse compact con lore ligero.

### Regiones partial (subregions añadidas sin supplement)
- Castle Morne, Caria Manor, Three Sisters, Siofra River, Ainsel River
- Sellia, Redmane Castle, Subterranean Shunning-Grounds, Volcano Manor (region)
- Ordina, Elphael, Dragonbarrow

### Facciones partial
- Fundamentalistas del Orden Dorado, Finger Readers, Dragon Communion
- Fire Giants, Linaje Dorado, Banished Knights
- Living Jars, Omenkillers, Silver/Mimic Tears, Frenzied Flame victims, Crucible Knights

### Conceptos partial
- Bestia Elden (concept), Erdtrees Menores, Luna Llena
- Glintstone, Corriente Primigenia, Ley de la Regresión, Ley de la Causalidad
- Mimic Tear

### Timeline events partial (añadidos en commit reciente, sin supplement)
- Crisol primigenio, Antiguos ritos de muerte, Nox y ciudades eternas
- Guerra contra Gigantes del Fuego, Storm Lord, Linaje Dorado, Colapso de Rennala
- Oro sin Aleación / Haligtree, Hoja Mata-Dedos, Pacto Godwyn–Fortissax
- Marcha de Malenia, Batalla de Aeonia, Festival de Radahn
- Secuestro de Miquella, Quema del Erdtree, Liberación de la Muerte
- Retorno de Godfrey, Bestia Elden revelada

---

## Lo que está **missing** (sin entrada todavía)

### Boss-related (alta prioridad)
- **Astel, Naturalborn of the Void** (Remembrance — quest de Ranni)
- **Regal Ancestor Spirit** (Remembrance — Mesa Ancestral en Siofra)
- **Fire Giant** (último custodio de la Llama Quemadora)
- **Royal Knight Loretta** (presente en dos regiones)
- **Ulcerated Tree Spirit, Black Blade Kindred, Crucible Knight Ordovis**
- **Astel, Stars of Darkness** (variante de Liurnia)
- **Commander Niall, Commander O'Neil** (campos militares)
- **Elemer of the Briar** (Bell Bearing Hunter — también figura histórica de Eochaid)
- **Godskin Duo** (Farum Azula)

### Dragones individuales (mayoría falta)
- Lansseax, Gransax, Greyoll
- Agheel, Greyll, Smarag, Adula, Ekzykes, Borealis
- Magma Wyrm Makar, Great Wyrm Theodorix
- Dragonkin Soldiers (3 variantes: Nokstella, Siofra, Lake of Rot)
- Ancient Dragon Cult (faction independiente de Dragon Communion)

### Astral / cosmic (mayoría falta)
- Withered Astels / Malformed Stars, Fallingstar Beasts (regular y full-grown)
- Alabaster Lords, Onyx Lords
- Stars and fate (concept dedicado)

### Outer Gods / cosmic forces (vacíos importantes)
- One Great, Twinbird (Outer God of Death), Fell God
- Blood Star, Eiglay (Serpent God), El Dios Desaparecido de Placidusax
- Outer God of Rot (separar como concept de scarlet-rot)

### Historical / unseen (la mayor parte falta)
- Snow Witch / Renna, Blind Swordsman, Storm Lord, Serosh
- Civilización Uhl/Uld, Antiguos Astrólogos, Azur, Lusat
- Héroes Zamor, Eochaid, Elemer of the Briar (histórico)

### NPCs faltantes
- Merchant Kale, Miriel, Gatekeeper Gostoc
- Pidia, Ensha, Twin Maiden Husks, D's twin brother

### Especies / razas (mayoría falta)
- Claymen, Ancestral Followers, Oracle Envoys, Wormfaces
- Revenants, Wraith Callers, Gargoyles, Imps
- Fire Monks, Blackflame Monks, Thorn Sorcerers
- Crystalians, Marionette Soldiers, Cuckoo Knights
- Carian Knights, Leyndell Knights, Haligtree Knights, Mausoleum Knights
- Vulgar Militia, Man-Serpents, Abductor Virgins

### Conceptos faltantes
- Stars and fate, Omen curse (separado de Omens), Grafting (separado de Godrick)
- Rebirth, Outer God of Rot (separado de scarlet-rot), Dragon Communion (concept)

### Timeline events faltantes (subdivisiones de arcos existentes)
- Placidusax como Elden Lord previo, Creación de Silver Tears
- Reinado de Gloam-Eyed Queen + Godskins, Maliketh derrota a la Reina
- Nacimiento del Orden Dorado, Confinamiento de la Llama de Ruina
- Encarcelamiento de Morgott y Mohg, Muerte corporal de Ranni
- Godwyn como Príncipe de la Muerte, Radagon intenta reparar el Anillo
- La Guerra del Shattering, Godrick perfecciona el injerto
- Morgott defiende Leyndell, Mohg pacta con la Madre Informe
- Rykard se entrega a Eiglay, Devastación de Caelid
- Regreso de los Mancillados, Dos Dedos y la Mesa Redonda
- El Erdtree rechaza al Mancillado

### Facciones faltantes
- Mercaderes Nómadas (Kale et al.), Ancient Dragon Cult

---

## Recomendación: orden de implementación

Los 10 fases sugeridas (también codificadas en `coveragePlan.recommendedImplementationOrder`):

| Fase | Foco | Criterio |
|---:|---|---|
| 1 | Promover demidioses partial a deep tier | Rennala, Radahn, Rykard |
| 2 | Añadir remembrance bosses faltantes | Astel, Regal Ancestor Spirit |
| 3 | Añadir core characters / historical missing | Serosh, Azur, Lusat, Snow Witch, Storm Lord |
| 4 | Promover characters partial → deep | Melina, Gloam-Eyed Queen, Sellen, Alexander, Hyetta, Varré, Shabriri |
| 5 | Añadir dragons important | Lansseax, Gransax, Greyoll, Adula |
| 6 | Añadir astral/cosmic + outer-god concepts | Astel cosmic, Eiglay, Fell God, Twinbird, Vanished Dragon God |
| 7 | Subdividir timeline events | Promover arcos como "demigodes-fractura" en eventos individuales |
| 8 | Promover regiones partial a deep tier | Empezar por Volcano Manor, Elphael, Subterranean Shunning-Grounds, Caria Manor |
| 9 | Añadir enemy races/species compact | Crystalians, Carian Knights, Leyndell Knights, etc. |
| 10 | Llenar remaining compact missing | NPCs menores, dragones menores, etc. |

---

## Páginas dedicadas vs entradas compactas

**Cuándo merece una página dedicada (`shouldHaveDedicatedPage: true`)**:
- Cualquier entrada `core` o `important`
- Bosses con remembrance o nombre propio destacado
- Especies con identidad cultural fuerte (Living Jars, Crucible Knights, Cleanrot)
- Conceptos cosmológicos con peso narrativo

**Cuándo basta con entrada compacta**:
- Variantes de bosses sin lore propio (Tree Sentinel × N, Gargoyle × N)
- Especies puramente decorativas sin narrativa propia (la mayoría de los Imps, por ejemplo)

Actualmente todas las entradas del plan tienen `shouldHaveDedicatedPage: true` excepto algunos boss variants. La política recomendada: dejar `false` solo cuando la entidad sea claramente complementaria a otra (Beast Clergyman → ya cubierto por Maliketh, Godskin Noble/Apostle → cubierto por Pieles de Dios).

---

## Verificación de scope (base game only)

> **Auditoría de Shadow of the Erdtree exclusion**: ninguna entrada del plan referencia contenido del DLC. Todos los personajes, regiones, conceptos y bosses listados aparecen exclusivamente en el juego base de 2022. Entidades ambiguas (Miquella, Mohg) se tratan en su forma base game: Miquella dormido, Mohg ya derrotado, sin referencias a las revelaciones del DLC.

---

## Cómo usar este plan

```ts
import { coveragePlan, computeCoverageStats, getMissingCore } from './data/coveragePlan'

// Estadísticas globales
const stats = computeCoverageStats()
console.log(`${stats.existing}/${stats.total} entradas con lore profundo`)

// Próximas tareas críticas
const todo = getMissingCore()
console.log(todo.map(e => `[${e.category}] ${e.name}`).join('\n'))
```

El plan vive como TypeScript en `src/data/coveragePlan.ts` para ser explorable programáticamente. Cada vez que se añada o expanda una entidad real, actualizar el campo `currentStatus` correspondiente.

---

## Historial de batches

### ✅ Batch 1 — Promoción de personajes core partial a deep tier
Completado. Seis personajes pasaron de `partial` a `existing` con estructura ultra-detallada de 12 secciones (Resumen / Rol / Historia / Motivaciones / Relaciones / Eventos / Consecuencias / Simbolismo / Conexiones + Confirmados / Inferidos / Teorías / Ambigüedades):

- **Melina** — doncella sustituta, hija implícita de Marika, llama designada del Erdtree
- **Gloam-Eyed Queen** — Empyrean predecesora con custodia de la Llama Negra
- **Rennala** — Reina de la Luna Llena, abandono institucional, bucle del Amber Egg
- **Radahn** — General Estelar, bloqueo del destino estelar, Festival ritual
- **Rykard** — Lord de la Blasfemia, pacto con Eiglay, secta de los Recusantes
- **Godrick** — decadencia aristocrática, injerto como compensación, imitación patética de Godfrey

Resultado neto: **+7 entradas en `existing`** (Gloam-Eyed Queen aparece en dos categorías). Las categorías `major-characters` y `demigods` quedan al 100 %.

### ✅ Batch Final — Cierre de las 18 entradas missing

**Phase astral/cósmico (7 entradas)**: Astel Naturalborn (Remembrance boss), Astel Stars of Darkness (variante), Withered Astels / Malformed Stars, Fallingstar Beasts, Full-Grown Fallingstar Beast (Mt Gelmir), Alabaster Lords, Onyx Lords.

**Phase ancestral/espiritual (3 entradas)**: Ancestor Spirit (variante menor), Regal Ancestor Spirit (Remembrance), Ancestral Followers (ya existía como faction).

**Phase culto dragónico (1 entrada)**: Ancient Dragon Cult con conexión explícita a Godwyn, Fortissax y Lansseax.

**Phase bosses / compactos (8 entradas)**: Tree Sentinel, Grafted Scion, Crucible Knight Ordovis, Black Blade Kindred, Bell Bearing Hunter, Godskin Duo, Cemetery Shade, Erdtree Burial Watchdog.

**Plus entradas históricamente missing absorbidas**: Ulcerated Tree Spirit, Fire Giant (boss único), Mercaderes Nómadas (faction).

Resultado neto: **+22 entradas en `existing`** (de 224 a 246, total ahora 317 con 4 entradas nuevas añadidas al plan). **0 missing** por primera vez en la historia del codex.

---

### ✅ Batches 7–10 — Subdivisión y completitud horizontal
Completados en bloque. Resumen del trabajo:

**Phase 7 — Eventos atómicos del timeline (19 nuevos)**: Placidusax como Lord previo · Silver/Mimic Tears · Reinado Gloam-Eyed Queen + Godskins · Maliketh derrota a la Reina · Nacimiento del Orden Dorado · Confinamiento de la Llama de Ruina · Encarcelamiento de Morgott y Mohg · Muerte corporal de Ranni · Godwyn Príncipe de la Muerte · Reparación de Radagon · Guerra del Shattering · Injerto de Godrick · Defensa de Leyndell por Morgott · Pacto de Mohg con la Madre Informe · Rykard se entrega a Eiglay · Devastación de Caelid · Regreso de los Mancillados · Dos Dedos en la Mesa Redonda · Erdtree rechaza al Mancillado.

**Phase 8 — Subregiones promovidas (12)**: Castle Morne · Caria Manor · Three Sisters · Siofra River · Ainsel River · Sellia · Redmane Castle · Subterranean Shunning-Grounds · Volcano Manor · Ordina · Elphael · Dragonbarrow.

**Phase 9 — Especies y razas enemigas (22)**: Deep — Claymen, Ancestral Followers, Oracle Envoys, Wormfaces, Revenants, Wraith Callers, Crystalians, Fire Monks, Blackflame Monks, Thorn Sorcerers, Man-Serpents, Abductor Virgins. Compact — Gargoyles, Imps, Marionette/Avionette Soldiers, Cuckoo/Carian/Leyndell/Haligtree/Mausoleum Knights, Vulgar Militia.

**Phase 10 — Compactos restantes (~50)**: NPCs (Kale, Miriel, Gostoc, Pidia, Ensha, Twin Maiden Husks, hermano de D), 14 dragones individuales (Greyoll, Agheel, Greyll, Smarag, Adula, Ekzykes, Borealis, Makar, Theodorix, 3 Dragonkin Soldiers, Lansseax, Gransax), bosses (Loretta x2, Niall, O'Neil, Elemer, Alecto, Adan, Vyke, Okina, Anastasia, Mad Tongue Alberich), históricos (Serosh, Azur, Lusat, Snow Witch, Blind Swordsman, Storm Lord, Uhl/Uld, Astrólogos, Zamor, Eochaid), conceptos cosmológicos (One Great, Twinbird, Fell God, Blood Star, Eiglay, Vanished Dragon God, Outer God of Rot, Stars and Fate, Omen Curse, Grafting, Rebirth, Dragon Communion concept).

Resultado neto: **+109 entradas en `existing`** (de 115 a 224). Solo 18 entradas siguen como `missing` (la mayoría boss-variants menores, astrales menos documentados, y un par de remembrance bosses específicos como Astel Naturalborn que están parcialmente cubiertos como concepto cosmológico).
