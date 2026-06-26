import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle'

type FeatureCardData = {
  num: string
  title: string
  icon: string
  items: string[]
}

const featureCards: FeatureCardData[] = [
  {
    num: '01', title: 'Project Storyboard.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: ['Plan your visuals scene by scene', 'Annotate frames with director notes', 'Export to PDF or share with crew', 'Version history & timeline view'],
  },
  {
    num: '02', title: 'Smart Critiques.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: ['AI-powered visual analysis', 'Creative notes from collaborators', 'Seamless tool integrations'],
  },
  {
    num: '03', title: 'Immersion Capsule.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: ['Notification silencing mode', 'Ambient soundscapes library', 'Schedule syncing with sessions'],
  },
  {
    num: '04', title: 'Color Engine.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: ['Professional grade color tools', 'LUT import & export', 'Real-time preview rendering'],
  },
  {
    num: '05', title: 'Asset Library.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: ['Centralized media storage', 'Smart tagging & search', 'Cloud sync across devices'],
  },
  {
    num: '06', title: 'Team Collab.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: ['Live co-editing sessions', 'Comment threads on frames', 'Role-based permissions'],
  },
]

function FeatureCard({ card }: { card: FeatureCardData }) {
  return (
    <div className="bg-[#212121] rounded-2xl flex flex-col h-full w-[260px] sm:w-[280px] flex-shrink-0">
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded overflow-hidden flex-shrink-0">
          <img
            src={card.icon}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-150"
          />
        </div>
        <div className="flex items-start justify-between">
          <h3 className="text-primary font-medium text-sm sm:text-base">{card.title}</h3>
          <span className="text-gray-500 text-xs">{card.num}</span>
        </div>
        <ul className="flex flex-col gap-1.5 flex-1">
          {card.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="text-primary w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              <span className="text-gray-400 text-xs leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <button className="flex items-center gap-1 text-primary text-xs font-medium group w-fit">
          Learn more
          <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  )
}

function VideoCard() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden flex-shrink-0 w-full lg:w-[340px] h-[480px]"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover"
        src="/LumenNew/feature.mp4"
      />
      <div className="absolute bottom-4 left-4 text-sm font-medium" style={{ color: '#E1E0CC' }}>Your creative canvas.</div>
    </motion.div>
  )
}

export function PrismaFeatures() {
  const carouselRef = useRef<HTMLDivElement>(null)

  return (
    <section className="min-h-screen bg-black py-20 px-4 md:px-8 relative">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Everything You Need to Run Your Business', className: 'text-primary font-semibold' },
            ]}
          />
        </div>

        <div className="flex gap-4 items-stretch lg:h-[480px]">
          {/* Static video card */}
          <VideoCard />

          {/* Draggable carousel */}
          <div className="flex-1 overflow-hidden relative">
            <motion.div
              ref={carouselRef}
              className="flex gap-3 h-full cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: -(featureCards.length * 295 - 800), right: 0 }}
              dragElastic={0.05}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
              whileTap={{ cursor: 'grabbing' }}
            >
              {featureCards.map((card, i) => (
                <FeatureCard key={i} card={card} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
