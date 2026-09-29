import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { EVENT } from '../data/site.js'
import {
  FORM_ENDPOINT,
  TEAM_REGISTRATION_OPEN,
  NOT_OPEN_TITLE,
  NOT_OPEN_MESSAGE,
  MENTORSHIP_OPTIONS,
} from '../data/teamRegistration.js'

// This page is intentionally not linked from the nav — only reachable via
// direct link. See data/teamRegistration.js to flip it open.

const inputCls =
  'w-full rounded-xl bg-ink/[0.03] border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-cyan-glow/60 focus:bg-ink/[0.05] outline-none transition-colors'
const labelCls = 'block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2'

const OPTIONAL_MEMBERS = [3, 4, 5]

const initialForm = {
  team_name: '',
  lead_name: '',
  lead_email: '',
  lead_discord: '',
  member2_name: '',
  member2_email: '',
  member3_name: '',
  member3_email: '',
  member4_name: '',
  member4_email: '',
  member5_name: '',
  member5_email: '',
  project_idea: '',
  mentorship: MENTORSHIP_OPTIONS[0],
  confirm_registered: false,
}

function Field({ label, children }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  )
}

export default function TeamRegistration() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState(initialForm)

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.confirm_registered) return
    setStatus('loading')
    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ formType: 'team', ...form }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="section max-w-3xl">
      <SectionHeading
        eyebrow="Hackathon"
        title="Team Registration"
        description="Once your team is set, register it here so organizers know who's building what."
      />

      {!TEAM_REGISTRATION_OPEN ? (
        <Reveal>
          <GlassCard strong className="p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow opacity-50" />
            <div className="relative">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-ink/10 border border-ink/20 text-2xl">
                🔒
              </div>
              <h3 className="font-display text-2xl text-ink mb-3">{NOT_OPEN_TITLE}</h3>
              <p className="text-ink-muted max-w-md mx-auto mb-7">{NOT_OPEN_MESSAGE}</p>
              <a href={EVENT.discord} target="_blank" rel="noreferrer" className="btn-glow">
                Join Discord
              </a>
            </div>
          </GlassCard>
        </Reveal>
      ) : (
        <Reveal>
          <GlassCard strong className="p-6 md:p-10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-quantum-violet/20 blur-3xl" />

            <AnimatePresence>
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative py-10 text-center"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-glow/15 border border-cyan-glow/40">
                    <span className="text-2xl text-cyan-strong">✓</span>
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-2">Team registered</h3>
                  <p className="text-ink-muted">
                    We've got you down. Watch Discord for mentor pairings and hackathon updates.
                  </p>
                  <a href={EVENT.discord} target="_blank" rel="noreferrer" className="btn-glow mt-7 inline-flex">
                    Join Discord
                  </a>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="relative space-y-6"
                >
                  <Field label="Team name">
                    <input required className={inputCls} placeholder="The Entangled Ones" value={form.team_name} onChange={update('team_name')} />
                  </Field>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Team lead — name">
                      <input required className={inputCls} placeholder="Ada Lovelace" value={form.lead_name} onChange={update('lead_name')} />
                    </Field>
                    <Field label="Team lead — email">
                      <input required type="email" className={inputCls} placeholder="ada@uottawa.ca" value={form.lead_email} onChange={update('lead_email')} />
                    </Field>
                  </div>
                  <Field label="Team lead — Discord username (optional)">
                    <input className={inputCls} placeholder="ada#1234" value={form.lead_discord} onChange={update('lead_discord')} />
                  </Field>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Member 2 — name">
                      <input required className={inputCls} placeholder="Full name" value={form.member2_name} onChange={update('member2_name')} />
                    </Field>
                    <Field label="Member 2 — email">
                      <input required type="email" className={inputCls} placeholder="email@uottawa.ca" value={form.member2_email} onChange={update('member2_email')} />
                    </Field>
                  </div>

                  {OPTIONAL_MEMBERS.map((n) => (
                    <div className="grid gap-6 sm:grid-cols-2" key={n}>
                      <Field label={`Member ${n} — name (optional)`}>
                        <input className={inputCls} placeholder="Full name" value={form[`member${n}_name`]} onChange={update(`member${n}_name`)} />
                      </Field>
                      <Field label={`Member ${n} — email (optional)`}>
                        <input type="email" className={inputCls} placeholder="email@uottawa.ca" value={form[`member${n}_email`]} onChange={update(`member${n}_email`)} />
                      </Field>
                    </div>
                  ))}

                  <Field label="Mentorship needed">
                    <select className={inputCls} value={form.mentorship} onChange={update('mentorship')}>
                      {MENTORSHIP_OPTIONS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Project idea (optional)">
                    <input className={inputCls} placeholder="One line about what you're planning to build" value={form.project_idea} onChange={update('project_idea')} />
                  </Field>

                  <label className="flex items-start gap-3 text-sm text-ink-muted cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 h-4 w-4 rounded border-ink/20 bg-ink/5 accent-cyan-500"
                      checked={form.confirm_registered}
                      onChange={update('confirm_registered')}
                    />
                    All members listed above have already registered individually for Fall Fest.
                  </label>

                  <button type="submit" disabled={status === 'loading'} className="btn-glow w-full sm:w-auto disabled:opacity-60">
                    {status === 'loading' ? 'Submitting…' : 'Register team'}
                  </button>

                  {status === 'error' && (
                    <p className="text-sm text-magenta-text">
                      Something went wrong submitting the form — please try again, or reach us on Discord directly.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>
        </Reveal>
      )}
    </div>
  )
}
