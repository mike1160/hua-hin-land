import DisclaimerFooter from '@/components/DisclaimerFooter'

const PHONE = '66801406745'
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent('Hi — I am interested in the Soi 112 Hua Hin land listing for retirement.')}`

export default function RetireesPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 md:h-80 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img
            src="/lifestyle1.jpg"
            alt="Relaxed Hua Hin lifestyle"
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
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-2" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            For American retirees
          </p>
          <h1
            className="text-white text-3xl md:text-5xl font-bold mt-1 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            Retiring in Hua Hin — The American&apos;s Guide
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        {/* 1. Intro */}
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">For American retirees</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            The retirement you actually imagined.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">
            Over 50,000 Americans live in Thailand. A growing number chose Hua Hin — quiet, royal, 2.5 hours from Bangkok, with JCI-accredited hospitals and golf year-round. Cost of living 50–60% below the US.
          </p>
        </div>

        {/* 2. Visa */}
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Visa</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            How Americans retire here legally
          </h2>
          <ul className="space-y-4 text-sm">
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">Non-Immigrant O-A Retirement Visa</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">
                1 year, renewable. Must be 50+. Requires proof of income ($2,000/month) or savings ($25,000 in Thai bank).
              </p>
              <a
                href="https://www.immigration.go.th"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8973A] hover:text-[#d4a84f] text-xs transition-colors"
              >
                → Official Thai Immigration website
              </a>
            </li>
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">Non-Immigrant O-X Long-Stay Visa</p>
              <p className="text-[#5C5247] leading-relaxed">
                Up to 10 years. Higher financial requirements.
              </p>
            </li>
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">LTR Visa (Long-Term Resident)</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">
                New since 2022, up to 10 years, expanded property rights.
              </p>
              <a
                href="https://ltr.boi.go.th"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8973A] hover:text-[#d4a84f] text-xs transition-colors"
              >
                → Official LTR Visa portal (Board of Investment)
              </a>
            </li>
          </ul>
          <p className="text-[#5C5247] text-xs mt-5 pt-4 border-t border-[#E8E2D6] leading-relaxed">
            Always consult a licensed Thai immigration lawyer. Visa rules change — verify current requirements independently.
          </p>
          <p className="text-[#5C5247] text-xs mt-3 leading-relaxed">
            US Embassy Bangkok also maintains a helpful guide for Americans:{' '}
            <a
              href="https://th.usembassy.gov/u-s-citizen-services/local-resources-of-u-s-citizens/retirement/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8973A] hover:text-[#d4a84f] transition-colors"
            >
              Retirement resources →
            </a>
          </p>
        </div>

        {/* 3. Cost of living */}
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Cost of living</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Live well on less.
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { value: '$1,500–2,500', label: '/month comfortable lifestyle' },
              { value: '$800–1,200', label: '/month modest lifestyle' },
              { value: '50–60%', label: 'cheaper than equivalent US coastal town' },
              { value: '$50–150', label: '/month insurance for a 60-year-old' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#FAF7F0] p-4"
                style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
              >
                <p className="text-[#C8973A] text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </p>
                <p className="text-[#5C5247] text-xs mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
          <a
            href="https://www.numbeo.com/cost-of-living/in/Hua-Hin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors"
          >
            → Current cost of living data (Numbeo)
          </a>
        </div>

        {/* 4. Healthcare */}
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Healthcare</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Hospital-grade care, 15 minutes away.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6">
            Bangkok Hospital Hua Hin is JCI-accredited with English-speaking doctors. San Paolo Hospital nearby. Many American retirees cite healthcare as the #1 reason they chose Hua Hin over other Thai cities.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            <a
              href="https://www.bangkokhospital.com/en/huahin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAF7F0] p-4 block hover:border-[#C8973A]/40 transition-colors"
              style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
            >
              <p className="text-[#1A2744] font-semibold text-sm leading-snug group-hover:text-[#C8973A]">Bangkok Hospital Hua Hin</p>
              <p className="text-[#5C5247] text-xs mt-1">JCI-accredited · 15 min</p>
              <p className="text-[#C8973A] text-xs mt-2">Official site →</p>
            </a>
            <a
              href="https://sanpaulo.co.th"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAF7F0] p-4 block hover:border-[#C8973A]/40 transition-colors"
              style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
            >
              <p className="text-[#1A2744] font-semibold text-sm leading-snug">San Paolo Hospital</p>
              <p className="text-[#5C5247] text-xs mt-1">Nearby · English-speaking staff</p>
              <p className="text-[#C8973A] text-xs mt-2">Official site →</p>
            </a>
            <div
              className="bg-[#FAF7F0] p-4"
              style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
            >
              <p className="text-[#1A2744] font-semibold text-sm leading-snug">Dental care</p>
              <p className="text-[#5C5247] text-xs mt-1">From $30 / visit</p>
            </div>
          </div>
          <p className="text-[#5C5247] text-xs mt-5 leading-relaxed">
            JCI Accreditation verified at:{' '}
            <a
              href="https://www.jointcommissioninternational.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8973A] hover:text-[#d4a84f] transition-colors"
            >
              jointcommissioninternational.org →
            </a>
          </p>
          <a href="/nearby/hospital" className="inline-block mt-3 text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            More about hospitals near the plot →
          </a>
        </div>

        {/* 5. Lifestyle */}
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Lifestyle</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Golf. Beach. Jazz. Repeat.
          </h2>
          <ul className="space-y-3 text-[#5C5247] text-sm leading-relaxed">
            <li className="flex gap-2">
              <span className="text-[#C8973A] flex-shrink-0">›</span>
              <span>10+ golf courses, green fees from $45</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#C8973A] flex-shrink-0">›</span>
              <span>5km beach, clean and calm</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#C8973A] flex-shrink-0">›</span>
              <span>Active expat community — 71 nationalities</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#C8973A] flex-shrink-0">›</span>
              <span>Live jazz and music nightly</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#C8973A] flex-shrink-0">›</span>
              <span>Fresh seafood restaurants</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#C8973A] flex-shrink-0">›</span>
              <span>4 minutes: 7-Eleven. 10 minutes: Bluport Mall. 15 minutes: Bangkok Hospital.</span>
            </li>
          </ul>
        </div>

        {/* 6. The plot CTA */}
        <div
          className="bg-white p-6 md:p-8 text-center"
          style={{ border: '1px solid #E8E2D6', borderRadius: '16px' }}
        >
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Your next chapter</p>
          <h2
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4 leading-snug"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Build your retirement home on Soi 112.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6 max-w-xl mx-auto">
            4 Rai 2 Ngan of flat Chanote land in Hua Hin&apos;s most prestigious corridor. Build your villa exactly as you want it. From $63,000/rai. Partial sale from 1 rai available.
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
            <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm font-medium">
              View the plot →
            </a>
          </div>
        </div>

        {/* Official resources */}
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-4">Official resources</p>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: 'Thai Immigration Department', href: 'https://www.immigration.go.th', display: 'immigration.go.th' },
              { label: 'Thai Revenue Department (taxes)', href: 'https://www.rd.go.th', display: 'rd.go.th' },
              { label: 'US Embassy Bangkok', href: 'https://th.usembassy.gov', display: 'th.usembassy.gov' },
              { label: 'Board of Investment (LTR visa)', href: 'https://www.boi.go.th', display: 'boi.go.th' },
              { label: 'Bangkok Hospital Hua Hin', href: 'https://www.bangkokhospital.com/en/huahin', display: 'bangkokhospital.com/en/huahin' },
              { label: 'Land Department (property)', href: 'https://www.dol.go.th', display: 'dol.go.th' },
              { label: 'Verify Thai property records', href: 'https://data.hua-hin-land.com', display: 'data.hua-hin-land.com' },
            ].map((link) => (
              <li key={link.href} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span className="text-[#5C5247] text-xs sm:text-sm sm:min-w-[220px]">{link.label}</span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A2744] hover:text-[#C8973A] transition-colors font-medium"
                >
                  {link.display}
                </a>
              </li>
            ))}
          </ul>
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
