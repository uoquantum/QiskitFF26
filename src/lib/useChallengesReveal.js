import { useEffect, useState } from 'react'
import { READY } from '../data/readiness.js'
import { CHALLENGES_REVEAL_AT } from '../data/challenges.js'

// Shared by the /challenges list and each /challenges/:slug detail page, so
// a direct link to a specific prompt can't be used to see it before reveal.
export function useChallengesRevealed() {
  const target = new Date(CHALLENGES_REVEAL_AT).getTime()
  const [timeReached, setTimeReached] = useState(() => Date.now() >= target)

  useEffect(() => {
    if (timeReached) return
    const id = setInterval(() => {
      if (Date.now() >= target) setTimeReached(true)
    }, 30_000)
    return () => clearInterval(id)
  }, [timeReached, target])

  return READY.challenges && timeReached
}
