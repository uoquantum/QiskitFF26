# Learn molecular properties with limited reference calculations

## Challenge

Accurate reference calculations can limit the number of labeled molecules available to a discovery workflow. Build a quantum learning model for molecular dipole moments and investigate how much reference data it needs to reach a useful prediction error.

Your team must defend both the molecular representation and its ability to generalize. A model that interpolates among familiar compositions may fail on a new family of molecules.

## Molecular model and data

Use a documented subset of [QM9](https://quantum-machine.org/datasets/) with atomic identities, molecular geometries, and reference dipole-moment magnitudes. Report the target in **debye**. The labels and optimized geometries come from quantum-chemical calculations; they are reference values within that calculation method, not experimental measurements.

Build inputs from composition and geometry. Exclude the target and descriptors that directly reconstruct it. Account for any computed inputs: using an optimized geometry assumes that geometry is already available.

## Required work

The explanations and common questions below clarify these requirements without changing their scope.

1. Define a reproducible subset with molecule identifiers, units, filtering, and enough distinct molecular formulas to support a meaningful held-out-family study. Reserve a test set of molecular formulas absent from training and validation, and a separate test set of unseen molecules from represented formulas. Report the resulting distribution differences.
2. Construct a molecular representation and explain its response to atom reordering, translation, and rotation. Dipole magnitude is invariant under these transformations. Demonstrate these checks on transformed copies of several molecules; keep all copies out of additional data splits.
3. Implement quantum-kernel regression or a variational quantum regressor in Qiskit. Define feature scaling, input compression, output scaling, and optimization. Explain how a bounded circuit expectation becomes a prediction with physical units.
4. Compare with mean prediction, RBF kernel ridge regression or SVR, and a tree-based regressor. Give the quantum and classical models the same inputs and splits, and include a classical model before quantum input compression.
5. Build learning curves at **three or more nested training-set sizes** under a declared tuning budget. Evaluate both held-out regimes using frozen choices. Report MAE, RMSE, and variation across at least three training-subset or initialization seeds. Do not use those test results to select a final setting.
6. Isolate one representation choice, such as composition-only versus geometry-aware inputs, entanglement pattern, or data re-uploading. Identify whether its benefit persists after accounting for training-set size and cost.
7. Repeat a selected inference comparison with finite shots or documented noise. Quantify how the additional prediction error changes the label-efficiency conclusion.

## Understanding the task

**QM9 is a dataset**, with approximately 134,000 small molecules containing carbon, hydrogen, oxygen, nitrogen and fluorine and up to nine non-hydrogen atoms. It supplies atomic identities, optimized 3D geometries and calculated properties; the source is linked above. For this project, composition and geometry provide the inputs, and dipole-moment magnitude is the target label.

Dipole magnitude measures the strength of molecular charge separation and is reported in debye. Rotating a molecule rotates its dipole vector but leaves its magnitude unchanged. Translation and reordering the input atoms should also leave the magnitude prediction consistent.

"Fewer labels" means fewer training molecules with known target values. Compare nested training sets, where each smaller set is contained in the next larger set. Test separately on unseen molecules from represented formulas and molecules whose formulas were entirely excluded from training and validation. Keep familiar test formulas represented at every training size.

### Common questions

- **Must we use all of QM9?** No. Use a documented manageable subset with enough molecular formulas for both test regimes.
- **Must we calculate new dipoles?** No. Use the supplied reference labels. The assumed availability of optimized geometries must still be stated.
- **Where is the quantum component?** In the quantum kernel or variational regression circuit you build; QM9 supplies the data.
- **Can we use composition alone?** The main model must use composition and geometry. Composition-only inputs are a useful controlled comparison.
- **Must the quantum model beat classical ML?** No. Compare fairly, report uncertainty and explain the result. The required learning curves, three seeds, invariance checks and finite-shot/noisy comparison remain part of the task.

## Extensions

- Use active learning to choose the next molecule to label, comparing with random acquisition from the same pool and keeping final test labels unavailable.
- Learn the correction to a cheaper reference method, provided matched reference calculations are supplied and their cost is counted.
- Extend to polarizability or an energy target, documenting the additional physical conventions.

## Submit

Follow the [shared submission guidelines](../SUBMISSION_GUIDELINES.md). Your public GitHub repository must include a README explaining your problem, approach, data, setup and run steps, experiments, results, limitations and conclusions. Present live on October 10; no recorded video is required.

- Reproducible data selection, molecular features, split manifests, and code.
- Invariance checks, learning curves, and separate results for familiar and unseen formulas.
- A representation ablation and analysis of the worst-predicted molecular families.
- Error versus labeled-data count and quantum cost, including preprocessing, tuning, circuits, shots, and runtime.
- A conclusion about whether the model reduces reference-data needs within this study.

## Evaluation

Physical consistency, prevention of leakage, meaningful generalization tests, baseline quality, and evidence connecting the representation to the observed learning curves. Small-dataset accuracy does not establish a computational advantage. Report uncertainty rather than claiming a universal minimum number of labels.

Simulator execution is sufficient; hardware is optional. No new electronic-structure calculations are required for the core task.

## Source and optional preparation

Original event prompt using [QM9 and its cited source publications](https://quantum-machine.org/datasets/). Preserve source attribution and document the downloaded release and exclusions. Grouped holdouts and budget comparisons are proposed event requirements.

[Quantum-kernel lab](../../../notebooks/05_QML_Data_Encoding_and_Quantum_Kernels.ipynb) · [Variational-model lab](../../../notebooks/06_QML_Variational_Classifiers_and_Neural_Networks.ipynb)
