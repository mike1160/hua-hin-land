'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import { Link } from '@/i18n/navigation'

const titleRows = [
  { key: 'row1', tone: 'best' as const },
  { key: 'row2', tone: 'good' as const },
  { key: 'row3', tone: 'caution' as const },
  { key: 'row4', tone: 'avoid' as const },
]

const statKeys = ['stat1', 'stat2', 'stat3', 'stat4'] as const

export default function ChanoteVsNorSorPage() {
  const t = useTranslations('chanoteVsNorSor')

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      {/* HERO */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/chanote.jpg"
            alt={t('heroAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(26,39,68,0.92) 0%, rgba(26,39,68,0.4) 50%, transparent 100%)',
            }}
          />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-14 md:pb-20 pt-28">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.22em] font-medium mb-3">{t('heroLabel')}</p>
          <h1
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] max-w-3xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('heroTitle')}
          </h1>
          <p className="text-white/85 text-sm md:text-lg leading-relaxed mt-5 max-w-2xl">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-[#FAF7F0] py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('comparisonLabel')}</p>
          <h2 className="text-[#1A2744] text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('comparisonTitle')}
          </h2>
          <div className="overflow-x-auto -mx-1 px-1">
            <table className="w-full min-w-[640px] text-sm border-collapse bg-white rounded-[12px] overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#1A2744]">
                  <th className="text-left p-4 font-semibold text-white/90">{t('colTitleType')}</th>
                  <th className="text-left p-4 font-semibold text-white/90">{t('colMeaning')}</th>
                  <th className="text-left p-4 font-semibold text-white/90">{t('colRights')}</th>
                  <th className="text-left p-4 font-semibold text-white/90">{t('colVerdict')}</th>
                </tr>
              </thead>
              <tbody>
                {titleRows.map((row) => (
                  <tr
                    key={row.key}
                    className={
                      row.tone === 'best'
                        ? 'bg-[#C8973A]/12'
                        : row.tone === 'avoid'
                          ? 'bg-red-50'
                          : row.tone === 'caution'
                            ? 'bg-amber-50'
                            : 'bg-white'
                    }
                  >
                    <td className="p-4 border-b border-[#E8E2D6] text-[#1A2744] font-semibold">{t(`${row.key}Type`)}</td>
                    <td className="p-4 border-b border-[#E8E2D6] text-[#5C5247]">{t(`${row.key}Meaning`)}</td>
                    <td className="p-4 border-b border-[#E8E2D6] text-[#5C5247]">{t(`${row.key}Rights`)}</td>
                    <td
                      className={`p-4 border-b border-[#E8E2D6] font-semibold ${
                        row.tone === 'best' || row.tone === 'good'
                          ? 'text-[#15803D]'
                          : row.tone === 'caution'
                            ? 'text-[#B45309]'
                            : 'text-[#B91C1C]'
                      }`}
                    >
                      {t(`${row.key}Verdict`)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PULL QUOTE — photo */}
      <section className="relative min-h-[50vh] flex items-center py-20 px-6">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="" className="w-full h-full object-cover" style={{ objectPosition: 'center 45%' }} />
          <div className="absolute inset-0" style={{ background: 'rgba(26,39,68,0.78)' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-6">{t('quoteLabel')}</p>
          <blockquote
            className="text-white text-2xl md:text-4xl font-bold leading-snug"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('quoteText')}
          </blockquote>
          <p className="text-white/75 text-sm md:text-base leading-relaxed mt-8 max-w-xl mx-auto">
            {t('quoteBody')}
          </p>
          <Link href="/info/foreign-buyers" className="inline-block mt-8 text-[#C8973A] hover:text-[#d4a84f] text-sm font-medium transition-colors">
            {t('foreignGuideLinkText')}
          </Link>
        </div>
      </section>

      {/* THIS PLOT — gold highlight */}
      <section className="bg-[#FAF7F0] py-20 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-[16px] p-8 md:p-10 text-center"
            style={{ background: 'linear-gradient(135deg, #C8973A 0%, #A67B2E 100%)' }}
          >
            <p className="text-white/80 text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('plotLabel')}</p>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t('plotTitle')}
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-8">
              {t('plotBody')}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://data.hua-hin-land.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-[12px] text-sm font-semibold bg-[#1A2744] text-white hover:brightness-110 transition-all"
              >
                {t('verifyLinkText')}
              </a>
              <Link
                href="/info/size"
                className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-[12px] text-sm font-semibold bg-white/20 text-white border border-white/40 hover:bg-white/30 transition-colors"
              >
                {t('viewPlotLinkText')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <img src="/photo4.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(26,39,68,0.85)' }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statKeys.map((key) => (
              <div key={key} className="text-center p-4 border border-white/15 rounded-[12px] bg-white/5">
                <p className="text-[#C8973A] text-xl md:text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{t(`${key}Value`)}</p>
                <p className="text-white/70 text-xs mt-2">{t(`${key}Label`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2744] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('ctaTitle')}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <LineButton size="lg" />
            <Link
              href="/info/size"
              className="inline-flex items-center justify-center min-h-[52px] px-8 rounded-[12px] text-base font-semibold text-[#1A2744] transition-all hover:brightness-110"
              style={{ background: '#C8973A' }}
            >
              {t('viewPlotLinkText')}
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <DisclaimerFooter />
      </div>
    </main>
  )
}
