# Event gallery photos

Drop `.jpg` or `.png` files directly in this folder — no code or data file to
edit. They show up automatically in the "Event gallery" section on Home,
sorted by filename (so prefix with numbers like `01-keynote.jpg` if you want
a specific order).

This folder has to live under `src/` (not `public/`) so Vite can find the
files automatically — see `src/lib/galleryImages.js`.
