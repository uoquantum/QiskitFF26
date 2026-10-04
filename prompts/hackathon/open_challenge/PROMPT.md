# Open challenge: choose your own problem

## Challenge

Choose a problem within one or more of this year's themes, build a working Qiskit prototype, and investigate whether your approach is useful under a stated resource budget.

| Theme | Possible direction |
| --- | --- |
| Quantum Machine Learning | Classification, regression, quantum kernels or hybrid learning models. |
| Quantum Chemistry | A small molecular simulation or an investigation of chemical properties. |
| Materials Science | Predicting or simulating a material property. |
| Sustainability | A quantum approach to an energy, climate or resource-use problem. |

These directions are examples. You may define another problem within the themes or combine themes. Explain the connection in your README and presentation. Use an accessible public dataset, a documented synthetic instance or a fully specified physical model; choose a scope you can complete during the event.

## Required work

1. State the problem, intended use, inputs, outputs and at least one measurable success criterion.
2. Implement a working quantum component using Qiskit and explain how it contributes to the approach.
3. Document data sources or model assumptions, preprocessing, experiment settings and a resource budget. Keep test data separate from model selection when using machine learning.
4. Compare against a suitable classical method, exact reference or simpler approach under comparable conditions.
5. Change one meaningful design choice and measure its effect on performance and resource use.
6. Present actual results, discuss limitations and answer the original research question. Distinguish evidence from proposed future work.

The specific numerical requirements of prompts 01–08 do not automatically apply to this open challenge. Choose and justify your own metrics and experiment size.

## Submit

- A runnable prototype or notebook, with data or reproducible data-access instructions.
- Results and a clear baseline comparison, with resource costs relevant to your method.
- Slides explaining the problem, approach, evidence and conclusions.
- A public GitHub repository with a comprehensive README explaining all work performed, results and conclusions, following the [shared submission guidelines](../SUBMISSION_GUIDELINES.md).

Present live on Saturday, October 10, 2026. No recorded video is required. The submission deadline is October 7, 2026, at 11:59 PM ET.

## Evaluation

Problem relevance and framing, technical depth, learning from controlled experiments, reproducibility, and presentation clarity. Explain the quantum contribution and support claims with evidence. A well-supported negative result is valid; outperforming classical methods or proving quantum advantage is not required.

Simulator execution is sufficient; hardware is optional.

## Preparation

Use the [supporting-materials index](../supporting_materials/README.md), [quantum-kernel lab](../../../notebooks/05_QML_Data_Encoding_and_Quantum_Kernels.ipynb), and [variational-model lab](../../../notebooks/06_QML_Variational_Classifiers_and_Neural_Networks.ipynb) as relevant to your chosen problem.

Original event prompt based on the four themes listed in the event's `src/data/workshops.js`.
