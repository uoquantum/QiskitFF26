import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import SponsorGrid from '../components/ui/SponsorGrid.jsx'
import { SPONSORS } from '../data/sponsors.js'
import { EVENT } from '../data/site.js'

export default function Sponsors() {
  return (
    <div className="section">
      <SectionHeading
        eyebrow="With thanks to"
        title="Sponsors & partners"
        description="Qiskit Fall Fest at uOttawa is free to attend thanks to the generous support of these organizations."
      />

      <SponsorGrid sponsors={SPONSORS} />

      <Reveal>
        <GlassCard strong className="mt-16 p-10 text-center">
          <h3 className="font-display text-2xl text-ink mb-3">Want to sponsor next year?</h3>
          <p className="text-ink-muted max-w-md mx-auto mb-7">
            We'd love to talk. Reach out on Discord and we'll connect you with the organizing team.
          </p>
          <a href={EVENT.discord} target="_blank" rel="noreferrer" className="btn-glow">
            Get in touch on Discord
          </a>
        </GlassCard>
      </Reveal>
    </div>
  )
}
