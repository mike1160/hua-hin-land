export default function Health() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="wellness" className="w-full h-full object-cover" style={{objectPosition: 'center 70%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Health & wellness.</h1>
          <p className="text-white/85 mt-2">World-class care at a fraction of European costs</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🏥 Hospitals</h2>
          <ul className="space-y-4 text-[#5C5247] text-sm">
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">Bangkok Hospital Hua Hin</strong><br/>International standard, English-speaking staff<br/><span className="text-[#C8973A]">15 min · 888 Petchkasem Rd · +66 32 616 800</span></li>
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">San Paolo Hospital</strong><br/>Full-service, affordable, 24/7 emergency<br/><span className="text-[#C8973A]">17 min · 222 Petchkasem Rd · +66 32 532 576</span></li>
            <li><strong className="text-[#1A2744]">Hua Hin Hospital (Government)</strong><br/><span className="text-[#C8973A]">17 min · +66 32 532 395</span></li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🧘 Spas & wellness</h2>
          <ul className="space-y-3 text-[#5C5247] text-sm">
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Chiva-Som International Health Resort</strong> — world-renowned</li>
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Anantara Hua Hin Spa</strong> — luxury resort spa</li>
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Let&apos;s Relax Spa</strong> — premium, Bluport Mall</li>
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Thai massage centres</strong> — Thap Tai, ฿200–350/hr</li>
            <li><strong className="text-[#1A2744]">Parrotdise Organic Farm & Cafe</strong> ⭐ 4.8 — 5 min from plot</li>
          </ul>
        </div>
        <div className="text-center pt-4">
          <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
