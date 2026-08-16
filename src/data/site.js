// Global event identity, nav links, and footer — edit freely, no code changes needed.

export const EVENT = {
  name: 'Qiskit Fall Fest 2026',
  org: 'uOttawa',
  tagline: 'Learn. Build. Celebrate Quantum.',
  dates: 'Oct 3 – Oct 7, 2026',
  weekendDates: 'Oct 3 – 4',
  hackathonDeadline: 'Wed, Oct 7, 2026 · 11:59 PM ET',
  location: 'University of Ottawa',
  price: 'Free • Open to everyone',
  discord: 'https://discord.gg/qqgnpGsc',
  hackathonRepo: 'https://github.com/uoquantum/QFF25_Hackathon',
  blurb:
    "Qiskit Fall Fest is a student-run celebration of learning, making, and community building. This year marks a decade of quantum computing on the cloud, and the edition is focused on Quantum Machine Learning, Quantum Chemistry, Materials Science, and Sustainability — bringing together curious beginners, builders, and mentors for a weekend of talks and hands-on labs, followed by a hackathon build week, all powered by IBM Quantum and the uOttawa community.",
}

// Always-visible top-level links.
export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/speakers', label: 'Speakers' },
  { to: '/workshops', label: 'Workshops' },
  { to: '/learn', label: 'Learn' },
]

// Grouped under the "More" dropdown in the header.
// Use `to` for internal pages, `href` for external links (opens in a new tab).
export const NAV_MORE = [
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/organizers', label: 'Organizers' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
  { href: 'https://2025.uoquantum.com', label: 'Fall Fest 2025' },
]

export const CODE_OF_CONDUCT_URL = '/code-of-conduct'

// Site logo shown in the header next to the event name. Drop the file at
// public/logo.svg (or .png) and set this to '/logo.svg'. Leave empty to keep
// the default glowing-dot mark.
export const LOGO_URL = '/Qiskit_03.png'

export const SOCIALS = [
  { label: 'Discord', icon: 'discord', url: EVENT.discord },
  { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/uottawaquantum' },
]

export const FOOTER_CREDIT = 'Built with ♥, by uOttawa Quantum Team & Cadmic'
