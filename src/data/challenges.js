// Hackathon challenges — edit freely, no code changes needed.
// The /challenges page stays hidden until BOTH:
//   1. READY.challenges is true (see readiness.js) — flip once this list is filled in
//   2. The reveal time below has passed
// So it's safe to fill this in and flip the flag ahead of time without it
// leaking early — the page won't actually show anything until the reveal time.
//
// Full prompt text lives in prompts/hackathon/<folder>/PROMPT.md in this
// repo (not duplicated here) — `url` links straight to it on GitHub so it
// stays in sync automatically. Prompts 09 and 10 are archived per
// prompts/hackathon/README.md and deliberately excluded from this list.

export const CHALLENGES_REVEAL_AT = '2026-10-04T15:30:00-04:00'
export const CHALLENGES_REVEAL_LABEL = 'Sun, Oct 4, 2026 · 3:30 PM ET'

const REPO = 'https://github.com/uoquantum/QiskitFF26/prompts/hackathon'

export const SUBMISSION_GUIDELINES_URL = `${REPO}/SUBMISSION_GUIDELINES.md`

export const CHALLENGES = [
  {
    number: '01',
    track: 'Optimization · QAOA',
    title: 'Quantum Portfolio Optimizer',
    desc: 'Find good asset selections while satisfying a budget constraint.',
    url: `${REPO}/01_portfolio_optimization/PROMPT.md`,
  },
  {
    number: '02',
    track: 'Quantum Chemistry · VQE',
    title: 'Molecular Energy',
    desc: 'Predict a molecular energy curve and improve accuracy or resource use.',
    url: `${REPO}/02_molecular_energy/PROMPT.md`,
  },
  {
    number: '03',
    track: 'Quantum Simulation',
    title: 'Quantum Dynamics',
    desc: 'Preserve accurate spin dynamics under a circuit budget and noise.',
    url: `${REPO}/03_quantum_dynamics/PROMPT.md`,
  },
  {
    number: '04',
    track: 'Architecture · QEC',
    title: 'Quantum Architecture',
    desc: 'Compare connectivity and error protection across three processor models.',
    url: `${REPO}/04_quantum_architecture/PROMPT.md`,
  },
  {
    number: '05',
    track: 'Quantum Error Correction',
    title: 'Quantum Error Game',
    desc: 'Build a playable experiment about protecting quantum information.',
    url: `${REPO}/05_quantum_error_game/PROMPT.md`,
  },
  {
    number: '06',
    track: 'Quantum ML · Sustainability',
    title: 'QML Biodegradability',
    desc: 'Recover biodegradable candidates under a false-positive constraint and quantum resource budget.',
    url: `${REPO}/06_qml_biodegradability/PROMPT.md`,
  },
  {
    number: '07',
    track: 'Quantum ML · Chemistry',
    title: 'QML Molecular Properties',
    desc: 'Predict dipole moments with limited labels and test transfer to unseen molecular formulas.',
    url: `${REPO}/07_qml_molecular_properties/PROMPT.md`,
  },
  {
    number: '08',
    track: 'Quantum ML · Materials',
    title: 'QML Materials Screening',
    desc: 'Select materials in a target band-gap range and test shortlist reliability on unfamiliar chemistry.',
    url: `${REPO}/08_qml_materials_screening/PROMPT.md`,
  },
  {
    number: 'Open',
    track: 'Any Theme',
    title: 'Choose Your Own Problem',
    desc: 'Define a problem in Quantum Machine Learning, Quantum Chemistry, Materials Science, or Sustainability.',
    url: `${REPO}/open_challenge/PROMPT.md`,
  },
]
