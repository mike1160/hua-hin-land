import DisclaimerFooter from '@/components/DisclaimerFooter'

export default function Town() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/IMG_7802.JPG" alt="historic Hua Hin" className="w-full h-full object-cover" style={{objectPosition: 'center center', filter: 'blur(1px) saturate(1.1)'}} />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f]">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Hua Hin town — 17 minutes.</h1>
          <p className="text-white/85 mt-2">A real town. Not a tourist trap.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🏙️ What makes Hua Hin different</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">Hua Hin is not Pattaya. It is not Phuket. It has resisted the worst excesses of Thai beach tourism and retained a genuinely pleasant, mixed character — Thai families, European retirees, golfers, foodies, and a small but real arts community all coexist here.</p>
          <p className="text-[#5C5247] text-sm leading-relaxed">The town centre has a proper night market, excellent seafood restaurants, international bars with live music, a Sunday walking street, and a railway station with direct trains to Bangkok. It functions as a real place, not a stage set.</p>
        </div>
        <div className="relative h-64 rounded-2xl overflow-hidden border border-[#E8E2D6]">
          <img src="/IMG_7766.JPG" alt="Hua Hin nightlife" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: 'center center', filter: 'blur(1px) saturate(1.1)'}} />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7,8,15,0.75) 0%, rgba(7,8,15,0.25) 100%)'}} />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-[#1A2744]/80 text-sm font-medium">Restaurants & nightlife in Hua Hin town</p>
          </div>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🎵 Nightlife — the right kind</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">Live music every night. Jazz bars, Thai bands, international acts. A cosmopolitan restaurant scene with everything from street food to fine dining. Night markets on weekends. And a community of people who know how to enjoy an evening without it becoming a problem.</p>
          <p className="text-[#5C5247] text-sm leading-relaxed">Hua Hin&apos;s nightlife is relaxed, friendly and international — not raucous. The kind you can take your parents to, or enjoy with a partner who doesn&apos;t drink. The kind you actually want on your doorstep.</p>
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
