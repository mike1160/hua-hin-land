import DisclaimerFooter from '@/components/DisclaimerFooter'

export default function MarketVillage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/IMG_7806.JPG" alt="Market Village" className="w-full h-full object-cover" style={{objectPosition: 'center center', filter: 'blur(1px) saturate(1.1)'}} />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f]">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Market Village — 10 minutes.</h1>
          <p className="text-white/85 mt-2">Everyday shopping, dining and services next to Bluport</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="relative h-72 rounded-2xl overflow-hidden border border-[#E8E2D6]">
          <img src="/IMG_7807.JPG" alt="Market Village interior" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: 'center center', filter: 'blur(1px) saturate(1.1)'}} />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7,8,15,0.7) 0%, rgba(7,8,15,0.25) 100%)'}} />
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🏪 What you&apos;ll find here</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">Market Village is Hua Hin&apos;s established neighbourhood mall — practical, busy and genuinely useful for daily life. Tesco Lotus, hardware stores, phone repair, fashion outlets and dozens of restaurants make it the go-to for residents.</p>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li>• <strong className="text-[#1A2744]">Tesco Lotus</strong> — large supermarket for everyday groceries</li>
            <li>• <strong className="text-[#1A2744]">Restaurants & cafés</strong> — Thai, Japanese, Western and fast food</li>
            <li>• <strong className="text-[#1A2744]">Fashion & lifestyle</strong> — mid-range brands and local shops</li>
            <li>• <strong className="text-[#1A2744]">Services</strong> — banks, phone shops, travel agents</li>
          </ul>
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
