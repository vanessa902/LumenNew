import { RedstoneHero } from './components/RedstoneHero'
import { PrismaHero } from './components/PrismaHero'
import { PrismaAbout } from './components/PrismaAbout'
import { PrismaFeatures } from './components/PrismaFeatures'

export default function App() {
  return (
    <main style={{ background: '#000' }}>
      <RedstoneHero />
      <PrismaHero />
      <PrismaAbout />
      <PrismaFeatures />
    </main>
  )
}
