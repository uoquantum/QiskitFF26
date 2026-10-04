# Build a game about protecting quantum information

## Challenge

Create a playable prototype in which players make decisions about protecting a quantum computation against errors. Connect player choices to a quantum experiment or error model and show the consequences quantitatively.

Players could place checks under a gate budget, choose mitigation under a measurement budget, or infer corrections from syndrome measurements.

## Choose one technical track

### Error detection

Choose a payload circuit, add checks, and identify runs to discard. Give players control over check placement or the number of checks. Measure output quality together with additional gates, ancillas, and the fraction of accepted shots.

### Error mitigation

Choose an observable with an ideal reference value. Let players select or tune techniques for improving its noisy estimate. Compare unmitigated and mitigated estimates under a stated resource budget, including error, uncertainty, and measurement cost.

### Error correction

Build a surface-code scenario where players interpret syndrome information or choose a decoding strategy. Implement or integrate a justified decoder. Measure logical success/failure and decoding time across repeated trials, with the code and noise assumptions documented.

## Required work

1. Define the player's objective, available actions, and resource budget.
2. Implement one complete playable loop. A notebook interface or command-line game is acceptable for this draft scope.
3. Integrate Qiskit into the quantum component and explain its role.
4. Compare two strategies or one strategy against a baseline on the same test cases.
5. Explain what the game teaches and which physical details it simplifies.

## Submit

Follow the [shared submission guidelines](../SUBMISSION_GUIDELINES.md). Your public GitHub repository must include a README explaining your problem, approach, data, setup and run steps, experiments, results, limitations and conclusions. Present live on October 10; no recorded video is required.

- A runnable prototype with instructions.
- A short demonstration of a complete round.
- Reproducible benchmarks and a performance comparison.
- An explanation of the quantum method, player decisions, resource costs, and limitations.

## Source judging rubric

| Criterion | Weight |
| --- | ---: |
| Qiskit integration | 10% |
| Methods: creativity and accurate QEC content | 20% |
| Effect: insight and contribution | 30% |
| Presentation and justification of design | 40% |

## Source and adaptation

Based on Wenyu Sun, McGill University, *QFF 2026 Hackathon: Gamifying Error Detection, Mitigation and Correction*. The [original presentation](McgillQFF%202026%20%20-%20%20Read-Only.pptx) supplies the theme, tracks, and rubric.

The playable-loop requirement, accepted interfaces, baseline comparison, and submission list are proposed event additions. Hardware execution is optional in this draft scope.

Optional advanced reading: [Systematic approach to hyperbolic quantum error correction codes](../04_quantum_architecture/references/Reference%20-%20Hyperbolic%20QEC.pdf). This is background for broader QEC exploration; the error-correction track above retains its surface-code scope.
