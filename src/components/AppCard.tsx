import type { CSSProperties } from 'react'
import type { AppInfo } from '../models/AppInfo'

type AppCardProps = {
  app: AppInfo
}

export function AppCard({ app }: AppCardProps) {
  const style = { '--accent': app.accent } as CSSProperties

  return (
    <article className="app-card" style={style}>
      <div className="app-card__phone" aria-hidden="true">
        <div className="app-card__screen">
          <div className="app-card__bar" />
          <div className="app-card__row" />
          <div className="app-card__row app-card__row--short" />
          <div className="app-card__chip">{app.name[0]}</div>
        </div>
      </div>

      <div className="app-card__body">
        <h3 className="app-card__name">{app.name}</h3>
        <p className="app-card__tagline">{app.tagline}</p>
        <p className="app-card__desc">{app.description}</p>
        <ul className="app-card__features">
          {app.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
