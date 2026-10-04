# Organizer notes

## Selection and provenance

The USask PDF and McGill presentation are the two existing standalone project briefs. The BasQ notebooks contain genuine assignments under **Moving forward**. Those sections are now adapted into standalone prompts; the worked code is in each matching challenge's `supporting_materials/` folder. See the [materials index](supporting_materials/README.md) for all paths.

For a general application hackathon, prioritize portfolio optimization, molecular energy, and quantum dynamics. Architecture and the error-protection game suit experienced teams. The game offers more freedom in software and presentation design.

Classroom notebooks remain in `prompts/in-the-classroom with grader/`. Prompt 02 now requires sample-based quantum diagonalization (SQD); VQE is an optional comparison. The SQD sequence in `02_molecular_energy/supporting_materials/sqd/` provides preparation for the main workflow. The prompt suggests a small LiH model and explicit sampling/subspace comparisons; the larger N₂ tutorial is not required. No scientific notebook was edited or re-executed in this prompt revision.

## Event decisions

- Set duration, team size, deadline, and presentation length.
- Choose track-specific prizes or a common rubric. USask and McGill have different source rubric weights.
- The new briefs allow simulators for their core work. Establish hardware allocations and shot limits before making hardware mandatory.
- Portfolio teams may define reproducible instances in this draft. Supply common test instances if ranking teams numerically against each other.
- Compare chemistry and dynamics within documented models and budgets. Larger systems or more hardware time should not automatically earn higher scores.

## Quantum architecture: open-design scope

Prompt 04 and its reveal slide use the approved open-design scope. Teams supply indexed coupling graphs, fixed output ports, native gate sets, noise parameters and execution conventions. The adapted handout supersedes the original PDF's shared-benchmark requirement for this event.

The two hyperbolic reference papers are in `04_quantum_architecture/references/`; the Qiskit applications review is shared through the materials index. They support model design. Judge controlled comparisons and documented assumptions; raw fidelity from different team-defined noise models is not directly comparable.

## Quantum error game: proposed scope

Prompt 05 adds a playable-loop deliverable, accepted interfaces, baseline comparison, and submission list to the source presentation. These are proposed event requirements.

