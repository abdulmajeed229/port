import Header from './Components/Header'
import Hero from './Components/hero'
import About from './Components/about'
import Skills from './Components/skills'
import Projects from './Components/projects'
import Contact from './Components/contact'
import Footer from './Components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
      </main>
    </div>
  )
}

