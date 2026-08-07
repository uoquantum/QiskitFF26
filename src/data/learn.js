// Learning resources — edit freely, no code changes needed.
// Curated, mostly-free/public resources for beginners, grouped by this year's focus areas.
// `type` drives the small badge shown on each card: Docs | Course | Video | Code

export const RESOURCES = [
  {
    category: 'Quantum Computing & Qiskit Basics',
    items: [
      {
        title: 'IBM Quantum Learning',
        type: 'Course',
        desc: 'Free, structured courses on quantum computing fundamentals and Qiskit — start here if new.',
        url: 'https://learning.quantum.ibm.com/',
      },
      {
        title: 'Qiskit Documentation',
        type: 'Docs',
        desc: 'Official Qiskit docs, API reference, and how-to guides.',
        url: 'https://docs.quantum.ibm.com/',
      },
      {
        title: 'Qiskit YouTube Channel',
        type: 'Video',
        desc: 'Tutorials, seminars, and conference talks straight from the Qiskit team.',
        url: 'https://www.youtube.com/@qiskit',
      },
      {
        title: 'Qiskit on GitHub',
        type: 'Code',
        desc: 'Source code, example notebooks, and issue trackers for the whole Qiskit ecosystem.',
        url: 'https://github.com/Qiskit',
      },
    ],
  },
  {
    category: 'Quantum Machine Learning',
    items: [
      {
        title: 'Qiskit Machine Learning',
        type: 'Code',
        desc: 'Official library for quantum ML in Qiskit — variational classifiers, QNNs, kernels.',
        url: 'https://github.com/qiskit-community/qiskit-machine-learning',
      },
      {
        title: 'PennyLane QML Demos',
        type: 'Course',
        desc: 'Hands-on tutorials on quantum machine learning concepts, useful alongside Qiskit.',
        url: 'https://pennylane.ai/qml/',
      },
    ],
  },
  {
    category: 'Quantum Chemistry & Materials',
    items: [
      {
        title: 'Qiskit Nature',
        type: 'Code',
        desc: 'Qiskit library for simulating chemistry and materials problems on quantum hardware.',
        url: 'https://github.com/qiskit-community/qiskit-nature',
      },
    ],
  },
  {
    category: 'Math Foundations',
    items: [
      {
        title: 'Essence of Linear Algebra (3Blue1Brown)',
        type: 'Video',
        desc: 'The most intuitive linear algebra series out there — genuinely useful before diving into qubits.',
        url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
      },
    ],
  },
]
