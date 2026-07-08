import DisclaimerFooter from '../../../components/DisclaimerFooter'

const MAPS_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJaRQyo-VT_DAR-FWJ8j9toLE'

export default function GolfNearby() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt="Majestic Creek Country Club golf course Hua Hin" className="w-full h-full object-cover" style={{objectPosition: 'center 20%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Golf — minutes from the plot</h1>
          <p className="text-white/60 mt-2">Majestic Creek Country Club &amp; Hua Hin&apos;s golf corridor</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <figure>
          <img
            src="/photo2.jpg"
            alt="Majestic Creek Country Club golf course Hua Hin"
            className="rounded-xl w-full aspect-video object-cover border border-white/10"
          />
          <figcaption className="text-white/40 text-xs mt-2">Majestic Creek Country Club · 5 min from plot</figcaption>
        </figure>

        <div className="bg-gradient-to-br from-green-950/30 to-teal-950/20 border border-green-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏌️ Majestic Creek Country Club</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Prestigious country club with direct access via Route 2004 — one of the closest championship courses to the plot, making Soi 112 a genuine golf address rather than a compromise location.
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            27-hole course · wide fairways · caddy service · restaurant on site
          </p>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/60">Rating</span><span className="text-amber-400">⭐ 4.2 (406 reviews)</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/60">Hours</span><span className="text-white/80">Daily 6:30 – 18:00</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/60">Phone</span><a href="tel:+66819423619" className="text-blue-400 hover:text-blue-300">+66 81 942 3619</a></div>
            <div className="flex justify-between"><span className="text-white/60">Coordinates</span><span className="text-white/50 text-xs">12.5188125, 99.8131875</span></div>
          </div>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors">
            📍 Open in Google Maps →
          </a>
        </div>

        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">⛳ Three courses within 20 minutes</h2>
          <div className="space-y-4 text-white/70 text-sm">
            <div className="border-b border-white/5 pb-4">
              <p className="text-white font-semibold mb-1">Majestic Creek Country Club</p>
              <p className="text-white/60">≈ 5 min · Direct via Route 2004 · 27 holes</p>
            </div>
            <div className="border-b border-white/5 pb-4">
              <p className="text-white font-semibold mb-1">Banyan Golf Club</p>
              <p className="text-white/60">≈ 20 min · Consistently rated among Asia&apos;s top courses</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Pineapple Valley Golf Club</p>
              <p className="text-white/60">≈ 20 min · Dramatic mountain backdrop, exceptional conditioning</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-950/30 to-green-950/20 border border-emerald-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">📍 Soi 112 — Hua Hin&apos;s golf corridor</h2>
          <p className="text-white/70 text-sm leading-relaxed">Soi 112 is known locally as Hua Hin&apos;s golf corridor — a stretch where premium residential development and world-class golf coexist. For buyers who golf regularly, living here means tee times without the commute.</p>
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
