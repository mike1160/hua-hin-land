'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import { Link } from '@/i18n/navigation'
import { AGENT_PHONE_DISPLAY } from '@/lib/contact'

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

export default function EuropeanRetireesPage() {
  const t = useTranslations('europeanRetirees')
  const tc = useTranslations('common')

  const whyPoints = [t('why1'), t('why2'), t('why3'), t('why4'), t('why5'), t('why6')]

  const costStats = [
    { value: t('costComfortableValue'), label: t('costComfortableLabel') },
    { value: t('costModestValue'), label: t('costModestLabel') },
    { value: t('costCheaperValue'), label: t('costCheaperLabel') },
    { value: t('costInsuranceValue'), label: t('costInsuranceLabel') },
  ]

  const costCompare = [t('costCompare1'), t('costCompare2'), t('costCompare3')]

  const communityItems = [
    t('community1'),
    t('community2'),
    t('community3'),
    t('community4'),
    t('community5'),
    t('community6'),
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
    { href: '#pension', label: t('jumpPension') },
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
            src="/photo2.jpg"
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
            🇪🇺 {t('heroLabel')}
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

      {/* WHY EUROPEANS */}
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
            <ul className="space-y-3">
              {whyPoints.map((item) => (
                <li key={item} className="flex gap-2 text-[#5C5247] text-sm leading-relaxed">
                  <span className="text-[#C8973A] flex-shrink-0">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
              <ExtLink href="https://www.immigration.go.th">{t('visaOALink')}</ExtLink>
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
        </section>

        {/* PENSION */}
        <section id="pension" className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8 scroll-mt-24">
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
              <p className="text-[#B91C1C] leading-relaxed">{t('pensionUkBody')}</p>
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
          <ul className="space-y-2.5">
            {costCompare.map((item) => (
              <li key={item} className="flex gap-2 text-[#5C5247] text-sm leading-relaxed">
                <span className="text-[#C8973A] flex-shrink-0">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* HEALTHCARE */}
        <section id="healthcare" className="scroll-mt-24">
          <div className="bg-[#1A2744] rounded-[16px] p-6 md:p-8">
            <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('healthLabel')}</p>
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t('healthTitle')}
            </h2>
            <ul className="space-y-2.5 text-white/80 text-sm leading-relaxed mb-5">
              <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('health1')}</span></li>
              <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('health2')}</span></li>
              <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('health3')}</span></li>
              <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('health4')}</span></li>
              <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('health5')}</span></li>
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
          <ul className="space-y-2 text-[#5C5247] text-sm leading-relaxed mb-5">
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightKlm')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightLufthansa')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightFinnair')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightThai')}</span></li>
            <li className="flex gap-2"><span className="text-[#C8973A]">›</span><span>{t('flightLocal')}</span></li>
          </ul>
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
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('nomineeTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">{t('nomineeBody')}</p>
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
            <LineButton size="lg" />
            <a
              href={`tel:${AGENT_PHONE_DISPLAY.replace(/-/g, '')}`}
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-8 rounded-[12px] text-base font-semibold text-white transition-all hover:brightness-110 border border-white/30"
            >
              {AGENT_PHONE_DISPLAY}
            </a>
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
                  className="text-[#1A2744] hover:text-[#C8973A] transition-colors font-medium"
                >
                  {link.display}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <DisclaimerFooter />
        <div className="text-center pt-2 pb-4">
          <Link href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">
            {tc('backFooter')}
          </Link>
        </div>
      </div>
    </main>
  )
}
