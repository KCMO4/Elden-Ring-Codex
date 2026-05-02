import { useParams, Navigate } from 'react-router-dom'
import { DetailLayout } from '../components/detail/DetailLayout'
import {
  findCharacter, neighbors, pathFor,
  resolveCharacterIds, resolveRegionIds, resolveFactionIds, resolveConceptIds, resolveTimelineIds,
} from '../data/lookups'
import { charactersData } from '../data/characters'
import { characterFallbacks } from '../lib/fallbackMap'
import { EnrichedText } from '../components/RichLoreText'
import type { Character } from '../data/types'

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
      summary={character.summary ?? buildCharacterSummary(character)}
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
      structuralFacts={<CharacterStructuralFacts character={character} />}
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
      prev={prev}
      next={next}
      bookmark={{ type: 'character', slug: character.slug ?? character.id }}
    />
  )
}

/** Build a 2-3 sentence hero summary from the character's structural fields
   when no curated `summary` exists. Combines role + tragedy when possible
   so the hero block stays uniform across entries. */
function buildCharacterSummary(c: Character): string {
  const role = c.role?.trim() ?? ''
  const tragedy = c.tragedy?.trim() ?? ''
  const poetic = c.poeticDesc?.trim() ?? ''
  const parts: string[] = []
  if (role) parts.push(role.endsWith('.') ? role : role + '.')
  if (tragedy && tragedy.length > 12) parts.push(tragedy.endsWith('.') ? tragedy : tragedy + '.')
  if (parts.length === 0 && poetic) return poetic
  return parts.join(' ')
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-0.5">{label}</p>
      <p className="font-subheading text-sm text-codex-parchment leading-snug"><EnrichedText text={value} /></p>
    </div>
  )
}

/* Structural facts about the character — tragedy, key events, thematic
   meaning. Compact panel format so it complements the deepLore narrative
   without competing with it; also stands alone for entries without
   deepLore. */
function CharacterStructuralFacts({ character }: { character: Character }) {
  const hasEvents = character.events && character.events.length > 0
  return (
    <section aria-label="Ficha del personaje" className="space-y-4">
      {character.tragedy && (
        <div className="parchment-panel p-4 border-codex-rot/35 bg-codex-rot/5">
          <p className="font-heading text-[10px] text-codex-rot/85 tracking-widest uppercase mb-1.5">
            Tragedia central
          </p>
          <p className="font-subheading italic text-base text-codex-parchment-dim leading-relaxed">
            {character.tragedy}
          </p>
        </div>
      )}

      {hasEvents && (
        <div className="parchment-panel p-4">
          <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-2.5">
            Eventos clave
          </p>
          <ul className="space-y-1.5">
            {character.events.map((e, i) => (
              <li key={i} className="font-body text-sm text-codex-parchment-dim leading-relaxed flex gap-2">
                <span className="text-codex-gold-dim mt-0.5 shrink-0 text-xs">◆</span>
                <span><EnrichedText text={e} selfId={character.id} /></span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {character.theme && (
        <div className="parchment-panel p-4 border-codex-gold-dim/25 bg-codex-green/5">
          <p className="font-heading text-[10px] text-codex-gold-dim tracking-widest uppercase mb-1.5">
            Significado temático
          </p>
          <p className="font-body text-sm text-codex-parchment-dim leading-relaxed">
            <EnrichedText text={character.theme} selfId={character.id} />
          </p>
        </div>
      )}
    </section>
  )
}
