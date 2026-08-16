import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { EVENT, CODE_OF_CONDUCT_URL } from '../data/site.js'
import { VENUES } from '../data/schedule.js'

export default function About() {
  return (
    <div className="section">
      <SectionHeading
        eyebrow="About"
        title="About Qiskit Fall Fest at uOttawa"
        description={EVENT.blurb}
      />

      <div className="grid gap-6 mb-10">
        {VENUES.map((v) => (
          <Reveal key={v.day}>
            <GlassCard className="p-6">
              <p className="font-mono text-xs text-cyan-text mb-1">{v.day}</p>
              <p className="text-ink font-display">{v.room}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 mb-16">
        <Reveal>
          <Link to="/organizers">
            <GlassCard glow className="p-8 h-full">
              <p className="eyebrow mb-2">Meet the team</p>
              <h3 className="font-display text-xl text-ink mb-2">Organizing team</h3>
              <p className="text-sm text-ink-muted">The students behind Fall Fest.</p>
              <span className="mt-4 inline-block text-sm text-cyan-text">See everyone →</span>
            </GlassCard>
          </Link>
        </Reveal>
        <Reveal delay={0.08}>
          <Link to="/sponsors">
            <GlassCard glow className="p-8 h-full">
              <p className="eyebrow mb-2">With thanks to</p>
              <h3 className="font-display text-xl text-ink mb-2">Sponsors &amp; partners</h3>
              <p className="text-sm text-ink-muted">The organizations that make this free.</p>
              <span className="mt-4 inline-block text-sm text-cyan-text">See everyone →</span>
            </GlassCard>
          </Link>
        </Reveal>
      </div>

      <Reveal>
        <GlassCard strong className="p-8 md:p-10">
          <h4 className="font-display text-ink mb-3">Inclusion &amp; accessibility</h4>
          <p className="text-sm text-ink-muted leading-relaxed mb-4">
            We strive to make Fall Fest welcoming for everyone. Venues are accessible and dietary
            options are available throughout the event. All participants agree to our{' '}
            <Link to={CODE_OF_CONDUCT_URL} className="text-cyan-text hover:text-cyan-strong underline underline-offset-2">
              Code of Conduct
            </Link>.
          </p>
        </GlassCard>
      </Reveal>
    </div>
  )
}
