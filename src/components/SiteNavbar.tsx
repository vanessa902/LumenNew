import { Link } from 'react-router-dom'

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'About', href: '/' },
  { label: 'Contact Us', href: '/' },
]

export function SiteNavbar() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
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
  )
}
