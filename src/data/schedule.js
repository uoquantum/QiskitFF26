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
    zoom: 'https://uottawa-ca.zoom.us/j/98629954609?pwd=sxNqdKcmjS4SJ3XafE5NNap38LiR9Z.1',
    sessions: [
      { time: '9:30–10:00', title: 'Welcome & Check-in', detail: '' },
      { time: '10:00–11:00', title: 'Simple Intro to Quantum Mechanics', speaker: 'Jacob Krich', detail: '' },
      { time: '11:00–11:15', title: 'Break', detail: '' },
      { time: '11:15–12:15', title: 'Quantum & Qiskit 101', speaker: 'Gábor Samu', detail: '' },
      { time: '12:15–1:45 PM', title: 'Lunch', detail: '' },
      { time: '1:45–2:45 PM', title: 'Introduction to Quantum Machine Learning', speaker: 'Sohrab Ganjian', detail: '' },
      { time: '2:45–3:45 PM', title: 'Hands-on QML with Qiskit - Lab', speaker: 'Utkarsh Singh', detail: '' },
      { time: '3:45–4:00 PM', title: 'Break', detail: '' },
      { time: '4:00–5:00 PM', title: 'Applications of Quantum Machine Learning', speaker: 'Steven Rayan', detail: '' },
    ],
  },
  day2: {
    label: 'Day 2 — Sun, Oct 4',
    theme: 'Quantum Chemistry & Hackathon',
    location: 'CRX 240, Learning Crossroads, University of Ottawa',
    zoom: 'https://uottawa-ca.zoom.us/j/98478084595?pwd=ifHRAmSuAjIKjPal8Fz7iSGetfIbvv.1',
    sessions: [
      { time: '9:30–10:00', title: 'Welcome & Check-in', detail: '' },
      { time: '10:00–11:15 AM', title: 'Intro to Quantum Chemistry & VQE', speaker: 'Prince Kwao', detail: '' },
      { time: '11:15–11:30 AM', title: 'Break', detail: '' },
      { time: '11:30–1:00 PM', title: 'Subspace Diagonalization for Quantum Chemistry', speaker: 'Rishabh Shukla', detail: '' },
      { time: '1:00–2:00 PM', title: 'Lunch', detail: '' },
      { time: '2:00–2:45 PM', title: 'Hackathon Reveal', detail: "This year's tracks and how the hackathon build week will work." },
      { time: '2:45–3:30 PM', title: 'Technical Help / Open Q&A', detail: '' },
    ],
  },
  hackathonWeek: {
    label: 'Hackathon Week — Mon–Wed, Oct 5–7',
    theme: 'Self-directed Hacking',
    location: 'Remote — build on your own time, support on Discord',
    sessions: [
      { time: 'Mon–Tue, Oct 5–6', title: 'Hack Days', detail: 'Work on your project at your own pace. Mentors available on Discord for questions.' },
      { time: 'Tue, Oct 6 (evening)', title: 'Optional Mentor Check-in', detail: 'Live Q&A on Discord for teams who want feedback before submitting.' },
      { time: 'Wed, Oct 7 — 11:59 PM ET', title: 'Submission Deadline', detail: 'Submit your slides, a recorded video (max 5 min) explaining your slides, your GitHub repo, and any relevant docs.' },
    ],
  },
  finale: {
    label: 'Finale — Sat, Oct 10',
    theme: 'Presentations & Prize Distribution',
    location: 'STM 117, STEM Complex, University of Ottawa',
    sessions: [
      { time: '12:00–6:00 PM', title: 'Final Presentations & Prize Distribution', detail: 'Teams present their hackathon projects; winners announced and prizes awarded.' },
    ],
  },
}
