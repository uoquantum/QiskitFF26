import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import GlowButton from '../components/ui/GlowButton.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import ComingSoon from '../components/ui/ComingSoon.jsx'
import { EVENT } from '../data/site.js'
import { CHALLENGES, CHALLENGES_REVEAL_LABEL } from '../data/challenges.js'
import { useChallengesRevealed } from '../lib/useChallengesReveal.js'

// This page is linked from the nav (see NAV_MORE in data/site.js). Even
// once READY.challenges is flipped to true, it keeps showing "not available
// yet" until CHALLENGES_REVEAL_AT passes, so it's safe to fill in
// challenges.js and flip the flag early without it leaking before reveal.
export default function Challenges() {
  const revealed = useChallengesRevealed()

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
                  <Link
                    to={`/challenges/${c.slug}`}
                    className="mt-4 text-xs text-cyan-text hover:text-cyan-strong transition-colors"
                  >
                    View full prompt →
                  </Link>
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
              <GlowButton to="/challenges/submission-guidelines">Read submission guidelines</GlowButton>
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
