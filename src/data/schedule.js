// Event schedule and venues — edit freely, no code changes needed.
// Flow: weekend talks + hands-on labs (Sat–Sun), then a self-directed hackathon
// build week (Mon–Wed), ending with the submission deadline.

export const VENUES = [
  { day: 'Weekend sessions (Oct 3–4)', room: 'CRX 240, Learning Crossroads, University of Ottawa' },
  { day: 'Finale (Oct 10)', room: 'STM 117, STEM Complex, University of Ottawa' },
]

export const SCHEDULE = {
  day1: {
    label: 'Day 1 — Sat, Oct 3',
    theme: 'Quantum Computing, Qiskit & QML',
    location: 'CRX 240, Learning Crossroads, University of Ottawa',
    sessions: [
      { time: '9:30–10:00', title: 'Welcome & Qiskit Fall Fest Kickoff', detail: '' },
      { time: '10:00–10:45', title: 'Quantum for Dummies', detail: 'A beginner-friendly introduction to the core ideas behind quantum computing.' },
      { time: '10:45–11:30', title: 'Linear Algebra for Quantum Computing', detail: 'The vectors, matrices, and math foundations quantum computing builds on.' },
      { time: '11:30–11:45', title: 'Break', detail: '' },
      { time: '11:45–12:45', title: 'Qiskit 101', detail: 'Write and run your first quantum circuits in Qiskit.' },
      { time: '12:45–2:15', title: 'Lunch', detail: '' },
      { time: '2:15–3:00', title: 'Introduction to Quantum Machine Learning', detail: 'Where quantum computing meets machine learning, and how to start experimenting with it.' },
      { time: '3:00–3:15', title: 'Break', detail: '' },
      { time: '3:15–5:15', title: 'Hands-on Qiskit Lab', detail: 'Guided, hands-on practice applying what you learned today.' },
      { time: '5:15–5:30', title: 'Day 1 Wrap-up & Q&A', detail: '' },
    ],
  },
  day2: {
    label: 'Day 2 — Sun, Oct 4',
    theme: 'Quantum Chemistry & Hackathon',
    location: 'CRX 240, Learning Crossroads, University of Ottawa',
    sessions: [
      { time: '10:00–10:15', title: 'Day 2 Welcome', detail: '' },
      { time: '10:15–11:00', title: 'Quantum Chemistry for Quantum Computing', detail: 'How quantum computing applies to simulating molecules and chemical systems.' },
      { time: '11:00–11:45', title: 'VQE with Qiskit', detail: 'A hands-on introduction to the Variational Quantum Eigensolver algorithm.' },
      { time: '11:45–12:00', title: 'Break', detail: '' },
      { time: '12:00–1:00', title: 'Sample-Based Quantum Diagonalization (SQD)', detail: 'Using quantum samples to estimate ground-state energies for chemistry problems.' },
      { time: '1:00–2:30', title: 'Lunch', detail: '' },
      { time: '2:30–3:45', title: 'Hands-on Quantum Chemistry with Qiskit', detail: 'Guided implementation walkthrough applying quantum chemistry methods in Qiskit.' },
      { time: '3:45–4:00', title: 'Break', detail: '' },
      { time: '4:00–4:45', title: 'Quantum at uOttawa', detail: 'An inside look at quantum research and initiatives happening at the University of Ottawa.' },
      { time: '4:45–5:15', title: 'Hackathon Introduction & Challenge Overview', detail: "This year's tracks and how the hackathon build week will work." },
      { time: '5:15–5:30', title: 'Technical Help / Open Q&A', detail: '' },
    ],
  },
  hackathonWeek: {
    label: 'Hackathon Week — Mon–Wed, Oct 5–7',
    theme: 'Self-directed Build Period',
    location: 'Remote — build on your own time, support on Discord',
    sessions: [
      { time: 'Mon–Tue, Oct 5–6', title: 'Build Period', detail: 'Work on your project at your own pace. Mentors available on Discord for questions.' },
      { time: 'Tue, Oct 6 (evening)', title: 'Optional Mentor Check-in', detail: 'Live Q&A on Discord for teams who want feedback before submitting.' },
      { time: 'Wed, Oct 7 — 11:59 PM ET', title: 'Submission Deadline', detail: 'Submit your slides, a recorded video (max 5 min) explaining your slides, your GitHub repo, and any relevant docs.' },
    ],
  },
  finale: {
    label: 'Finale — Sat, Oct 10',
    theme: 'Presentations & Prize Distribution',
    location: 'STM 117, STEM Complex, University of Ottawa',
    sessions: [
      { time: 'Sat, Oct 10', title: 'Final Presentations & Prize Distribution', detail: 'Teams present their hackathon projects; winners announced and prizes awarded.' },
    ],
  },
}
