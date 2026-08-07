// Contact channels — edit freely, no code changes needed.
import { EVENT } from './site.js'

export const CHANNELS = [
  { label: 'Discord', desc: 'Announcements, team-finding, and live support.', cta: 'Join Discord', href: EVENT.discord },
  { label: '#helpdesk', desc: 'Logistics, accessibility, and general questions on Discord.', cta: 'Open Discord', href: EVENT.discord },
  { label: '#ask-a-mentor', desc: 'Technical help during the hackathon, on Discord.', cta: 'Open Discord', href: EVENT.discord },
]

// Venue not finalized yet — map shows STEM Complex as a placeholder.
// Update MAP_QUERY once the real room/building is confirmed; the embed needs no API key.
export const MAP_QUERY = 'STEM Complex, University of Ottawa'
export const MAP_NOTE = "Exact venue is still being finalized — the pin above shows STEM Complex as a placeholder. We'll update this as soon as the room is confirmed."
