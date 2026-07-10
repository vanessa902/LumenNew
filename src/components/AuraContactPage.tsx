import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { SiteNavbar } from './SiteNavbar'
import './AuraContactPage.css'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4'

function SectionEyebrow({ label, tag }: { label: string; tag?: string }) {
  return (
    <div className="flex items-center gap-2 justify-center">
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
      <span className="text-sm text-white/70 font-medium">{label}</span>
      {tag && <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50 text-xs">{tag}</span>}
    </div>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-28 md:pt-36 md:pb-36">
      <div className="max-w-xl mx-auto text-center mb-10">
        <SectionEyebrow label="Contact" tag="We reply fast" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">Get in touch</h2>
        <p className="mt-4 text-white/60 text-base leading-[1.6]">
          Have a question about Aura? Send us a message and our team will get back to you within one business day.
        </p>
      </div>

      <form
        onSubmit={e => {
          e.preventDefault()
          setSent(true)
        }}
        className="aura-liquid-glass rounded-2xl p-6 md:p-8 max-w-xl mx-auto grid gap-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-white/50">Name</label>
            <input
              required
              type="text"
              placeholder="Your name"
              className="bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-white/50">Email</label>
            <input
              required
              type="email"
              placeholder="you@company.com"
              className="bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-white/50">Company</label>
          <input
            type="text"
            placeholder="Company name (optional)"
            className="bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-white/50">Message</label>
          <textarea
            required
            rows={5}
            placeholder="Tell us what you need..."
            className="bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30 resize-none"
          />
        </div>
        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98]"
        >
          {sent ? 'Message sent' : 'Send message'}
          {!sent && <ChevronRight className="w-4 h-4" />}
        </button>
        {sent && <p className="text-xs text-white/50 text-center">Thanks — we'll be in touch shortly.</p>}
      </form>
    </section>
  )
}

export function AuraContactPage() {
  return (
    <div className="aura-page relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" src={VIDEO_URL} />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      <SiteNavbar />
      <ContactForm />
    </div>
  )
}
