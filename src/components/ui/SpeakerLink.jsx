import { Link } from 'react-router-dom'
import { SPEAKERS } from '../../data/speakers.js'
import { slugify } from '../../lib/slugify.js'

// Renders a session's speaker name as a link to their card on /speakers
// (matched by exact name against speakers.js), or plain text if there's no
// matching speaker entry yet.
export default function SpeakerLink({ name, className = '' }) {
  if (!name) return null

  const known = SPEAKERS.some((s) => s.name === name)
  if (!known) {
    return <p className={className}>{name}</p>
  }

  return (
    <Link
      to={`/speakers?highlight=${slugify(name)}`}
      className={`${className} hover:text-cyan-strong underline underline-offset-2 decoration-ink/20 hover:decoration-cyan-glow transition-colors`}
    >
      {name}
    </Link>
  )
}
