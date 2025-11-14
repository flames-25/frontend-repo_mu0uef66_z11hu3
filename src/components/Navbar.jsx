import { Menu, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-900 to-gray-700 text-white grid place-items-center text-lg font-bold">OB</div>
          <div>
            <p className="text-sm tracking-wider text-gray-500">Casa Funerară</p>
            <p className="font-semibold text-gray-900">Onorarii Funebre Buescu</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <button onClick={() => scrollTo('servicii')} className="hover:text-slate-900">Servicii</button>
          <button onClick={() => scrollTo('despre')} className="hover:text-slate-900">Despre</button>
          <button onClick={() => scrollTo('galerie')} className="hover:text-slate-900">Galerie</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-slate-900">Contact</button>
          <a href="tel:+40700000000" className="inline-flex items-center gap-2 bg-slate-900 text-white px-3 py-2 rounded-md shadow hover:bg-slate-800">
            <Phone size={16} /> 24/7: 0700 000 000
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Meniu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            <button onClick={() => scrollTo('servicii')} className="text-left">Servicii</button>
            <button onClick={() => scrollTo('despre')} className="text-left">Despre</button>
            <button onClick={() => scrollTo('galerie')} className="text-left">Galerie</button>
            <button onClick={() => scrollTo('contact')} className="text-left">Contact</button>
            <a href="tel:+40700000000" className="inline-flex items-center gap-2 bg-slate-900 text-white px-3 py-2 rounded-md shadow w-max">
              <Phone size={16} /> 24/7: 0700 000 000
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
