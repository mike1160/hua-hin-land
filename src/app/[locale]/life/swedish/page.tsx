import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import LangSwitcher from '@/components/LangSwitcher'


export default function SwedishPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]" lang="sv">
      <LangSwitcher />
      <div className="relative h-72 md:h-80 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img
            src="/lifestyle1.jpg"
            alt="Hua Hin för skandinaviska expats"
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
            ← Tillbaka till erbjudandet
          </a>
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-2" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            För svenskar
          </p>
          <h1
            className="text-white text-3xl md:text-5xl font-bold mt-1 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            Hua Hin — Skandinavernas favoritadress i Thailand
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Communityn</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Störst skandinavisk expat-grupp i Hua Hin.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">
            Svenskar har bott i Hua Hin sedan 1990-talet. Tillsammans med norrmän och danskar utgör skandinaverna den största västerländska expat-gruppen i staden — med aktiva communitygrupper på Facebook och ett socialt liv som känns hemma.
          </p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Klimat</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Fly från svenska vintrar.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">
            28–32°C året runt. Sol i stället för mörka månader. Klimatet är en av de starkaste anledningarna till att svenska pensionärer stannar — inte bara semestrar.
          </p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Golf</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            10+ banor — populärt bland svenska pensionärer.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Championshipbanor inom 30 minuter, inklusive Majestic Creek bara 5 minuter från tomten. Hua Hin är Sydostasiens golfhuvudstad.
          </p>
          <a href="/nearby/golf" className="text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            Golf nära tomten →
          </a>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Kostnad</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            60–70% billigare än Stockholm.
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { value: '60–70%', label: 'billigare än livet i Stockholm' },
              { value: '28–32°C', label: 'året runt' },
              { value: '10+', label: 'golfbanor inom 30 min' },
              { value: '15 min', label: 'till Bangkok Hospital Hua Hin' },
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
            Långsiktigt boende för svenskar
          </h2>
          <ul className="space-y-4 text-sm">
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">O-A pensionsvisum (50+)</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">
                1 år, förnybart. Inkomst- eller sparkrav gäller.
              </p>
              <a href="https://www.immigration.go.th" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] text-xs transition-colors">
                → Officiell thailändsk immigrationswebbplats
              </a>
            </li>
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">Thailand Privilege</p>
              <p className="text-[#5C5247] leading-relaxed">
                Fleråriga medlemsprogram för långsiktigt boende.
              </p>
            </li>
            <li>
              <p className="text-[#1A2744] font-semibold mb-1">LTR-visum</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">
                Upp till 10 år — sedan 2022, med utökade rättigheter.
              </p>
              <a href="https://ltr.boi.go.th" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] text-xs transition-colors">
                → Officiell LTR-portal (Board of Investment)
              </a>
            </li>
          </ul>
          <p className="text-[#5C5247] text-xs mt-5 pt-4 border-t border-[#E8E2D6] leading-relaxed">
            Rådfråga alltid en behörig thailändsk immigrationsadvokat.{' '}
            <a href="/life/european-retirees" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              Fullständig visumguide (EN) →
            </a>
          </p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Sjukvård</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Bangkok Hospital Hua Hin — engelsktalande läkare.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            JCI-ackrediterad vård 15 minuter från tomten. Engelsktalande personal gör det enkelt för svenska pensionärer.
          </p>
          <a href="https://www.bangkokhospital.com/en/huahin" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            Bangkok Hospital Hua Hin →
          </a>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Boende</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Chanote — starkaste äganderätten i Thailand.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Chanote (NS.4J) är freehold: GPS-mätta gränser, registrerade hos Land Department. Delförsäljning från 1 rai är möjlig — pris på begäran (annat pris per rai än hel tomt).
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="/info/chanote" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">Chanote förklarat →</a>
            <a href="https://data.hua-hin-land.com" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              Verifiera thailändska fastighetsregister →
            </a>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 text-center" style={{ border: '1px solid #E8E2D6', borderRadius: '16px' }}>
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Nästa kapitel</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4 leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>
            Bygg ditt hem på Soi 112.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6 max-w-xl mx-auto">
            4 Rai 2 Ngan plan Chanote-mark i Hua Hins mest eftertraktade korridor. Från $63 000/rai. Delförsäljning från 1 rai möjlig.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <LineButton size="md" />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm font-medium">Visa tomten →</a>
            <a href="https://data.hua-hin-land.com" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm font-medium">
              Verifiera ägande →
            </a>
          </div>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-4">Officiella länkar</p>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: 'Thai Immigration Department', href: 'https://www.immigration.go.th', display: 'immigration.go.th' },
              { label: 'LTR-visum (Board of Investment)', href: 'https://ltr.boi.go.th', display: 'ltr.boi.go.th' },
              { label: 'Bangkok Hospital Hua Hin', href: 'https://www.bangkokhospital.com/en/huahin', display: 'bangkokhospital.com/en/huahin' },
              { label: 'Verifiera thailändska register', href: 'https://data.hua-hin-land.com', display: 'data.hua-hin-land.com' },
              { label: 'Fullständig pensions-/visumguide', href: '/life/european-retirees', display: 'hua-hin-land.com/life/european-retirees' },
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
          <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">← Tillbaka till erbjudandet</a>
        </div>
      </div>
    </main>
  )
}
