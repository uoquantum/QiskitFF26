import { lazy } from 'react'

const RELOAD_FLAG = 'ff26-chunk-reload-attempted'

// Vite hashes every page's JS filename, and that hash changes on each
// deploy. If someone has the site open from before a deploy and clicks into
// a page they haven't loaded yet, the browser tries to fetch a filename
// that no longer exists (replaced by the new deploy) — the dynamic import
// fails silently and the page renders blank instead of showing an error.
// This catches that failure and reloads the page once, which re-fetches
// index.html pointing at the current filenames, instead of leaving a blank
// page until someone figures out to reload manually.
export function lazyRetry(factory) {
  return lazy(async () => {
    try {
      const module = await factory()
      sessionStorage.removeItem(RELOAD_FLAG)
      return module
    } catch (error) {
      if (!sessionStorage.getItem(RELOAD_FLAG)) {
        sessionStorage.setItem(RELOAD_FLAG, '1')
        window.location.reload()
        // Never resolve — the reload is about to replace this page anyway.
        return new Promise(() => {})
      }
      throw error
    }
  })
}
