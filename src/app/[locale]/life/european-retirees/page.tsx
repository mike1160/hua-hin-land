'use client'

import { useTranslations } from 'next-intl'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import { Link } from '@/i18n/navigation'
import { AGENT_PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/contact'

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-xs underline-offset-2 hover:underline"
    >
      {children}
    </a>
  )
}

export default function EuropeanRetireesPage() {
  const t = useTranslations('europeanRetirees')
  const tc = useTranslations('common')

  const introPoints = [t('intro1'), t('intro2'), t('intro3'), t('intro4'), t('intro5'), t('intro6')]

  const costStats = [
    { value: t('costComfortableValue'), label: t('costComfortableLabel') },
    { value: t('costModestValue'), label: t('costModestLabel') },
    { value: t('costCheaperValue'), label: t('costCheaperLabel') },
    { value: t('costInsuranceValue'), label: t('costInsuranceLabel') },
  ]

  const costCompare = [t('costCompare1'), t('costCompare2'), t('costCompare3')]

  const communityItems = [
    t('communityScandinavian'),
    t('communityDutch'),
    t('communityGerman'),
    t('communityBritish'),
    t('communityNationalities'),
    t('communitySocial'),
  ]

  const resources = [
    { label: t('resourceImmigration'), href: 'https://www.immigration.go.th', display: 'immigration.go.th' },
    { label: t('resourceLtr'), href: 'https://ltr.boi.go.th', display: 'ltr.boi.go.th' },
    { label: t('resourcePrivilege'), href: 'https://www.thai-privilege.com', display: 'thai-privilege.com' },
    { label: t('resourceSvb'), href: 'https://www.svb.nl', display: 'svb.nl' },
    { label: t('resourceDrv'), href: 'https://www.drv.de', display: 'drv.de' },
    { label: t('resourcePensionsmyndigheten'), href: 'https://www.pensionsmyndigheten.se', display: 'pensionsmyndigheten.se' },
    { label: t('resourceHospital'), href: 'https://www.bangkokhospital.com/en/huahin', display: 'bangkokhospital.com/en/huahin' },
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
      {/* HERO */}
      <div className="relative min-h-[70vh] md:min-h-[75vh] flex items-end pb-12 px-6">
        <div className="absolute inset-0">
          <img
            src="/photo2.jpg"
            alt={t('heroAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 42%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(26,39,68,0.9) 0%, rgba(26,39,68,0.4) 50%, rgba(26,39,68,0.25) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl w-full mx-auto">
          <Link href="/" className="text-[#C8973A] text-xs mb-5 inline-block hover:text-[#d4a84f] transition-colors">
            {tc('backToListing')}
          </Link>
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('heroLabel')}</p>
          <h1
            className="text-white text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('title')}
          </h1>
          <p className="text-white/85 text-sm md:text-base leading-relaxed mt-4 max-w-2xl">{t('heroSubtext')}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs md:text-sm">
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/75 hover:text-[#C8973A] transition-colors border border-white/20 hover:border-[#C8973A]/50 rounded-full px-3 py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        {/* INTRO */}
        <section className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('introLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('introTitle')}
          </h2>
          <ul className="space-y-3">
            {introPoints.map((item) => (
              <li key={item} className="flex gap-2 text-[#5C5247] text-sm leading-relaxed">
                <span className="text-[#C8973A] flex-shrink-0">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* VISA */}
        <section id="visa" className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8 scroll-mt-24">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('visaLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('visaTitle')}
          </h2>
          <ul className="space-y-5 text-sm">
            <li className="border-b border-[#E8E2D6] pb-5">
              <p className="text-[#1A2744] font-semibold mb-2">{t('visaOATitle')}</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">{t('visaOABody')}</p>
              <ExtLink href="https://www.immigration.go.th">{t('visaOALink')}</ExtLink>
            </li>
            <li className="border-b border-[#E8E2D6] pb-5">
              <p className="text-[#1A2744] font-semibold mb-2">{t('visaOXTitle')}</p>
              <p className="text-[#5C5247] leading-relaxed">{t('visaOXBody')}</p>
            </li>
            <li className="border-b border-[#E8E2D6] pb-5">
              <p className="text-[#1A2744] font-semibold mb-2">{t('visaPrivilegeTitle')}</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">{t('visaPrivilegeBody')}</p>
              <ExtLink href="https://www.thai-privilege.com">{t('visaPrivilegeLink')}</ExtLink>
            </li>
            <li className="pb-1">
              <p className="text-[#1A2744] font-semibold mb-2">{t('visaLTRTitle')}</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">{t('visaLTRBody')}</p>
              <ExtLink href="https://ltr.boi.go.th">{t('visaLTRLink')}</ExtLink>
            </li>
          </ul>
          <div
            className="mt-6 rounded-[12px] p-4 border text-xs leading-relaxed"
            style={{ background: '#FFFBF0', borderColor: '#E8D5A8' }}
          >
            <p className="text-[#5C5247]">{t('visaDisclaimer')}</p>
          </div>
        </section>

        {/* PENSION */}
        <section className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('pensionLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('pensionTitle')}
          </h2>
          <ul className="space-y-4 text-sm mb-5">
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">{t('pensionNlTitle')}</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">{t('pensionNlBody')}</p>
              <ExtLink href="https://www.svb.nl">{t('pensionNlLink')}</ExtLink>
            </li>
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">{t('pensionDeTitle')}</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">{t('pensionDeBody')}</p>
              <ExtLink href="https://www.drv.de">{t('pensionDeLink')}</ExtLink>
            </li>
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">{t('pensionSvTitle')}</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">{t('pensionSvBody')}</p>
              <ExtLink href="https://www.pensionsmyndigheten.se">{t('pensionSvLink')}</ExtLink>
            </li>
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">{t('pensionDaTitle')}</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">{t('pensionDaBody')}</p>
              <ExtLink href="https://www.borger.dk">{t('pensionDaLink')}</ExtLink>
            </li>
            <li>
              <p className="text-[#1A2744] font-semibold mb-1">{t('pensionUkTitle')}</p>
              <p className="text-[#5C5247] leading-relaxed">{t('pensionUkBody')}</p>
            </li>
          </ul>
          <p className="text-[#5C5247] text-xs leading-relaxed border-t border-[#E8E2D6] pt-4">{t('pensionTaxNote')}</p>
        </section>

        {/* COST */}
        <section id="cost" className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8 scroll-mt-24">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('costLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('costTitle')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {costStats.map((stat) => (
              <div key={stat.label} className="bg-[#FAF7F0] p-4" style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}>
                <p className="text-[#C8973A] text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </p>
                <p className="text-[#5C5247] text-xs mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-[#1A2744] text-sm font-semibold mb-3">{t('costCompareTitle')}</p>
          <ul className="space-y-2.5 mb-5">
            {costCompare.map((item) => (
              <li key={item} className="flex gap-2 text-[#5C5247] text-sm leading-relaxed">
                <span className="text-[#C8973A] flex-shrink-0">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://www.numbeo.com/cost-of-living/in/Hua-Hin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors"
          >
            {t('costNumbeoLink')}
          </a>
        </section>

        {/* HEALTHCARE */}
        <section id="healthcare" className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8 scroll-mt-24">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('healthLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('healthTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6">{t('healthBody')}</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-5">
            <a
              href="https://www.bangkokhospital.com/en/huahin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAF7F0] p-4 block hover:border-[#C8973A]/40 transition-colors"
              style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
            >
              <p className="text-[#1A2744] font-semibold text-sm">{t('hospitalBangkok')}</p>
              <p className="text-[#5C5247] text-xs mt-1">{t('hospitalBangkokNote')}</p>
              <p className="text-[#C8973A] text-xs mt-2">{t('hospitalOfficialSite')}</p>
            </a>
            <a
              href="https://sanpaulo.co.th"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAF7F0] p-4 block hover:border-[#C8973A]/40 transition-colors"
              style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
            >
              <p className="text-[#1A2744] font-semibold text-sm">{t('hospitalSanPaolo')}</p>
              <p className="text-[#5C5247] text-xs mt-1">{t('hospitalSanPaoloNote')}</p>
              <p className="text-[#C8973A] text-xs mt-2">{t('hospitalOfficialSite')}</p>
            </a>
          </div>
          <ul className="space-y-2 text-[#5C5247] text-sm leading-relaxed">
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('healthInsurance')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('healthEhic')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('healthDental')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('healthPharmacy')}</span></li>
          </ul>
        </section>

        {/* FLIGHTS */}
        <section id="flights" className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8 scroll-mt-24">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('flightsLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('flightsTitle')}
          </h2>
          <p className="text-[#1A2744] text-sm font-semibold mb-3">{t('flightsDirectTitle')}</p>
          <ul className="space-y-2 text-[#5C5247] text-sm leading-relaxed mb-6">
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightKlm')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightLufthansa')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightSwiss')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightFinnair')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightThai')}</span></li>
          </ul>
          <p className="text-[#1A2744] text-sm font-semibold mb-3">{t('flightsLocalTitle')}</p>
          <ul className="space-y-2 text-[#5C5247] text-sm leading-relaxed">
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightCar')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightTrain')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightBus')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightHhq')}</span></li>
          </ul>
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
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link href="/life/dutch" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">{t('communityLinkDutch')}</Link>
            <Link href="/life/german" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">{t('communityLinkGerman')}</Link>
            <Link href="/life/scandinavians" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">{t('communityLinkScandinavians')}</Link>
            <Link href="/life/british" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">{t('communityLinkBritish')}</Link>
          </div>
        </section>

        {/* NOMINEE WARNING */}
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

        {/* THIS PLOT / CTA */}
        <section
          id="plot"
          className="bg-white p-6 md:p-8 text-center scroll-mt-24"
          style={{ border: '1px solid #E8E2D6', borderRadius: '16px' }}
        >
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('ctaLabel')}</p>
          <h2
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4 leading-snug"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('ctaTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6 max-w-xl mx-auto">{t('ctaBody')}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3 rounded-[12px] text-sm font-semibold text-[#1A2744] transition-all hover:brightness-110"
              style={{ background: '#C8973A' }}
            >
              WhatsApp {AGENT_PHONE_DISPLAY}
            </a>
            <LineButton size="md" />
          </div>
          <div className="mt-5">
            <Link href="/info/size" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm font-medium">
              {t('ctaViewPlot')}
            </Link>
          </div>
        </section>

        {/* RESOURCES */}
        <section className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-4">{t('resourcesLabel')}</p>
          <ul className="space-y-2.5 text-sm">
            {resources.map((link) => (
              <li key={link.href} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span className="text-[#5C5247] text-xs sm:text-sm sm:min-w-[240px]">{link.label}</span>
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
        </section>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-12">
        <DisclaimerFooter />
        <div className="text-center pt-4">
          <Link href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">
            {tc('backFooter')}
          </Link>
        </div>
      </div>
    </main>
  )
}
