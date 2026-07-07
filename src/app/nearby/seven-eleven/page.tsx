import DisclaimerFooter from '../../../components/DisclaimerFooter'

export default function SevenEleven() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo6.jpg" alt="road" className="w-full h-full object-cover" style={{objectPosition: 'center 50%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>7-Eleven — 4 minutes away.</h1>
          <p className="text-white/60 mt-2">Why this matters more than you think</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏪 7-Eleven in Thailand — not just a convenience store</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">In Thailand, 7-Eleven is infrastructure. With over 14,000 locations across the country, it is where Thais and expats alike pay bills, top up phone credit, pick up freshly made food, buy medicine, withdraw cash, send parcels, and much more.</p>
          <p className="text-white/70 text-sm leading-relaxed">Having one 4 minutes from your door means never running out of anything. Hot coffee at 6am. Cold beer at 10pm. Stamps, gas, snacks, ice, painkillers — all covered. It sounds trivial until you live somewhere without one.</p>
        </div>
        <div className="bg-gradient-to-br from-green-950/30 to-teal-950/20 border border-green-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🧾 What you can do at 7-Eleven Thailand</h2>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/70">
            {['Pay electricity & water bills', 'Top up mobile credit', 'ATM cash withdrawal', 'Fresh coffee & hot food', 'Buy medicine & vitamins', 'Send & receive parcels', 'Pay internet & TV bills', 'Buy train/bus tickets', 'Print documents', 'Buy travel SIM cards', 'Fresh sandwiches & meals', 'Pay insurance premiums'].map((item, i) => (
              <div key={i} className="flex items-center gap-2"><span className="text-green-400 text-xs">✓</span>{item}</div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-amber-950/30 to-orange-950/20 border border-amber-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">📍 What else is nearby</h2>
          <p className="text-white/70 text-sm leading-relaxed">The 7-Eleven on Soi 112 sits at a local junction that has become a small neighbourhood hub — with local food stalls, a pharmacy and petrol station within walking distance. This is the daily heartbeat of the area.</p>
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
