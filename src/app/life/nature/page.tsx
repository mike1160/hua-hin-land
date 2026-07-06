export default function Nature() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="nature" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.1) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Beach & nature.</h1>
          <p className="text-white/60 mt-2">Four national parks within 90 minutes. Beach in 12.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-blue-950/30 to-cyan-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏖️ Beaches</h2>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Hua Hin Beach</strong> — 6 km of sand, royal resort town, 12 min</li>
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Khao Takiab Beach</strong> — quieter, temple on the hill, 15 min</li>
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Pak Nam Pran (Pranburi)</strong> — secluded, 30 min south</li>
            <li><strong className="text-white">Sam Roi Yot beaches</strong> — pristine, national park, 60 min</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-green-950/30 to-teal-950/20 border border-green-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🌿 National parks</h2>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="border-b border-white/5 pb-3"><strong className="text-white">Thap Tai National Park</strong> — on your doorstep<br/>Hiking, bird watching, limestone mountains, waterfalls, caves</li>
            <li className="border-b border-white/5 pb-3"><strong className="text-white">Kaeng Krachan NP</strong> — 85 km · UNESCO-listed, largest in Thailand</li>
            <li className="border-b border-white/5 pb-3"><strong className="text-white">Khao Sam Roi Yot NP</strong> — 60 km · karsts, mangroves, Phraya Nakhon Cave</li>
            <li><strong className="text-white">Kui Buri NP</strong> — 85 km · wild elephants, 95% daily sighting chance</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-purple-950/30 to-indigo-950/20 border border-purple-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🛕 Temples & spiritual sites</h2>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>• <strong className="text-white">Wat Huay Mongkol</strong> — giant Luang Phor Thuad statue, nearby</li>
            <li>• <strong className="text-white">Samnaksong Khao Phran Thup</strong> — forest temple retreat, Thap Tai</li>
            <li>• <strong className="text-white">Wat Khao Takiab</strong> — hilltop temple with sea views</li>
            <li>• <strong className="text-white">Klai Kangwon Palace</strong> — Royal Family summer residence, 15 min</li>
          </ul>
        </div>
        <div className="text-center pt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
