import GlassCard from './GlassCard.jsx'
import Reveal from './Reveal.jsx'
import { EVENT } from '../../data/site.js'

export default function ComingSoon({
  title = 'Coming soon',
  message = "We're still finalizing this — check back soon, or watch Discord for updates.",
  compact = false,
}) {
  return (
    <Reveal>
      <GlassCard strong className={`relative overflow-hidden text-center ${compact ? 'p-10' : 'p-14 md:p-20'}`}>
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        <div className="relative">
          <p className="eyebrow mb-3">TBD</p>
          <h3 className={`font-display text-ink mb-3 ${compact ? 'text-xl' : 'text-2xl md:text-3xl'}`}>{title}</h3>
          <p className="text-ink-muted max-w-md mx-auto mb-7">{message}</p>
          <a href={EVENT.discord} target="_blank" rel="noreferrer" className="btn-ghost">
            Get updates on Discord
          </a>
        </div>
      </GlassCard>
    </Reveal>
  )
}
