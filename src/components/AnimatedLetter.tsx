import { motion, MotionValue, useTransform } from 'framer-motion'

interface Props {
  char: string
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}

export function AnimatedLetter({ char, index, total, scrollYProgress }: Props) {
  const charProgress = index / total
  const opacity = useTransform(scrollYProgress, [charProgress - 0.1, charProgress + 0.05], [0.2, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block whitespace-pre">
      {char}
    </motion.span>
  )
}
