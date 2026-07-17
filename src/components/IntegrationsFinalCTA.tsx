import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const TEXT = 'Discover why Lumentrack is the leading management solution in the solar and general service businesses.'

function TypewriterHeading() {
  const ref = useRef<HTMLHeadingElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (count >= TEXT.length) return
    const t = setTimeout(() => setCount(c => c + 1), 22)
    return () => clearTimeout(t)
  }, [inView, count])

  const done = count >= TEXT.length

  return (
    <h2 ref={ref}>
      {TEXT.slice(0, count)}
      {!done && <span className="integrations-final-cta-cursor" />}
    </h2>
  )
}

export function IntegrationsFinalCTA() {
  return (
    <section className="integrations-final-cta">
      <TypewriterHeading />

      <div className="btn-border-wrap mkt-start-btn-wrap">
        <Link to="/contact" className="mkt-start-btn">
          Book a Demo
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
