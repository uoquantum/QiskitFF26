import { useParams, Link, Navigate } from 'react-router-dom'
import GlassCard from '../components/ui/GlassCard.jsx'
import Markdown from '../components/ui/Markdown.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import ComingSoon from '../components/ui/ComingSoon.jsx'
import { CHALLENGES, SUBMISSION_GUIDELINES } from '../data/challenges.js'
import { useChallengesRevealed } from '../lib/useChallengesReveal.js'

// The markdown files open with their own "# Title" line; we show that title
// in the page header instead, so it isn't rendered twice.
function stripLeadingTitle(markdown) {
  return markdown.replace(/^#\s+.*\n+/, '')
}

export default function ChallengePrompt() {
  const { slug } = useParams()
  const revealed = useChallengesRevealed()

  const isGuidelines = slug === 'submission-guidelines'
  const challenge = isGuidelines ? null : CHALLENGES.find((c) => c.slug === slug)

  if (!isGuidelines && !challenge) {
    return <Navigate to="/challenges" replace />
  }

  return (
    <div className="section max-w-3xl">
      <Link to="/challenges" className="text-sm text-cyan-text hover:text-cyan-strong transition-colors">
        ← Back to challenges
      </Link>

      {!revealed ? (
        <div className="mt-8">
          <ComingSoon
            title="Not available yet"
            message="This prompt unlocks along with the rest of the challenges — check back soon!"
          />
        </div>
      ) : (
        <Reveal>
          <GlassCard strong className="mt-6 p-6 md:p-10">
            {isGuidelines ? (
              <>
                <p className="eyebrow mb-2">Hackathon</p>
                <h1 className="font-display text-2xl text-ink mb-6">Submission Guidelines</h1>
                <Markdown source={stripLeadingTitle(SUBMISSION_GUIDELINES)} folder="" />
              </>
            ) : (
              <>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="eyebrow">{challenge.track}</p>
                  <span className="font-mono text-xs text-ink-faint shrink-0">{challenge.number}</span>
                </div>
                <h1 className="font-display text-2xl text-ink mb-6">{challenge.title}</h1>
                <Markdown source={stripLeadingTitle(challenge.content)} folder={challenge.folder} />
              </>
            )}
          </GlassCard>
        </Reveal>
      )}
    </div>
  )
}
