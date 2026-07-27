import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/i18n'
import type { Lang } from '@/i18n'

const LANGS: Lang[] = ['fr', 'es', 'en']

export function Navbar() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#about', label: t.nav.about },
    { href: '#career', label: t.nav.career },
    { href: '#forum', label: t.nav.forum },
    { href: '#books', label: t.nav.books },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth ${
        scrolled ? 'border-b border-ink-950/10 bg-white/70 shadow-sm backdrop-blur-md' : ''
      }`}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#" className="group flex items-baseline gap-1.5">
          <span className="font-display text-2xl font-bold italic text-ink-950">Lydie</span>
          <span className="font-display text-2xl font-bold italic text-gold-500 transition-colors group-hover:text-gold-400">
            M.
          </span>
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
          aria-label={t.a11y.mainNav}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-600 transition-colors hover:text-gold-600"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1" role="group" aria-label={t.a11y.language}>
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`cursor-pointer rounded-full px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest transition-colors ${
                  lang === l ? 'bg-ink-950 text-gold-200' : 'text-ink-500 hover:text-ink-950'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-ink-950 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 ease-smooth hover:bg-gold-600 md:inline-flex"
          >
            {t.nav.contact}
          </a>
          <button
            onClick={() => setOpen(true)}
            className="cursor-pointer p-2 text-ink-950 lg:hidden"
            aria-label={t.a11y.openMenu}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="bg-dots fixed inset-0 z-50 flex flex-col bg-paper px-8 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-bold italic text-ink-950">
              Lydie <span className="text-gold-500">M.</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer p-2 text-ink-950"
              aria-label={t.a11y.closeMenu}
            >
              <X size={24} />
            </button>
          </div>
          <nav className="mt-14 flex flex-col gap-7" aria-label={t.a11y.mobileNav}>
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="animate-fade-up font-display text-3xl italic text-ink-950 transition-colors hover:text-gold-600"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex gap-2">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l)
                  setOpen(false)
                }}
                className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  lang === l
                    ? 'border-gold-500 bg-ink-950 text-gold-200'
                    : 'border-ink-950/20 text-ink-600'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
