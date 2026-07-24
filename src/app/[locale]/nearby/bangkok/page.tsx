'use client'

import { useTranslations } from 'next-intl'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import { Link } from '@/i18n/navigation'

export default function Bangkok() {
  const t = useTranslations('bangkokPage')
  const tc = useTranslations('common')

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt={t('heroAlt')} className="w-full h-full object-cover" style={{objectPosition: 'center 30%'}} />
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
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('connectionTitle')}</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">{t('connectionBody')}</p>
          <div className="space-y-2 text-sm mt-4">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">{t('carLabel')}</span><span className="text-[#1A2744]">{t('carValue')}</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">{t('trainLabel')}</span><span className="text-[#1A2744]">{t('trainValue')}</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">{t('busLabel')}</span><span className="text-[#1A2744]">{t('busValue')}</span></div>
            <div className="flex justify-between"><span className="text-[#5C5247]">{t('transferLabel')}</span><span className="text-[#1A2744]">{t('transferValue')}</span></div>
          </div>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('flightsTitle')}</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">{t('flightsBody1')}</p>
          <p className="text-[#5C5247] text-sm leading-relaxed">{t('flightsBody2')}</p>
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
