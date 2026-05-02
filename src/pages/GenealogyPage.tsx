import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHero } from '../components/SectionHero'
import { SectionHeader } from '../components/SectionHeader'
import { CodexImage } from '../components/images/CodexImage'
import { EntityHoverCard } from '../components/EntityHoverCard'
import { EraBadge } from '../components/EraBadge'
import { findCharacter, findConcept, findFaction, pathFor } from '../data/lookups'
import { EnrichedText } from '../components/RichLoreText'
import type { EntityType } from '../data/types'

/* ─────────────────────────────────────────────────────────────
   GENEALOGÍA AMPLIADA
   La dinastía del Árbol Áureo extendida con todas sus capas:
     · Predecesores (Reina del Ojo Velado, Storm-Hawk King)
     · Las 3 uniones de Marika (linaje sanguíneo)
     · Lazos cosmológicos no biológicos (Maliketh, Melina, Blaidd, Serosh, Torrent)
     · Casa Caria extendida (entourage de Rennala)
     · Linaje cosmológico de Empyreans (selección de los Dos Dedos)
     · Línea de sucesión Elden Lord
   Cada nodo enlaza a su ficha cuando existe, con preview hover.
   ───────────────────────────────────────────────────────────── */

type Status = 'alive' | 'fallen' | 'missing' | 'cursed' | 'unknown' | 'historical'
type RelationKind =
  | 'blood'         // descendiente sanguíneo
  | 'bond-shadow'   // hermano/a-sombra cosmológico
  | 'bond-soul'     // unión de almas (Marika ⟷ Radagon)
  | 'bond-mount'    // montura sagrada
  | 'bond-court'    // miembro de la corte
  | 'ambiguous'     // origen incierto
  | 'historical'    // ancestro o predecesor
  | 'mentor'        // maestro / aprendiz
  | 'family'        // familia adoptiva o vínculo paterno-filial
  | 'twin'          // gemelos / dos mitades
  | 'rival'         // antagonistas en la quest
  | 'agent'         // agente / instrumento del otro

interface Person {
  id: string
  /** Type of entry to look up the thumbnail / hover-card. */
  kind: 'character' | 'concept' | 'faction' | 'none'
  label: string
  epithet?: string
  status?: Status
  /** What kind of relation defines them in this tree */
  relation?: RelationKind
  /** Great Rune they carry — only for shardbearer demigods */
  rune?: string
  /** Brief reason this person belongs in the diagram (1 line) */
  hint?: string
}

