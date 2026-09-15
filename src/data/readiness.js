// Content readiness switches — edit freely, no code changes needed.
// Flip a flag to `true` once that section's real info is confirmed and ready
// to publish. While `false`, the corresponding page/section shows a
// "coming soon" placeholder instead of draft or guessed content.

export const READY = {
  schedule: false,
  speakers: false,
  volunteers: true,
  // Hackathon challenges — the /challenges page also enforces an automatic
  // reveal time on top of this flag (see data/challenges.js). Flip this to
  // true once CHALLENGES is actually filled in; the page stays hidden until
  // BOTH this is true AND the reveal time has passed.
  challenges: false,
}
