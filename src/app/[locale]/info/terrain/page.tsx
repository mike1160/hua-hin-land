'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import InfoHero from '@/components/info/InfoHero'
import InfoPhotoCta from '@/components/info/InfoPhotoCta'
import InfoStatGrid from '@/components/info/InfoStatGrid'
import { Link } from '@/i18n/navigation'
import { LINE_AGENT_URL } from '@/lib/contact'

export default function TerrainPage() {
  const t = useTranslations('terrainPage')
  const tc = useTranslations('common')

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: '50–80 cm', label: t('stat2Label') },
    { value: '7,200 m²', label: t('stat3Label') },
    { value: '฿120–180', label: t('stat4Label') },
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      <InfoHero
        image="/photo1.jpg"
        imageAlt={t('heroAlt')}
        imagePosition="center 30%"
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('conditionLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('conditionTitle')}
          </h2>
          <div className="space-y-4 text-[#5C5247] text-sm md:text-base leading-relaxed">
            <p>{t('conditionBody1')}</p>
            <p>{t('conditionBody2')}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] pb-20 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('glanceLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-10 max-w-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('raiseTitle')}
          </h2>
          <InfoStatGrid stats={stats} />
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt={t('terrainAlt')} className="w-full h-full object-cover" style={{ objectPosition: 'center 40%' }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(250,247,240,0.97) 0%, rgba(250,247,240,0.9) 48%, rgba(250,247,240,0.45) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <ul className="space-y-6 text-[#5C5247] text-sm md:text-base">
            <li className="border-b border-[#E8E2D6] pb-6">
              <strong className="text-[#1A2744] block mb-2">{t('whyTitle')}</strong>
              {t('whyBody')}
            </li>
            <li className="border-b border-[#E8E2D6] pb-6">
              <strong className="text-[#1A2744] block mb-2">{t('phaseTitle')}</strong>
              {t('phaseBody')}
            </li>
            <li className="border-b border-[#E8E2D6] pb-6">
              <strong className="text-[#1A2744] block mb-2">{t('costTitle')}</strong>
              {t('costBody')}
            </li>
            <li>
              <strong className="text-[#1A2744] block mb-2">{t('opportunityTitle')}</strong>
              {t('opportunityBody')}
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('advantagesLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('advantagesTitle')}
          </h2>
          <ul className="space-y-2 text-[#5C5247] text-sm md:text-base">
            <li>• <strong className="text-[#1A2744]">{t('adv1Title')}</strong> — {t('adv1Body')}</li>
            <li>• <strong className="text-[#1A2744]">{t('adv2Title')}</strong> — {t('adv2Body')}</li>
            <li>• <strong className="text-[#1A2744]">{t('adv3Title')}</strong> — {t('adv3Body')}</li>
            <li>• <strong className="text-[#1A2744]">{t('adv4Title')}</strong> — {t('adv4Body')}</li>
            <li>• <strong className="text-[#1A2744]">{t('adv5Title')}</strong> — {t('adv5Body')}</li>
          </ul>
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
