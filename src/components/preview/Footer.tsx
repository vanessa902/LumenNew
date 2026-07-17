import { useState } from 'react'
import { Youtube, Instagram, Linkedin, Facebook } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Platform',
    links: ['Install Tracker', 'Taskboard', 'Service Calendar', 'Commission Tracker', 'Proposal Presentations', 'Solar Design Tool', 'Users & Offices'],
  },
  {
    title: 'Lumentrack for',
    links: ['Solar Installers', 'Roofers', 'Electricians', 'Field Service Teams', 'Sales Teams'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Guides', 'Case Studies', 'Comparisons', 'Help Center'],
  },
  {
    title: 'Help',
    links: ['Support', 'Changelog', 'Templates', 'Status'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact Us', 'Integrations', 'Features'],
  },
]

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-black text-white/70 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-16 pb-10">
        <img src="/LumenNew/logo.svg" alt="Lumentrack" className="h-6 md:h-7 w-auto mb-10" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-white/10 pt-10">
          {COLUMNS.map(col => (
            <div key={col.title}>
              <h4 className="text-white text-sm font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <p className="text-sm text-white/80 mb-3">Get Lumentrack updates delivered directly to your inbox.</p>
            <form
              onSubmit={e => e.preventDefault()}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent border border-white/20 rounded-md px-3 py-2 text-xs text-white placeholder:text-white/40 outline-none focus:border-white/50 w-56"
              />
              <button
                type="submit"
                className="bg-primary text-black text-xs font-semibold px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[10px] text-white/30 mt-3 max-w-xs">
              By subscribing you agree to our Privacy Policy and provide consent to receive updates from our
              company.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-3">
              {[Youtube, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
            <p className="text-[10px] text-white/30">© 2026 Lumentrack, Inc. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[10px] text-white/30">
          {['Terms', 'Privacy', 'Security', 'Support', 'Sitemap'].map(link => (
            <a key={link} href="#" className="hover:text-white/60 transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="relative select-none pointer-events-none pb-4">
        <div className="whitespace-nowrap text-[10vw] font-extrabold tracking-tight text-white/10">
          TRACK &middot; SELL &middot; GROW &middot; TRACK &middot; SELL &middot; GROW
        </div>
      </div>
    </footer>
  )
}
