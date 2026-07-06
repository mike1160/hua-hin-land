export default function Health() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="wellness" className="w-full h-full object-cover" style={{objectPosition: 'center 70%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.3) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Health & wellness.</h1>
          <p className="text-white/60 mt-2">World-class care at a fraction of European costs</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-red-950/30 to-rose-950/20 border border-red-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏥 Hospitals</h2>
          <ul className="space-y-4 text-white/70 text-sm">
            <li className="border-b border-white/5 pb-3"><strong className="text-white">Bangkok Hospital Hua Hin</strong><br/>International standard, English-speaking staff<br/><span className="text-blue-400">15 min · 888 Petchkasem Rd · +66 32 616 800</span></li>
            <li className="border-b border-white/5 pb-3"><strong className="text-white">San Paolo Hospital</strong><br/>Full-service, affordable, 24/7 emergency<br/><span className="text-blue-400">17 min · 222 Petchkasem Rd · +66 32 532 576</span></li>
            <li><strong className="text-white">Hua Hin Hospital (Government)</strong><br/><span className="text-blue-400">17 min · +66 32 532 395</span></li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-teal-950/30 to-cyan-950/20 border border-teal-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🧘 Spas & wellness</h2>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Chiva-Som International Health Resort</strong> — world-renowned</li>
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Anantara Hua Hin Spa</strong> — luxury resort spa</li>
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Let&apos;s Relax Spa</strong> — premium, Bluport Mall</li>
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Thai massage centres</strong> — Thap Tai, ฿200–350/hr</li>
            <li><strong className="text-white">Parrotdise Organic Farm & Cafe</strong> ⭐ 4.8 — 5 min from plot</li>
          </ul>
        </div>
        <div className="text-center pt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
