# Predict adsorption energies on unfamiliar catalysts

## Challenge

A catalyst-screening model is useful only if it can predict systems beyond the ones it has already seen. Build a quantum learning model for adsorption energies and determine how its predictions change when the catalyst composition is unfamiliar.

Your team must distinguish learning transferable structure–property relationships from recognizing closely related configurations. Investigate this generalization problem under a fixed data and quantum resource budget.

## System and target

Use a curated, single-adsorbate subset of the [Open Catalyst 2020 dataset](https://github.com/facebookresearch/fairchem/blob/main/docs/catalysts/datasets/oc20.md). State the adsorbate, target energy definition, reference convention, units, and available input geometry. The core target is the reference energy associated with a relaxed adsorbate–surface configuration, predicted from inputs available before relaxation.

Do not mix adsorption energies, unreferenced total energies, and energy differences. Adsorption energy contributes to catalyst screening, but it alone does not determine reaction rates or overall catalytic performance.

**Draft dependency:** the event must supply a manageable subset with numeric descriptors computed from allowed inputs, source IDs, catalyst compositions, configuration-group IDs, energy conventions, and verified labels. Downloading the full OC20 dataset, performing new DFT relaxations, and training an atomistic foundation model are outside the core assignment.

## Required work

1. Audit the reference data and descriptor provenance. Exclude relaxed coordinates, forces, or other information unavailable at prediction time. Group related placements and trajectory records so they cannot cross a split. Define an unseen-composition test set as well as a test set containing new configurations of represented compositions.
2. Implement quantum-kernel regression or a variational regressor in Qiskit. Explain how the representation captures both catalyst composition and the adsorbate's local environment. Check relevant invariances or document those guaranteed by the supplied descriptors.
3. Compare against mean prediction, an RBF regressor, and a tree-based regressor. Include matched compressed inputs and a classical baseline before compression. Choose all preprocessing and hyperparameters using training/validation data only.
4. Evaluate both held-out regimes with frozen model choices. Report MAE and RMSE in eV, per-composition errors, and the difference between familiar- and unfamiliar-composition performance. Report variation across at least three training or initialization seeds. Preserve the test sets across these runs.
5. Perform a controlled representation ablation: composition-only versus composition plus local geometry. Keep data, quantum model family, and tuning allowance comparable; expose any change in qubit count or input compression. Determine whether local geometry improves transfer or mainly improves familiar-system fitting.
6. For catalyst–adsorbate systems with several held-out initial placements, select the placement predicted to give the lowest relaxed energy. Report selection regret relative to the best reference energy among the supplied placements, with random selection as a baseline. This is a finite candidate-set comparison, not a claim to find the global adsorption minimum.
7. Repeat a selected model's inference with finite shots and one documented noise model. Measure changes in energy error and placement selection, and account for full circuit, shot, and compilation costs.

## Extensions

- Use active learning to select reference calculations under a common acquisition budget.
- Test a second adsorbate with a clearly separated transfer protocol.
- Compare a supplied classical representation with a hybrid model that learns its quantum inputs. Include the representation's training data and cost in the comparison.

## Submit

- Reproducible code, source mappings, energy conventions, input definitions, and split manifests.
- Familiar- versus unfamiliar-composition results and the local-geometry ablation.
- Placement-selection errors and an explanation of the largest generalization failures.
- Accuracy and ranking stability versus quantum cost, including tuning and repeated runs.
- A recommendation about what additional reference data would most improve the model.

## Evaluation

Correct energy definitions, prevention of configuration leakage, strength of the transfer experiment, competitive baselines, and evidence that any benefit survives resource accounting. Larger circuits and lower random-split error alone do not demonstrate better catalyst generalization.

Simulator execution is sufficient; hardware is optional. Shared scores require the same curated subset and grouped test sets.

## Source and optional preparation

Original event prompt based on the [Open Catalyst Project's OC20 data documentation](https://github.com/facebookresearch/fairchem/blob/main/docs/catalysts/datasets/oc20.md). Cite the OC20 dataset paper and record the release and source identifiers. This custom task is not an official OC20 benchmark submission.

[Quantum-kernel lab](../../../notebooks/05_QML_Data_Encoding_and_Quantum_Kernels.ipynb) · [Variational-model lab](../../../notebooks/06_QML_Variational_Classifiers_and_Neural_Networks.ipynb)
