// Resolves a root-relative path (e.g. '/speakers/name.jpg', as written in the
// data files) against Vite's configured base path, so uploaded images work
// both in dev and once deployed under a sub-path like /repo-name/.
export function assetUrl(path) {
  if (!path) return path
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
