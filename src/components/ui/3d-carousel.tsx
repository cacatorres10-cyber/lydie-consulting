import { useEffect, useState } from 'react'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface CarouselItem {
  image: string
  category: string
  title: string
  tagline: string
}

// Largeur de face responsive: le rayon et l'espacement en decoulent (voir cylinderWidth)
function useFaceWidth() {
  const [faceWidth, setFaceWidth] = useState(260)
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth
      if (w < 480) setFaceWidth(148)
      else if (w < 640) setFaceWidth(168)
      else if (w < 768) setFaceWidth(200)
      else if (w < 1024) setFaceWidth(240)
      else if (w < 1280) setFaceWidth(270)
      else setFaceWidth(300)
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])
  return faceWidth
}

interface ThreeDPhotoCarouselProps {
  items: CarouselItem[]
  prevLabel?: string
  nextLabel?: string
  onItemClick?: (index: number) => void
}

export function ThreeDPhotoCarousel({
  items,
  prevLabel = 'Previous',
  nextLabel = 'Next',
  onItemClick,
}: ThreeDPhotoCarouselProps) {
  const faceWidth = useFaceWidth()
  const faceCount = items.length
  const anglePerItem = 360 / faceCount
  const cylinderWidth = faceWidth * faceCount
  const radius = cylinderWidth / (2 * Math.PI)
  const perspective = radius * 3.4

  // La carte du premier plan est agrandie par la perspective: la hauteur du
  // conteneur doit accommoder cet agrandissement pour ne jamais la rogner.
  const faceHeight = faceWidth * (4 / 3)
  const maxScale = perspective / (perspective - radius)
  const containerHeight = Math.ceil(faceHeight * maxScale) + 24

  const rotation = useMotionValue(0)
  const transform = useTransform(rotation, (v) => `rotate3d(0, 1, 0, ${v}deg)`)
  const controls = useAnimation()

  const goTo = (direction: 1 | -1) => {
    controls.start({
      rotateY: rotation.get() + direction * anglePerItem,
      transition: { type: 'spring', stiffness: 100, damping: 30, mass: 0.4 },
    })
  }

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{ height: containerHeight, perspective: `${perspective}px`, transformStyle: 'preserve-3d' }}
    >
      <motion.div
        drag="x"
        className="relative flex h-full origin-center cursor-grab justify-center touch-pan-y active:cursor-grabbing"
        style={{
          transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: 'preserve-3d',
        }}
        onDrag={(_, info) => rotation.set(rotation.get() + info.offset.x * 0.05)}
        onDragEnd={(_, info) => {
          controls.start({
            rotateY: rotation.get() + info.velocity.x * 0.05,
            transition: { type: 'spring', stiffness: 100, damping: 30, mass: 0.1 },
          })
        }}
        animate={controls}
      >
        {items.map((item, i) => (
          <motion.div
            key={`${item.title}-${i}`}
            className={`absolute flex h-full origin-center items-center justify-center p-1.5 sm:p-2 ${
              onItemClick ? 'cursor-pointer' : ''
            }`}
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${i * anglePerItem}deg) translateZ(${radius}px)`,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            onTap={() => onItemClick?.(i)}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-ink-950/10 bg-ink-900/10 shadow-2xl">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                draggable={false}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
              />
              <div className="pointer-events-none absolute bottom-0 left-0 w-full p-3 text-white sm:p-4">
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-gold-300 sm:text-[10px]">
                  {item.category}
                </p>
                <h3 className="mt-1 font-display text-sm font-medium leading-tight sm:text-lg md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 hidden text-[10px] leading-snug text-white/70 sm:block sm:text-xs">
                  {item.tagline}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-1 sm:px-3">
        <button
          type="button"
          onClick={() => goTo(-1)}
          aria-label={prevLabel}
          className="pointer-events-auto flex h-10 w-10 animate-nudge-left items-center justify-center rounded-full border border-ink-950/10 bg-white/85 text-ink-800 shadow-lg backdrop-blur-md transition-colors hover:text-gold-600 sm:h-12 sm:w-12"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => goTo(1)}
          aria-label={nextLabel}
          className="pointer-events-auto flex h-10 w-10 animate-nudge-right items-center justify-center rounded-full border border-ink-950/10 bg-white/85 text-ink-800 shadow-lg backdrop-blur-md transition-colors hover:text-gold-600 sm:h-12 sm:w-12"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
