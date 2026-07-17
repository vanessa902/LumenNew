import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './BookDemoCTA.css'

export function BookDemoCTA({
  title = 'Ready to see Lumentrack in action?',
  subtitle = 'Book a demo and discover how Lumentrack can run your business.',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="book-demo-cta">
      <h2>{title}</h2>
      <p>{subtitle}</p>

      <Link to="/contact" className="book-demo-cta-btn">
        Book a Demo
        <ArrowRight size={18} />
      </Link>
    </section>
  )
}
