import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { EVENT, NAV_LINKS, NAV_MORE, LOGO_URL } from '../../data/site.js'
import ThemeToggle from '../ui/ThemeToggle.jsx'
import NavDropdown from './NavDropdown.jsx'
import { assetUrl } from '../../lib/assetUrl.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-[0_1px_0_0_theme(colors.ink.DEFAULT/8%)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          {LOGO_URL ? (
            <img src={assetUrl(LOGO_URL)} alt={EVENT.name} className="h-8 w-8 rounded-full object-contain" />
          ) : (
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-quantum-violet/30 blur-md group-hover:bg-cyan-glow/40 transition-colors" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-glow shadow-glow-cyan" />
            </span>
          )}
          <span className="font-display font-medium tracking-tight text-ink text-[15px]">
            {EVENT.name}
            <span className="text-ink-faint"> · {EVENT.org}</span>
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                  isActive ? 'text-cyan-strong' : 'text-ink-muted hover:text-ink'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavDropdown label="More" items={NAV_MORE} />
          <ThemeToggle className="ml-2" />
          <NavLink to="/register" className="ml-2">
            <span className="btn-glow !px-5 !py-2 text-sm">Register</span>
          </NavLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full glass text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-current transition-all ${
                  open ? 'top-[7px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-current transition-opacity ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-current transition-all ${
                  open ? 'top-[7px] -rotate-45' : 'top-[14px]'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glass-strong overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg text-sm font-medium ${
                      isActive ? 'text-cyan-strong bg-ink/5' : 'text-ink-muted'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="my-2 border-t border-ink/10" />
              {NAV_MORE.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg text-sm font-medium ${
                      isActive ? 'text-cyan-strong bg-ink/5' : 'text-ink-muted'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <NavLink to="/register" onClick={() => setOpen(false)} className="mt-2">
                <span className="btn-glow w-full text-sm">Register</span>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
