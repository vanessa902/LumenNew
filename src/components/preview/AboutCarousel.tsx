import { useEffect, useRef, useState } from 'react'
import { TrendingUp, KanbanSquare, CalendarDays, DollarSign, FileText, Sun, Users } from 'lucide-react'

const CARDS = [
  {
    img: '/LumenNew/scanifly/card0.png',
    title: 'Install Tracker',
    desc: 'Track leads, manage customer pipelines, store documents, and automate follow-ups across your business.',
    icon: TrendingUp,
    gradient: 'linear-gradient(135deg, #2A85FF, #7fd4ff)',
  },
  {
    img: '/LumenNew/scanifly/card1.png',
    title: 'Taskboard',
    desc: 'Manage your daily, weekly, and monthly workflow in a crystal-clear, user-friendly interface.',
    icon: KanbanSquare,
    gradient: 'linear-gradient(135deg, #7C3AED, #2A85FF)',
  },
  {
    img: '/LumenNew/scanifly/card2.png',
    title: 'Service Calendar',
    desc: "Schedule your crew's work with drag-and-drop simplicity and readability.",
    icon: CalendarDays,
    gradient: 'linear-gradient(135deg, #06B6D4, #2A85FF)',
  },
  {
    img: '/LumenNew/scanifly/card3.png',
    title: 'Commission Tracker',
    desc: "Calculate your team's payout with pinpoint, automatic precision.",
    icon: DollarSign,
    gradient: 'linear-gradient(135deg, #22C55E, #2A85FF)',
  },
  {
    img: '/LumenNew/scanifly/card4.png',
    title: 'Proposal Presentations',
    desc: 'Build a contract-winning presentation in minutes. Tailored for both standalone battery and full solar proposals.',
    icon: FileText,
    gradient: 'linear-gradient(135deg, #F59E0B, #2A85FF)',
  },
  {
    img: '/LumenNew/scanifly/card5.png',
    title: 'Solar Design Tool',
    desc: 'Design a highly-accurate solar installation with our easy-to-use, in-depth app.',
    icon: Sun,
    gradient: 'linear-gradient(135deg, #EF4444, #2A85FF)',
  },
  {
    img: '/LumenNew/scanifly/card6.png',
    title: 'Users & Offices',
    desc: 'Manage your global workforce and office infrastructure in one place.',
    icon: Users,
    gradient: 'linear-gradient(135deg, #EC4899, #2A85FF)',
  },
]

export function AboutCarousel() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [paused, setPaused] = useState(false)
  const [zoomed, setZoomed] = useState<number | null>(null)

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

  const scrollByDir = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 260, behavior: 'smooth' })
  }

  return (
    <div
      className="preview-carousel relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ul className="cards" ref={trackRef}>
        {CARDS.map((card, i) => {
          const Icon = card.icon
          return (
            <li key={i} className="card">
              <div className="visual carousel-visual">
                <img
                  src={card.img}
                  alt={card.title}
                  className="img carousel-img"
                  onMouseEnter={() => setZoomed(i)}
                  onMouseLeave={() => setZoomed(null)}
                />
              </div>
              <div className="content">
                <div className="content-wrapper">
                  <div
                    className="feature-icon"
                    style={{ background: card.gradient }}
                  >
                    <Icon size={16} color="#fff" />
                  </div>
                  <h3 className="title">{card.title}</h3>
                  <p className="desc">{card.desc}</p>
                </div>
                <a href="#" className="card-link">
                  Learn more
                </a>
              </div>
            </li>
          )
        })}
      </ul>

      <button
        aria-label="Previous"
        className="carousel-arrow carousel-arrow-left"
        onClick={() => scrollByDir(-1)}
      >
        ←
      </button>
      <button
        aria-label="Next"
        className="carousel-arrow carousel-arrow-right"
        onClick={() => scrollByDir(1)}
      >
        →
      </button>

      {zoomed !== null && (
        <div
          className="carousel-zoom-overlay"
          onMouseLeave={() => setZoomed(null)}
        >
          <img src={CARDS[zoomed].img} alt={CARDS[zoomed].title} className="carousel-zoom-img" />
        </div>
      )}
    </div>
  )
}
