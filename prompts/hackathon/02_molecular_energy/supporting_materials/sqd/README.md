# SQD preparation for prompt 02

Use this sequence for the required sample-based quantum diagonalization workflow in [prompt 02](../../PROMPT.md). VQE is now an optional comparison.

1. [Sample, then diagonalize](01_sample_then_diagonalize.ipynb) — sampling and subspace diagonalization on a spin model.
2. [Molecules as bitstrings](02_molecules_as_bitstrings.ipynb) — molecular configurations and the classical diagonalization step.
3. [The full SQD pipeline](03_the_full_sqd_pipeline.ipynb) — circuit sampling and configuration recovery for a chemistry calculation.

Read in order. Each notebook has its own setup cell and dependencies; the final notebook includes a substantially heavier chemistry calculation. Adapt its workflow to the prompt's suggested small LiH model, or another justified small model. Running the complete N₂ example is not required. These notebooks were not edited or re-executed as part of this prompt revision.

The core experiment needs finite-shot circuit samples, Hartree–Fock and exact references, a uniform-valid-configuration sampling baseline, and accuracy versus resource comparisons. Report distinct sampled configurations separately from the actual classical solver dimension. Configuration recovery is optional; a one-pass recovery-and-solve call is not a no-recovery baseline. See the prompt for the complete requirements.

Previous locations: notebook 1 was in `prompts/basque/`; notebooks 2 and 3 were directly in `prompts/`.
