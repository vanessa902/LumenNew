import { PrismaHero } from './components/PrismaHero'
import { PrismaAbout } from './components/PrismaAbout'
import { PrismaFeatures } from './components/PrismaFeatures'
import { AirlumeSection } from './components/AirlumeSection'

export default function App() {
  return (
    <main style={{ background: '#000' }}>
      <PrismaHero />
      <PrismaAbout />
      <PrismaFeatures />
      <AirlumeSection />
    </main>
  )
}