const PEOPLE: Record<string, Person> = {
  /* Predecesores cosmológicos */
  'gloam-eyed-queen': {
    id: 'gloam-eyed-queen', kind: 'character',
    label: 'Reina del Ojo Velado', epithet: 'Empyrean del régimen previo',
    status: 'historical', relation: 'historical',
    hint: 'Reina cosmológica anterior a Marika · Distribuyó la Llama Negra a los Pieles de Dios',
  },
  'storm-hawk-king': {
    id: 'storm-hawk-king', kind: 'concept',
    label: 'Storm-Hawk King', epithet: 'Rey halcón de la tempestad',
    status: 'historical', relation: 'historical',
    hint: 'Rey ancestral pre-Orden · Linaje paterno de Godfrey · Torrent procede de su corcel',
  },
  'placidusax': {
    id: 'placidusax', kind: 'character',
    label: 'Placidusax', epithet: 'Antiguo Señor Elden de los dragones',
    status: 'fallen', relation: 'historical',
    hint: 'Anterior portador del trono Elden · Régimen dragónico previo al Orden',
  },

  /* Triángulo central */
  'marika': {
    id: 'marika', kind: 'character',
    label: 'Marika', epithet: 'Reina Eterna · Empyrean · Numen',
    status: 'cursed', relation: 'blood',
    hint: 'Vasija humana del Anillo Elden · Fundadora del Orden Dorado',
  },
  'godfrey': {
    id: 'godfrey', kind: 'character',
    label: 'Godfrey', epithet: 'Primer Señor Elden · Hoarah Loux',
    status: 'fallen', relation: 'blood',
    hint: 'Conquistador exterior · Primer Señor Elden · Exiliado al perder propósito',
  },
  'radagon': {
    id: 'radagon', kind: 'character',
    label: 'Radagon', epithet: 'del Orden Dorado · Es Marika',
    status: 'cursed', relation: 'bond-soul',
    hint: 'Otra cara de Marika · Reformista trágico que martilla el Anillo eternamente',
  },

  /* 1ª unión: Marika × Godfrey */
  'godwyn': {
    id: 'godwyn', kind: 'character',
    label: 'Godwyn', epithet: 'el Dorado · primogénito amado',
    status: 'fallen', relation: 'blood',
    hint: 'Asesinado en la Noche de los Cuchillos Negros · Primer demidiós muerto',
  },
  'morgott': {
    id: 'morgott', kind: 'character',
    label: 'Morgott', epithet: 'Rey Caído · Omen rechazado',
    status: 'fallen', relation: 'blood',
    rune: 'Gran Runa de Morgott',
    hint: 'Defensor del régimen que lo encarceló · Su lealtad es ideológica',
  },
  'mohg': {
    id: 'mohg', kind: 'character',
    label: 'Mohg', epithet: 'Lord of Blood',
    status: 'fallen', relation: 'blood',
    rune: 'Gran Runa de Mohg',
    hint: 'Buscó nueva era con Miquella secuestrado en Mohgwyn',
  },

  /* Rennala */
  'rennala': {
    id: 'rennala', kind: 'character',
    label: 'Rennala', epithet: 'Reina de la Luna Llena',
    status: 'cursed', relation: 'blood',
    hint: 'Matriarca Carian abandonada por Radagon · Vive en bucle eterno',
  },

  /* 2ª unión: Radagon × Rennala */
  'radahn': {
    id: 'radahn', kind: 'character',
    label: 'Radahn', epithet: 'Azote de Estrellas',
    status: 'fallen', relation: 'blood',
    rune: 'Gran Runa de Radahn',
    hint: 'Detuvo el destino estelar de Ranni · Cayó a la podredumbre escarlata',
  },
  'rykard': {
    id: 'rykard', kind: 'character',
    label: 'Rykard', epithet: 'Lord of Blasphemy',
    status: 'fallen', relation: 'blood',
    rune: 'Gran Runa de Rykard',
    hint: 'Devorado por la serpiente del Volcano Manor · Pacto con dios externo',
  },
  'ranni': {
    id: 'ranni', kind: 'character',
    label: 'Ranni', epithet: 'la Bruja · Empyrean',
    status: 'cursed', relation: 'blood',
    hint: 'Renunció a su cuerpo Empyrean · Plan cosmológico: la Era de las Estrellas',
  },

  /* 3ª unión: Radagon × Marika (consigo misma) */
  'malenia': {
    id: 'malenia', kind: 'character',
    label: 'Malenia', epithet: 'Hoja de Miquella · Espada gemela',
    status: 'cursed', relation: 'blood',
    rune: 'Gran Runa de Malenia',
    hint: 'Gemela de Miquella · Maldecida con la podredumbre escarlata desde el nacimiento',
  },
  'miquella': {
    id: 'miquella', kind: 'character',
    label: 'Miquella', epithet: 'el Empyrean · cautivo',
    status: 'cursed', relation: 'blood',
    rune: 'Gran Runa del Nonato',
    hint: 'Maldecido a no crecer · Secuestrado por Mohg durante su sueño',
  },

  /* Lazos cosmológicos no biológicos */
  'maliketh': {
    id: 'maliketh', kind: 'character',
    label: 'Maliketh', epithet: 'la Hoja Negra · Bestia ligada en sombra',
    status: 'fallen', relation: 'bond-shadow',
    hint: 'Hermano-sombra de Marika · Cárcel viva de la Runa de la Muerte',
  },
  'melina': {
    id: 'melina', kind: 'character',
    label: 'Melina', epithet: 'la de Ojo Cerrado · Doncella sin tumba',
    status: 'unknown', relation: 'ambiguous',
    hint: 'Posible hija de Marika · Diseñada para el sacrificio del árbol',
  },
  'blaidd': {
    id: 'blaidd', kind: 'character',
    label: 'Blaidd', epithet: 'Bestia ligada en sombra a Ranni',
    status: 'fallen', relation: 'bond-shadow',
    hint: 'Hermano-sombra Empyrean de Ranni · Creado por Maliketh para Ranni',
  },
  'serosh': {
    id: 'serosh', kind: 'character',
    label: 'Serosh', epithet: 'el León Sagrado',
    status: 'fallen', relation: 'bond-mount',
    hint: 'Espíritu animal que cabalgaba Godfrey · Domesticaba su furia bestial',
  },

  /* Casa Caria — entourage de Rennala */
  'iji': {
    id: 'iji', kind: 'character',
    label: 'Iji', epithet: 'Gran Herrero Carian · Gigante',
    status: 'fallen', relation: 'bond-court',
    hint: 'Forjador y guardián de Ranni · Fidelidad superviviente al colapso Carian',
  },
  'seluvis': {
    id: 'seluvis', kind: 'character',
    label: 'Seluvis', epithet: 'Conspector de Maniquíes',
    status: 'cursed', relation: 'bond-court',
    hint: 'Hechicero de la corte Carian · Manipula almas con marionetas',
  },
  'pidia': {
    id: 'pidia', kind: 'character',
    label: 'Pidia', epithet: 'Mayordomo de Caria',
    status: 'fallen', relation: 'bond-court',
    hint: 'Sirviente leal · Asesinado por sospechas',
  },

  /* Linaje de la Podredumbre Escarlata */
  'millicent': {
    id: 'millicent', kind: 'character',
    label: 'Millicent', epithet: 'Aguja de Miquella · Hija espiritual de Malenia',
    status: 'cursed', relation: 'agent',
    hint: 'Encarnación benigna de la podredumbre · Liberada de la voluntad de Malenia por Gowry',
  },
  'gowry': {
    id: 'gowry', kind: 'character',
    label: 'Gowry', epithet: 'El sabio de la podredumbre',
    status: 'cursed', relation: 'mentor',
    hint: 'Cultivador de Millicent · Manipulador con motivos opacos · Adorador de la Aeonia',
  },

  /* Fundamentalistas — el linaje filosófico de Radagon */
  'goldmask': {
    id: 'goldmask', kind: 'character',
    label: 'Goldmask', epithet: 'El monje silencioso',
    status: 'fallen', relation: 'mentor',
    hint: 'Heredero filosófico de Radagon · Diagnostica la falla lógica del Orden Dorado',
  },
  'corhyn': {
    id: 'corhyn', kind: 'character',
    label: 'Hermano Corhyn', epithet: 'Discípulo y traductor',
    status: 'fallen', relation: 'mentor',
    hint: 'Voz pública de Goldmask · Sin él, las conclusiones del monje quedarían sin transmisión',
  },

  /* La cuestión de los muertos — Fia, D y D's brother */
  'fia': {
    id: 'fia', kind: 'character',
    label: 'Fia', epithet: 'Guardiana de Muertos · Doncella del abrazo',
    status: 'cursed', relation: 'rival',
    hint: 'Restauradora de la Muerte Predestinada · Carga el Marcasello robado a Godwyn',
  },
  'd': {
    id: 'd', kind: 'character',
    label: 'D', epithet: 'Cazador de los Que Viven en la Muerte',
    status: 'fallen', relation: 'rival',
    hint: 'Asesino de muertos vivientes · Asesinado por Fia en su propia cama',
  },
  'd-twin-brother': {
    id: 'd-twin-brother', kind: 'character',
    label: 'El Hermano de D', epithet: 'Gemelo vengador · Mudo',
    status: 'fallen', relation: 'twin',
    hint: 'Hereda la armadura de su hermano · Recibe la venganza póstuma sobre Fia',
  },

  /* Linajes regionales — Castle Morne */
  'edgar': {
    id: 'edgar', kind: 'character',
    label: 'Edgar', epithet: 'Lord defensor de Castle Morne',
    status: 'fallen', relation: 'family',
    hint: 'Padre de Irina · Cae en desesperación tras la muerte de su hija · Caballero Maldito',
  },
  'irina': {
    id: 'irina', kind: 'character',
    label: 'Irina', epithet: 'Doncella ciega de Castle Morne',
    status: 'fallen', relation: 'family',
    hint: 'Hija de Edgar · Su muerte rompe a su padre',
  },

  /* Limgrave — la sangre Tarnished de Godfrey */
  'nepheli-loux': {
    id: 'nepheli-loux', kind: 'character',
    label: 'Nepheli Loux', epithet: 'Posible descendiente de Godfrey',
    status: 'alive', relation: 'family',
    hint: 'Hija adoptiva de Kenneth Haight · Bárbara con sangre Hoarah Loux',
  },
  'kenneth-haight': {
    id: 'kenneth-haight', kind: 'character',
    label: 'Kenneth Haight', epithet: 'Lord nominal de Fort Haight',
    status: 'alive', relation: 'family',
    hint: 'Padre adoptivo de Nepheli · Aspirante al trono que delega en otros',
  },

  /* Llama Frenética — Hyetta y Vyke */
  'hyetta': {
    id: 'hyetta', kind: 'character',
    label: 'Hyetta', epithet: 'La doncella de la Llama Frenética',
    status: 'unknown', relation: 'agent',
    hint: 'Sucesora de Shabriri · Vasija final de los Tres Dedos',
  },
  'vyke': {
    id: 'vyke', kind: 'character',
    label: 'Vyke', epithet: 'Caballero de la Llama Frenética',
    status: 'fallen', relation: 'rival',
    hint: 'Tarnished anterior · Espejo del fracaso · Fue ungido pero quemado por la Llama',
  },

  /* Mesa Redonda */
  'gideon': {
    id: 'gideon', kind: 'character',
    label: 'Gideon Ofnir', epithet: 'El omnisciente · Jefe de la Mesa Redonda',
    status: 'fallen', relation: 'mentor',
    hint: 'Coordinador de Tarnished · Conoce todos los caminos · Traidor pragmático',
  },
  'miriel': {
    id: 'miriel', kind: 'character',
    label: 'Miriel', epithet: 'La Tortuga Pastora',
    status: 'alive', relation: 'mentor',
    hint: 'Pastor longevo · Imparte hechicería e incantaciones a quien lo busque',
  },
  'roderika': {
    id: 'roderika', kind: 'character',
    label: 'Roderika', epithet: 'Doncella espiritual',
    status: 'alive', relation: 'agent',
    hint: 'Conjuradora de espíritus de los Caballeros del Stormhawk · Renace bajo la tutela de Hewg',
  },
  'diallos': {
    id: 'diallos', kind: 'character',
    label: 'Diallos', epithet: 'Caballero de la Casa Hoslow',
    status: 'fallen', relation: 'rival',
    hint: 'Noble desplazado · Quest sobre el deber y la falla · Cae con Lanya',
  },

  /* Volcano Manor */
  'tanith': {
    id: 'tanith', kind: 'character',
    label: 'Tanith', epithet: 'Señora del Volcano Manor',
    status: 'cursed', relation: 'family',
    hint: 'Esposa fiel de Rykard · Lo alimenta hasta el final',
  },
  'bernahl': {
    id: 'bernahl', kind: 'character',
    label: 'Bernahl', epithet: 'Recusante · Hijo del Black Knife',
    status: 'fallen', relation: 'rival',
    hint: 'Veterano del Warmaster\'s Shack · Cae al servicio de Rykard',
  },
  'patches': {
    id: 'patches', kind: 'character',
    label: 'Patches', epithet: 'El traidor cómico',
    status: 'alive', relation: 'rival',
    hint: 'Pícaro perpetuo · Sirve y traiciona a todos por igual',
  },

  /* Linaje Misbegotten — Boc */
  'boc': {
    id: 'boc', kind: 'character',
    label: 'Boc el Sastre', epithet: 'Misbegotten · Sastre cosido',
    status: 'cursed', relation: 'family',
    hint: 'Hijo Misbegotten de una madre humana · Quest sobre la inseguridad y el reconocimiento',
  },

  /* Albinaurics — Latenna */
  'latenna': {
    id: 'latenna', kind: 'character',
    label: 'Latenna', epithet: 'Albinauric vidente',
    status: 'cursed', relation: 'agent',
    hint: 'Acompaña al Tarnished hacia el Haligtree · Fragmento de un pueblo perseguido',
  },
  'albus': {
    id: 'albus', kind: 'character',
    label: 'Albus', epithet: 'El Albinauric escondido',
    status: 'cursed', relation: 'agent',
    hint: 'Custodio de la Sceptre Mediator · Disfraz de jarro para sobrevivir',
  },

  /* Jarburg — la dinastía de las jarras */
  'jar-bairn': {
    id: 'jar-bairn', kind: 'character',
    label: 'Jar-Bairn', epithet: 'Heredero de Jarburg',
    status: 'alive', relation: 'family',
    hint: 'Sucesor del jarro Iron Fist Alexander · Quest sobre el linaje y el juego',
  },
  'alexander': {
    id: 'alexander', kind: 'character',
    label: 'Alexander', epithet: 'Iron Fist · Jarro guerrero',
    status: 'fallen', relation: 'family',
    hint: 'Jarro errante · Símbolo de tradición jarrera · Mentor de Jar-Bairn',
  },
}

