import { MapPin } from 'lucide-react'
import { useLang } from '@/i18n'
import { Reveal } from '@/components/Reveal'

export function Career() {
  const { t } = useLang()

  return (
    <section id="career" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold-700">
            <span aria-hidden="true" className="h-px w-10 bg-gold-500" />
            {t.career.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium text-ink-950 md:text-5xl">
            {t.career.title}
          </h2>
          <p className="mt-4 max-w-xl text-ink-950/60">{t.career.sub}</p>
        </Reveal>

        <ol className="mt-14 space-y-12 border-l border-ink-950/15 pl-8">
          {t.career.items.map((item, i) => (
            <Reveal key={`${item.org}-${item.period}`} delay={0.05 * i} y={30}>
              <li className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-gold-500 bg-paper"
                />
                <p className="eyebrow text-gold-700">{item.period}</p>
                <h3 className="mt-2 font-display text-2xl font-medium text-ink-950">
                  {item.role}
                  <span className="text-ink-950/50"> · {item.org}</span>
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-ink-950/45">
                  <MapPin size={12} className="text-gold-600" />
                  {item.place}
                </p>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-950/65">{item.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
