# Shared submission guidelines

These requirements apply to prompts 01–08 and the [open challenge](open_challenge/PROMPT.md), alongside each prompt's technical deliverables.

## Dates and format

- Submit by **Wednesday, October 7, 2026, at 11:59 PM Eastern Time**.
- Present live on **Saturday, October 10, 2026**.
- **No recorded video is required.** The live presentation duration will be communicated by the organizers; the former video limit does not apply.
- Follow the organizers' announcement for the submission destination.

## What to submit

1. Your presentation slides.
2. A public GitHub repository containing your code, a comprehensive **README.md**, and the files or data-access instructions needed to reproduce your work.
3. Relevant supporting documentation, plots, tables and recorded experiment results.

## Required README contents

The README must explain **what you did, how you did it, what happened, and what you conclude**. It should let a reviewer understand the project and reproduce the main experiment without relying on your live presentation.

- **Problem and goal:** chosen prompt or open-challenge theme, motivation, scope and success metric.
- **Data and assumptions:** sources, versions, preprocessing, units, splits or synthetic-instance generation, and any model assumptions. Explain how to obtain data that cannot be included in the repository.
- **Approach:** quantum algorithm, Qiskit's role, circuit/encoding choices, classical components, baselines and reasons for the main design choices.
- **Setup and execution:** dependencies and versions, installation commands, exact run commands or notebook order, seeds, backend/simulator settings, and approximate runtime. Include a manageable way to reproduce the main result.
- **Experiments:** what you tried, settings and budgets, controlled comparisons, and unsuccessful experiments that affect your conclusions. Distinguish completed work from proposed extensions.
- **Results:** actual metrics with units, plots or tables, baseline comparisons, uncertainty where applicable, and quantum/classical resource costs relevant to your prompt. Link supporting outputs from the README.
- **Discussion and limitations:** what worked, what did not, sources of error, and how far the findings can be generalized.
- **Conclusions:** directly answer your original question using the reported evidence and describe useful next steps.
- **Sources and contributions:** cite datasets, papers, tutorials and reused code, preserve applicable attribution, and identify team contributions.

Detailed logs and supplementary analysis can live in linked files; the README must summarize the approach and key findings. Do not provide only installation instructions or an unexplained notebook link.

Simulator execution is sufficient. Hardware is optional. A careful experiment with a negative result is valid; demonstrating quantum advantage is not required.
