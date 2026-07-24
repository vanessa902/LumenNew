function Card() {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-[#0e0e10] p-6 md:p-8 overflow-hidden" style={{ width: '90%' }}>
      <h3
        className="text-2xl md:text-3xl font-semibold mb-4 leading-tight bg-clip-text text-transparent transition-[background-image] duration-500"
        style={{ backgroundImage: 'linear-gradient(90deg, #fff, #fff)' }}
      >
        <span className="gradient-hover-title">
          A state-of-the-art tool designed from scratch with one goal in mind: simple, painless management
        </span>
      </h3>
      <p className="text-sm text-white/60 mb-3">
        Lumentrack is more than a CRM. It is the command room of your entire business.
      </p>
      <p className="text-sm text-white/60">
        Built from the ground up with integration and customization in mind, no other CRM in the marketplace offers
        the plethora of features that Lumentrack&reg; puts at your fingertips.
      </p>
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

        {/* Right: single card */}
        <Card />
      </div>
    </section>
  )
}
