import DisclaimerFooter from '../../../components/DisclaimerFooter'

export default function Beach() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/IMG_5835.JPG" alt="Hua Hin beach" className="w-full h-full object-cover" style={{objectPosition: 'center center', filter: 'blur(1px) saturate(1.1)'}} />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.15) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Hua Hin Beach — 12 minutes.</h1>
          <p className="text-white/60 mt-2">Thailand&apos;s original royal seaside resort</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-blue-950/30 to-cyan-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏖️ About Hua Hin Beach</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">Hua Hin has been Thailand&apos;s royal beach resort for over a century — King Rama VII built the royal palace Klai Kangwon here in 1926, and the Thai royal family continues to use it today. This history gives Hua Hin a dignity and stability that many other Thai beach towns lack.</p>
          <p className="text-white/70 text-sm leading-relaxed">The beach itself stretches 6 kilometres — long, relatively wide, and lined with casuarina trees. The water is calm for most of the year. It&apos;s not the turquoise Andaman — but it&apos;s real, uncrowded by Thai resort standards, and genuinely beautiful at sunrise and sunset.</p>
        </div>
        <div className="bg-gradient-to-br from-teal-950/30 to-green-950/20 border border-teal-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🌊 Beaches within reach</h2>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Hua Hin Beach</strong> — 12 min · 6km, royal resort town, restaurants, horse riding</li>
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Khao Takiab Beach</strong> — 15 min · quieter, temple on the hill, local atmosphere</li>
            <li className="border-b border-white/5 pb-2"><strong className="text-white">Pak Nam Pran (Pranburi)</strong> — 30 min · secluded, boutique resorts, very quiet</li>
            <li><strong className="text-white">Sam Roi Yot</strong> — 60 min · pristine, national park, almost no tourists</li>
          </ul>
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
