import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { ClipboardList, CalendarDays, DollarSign, MonitorPlay, Zap, Sun, User, ClipboardCheck } from 'lucide-react'
import { SiteNavbar } from './SiteNavbar'
import { BookDemoCTA } from './BookDemoCTA'
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
    color: '#FF8D28',
    hasIcon: true,
    Icon: DollarSign,
  },
  {
    title: 'Proposal Presentations',
    description: 'Build and export standalone battery or solar proposals tailored for high-usage or outage-prone customers.',
    img: '/LumenNew/scanifly/card4.png',
    color: '#CB30E0',
    hasIcon: true,
    Icon: MonitorPlay,
  },
  {
    title: 'Solar Design Tool',
    description: 'Create a highly accurate solar design by using our integrated Solar Design Tool.',
    img: '/LumenNew/scanifly/card5.png',
    color: '#AC7F5E',
    hasIcon: true,
    Icon: Sun,
    comingSoon: true,
  },
  {
    title: 'Users & Offices',
    description: 'People & Places. Manage your global workforce and office infrastructure in one place.',
    img: '/LumenNew/scanifly/card6.png',
    color: '#34C759',
    hasIcon: true,
    Icon: User,
  },
  {
    title: 'Install Validation',
    description: 'Our validation tool runs comprehensive checks to identify installation errors and environment mismatches in seconds.',
    img: '/LumenNew/scanifly/card7.png',
    color: '#FFCC00',
    hasIcon: true,
    Icon: ClipboardCheck,
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
        className="min-h-screen p-4 md:p-6 pb-16 relative"
        style={{
          background: "url('/LumenNew/features-bg.jpg') center center / cover no-repeat, #000",
          overflow: 'hidden',
          isolation: 'isolate',
        }}
      >
        <SiteNavbar />
        <div className="container">
          <div className="features-heading">
            <span className="features-heading-label">FEATURES</span>
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
                    {card.comingSoon && <span className="features-card-coming-soon">Coming Soon</span>}
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

      <div style={{ marginTop: '4rem' }}>
        <BookDemoCTA
          title="Ready to explore every feature?"
          subtitle="Book a demo and see how Lumentrack brings it all together for your team."
        />
      </div>
    </div>
  )
}
