import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Landmark,
  LineChart,
  HeartHandshake,
  GraduationCap,
  PartyPopper,
  Trophy,
  Crown,
  Calendar,
  Wallet,
  Handshake,
  HandCoins,
  ChevronDown,
} from 'lucide-react'
import { useLang } from '@/i18n'
import { buildWhatsAppLink } from '@/config'
import { Reveal } from '@/components/Reveal'

const POLE_ICONS = [Landmark, LineChart, HeartHandshake, GraduationCap, PartyPopper, Trophy]

function Tag({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <li
      className={
        dark
          ? 'rounded-full bg-ink-950 px-4 py-1.5 text-xs font-medium text-gold-200 sm:text-sm'
          : 'rounded-full border border-ink-950/15 px-4 py-1.5 text-xs text-ink-950/75 sm:text-sm'
      }
    >
      {children}
    </li>
  )
}

function VisionPanel() {
  const { t } = useLang()
  const v = t.forum.vision

  return (
    <div>
      <blockquote className="mx-auto max-w-2xl text-center font-display text-2xl italic leading-snug text-gold-700 md:text-3xl">
        {v.theme}
      </blockquote>
      <p className="mt-5 flex items-center justify-center gap-2 text-center text-[11px] uppercase tracking-[0.18em] text-ink-500">
        <Calendar size={13} className="shrink-0 text-gold-600" />
        {v.durationLocation}
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <p className="eyebrow text-ink-950/45">{v.objectivesTitle}</p>
          <ul className="mt-4 space-y-3">
            {v.objectives.map((o) => (
              <li key={o} className="flex items-start gap-2.5 text-ink-950/70">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {o}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-ink-950/45">{v.impactTitle}</p>
          <div className="mt-4 space-y-5">
            {v.impact.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-semibold text-ink-900">{group.label}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function GrandeCaraibePanel() {
  const { t } = useLang()
  const g = t.forum.grandeCaraibe

  return (
    <div>
      <div className="text-center">
        <h3 className="font-display text-2xl font-medium italic text-ink-950 md:text-3xl">{g.title}</h3>
        <p className="mx-auto mt-3 max-w-xl text-sm text-ink-500">{g.sub}</p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {g.poles.map((pole, i) => {
          const Icon = POLE_ICONS[i]
          return (
            <div key={pole.title} className="glass-card h-full p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-600">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <h4 className="mt-4 font-display text-lg font-medium leading-snug text-ink-950">
                {pole.title}
              </h4>
              <ul className="mt-3 space-y-1.5">
                {pole.items.map((item) => (
                  <li key={item} className="text-xs leading-snug text-ink-500">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <div className="glass-card glow-center mt-8 p-8 text-center md:p-10">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink-950 text-gold-300">
          <Crown size={22} strokeWidth={1.8} />
        </span>
        <h4 className="mt-4 font-display text-2xl font-medium italic text-ink-950">{g.missTitle}</h4>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-ink-600">{g.missDesc}</p>
        <p className="eyebrow mt-8 text-ink-950/45">{g.prizesTitle}</p>
        <ul className="mx-auto mt-4 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {g.prizes.map((prize) => (
            <Tag key={prize} dark>
              {prize}
            </Tag>
          ))}
        </ul>
      </div>
    </div>
  )
}

function AcademyPanel() {
  const { t } = useLang()
  const a = t.forum.academy
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      <div className="text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink-950 text-gold-300">
          <GraduationCap size={22} strokeWidth={1.8} />
        </span>
        <h3 className="mt-4 font-display text-2xl font-medium italic text-ink-950 md:text-3xl">{a.title}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">{a.subtitle}</p>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink-600">{a.intro}</p>
      </div>

      <p className="eyebrow mt-10 text-center text-ink-950/45">{a.topicsTitle}</p>
      <p className="mt-2 text-center text-xs text-ink-400">{a.topicsHint}</p>
      <div className="mx-auto mt-5 grid max-w-4xl gap-3 sm:grid-cols-2">
        {a.topics.map((topic, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={topic.title}
              className={`overflow-hidden rounded-2xl border transition-colors duration-300 ease-smooth ${
                isOpen ? 'border-gold-400/60 bg-gold-50/50' : 'border-ink-950/10 hover:border-gold-400/40'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-start gap-3 p-4 text-left"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-[11px] font-semibold text-gold-700">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 text-sm font-medium leading-snug text-ink-950">{topic.title}</span>
                <ChevronDown
                  size={16}
                  className={`mt-0.5 shrink-0 text-ink-400 transition-transform duration-300 ease-smooth ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-4 pb-4 pl-[52px] text-xs leading-relaxed text-ink-500">{topic.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function GuadeloupePanel() {
  const { t } = useLang()
  const gp = t.forum.guadeloupe

  return (
    <div>
      <div className="text-center">
        <h3 className="font-display text-2xl font-medium italic text-ink-950 md:text-3xl">{gp.title}</h3>
        <p className="mx-auto mt-3 max-w-xl text-sm text-ink-500">{gp.sub}</p>
        <p className="eyebrow mt-4 text-gold-600">{gp.duration}</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {gp.days.map((day) => (
          <div key={day.label} className="glass-card h-full p-6">
            <p className="eyebrow text-gold-600">{day.label}</p>
            <h4 className="mt-2 font-display text-lg font-medium text-ink-950">{day.title}</h4>
            <ul className="mt-3 space-y-1.5">
              {day.items.map((item) => (
                <li key={item} className="text-xs leading-snug text-ink-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <blockquote className="mx-auto mt-8 max-w-2xl border-l-2 border-gold-500 pl-6 text-sm italic leading-relaxed text-ink-600">
        {gp.missNote}
      </blockquote>

      <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {gp.prizes.map((prize) => (
          <Tag key={prize} dark>
            {prize}
          </Tag>
        ))}
      </ul>

      <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
        <div className="glass-card flex items-center gap-4 p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-600">
            <Wallet size={20} strokeWidth={1.8} />
          </span>
          <div>
            <p className="eyebrow text-ink-950/45">{gp.budgetLabel}</p>
            <p className="mt-1 font-display text-2xl font-medium text-ink-950">{gp.budgetValue}</p>
          </div>
        </div>
        <div className="glass-card p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-600">
              <Handshake size={20} strokeWidth={1.8} />
            </span>
            <p className="eyebrow text-ink-950/45">{gp.partnersTitle}</p>
          </div>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {gp.partners.map((partner) => (
              <li key={partner} className="rounded-full border border-ink-950/15 px-3 py-1 text-[11px] text-ink-950/70">
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function Forum() {
  const { t } = useLang()
  const [activeTab, setActiveTab] = useState(0)

  const panels = [
    <VisionPanel key="vision" />,
    <GrandeCaraibePanel key="grande" />,
    <GuadeloupePanel key="guad" />,
    <AcademyPanel key="academy" />,
  ]

  return (
    <section id="forum" className="bg-dots scroll-mt-24 border-y border-ink-950/10 bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-600">{t.forum.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-medium italic text-ink-950 md:text-5xl">
            {t.forum.title}
          </h2>
          <p className="mt-4 text-ink-600">{t.forum.intro}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label={t.forum.title}
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            {t.forum.tabs.map((label, i) => (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={activeTab === i}
                onClick={() => setActiveTab(i)}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ease-smooth sm:text-[13px] ${
                  activeTab === i
                    ? 'bg-ink-950 text-gold-200'
                    : 'border border-ink-950/15 text-ink-600 hover:border-gold-500 hover:text-gold-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {panels[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 text-center">
            <a
              href={buildWhatsAppLink(t.forum.donateMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-amber-500 px-8 py-4 text-sm font-bold tracking-wide text-ink-950 shadow-lg shadow-amber-500/50 transition-all duration-300 ease-smooth hover:scale-105 hover:bg-amber-400"
            >
              <HandCoins size={18} />
              {t.forum.donateLabel}
            </a>
            <p className="mt-3 text-xs text-ink-400">{t.forum.donateNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
