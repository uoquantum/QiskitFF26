# Select materials under a limited validation budget

## Challenge

A materials team can investigate only a small number of candidate compositions. Build a QML model that predicts experimental band gaps and uses those predictions to choose candidates within a specified target interval.

Determine whether your model makes better selections as the candidate chemistry becomes less familiar. Investigate the trade-off between prediction error, confidence in the shortlist, and quantum cost.

## Data and selection objective

Use Matbench's **`matbench_expt_gap`**, which contains 4,604 compositions and experimental band-gap targets in eV. Start from composition descriptors; no new electronic-structure calculations are required. See the [official dataset metadata](https://github.com/materialsproject/matbench/blob/main/matbench/matbench_v0.1_dataset_metadata.json).

For the draft benchmark, the target interval is **1–2 eV**, inclusive. Select **K = 10** candidates from a held-out pool of at least 100 compositions without inspecting its labels. The objective is the fraction of the shortlist that lies in the interval. This is a property-screening task; the interval alone does not establish suitability for a solar cell.

## Required work

1. Audit compositions, repeated formulas, and target distributions. Keep the same reduced formula within one split. Create training/validation data and two held-out pools: one from a grouped random split, and one with a chemical family withheld. Define the family from composition before examining its target values; document exclusions and overlap rules.
2. Implement a Qiskit quantum-kernel regressor or variational regressor. Justify the composition representation and quantum input compression. Explain what a composition-only model cannot distinguish, including different structures with the same composition.
3. Compare against mean prediction, an RBF regressor, and a tree-based regressor. Include both matched compressed inputs and a classical baseline using the uncompressed descriptor set. Keep tuning allowances explicit.
4. Design a ranking rule for choosing the ten candidates. Compare point-prediction ranking with one uncertainty-aware rule, using an ensemble, residual model, or another justified method. Fit uncertainty estimates or calibration on training/validation data only.
5. Freeze both ranking rules before opening either pool's labels. Report MAE, RMSE, precision among the ten selections, and the number of in-range materials found. Compare with random selection and the oracle maximum achievable in each pool. If fewer than ten candidates meet the target, expose that limitation in the attainable score.
6. Investigate one controlled representation or circuit change and its effect on both regression and selection quality. Compare at least three settings of one resource variable and include a finite-shot or noisy inference comparison. Explain any changes in the shortlist near the interval boundaries.

## Understanding the task

Imagine you can investigate only ten materials. Learn from compositions with known experimental band gaps, then choose ten from each unseen candidate pool before revealing its reference labels.

A **band gap** is the energy separation between the valence-band maximum and conduction-band minimum. **eV** (electronvolt) is a unit of energy. Composition descriptors turn element identities and proportions into numerical inputs; they do not specify crystal structure.

If seven of your ten selected materials have reference gaps in the inclusive 1–2 eV interval, precision@10 is 70%. This is an example, not an expected result. If a pool of 100 has 20 in-range materials, uniform random selection of ten finds two on average. Compute the oracle maximum only after labels are revealed, as an evaluation reference.

### Common questions

- **Must we synthesize or measure materials?** No. Evaluate selections using the existing experimental labels.
- **The labels are public; why hide them?** Treat held-out labels as unavailable until predictions and ranking policies are frozen. Otherwise you have used the answer to choose the candidates.
- **What is uncertainty-aware ranking?** A policy using uncertainty as well as predicted values, such as estimated probability of falling in the target interval. Fit or calibrate it on training/validation data only.
- **What if fewer than ten predictions are in range?** Still select ten using a fallback and tie rule declared before inspecting pool labels.
- **What if only six pool materials really qualify?** The highest attainable precision@10 is then 60%. Report this limitation.
- **Is lower prediction error enough?** No. A model can have lower MAE but make a worse shortlist. Report both regression error and selection quality.
- **Does the interval identify good solar-cell materials?** No. Band gap alone does not establish device suitability.
- **Can different teams' precision scores be ranked directly?** Only with shared pools and comparable budgets. Otherwise compare the quality of the controlled studies.

## Extensions

- Simulate sequential discovery: reveal labels only for acquired candidates and compare acquisition policies under the same label budget.
- Explore a second target interval declared before evaluation.
- Add an elemental-availability constraint using a cited, frozen source and evaluate the resulting selection trade-off.

## Submit

Follow the [shared submission guidelines](../SUBMISSION_GUIDELINES.md). Your public GitHub repository must include a README explaining your problem, approach, data, setup and run steps, experiments, results, limitations and conclusions. Present live on October 10; no recorded video is required.

- Reproducible features, code, split identifiers, family definition, and ranking policies.
- Predicted and reference gaps for the shortlisted materials, with uncertainty where provided.
- Random-pool and unfamiliar-family results, including random and oracle selection references.
- An ablation and plots of selection quality versus quantum resources.
- A discussion of failed selections, composition ambiguity, and limits of the proposed application.

## Evaluation

Quality of the selection decision, valid uncertainty analysis, chemical generalization, fair baselines, and complete resource accounting. Evaluate the quantum contribution separately from the effect of preprocessing and ranking policy. A model may improve MAE without improving the shortlist; explain that outcome.

Simulator execution is sufficient; hardware is optional. Event-wide numerical ranking requires shared pools, descriptors, and budgets.

## Source and optional preparation

Original event prompt. Data source: [Matbench, Materials Project](https://docs.materialsproject.org/services/ml-and-ai-applications/matbench). Cite the underlying experimental dataset identified in its metadata. The interval, shortlist size, and family experiment are proposed event rules; custom subsets are not official Matbench leaderboard results.

[Quantum-kernel lab](../../../notebooks/05_QML_Data_Encoding_and_Quantum_Kernels.ipynb) · [Variational-model lab](../../../notebooks/06_QML_Variational_Classifiers_and_Neural_Networks.ipynb)
