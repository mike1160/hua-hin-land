export default function NationalPark() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="nature" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.1) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>National Park — on your doorstep.</h1>
          <p className="text-white/60 mt-2">Wild Thailand, five minutes from your front gate</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-green-950/30 to-teal-950/20 border border-green-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🌿 Thap Tai National Park</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">The mountains you see from the plot are Thap Tai National Park. Protected forest, limestone peaks, waterfalls and caves — all within minutes of the plot. This is not a managed tourist attraction. It&apos;s wild forest that has been protected for decades.</p>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>• Hiking trails from easy to challenging</li>
            <li>• Bird watching — 200+ species recorded</li>
            <li>• Limestone caves and caverns</li>
            <li>• Seasonal waterfalls after rains</li>
            <li>• Wildlife: monkeys, hornbills, monitor lizards</li>
            <li>• No entrance fee for the Thap Tai section</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🐘 Wider national park network</h2>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="border-b border-white/5 pb-3"><strong className="text-white">Kaeng Krachan NP</strong> — 85 km · UNESCO World Heritage · largest in Thailand · exceptional birdwatching</li>
            <li className="border-b border-white/5 pb-3"><strong className="text-white">Khao Sam Roi Yot NP</strong> — 60 km · limestone karsts, mangroves, Phraya Nakhon Cave with royal pavilion</li>
            <li><strong className="text-white">Kui Buri NP</strong> — 85 km · wild elephant sightings with 95% daily probability — a genuinely astonishing experience</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-purple-950/30 to-indigo-950/20 border border-purple-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🌅 Why having nature next door matters</h2>
          <p className="text-white/70 text-sm leading-relaxed">Studies consistently show that proximity to green space improves wellbeing, reduces stress and extends life expectancy. You don&apos;t need to go to the park — the park comes to you. Birds from the forest visit gardens on Soi 112. The air is noticeably cleaner. The silence at night is real.</p>
          <p className="text-white/50 text-sm italic mt-3">And because it&apos;s protected national park, this will never change. No development. No noise. Just mountain and forest, forever.</p>
        </div>
        <div className="text-center pt-4"><a href="/" className="text-blue-400 hover:text-blue-300 text-sm">← Back to the land listing</a></div>
      </div>
    </main>
  )
}
