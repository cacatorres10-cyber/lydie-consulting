import {
  Landmark,
  Stamp,
  Plane,
  Building2,
  GraduationCap,
  HandCoins,
  CalendarDays,
  Languages,
  Presentation,
  Dumbbell,
  Leaf,
} from 'lucide-react'
import { useLang } from '@/i18n'
import { GALLERY_IMAGES } from '@/assets/media'
import { Reveal } from '@/components/Reveal'

const ICONS = [
  Landmark,
  Stamp,
  Plane,
  Building2,
  GraduationCap,
  HandCoins,
  CalendarDays,
  Languages,
  Presentation,
  Dumbbell,
  Leaf,
]

export function ServicesGrid() {
  const { t } = useLang()

  return (
    <section id="services" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-600">{t.services.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-medium italic text-ink-950 md:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-ink-600">{t.expertise.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal key={item.name} delay={0.04 * (i % 4)} y={30}>
                <div className="glass-card group h-full overflow-hidden transition-all duration-500 ease-smooth hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-[0_0_60px_rgba(167,139,113,0.25)]">
                  <div className="overflow-hidden">
                    <img
                      src={GALLERY_IMAGES[i]}
                      alt={item.name}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover grayscale transition-all duration-700 ease-smooth group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-600 transition-transform duration-300 ease-smooth group-hover:scale-110">
                        <Icon size={22} strokeWidth={1.8} />
                      </span>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-600">
                        {item.category}
                      </p>
                    </div>
                    <h3 className="mt-4 text-lg font-bold leading-snug text-ink-950">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.tagline}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
