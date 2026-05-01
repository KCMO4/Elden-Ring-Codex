/**
 * Cross-link audit script for the Códice del Orden Fracturado.
 *
 * Scans all lore files (charactersLore, charactersDeepLore, factionsLore,
 * regionsLore, regionsDeepLore, glossaryLore, timelineLore, timelineDeepLore)
 * and verifies:
 *  - Every relatedCharacters / relatedRegions / relatedFactions / relatedConcepts /
 *    relatedTimelineEvents / relatedEndings entry resolves to an existing id
 *  - Every link(label, targetType, slug) call resolves
 *
 * Run with: npx tsx scripts/audit-cross-links.mts
 */

import { charactersData } from '../src/data/characters.js'
import { regionsData } from '../src/data/regions.js'
import { factionsData } from '../src/data/factions.js'
import { glossaryData } from '../src/data/glossary.js'
import { timelineData } from '../src/data/timeline.js'
import { endingsData } from '../src/data/endings.js'

import { charactersLore } from '../src/data/lore/charactersLore.js'
import { charactersDeepLore } from '../src/data/lore/charactersDeepLore.js'
import { factionsLore } from '../src/data/lore/factionsLore.js'
import { regionsLore } from '../src/data/lore/regionsLore.js'
import { regionsDeepLore } from '../src/data/lore/regionsDeepLore.js'
import { glossaryLore } from '../src/data/lore/glossaryLore.js'
import { timelineLore } from '../src/data/lore/timelineLore.js'
import { timelineDeepLore } from '../src/data/lore/timelineDeepLore.js'

import type { DeepEntity, RichBlock, RichInline } from '../src/data/types.js'

type EntityKind = 'character' | 'region' | 'faction' | 'concept' | 'timeline' | 'ending'

const validIds: Record<EntityKind, Set<string>> = {
  character: new Set(charactersData.map((c) => c.id)),
  region:    new Set([...regionsData.map((r) => r.id), ...Object.keys(regionsDeepLore)]),
  faction:   new Set(factionsData.map((f) => f.id)),
  concept:   new Set(glossaryData.map((g) => g.id)),
  timeline:  new Set([...timelineData.map((t) => t.id), ...Object.keys(timelineDeepLore), ...Object.keys(timelineLore)]),
  ending:    new Set(endingsData.map((e) => e.id)),
}

interface BrokenRef {
  source: string         // e.g., "factionsLore.orden-dorado"
  field: string          // e.g., "relatedRegions" or "deepLore link"
  type: EntityKind       // expected entity kind
  slug: string           // the broken slug
}

const broken: BrokenRef[] = []

const fields: { key: keyof DeepEntity; type: EntityKind }[] = [
  { key: 'relatedCharacters',     type: 'character' },
  { key: 'relatedRegions',        type: 'region'    },
  { key: 'relatedFactions',       type: 'faction'   },
  { key: 'relatedConcepts',       type: 'concept'   },
  { key: 'relatedTimelineEvents', type: 'timeline'  },
  { key: 'relatedEndings',        type: 'ending'    },
]

function inspectEntity(source: string, id: string, entity: Partial<DeepEntity>) {
  for (const { key, type } of fields) {
    const arr = entity[key] as string[] | undefined
    if (!arr) continue
    for (const slug of arr) {
      if (!validIds[type].has(slug)) {
        broken.push({ source: `${source}.${id}`, field: key, type, slug })
      }
    }
  }
  if (entity.deepLore) {
    walkBlocks(`${source}.${id}`, entity.deepLore)
  }
}

function walkBlocks(source: string, blocks: RichBlock[]) {
  for (const block of blocks) {
    if (block.type === 'paragraph') {
      walkInlines(source, block.children)
    } else if (block.type === 'list') {
      for (const item of block.items) walkInlines(source, item)
    }
  }
}

function walkInlines(source: string, inlines: RichInline[]) {
  for (const node of inlines) {
    if (typeof node === 'string') continue
    if (node.type === 'link') {
      if (!validIds[node.targetType].has(node.slug)) {
        broken.push({
          source,
          field: `link("${node.label}")`,
          type: node.targetType,
          slug: node.slug,
        })
      }
    }
  }
}

const allLayers: { name: string; data: Record<string, Partial<DeepEntity>> }[] = [
  { name: 'charactersLore',     data: charactersLore     },
  { name: 'charactersDeepLore', data: charactersDeepLore },
  { name: 'factionsLore',       data: factionsLore       },
  { name: 'regionsLore',        data: regionsLore        },
  { name: 'regionsDeepLore',    data: regionsDeepLore    },
  { name: 'glossaryLore',       data: glossaryLore       },
  { name: 'timelineLore',       data: timelineLore       },
  { name: 'timelineDeepLore',   data: timelineDeepLore   },
]

for (const { name, data } of allLayers) {
  for (const [id, entity] of Object.entries(data)) {
    inspectEntity(name, id, entity)
  }
}

/* ──────────────────────────────────────────────────────────── */
/* Report                                                       */
/* ──────────────────────────────────────────────────────────── */

if (broken.length === 0) {
  console.log('✅ All cross-links resolve. Zero broken references.')
  process.exit(0)
}

console.log(`❌ Found ${broken.length} broken references.\n`)

// Group by missing slug to find most-referenced ghosts
const bySlug = new Map<string, BrokenRef[]>()
for (const ref of broken) {
  const key = `${ref.type}:${ref.slug}`
  const arr = bySlug.get(key) ?? []
  arr.push(ref)
  bySlug.set(key, arr)
}

const sortedGhosts = [...bySlug.entries()].sort((a, b) => b[1].length - a[1].length)

console.log('=== Most-referenced ghosts (top 20) ===\n')
for (const [key, refs] of sortedGhosts.slice(0, 20)) {
  console.log(`  ${key}  ×${refs.length}`)
  for (const r of refs.slice(0, 3)) {
    console.log(`    in ${r.source} — ${r.field}`)
  }
  if (refs.length > 3) console.log(`    … ${refs.length - 3} more`)
}

console.log(`\n=== Summary by entity type ===\n`)
const byType = new Map<EntityKind, number>()
for (const ref of broken) {
  byType.set(ref.type, (byType.get(ref.type) ?? 0) + 1)
}
for (const [type, count] of byType) {
  console.log(`  ${type}: ${count}`)
}

console.log(`\n=== Unique missing slugs by type ===\n`)
const uniqueByType = new Map<EntityKind, Set<string>>()
for (const ref of broken) {
  if (!uniqueByType.has(ref.type)) uniqueByType.set(ref.type, new Set())
  uniqueByType.get(ref.type)!.add(ref.slug)
}
for (const [type, slugs] of uniqueByType) {
  console.log(`  ${type} (${slugs.size}): ${[...slugs].sort().join(', ')}`)
}

process.exit(1)
