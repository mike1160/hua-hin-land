import DisclaimerFooter from '@/components/DisclaimerFooter'

export default function Hospital() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt="plot" className="w-full h-full object-cover" style={{objectPosition: 'center 40%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f]">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Bangkok Hospital — 15 minutes.</h1>
          <p className="text-white/85 mt-2">International standard healthcare at your doorstep</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🏥 Bangkok Hospital Hua Hin</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">Bangkok Hospital is part of Thailand&apos;s premier private hospital network — the same group that operates hospitals used by Thai royalty, government officials and international business executives. The Hua Hin branch is a full-service facility with specialist departments, 24/7 emergency care, and English-speaking staff throughout.</p>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li className="flex justify-between border-b border-[#E8E2D6] pb-2"><span>Address</span><span className="text-[#1A2744]">888 Petchkasem Road, Hua Hin</span></li>
            <li className="flex justify-between border-b border-[#E8E2D6] pb-2"><span>Phone</span><span className="text-[#C8973A]">+66 32 616 800</span></li>
            <li className="flex justify-between border-b border-[#E8E2D6] pb-2"><span>Emergency</span><span className="text-[#1A2744]">24/7</span></li>
            <li className="flex justify-between"><span>Languages</span><span className="text-[#1A2744]">Thai, English, Japanese</span></li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">💊 Other medical facilities nearby</h2>
          <ul className="space-y-3 text-[#5C5247] text-sm">
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">San Paolo Hospital</strong> — 17 min · Full service, more affordable · +66 32 532 576</li>
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Hua Hin Hospital (Government)</strong> — 17 min · Public hospital, very low cost · +66 32 532 395</li>
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Chiva-Som Medical Centre</strong> — world-renowned wellness hospital on the beach</li>
            <li><strong className="text-[#1A2744]">Multiple clinics & dentists</strong> — 5–15 min, Thai and Western-trained doctors</li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">💰 Healthcare costs vs Europe</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">GP consultation (private)</span><span className="text-[#C8973A]">฿400–800 (€10–21)</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Specialist consultation</span><span className="text-[#C8973A]">฿800–1,500 (€21–39)</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Blood test panel</span><span className="text-[#C8973A]">฿1,500–3,000 (€39–78)</span></div>
            <div className="flex justify-between"><span className="text-[#5C5247]">Dental cleaning</span><span className="text-[#C8973A]">฿500–800 (€13–21)</span></div>
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
