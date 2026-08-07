import SponsorMark from './SponsorMark.jsx'

const ACCENTS = ['bg-cyan-glow', 'bg-quantum-violet', 'bg-magenta-glow']

export default function SponsorMarquee({ sponsors }) {
  // duplicated so the track can loop seamlessly at translateX(-50%)
  const track = [...sponsors, ...sponsors]

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max gap-5 animate-marquee">
        {track.map((s, i) => {
          const tileCls = s.placeholder
            ? 'border border-dashed border-ink/20'
            : 'glass transition-all duration-300 hover:border-cyan-glow/50 hover:shadow-glow-cyan'
          return (
            <a
              key={`${s.name}-${i}`}
              href={s.url}
              target={s.placeholder ? undefined : '_blank'}
              rel={s.placeholder ? undefined : 'noreferrer'}
              className={`shrink-0 flex items-center gap-3 rounded-2xl px-8 py-6 ${tileCls} ${s.placeholder ? 'pointer-events-none' : ''}`}
            >
              <SponsorMark sponsor={s} accentDot={ACCENTS[i % ACCENTS.length]} />
            </a>
          )
        })}
      </div>
    </div>
  )
}
