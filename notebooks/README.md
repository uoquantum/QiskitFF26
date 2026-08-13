# Notebooks

Drop `.ipynb` files here. This folder isn't part of the built website (it's
not under `public/` or `src/`) — these files just need to exist in this git
repo so Colab can open them straight from GitHub, with zero extra hosting.

Once a notebook is committed and pushed to `main`, it opens directly in
Colab at:

```
https://colab.research.google.com/github/utkarshh-singh/QiskitFF26/blob/main/notebooks/<filename>.ipynb
```

That's the exact URL to use as the `url` field for a notebook entry in
`src/data/learn.js`. To add a new one:

1. Put the `.ipynb` file in this folder
2. Commit and push it to `main`
3. Add an entry in `src/data/learn.js` (under "Try It In Your Browser")
   with the Colab URL above and a title/description
