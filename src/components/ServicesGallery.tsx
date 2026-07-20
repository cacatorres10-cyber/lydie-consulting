import { useEffect, useState } from 'react'
import { CircularGallery } from '@/components/ui/circular-gallery'
import type { GalleryItem } from '@/components/ui/circular-gallery'
import { useLang } from '@/i18n'
import { GALLERY_IMAGES } from '@/assets/media'

function useGalleryRadius() {
  const [radius, setRadius] = useState(620)
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth
      setRadius(Math.max(320, Math.min(660, w * 0.44)))
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])
  return radius
}

export function ServicesGallery() {
  const { t } = useLang()
  const radius = useGalleryRadius()

  const items: GalleryItem[] = t.services.items.map((s, i) => ({
    common: s.name,
    binomial: s.category,
    photo: {
      url: GALLERY_IMAGES[i],
      text: s.name,
      by: s.tagline,
    },
  }))

  return (
    <section id="showcase" className="bg-dots relative border-y border-ink-950/10 bg-paper">
      {/* Desktop / grand ecran: galerie 3D pilotee par le scroll */}
      <div className="relative hidden lg:block" style={{ height: '320vh' }}>
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-56 bg-gradient-to-b from-paper via-paper/80 to-transparent"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-20 text-center">
            <p className="eyebrow text-gold-600">{t.services.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-medium italic text-ink-950 md:text-6xl">
              {t.services.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-500 md:text-base">{t.services.sub}</p>
          </div>
          <div className="h-full w-full translate-y-16 md:translate-y-20">
            <CircularGallery items={items} radius={radius} autoRotateSpeed={0.05} />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-paper to-transparent"
          />
        </div>
      </div>

      {/* Mobile / tablette: carrousel horizontal au toucher, sans transform 3D */}
      <div className="py-20 lg:hidden">
        <div className="px-5 text-center">
          <p className="eyebrow text-gold-600">{t.services.eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl font-medium italic text-ink-950">
            {t.services.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-500">{t.services.subMobile}</p>
        </div>
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <div
              key={item.photo.url}
              className="relative aspect-[3/4] w-[76vw] max-w-[320px] shrink-0 snap-center overflow-hidden rounded-3xl border border-ink-950/10 shadow-xl"
            >
              <img
                src={item.photo.url}
                alt={item.photo.text}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: item.photo.pos || 'center' }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
              />
              <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-300">
                  {item.binomial}
                </p>
                <h3 className="mt-1 font-display text-xl font-medium leading-tight">{item.common}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70">{item.photo.by}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
