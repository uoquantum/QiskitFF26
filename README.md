# Qiskit Fall Fest — uOttawa

A dark, cyber-quantum themed static site: React + Vite + Tailwind CSS + React Three Fiber + Framer Motion. Built for GitHub Pages.

## 1. Install & run locally

```bash
npm install
npm run dev
```

## 2. Before deploying — set your repo name

Two places need your exact GitHub repo name (case-sensitive):

**`vite.config.js`**
```js
base: '/your-repo-name/',
```

**`package.json`** (optional, only needed for the manual `gh-pages` deploy script)
```json
"homepage": "https://your-username.github.io/your-repo-name/"
```

If you're deploying to a `<username>.github.io` root repo or a custom domain, set `base: '/'` instead.

## 3. Deploy

**Option A — GitHub Actions (recommended, already included)**
Push to `main`. `.github/workflows/deploy.yml` builds and deploys automatically.
In your repo: **Settings → Pages → Source → GitHub Actions**.

**Option B — Manual, via the `gh-pages` package**
```bash
npm run deploy
```
Then in **Settings → Pages**, set the source branch to `gh-pages`.

Routing uses `HashRouter` (URLs look like `/#/schedule`), so there's no server-side rewrite needed and refreshing any page works out of the box on GitHub Pages.

## 4. Connect the registration form

`src/pages/Register.jsx` posts JSON to `FORM_ENDPOINT`. Swap in a real
[Formspree](https://formspree.io) endpoint, a Google Form action URL, or your own backend.

## 5. Project structure

```
src/
  components/
    layout/     Navbar, Footer, Layout shell, page transition wrapper
    three/      BlochSphere, ParticleField, QuantumCanvas (hero), QubitLattice (ambient bg)
    ui/         GlowButton, GlassCard, SectionHeading, Reveal (scroll-in animation)
  data/         content.js — all copy/data in one place, edit here first
  pages/        Home, Schedule, Speakers, Workshops, Register, Faq, About, Contact, NotFound
```

## 6. Customizing the look

Colors, fonts, and glow shadows are defined in `tailwind.config.js` under `theme.extend`.
The Bloch sphere hero lives in `src/components/three/BlochSphere.jsx` — radius, ring colors,
and vector motion are all tunable constants near the top of the file.
