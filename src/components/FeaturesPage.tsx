import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { SiteNavbar } from './SiteNavbar'
import './FeaturesPage.css'

function TypewriterSegments({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (count >= text.length) return
    const t = setTimeout(() => setCount(c => c + 1), 55)
    return () => clearTimeout(t)
  }, [inView, count, text.length])

  const done = count >= text.length

  return (
    <div ref={ref} className="features-typewriter">
      {text.slice(0, count)}
      {!done && <span className="features-typewriter-cursor" />}
    </div>
  )
}

const CARDS = [
  {
    title: 'Install Tracker / CRM',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
  },
  {
    title: 'Smart Critiques',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
  },
  {
    title: 'Immersion Capsule',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
  },
  {
    title: 'Color Engine',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
  },
  {
    title: 'Asset Library',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
  },
  {
    title: 'Team Collab',
    img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
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
      <section className="h-screen p-4 md:p-6 relative" style={{ background: '#000' }}>
        <SiteNavbar />
        <div className="container">
          <div className="features-heading">
            <span className="features-heading-label">Visual arts</span>
            <TypewriterSegments text="The all-in-one operating system for contractors and service businesses." />
          </div>
          <main>
            <ul ref={listRef} {...dragHandlers}>
              {CARDS.map((card, i) => (
                <li key={i}>
                  <article>
                    <a href="#">{card.title}</a>
                    <div>
                      <img src={card.img} alt={card.title} />
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
