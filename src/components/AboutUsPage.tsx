import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronRight,
  Search,
  Check,
  Home,
  MessageSquare,
  DollarSign,
  Zap,
  User,
  Info,
  Pencil,
  Settings,
  Sun,
  Moon,
  MapPin,
  Calendar,
  Video,
  MoreVertical,
  Plus,
  LayoutGrid,
  RotateCw,
  SlidersHorizontal,
} from 'lucide-react'
import { SiteNavbar } from './SiteNavbar'
import './AboutUsPage.css'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4'

function AppleLogo({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" className={className}>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function AppleButton({ label = 'Download Aura', full = false }: { label?: string; full?: boolean }) {
  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] ${full ? 'w-full' : ''}`}
    >
      <AppleLogo className="w-4 h-4" />
      {label}
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-[1px]" />
    </button>
  )
}

function SectionEyebrow({ label, tag }: { label: string; tag?: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
      <span className="text-sm text-white/70 font-medium">{label}</span>
      {tag && <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50 text-xs">{tag}</span>}
    </div>
  )
}

const gradientStyle: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise-root)',
}

function Hero() {
  return (
    <section className="relative z-10 pt-16 md:pt-28 pb-20 text-center flex flex-col items-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
      >
        <div>Track, sell and grow</div>
        <div className="aura-animate-shiny" style={gradientStyle}>
          your business with Lumentrack
        </div>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 text-white/60 max-w-md text-base leading-[1.5]"
      >
        Aura is the premier inbox platform for the current era. It leverages powerful AI to organize, prioritize, and
        refine your messages into total clarity.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 flex flex-col items-center gap-3"
      >
        <AppleButton />
        <span className="text-xs text-white/40">Download for Intel / Apple Silicon</span>
      </motion.div>
    </section>
  )
}

function MenuBarStrip() {
  const items = ['File', 'Edit', 'View', 'Go', 'Window', 'Help']
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="relative z-10 h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <AppleLogo className="w-3.5 h-3.5" />
          <span className="font-bold text-white">Aura</span>
          {items.map((item, i) => (
            <span
              key={item}
              className={`text-white/60 ${i > 2 ? 'hidden sm:inline' : ''} ${i > 3 ? 'hidden md:inline' : ''}`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-white/60">
          <Search className="w-3.5 h-3.5" />
          <span>Wed May 6 1:09 PM</span>
        </div>
      </div>
    </motion.div>
  )
}

const SIDEBAR_ICONS = [Home, MessageSquare, DollarSign, Zap, User, Info, Pencil, Settings]

type TrackerCard = {
  name: string
  address: string
  dateSold: string
  source: string
  days: string
  icon: 'gear' | 'video'
}

type TrackerColumn = {
  name: string
  count: number | null
  dot: string
  cards: TrackerCard[]
}

const TRACKER_COLUMNS: TrackerColumn[] = [
  {
    name: 'Contract Signed',
    count: 3,
    dot: '#eab308',
    cards: [
      { name: 'Ana Ruth Contreras', address: '5715 Pershing Street, Houston, TX 77033, United States of America', dateSold: 'Dec 11, 2025', source: 'Lightreach', days: '45 days', icon: 'gear' },
      { name: 'Andrew Littlejohn', address: '7500 Emerywood Lane, Fort Worth, TX 76137, United States of America', dateSold: 'Jan 9, 2026', source: 'CASH', days: '17 days', icon: 'gear' },
      { name: 'Benito Garza', address: '1274 Country Road 284, Alvin, Texas, TX 77511, United States of America', dateSold: 'Dec 1, 2025', source: 'Solrite', days: '55 days', icon: 'video' },
    ],
  },
  {
    name: 'Site Survey',
    count: 2,
    dot: '#3b82f6',
    cards: [
      { name: 'Justin M. Lewallen', address: '305 Hawthorne Lane, Grand Prairie, TX 75052, United States of America', dateSold: 'Jan 5, 2026', source: 'Solrite', days: '21 days', icon: 'video' },
      { name: 'María Julia Flores', address: '14419 White Heather Drive, Houston, TX 77045, United States of America', dateSold: 'Nov 17, 2025', source: 'Solrite', days: '70 days', icon: 'video' },
    ],
  },
  {
    name: 'Enginnering in Progress/Completed',
    count: 1,
    dot: '#22c55e',
    cards: [
      { name: 'Ace Ventura', address: '3143 Palacios Avenue, Dallas, TX 75212, United States of America', dateSold: 'Nov 11, 2025', source: 'Lightreach', days: '0 days', icon: 'gear' },
      { name: 'Liliana Mari González', address: '929 Dewalt Street, Houston, TX 77088, United States of America', dateSold: 'Nov 11, 2025', source: 'Solrite', days: '0 days', icon: 'gear' },
    ],
  },
  {
    name: 'Permit',
    count: 0,
    dot: '#ec4899',
    cards: [],
  },
  {
    name: 'Install Ready',
    count: null,
    dot: '#22c55e',
    cards: [
      { name: 'Ace Ventura', address: '562 Elkhart Ave, 75217, United States of America', dateSold: 'No date', source: 'Lightreach', days: '', icon: 'gear' },
      { name: 'Ace Ventura', address: '562 Elkhart Ave, 75217, United States of America', dateSold: 'No date', source: 'Lightreach', days: '', icon: 'gear' },
      { name: 'Ace Ventura', address: '562 Elkhart Ave, 75217, United States of America', dateSold: 'No date', source: 'Lightreach', days: '', icon: 'gear' },
    ],
  },
]

function TrackerCardView({ card }: { card: TrackerCard }) {
  return (
    <div className="group bg-slate-50 rounded-lg p-2.5 border border-slate-100 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-200 hover:bg-blue-50/40">
      <div className="flex items-start justify-between">
        <div className="text-xs font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">{card.name}</div>
        <MoreVertical className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 transition-colors flex-shrink-0" />
      </div>
      <div className="flex items-start gap-1.5 mt-1.5 text-[11px] text-slate-500">
        <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
        <span className="line-clamp-1">{card.address}</span>
      </div>
      <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-slate-500">
        <Calendar className="w-3 h-3 flex-shrink-0" />
        <span>Date Sold {card.dateSold}</span>
      </div>
      <div className="text-[11px] text-slate-500 mt-0.5">{card.source}</div>
      <div className="flex items-center justify-between mt-2">
        {card.icon === 'video' ? (
          <Video className="w-3.5 h-3.5 text-blue-500 group-hover:text-blue-600 group-hover:scale-110 transition-transform" />
        ) : (
          <Settings className="w-3.5 h-3.5 text-blue-500 group-hover:text-blue-600 group-hover:rotate-45 transition-transform duration-300" />
        )}
        {card.days && (
          <span className="text-[10px] font-semibold text-white bg-blue-600 rounded-md px-2 py-0.5 group-hover:bg-blue-700 transition-colors">
            {card.days}
          </span>
        )}
      </div>
    </div>
  )
}

function InstallTrackerMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-16"
    >
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white text-slate-900">
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer">
            <Zap className="w-3.5 h-3.5 text-white" fill="white" />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-full border border-blue-200 overflow-hidden text-[11px] font-medium">
              <span className="flex items-center gap-1 px-2.5 py-1 bg-blue-600 text-white">
                <Sun className="w-3 h-3" />
                Light
              </span>
              <span className="flex items-center gap-1 px-2.5 py-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer">
                <Moon className="w-3 h-3" />
                Dark
              </span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 transition-colors group-hover:bg-blue-100 group-hover:text-blue-600">
                <User className="w-3.5 h-3.5" />
              </span>
              <div className="leading-tight">
                <div className="text-[11px] font-semibold text-slate-800">Luis Pérez</div>
                <div className="text-[9px] text-slate-400">Seller · Bluesun</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="hidden md:flex w-12 flex-shrink-0 bg-blue-600 rounded-tr-[1.5rem] flex-col items-center gap-3 py-5">
            {SIDEBAR_ICONS.map((Icon, i) => (
              <span
                key={i}
                className={`w-7 h-7 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 ${i === 1 ? 'bg-white text-blue-600' : 'text-white/80 hover:bg-white/20 hover:text-white'}`}
              >
                <Icon className="w-3.5 h-3.5" />
              </span>
            ))}
          </div>

          <div className="flex-1 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">Install Tracker</h3>
              <div className="flex flex-wrap items-center gap-1.5">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 text-[11px] text-slate-400 transition-colors hover:bg-slate-200 cursor-text">
                  <Search className="w-3 h-3" />
                  Search by client name...
                </div>
                <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-600 text-white text-[11px] font-semibold transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0">
                  <Plus className="w-3 h-3" />
                  Create Client
                </button>
                <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-semibold transition-all hover:bg-slate-200 hover:-translate-y-0.5 active:translate-y-0">
                  <SlidersHorizontal className="w-3 h-3" />
                  Reorder Columns
                </button>
                <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-semibold transition-all hover:bg-slate-200 hover:-translate-y-0.5 active:translate-y-0">
                  <LayoutGrid className="w-3 h-3" />
                  CRM
                </button>
                <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-semibold transition-all hover:bg-slate-200 hover:-translate-y-0.5 active:translate-y-0">
                  <Plus className="w-3 h-3" />
                  New Group
                </button>
                <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-600 text-white text-[11px] font-semibold transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 group">
                  <RotateCw className="w-3 h-3 transition-transform duration-500 group-hover:rotate-180" />
                  Refresh
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 overflow-x-auto">
              {TRACKER_COLUMNS.map(col => (
                <div
                  key={col.name}
                  className="tracker-scroll bg-slate-50/60 rounded-xl p-2.5 min-h-[160px] max-h-[280px] overflow-y-auto transition-colors hover:bg-slate-100/70"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: col.dot }} />
                    <span className="text-xs font-semibold text-slate-800">{col.name}</span>
                    {col.count !== null && <span className="text-[11px] text-slate-400">{col.count}</span>}
                    <MoreVertical className="w-3 h-3 text-slate-300 ml-auto flex-shrink-0" />
                  </div>
                  {col.cards.length === 0 ? (
                    <div className="text-center text-[11px] text-slate-300 py-6">
                      <div className="font-medium text-slate-400">No data</div>
                      <div>No task in this stage</div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      {col.cards.map((card, i) => (
                        <TrackerCardView key={i} card={card} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function FeatureTriage() {
  const chips = ['Auto-categorize', 'Snooze for later', 'Silent newsletters', 'One-tap unsubscribe']
  const groups = [
    { name: 'Priority', count: 4, color: '#ffffff', items: ['Sophia Chen — Q3 review', 'David Lim — contract signoff'] },
    { name: 'Follow-up', count: 7, color: '#e5e5e5', items: ['Marcus — design review', 'Figma — comment thread'] },
    { name: 'Updates', count: 18, color: '#a3a3a3', items: ['Vercel — deploy ready', 'GitHub — PR #482 merged'] },
    { name: 'Archived', count: 13, color: '#525252', items: ['Stripe payout · Newsletter · Receipts'] },
  ]
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <SectionEyebrow label="Triage" tag="AI-native" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
          Clear your inbox
          <br />
          in a single pass.
        </h2>
        <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
          Aura reads every message, understands intent, and routes the noise away from the signal. Focus on what
          moves your day forward — the rest handles itself.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map(chip => (
            <span key={chip} className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
              {chip}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="aura-liquid-glass rounded-2xl p-5">
        <div className="text-xs text-white/50 mb-4">Today · 42 messages triaged</div>
        <div className="grid grid-cols-2 gap-3">
          {groups.map(group => (
            <div key={group.name} className="aura-liquid-glass rounded-lg p-3">
              <div className="flex items-center gap-2 text-xs font-medium mb-2">
                <span className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                {group.name} ({group.count})
              </div>
              <div className="space-y-1">
                {group.items.map(item => (
                  <div key={item} className="text-[11px] text-white/50">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LogoCloud() {
  const logos = ['Linear', 'Vercel', 'Figma', 'Stripe', 'Ramp', 'Notion', 'Loom', 'Arc']
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center text-xs uppercase tracking-widest text-white/40">
        Trusted by the world's most thoughtful teams
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
        {logos.map((logo, i) => (
          <motion.span
            key={logo}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="text-sm font-semibold tracking-tight text-white/50 hover:text-white text-center"
          >
            {logo}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    {
      quote:
        'Aura gave our leadership team four hours of their week back. It reads like email from the future.',
      name: 'Parker Wilf',
      role: 'Group Product Manager',
      company: 'MERCURY',
    },
    {
      quote:
        "The command palette alone has changed how I process messages. I can't imagine going back to a traditional client.",
      name: 'Andrew von Rosenbach',
      role: 'Senior Engineering Program Manager',
      company: 'COHERE',
    },
    {
      quote: 'Triage that actually understands context. Our team stopped dreading Monday morning inboxes.',
      name: 'Mathies Christensen',
      role: 'Engineering Manager',
      company: 'LUNAR',
    },
  ]
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(item => (
          <figure key={item.name} className="aura-liquid-glass rounded-2xl p-6">
            <blockquote className="text-sm text-white/80 leading-[1.6]">&ldquo;{item.quote}&rdquo;</blockquote>
            <figcaption className="mt-6 pt-5 border-t border-white/10">
              <div className="text-sm font-semibold">{item.name}</div>
              <div className="text-xs text-white/50">{item.role}</div>
              <div className="text-xs text-white font-semibold tracking-wide uppercase">{item.company}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

const PLANS = [
  {
    tier: 'Free',
    monthly: 'Free',
    yearly: 'Free',
    desc: 'For creators taking their first steps with Forma.',
    features: [
      'Up to 3 projects in the cloud',
      'Image export up to 1080p',
      'Basic editing tools',
      'Free templates and icons',
      'Access via web and mobile app',
    ],
    pro: false,
  },
  {
    tier: 'Standard',
    monthly: '$9,99/m',
    yearly: '$99,99/y',
    desc: 'For freelancers and small teams who need more freedom and flexibility.',
    features: [
      'Up to 50 projects in the cloud',
      'Export up to 4K',
      'Advanced editing toolkit',
      'Team collaboration (up to 5 members)',
      'Access to premium template library',
    ],
    pro: false,
  },
  {
    tier: 'Pro',
    monthly: '$19,99/m',
    yearly: '$199,99/y',
    desc: 'For studios, agencies, and professional creators working with brands.',
    features: [
      'Unlimited projects',
      'Export up to 8K + animations',
      'AI-powered content generation tools',
      'Unlimited team members',
      'Brand customization',
    ],
    pro: true,
  },
]

function Pricing() {
  const [yearly, setYearly] = useState(false)
  return (
    <section className="c3-pricing-section">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves={2} stitchTiles="stitch" />
          <feComponentTransfer>
            <feFuncA type="linear" slope={0.075} />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </svg>

      <div className="c3-watermark-container">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">Track, sell and grow</span>
          <span className="c3-watermark-line-2">your business with Lumentrack</span>
        </div>
      </div>

      <div className="c3-grid">
        {PLANS.map(plan => (
          <div key={plan.tier} className={`c3-card ${plan.pro ? 'c3-card-pro' : ''}`}>
            <div className="c3-tier-small">{plan.tier}</div>
            <div className="c3-tier-large">{yearly ? plan.yearly : plan.monthly}</div>
            <div className="c3-desc">{plan.desc}</div>
            <ul className="c3-list">
              {plan.features.map(feature => (
                <li key={feature}>
                  <span className="c3-check">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="c3-btn">Choose Plan</button>
          </div>
        ))}
      </div>

      <div className="c3-toggle-wrap">
        <span className="text-sm text-white/70">Yearly</span>
        <button className={`c3-toggle ${yearly ? 'active' : ''}`} onClick={() => setYearly(y => !y)}>
          <span className="c3-toggle-knob" />
        </button>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="aura-liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)',
            opacity: 0.3,
          }}
        />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            Close the tabs.
            <br />
            Open your day.
          </h2>
          <p className="mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
            Join thousands of builders, founders, and operators who treat email like a tool — not an obligation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <AppleButton label="Download Aura" />
            <button className="rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 inline-flex items-center gap-2">
              Talk to sales
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export function AboutUsPage() {
  return (
    <div className="aura-page relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="c3-noise-root">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" src={VIDEO_URL} />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      <SiteNavbar />
      <Hero />
      <MenuBarStrip />
      <InstallTrackerMockup />
      <FeatureTriage />
      <LogoCloud />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </div>
  )
}
