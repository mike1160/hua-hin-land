'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import InfoHero from '@/components/info/InfoHero'
import InfoPhotoCta from '@/components/info/InfoPhotoCta'
import InfoStatGrid from '@/components/info/InfoStatGrid'
import { Link } from '@/i18n/navigation'
import { LINE_AGENT_URL } from '@/lib/contact'

export default function ChanotePage() {
  const t = useTranslations('chanotePage')
  const tc = useTranslations('common')

  const stats = [
    { value: 'NS.4J', label: t('stat1Label') },
    { value: 'GPS', label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: t('stat4Value'), label: t('stat4Label') },
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      <InfoHero
        image="/photo2.jpg"
        imageAlt={t('heroAlt')}
        imagePosition="center 30%"
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('strengthLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-10 max-w-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('typesTitle')}
          </h2>
          <InfoStatGrid stats={stats} />
        </div>
      </section>

      <section className="bg-[#FAF7F0] pb-20 md:pb-28 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#C8973A]/15 text-[#C8973A] text-xs px-2 py-0.5 rounded-full font-medium">{t('badgeStrongest')}</span>
              <p className="text-[#1A2744] font-semibold">{t('chanoteName')}</p>
            </div>
            <p className="text-[#5C5247] text-sm md:text-base leading-relaxed">
              {t('chanoteBody')}
            </p>
          </div>
          <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-yellow-500/20 text-yellow-600 text-xs px-2 py-0.5 rounded-full font-medium">{t('badgeModerate')}</span>
              <p className="text-[#1A2744] font-semibold">{t('ns3gName')}</p>
            </div>
            <p className="text-[#5C5247] text-sm md:text-base leading-relaxed">
              {t('ns3gBody')}
            </p>
          </div>
          <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-orange-500/20 text-orange-600 text-xs px-2 py-0.5 rounded-full font-medium">{t('badgeWeak')}</span>
              <p className="text-[#1A2744] font-semibold">{t('ns3Name')}</p>
            </div>
            <p className="text-[#5C5247] text-sm md:text-base leading-relaxed">
              {t('ns3Body')}
            </p>
          </div>
          <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-500/20 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium">{t('badgeAvoid')}</span>
              <p className="text-[#1A2744] font-semibold">{t('spkName')}</p>
            </div>
            <p className="text-[#5C5247] text-sm md:text-base leading-relaxed">
              {t('spkBody')}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt={t('whyAlt')} className="w-full h-full object-cover" style={{ objectPosition: 'center 40%' }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(26,39,68,0.94) 0%, rgba(26,39,68,0.82) 55%, rgba(26,39,68,0.55) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('whyLabel')}</p>
          <h2
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('whyTitle')}
          </h2>
          <ul className="space-y-2 text-white/80 text-sm md:text-base">
            <li>• <strong className="text-white">{t('why1Title')}</strong> — {t('why1Body')}</li>
            <li>• <strong className="text-white">{t('why2Title')}</strong> — {t('why2Body')}</li>
            <li>• <strong className="text-white">{t('why3Title')}</strong> — {t('why3Body')}</li>
            <li>• <strong className="text-white">{t('why4Title')}</strong> — {t('why4Body')}</li>
            <li>• <strong className="text-white">{t('why5Title')}</strong> — {t('why5Body')}</li>
          </ul>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('foreignLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('foreignTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed mb-6">
            {t('foreignIntro')}
          </p>
          <ul className="space-y-2 text-[#5C5247] text-sm md:text-base">
            <li>• <strong className="text-[#1A2744]">{t('foreign1Title')}</strong> — {t('foreign1Body')}</li>
            <li>• <strong className="text-[#1A2744]">{t('foreign2Title')}</strong> — {t('foreign2Body')}</li>
            <li>• <strong className="text-[#1A2744]">{t('foreign3Title')}</strong> — {t('foreign3Body')}</li>
            <li>• <strong className="text-[#1A2744]">{t('foreign4Title')}</strong> — {t('foreign4Body')}</li>
          </ul>
          <p className="text-[#5C5247] text-xs mt-6">{t('foreignNote')}</p>
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
