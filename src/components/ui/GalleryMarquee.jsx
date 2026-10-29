// Same sliding-strip pattern as SponsorMarquee — a single compact row
// instead of a tall photo grid. Falls back to a few placeholder tiles when
// no photos have been added yet (see src/assets/gallery/README.md).
export default function GalleryMarquee({ images }) {
  const items = images.length > 0 ? images : Array.from({ length: 6 }).map(() => null)
  // duplicated so the track can loop seamlessly at translateX(-50%)
  const track = [...items, ...items]

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max gap-4 animate-marquee">
        {track.map((src, i) =>
          src ? (
            <img key={i} src={src} alt="" className="h-48 w-48 shrink-0 rounded-xl object-cover" />
          ) : (
            <div
              key={i}
              className="h-48 w-48 shrink-0 rounded-xl border border-dashed border-ink/15 bg-ink/[0.03] flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-ink-faint">
                <path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="12" cy="13" r="3.25" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          )
        )}
      </div>
    </div>
  )
}
