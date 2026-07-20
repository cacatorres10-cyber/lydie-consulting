import React, { useState, useEffect, useRef } from 'react'
import type { HTMLAttributes } from 'react'

// A simple utility for conditional class names
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ')
}

// Define the type for a single gallery item
export interface GalleryItem {
  common: string
  binomial: string
  photo: {
    url: string
    text: string
    pos?: string
    by: string
  }
}

// Define the props for the CircularGallery component
interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[]
  /** Controls how far the items are from the center. */
  radius?: number
  /** Controls the speed of auto-rotation when not scrolling. */
  autoRotateSpeed?: number
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.02, ...props }, ref) => {
    const [rotation, setRotation] = useState(0)
    const [isScrolling, setIsScrolling] = useState(false)
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const animationFrameRef = useRef<number | null>(null)

    // Effect to handle scroll-based rotation
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling(true)
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
        const scrollRotation = scrollProgress * 360
        setRotation(scrollRotation)

        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false)
        }, 150)
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
      }
    }, [])

    // Effect for auto-rotation when not scrolling
    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling) {
          setRotation((prev) => prev + autoRotateSpeed)
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate)
      }

      animationFrameRef.current = requestAnimationFrame(autoRotate)

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }, [isScrolling, autoRotateSpeed])

    const anglePerItem = 360 / items.length

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn('relative w-full h-full flex items-center justify-center', className)}
        style={{ perspective: '2000px' }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem
            const totalRotation = rotation % 360
            const relativeAngle = (itemAngle + totalRotation + 360) % 360
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle)
            const opacity = Math.max(0.3, 1 - normalizedAngle / 180)

            return (
              <div
                key={item.photo.url}
                role="group"
                aria-label={item.common}
                className="absolute w-[240px] h-[340px] -ml-[120px] -mt-[170px] md:w-[300px] md:h-[400px] md:-ml-[150px] md:-mt-[200px]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: '50%',
                  top: '50%',
                  opacity: opacity,
                  transition: 'opacity 0.3s linear',
                }}
              >
                <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden group border border-ink-950/10 bg-ink-900/10 backdrop-blur-lg">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-14 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-300">
                      {item.binomial}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-medium leading-tight md:text-2xl">
                      {item.common}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">{item.photo.by}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  },
)

CircularGallery.displayName = 'CircularGallery'

export { CircularGallery }
