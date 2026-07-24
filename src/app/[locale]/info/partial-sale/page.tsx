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

type Step = { title: string; desc: string }
type CostRow = { item: string; amount: string; highlight?: boolean }

export default function PartialSalePage() {
  const t = useTranslations('partialSalePage')
  const tc = useTranslations('common')
  const howItems = t.raw('howItems') as string[]
  const steps = t.raw('steps') as Step[]
  const costs = t.raw('costs') as CostRow[]

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: t('stat4Value'), label: t('stat4Label') },
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      <LangSwitcher />

      <InfoHero
        image="/photo3.jpg"
        imageAlt={t('heroAlt')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('overviewLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-10 max-w-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('howTitle')}
          </h2>
          <InfoStatGrid stats={stats} />
          <ul className="space-y-2 text-[#5C5247] text-sm md:text-base mt-10 max-w-3xl">
            {howItems.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('processLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-10"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('processTitle')}
          </h2>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-4 border-b border-[#E8E2D6] pb-6 last:border-0 last:pb-0">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8973A]/15 border border-[#C8973A]/30 flex items-center justify-center text-[#C8973A] text-sm font-semibold">
                  {i + 1}
                </div>
                <div>
                  <p className="text-[#1A2744] font-semibold text-sm md:text-base mb-1">{s.title}</p>
                  <p className="text-[#5C5247] text-sm md:text-base leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#5C5247] text-sm mt-8 pt-6 border-t border-[#E8E2D6]">{t('timeline')}</p>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src="/neighbourhood.jpg" alt={t('costsTitle')} className="w-full h-full object-cover" style={{ objectPosition: 'center 40%' }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(250,247,240,0.97) 0%, rgba(250,247,240,0.92) 48%, rgba(250,247,240,0.55) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('costsLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('costsTitle')}
          </h2>
          <div className="bg-white/90 border border-[#E8E2D6] rounded-[12px] p-4 md:p-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#E8E2D6] text-left">
                  <th className="pb-3 pr-4 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{t('costItem')}</th>
                  <th className="pb-3 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{t('costAmount')}</th>
                </tr>
              </thead>
              <tbody>
                {costs.map((row) => (
                  <tr key={row.item} className={`border-b border-[#E8E2D6] ${row.highlight ? 'bg-[#C8973A]/10' : ''}`}>
                    <td className={`py-4 pr-4 align-top ${row.highlight ? 'text-[#1A2744] font-semibold' : 'text-[#5C5247]'}`}>{row.item}</td>
                    <td className={`py-4 align-top ${row.highlight ? 'text-[#C8973A] font-semibold' : 'text-[#5C5247]'}`}>{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-white/90 border border-[#E8E2D6] rounded-[12px] p-4">
            <p className="text-[#5C5247] text-xs leading-relaxed">{t('note')}</p>
          </div>
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
        body={t('subtitle')}
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
