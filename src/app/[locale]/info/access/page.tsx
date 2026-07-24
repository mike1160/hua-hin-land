import DisclaimerFooter from '@/components/DisclaimerFooter'

export default function AccessPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo6.jpg" alt="concrete road access" className="w-full h-full object-cover" style={{objectPosition: 'center 50%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Access — the best of both worlds.</h1>
          <p className="text-white/85 mt-2">Close enough to everything. Far enough from the noise.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🛣️ Direct concrete road access</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">The plot sits directly on a concrete road — no dirt tracks, no seasonal access issues, no getting stuck in the rainy season. You can drive a truck to the plot on day one. Construction vehicles, delivery lorries, your own car — all fine year-round.</p>
          <p className="text-[#5C5247] text-sm leading-relaxed">This matters more than it sounds. Many attractive plots in Thailand are accessed via dirt or laterite tracks that become impassable in heavy rain. Not here.</p>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">📍 The sweet spot — Soi 112, Thap Tai</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">Soi 112 sits at the edge of Hua Hin&apos;s urban spread — developed enough to have infrastructure, quiet enough to feel like the countryside. It&apos;s a genuinely pleasant place to live, not just to visit.</p>
          <div className="space-y-3 text-sm mt-4">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">7-Eleven</span><span className="text-[#C8973A] font-medium">4 min drive</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Bluport Mall</span><span className="text-[#C8973A] font-medium">10 min drive</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Hua Hin Beach</span><span className="text-[#C8973A] font-medium">12 min drive</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Hua Hin town centre</span><span className="text-[#C8973A] font-medium">17 min drive</span></div>
            <div className="flex justify-between"><span className="text-[#5C5247]">Bangkok highway</span><span className="text-[#C8973A] font-medium">Direct access</span></div>
          </div>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🌿 Far enough from the noise</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">Soi 112 is a residential corridor, not a busy through-road. Traffic is light — mostly residents and the occasional delivery. There are no factories, no night markets on the doorstep, no airport flight paths.</p>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li>• No road noise from the main highway — Soi 112 is a side road</li>
            <li>• No industrial neighbours — purely residential and agricultural area</li>
            <li>• National park behind the plot — silence in that direction guaranteed</li>
            <li>• Low traffic density — this is a neighbourhood road, not a commuter route</li>
          </ul>
          <p className="text-[#5C5247] text-xs mt-4 italic">The loudest thing you&apos;ll hear most mornings is birdsong from the national park.</p>
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
