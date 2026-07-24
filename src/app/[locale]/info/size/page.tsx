'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import InfoHero from '@/components/info/InfoHero'
import InfoPhotoCta from '@/components/info/InfoPhotoCta'
import InfoStatGrid from '@/components/info/InfoStatGrid'
import { Link } from '@/i18n/navigation'
import { LINE_AGENT_URL } from '@/lib/contact'

export default function SizePage() {
  const t = useTranslations('size')
  const tc = useTranslations('common')

  const stats = [
    { value: '1,600 m²', label: t('raiLabel') },
    { value: '400 m²', label: t('nganLabel') },
    { value: '7,200 m²', label: t('calcTotal') },
    { value: '0.72 ha', label: t('calcHectare') },
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      <InfoHero
        image="/photo3.jpg"
        imageAlt={t('heroAlt')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('unitsLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('systemTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed mb-10 max-w-3xl">{t('systemBody')}</p>
          <InfoStatGrid stats={stats} />
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('thisPlotLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('plotTitle')}
          </h2>
          <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8 space-y-3 text-sm md:text-base">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-3">
              <span className="text-[#5C5247]">{t('calc4Rai')}</span>
              <span className="text-[#1A2744] font-medium">{t('calc4RaiValue')}</span>
            </div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-3">
              <span className="text-[#5C5247]">{t('calc2Ngan')}</span>
              <span className="text-[#1A2744] font-medium">{t('calc2NganValue')}</span>
            </div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-3 font-semibold">
              <span className="text-[#C8973A]">{t('calcTotal')}</span>
              <span className="text-[#C8973A]">{t('calcTotalValue')}</span>
            </div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-3">
              <span className="text-[#5C5247]">{t('calcHectare')}</span>
              <span className="text-[#1A2744]">{t('calcHectareValue')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5C5247]">{t('calcFootball')}</span>
              <span className="text-[#1A2744]">{t('calcFootballValue')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src="/neighbourhood.jpg" alt={t('buildTitle')} className="w-full h-full object-cover" style={{ objectPosition: 'center 40%' }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(26,39,68,0.94) 0%, rgba(26,39,68,0.82) 55%, rgba(26,39,68,0.55) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('buildPotentialLabel')}</p>
          <h2
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('buildTitle')}
          </h2>
          <ul className="space-y-2 text-white/80 text-sm md:text-base">
            <li>{t('build1')}</li>
            <li>{t('build2')}</li>
            <li>{t('build3')}</li>
            <li>{t('build4')}</li>
          </ul>
          <p className="text-white/60 text-xs mt-6">{t('buildNote')}</p>
        </div>
      </section>

      <InfoPhotoCta
        title={t('title')}
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
