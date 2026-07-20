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
    <section id="services" className="glow-gold scroll-mt-0 relative bg-ink-950" style={{ height: '320vh' }}>
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-56 bg-gradient-to-b from-ink-950 via-ink-950/70 to-transparent"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-20 text-center">
          <p className="eyebrow text-gold-400">{t.services.eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-paper md:text-6xl">
            {t.services.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-paper/50 md:text-base">
            {t.services.sub}
          </p>
        </div>
        <div className="h-full w-full translate-y-16 md:translate-y-20">
          <CircularGallery items={items} radius={radius} autoRotateSpeed={0.05} />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>
    </section>
  )
}