/* ─────────────── Sections (groups of relationships) ─────────────── */

interface UnionDef {
  heading: string
  sub: string
  note: string
  partners: string[]   // 1, 2, or more partner ids
  partnerLabel?: string
  children: string[]
  /** Optional emphasis: highlights an unusual structural feature */
  highlight?: 'self-bond' | 'cosmic'
}

const UNIONS: UnionDef[] = [
  {
    heading: 'I. Marika y Godfrey',
    sub: 'Primera unión · Origen del Linaje Dorado',
    note: 'Antes de la Era Dorada, Marika tomó por consorte a un mortal: Godfrey. Sus hijos heredaron tanto el alma divina como la mancha de sangre Omen.',
    partners: ['marika', 'godfrey'],
    partnerLabel: 'primera unión',
    children: ['godwyn', 'morgott', 'mohg'],
  },
  {
    heading: 'II. Radagon y Rennala',
    sub: 'Segunda unión · Tratado tras la guerra de la Academia',
    note: 'Tras el conflicto entre Liurnia y Leyndell, Radagon (en realidad Marika misma, transformada) tomó a Rennala. Tres hijos: Radahn, Rykard, Ranni.',
    partners: ['radagon', 'rennala'],
    partnerLabel: 'segunda unión',
    children: ['radahn', 'rykard', 'ranni'],
  },
  {
    heading: 'III. Radagon y Marika',
    sub: 'Tercera unión · Marika tomó a su otra mitad',
    note: 'Cuando Radagon abandonó a Rennala, regresó al lado de Marika. De esa unión imposible —ella consigo misma— nacieron los gemelos Empyreans: Malenia y Miquella.',
    partners: ['radagon', 'marika'],
    partnerLabel: 'tercera unión',
    children: ['malenia', 'miquella'],
    highlight: 'self-bond',
  },
]

