import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function GlowButton({ to, href, children, variant = 'solid', className = '', ...props }) {
  const cls = variant === 'solid' ? 'btn-glow' : 'btn-ghost'

  const inner = (
    <motion.span className={`${cls} ${className}`} whileTap={{ scale: 0.97 }}>
      {children}
    </motion.span>
  )

  if (to) {
    return (
      <Link to={to} {...props}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {inner}
      </a>
    )
  }
  return (
    <button {...props}>{inner}</button>
  )
}
