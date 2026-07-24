'use client'

import { useTranslations } from 'next-intl'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import { Link } from '@/i18n/navigation'

export default function SizePage() {
  const t = useTranslations('size')
  const tc = useTranslations('common')

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img
            src="/photo3.jpg"
            alt={t('heroAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">
            {tc('backToListing')}
          </Link>
          <h1
            className="text-white text-4xl md:text-5xl font-bold mt-2"
            style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            {t('title')}
          </h1>
          <p className="text-white/85 mt-2">{t('subtitle')}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('systemTitle')}</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6">{t('systemBody')}</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#E8E2D6] pb-3">
              <div>
                <p className="text-[#1A2744] font-medium">{t('raiLabel')}</p>
                <p className="text-[#5C5247] text-xs">{t('raiDesc')}</p>
              </div>
              <p className="text-[#C8973A] font-semibold">{t('raiValue')}</p>
            </div>
            <div className="flex items-center justify-between border-b border-[#E8E2D6] pb-3">
              <div>
                <p className="text-[#1A2744] font-medium">{t('nganLabel')}</p>
                <p className="text-[#5C5247] text-xs">{t('nganDesc')}</p>
              </div>
              <p className="text-[#C8973A] font-semibold">{t('nganValue')}</p>
            </div>
            <div className="flex items-center justify-between border-b border-[#E8E2D6] pb-3">
              <div>
                <p className="text-[#1A2744] font-medium">{t('tarangLabel')}</p>
                <p className="text-[#5C5247] text-xs">{t('tarangDesc')}</p>
              </div>
              <p className="text-[#C8973A] font-semibold">{t('tarangValue')}</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#1A2744] font-medium">{t('raiTarangLabel')}</p>
                <p className="text-[#5C5247] text-xs">{t('raiTarangDesc')}</p>
              </div>
              <p className="text-[#C8973A] font-semibold">{t('raiTarangValue')}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('plotTitle')}</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
              <span className="text-[#5C5247]">{t('calc4Rai')}</span>
              <span className="text-[#1A2744]">{t('calc4RaiValue')}</span>
            </div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
              <span className="text-[#5C5247]">{t('calc2Ngan')}</span>
              <span className="text-[#1A2744]">{t('calc2NganValue')}</span>
            </div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2 font-semibold">
              <span className="text-[#C8973A]">{t('calcTotal')}</span>
              <span className="text-[#C8973A]">{t('calcTotalValue')}</span>
            </div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
              <span className="text-[#5C5247]">{t('calcHectare')}</span>
              <span className="text-[#1A2744]">{t('calcHectareValue')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5C5247]">{t('calcFootball')}</span>
              <span className="text-[#1A2744]">{t('calcFootballValue')}</span>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('buildTitle')}</h2>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li>{t('build1')}</li>
            <li>{t('build2')}</li>
            <li>{t('build3')}</li>
            <li>{t('build4')}</li>
          </ul>
          <p className="text-[#5C5247] text-xs mt-4">{t('buildNote')}</p>
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
