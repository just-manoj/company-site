type SectionTitleProps = {
  eyebrow: string
  title: string
  subtitle?: string
  light?: boolean
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`section-title ${light ? 'section-title--light' : ''}`}>
      <p className="section-title__eyebrow">{eyebrow}</p>
      <h1 className="section-title__title">{title}</h1>
      {subtitle ? <p className="section-title__subtitle">{subtitle}</p> : null}
    </div>
  )
}
