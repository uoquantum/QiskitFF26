import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlowButton from '../components/ui/GlowButton.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import SponsorMarquee from '../components/ui/SponsorMarquee.jsx'
import ComingSoon from '../components/ui/ComingSoon.jsx'
import { EVENT } from '../data/site.js'
import { AUDIENCE, LEARN, FOCUS_AREAS } from '../data/workshops.js'
import { SCHEDULE } from '../data/schedule.js'
import { SPONSORS } from '../data/sponsors.js'
import { HOME_COPY, STATS } from '../data/home.js'
import { READY } from '../data/readiness.js'

const QuantumCanvas = lazy(() => import('../components/three/QuantumCanvas.jsx'))

export default function Home() {
  return (
    <div>
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <Suspense fallback={<div className="absolute inset-0 bg-radial-glow" />}>
          <QuantumCanvas />
        </Suspense>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void" />

        <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            {EVENT.dates} · {EVENT.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl font-display text-5xl md:text-7xl font-semibold leading-[1.04] tracking-tight text-ink"
          >
            {EVENT.tagline.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient">{EVENT.tagline.split(' ').slice(-1)}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-lg text-ink-muted text-lg leading-relaxed"
          >
            {HOME_COPY.heroSubtitle} {EVENT.price}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="pointer-events-auto mt-10 flex flex-wrap items-center gap-4"
          >
            <GlowButton to="/register">Register now</GlowButton>
            <GlowButton href={EVENT.hackathonRepo} variant="ghost">
              View challenges ↗
            </GlowButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint text-xs font-mono tracking-widest uppercase"
        >
          scroll
        </motion.div>
      </section>

      <section className="relative border-y border-ink/10">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <p className="font-display text-3xl md:text-4xl text-gradient font-semibold">{s.value}</p>
              <p className="text-xs md:text-sm text-ink-muted mt-1">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="About the fest"
          title={HOME_COPY.aboutTitle}
          description={EVENT.blurb}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <GlassCard glow className="p-8 h-full">
              <p className="font-mono text-xs text-cyan-text mb-3">WEEKEND · {EVENT.weekendDates}</p>
              <h3 className="text-xl font-display text-ink mb-3">Talks &amp; hands-on labs</h3>
              <p className="text-ink-muted leading-relaxed">{HOME_COPY.day1Blurb}</p>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.15}>
            <GlassCard glow className="p-8 h-full">
              <p className="font-mono text-xs text-magenta-text mb-3">BUILD WEEK</p>
              <h3 className="text-xl font-display text-ink mb-3">Hackathon</h3>
              <p className="text-ink-muted leading-relaxed">{HOME_COPY.day2Blurb}</p>
            </GlassCard>
          </Reveal>
        </div>

        <Reveal>
          <p className="eyebrow mt-16 mb-6">This year's focus</p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          {FOCUS_AREAS.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <GlassCard className="p-6 h-full">
                <h4 className="font-display text-ink text-sm mb-2">{f.title}</h4>
                <p className="text-xs text-ink-muted leading-relaxed">{f.detail}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <Reveal delay={0.05}>
            <GlassCard className="p-8 h-full">
              <h4 className="font-display text-ink mb-4">Who should attend</h4>
              <ul className="space-y-3">
                {AUDIENCE.map((a) => (
                  <li key={a} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" />
                    {a}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.15}>
            <GlassCard className="p-8 h-full">
              <h4 className="font-display text-ink mb-4">What you'll learn</h4>
              <ul className="space-y-3">
                {LEARN.map((a) => (
                  <li key={a} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-quantum-violet" />
                    {a}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <section className="section !pt-0">
        <SectionHeading eyebrow="How it flows" title="Schedule at a glance" />
        {!READY.schedule ? (
          <ComingSoon compact title="Detailed schedule coming soon" message="The dates are locked in — session-by-session details are on the way." />
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {Object.values(SCHEDULE).map((day, i) => (
              <Reveal key={day.label} delay={i * 0.1}>
                <GlassCard className="p-8 h-full">
                  <p className="eyebrow mb-1">{day.theme}</p>
                  <h4 className="font-display text-lg text-ink mb-4">{day.label}</h4>
                  <ul className="space-y-2.5">
                    {day.sessions.slice(0, 4).map((s) => (
                      <li key={s.time} className="flex gap-4 text-sm">
                        <span className="font-mono text-ink-faint shrink-0 w-24">{s.time}</span>
                        <span className="text-ink-muted">{s.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/schedule" className="mt-6 inline-block text-sm text-cyan-text hover:text-cyan-strong transition-colors">
                    View full schedule →
                  </Link>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <section className="section !pt-0">
        <SectionHeading eyebrow="With thanks to" title="Sponsors & partners" align="center" />
        <SponsorMarquee sponsors={SPONSORS} />
        <Reveal>
          <div className="mt-8 text-center">
            <Link to="/sponsors" className="text-sm text-cyan-text hover:text-cyan-strong transition-colors">
              Meet all our sponsors →
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section !pt-0">
        <Reveal>
          <GlassCard strong className="p-10 md:p-14 text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-radial-glow opacity-60" />
            <div className="relative">
              <h3 className="font-display text-3xl md:text-4xl text-ink mb-4">{HOME_COPY.ctaTitle}</h3>
              <p className="text-ink-muted max-w-md mx-auto mb-8">
                Seats are limited and it's free. Reserve your spot for {EVENT.dates}.
              </p>
              <GlowButton to="/register">Register now</GlowButton>
            </div>
          </GlassCard>
        </Reveal>
      </section>
    </div>
  )
}
