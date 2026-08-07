import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { FAQS } from '../data/faq.js'
import { EVENT } from '../data/site.js'

const CATEGORIES = ['All', ...new Set(FAQS.map((f) => f.category))]

function FaqItem({ q, a, category, isOpen, onClick }) {
  return (
    <div
      className={`glass rounded-2xl overflow-hidden border-l-2 transition-colors ${
        isOpen ? 'border-l-cyan-glow' : 'border-l-transparent'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-start gap-4 px-6 py-5 text-left"
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? 'rgb(var(--ink) / 0.08)' : 'transparent' }}
          className="mt-0.5 shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-ink/15 text-cyan-text text-lg leading-none"
        >
          +
        </motion.span>
        <span className="flex-1">
          <span className="block font-mono text-[10px] tracking-[0.2em] uppercase text-cyan-text/70 mb-1.5">
            {category}
          </span>
          <span className="font-display text-ink text-[15px] leading-snug">{q}</span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="px-6 pb-6 pl-[3.75rem] text-sm text-ink-muted leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [openKey, setOpenKey] = useState(FAQS[0]?.q)
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return FAQS.filter((f) => {
      const matchesCategory = category === 'All' || f.category === category
      const matchesQuery = !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  return (
    <div className="section max-w-3xl">
      <SectionHeading
        eyebrow="Good to know"
        title="Frequently asked questions"
        description="Browse by category or search — still stuck? Reach us anytime on Discord."
      />

      <Reveal>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-faint">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              className="w-full rounded-xl bg-ink/[0.03] border border-ink/10 pl-11 pr-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-cyan-glow/60 outline-none transition-colors"
            />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === c ? 'text-accent-ink' : 'text-ink-muted hover:text-ink glass'
              }`}
            >
              {category === c && (
                <motion.span
                  layoutId="faq-category-pill"
                  className="absolute inset-0 rounded-full bg-cyan-glow shadow-glow-cyan -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm text-ink-muted py-10 text-center"
            >
              No questions match "{query}" — try a different search or ask us on Discord.
            </motion.p>
          ) : (
            filtered.map((f, i) => (
              <motion.div
                key={f.q}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.2) }}
              >
                <FaqItem
                  q={f.q}
                  a={f.a}
                  category={f.category}
                  isOpen={openKey === f.q}
                  onClick={() => setOpenKey(openKey === f.q ? null : f.q)}
                />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      <Reveal>
        <div className="mt-14 text-center">
          <a href={EVENT.discord} target="_blank" rel="noreferrer" className="btn-ghost">
            Ask on Discord ↗
          </a>
        </div>
      </Reveal>
    </div>
  )
}
