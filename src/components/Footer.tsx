import { useLang } from '@/i18n'

export function Footer() {
  const { t } = useLang()

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#expertise', label: t.nav.expertise },
    { href: '#services', label: t.nav.services },
    { href: '#career', label: t.nav.career },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="border-t border-white/10 bg-ink-950 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <p className="font-display text-xl italic text-paper">
            Lydie <span className="text-gold-400">M.</span>
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-paper/40">{t.footer.role}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6" aria-label="Pied de page">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] uppercase tracking-[0.16em] text-paper/50 transition-colors hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-paper/35">
          © 2026 Lydie Lebron Sanchez M. · {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
