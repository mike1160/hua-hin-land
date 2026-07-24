'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import { Link } from '@/i18n/navigation'
import { LINE_AGENT_URL } from '@/lib/contact'

export default function DanishPage() {
  const t = useTranslations('lifeDanish')
  const tc = useTranslations('common')

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: t('stat4Value'), label: t('stat4Label') },
  ]

  const resources = [
    { label: t('resourceLabel1'), href: 'https://www.immigration.go.th', display: 'immigration.go.th' },
    { label: t('resourceLabel2'), href: 'https://ltr.boi.go.th', display: 'ltr.boi.go.th' },
    { label: t('resourceLabel3'), href: 'https://www.bangkokhospital.com/en/huahin', display: 'bangkokhospital.com/en/huahin' },
    { label: t('resourceLabel4'), href: 'https://data.hua-hin-land.com', display: 'data.hua-hin-land.com' },
    { label: t('resourceLabel5'), href: '/life/european-retirees', display: 'hua-hin-land.com/life/european-retirees' },
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      {/* HERO */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-end">
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
                'linear-gradient(to top, rgba(26,39,68,0.92) 0%, rgba(26,39,68,0.35) 50%, transparent 100%)',
            }}
          />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-16 md:pb-24 pt-28">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.25em] font-medium mb-4">{t('heroLabel')}</p>
          <h1
            className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl"
            style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 24px rgba(0,0,0,0.45)' }}
          >
            {t('title')}
          </h1>
        </div>
      </section>

      {/* COMMUNITY — cream */}
      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('communityLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('communityTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed">{t('communityBody1')}</p>
        </div>
      </section>

      {/* STATS — cream */}
      <section className="bg-[#FAF7F0] pb-20 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('costLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-10 max-w-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('costTitle')}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8 text-center"
              >
                <p className="text-[#C8973A] text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </p>
                <p className="text-[#5C5247] text-xs mt-3 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE PHOTO */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/lifestyle1.jpg"
            alt={t('lifestyleTitle')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 45%' }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(26,39,68,0.88) 0%, rgba(26,39,68,0.25) 55%, transparent 100%)',
            }}
          />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-14 md:pb-20">
          <h2
            className="text-white text-3xl md:text-5xl font-bold leading-tight max-w-2xl"
            style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
          >
            {t('lifestyleTitle')}
          </h2>
        </div>
      </section>

      {/* CLIMATE — cream */}
      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('climateLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('climateTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed">{t('climateBody')}</p>
        </div>
      </section>

      {/* GOLF — cream */}
      <section className="bg-[#FAF7F0] pb-20 md:pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('golfLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('golfTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed mb-6">{t('golfBody')}</p>
          <Link href="/nearby/golf" className="text-[#C8973A] hover:text-[#d4a84f] text-sm font-medium transition-colors">
            {t('golfLink')}
          </Link>
        </div>
      </section>

      {/* PROPERTY / INVESTMENT — photo3 */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src="/photo3.jpg"
            alt={t('propertyTitle')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(26,39,68,0.94) 0%, rgba(26,39,68,0.82) 55%, rgba(26,39,68,0.55) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('propertyLabel')}</p>
          <h2
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('propertyTitle')}
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">{t('propertyBody')}</p>
          <div className="flex flex-wrap gap-5 text-sm">
            <Link href="/info/chanote" className="text-[#C8973A] hover:text-[#d4a84f] font-medium transition-colors">
              {t('propertyLink1')}
            </Link>
            <a
              href="https://data.hua-hin-land.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8973A] hover:text-[#d4a84f] font-medium transition-colors"
            >
              {t('propertyLink2')}
            </a>
          </div>
        </div>
      </section>

      {/* VISA — cream (3 items) */}
      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('visaLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-10"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('visaTitle')}
          </h2>
          <ul className="space-y-6">
            <li className="border-b border-[#E8E2D6] pb-6">
              <p className="text-[#1A2744] font-semibold mb-2">{t('visaItem1Title')}</p>
              <p className="text-[#5C5247] text-sm leading-relaxed mb-2">{t('visaItem1Body')}</p>
              <a href="https://www.immigration.go.th" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] text-xs transition-colors">
                {t('visaItem1Link')}
              </a>
            </li>
            <li className="border-b border-[#E8E2D6] pb-6">
              <p className="text-[#1A2744] font-semibold mb-2">{t('visaItem2Title')}</p>
              <p className="text-[#5C5247] text-sm leading-relaxed">{t('visaItem2Body')}</p>
            </li>
            <li>
              <p className="text-[#1A2744] font-semibold mb-2">{t('visaItem3Title')}</p>
              <p className="text-[#5C5247] text-sm leading-relaxed mb-2">{t('visaItem3Body')}</p>
              <a href="https://ltr.boi.go.th" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] text-xs transition-colors">
                {t('visaItem3Link')}
              </a>
            </li>
          </ul>
          <p className="text-[#5C5247] text-xs mt-8 pt-6 border-t border-[#E8E2D6] leading-relaxed">
            {t('visaNote')}{' '}
            <Link href="/life/european-retirees" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              {t('visaNoteLink')}
            </Link>
          </p>
        </div>
      </section>

      {/* HEALTH — photo1 */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src="/photo1.jpg"
            alt={t('healthTitle')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 35%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(250,247,240,0.97) 0%, rgba(250,247,240,0.9) 48%, rgba(250,247,240,0.45) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('healthLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('healthTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed mb-6">{t('healthBody')}</p>
          <a
            href="https://www.bangkokhospital.com/en/huahin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C8973A] hover:text-[#d4a84f] text-sm font-medium transition-colors"
          >
            {t('healthLink')}
          </a>
        </div>
      </section>

      {/* RESOURCES — cream */}
      <section className="bg-[#FAF7F0] py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-6">{t('resourcesLabel')}</p>
          <ul className="space-y-3 text-sm">
            {resources.map((link) => (
              <li key={link.href} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 border-b border-[#E8E2D6] pb-3">
                <span className="text-[#5C5247] text-xs sm:text-sm sm:min-w-[220px]">{link.label}</span>
                {link.href.startsWith('http') ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#1A2744] hover:text-[#C8973A] transition-colors font-medium">
                    {link.display}
                  </a>
                ) : (
                  <Link href={link.href} className="text-[#1A2744] hover:text-[#C8973A] transition-colors font-medium">
                    {link.display}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA — full-bleed photo + navy + gold LINE */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/photo4.jpg"
            alt={t('ctaTitle')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 50%' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(26,39,68,0.92) 0%, rgba(26,39,68,0.65) 100%)' }}
          />
        </div>
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-4">{t('ctaLabel')}</p>
          <h2
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
          >
            {t('ctaTitle')}
          </h2>
          <p className="text-white/75 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">{t('ctaBody')}</p>
          <a
            href={LINE_AGENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[52px] px-8 rounded-[12px] text-base font-semibold text-[#1A2744] transition-all hover:brightness-110"
            style={{ background: '#C8973A' }}
          >
            {tc('lineAgent')}
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm">
            <Link href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors font-medium">
              {t('ctaViewLink')}
            </Link>
            <a
              href="https://data.hua-hin-land.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#C8973A] transition-colors"
            >
              {t('ctaVerifyLink')}
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12">
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
