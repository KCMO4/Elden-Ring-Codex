import { useParams, Navigate } from 'react-router-dom'
import { DetailLayout } from '../components/detail/DetailLayout'
import {
  findCharacter, neighbors, pathFor,
  resolveCharacterIds, resolveRegionIds, resolveFactionIds, resolveConceptIds, resolveTimelineIds,
} from '../data/lookups'
import { charactersData } from '../data/characters'
import { characterFallbacks } from '../lib/fallbackMap'

export function CharacterDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const character = slug ? findCharacter(slug) : undefined
  if (!character) return <Navigate to="/personajes" replace />

  const fallback = character.fallbackType ?? characterFallbacks[character.id] ?? 'character'
  const { prev, next } = neighbors(charactersData, character, pathFor.character, (c) => c.name)

  return (
    <DetailLayout
      breadcrumbs={[
        { label: 'Códice', to: '/' },
        { label: 'Personajes', to: '/personajes' },
        { label: character.name },
      ]}
      title={character.name}
      subtitle={character.subtitle ?? character.role}
      certainty={character.certainty}
      tags={character.tags}
      summary={character.summary ?? character.poeticDesc}
      heroEntity={{ category: 'characters', id: character.id }}
      heroFallback={fallback}
      heroVariant="banner"
      metaCard={
        <>
          <MetaRow label="Rol" value={character.role} />
          <MetaRow label="Facción" value={character.faction} />
          <MetaRow label="Región" value={character.region} />
        </>
      }
      deepLore={character.deepLore ?? []}
      confirmed={character.confirmed}
      inferred={character.inferred}
      theories={character.theories}
      ambiguous={character.ambiguous}
      beneficiaries={character.beneficiaries}
      victims={character.victims}
      relatedGroups={[
        { label: 'Personajes vinculados', type: 'character', items: resolveCharacterIds(character.relatedCharacters) },
        { label: 'Regiones', type: 'region', items: resolveRegionIds(character.relatedRegions) },
        { label: 'Facciones', type: 'faction', items: resolveFactionIds(character.relatedFactions) },
        { label: 'Conceptos', type: 'concept', items: resolveConceptIds(character.relatedConcepts) },
        { label: 'Eventos del Timeline', type: 'timeline', items: resolveTimelineIds(character.relatedTimelineEvents) },
      ]}
      legacyContent={
        (!character.deepLore || character.deepLore.length === 0) && (
          <LegacyCharacterContent character={character} />
        )
      }
      prev={prev}
      next={next}
      bookmark={{ type: 'character', slug: character.slug ?? character.id }}
    />
  )
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-0.5">{label}</p>
      <p className="font-subheading text-sm text-codex-parchment leading-snug">{value}</p>
    </div>
  )
}

function LegacyCharacterContent({ character }: { character: ReturnType<typeof findCharacter> }) {
  if (!character) return null
  return (
    <div className="space-y-6 mb-10">
      <section>
        <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
          Tragedia central
        </h2>
        <p className="font-body text-base text-codex-parchment leading-loose">{character.tragedy}</p>
      </section>

      {character.events.length > 0 && (
        <section>
          <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
            Eventos principales
          </h2>
          <ul className="space-y-2">
            {character.events.map((e, i) => (
              <li key={i} className="font-body text-base text-codex-parchment leading-relaxed flex gap-2">
                <span className="text-codex-gold-dim shrink-0 mt-1.5 text-xs">◆</span>
                {e}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide mb-3 pb-2 border-b border-codex-gold-dim/30">
          Significado temático
        </h2>
        <p className="font-body text-base text-codex-parchment leading-loose">{character.theme}</p>
      </section>
    </div>
  )
}
