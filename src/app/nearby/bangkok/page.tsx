import DisclaimerFooter from '../../../components/DisclaimerFooter'

export default function Bangkok() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt="aerial" className="w-full h-full object-cover" style={{objectPosition: 'center 30%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Bangkok — 200 km, 2.5 hours.</h1>
          <p className="text-white/60 mt-2">World-class city within easy weekend reach</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-amber-950/30 to-orange-950/20 border border-amber-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏙️ The Bangkok connection</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">Hua Hin sits 200 km south of Bangkok on the Gulf coast — close enough to drive for a weekend, far enough to feel like a different world. Many Bangkok residents use Hua Hin as their weekend retreat. Many Hua Hin residents use Bangkok for specialist medical care, international flights, shopping and business.</p>
          <div className="space-y-2 text-sm mt-4">
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">By car (Highway 4)</span><span className="text-white">2.5–3 hours</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">By train (Hua Hin station)</span><span className="text-white">4–5 hours · scenic route</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">By bus (from town centre)</span><span className="text-white">3.5–4 hours</span></div>
            <div className="flex justify-between"><span className="text-white/70">By private transfer</span><span className="text-white">Widely available · ฿2,000–3,500</span></div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">✈️ International flights from Bangkok</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">Suvarnabhumi Airport (BKK) is one of Asia&apos;s major hubs — direct flights to Amsterdam, Frankfurt, London, Zurich, Dubai, Singapore, Tokyo and hundreds of other destinations. Flying in and out of Bangkok is straightforward and well-connected.</p>
          <p className="text-white/70 text-sm leading-relaxed">Hua Hin also has its own small airport (HHQ) with domestic connections to Bangkok (Don Mueang) — 50 minutes, several times daily.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 pb-12">
        <DisclaimerFooter />
        <div className="text-center pt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
