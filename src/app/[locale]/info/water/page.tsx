import DisclaimerFooter from '@/components/DisclaimerFooter'

export default function WaterPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo5.jpg" alt="road and land" className="w-full h-full object-cover" style={{objectPosition: 'center 50%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Water — sorted from day one.</h1>
          <p className="text-white/85 mt-2">Municipal connection in place, with well as backup option</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">💧 Municipal water supply</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">The plot already has a municipal water connection in place — the pipe is there, the connection is made. This saves significant time and cost compared to plots where water infrastructure still needs to be arranged.</p>
          <p className="text-[#5C5247] text-sm leading-relaxed">Once you begin construction, connecting your building to the existing supply is straightforward and handled by your contractor as part of standard site work.</p>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🪣 Drilling a well — a smart backup</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">Many villa owners in Hua Hin drill a private well as a secondary water source — particularly useful for garden irrigation, pool top-up, and as backup during any temporary supply interruptions.</p>
          <div className="space-y-3 text-sm mt-4">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Well depth (typical)</span><span className="text-[#1A2744]">30–60 metres</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Drilling cost</span><span className="text-[#1A2744]">฿35,000–80,000</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Pump + installation</span><span className="text-[#1A2744]">฿15,000–25,000</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Water quality</span><span className="text-[#1A2744]">Typically good — test recommended</span></div>
            <div className="flex justify-between"><span className="text-[#5C5247]">Permit required</span><span className="text-[#1A2744]">Yes — straightforward process</span></div>
          </div>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">⚡ Electricity</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">Electricity is not yet connected to the plot but is available from the PEA (Provincial Electricity Authority) infrastructure along Soi 112. Connection is a standard process handled during construction.</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">PEA connection fee</span><span className="text-[#1A2744]">฿10,000–30,000 depending on distance</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Solar option</span><span className="text-[#1A2744]">Very viable — 300+ sunny days/year</span></div>
            <div className="flex justify-between"><span className="text-[#5C5247]">Timeline</span><span className="text-[#1A2744]">4–8 weeks after application</span></div>
          </div>
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
