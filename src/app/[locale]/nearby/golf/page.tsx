import DisclaimerFooter from '@/components/DisclaimerFooter'

const MAPS_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJaRQyo-VT_DAR-FWJ8j9toLE'

export default function GolfNearby() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt="Majestic Creek Country Club golf course Hua Hin" className="w-full h-full object-cover" style={{objectPosition: 'center 20%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Golf — minutes from the plot</h1>
          <p className="text-white/85 mt-2">Majestic Creek Country Club &amp; Hua Hin&apos;s golf corridor</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <figure>
          <img
            src="/photo2.jpg"
            alt="Majestic Creek Country Club golf course Hua Hin"
            className="rounded-xl w-full aspect-video object-cover border border-[#E8E2D6]"
          />
          <figcaption className="text-[#5C5247] text-xs mt-2">Majestic Creek Country Club · 5 min from plot</figcaption>
        </figure>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🏌️ Majestic Creek Country Club</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Prestigious country club with direct access via Route 2004 — one of the closest championship courses to the plot, making Soi 112 a genuine golf address rather than a compromise location.
          </p>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            27-hole course · wide fairways · caddy service · restaurant on site
          </p>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Rating</span><span className="text-amber-400">⭐ 4.2 (406 reviews)</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Hours</span><span className="text-[#1A2744]/80">Daily 6:30 – 18:00</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Phone</span><a href="tel:+66819423619" className="text-[#C8973A] hover:text-[#d4a84f]">+66 81 942 3619</a></div>
            <div className="flex justify-between"><span className="text-[#5C5247]">Coordinates</span><span className="text-[#5C5247] text-xs">12.5188125, 99.8131875</span></div>
          </div>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            📍 Open in Google Maps →
          </a>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">⛳ Three courses within 20 minutes</h2>
          <div className="space-y-4 text-[#5C5247] text-sm">
            <div className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">Majestic Creek Country Club</p>
              <p className="text-[#5C5247]">≈ 5 min · Direct via Route 2004 · 27 holes</p>
            </div>
            <div className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">Banyan Golf Club</p>
              <p className="text-[#5C5247]">≈ 20 min · Consistently rated among Asia&apos;s top courses</p>
            </div>
            <div>
              <p className="text-[#1A2744] font-semibold mb-1">Pineapple Valley Golf Club</p>
              <p className="text-[#5C5247]">≈ 20 min · Dramatic mountain backdrop, exceptional conditioning</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">📍 Soi 112 — Hua Hin&apos;s golf corridor</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">Soi 112 is known locally as Hua Hin&apos;s golf corridor — a stretch where premium residential development and world-class golf coexist. For buyers who golf regularly, living here means tee times without the commute.</p>
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
