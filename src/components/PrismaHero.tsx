import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { WordsPullUp } from './WordsPullUp'

export function PrismaHero() {
  return (
    <section className="h-screen p-4 md:p-6" style={{ background: '#000' }}>
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background video */}
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />
        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Navbar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
            <nav className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries'].map(item => (
                <a
                  key={item}
                  href="#"
                  className="text-[10px] sm:text-xs md:text-sm font-medium transition-colors"
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#E1E0CC')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-12 items-end px-4 md:px-8 pb-6 md:pb-10 gap-4">
          <div className="col-span-12 lg:col-span-8">
            <h1
              className="font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
              style={{ color: '#E1E0CC' }}
            >
              <WordsPullUp text="Prisma" showAsterisk />
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 pb-2">
            <motion.p
              className="text-primary/70 text-xs sm:text-sm md:text-base"
              style={{ lineHeight: 1.2 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.
            </motion.p>
            <motion.button
              className="group bg-primary text-black font-medium text-sm sm:text-base rounded-full flex items-center gap-2 hover:gap-3 transition-all w-fit pl-5 pr-1 py-1"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Join the lab
              <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="text-primary w-4 h-4" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
