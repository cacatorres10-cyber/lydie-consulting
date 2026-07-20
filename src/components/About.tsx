import { useLang } from '@/i18n'
import { Reveal } from '@/components/Reveal'

export function About() {
  const { t } = useLang()

  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold-700">
              <span aria-hidden="true" className="h-px w-10 bg-gold-500" />
              {t.about.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl font-medium italic text-ink-950 md:text-5xl">
              {t.about.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote className="mt-9 border-l-2 border-gold-500 pl-6 font-display text-2xl italic leading-snug text-gold-700">
              {t.about.quote}
            </blockquote>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="space-y-5 leading-relaxed text-ink-950/70">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="eyebrow mt-11 text-ink-950/45">{t.about.chipsTitle}</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {t.about.chips.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-ink-950/15 px-4 py-1.5 text-sm text-ink-950/75 transition-colors hover:border-gold-500 hover:text-gold-700"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="eyebrow mt-10 text-ink-950/45">{t.about.langsTitle}</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {t.about.langs.map((l) => (
                <li
                  key={l}
                  className="rounded-full bg-ink-950 px-4 py-1.5 text-sm font-medium text-gold-200"
                >
                  {l}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
