import GlassCard from './GlassCard.jsx'
import Reveal from './Reveal.jsx'
import { assetUrl } from '../../lib/assetUrl.js'

const ACCENTS = [
  { dot: 'bg-cyan-glow', glowClass: 'hover:shadow-glow-cyan hover:border-cyan-glow/50' },
  { dot: 'bg-quantum-violet', glowClass: 'hover:shadow-glow-purple hover:border-quantum-violet/50' },
  { dot: 'bg-magenta-glow', glowClass: 'hover:shadow-glow-magenta hover:border-magenta-glow/50' },
]

function hostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

export default function SponsorGrid({ sponsors }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {sponsors.map((s, i) => {
        if (s.placeholder) {
          return (
            <Reveal key={s.name} delay={i * 0.05}>
              <div className="p-7 h-full flex flex-col items-center justify-center text-center gap-2 rounded-2xl border border-dashed border-ink/20 min-h-[220px]">
                <span className="font-display text-lg text-ink-faint">{s.name}</span>
              </div>
            </Reveal>
          )
        }

        const accent = ACCENTS[i % ACCENTS.length]

        return (
          <Reveal key={s.name} delay={i * 0.05}>
            <a href={s.url} target="_blank" rel="noreferrer" className="block h-full group">
              <GlassCard
                className={`p-7 h-full flex flex-col transition-all duration-300 ${accent.glowClass}`}
              >
                <div className="mb-4">
                  {s.logo ? (
                    <img
                      src={assetUrl(s.logo)}
                      alt={s.name}
                      className="h-10 max-w-full w-auto object-contain object-left mb-3"
                    />
                  ) : (
                    <span className={`block h-2.5 w-2.5 rounded-full mb-3 ${accent.dot}`} />
                  )}
                  <h4 className="font-display text-lg text-ink leading-snug">{s.name}</h4>
                </div>

                {s.desc && (
                  <p className="text-sm text-ink-muted leading-relaxed flex-1 mb-5">{s.desc}</p>
                )}

                <span className="inline-flex items-center gap-1.5 text-sm text-cyan-text group-hover:text-cyan-strong transition-colors">
                  {hostname(s.url)} ↗
                </span>
              </GlassCard>
            </a>
          </Reveal>
        )
      })}
    </div>
  )
}
