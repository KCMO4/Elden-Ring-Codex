import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHero } from '../components/SectionHero'
import { SectionHeader } from '../components/SectionHeader'
import { findCharacter, pathFor } from '../data/lookups'

interface Person {
  id: string
  label: string
  epithet?: string
  status?: 'alive' | 'fallen' | 'missing' | 'cursed'
  fatherId?: string
  motherId?: string
  partnerId?: string
}

// La dinastía del Árbol Áureo según el lore base.
const PEOPLE: Person[] = [
  // 1ª consorte
  { id: 'godfrey', label: 'Godfrey', epithet: 'Primer Señor de Elden · Hoarah Loux', status: 'fallen' },
  { id: 'marika', label: 'Marika', epithet: 'Reina Eterna · Empyrean', status: 'cursed', partnerId: 'godfrey' },
  // Hijos de Godfrey × Marika
  { id: 'godwyn', label: 'Godwyn', epithet: 'el Dorado', status: 'fallen', fatherId: 'godfrey', motherId: 'marika' },
  { id: 'morgott', label: 'Morgott', epithet: 'Rey de los Omen', status: 'fallen', fatherId: 'godfrey', motherId: 'marika' },
  { id: 'mohg', label: 'Mohg', epithet: 'Lord of Blood', status: 'fallen', fatherId: 'godfrey', motherId: 'marika' },

  // 2ª consorte (Radagon = Marika)
  { id: 'rennala', label: 'Rennala', epithet: 'Reina de la Luna Llena', status: 'cursed' },
  { id: 'radagon', label: 'Radagon', epithet: 'del Orden Dorado · = Marika', status: 'cursed', partnerId: 'rennala' },
  // Hijos de Radagon × Rennala
  { id: 'radahn', label: 'Radahn', epithet: 'Azote de Estrellas', status: 'fallen', fatherId: 'radagon', motherId: 'rennala' },
  { id: 'rykard', label: 'Rykard', epithet: 'Lord of Blasphemy', status: 'fallen', fatherId: 'radagon', motherId: 'rennala' },
  { id: 'ranni', label: 'Ranni', epithet: 'la Bruja · Empyrean', status: 'cursed', fatherId: 'radagon', motherId: 'rennala' },

  // 3ª: hijos de Radagon × Marika (medio hermanos en sangre divina)
  { id: 'malenia', label: 'Malenia', epithet: 'Hoja de Miquella', status: 'cursed', fatherId: 'radagon', motherId: 'marika' },
  { id: 'miquella', label: 'Miquella', epithet: 'el Empyrean · cautivo', status: 'cursed', fatherId: 'radagon', motherId: 'marika' },
]

const STATUS_COLOR: Record<NonNullable<Person['status']>, string> = {
  alive:   '#c5a059',
  fallen:  '#a64d4d',
  missing: '#7d6cb0',
  cursed:  '#c98a3e',
}

const STATUS_LABEL: Record<NonNullable<Person['status']>, string> = {
  alive:   'Aún en pie',
  fallen:  'Caído / vencido',
  missing: 'Desaparecido',
  cursed:  'Maldito / atrapado',
}

interface CardProps {
  person: Person
}

function PersonCard({ person }: CardProps) {
  const character = findCharacter(person.id)
  const path = character ? pathFor.character(character) : null
  const dotColor = person.status ? STATUS_COLOR[person.status] : '#c5a059'

  const inner = (
    <div className="parchment-panel p-3 transition-all hover:border-codex-gold-dim/60 group min-w-[160px] max-w-[220px]">
      <div className="flex items-center gap-2 mb-1">
        <span
          className="inline-block w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: dotColor, boxShadow: `0 0 6px ${dotColor}` }}
          aria-hidden
        />
        <p className="font-heading text-sm text-codex-gold-bright tracking-wide truncate">{person.label}</p>
      </div>
      {person.epithet && (
        <p className="font-body text-[10px] text-codex-parchment-dim/80 italic line-clamp-2 leading-snug">{person.epithet}</p>
      )}
    </div>
  )

  return path ? (
    <Link to={path} aria-label={`Ver ficha de ${person.label}`}>
      {inner}
    </Link>
  ) : (
    inner
  )
}

interface UnionProps {
  partnerA: string
  partnerB: string
  childIds: string[]
  unionLabel: string
}

