// Registration form config — edit freely, no code changes needed.

// Paste your Google Apps Script Web App URL here (ends in /exec).
// See the "Registration form backend" section in this folder's README.md
// for how to set that up.
export const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwkErjNIXFMQErGA5aFT6QBg6ZbGz6zDPVahvap8GOEs-rd7i0u-49XcTMfeScpZ8kxUQ/exec'

// Notice shown at the top of the registration form. Set to '' to hide it.
export const FORM_NOTICE =
  "This year's event is currently planned as in-person only. We're looking into a hybrid/online option — watch Discord for updates."

// The three registration paths — each shows a different set of fields below.
export const ROLES = [
  { key: 'participant', label: 'Participant', hint: 'Attending talks, labs, and/or the hackathon.' },
  { key: 'volunteer', label: 'Volunteer', hint: 'Helping run the event.' },
  { key: 'sponsor', label: 'Sponsor', hint: 'Supporting Fall Fest as an organization.' },
]

// --- Shared fields ---
// First option is the default. 'Other' reveals a free-text field to specify.
export const DIETARY_OPTIONS = [
  'None',
  'Vegetarian',
  'Vegan',
  'Halal',
  'Kosher',
  'Gluten-free',
  'Other',
]

// Background-skill scale, reused for each topic below (participants & volunteers).
// First option is the default.
export const SKILL_LEVEL_OPTIONS = ['None', 'Beginner', 'Intermediate', 'Advanced']

// One entry per topic we ask about — reused to render both the participant
// and volunteer background sections, so the two stay in sync automatically.
export const BACKGROUND_TOPICS = [
  { key: 'background_quantum', label: 'Quantum computing' },
  { key: 'background_programming', label: 'Programming (e.g. Python)' },
  { key: 'background_qiskit', label: 'Qiskit' },
  { key: 'background_linear_algebra', label: 'Linear algebra' },
]

// --- Participant fields ---
export const STATUS_OPTIONS = [
  'uOttawa student',
  'Carleton student',
  'Student, other university',
  'Faculty / researcher',
  'Industry / other',
]

export const TEAM_OPTIONS = [
  'Need a team',
  'Already have a team',
  'Just attending workshops (no hackathon)',
]

// --- Volunteer fields ---
export const VOLUNTEER_DAY_OPTIONS = [
  'Day 1 — Sat, Oct 3',
  'Day 2 — Sun, Oct 4',
  'Hackathon week (Oct 5–7)',
]

export const VOLUNTEER_HELP_OPTIONS = [
  'Check-in & logistics',
  'Mentoring participants (need relevant background)',
  'Tech / AV support',
  'Photography & social media',
  'Wherever needed',
]

// --- Sponsor fields ---
export const SPONSOR_SUPPORT_OPTIONS = [
  'Financial sponsorship',
  'In-kind donations (swag, prizes, food)',
  'Mentors / judges for the hackathon',
  'Not sure yet — want to chat',
]
