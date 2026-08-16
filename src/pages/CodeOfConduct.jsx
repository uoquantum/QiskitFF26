import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { EVENT } from '../data/site.js'
import { VALUES, EXPECTED_BEHAVIOR, REPORTING_CHANNELS, CONSEQUENCES } from '../data/codeOfConduct.js'

export default function CodeOfConduct() {
  return (
    <div className="section max-w-3xl">
      <SectionHeading
        eyebrow="Respect & Inclusion · Beginner-friendly · Zero harassment"
        title="Code of Conduct"
        description={`${EVENT.name} is committed to providing a welcoming, inclusive, and safe environment for everyone — regardless of background, identity, or experience level. All participants must follow this Code of Conduct throughout the event, both online and in person.`}
      />

      <Reveal>
        <h3 className="font-display text-xl text-ink mb-5">Our values</h3>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 mb-16">
        {VALUES.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.06}>
            <GlassCard glow className="p-6 h-full">
              <h4 className="font-display text-ink mb-2">{v.title}</h4>
              <p className="text-sm text-ink-muted leading-relaxed">{v.desc}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <GlassCard className="p-8 mb-6">
          <h3 className="font-display text-lg text-ink mb-4">Expected behavior</h3>
          <ul className="space-y-3">
            {EXPECTED_BEHAVIOR.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" />
                {b}
              </li>
            ))}
          </ul>
        </GlassCard>
      </Reveal>

      <Reveal>
        <GlassCard className="p-8 mb-6">
          <h3 className="font-display text-lg text-ink mb-4">Unacceptable behavior</h3>
          <p className="text-sm text-ink-muted leading-relaxed">
            Harassment, discrimination, or intimidation in any form will not be tolerated. This
            includes offensive comments, imagery, or behaviour related to gender, sexuality, race,
            religion, disability, or other personal characteristics; disruption of talks, workshops,
            or hackathon activities; plagiarism or misrepresentation of others' work; or any
            violation of university or IBM policies.
          </p>
        </GlassCard>
      </Reveal>

      <Reveal>
        <GlassCard className="p-8 mb-6">
          <h3 className="font-display text-lg text-ink mb-4">Reporting</h3>
          <p className="text-sm text-ink-muted leading-relaxed mb-4">
            If you experience or witness unacceptable behavior:
          </p>
          <ul className="space-y-3 mb-4">
            {REPORTING_CHANNELS.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-magenta-glow" />
                {c}
              </li>
            ))}
          </ul>
          <p className="text-sm text-ink-muted leading-relaxed">
            All reports will be handled discreetly and respectfully.
          </p>
        </GlassCard>
      </Reveal>

      <Reveal>
        <GlassCard strong className="p-8">
          <h3 className="font-display text-lg text-ink mb-5">Consequences</h3>
          <ol className="space-y-4">
            {CONSEQUENCES.map((c, i) => (
              <li key={c.step} className="flex gap-4 text-sm">
                <span className="font-mono text-cyan-text shrink-0">{i + 1}.</span>
                <span className="text-ink-muted leading-relaxed">
                  <span className="text-ink font-medium">{c.step}:</span> {c.desc}
                </span>
              </li>
            ))}
          </ol>
        </GlassCard>
      </Reveal>
    </div>
  )
}
