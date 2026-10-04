import { FormEvent, useState } from 'react'
import { contactCopy, siteConfig } from '../config/siteConfig'
import type { ContactFormData } from '../models/ContactForm'

const emptyForm: ContactFormData = {
  name: '',
  email: '',
  message: '',
}

export function useContactViewModel() {
  const [form, setForm] = useState<ContactFormData>(emptyForm)

  const updateField = (field: keyof ContactFormData, value: string): void => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  // Opens the visitor's email app instead of a fake success message
  const submit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    )

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  return {
    copy: contactCopy,
    siteConfig,
    form,
    updateField,
    submit,
  }
}
