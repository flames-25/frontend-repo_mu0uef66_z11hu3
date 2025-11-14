import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
        <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Onorarii Funebre Buescu — Buzău. Toate drepturile rezervate.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
