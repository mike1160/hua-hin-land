'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import InfoHero from '@/components/info/InfoHero'
import InfoPhotoCta from '@/components/info/InfoPhotoCta'
import InfoStatGrid from '@/components/info/InfoStatGrid'
import { Link } from '@/i18n/navigation'
import { LINE_AGENT_URL } from '@/lib/contact'

export default function WaterPage() {
  const t = useTranslations('waterPage')
  const tc = useTranslations('common')

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: '30–60m', label: t('stat2Label') },
    { value: '฿35k–80k', label: t('stat3Label') },
    { value: '300+', label: t('stat4Label') },
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      <InfoHero
        image="/photo2.jpg"
        imageAlt={t('heroAlt')}
        imagePosition="center 50%"
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('utilitiesLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-10 max-w-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('waterTitle')}
          </h2>
          <InfoStatGrid stats={stats} />
          <div className="space-y-4 text-[#5C5247] text-sm md:text-base leading-relaxed mt-10 max-w-3xl">
            <p>{t('waterBody1')}</p>
            <p>{t('waterBody2')}</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt={t('backupAlt')} className="w-full h-full object-cover" style={{ objectPosition: 'center 35%' }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(250,247,240,0.97) 0%, rgba(250,247,240,0.9) 48%, rgba(250,247,240,0.45) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('backupLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('backupTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed mb-8">
            {t('backupBody')}
          </p>
          <div className="bg-white/90 border border-[#E8E2D6] rounded-[12px] p-6 space-y-3 text-sm">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
              <span className="text-[#5C5247]">{t('wellDepthLabel')}</span>
              <span className="text-[#1A2744] font-medium">{t('wellDepthValue')}</span>
            </div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
              <span className="text-[#5C5247]">{t('drillCostLabel')}</span>
              <span className="text-[#1A2744] font-medium">{t('drillCostValue')}</span>
            </div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
              <span className="text-[#5C5247]">{t('pumpLabel')}</span>
              <span className="text-[#1A2744] font-medium">{t('pumpValue')}</span>
            </div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
              <span className="text-[#5C5247]">{t('qualityLabel')}</span>
              <span className="text-[#1A2744] font-medium">{t('qualityValue')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5C5247]">{t('permitLabel')}</span>
              <span className="text-[#1A2744] font-medium">{t('permitValue')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('powerLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('powerTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed mb-8">
            {t('powerBody')}
          </p>
          <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 space-y-3 text-sm">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
              <span className="text-[#5C5247]">{t('peaFeeLabel')}</span>
              <span className="text-[#1A2744] font-medium">{t('peaFeeValue')}</span>
            </div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
              <span className="text-[#5C5247]">{t('solarLabel')}</span>
              <span className="text-[#1A2744] font-medium">{t('solarValue')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5C5247]">{t('timelineLabel')}</span>
              <span className="text-[#1A2744] font-medium">{t('timelineValue')}</span>
            </div>
          </div>
        </div>
      </section>

      <InfoPhotoCta
        title={t('ctaTitle')}
        body={t('ctaBody')}
        lineLabel={tc('lineAgent')}
        lineHref={LINE_AGENT_URL}
      >
        <Link href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors font-medium">
          {tc('backFooter')}
        </Link>
      </InfoPhotoCta>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <DisclaimerFooter />
      </div>
    </main>
  )
}
