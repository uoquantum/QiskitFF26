// Auto-loads every photo dropped into src/assets/gallery/ (see that folder's
// README) — no data file to edit. Sorted by filename.
const modules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
})

export const GALLERY_IMAGES = Object.keys(modules)
  .sort()
  .map((path) => modules[path])
