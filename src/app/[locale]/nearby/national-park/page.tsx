'use client'

import { useTranslations } from 'next-intl'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import { Link } from '@/i18n/navigation'

export default function NationalPark() {
  const t = useTranslations('nationalParkPage')
  const tc = useTranslations('common')

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt={t('heroAlt')} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f]">{tc('backToListing')}</Link>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>{t('title')}</h1>
          <p className="text-white/85 mt-2">{t('subtitle')}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('thapTitle')}</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">{t('thapBody')}</p>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li>• {t('feature1')}</li>
            <li>• {t('feature2')}</li>
            <li>• {t('feature3')}</li>
            <li>• {t('feature4')}</li>
            <li>• {t('feature5')}</li>
            <li>• {t('feature6')}</li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('networkTitle')}</h2>
          <ul className="space-y-3 text-[#5C5247] text-sm">
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">{t('park1Name')}</strong> — {t('park1Note')}</li>
            <li className="border-b border-[#E8E2D6] pb-3"><strong className="text-[#1A2744]">{t('park2Name')}</strong> — {t('park2Note')}</li>
            <li><strong className="text-[#1A2744]">{t('park3Name')}</strong> — {t('park3Note')}</li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('whyTitle')}</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">{t('whyBody')}</p>
          <p className="text-[#5C5247] text-sm italic mt-3">{t('whyItalic')}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 pb-12">
        <DisclaimerFooter />
        <div className="text-center pt-4">
          <Link href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">
            {tc('backFooter')}
          </Link>
        </div>
      </div>
    </main>
  )
}
