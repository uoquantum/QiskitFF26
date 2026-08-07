import { useEffect, useState } from 'react'

function readTheme() {
  return document.documentElement.classList.contains('light') ? 'light' : 'dark'
}

export default function useTheme() {
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(readTheme()))
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return theme
}
