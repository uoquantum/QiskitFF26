# Rank carbon-capture materials by usable CO₂ capacity

## Challenge

A porous material may adsorb substantial CO₂ but release little of it during regeneration. Build a QML screening model that ranks metal–organic frameworks (MOFs) by the amount of CO₂ they can take up and release between two operating pressures.

Investigate whether modeling the pressure dependence and physical constraints improves candidate selection under a limited training and measurement budget.

## Physical objective and data

At a fixed temperature T, define working capacity as

\[
W(M)=q(M,P_{\mathrm{ads}},T)-q(M,P_{\mathrm{des}},T),
\qquad P_{\mathrm{ads}}>P_{\mathrm{des}},
\]

where q is CO₂ uptake per stated mass or volume of material. Choose pressure endpoints supported by the supplied isotherms. Keep units, temperature, adsorption convention, and simulation provenance consistent.

Use a curated subset of the CO₂ adsorption data and matching material descriptors from [MOFX-DB](https://mof.tech.northwestern.edu/databases). These are computational adsorption results. Working capacity is a screening proxy; it does not include all the factors governing process efficiency, stability, or regeneration energy.

**Draft dependency:** the event must supply a checked subset with material IDs, descriptors, isotherms, units, and fixed operating conditions. Bulk database extraction and simulation of new isotherms are outside the core assignment.

## Required work

1. Validate units and metadata, identify incomplete pressure coverage, and define an interpolation rule using only values inside the observed range. Assign all pressure points and related records for a MOF to the same split. Publish training, validation, and test material IDs.
2. Implement a Qiskit quantum-kernel or variational regressor. Compare two strategies: predict W directly from material descriptors, and predict q from material descriptors plus pressure before taking the difference. Use the same underlying training materials and endpoint labels; disclose any extra isotherm labels used in an extension.
3. Compare with a simple descriptor-ranking heuristic and a tuned classical regressor for each strategy. Use the same descriptor inputs, material splits, and label access. Include an uncompressed classical baseline if quantum inputs are reduced.
4. Check nonnegative uptake and increasing uptake between the selected endpoints. Compare raw predictions with one justified constraint treatment fitted without test labels. Report violations before and after treatment, including whether correction improves or worsens predictive accuracy.
5. Select the **top ten** materials from a held-out pool of at least 100 before revealing their reference working capacities. Report uptake and working-capacity MAE, overlap with the true top ten, and selection regret: the mean reference W of the oracle top ten minus that of the selected ten. Declare a tie convention. Compare against random selection and the descriptor heuristic.
6. Repeat a selected comparison at three shot budgets or noise levels, with model settings frozen. Measure shortlist stability across repeated sampling seeds and explain error propagation when two uncertain uptake predictions are subtracted. Account for any assumed correlation of errors.

## Extensions

- Predict additional pressure points and assess monotonicity across the full observed interval.
- Evaluate generalization to a withheld structural family or source collection when metadata supports the split.
- Add CO₂/N₂ selectivity only with matched data and an explicit definition; pure-gas ratios alone do not establish mixture-separation performance.

## Submit

- A reproducible data audit, code, split manifest, and operating-point definitions.
- Direct-versus-difference predictions, physical-constraint checks, and classical comparisons.
- The shortlist, reference working capacities, ranking metrics, and their sampling variation.
- Resource costs for both approaches, including extra predictions, circuits, shots, tuning, and runtime.
- A recommendation about the most reliable screening strategy and its operating limits.

## Evaluation

Physical consistency, fair use of labels, selection quality, uncertainty propagation, and evidence linking quantum cost to reliable decisions. A high single-pressure uptake score does not satisfy the working-capacity objective.

Simulator execution is sufficient; hardware is optional. All teams should use the same curated materials and conditions for a shared competition score.

## Source and optional preparation

Original event prompt using [MOFX-DB](https://mof.tech.northwestern.edu/databases). Cite the database paper and the original source collections associated with the selected records. Operating conditions, subset, and scoring conventions must be frozen before distribution.

[Quantum-kernel lab](../../../notebooks/05_QML_Data_Encoding_and_Quantum_Kernels.ipynb) · [Variational-model lab](../../../notebooks/06_QML_Variational_Classifiers_and_Neural_Networks.ipynb)
