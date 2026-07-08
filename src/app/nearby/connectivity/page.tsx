import DisclaimerFooter from '../../../components/DisclaimerFooter'
import FrostedFigure from '../../../components/FrostedFigure'

const PLOT_LAT = 12.4751699
const PLOT_LNG = 99.9073267
const MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${PLOT_LNG}!3d${PLOT_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI4JzMwLjYiTiA5OcKwNTQnMjYuNCJF!5e1!3m2!1sen!2sth!4v1234567890`

const routes = [
  {
    icon: '⬆️',
    title: 'North via Route 37',
    destination: 'Hua Hin town centre',
    time: '15 min',
    detail: 'Route 37 (Bypass) connects Soi 112 directly to Hua Hin centre, Bluport Mall, and the Bangkok highway.',
    color: 'from-blue-950/30 to-indigo-950/20 border-blue-900/30',
  },
  {
    icon: '➡️',
    title: 'East via Route 4030',
    destination: 'Pranburi coast',
    time: '20 min',
    detail: 'Route 4030 runs toward Pranburi Beach, mangrove forest walks, and the quieter second coastline.',
    color: 'from-teal-950/30 to-cyan-950/20 border-teal-900/30',
  },
  {
    icon: '📍',
    title: 'Direct via Route 2004 (Soi 112)',
    destination: 'Plot location',
    time: 'On site',
    detail: 'The plot sits directly on Route 2004 — concrete road access, no dirt tracks, year-round vehicle access.',
    color: 'from-green-950/30 to-emerald-950/20 border-green-900/30',
  },
]

export default function ConnectivityNearby() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo6.jpg" alt="Route 2004 Soi 112 road access to plot" className="w-full h-full object-cover" style={{objectPosition: 'center 50%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Getting around — better connected than you think</h1>
          <p className="text-white/60 mt-2">Routes, airports &amp; future rail links from Soi 112</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <FrostedFigure
          src="/stst1.jpg"
          alt="Bangkok city centre skyline"
          caption="Bangkok city centre — 3.5 hours from the plot"
          priority
          frosted={false}
        />

        <figure>
          <div className="rounded-xl overflow-hidden border border-blue-900/30" style={{height: '360px'}}>
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Plot location Soi 112 Hua Hin"
            />
          </div>
          <figcaption className="text-white/40 text-xs mt-2">Plot location · Soi 112, Thap Tai · {PLOT_LAT}, {PLOT_LNG}</figcaption>
        </figure>

        <div className="space-y-4">
          <h2 className="text-white text-xl font-semibold">🛣️ Three routes from the plot</h2>
          {routes.map((route) => (
            <div key={route.title} className={`bg-gradient-to-br ${route.color} border rounded-2xl p-5`}>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{route.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{route.title}</p>
                    <p className="text-white/60 text-xs">{route.destination}</p>
                  </div>
                </div>
                <span className="text-blue-400 font-bold text-sm flex-shrink-0">{route.time}</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed pl-10">{route.detail}</p>
            </div>
          ))}
        </div>

        <FrostedFigure
          src="/stst3.jpg"
          alt="Bangkok street life with flowers and markets"
          caption="Bangkok street life — flowers and markets"
          frosted={false}
        />

        <FrostedFigure
          src="/stst4.jpeg"
          alt="BTS Bangkok public transport"
          caption="BTS Bangkok — public transport connection"
          frosted={false}
        />

        <figure>
          <img
            src="/satellite.png"
            alt="Aerial satellite view Soi 112 plot and surrounding routes"
            className="rounded-xl w-full aspect-video object-cover border border-white/10"
          />
          <figcaption className="text-white/40 text-xs mt-2">Aerial view · Soi 112 corridor · plot centre</figcaption>
        </figure>

        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">✈️ Distances &amp; travel times</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Hua Hin town centre</span><span className="text-blue-400 font-medium">15 min</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Hua Hin Airport</span><span className="text-blue-400 font-medium">25 min</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Pranburi coast</span><span className="text-blue-400 font-medium">20 min</span></div>
            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/70">Bangkok (Suvarnabhumi)</span><span className="text-blue-400 font-medium">3.5 hrs by car</span></div>
            <div className="flex justify-between"><span className="text-white/70">Bangkok-Hua Hin high speed rail</span><span className="text-purple-400 font-medium">Upcoming — significantly faster</span></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-950/30 to-indigo-950/20 border border-purple-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🚄 Future connectivity</h2>
          <p className="text-white/70 text-sm leading-relaxed">Upcoming Bangkok-Hua Hin high speed rail will reduce Bangkok travel time significantly once operational. Soi 112&apos;s position on Route 2004 means the plot benefits from improved regional connectivity without being on a busy through-road.</p>
        </div>

        <FrostedFigure
          src="/stst2.jpg"
          alt="Bangkok dining and food scene"
          caption="Bangkok dining — world-class food scene"
          frosted={false}
        />

        <div className="flex gap-3">
          <a href={`https://www.google.com/maps?q=${PLOT_LAT},${PLOT_LNG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/40 text-blue-300 px-5 py-2.5 rounded-xl text-sm transition-all">
            📍 Open plot in Google Maps
          </a>
          <a href={`https://www.google.com/maps/dir/?api=1&destination=${PLOT_LAT},${PLOT_LNG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/40 text-purple-300 px-5 py-2.5 rounded-xl text-sm transition-all">
            🧭 Get directions
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
