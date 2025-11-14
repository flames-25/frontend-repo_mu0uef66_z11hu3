export default function About() {
  return (
    <section id="despre" className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Despre noi</h2>
        <p className="mt-3 text-slate-600">Cu rădăcini în Buzău, ne dedicăm sprijinirii familiilor cu demnitate și compasiune. Echipa noastră are experiență vastă în organizarea ceremoniilor conform tradițiilor locale și dorințelor fiecărei familii.</p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
          <div className="bg-white rounded-xl p-5 shadow border border-slate-100">
            <p className="text-3xl font-extrabold text-slate-900">24/7</p>
            <p className="text-sm text-slate-600">Disponibilitate permanentă</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow border border-slate-100">
            <p className="text-3xl font-extrabold text-slate-900">200+</p>
            <p className="text-sm text-slate-600">Familii sprijinite</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow border border-slate-100">
            <p className="text-3xl font-extrabold text-slate-900">15+</p>
            <p className="text-sm text-slate-600">Ani de experiență</p>
          </div>
        </div>
      </div>
    </section>
  )
}
