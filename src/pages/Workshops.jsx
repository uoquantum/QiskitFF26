import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import GlowButton from '../components/ui/GlowButton.jsx'
import ComingSoon from '../components/ui/ComingSoon.jsx'
import { EVENT } from '../data/site.js'
import { TOOLS, JUDGING, FOCUS_AREAS, SUBMISSION_REQUIREMENTS } from '../data/workshops.js'
import { SCHEDULE } from '../data/schedule.js'
import { READY } from '../data/readiness.js'

const SKIP_TITLES = ['Check-in', 'Ceremony', 'Break', 'Lunch']

function isHighlight(s) {
  return s.detail && !SKIP_TITLES.some((skip) => s.title.includes(skip))
}

export default function Workshops() {
  const day1Sessions = SCHEDULE.day1.sessions.filter(isHighlight)
  const day2Sessions = SCHEDULE.day2.sessions.filter(isHighlight)
  const hackathonSessions = SCHEDULE.hackathonWeek.sessions

  return (
    <div className="section">
      <SectionHeading
        eyebrow="Weekend + Hackathon Week"
        title="Workshops & hackathon"
        description="Two days of talks and hands-on labs, then a self-directed build week to turn what you learned into a project."
      />

      <Reveal>
        <h3 className="font-display text-xl text-ink mb-5">This year's tracks</h3>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {FOCUS_AREAS.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06}>
            <GlassCard glow className="p-6 h-full">
              <h4 className="font-display text-ink text-sm mb-2">{f.title}</h4>
              <p className="text-xs text-ink-muted leading-relaxed">{f.detail}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {!READY.schedule ? (
        <div className="mb-16">
          <ComingSoon
            title="Session-by-session breakdown coming soon"
            message="Talk titles, labs, and the hackathon-week schedule are still being finalized."
          />
        </div>
      ) : (
        <>
          <Reveal>
            <h3 className="font-display text-xl text-ink mb-5">{SCHEDULE.day1.label} — talks &amp; labs</h3>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 mb-12">
            {day1Sessions.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <GlassCard glow className="p-6 h-full">
                  <p className="font-mono text-xs text-cyan-text mb-2">{s.time}</p>
                  <h4 className="font-display text-ink mb-2">{s.title}</h4>
                  <p className="text-sm text-ink-muted">{s.detail}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="font-display text-xl text-ink mb-5">{SCHEDULE.day2.label} — talks &amp; labs</h3>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 mb-16">
            {day2Sessions.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <GlassCard glow className="p-6 h-full">
                  <p className="font-mono text-xs text-cyan-text mb-2">{s.time}</p>
                  <h4 className="font-display text-ink mb-2">{s.title}</h4>
                  <p className="text-sm text-ink-muted">{s.detail}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="font-display text-xl text-ink mb-5">{SCHEDULE.hackathonWeek.label}</h3>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {hackathonSessions.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <GlassCard glow className="p-6 h-full">
                  <p className="font-mono text-xs text-magenta-text mb-2">{s.time}</p>
                  <h4 className="font-display text-ink text-sm mb-1">{s.title}</h4>
                  {s.detail && <p className="text-xs text-ink-muted">{s.detail}</p>}
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </>
      )}

      <div className="grid gap-6 md:grid-cols-2 mb-16">
        <Reveal>
          <GlassCard strong className="p-8 h-full">
            <h4 className="font-display text-ink mb-4">Tools we'll use</h4>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full text-xs font-mono border border-ink/15 text-ink-muted">
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.1}>
          <GlassCard strong className="p-8 h-full">
            <h4 className="font-display text-ink mb-4">Judging criteria</h4>
            <ul className="space-y-3">
              {JUDGING.map((j) => (
                <li key={j.title} className="text-sm">
                  <span className="text-ink font-medium">{j.title}</span>
                  <span className="text-ink-muted"> — {j.detail}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>

      <Reveal>
        <h3 className="font-display text-xl text-ink mb-5">What to submit</h3>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {SUBMISSION_REQUIREMENTS.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.06}>
            <GlassCard className="p-6 h-full">
              <p className="font-mono text-xs text-cyan-text mb-2">{String(i + 1).padStart(2, '0')}</p>
              <h4 className="font-display text-ink text-sm mb-2">{r.title}</h4>
              <p className="text-xs text-ink-muted leading-relaxed">{r.detail}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="text-sm text-ink-faint font-mono mb-16">Deadline: {EVENT.hackathonDeadline}</p>
      </Reveal>

      <Reveal>
        <GlassCard className="p-10 text-center">
          <h3 className="font-display text-2xl text-ink mb-3">See this year's challenges</h3>
          <p className="text-ink-muted max-w-md mx-auto mb-7">
            Full hackathon challenge briefs and starter kits are published on GitHub.
          </p>
          <GlowButton href={EVENT.hackathonRepo}>Open challenge repo ↗</GlowButton>
        </GlassCard>
      </Reveal>
    </div>
  )
}
