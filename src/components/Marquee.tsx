import { useLang } from '@/i18n'

export function Marquee() {
  const { t } = useLang()
  const words = [...t.marquee, ...t.marquee]

  return (
    <div className="overflow-hidden border-y border-ink-950/10 bg-paper py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {words.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="flex items-center gap-8 text-[13px] font-medium uppercase tracking-[0.28em] text-ink-950/45"
          >
            {w}
            <span className="h-1.5 w-1.5 rotate-45 bg-gold-500/70" />
          </span>
        ))}
      </div>
    </div>
  )
}
