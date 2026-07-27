import { Mail, MapPin } from 'lucide-react'
import { useLang } from '@/i18n'
import {
  CONTACT_EMAIL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  TIKTOK_URL,
  buildWhatsAppLink,
} from '@/config'
import { LinkedInIcon, WhatsAppIcon, InstagramIcon, FacebookIcon, TikTokIcon } from '@/components/icons'

export function Footer() {
  const { t } = useLang()

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#about', label: t.nav.about },
    { href: '#career', label: t.nav.career },
    { href: '#forum', label: t.nav.forum },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="border-t border-ink-950/10 bg-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8">
        <div className="md:col-span-6">
          <p className="font-display text-2xl font-bold italic text-ink-950">
            Lydie <span className="text-gold-500">M.</span>
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-ink-500">
            {t.footer.role}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={buildWhatsAppLink(t.contact.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/15 text-ink-700 transition-colors duration-300 ease-smooth hover:border-gold-500 hover:text-gold-600"
            >
              <WhatsAppIcon size={16} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/15 text-ink-700 transition-colors duration-300 ease-smooth hover:border-gold-500 hover:text-gold-600"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/15 text-ink-700 transition-colors duration-300 ease-smooth hover:border-gold-500 hover:text-gold-600"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/15 text-ink-700 transition-colors duration-300 ease-smooth hover:border-gold-500 hover:text-gold-600"
            >
              <TikTokIcon size={16} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/15 text-ink-700 transition-colors duration-300 ease-smooth hover:border-gold-500 hover:text-gold-600"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/15 text-ink-700 transition-colors duration-300 ease-smooth hover:border-gold-500 hover:text-gold-600"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <nav className="md:col-span-3" aria-label={t.a11y.footerNav}>
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[12px] uppercase tracking-[0.18em] text-ink-500 transition-colors hover:text-gold-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-ink-500">
            <MapPin size={14} className="text-gold-600" />
            {t.contact.location}
          </p>
          <p className="mt-3 text-sm text-ink-600">{CONTACT_EMAIL}</p>
        </div>
      </div>

      <div className="border-t border-ink-950/10 py-6">
        <p className="mx-auto max-w-7xl px-5 text-center text-xs text-ink-400 md:px-8 md:text-left">
          © 2026 Lydie Monthouel Lebron de Guarinos · {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
