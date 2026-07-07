import DisclaimerFooter from '../../../components/DisclaimerFooter'

export default function TerrainPage() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo4.jpg" alt="terrain drone" className="w-full h-full object-cover" style={{objectPosition: 'center 40%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>The terrain — flat, buildable, ready.</h1>
          <p className="text-white/60 mt-2">What the land looks like and what it means for your build</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-green-950/30 to-teal-950/20 border border-green-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🚧 Current condition</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">The plot is largely flat with natural grass and low vegetation. The terrain is level across most of the surface — no significant slopes, no rocky outcrops, no swampy areas. This is genuinely good building land.</p>
          <p className="text-white/70 text-sm leading-relaxed">Like most plots in Hua Hin, some raising of the ground level (ophogen) is advisable before construction — primarily to bring the foundation above the seasonal high water table and to meet standard building codes. This is completely normal and expected for any new villa build in the area.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">📊 Raising the ground level — what to expect</h2>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="border-b border-white/5 pb-3"><strong className="text-white">Why it&apos;s needed</strong><br/>Raising the plot by 50–80 cm ensures drainage, prevents flooding risk, and meets standard Thai building requirements for residential construction.</li>
            <li className="border-b border-white/5 pb-3"><strong className="text-white">Phase approach</strong><br/>You don&apos;t need to raise the entire 7,200 m² at once. Most developers start with the area they&apos;re building on first, then raise the remainder as they develop further plots — significantly reducing upfront costs.</li>
            <li className="border-b border-white/5 pb-3"><strong className="text-white">Typical cost</strong><br/>Approx. ฿120–180 per m³ of fill material. For a standard villa footprint of 400 m² raised 60 cm, budget around ฿30,000–50,000. For the full plot, total raising costs would be in the region of ฿150,000–300,000.</li>
            <li><strong className="text-white">The opportunity</strong><br/>Because you control the full 4 Rai 2 Ngan, you can design the raising to create natural privacy levels between plots, integrate drainage intelligently, and add topographical interest to what would otherwise be a flat garden.</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-amber-950/30 to-orange-950/20 border border-amber-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">✅ Why flat land is actually an advantage</h2>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>• <strong className="text-white">Lower construction costs</strong> — no expensive retaining walls or hillside engineering</li>
            <li>• <strong className="text-white">Simpler foundations</strong> — standard pile foundation, no special requirements</li>
            <li>• <strong className="text-white">Flexible layout</strong> — build in any orientation, pools anywhere</li>
            <li>• <strong className="text-white">Full use of the land</strong> — no awkward slopes to work around</li>
            <li>• <strong className="text-white">Faster to build</strong> — site preparation is straightforward</li>
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
