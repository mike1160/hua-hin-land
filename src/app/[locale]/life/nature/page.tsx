export default function Nature() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="nature" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Beach & nature.</h1>
          <p className="text-white/85 mt-2">Four national parks within 90 minutes. Beach in 12.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🏖️ Beaches</h2>
          <ul className="space-y-3 text-[#5C5247] text-sm">
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Hua Hin Beach</strong> — 6 km of sand, royal resort town, 12 min</li>
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Khao Takiab Beach</strong> — quieter, temple on the hill, 15 min</li>
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Pak Nam Pran (Pranburi)</strong> — secluded, 30 min south</li>
            <li><strong className="text-[#1A2744]">Sam Roi Yot beaches</strong> — pristine, national park, 60 min</li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🌿 National parks</h2>
          <ul className="space-y-3 text-[#5C5247] text-sm">
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">Thap Tai National Park</strong> — on your doorstep<br/>Hiking, bird watching, limestone mountains, waterfalls, caves</li>
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">Kaeng Krachan NP</strong> — 85 km · UNESCO-listed, largest in Thailand</li>
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">Khao Sam Roi Yot NP</strong> — 60 km · karsts, mangroves, Phraya Nakhon Cave</li>
            <li><strong className="text-[#1A2744]">Kui Buri NP</strong> — 85 km · wild elephants, 95% daily sighting chance</li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🛕 Temples & spiritual sites</h2>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li>• <strong className="text-[#1A2744]">Wat Huay Mongkol</strong> — giant Luang Phor Thuad statue, nearby</li>
            <li>• <strong className="text-[#1A2744]">Samnaksong Khao Phran Thup</strong> — forest temple retreat, Thap Tai</li>
            <li>• <strong className="text-[#1A2744]">Wat Khao Takiab</strong> — hilltop temple with sea views</li>
            <li>• <strong className="text-[#1A2744]">Klai Kangwon Palace</strong> — Royal Family summer residence, 15 min</li>
          </ul>
        </div>
        <div className="text-center pt-4">
          <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
