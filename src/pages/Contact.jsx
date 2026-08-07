import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { EVENT, CODE_OF_CONDUCT_URL } from '../data/site.js'
import { VENUES } from '../data/schedule.js'
import { CHANNELS, MAP_QUERY, MAP_NOTE } from '../data/contact.js'

export default function Contact() {
  return (
    <div className="section max-w-4xl">
      <SectionHeading
        eyebrow="Get in touch"
        title="Contact us"
        description="Discord is the fastest way to reach the team before and during the event."
      />

      <div className="grid gap-5 sm:grid-cols-3 mb-16">
        {CHANNELS.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08}>
            <GlassCard glow className="p-6 h-full flex flex-col">
              <h4 className="font-display text-ink mb-2">{c.label}</h4>
              <p className="text-sm text-ink-muted flex-1 mb-5">{c.desc}</p>
              <a href={c.href} target="_blank" rel="noreferrer" className="text-sm text-cyan-text hover:text-cyan-strong transition-colors">
                {c.cta} ↗
              </a>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-5 mb-16">
        <Reveal className="lg:col-span-3">
          <GlassCard className="p-2 overflow-hidden">
            <iframe
              title="Event venue map"
              className="map-frame w-full h-72 rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
            />
            <div className="p-5">
              <p className="text-sm text-ink">{VENUES[0]?.room}</p>
              <p className="text-xs text-ink-faint mt-2 leading-relaxed">{MAP_NOTE}</p>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <GlassCard className="p-8 h-full">
            <h4 className="font-display text-ink mb-4">Policies</h4>
            <p className="text-sm text-ink-muted leading-relaxed">
              Photos and video may be taken during the event — you can opt out on the registration
              form. All attendees agree to our{' '}
              <a href={CODE_OF_CONDUCT_URL} target="_blank" rel="noreferrer" className="text-cyan-text hover:text-cyan-strong underline underline-offset-2">
                Code of Conduct
              </a>.
            </p>
          </GlassCard>
        </Reveal>
      </div>

      <Reveal>
        <GlassCard strong className="p-10 text-center">
          <h3 className="font-display text-2xl text-ink mb-3">Stay in the loop</h3>
          <p className="text-ink-muted max-w-md mx-auto mb-7">
            Event updates, team-formation, and mentor Q&amp;A all happen on our Discord.
          </p>
          <a href={EVENT.discord} target="_blank" rel="noreferrer" className="btn-glow">
            Join the Discord
          </a>
        </GlassCard>
      </Reveal>
    </div>
  )
}
