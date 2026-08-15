import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import GlowButton from '../components/ui/GlowButton.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { RESOURCES } from '../data/learn.js'

const TYPE_COLOR = {
  Docs: 'text-cyan-text border-cyan-glow/30',
  Course: 'text-quantum-text border-quantum-violet/30',
  Video: 'text-magenta-text border-magenta-glow/30',
  Code: 'text-ink-muted border-ink/20',
}

const COMPOSER_URL = 'https://quantum.cloud.ibm.com/composer'

const VIEWS = [
  { key: 'scroll', label: 'Scroll' },
  { key: 'grid', label: 'Grid' },
]

function ComposerDiagram() {
  return (
    <svg viewBox="0 0 220 110" className="w-48 md:w-56 h-auto shrink-0 animate-drift" aria-hidden="true">
      <line x1="8" y1="20" x2="212" y2="20" className="stroke-ink/15" strokeWidth="1.5" />
      <line x1="8" y1="55" x2="212" y2="55" className="stroke-ink/15" strokeWidth="1.5" />
      <line x1="8" y1="90" x2="212" y2="90" className="stroke-ink/15" strokeWidth="1.5" />

      <rect x="34" y="6" width="30" height="28" rx="7" className="fill-quantum-violet/15 stroke-quantum-violet" strokeWidth="1.5" />
      <text x="49" y="25" textAnchor="middle" className="fill-ink font-mono text-[13px] font-semibold">H</text>

      <line x1="92" y1="20" x2="92" y2="55" className="stroke-cyan-glow" strokeWidth="1.5" />
      <circle cx="92" cy="20" r="4.5" className="fill-cyan-glow" />
      <circle cx="92" cy="55" r="10" className="fill-none stroke-cyan-glow" strokeWidth="1.5" />
      <line x1="85" y1="55" x2="99" y2="55" className="stroke-cyan-glow" strokeWidth="1.5" />
      <line x1="92" y1="48" x2="92" y2="62" className="stroke-cyan-glow" strokeWidth="1.5" />

      <rect x="128" y="76" width="30" height="28" rx="7" className="fill-magenta-glow/15 stroke-magenta-glow" strokeWidth="1.5" />
      <text x="143" y="95" textAnchor="middle" className="fill-ink font-mono text-[13px] font-semibold">H</text>

      <rect x="176" y="6" width="32" height="28" rx="7" className="fill-quantum-violet/15 stroke-quantum-violet" strokeWidth="1.5" />
      <text x="192" y="25" textAnchor="middle" className="fill-ink font-mono text-[11px] font-semibold">Rz</text>
    </svg>
  )
}

function GridIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3 relative" fill="currentColor">
      <rect x="1" y="1" width="6" height="6" rx="1.3" />
      <rect x="9" y="1" width="6" height="6" rx="1.3" />
      <rect x="1" y="9" width="6" height="6" rx="1.3" />
      <rect x="9" y="9" width="6" height="6" rx="1.3" />
    </svg>
  )
}

function ScrollIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3 relative" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="0.5" y="3" width="4.2" height="10" rx="1.1" />
      <rect x="5.9" y="1.5" width="4.2" height="13" rx="1.1" />
      <rect x="11.3" y="3" width="4.2" height="10" rx="1.1" />
    </svg>
  )
}

function ViewToggle({ view, setView }) {
  return (
    <div className="inline-flex glass rounded-full p-1 shrink-0">
      {VIEWS.map((v) => (
        <button
          key={v.key}
          type="button"
          onClick={() => setView(v.key)}
          aria-pressed={view === v.key}
          className={`relative px-3.5 py-2 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
            view === v.key ? 'text-accent-ink' : 'text-ink-muted hover:text-ink'
          }`}
        >
          {view === v.key && (
            <motion.span
              layoutId="learn-view-pill"
              className="absolute inset-0 rounded-full bg-cyan-glow shadow-glow-cyan"
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            />
          )}
          <span className="relative flex items-center gap-1.5">
            {v.key === 'grid' ? <GridIcon /> : <ScrollIcon />}
            {v.label}
          </span>
        </button>
      ))}
    </div>
  )
}

function ResourceCard({ item }) {
  return (
    <a href={item.url} target="_blank" rel="noreferrer" className="block h-full">
      <GlassCard glow className="p-6 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1">
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
  )
}

function ResourceRow({ items, view, gi }) {
  if (view === 'grid') {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06 + gi * 0.02}>
            <ResourceCard item={item} />
          </Reveal>
        ))}
      </div>
    )
  }

  return (
    <div className="-mx-6 md:-mx-10">
      <div
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none px-6 md:px-10 pb-1
          [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]"
      >
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06 + gi * 0.02} className="w-[270px] shrink-0 snap-start">
            <ResourceCard item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function Learn() {
  const [view, setView] = useState('scroll')

  return (
    <div className="section">
      <SectionHeading
        eyebrow="Learning resources"
        title="Get up to speed before the fest"
        description="Free, mostly-beginner-friendly resources on quantum computing, Qiskit, and this year's focus areas: quantum ML, chemistry, materials, and sustainability."
      />

      <Reveal>
        <a href={COMPOSER_URL} target="_blank" rel="noreferrer" className="block group mb-16">
          <GlassCard
            strong
            className="relative overflow-hidden p-8 md:p-12 transition-all duration-300 hover:shadow-glow-cyan hover:border-cyan-glow/50"
          >
            <div className="absolute inset-0 bg-radial-glow opacity-70" />
            <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-cyan-glow/20 blur-3xl" />
            <div className="relative flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              <div className="flex-1">
                <p className="eyebrow mb-3">Featured · No install, no code</p>
                <h3 className="font-display text-2xl md:text-3xl text-ink mb-3">IBM Quantum Composer</h3>
                <p className="text-ink-muted leading-relaxed max-w-xl mb-6">
                  Drag gates onto real qubits and watch the statevector, probabilities, and results
                  update live in your browser — the fastest way to build intuition before you write
                  a single line of Qiskit.
                </p>
                <GlowButton href={COMPOSER_URL}>Open the Composer ↗</GlowButton>
              </div>
              <ComposerDiagram />
            </div>
          </GlassCard>
        </a>
      </Reveal>

      <Reveal>
        <div className="flex items-center justify-between gap-4 mb-8">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-faint">Browse resources</p>
          <ViewToggle view={view} setView={setView} />
        </div>
      </Reveal>

      {RESOURCES.map((group, gi) => (
        <div key={group.category} className="mb-16 last:mb-0">
          <Reveal>
            <h3 className="font-display text-xl text-ink mb-5">{group.category}</h3>
          </Reveal>
          <ResourceRow items={group.items} view={view} gi={gi} />
        </div>
      ))}
    </div>
  )
}
