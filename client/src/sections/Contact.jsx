import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/xeewjglj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio Contact — ${form.name}`,
          message: form.message,
        }),
      })
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section className="py-20 md:py-section-gap px-4 md:px-margin-desktop max-w-[1440px] mx-auto" id="contact">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
        <div className="reveal">
          <span className="font-label-caps text-label-caps text-primary mb-4 block">{t.contact.label}</span>
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-surface mb-10 md:mb-12">{t.contact.title}</h2>
          <div className="space-y-6 md:space-y-8">
            {[
              { icon: 'mail', label: 'zohaibmahar486@gmail.com', href: 'mailto:zohaibmahar486@gmail.com' },
              { icon: 'phone', label: '+92 316 8463954', href: 'tel:+923168463954' },
              { icon: 'location_on', label: "Khairpur Mir's, Sindh, Pakistan", href: null },
              { icon: 'link', label: 'linkedin.com/in/zohaib-mahar-215741349', href: 'https://www.linkedin.com/in/zohaib-mahar-215741349' },
              { icon: 'code', label: 'github.com/zohaibmahar234', href: 'https://github.com/zohaibmahar234' },
            ].map(({ icon, label, href }) => (
              <div key={label} className="flex items-center gap-4 md:gap-6">
                <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
                {href
                  ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="font-body-md text-sm md:text-body-lg text-on-surface hover:text-primary transition-colors break-all">{label}</a>
                  : <span className="font-body-md text-sm md:text-body-lg text-on-surface">{label}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center h-full gap-6 text-center py-20">
              <span className="material-symbols-outlined text-primary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <h3 className="font-headline-md text-2xl text-on-surface">Message Received!</h3>
              <p className="font-body-lg text-on-surface-variant">Thank you for reaching out — I'll get back to you within 24 hours.</p>
              <button onClick={() => setStatus('idle')} className="px-8 py-3 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary/10 transition-all">SEND ANOTHER</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
              {[
                { name: 'name', placeholder: t.contact.fields.name, type: 'text', required: true },
                { name: 'email', placeholder: t.contact.fields.email, type: 'email', required: true },
                { name: 'subject', placeholder: t.contact.fields.subject, type: 'text', required: false },
              ].map(({ name, placeholder, type, required }) => (
                <div key={name} className="border-b border-outline-variant/30 focus-within:border-primary transition-colors">
                  <input type={type} name={name} value={form[name]} onChange={handleChange} placeholder={placeholder} required={required}
                    className="w-full bg-transparent py-3 md:py-4 font-label-caps text-[11px] md:text-label-caps text-on-surface placeholder:text-outline-variant outline-none" />
                </div>
              ))}
              <div className="border-b border-outline-variant/30 focus-within:border-primary transition-colors">
                <textarea name="message" value={form.message} onChange={handleChange} placeholder={t.contact.fields.message} required rows={4}
                  className="w-full bg-transparent py-3 md:py-4 font-label-caps text-[11px] md:text-label-caps text-on-surface placeholder:text-outline-variant outline-none resize-none" />
              </div>
              <button type="submit" disabled={status === 'loading'}
                className="w-full py-4 md:py-6 bg-primary text-on-primary font-label-caps text-label-caps hover:scale-[0.98] transition-transform duration-300 flex items-center justify-center gap-2 disabled:opacity-70">
                <span className="material-symbols-outlined text-[18px]">{status === 'loading' ? 'hourglass_empty' : 'send'}</span>
                {status === 'loading' ? 'SENDING...' : status === 'error' ? 'FAILED — TRY AGAIN' : t.contact.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
