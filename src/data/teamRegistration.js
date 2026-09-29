// Team registration form config — edit freely, no code changes needed.
// This page is NOT linked from the nav on purpose (see src/pages/TeamRegistration.jsx) —
// it's only reachable via a direct link, so you can build/test it and share
// the link with organizers before it's public.

// Reuses the same Apps Script Web App as the main registration form (see
// register.js and this folder's README.md) — submissions here are tagged
// formType: 'team' so the script can route them to their own "Teams" tab.
// See the README's "Team registration backend" section for the script
// snippet to add.
export { FORM_ENDPOINT } from './register.js'

// Set to `true` once you're ready to share the /team-registration link.
// While `false`, the page shows a "not open yet" message instead of the form.
export const TEAM_REGISTRATION_OPEN = true
export const NOT_OPEN_TITLE = 'Team registration isn’t open yet'
export const NOT_OPEN_MESSAGE =
  "We'll share this link once team formation is underway. Check Discord for when it opens."

// Shown as a note right under the GitHub repo field on the form.
export const GITHUB_NOTE =
  'Name your repo <team-name>_QFF2026_uottawa (e.g. entangled-ones_QFF2026_uottawa). The team lead should add every member as a collaborator so everyone can push.'
