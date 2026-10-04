# Screen chemicals under an environmental error constraint

## Challenge

A chemical-screening team wants to identify readily biodegradable candidates while limiting how often it incorrectly recommends a chemical that is not readily biodegradable. Build a Qiskit learning model and determine whether its representation improves this decision under limited training data and quantum resources.

Your objective is to recover useful candidates while respecting an error constraint. Investigate the trade-off between screening yield, reliability, and quantum execution cost.

## Data and decision

Use the [UCI QSAR Biodegradation dataset](https://archive.ics.uci.edu/dataset/254/qsar%2Bbiodegradation): 1,055 chemicals, 41 molecular descriptors, and ready/not-ready biodegradability labels. The classes are imbalanced.

Let ready biodegradability be the positive class. Choose a score threshold on validation data to maximize true-positive rate subject to a false-positive rate of at most **5%**. A false positive means recommending a not-ready-biodegradable chemical. This threshold is an event benchmark choice, not an environmental safety standard. Report uncertainty: a small validation set cannot certify a population error rate of 5%.

## Required work

1. Audit the data, report class counts and duplicate descriptor rows, and publish fixed training, validation, and test assignments. Keep duplicate feature rows within one split. Fit all scaling, feature selection, and compression using training data only.
2. Build a quantum-kernel classifier or variational classifier in Qiskit. Specify the input representation, feature map or ansatz, readout, loss, and decision score. Begin with a tractable 2–8-qubit model and justify how the descriptors are compressed.
3. Compare with a majority-class reference, a tuned RBF SVM, and a tree-based classifier. Compare models using the same compressed inputs; also report a classical baseline using all descriptors to expose information lost in compression.
4. Freeze the operating threshold using validation data. On the test set, report true-positive rate, false-positive rate, precision, balanced accuracy, and the number of recommended chemicals. Include uncertainty and say whether the observed constraint is met. A system that recommends nothing must be identified explicitly.
5. Test whether the quantum representation matters. Compare the proposed circuit with one controlled alternative, such as an unentangled feature map, a different encoding, or a shallower ansatz. Use the same data and tuning allowance.
6. Compare at least three settings of one resource variable—qubits, circuit depth, or shots—and examine screening yield versus cost. Include exact local results and one finite-shot or noisy comparison with frozen model choices. Do not reselect thresholds using the test labels.

## Extensions

- Add an abstention rule that sends uncertain cases for further testing; account for coverage and errors among accepted cases.
- Study learning curves or a deliberately shifted descriptor distribution.
- Investigate calibration, class weighting, or initialization with a controlled validation protocol.

## Submit

Follow the [shared submission guidelines](../SUBMISSION_GUIDELINES.md). Your public GitHub repository must include a README explaining your problem, approach, data, setup and run steps, experiments, results, limitations and conclusions. Present live on October 10; no recorded video is required.

- Reproducible code, split identifiers, preprocessing, and selected model settings.
- A screening-results table and plots of yield versus error and quantum cost.
- The encoding ablation, uncertainty analysis, and a failure analysis of false positives.
- Qubits, compiled depth, two-qubit gates, model evaluations, circuits, total shots, and runtime, including tuning.
- A recommendation about when the model is useful and when it should defer to further evidence.

## Evaluation

Correct decision metrics, treatment of imbalance and uncertainty, fair comparisons, evidence that the representation affects learning, and an honest accuracy/resource trade-off. Beating the classical baseline is not required; a well-supported negative result is valuable. Biodegradability labels alone do not establish overall chemical safety.

Simulator execution is sufficient. Hardware is optional. Agree on common splits and execution budgets before comparing teams numerically.

## Source and optional preparation

Original event prompt. Dataset: Mansouri et al., *QSAR biodegradation*, UCI Machine Learning Repository, [DOI](https://doi.org/10.24432/C5H60M), CC BY 4.0. The screening constraint and submission requirements are proposed event rules.

[Quantum-kernel lab](../../../notebooks/05_QML_Data_Encoding_and_Quantum_Kernels.ipynb) · [Variational-model lab](../../../notebooks/06_QML_Variational_Classifiers_and_Neural_Networks.ipynb)
