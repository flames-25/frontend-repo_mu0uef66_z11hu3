export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Onorarii Funebre Buescu</h1>
          <p className="mt-4 text-lg text-slate-600">Sprijin discret și profesional în momente dificile. Servicii funerare complete în Buzău și împrejurimi, disponibile non‑stop.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+40700000000" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-slate-900 text-white shadow hover:bg-slate-800">Sună acum</a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50">Solicită ofertă</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex -space-x-2">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop" className="h-8 w-8 rounded-full border border-white" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop" className="h-8 w-8 rounded-full border border-white" />
              <img src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?q=80&w=120&auto=format&fit=crop" className="h-8 w-8 rounded-full border border-white" />
            </div>
            <p>Peste 200+ familii sprijinite</p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMwMzQ4MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-lg" />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow border border-slate-100">
            <p className="text-sm text-slate-600">Disponibil 24/7</p>
            <p className="font-semibold text-slate-900">Intervenim rapid în Buzău</p>
          </div>
        </div>
      </div>
    </section>
  )
}
