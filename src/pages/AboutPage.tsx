import { SectionTitle } from '../components/SectionTitle'
import { WaveDivider } from '../components/WaveDivider'
import { useAboutViewModel } from '../viewmodels/useAboutViewModel'

export function AboutPage() {
  const { copy, values } = useAboutViewModel()

  return (
    <main>
      <section className="page-hero">
        <SectionTitle eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.intro} />
      </section>

      <WaveDivider />

      <section className="panel">
        <SectionTitle eyebrow={copy.philosophyEyebrow} title={copy.philosophyTitle} />
        <p className="panel__text">{copy.philosophyBody}</p>
      </section>

      <section className="panel panel--tint">
        <SectionTitle eyebrow={copy.journeyEyebrow} title={copy.journeyTitle} />
        <p className="panel__text">{copy.journeyBody}</p>

        <div className="value-grid">
          {values.map((item) => (
            <article key={item.title} className="value-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <SectionTitle eyebrow={copy.portEyebrow} title={copy.portTitle} />
        <p className="panel__text">{copy.portBody}</p>
      </section>
    </main>
  )
}
