'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import InfoHero from '@/components/info/InfoHero'
import InfoPhotoCta from '@/components/info/InfoPhotoCta'
import InfoStatGrid from '@/components/info/InfoStatGrid'
import LangSwitcher from '@/components/LangSwitcher'
import { Link } from '@/i18n/navigation'
import { LINE_AGENT_URL } from '@/lib/contact'

type ComparableRow = {
  plot: string
  size: string
  price: string
  perRai: string
  title: string
  location: string
  note: string
  highlight?: boolean
}

type Headers = {
  plot: string
  size: string
  price: string
  perRai: string
  title: string
  location: string
  note: string
}

export default function ComparablePlotsPage() {
  const t = useTranslations('comparablePlotsPage')
  const tc = useTranslations('common')
  const h = t.raw('headers') as Headers
  const rows = t.raw('rows') as ComparableRow[]
  const ourPlot = rows.find((row) => row.highlight)

  const stats = ourPlot
    ? [
        { value: ourPlot.perRai, label: t('statPriceLabel') },
        { value: ourPlot.size, label: t('statSizeLabel') },
        { value: ourPlot.title, label: t('statTitleLabel') },
        { value: 'Soi 112', label: ourPlot.location },
      ]
    : []

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      <LangSwitcher />

      <InfoHero
        image="/neighbourhood.jpg"
        imageAlt={t('heroAlt')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      {stats.length > 0 ? (
        <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('ourPlotLabel')}</p>
            <h2
              className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-10 max-w-2xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {ourPlot?.plot}
            </h2>
            <InfoStatGrid stats={stats} />
          </div>
        </section>
      ) : null}

      <section className="bg-[#FAF7F0] pb-20 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-6">{t('marketLabel')}</p>
          <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-4 md:p-6 overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#E8E2D6] text-left">
                  <th className="pb-3 pr-4 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{h.plot}</th>
                  <th className="pb-3 pr-4 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{h.size}</th>
                  <th className="pb-3 pr-4 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{h.price}</th>
                  <th className="pb-3 pr-4 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{h.perRai}</th>
                  <th className="pb-3 pr-4 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{h.title}</th>
                  <th className="pb-3 pr-4 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{h.location}</th>
                  <th className="pb-3 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{h.note}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.plot} className={`border-b border-[#E8E2D6] ${row.highlight ? 'bg-[#C8973A]/10' : ''}`}>
                    <td className={`py-4 pr-4 font-semibold ${row.highlight ? 'text-[#C8973A]' : 'text-[#1A2744]'}`}>{row.plot}</td>
                    <td className="py-4 pr-4 text-[#5C5247]">{row.size}</td>
                    <td className={`py-4 pr-4 ${row.highlight ? 'text-[#1A2744] font-semibold' : 'text-[#5C5247]'}`}>{row.price}</td>
                    <td className={`py-4 pr-4 font-semibold ${row.highlight ? 'text-[#C8973A]' : 'text-[#C8973A]'}`}>{row.perRai}</td>
                    <td className="py-4 pr-4 text-[#5C5247]">{row.title}</td>
                    <td className="py-4 pr-4 text-[#5C5247]">{row.location}</td>
                    <td className="py-4 text-[#5C5247] text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt={t('title')} className="w-full h-full object-cover" style={{ objectPosition: 'center 40%' }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(250,247,240,0.97) 0%, rgba(250,247,240,0.92) 48%, rgba(250,247,240,0.55) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-[#1A2744] text-base md:text-lg leading-relaxed">{t('conclusion')}</p>
          <p className="text-[#5C5247] text-xs mt-6">{t('source')}</p>
        </div>
      </section>

      <InfoPhotoCta
        title={t('title')}
        body={t('conclusion')}
        lineLabel={tc('lineAgent')}
        lineHref={LINE_AGENT_URL}
      >
        <Link href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors font-medium">
          {tc('backFooter')}
        </Link>
      </InfoPhotoCta>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <DisclaimerFooter />
      </div>
    </main>
  )
}
