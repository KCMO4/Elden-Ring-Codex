import type { Certainty } from '../data/types'

/** Orden canónico de certeza para sort: confirmado < inferencia < teoría. */
export const CERTAINTY_RANK: Record<Certainty, number> = {
  confirmado: 0,
  inferencia: 1,
  teoria: 2,
}
