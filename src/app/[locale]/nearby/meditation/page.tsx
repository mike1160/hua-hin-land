import DisclaimerFooter from '@/components/DisclaimerFooter'

const MAPS_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJ6auqIcBT_DARjimMr9Qqiis'

export default function MeditationNearby() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo4.jpg" alt="Buddha-Metta Meditation Center Hua Hin Thap Tai" className="w-full h-full object-cover" style={{objectPosition: 'center 40%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">← Back to listing</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Wellness &amp; meditation — a rare neighbour</h1>
          <p className="text-white/85 mt-2">Buddha-Metta Meditation Practice Center</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <figure>
          <img
            src="/photo2.jpg"
            alt="Buddha-Metta Meditation Center Hua Hin Thap Tai"
            className="rounded-xl w-full aspect-video object-cover border border-[#E8E2D6]"
          />
          <figcaption className="text-[#5C5247] text-xs mt-2">Buddha-Metta Meditation Center · nearby plot</figcaption>
        </figure>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🧘 Buddha-Metta Meditation Practice Center</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Internationally known meditation and retreat center, minutes from the plot. A landmark that signals the character of this area: quiet, contemplative, and deliberately removed from the commercial bustle of central Hua Hin.
          </p>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Branch of Khao Sanam Chai Temple · monks follow strict Vinaya precepts · Dhamma teachings in Pali and Thai · open to respectful visitors
          </p>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Rating</span><span className="text-amber-400">⭐ 4.9 (14 reviews)</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">Phone</span><a href="tel:+66813043819" className="text-[#C8973A] hover:text-[#d4a84f]">+66 81 304 3819</a></div>
            <div className="flex justify-between"><span className="text-[#5C5247]">Coordinates</span><span className="text-[#5C5247] text-xs">12.4776507, 99.8521141</span></div>
          </div>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            📍 Open in Google Maps →
          </a>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">🌿 Why this matters for buyers</h2>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li>• Appeals to wellness-focused buyers and digital nomads seeking calm surroundings</li>
            <li>• Quiet, low-traffic surroundings enhance the meditation atmosphere of the entire area</li>
            <li>• Confirms Soi 112 as a lifestyle corridor, not just a development zone</li>
            <li>• Neighbouring a retreat center typically means protected quiet — no noisy commercial neighbours</li>
          </ul>
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
