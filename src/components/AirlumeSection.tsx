import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Bell, Gift, Zap, Star, Search, CreditCard, Headphones, Plane } from 'lucide-react'

const FF = "'Haffer X Trial', 'Space Grotesk', system-ui, sans-serif"

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { delay, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
})

const features = [
  { icon: <Zap size={18} />, title: 'Real-Time Fare Predictions', desc: 'Know exactly when to book to get the best prices on every route.' },
  { icon: <MapPin size={18} />, title: 'Smart Route Optimization', desc: 'AI suggests faster, cheaper, or more comfortable travel routes.' },
  { icon: <Star size={18} />, title: 'Dynamic Loyalty Points Tracking', desc: 'See your points grow live as you fly and book new trips.' },
  { icon: <Bell size={18} />, title: 'Personalized Flight Alerts', desc: 'Get instant alerts for price drops on your favorite routes.' },
  { icon: <Gift size={18} />, title: 'Integrated Rewards Redemption', desc: 'Use points for discounts without leaving the platform.' },
  { icon: <Search size={18} />, title: 'Airline Comparison Engine', desc: 'Compare 200+ airlines in seconds for the absolute best deal.' },
  { icon: <Headphones size={18} />, title: 'Seat & Service Recommendations', desc: 'AI suggests the best seats based on your travel preferences.' },
  { icon: <CreditCard size={18} />, title: 'Secure One-Click Checkout', desc: 'Book flights instantly with secure AI-powered payments.' },
]

// Vertical column background strips
function ColumnBackground() {
  const cols = 26
  const strips = Array.from({ length: cols }, (_, i) => {
    const t = i / (cols - 1)
    // alternating slight hue shift for ribbed look
    const isDark = i % 2 === 0
    const hue = 240 + (t * 20 - 10)
    const sat = isDark ? 72 : 65
    const midL = isDark ? 28 : 35
    return (
      <div
        key={i}
        style={{
          flex: 1,
          height: '100%',
          background: `linear-gradient(180deg,
            hsl(${hue},${sat}%,15%) 0%,
            hsl(${hue},${sat}%,${midL}%) 45%,
            hsl(${hue + 10},${sat - 5}%,12%) 100%)`,
          boxShadow: isDark
            ? 'inset 2px 0 6px rgba(100,120,255,0.18), inset -2px 0 6px rgba(100,120,255,0.10)'
            : 'inset 1px 0 3px rgba(150,160,255,0.08)',
          borderLeft: `1px solid rgba(100,120,255,${isDark ? 0.18 : 0.07})`,
        }}
      />
    )
  })
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
      zIndex: 0,
    }}>
      {strips}
      {/* Top blue-purple glow overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '55%',
        background: 'linear-gradient(180deg, rgba(45,27,138,0.72) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
      {/* Side glows */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '8%',
        width: 360,
        height: 360,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 68%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '6%',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 68%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '28%',
        width: 480,
        height: 280,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, transparent 68%)',
        pointerEvents: 'none',
      }} />
    </div>
  )
}

// Glassmorphism card base style
const glassCard = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  background: 'rgba(255,255,255,0.88)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.92)',
  borderRadius: 20,
  boxShadow: '0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)',
  ...extra,
})

