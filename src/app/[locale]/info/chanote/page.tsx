import DisclaimerFooter from '@/components/DisclaimerFooter'

export default function ChanotePage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt="plot" className="w-full h-full object-cover" style={{objectPosition: 'center 30%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Chanote — the gold standard.</h1>
          <p className="text-white/85 mt-2">Understanding Thai land title deeds</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">📜 Types of Thai title deeds</h2>
          <div className="space-y-4 text-sm">
            <div className="border-b border-[#E8E2D6] pb-4">
              <div className="flex items-center gap-2 mb-2"><span className="bg-[#C8973A]/15 text-[#C8973A] text-xs px-2 py-0.5 rounded-full font-medium">STRONGEST</span><p className="text-[#1A2744] font-semibold">Chanote (โฉนดที่ดิน · NS.4J)</p></div>
              <p className="text-[#5C5247]">Full ownership title. GPS-surveyed boundaries registered at the Land Department. Can be sold, mortgaged, leased or subdivided freely. This is what this plot has.</p>
            </div>
            <div className="border-b border-[#E8E2D6] pb-4">
              <div className="flex items-center gap-2 mb-2"><span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-0.5 rounded-full font-medium">MODERATE</span><p className="text-[#1A2744] font-semibold">Nor Sor 3 Gor (NS.3G)</p></div>
              <p className="text-[#5C5247]">Strong title but boundaries not GPS-confirmed. Can be upgraded to Chanote. Transactions possible but require more due diligence.</p>
            </div>
            <div className="border-b border-[#E8E2D6] pb-4">
              <div className="flex items-center gap-2 mb-2"><span className="bg-orange-500/20 text-orange-400 text-xs px-2 py-0.5 rounded-full font-medium">WEAK</span><p className="text-[#1A2744] font-semibold">Nor Sor 3 (NS.3)</p></div>
              <p className="text-[#5C5247]">Possession right only. Boundaries may be disputed. Transactions require 30-day public notice period. Not recommended for investment.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2"><span className="bg-red-500/20 text-red-400 text-xs px-2 py-0.5 rounded-full font-medium">AVOID</span><p className="text-[#1A2744] font-semibold">Sor Por Kor / Por Bor Tor 5</p></div>
              <p className="text-[#5C5247]">Agricultural use permits only. Cannot be sold or transferred. No investment value.</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">✅ Why Chanote matters</h2>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li>• <strong className="text-[#1A2744]">GPS-mapped boundaries</strong> — no boundary disputes possible</li>
            <li>• <strong className="text-[#1A2744]">Registered at the Land Department</strong> — government guarantee of ownership</li>
            <li>• <strong className="text-[#1A2744]">Freely transferable</strong> — sale, mortgage, lease all straightforward</li>
            <li>• <strong className="text-[#1A2744]">Can be subdivided</strong> — split into smaller plots if desired</li>
            <li>• <strong className="text-[#1A2744]">Bank accepted</strong> — can be used as collateral for a construction loan</li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🌍 Foreign ownership options</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">Thai law restricts direct foreign land ownership. However, several legal structures allow foreigners to control and benefit from land:</p>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li>• <strong className="text-[#1A2744]">Thai company structure</strong> — land held by a Thai limited company with foreign director</li>
            <li>• <strong className="text-[#1A2744]">Long-term leasehold</strong> — 30-year lease (renewable), common for villa developments</li>
            <li>• <strong className="text-[#1A2744]">Thai spouse/partner</strong> — land in Thai name with usufruct rights</li>
            <li>• <strong className="text-[#1A2744]">BOI promotion</strong> — certain investments qualify for direct ownership</li>
          </ul>
          <p className="text-[#5C5247] text-xs mt-4">Always seek independent legal advice from a qualified Thai property lawyer before purchasing.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 pb-12">
        <DisclaimerFooter />
        <div className="text-center pt-4">
          <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
