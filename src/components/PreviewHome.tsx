import { PrismaHero } from './preview/PrismaHero'
import { GradientCards } from './preview/GradientCards'
import { PrismaAbout } from './preview/PrismaAbout'
import { MarqueeBanner } from './preview/MarqueeBanner'
import { ImageScaleSection } from './preview/ImageScaleSection'
import { FinalCTA } from './preview/FinalCTA'
import { Footer } from './preview/Footer'

export function PreviewHome() {
  return (
    <main style={{ background: '#000' }}>
      <PrismaHero />
      <GradientCards />
      <PrismaAbout />
      <MarqueeBanner />
      <ImageScaleSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
