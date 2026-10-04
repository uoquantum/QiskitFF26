// Maps third-party PDFs/slides referenced inside the hackathon prompts to
// where they're hosted. These are other institutions' original briefs
// (USask, McGill) — kept off the public GitHub repo and shared via Drive
// instead. Paste a share link in as each one becomes available; the prompt
// pages pick it up automatically, no other code changes needed.
//
// Notebooks referenced from the prompts don't need an entry here — they
// link straight into this repo's own notebooks/ and prompts/hackathon/
// folders via Colab, same as the rest of the site.
export const MATERIALS = {
  'Qiskit Fall Fest Challenge Hyperbolic Futures - quanTA USask.pdf':
    'https://drive.google.com/file/d/1phuSlXTQ0WtaVM7go3gVQz2_PC1C9oK4/view',
  'Reference - Hyperbolic Lattices.pdf':
    'https://drive.google.com/file/d/1u1y9K3X9DtLmyBtHLhGAimxqyIGGILRn/view',
  'Reference - Hyperbolic QEC.pdf':
    'https://drive.google.com/file/d/1OHUv7pENYQfaefPFkPBh7m98JFxZLjKl/view',
  'McgillQFF 2026  -  Read-Only.pptx':
    'https://drive.google.com/file/d/1EsNzeUtomRfrIZ243qfOR2ahpjCmRET5/view',
  'Reference - Evolution of Qiskit Features.pdf': null,
}
