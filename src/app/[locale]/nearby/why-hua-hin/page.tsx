import DisclaimerFooter from '@/components/DisclaimerFooter'

const PHONE = '66801406745'
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent('Hi — I am interested in the Soi 112 Hua Hin land listing.')}`

export default function WhyHuaHinPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 md:h-80 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img
            src="/photo2.jpg"
            alt="Hua Hin landscape at golden hour"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">
            ← Back to listing
          </a>
          <h1
            className="text-white text-4xl md:text-5xl font-bold mt-2"
            style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            Thailand&apos;s royal address.
          </h1>
          <p className="text-white/85 mt-3 text-base md:text-lg leading-relaxed max-w-2xl" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.45)' }}>
            For over a century, Thailand&apos;s kings, aristocrats, and discerning international buyers have chosen Hua Hin. There&apos;s a reason.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        {/* Section 1 — Royal heritage */}
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Since 1920s</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Built for royalty. Chosen by the elite.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">
            King Rama VII built the summer palace Klai Kangwon (&ldquo;Far from Worries&rdquo;) here in 1929. King Bhumibol Adulyadej (Rama IX) spent decades here. The royal presence shaped everything — security, infrastructure, atmosphere. This is not a party town. It never was.
          </p>
        </div>

        {/* Section 2 — Golf capital */}
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Golf</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Southeast Asia&apos;s golf capital.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6">
            10+ championship courses within 30 minutes, including Black Mountain Golf Club and Royal Hua Hin — Thailand&apos;s oldest golf course, established 1924 by King Rama VI. Green fees from 1,500–3,500 THB. Year-round play.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { name: 'Black Mountain', note: 'Championship course' },
              { name: 'Royal Hua Hin', note: 'Est. 1924 · oldest in Thailand' },
              { name: 'Majestic Creek', note: '5 min from the plot' },
            ].map((course) => (
              <div
                key={course.name}
                className="bg-[#FAF7F0] p-4"
                style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
              >
                <p className="text-[#1A2744] font-semibold text-sm">{course.name}</p>
                <p className="text-[#5C5247] text-xs mt-1">{course.note}</p>
              </div>
            ))}
          </div>
          <a href="/nearby/golf" className="inline-block mt-5 text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            Explore golf near the plot →
          </a>
        </div>

        {/* Section 3 — Location */}
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Location</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            200 km from Bangkok. A world away.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6">
            2.5 hours by car, direct train from Hua Lamphong. Hua Hin airport with regional connections. Close enough to Bangkok for business. Far enough to forget it.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { value: '2.5h', label: 'to Bangkok' },
              { value: '25 min', label: 'to airport' },
              { value: '12 min', label: 'to beach' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#FAF7F0] p-4 text-center"
                style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
              >
                <p className="text-[#C8973A] text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </p>
                <p className="text-[#5C5247] text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <a href="/nearby/connectivity" className="inline-block mt-5 text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            See routes &amp; connectivity →
          </a>
        </div>

        {/* Section 4 — Versus Phuket/Pattaya */}
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Why not Phuket</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Quiet by design.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">
            Phuket has parties. Pattaya has nightlife. Hua Hin has golf, seafood, jazz bars, and a beach that was good enough for three generations of Thai kings. The expat community here is families and retirees — people who chose quality of life over chaos.
          </p>
        </div>

        {/* Section 5 — CTA */}
        <div
          className="bg-white p-6 md:p-8 text-center"
          style={{ border: '1px solid #E8E2D6', borderRadius: '16px' }}
        >
          <p
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-6 leading-snug"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Your plot in Hua Hin&apos;s most sought-after corridor — Soi 112.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[48px] font-semibold px-8 py-3 text-white text-sm transition-all hover:brightness-110"
            style={{ background: '#C8973A', borderRadius: '12px' }}
          >
            📲 WhatsApp 080-140-6745
          </a>
          <div className="mt-5">
            <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">
              ← Back to the land listing
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-12">
        <DisclaimerFooter />
        <div className="text-center pt-4">
          <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">
            ← Back to the land listing
          </a>
        </div>
      </div>
    </main>
  )
}
