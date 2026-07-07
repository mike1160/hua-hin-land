import DisclaimerFooter from '../../../components/DisclaimerFooter'

export default function GolfNearby() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt="land mountain" className="w-full h-full object-cover" style={{objectPosition: 'center 20%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Golf — 3 world-class courses, 20 minutes.</h1>
          <p className="text-white/60 mt-2">Why Hua Hin is Asia&apos;s premier golf destination</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-green-950/30 to-teal-950/20 border border-green-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">⛳ The three courses</h2>
          <div className="space-y-5">
            <div className="border-b border-white/5 pb-5">
              <p className="text-white font-semibold mb-1">MahaSamutr Country Club</p>
              <p className="text-white/60 text-sm mb-2">The closest to Soi 112 — a championship course with stunning mountain views, impeccable maintenance and a genuine country club atmosphere. Members-only feel, open to visitors.</p>
              <p className="text-blue-400 text-xs">≈ 10 min · +66 32 618 888 · Green fee approx. ฿1,800–2,500</p>
            </div>
            <div className="border-b border-white/5 pb-5">
              <p className="text-white font-semibold mb-1">Banyan Golf Club</p>
              <p className="text-white/60 text-sm mb-2">Consistently rated among Asia&apos;s top courses. 27 holes designed around the Banyan mountain backdrop. Has hosted Asian Tour and Challenge Tour events. The course condition is exceptional year-round.</p>
              <p className="text-blue-400 text-xs">≈ 20 min · +66 32 616 100 · Green fee approx. ฿2,200–3,500</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Black Mountain Golf Club</p>
              <p className="text-white/60 text-sm mb-2">Host of Asian Tour events for over a decade. 18 holes with dramatic elevation changes, water features and mountain scenery. One of the most photographed courses in Southeast Asia.</p>
              <p className="text-blue-400 text-xs">≈ 20 min · +66 32 618 666 · Green fee approx. ฿2,500–4,000</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏌️ The Hua Hin golf lifestyle</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">Hua Hin has over a dozen golf courses within 45 minutes. The climate is perfect for golf — warm and dry from November to April, playable year-round. A round including caddy, cart and green fee typically costs ฿1,500–4,000 — a fraction of European equivalents.</p>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>• Caddies are standard at all courses — typically ฿300–400 tip</li>
            <li>• Morning tee times from 6:30am — play before the heat builds</li>
            <li>• Twilight rates available — play the back 9 from 3pm for less</li>
            <li>• Golf membership packages available at all three courses</li>
            <li>• Equipment rental available — arrive with nothing and play</li>
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
