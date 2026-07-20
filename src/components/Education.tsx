import { GraduationCap, Languages } from 'lucide-react'
import { useLang } from '@/i18n'
import { Reveal } from '@/components/Reveal'

export function Education() {
  const { t } = useLang()

  return (
    <section id="education" className="scroll-mt-24 border-y border-ink-950/10 bg-gold-50/70 py-20 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-6 px-5 md:grid-cols-2 md:px-8">
        <Reveal>
          <div className="h-full rounded-2xl border border-ink-950/10 bg-white/80 p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-950 text-gold-300">
              <GraduationCap size={20} strokeWidth={1.8} />
            </span>
            <p className="eyebrow mt-5 text-gold-700">{t.education.eyebrow}</p>
            <h3 className="mt-2 font-display text-2xl font-medium text-ink-950">
              {t.education.title}
            </h3>
            <ul className="mt-5 space-y-4">
              {t.education.schools.map((s) => (
                <li key={s.school} className="border-l-2 border-gold-500 pl-4">
                  <p className="font-display text-lg text-ink-950">{s.school}</p>
                  <p className="text-sm text-ink-950/55">{s.note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-ink-950/55">{t.education.extra}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-ink-950/10 bg-white/80 p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-950 text-gold-300">
              <Languages size={20} strokeWidth={1.8} />
            </span>
            <p className="eyebrow mt-5 text-gold-700">{t.education.langsTitle}</p>
            <h3 className="mt-2 font-display text-2xl font-medium text-ink-950">
              {t.education.langsNote}
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {t.education.langs.map((l) => (
                <li
                  key={l}
                  className="rounded-full bg-ink-950 px-5 py-2 text-sm font-medium text-gold-200"
                >
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
