import { PrismaHero } from './components/PrismaHero'
import { PrismaAbout } from './components/PrismaAbout'
import { PrismaFeatures } from './components/PrismaFeatures'
import { AIHero } from './components/AIHero'
import { MarqueeBanner } from './components/MarqueeBanner'

export default function App() {
  return (
    <main style={{ background: '#000' }}>
      <PrismaHero />
      <PrismaAbout />
      <PrismaFeatures />
      <MarqueeBanner />
      <AIHero />
    </main>
  )
}
