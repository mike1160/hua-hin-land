export default function ViewPage() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-[50vh] flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="mountain view sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.1) 0%, rgba(7,8,15,0.7) 60%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>The view that changes everything.</h1>
          <p className="text-white/60 mt-2">Panoramic mountain views — morning, noon and golden hour</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-purple-950/30 to-indigo-950/20 border border-purple-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏔️ What you see from the plot</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">The Thap Tai mountains rise directly behind the plot — a lush, green limestone ridge that stays cool and forested year-round. There are no buildings between the plot and the mountains. The view is unobstructed and, given the protected forest status, will remain so.</p>
          <p className="text-white/70 text-sm leading-relaxed">In the morning, mist sometimes rolls through the valleys between the peaks — a sight that people travel hours to see. At golden hour, the mountains turn amber and the sky behind them shifts through every shade of orange, pink and purple. This is the view from your future terrace.</p>
        </div>
        <div className="bg-gradient-to-br from-amber-950/30 to-orange-950/20 border border-amber-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">☕ Imagine your morning here</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">You wake up, brew a proper coffee or steep a matcha. You step out onto your terrace — the air is still cool, the birds are starting. The mountains are right there, close enough to feel their presence, far enough to give you space and silence.</p>
          <p className="text-white/70 text-sm leading-relaxed mb-4">In the evening, a glass of wine. The mountains catch the last light. The temperature drops just enough to be perfect. This is not a holiday postcard — this is a Tuesday.</p>
          <p className="text-white/50 text-sm italic">This is what the view does to a life. It slows it down. In the best possible way.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-950/30 to-cyan-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🌿 Why this view is protected</h2>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>• The mountains behind the plot are protected national park — no development allowed</li>
            <li>• Thap Tai National Park designation ensures permanent green backdrop</li>
            <li>• No high-rise development possible in this zone — low density area</li>
            <li>• The view you see today is the view you will see in 20 years</li>
          </ul>
        </div>
        <div className="text-center pt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
