import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { EVENT } from '../../data/site.js'
import SocialIcon from './SocialIcon.jsx'

export default function FloatingDiscordButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={EVENT.discord}
      target="_blank"
      rel="noreferrer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-quantum-violet pl-4 pr-4 py-4 shadow-glow-purple"
      aria-label="Join our Discord"
    >
      <span className="absolute -inset-1.5 -z-10 rounded-full bg-quantum-violet/70 blur-xl animate-pulseGlow" />
      <SocialIcon name="discord" className="h-6 w-6 shrink-0 text-white" />
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden whitespace-nowrap font-display text-sm font-medium text-white"
          >
            Join our Discord
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  )
}
