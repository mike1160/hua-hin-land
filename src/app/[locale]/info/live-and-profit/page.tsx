'use client'

import ContactDisclaimerNote from '@/components/ContactDisclaimerNote'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import InfoHero from '@/components/info/InfoHero'
import InfoPhotoCta from '@/components/info/InfoPhotoCta'
import LangSwitcher from '@/components/LangSwitcher'
import { Link } from '@/i18n/navigation'
import { LINE_AGENT_URL } from '@/lib/contact'
import { useTranslations } from 'next-intl'

type CalcRow = { label: string; value: string; highlight?: boolean }

export default function LiveAndProfitPage() {
  const t = useTranslations('liveAndProfitPage')
  const tc = useTranslations('common')
  const calcRows = t.raw('calcRows') as CalcRow[]

  const stats = calcRows
    .filter((row) => row.highlight)
    .map((row) => ({ value: row.value, label: row.label }))

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      <LangSwitcher />

      <InfoHero image="/lifestyle1.jpg" imageAlt={t('heroAlt')} imagePosition="center center" title={t('title')} />

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('strategyLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('conceptTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed">{t('concept')}</p>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt={t('calcTitle')} className="w-full h-full object-cover" style={{ objectPosition: 'center 40%' }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(26,39,68,0.94) 0%, rgba(26,39,68,0.82) 55%, rgba(26,39,68,0.55) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('numbersLabel')}</p>
          <h2
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-10 max-w-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('calcTitle')}
          </h2>
          {stats.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/10 border border-white/20 rounded-[12px] p-6 md:p-8 text-center backdrop-blur-sm">
                  <p className="text-[#C8973A] text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {stat.value}
                  </p>
                  <p className="text-white/70 text-xs mt-3 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          ) : null}
          <div className="bg-white/10 border border-white/20 rounded-[12px] p-6 space-y-3 text-sm backdrop-blur-sm max-w-2xl">
            {calcRows.map((row) => (
              <div key={row.label} className="flex justify-between border-b border-white/15 pb-2 last:border-0">
                <span className="text-white/70">{row.label}</span>
                <span className={row.highlight ? 'text-[#C8973A] font-semibold' : 'text-white'}>{row.value}</span>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-xs mt-6 max-w-2xl">{t('calcNote')}</p>
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
