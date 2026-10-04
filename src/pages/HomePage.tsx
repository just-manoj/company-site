import { AppCard } from '../components/AppCard'
import { Button } from '../components/Button'
import { OceanHero } from '../components/OceanHero'
import { SectionTitle } from '../components/SectionTitle'
import { WaveDivider } from '../components/WaveDivider'
import { useHomeViewModel } from '../viewmodels/useHomeViewModel'

export function HomePage() {
  const { copy, featuredApps, values, goToApps, goToAbout } = useHomeViewModel()

  return (
    <main>
      <section className="hero">
        <OceanHero />
        <div className="hero__content">
          <SectionTitle
            eyebrow={copy.eyebrow}
            title={copy.title}
            subtitle={copy.subtitle}
          />
          <div className="hero__actions">
            <Button label={copy.ctaPrimary} onClick={goToApps} />
            <Button label={copy.ctaSecondary} onClick={goToAbout} variant="ghost" />
          </div>
        </div>
      </section>

      <WaveDivider />

      <section className="panel">
        <SectionTitle eyebrow={copy.journalEyebrow} title={copy.journalTitle} />
        <p className="panel__text">{copy.journalBody}</p>

        <div className="value-grid">
          {values.map((item) => (
            <article key={item.title} className="value-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel panel--tint">
        <SectionTitle eyebrow="FEATURED TREASURES" title="APPS ATBOARD" />
        <div className="apps-grid">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>
    </main>
  )
}
