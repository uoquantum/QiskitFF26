# Hackathon challenge prompts

Read the **PROMPT.md** files for the assignments. Each defines a problem, required work, deliverables, and evaluation criteria.

**Active choices:** prompts 01–08 and the open challenge below. Read the [shared submission guidelines](SUBMISSION_GUIDELINES.md): every team must provide a public GitHub repository with a README explaining the complete work, results and conclusions. Submit by October 7, 2026, 11:59 PM ET; present live on October 10. No recorded video is required.

| Prompt | Central challenge |
| --- | --- |
| [01 — Quantum portfolio optimizer](01_portfolio_optimization/PROMPT.md) | Find good asset selections while satisfying a budget constraint. |
| [02 — Molecular energy with SQD](02_molecular_energy/PROMPT.md) | Estimate molecular energies from quantum samples and compare accuracy with sampling and classical solve costs. |
| [03 — Quantum dynamics](03_quantum_dynamics/PROMPT.md) | Preserve accurate spin dynamics under a circuit budget and noise. |
| [04 — Quantum architecture](04_quantum_architecture/PROMPT.md) | Compare connectivity and error protection across three processor models. |
| [05 — Quantum error game](05_quantum_error_game/PROMPT.md) | Build a playable experiment about protecting quantum information. |
| [06 — QML biodegradability](06_qml_biodegradability/PROMPT.md) | Recover biodegradable candidates under a false-positive constraint and quantum resource budget. |
| [07 — QML molecular properties](07_qml_molecular_properties/PROMPT.md) | Predict dipole moments with limited labels and test transfer to unseen molecular formulas. |
| [08 — QML materials screening](08_qml_materials_screening/PROMPT.md) | Select materials in a target band-gap range and test shortlist reliability on unfamiliar chemistry. |
| [Open challenge — Choose your own problem](open_challenge/PROMPT.md) | Define a problem in Quantum Machine Learning, Quantum Chemistry, Materials Science or Sustainability. |

## Archived prompts — not part of this reveal

- [09 — QML carbon capture](09_qml_carbon_capture/PROMPT.md).
- [10 — QML catalyst generalization](10_qml_catalyst_generalization/PROMPT.md).

These two briefs remain for reference and require data packs before future use. They are not the new open challenge.

## QML tracks

Prompts 06–10 are original event briefs. Each requires a Qiskit learning model, competitive classical baselines, a controlled design comparison, held-out evaluation, and quantum resource accounting. The core experiments can run on simulators; hardware is optional.

The [kernel lab](../../notebooks/05_QML_Data_Encoding_and_Quantum_Kernels.ipynb) and [variational-model lab](../../notebooks/06_QML_Variational_Classifiers_and_Neural_Networks.ipynb) provide optional preparation. Teams must develop the domain-specific experiments described in each brief.

Prompts 09 and 10 require organizer-supplied data packs before distribution. Common splits, budgets, and candidate pools should also be frozen for any track used in a numerical competition. See [organizer notes](ORGANIZER_NOTES.md#qml-tracks-06-10).

## Sources and status

The USask PDF and McGill presentation are the two existing standalone project briefs. Their originals are retained in tracks 04 and 05.

Prompts 01–03 originated from assignments in the **Moving forward** sections of Benjamin Tirado's BasQ notebooks. Prompt 02 now uses SQD as its core method, with the three-part SQD series as preparation and VQE as an optional comparison. The worked tutorials are stored in each matching challenge's `supporting_materials/` folder. The [supporting-materials index](supporting_materials/README.md) also links architecture reference papers, source briefs, and the shared Qiskit review.

Prompts 06–10 cite their underlying datasets; their challenge designs and evaluation requirements are proposed event wording. No dataset, notebook solution, or tested baseline is bundled with these five briefs.

The adapted handouts define the event tasks. The USask and McGill source rubric weights are preserved as source information; do not assume a common event-wide weighting. Prompt 04 uses team-defined processor models, as on its reveal slide. See [organizer notes](ORGANIZER_NOTES.md) for remaining preparation and experiment-validation details.

Supporting PDFs and notebooks have been moved into the relevant challenge folders with their contents preserved. The BasQ source copies, classroom notebooks, and existing duplicate source briefs elsewhere in `prompts/` are retained. Required benchmark/data packs that were not found are listed in the supporting-materials index.
