import { Download, FileText } from 'lucide-react'
import { useLang } from '@/i18n'
import { buildWhatsAppLink } from '@/config'
import { Reveal } from '@/components/Reveal'

export function Books() {
  const { t } = useLang()

  return (
    <section id="books" className="bg-dots scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-600">{t.books.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-medium italic text-ink-950 md:text-5xl">
            {t.books.title}
          </h2>
          <p className="mt-4 text-ink-600">{t.books.intro}</p>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-x-12 gap-y-10">
          {t.books.items.map((book, i) => {
            const href = buildWhatsAppLink(t.books.buyMessage.replace('{title}', book.title))
            return (
              <Reveal key={book.title} delay={0.08 * i} y={30}>
                <div className="flex w-60 flex-col items-center text-center">
                  <div
                    className="relative aspect-[3/4] w-52 overflow-hidden rounded-r-xl rounded-l-md"
                    style={{
                      background: 'linear-gradient(135deg, #12100c 0%, #453728 55%, #a78b71 100%)',
                      transform: 'perspective(1000px) rotateY(-12deg) rotateX(3deg)',
                      boxShadow: '14px 22px 40px rgba(18,16,12,0.35)',
                    }}
                  >
                    <div aria-hidden="true" className="absolute inset-y-0 left-0 w-2 bg-black/30" />
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-gold-200 backdrop-blur-sm">
                      <FileText size={11} />
                      PDF
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="font-display text-lg font-medium italic leading-snug text-white">
                        {book.title}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 max-w-[15rem] text-sm leading-relaxed text-ink-500">
                    {book.description}
                  </p>
                  <p className="mt-3 font-display text-2xl font-medium text-ink-950">{book.price}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors duration-300 ease-smooth hover:bg-gold-600"
                  >
                    <Download size={16} />
                    {t.books.buyLabel}
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
