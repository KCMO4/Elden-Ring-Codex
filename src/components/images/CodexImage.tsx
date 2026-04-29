import { useState, useMemo } from 'react'
import { FallbackIllustration } from './FallbackIllustrations'
import type { FallbackType } from '../../data/types'
import { useEntityImage, type ImageCategory, type ImageKind } from '../../lib/imageSources'
import { categoryToArtPath } from '../../lib/assetPaths'

export type ImageVariant = 'portrait' | 'banner' | 'square' | 'card'

interface CodexImageProps {
  /** Manually supplied src (used only when entityCategory/entityId not provided) */
  src?: string
  alt: string
  fallbackType?: FallbackType
  variant?: ImageVariant
  className?: string
  overlayClassName?: string
  overlayOpacity?: number
  hoverZoom?: boolean
  children?: React.ReactNode
  /** Resolve via override → /art path → fallback. Pass these to enable image-sources.local.json overrides. */
  entityCategory?: ImageCategory
  entityId?: string
  /** Which kind of override to read from sources ('image' or 'banner'). Defaults based on variant. */
  imageKind?: ImageKind
}

const aspectMap: Record<ImageVariant, string> = {
  portrait: 'aspect-[4/5]',
  banner:   'aspect-[16/7]',
  square:   'aspect-square',
  card:     'aspect-[3/2]',
}

const fallbackAspectMap: Record<ImageVariant, 'portrait' | 'landscape' | 'square'> = {
  portrait: 'portrait',
  banner:   'landscape',
  square:   'square',
  card:     'landscape',
}

export function CodexImage({
  src,
  alt,
  fallbackType = 'concept',
  variant = 'card',
  className = '',
  overlayClassName = '',
  overlayOpacity = 0.45,
  hoverZoom = true,
  children,
  entityCategory,
  entityId,
  imageKind,
}: CodexImageProps) {
  const kind: ImageKind = imageKind ?? (variant === 'banner' ? 'banner' : 'image')
  const overrideUrl = useEntityImage(entityCategory ?? 'characters', entityCategory ? entityId : null, kind)

  // Build resolution chain: override → local /art path → fallback (handled via onError chain)
  const resolutionChain = useMemo(() => {
    const chain: string[] = []
    if (overrideUrl) chain.push(overrideUrl)
    if (entityCategory && entityId) chain.push(categoryToArtPath(entityCategory, entityId))
    if (src) chain.push(src)
    return chain
  }, [overrideUrl, entityCategory, entityId, src])

  const [chainIndex, setChainIndex] = useState(0)
  const [allFailed, setAllFailed] = useState(false)
  const currentSrc = resolutionChain[chainIndex]

  const handleError = () => {
    if (chainIndex + 1 < resolutionChain.length) {
      setChainIndex(chainIndex + 1)
    } else {
      setAllFailed(true)
    }
  }

  const showImage = currentSrc && !allFailed && resolutionChain.length > 0

  return (
    <div className={`relative overflow-hidden ${aspectMap[variant]} ${className}`}>
      {showImage ? (
        <img
          key={currentSrc}
          src={currentSrc}
          alt={alt}
          loading="lazy"
          onError={handleError}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700
            ${hoverZoom ? 'group-hover:scale-105' : ''}`}
        />
      ) : (
        <div className="absolute inset-0">
          <FallbackIllustration
            type={fallbackType}
            aspect={fallbackAspectMap[variant]}
            className="w-full h-full"
          />
        </div>
      )}

      <div
        className={`absolute inset-0 ${overlayClassName}`}
        style={{
          background: `linear-gradient(to top,
            rgba(10,10,8,${overlayOpacity + 0.35}) 0%,
            rgba(10,10,8,${overlayOpacity * 0.5}) 50%,
            rgba(10,10,8,${overlayOpacity * 0.15}) 100%)`,
        }}
      />

      <div className="absolute inset-0 border border-codex-gold-dim/25 pointer-events-none" />

      {children && (
        <div className="absolute inset-0 flex flex-col justify-end">{children}</div>
      )}
    </div>
  )
}
