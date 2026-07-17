import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="bg-black py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto rounded-[2rem] p-2 md:p-3" style={{ background: 'linear-gradient(160deg, #0b1230, #05060a)' }}>
        <div className="relative rounded-[1.6rem] overflow-hidden border border-white/10 bg-[#0a0a0c]">
          {/* Window title bar */}
          <div className="h-9 flex items-center px-4 border-b border-white/10 relative">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
          </div>

          {/* Blurred faded app mockup background */}
          <div className="absolute inset-0 top-9 opacity-30 blur-[2px] pointer-events-none select-none">
            <div className="h-full w-full grid grid-cols-12">
              <div className="col-span-2 border-r border-white/5 bg-white/[0.02]" />
              <div className="col-span-10 p-6">
                <div className="h-8 w-40 bg-white/5 rounded mb-6" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-32 bg-white/5 rounded-xl" />
                  <div className="h-32 bg-white/5 rounded-xl" />
                  <div className="h-32 bg-white/5 rounded-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 md:py-32 px-6">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
              READY TO BUILD?
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/60">Own your workflow today</p>

            <div className="relative mt-8">
              <button className="inline-flex items-center gap-2 bg-[#2A85FF] hover:bg-[#1c6fe0] transition-colors text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full">
                Sign up for free
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="absolute -right-10 top-full mt-1 text-[10px] font-medium text-white bg-[#2A85FF] px-2 py-0.5 rounded-full rounded-tl-none whitespace-nowrap">
                You
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
