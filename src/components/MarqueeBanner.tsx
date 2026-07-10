const TEXT = 'Book a Demo  -  '
const REPEAT = 12

export function MarqueeBanner() {
  return (
    <div className="w-full overflow-hidden bg-black py-6 select-none">
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-left 18s linear infinite;
        }
      `}</style>
      <div className="marquee-track">
        {Array.from({ length: REPEAT * 2 }).map((_, i) => (
          <span
            key={i}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight uppercase whitespace-nowrap"
            style={{ color: '#fff' }}
          >
            {TEXT}
          </span>
        ))}
      </div>
    </div>
  )
}
