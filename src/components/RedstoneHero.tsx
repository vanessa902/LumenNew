import { useEffect, useRef } from 'react'

function lerp(a: number, b: number, t: number) { return a + (b - a) * t }
function clamp(v: number, lo: number, hi: number) { return Math.min(Math.max(v, lo), hi) }
function ease(t: number) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t }

const S_W = 220, S_H = 148, MARGIN = 32, NAV_H = 74

export function RedstoneHero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const label = labelRef.current
    if (!card || !label) return

    function update() {
      if (!card || !label) return
      const vw = window.innerWidth
      const vh = window.innerHeight
      const scrollY = window.scrollY

      const t = ease(clamp(scrollY / vh, 0, 1))

      const T_W = Math.round(vw * 0.56)
      const T_H = Math.round(vh * 0.62)

      const w = Math.round(lerp(S_W, T_W, t))
      const h = Math.round(lerp(S_H, T_H, t))

      const startLeft = vw - S_W - MARGIN
      const startTop  = NAV_H
      const endLeft   = (vw - T_W) / 2
      const endTop    = (vh - T_H) / 2

      const left = Math.round(lerp(startLeft, endLeft, t))
      const top  = Math.round(lerp(startTop,  endTop,  t))
      const br   = Math.round(lerp(10, 18, t))

      card.style.width        = w + 'px'
      card.style.height       = h + 'px'
      card.style.left         = left + 'px'
      card.style.top          = top  + 'px'
      card.style.borderRadius = br + 'px'

      label.style.opacity = String(clamp(1 - t * 2, 0, 1))
    }

    function init() {
      if (!card) return
      const vw = window.innerWidth
      card.style.left   = (vw - S_W - MARGIN) + 'px'
      card.style.top    = NAV_H + 'px'
      card.style.width  = S_W + 'px'
      card.style.height = S_H + 'px'
      update()
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', init,   { passive: true })
    init()

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', init)
    }
  }, [])

  return (
    <>
      <style>{`
        @font-face {
          font-family: 'Haffer X Trial';
          src: local('Haffer X Trial');
          font-weight: 100 900;
        }
        .rs-ff { font-family: 'Haffer X Trial', 'Space Grotesk', system-ui, sans-serif; }
        .rs-nav {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 32px;
          gap: 24px;
        }
        .rs-nav-logo { display: flex; flex-direction: column; line-height: 1; text-decoration: none; color: #fff; flex-shrink: 0; }
        .rs-nav-logo-top { font-size: 1.05rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
        .rs-nav-logo-sub { font-size: 0.55rem; font-weight: 400; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.55); margin-top: 2px; }
        .rs-nav-links { display: flex; align-items: center; gap: 6px; list-style: none; flex: 1; justify-content: center; }
        .rs-nav-links a { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: rgba(255,255,255,0.85); text-decoration: none; padding: 6px 10px; white-space: nowrap; transition: color 0.2s; }
        .rs-nav-links a:hover { color: #fff; }
        .rs-has-plus::after { content: ' +'; color: rgba(255,255,255,0.45); }
        .rs-nav-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .rs-btn-talk { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: #000; background: #fff; border: none; border-radius: 100px; padding: 10px 22px; cursor: pointer; white-space: nowrap; transition: opacity 0.2s; font-family: inherit; }
        .rs-btn-talk:hover { opacity: 0.85; }
        .rs-btn-icon { width: 38px; height: 38px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.25); background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #fff; transition: border-color 0.2s; }
        .rs-btn-icon:hover { border-color: rgba(255,255,255,0.6); }
        .rs-hero { position: relative; width: 100vw; height: 100vh; display: flex; flex-direction: column; justify-content: flex-end; padding: 0 32px 140px; overflow: hidden; }
        .rs-hero-title { font-size: clamp(4.5rem, 11.5vw, 14rem); font-weight: 800; line-height: 0.88; letter-spacing: -0.025em; text-transform: uppercase; color: #fff; pointer-events: none; user-select: none; padding-bottom: 8px; }
        .rs-preview-card { position: fixed; border-radius: 10px; overflow: hidden; box-shadow: 0 16px 48px rgba(0,0,0,0.7); z-index: 40; cursor: pointer; will-change: top, left, width, height, border-radius; }
        .rs-preview-card video { width: 100%; height: 100%; object-fit: cover; display: block; }
        .rs-preview-label { position: absolute; bottom: 0; left: 0; right: 0; padding: 14px 14px 12px; background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; line-height: 1.35; }
        .rs-bottom-row { position: fixed; bottom: 0; left: 0; right: 0; display: flex; align-items: flex-end; justify-content: space-between; padding: 0 32px 36px; pointer-events: none; }
        .rs-bottom-left { display: flex; flex-direction: column; gap: 12px; pointer-events: all; }
        .rs-avatars { display: flex; align-items: center; }
        .rs-avatar { width: 38px; height: 38px; border-radius: 50%; border: 2px solid #000; margin-right: -10px; object-fit: cover; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 700; flex-shrink: 0; }
        .rs-av1 { background: #4ecdc4; color: #000; }
        .rs-av2 { background: #1a1a2e; border: 2px solid #333; }
        .rs-av3 { background: #2d2d2d; border: 2px solid #444; }
        .rs-av4 { background: #c0392b; color: #fff; }
        .rs-rating-row { display: flex; flex-direction: column; gap: 4px; }
        .rs-stars { display: flex; gap: 3px; }
        .rs-star { color: #e74c3c; font-size: 1rem; }
        .rs-trusted { font-size: 0.78rem; font-weight: 500; color: rgba(255,255,255,0.75); letter-spacing: 0.01em; }
        .rs-bottom-right { max-width: 420px; text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 20px; pointer-events: all; }
        .rs-bottom-desc { font-size: 0.9rem; font-weight: 400; line-height: 1.6; color: rgba(255,255,255,0.7); }
        .rs-cta-row { display: flex; align-items: center; gap: 10px; }
        .rs-btn-portfolio { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: #000; background: #fff; border: none; border-radius: 100px; padding: 14px 28px; cursor: pointer; transition: opacity 0.2s; font-family: inherit; }
        .rs-btn-portfolio:hover { opacity: 0.85; }
        .rs-btn-arrow-circle { width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.3); background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #fff; transition: border-color 0.2s; }
        .rs-btn-arrow-circle:hover { border-color: #fff; }
        .rs-floating-actions { position: fixed; right: 32px; bottom: 36px; display: flex; flex-direction: column; gap: 10px; z-index: 60; }
        .rs-fab { width: 48px; height: 48px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.07); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; cursor: pointer; color: #fff; transition: background 0.2s, border-color 0.2s; }
        .rs-fab:hover { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.4); }
        .rs-fab-dots { display: flex; gap: 3px; align-items: center; }
        .rs-fab-dots span { width: 4px; height: 4px; border-radius: 50%; background: #fff; }
        .rs-cta-section { background: #000; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 80px 32px; }
        .rs-cta-title { font-size: clamp(2.8rem, 7.5vw, 8rem); font-weight: 800; line-height: 1.0; letter-spacing: -0.03em; text-transform: uppercase; color: #fff; margin-bottom: 56px; }
        .rs-cta-img-wrap { display: inline-block; vertical-align: middle; margin: 0 12px; border-radius: 8px; overflow: hidden; width: clamp(80px, 10vw, 140px); height: clamp(54px, 6.5vw, 92px); position: relative; top: -6px; box-shadow: 0 8px 32px rgba(0,0,0,0.5); }
        .rs-cta-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .rs-cta-actions { display: flex; align-items: center; gap: 0; }
        .rs-cta-btn-main { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #000; background: #fff; border: none; border-radius: 100px 0 0 100px; padding: 16px 32px 16px 36px; cursor: pointer; transition: opacity 0.2s; font-family: inherit; }
        .rs-cta-btn-main:hover { opacity: 0.85; }
        .rs-cta-btn-arrow { width: 54px; height: 54px; border-radius: 50%; border: none; background: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #000; margin-left: -2px; transition: opacity 0.2s; }
        .rs-cta-btn-arrow:hover { opacity: 0.85; }
        @media (max-width: 900px) {
          .rs-hero { height: auto; min-height: 100vh; padding-top: 90px; }
          .rs-preview-card { width: 160px !important; top: 70px !important; }
          .rs-bottom-row { position: relative; padding: 32px 24px; flex-direction: column; align-items: flex-start; gap: 24px; }
          .rs-bottom-right { text-align: left; align-items: flex-start; }
          .rs-nav-links { display: none; }
          .rs-floating-actions { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav className="rs-nav rs-ff">
        <a href="#" className="rs-nav-logo">
          <span className="rs-nav-logo-top">Redstone</span>
          <span className="rs-nav-logo-sub">Software</span>
        </a>
        <ul className="rs-nav-links">
          <li><a href="#" className="rs-has-plus">Portfolio</a></li>
          <li><a href="#" className="rs-has-plus">Services</a></li>
          <li><a href="#" className="rs-has-plus">Technologies</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Awards &amp; Reviews</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="rs-nav-right">
          <button className="rs-btn-talk">Let's Talk</button>
          <button className="rs-btn-icon" aria-label="Back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* HERO + SCROLL SPACER */}
      <div style={{ height: '250vh' }}>
        <section className="rs-hero rs-ff" style={{ position: 'sticky', top: 0 }}>
          <h1 className="rs-hero-title">
            SAAS. APP.<br />
            AI. E-COMMERCE.
          </h1>
        </section>
      </div>

      {/* PREVIEW CARD */}
      <div className="rs-preview-card rs-ff" ref={cardRef}>
        <video autoPlay muted loop playsInline>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
        <div className="rs-preview-label" ref={labelRef}>Our Life-<br/>Changing Ideas</div>
      </div>

      {/* BOTTOM ROW */}
      <div className="rs-bottom-row rs-ff">
        <div className="rs-bottom-left">
          <div className="rs-avatars">
            <div className="rs-avatar rs-av1">aw</div>
            <div className="rs-avatar rs-av2">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
                <path d="M6 10h8M10 6v8" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="rs-avatar rs-av3">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="rgba(255,255,255,0.3)"/>
              </svg>
            </div>
            <div className="rs-avatar rs-av4">C</div>
          </div>
          <div className="rs-rating-row">
            <div className="rs-stars">
              {[...Array(5)].map((_, i) => <span key={i} className="rs-star">★</span>)}
            </div>
            <span className="rs-trusted">Trusted by 150+ clients</span>
          </div>
        </div>

        <div className="rs-bottom-right">
          <p className="rs-bottom-desc">
            We develop online stores, CRM systems, SaaS solutions, and app
            platforms — integrating AI into processes and business solutions.
          </p>
          <div className="rs-cta-row">
            <button className="rs-btn-portfolio">View Portfolio</button>
            <button className="rs-btn-arrow-circle" aria-label="Go">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* FLOATING ACTIONS */}
      <div className="rs-floating-actions">
        <button className="rs-fab" aria-label="Chat">
          <div className="rs-fab-dots">
            <span></span><span></span><span></span>
          </div>
        </button>
        <button className="rs-fab" aria-label="Call">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* CTA SECTION */}
      <section className="rs-cta-section rs-ff">
        <h2 className="rs-cta-title">
          LET'S MOVE
          <span className="rs-cta-img-wrap">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=180&h=120&fit=crop&q=80" alt="app mockups" />
          </span>
          <br />THE WORLD TOGETHER
        </h2>
        <div className="rs-cta-actions">
          <button className="rs-cta-btn-main">Become a Client</button>
          <button className="rs-cta-btn-arrow" aria-label="Go">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M14 9H4M8 5l-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>
    </>
  )
}
