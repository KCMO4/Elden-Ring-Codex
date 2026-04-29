import type { GlossaryEntry } from '../data/types'
import { SectionHeader } from './SectionHeader'
import { SectionHero } from './SectionHero'
import { GlossarySection as GlossaryGrid } from './GlossaryModal'

interface Props {
  entries: GlossaryEntry[]
}

export function GlossarySection({ entries }: Props) {
  return (
    <section id="glosario">
      <SectionHero fallbackType="cosmic" />

      <div className="codex-section pt-6">
        <SectionHeader
          title="Glosario del Interregno"
          subtitle="Los conceptos que definen el cosmos del Orden Dorado"
          poeticIntro="Para entender el Interregno, primero debes entender su lenguaje sagrado."
        />
        <GlossaryGrid entries={entries} />
      </div>
    </section>
  )
}
