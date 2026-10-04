import { AppCard } from '../components/AppCard'
import { SectionTitle } from '../components/SectionTitle'
import { WaveDivider } from '../components/WaveDivider'
import { useAppsViewModel } from '../viewmodels/useAppsViewModel'

export function AppsPage() {
  const { copy, apps } = useAppsViewModel()

  return (
    <main>
      <section className="page-hero page-hero--compass">
        <SectionTitle
          eyebrow={copy.eyebrow}
          title={copy.title}
          subtitle={copy.subtitle}
        />
      </section>

      <WaveDivider />

      <section className="panel">
        <SectionTitle eyebrow={copy.listEyebrow} title={copy.listTitle} />
        <div className="apps-grid">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>
    </main>
  )
}
