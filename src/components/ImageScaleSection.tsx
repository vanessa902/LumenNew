import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ImageScaleSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const scaleOne = useTransform(scrollYProgress, [0, 0.25], [0, 1])
  const scaleTwo = useTransform(scrollYProgress, [0.25, 0.5], [0, 1])
  const scaleThree = useTransform(scrollYProgress, [0.5, 0.75], [0, 1])
  const scaleFour = useTransform(scrollYProgress, [0.75, 1], [0, 1])

  return (
    <section ref={ref} className="relative bg-white" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 h-full relative">
          {/* Right image, revealed progressively */}
          <div className="absolute inset-0 z-[2] overflow-hidden">
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
              alt=""
              className="object-cover h-full w-full"
            />
          </div>

          {/* Divider line */}
          <div className="absolute left-1/2 top-0 w-px h-full bg-[#ebebeb] -translate-x-1/2 z-[3]" />

          {/* Covering boxes that scale away to reveal the image, matching the CSS keyframe structure */}
          <motion.div
            className="absolute z-[3] bg-white border-b border-[#ebebeb] top-0 left-1/2 h-1/2 w-1/2 origin-top"
            style={{ scaleY: useTransform(scaleOne, [0, 1], [1, 0]) }}
          />
          <motion.div
            className="absolute z-[3] bg-white border-l border-[#ebebeb] top-1/2 left-3/4 w-1/4 h-1/2 origin-right"
            style={{ scaleX: useTransform(scaleTwo, [0, 1], [1, 0]) }}
          />
          <motion.div
            className="absolute z-[3] bg-white top-1/2 left-1/2 w-1/4 h-1/2 origin-bottom"
            style={{ scaleY: useTransform(scaleThree, [0, 1], [1, 0]) }}
          />
          <motion.div
            className="absolute z-[3] bg-white top-1/2 left-1/2 w-[12.5%] h-1/4 origin-left"
            style={{ scaleX: useTransform(scaleFour, [0, 1], [1, 0]) }}
          />

          {/* Left text content */}
          <div className="relative z-[4] grid content-center h-full w-1/2 pr-12">
            <span className="text-2xl md:text-3xl text-[#82837f] mb-6 block">Precision, revealed.</span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-8 text-black font-semibold">
              Built for scale.
            </h2>
            <p className="text-[#82837f] text-base md:text-lg max-w-[50ch]">
              Every workflow, every install, every customer — tracked with the same precision from the first square foot to the last.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
