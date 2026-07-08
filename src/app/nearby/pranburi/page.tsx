import DisclaimerFooter from '../../../components/DisclaimerFooter'
import PrivacyMaskedImage from '../../../components/PrivacyMaskedImage'

const MAPS_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJaSLYRYqx_TARU4kZhfkgxuU'

export default function PranburiNearby() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/IMG_5835.JPG" alt="Pranburi Beach quiet coastline Thailand" className="w-full h-full object-cover" style={{objectPosition: 'center center', filter: 'blur(1px) saturate(1.1)'}} />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.15) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Pranburi — a second coastline, 20 minutes away</h1>
          <p className="text-white/60 mt-2">Quieter beaches and a growing wellness community south of Hua Hin</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <figure>
          <PrivacyMaskedImage
            src="/IMG_5835.JPG"
            alt="Pranburi Beach quiet coastline Thailand"
            className="rounded-xl aspect-video border border-white/10"
            objectPosition="center 40%"
            maskWidth="20%"
          />
          <figcaption className="text-white/40 text-xs mt-2">Pranburi Beach · 20 min from plot</figcaption>
        </figure>

        <div className="bg-gradient-to-br from-blue-950/30 to-cyan-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏖️ Pranburi Beach &amp; Coast</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Pranburi Beach: quieter, less commercial alternative to Hua Hin beach. A second coastline within easy reach — ideal for weekend escapes, morning swims, and a change of scenery without a long drive.
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Quiet local beach · mangrove forest boardwalk · river boat tours · fishing village · 20 min from plot
          </p>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/60">Rating</span><span className="text-amber-400">⭐ 4.5 (508 reviews)</span></div>
            <div className="flex justify-between"><span className="text-white/60">Coordinates</span><span className="text-white/50 text-xs">12.3968217, 99.9954352</span></div>
          </div>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors">
            📍 Open in Google Maps →
          </a>
        </div>

        <div className="bg-gradient-to-br from-teal-950/30 to-green-950/20 border border-teal-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🌿 Nature &amp; community</h2>
          <ul className="space-y-2 text-white/70 text-sm">
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
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
