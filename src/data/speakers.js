// Speaker lineup — edit freely, no code changes needed.
// To add a photo: drop the image in public/speakers/ and set `photo` to
// e.g. '/speakers/karimi.jpg'. Leave `photo` empty to fall back to an
// initials avatar.
//
// `name` is also used to link speakers from the Schedule page (matched by
// exact text, then slugified into an anchor) — keep it exactly in sync with
// the `speaker` field on the matching session in schedule.js.

export const SPEAKERS = [
  {
    name: 'Jacob Krich',
    photo: '/speakers/jacob-krich.jpg',
    role: 'Professor of Physics',
    affiliation: 'University of Ottawa',
    bio: 'Theorist working on low-carbon energy sources and energy transfer in organic and biological systems, spanning photovoltaics and nonlinear optical spectroscopy.',
    talk: 'Simple Intro to Quantum Mechanics',
    links: [{ label: 'Website', url: 'http://www.krichlab.ca/' }],
  },
  {
    name: 'Steven Rayan',
    photo: '/speakers/stevenrayan.jpg',
    role: 'Professor, Mathematics & Statistics',
    affiliation: 'University of Saskatchewan',
    bio: 'Director of the Centre for Quantum Topology and Its Applications (quanTA); works on algebraic geometry, mathematical physics, and quantum information science.',
    talk: 'Applications of Quantum Machine Learning',
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/steven-rayan-448135339/' }],
  },
  {
    name: 'IBM Quantum Speaker',
    photo: '',
    role: 'To be announced',
    affiliation: 'IBM Quantum',
    bio: "We're finalizing this speaker — check back soon.",
    talk: 'Qiskit 101',
    links: [],
  },
  {
    name: 'Sohrab Ganjian',
    photo: '/speakers/sohrab.webp',
    role: 'Quantum Research Scientist',
    affiliation: 'Natural Resources Canada',
    bio: 'Researches quantum computing and quantum cryptography, with work spanning quantum homomorphic encryption and quantum optimization for machine learning.',
    talk: 'Introduction to Quantum Machine Learning',
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/sohrabganjian/' }],
  },
  {
    name: 'Utkarsh Singh',
    photo: '/speakers/utkarsh.png',
    role: 'Postdoctoral Fellow',
    affiliation: 'University of Ottawa & National Research Council of Canada',
    bio: 'Researches quantum machine learning and its real-world applications; lead organizer of Qiskit Fall Fest at uOttawa.',
    talk: 'Hands-on Qiskit Lab',
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/utkarsh-singhh/' }],
  },
  {
    name: 'Prince Kwao',
    photo: '/speakers/prince.jpeg',
    role: 'PhD Student, Quantum Computing in Chemistry',
    affiliation: 'University of North Dakota',
    bio: 'Develops scalable methods for ground- and excited-state calculations on quantum computers.',
    talk: 'Intro to Quantum Chemistry & VQE',
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/princekfred/' }],
  },
  {
    name: 'Rishabh Shukla',
    photo: '/speakers/rishabh.jpeg',
    role: 'Postdoctoral Associate, Chemistry',
    affiliation: 'IQST, University of Calgary',
    bio: 'Works at the intersection of quantum computing and computational chemistry, including quantum approaches to molecular simulation.',
    talk: 'Subspace Diagonalization for Quantum Chemistry',
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/rishabh235/' }],
  },
]
