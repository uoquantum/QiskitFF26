import { useState } from 'react'
import { assetUrl } from '../../lib/assetUrl.js'

function initials(name) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2)
}

export default function Avatar({ name, photo, size = 'md' }) {
  const [failed, setFailed] = useState(false)
  const sizeCls =
    size === 'xl' ? 'h-24 w-24 text-xl' : size === 'lg' ? 'h-12 w-12 text-sm' : 'h-10 w-10 text-xs'

  if (photo && !failed) {
    return (
      <img
        src={assetUrl(photo)}
        alt={name}
        onError={() => setFailed(true)}
        className={`${sizeCls} shrink-0 rounded-full object-cover bg-void-raised`}
      />
    )
  }

  return (
    <div
      className={`${sizeCls} shrink-0 rounded-full bg-gradient-to-br from-quantum-violet to-cyan-glow flex items-center justify-center font-display text-accent-ink font-semibold`}
    >
      {initials(name)}
    </div>
  )
}
