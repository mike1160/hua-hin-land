export default function Schools() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt="schools" className="w-full h-full object-cover" style={{objectPosition: 'center 20%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Schools & families.</h1>
          <p className="text-white/85 mt-2">International education, safe streets, family-friendly community</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🏫 International & bilingual schools</h2>
          <ul className="space-y-4 text-[#5C5247] text-sm">
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">Beaconhouse Yamsaard International School</strong><br/>British curriculum, 3–18 years<br/><span className="text-[#C8973A]">Soi 112 area · +66 32 652 526</span></li>
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">The English Centre Hua Hin</strong> ⭐ 5.0<br/><span className="text-[#C8973A]">Phet Kasem Rd · +66 32 900 381</span></li>
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">Sethavidhya Bilingual School</strong><br/><span className="text-[#C8973A]">+66 81 613 0440</span></li>
            <li><strong className="text-[#1A2744]">Hua Hin Wittayakhom School</strong><br/>Government secondary school</li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">👶 Childcare & daily life</h2>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li>• Multiple kindergartens & nurseries in Thap Tai</li>
            <li>• International playgroups in expat community</li>
            <li>• Safe, child-friendly residential area</li>
            <li>• <strong className="text-[#1A2744]">Siwali Building Materials</strong> — bouwmarkt, Thap Tai</li>
            <li>• <strong className="text-[#1A2744]">Makro Food Service</strong> — 15 min</li>
            <li>• <strong className="text-[#1A2744]">Bluport Mall</strong> — 10 min</li>
            <li>• <strong className="text-[#1A2744]">Lotus&apos;s supermarket</strong> — 15 min</li>
            <li>• <strong className="text-[#1A2744]">7-Eleven</strong> — 4 min from the plot</li>
          </ul>
        </div>
        <div className="text-center pt-4">
          <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
