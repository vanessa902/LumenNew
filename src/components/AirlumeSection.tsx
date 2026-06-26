import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Bell, Gift, Zap, Star, Search, CreditCard, Headphones } from 'lucide-react'

const FF = "'Haffer X Trial', 'Space Grotesk', system-ui, sans-serif"

const fadeUp = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
})

const features = [
  { icon: <Zap size={20} />, title: 'Real-Time Fare Predictions', desc: 'Know exactly when to book to get the best prices.' },
  { icon: <MapPin size={20} />, title: 'Smart Route Optimization', desc: 'AI suggests faster, cheaper, or more comfortable routes.' },
  { icon: <Star size={20} />, title: 'Dynamic Loyalty Points Tracking', desc: 'See your points grow live as you fly and book.' },
  { icon: <Bell size={20} />, title: 'Personalized Flight Alerts', desc: 'Get alerts for price drops on favorite routes.' },
  { icon: <Gift size={20} />, title: 'Integrated Rewards Redemption', desc: 'Use points for discounts without leaving the site.' },
  { icon: <Search size={20} />, title: 'Airline Comparison Engine', desc: 'Compare 200+ airlines in seconds for the best deal.' },
  { icon: <Headphones size={20} />, title: 'Seat & Service Recommendations', desc: 'AI suggests best seats based on your preferences.' },
  { icon: <CreditCard size={20} />, title: 'Secure One-Click Checkout', desc: 'Book flights quickly with secure AI payments.' },
]

