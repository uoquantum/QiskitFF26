import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Avatar from '../components/ui/Avatar.jsx'
import { ORGANIZERS } from '../data/team.js'
import { EVENT } from '../data/site.js'

export default function Organizers() {
  return (
    <div className="section">
      <SectionHeading
        eyebrow="The people behind it"
        title="Organizing team"
        description="A student-run team from across uOttawa's quantum, physics, and engineering community."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ORGANIZERS.map((o, i) => {
          const card = (
            <GlassCard glow className="p-7 h-full flex flex-col items-center text-center">
              <Avatar name={o.name} photo={o.photo} size="lg" />
              <h4 className="font-display text-ink mt-4 mb-1">{o.name}</h4>
              <p className="text-xs text-ink-muted">{o.role}</p>
              {o.url && <span className="mt-4 text-xs text-cyan-text">LinkedIn ↗</span>}
            </GlassCard>
          )
          return (
            <Reveal key={o.name} delay={(i % 3) * 0.06}>
              {o.url ? (
                <a href={o.url} target="_blank" rel="noreferrer" className="block h-full">
                  {card}
                </a>
              ) : (
                card
              )}
            </Reveal>
          )
        })}
      </div>

      <Reveal>
        <GlassCard strong className="mt-16 p-10 text-center">
          <h3 className="font-display text-2xl text-ink mb-3">Want to help organize next year?</h3>
          <p className="text-ink-muted max-w-md mx-auto mb-7">
            We're always looking for volunteers and future organizers — say hi on Discord.
          </p>
          <a href={EVENT.discord} target="_blank" rel="noreferrer" className="btn-glow">
            Join the Discord
          </a>
        </GlassCard>
      </Reveal>
    </div>
  )
}
