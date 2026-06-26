import { useRef, useState, useEffect } from 'react'
import { useScroll, useInView } from 'framer-motion'
import { AnimatedLetter } from './AnimatedLetter'

interface Segment { text: string; className: string }

function TypewriterSegments({ segments }: { segments: Segment[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  const full = segments.map(s => s.text).join('')

  useEffect(() => {
    if (!inView) return
    if (count >= full.length) return
    const t = setTimeout(() => setCount(c => c + 1), 55)
    return () => clearTimeout(t)
  }, [inView, count, full.length])

  // Build rendered chars with correct className per segment
  let rendered: { char: string; className: string }[] = []
  let pos = 0
  for (const seg of segments) {
    for (const char of seg.text) {
      rendered.push({ char, className: seg.className })
      pos++
    }
  }

  const done = count >= full.length

  return (
    <div ref={ref} className="inline-flex flex-wrap justify-center">
      {rendered.slice(0, count).map((item, i) => (
        <span key={i} className={item.className} style={{ whiteSpace: 'pre' }}>
          {item.char}
        </span>
      ))}
      {!done && (
        <span className="inline-block w-[3px] self-center ml-1 animate-pulse" style={{ height: '0.7em', background: '#DEDBC8', borderRadius: 2 }} />
      )}
    </div>
  )
}

const BODY_TEXT = "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."

export function PrismaAbout() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })

  return (
    <section className="bg-black py-20 px-4 md:px-8">
      <div className="bg-[#101010] max-w-6xl mx-auto rounded-2xl p-8 md:p-16 text-center">
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest block mb-8">Visual arts</span>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10">
          <TypewriterSegments
            segments={[
              { text: 'The', className: 'font-light text-primary' },
              { text: ' all-in-one', className: 'font-black text-primary' },
              { text: ' operating', className: 'font-light text-primary' },
              { text: ' system', className: 'font-black text-primary' },
              { text: ' for', className: 'font-light text-primary' },
              { text: ' contractors', className: 'font-black text-primary' },
              { text: ' and', className: 'font-light text-primary' },
              { text: ' service', className: 'font-black text-primary' },
              { text: ' businesses.', className: 'font-light text-primary' },
            ]}
          />
        </div>
        <p ref={ref} className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: '#DEDBC8' }}>
          {BODY_TEXT.split('').map((char, i) => (
            <AnimatedLetter key={i} char={char} index={i} total={BODY_TEXT.length} scrollYProgress={scrollYProgress} />
          ))}
        </p>
      </div>
    </section>
  )
}
