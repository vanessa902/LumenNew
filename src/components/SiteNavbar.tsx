import { Link } from 'react-router-dom'

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

export function SiteNavbar() {
  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-4 md:gap-8">
          <nav className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {NAV_ITEMS.map(item => (
              <Link
                key={item.label}
                to={item.href}
                className="text-[10px] sm:text-xs md:text-sm font-medium transition-colors"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E1E0CC')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="fixed top-2 md:top-3 right-3 md:right-6 z-50 flex items-center gap-2 md:gap-3">
        <style>{`
          @keyframes navbar-book-demo-sheen {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .navbar-book-demo-btn {
            background: linear-gradient(
              90deg,
              rgba(42, 133, 255, 0.35),
              rgba(127, 212, 255, 0.45),
              rgba(42, 133, 255, 0.35),
              rgba(168, 85, 247, 0.35),
              rgba(42, 133, 255, 0.35)
            );
            background-size: 300% 100%;
            animation: navbar-book-demo-sheen 5s linear infinite;
          }
        `}</style>
        <Link
          to="/login"
          className="inline-flex items-center rounded-full border border-white/15 px-3.5 py-1.5 md:px-5 md:py-2 text-[10px] sm:text-xs md:text-sm font-medium text-white/80 hover:text-white hover:border-white/30 transition-colors"
        >
          Login
        </Link>
        <Link
          to="/contact"
          className="navbar-book-demo-btn inline-flex items-center gap-1.5 rounded-full border border-[#2A85FF]/50 px-3.5 py-1.5 md:px-5 md:py-2 text-[10px] sm:text-xs md:text-sm font-semibold text-white backdrop-blur-md shadow-[0_0_20px_-4px_rgba(42,133,255,0.6)] transition-transform hover:scale-105"
        >
          Book a Demo
        </Link>
      </div>
    </>
  )
}
