import { assetUrl } from '../../lib/assetUrl.js'

export default function SponsorMark({ sponsor, nameSize = 'text-lg', accentDot }) {
  if (sponsor.placeholder) {
    return (
      <span className={`font-display ${nameSize} text-ink-faint whitespace-nowrap`}>{sponsor.name}</span>
    )
  }
  if (sponsor.logo) {
    return <img src={assetUrl(sponsor.logo)} alt={sponsor.name} className="max-h-10 max-w-[150px] object-contain" />
  }
  return (
    <>
      <span className={`h-2 w-2 rounded-full shrink-0 ${accentDot}`} />
      <span className={`font-display ${nameSize} text-ink whitespace-nowrap`}>{sponsor.name}</span>
    </>
  )
}
