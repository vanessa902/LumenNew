import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const IMAGE_URL = '/LumenNew/astronaut.jpg'
const OVERLAY_URL = '/LumenNew/overlay.png'

export function ImageScaleSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const boxOneRef = useRef<HTMLDivElement>(null)
  const boxTwoRef = useRef<HTMLDivElement>(null)
  const boxThreeRef = useRef<HTMLDivElement>(null)
  const boxFourRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLImageElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Start collapsed (small peeking mockup), reveal to full image on scroll.
      gsap.set(boxOneRef.current, { scaleY: 1 })
      gsap.set(boxTwoRef.current, { scaleX: 1 })
      gsap.set(boxThreeRef.current, { scaleY: 0.7 })
      gsap.set(boxFourRef.current, { scaleX: 1 })
      gsap.set(imageWrapperRef.current, { xPercent: 50 })
      gsap.set(imageRef.current, { xPercent: -40, scale: 0.9, transformOrigin: 'bottom center' })
      gsap.set(overlayRef.current, { opacity: 1 })

      const counterObj = { val: 0 }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          pin: true,
          end: '+=1500',
          scrub: true,
        },
      })

      tl.to(
        counterObj,
        {
          val: 100,
          duration: 90,
          snap: { val: 1 },
          onUpdate: () => {
            if (counterRef.current) counterRef.current.textContent = String(Math.round(counterObj.val))
          },
        },
        0
      )
        .to(headingRef.current, { duration: 60, color: '#DEDBC8' }, 0)
        .to(overlayRef.current, { opacity: 0, duration: 10 }, 0)
        .to(boxOneRef.current, { scaleY: 0, duration: 10 }, 30)
        .to(boxTwoRef.current, { scaleX: 0, duration: 10 }, 40)
        .to(boxThreeRef.current, { scaleY: 0, duration: 10 }, 50)
        .to(boxFourRef.current, { scaleX: 0, duration: 10 }, 60)
        .to(imageRef.current, { scale: 1, duration: 70 }, 30)
        .to(imageWrapperRef.current, { xPercent: 0, duration: 20 }, 85)
        .to(imageRef.current, { xPercent: 0, duration: 20 }, 85)
        .to(leftRef.current, { opacity: 0, duration: 15 }, 90)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="image-scale__section relative bg-black overflow-hidden" style={{ height: '100vh' }}>
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 h-full relative">
        <div className="divider absolute left-1/2 top-0 w-px h-full bg-white/10 -translate-x-1/2 z-[3]" />

        <div ref={imageWrapperRef} className="image-scale__right absolute inset-0 z-[2] overflow-hidden">
          <img ref={imageRef} src={IMAGE_URL} alt="" className="object-cover h-full w-full" />
        </div>

        <div ref={boxOneRef} className="box box--one absolute z-[3] bg-black border-b border-white/10 top-0 left-1/2 h-1/2 w-1/2 origin-top" style={{ transform: 'scaleY(0)' }} />
        <div ref={boxTwoRef} className="box box--two absolute z-[3] bg-black border-l border-white/10 top-1/2 left-3/4 w-1/4 h-1/2 origin-right" style={{ transform: 'scaleX(0)' }} />
        <div ref={boxThreeRef} className="box box--three absolute z-[3] bg-black top-1/2 left-1/2 w-1/4 h-1/2 origin-bottom" style={{ transform: 'scaleY(0)' }} />
        <div ref={boxFourRef} className="box box--four absolute z-[3] bg-black top-1/2 left-1/2 w-[12.5%] h-1/4 origin-left" style={{ transform: 'scaleX(0)' }} />

        <img
          ref={overlayRef}
          src={OVERLAY_URL}
          alt=""
          className="absolute z-[4] top-1/2 left-[62.5%] w-[12.5%] h-1/4 object-contain"
          style={{ opacity: 0 }}
        />

        <div ref={leftRef} className="image-scale__left relative z-[4] grid content-center h-full w-1/2 pr-12">
          <span className="text-primary text-2xl md:text-3xl mb-6 block">Built for scale.</span>
          <h2 ref={headingRef} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-8 text-white font-semibold">
            <span ref={counterRef}>0</span>%
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-[50ch]">
            Every workflow, every install, every customer — tracked with the same precision from the first square foot to the last.
          </p>
        </div>
      </div>
    </section>
  )
}
