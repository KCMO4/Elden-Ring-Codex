// Check art coverage for all entity categories.
import { readdirSync } from 'node:fs'

async function main() {
  const checks = [
    { mod: '../src/data/characters.ts', exp: 'charactersData', dir: 'characters' },
    { mod: '../src/data/factions.ts', exp: 'factionsData', dir: 'factions' },
    { mod: '../src/data/regions.ts', exp: 'regionsData', dir: 'regions' },
    { mod: '../src/data/timeline.ts', exp: 'timelineData', dir: 'timeline' },
    { mod: '../src/data/endings.ts', exp: 'endingsData', dir: 'endings' },
    { mod: '../src/data/glossary.ts', exp: 'glossaryData', dir: 'concepts' },
  ]
  for (const c of checks) {
    const m = await import(c.mod)
    const data = m[c.exp]
    const onDisk = new Set(readdirSync('../public/art/' + c.dir).map(f => f.replace(/\.\w+$/, '')))
    const missing = data.filter(d => !onDisk.has(d.id))
    console.log(`${c.dir}: ${data.length} total · ${data.length - missing.length} on disk · ${missing.length} missing`)
    if (missing.length > 0) {
      console.log('  missing: ' + missing.slice(0, 30).map(d => d.id).join(', '))
    }
  }
}

main().catch(e => { console.error(e); process.exit(1) })
