import { useEffect, useRef } from 'react'
import { SiteNavbar } from './SiteNavbar'
import './ContactUsPage.css'

function randomColors(count: number) {
  return new Array(count)
    .fill(0)
    .map(() => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'))
}

export function ContactUsPage() {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let app: { tubes: { setColors: (c: string[]) => void; setLightsColors: (c: string[]) => void } } | null = null
    let cancelled = false

    const onClick = () => {
      if (!app) return
      app.tubes.setColors(randomColors(3))
      app.tubes.setLightsColors(randomColors(4))
    }

    // @ts-expect-error remote ESM module without type declarations
    import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js')
      .then(mod => {
        if (cancelled || !canvas) return
        const TubesCursor = mod.default
        app = TubesCursor(canvas, {
          tubes: {
            colors: ['#f967fb', '#53bc28', '#6958d5'],
            lights: {
              intensity: 200,
              colors: ['#83f36e', '#fe8a2e', '#ff008a', '#60aed5'],
            },
          },
        })
        document.body.addEventListener('click', onClick)
      })
      .catch(err => {
        console.error('TubesCursor failed to load', err)
      })

    return () => {
      cancelled = true
      document.body.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div id="app" className="contact-us-page">
      <div id="canvas" ref={canvasRef} />
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
