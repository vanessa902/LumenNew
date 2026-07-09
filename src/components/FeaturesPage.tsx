import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { ClipboardList, CalendarDays, DollarSign, MonitorPlay, Zap } from 'lucide-react'
import { SiteNavbar } from './SiteNavbar'
import './FeaturesPage.css'

function TypewriterSegments({ lines }: { lines: string[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const full = lines.join('')

  useEffect(() => {
    if (!inView) return
    if (count >= full.length) return
    const t = setTimeout(() => setCount(c => c + 1), 55)
    return () => clearTimeout(t)
  }, [inView, count, full.length])

  const done = count >= full.length

  let remaining = count
  return (
    <div ref={ref} className="features-typewriter">
      {lines.map((line, i) => {
        const shown = line.slice(0, Math.max(0, remaining))
        remaining -= line.length
        const isLast = i === lines.length - 1
        return (
          <div key={i} className="features-typewriter-line">
            {shown}
            {isLast && !done && <span className="features-typewriter-cursor" />}
          </div>
        )
      })}
    </div>
  )
}

const CARDS = [
  {
    title: 'Install Tracker/ CRM',
    description: 'Track leads, manage customer pipelines, store documents, and automate follow-ups across your entire team.',
    img: '/LumenNew/scanifly/card0.png',
    color: '#2A85FF',
    hasIcon: true,
    Icon: Zap,
  },
  {
    title: 'Taskboard',
    description: 'Visual workflow management for every stage of the job.',
    img: '/LumenNew/scanifly/card1.png',
    color: '#14B8A6',
    hasIcon: true,
    Icon: ClipboardList,
  },
  {
    title: 'Install Calendar',
    description: 'Schedule and track every install phase from one view.',
    img: '/LumenNew/scanifly/card2.png',
    color: '#FF383C',
    hasIcon: true,
    Icon: CalendarDays,
  },
  {
    title: 'Commission Tracker',
    description: 'Automatic payout calculation for setters, closers, managers.',
    img: '/LumenNew/scanifly/card3.png',
    color: '#CB30E0',
    hasIcon: true,
    Icon: DollarSign,
  },
  {
    title: 'Proposal Presentations',
    description: 'Build and export standalone battery or solar proposals tailored for high-usage or outage-prone customers.',
    img: '/LumenNew/scanifly/card4.png',
    color: '#AC7F5E',
    hasIcon: true,
    Icon: MonitorPlay,
  },
  {
    title: 'Asset Library',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    color: '#AC7F5E',
  },
]

function useDragScroll(ref: React.RefObject<HTMLUListElement>) {
  const state = useRef({ isDown: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    const el = ref.current
    if (!el) return
    state.current.isDown = true
    el.dataset.dragging = 'true'
    state.current.startX = e.pageX - el.offsetLeft
    state.current.scrollLeft = el.scrollLeft
  }
  const stop = () => {
    const el = ref.current
    if (!el) return
    state.current.isDown = false
    el.dataset.dragging = 'false'
  }
  const onMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    const el = ref.current
    if (!el || !state.current.isDown) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - state.current.startX) * 1.5
    el.scrollLeft = state.current.scrollLeft - walk
  }

  return { onMouseDown, onMouseUp: stop, onMouseLeave: stop, onMouseMove }
}

export function FeaturesPage() {
  const listRef = useRef<HTMLUListElement>(null)
  const dragHandlers = useDragScroll(listRef)

  return (
    <div className="features-page">
      <section
        className="h-screen p-4 md:p-6 relative"
        style={{ background: "url('/LumenNew/features-bg.jpg') center center / cover no-repeat, #000" }}
      >
        <SiteNavbar />
        <div className="container">
          <div className="features-heading">
            <span className="features-heading-label">Visual arts</span>
            <TypewriterSegments lines={['For the modern', 'service companies']} />
          </div>
          <main>
            <ul ref={listRef} {...dragHandlers}>
              {CARDS.map((card, i) => (
                <li key={i}>
                  <article style={{ '--card-glow-color': card.color } as React.CSSProperties}>
                    {!card.hasIcon && <span className="features-card-number">{i + 1}</span>}
                    <div className="features-card-glow" />
                    {card.hasIcon && card.Icon && (
                      <div className="features-card-icon">
                        <card.Icon size={20} />
                      </div>
                    )}
                    <h3 className="features-card-title">{card.title}</h3>
                    {card.description && <p className="features-card-desc">{card.description}</p>}
                    {!card.hasIcon && <a href="#">{card.title}</a>}
                    <div className="features-card-media">
                      <img
                        src={card.img}
                        alt={card.title}
                        className={card.hasIcon ? 'features-card-img--media' : ''}
                      />
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </section>
    </div>
  )
}
