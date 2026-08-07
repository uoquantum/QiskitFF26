export default function GlassCard({ children, className = '', strong = false, glow = false }) {
  return (
    <div
      className={`rounded-2xl ${strong ? 'glass-strong' : 'glass'} ${
        glow ? 'hover:shadow-glow-purple hover:border-quantum-violet/50' : ''
      } transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
