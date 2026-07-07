import DisclaimerFooter from '../../../components/DisclaimerFooter'

export default function AccessPage() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo6.jpg" alt="concrete road access" className="w-full h-full object-cover" style={{objectPosition: 'center 50%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Access — the best of both worlds.</h1>
          <p className="text-white/60 mt-2">Close enough to everything. Far enough from the noise.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-slate-950/40 to-gray-950/30 border border-slate-800/40 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🛣️ Direct concrete road access</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">The plot sits directly on a concrete road — no dirt tracks, no seasonal access issues, no getting stuck in the rainy season. You can drive a truck to the plot on day one. Construction vehicles, delivery lorries, your own car — all fine year-round.</p>
          <p className="text-white/70 text-sm leading-relaxed">This matters more than it sounds. Many attractive plots in Thailand are accessed via dirt or laterite tracks that become impassable in heavy rain. Not here.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">📍 The sweet spot — Soi 112, Thap Tai</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">Soi 112 sits at the edge of Hua Hin&apos;s urban spread — developed enough to have infrastructure, quiet enough to feel like the countryside. It&apos;s a genuinely pleasant place to live, not just to visit.</p>
          <div className="space-y-3 text-sm mt-4">
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">7-Eleven</span><span className="text-blue-400 font-medium">4 min drive</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Bluport Mall</span><span className="text-blue-400 font-medium">10 min drive</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Hua Hin Beach</span><span className="text-blue-400 font-medium">12 min drive</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Hua Hin town centre</span><span className="text-blue-400 font-medium">17 min drive</span></div>
            <div className="flex justify-between"><span className="text-white/70">Bangkok highway</span><span className="text-blue-400 font-medium">Direct access</span></div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-950/30 to-teal-950/20 border border-green-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🌿 Far enough from the noise</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">Soi 112 is a residential corridor, not a busy through-road. Traffic is light — mostly residents and the occasional delivery. There are no factories, no night markets on the doorstep, no airport flight paths.</p>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>• No road noise from the main highway — Soi 112 is a side road</li>
            <li>• No industrial neighbours — purely residential and agricultural area</li>
            <li>• National park behind the plot — silence in that direction guaranteed</li>
            <li>• Low traffic density — this is a neighbourhood road, not a commuter route</li>
          </ul>
          <p className="text-white/50 text-xs mt-4 italic">The loudest thing you&apos;ll hear most mornings is birdsong from the national park.</p>
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
