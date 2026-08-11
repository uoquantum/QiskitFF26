import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { EVENT, CODE_OF_CONDUCT_URL } from '../data/site.js'
import {
  FORM_ENDPOINT,
  ROLES,
  DIETARY_OPTIONS,
  STATUS_OPTIONS,
  LOCAL_OPTIONS,
  TEAM_OPTIONS,
  SKILL_LEVEL_OPTIONS,
  BACKGROUND_TOPICS,
  VOLUNTEER_DAY_OPTIONS,
  VOLUNTEER_HELP_OPTIONS,
  SPONSOR_SUPPORT_OPTIONS,
} from '../data/register.js'

const inputCls =
  'w-full rounded-xl bg-ink/[0.03] border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-cyan-glow/60 focus:bg-ink/[0.05] outline-none transition-colors'
const labelCls = 'block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2'

const backgroundDefaults = Object.fromEntries(BACKGROUND_TOPICS.map((t) => [t.key, SKILL_LEVEL_OPTIONS[0]]))

const initialForm = {
  role: ROLES[0].key,
  name: '',
  email: '',
  dietary: DIETARY_OPTIONS[0],
  dietary_other: '',
  accessibility: '',
  agree: false,
  phone: '', // asked for volunteers & sponsors only
  ...backgroundDefaults, // asked for participants & volunteers
  // participant
  status_type: STATUS_OPTIONS[0],
  program: '',
  local_attendance: LOCAL_OPTIONS[0],
  team: TEAM_OPTIONS[0],
  // volunteer
  volunteer_background: '',
  volunteer_days: [],
  volunteer_help: VOLUNTEER_HELP_OPTIONS[0],
  // sponsor
  org_name: '',
  org_role: '',
  org_website: '',
  sponsor_support: SPONSOR_SUPPORT_OPTIONS[0],
  sponsor_notes: '',
}

function Field({ label, children }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  )
}

