import { useState } from 'react'
import { FallbackIllustration } from './FallbackIllustrations'
import type { FallbackType } from '../../data/types'

export type ImageVariant = 'portrait' | 'banner' | 'square' | 'card'

interface CodexImageProps {
  src: string
  alt: string
  fallbackType?: FallbackType
  variant?: ImageVariant
  className?: string
  /** Extra CSS classes applied to the overlay */
  overlayClassName?: string
  /** 0–1 overlay opacity, default 0.45 */
  overlayOpacity?: number
  hoverZoom?: boolean
  children?: React.ReactNode
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
}: CodexImageProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden ${aspectMap[variant]} ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
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

      {/* Gradient overlay — always present for text readability */}
      <div
        className={`absolute inset-0 ${overlayClassName}`}
        style={{
          background: `linear-gradient(to top,
            rgba(10,10,8,${overlayOpacity + 0.35}) 0%,
            rgba(10,10,8,${overlayOpacity * 0.5}) 50%,
            rgba(10,10,8,${overlayOpacity * 0.15}) 100%)`,
        }}
      />

      {/* Gold frame border */}
      <div className="absolute inset-0 border border-codex-gold-dim/25 pointer-events-none" />

      {/* Slot for content overlaid on the image */}
      {children && (
        <div className="absolute inset-0 flex flex-col justify-end">{children}</div>
      )}
    </div>
  )
}