The presentation suggests a Clifford-versus-T-gate comparison. The reviewed [qiskit-paulice documentation](https://github.com/Qiskit/qiskit-paulice) documents Clifford support and lists non-Clifford support as future work. That comparison is not required by the new prompt; define a supported approach before adding it.

## Quantum dynamics: tutorial execution issue

The unchanged tutorial passes undecomposed `PauliEvolutionGate` circuits to `StatevectorEstimator`. Current Qiskit can use the exact matrix in this path, hiding the intended Trotter error. Synthesize/decompose the evolution before evaluation and verify error-versus-step-size behaviour in the chosen environment.

This finding came from static inspection and the [gate documentation](https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.circuit.library.PauliEvolutionGate), together with the [statevector implementation](https://github.com/Qiskit/qiskit/blob/main/qiskit/quantum_info/states/statevector.py). The copied tutorial has not been patched or executed.

## Environment and attribution

- Test dependencies and local execution paths.
- Restore or adjust the missing `logo_cropped.png` referenced by the BasQ tutorials.
- Preserve Benjamin Tirado's credits, CC BY 4.0 text license, and Apache 2.0 code notices. Each adaptation identifies its source and changes.
- Keep the original PDF and presentation available alongside their summaries.

## QML tracks 06–10

These five original briefs extend the quantum-chemistry, materials, and sustainability themes. Their core work includes a scientifically meaningful decision, a representation or model ablation, competitive classical comparisons, held-out evaluation, and measurement/resource analysis. They are aimed at teams ready to build beyond the two QML preparation notebooks.

### Difficulty and scientific focus

| Track | Main investigation | Preparation burden |
| --- | --- | --- |
| 06 — Biodegradability | Screening yield under a constrained false-positive rate | Lowest: numeric descriptors are supplied by UCI |
| 07 — Molecular properties | Label efficiency, physical invariance, and transfer to unseen formulas | Moderate: QM9 filtering and molecular features |
| 08 — Materials screening | Band-gap prediction versus useful candidate selection | Moderate: composition descriptors and chemically meaningful pools |
| 09 — Carbon capture | Direct working-capacity learning versus subtracting uptake predictions | Substantial: matched isotherms, conditions, descriptors, and material IDs |
| 10 — Catalyst generalization | Transfer to unseen compositions and selection among adsorption placements | Substantial: source mapping, allowed-input descriptors, and configuration grouping |

Track 06 is the most accessible entry point, but its decision constraint and noise study still require a substantial investigation. Tracks 07 and 08 suit chemistry/materials teams. Tracks 09 and 10 suit experienced teams once their data packs have been prepared. Scope these as projects following the introductory labs; full completion needs more time than the guided lab itself.

### Data packs and readiness

No QML data packs or challenge reference implementations have been created in this pass. Public sources are linked in each brief. Before distributing the prompts:

- **06:** Preserve the UCI attribution/license, freeze grouped duplicate handling and stratified split IDs, and check that validation/test negative-class counts make the 5% constraint interpretable. Report statistical uncertainty rather than treating the chosen threshold as a certified safety rate.
- **07:** Provide or verify a QM9 extraction with molecule IDs, formulas, units, accepted records, and enough formula diversity for the held-out-family test. Record geometry provenance. Preserve exclusions and citations from the source release. Precomputed descriptors can reduce installation work while leaving representation changes open to teams.
- **08:** Supply composition descriptors, reduced-formula groups, and the random and unfamiliar-family pools. Verify that the 1–2 eV interval and ten-candidate budget produce a meaningful task. Publish how scores account for pools with fewer than ten in-range materials.
- **09 — required:** Supply a checked CO₂ subset with common temperature, both supported pressure endpoints, consistent uptake units/conventions, matching descriptors, and source provenance. Require at least 100 held-out materials for the specified shortlist. Supply endpoint labels for a fair direct-versus-difference comparison. Extra pressure labels belong to a separately reported extension.
- **10 — required:** Supply a manageable single-adsorbate subset with descriptors computed from permitted initial inputs, correct energy references, catalyst compositions, and grouping IDs for related adsorbate–surface configurations. Ensure held-out systems include multiple placements for the selection experiment. Both familiar- and unfamiliar-composition test sets need enough independent groups for interpretation.

Retain dataset licenses, source identifiers, units, and citations in any distributed pack. Data preparation should preserve physically meaningful variation and prevent closely related records from crossing train/test boundaries.

### Common execution and comparison rules

- Begin with a tractable 2–8-qubit model and a documented subset; choose final data sizes after timing a reference run. Large dataset downloads and new electronic-structure calculations are outside the core work.
- Fix the data, training-label allowance, tuning allowance, and execution budget if teams share a leaderboard. The numerical settings in the briefs are draft event choices, not externally established standards.
- Fit transformations, target scaling, model settings, thresholds, and uncertainty estimates using training/validation data. Freeze the complete experiment before final testing. For organizer-held test sets, collect predictions and compute scores centrally.
- Compare classical and quantum models on the same compressed inputs, then include an uncompressed classical baseline. This distinguishes the circuit's contribution from information lost during compression.
- Require matched label access and candidate sets. An active-learning extension must not query the final test labels. Extra labels, descriptor calculations, and pretrained representations must be disclosed.
- Record qubits, native gate set, compiled depth, two-qubit gates, model/objective evaluations, circuit executions, total shots, and elapsed runtime. Include tuning and repeats. Statevector inference has no physical shots; separate it from shot-based sampling and hardware costs.
- Accept well-supported negative results. Judge validity of the research question, physical consistency, leakage prevention, strength of the ablation, and the accuracy/resource conclusion. Do not award points merely for beating one weak baseline, increasing qubit count, or claiming quantum advantage.

The QML briefs define investigations and submission requirements. The optional preparation notebooks supply working learning examples; the domain-specific project solutions remain for the teams to develop.

## Validation status

The briefs and supporting-material locations have been organized. Scientific experiments and hardware access have not been tested in this organization pass. Moved PDF and notebook contents were preserved and verified by SHA-256 hashes; Markdown links were updated. No benchmark/data pack for prompts 04, 09, or 10 was found elsewhere in `prompts/`.

The QML additions were reviewed for required sections, local links, metric definitions, and consistency between data access, splitting, and evaluation. Their proposed scientific experiments and data extraction workflows have not been executed. Validation of the separate QML teaching notebooks is recorded in [their instructor guide](../../notebooks/QML_LAB_GUIDE.md).
