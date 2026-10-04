import { useEffect, useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import GlowButton from '../components/ui/GlowButton.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import ComingSoon from '../components/ui/ComingSoon.jsx'
import { EVENT } from '../data/site.js'
import { READY } from '../data/readiness.js'
import { CHALLENGES, CHALLENGES_REVEAL_AT, CHALLENGES_REVEAL_LABEL, SUBMISSION_GUIDELINES_URL } from '../data/challenges.js'

// This page is linked from the nav (see NAV_MORE in data/site.js). Even
// once READY.challenges is flipped to true, it keeps showing "not available
// yet" until CHALLENGES_REVEAL_AT passes, so it's safe to fill in
// challenges.js and flip the flag early without it leaking before reveal.
function useRevealTimeReached() {
  const target = new Date(CHALLENGES_REVEAL_AT).getTime()
  const [reached, setReached] = useState(() => Date.now() >= target)

  useEffect(() => {
    if (reached) return
    const id = setInterval(() => {
      if (Date.now() >= target) setReached(true)
    }, 30_000)
    return () => clearInterval(id)
  }, [reached, target])

  return reached
}

export default function Challenges() {
  const timeReached = useRevealTimeReached()
  const revealed = READY.challenges && timeReached

  return (
    <div className="section">
      <SectionHeading
        eyebrow="Hackathon"
        title="Challenges"
        description={
          revealed
            ? "This year's tracks and problem statements — pick one and start building."
            : `Challenges unlock ${CHALLENGES_REVEAL_LABEL}, right as the hackathon kicks off.`
        }
      />

      {revealed && CHALLENGES.length > 0 ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CHALLENGES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <GlassCard glow className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="eyebrow">{c.track}</p>
                    <span className="font-mono text-xs text-ink-faint shrink-0">{c.number}</span>
                  </div>
                  <h4 className="font-display text-ink mb-2">{c.title}</h4>
                  <p className="text-sm text-ink-muted leading-relaxed flex-1">{c.desc}</p>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 text-xs text-cyan-text hover:text-cyan-strong transition-colors"
                  >
                    View full prompt ↗
                  </a>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <GlassCard strong className="mt-10 p-8 md:p-10 text-center">
              <h3 className="font-display text-xl text-ink mb-3">Submission guidelines</h3>
              <p className="text-ink-muted max-w-md mx-auto mb-7">
                Every prompt and the open challenge share the same requirements — slides, a
                public GitHub repo with a full README, due {EVENT.hackathonDeadline}.
              </p>
              <GlowButton href={SUBMISSION_GUIDELINES_URL}>Read submission guidelines ↗</GlowButton>
            </GlassCard>
          </Reveal>

          {EVENT.hackathonRepo && (
            <Reveal>
              <div className="mt-8 text-center">
                <GlowButton href={EVENT.hackathonRepo} variant="ghost">
                  Browse all prompts on GitHub ↗
                </GlowButton>
              </div>
            </Reveal>
          )}
        </>
      ) : (
        <ComingSoon
          title="Not available yet"
          message={`Challenges will be revealed here ${CHALLENGES_REVEAL_LABEL} — check back then!`}
        />
      )}
    </div>
  )
}
