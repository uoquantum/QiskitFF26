import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle.jsx'

export default function FloatingThemeToggle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed bottom-6 left-6 z-40"
    >
      <ThemeToggle className="!h-14 !w-14 shadow-xl" />
    </motion.div>
  )
}
