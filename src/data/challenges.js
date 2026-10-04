// Hackathon challenges — edit freely, no code changes needed.
// The /challenges page stays hidden until BOTH:
//   1. READY.challenges is true (see readiness.js) — flip once this list is filled in
//   2. The reveal time below has passed
// So it's safe to fill this in and flip the flag ahead of time without it
// leaking early — the page won't actually show anything until the reveal time.
//
// Full prompt text is pulled straight from prompts/hackathon/<folder>/PROMPT.md
// in this repo (not duplicated here) and rendered on its own /challenges/<slug>
// page — see pages/ChallengePrompt.jsx. Prompts 09 and 10 are archived per
// prompts/hackathon/README.md and deliberately excluded from this list.

import p01 from '../../prompts/hackathon/01_portfolio_optimization/PROMPT.md?raw'
import p02 from '../../prompts/hackathon/02_molecular_energy/PROMPT.md?raw'
import p03 from '../../prompts/hackathon/03_quantum_dynamics/PROMPT.md?raw'
import p04 from '../../prompts/hackathon/04_quantum_architecture/PROMPT.md?raw'
import p05 from '../../prompts/hackathon/05_quantum_error_game/PROMPT.md?raw'
import p06 from '../../prompts/hackathon/06_qml_biodegradability/PROMPT.md?raw'
import p07 from '../../prompts/hackathon/07_qml_molecular_properties/PROMPT.md?raw'
import p08 from '../../prompts/hackathon/08_qml_materials_screening/PROMPT.md?raw'
import pOpen from '../../prompts/hackathon/open_challenge/PROMPT.md?raw'
import submissionGuidelinesRaw from '../../prompts/hackathon/SUBMISSION_GUIDELINES.md?raw'

export const CHALLENGES_REVEAL_AT = '2026-10-04T15:30:00-04:00'
export const CHALLENGES_REVEAL_LABEL = 'Sun, Oct 4, 2026 · 3:30 PM ET'

export const SUBMISSION_GUIDELINES = submissionGuidelinesRaw

export const CHALLENGES = [
  {
    number: '01',
    track: 'Optimization · QAOA',
    title: 'Quantum Portfolio Optimizer',
    desc: 'Find good asset selections while satisfying a budget constraint.',
    slug: 'portfolio-optimization',
    folder: '01_portfolio_optimization',
    content: p01,
  },
  {
    number: '02',
    track: 'Quantum Chemistry · VQE',
    title: 'Molecular Energy',
    desc: 'Predict a molecular energy curve and improve accuracy or resource use.',
    slug: 'molecular-energy',
    folder: '02_molecular_energy',
    content: p02,
  },
  {
    number: '03',
    track: 'Quantum Simulation',
    title: 'Quantum Dynamics',
    desc: 'Preserve accurate spin dynamics under a circuit budget and noise.',
    slug: 'quantum-dynamics',
    folder: '03_quantum_dynamics',
    content: p03,
  },
  {
    number: '04',
    track: 'Architecture · QEC',
    title: 'Quantum Architecture',
    desc: 'Compare connectivity and error protection across three processor models.',
    slug: 'quantum-architecture',
    folder: '04_quantum_architecture',
    content: p04,
  },
  {
    number: '05',
    track: 'Quantum Error Correction',
    title: 'Quantum Error Game',
    desc: 'Build a playable experiment about protecting quantum information.',
    slug: 'quantum-error-game',
    folder: '05_quantum_error_game',
    content: p05,
  },
  {
    number: '06',
    track: 'Quantum ML · Sustainability',
    title: 'QML Biodegradability',
    desc: 'Recover biodegradable candidates under a false-positive constraint and quantum resource budget.',
    slug: 'qml-biodegradability',
    folder: '06_qml_biodegradability',
    content: p06,
  },
  {
    number: '07',
    track: 'Quantum ML · Chemistry',
    title: 'QML Molecular Properties',
    desc: 'Predict dipole moments with limited labels and test transfer to unseen molecular formulas.',
    slug: 'qml-molecular-properties',
    folder: '07_qml_molecular_properties',
    content: p07,
  },
  {
    number: '08',
    track: 'Quantum ML · Materials',
    title: 'QML Materials Screening',
    desc: 'Select materials in a target band-gap range and test shortlist reliability on unfamiliar chemistry.',
    slug: 'qml-materials-screening',
    folder: '08_qml_materials_screening',
    content: p08,
  },
  {
    number: 'Open',
    track: 'Any Theme',
    title: 'Choose Your Own Problem',
    desc: 'Define a problem in Quantum Machine Learning, Quantum Chemistry, Materials Science, or Sustainability.',
    slug: 'open-challenge',
    folder: 'open_challenge',
    content: pOpen,
  },
]
