// Learning resources — edit freely, no code changes needed.
// Curated, mostly-free/public resources for beginners, grouped by this year's focus areas.
// `type` drives the small badge shown on each card: Docs | Course | Video | Code

export const RESOURCES = [
  {
    // Add notebooks by dropping .ipynb files in /notebooks (see notebooks/README.md)
    // and linking https://colab.research.google.com/github/utkarshh-singh/QiskitFF26/blob/main/notebooks/<file>.ipynb
    category: 'Try It In Your Browser (No Install)',
    items: [
      {
        title: '1. Qiskit Fundamentals — Gates, Circuits & Visualization',
        type: 'Code',
        desc: 'Beginner · ~100–120 min. Qubits, superposition, circuits, gates, and visualizing states — start here.',
        url: 'https://colab.research.google.com/github/utkarshh-singh/QiskitFF26/blob/main/notebooks/01_Qiskit_Fundamentals_Gates_Circuits_and_Visualization.ipynb',
      },
      {
        title: '2. Measurement, Observables & Quantum Simulation',
        type: 'Code',
        desc: 'Beginner → Intermediate. Shots, probabilities, measurement bases, and Pauli observables with SparsePauliOp.',
        url: 'https://colab.research.google.com/github/utkarshh-singh/QiskitFF26/blob/main/notebooks/02_Measurement_Observables_and_Quantum_Simulation.ipynb',
      },
      {
        title: '3. Ideal and Noisy Simulation with Qiskit Aer',
        type: 'Code',
        desc: 'Intermediate. Simulate realistic hardware noise — bit-flip, depolarizing, thermal relaxation, and more.',
        url: 'https://colab.research.google.com/github/utkarshh-singh/QiskitFF26/blob/main/notebooks/03_Ideal_and_Noisy_Simulation_with_Qiskit_Aer.ipynb',
      },
      {
        title: '4. From Qiskit to IBM Quantum Hardware',
        type: 'Code',
        desc: 'Intermediate. Authenticate, pick a real backend, transpile, and run your circuit on actual quantum hardware.',
        url: 'https://colab.research.google.com/github/utkarshh-singh/QiskitFF26/blob/main/notebooks/04_From_Qiskit_to_IBM_Quantum_Hardware.ipynb',
      },
      {
        title: 'Running Qiskit in Google Colab',
        type: 'Docs',
        desc: "Official guide for setting up Qiskit in Colab if you're starting from a blank notebook.",
        url: 'https://quantum.cloud.ibm.com/docs/en/guides/online-lab-environments#google-colab',
      },
    ],
  },
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
        title: 'Qiskit Quickstart Guide',
        type: 'Docs',
        desc: 'The fastest path from zero to running your first circuit.',
        url: 'https://quantum.cloud.ibm.com/docs/en/guides/quick-start',
      },
      {
        title: 'QFF Tutorials (uOttawa Quantum)',
        type: 'Code',
        desc: "Our own curated tutorial notebooks used in past Fall Fest workshops.",
        url: 'https://github.com/uoquantum/QFF_Tutorials/tree/main',
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
      {
        title: 'IBM Quantum Events',
        type: 'Docs',
        desc: 'Talks, workshops, and office hours happening across the Qiskit community.',
        url: 'https://www.ibm.com/quantum/events',
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
    category: 'Math & Programming Foundations',
    items: [
      {
        title: 'Essence of Linear Algebra (3Blue1Brown)',
        type: 'Video',
        desc: 'The most intuitive linear algebra series out there — genuinely useful before diving into qubits.',
        url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
      },
      {
        title: 'NumPy for Beginners',
        type: 'Docs',
        desc: "Qiskit leans on NumPy constantly — worth a skim if arrays/matrices are new to you.",
        url: 'https://numpy.org/doc/stable/user/absolute_beginners.html',
      },
      {
        title: 'Python Tutorial',
        type: 'Docs',
        desc: 'The official Python tutorial — a solid refresher if you need one before the workshops.',
        url: 'https://docs.python.org/3/tutorial/',
      },
    ],
  },
]
