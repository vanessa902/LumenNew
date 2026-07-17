import { AboutCarousel } from './AboutCarousel'
import { TypewriterSegments, type Segment } from './TypewriterSegments'
import './AboutCarousel.css'

const DEFAULT_SEGMENTS: Segment[] = [
  { text: 'The', className: 'font-medium text-primary' },
  { text: ' all-in-one', className: 'font-medium text-primary' },
  { text: ' tracking', className: 'font-medium text-primary' },
  { text: ' solution\n', className: 'font-medium text-primary' },
  { text: 'for', className: 'font-medium text-primary' },
  { text: ' contractors', className: 'font-medium text-primary' },
  { text: ' and', className: 'font-medium text-primary' },
  { text: ' businesses', className: 'font-medium text-primary' },
]

export function PrismaAbout({
  segments = DEFAULT_SEGMENTS,
  gradientHover = false,
}: {
  segments?: Segment[]
  gradientHover?: boolean
}) {
  return (
    <section className="bg-[#0a0a0a] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto rounded-2xl p-8 md:p-16 text-center">
        <div
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] ${gradientHover ? 'prisma-gradient-hover-wrap' : ''}`}
          style={{ marginBottom: 40 }}
        >
          <TypewriterSegments segments={segments} />
        </div>
        <AboutCarousel />
      </div>
    </section>
  )
}
