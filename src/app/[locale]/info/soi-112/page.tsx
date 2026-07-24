'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import { Link } from '@/i18n/navigation'

const developerKeys = ['dev1', 'dev2', 'dev3'] as const

const distanceKeys = ['dist1', 'dist2', 'dist3', 'dist4', 'dist5', 'dist6'] as const
const highlightedDistance = 'dist5'

const comparisonKeys = ['comp1', 'comp2', 'comp3', 'comp4'] as const
const highlightedComparison = 'comp4'

const investmentKeys = ['inv1', 'inv2', 'inv3'] as const

export default function Soi112Page() {
  const t = useTranslations('soi112Page')

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      {/* HERO */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/neighbourhood.jpg"
            alt={t('heroAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.42)' }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(26,39,68,0.92) 0%, rgba(26,39,68,0.35) 50%, transparent 100%)',
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

      {/* BOLD STATEMENT */}
      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-4">{t('signalLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('signalTitle')}
          </h2>
          <p className="text-[#5C5247] text-base md:text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
            {t('signalBody')}
          </p>
        </div>
      </section>

      {/* DEVELOPERS — dark photo */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0">
          <img src="/photo4.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(26,39,68,0.88)' }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('neighboursLabel')}</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('neighboursTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {developerKeys.map((key) => (
              <div key={key} className="rounded-[16px] p-6 border border-white/15 bg-white/5">
                <p className="text-[#C8973A] text-[10px] uppercase tracking-widest font-medium mb-2">{t(`${key}Tag`)}</p>
                <h3 className="text-white text-xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t(`${key}Name`)}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">{t(`${key}Body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISTANCE GRID */}
      <section className="bg-[#FAF7F0] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('corridorLabel')}</p>
          <h2 className="text-[#1A2744] text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('corridorTitle')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {distanceKeys.map((key) => (
              <div
                key={key}
                className={`flex items-center justify-between px-4 py-4 rounded-[12px] border ${
                  key === highlightedDistance
                    ? 'bg-[#C8973A]/15 border-[#C8973A]/40'
                    : 'bg-white border-[#E8E2D6]'
                }`}
              >
                <span className="text-[#1A2744] text-sm font-medium">{t(`${key}Place`)}</span>
                <span className="text-[#C8973A] text-sm font-bold">{t(`${key}Time`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE AREAS — photo cream overlay */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(250,247,240,0.97) 0%, rgba(250,247,240,0.93) 60%, rgba(250,247,240,0.55) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-24">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('compareLabel')}</p>
          <h2 className="text-[#1A2744] text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('compareTitle')}
          </h2>
          <div className="space-y-3 max-w-2xl">
            {comparisonKeys.map((key) => (
              <div
                key={key}
                className={`p-5 rounded-[12px] border ${
                  key === highlightedComparison ? 'bg-[#C8973A]/15 border-[#C8973A]/40' : 'bg-white/90 border-[#E8E2D6]'
                }`}
              >
                <p className={`font-semibold mb-1 ${key === highlightedComparison ? 'text-[#C8973A]' : 'text-[#1A2744]'}`}>{t(`${key}Area`)}</p>
                <p className="text-[#5C5247] text-sm leading-relaxed">{t(`${key}Note`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="bg-[#1A2744] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('investmentLabel')}</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('investmentTitle')}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {investmentKeys.map((key) => (
              <div key={key} className="border border-white/15 rounded-[12px] p-6 bg-white/5">
                <p className="text-[#C8973A] text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{t(`${key}Value`)}</p>
                <p className="text-white/75 text-sm">{t(`${key}Label`)}</p>
              </div>
            ))}
          </div>
          <Link href="/info/comparable-plots" className="text-[#C8973A] hover:text-[#d4a84f] text-sm font-medium transition-colors">
            {t('compareLinkText')}
          </Link>
        </div>
      </section>

      {/* THIS LAND PHOTO */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/photo3.jpg"
            alt={t('thisPlotAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(26,39,68,0.9) 0%, rgba(26,39,68,0.3) 60%, transparent 100%)' }}
          />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-14 md:pb-20">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('thisPlotLabel')}</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 max-w-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('thisPlotTitle')}
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-lg leading-relaxed mb-6">
            {t('thisPlotBody')}
          </p>
          <Link href="/info/size" className="text-[#C8973A] hover:text-[#d4a84f] text-sm font-medium transition-colors">
            {t('sizeLinkText')}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2744] py-16 px-6 border-t border-white/10">
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
