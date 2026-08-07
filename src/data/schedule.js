// Event schedule and venues — edit freely, no code changes needed.
// Flow: weekend talks + hands-on labs (Sat–Sun), then a self-directed hackathon
// build week (Mon–Wed), ending with the submission deadline.

export const VENUES = [
  { day: 'Weekend sessions', room: 'STEM Complex, University of Ottawa — exact room TBA' },
]

export const SCHEDULE = {
  day1: {
    label: 'Day 1 — Sat, Oct 3',
    theme: 'Talks & Hands-on Labs',
    location: 'STEM Complex, University of Ottawa',
    sessions: [
      { time: '09:00–09:30', title: 'Check-in & Welcome', detail: 'Badges, housekeeping, event flow.' },
      { time: '09:30–10:00', title: 'Opening Ceremony', detail: '' },
      { time: '10:00–10:50', title: 'Basics of Quantum Computing', detail: 'Qubits, gates, circuits, and measurement — no prior background needed.' },
      { time: '10:50–11:10', title: 'Coffee Break', detail: '' },
      { time: '11:10–12:30', title: 'Qiskit 101 (hands-on lab)', detail: 'Write and run your first quantum circuits in Qiskit.' },
      { time: '12:30–13:30', title: 'Lunch', detail: '' },
      { time: '13:30–14:20', title: 'Bridging Quantum Computing & Quantum Machine Learning', detail: 'Where QML fits, and how to start experimenting with it in Qiskit.' },
      { time: '14:20–14:35', title: 'Coffee Break', detail: '' },
      { time: '14:35–16:00', title: 'Hands-on Lab: Quantum ML Basics with Qiskit', detail: 'Guided implementation walkthrough.' },
      { time: '16:00–17:00', title: 'Closing — Day 1', detail: '' },
    ],
  },
  day2: {
    label: 'Day 2 — Sun, Oct 4',
    theme: 'Talks & Hands-on Labs',
    location: 'STEM Complex, University of Ottawa',
    sessions: [
      { time: '09:00–09:30', title: 'Check-in & Welcome', detail: '' },
      { time: '09:30–10:20', title: 'Bridging Quantum Computing & Quantum Chemistry / Materials Science', detail: 'How quantum simulation applies to molecules and materials — and how to implement it.' },
      { time: '10:20–10:35', title: 'Coffee Break', detail: '' },
      { time: '10:35–11:25', title: 'Quantum Computing for Sustainability', detail: 'Emerging applications in energy, climate, and materials discovery.' },
      { time: '11:25–12:45', title: 'Hands-on Lab: Chemistry & Materials with Qiskit', detail: 'Guided implementation walkthrough.' },
      { time: '12:45–13:45', title: 'Lunch', detail: '' },
      { time: '13:45–14:30', title: 'Hackathon Challenge Launch & Team Formation', detail: "This year's tracks: Quantum ML, Quantum Chemistry, Materials Science, and Sustainability." },
      { time: '14:30–15:30', title: 'Mentor Office Hours', detail: 'Get help scoping your project before the build week starts.' },
      { time: '15:30–16:00', title: 'Closing Ceremony — Weekend', detail: '' },
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
}
