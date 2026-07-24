import DisclaimerFooter from '@/components/DisclaimerFooter'

export default function Chumphon() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="nature" className="w-full h-full object-cover" style={{objectPosition: 'center 60%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f]">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Chumphon — 230 km south.</h1>
          <p className="text-white/85 mt-2">Gateway to the islands, end of the Gulf coast</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🌴 Why Chumphon matters</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">Chumphon is the jumping-off point for Koh Tao — Thailand&apos;s world-famous diving island. It&apos;s also where the Gulf coast transitions to a more tropical, island-dotted landscape. A 3-hour drive from Soi 112 opens up a completely different world.</p>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li>• <strong className="text-[#1A2744]">Koh Tao</strong> — 2-hour ferry from Chumphon · world&apos;s best dive sites for beginners</li>
            <li>• <strong className="text-[#1A2744]">Koh Samui</strong> — accessible via Chumphon or Surat Thani (another hour south)</li>
            <li>• <strong className="text-[#1A2744]">Koh Phangan</strong> — Full Moon Party island, also via Surat Thani</li>
            <li>• <strong className="text-[#1A2744]">Chumphon town</strong> — authentic Thai provincial city, minimal tourism</li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🗺️ The bigger picture</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">Hua Hin&apos;s location on the upper Gulf coast means you&apos;re within a day&apos;s drive of almost everything Thailand has to offer. North to Bangkok and beyond. South to the islands and eventually Malaysia. West across the peninsula to Kanchanaburi and the Andaman coast.</p>
          <p className="text-[#5C5247] text-sm leading-relaxed mt-3">This is a genuinely central location for exploring Thailand — not a remote destination, not an urban centre. The best of both.</p>
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
