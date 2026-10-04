import { privacyCopy } from '../config/siteConfig'

export function PrivacyPage() {
  return (
    <main className="legal-page">
      <article className="parchment">
        <h1>{privacyCopy.title}</h1>
        <p className="parchment__meta">{privacyCopy.updated}</p>
        {privacyCopy.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </article>
    </main>
  )
}
