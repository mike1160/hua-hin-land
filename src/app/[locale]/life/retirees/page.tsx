'use client'

import { useTranslations } from 'next-intl'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import { Link } from '@/i18n/navigation'

const PHONE = '66801406745'

export default function RetireesPage() {
  const t = useTranslations('retirees')
  const tc = useTranslations('common')

  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(t('waMessage'))}`

  const costStats = [
    { value: t('costComfortableValue'), label: t('costComfortableLabel') },
    { value: t('costModestValue'), label: t('costModestLabel') },
    { value: t('costCheaperValue'), label: t('costCheaperLabel') },
    { value: t('costInsuranceValue'), label: t('costInsuranceLabel') },
  ]

  const lifestyleItems = [
    t('lifestyle1'),
    t('lifestyle2'),
    t('lifestyle3'),
    t('lifestyle4'),
    t('lifestyle5'),
    t('lifestyle6'),
  ]

  const resources = [
    { label: t('resourceImmigration'), href: 'https://www.immigration.go.th', display: 'immigration.go.th' },
    { label: t('resourceRevenue'), href: 'https://www.rd.go.th', display: 'rd.go.th' },
    { label: t('resourceEmbassy'), href: 'https://th.usembassy.gov', display: 'th.usembassy.gov' },
    { label: t('resourceBoi'), href: 'https://www.boi.go.th', display: 'boi.go.th' },
    { label: t('resourceHospital'), href: 'https://www.bangkokhospital.com/en/huahin', display: 'bangkokhospital.com/en/huahin' },
    { label: t('resourceLand'), href: 'https://www.dol.go.th', display: 'dol.go.th' },
    { label: t('resourceVerify'), href: 'https://data.hua-hin-land.com', display: 'data.hua-hin-land.com' },
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 md:h-80 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img
            src="/lifestyle1.jpg"
            alt={t('heroAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">
            {tc('backToListing')}
          </Link>
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-2" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            {t('heroLabel')}
          </p>
          <h1
            className="text-white text-3xl md:text-5xl font-bold mt-1 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            {t('title')}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('introLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('introTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">{t('introBody')}</p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('visaLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('visaTitle')}
          </h2>
          <ul className="space-y-4 text-sm">
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">{t('visaOATitle')}</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">{t('visaOABody')}</p>
              <a
                href="https://www.immigration.go.th"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8973A] hover:text-[#d4a84f] text-xs transition-colors"
              >
                {t('visaOALink')}
              </a>
            </li>
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">{t('visaOXTitle')}</p>
              <p className="text-[#5C5247] leading-relaxed">{t('visaOXBody')}</p>
            </li>
            <li className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">{t('visaLTRTitle')}</p>
              <p className="text-[#5C5247] leading-relaxed mb-2">{t('visaLTRBody')}</p>
              <a
                href="https://ltr.boi.go.th"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8973A] hover:text-[#d4a84f] text-xs transition-colors"
              >
                {t('visaLTRLink')}
              </a>
            </li>
          </ul>
          <p className="text-[#5C5247] text-xs mt-5 pt-4 border-t border-[#E8E2D6] leading-relaxed">
            {t('visaDisclaimer')}
          </p>
          <p className="text-[#5C5247] text-xs mt-3 leading-relaxed">
            {t('visaEmbassyPrefix')}{' '}
            <a
              href="https://th.usembassy.gov/u-s-citizen-services/local-resources-of-u-s-citizens/retirement/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8973A] hover:text-[#d4a84f] transition-colors"
            >
              {t('visaEmbassyLink')}
            </a>
          </p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('costLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('costTitle')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {costStats.map((stat) => (
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
            {t('costNumbeoLink')}
          </a>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('healthLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('healthTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6">{t('healthBody')}</p>
          <div className="grid sm:grid-cols-3 gap-3">
            <a
              href="https://www.bangkokhospital.com/en/huahin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAF7F0] p-4 block hover:border-[#C8973A]/40 transition-colors"
              style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
            >
              <p className="text-[#1A2744] font-semibold text-sm leading-snug">{t('hospitalBangkok')}</p>
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
              <p className="text-[#1A2744] font-semibold text-sm leading-snug">{t('hospitalSanPaolo')}</p>
              <p className="text-[#5C5247] text-xs mt-1">{t('hospitalSanPaoloNote')}</p>
              <p className="text-[#C8973A] text-xs mt-2">{t('hospitalOfficialSite')}</p>
            </a>
            <div
              className="bg-[#FAF7F0] p-4"
              style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
            >
              <p className="text-[#1A2744] font-semibold text-sm leading-snug">{t('dentalTitle')}</p>
              <p className="text-[#5C5247] text-xs mt-1">{t('dentalNote')}</p>
            </div>
          </div>
          <p className="text-[#5C5247] text-xs mt-5 leading-relaxed">
            {t('jciPrefix')}{' '}
            <a
              href="https://www.jointcommissioninternational.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8973A] hover:text-[#d4a84f] transition-colors"
            >
              {t('jciLink')}
            </a>
          </p>
          <Link href="/nearby/hospital" className="inline-block mt-3 text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            {t('hospitalCta')}
          </Link>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('lifestyleLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('lifestyleTitle')}
          </h2>
          <ul className="space-y-3 text-[#5C5247] text-sm leading-relaxed">
            {lifestyleItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#C8973A] flex-shrink-0">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="bg-white p-6 md:p-8 text-center"
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
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[48px] font-semibold px-8 py-3 text-white text-sm transition-all hover:brightness-110"
            style={{ background: '#C8973A', borderRadius: '12px' }}
          >
            {t('ctaWhatsapp')}
          </a>
          <div className="mt-5">
            <Link href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm font-medium">
              {t('ctaViewPlot')}
            </Link>
          </div>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
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
        </div>
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
