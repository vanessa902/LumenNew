import { useEffect, useRef, useState } from 'react'

const CARDS = [
  {
    title: 'Organized Sales Flow',
    desc: 'Track every lead, proposal, and installation in one place. Keep your sales team aligned with full access to the work pipeline at every step.',
    color: '#2A85FF',
  },
  {
    title: 'Easy for Teams',
    desc: 'With minimal training required, everyone – from your internal staff to external vendors and collaborators – can keep track of what’s happening in your business.',
    color: '#14B8A6',
  },
  {
    title: 'Customizable Interface',
    desc: 'Each business has different needs. Lumentrack® can fit them all. Whether you’re tracking a solar installation, keeping in touch with your workforce, or drafting a new proposal, this is the only CRM solution you’ll ever need.',
    color: '#CB30E0',
  },
  {
    title: 'Smart Integrations',
    desc: 'The age of having several accounts for distinct tools is over. Lumentrack® allows you to centralize and streamline your previous workflow thanks to easy-to-implement connections with some of the industry’s leading software and solutions.',
    color: '#FF8D28',
  },
]

export function AboutCarousel() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [paused, setPaused] = useState(false)
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
        {CARDS.map((card, i) => (
          <li key={i} className="card" style={{ '--card-glow-color': card.color } as React.CSSProperties}>
            <div className="carousel-card-glow" />
            <div className="content">
              <div className="content-wrapper">
                <h3 className="title">{card.title}</h3>
                <p className="desc">{card.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
