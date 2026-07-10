import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronRight,
  Menu,
  Search,
  Sparkles,
  Inbox,
  Star,
  Send,
  FileText,
  Archive,
  Trash2,
  Reply,
  Forward,
  MoreHorizontal,
  Paperclip,
  Check,
} from 'lucide-react'
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

function LogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" fill="#fff" className={className}>
      <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
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

function Navbar() {
  const links = ['Solutions', 'Pricing', 'Blog', 'Documentation', 'Careers']
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between"
    >
      <LogoMark className="w-8 h-8" />
      <div className="hidden md:flex gap-8">
        {links.map((link, i) => (
          <motion.a
            key={link}
            href="#"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="text-white/70 text-sm font-medium hover:text-white"
          >
            {link}
          </motion.a>
        ))}
      </div>
      <div className="hidden md:block">
        <AppleButton />
      </div>
      <button className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
        <Menu className="w-4 h-4 text-white/80" />
      </button>
    </motion.nav>
  )
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
        <div>Your email.</div>
        <div className="aura-animate-shiny" style={gradientStyle}>
          Revitalized
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

const SIDEBAR_NAV = [
  { icon: Inbox, label: 'Inbox', count: 12, active: true },
  { icon: Star, label: 'Starred', count: 3 },
  { icon: Send, label: 'Sent' },
  { icon: FileText, label: 'Drafts', count: 2 },
  { icon: Archive, label: 'Archive' },
  { icon: Trash2, label: 'Trash' },
]

const LABELS = [
  { name: 'Work', color: '#00d2ff' },
  { name: 'Personal', color: '#A4F4FD' },
  { name: 'Travel', color: '#f59e0b' },
  { name: 'Finance', color: '#10b981' },
]

const MESSAGES = [
  { name: 'Linear', subject: 'Weekly product digest', preview: 'Your team shipped 23 issues this week...', time: '9:41 AM', unread: true, active: true },
  { name: 'Sophia Chen', subject: 'Re: Q3 roadmap review', preview: 'Thanks for sending the deck over. I had a few thoughts...', time: '8:12 AM', unread: true },
  { name: 'Figma', subject: 'Marcus commented on your file', preview: 'Love the new direction on the landing hero.', time: 'Yesterday' },
  { name: 'Stripe', subject: 'Payout of $12,480.00 sent', preview: 'Your payout is on its way to your bank...', time: 'Yesterday' },
  { name: 'Vercel', subject: 'Deployment ready for aura-web', preview: 'Preview is live at aura-web-g3f.vercel.app', time: 'Mon' },
  { name: 'GitHub', subject: '[aura/core] PR #482 approved', preview: 'david-lim approved your pull request.', time: 'Mon' },
]

function InboxMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24"
    >
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl">
        <div className="h-9 flex items-center justify-center relative border-b border-white/10 px-4">
          <div className="absolute left-4 flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
          </div>
          <span className="text-xs text-white/50">Aura — Inbox</span>
        </div>

        <div className="grid grid-cols-12 h-[520px]">
          <div className="col-span-3 border-r border-white/10 bg-black/30 p-4 hidden md:flex md:flex-col gap-6 overflow-y-auto">
            <button className="rounded-lg bg-white text-black text-xs font-semibold px-3 py-2 flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Compose with Aura
            </button>
            <div className="flex flex-col gap-1">
              {SIDEBAR_NAV.map(item => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between px-2 py-1.5 rounded-md text-xs ${item.active ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5'}`}
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="w-3.5 h-3.5" />
                    {item.label}
                  </span>
                  {item.count && <span className="text-white/40">{item.count}</span>}
                </div>
              ))}
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Labels</div>
              <div className="flex flex-col gap-2">
                {LABELS.map(label => (
                  <div key={label.name} className="flex items-center gap-2 text-xs text-white/60">
                    <span className="w-2 h-2 rounded-full" style={{ background: label.color }} />
                    {label.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 border-r border-white/10 flex flex-col">
            <div className="p-3 border-b border-white/10 flex items-center gap-2 text-xs text-white/40">
              <Search className="w-3.5 h-3.5" />
              Search mail
            </div>
            <div className="flex-1 overflow-y-auto">
              {MESSAGES.map((m, i) => (
                <div
                  key={i}
                  className={`px-3 py-3 border-b border-white/5 cursor-pointer ${m.active ? 'bg-white/5' : 'hover:bg-white/[0.03]'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${m.unread ? 'font-semibold text-white' : 'text-white/70'}`}>{m.name}</span>
                    <span className="text-[10px] text-white/40">{m.time}</span>
                  </div>
                  <div className={`text-xs mt-0.5 ${m.unread ? 'text-white/90' : 'text-white/60'}`}>{m.subject}</div>
                  <div className="text-[11px] text-white/40 mt-0.5 truncate">{m.preview}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:col-span-5 flex-col">
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
              <div className="flex items-center gap-1">
                <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center">
                  <Reply className="w-3.5 h-3.5 text-white/60" />
                </button>
                <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center">
                  <Forward className="w-3.5 h-3.5 text-white/60" />
                </button>
                <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center">
                  <Archive className="w-3.5 h-3.5 text-white/60" />
                </button>
                <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center">
                  <Trash2 className="w-3.5 h-3.5 text-white/60" />
                </button>
              </div>
              <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center">
                <MoreHorizontal className="w-3.5 h-3.5 text-white/60" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="text-sm font-semibold text-white">Weekly product digest</div>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-[11px] font-semibold text-white">
                  L
                </span>
                <div className="text-xs">
                  <span className="text-white font-medium">Linear</span>
                  <span className="text-white/40"> · to me · 9:41 AM</span>
                </div>
                <span className="ml-auto px-2 py-0.5 rounded-full border border-white/10 text-[10px] text-white/50">Work</span>
              </div>

              <div className="aura-liquid-glass rounded-lg p-3 mt-5 flex items-start gap-2">
                <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#A4F4FD' }} />
                <div className="text-xs text-white/70 leading-relaxed">
                  <div className="text-white font-medium mb-1">Summary by Aura</div>
                  Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No
                  action needed.
                </div>
              </div>

              <div className="mt-5 space-y-3 text-xs text-white/70 leading-relaxed">
                <p>Hi team,</p>
                <p>
                  Here is your weekly digest of everything happening across your projects. This was a strong week
                  with significant progress on the Q3 roadmap.
                </p>
                <p>
                  Twenty-three issues were closed, fourteen pull requests were merged, and two customer-facing
                  features went out. The velocity trend continues to climb.
                </p>
                <p>Let me know if you would like a deeper breakdown by project or contributor.</p>
                <p className="text-white/50">— The Linear team</p>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-xs text-white/70">
                <Paperclip className="w-3.5 h-3.5" />
                digest-may-6.pdf
              </div>
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
          <span className="c3-watermark-line-1">Your email.</span>
          <span className="c3-watermark-line-2">Revitalized</span>
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

      <Navbar />
      <Hero />
      <MenuBarStrip />
      <InboxMockup />
      <FeatureTriage />
      <LogoCloud />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </div>
  )
}
