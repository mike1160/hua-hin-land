'use client'

import { useId, useState } from 'react'
import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import { Link } from '@/i18n/navigation'

const categories = [
  { key: 'cat1', itemCount: 5 },
  { key: 'cat2', itemCount: 4 },
  { key: 'cat3', itemCount: 3 },
  { key: 'cat4', itemCount: 2 },
] as const

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="border-b border-[#E8E2D6] last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-[#1A2744] text-base md:text-lg font-semibold leading-snug group-hover:text-[#C8973A] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
          {q}
        </span>
        <span
          className={`text-[#C8973A] text-xl leading-none flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed pb-5 pr-8">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FaqPage() {
  const t = useTranslations('faqPage')

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      {/* HERO */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/photo2.jpg"
            alt={t('heroAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(26,39,68,0.9) 0%, rgba(26,39,68,0.3) 55%, transparent 100%)',
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
          <p className="text-white/85 text-sm md:text-lg leading-relaxed mt-5 max-w-xl">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* ACCORDION BY CATEGORY */}
      <section className="bg-[#FAF7F0] py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          {categories.map((cat) => (
            <div key={cat.key}>
              <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-4">{t(`${cat.key}Label`)}</p>
              <div className="bg-white border border-[#E8E2D6] rounded-[16px] px-5 md:px-8">
                {Array.from({ length: cat.itemCount }, (_, i) => i + 1).map((n) => (
                  <FaqItem key={n} q={t(`${cat.key}q${n}`)} a={t(`${cat.key}a${n}`)} />
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-wrap gap-4 text-sm pt-2">
            <Link href="/info/foreign-buyers" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              {t('foreignBuyersLinkText')}
            </Link>
            <Link href="/info/nominee-crackdown" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              {t('nomineeLinkText')}
            </Link>
            <Link href="/info/chanote-vs-nor-sor" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              {t('titleDeedsLinkText')}
            </Link>
          </div>
        </div>
      </section>

      {/* PHOTO BAND */}
      <section className="relative min-h-[40vh] flex items-center py-16 px-6">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(26,39,68,0.75)' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p
            className="text-white text-2xl md:text-3xl font-bold leading-snug"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('photoBandText')}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2744] py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('ctaTitle')}
          </h2>
          <p className="text-white/70 text-sm mb-8">{t('ctaSubtitle')}</p>
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