export function AirlumeSection() {
  return (
    <div style={{ fontFamily: FF }}>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: '#16145c',
        paddingBottom: 0,
      }}>
        <ColumnBackground />

        {/* ── NAVBAR ── */}
        <nav style={{
          position: 'relative',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '22px 52px',
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: 'linear-gradient(135deg, #5b5bd6, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 14px rgba(99,102,241,0.55)',
            }}>
              {/* Diamond/plane icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L22 9L12 16L2 9L12 2Z" fill="white" opacity="0.9" />
                <path d="M2 9L12 22L22 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
              </svg>
            </div>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
              AirLume<span style={{ color: '#818cf8' }}>.Ai</span>
            </span>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
            {['Home', 'Features', 'Loyalty Points', 'How It Works', 'FAQ'].map(item => (
              <a
                key={item}
                href="#"
                style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.8rem', fontWeight: 500, textDecoration: 'none', fontFamily: FF, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.68)')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.8rem', fontWeight: 500, textDecoration: 'none', fontFamily: FF }}>Log In</a>
            <button style={{
              fontFamily: FF,
              background: 'linear-gradient(135deg, #5b5bd6 0%, #7c3aed 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: 100,
              padding: '10px 24px',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(99,102,241,0.45)',
            }}>
              Contact Us
            </button>
          </div>
        </nav>

        {/* ── HERO TEXT ── */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '52px 48px 36px' }}>
          {/* Badge */}
          <motion.div
            {...fadeUp(0)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.18)', border: '1px solid rgba(99,102,241,0.35)', borderRadius: 100, padding: '6px 18px', marginBottom: 30 }}
          >
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#818cf8', boxShadow: '0 0 6px #818cf8' }} />
            <span style={{ color: '#c7d2fe', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.07em' }}>Fly Smarter With Airlume.AI</span>
          </motion.div>

          {/* H1 */}
          <motion.div {...fadeUp(0.1)} style={{ position: 'relative', display: 'inline-block' }}>
            <h1 style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              margin: '0 0 8px',
              maxWidth: 720,
            }}>
              Save Time &amp; Money<br />On Every Trip
            </h1>
            {/* Emoji badges inline */}
            <div style={{
              position: 'absolute',
              right: -56,
              bottom: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}>
              <span style={{
                background: 'linear-gradient(135deg,#5b5bd6,#7c3aed)',
                borderRadius: 10,
                padding: '5px 9px',
                fontSize: '1.1rem',
                boxShadow: '0 4px 16px rgba(99,102,241,0.45)',
              }}>✈</span>
              <span style={{
                background: 'rgba(30,27,110,0.7)',
                border: '1px solid rgba(99,102,241,0.35)',
                borderRadius: 10,
                padding: '5px 9px',
                fontSize: '1.1rem',
              }}>🌍</span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.2)}
            style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.92rem', maxWidth: 440, margin: '20px auto 38px', lineHeight: 1.65, fontWeight: 400 }}
          >
            discover the cheapest fares, get personalized flight recommendations, and book effortlessly with our AI-powered platform.
          </motion.p>

          {/* CTA */}
          <motion.button
            {...fadeUp(0.3)}
            style={{
              fontFamily: FF,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              background: 'linear-gradient(135deg, #5b5bd6 0%, #7c3aed 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: 100,
              padding: '14px 28px',
              fontSize: '0.88rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 8px 36px rgba(99,102,241,0.48)',
              letterSpacing: '-0.01em',
            }}
          >
            Search Flights Now
            <span style={{
              background: 'rgba(255,255,255,0.22)',
              borderRadius: '50%',
              width: 30,
              height: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <ArrowRight size={14} />
            </span>
          </motion.button>
        </div>

        {/* ── FLOATING CARDS ── */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: 980,
          margin: '0 auto',
          padding: '10px 48px 0',
          display: 'grid',
          gridTemplateColumns: '1fr 1.45fr 1fr',
          gap: 18,
          alignItems: 'end',
        }}>

          {/* LEFT CARD – Airlume Points */}
          <motion.div {...fadeUp(0.25)} style={glassCard({ padding: 22, marginBottom: 24 })}>
            <div style={{ fontSize: '0.62rem', color: '#6b7280', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>Your Airlume Points</div>
            <div style={{ fontSize: '0.6rem', color: '#9ca3af', marginBottom: 12 }}>Last Update</div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
              <span style={{ fontSize: '2.1rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1 }}>13,200</span>
              <span style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                color: '#6366f1',
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.25)',
                borderRadius: 100,
                padding: '2px 8px',
                letterSpacing: '0.04em',
              }}>● Active</span>
            </div>

            <div style={{ fontSize: '0.6rem', color: '#9ca3af', marginBottom: 10, fontWeight: 500 }}>Points Available</div>

            {/* Star icons row */}
            <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
              {[1,2,3,4].map(i => (
                <div key={i} style={{
                  width: 28,
                  height: 8,
                  borderRadius: 4,
                  background: i <= 3 ? 'linear-gradient(90deg, #6366f1, #8b5cf6)' : '#e5e7eb',
                }} />
              ))}
            </div>

            {/* Next Reward block */}
            <div style={{
              background: '#f8f8ff',
              border: '1px solid #e0e0f0',
              borderRadius: 12,
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
              <div>
                <div style={{ fontSize: '0.58rem', color: '#9ca3af', marginBottom: 2 }}>Next Reward  →</div>
                <div style={{ fontSize: '0.78rem', color: '#111827', fontWeight: 700 }}>$20 off at 500 pts</div>
              </div>
              <Star size={14} color="#6366f1" fill="#6366f1" />
            </div>

            {/* Skeleton UI bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <div style={{ height: 7, borderRadius: 4, background: '#e5e7eb', width: '85%' }} />
              <div style={{ height: 7, borderRadius: 4, background: '#e5e7eb', width: '65%' }} />
            </div>

            {/* Dark block */}
            <div style={{
              marginTop: 12,
              height: 34,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #1e1b6e, #312e81)',
              boxShadow: '0 4px 12px rgba(49,46,129,0.35)',
            }} />
          </motion.div>

          {/* CENTER CARD – Smart Search (largest) */}
          <motion.div {...fadeUp(0.12)} style={glassCard({ padding: 26, textAlign: 'center', position: 'relative', overflow: 'hidden' })}>
            {/* Top pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.18)',
              borderRadius: 100,
              padding: '5px 14px',
              marginBottom: 14,
            }}>
              <Plane size={11} color="#6366f1" />
              <span style={{ fontSize: '0.68rem', color: '#6366f1', fontWeight: 600 }}>Airlume Smart Search</span>
            </div>

            <h3 style={{
              fontSize: '1.55rem',
              fontWeight: 800,
              color: '#0f0f1a',
              letterSpacing: '-0.035em',
              lineHeight: 1.12,
              margin: '0 0 18px',
            }}>
              Scanning 200+<br />Airlines In Real-Time
            </h3>

            {/* Circular progress */}
            <div style={{ position: 'relative', width: 82, height: 82, margin: '0 auto 14px' }}>
              <svg width="82" height="82" viewBox="0 0 82 82" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="41" cy="41" r="35" fill="none" stroke="#e5e7eb" strokeWidth="7" />
                <circle
                  cx="41" cy="41" r="35"
                  fill="none"
                  stroke="url(#progressGrad)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 35 * 0.94} ${2 * Math.PI * 35 * 0.06}`}
                />
                <defs>
                  <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#111827',
                letterSpacing: '-0.03em',
              }}>94%</div>
            </div>

            <p style={{ fontSize: '0.7rem', color: '#6b7280', lineHeight: 1.55, maxWidth: 220, margin: '0 auto 16px' }}>
              Price expected to drop for sydney flight in three days 🔥
            </p>

            {/* Airplane image card */}
            <div style={{
              borderRadius: 14,
              overflow: 'hidden',
              height: 90,
              position: 'relative',
              background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
              marginBottom: 0,
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=70")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.45,
              }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(30,64,175,0.6) 0%, rgba(124,58,237,0.4) 100%)',
              }} />
              {/* Avatars + label */}
              <div style={{
                position: 'absolute',
                bottom: 12,
                left: 14,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                <div style={{ display: 'flex' }}>
                  {['#60a5fa','#a78bfa','#34d399'].map((c, i) => (
                    <div key={i} style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: c,
                      border: '2px solid rgba(255,255,255,0.7)',
                      marginLeft: i > 0 ? -7 : 0,
                    }} />
                  ))}
                </div>
                <span style={{ color: '#fff', fontSize: '0.65rem', fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>90% Users Satisfied</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD – Best Deal */}
          <motion.div {...fadeUp(0.25)} style={glassCard({ padding: 22, marginBottom: 24 })}>
            {/* Status dot */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 6px #22c55e',
              }} />
              <span style={{ fontSize: '0.62rem', color: '#374151', fontWeight: 700, letterSpacing: '0.04em' }}>Best Deal Found</span>
            </div>

            <div style={{ fontSize: '0.6rem', color: '#9ca3af', marginBottom: 8 }}>Last Update</div>

            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 8 }}>
              NYC → LAX<br />
              <span style={{ fontSize: '1.75rem' }}>Only $179</span>
            </div>

            {/* Savings badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              background: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(34,197,94,0.25)',
              borderRadius: 100,
              padding: '3px 10px',
              marginBottom: 18,
            }}>
              <span style={{ fontSize: '0.62rem', color: '#16a34a', fontWeight: 700 }}>Saved 28% Using AI Prediction</span>
            </div>

            {/* Skeleton bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 14 }}>
              <div style={{ height: 7, borderRadius: 4, background: '#f3f4f6', width: '90%' }} />
              <div style={{ height: 7, borderRadius: 4, background: '#f3f4f6', width: '70%' }} />
            </div>

            {/* Arrow button */}
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #5b5bd6, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(99,102,241,0.45)',
              cursor: 'pointer',
            }}>
              <ArrowRight size={15} color="#fff" />
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM WHITE CURVE ── */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          marginTop: 0,
          height: 72,
          background: '#fff',
          borderRadius: '50% 50% 0 0 / 72px 72px 0 0',
          marginLeft: -40,
          marginRight: -40,
        }} />
      </section>

      {/* ── FEATURES SECTION ── */}
      <section style={{ background: '#fff', padding: '80px 52px 100px', marginTop: -2 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>

          {/* Header */}
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: '#ede9fe',
              border: '1px solid #c4b5fd',
              borderRadius: 100,
              padding: '6px 18px',
              marginBottom: 22,
            }}>
              <Zap size={11} color="#7c3aed" />
              <span style={{ color: '#7c3aed', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em' }}>AI Features Section</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.8vw, 3rem)',
              fontWeight: 800,
              color: '#0f0f1a',
              letterSpacing: '-0.03em',
              lineHeight: 1.14,
              maxWidth: 580,
              margin: '0 auto 16px',
            }}>
              AI-Powered Features, Travel Effortless With Airlume
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.88rem', maxWidth: 460, margin: '0 auto', lineHeight: 1.65 }}>
              Enjoy seamless booking, smarter flight predictions, and personalized rewards powered by Airlume's AI for smoother journeys.
            </p>
          </motion.div>

          {/* 4×2 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {features.map((f, i) => {
              const isHighlighted = i === 0
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.06)}
                  style={{
                    background: isHighlighted
                      ? 'linear-gradient(145deg, #3730a3 0%, #1e1b6e 40%, #312e81 100%)'
                      : '#f9f9fd',
                    border: isHighlighted ? 'none' : '1px solid #ebebf5',
                    borderRadius: 18,
                    padding: '22px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    cursor: 'pointer',
                    transition: 'transform 0.18s, box-shadow 0.18s',
                    boxShadow: isHighlighted
                      ? '0 8px 32px rgba(55,48,163,0.35)'
                      : '0 1px 4px rgba(0,0,0,0.04)',
                  }}
                  whileHover={{ y: -3, boxShadow: isHighlighted ? '0 14px 40px rgba(55,48,163,0.45)' : '0 6px 20px rgba(0,0,0,0.09)' }}
                >
                  {/* Icon */}
                  <div style={{
                    width: 38,
                    height: 38,
                    borderRadius: 11,
                    background: isHighlighted ? 'rgba(255,255,255,0.18)' : '#ede9fe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isHighlighted ? '#fff' : '#6366f1',
                  }}>
                    {f.icon}
                  </div>

                  {/* Title */}
                  <div style={{
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    color: isHighlighted ? '#fff' : '#111827',
                    lineHeight: 1.3,
                    letterSpacing: '-0.01em',
                  }}>
                    {f.title}
                  </div>

                  {/* Desc */}
                  <div style={{
                    fontSize: '0.73rem',
                    color: isHighlighted ? 'rgba(255,255,255,0.62)' : '#9ca3af',
                    lineHeight: 1.58,
                    flexGrow: 1,
                  }}>
                    {f.desc}
                  </div>

                  {/* Learn more */}
                  <a
                    href="#"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      color: isHighlighted ? 'rgba(255,255,255,0.88)' : '#6366f1',
                      fontSize: '0.73rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      marginTop: 2,
                    }}
                  >
                    Learn more <ArrowRight size={11} />
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
