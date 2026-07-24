import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'


export default function BritishPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 md:h-80 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img
            src="/lifestyle2.jpg"
            alt="Hua Hin nightlife and social scene"
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
            For British buyers
          </p>
          <h1
            className="text-white text-3xl md:text-5xl font-bold mt-1 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            Hua Hin — Thailand&apos;s most British beach town
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">The community</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            A long British expat history.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            The British have been part of Hua Hin for generations. English is spoken everywhere — menus, hospitals, estate agents, golf clubs. Settling in is straightforward.
          </p>
          <p className="text-[#5C5247] text-sm leading-relaxed">
            British expat clubs, Sunday roasts and proper English pubs are part of the fabric here — alongside Thai seafood and royal-resort calm. Brexit has made long-term Thailand stays more attractive for many UK citizens looking beyond Europe.
          </p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Golf</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Golf culture that feels familiar.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Royal Hua Hin Golf Course — established 1924 by King Rama VI — is Thailand&apos;s oldest course. Add Black Mountain, Majestic Creek and more than 10 championship layouts within 30 minutes, and Hua Hin matches British golf culture perfectly.
          </p>
          <a href="/nearby/golf" className="text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            Golf near the plot →
          </a>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Visa</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Staying long-term after Brexit
          </h2>
          <ul className="space-y-4 text-sm">
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">Non-Immigrant O-A Retirement Visa</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">
                1 year, renewable. Age 50+. Proof of income or savings required.
              </p>
              <a href="https://www.immigration.go.th" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] text-xs transition-colors">
                → Official Thai Immigration website
              </a>
            </li>
            <li>
              <p className="text-[#1A2744] font-semibold mb-1">Thailand Privilege Visa</p>
              <p className="text-[#5C5247] leading-relaxed">
                Multi-year membership programmes favoured by British retirees who want simpler long-stay logistics.
              </p>
            </li>
          </ul>
          <p className="text-[#5C5247] text-xs mt-5 pt-4 border-t border-[#E8E2D6] leading-relaxed">
            Always take independent legal advice.{' '}
            <a href="/life/european-retirees" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              Full visa guide →
            </a>
          </p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Cost of living</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            50–60% cheaper than the UK.
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { value: '50–60%', label: 'cheaper than equivalent UK living' },
              { value: 'NHS vs BH', label: 'Bangkok Hospital as private alternative' },
              { value: 'English', label: 'spoken in hospitals & agencies' },
              { value: '1924', label: 'Royal Hua Hin Golf Course founded' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#FAF7F0] p-4" style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}>
                <p className="text-[#C8973A] text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{stat.value}</p>
                <p className="text-[#5C5247] text-xs mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Property</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Chanote — freehold, explained for British buyers.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            A Chanote (NS.4J) is Thailand&apos;s strongest title deed — GPS-surveyed freehold ownership registered at the Land Department. Think of it as the closest equivalent to freehold title in the UK sense: clear boundaries, transferable, mortgageable.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="/info/chanote" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">Chanote explained →</a>
            <a href="https://data.hua-hin-land.com" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              Verify Thai property records →
            </a>
          </div>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Healthcare</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Private hospital care without the NHS wait.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Bangkok Hospital Hua Hin offers JCI-accredited care with English-speaking doctors — 15 minutes from the plot. Many British retirees compare it favourably to private care costs in the UK.
          </p>
          <a href="https://www.bangkokhospital.com/en/huahin" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            Bangkok Hospital Hua Hin →
          </a>
        </div>

        <div className="bg-white p-6 md:p-8 text-center" style={{ border: '1px solid #E8E2D6', borderRadius: '16px' }}>
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Your next chapter</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4 leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>
            Build your home on Soi 112.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6 max-w-xl mx-auto">
            4 Rai 2 Ngan of flat Chanote land in Hua Hin&apos;s most prestigious corridor. From $63,000/rai. Partial sale from 1 rai available.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <LineButton size="md" />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm font-medium">View the plot →</a>
            <a href="https://data.hua-hin-land.com" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm font-medium">
              Verify Thai property records →
            </a>
          </div>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-4">Official resources</p>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: 'Thai Immigration Department', href: 'https://www.immigration.go.th', display: 'immigration.go.th' },
              { label: 'LTR Visa (Board of Investment)', href: 'https://ltr.boi.go.th', display: 'ltr.boi.go.th' },
              { label: 'Bangkok Hospital Hua Hin', href: 'https://www.bangkokhospital.com/en/huahin', display: 'bangkokhospital.com/en/huahin' },
              { label: 'Verify Thai property records', href: 'https://data.hua-hin-land.com', display: 'data.hua-hin-land.com' },
              { label: 'Full retirement / visa guide', href: '/life/european-retirees', display: 'hua-hin-land.com/life/european-retirees' },
            ].map((link) => (
              <li key={link.href} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span className="text-[#5C5247] text-xs sm:text-sm sm:min-w-[220px]">{link.label}</span>
                <a
                  href={link.href}
                  {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
          <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">← Back to the land listing</a>
        </div>
      </div>
    </main>
  )
}
