import { useState, useMemo, lazy, Suspense } from 'react'
import type { FallbackType } from '../../data/types'
import { useEntityImage, type ImageCategory, type ImageKind } from '../../lib/imageSources'
import { categoryToArtPath } from '../../lib/assetPaths'

/* FallbackIllustrations is a 1953-line bundle of decorative SVG fallbacks.
   It only renders when an entity has no image AND no override — extracting
   it into its own chunk keeps the initial bundle leaner without affecting
   the common "image loads" path. */
const FallbackIllustration = lazy(() =>
  import('./FallbackIllustrations').then((m) => ({ default: m.FallbackIllustration })),
)

export type ImageVariant = 'portrait' | 'banner' | 'square' | 'card' | 'landscape'

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
  portrait:  'aspect-[4/5]',
  banner:    'aspect-[16/9]',
  square:    'aspect-square',
  card:      'aspect-[3/2]',
  landscape: 'aspect-[16/9]',
}

const fallbackAspectMap: Record<ImageVariant, 'portrait' | 'landscape' | 'square'> = {
  portrait:  'portrait',
  banner:    'landscape',
  square:    'square',
  card:      'landscape',
  landscape: 'landscape',
}

// Variantes donde la cabeza/sujeto suele estar arriba: forzamos object-position top
// para que object-cover no recorte cabezas cuando la imagen es más alta que el spot.
const objectPositionMap: Record<ImageVariant, string> = {
  portrait:  'object-[center_top]',
  landscape: 'object-[center_30%]',
  card:      'object-[center_30%]',
  banner:    'object-center',
  square:    'object-center',
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
  const [loaded, setLoaded] = useState(false)
  const currentSrc = resolutionChain[chainIndex]

  const handleError = () => {
    if (chainIndex + 1 < resolutionChain.length) {
      setChainIndex(chainIndex + 1)
      setLoaded(false)
    } else {
      setAllFailed(true)
    }
  }

  const showImage = currentSrc && !allFailed && resolutionChain.length > 0

  return (
    <div className={`relative overflow-hidden ${aspectMap[variant]} ${className}`}>
      {showImage && !loaded && (
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-codex-brown/40 via-codex-black/60 to-codex-brown/30 animate-pulse"
        />
      )}
      {showImage ? (
        <img
          key={currentSrc}
          src={currentSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={handleError}
          style={{ imageRendering: 'auto' }}
          className={`absolute inset-0 w-full h-full object-cover ${objectPositionMap[variant]} transition-all duration-700
            ${loaded ? 'opacity-100' : 'opacity-0'}
            ${hoverZoom ? 'group-hover:scale-105' : ''}`}
        />
      ) : (
        <div className="absolute inset-0">
          <Suspense fallback={
            <div className="w-full h-full bg-gradient-to-br from-codex-brown/40 via-codex-black/60 to-codex-brown/30" />
          }>
            <FallbackIllustration
              type={fallbackType}
              aspect={fallbackAspectMap[variant]}
              className="w-full h-full"
            />
          </Suspense>
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
