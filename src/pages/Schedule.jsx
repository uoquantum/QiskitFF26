import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import ComingSoon from '../components/ui/ComingSoon.jsx'
import { SCHEDULE } from '../data/schedule.js'
import { EVENT } from '../data/site.js'
import { READY } from '../data/readiness.js'

export default function Schedule() {
  const [day, setDay] = useState('day1')
  const active = SCHEDULE[day]

  return (
    <div className="section">
      <SectionHeading
        eyebrow={EVENT.dates}
        title="Schedule"
        description="Weekend talks & labs, then a hackathon build week. Times are Eastern Time (ET) — room details are pinned on Discord as well."
      />

      {!READY.schedule ? (
        <ComingSoon
          title="Full schedule coming soon"
          message="Session times and speakers are still being finalized. The dates above are locked in — the minute-by-minute agenda will be posted here and on Discord."
        />
      ) : (
        <>
          <Reveal>
            <div className="inline-flex glass rounded-full p-1 mb-10">
              {Object.entries(SCHEDULE).map(([key, d]) => (
                <button
                  key={key}
                  onClick={() => setDay(key)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    day === key ? 'text-accent-ink' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {day === key && (
                    <motion.span
                      layoutId="day-pill"
                      className="absolute inset-0 rounded-full bg-cyan-glow shadow-glow-cyan"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{d.label} · {d.theme}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <GlassCard className="p-6 md:p-8 mb-6">
            <p className="text-sm text-ink-muted font-mono">📍 {active.location}</p>
          </GlassCard>

          <AnimatePresence mode="wait">
            <motion.div
              key={day}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="relative border-l border-ink/10 pl-8 space-y-8"
            >
              {active.sessions.map((s) => (
                <div key={s.time + s.title} className="relative">
                  <span className="absolute -left-[38.5px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-glow shadow-glow-cyan" />
                  <p className="font-mono text-xs text-cyan-text mb-1.5 tracking-wide">{s.time}</p>
                  <h4 className="font-display text-ink text-lg">{s.title}</h4>
                  {s.detail && <p className="text-ink-muted text-sm mt-1">{s.detail}</p>}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </div>
  )
}
