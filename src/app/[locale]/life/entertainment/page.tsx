export default function Entertainment() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/IMG_5842.JPG" alt="restaurant and nightlife" className="w-full h-full object-cover" style={{objectPosition: 'center center', filter: 'blur(1px) saturate(1.1)'}} />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Music & entertainment.</h1>
          <p className="text-white/85 mt-2">Every night is a good night in Hua Hin</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🎵 Live music venues</h2>
          <ul className="space-y-3 text-[#5C5247] text-sm">
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">Baan Suang Music (บ้านสวงค์มิวสิค)</strong><br/>Traditional Thai live music in a relaxed garden setting — near Soi 112</li>
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">El Brewster Cool Club</strong><br/>Popular expat bar with live bands nightly — town centre</li>
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">Jazz & blues bars</strong><br/>Multiple venues on Naebkehardt Road with nightly live acts</li>
            <li><strong className="text-[#1A2744]">Cicada Market (weekends)</strong><br/>Open-air arts, crafts and live music market — Khao Takiab area</li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🎡 Activities & attractions</h2>
          <ul className="space-y-3 text-[#5C5247] text-sm">
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Mini Golf World (glow in the dark)</strong> ⭐ 4.9 — Thap Tai, 276/9</li>
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Vana Nava Water Jungle</strong> — 10 min, Soi 112 road</li>
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Saam Phan Nam Floating Market</strong> — 5 min, cultural shows & local food</li>
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Hua Hin Night Market</strong> — seafood, street food, shopping, 17 min</li>
            <li><strong className="text-[#1A2744]">Bluport Cineplex</strong> — modern cinema, 10 min</li>
          </ul>
        </div>
        <div className="text-center pt-4">
          <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
