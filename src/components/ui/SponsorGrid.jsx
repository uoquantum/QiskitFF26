import GlassCard from './GlassCard.jsx'
import Reveal from './Reveal.jsx'
import SponsorMark from './SponsorMark.jsx'

const ACCENTS = [
  { dot: 'bg-cyan-glow', glowClass: 'hover:shadow-glow-cyan hover:border-cyan-glow/50' },
  { dot: 'bg-quantum-violet', glowClass: 'hover:shadow-glow-purple hover:border-quantum-violet/50' },
  { dot: 'bg-magenta-glow', glowClass: 'hover:shadow-glow-magenta hover:border-magenta-glow/50' },
]

export default function SponsorGrid({ sponsors, size = 'md' }) {
  const padding = size === 'lg' ? 'p-10' : 'p-8'
  const nameSize = size === 'lg' ? 'text-xl' : 'text-lg'

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {sponsors.map((s, i) => {
        const accent = ACCENTS[i % ACCENTS.length]

        if (s.placeholder) {
          return (
            <Reveal key={s.name} delay={i * 0.05}>
              <div className={`${padding} h-full flex flex-col items-center justify-center text-center gap-3 rounded-2xl border border-dashed border-ink/20`}>
                <SponsorMark sponsor={s} nameSize={nameSize} />
              </div>
            </Reveal>
          )
        }

        return (
          <Reveal key={s.name} delay={i * 0.05}>
            <a href={s.url} target="_blank" rel="noreferrer" className="block h-full group">
              <GlassCard
                className={`${padding} h-full flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 ${accent.glowClass}`}
              >
                <SponsorMark sponsor={s} nameSize={nameSize} accentDot={accent.dot} />
                <span className="text-xs text-ink-faint opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit ↗
                </span>
              </GlassCard>
            </a>
          </Reveal>
        )
      })}
    </div>
  )
}
