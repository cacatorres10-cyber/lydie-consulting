import { ArrowRight } from 'lucide-react'
import { useLang } from '@/i18n'
import { GALLERY_IMAGES, IMG } from '@/assets/media'
import { LINKEDIN_URL } from '@/config'
import { LinkedInIcon } from '@/components/icons'
import { Reveal } from '@/components/Reveal'

// Indices des services montres en cartes satellites (parlement, avion, villa, evenement)
const SAT_IDX = [4, 2, 3, 6]

const SAT_POS = [
  'left-[1%] top-[4%] w-[200px] -rotate-3 animate-float',
  'right-[2%] top-[8%] w-[225px] rotate-2 animate-float-late',
  'left-[5%] bottom-[3%] w-[225px] rotate-2 animate-float-late',
  'right-[4%] bottom-[5%] w-[200px] -rotate-2 animate-float',
]

// Courbes de Bezier reliant chaque satellite au noeud central (viewBox 1200x560)
const LINES = [
  'M110,90 C330,90 430,280 600,280',
  'M1080,120 C880,120 800,280 600,280',
  'M140,470 C360,470 430,280 600,280',
  'M1060,450 C870,450 790,280 600,280',
]

function AvailablePill({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-ink-950/10 bg-white/80 px-4 py-2 backdrop-blur-md ${className ?? ''}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-800">
        {label}
      </span>
    </span>
  )
}

export function Hero() {
  const { t } = useLang()
  const [pre, post] = t.hero.headline.split(t.hero.headlineGold)
  const satellites = SAT_IDX.map((i) => ({
    img: GALLERY_IMAGES[i],
    label: t.services.items[i].name,
  }))

  return (
    <section className="bg-dots relative overflow-hidden pb-16 pt-32 md:pt-40">
      {/* Halo bronze doux derriere le hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-gold-300/25 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <AvailablePill label={t.hero.available} />
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium italic leading-[1.08] text-ink-950">
              {pre}
              <span className="text-gold-500">{t.hero.headlineGold}</span>
              {post}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-7 max-w-2xl leading-relaxed text-ink-600">
              <span className="font-display text-lg italic text-ink-900">{t.hero.name} · </span>
              {t.hero.sub}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink-950 px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors duration-300 ease-smooth hover:bg-gold-600"
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink-950/20 bg-white/60 px-8 py-4 text-sm font-medium tracking-wide text-ink-900 backdrop-blur transition-colors duration-300 ease-smooth hover:border-gold-500 hover:text-gold-700"
              >
                <LinkedInIcon size={16} />
                {t.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Reseau: noeud central + satellites + courbes SVG (desktop) */}
        <Reveal delay={0.35} y={60}>
          <div className="relative mx-auto mt-14 hidden h-[560px] max-w-6xl lg:block">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1200 560"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="10%" stopColor="#c9b8a0" />
                  <stop offset="90%" stopColor="#a78b71" />
                </linearGradient>
              </defs>
              {LINES.map((d) => (
                <path
                  key={d}
                  d={d}
                  stroke="url(#lineGrad)"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                  className="animate-pulse-branch"
                />
              ))}
              {LINES.map((d) => (
                <path
                  key={`dash-${d}`}
                  d={d}
                  stroke="#c9b8a0"
                  strokeWidth="1.5"
                  strokeDasharray="5 15"
                  vectorEffect="non-scaling-stroke"
                  className="animate-dash-flow opacity-60"
                />
              ))}
            </svg>

            {/* Noeud central */}
            <div className="glow-center absolute left-1/2 top-1/2 z-10 w-[400px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-ink-950/10 xl:w-[460px]">
              <div className="relative aspect-video">
                <img src={IMG.paris} alt={t.hero.imageCaption} className="absolute inset-0 h-full w-full object-cover" />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/15 to-transparent"
                />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="font-display text-2xl font-medium italic text-white">
                    {t.hero.name}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-200">
                    {t.hero.eyebrow}
                  </p>
                </div>
              </div>
            </div>

            {/* Cartes satellites */}
            {satellites.map((s, i) => (
              <div
                key={s.label}
                className={`glass-card group absolute z-10 cursor-pointer p-2 transition-all duration-500 ease-smooth hover:z-20 hover:scale-105 hover:shadow-[0_0_60px_rgba(167,139,113,0.35)] ${SAT_POS[i]}`}
              >
                <div className="overflow-hidden rounded-[18px]">
                  <img
                    src={s.img}
                    alt={s.label}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover grayscale transition-all duration-700 ease-smooth group-hover:grayscale-0"
                  />
                </div>
                <p className="truncate px-2 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-600">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Version mobile simplifiee du reseau */}
        <Reveal delay={0.35} y={40}>
          <div className="mt-12 lg:hidden">
            <div className="glow-center relative overflow-hidden rounded-3xl border border-ink-950/10">
              <div className="relative aspect-video">
                <img src={IMG.paris} alt={t.hero.imageCaption} className="absolute inset-0 h-full w-full object-cover" />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/15 to-transparent"
                />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="font-display text-xl font-medium italic text-white">{t.hero.name}</p>
                  <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-gold-200">
                    {t.hero.eyebrow}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {satellites.map((s) => (
                <div key={s.label} className="glass-card p-1.5">
                  <img
                    src={s.img}
                    alt={s.label}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-[16px] object-cover"
                  />
                  <p className="truncate px-1.5 py-2 text-center text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-600">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Statistiques */}
        <Reveal delay={0.45}>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3">
            {t.hero.stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center ${i === 0 ? '' : 'border-l border-ink-950/10'}`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-medium italic text-ink-950 md:text-4xl">
                  {s.value}
                </dd>
                <dd className="mx-auto mt-1 max-w-[10rem] text-[11px] uppercase tracking-[0.16em] text-ink-500">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
