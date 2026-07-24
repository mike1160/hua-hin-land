'use client'

import ContactDisclaimerNote from '@/components/ContactDisclaimerNote'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import InfoHero from '@/components/info/InfoHero'
import InfoPhotoCta from '@/components/info/InfoPhotoCta'
import InfoStatGrid from '@/components/info/InfoStatGrid'
import LangSwitcher from '@/components/LangSwitcher'
import { Link } from '@/i18n/navigation'
import { LINE_AGENT_URL } from '@/lib/contact'
import { useTranslations } from 'next-intl'

export default function PrivateEstatePage() {
  const t = useTranslations('privateEstatePage')
  const tc = useTranslations('common')
  const whyItems = t.raw('whyItems') as string[]

  const stats = [
    { value: t('statSizeValue'), label: whyItems[1] ?? '' },
    { value: t('statProtectedValue'), label: t('statProtectedLabel') },
    { value: t('statFlatValue'), label: t('statFlatLabel') },
    { value: t('statConnectedValue'), label: t('statConnectedLabel') },
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      <LangSwitcher />

      <InfoHero
        image="/photo4.jpg"
        imageAlt={t('heroAlt')}
        imagePosition="center 50%"
        title={t('title')}
      />

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('visionLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('conceptTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed">{t('concept')}</p>
        </div>
      </section>

      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-end">
        <div className="absolute inset-0">
          <img src="/photo5.jpg" alt={t('whyTitle')} className="w-full h-full object-cover" style={{ objectPosition: 'center 45%' }} />
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
            {t('whyTitle')}
          </h2>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <InfoStatGrid stats={stats} />
          <ul className="space-y-2 text-[#5C5247] text-sm md:text-base mt-10 max-w-3xl mx-auto">
            {whyItems.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ContactDisclaimerNote />
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#C8973A] hover:brightness-110 text-white font-bold px-8 py-4 rounded-[12px] transition-all"
          >
            {tc('getInTouch')}
          </Link>
        </div>
      </section>

      <InfoPhotoCta
        title={t('title')}
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
