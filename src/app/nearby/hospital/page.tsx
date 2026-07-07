export default function Hospital() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt="plot" className="w-full h-full object-cover" style={{objectPosition: 'center 40%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Bangkok Hospital — 15 minutes.</h1>
          <p className="text-white/60 mt-2">International standard healthcare at your doorstep</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-red-950/30 to-rose-950/20 border border-red-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏥 Bangkok Hospital Hua Hin</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">Bangkok Hospital is part of Thailand&apos;s premier private hospital network — the same group that operates hospitals used by Thai royalty, government officials and international business executives. The Hua Hin branch is a full-service facility with specialist departments, 24/7 emergency care, and English-speaking staff throughout.</p>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Address</span><span className="text-white">888 Petchkasem Road, Hua Hin</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Phone</span><span className="text-blue-400">+66 32 616 800</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Emergency</span><span className="text-white">24/7</span></li>
            <li className="flex justify-between"><span>Languages</span><span className="text-white">Thai, English, Japanese</span></li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">💊 Other medical facilities nearby</h2>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="border-b border-white/5 pb-2"><strong className="text-white">San Paolo Hospital</strong> — 17 min · Full service, more affordable · +66 32 532 576</li>
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Hua Hin Hospital (Government)</strong> — 17 min · Public hospital, very low cost · +66 32 532 395</li>
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Chiva-Som Medical Centre</strong> — world-renowned wellness hospital on the beach</li>
            <li><strong className="text-white">Multiple clinics & dentists</strong> — 5–15 min, Thai and Western-trained doctors</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-green-950/30 to-teal-950/20 border border-green-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">💰 Healthcare costs vs Europe</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">GP consultation (private)</span><span className="text-green-400">฿400–800 (€10–21)</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Specialist consultation</span><span className="text-green-400">฿800–1,500 (€21–39)</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Blood test panel</span><span className="text-green-400">฿1,500–3,000 (€39–78)</span></div>
            <div className="flex justify-between"><span className="text-white/70">Dental cleaning</span><span className="text-green-400">฿500–800 (€13–21)</span></div>
          </div>
        </div>
        <div className="text-center pt-4"><a href="/" className="text-blue-400 hover:text-blue-300 text-sm">← Back to the land listing</a></div>
      </div>
    </main>
  )
}
