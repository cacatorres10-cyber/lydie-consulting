import {
  Landmark,
  Globe2,
  ShieldAlert,
  Plane,
  HandCoins,
  Building2,
  GraduationCap,
  ClipboardList,
} from 'lucide-react'
import { useLang } from '@/i18n'
import { Reveal } from '@/components/Reveal'

const ICONS = [Landmark, Globe2, ShieldAlert, Plane, HandCoins, Building2, GraduationCap, ClipboardList]

export function Expertise() {
  const { t } = useLang()

  return (
    <section id="expertise" className="scroll-mt-24 border-y border-ink-950/10 bg-gold-50/70 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-700">{t.expertise.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-ink-950 md:text-5xl">
            {t.expertise.title}
          </h2>
          <p className="mt-4 text-ink-950/60">{t.expertise.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.expertise.items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal key={item.title} delay={0.05 * i} y={30}>
                <div className="group h-full rounded-2xl border border-ink-950/10 bg-white/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-xl">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-950 text-gold-300 transition-colors group-hover:bg-gold-600 group-hover:text-ink-950">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-medium leading-snug text-ink-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-950/55">{item.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