const STATUS_COLOR: Record<Status, string> = {
  alive:      '#c5a059',
  fallen:     '#a64d4d',
  missing:    '#7d6cb0',
  cursed:     '#c98a3e',
  unknown:    '#5a72b5',
  historical: '#8b6f47',
}

const STATUS_LABEL: Record<Status, string> = {
  alive:      'En pie',
  fallen:     'Caído',
  missing:    'Desaparecido',
  cursed:     'Maldito',
  unknown:    'Incierto',
  historical: 'Pre-Orden',
}

const RELATION_BADGE: Record<RelationKind, { label: string; color: string }> = {
  'blood':       { label: 'sangre',           color: '#d4ad62' },
  'bond-soul':   { label: 'misma alma',       color: '#f2deb0' },
  'bond-shadow': { label: 'sombra ligada',    color: '#5a72b5' },
  'bond-mount':  { label: 'montura sagrada',  color: '#c97352' },
  'bond-court':  { label: 'corte',            color: '#b08e58' },
  'ambiguous':   { label: 'incierto',         color: '#7d6cb0' },
  'historical':  { label: 'pre-Orden',        color: '#a04270' },
  'mentor':      { label: 'maestro · disc.',  color: '#c5a059' },
  'family':      { label: 'familia',          color: '#bf4848' },
  'twin':        { label: 'gemelo',           color: '#5a72b5' },
  'rival':       { label: 'rival',            color: '#a04270' },
  'agent':       { label: 'agente',           color: '#c97352' },
}

/* ─────────────── Card components ─────────────── */

interface CardProps {
  person: Person
  /** Active status filter set — undefined means show all */
  visibleStatuses?: Set<Status>
  emphasized?: boolean
}

