export default function SizePage() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt="aerial view" className="w-full h-full object-cover" style={{objectPosition: 'center 40%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>4 Rai 2 Ngan — what does that mean?</h1>
          <p className="text-white/60 mt-2">Understanding the Thai land measurement system</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">📐 The Thai measurement system</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-6">Thailand uses its own traditional land measurement system. The three units you need to know are Rai, Ngan and Tarang Wa — they work together like metres and centimetres.</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div><p className="text-white font-medium">1 Rai</p><p className="text-white/40 text-xs">The main unit</p></div>
              <p className="text-blue-400 font-semibold">= 1,600 m²</p>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div><p className="text-white font-medium">1 Ngan</p><p className="text-white/40 text-xs">¼ of a Rai</p></div>
              <p className="text-blue-400 font-semibold">= 400 m²</p>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div><p className="text-white font-medium">1 Tarang Wa</p><p className="text-white/40 text-xs">Smallest unit</p></div>
              <p className="text-blue-400 font-semibold">= 4 m²</p>
            </div>
            <div className="flex items-center justify-between">
              <div><p className="text-white font-medium">1 Rai</p><p className="text-white/40 text-xs">In Tarang Wa</p></div>
              <p className="text-blue-400 font-semibold">= 400 Tarang Wa</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-950/30 to-blue-950/20 border border-purple-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🧮 This plot: 4 Rai 2 Ngan</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">4 Rai</span><span className="text-white">4 × 1,600 m² = 6,400 m²</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">2 Ngan</span><span className="text-white">2 × 400 m² = 800 m²</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2 font-semibold"><span className="text-blue-400">Total</span><span className="text-blue-400">7,200 m²</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Equivalent to</span><span className="text-white">approx. 0.72 hectare</span></div>
            <div className="flex justify-between"><span className="text-white/70">Or roughly</span><span className="text-white">the size of a football pitch</span></div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-950/30 to-teal-950/20 border border-green-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏡 What can you build on 4 Rai 2 Ngan?</h2>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>• A generous private villa with large pool and tropical garden — on just 1 Rai</li>
            <li>• 3–4 separate building plots with room to spare</li>
            <li>• A boutique villa development of 4–5 homes</li>
            <li>• A private estate with main house, guest villa and extensive grounds</li>
          </ul>
          <p className="text-white/40 text-xs mt-4">For context: most plots available on Soi 112 are 1–2 Rai. At 4 Rai 2 Ngan, this plot is exceptionally large for the area.</p>
        </div>
        <div className="text-center pt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
