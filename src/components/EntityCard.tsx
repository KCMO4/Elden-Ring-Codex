import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { CertaintyBadge } from './CertaintyBadge'
import { CodexImage, type ImageVariant } from './images/CodexImage'
import { CornerOrnaments } from './CornerOrnaments'
import { EraBadge } from './EraBadge'
import { ReadCheck } from './ReadCheck'
import type { Certainty, EntityType, FallbackType } from '../data/types'

/* Image-source category understood by CodexImage. Mirrors the union there. */
type ImageCategory = 'characters' | 'factions' | 'regions' | 'concepts' | 'endings' | 'timelineEvents'

interface Props {
  /** Path to the detail page — full card is wrapped in a Link to this. */
  to: string
  /** Image / fallback metadata */
  imageCategory: ImageCategory
  imageId: string
  imageVariant: ImageVariant
  imageOverlayOpacity?: number
  fallbackType: FallbackType
  /** Top-corner ornaments — `'all'` for portraits, `'top'` for banners */
  ornamentCorners?: 'all' | 'top' | undefined
  ornamentSize?: 'sm' | 'md'

  /** Header strip above the title — small label, e.g. faction name. Optional. */
  eyebrow?: string
  /** Type for ReadCheck mark + EraBadge */
  readType: EntityType
  readSlug: string
  eraEntity: { id?: string; tags?: string[] }

  /** Title of the card */
  title: string
  /** Certainty badge in the image overlay */
  certainty: Certainty
  /** Sub-line below the title (role / what / historical) — line-clamped 3 */
  body: string
  /** Optional poetic intro shown italic with quotes (characters only) */
  poetic?: string

  /** CTA label. Default "Ver ficha" */
  cta?: string
  /** Custom slot rendered inside the body before the footer */
  children?: ReactNode

  /** Stagger entrance position */
  index?: number
}

/**
 * Unified card for Characters / Factions / Regions / etc. Replaces 3
 * near-identical components with a single configurable surface. The whole
 * card is a single navigation Link — no expandable state. All structural
 * details belong to the detail page (`structuralFacts` in DetailLayout).
 */
export function EntityCard({
  to,
  imageCategory,
  imageId,
  imageVariant,
  imageOverlayOpacity = 0.4,
  fallbackType,
  ornamentCorners = 'all',
  ornamentSize = 'md',
  eyebrow,
  readType,
  readSlug,
  eraEntity,
  title,
  certainty,
  body,
  poetic,
  cta = 'Ver ficha',
  children,
  index = 0,
}: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.45, delay: (index % 12) * 0.04, ease: [0.22, 1, 0.36, 1], layout: { duration: 0.3 } }}
      className="parchment-panel overflow-hidden transition-all duration-500 group
        hover:border-codex-gold/60
        hover:shadow-[0_0_0_1px_rgba(197,160,89,0.25),0_8px_30px_rgba(197,160,89,0.18),0_0_60px_rgba(197,160,89,0.08)]"
    >
      <Link to={to} className="block">
        {/* Image */}
        <div className="relative">
          <CodexImage
            alt={title}
            fallbackType={fallbackType}
            variant={imageVariant}
            entityCategory={imageCategory}
            entityId={imageId}
            overlayOpacity={imageOverlayOpacity}
            hoverZoom
          >
            <div className="absolute top-2 right-2 z-10">
              <CertaintyBadge certainty={certainty} />
            </div>
          </CodexImage>
          <CornerOrnaments size={ornamentSize} corners={ornamentCorners} />
        </div>

        {/* Body — uniform spacing across all card types */}
        <div className="p-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            {eyebrow ? (
              <p className="font-heading text-[10px] tracking-widest uppercase text-codex-gold-dim min-w-0 truncate">
                {eyebrow}
              </p>
            ) : <span aria-hidden />}
            <div className="flex items-center gap-1.5 shrink-0">
              <ReadCheck type={readType} slug={readSlug} />
              <EraBadge entity={eraEntity} size="compact" />
            </div>
          </div>

          <h3 className="font-heading text-base text-codex-gold-bright leading-tight mb-2 group-hover:text-glow transition-all">
            {title}
          </h3>

          <p className="font-body text-sm text-codex-parchment-dim leading-relaxed line-clamp-3 mb-3">
            {body}
          </p>

          {poetic && (
            <p className="font-subheading italic text-sm text-codex-parchment-dim/80 leading-relaxed line-clamp-3 mb-3">
              "{poetic}"
            </p>
          )}

          {children}

          <div className="mt-3 pt-3 border-t border-codex-gold-dim/15 flex items-center justify-end">
            <span className="flex items-center gap-1 font-heading text-xs tracking-wider uppercase text-codex-gold/80 group-hover:text-codex-gold-bright transition-colors">
              {cta}
              <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
