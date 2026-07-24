'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import InfoHero from '@/components/info/InfoHero'
import InfoPhotoCta from '@/components/info/InfoPhotoCta'
import InfoStatGrid from '@/components/info/InfoStatGrid'
import { Link } from '@/i18n/navigation'
import { LINE_AGENT_URL } from '@/lib/contact'

export default function ViewPage() {
  const t = useTranslations('viewPage')
  const tc = useTranslations('common')

  const stats = [
    { value: '360°', label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: '20+ yrs', label: t('stat4Label') },
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      <InfoHero
        image="/photo4.jpg"
        imageAlt={t('heroAlt')}
        imagePosition="center 45%"
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('viewLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('viewTitle')}
          </h2>
          <div className="space-y-4 text-[#5C5247] text-sm md:text-base leading-relaxed">
            <p>{t('viewBody1')}</p>
            <p>{t('viewBody2')}</p>
          </div>
        </div>
      </section>

      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-end">
        <div className="absolute inset-0">
          <img src="/photo5.jpg" alt={t('goldenAlt')} className="w-full h-full object-cover" />
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
            {t('imagineTitle')}
          </h2>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 text-[#5C5247] text-sm md:text-base leading-relaxed mb-12">
            <p>{t('morningBody1')}</p>
            <p>{t('morningBody2')}</p>
            <p className="italic">{t('morningBody3')}</p>
          </div>

          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('protectedLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('protectedTitle')}
          </h2>
          <InfoStatGrid stats={stats} />
          <ul className="space-y-2 text-[#5C5247] text-sm md:text-base mt-10">
            <li>• {t('protect1')}</li>
            <li>• {t('protect2')}</li>
            <li>• {t('protect3')}</li>
            <li>• {t('protect4')}</li>
          </ul>
        </div>
      </section>

      <InfoPhotoCta
        image="/photo4.jpg"
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
