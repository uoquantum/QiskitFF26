# Simulate a quantum magnet under a circuit budget

## Challenge

Simulate a chain of interacting quantum spins and determine which circuit design best preserves its dynamics under a limited gate budget.

Smaller time steps can improve an approximation while increasing circuit depth. Under noise, the extra operations may erase that benefit. Investigate this competition and support your choice with experiments.

## Model

Use the transverse-field Ising Hamiltonian with open boundaries:

\[
H=-J\sum_{i=0}^{N-2}Z_iZ_{i+1}-h\sum_{i=0}^{N-1}X_i.
\]

Begin with four spins, J = h = 1, and |0000⟩. Choose and report a fixed final evolution time and the times at which you measure observables.

## Required work

1. Implement approximate time evolution using Qiskit circuits.
2. Measure average Z magnetization and at least one two-point correlation. Explain the physics each reveals.
3. Compute an exact classical reference for the small system.
4. Compare several step sizes at the same final time, and compare first-order with at least one higher-order product formula.
5. Plot observable error against compiled depth or two-qubit gate count. State the gate set used for counting.
6. Introduce a documented noise model and repeat a controlled comparison. Identify the best strategy under your chosen budget.

Evaluate the synthesized gate sequence when measuring approximation error. Verify that the simulator executes that sequence rather than replacing the evolution instruction with its exact matrix.

## Understanding the task

Each qubit represents one spin. The open chain has three neighbour links. The ZZ terms describe interactions between neighbours; the X terms describe the transverse field. Use units with hbar = 1.

Trotterization approximates simultaneous evolution by short alternating sequences for the interaction and field terms. First order alternates these two parts; second order uses a symmetric half/full/half sequence. Approximation order is not the number of qubits.

Keep the total simulated time T fixed while changing the number of steps r; each step then represents T/r. For example, T = 1 with r = 1, 2, 4, 8 is one possible experiment, not a required choice. Simulated time is different from hardware execution time or gate duration. Count the compiled gates because equal step counts need not have equal cost.

- **Average Z magnetization:** sum of the four single-spin Z expectations divided by four; it describes overall Z alignment.
- **Pair correlation:** for example, <Z0 Z1>, which describes agreement of the two Z measurement outcomes. It does not by itself establish entanglement.
- **Exact reference:** numerically evolve the same four-spin model in its 16-dimensional state space, without the product-formula approximation.

Both observables above start at +1 in |0000>. Compare their time curves and errors with the reference. Smaller steps can improve approximation accuracy while exposing the computation to more noisy gates; the best choice must be established experimentally.

### Common questions

- **Do we need hardware?** No. A documented noisy simulator is sufficient. The noise comparison is required even when hardware is not used.
- **Why use a small system that a laptop can solve?** It provides a correctness check for the circuit approximation and resource comparison. Larger chains are an extension.
- **Why is the approximation error unexpectedly zero?** Verify that your simulator executes the synthesized circuit rather than an undecomposed exact evolution instruction; see the tutorial execution note below.
- **Must more steps always improve the result?** No. Report the measured trade-off and uncertainty, rather than assuming a trend for every observable and time.

## Extensions

- Recover an observable using mitigation or improved compilation.
- Study longer chains, longer times, different connectivity, or periodically driven evolution.
- Investigate how correlations spread across the chain.
- Beyond exact verification, provide smaller-system checks, known limits, and consistency tests.

## Submit

Follow the [shared submission guidelines](../SUBMISSION_GUIDELINES.md). Your public GitHub repository must include a README explaining your problem, approach, data, setup and run steps, experiments, results, limitations and conclusions. Present live on October 10; no recorded video is required.

- Reproducible code and Hamiltonian, noise, and compilation settings.
- Magnetization/correlation curves with reference results.
- Accuracy-versus-resource plots and sampling uncertainty where applicable.
- A recommended circuit strategy and evidence for when it stops working well.

## Evaluation

Correct dynamics, controlled comparisons, transparent resource accounting, and a convincing explanation of approximation error versus noise. A larger circuit alone does not demonstrate a better simulation.

Simulator execution is sufficient for the core challenge; hardware is optional.

## Source and optional preparation

Adapted from Benjamin Tirado, *Simulating Quantum Dynamics: The Transverse-Field Ising Model*, **Moving forward**, BasQ Qiskit Fall Fest 2026. © 2026 Benjamin Tirado. Source text: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). This adaptation combines the introductory model with the project questions, includes a noise comparison in the core assignment, and adds submission and evaluation requirements.

[Optional Ising tutorial](supporting_materials/challenge_3_tutorial.ipynb). Tutorial execution note: the unchanged tutorial passes undecomposed `PauliEvolutionGate` circuits to `StatevectorEstimator`. Current Qiskit can use the exact matrix in this path, hiding the intended Trotter error — synthesize/decompose the evolution before evaluation and verify error-versus-step-size behaviour in your chosen environment before using it to measure product-formula error.
