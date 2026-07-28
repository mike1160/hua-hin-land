'use client'

import { useTranslations } from 'next-intl'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import SeoFaqSection from '@/components/seo/SeoFaqSection'
import SeoInternalLinks from '@/components/seo/SeoInternalLinks'

const finishedKeys = ['finished1', 'finished2', 'finished3', 'finished4', 'finished5'] as const
const buildKeys = ['build1', 'build2', 'build3', 'build4', 'build5', 'build6', 'build7'] as const

export default function HuaHinVillasPageClient() {
  const t = useTranslations('huaHinVillasPage')

  const faqItems = [
    { question: t('faq1q'), answer: t('faq1a') },
    { question: t('faq2q'), answer: t('faq2a') },
    { question: t('faq3q'), answer: t('faq3a') },
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <BreadcrumbNav />

      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end">
        <div className="absolute inset-0">
          <img src="/IMG_7802.JPG" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(26,39,68,0.9) 0%, rgba(26,39,68,0.35) 55%, transparent 100%)',
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
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5C5247] text-base md:text-lg leading-relaxed">{t('intro')}</p>
        </div>
      </section>

      <section className="bg-white py-20 px-6 border-y border-[#E8E2D6]">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-[#1A2744] text-3xl md:text-4xl font-bold mb-10 text-center"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('numbersTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FAF7F0] border border-[#E8E2D6] rounded-[12px] p-6 md:p-8">
              <h3 className="text-[#1A2744] font-bold text-lg mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                {t('finishedTitle')}
              </h3>
              <ul className="space-y-2">
                {finishedKeys.map((key) => (
                  <li key={key} className="text-[#5C5247] text-sm leading-relaxed flex gap-2">
                    <span className="text-[#C8973A]">•</span>
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#C8973A]/10 border border-[#C8973A]/30 rounded-[12px] p-6 md:p-8">
              <h3 className="text-[#1A2744] font-bold text-lg mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                {t('buildTitle')}
              </h3>
              <ul className="space-y-2">
                {buildKeys.map((key) => (
                  <li key={key} className="text-[#5C5247] text-sm leading-relaxed flex gap-2">
                    <span className="text-[#C8973A]">•</span>
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-[#1A2744] text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('sellTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed">{t('sellBody')}</p>
        </div>
      </section>

      <SeoFaqSection title={t('faqTitle')} items={faqItems} />

      <SeoInternalLinks
        links={[
          { label: t('link1'), href: '/' },
          { label: t('link2'), href: '/info/live-and-profit' },
          { label: t('link3'), href: '/info/boutique-development' },
          { label: t('link4'), href: '/info/private-estate' },
          { label: t('link5'), href: '/info/foreign-buyers' },
        ]}
      />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <DisclaimerFooter />
      </div>
    </main>
  )
}
