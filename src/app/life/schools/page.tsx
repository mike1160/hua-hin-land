export default function Schools() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt="schools" className="w-full h-full object-cover" style={{objectPosition: 'center 20%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Schools & families.</h1>
          <p className="text-white/60 mt-2">International education, safe streets, family-friendly community</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-indigo-950/30 to-blue-950/20 border border-indigo-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏫 International & bilingual schools</h2>
          <ul className="space-y-4 text-white/70 text-sm">
            <li className="border-b border-white/5 pb-3"><strong className="text-white">Beaconhouse Yamsaard International School</strong><br/>British curriculum, 3–18 years<br/><span className="text-blue-400">Soi 112 area · +66 32 652 526</span></li>
            <li className="border-b border-white/5 pb-3"><strong className="text-white">The English Centre Hua Hin</strong> ⭐ 5.0<br/><span className="text-blue-400">Phet Kasem Rd · +66 32 900 381</span></li>
            <li className="border-b border-white/5 pb-3"><strong className="text-white">Sethavidhya Bilingual School</strong><br/><span className="text-blue-400">+66 81 613 0440</span></li>
            <li><strong className="text-white">Hua Hin Wittayakhom School</strong><br/>Government secondary school</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-pink-950/30 to-purple-950/20 border border-pink-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">👶 Childcare & daily life</h2>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>• Multiple kindergartens & nurseries in Thap Tai</li>
            <li>• International playgroups in expat community</li>
            <li>• Safe, child-friendly residential area</li>
            <li>• <strong className="text-white">Siwali Building Materials</strong> — bouwmarkt, Thap Tai</li>
            <li>• <strong className="text-white">Makro Food Service</strong> — 15 min</li>
            <li>• <strong className="text-white">Bluport Mall</strong> — 10 min</li>
            <li>• <strong className="text-white">Lotus&apos;s supermarket</strong> — 15 min</li>
            <li>• <strong className="text-white">7-Eleven</strong> — 4 min from the plot</li>
          </ul>
        </div>
        <div className="text-center pt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
