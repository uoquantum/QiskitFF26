import { Link } from 'react-router-dom'
import { EVENT, CODE_OF_CONDUCT_URL, FOOTER_CREDIT, SOCIALS } from '../../data/site.js'
import SocialIcon from '../ui/SocialIcon.jsx'

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 mt-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-ink text-sm">
            {EVENT.name} <span className="text-ink-faint">· {EVENT.org}</span>
          </p>
          <p className="text-ink-faint text-xs mt-1.5 font-mono">
            © {new Date().getFullYear()} — {FOOTER_CREDIT}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-muted">
          <Link to="/learn" className="hover:text-cyan-strong transition-colors">Learn</Link>
          <Link to="/faq" className="hover:text-cyan-strong transition-colors">FAQ</Link>
          <Link to="/contact" className="hover:text-cyan-strong transition-colors">Contact</Link>
          <Link to={CODE_OF_CONDUCT_URL} className="hover:text-cyan-strong transition-colors">
            Code of Conduct
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink-muted hover:text-cyan-strong hover:border-cyan-glow/50 transition-colors"
            >
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