function Union({ partnerA, partnerB, childIds, unionLabel }: UnionProps) {
  const a = PEOPLE.find((p) => p.id === partnerA)
  const b = PEOPLE.find((p) => p.id === partnerB)
  if (!a || !b) return null
  const children = childIds
    .map((id) => PEOPLE.find((p) => p.id === id))
    .filter((p): p is Person => Boolean(p))

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      {/* Partners row */}
      <div className="flex items-center gap-3 flex-wrap justify-center">
        <PersonCard person={a} />
        <div className="flex flex-col items-center px-1">
          <span className="text-codex-gold-dim text-xs font-heading tracking-widest opacity-70">∞</span>
          <span className="text-codex-gold-dim/60 text-[9px] font-heading tracking-widest uppercase">{unionLabel}</span>
        </div>
        <PersonCard person={b} />
      </div>

      {/* Connector */}
      {children.length > 0 && (
        <div className="flex flex-col items-center">
          <div className="w-px h-4 bg-codex-gold-dim/40" />
          <div className="h-px bg-codex-gold-dim/40" style={{ width: `${Math.min(children.length * 220, 880)}px`, maxWidth: '100%' }} />
        </div>
      )}

      {/* Children row */}
      {children.length > 0 && (
        <div className="flex items-start gap-3 flex-wrap justify-center">
          {children.map((c) => (
            <div key={c.id} className="flex flex-col items-center">
              <div className="w-px h-4 bg-codex-gold-dim/40 -mt-4" />
              <PersonCard person={c} />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export function GenealogyPage() {
  useEffect(() => { document.title = 'Genealogía · Códice del Orden Fracturado' }, [])

  return (
    <section id="genealogia">
      <SectionHero fallbackType="golden-order" />
      <div className="codex-section pt-6">
        <SectionHeader
          title="Genealogía del Árbol Áureo"
          subtitle="La dinastía rota — tres uniones, once herederos, ningún heredero en pie"
        />

        {/* Unions */}
        <div className="space-y-16">
          <UnionSection
            heading="I. Marika y Godfrey"
            sub="Primera unión · Origen del Linaje Dorado"
            note="Antes de la Era Dorada, Marika tomó por consorte a un mortal: Godfrey. Sus hijos heredaron tanto el alma divina como la mancha de sangre Omen."
          >
            <Union
              partnerA="godfrey"
              partnerB="marika"
              childIds={['godwyn', 'morgott', 'mohg']}
              unionLabel="primera unión"
            />
          </UnionSection>

          <UnionSection
            heading="II. Radagon y Rennala"
            sub="Segunda unión · Tratado tras la guerra de la Academia"
            note="Tras el conflicto entre Liurnia y Leyndell, Radagon (en realidad Marika misma, transformada) tomó a Rennala. Tres hijos: Radahn, Rykard, Ranni."
          >
            <Union
              partnerA="radagon"
              partnerB="rennala"
              childIds={['radahn', 'rykard', 'ranni']}
              unionLabel="segunda unión"
            />
          </UnionSection>

          <UnionSection
            heading="III. Radagon y Marika"
            sub="Tercera unión · Marika tomó a su otra mitad"
            note="Cuando Radagon abandonó a Rennala, regresó al lado de Marika. De esa unión imposible —ella consigo misma— nacieron los gemelos Empyreans: Malenia y Miquella."
          >
            <Union
              partnerA="radagon"
              partnerB="marika"
              childIds={['malenia', 'miquella']}
              unionLabel="tercera unión"
            />
          </UnionSection>
        </div>

        {/* Legend */}
        <div className="parchment-panel p-4 mt-12 max-w-md">
          <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-3">
            Estado de cada heredero
          </p>
          <ul className="space-y-1.5">
            {(Object.keys(STATUS_LABEL) as Array<keyof typeof STATUS_LABEL>).map((s) => (
              <li key={s} className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: STATUS_COLOR[s] }} aria-hidden />
                <span className="text-codex-parchment-dim">{STATUS_LABEL[s]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

interface SectionProps {
  heading: string
  sub: string
  note: string
  children: React.ReactNode
}

function UnionSection({ heading, sub, note, children }: SectionProps) {
  return (
    <section>
      <header className="mb-6">
        <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide pb-1.5 border-b border-codex-gold-dim/30">
          {heading}
        </h2>
        <p className="font-subheading italic text-codex-parchment-dim mt-2 text-sm">{sub}</p>
        <p className="font-body text-sm text-codex-parchment-dim/80 mt-2 leading-relaxed max-w-3xl">{note}</p>
      </header>
      {children}
    </section>
  )
}
