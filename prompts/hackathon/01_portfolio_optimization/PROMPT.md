# Build a quantum portfolio optimizer

## Challenge

You have a collection of assets with estimated returns and risks. Choose exactly **K assets** to obtain a good return while controlling risk. Build a Qiskit solution and investigate how reliably it produces high-quality selections that satisfy the budget.

Your team chooses the encoding, circuit, and optimization strategy. Explain when your choices help and what they cost.

## Required work

1. Define a small, reproducible instance. Supply expected returns, a valid covariance matrix describing risk, K, and your risk preference. Synthetic data is acceptable.
2. State the objective mathematically. For example, minimize risk minus expected return, subject to selecting exactly K assets.
3. Encode and solve the problem using QAOA. Document how your objective or circuit enforces the constraint.
4. Find the exact optimum by enumerating feasible portfolios. Include a simple classical baseline, such as random feasible selection under a stated sampling budget.
5. Investigate how circuit depth and constraint-penalty strength affect solution quality and feasibility. Keep the instance fixed within each comparison.

## Extensions

- Improve initialization, the classical optimizer, or parameter reuse.
- Design a mixer that preserves the budget constraint.
- Scale to larger or more constrained portfolios and compare with a suitable classical solver.
- Explore a quantum learning approach for producing feasible selections, retaining the small QAOA experiment as a reference.
- Study how noise and compilation affect performance.

## Submit

Follow the [shared submission guidelines](../SUBMISSION_GUIDELINES.md). Your public GitHub repository must include a README explaining your problem, approach, data, setup and run steps, experiments, results, limitations and conclusions. Present live on October 10; no recorded video is required.

- Reproducible code and portfolio data.
- The mathematical objective and constraint.
- Best feasible objective, average objective among feasible samples, feasible-sample fraction, and gap to the reference optimum.
- Compiled depth, two-qubit gate counts, total sampling budget, and optimizer evaluations.
- A short explanation of your strongest design choice and its limitations.

## Evaluation

Correct encoding, constraint satisfaction, fair baseline comparisons, resource accounting, and reproducibility. Explain how you handle infeasible outcomes and runs with no feasible sample. An objective gap is preferable to a ratio whose meaning changes when values cross zero.

Simulator execution is sufficient for the core challenge; hardware is an optional extension.

## Source and optional preparation

Adapted from Benjamin Tirado, *Combinatorial Optimization with QAOA: Max-Cut*, **Moving forward**, BasQ Qiskit Fall Fest 2026. © 2026 Benjamin Tirado. Source text: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). This adaptation condenses the project levels and adds explicit submission and evaluation requirements, team-defined reproducible data, and a simulator allowance.

[Optional Max-Cut tutorial](supporting_materials/challenge_2_tutorial.ipynb). The assignment here is portfolio selection.
