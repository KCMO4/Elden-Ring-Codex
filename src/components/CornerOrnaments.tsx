/**
 * Decorative gold corner brackets used by entity cards.
 * Pass `corners="top"` to only render the top brackets, default is all 4.
 */
interface Props {
  size?: 'sm' | 'md'
  corners?: 'all' | 'top'
}

export function CornerOrnaments({ size = 'md', corners = 'all' }: Props) {
  const dim = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'
  const cls = `absolute ${dim} border-codex-gold-dim/50 pointer-events-none`
  return (
    <>
      <div className={`${cls} top-2 left-2 border-l border-t`} />
      <div className={`${cls} top-2 right-2 border-r border-t`} />
      {corners === 'all' && (
        <>
          <div className={`${cls} bottom-2 left-2 border-l border-b`} />
          <div className={`${cls} bottom-2 right-2 border-r border-b`} />
        </>
      )}
    </>
  )
}
