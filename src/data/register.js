// Registration form config — edit freely, no code changes needed.

// Paste your Google Apps Script Web App URL here (ends in /exec).
// See the "Registration form backend" section in this folder's README.md
// for how to set that up.
export const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycby8lax6gfdQS9EQoRMAYuRXVKPPIKeYuDU_ilzKgyc0B6H46sRRk7lh69Jw-JQXZAH_1g/exec'

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

// --- Participant fields ---
export const STATUS_OPTIONS = [
  'uOttawa student',
  'Student, other university',
  'Faculty / researcher',
  'Industry / other',
]

export const EXPERIENCE_OPTIONS = [
  'New to quantum computing',
  'Some coursework / self-taught',
  'Research or industry experience',
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
