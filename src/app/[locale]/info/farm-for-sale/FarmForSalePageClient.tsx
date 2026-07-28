'use client'

import { useTranslations } from 'next-intl'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import SeoFaqSection from '@/components/seo/SeoFaqSection'
import SeoInternalLinks from '@/components/seo/SeoInternalLinks'

const useKeys = [
  { title: 'use1Title', body: 'use1Body' },
  { title: 'use2Title', body: 'use2Body' },
  { title: 'use3Title', body: 'use3Body' },
  { title: 'use4Title', body: 'use4Body' },
] as const

export default function FarmForSalePageClient() {
  const t = useTranslations('farmForSalePage')

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
          <img src="/photo4.jpg" alt="" className="w-full h-full object-cover" />
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
            className="text-[#1A2744] text-3xl md:text-4xl font-bold mb-10"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('buildTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {useKeys.map(({ title, body }) => (
              <div key={title} className="bg-[#FAF7F0] border border-[#E8E2D6] rounded-[12px] p-6">
                <h3 className="text-[#1A2744] font-semibold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t(title)}
                </h3>
                <p className="text-[#5C5247] text-sm leading-relaxed">{t(body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A2744] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-white text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('whyTitle')}
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">{t('whyBody')}</p>
        </div>
      </section>

      <SeoFaqSection title={t('faqTitle')} items={faqItems} />

      <SeoInternalLinks
        links={[
          { label: t('link1'), href: '/info/boutique-development' },
          { label: t('link2'), href: '/info/live-and-profit' },
          { label: t('link3'), href: '/info/private-estate' },
          { label: t('link4'), href: '/nearby/why-hua-hin' },
          { label: t('link5'), href: '/#contact' },
        ]}
      />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <DisclaimerFooter />
      </div>
    </main>
  )
}
