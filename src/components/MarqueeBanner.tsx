const TEXT = 'Book a Demo  ✦  '
const REPEAT = 12

export function MarqueeBanner() {
  return (
    <div className="w-full overflow-hidden bg-black py-4 select-none">
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
            className="text-sm sm:text-base font-medium tracking-widest uppercase whitespace-nowrap pr-0"
            style={{ color: '#3054ff' }}
          >
            {TEXT}
          </span>
        ))}
      </div>
    </div>
  )
}
