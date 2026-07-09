import { PrismaHero } from './components/PrismaHero'
import { PrismaAbout } from './components/PrismaAbout'
import { PrismaFeatures } from './components/PrismaFeatures'
import { MarqueeBanner } from './components/MarqueeBanner'
import { ImageScaleSection } from './components/ImageScaleSection'

export default function App() {
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
