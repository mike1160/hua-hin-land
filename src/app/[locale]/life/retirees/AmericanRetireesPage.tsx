'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import { Link } from '@/i18n/navigation'
import { AGENT_PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/contact'

function ExtLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-[#C8973A] hover:text-[#d4a84f] transition-colors text-xs underline-offset-2 hover:underline ${className}`}
    >
      {children}
    </a>
  )
}

export default function AmericanRetireesPage() {
  const t = useTranslations('americanRetirees')
  const tc = useTranslations('common')

  const whyPoints = [t('why1'), t('why2'), t('why3'), t('why4'), t('why5'), t('why6')]

  const costStats = [
    { value: t('costComfortableValue'), label: t('costComfortableLabel') },
    { value: t('costModestValue'), label: t('costModestLabel') },
    { value: t('costCheaperValue'), label: t('costCheaperLabel') },
    { value: t('costInsuranceValue'), label: t('costInsuranceLabel') },
  ]

  const costRows = [
    { expense: t('costTableExpense'), us: t('costTableUs'), hh: t('costTableHh') },
    { expense: t('costRow1Expense'), us: t('costRow1Us'), hh: t('costRow1Hh') },
    { expense: t('costRow2Expense'), us: t('costRow2Us'), hh: t('costRow2Hh') },
    { expense: t('costRow3Expense'), us: t('costRow3Us'), hh: t('costRow3Hh') },
    { expense: t('costRow4Expense'), us: t('costRow4Us'), hh: t('costRow4Hh') },
    { expense: t('costRow5Expense'), us: t('costRow5Us'), hh: t('costRow5Hh') },
  ]

  const healthStats = [
    { value: t('healthStat1Value'), label: t('healthStat1Label') },
    { value: t('healthStat2Value'), label: t('healthStat2Label') },
    { value: t('healthStat3Value'), label: t('healthStat3Label') },
    { value: t('healthStat4Value'), label: t('healthStat4Label') },
  ]

  const communityItems = [
    t('community1'),
    t('community2'),
    t('community3'),
    t('community4'),
    t('community5'),
    t('community6'),
  ]

  const resources = [
    { label: t('resourceEmbassy'), href: 'https://th.usembassy.gov', display: 'th.usembassy.gov' },
    { label: t('resourceImmigration'), href: 'https://www.immigration.go.th', display: 'immigration.go.th' },
    { label: t('resourceLtr'), href: 'https://ltr.boi.go.th', display: 'ltr.boi.go.th' },
    { label: t('resourcePrivilege'), href: 'https://www.thai-privilege.com', display: 'thai-privilege.com' },
    { label: t('resourceSsa'), href: 'https://www.ssa.gov/international', display: 'ssa.gov/international' },
    { label: t('resourceIrs'), href: 'https://www.irs.gov/individuals/international-taxpayers', display: 'irs.gov/individuals/international-taxpayers' },
    { label: t('resourceHospital'), href: 'https://www.bangkokhospital.com/en/huahin', display: 'bangkokhospital.com/en/huahin' },
    { label: t('resourceNumbeo'), href: 'https://www.numbeo.com/cost-of-living/in/Hua-Hin', display: 'numbeo.com/cost-of-living/in/Hua-Hin' },
    { label: t('resourceVerify'), href: 'https://data.hua-hin-land.com', display: 'data.hua-hin-land.com' },
  ]

  const jumpLinks = [
    { href: '#visa', label: t('jumpVisa') },
    { href: '#cost', label: t('jumpCost') },
    { href: '#healthcare', label: t('jumpHealthcare') },
    { href: '#flights', label: t('jumpFlights') },
    { href: '#community', label: t('jumpCommunity') },
    { href: '#plot', label: t('jumpPlot') },
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      {/* HERO */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/lifestyle1.jpg"
            alt={t('heroAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(26,39,68,0.85) 0%, rgba(26,39,68,0.25) 55%, transparent 100%)',
            }}
          />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-14 md:pb-20 pt-28">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.22em] font-medium mb-3">
            🇺🇸 {t('heroLabel')}
          </p>
          <h1
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] max-w-3xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('title')}
          </h1>
          <p className="text-white/85 text-sm md:text-lg leading-relaxed mt-5 max-w-2xl">{t('heroSubtext')}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs md:text-sm">
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#C8973A] transition-colors border border-white/25 hover:border-[#C8973A]/50 rounded-full px-3.5 py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AMERICANS */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/neighbourhood.jpg"
            alt={t('whyAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(250,247,240,0.97) 0%, rgba(250,247,240,0.92) 55%, rgba(250,247,240,0.55) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('whyLabel')}</p>
            <h2
              className="text-[#1A2744] text-3xl md:text-4xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t('whyTitle')}
            </h2>
            <p className="text-[#5C5247] text-sm md:text-base leading-relaxed mb-6">{t('whyLead')}</p>
            <ul className="space-y-3">
              {whyPoints.map((item) => (
                <li key={item} className="flex gap-2 text-[#5C5247] text-sm leading-relaxed">
                  <span className="text-[#C8973A] flex-shrink-0">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/nearby/why-hua-hin" className="inline-block mt-8 text-[#C8973A] hover:text-[#d4a84f] text-sm font-medium transition-colors">
              {t('whyLink')}
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        {/* VISA */}
        <section id="visa" className="scroll-mt-24">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-2">{t('visaLabel')}</p>
          <h2 className="text-[#1A2744] text-2xl md:text-3xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('visaTitle')}
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
              <p className="text-[#1A2744] font-semibold mb-2">{t('visaOATitle')}</p>
              <p className="text-[#5C5247] text-sm leading-relaxed mb-3">{t('visaOABody')}</p>
              <div className="flex flex-wrap gap-4">
                <ExtLink href="https://www.immigration.go.th">{t('visaOALink')}</ExtLink>
                <ExtLink href="https://th.usembassy.gov">{t('visaEmbassyLink')}</ExtLink>
              </div>
            </div>
            <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
              <p className="text-[#1A2744] font-semibold mb-2">{t('visaPrivilegeTitle')}</p>
              <p className="text-[#5C5247] text-sm leading-relaxed mb-3">{t('visaPrivilegeBody')}</p>
              <ExtLink href="https://www.thai-privilege.com">{t('visaPrivilegeLink')}</ExtLink>
            </div>
            <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
              <p className="text-[#1A2744] font-semibold mb-2">{t('visaLTRTitle')}</p>
              <p className="text-[#5C5247] text-sm leading-relaxed mb-3">{t('visaLTRBody')}</p>
              <ExtLink href="https://ltr.boi.go.th">{t('visaLTRLink')}</ExtLink>
            </div>
          </div>
          <div
            className="mt-5 rounded-[12px] p-4 border text-sm leading-relaxed"
            style={{ background: '#FFFBF0', borderColor: '#E8D5A8' }}
          >
            <p className="text-[#5C5247] mb-2">{t('visaWarning')}</p>
            <ExtLink href="https://th.usembassy.gov/u-s-citizen-services/local-resources-of-u-s-citizens/retirement/">
              {t('visaWarningLink')}
            </ExtLink>
          </div>
        </section>

        {/* MONEY & TAXES */}
        <section className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('moneyLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('moneyTitle')}
          </h2>
          <ul className="space-y-3 text-[#5C5247] text-sm leading-relaxed mb-5">
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('money1')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('money2')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('money3')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('money4')}</span></li>
            <li className="flex gap-2"><span className="text-[#15803D]">›</span><span>{t('money5')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('money6')}</span></li>
          </ul>
          <div className="flex flex-wrap gap-4 text-sm">
            <ExtLink href="https://www.myexpattaxes.com" className="text-sm">{t('moneyLink1')}</ExtLink>
            <ExtLink href="https://www.taxesforexpats.com" className="text-sm">{t('moneyLink2')}</ExtLink>
          </div>
        </section>

        {/* COST */}
        <section id="cost" className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8 scroll-mt-24">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('costLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('costTitle')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {costStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#FAF7F0] p-5 md:p-6"
                style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
              >
                <p className="text-[#C8973A] text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </p>
                <p className="text-[#5C5247] text-xs mt-2 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="overflow-x-auto -mx-1 px-1 mb-5">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAF7F0]">
                  <th className="text-left p-3 font-semibold text-[#1A2744] border border-[#E8E2D6]">{costRows[0].expense}</th>
                  <th className="text-left p-3 font-semibold text-[#1A2744] border border-[#E8E2D6]">{costRows[0].us}</th>
                  <th className="text-left p-3 font-semibold text-[#1A2744] border border-[#E8E2D6]">{costRows[0].hh}</th>
                </tr>
              </thead>
              <tbody>
                {costRows.slice(1).map((row) => (
                  <tr key={row.expense}>
                    <td className="p-3 border border-[#E8E2D6] text-[#1A2744] font-medium">{row.expense}</td>
                    <td className="p-3 border border-[#E8E2D6] text-[#5C5247]">{row.us}</td>
                    <td className="p-3 border border-[#E8E2D6] text-[#15803D] font-medium">{row.hh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ExtLink href="https://www.numbeo.com/cost-of-living/in/Hua-Hin" className="text-sm">
            {t('costNumbeoLink')}
          </ExtLink>
        </section>

        {/* HEALTHCARE */}
        <section id="healthcare" className="scroll-mt-24">
          <div className="bg-[#1A2744] rounded-[16px] p-6 md:p-8">
            <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('healthLabel')}</p>
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t('healthTitle')}
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mb-6">{t('healthBody')}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {healthStats.map((stat) => (
                <div key={stat.label} className="bg-white/10 border border-white/15 rounded-[12px] p-4 text-center">
                  <p className="text-[#C8973A] text-lg md:text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {stat.value}
                  </p>
                  <p className="text-white/70 text-xs mt-1.5 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
            <ul className="space-y-2 text-white/75 text-sm leading-relaxed mb-5">
              <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('health1')}</span></li>
              <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('health2')}</span></li>
              <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('health3')}</span></li>
              <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('health4')}</span></li>
            </ul>
            <ExtLink href="https://www.bangkokhospital.com/en/huahin" className="text-sm">
              {t('healthHospitalLink')}
            </ExtLink>
          </div>
        </section>

        {/* FLIGHTS */}
        <section id="flights" className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8 scroll-mt-24">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('flightsLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('flightsTitle')}
          </h2>
          <p className="text-[#1A2744] text-sm font-semibold mb-3">{t('flightsUsTitle')}</p>
          <ul className="space-y-2 text-[#5C5247] text-sm leading-relaxed mb-5">
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightLax')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightJfk')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightDfw')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightHubs')}</span></li>
          </ul>
          <p className="text-[#1A2744] text-sm font-semibold mb-3">{t('flightsLocalTitle')}</p>
          <ul className="space-y-2 text-[#5C5247] text-sm leading-relaxed mb-5">
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightCar')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightTrain')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightBus')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightHhq')}</span></li>
          </ul>
          <div
            className="rounded-[12px] p-4 border text-sm leading-relaxed"
            style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}
          >
            <p className="text-[#5C5247]">{t('flightsTip')}</p>
          </div>
          <Link href="/nearby/connectivity" className="inline-block mt-5 text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            {t('flightsConnectivityLink')}
          </Link>
        </section>

        {/* COMMUNITY */}
        <section id="community" className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8 scroll-mt-24">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('communityLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('communityTitle')}
          </h2>
          <ul className="space-y-3">
            {communityItems.map((item) => (
              <li key={item} className="flex gap-2 text-[#5C5247] text-sm leading-relaxed">
                <span className="text-[#C8973A] flex-shrink-0">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* NOMINEE */}
        <section
          className="rounded-[12px] p-6 md:p-8 border"
          style={{ background: '#FEF2F2', borderColor: '#FECACA' }}
        >
          <p className="text-[#B91C1C] text-xs uppercase tracking-widest font-medium mb-3">{t('nomineeLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('nomineeTitle')}
          </h2>
          <ul className="space-y-2.5 text-[#5C5247] text-sm leading-relaxed mb-5">
            <li className="flex gap-2"><span className="text-[#B91C1C]">›</span><span>{t('nominee1')}</span></li>
            <li className="flex gap-2"><span className="text-[#B91C1C]">›</span><span>{t('nominee2')}</span></li>
            <li className="flex gap-2"><span className="text-[#15803D]">›</span><span>{t('nominee3')}</span></li>
            <li className="flex gap-2"><span className="text-[#15803D]">›</span><span>{t('nominee4')}</span></li>
          </ul>
          <Link href="/info/nominee-crackdown" className="text-[#C8973A] hover:text-[#d4a84f] text-sm font-medium transition-colors">
            {t('nomineeLink')}
          </Link>
        </section>
      </div>

      {/* CTA — full bleed */}
      <section id="plot" className="relative min-h-[65vh] flex items-center scroll-mt-24">
        <div className="absolute inset-0">
          <img
            src="/photo2.jpg"
            alt={t('ctaAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 50%' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(26,39,68,0.9) 0%, rgba(26,39,68,0.55) 100%)' }}
          />
        </div>
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('ctaLabel')}</p>
          <h2
            className="text-white text-3xl md:text-4xl font-bold leading-tight mb-5"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('ctaTitle')}
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">{t('ctaBody')}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-8 rounded-[12px] text-base font-semibold text-[#1A2744] transition-all hover:brightness-110"
              style={{ background: '#C8973A' }}
            >
              {t('ctaWhatsApp')} {AGENT_PHONE_DISPLAY}
            </a>
            <LineButton size="lg" />
          </div>
          <div className="mt-7">
            <Link href="/info/size" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm font-medium">
              {t('ctaViewPlot')}
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <section className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-4">{t('resourcesLabel')}</p>
          <ul className="space-y-2.5 text-sm">
            {resources.map((link) => (
              <li key={link.href} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span className="text-[#5C5247] text-xs sm:text-sm sm:min-w-[220px]">{link.label}</span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A2744] hover:text-[#C8973A] transition-colors font-medium break-all"
                >
                  {link.display}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <DisclaimerFooter />
        <div className="text-center pt-2">
          <Link href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">
            {tc('backFooter')}
          </Link>
        </div>
      </div>
    </main>
  )
}