function BackgroundScales({ form, update }) {
  return (
    <div>
      <label className={labelCls}>Your background (helps us tailor content &amp; match mentors)</label>
      <div className="grid gap-4 sm:grid-cols-2">
        {BACKGROUND_TOPICS.map((topic) => (
          <div key={topic.key}>
            <label className="block text-xs text-ink-faint mb-1.5">{topic.label}</label>
            <select className={inputCls} value={form[topic.key]} onChange={update(topic.key)}>
              {SKILL_LEVEL_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Register() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState(initialForm)

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const toggleDay = (day) =>
    setForm((f) => ({
      ...f,
      volunteer_days: f.volunteer_days.includes(day)
        ? f.volunteer_days.filter((d) => d !== day)
        : [...f.volunteer_days, day],
    }))

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.agree) return
    setStatus('loading')
    try {
      // text/plain avoids a CORS preflight, which the Apps Script endpoint doesn't
      // handle — the body is still JSON and Apps Script parses it that way.
      // We don't inspect the response body/status here: as long as the request
      // actually goes out, we show the confirmation. Only a network-level
      // failure (offline, DNS, etc. — caught below) counts as an error.
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(form),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const activeRole = ROLES.find((r) => r.key === form.role)

  return (
    <div className="section max-w-3xl">
      <SectionHeading
        eyebrow="Free · Limited seats"
        title="Register for Fall Fest"
        description={`Join us for ${EVENT.dates} at ${EVENT.location} — as a participant, volunteer, or sponsor. Takes just a couple minutes.`}
      />

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
                <h3 className="font-display text-2xl text-ink mb-2">You're on the list</h3>
                <p className="text-ink-muted">
                  Check your inbox for confirmation, then join our Discord for updates{form.role === 'participant' ? ' and team-forming' : ''}.
                </p>
                <a
                  href={EVENT.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glow mt-7 inline-flex"
                >
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
                <div>
                  <label className={labelCls}>I'm registering as a</label>
                  <div className="inline-flex flex-wrap glass rounded-full p-1 gap-1">
                    {ROLES.map((r) => (
                      <button
                        key={r.key}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, role: r.key }))}
                        className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                          form.role === r.key ? 'text-accent-ink' : 'text-ink-muted hover:text-ink'
                        }`}
                      >
                        {form.role === r.key && (
                          <motion.span
                            layoutId="role-pill"
                            className="absolute inset-0 rounded-full bg-cyan-glow shadow-glow-cyan"
                            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                          />
                        )}
                        <span className="relative">{r.label}</span>
                      </button>
                    ))}
                  </div>
                  {activeRole && <p className="text-xs text-ink-faint mt-2.5">{activeRole.hint}</p>}
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full name">
                    <input required className={inputCls} placeholder="Ada Lovelace" value={form.name} onChange={update('name')} />
                  </Field>
                  <Field label="Email">
                    <input required type="email" className={inputCls} placeholder="ada@uottawa.ca" value={form.email} onChange={update('email')} />
                  </Field>
                </div>

                <AnimatePresence mode="wait">
                  {form.role === 'participant' && (
                    <motion.div
                      key="participant"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field label="I am a">
                          <select className={inputCls} value={form.status_type} onChange={update('status_type')}>
                            {STATUS_OPTIONS.map((o) => (
                              <option key={o}>{o}</option>
                            ))}
                          </select>
                        </Field>
                        <Field label="Program & year (optional)">
                          <input className={inputCls} placeholder="e.g. BSc Physics, 2nd year" value={form.program} onChange={update('program')} />
                        </Field>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field label="Are you local and able to attend in person?">
                          <select className={inputCls} value={form.local_attendance} onChange={update('local_attendance')}>
                            {LOCAL_OPTIONS.map((o) => (
                              <option key={o}>{o}</option>
                            ))}
                          </select>
                        </Field>
                        <Field label="Hackathon team status">
                          <select className={inputCls} value={form.team} onChange={update('team')}>
                            {TEAM_OPTIONS.map((o) => (
                              <option key={o}>{o}</option>
                            ))}
                          </select>
                        </Field>
                      </div>
                      <BackgroundScales form={form} update={update} />
                    </motion.div>
                  )}

                  {form.role === 'volunteer' && (
                    <motion.div
                      key="volunteer"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field label="Anything else about your background? (optional)">
                          <input
                            className={inputCls}
                            placeholder="e.g. mentored at past hackathons, event logistics, photography…"
                            value={form.volunteer_background}
                            onChange={update('volunteer_background')}
                          />
                        </Field>
                        <Field label="Phone number (optional)">
                          <input type="tel" className={inputCls} placeholder="613 555 0123" value={form.phone} onChange={update('phone')} />
                        </Field>
                      </div>
                      <BackgroundScales form={form} update={update} />
                      <div>
                        <label className={labelCls}>Which days can you help?</label>
                        <div className="flex flex-wrap gap-2">
                          {VOLUNTEER_DAY_OPTIONS.map((day) => {
                            const active = form.volunteer_days.includes(day)
                            return (
                              <button
                                key={day}
                                type="button"
                                onClick={() => toggleDay(day)}
                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                                  active
                                    ? 'bg-cyan-glow border-cyan-glow text-accent-ink'
                                    : 'border-ink/15 text-ink-muted hover:text-ink hover:border-ink/30'
                                }`}
                              >
                                {day}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                      <Field label="What would you like to help with?">
                        <select className={inputCls} value={form.volunteer_help} onChange={update('volunteer_help')}>
                          {VOLUNTEER_HELP_OPTIONS.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                    </motion.div>
                  )}

                  {form.role === 'sponsor' && (
                    <motion.div
                      key="sponsor"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field label="Organization name (optional)">
                          <input className={inputCls} placeholder="Acme Quantum Inc." value={form.org_name} onChange={update('org_name')} />
                        </Field>
                        <Field label="Your role there (optional)">
                          <input className={inputCls} placeholder="e.g. University Relations Lead" value={form.org_role} onChange={update('org_role')} />
                        </Field>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field label="Organization website (optional)">
                          <input className={inputCls} placeholder="https://…" value={form.org_website} onChange={update('org_website')} />
                        </Field>
                        <Field label="Phone number (optional)">
                          <input type="tel" className={inputCls} placeholder="613 555 0123" value={form.phone} onChange={update('phone')} />
                        </Field>
                      </div>
                      <Field label="What kind of support can you offer?">
                        <select className={inputCls} value={form.sponsor_support} onChange={update('sponsor_support')}>
                          {SPONSOR_SUPPORT_OPTIONS.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Anything else we should know? (optional)">
                        <input className={inputCls} placeholder="Tell us more…" value={form.sponsor_notes} onChange={update('sponsor_notes')} />
                      </Field>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label={`Dietary restrictions${form.role === 'participant' ? '' : ' (optional)'}`}>
                    <select
                      required={form.role === 'participant'}
                      className={inputCls}
                      value={form.dietary}
                      onChange={update('dietary')}
                    >
                      {DIETARY_OPTIONS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Accessibility needs (optional)">
                    <input className={inputCls} placeholder="Let us know how we can support you" value={form.accessibility} onChange={update('accessibility')} />
                  </Field>
                </div>

                {form.dietary === 'Other' && (
                  <Field label="Please specify">
                    <input
                      className={inputCls}
                      placeholder="Tell us about your dietary restriction"
                      value={form.dietary_other}
                      onChange={update('dietary_other')}
                    />
                  </Field>
                )}

                <label className="flex items-start gap-3 text-sm text-ink-muted cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-ink/20 bg-ink/5 accent-cyan-500"
                    checked={form.agree}
                    onChange={update('agree')}
                  />
                  I agree to the{' '}
                  <a href={CODE_OF_CONDUCT_URL} target="_blank" rel="noreferrer" className="text-cyan-text hover:text-cyan-strong underline underline-offset-2">
                    Code of Conduct
                  </a>
                </label>

                <button type="submit" disabled={status === 'loading'} className="btn-glow w-full sm:w-auto disabled:opacity-60">
                  {status === 'loading' ? 'Submitting…' : 'Submit registration'}
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
    </div>
  )
}
