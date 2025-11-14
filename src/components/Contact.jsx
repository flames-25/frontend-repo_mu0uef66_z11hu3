import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Contact</h2>
            <p className="mt-2 text-slate-600">Ne găsiți la adresa din Buzău. Suntem disponibili non‑stop pentru intervenții urgente și programări.</p>

            <div className="mt-6 space-y-4">
              <a href="tel:+40723553653" className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow hover:bg-slate-50">
                <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center"><Phone size={18} /></div>
                <div>
                  <p className="font-semibold text-slate-900">Telefon</p>
                  <p className="text-slate-600">0723 553 653 (Nonstop)</p>
                </div>
              </a>
              <a href="mailto:contact@buescu.ro" className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow hover:bg-slate-50">
                <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center"><Mail size={18} /></div>
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p className="text-slate-600">contact@buescu.ro</p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow">
                <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center"><MapPin size={18} /></div>
                <div>
                  <p className="font-semibold text-slate-900">Adresă</p>
                  <p className="text-slate-600">BUZAU, RUȘEȚU, Str. Nucilor 51, România</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow">
                <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center"><Clock size={18} /></div>
                <div>
                  <p className="font-semibold text-slate-900">Program</p>
                  <p className="text-slate-600">Nonstop</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow border border-slate-100">
            <iframe
              title="Harta: RUȘEȚU, Nucilor 51, Buzău"
              src="https://www.google.com/maps?q=RUSETU%20Nucilor%2051%2C%20Buzau%2C%20Romania&output=embed"
              className="w-full h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
