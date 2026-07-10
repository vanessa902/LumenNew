import { SiteNavbar } from './SiteNavbar'
import './ContactUsPage.css'

export function ContactUsPage() {
  return (
    <div id="app" className="contact-us-page">
      <div id="canvas" />
      <SiteNavbar />
      <div className="hero">
        <h2>Let's talk</h2>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out and let's build something together.</p>
        <a href="mailto:hello@lumentrack.com" className="contact-us-cta">
          hello@lumentrack.com
        </a>
      </div>
    </div>
  )
}
