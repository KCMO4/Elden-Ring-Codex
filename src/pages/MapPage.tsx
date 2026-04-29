import { SectionHeader } from '../components/SectionHeader'
import { SectionHero } from '../components/SectionHero'
import { InteractiveMap } from '../components/InteractiveMap'

export function MapPage() {
  return (
    <section id="mapa">
      <SectionHero fallbackType="dragon" />

      <div className="codex-section pt-6">
        <SectionHeader
          title="Mapa del Interregno"
          subtitle="Cartografía estilizada · Click en cualquier región para abrirla"
          poeticIntro="El mapa no es geografía — es memoria espacial. Cada región lleva el peso de lo que ocurrió allí. El subsuelo no es ausencia: es otra cosmología que el árbol oficial no quiso mirar de frente."
        />

        <InteractiveMap />
      </div>
    </section>
  )
}
