// Turns a speaker's name into a URL-safe anchor, e.g. 'Jacob Krich' -> 'jacob-krich'.
// Used to link a session on the Schedule page to that speaker's card on /speakers.
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
