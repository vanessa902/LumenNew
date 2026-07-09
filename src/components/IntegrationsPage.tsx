import { useEffect, useRef, useState } from 'react'
import { SiteNavbar } from './SiteNavbar'
import './IntegrationsPage.css'

const HEADING = 'Smart integrations simplify your workflow'
const DARK_START = 0

function TypewriterHeading({ text, speed = 35, delay = 400 }: { text: string; speed?: number; delay?: number }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    const timeout = setTimeout(() => {
      let i = 0
      interval = setInterval(() => {
        i++
        setCount(i)
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, delay)
    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, speed, delay])

  const shown = text.slice(0, count)

  return (
    <h1 className="mkt-heading">
      <span style={{ color: '#000000' }}>{shown.slice(0, DARK_START)}</span>
      <span style={{ color: '#ffffff' }}>{shown.slice(DARK_START)}</span>
      {!done && <span className="mkt-cursor" />}
    </h1>
  )
}

const AVATARS = [
  { url: '/LumenNew/scanifly/logo-1.png', orbit: 1, angle: 270, radius: 177, size: 58, shape: 'logo', glow: 'purple', delay: 0.6 },
  { url: '/LumenNew/scanifly/logo-2.png', orbit: 2, angle: 60, radius: 251, size: 58, shape: 'logo', glow: 'yellow', delay: 0.9 },
  { url: '/LumenNew/scanifly/logo-3.png', orbit: 2, angle: 180, radius: 251, size: 78, shape: 'logo', glow: 'pink', delay: 1.1 },
  { url: '/LumenNew/scanifly/logo-3b.png', orbit: 2, angle: 300, radius: 251, size: 58, shape: 'logo', glow: 'blue', delay: 1.3 },
  { url: '/LumenNew/scanifly/logo-4.png', orbit: 3, angle: 130, radius: 325, size: 88, shape: 'logo', glow: 'pink', delay: 1.5 },
  { url: '/LumenNew/scanifly/logo-5.png', orbit: 4, angle: 30, radius: 399, size: 58, shape: 'logo', glow: 'purple', delay: 1.7 },
  { url: '/LumenNew/scanifly/logo-6.png', orbit: 4, angle: 95, radius: 399, size: 88, shape: 'logo', glow: 'orange', delay: 1.9 },
]

const LOGOS = [
  'https://polo-pecan-73837341.figma.site/_assets/v11/1e7b0e6fcc016cd28aec5c68990118b8c54c35a5.svg',
  'https://polo-pecan-73837341.figma.site/_assets/v11/3eac03c183db2ae080d910159211c14843398b61.svg',
  'https://polo-pecan-73837341.figma.site/_assets/v11/17705a4c0023a0e5a99154dfb10582adbbf4260b.svg',
  'https://polo-pecan-73837341.figma.site/_assets/v11/0e5f442b09dc5c248e3e60d40a65505fb1887228.svg',
  'https://polo-pecan-73837341.figma.site/_assets/v11/63f99030ceb459e3c9ab9e429cfa2353491d3816.svg',
]

export function IntegrationsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="integrations-page">
      <div
        className="mkt-app"
        style={{
          background: "url('/LumenNew/integrations-bg.jpg') center center / cover no-repeat",
        }}
      >
        <SiteNavbar />

        <div className="mkt-hero">
          <div className="mkt-hero-left">
            <TypewriterHeading text={HEADING} />

            <div className="btn-border-wrap mkt-start-btn-wrap">
              <button className="mkt-start-btn">
                Start Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="mkt-cursor-badge">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                <path d="M2 2L18 10L10.5 12.5L8 20L2 2Z" fill="#A068FF" />
              </svg>
              <span className="mkt-david-pill">David</span>
            </div>
          </div>

          <div className="mkt-hero-right" ref={containerRef}>
            <div className="mkt-orbits">
              <div className="mkt-orbit mkt-orbit-4" />
              <div className="mkt-orbit mkt-orbit-3" />
              <div className="mkt-orbit mkt-orbit-2" />
              <div className="mkt-orbit mkt-orbit-1" />

              <div className="mkt-orbit-center">
                <img src="/LumenNew/icon-mark.svg" alt="Logo" className="mkt-center-logo" />
              </div>

              {AVATARS.map((a, i) => (
                <div
                  key={i}
                  className={`mkt-avatar mkt-avatar--${a.shape} mkt-avatar--glow-${a.glow}`}
                  style={{
                    width: a.size,
                    height: a.size,
                    animationDelay: `${a.delay}s`,
                    transform: `translate(-50%, -50%) rotate(${a.angle}deg) translate(${a.radius}px) rotate(${-a.angle}deg)`,
                  }}
                >
                  <img src={a.url} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mkt-ticker">
          <div className="mkt-ticker-track">
            {Array.from({ length: 4 }).flatMap((_, r) =>
              LOGOS.map((logo, i) => <img key={`${r}-${i}`} src={logo} alt="" className="mkt-ticker-logo" />)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