export function AirlumeSection() {
  return (
    <div style={{ fontFamily: FF, background: '#0a0a1a' }}>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(160deg, #0d0d2b 0%, #1a1560 40%, #2d1b8a 70%, #1a0d4d 100%)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '20%', right: '5%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '30%', width: 500, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* Navbar */}
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 48px', position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 7l8 5 8-5-8-5zM4 12l8 5 8-5M4 17l8 5 8-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.01em' }}>AirLume<span style={{ color: '#818cf8' }}>.Ai</span></span>
          </div>
          <div style={{ display: 'flex', gap: 32 }}>
            {['Home', 'Features', 'Loyalty Points', 'How It Works', 'FAQ'].map(item => (
              <a key={item} href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >{item}</a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', fontWeight: 500, textDecoration: 'none' }}>Log In</a>
            <button style={{ fontFamily: FF, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', border: 'none', borderRadius: 100, padding: '10px 22px', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer' }}>
              Contact Us
            </button>
          </div>
        </nav>

        {/* Hero content */}
        <div style={{ textAlign: 'center', padding: '60px 48px 40px', position: 'relative', zIndex: 5 }}>
          <motion.div {...fadeUp(0)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#818cf8' }} />
            <span style={{ color: '#a5b4fc', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em' }}>Fly Smarter With Airlume.AI</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20, maxWidth: 700, margin: '0 auto 20px' }}>
            Save Time & Money<br />On Every Trip
            <span style={{ display: 'inline-flex', gap: 8, marginLeft: 12, verticalAlign: 'middle' }}>
              <span style={{ fontSize: '0.45em', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', borderRadius: 8, padding: '4px 8px' }}>✈</span>
              <span style={{ fontSize: '0.45em', background: 'rgba(99,102,241,0.3)', borderRadius: 8, padding: '4px 8px', border: '1px solid rgba(99,102,241,0.4)' }}>🌍</span>
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', maxWidth: 460, margin: '16px auto 36px', lineHeight: 1.6 }}>
            Discover the cheapest fares, get personalized flight recommendations, and book effortlessly with our AI-powered platform.
          </motion.p>

          <motion.button {...fadeUp(0.3)} style={{ fontFamily: FF, display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', border: 'none', borderRadius: 100, padding: '14px 28px', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 8px 32px rgba(99,102,241,0.4)' }}>
            Search Flights Now
            <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowRight size={14} />
            </span>
          </motion.button>
        </div>

        {/* Floating UI cards */}
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', padding: '0 48px 80px', display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gap: 20, alignItems: 'center', zIndex: 5 }}>

          {/* Left card: Points */}
          <motion.div {...fadeUp(0.2)} style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 20 }}>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', marginBottom: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Your Airlume Points</div>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>Last Update</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>13,200</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 100, padding: '2px 8px', margin: '4px 0 14px', fontSize: '0.6rem', color: '#a5b4fc', fontWeight: 600 }}>● Active</div>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>Points Available</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: '10px 14px' }}>
              <div>
                <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)' }}>Next Reward</div>
                <div style={{ fontSize: '0.75rem', color: '#fff', fontWeight: 600 }}>$20 off at 500 pts</div>
              </div>
              <div style={{ width: 28, height: 28, background: 'rgba(99,102,241,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowRight size={12} color="#a5b4fc" />
              </div>
            </div>
          </motion.div>

          {/* Center card: Smart Search */}
          <motion.div {...fadeUp(0.1)} style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 24, padding: 28, textAlign: 'center' }}>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', marginBottom: 16, background: 'rgba(255,255,255,0.05)', borderRadius: 100, padding: '6px 14px', display: 'inline-block' }}>Airlume Smart Search</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>Scanning 200+<br />Airlines In Real-Time</div>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'conic-gradient(#6366f1 94%, rgba(255,255,255,0.1) 94%)', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#0d0d2b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 800, color: '#fff' }}>94%</div>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>Price expected to drop for sydney flight in three days 🔥</div>
            <div style={{ marginTop: 16, borderRadius: 16, overflow: 'hidden', height: 80, background: 'linear-gradient(135deg, #1e40af, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=60") center/cover', opacity: 0.4 }} />
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex' }}>
                  {[1,2,3].map(i => <div key={i} style={{ width: 20, height: 20, borderRadius: '50%', background: `hsl(${i*40+200},70%,60%)`, border: '2px solid rgba(0,0,0,0.3)', marginLeft: i > 1 ? -6 : 0 }} />)}
                </div>
                <span style={{ color: '#fff', fontSize: '0.65rem', fontWeight: 600 }}>90% Users Satisfied</span>
              </div>
            </div>
          </motion.div>

          {/* Right card: Best Deal */}
          <motion.div {...fadeUp(0.2)} style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80' }} />
              <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Best Deal Found</span>
            </div>
            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>Last Update</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 6 }}>NYC → LAX<br />Only $179</div>
            <div style={{ fontSize: '0.65rem', color: '#4ade80', marginBottom: 16, fontWeight: 600 }}>Saved 28% Using AI Prediction</div>
            <div style={{ width: 32, height: 32, background: 'rgba(99,102,241,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowRight size={14} color="#a5b4fc" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES SECTION ── */}
      <section style={{ background: '#fff', padding: '100px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#f0f0ff', border: '1px solid #c7d2fe', borderRadius: 100, padding: '6px 16px', marginBottom: 20 }}>
              <span style={{ color: '#6366f1', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em' }}>AI Features Section</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: '#0f0f1a', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: 600, margin: '0 auto 16px' }}>
              AI-Powered Features, Travel Effortless With Airlume
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
              Enjoy seamless booking, smarter flight predictions, and personalized rewards powered by airlume's AI for smoother journeys.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {features.map((f, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                style={{
                  background: i === 0 ? 'linear-gradient(135deg, #4f46e5, #7c3aed)' : '#f9f9ff',
                  border: i === 0 ? 'none' : '1px solid #e8e8f0',
                  borderRadius: 20,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  cursor: 'pointer',
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 12, background: i === 0 ? 'rgba(255,255,255,0.2)' : '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: i === 0 ? '#fff' : '#6366f1' }}>
                  {f.icon}
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.88rem', color: i === 0 ? '#fff' : '#0f0f1a', lineHeight: 1.3 }}>{f.title}</div>
                <div style={{ fontSize: '0.75rem', color: i === 0 ? 'rgba(255,255,255,0.65)' : '#9ca3af', lineHeight: 1.55 }}>{f.desc}</div>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: i === 0 ? 'rgba(255,255,255,0.9)' : '#6366f1', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none', marginTop: 'auto' }}>
                  Learn more <ArrowRight size={12} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
