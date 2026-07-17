import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function IntegrationsFinalCTA() {
  return (
    <section className="integrations-final-cta">
      <h2>
        Discover why Lumentrack is the leading management
        <br />
        solution in the solar and general service businesses.
      </h2>

      <div className="btn-border-wrap mkt-start-btn-wrap">
        <Link to="/contact" className="mkt-start-btn">
          Book a Demo
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
