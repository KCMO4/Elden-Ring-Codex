type Variant = 'detail' | 'list' | 'generic'

interface Props {
  variant?: Variant
}

/**
 * Layout-aware skeleton shown while a lazy page chunk is loading.
 * The shapes roughly match the destination layout (hero band + main column +
 * sidebar for `detail`; section hero + grid for `list`) so the eventual
 * content swap feels less jarring than a centred spinner would.
 */
export function PageSkeleton({ variant = 'generic' }: Props) {
  if (variant === 'detail') return <DetailSkeleton />
  if (variant === 'list')   return <ListSkeleton />
  return <GenericSkeleton />
}

function DetailSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Hero band */}
      <div className="relative h-56 md:h-80 bg-gradient-to-b from-codex-brown/40 to-codex-black/60 border-b border-codex-gold-dim/15">
        <div className="absolute inset-0 codex-section flex flex-col justify-end pb-8 gap-4">
          {/* Breadcrumbs */}
          <div className="flex gap-2 items-center">
            <Bar w={60} h={10} />
            <Bar w={4} h={4} />
            <Bar w={80} h={10} />
            <Bar w={4} h={4} />
            <Bar w={120} h={10} />
          </div>
          {/* Title */}
          <Bar w="60%" h={36} />
          <Bar w="40%" h={16} />
        </div>
      </div>

      {/* Body */}
      <div className="codex-section pt-10">
        <div className="flex flex-wrap gap-2 mb-6">
          {Array.from({ length: 5 }).map((_, i) => <Bar key={i} w={64} h={20} />)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          {/* Main column */}
          <div className="space-y-4 max-w-3xl">
            <Bar w="100%" h={80} />
            <div className="h-3" />
            <Bar w="35%" h={26} />
            {Array.from({ length: 4 }).map((_, i) => (
              <Bar key={i} w={`${88 + (i % 3) * 4}%`} h={14} />
            ))}
            <div className="h-3" />
            <Bar w="30%" h={26} />
            {Array.from({ length: 5 }).map((_, i) => (
              <Bar key={i} w={`${85 + (i % 4) * 4}%`} h={14} />
            ))}
            <div className="h-3" />
            <Bar w="40%" h={26} />
            {Array.from({ length: 3 }).map((_, i) => (
              <Bar key={i} w={`${80 + (i % 3) * 5}%`} h={14} />
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 hidden lg:block">
            <Panel height={120} />
            <Panel height={180} />
            <Panel height={140} />
          </aside>
        </div>
      </div>
    </div>
  )
}

function ListSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Section hero strip */}
      <div className="h-40 md:h-52 bg-gradient-to-b from-codex-brown/40 to-codex-black/60 border-b border-codex-gold-dim/15" />

      <div className="codex-section pt-8 space-y-6">
        <Bar w="40%" h={32} />
        <Bar w="60%" h={14} />

        {/* Filter bar mock */}
        <Panel height={64} />

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="parchment-panel overflow-hidden">
              <div className="h-32 bg-codex-brown/30" />
              <div className="p-4 space-y-3">
                <Bar w="70%" h={18} />
                <Bar w="100%" h={12} />
                <Bar w="90%" h={12} />
                <Bar w="60%" h={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function GenericSkeleton() {
  return (
    <div className="animate-pulse codex-section py-16 space-y-4 max-w-3xl">
      <Bar w="50%" h={32} />
      <Bar w="80%" h={14} />
      <Bar w="70%" h={14} />
      <Bar w="90%" h={14} />
      <div className="h-2" />
      <Bar w="40%" h={24} />
      <Bar w="85%" h={12} />
      <Bar w="80%" h={12} />
    </div>
  )
}

function Bar({ w, h }: { w: number | string; h: number }) {
  return (
    <div
      className="rounded-sm bg-codex-brown/40 border border-codex-gold-dim/15 codex-shimmer"
      style={{ width: typeof w === 'number' ? `${w}px` : w, height: `${h}px` }}
    />
  )
}

function Panel({ height }: { height: number }) {
  return (
    <div
      className="parchment-panel codex-shimmer"
      style={{ height: `${height}px` }}
    />
  )
}
