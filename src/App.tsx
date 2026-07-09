import { Routes, Route } from 'react-router-dom'
import { PrismaHero } from './components/PrismaHero'
import { PrismaAbout } from './components/PrismaAbout'
import { PrismaFeatures } from './components/PrismaFeatures'
import { MarqueeBanner } from './components/MarqueeBanner'
import { ImageScaleSection } from './components/ImageScaleSection'
import { FeaturesPage } from './components/FeaturesPage'

function Home() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<FeaturesPage />} />
    </Routes>
  )
}
