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

type CalcRow = { label: string; value: string; highlight?: boolean }

export default function BoutiqueDevelopmentPage() {
  const t = useTranslations('boutiquePage')
  const tc = useTranslations('common')
  const marketItems = t.raw('marketItems') as string[]
  const calcRows = t.raw('calcRows') as CalcRow[]

  const stats = [
    { value: calcRows[0]?.value ?? '฿10,350,000', label: calcRows[0]?.label ?? '' },
    { value: calcRows[1]?.value ?? '฿60M', label: calcRows[1]?.label ?? '' },
    { value: t('statYieldValue'), label: marketItems[0] ?? '' },
    { value: t('statVillaValue'), label: marketItems[1] ?? '' },
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      <LangSwitcher />

      <InfoHero
        image="/neighbourhood.jpg"
        imageAlt={t('heroAlt')}
        imagePosition="center 40%"
        title={t('title')}
      />

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('conceptLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('conceptTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed">{t('concept')}</p>
        </div>
      </section>

      <section className="bg-[#FAF7F0] pb-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('marketLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-10 max-w-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('marketTitle')}
          </h2>
          <InfoStatGrid stats={stats} />
          <ul className="space-y-2 text-[#5C5247] text-sm md:text-base mt-10 max-w-3xl">
            {marketItems.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src="/lifestyle1.jpg" alt={t('calcTitle')} className="w-full h-full object-cover" style={{ objectPosition: 'center center' }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(26,39,68,0.94) 0%, rgba(26,39,68,0.82) 55%, rgba(26,39,68,0.55) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('feasibilityLabel')}</p>
          <h2
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('calcTitle')}
          </h2>
          <div className="bg-white/10 border border-white/20 rounded-[12px] p-6 space-y-3 text-sm backdrop-blur-sm">
            {calcRows.map((row) => (
              <div key={row.label} className="flex justify-between border-b border-white/15 pb-2 last:border-0 gap-4">
                <span className="text-white/70">{row.label}</span>
                <span className={`text-right ${row.highlight ? 'text-[#C8973A] font-semibold' : 'text-white'}`}>{row.value}</span>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-xs mt-6">{t('calcNote')}</p>
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
