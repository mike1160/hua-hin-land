export default function Town() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt="aerial town" className="w-full h-full object-cover" style={{objectPosition: 'center 30%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Hua Hin town — 17 minutes.</h1>
          <p className="text-white/60 mt-2">A real town. Not a tourist trap.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-amber-950/30 to-orange-950/20 border border-amber-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏙️ What makes Hua Hin different</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">Hua Hin is not Pattaya. It is not Phuket. It has resisted the worst excesses of Thai beach tourism and retained a genuinely pleasant, mixed character — Thai families, European retirees, golfers, foodies, and a small but real arts community all coexist here.</p>
          <p className="text-white/70 text-sm leading-relaxed">The town centre has a proper night market, excellent seafood restaurants, international bars with live music, a Sunday walking street, and a railway station with direct trains to Bangkok. It functions as a real place, not a stage set.</p>
        </div>
        <div className="bg-gradient-to-br from-purple-950/30 to-indigo-950/20 border border-purple-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🎵 Nightlife — the right kind</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">Live music every night. Jazz bars, Thai bands, international acts. A cosmopolitan restaurant scene with everything from street food to fine dining. Night markets on weekends. And a community of people who know how to enjoy an evening without it becoming a problem.</p>
          <p className="text-white/70 text-sm leading-relaxed">Hua Hin&apos;s nightlife is relaxed, friendly and international — not raucous. The kind you can take your parents to, or enjoy with a partner who doesn&apos;t drink. The kind you actually want on your doorstep.</p>
        </div>
        <div className="text-center pt-4"><a href="/" className="text-blue-400 hover:text-blue-300 text-sm">← Back to the land listing</a></div>
      </div>
    </main>
  )
}
