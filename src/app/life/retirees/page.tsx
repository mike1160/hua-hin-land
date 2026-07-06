export default function Retirees() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="sunset" className="w-full h-full object-cover" style={{objectPosition: 'center 60%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Perfect for retirees.</h1>
          <p className="text-white/60 mt-2">Why Hua Hin is where Europe&apos;s smartest retirees quietly landed</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-amber-950/30 to-orange-950/20 border border-amber-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏥 World-class hospitals nearby</h2>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Bangkok Hospital Hua Hin</span><span className="text-blue-400">15 min · +66 32 616 800</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>San Paolo Hospital Hua Hin</span><span className="text-blue-400">17 min · +66 32 532 576</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Hua Hin Hospital (Government)</span><span className="text-blue-400">17 min · +66 32 532 395</span></li>
            <li className="flex justify-between"><span>Multiple private clinics & dentists</span><span className="text-blue-400">5–15 min</span></li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">💰 Cost of living vs Europe</h2>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Thai massage (1 hour)</span><span className="text-green-400">฿200–350 (≈ €5–9)</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Restaurant meal (local)</span><span className="text-green-400">฿80–150 (≈ €2–4)</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Western restaurant meal</span><span className="text-green-400">฿300–600 (≈ €8–16)</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Monthly housekeeper</span><span className="text-green-400">฿8,000–12,000 (≈ €200–300)</span></li>
            <li className="flex justify-between"><span>Golf (18 holes, incl. caddy)</span><span className="text-green-400">฿1,200–2,500 (≈ €30–65)</span></li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-green-950/30 to-teal-950/20 border border-green-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🌤️ Climate & lifestyle</h2>
          <p className="text-white/70 text-sm leading-relaxed">Hua Hin enjoys one of Thailand&apos;s most stable climates — warm and sunny year-round with a relatively short rainy season. Average temperature 28–33°C. The pace is relaxed, traffic is minimal, and the expat community is warm, international and genuinely welcoming.</p>
        </div>
        <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/20 border border-purple-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🛂 Visas for long-stay</h2>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>• <strong className="text-white">Retirement Visa (Non-OA)</strong> — for 50+ with proof of funds</li>
            <li>• <strong className="text-white">LTR Visa</strong> — Long-Term Resident visa, up to 10 years</li>
            <li>• <strong className="text-white">DTV</strong> — Destination Thailand Visa, 180 days in/out</li>
            <li className="text-white/40 text-xs mt-2">Always consult a qualified Thai immigration lawyer for current requirements</li>
          </ul>
        </div>
        <div className="text-center pt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
