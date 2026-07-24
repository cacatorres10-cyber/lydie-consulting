import { Mail, MapPin } from 'lucide-react'
import { useLang } from '@/i18n'
import { CONTACT_EMAIL, LINKEDIN_URL, buildWhatsAppLink } from '@/config'
import { LinkedInIcon, WhatsAppIcon } from '@/components/icons'
import { Reveal } from '@/components/Reveal'

export function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="bg-dots scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <div className="glass-card glow-center px-6 py-14 text-center md:px-16 md:py-20">
            <p className="eyebrow text-gold-600">{t.contact.eyebrow}</p>
            <h2 className="mt-5 font-display text-4xl font-medium italic text-ink-950 md:text-6xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink-600">{t.contact.sub}</p>

            <div className="mt-6 rounded-2xl border border-gold-200 bg-gold-50/70 p-4 text-sm text-ink-700">
              <p className="font-semibold text-ink-900">Demandez un service précis</p>
              <p className="mt-2">Vous pouvez écrire directement pour réserver un voyage, demander une formation, un accompagnement patrimonial, un service de connexion ou un événement.</p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={buildWhatsAppLink(t.contact.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-ink-950 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors duration-300 ease-smooth hover:bg-gold-600"
              >
                <WhatsAppIcon size={17} />
                {t.contact.whatsappLabel}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-ink-950/20 bg-white/70 px-8 py-4 text-sm font-medium tracking-wide text-ink-900 transition-colors duration-300 ease-smooth hover:border-gold-500 hover:text-gold-700"
              >
                <Mail size={16} />
                {t.contact.emailLabel}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-ink-950/20 bg-white/70 px-8 py-4 text-sm font-medium tracking-wide text-ink-900 transition-colors duration-300 ease-smooth hover:border-gold-500 hover:text-gold-700"
              >
                <LinkedInIcon size={16} />
                {t.contact.linkedinLabel}
              </a>
            </div>

            <p className="mt-9 flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.22em] text-ink-500">
              <MapPin size={14} className="text-gold-600" />
              {t.contact.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
