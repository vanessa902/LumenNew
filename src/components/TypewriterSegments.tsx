import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'

export interface Segment {
  text: string
  className: string
}

export function TypewriterSegments({ segments }: { segments: Segment[] }) {
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
  for (const seg of segments) {
    for (const char of seg.text) {
      rendered.push({ char, className: seg.className })
    }
  }

  const shown = rendered.slice(0, count)
  const done = count >= full.length

  // Split into lines on explicit '\n' markers
  const lines: { char: string; className: string }[][] = [[]]
  for (const item of shown) {
    if (item.char === '\n') {
      lines.push([])
    } else {
      lines[lines.length - 1].push(item)
    }
  }

  const isMultiLine = lines.length > 1

  return (
    <div ref={ref} className="flex flex-col items-center">
      {lines.map((line, li) => {
        // Group consecutive non-space chars into words so wrapping never splits a word
        const words: { char: string; className: string }[][] = [[]]
        for (const item of line) {
          if (item.char === ' ') {
            words.push([{ char: ' ', className: item.className }])
            words.push([])
          } else {
            words[words.length - 1].push(item)
          }
        }

        return (
          <div key={li} className={`flex justify-center ${isMultiLine ? 'flex-nowrap' : 'flex-wrap'}`}>
            {words.map((word, wi) => (
              <span key={wi} style={{ whiteSpace: 'pre' }}>
                {word.map((item, i) => (
                  <span key={i} className={item.className}>
                    {item.char}
                  </span>
                ))}
              </span>
            ))}
            {!done && li === lines.length - 1 && (
              <span className="inline-block w-[3px] self-center ml-1 animate-pulse" style={{ height: '0.7em', background: '#DEDBC8', borderRadius: 2 }} />
            )}
          </div>
        )
      })}
    </div>
  )
}
