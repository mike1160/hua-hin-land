export default function Golf() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt="land" className="w-full h-full object-cover" style={{objectPosition: 'center 30%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Golf & sport.</h1>
          <p className="text-white/60 mt-2">Three world-class courses within 20 minutes of your door</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-green-950/30 to-teal-950/20 border border-green-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">⛳ Golf courses</h2>
          <ul className="space-y-4 text-white/70 text-sm">
            <li className="border-b border-white/5 pb-4"><strong className="text-white">MahaSamutr Country Club</strong><br/>Closest to Soi 112 — championship course, mountain views<br/><span className="text-blue-400">≈ 10 min · +66 32 618 888</span></li>
            <li className="border-b border-white/5 pb-4"><strong className="text-white">Banyan Golf Club</strong><br/>Award-winning, rated among Asia&apos;s best<br/><span className="text-blue-400">≈ 20 min · +66 32 616 100</span></li>
            <li><strong className="text-white">Black Mountain Golf Club</strong><br/>Host of Asian Tour events, 18-hole championship<br/><span className="text-blue-400">≈ 20 min · +66 32 618 666</span></li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-blue-950/30 to-cyan-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏃 Other sports & activities</h2>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>• Cycling — Grand Canyon Hua Hin loop, dedicated lanes</li>
            <li>• Hiking — Thap Tai National Park from the doorstep</li>
            <li>• Horse riding — Hua Hin beach</li>
            <li>• Kitesurfing & watersports — Hua Hin beach, 12 min</li>
            <li>• Tennis — multiple clubs and resorts</li>
            <li>• Muay Thai gyms — town centre</li>
          </ul>
        </div>
        <div className="text-center pt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
