import { useRef } from 'react'
import { Zap, User, ClipboardCheck } from 'lucide-react'
import '../components/FeaturesPage.css'

const CARDS = [
  {
    title: 'Install Tracker/ CRM',
    description: 'Track leads, manage customer pipelines, store documents, and automate follow-ups across your entire team.',
    img: '/LumenNew/scanifly/card0.png',
    color: '#2A85FF',
    Icon: Zap,
  },
  {
    title: 'Users & Offices',
    description: 'People & Places. Manage your global workforce and office infrastructure in one place.',
    img: '/LumenNew/scanifly/card6.png',
    color: '#34C759',
    Icon: User,
  },
  {
    title: 'Install Validation',
    description: 'Our validation tool runs comprehensive checks to identify installation errors and environment mismatches in seconds.',
    img: '/LumenNew/scanifly/card7.png',
    color: '#FFCC00',
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

export function IntegrationsFeatureCards() {
  const listRef = useRef<HTMLUListElement>(null)
  const dragHandlers = useDragScroll(listRef)

  return (
    <div className="features-page" style={{ minHeight: 'auto' }}>
      <section className="p-4 md:p-6 relative" style={{ background: '#000', height: '80vh' }}>
        <div className="container">
          <div className="features-heading">
            <div className="features-typewriter" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
              <div className="features-typewriter-line">Don't see your tech stack?</div>
              <div className="features-typewriter-line">Let's build it.</div>
            </div>
            <span className="features-heading-label" style={{ marginTop: '1.5rem', marginBottom: 0 }}>
              Built for your team
            </span>
            <p className="integrations-feature-subtext">
              We are constantly expanding our library.
              <br />
              Tell us what is missing and we will help bring your workflow together.
            </p>
          </div>
          <main>
            <ul ref={listRef} className="integrations-feature-ul" {...dragHandlers}>
              {CARDS.map((card, i) => (
                <li key={i}>
                  <article style={{ '--card-glow-color': card.color } as React.CSSProperties}>
                    <div className="features-card-glow" />
                    <div className="features-card-icon">
                      <card.Icon size={20} />
                    </div>
                    <h3 className="features-card-title">{card.title}</h3>
                    <p className="features-card-desc">{card.description}</p>
                    <div className="features-card-media">
                      <img src={card.img} alt={card.title} className="features-card-img--media" />
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
