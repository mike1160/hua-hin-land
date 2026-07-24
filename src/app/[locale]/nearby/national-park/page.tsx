import DisclaimerFooter from '@/components/DisclaimerFooter'

export default function NationalPark() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="nature" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f]">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>National Park — on your doorstep.</h1>
          <p className="text-white/85 mt-2">Wild Thailand, five minutes from your front gate</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🌿 Thap Tai National Park</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">The mountains you see from the plot are Thap Tai National Park. Protected forest, limestone peaks, waterfalls and caves — all within minutes of the plot. This is not a managed tourist attraction. It&apos;s wild forest that has been protected for decades.</p>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li>• Hiking trails from easy to challenging</li>
            <li>• Bird watching — 200+ species recorded</li>
            <li>• Limestone caves and caverns</li>
            <li>• Seasonal waterfalls after rains</li>
            <li>• Wildlife: monkeys, hornbills, monitor lizards</li>
            <li>• No entrance fee for the Thap Tai section</li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🐘 Wider national park network</h2>
          <ul className="space-y-3 text-[#5C5247] text-sm">
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">Kaeng Krachan NP</strong> — 85 km · UNESCO World Heritage · largest in Thailand · exceptional birdwatching</li>
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">Khao Sam Roi Yot NP</strong> — 60 km · limestone karsts, mangroves, Phraya Nakhon Cave with royal pavilion</li>
            <li><strong className="text-[#1A2744]">Kui Buri NP</strong> — 85 km · wild elephant sightings with 95% daily probability — a genuinely astonishing experience</li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🌅 Why having nature next door matters</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">Studies consistently show that proximity to green space improves wellbeing, reduces stress and extends life expectancy. You don&apos;t need to go to the park — the park comes to you. Birds from the forest visit gardens on Soi 112. The air is noticeably cleaner. The silence at night is real.</p>
          <p className="text-[#5C5247] text-sm italic mt-3">And because it&apos;s protected national park, this will never change. No development. No noise. Just mountain and forest, forever.</p>
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
