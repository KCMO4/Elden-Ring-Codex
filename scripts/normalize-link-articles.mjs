/**
 * One-shot fix-up: scans lore files for link() calls whose label starts with
 * a Spanish article (el/la/los/las/El/La/Los/Las/un/una/los/las) and rewrites
 * them to keep the article outside the link.
 *
 *   link('el Orden Dorado', 'faction', 'orden-dorado'),
 *     →
 *   'el ',
 *   link('Orden Dorado', 'faction', 'orden-dorado'),
 *
 * Usage: node scripts/normalize-link-articles.mjs <file>...
 */
import { readFileSync, writeFileSync } from 'node:fs'

const ARTICLE_RE = /^(\s+)link\('(El|La|Los|Las|el|la|los|las|un|una) ([^']+)', '(\w+)', '([\w-]+)'\)(,?)\s*$/

const files = process.argv.slice(2)
if (files.length === 0) {
  console.log('Usage: node scripts/normalize-link-articles.mjs <file>...')
  process.exit(1)
}

for (const file of files) {
  const text = readFileSync(file, 'utf-8')
  const lines = text.split('\n')
  const out = []
  let mods = 0
  for (const line of lines) {
    const m = ARTICLE_RE.exec(line)
    if (m) {
      const [, indent, article, name, type, slug, comma] = m
      out.push(`${indent}'${article} ',`)
      out.push(`${indent}link('${name}', '${type}', '${slug}')${comma}`)
      mods++
    } else {
      out.push(line)
    }
  }
  if (mods > 0) {
    writeFileSync(file, out.join('\n'), 'utf-8')
  }
  console.log(`[normalize] ${file}: ${mods} articles extracted`)
}
