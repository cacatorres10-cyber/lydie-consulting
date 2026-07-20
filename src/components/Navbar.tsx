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
    { href: '#about', label: t.nav.about },
    { href: '#expertise', label: t.nav.expertise },
    { href: '#services', label: t.nav.services },
    { href: '#career', label: t.nav.career },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-ink-950/10 bg-paper/85 shadow-sm backdrop-blur-md' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#" className="group flex items-baseline gap-1.5">
          <span className="font-display text-2xl font-semibold italic text-ink-950">Lydie</span>
          <span className="font-display text-2xl text-gold-600 transition-colors group-hover:text-gold-500">
            M.
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium uppercase tracking-[0.18em] text-ink-950/70 transition-colors hover:text-gold-700"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1" role="group" aria-label="Langue">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`cursor-pointer rounded-full px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest transition-colors ${
                  lang === l
                    ? 'bg-ink-950 text-gold-300'
                    : 'text-ink-950/50 hover:text-ink-950'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={() => setOpen(true)}
            className="cursor-pointer p-2 text-ink-950 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink-950 px-8 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl italic text-paper">
              Lydie <span className="text-gold-400">M.</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer p-2 text-paper"
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="mt-14 flex flex-col gap-7" aria-label="Navigation mobile">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="animate-fade-up font-display text-3xl text-paper transition-colors hover:text-gold-300"
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
                    ? 'border-gold-400 bg-gold-500 text-ink-950'
                    : 'border-paper/25 text-paper/70'
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