function PersonCard({ person, visibleStatuses, emphasized }: CardProps) {
  /* Look up image category + slug if the person resolves to an entry */
  const imageRef = useMemo(() => {
    if (person.kind === 'character' && findCharacter(person.id)) {
      return { category: 'characters' as const, id: person.id, type: 'character' as EntityType }
    }
    if (person.kind === 'concept' && findConcept(person.id)) {
      return { category: 'concepts' as const, id: person.id, type: 'concept' as EntityType }
    }
    if (person.kind === 'faction' && findFaction(person.id)) {
      return { category: 'factions' as const, id: person.id, type: 'faction' as EntityType }
    }
    return null
  }, [person.kind, person.id])

  const path = useMemo(() => {
    if (person.kind === 'character') {
      const c = findCharacter(person.id)
      return c ? pathFor.character(c) : null
    }
    if (person.kind === 'concept') {
      const g = findConcept(person.id)
      return g ? pathFor.concept(g) : null
    }
    if (person.kind === 'faction') {
      const f = findFaction(person.id)
      return f ? pathFor.faction(f) : null
    }
    return null
  }, [person.kind, person.id])

  const status = person.status ?? 'unknown'
  const dimmed = visibleStatuses && !visibleStatuses.has(status)
  const dotColor = STATUS_COLOR[status]
  const relationMeta = person.relation ? RELATION_BADGE[person.relation] : undefined

  const inner = (
    <div
      className={`parchment-panel p-3 transition-all duration-300 group min-w-0 sm:min-w-[180px] max-w-full sm:max-w-[230px] flex-1 sm:flex-initial
        ${dimmed ? 'opacity-25 grayscale' : ''}
        ${emphasized
          ? 'border-codex-gold/55 shadow-[0_0_18px_rgba(212,173,98,0.18)]'
          : 'hover:border-codex-gold-dim/60'
        }`}
    >
      <div className="flex gap-3 items-start">
        {imageRef && (
          <div className="w-12 h-12 shrink-0 rounded-sm overflow-hidden border border-codex-gold-dim/30 bg-codex-brown/40">
            <CodexImage
              alt={person.label}
              fallbackType="character"
              variant="square"
              entityCategory={imageRef.category}
              entityId={imageRef.id}
              overlayOpacity={0.15}
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span
              className="inline-block w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: dotColor, boxShadow: `0 0 6px ${dotColor}` }}
              aria-hidden
              title={STATUS_LABEL[status]}
            />
            <p className="font-heading text-sm text-codex-gold-bright tracking-wide truncate">
              {person.label}
            </p>
          </div>
          {person.epithet && (
            <p className="font-body text-[10px] text-codex-parchment-dim/85 italic line-clamp-2 leading-snug mb-1">
              {person.epithet}
            </p>
          )}
          <div className="flex items-center gap-1.5 flex-wrap">
            {relationMeta && (
              <span
                className="font-heading text-[8px] tracking-widest uppercase px-1.5 py-0.5 rounded-sm border"
                style={{
                  color: relationMeta.color,
                  borderColor: `${relationMeta.color}55`,
                  backgroundColor: `${relationMeta.color}10`,
                }}
              >
                {relationMeta.label}
              </span>
            )}
            {imageRef && (
              <EraBadge entity={{ id: person.id }} size="compact" />
            )}
          </div>
          {person.rune && (
            <p className="font-body text-[10px] text-codex-gold-dim/85 mt-1 leading-snug">
              ◈ {person.rune}
            </p>
          )}
        </div>
      </div>
    </div>
  )

  /* Wrap in EntityHoverCard + Link only if there's a real entry to point to */
  if (path && imageRef) {
    return (
      <EntityHoverCard targetType={imageRef.type} slug={person.id}>
        <Link to={path} aria-label={`Ver ficha de ${person.label}`} className="block">
          {inner}
        </Link>
      </EntityHoverCard>
    )
  }
  return inner
}

/* ─────────────── Union (partner row + children below) ─────────────── */

function Union({
  partners, partnerLabel, children, visibleStatuses, highlight,
}: {
  partners: string[]
  partnerLabel?: string
  children: string[]
  visibleStatuses?: Set<Status>
  highlight?: UnionDef['highlight']
}) {
  const partnersData = partners.map((id) => PEOPLE[id]).filter(Boolean)
  const childrenData = children.map((id) => PEOPLE[id]).filter(Boolean)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3 flex-wrap justify-center">
        {partnersData.map((p, i) => (
          <div key={p.id} className="flex items-center gap-3 flex-wrap justify-center">
            <PersonCard person={p} visibleStatuses={visibleStatuses} emphasized={highlight === 'self-bond'} />
            {i < partnersData.length - 1 && (
              <div className="flex flex-col items-center px-1">
                <span className={`font-heading tracking-widest text-base
                  ${highlight === 'self-bond' ? 'text-codex-gold-bright' : 'text-codex-gold-dim opacity-70'}`}>
                  {highlight === 'self-bond' ? '⊗' : '∞'}
                </span>
                <span className={`font-heading text-[9px] tracking-widest uppercase
                  ${highlight === 'self-bond' ? 'text-codex-gold-bright' : 'text-codex-gold-dim/60'}`}>
                  {highlight === 'self-bond' ? '= misma alma' : (partnerLabel ?? 'unión')}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {childrenData.length > 0 && (
        <div className="flex flex-col items-center">
          <div className="w-px h-4 bg-codex-gold-dim/40" />
          <div
            className="h-px bg-codex-gold-dim/40"
            style={{ width: `${Math.min(childrenData.length * 230, 920)}px`, maxWidth: '100%' }}
          />
        </div>
      )}

      {childrenData.length > 0 && (
        <div className="flex items-start gap-3 flex-wrap justify-center">
          {childrenData.map((c) => (
            <div key={c.id} className="flex flex-col items-center">
              <div className="w-px h-4 bg-codex-gold-dim/40 -mt-4" />
              <PersonCard person={c} visibleStatuses={visibleStatuses} />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

/* ─────────────── Status filter chips ─────────────── */

const STATUS_ORDER: Status[] = ['alive', 'fallen', 'cursed', 'missing', 'unknown', 'historical']

function StatusFilters({
  active, onToggle, onReset,
}: {
  active: Set<Status>
  onToggle: (s: Status) => void
  onReset: () => void
}) {
  const allActive = STATUS_ORDER.every((s) => active.has(s))
  return (
    <div className="flex flex-wrap items-center gap-1.5 mb-8 justify-center">
      <button
        type="button"
        onClick={onReset}
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-[10px] font-heading tracking-wider uppercase transition-all
          ${allActive
            ? 'bg-codex-gold/15 border border-codex-gold/40 text-codex-gold-bright'
            : 'bg-codex-brown/30 border border-codex-gold-dim/20 text-codex-parchment-dim hover:text-codex-parchment'
          }`}
      >
        Todos
      </button>
      {STATUS_ORDER.map((s) => {
        const isOn = active.has(s)
        return (
          <button
            key={s}
            type="button"
            onClick={() => onToggle(s)}
            aria-pressed={isOn}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] font-heading tracking-wider uppercase transition-all
              ${isOn
                ? 'bg-codex-brown/50 border border-codex-gold-dim/45 text-codex-parchment'
                : 'bg-codex-brown/20 border border-codex-gold-dim/15 text-codex-parchment-dim/45 hover:text-codex-parchment-dim'
              }`}
            style={isOn ? { boxShadow: `0 0 6px ${STATUS_COLOR[s]}33` } : undefined}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: STATUS_COLOR[s] }}
              aria-hidden
            />
            {STATUS_LABEL[s]}
          </button>
        )
      })}
    </div>
  )
}

/* ─────────────── Section wrapper ─────────────── */

interface SectionProps {
  heading: string
  sub: string
  note: string
  children: React.ReactNode
}

function GenSection({ heading, sub, note, children }: SectionProps) {
  return (
    <section>
      <header className="mb-6">
        <h2 className="font-heading text-2xl text-codex-gold-bright tracking-wide pb-1.5 border-b border-codex-gold-dim/30">
          {heading}
        </h2>
        <p className="font-subheading italic text-codex-parchment-dim mt-2 text-sm">{sub}</p>
        <p className="font-body text-sm text-codex-parchment-dim/80 mt-2 leading-relaxed max-w-3xl">
          <EnrichedText text={note} />
        </p>
      </header>
      {children}
    </section>
  )
}

/* ─────────────── Page ─────────────── */

export function GenealogyPage() {
  useEffect(() => { document.title = 'Genealogía · Códice del Orden Fracturado' }, [])

  /* Status filter state — start with everything on */
  const [activeStatuses, setActiveStatuses] = useState<Set<Status>>(() => new Set(STATUS_ORDER))
  const toggle = (s: Status) => {
    setActiveStatuses((prev) => {
      const next = new Set(prev)
      if (next.has(s)) next.delete(s)
      else next.add(s)
      return next
    })
  }
  const reset = () => setActiveStatuses(new Set(STATUS_ORDER))

  /* Render only when filter has at least one — empty filter falls back to all */
  const visibleStatuses = activeStatuses.size === 0 ? new Set(STATUS_ORDER) : activeStatuses

  return (
    <section id="genealogia">
      <SectionHero fallbackType="golden-order" />
      <div className="codex-section pt-6">
        <SectionHeader
          title="Genealogía del Árbol Áureo"
          subtitle="La dinastía rota — tres uniones, once herederos, ningún heredero en pie · y todo lo que orbita alrededor"
        />

        <StatusFilters
          active={activeStatuses}
          onToggle={toggle}
          onReset={reset}
        />

        <div className="space-y-16">
          {/* Predecesores cosmológicos */}
          <GenSection
            heading="0. Antes del Orden"
            sub="Predecesores cosmológicos · Lo que había antes de Marika"
            note="El cosmos que el Orden Dorado ocupa estuvo sujeto a otras hegemonías. La Reina del Ojo Velado fue Empyrean del régimen previo, distribuyendo la Llama Negra entre los Pieles de Dios. Antes de los humanos, Placidusax fue Señor Elden bajo un régimen dragónico. Y el linaje paterno de Godfrey desciende del Storm-Hawk King — rey ancestral cuyas monturas dieron origen a Torrent."
          >
            <div className="flex flex-wrap gap-4 justify-center">
              <PersonCard person={PEOPLE['gloam-eyed-queen']} visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['placidusax']}        visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['storm-hawk-king']}   visibleStatuses={visibleStatuses} />
            </div>
          </GenSection>

          {/* Marika ⟷ Radagon — el secreto cosmológico */}
          <GenSection
            heading="∞. Marika ⊗ Radagon"
            sub="La revelación · Una sola alma en dos cuerpos"
            note="La revelación cosmológica más oscura de las Tierras Intermedias: Radagon es Marika. Comparten cuerpo. Cada matrimonio que ella celebró con él fue una unión consigo misma. Cada golpe de martillo de Radagon contra el Anillo era un intento desesperado por reparar lo que su otra mitad había roto."
          >
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <PersonCard person={PEOPLE['marika']} visibleStatuses={visibleStatuses} emphasized />
              <div className="flex flex-col items-center px-2">
                <span className="font-heading tracking-widest text-codex-gold-bright text-2xl leading-none">⊗</span>
                <span className="font-heading text-[9px] tracking-widest uppercase text-codex-gold-bright/85 mt-1">
                  son la misma persona
                </span>
              </div>
              <PersonCard person={PEOPLE['radagon']} visibleStatuses={visibleStatuses} emphasized />
            </div>
          </GenSection>

          {/* 3 uniones */}
          {UNIONS.map((u) => (
            <GenSection key={u.heading} heading={u.heading} sub={u.sub} note={u.note}>
              <Union
                partners={u.partners}
                partnerLabel={u.partnerLabel}
                children={u.children}
                visibleStatuses={visibleStatuses}
                highlight={u.highlight}
              />
            </GenSection>
          ))}

          {/* Lazos cosmológicos no biológicos */}
          <GenSection
            heading="IV. Lazos cosmológicos"
            sub="Hermanos de sombra · monturas sagradas · hijos sin tumba"
            note="No todo linaje cosmológico se hereda por sangre. Cada Empyrean recibe una Bestia ligada en sombra; cada Señor Elden tiene su montura espiritual; algunas figuras existen al borde de las tres uniones — diseñadas por Marika para una función específica."
          >
            <div className="flex flex-wrap gap-4 justify-center">
              <PersonCard person={PEOPLE['maliketh']} visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['blaidd']}   visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['serosh']}   visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['melina']}   visibleStatuses={visibleStatuses} />
            </div>
          </GenSection>

          {/* Casa Caria extendida */}
          <GenSection
            heading="V. Casa Caria"
            sub="La corte de Rennala · Más allá de la sangre, la lealtad"
            note="La Casa Caria sobrevive parcialmente al colapso de la Academia gracias a la lealtad de su corte. Iji, el Gran Herrero gigante, y Seluvis, el conspector de maniquíes, sirven a Ranni cuando la Casa Real se ha derrumbado en bucle eterno."
          >
            <div className="flex flex-wrap gap-4 justify-center">
              <PersonCard person={PEOPLE['rennala']} visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['ranni']}   visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['blaidd']}  visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['iji']}     visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['seluvis']} visibleStatuses={visibleStatuses} />
            </div>
          </GenSection>

          {/* Linaje cosmológico de Empyreans */}
          <GenSection
            heading="VI. Linaje Empyrean"
            sub="No los unidos por sangre, sino por elección · Los candidatos a vasija divina"
            note="Los Dos Dedos eligen Empyreans — vasijas humanas capaces de portar el Anillo Elden tras Marika. El linaje Empyrean es paralelo al sanguíneo: define no quién desciende de quién, sino quién puede heredar el trono cosmológico."
          >
            <div className="flex flex-wrap gap-4 justify-center">
              <PersonCard person={PEOPLE['marika']}   visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['miquella']} visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['malenia']}  visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['ranni']}    visibleStatuses={visibleStatuses} />
            </div>
          </GenSection>

          {/* Linaje de la Podredumbre Escarlata */}
          <GenSection
            heading="VIII. El linaje de la podredumbre"
            sub="Malenia → Millicent → las cuatro hermanas que no nombramos"
            note="La podredumbre escarlata no se hereda solo por sangre — se siembra. Malenia, infectada desde el nacimiento, dejó instancias de su maldición esparcidas. Millicent es la más visible: una agente con conciencia propia, cultivada por Gowry para algún propósito que el sabio no admite. Sus 'hermanas' son otras encarnaciones del mismo brote, escondidas en la geografía pútrida de Caelid."
          >
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <PersonCard person={PEOPLE['malenia']} visibleStatuses={visibleStatuses} />
              <span className="font-heading text-codex-gold-dim/70 text-lg" aria-hidden>→</span>
              <PersonCard person={PEOPLE['millicent']} visibleStatuses={visibleStatuses} />
              <span className="font-heading text-codex-gold-dim/70 text-lg" aria-hidden>↔</span>
              <PersonCard person={PEOPLE['gowry']} visibleStatuses={visibleStatuses} />
            </div>
          </GenSection>

          {/* Fundamentalistas */}
          <GenSection
            heading="IX. Los fundamentalistas"
            sub="Linaje filosófico de Radagon · Maestro y aprendiz silenciosos"
            note="No todo se hereda por sangre o cosmología. Radagon legó una idea — que el Orden Dorado contiene una contradicción interna que puede corregirse. Goldmask hereda esa idea, la perfecciona en silencio, y la transmite al Hermano Corhyn. Sin Corhyn como traductor, Goldmask sería un monje mudo en una columna; sin Goldmask, Corhyn sería un fanático sin texto."
          >
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <PersonCard person={PEOPLE['radagon']} visibleStatuses={visibleStatuses} />
              <span className="font-heading text-codex-gold-dim/70 text-lg" aria-hidden>→</span>
              <PersonCard person={PEOPLE['goldmask']} visibleStatuses={visibleStatuses} />
              <span className="font-heading text-codex-gold-dim/70 text-lg" aria-hidden>→</span>
              <PersonCard person={PEOPLE['corhyn']} visibleStatuses={visibleStatuses} />
            </div>
          </GenSection>

          {/* La cuestión de los muertos */}
          <GenSection
            heading="X. La cuestión de los muertos"
            sub="Fia ↔ D ↔ Hermano de D · Tres respuestas opuestas"
            note="¿Qué hacer con los Que Viven en la Muerte? Tres figuras encarnan respuestas incompatibles. Fia los abraza y guarda su Marcasello para devolver la Muerte real al Anillo. D los cazaba con Llama Negra heredada hasta que Fia lo apuñaló en su propia cama. Su gemelo mudo aparece después con la armadura del primero, recibiendo la venganza póstuma del Tarnished. Tres voces sobre lo mismo, todas perdiendo."
          >
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <PersonCard person={PEOPLE['fia']} visibleStatuses={visibleStatuses} />
              <span className="font-heading text-codex-gold-dim/70 text-lg" aria-hidden>×</span>
              <PersonCard person={PEOPLE['d']} visibleStatuses={visibleStatuses} />
              <span className="font-heading text-codex-gold-dim/70 text-lg" aria-hidden>≈</span>
              <PersonCard person={PEOPLE['d-twin-brother']} visibleStatuses={visibleStatuses} />
            </div>
          </GenSection>

          {/* Mesa Redonda */}
          <GenSection
            heading="XI. La Mesa Redonda"
            sub="El cónclave de Tarnished · Maestros, mentores y traidores"
            note="La Mesa Redonda es la sede temporal donde la Voluntad Mayor reúne a los Tarnished tras su retorno. Gideon Ofnir el omnisciente coordina; Miriel pastor enseña hechicerías a quien las pida; Roderika descubre vocación con espíritus; Diallos llega buscando un noble propósito. Ninguno termina del todo bien — la Mesa misma está obsoleta, sus invitados solo no lo saben aún."
          >
            <div className="flex flex-wrap gap-4 justify-center">
              <PersonCard person={PEOPLE['gideon']}    visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['miriel']}    visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['roderika']}  visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['diallos']}   visibleStatuses={visibleStatuses} />
            </div>
          </GenSection>

          {/* Volcano Manor */}
          <GenSection
            heading="XII. Volcano Manor"
            sub="La corte de Rykard · Recusantes contra el Orden"
            note="Volcano Manor es la sociedad anti-Orden que opera dentro del Monte Gelmir. Tanith, la Señora, mantiene fidelidad mortuoria a su esposo Rykard incluso después de que la serpiente lo devorara. Bernahl reúne Recusantes para destruir el régimen desde dentro. Patches, como siempre, sirve y traiciona a todos por igual."
          >
            <div className="flex flex-wrap gap-4 justify-center">
              <PersonCard person={PEOPLE['rykard']}  visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['tanith']}  visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['bernahl']} visibleStatuses={visibleStatuses} />
              <PersonCard person={PEOPLE['patches']} visibleStatuses={visibleStatuses} />
            </div>
          </GenSection>

          {/* Linajes regionales */}
          <GenSection
            heading="XIII. Vínculos regionales"
            sub="Sangre y herencia más allá de la dinastía dorada"
            note="Las Tierras Intermedias contienen otras dinastías que el régimen oficial nunca catalogó. En Castle Morne, Edgar pierde a Irina y se quiebra. En Limgrave, Kenneth Haight cría a Nepheli sin contarle que su sangre es Hoarah Loux. En Jarburg, una tradición jarrera sobrevive en las manos de Jar-Bairn, heredero del Iron Fist Alexander."
          >
            <div className="space-y-6">
              <div>
                <p className="font-heading text-[10px] tracking-widest uppercase text-codex-gold-dim mb-3 text-center">
                  Castle Morne — padre e hija
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <PersonCard person={PEOPLE['edgar']}  visibleStatuses={visibleStatuses} />
                  <PersonCard person={PEOPLE['irina']}  visibleStatuses={visibleStatuses} />
                </div>
              </div>
              <div>
                <p className="font-heading text-[10px] tracking-widest uppercase text-codex-gold-dim mb-3 text-center">
                  Limgrave — sangre Hoarah Loux escondida
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <PersonCard person={PEOPLE['kenneth-haight']} visibleStatuses={visibleStatuses} />
                  <PersonCard person={PEOPLE['nepheli-loux']}   visibleStatuses={visibleStatuses} />
                </div>
              </div>
              <div>
                <p className="font-heading text-[10px] tracking-widest uppercase text-codex-gold-dim mb-3 text-center">
                  Jarburg — la dinastía jarrera
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <PersonCard person={PEOPLE['alexander']} visibleStatuses={visibleStatuses} />
                  <PersonCard person={PEOPLE['jar-bairn']} visibleStatuses={visibleStatuses} />
                </div>
              </div>
              <div>
                <p className="font-heading text-[10px] tracking-widest uppercase text-codex-gold-dim mb-3 text-center">
                  Periferia — Misbegotten, Albinaurics, Llama Frenética
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <PersonCard person={PEOPLE['boc']}     visibleStatuses={visibleStatuses} />
                  <PersonCard person={PEOPLE['latenna']} visibleStatuses={visibleStatuses} />
                  <PersonCard person={PEOPLE['albus']}   visibleStatuses={visibleStatuses} />
                  <PersonCard person={PEOPLE['hyetta']}  visibleStatuses={visibleStatuses} />
                  <PersonCard person={PEOPLE['vyke']}    visibleStatuses={visibleStatuses} />
                </div>
              </div>
            </div>
          </GenSection>

          {/* Sucesión Elden Lord */}
          <GenSection
            heading="VII. La sucesión del trono"
            sub="Quien fue Señor Elden · y quien podría serlo"
            note="El título de Señor Elden ha tenido pocos portadores reales. Placidusax fue antiguo Señor Elden bajo el régimen dragónico. Godfrey lo fue durante la era marcial del Orden Dorado, antes de su exilio. Tras la fractura, el trono ha estado vacante; cualquier Tarnished que reúna las Grandes Runas y derrote a la Bestia Elden puede ascender — y el final que elija definirá la siguiente era."
          >
            <div className="flex flex-wrap gap-4 justify-center items-stretch">
              <div className="flex flex-col items-center gap-2 max-w-[230px]">
                <p className="font-heading text-[10px] tracking-widest uppercase text-codex-gold-dim">
                  Señor anterior
                </p>
                <PersonCard person={PEOPLE['placidusax']} visibleStatuses={visibleStatuses} />
              </div>
              <div className="flex flex-col items-center gap-2 max-w-[230px]">
                <p className="font-heading text-[10px] tracking-widest uppercase text-codex-gold-dim">
                  Primer Señor Elden
                </p>
                <PersonCard person={PEOPLE['godfrey']} visibleStatuses={visibleStatuses} />
              </div>
              <div className="flex flex-col items-center gap-2 max-w-[230px]">
                <p className="font-heading text-[10px] tracking-widest uppercase text-codex-gold-dim">
                  Trono vacante
                </p>
                <div className="parchment-panel p-3 min-w-[180px] max-w-[230px] border-dashed">
                  <div className="flex flex-col items-center gap-2 py-2">
                    <span className="text-2xl text-codex-gold-dim/60">◇</span>
                    <p className="font-heading text-sm text-codex-parchment-dim text-center">
                      El Tarnished
                    </p>
                    <p className="font-body text-[10px] text-codex-parchment-dim/60 italic text-center leading-snug">
                      Quien reúna las Grandes Runas y derrote a la Bestia Elden definirá la siguiente era
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GenSection>
        </div>

        {/* Legends */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="parchment-panel p-4">
            <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-3">
              Estado de cada heredero
            </p>
            <ul className="space-y-1.5">
              {STATUS_ORDER.map((s) => (
                <li key={s} className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: STATUS_COLOR[s] }} aria-hidden />
                  <span className="text-codex-parchment-dim">{STATUS_LABEL[s]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="parchment-panel p-4">
            <p className="font-heading text-xs text-codex-gold-dim tracking-wider uppercase mb-3">
              Tipo de relación
            </p>
            <ul className="space-y-1.5">
              {(Object.keys(RELATION_BADGE) as RelationKind[]).map((k) => (
                <li key={k} className="flex items-center gap-2 text-xs">
                  <span
                    className="px-1.5 py-0.5 rounded-sm border text-[8px] font-heading tracking-widest uppercase"
                    style={{
                      color: RELATION_BADGE[k].color,
                      borderColor: `${RELATION_BADGE[k].color}55`,
                      backgroundColor: `${RELATION_BADGE[k].color}10`,
                    }}
                  >
                    {RELATION_BADGE[k].label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
