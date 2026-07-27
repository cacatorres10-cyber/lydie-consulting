import { ThreeDPhotoCarousel } from '@/components/ui/3d-carousel'
import { useLang } from '@/i18n'
import { GALLERY_IMAGES } from '@/assets/media'
import { buildWhatsAppLink } from '@/config'

export function ServicesGallery() {
  const { t } = useLang()

  const items = t.services.items.map((s, i) => ({
    image: GALLERY_IMAGES[i],
    category: s.category,
    title: s.name,
    tagline: s.tagline,
  }))

  const handleItemClick = (index: number) => {
    const serviceName = t.services.items[index].name
    const href = buildWhatsAppLink(t.services.inquiryMessage.replace('{service}', serviceName))
    window.open(href, '_blank', 'noreferrer')
  }

  return (
    <section id="showcase" className="bg-dots relative border-y border-ink-950/10 bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
        <p className="eyebrow text-gold-600">{t.services.eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-medium italic text-ink-950 sm:text-4xl md:text-6xl">
          {t.services.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-xs text-ink-500 sm:text-sm md:text-base">
          {t.services.sub}
        </p>
      </div>
      <div className="mt-10 md:mt-14">
        <ThreeDPhotoCarousel
          items={items}
          prevLabel={t.services.prevLabel}
          nextLabel={t.services.nextLabel}
          onItemClick={handleItemClick}
        />
      </div>
    </section>
  )
}
