'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import { Link } from '@/i18n/navigation'
import { AGENT_PHONE_DISPLAY } from '@/lib/contact'

const stepKeys = ['step1', 'step2', 'step3', 'step4', 'step5'] as const
const stepNumbers = ['01', '02', '03', '04', '05']

const legalOptionKeys = ['legal1', 'legal2', 'legal3'] as const
const legalOptionIcons = ['📜', '🏢', '🛂']
const legalOptionHrefs: (string | undefined)[] = [undefined, undefined, 'https://ltr.boi.go.th']

const redFlagKeys = ['flag1', 'flag2', 'flag3'] as const

const costKeys = ['cost1', 'cost2', 'cost3'] as const

export default function ForeignBuyersPage() {
  const t = useTranslations('foreignBuyers')

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      {/* HERO */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/photo1.jpg"
            alt={t('heroAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 35%' }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(26,39,68,0.9) 0%, rgba(26,39,68,0.35) 55%, transparent 100%)',
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

      {/* THE SIMPLE TRUTH */}
      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-4">{t('truthLabel')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('truthTitle')}
          </h2>
          <p className="text-[#5C5247] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {t('truthBody')}
          </p>
        </div>
      </section>

      {/* LEGAL OPTIONS — photo band */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt="" className="w-full h-full object-cover" style={{ objectPosition: 'center 40%' }} />
          <div className="absolute inset-0" style={{ background: 'rgba(26,39,68,0.88)' }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('legalLabel')}</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('legalTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {legalOptionKeys.map((key, i) => (
              <div
                key={key}
                className="rounded-[16px] p-6 border border-white/15 bg-white/5 backdrop-blur-sm"
              >
                <div className="text-3xl mb-4">{legalOptionIcons[i]}</div>
                <p className="text-[#C8973A] text-[10px] uppercase tracking-widest font-medium mb-2">{t(`${key}Badge`)}</p>
                <h3 className="text-white font-semibold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t(`${key}Title`)}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed mb-3">{t(`${key}Body`)}</p>
                {legalOptionHrefs[i] && (
                  <a href={legalOptionHrefs[i]} target="_blank" rel="noopener noreferrer" className="text-[#C8973A] text-xs hover:text-[#d4a84f] transition-colors">
                    → ltr.boi.go.th
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-[#FAF7F0] py-20 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('howItWorksLabel')}</p>
          <h2 className="text-[#1A2744] text-3xl md:text-4xl font-bold mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('howItWorksTitle')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stepKeys.map((key, i) => (
              <div
                key={key}
                className="bg-white p-5 border border-[#E8E2D6] rounded-[12px]"
              >
                <p className="text-[#C8973A] text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stepNumbers[i]}
                </p>
                <p className="text-[#1A2744] font-semibold text-sm mb-2">{t(`${key}Title`)}</p>
                <p className="text-[#5C5247] text-xs leading-relaxed">{t(`${key}Body`)}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <Link href="/info/chanote-vs-nor-sor" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              {t('chanoteLinkText')}
            </Link>
            <a href="https://www.dol.go.th" target="_blank" rel="noopener noreferrer" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              {t('dolLinkText')}
            </a>
          </div>
        </div>
      </section>

      {/* COSTS — cream stats */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/neighbourhood.jpg" alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(250,247,240,0.97) 0%, rgba(250,247,240,0.92) 55%, rgba(250,247,240,0.6) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-24">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('budgetLabel')}</p>
          <h2 className="text-[#1A2744] text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('costsTitle')}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
            {costKeys.map((key) => (
              <div key={key} className="bg-white/80 border border-[#E8E2D6] rounded-[12px] p-5">
                <p className="text-[#C8973A] text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{t(`${key}Value`)}</p>
                <p className="text-[#5C5247] text-xs mt-2">{t(`${key}Label`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RED FLAGS */}
      <section className="py-20 md:py-24 px-6" style={{ background: '#1A2744' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('walkAwayLabel')}</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('redFlagsTitle')}
          </h2>
          <ul className="space-y-4 mb-8">
            {redFlagKeys.map((key) => (
              <li key={key} className="flex gap-3 text-white/85 text-sm md:text-base leading-relaxed">
                <span className="text-[#F59E0B] flex-shrink-0 font-bold">⚠</span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
          <Link href="/info/nominee-crackdown" className="inline-block text-[#C8973A] hover:text-[#d4a84f] text-sm font-medium transition-colors">
            {t('nomineeLinkText')}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2744] border-t border-white/10 py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('ctaTitle')}
          </h2>
          <p className="text-white/70 text-sm mb-8">{t('ctaSubtitle')}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <LineButton size="lg" />
            <a
              href={`tel:${AGENT_PHONE_DISPLAY.replace(/-/g, '')}`}
              className="inline-flex items-center justify-center min-h-[52px] px-8 rounded-[12px] text-base font-semibold text-[#1A2744] transition-all hover:brightness-110"
              style={{ background: '#C8973A' }}
            >
              {AGENT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <DisclaimerFooter />
      </div>
    </main>
  )
}
