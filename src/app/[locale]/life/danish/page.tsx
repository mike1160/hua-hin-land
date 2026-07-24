import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import LangSwitcher from '@/components/LangSwitcher'


export default function DanishPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]" lang="da">
      <LangSwitcher />
      <div className="relative h-72 md:h-80 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img
            src="/photo2.jpg"
            alt="Hua Hin landskab"
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
            ← Tilbage til udbuddet
          </a>
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-2" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            For danskere
          </p>
          <h1
            className="text-white text-3xl md:text-5xl font-bold mt-1 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            Hua Hin — Danmarks foretrukne Thailand-destination
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Community</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Danskere er stærkt repræsenteret.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">
            Hua Hin har været skandinavernes yndlingsby i Thailand siden 1990&apos;erne. Danskere, svenskere og nordmænd udgør den største vestlige expat-gruppe — med aktive netværk og et socialt liv, der gør det nemt at lande.
          </p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Klima</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Slip for danske vintre.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">
            28–32°C året rundt. Sol i stedet for mørke måneder. Klimaet er en hovedårsag til, at danske pensionister bliver — ikke kun ferierer.
          </p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Golf</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            10+ baner — perfekt for danske golfspillere.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Championship-baner inden for 30 minutter, herunder Majestic Creek kun 5 minutter fra grunden. Hua Hin er Sydøstasiens golfhovedstad.
          </p>
          <a href="/nearby/golf" className="text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            Golf nær grunden →
          </a>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Pris</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            60–70% billigere end København.
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { value: '60–70%', label: 'billigere end livet i København' },
              { value: '28–32°C', label: 'året rundt' },
              { value: '10+', label: 'golfbaner inden for 30 min' },
              { value: '15 min', label: 'til Bangkok Hospital Hua Hin' },
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
            Langtidsophold for danskere
          </h2>
          <ul className="space-y-4 text-sm">
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">O-A pensionsvisum (50+)</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">
                1 år, kan fornyes. Indkomst- eller opsparingskrav gælder.
              </p>
              <a href="https://www.immigration.go.th" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] text-xs transition-colors">
                → Officiel thailandske immigrationswebsite
              </a>
            </li>
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">Thailand Privilege</p>
              <p className="text-[#5C5247] leading-relaxed">
                Flerårige medlemsprogrammer til langtidsophold.
              </p>
            </li>
            <li>
              <p className="text-[#1A2744] font-semibold mb-1">LTR-visum</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">
                Op til 10 år — siden 2022, med udvidede rettigheder.
              </p>
              <a href="https://ltr.boi.go.th" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] text-xs transition-colors">
                → Officiel LTR-portal (Board of Investment)
              </a>
            </li>
          </ul>
          <p className="text-[#5C5247] text-xs mt-5 pt-4 border-t border-[#E8E2D6] leading-relaxed">
            Konsulter altid en autoriseret thailandsk immigrationsadvokat.{' '}
            <a href="/life/retirees" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              Fuld visumguide (EN) →
            </a>
          </p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Sundhed</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Bangkok Hospital Hua Hin — engelsktalende læger.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            JCI-akkrediteret behandling 15 minutter fra grunden. Engelsktalende personale gør det trygt for danske pensionister.
          </p>
          <a href="https://www.bangkokhospital.com/en/huahin" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            Bangkok Hospital Hua Hin →
          </a>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Bolig</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Chanote — Thailands stærkeste ejendomsret.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">
            Chanote (NS.4J) er freehold: GPS-målte grænser, registreret hos Land Department. Delsalg fra 1 rai er muligt — pris på forespørgsel (anden pris pr. rai end hele grunden).
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="/info/chanote" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">Chanote forklaret →</a>
            <a href="https://data.hua-hin-land.com" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              Verificér thailandske ejendomsregistre →
            </a>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 text-center" style={{ border: '1px solid #E8E2D6', borderRadius: '16px' }}>
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">Næste kapitel</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4 leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>
            Byg dit hjem på Soi 112.
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6 max-w-xl mx-auto">
            4 Rai 2 Ngan fladt Chanote-land i Hua Hins mest eftertragtede korridor. Fra $63.000/rai. Delsalg fra 1 rai muligt.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <LineButton size="md" />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm font-medium">Se grunden →</a>
            <a href="https://data.hua-hin-land.com" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm font-medium">
              Verificér ejerskab →
            </a>
          </div>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-4">Officielle links</p>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: 'Thai Immigration Department', href: 'https://www.immigration.go.th', display: 'immigration.go.th' },
              { label: 'LTR-visum (Board of Investment)', href: 'https://ltr.boi.go.th', display: 'ltr.boi.go.th' },
              { label: 'Bangkok Hospital Hua Hin', href: 'https://www.bangkokhospital.com/en/huahin', display: 'bangkokhospital.com/en/huahin' },
              { label: 'Verificér thailandske registre', href: 'https://data.hua-hin-land.com', display: 'data.hua-hin-land.com' },
              { label: 'Fuld pensions-/visumguide', href: '/life/retirees', display: 'hua-hin-land.com/life/retirees' },
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
          <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">← Tilbage til udbuddet</a>
        </div>
      </div>
    </main>
  )
}
