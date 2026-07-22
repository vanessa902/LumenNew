const CARDS = [
  {
    title: 'Organized Sales Flow',
    desc: 'Track every lead, proposal, and installation in one place. Keep your sales team aligned with full access to the work pipeline at every step.',
  },
  {
    title: 'Easy for Teams',
    desc: 'With minimal training required, everyone – from your internal staff to external vendors and collaborators – can keep track of what’s happening in your business.',
  },
  {
    title: 'Customizable Interface',
    desc: 'Each business has different needs. Lumentrack® can fit them all. Whether you’re tracking a solar installation, keeping in touch with your workforce, or drafting a new proposal, this is the only CRM solution you’ll ever need.',
  },
]

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-[#0e0e10] p-6 overflow-hidden h-full">
      <h3
        className="text-2xl font-semibold mb-3 bg-clip-text text-transparent transition-[background-image] duration-500"
        style={{ backgroundImage: 'linear-gradient(90deg, #fff, #fff)' }}
      >
        <span className="gradient-hover-title">{title}</span>
      </h3>
      <p className="text-sm text-white/60">{desc}</p>
    </div>
  )
}

export function GradientCards() {
  return (
    <section className="bg-black py-16 px-4 md:px-10">
      <style>{`
        .gradient-hover-title {
          background-image: linear-gradient(90deg, #ffffff, #ffffff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          transition: background-image 0.4s ease;
        }
        .group:hover .gradient-hover-title {
          background-image: linear-gradient(90deg, #ff5f6d, #ffc371, #2A85FF, #a855f7);
        }
      `}</style>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left: product video (no card chrome, just the video itself) */}
        <div className="relative min-h-[320px] lg:min-h-full flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
            src="/LumenNew/editor-export.mp4"
          />
        </div>

        {/* Right: 2 cards on top, 1 below */}
        <div className="grid grid-cols-1 gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Card title={CARDS[0].title} desc={CARDS[0].desc} />
            <Card title={CARDS[1].title} desc={CARDS[1].desc} />
          </div>
          <Card title={CARDS[2].title} desc={CARDS[2].desc} />
        </div>
      </div>
    </section>
  )
}
