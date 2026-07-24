import DisclaimerFooter from '@/components/DisclaimerFooter'

const MAPS_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJI5xesuqy_TAR6nDmJo9dWzE'

export default function SonResortNearby() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/IMG_7807.JPG" alt="The Son Resort private pool villa Pranburi" className="w-full h-full object-cover" style={{objectPosition: 'center 50%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>The Son Resort — best rated resort in the area</h1>
          <p className="text-white/85 mt-2">Wang Pong, Pranburi · ⭐ 5.0 perfect score</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <figure>
          <img
            src="/lifestyle1.jpg"
            alt="The Son Resort private pool villa Pranburi"
            className="rounded-xl w-full aspect-video object-cover border border-[#E8E2D6]"
          />
          <figcaption className="text-[#5C5247] text-xs mt-2">The Son Resort · Wang Pong, Pranburi · 25 min from plot</figcaption>
        </figure>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">⭐ The Son Resort</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Top-rated boutique resort in Wang Pong, Pranburi — a perfect 5.0 rating from 142 reviews. When a highly rated resort chooses to operate in this region, it validates the area&apos;s appeal for high-end tourism and lifestyle buyers.
          </p>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Private pool villas · boutique resort · gateway to Khao Sam Roi Yot National Park · exceptional value
          </p>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Rating</span><span className="text-amber-400">⭐ 5.0 (142 reviews)</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Location</span><span className="text-[#1A2744]/80">Wang Pong, Pranburi</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Phone</span><a href="tel:+66830121550" className="text-[#C8973A] hover:text-[#d4a84f]">+66 83 012 1550</a></div>
            <div className="flex justify-between"><span className="text-[#5C5247]">Coordinates</span><span className="text-[#5C5247] text-xs">12.4157982, 99.9255788</span></div>
          </div>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            📍 Open in Google Maps →
          </a>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🏡 What this means for land buyers</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">Resort operators invest where guests want to stay. A perfect-rated resort nearby is a market signal — the area attracts visitors willing to pay for quality, which supports villa rental yields and resale values for residential development on adjacent land.</p>
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
