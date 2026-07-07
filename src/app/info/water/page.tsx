import DisclaimerFooter from '../../../components/DisclaimerFooter'

export default function WaterPage() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo5.jpg" alt="road and land" className="w-full h-full object-cover" style={{objectPosition: 'center 50%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Water — sorted from day one.</h1>
          <p className="text-white/60 mt-2">Municipal connection in place, with well as backup option</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-cyan-950/30 to-blue-950/20 border border-cyan-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">💧 Municipal water supply</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">The plot already has a municipal water connection in place — the pipe is there, the connection is made. This saves significant time and cost compared to plots where water infrastructure still needs to be arranged.</p>
          <p className="text-white/70 text-sm leading-relaxed">Once you begin construction, connecting your building to the existing supply is straightforward and handled by your contractor as part of standard site work.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🪣 Drilling a well — a smart backup</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">Many villa owners in Hua Hin drill a private well as a secondary water source — particularly useful for garden irrigation, pool top-up, and as backup during any temporary supply interruptions.</p>
          <div className="space-y-3 text-sm mt-4">
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Well depth (typical)</span><span className="text-white">30–60 metres</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Drilling cost</span><span className="text-white">฿35,000–80,000</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Pump + installation</span><span className="text-white">฿15,000–25,000</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Water quality</span><span className="text-white">Typically good — test recommended</span></div>
            <div className="flex justify-between"><span className="text-white/70">Permit required</span><span className="text-white">Yes — straightforward process</span></div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-teal-950/30 to-green-950/20 border border-teal-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">⚡ Electricity</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">Electricity is not yet connected to the plot but is available from the PEA (Provincial Electricity Authority) infrastructure along Soi 112. Connection is a standard process handled during construction.</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">PEA connection fee</span><span className="text-white">฿10,000–30,000 depending on distance</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Solar option</span><span className="text-white">Very viable — 300+ sunny days/year</span></div>
            <div className="flex justify-between"><span className="text-white/70">Timeline</span><span className="text-white">4–8 weeks after application</span></div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 pb-12">
        <DisclaimerFooter />
        <div className="text-center pt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
