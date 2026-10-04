import { termsCopy } from '../config/siteConfig'

export function TermsPage() {
  return (
    <main className="legal-page">
      <article className="parchment">
        <h1>{termsCopy.title}</h1>
        <p className="parchment__meta">{termsCopy.updated}</p>
        {termsCopy.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </article>
    </main>
  )
}
