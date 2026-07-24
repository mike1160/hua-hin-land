import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import LangSwitcher from '@/components/LangSwitcher'


export default function DutchPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]" lang="nl">
      <LangSwitcher />
      <div className="relative h-72 md:h-80 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img
            src="/photo2.jpg"
            alt="Hua Hin landschap bij zonsondergang"
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
            ← Terug naar het aanbod
          </a>
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-2" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            Voor Nederlanders
          </p>
          <h1
            className="text-white text-3xl md:text-5xl font-bold mt-1 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            Hua Hin — de favoriete bestemming van Nederlandse expats
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">De community</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nederlanders voelen zich hier thuis.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Nederlanders zijn al jaren sterk vertegenwoordigd in Hua Hin — als vakantiegangers én als permanente expats. De stad is rustig, koninklijk en internationaal, zonder de chaos van Phuket of Pattaya.
          </p>
          <p className="text-[#5C5247] text-sm leading-relaxed">
            Directe vluchten naar Bangkok met KLM vanuit Amsterdam maken het bereikbaar: zaken doen of familie bezoeken zonder eindeloze transfers.
          </p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Klimaat</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ontsnap aan de Nederlandse winters.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">
            Het hele jaar 28–32°C, veel zon en een kort regenseizoen. Geen grijze maanden — wel golf, strand en een actieve expatgemeenschap.
          </p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Kosten</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            50–60% goedkoper dan Nederland.
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { value: '50–60%', label: 'goedkoper dan leven in Nederland' },
              { value: 'KLM', label: 'directe vluchten AMS → BKK' },
              { value: '15 min', label: 'naar Bangkok Hospital Hua Hin' },
              { value: '1 rai+', label: 'gedeeltelijke verkoop mogelijk' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#FAF7F0] p-4" style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}>
                <p className="text-[#C8973A] text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{stat.value}</p>
                <p className="text-[#5C5247] text-xs mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Visum</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Langdurig verblijf voor Nederlanders
          </h2>
          <ul className="space-y-4 text-sm">
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">Non-Immigrant O-A pensioenvisum</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">
                1 jaar, verlengbaar. Vanaf 50 jaar. Inkomens- of spaarvereisten van toepassing.
              </p>
              <a href="https://www.immigration.go.th" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] text-xs transition-colors">
                → Officiële website Thai Immigration
              </a>
            </li>
            <li>
              <p className="text-[#1A2744] font-semibold mb-1">Thailand Privilege</p>
              <p className="text-[#5C5247] leading-relaxed">
                Meerjarige verblijfsprogramma&apos;s — populair bij Nederlandse gepensioneerden die langdurig in Thailand willen wonen.
              </p>
            </li>
          </ul>
          <p className="text-[#5C5247] text-xs mt-5 pt-4 border-t border-[#E8E2D6] leading-relaxed">
            Raadpleeg altijd een erkend Thais immigratieadvocaat.{' '}
            <a href="/life/retirees" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              Uitgebreide visumgids (EN) →
            </a>
          </p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Gezondheidszorg</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ziekenhuiszorg op internationaal niveau.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Bangkok Hospital Hua Hin is JCI-geaccrediteerd met Engelstalig personeel — 15 minuten van het perceel.
          </p>
          <a href="https://www.bangkokhospital.com/en/huahin" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            Bangkok Hospital Hua Hin →
          </a>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Eigendom</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Chanote — de sterkste eigendomstitel in Thailand.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Een Chanote (NS.4J) is freehold: GPS-gemeten grenzen, geregistreerd bij het Land Department. Verkoopbaar, vererfbaar en de sterkste vorm van grondeigendom in Thailand. Gedeeltelijke verkoop is mogelijk vanaf 1 rai.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="/info/chanote" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">Chanote uitgelegd →</a>
            <a href="https://data.hua-hin-land.com" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              Verifieer Thaise eigendomsregisters →
            </a>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 text-center" style={{ border: '1px solid #E8E2D6', borderRadius: '16px' }}>
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Uw volgende hoofdstuk</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4 leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>
            Bouw uw woning op Soi 112.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6 max-w-xl mx-auto">
            4 Rai 2 Ngan vlakke Chanote-grond in Hua Hin&apos;s meest gewilde corridor. Vanaf $63.000/rai. Gedeeltelijke verkoop vanaf 1 rai.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <LineButton size="md" />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm font-medium">Bekijk het perceel →</a>
            <a href="https://data.hua-hin-land.com" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm font-medium">
              Verifieer eigendom →
            </a>
          </div>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-4">Officiële bronnen</p>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: 'Thai Immigration Department', href: 'https://www.immigration.go.th', display: 'immigration.go.th' },
              { label: 'LTR-visum (Board of Investment)', href: 'https://ltr.boi.go.th', display: 'ltr.boi.go.th' },
              { label: 'Bangkok Hospital Hua Hin', href: 'https://www.bangkokhospital.com/en/huahin', display: 'bangkokhospital.com/en/huahin' },
              { label: 'Verifieer Thaise eigendomsregisters', href: 'https://data.hua-hin-land.com', display: 'data.hua-hin-land.com' },
              { label: 'Uitgebreide pensioen-/visumgids', href: '/life/retirees', display: 'hua-hin-land.com/life/retirees' },
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
          <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">← Terug naar het aanbod</a>
        </div>
      </div>
    </main>
  )
}
