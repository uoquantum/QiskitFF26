import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const location = useLocation()
  const isActiveGroup = items.some((i) => i.to === location.pathname)

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`relative px-2.5 xl:px-3.5 py-2 text-sm font-medium rounded-full transition-colors flex items-center gap-1 ${
          isActiveGroup ? 'text-cyan-strong' : 'text-ink-muted hover:text-ink'
        }`}
      >
        {label}
        <svg viewBox="0 0 24 24" className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong absolute right-0 mt-2 w-48 rounded-2xl p-1.5 origin-top-right shadow-xl"
          >
            {items.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-medium text-ink-muted hover:text-ink hover:bg-ink/5 transition-colors"
                >
                  {item.label} ↗
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive ? 'text-cyan-strong bg-ink/5' : 'text-ink-muted hover:text-ink hover:bg-ink/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
