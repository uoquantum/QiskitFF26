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
import { LEARN, FOCUS_AREAS } from '../data/workshops.js'
import { SCHEDULE } from '../data/schedule.js'
import { SPONSORS } from '../data/sponsors.js'
import { HOME_COPY, STATS } from '../data/home.js'
import { WINNERS } from '../data/winners.js'
import { GALLERY } from '../data/gallery.js'
import { READY } from '../data/readiness.js'
import { assetUrl } from '../lib/assetUrl.js'

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
            <GlowButton to="/challenges">View challenges</GlowButton>
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
        <div className="grid gap-10 md:grid-cols-2 md:gap-14 items-start mb-6">
          <SectionHeading
            eyebrow="About the fest"
            title={HOME_COPY.aboutTitle}
            description={EVENT.blurb}
          />
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-full bg-quantum-violet/20 blur-3xl" />
              <img src={assetUrl('/hero2.svg')} alt="" className="w-full h-auto rounded-2xl" />
            </div>
          </Reveal>
        </div>

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
      </section>

      <section className="section !pt-0">
        <SectionHeading eyebrow="Results" title={HOME_COPY.winnersTitle} description={HOME_COPY.winnersSubtitle} align="center" />
        <div className="grid gap-6 sm:grid-cols-3">
          {WINNERS.map((w, i) => {
            const placeLabel = w.place === 1 ? '1st Place' : w.place === 2 ? '2nd Place' : '3rd Place'
            const accent = w.place === 1 ? 'text-cyan-text' : w.place === 2 ? 'text-quantum-violet' : 'text-magenta-text'
            return (
              <Reveal key={w.team} delay={i * 0.08}>
                <GlassCard glow className="p-6 h-full flex flex-col items-center text-center">
                  <p className={`font-mono text-xs tracking-wider uppercase mb-4 ${accent}`}>{placeLabel}</p>
                  {w.photo ? (
                    <img
                      src={assetUrl(w.photo)}
                      alt={w.team}
                      className="w-full aspect-square rounded-xl object-cover mb-4"
                    />
                  ) : (
                    <div className="w-full aspect-square rounded-xl border border-dashed border-ink/15 bg-ink/[0.03] flex flex-col items-center justify-center gap-2 mb-4">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-ink-faint">
                        <path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <circle cx="12" cy="13" r="3.25" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      <span className="text-xs text-ink-faint">Photo coming soon</span>
                    </div>
                  )}
                  <h4 className="font-display text-lg text-ink">{w.team}</h4>
                  {w.repo && (
                    <a
                      href={w.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 text-xs text-cyan-text hover:text-cyan-strong transition-colors"
                    >
                      View project repo ↗
                    </a>
                  )}
                </GlassCard>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <p className="text-ink-muted max-w-md mx-auto mb-6">
              And thanks to every team who built something this week — see you at the next Fall Fest.
            </p>
            <a href={EVENT.discord} target="_blank" rel="noreferrer" className="btn-ghost">
              Join Discord
            </a>
          </div>
        </Reveal>
      </section>

      <section className="section !pt-0">
        <SectionHeading eyebrow="Memories" title="Event gallery" align="center" />
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.alt} delay={i * 0.05}>
              {g.src ? (
                <img
                  src={assetUrl(g.src)}
                  alt={g.alt}
                  className="w-full aspect-square rounded-xl object-cover"
                />
              ) : (
                <div className="w-full aspect-square rounded-xl border border-dashed border-ink/15 bg-ink/[0.03] flex flex-col items-center justify-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-ink-faint">
                    <path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="12" cy="13" r="3.25" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span className="text-xs text-ink-faint text-center px-2">{g.alt}</span>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section !pt-0">
        <div className="max-w-xl mx-auto">
          <Reveal>
            <GlassCard className="p-8">
              <h4 className="font-display text-ink mb-4 text-center">What you'll learn</h4>
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
    </div>
  )
}
