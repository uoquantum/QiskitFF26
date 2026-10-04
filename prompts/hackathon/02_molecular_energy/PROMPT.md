# Estimate molecular energies with sample-based quantum diagonalization

## Challenge

How accurately can you estimate a molecule's ground-state energy using a limited number of quantum-circuit samples and a small classical subspace?

Build a **sample-based quantum diagonalization (SQD)** workflow. A quantum circuit proposes electronic configurations; a classical computer constructs and diagonalizes the molecular Hamiltonian in a subspace derived from those configurations. Investigate the trade-off between energy accuracy, sampling effort and classical solve cost.

**SQD is the required method. VQE is an optional comparison.**

## Suggested molecular model

Start with neutral **LiH** in the STO-3G basis, with a closed-shell reference (`charge=0`, `spin=0`). Freezing the lowest doubly occupied spatial orbital leaves two active electrons in five spatial orbitals: ten spin orbitals, or ten qubits with an occupation encoding and no qubit reduction. Use one alpha and one beta active electron.

This is deliberately small: its fixed-alpha/beta-number sector has 25 determinants. It supports exact verification and lets you see when sampled subspaces saturate. Reaching the full sector is not evidence of quantum advantage. H₂ is useful for an initial correctness check; the main study should have enough configurations to compare genuinely restricted subspaces. A different small molecule or active space is acceptable with documented choices and an exact reference that remains tractable.

Use at least three bond lengths spanning a near-equilibrium region and stretched bonds. For LiH, 1.4, 1.6 and 2.4 angstrom are illustrative starting points, not a sufficient grid for claiming a precise equilibrium bond length. Keep the basis, electron counts and active-space selection rule consistent across geometries.

## Required work

1. **Define the chemistry problem.** Document geometry and units, charge, basis, orbital choice, frozen orbitals, electron counts and mapping/bit ordering. Construct the corresponding active-space Hamiltonian and compute Hartree–Fock and exact fixed-particle-sector reference energies for the same model.
2. **Generate quantum samples.** Prepare a documented trial state using Qiskit and collect finite-shot computational-basis measurements on a simulator or hardware. Explain circuit initialization and any classical chemistry information used. The supplied chemistry tutorial's CCSD-informed circuit is one option; VQE optimization is not required. Do not use the exact ground-state vector to generate the samples for the main experiment.
3. **Build and solve the sampled subspace.** Preserve sample frequencies, identify distinct configurations, and enforce the intended alpha/beta electron counts. Use `qiskit-addon-sqd` or a documented implementation that constructs the full projected Hamiltonian, including off-diagonal elements, and finds its lowest eigenvalue. State how invalid configurations, duplicates, empty batches and optional reference determinants are handled. Averaging bitstring diagonal energies is not SQD.
4. **Compare accuracy and cost.** Report SQD, Hartree–Fock and exact total energies across the chosen geometries. Include a baseline that samples uniformly from valid configurations and uses the same subspace-construction rules and comparable sampling and classical-solve budgets. Report actual subspace dimensions for both methods; the same shot count need not produce the same dimension. Explain whether the quantum samples provide a useful selection of configurations.
5. **Vary the budget.** At a fixed geometry, compare at least three settings of one resource variable, such as shots or retained subspace size, while holding other settings fixed. Choose at least some settings below the full-sector size. Repeat with at least three sampling seeds and report the spread in energy errors, distinct configurations and solve dimensions. Record the cost of all batches, repeats and any circuit optimization or classical state preparation.
6. **Test one design choice.** Isolate a choice such as circuit depth, trial-state preparation, subspace selection or configuration recovery. Compare it under a stated budget and explain when it helps and when it does not. Conclude which workflow gives the most useful accuracy/cost trade-off in your experiment.

Include nuclear repulsion and frozen-core offsets consistently, without double counting. Report energy errors in hartree or millihartree and state the units. The exact reference is exact within the chosen finite Hamiltonian and particle sector, not an experimental energy.

## Understanding the task

The basic pipeline is:

**Molecule → trial circuit → measured configurations → selected subspace → classical diagonalization → energy.**

A configuration specifies which spin orbitals are occupied by electrons. Under an occupation encoding, it can be represented by a bitstring. If using a different qubit mapping, explain how measurement outcomes are converted back to occupations before using a fermionic solver.

The subspace contains configurations derived from the samples, so it can be much smaller than the full state space. Diagonalizing its Hamiltonian finds the best energy within that subspace; the quantum circuit does not itself perform this classical solve.

