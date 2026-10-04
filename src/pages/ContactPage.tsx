import { Button } from '../components/Button'
import { SectionTitle } from '../components/SectionTitle'
import { WaveDivider } from '../components/WaveDivider'
import { useContactViewModel } from '../viewmodels/useContactViewModel'

export function ContactPage() {
  const { copy, siteConfig, form, updateField, submit } = useContactViewModel()

  return (
    <main>
      <section className="page-hero">
        <SectionTitle
          eyebrow={copy.eyebrow}
          title={copy.title}
          subtitle={copy.subtitle}
        />
      </section>

      <WaveDivider />

      <section className="panel contact-layout">
        <form className="contact-form" onSubmit={submit}>
          <label>
            {copy.nameLabel}
            <input
              type="text"
              required
              value={form.name}
              onChange={(event) => updateField('name', event.target.value)}
            />
          </label>

          <label>
            {copy.emailLabel}
            <input
              type="email"
              required
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
            />
          </label>

          <label>
            {copy.messageLabel}
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
            />
          </label>

          <Button type="submit" label={copy.submitLabel} />
        </form>

        <aside className="contact-info">
          <h2>{copy.infoTitle}</h2>
          <p>{siteConfig.email}</p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.address}</p>
        </aside>
      </section>
    </main>
  )
}
