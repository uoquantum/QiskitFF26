import { MATERIALS } from '../data/challengeMaterials.js'

const COLAB_BASE = 'https://colab.research.google.com/github/utkarshh-singh/QiskitFF26/blob/main'
const GITHUB_BLOB_BASE = 'https://github.com/utkarshh-singh/QiskitFF26/blob/main'

// Resolves a relative link found inside a PROMPT.md (or SUBMISSION_GUIDELINES.md)
// file into something the site can actually point at:
//  - SUBMISSION_GUIDELINES.md -> the in-site guidelines page
//  - .ipynb notebooks -> a Colab link into this repo (works once it's pushed)
//  - .pdf / .pptx -> a Drive link from challengeMaterials.js, once one is filled in
//  - other .md cross-references -> a GitHub view (works once it's pushed)
// Returns { href, internal }. href is null when there's nothing to link to yet.
//
// `folder` is the prompt file's own folder relative to prompts/hackathon/, e.g.
// '04_quantum_architecture', or '' for files living directly in prompts/hackathon/.
export function resolveHackathonLink(href, folder) {
  if (!href || /^https?:\/\//.test(href)) return { href, internal: false }

  const base = `file:///prompts/hackathon/${folder ? folder + '/' : ''}`
  const resolved = new URL(href, base)
  const path = decodeURIComponent(resolved.pathname)
  const basename = path.split('/').pop()

  if (path === '/prompts/hackathon/SUBMISSION_GUIDELINES.md') {
    return { href: '/challenges/submission-guidelines', internal: true }
  }
  if (path.startsWith('/prompts/hackathon/ORGANIZER_NOTES.md')) {
    return { href: null, internal: false }
  }
  if (path.endsWith('.ipynb')) {
    return { href: `${COLAB_BASE}${path}`, internal: false }
  }
  if (path.endsWith('.pdf') || path.endsWith('.pptx')) {
    return { href: MATERIALS[basename] || null, internal: false }
  }
  if (path.endsWith('.md')) {
    return { href: `${GITHUB_BLOB_BASE}${path}`, internal: false }
  }
  return { href, internal: false }
}
