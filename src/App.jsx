import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(244,114,182,0.12),transparent_60%),radial-gradient(60%_50%_at_0%_100%,rgba(251,191,36,0.08),transparent_60%),radial-gradient(60%_50%_at_100%_100%,rgba(52,211,153,0.08),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.07]" style={{backgroundImage:'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'40\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 40 0 L 0 0 0 40\' fill=\'none\' stroke=\'white\' stroke-width=\'0.5\' opacity=\'0.5\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\'/%3E%3C/svg%3E")'}} />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <CTA />

      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300/80">
          <p>© {new Date().getFullYear()} Capybara Café. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#menu" className="hover:text-white">Menu</a>
            <span className="opacity-30">•</span>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <span className="opacity-30">•</span>
            <a href="#visit" className="hover:text-white">Visit</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
