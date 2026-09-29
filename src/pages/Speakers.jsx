import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Avatar from '../components/ui/Avatar.jsx'
import ComingSoon from '../components/ui/ComingSoon.jsx'
import { SPEAKERS } from '../data/speakers.js'
import { READY } from '../data/readiness.js'
import { slugify } from '../lib/slugify.js'

export default function Speakers() {
  const [searchParams] = useSearchParams()
  const highlight = searchParams.get('highlight')
  const [justLanded, setJustLanded] = useState(!!highlight)

  useEffect(() => {
    if (!highlight) return
    const el = document.getElementById(highlight)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    const id = setTimeout(() => setJustLanded(false), 2200)
    return () => clearTimeout(id)
  }, [highlight])

  return (
    <div className="section">
      <SectionHeading
        eyebrow="Meet the lineup"
        title="Speakers"
        description="Researchers, educators, and industry advocates covering everything from quantum basics to hands-on Qiskit."
      />

      {!READY.speakers ? (
        <ComingSoon
          title="Lineup coming soon"
          message="We're confirming this year's speakers. Follow Discord for announcements as they're locked in."
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SPEAKERS.map((s, i) => {
            const slug = slugify(s.name)
            const isTarget = highlight === slug && justLanded
            return (
              <div key={s.name} id={slug} className={`rounded-2xl transition-shadow duration-700 ${isTarget ? 'ring-2 ring-cyan-glow shadow-glow-cyan' : ''}`}>
                <Reveal delay={(i % 3) * 0.08}>
                  <GlassCard glow className="p-7 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-5">
                      <Avatar name={s.name} photo={s.photo} size="lg" />
                      <div>
                        <h3 className="font-display text-ink leading-tight">{s.name}</h3>
                        <p className="text-xs text-ink-faint">{s.affiliation}</p>
                      </div>
                    </div>

                    <p className="text-xs font-mono text-cyan-text mb-2">{s.role}</p>
                    <p className="text-sm text-ink-muted leading-relaxed flex-1">{s.bio}</p>

                    <div className="mt-5 pt-5 border-t border-ink/10">
                      <p className="text-xs text-ink-faint mb-1">Talk</p>
                      <p className="text-sm text-ink font-medium mb-4">{s.talk}</p>
                      <div className="flex gap-4">
                        {s.links.map((l) => (
                          <a
                            key={l.url}
                            href={l.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-ink-muted hover:text-cyan-strong transition-colors"
                          >
                            {l.label} ↗
                          </a>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
