import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  text: string
  className?: string
  showAsterisk?: boolean
}

export function WordsPullUp({ text, className, showAsterisk }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.25em', overflow: 'hidden' }}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {showAsterisk && i === words.length - 1 ? (
            <span style={{ position: 'relative' }}>
              {word}
              <sup style={{ position: 'absolute', top: '0.65em', right: '-0.3em', fontSize: '0.31em' }}>*</sup>
            </span>
          ) : word}
        </motion.span>
      ))}
    </span>
  )
}
