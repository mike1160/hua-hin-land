'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import InfoHero from '@/components/info/InfoHero'
import InfoPhotoCta from '@/components/info/InfoPhotoCta'
import InfoStatGrid from '@/components/info/InfoStatGrid'
import { Link } from '@/i18n/navigation'
import { LINE_AGENT_URL } from '@/lib/contact'

export default function AccessPage() {
  const t = useTranslations('accessPage')
  const tc = useTranslations('common')

  const stats = [
    { value: '4 min', label: t('stat1Label') },
    { value: '10 min', label: t('stat2Label') },
    { value: '12 min', label: t('stat3Label') },
    { value: '17 min', label: t('stat4Label') },
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      <InfoHero
        image="/photo6.jpg"
        imageAlt={t('heroAlt')}
        imagePosition="center 50%"
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('roadLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('roadTitle')}
          </h2>
          <div className="space-y-4 text-[#5C5247] text-sm md:text-base leading-relaxed">
            <p>{t('roadBody1')}</p>
            <p>{t('roadBody2')}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] pb-20 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('distancesLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-10 max-w-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('distancesTitle')}
          </h2>
          <InfoStatGrid stats={stats} />
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed mt-10 max-w-3xl">
            {t('distancesBody')}
          </p>
          <p className="text-[#5C5247] text-sm mt-4">
            <span className="text-[#1A2744] font-medium">{t('highwayLabel')}</span>
            <span className="text-[#C8973A] font-medium ml-2">{t('highwayValue')}</span>
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt={t('quietAlt')} className="w-full h-full object-cover" style={{ objectPosition: 'center 35%' }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(250,247,240,0.97) 0%, rgba(250,247,240,0.9) 48%, rgba(250,247,240,0.45) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('quietLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('quietTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed mb-6">
            {t('quietBody')}
          </p>
          <ul className="space-y-2 text-[#5C5247] text-sm md:text-base">
            <li>• {t('quiet1')}</li>
            <li>• {t('quiet2')}</li>
            <li>• {t('quiet3')}</li>
            <li>• {t('quiet4')}</li>
          </ul>
          <p className="text-[#5C5247] text-xs mt-6 italic">{t('quietNote')}</p>
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
