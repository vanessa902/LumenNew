const CARDS = [
  {
    title: 'Create',
    desc: 'The most powerful editing and design tools in one place.',
  },
  {
    title: 'Publish',
    desc: 'Launch the next iconic project. No code needed. Ever.',
  },
  {
    title: 'Grow',
    desc: 'Scale your business with automation built right in.',
  },
]

export function GradientCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 text-left">
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
      {CARDS.map(card => (
        <div
          key={card.title}
          className="group relative rounded-2xl border border-white/10 bg-[#0e0e10] p-6 overflow-hidden"
        >
          <h3
            className="text-2xl font-semibold mb-3 bg-clip-text text-transparent transition-[background-image] duration-500"
            style={{
              backgroundImage: 'linear-gradient(90deg, #fff, #fff)',
            }}
          >
            <span className="gradient-hover-title">{card.title}</span>
          </h3>
          <p className="text-sm text-white/60 mb-4">{card.desc}</p>
          <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
            Learn More <span aria-hidden>→</span>
          </a>

          <div className="mt-6 h-40 rounded-xl bg-white/[0.03] border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40 blur-[1px]">
              <div className="h-full w-full grid grid-cols-3 gap-2 p-3">
                <div className="col-span-1 bg-white/5 rounded-md" />
                <div className="col-span-2 bg-white/5 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