### Common questions

- **Is SQD just VQE with a different name?** No. Here, the circuit provides configurations and the classical subspace eigensolver produces the energy. A VQE parameter-optimization loop is optional.
- **Must we use hardware?** No. Finite-shot circuit sampling on a simulator is sufficient. Enumerating every statevector amplitude does not replace the required sampling study.
- **Do shots equal subspace dimension?** No. Repeated measurements may give the same configuration. The fermionic solver can also construct an alpha-by-beta determinant product space whose size differs from the count of sampled full bitstrings. Report both counts and the actual solve dimension.
- **Is configuration recovery required?** No. It is one possible design study or extension. A clean-sample SQD workflow with another controlled design comparison meets the core scope.
- **Should more shots always improve the energy?** Not for independently sampled, cropped or rebatched runs. For a fixed Hamiltonian, enlarging a genuinely nested subspace cannot raise the exact minimum energy, but arbitrary sampled subspaces need not be nested.
- **What if SQD appears better than the exact reference?** Check Hamiltonian consistency, particle sector, offsets and numerical convergence. A correctly solved projected Hamiltonian gives a variational upper bound to the matching sector's exact ground energy, up to numerical error.
- **What if the random baseline performs just as well?** That is a valid result. Small systems can reach the entire relevant sector quickly; explain saturation and costs rather than claiming a sampling advantage.

## Optional extensions

- Add a documented circuit-noise model or a clearly labeled post-sampling bit-flip model. Compare discarding invalid samples with configuration recovery while controlling shots, batches and solve budgets. A toy bit-flip model is not a calibrated hardware model.
- Investigate recovery iterations. Do not call a one-iteration recovery-and-solve run a "no recovery" baseline; use an explicitly recovery-free workflow for that comparison.
- Compare with VQE using the same chemistry model and transparent total costs, including optimization.
- Extend to a larger active space, another molecule, additional geometries or hardware, keeping a smaller exactly verifiable case.

## Submit

Follow the [shared submission guidelines](../SUBMISSION_GUIDELINES.md). Your public GitHub repository must include a README explaining your problem, approach, data, setup and run steps, experiments, results, limitations and conclusions. Present live on October 10; no recorded video is required.

- Reproducible code, molecular definitions, dependency versions and run instructions.
- Circuit descriptions, sample counts or reproducible sampling instructions, seeds and subspace-construction settings.
- Energy-versus-bond-length results with Hartree–Fock and exact references.
- Error versus sampling/subspace budget, including repeated-seed variability and the random baseline.
- Distinct full configurations, actual solver dimensions, qubits, compiled depth, two-qubit gates, total shots and classical runtime. Include batches, repeats, preprocessing and any optimization in the costs.
- One controlled design comparison and an evidence-based conclusion about accuracy and resources.

## Evaluation

Correct physics and SQD implementation, fair baselines, reproducibility, transparent accounting of quantum sampling and classical computation, and a clear explanation of the observed trade-offs. A carefully supported negative result is valid. Larger molecules, more shots or using hardware do not establish quantum advantage.

## Preparation and sources

Start with the [three-part SQD preparation series](supporting_materials/sqd/README.md): sample then diagonalize, molecular bitstrings, and the full chemistry pipeline. Adapt its workflow to the small model above; the final tutorial's larger N₂ example is not required. The preparation notebooks have not been re-executed as part of this prompt revision.

Technical references: [official SQD documentation](https://qiskit.github.io/qiskit-addon-sqd/), [quickstart](https://qiskit.github.io/qiskit-addon-sqd/guides/quickstart.html), and [fermionic solver API](https://qiskit.github.io/qiskit-addon-sqd/apidocs/qiskit_addon_sqd.fermion.html). The quickstart includes synthetic random inputs to illustrate postprocessing; this challenge additionally requires actual quantum-circuit sampling and a separate random baseline.

This event revision replaces the earlier required HeH⁺ VQE experiment with SQD. The original chemistry direction was adapted from Benjamin Tirado, *Ground-State Energy of a Molecule with VQE*, **Moving forward**, BasQ Qiskit Fall Fest 2026, © 2026 Benjamin Tirado, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The [H₂ VQE tutorial](supporting_materials/challenge_1_tutorial.ipynb) is retained for the optional VQE comparison; preserve its original credits and license notices. The SQD investigation and resource comparisons above are event requirements.
