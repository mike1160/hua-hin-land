import DisclaimerFooter from '@/components/DisclaimerFooter'
import PrivacyMaskedImage from '@/components/PrivacyMaskedImage'

const MAPS_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJaSLYRYqx_TARU4kZhfkgxuU'

export default function PranburiNearby() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/IMG_5835.JPG" alt="Pranburi Beach quiet coastline Thailand" className="w-full h-full object-cover" style={{objectPosition: 'center center', filter: 'blur(1px) saturate(1.1)'}} />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Pranburi — a second coastline, 20 minutes away</h1>
          <p className="text-white/85 mt-2">Quieter beaches and a growing wellness community south of Hua Hin</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <figure>
          <PrivacyMaskedImage
            src="/IMG_5835.JPG"
            alt="Pranburi Beach quiet coastline Thailand"
            className="rounded-xl aspect-video border border-[#E8E2D6]"
            objectPosition="center 40%"
            maskWidth="20%"
          />
          <figcaption className="text-[#5C5247] text-xs mt-2">Pranburi Beach · 20 min from plot</figcaption>
        </figure>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🏖️ Pranburi Beach &amp; Coast</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Pranburi Beach: quieter, less commercial alternative to Hua Hin beach. A second coastline within easy reach — ideal for weekend escapes, morning swims, and a change of scenery without a long drive.
          </p>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Quiet local beach · mangrove forest boardwalk · river boat tours · fishing village · 20 min from plot
          </p>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Rating</span><span className="text-amber-400">⭐ 4.5 (508 reviews)</span></div>
            <div className="flex justify-between"><span className="text-[#5C5247]">Coordinates</span><span className="text-[#5C5247] text-xs">12.3968217, 99.9954352</span></div>
          </div>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            📍 Open in Google Maps →
          </a>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🌿 Nature &amp; community</h2>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li>• Pranburi Forest Park and mangrove walks — boardwalks through coastal forest</li>
            <li>• Growing expat and wellness community — boutique resorts and eco-lodges</li>
            <li>• Pak Nam Pran fishing village — authentic local atmosphere and fresh seafood</li>
            <li>• Ko Sai and surrounding coastal area — closer than most expect from satellite view</li>
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
