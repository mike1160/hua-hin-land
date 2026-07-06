export default function Entertainment() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/lifestyle1.jpg" alt="live music" className="w-full h-full object-cover" style={{objectPosition: 'center 40%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.3) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Music & entertainment.</h1>
          <p className="text-white/60 mt-2">Every night is a good night in Hua Hin</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/20 border border-purple-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🎵 Live music venues</h2>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="border-b border-white/5 pb-3"><strong className="text-white">Baan Suang Music (บ้านสวงค์มิวสิค)</strong><br/>Traditional Thai live music in a relaxed garden setting — near Soi 112</li>
            <li className="border-b border-white/5 pb-3"><strong className="text-white">El Brewster Cool Club</strong><br/>Popular expat bar with live bands nightly — town centre</li>
            <li className="border-b border-white/5 pb-3"><strong className="text-white">Jazz & blues bars</strong><br/>Multiple venues on Naebkehardt Road with nightly live acts</li>
            <li><strong className="text-white">Cicada Market (weekends)</strong><br/>Open-air arts, crafts and live music market — Khao Takiab area</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-orange-950/30 to-red-950/20 border border-orange-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🎡 Activities & attractions</h2>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Mini Golf World (glow in the dark)</strong> ⭐ 4.9 — Thap Tai, 276/9</li>
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Vana Nava Water Jungle</strong> — 10 min, Soi 112 road</li>
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Saam Phan Nam Floating Market</strong> — 5 min, cultural shows & local food</li>
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Hua Hin Night Market</strong> — seafood, street food, shopping, 17 min</li>
            <li><strong className="text-white">Bluport Cineplex</strong> — modern cinema, 10 min</li>
          </ul>
        </div>
        <div className="text-center pt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
