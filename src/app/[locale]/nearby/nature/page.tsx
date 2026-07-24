import DisclaimerFooter from '@/components/DisclaimerFooter'

export default function ThapLanNature() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="Thap Lan National Park" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f]">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Thap Lan National Park — UNESCO World Heritage</h1>
          <p className="text-white/85 mt-2">2,405 km² of protected jungle · 3–4 hours northeast of Hua Hin</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🌿 Thap Lan National Park — UNESCO World Heritage</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Part of the Dong Phayayen-Khao Yai Forest Complex — a UNESCO World Heritage Site — Thap Lan National Park covers 2,405 km² of protected jungle in northeastern Thailand. Home to Asian elephants, Indochinese tigers, clouded leopards, and over 300 bird species including the endangered Siamese fireback. The park features waterfalls, hiking trails, and some of Thailand&apos;s most pristine wilderness.
          </p>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            <strong className="text-[#1A2744]">Distance from plot:</strong> approximately 3-4 hours drive (northeast direction via Highway 304).
          </p>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Suitable as a multi-day excursion from Hua Hin.
          </p>
          <p className="text-[#5C5247] text-xs italic leading-relaxed mb-4">
            Note: Thap Lan National Park is located in northeastern Thailand, approximately 3-4 hours from Hua Hin — ideal as an overnight or day trip excursion. Not to be confused with Thap Tai, the local subdistrict where this plot is located.
          </p>
          <a
            href="https://national-parks.org/thailand/thap-lan-national-park/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm font-medium"
          >
            More information → national-parks.org/thailand/thap-lan-national-park
          </a>
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
