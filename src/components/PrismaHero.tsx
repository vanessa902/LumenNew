import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ParallaxMockup } from './ParallaxMockup'
import { SiteNavbar } from './SiteNavbar'

function TypeWriter({ phrases }: { phrases: string[] }) {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const text = phrases[phraseIndex]
    let i = 0
    let holdTimeout: ReturnType<typeof setTimeout>

    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        holdTimeout = setTimeout(() => {
          setDisplayed('')
          setPhraseIndex(p => (p + 1) % phrases.length)
        }, 1600)
      }
    }, 80)

    return () => {
      clearInterval(interval)
      clearTimeout(holdTimeout)
    }
  }, [phraseIndex, phrases])

  return (
    <span>
      {displayed}
      <span className="inline-block w-[3px] align-middle ml-1 animate-pulse" style={{ height: '0.8em', background: '#E1E0CC', borderRadius: 2 }} />
    </span>
  )
}

export function PrismaHero() {
  return (
    <section className="h-screen p-4 md:p-6" style={{ background: '#000' }}>
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background video */}
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/LumenNew/download.mp4"
        />
        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Logo top-left */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
          <img src="/LumenNew/logo.svg" alt="Logo" className="h-8 md:h-10 w-auto" />
        </div>

        {/* Navbar */}
        <SiteNavbar />

        {/* Parallax mockup — flush to section bottom, 20% smaller */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end pointer-events-none z-10 px-4">
          <p
            className="font-semibold leading-[0.85] tracking-[-0.07em] text-[13vw] sm:text-[12vw] md:text-[11vw] lg:text-[10vw] xl:text-[9.5vw] 2xl:text-[10vw] mb-2"
            style={{ color: '#E1E0CC', textShadow: '0 4px 32px rgba(0,0,0,0.7), 0 1px 8px rgba(0,0,0,0.5)' }}
          >
            <TypeWriter phrases={['One Platform', 'Total Control']} />
          </p>
          <div style={{ width: '64%' }}>
            <ParallaxMockup />
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center px-4 md:px-8 pb-6 md:pb-10 z-20">
          <motion.button
            className="group bg-primary text-black font-medium text-sm sm:text-base rounded-full flex items-center gap-2 hover:gap-3 transition-all w-fit pl-5 pr-1 py-1"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Book a Demo
            <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="text-primary w-4 h-4" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  )
}
