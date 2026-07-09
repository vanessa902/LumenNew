import { useEffect, useRef, useState } from 'react'
import { SiteNavbar } from './SiteNavbar'
import { PrismaAbout } from './PrismaAbout'
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

const ORBIT_WAVE: Record<number, { dir: 'left' | 'right'; duration: number }> = {
  1: { dir: 'left', duration: 6 },
  2: { dir: 'right', duration: 8 },
  3: { dir: 'right', duration: 10 },
  4: { dir: 'left', duration: 12 },
}

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

              {AVATARS.map((a, i) => {
                const wave = ORBIT_WAVE[a.orbit]
                const waveDelay = -(a.angle / 360) * wave.duration
                return (
                  <div
                    key={i}
                    className={`mkt-avatar mkt-avatar--${a.shape} mkt-avatar--glow-${a.glow} mkt-avatar--wave-${wave.dir}`}
                    style={
                      {
                        width: a.size,
                        height: a.size,
                        animationDelay: `${a.delay}s, ${waveDelay}s`,
                        '--avatar-angle': `${a.angle}deg`,
                        '--avatar-radius': `${a.radius}px`,
                        '--avatar-wave-duration': `${wave.duration}s`,
                        transform: `translate(-50%, -50%) rotate(${a.angle}deg) translate(${a.radius}px) rotate(${-a.angle}deg)`,
                      } as React.CSSProperties
                    }
                  >
                    <img src={a.url} alt="" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="mkt-type-section">
        <div className="mkt-type-lines">
          <div className="mkt-type-line mkt-type-line--left">
            <span className="mkt-type-accent">Automate</span> Your Workflow
            <span className="mkt-type-dash" />
          </div>
          <div className="mkt-type-line mkt-type-line--right">
            <span className="mkt-type-accent">Supercharge</span> Your Sales Process
          </div>
          <div className="mkt-type-line mkt-type-line--left">
            <span className="mkt-type-dash" />
            <span className="mkt-type-accent">Unlock</span> Seamless Syncing
          </div>
        </div>
        <button className="mkt-type-cta">
          <span className="mkt-type-cta-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          Start Integrating
        </button>
      </section>

      <PrismaAbout />
    </div>
  )
}
