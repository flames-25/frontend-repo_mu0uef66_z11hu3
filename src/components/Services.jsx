import { Heart, Cross, Flower2, Car, FileText, Handshake } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Consiliere și sprijin',
    desc: 'Îndrumare empatică și clară în toate etapele organizării.'
  },
  { icon: Car, title: 'Transport funerar', desc: 'Autospeciale omologate pentru transport intern și internațional.' },
  { icon: FileText, title: 'Documente & acte', desc: 'Ne ocupăm de toate formalitățile legale și autorizațiile necesare.' },
  { icon: Flower2, title: 'Aranjamente florale', desc: 'Coroane, jerbe și aranjamente personalizate.' },
  { icon: Cross, title: 'Servicii religioase', desc: 'Colaborare cu toate confesiunile, conform tradițiilor familiei.' },
  { icon: Handshake, title: 'Pachete complete', desc: 'Ofertă adaptată bugetului, fără costuri ascunse.' },
]

export default function Services() {
  return (
    <section id="servicii" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Serviciile noastre</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">Abordăm cu respect, discreție și profesionalism fiecare solicitare.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-6 shadow border border-slate-100">
              <div className="h-12 w-12 rounded-lg bg-slate-900 text-white grid place-items-center"><Icon size={22} /></div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
