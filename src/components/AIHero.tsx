import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Hls from 'hls.js'

const VIDEO_SRC = 'https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8'
const POSTER = 'https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Njg5NzIyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent px-6 py-4 flex items-center justify-end">
      <div className="flex items-center gap-4">
        <a href="#" className="hidden sm:block text-white/80 hover:text-white text-sm font-medium transition-colors" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
          Book A Demo
        </a>
        <button
          className="bg-white text-black text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-white/90 transition-colors"
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          Get Started
        </button>
      </div>
    </nav>
  )
}

export function AIHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(VIDEO_SRC)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.log('Auto-play prevented:', e))
      })
      return () => hls.destroy()
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = VIDEO_SRC
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(e => console.log('Auto-play prevented:', e))
      })
    }
  }, [])

  return (
    <div style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
      <Navbar />

      <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
        {/* Background video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          poster={POSTER}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Video overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Decorative gradients */}
        <div
          className="absolute pointer-events-none mix-blend-screen"
          style={{ top: '-20%', left: '20%', width: 600, height: 600, background: 'rgba(30,27,75,0.2)', filter: 'blur(120px)', borderRadius: '50%' }}
        />
        <div
          className="absolute pointer-events-none mix-blend-screen"
          style={{ bottom: '-10%', right: '20%', width: 500, height: 500, background: 'rgba(49,46,129,0.2)', filter: 'blur(120px)', borderRadius: '50%' }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mt-20 space-y-12 px-6 py-24">
          <motion.h2
            className="text-3xl sm:text-5xl lg:text-[48px] leading-[1.1] text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Design at the speed of thought
          </motion.h2>

          <motion.h1
            className="text-6xl sm:text-8xl lg:text-[136px] font-semibold leading-[0.9] tracking-tighter bg-gradient-to-b from-white via-white to-[#b4c0ff] bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Build Faster
          </motion.h1>

          <motion.p
            className="text-lg sm:text-[20px] leading-[1.65] text-white max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Create fully functional, SEO-optimized websites in seconds with our advanced AI engine.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button className="group flex items-center gap-3 bg-white pl-6 pr-2 py-2 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
              <span className="font-medium text-lg" style={{ color: '#0a0400' }}>
                Start Building Free
              </span>
              <span className="w-10 h-10 rounded-full bg-[#3054ff] group-hover:bg-[#2040e0] flex items-center justify-center transition-colors">
                <ArrowRight className="text-white w-5 h-5" />
              </span>
            </button>

            <button className="group flex items-center gap-2 text-white/70 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 backdrop-blur-sm transition-all">
              <span className="font-medium">See Examples</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
