import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { RESOURCES } from '../data/learn.js'

const TYPE_COLOR = {
  Docs: 'text-cyan-text border-cyan-glow/30',
  Course: 'text-quantum-text border-quantum-violet/30',
  Video: 'text-magenta-text border-magenta-glow/30',
  Code: 'text-ink-muted border-ink/20',
}

export default function Learn() {
  return (
    <div className="section">
      <SectionHeading
        eyebrow="Learning resources"
        title="Get up to speed before the fest"
        description="Free, mostly-beginner-friendly resources on quantum computing, Qiskit, and this year's focus areas: quantum ML, chemistry, materials, and sustainability."
      />

      {RESOURCES.map((group, gi) => (
        <div key={group.category} className="mb-16 last:mb-0">
          <Reveal>
            <h3 className="font-display text-xl text-ink mb-5">{group.category}</h3>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06 + gi * 0.02}>
                <a href={item.url} target="_blank" rel="noreferrer" className="block h-full">
                  <GlassCard glow className="p-6 h-full flex flex-col">
                    <span
                      className={`self-start mb-3 px-2.5 py-1 rounded-full border text-[10px] font-mono uppercase tracking-wider ${TYPE_COLOR[item.type] || 'text-ink-muted border-ink/20'}`}
                    >
                      {item.type}
                    </span>
                    <h4 className="font-display text-ink text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-ink-muted leading-relaxed flex-1">{item.desc}</p>
                    <span className="mt-4 text-xs text-cyan-text">Open ↗</span>
                  </GlassCard>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
