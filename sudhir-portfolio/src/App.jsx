import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StackTicker from './components/StackTicker'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import AchievementsProfiles from './components/AchievementsProfiles'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-void text-text-primary min-h-screen selection:bg-cyan/30 selection:text-cyan overflow-x-hidden relative">
      <Navbar />
      <main>
        <Hero />
        <StackTicker />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <AchievementsProfiles />
      </main>
      <Footer />
    </div>
  )
}
