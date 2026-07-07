import DisclaimerFooter from '../../../components/DisclaimerFooter'

export default function ThapLanNature() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="Thap Lan National Park" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.1) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Thap Lan National Park — UNESCO World Heritage</h1>
          <p className="text-white/60 mt-2">2,405 km² of protected jungle · 3–4 hours northeast of Hua Hin</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-green-950/30 to-teal-950/20 border border-green-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🌿 Thap Lan National Park — UNESCO World Heritage</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Part of the Dong Phayayen-Khao Yai Forest Complex — a UNESCO World Heritage Site — Thap Lan National Park covers 2,405 km² of protected jungle in northeastern Thailand. Home to Asian elephants, Indochinese tigers, clouded leopards, and over 300 bird species including the endangered Siamese fireback. The park features waterfalls, hiking trails, and some of Thailand&apos;s most pristine wilderness.
          </p>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            <strong className="text-white">Distance from plot:</strong> approximately 3-4 hours drive (northeast direction via Highway 304).
          </p>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Suitable as a multi-day excursion from Hua Hin.
          </p>
          <p className="text-white/40 text-xs italic leading-relaxed mb-4">
            Note: Thap Lan National Park is located in northeastern Thailand, approximately 3-4 hours from Hua Hin — ideal as an overnight or day trip excursion. Not to be confused with Thap Tai, the local subdistrict where this plot is located.
          </p>
          <a
            href="https://national-parks.org/thailand/thap-lan-national-park/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
          >
            More information → national-parks.org/thailand/thap-lan-national-park
          </a>
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
