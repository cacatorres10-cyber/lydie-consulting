import { ArrowRight, MapPin } from 'lucide-react'
import { useLang } from '@/i18n'
import { IMG } from '@/assets/media'
import { LINKEDIN_URL } from '@/config'
import { LinkedInIcon } from '@/components/icons'
import { Reveal } from '@/components/Reveal'

export function Hero() {
  const { t } = useLang()
  const [firstName, ...restName] = t.hero.name.split(' ')

  return (
    <section className="texture-paper relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-40">
      {/* Anneaux decoratifs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-48 h-[560px] w-[560px] rounded-full border border-gold-500/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border border-gold-500/15"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold-700">
              <span aria-hidden="true" className="h-px w-10 bg-gold-500" />
              {t.hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.04] text-ink-950 sm:text-6xl md:text-7xl">
              <span className="block">{firstName}</span>
              <span className="block italic text-gold-600">{restName.join(' ')}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl font-display text-xl italic leading-snug text-ink-700 md:text-2xl">
              {t.hero.headline}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-950/65">{t.hero.sub}</p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-sm font-medium tracking-wide text-paper transition-colors hover:bg-gold-600"
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink-950/20 px-7 py-3.5 text-sm font-medium tracking-wide text-ink-950 transition-colors hover:border-gold-500 hover:text-gold-700"
              >
                <LinkedInIcon size={16} />
                {t.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <dl className="mt-14 grid max-w-xl grid-cols-3">
              {t.hero.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={i === 0 ? '' : 'border-l border-ink-950/10 pl-4 md:pl-8'}
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-medium text-ink-950 md:text-4xl">
                    {s.value}
                  </dd>
                  <dd className="mt-1 max-w-[9rem] text-[11px] uppercase tracking-[0.16em] text-ink-950/55">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.25} y={60}>
            <figure className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border border-gold-500/60"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={IMG.paris}
                  alt={t.hero.imageCaption}
                  className="h-full w-full animate-slow-zoom object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent"
                />
              </div>
              <figcaption className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-950/55">
                <MapPin size={13} className="text-gold-600" />
                {t.hero.imageCaption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
