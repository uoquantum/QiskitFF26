import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <Reveal>
      <div className={`max-w-2xl mb-14 ${alignCls}`}>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-4">{title}</h2>
        {description && <p className="text-ink-muted text-base leading-relaxed">{description}</p>}
      </div>
    </Reveal>
  )
}
