import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Segment { text: string; className: string }
interface Props { segments: Segment[]; containerClassName?: string }

export function WordsPullUpMultiStyle({ segments, containerClassName }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const words: { word: string; className: string }[] = []
  segments.forEach(seg => {
    seg.text.split(' ').forEach(w => w && words.push({ word: w, className: seg.className }))
  })

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {words.map((item, i) => (
        <motion.span
          key={i}
          className={item.className}
          style={{ display: 'inline-block', marginRight: '0.25em', overflow: 'hidden' }}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  )
}
