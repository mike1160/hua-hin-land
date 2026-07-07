export default function ChanotePage() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt="plot" className="w-full h-full object-cover" style={{objectPosition: 'center 30%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Chanote — the gold standard.</h1>
          <p className="text-white/60 mt-2">Understanding Thai land title deeds</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-amber-950/30 to-orange-950/20 border border-amber-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">📜 Types of Thai title deeds</h2>
          <div className="space-y-4 text-sm">
            <div className="border-b border-white/5 pb-4">
              <div className="flex items-center gap-2 mb-2"><span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full font-medium">STRONGEST</span><p className="text-white font-semibold">Chanote (โฉนดที่ดิน · NS.4J)</p></div>
              <p className="text-white/60">Full ownership title. GPS-surveyed boundaries registered at the Land Department. Can be sold, mortgaged, leased or subdivided freely. This is what this plot has.</p>
            </div>
            <div className="border-b border-white/5 pb-4">
              <div className="flex items-center gap-2 mb-2"><span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-0.5 rounded-full font-medium">MODERATE</span><p className="text-white font-semibold">Nor Sor 3 Gor (NS.3G)</p></div>
              <p className="text-white/60">Strong title but boundaries not GPS-confirmed. Can be upgraded to Chanote. Transactions possible but require more due diligence.</p>
            </div>
            <div className="border-b border-white/5 pb-4">
              <div className="flex items-center gap-2 mb-2"><span className="bg-orange-500/20 text-orange-400 text-xs px-2 py-0.5 rounded-full font-medium">WEAK</span><p className="text-white font-semibold">Nor Sor 3 (NS.3)</p></div>
              <p className="text-white/60">Possession right only. Boundaries may be disputed. Transactions require 30-day public notice period. Not recommended for investment.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2"><span className="bg-red-500/20 text-red-400 text-xs px-2 py-0.5 rounded-full font-medium">AVOID</span><p className="text-white font-semibold">Sor Por Kor / Por Bor Tor 5</p></div>
              <p className="text-white/60">Agricultural use permits only. Cannot be sold or transferred. No investment value.</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">✅ Why Chanote matters</h2>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>• <strong className="text-white">GPS-mapped boundaries</strong> — no boundary disputes possible</li>
            <li>• <strong className="text-white">Registered at the Land Department</strong> — government guarantee of ownership</li>
            <li>• <strong className="text-white">Freely transferable</strong> — sale, mortgage, lease all straightforward</li>
            <li>• <strong className="text-white">Can be subdivided</strong> — split into smaller plots if desired</li>
            <li>• <strong className="text-white">Bank accepted</strong> — can be used as collateral for a construction loan</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/20 border border-purple-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🌍 Foreign ownership options</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">Thai law restricts direct foreign land ownership. However, several legal structures allow foreigners to control and benefit from land:</p>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>• <strong className="text-white">Thai company structure</strong> — land held by a Thai limited company with foreign director</li>
            <li>• <strong className="text-white">Long-term leasehold</strong> — 30-year lease (renewable), common for villa developments</li>
            <li>• <strong className="text-white">Thai spouse/partner</strong> — land in Thai name with usufruct rights</li>
            <li>• <strong className="text-white">BOI promotion</strong> — certain investments qualify for direct ownership</li>
          </ul>
          <p className="text-white/40 text-xs mt-4">Always seek independent legal advice from a qualified Thai property lawyer before purchasing.</p>
        </div>
        <div className="text-center pt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
