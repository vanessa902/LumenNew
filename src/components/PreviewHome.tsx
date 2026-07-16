import { PrismaHero } from './preview/PrismaHero'
import { PrismaAbout } from './preview/PrismaAbout'
import { PrismaFeatures } from './preview/PrismaFeatures'
import { MarqueeBanner } from './preview/MarqueeBanner'
import { ImageScaleSection } from './preview/ImageScaleSection'

export function PreviewHome() {
  return (
    <main style={{ background: '#000' }}>
      <PrismaHero />
      <PrismaAbout />
      <PrismaFeatures />
      <MarqueeBanner />
      <ImageScaleSection />
    </main>
  )
}
