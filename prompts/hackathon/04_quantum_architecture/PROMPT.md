# Design better connections for quantum entanglement

## Challenge

Prepare and verify a Bell pair between two designated output ports on three processor models. Investigate how connectivity affects routing cost and noise sensitivity, then test one justified strategy for detecting or protecting against errors.

The target is |Φ⁺⟩ = (|00⟩ + |11⟩)/√2.

## Processor models

- A five-qubit, 2016-inspired reference.
- A contemporary IBM-style backend snapshot or fake backend.
- A finite coupling graph inspired by a hyperbolic lattice.

This event uses an **open-design scope**. Teams choose and publish reproducible processor definitions: indexed coupling graphs, two output ports per graph, native gate sets and noise assumptions. State the source/version of any backend snapshot. Choose layout, routing and protection within these documented definitions.

Keep each model's graph and output ports fixed across the three conditions below. Use the same noise assumptions for its protected and unprotected cases. Control or explain differences in gate sets and noise across processor models so you can distinguish connectivity effects from other changes. No organizer-supplied executable benchmark is required for this adapted scope.

## Required work

For each processor model, compare:

1. Ideal execution.
2. Noisy execution without protection.
3. Noisy execution with your chosen protection or detection strategy.

This produces nine core cases. Strategies may include parity/stabilizer checks, syndrome postselection, or a geometry-aware encoding.

Verify the Bell pair using XX, YY, and ZZ correlations:

\[
F_{\Phi^+}=\frac{1+\langle XX\rangle-\langle YY\rangle+\langle ZZ\rangle}{4}.
\]

Report uncertainty. Matching Z-basis outcomes alone do not verify the target state's coherence.

## Submit

Follow the [shared submission guidelines](../SUBMISSION_GUIDELINES.md). Your public GitHub repository must include a README explaining your problem, approach, data, setup and run steps, experiments, results, limitations and conclusions. Present live on October 10; no recorded video is required.

- A reproducible notebook with assumptions and recorded results.
- The three coupling graphs, marked ports, and compiled circuits.
- Fidelity, depth, two-qubit gates, routing/SWAP overhead, and physical qubits including ancillas for all nine cases.
- Acceptance fraction and discarded-shot counts for postselection.
- An explanation of whether protection compensates for its overhead.
- One evidence-based recommendation for future quantum hardware or software.

Distinguish connectivity effects from differences in noise or gate set. Simulator execution is sufficient; report optional hardware experiments separately. Compare teams on the quality of their controlled experiments rather than raw fidelity under different noise assumptions.

## Source judging rubric

| Criterion | Weight |
| --- | ---: |
| Scientific correctness and reproducibility | 30% |
| Architecture comparison | 20% |
| Protection or error-detection strategy | 20% |
| Effective use of Qiskit | 15% |
| Evidence for the future-system recommendation | 10% |
| Presentation clarity | 5% |

## Source

Organizer summary of Steven Rayan / quanTA, University of Saskatchewan, *Geometry-aware quantum cloud challenge*, Qiskit Fall Fest 2026. See the [original project brief](Qiskit%20Fall%20Fest%20Challenge%20Hyperbolic%20Futures%20-%20quanTA%20USask.pdf) for full requirements and experience-level suggestions.

Event adaptation: the source's shared-benchmark requirement is replaced by the team-defined, documented models above. The original PDF is preserved for attribution and background; follow this adapted handout for the event scope. The table above records the source rubric, not a newly confirmed event-wide weighting.

### Supporting references

- [Crystallography of hyperbolic lattices](references/Reference%20-%20Hyperbolic%20Lattices.pdf) — geometric background for lattice-inspired connectivity.
- [Systematic approach to hyperbolic quantum error correction codes](references/Reference%20-%20Hyperbolic%20QEC.pdf) — background on hyperbolic CSS codes and their construction.
- [The evolution of Qiskit: a review of its applications](../supporting_materials/Reference%20-%20Evolution%20of%20Qiskit%20Features.pdf) — general background shared across tracks; use current API documentation for implementation.

These papers provide background for choosing the hyperbolic-inspired graph and protection strategy. Teams must supply their own explicit graph, ports, gate set and noise settings as part of the submission.
