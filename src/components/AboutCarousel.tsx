import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Zap, ClipboardList, CalendarDays, DollarSign, MonitorPlay, Sun, User } from 'lucide-react'

const CARDS = [
  {
    img: '/LumenNew/scanifly/card0.png',
    title: 'Install Tracker',
    desc: 'Track leads, manage customer pipelines, store documents, and automate follow-ups across your business.',
    icon: Zap,
    color: '#2A85FF',
  },
  {
    img: '/LumenNew/scanifly/card1.png',
    title: 'Taskboard',
    desc: 'Manage your daily, weekly, and monthly workflow in a crystal-clear, user-friendly interface.',
    icon: ClipboardList,
    color: '#14B8A6',
  },
  {
    img: '/LumenNew/scanifly/card2.png',
    title: 'Service Calendar',
    desc: "Schedule your crew's work with drag-and-drop simplicity and readability.",
    icon: CalendarDays,
    color: '#FF383C',
  },
  {
    img: '/LumenNew/scanifly/card3.png',
    title: 'Commission Tracker',
    desc: "Calculate your team's payout with pinpoint, automatic precision.",
    icon: DollarSign,
    color: '#FF8D28',
  },
  {
    img: '/LumenNew/scanifly/card4.png',
    title: 'Proposal Presentations',
    desc: 'Build a contract-winning presentation in minutes. Tailored for both standalone battery and full solar proposals.',
    icon: MonitorPlay,
    color: '#CB30E0',
  },
  {
    img: '/LumenNew/scanifly/card5.png',
    title: 'Solar Design Tool',
    desc: 'Design a highly-accurate solar installation with our easy-to-use, in-depth app.',
    icon: Sun,
    color: '#AC7F5E',
  },
  {
    img: '/LumenNew/scanifly/card6.png',
    title: 'Users & Offices',
    desc: 'Manage your global workforce and office infrastructure in one place.',
    icon: User,
    color: '#34C759',
  },
]

export function AboutCarousel() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [paused, setPaused] = useState(false)
  const [zoomed, setZoomed] = useState<number | null>(null)
  const drag = useRef({ isDown: false, startX: 0, scrollLeft: 0, moved: false })

  useEffect(() => {
    if (paused) return
    const track = trackRef.current
    if (!track) return
    const id = setInterval(() => {
      if (!track) return
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        track.scrollBy({ left: 260, behavior: 'smooth' })
      }
    }, 2600)
    return () => clearInterval(id)
  }, [paused])

  const onMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    const el = trackRef.current
    if (!el) return
    drag.current.isDown = true
    drag.current.moved = false
    drag.current.startX = e.pageX - el.offsetLeft
    drag.current.scrollLeft = el.scrollLeft
    el.dataset.dragging = 'true'
  }
  const stopDrag = () => {
    const el = trackRef.current
    if (el) el.dataset.dragging = 'false'
    drag.current.isDown = false
  }
  const onMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    const el = trackRef.current
    if (!drag.current.isDown || !el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = x - drag.current.startX
    if (Math.abs(walk) > 4) drag.current.moved = true
    el.scrollLeft = drag.current.scrollLeft - walk
  }

  return (
    <div
      className="preview-carousel relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ul
        className="cards carousel-draggable"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onMouseMove={onMouseMove}
      >
        {CARDS.map((card, i) => {
          const Icon = card.icon
          return (
            <li key={i} className="card" style={{ '--card-glow-color': card.color } as React.CSSProperties}>
              <div className="carousel-card-glow" />
              <div className="visual carousel-visual">
                <img
                  src={card.img}
                  alt={card.title}
                  className="img carousel-img"
                  draggable={false}
                  onMouseEnter={() => setZoomed(i)}
                  onMouseLeave={() => setZoomed(null)}
                />
              </div>
              <div className="content">
                <div className="content-wrapper">
                  <div
                    className="feature-icon"
                    style={{
                      background: `linear-gradient(160deg, ${card.color}, color-mix(in srgb, ${card.color} 60%, black))`,
                    }}
                  >
                    <Icon size={18} color="#fff" />
                  </div>
                  <h3 className="title">{card.title}</h3>
                  <p className="desc">{card.desc}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      {zoomed !== null &&
        createPortal(
          <div className="carousel-zoom-overlay" onMouseLeave={() => setZoomed(null)}>
            <img src={CARDS[zoomed].img} alt={CARDS[zoomed].title} className="carousel-zoom-img" />
          </div>,
          document.body
        )}
    </div>
  )
}
