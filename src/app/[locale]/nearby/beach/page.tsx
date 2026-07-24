import DisclaimerFooter from '@/components/DisclaimerFooter'

export default function Beach() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/IMG_5835.JPG" alt="Hua Hin beach" className="w-full h-full object-cover" style={{objectPosition: 'center center', filter: 'blur(1px) saturate(1.1)'}} />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f]">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Hua Hin Beach — 12 minutes.</h1>
          <p className="text-white/85 mt-2">Thailand&apos;s original royal seaside resort</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🏖️ About Hua Hin Beach</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">Hua Hin has been Thailand&apos;s royal beach resort for over a century — King Rama VII built the royal palace Klai Kangwon here in 1926, and the Thai royal family continues to use it today. This history gives Hua Hin a dignity and stability that many other Thai beach towns lack.</p>
          <p className="text-[#5C5247] text-sm leading-relaxed">The beach itself stretches 6 kilometres — long, relatively wide, and lined with casuarina trees. The water is calm for most of the year. It&apos;s not the turquoise Andaman — but it&apos;s real, uncrowded by Thai resort standards, and genuinely beautiful at sunrise and sunset.</p>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🌊 Beaches within reach</h2>
          <ul className="space-y-3 text-[#5C5247] text-sm">
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Hua Hin Beach</strong> — 12 min · 6km, royal resort town, restaurants, horse riding</li>
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Khao Takiab Beach</strong> — 15 min · quieter, temple on the hill, local atmosphere</li>
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">Pak Nam Pran (Pranburi)</strong> — 30 min · secluded, boutique resorts, very quiet</li>
            <li><strong className="text-[#1A2744]">Sam Roi Yot</strong> — 60 min · pristine, national park, almost no tourists</li>
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
