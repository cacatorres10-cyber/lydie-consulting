import { Mail, MapPin } from 'lucide-react'
import { useLang } from '@/i18n'
import { CONTACT_EMAIL, LINKEDIN_URL } from '@/config'
import { LinkedInIcon } from '@/components/icons'
import { Reveal } from '@/components/Reveal'

export function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="glow-gold scroll-mt-0 bg-ink-950 py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="eyebrow text-gold-400">{t.contact.eyebrow}</p>
          <h2 className="mt-5 font-display text-5xl font-medium text-paper md:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-paper/60">{t.contact.sub}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold tracking-wide text-ink-950 transition-colors hover:bg-gold-400"
            >
              <Mail size={17} />
              {t.contact.emailLabel}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-paper/25 px-8 py-4 text-sm font-medium tracking-wide text-paper transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              <LinkedInIcon size={16} />
              {t.contact.linkedinLabel}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-10 flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.22em] text-paper/40">
            <MapPin size={14} className="text-gold-500" />
            {t.contact.location}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
