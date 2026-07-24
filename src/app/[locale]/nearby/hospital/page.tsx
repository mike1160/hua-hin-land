'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import { Link } from '@/i18n/navigation'

export default function Hospital() {
  const t = useTranslations('hospitalPage')
  const tc = useTranslations('common')

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt={t('heroAlt')} className="w-full h-full object-cover" style={{objectPosition: 'center 40%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>{t('title')}</h1>
          <p className="text-white/85 mt-2">{t('subtitle')}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('bangkokTitle')}</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">{t('bangkokBody')}</p>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li className="flex justify-between border-b border-[#E8E2D6] pb-2"><span>{t('addressLabel')}</span><span className="text-[#1A2744]">{t('addressValue')}</span></li>
            <li className="flex justify-between border-b border-[#E8E2D6] pb-2"><span>{t('phoneLabel')}</span><span className="text-[#C8973A]">{t('phoneValue')}</span></li>
            <li className="flex justify-between border-b border-[#E8E2D6] pb-2"><span>{t('emergencyLabel')}</span><span className="text-[#1A2744]">{t('emergencyValue')}</span></li>
            <li className="flex justify-between"><span>{t('languagesLabel')}</span><span className="text-[#1A2744]">{t('languagesValue')}</span></li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('otherTitle')}</h2>
          <ul className="space-y-3 text-[#5C5247] text-sm">
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">{t('other1Name')}</strong> — {t('other1Note')}</li>
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">{t('other2Name')}</strong> — {t('other2Note')}</li>
            <li className="border-b border-[#E8E2D6] pb-2"><strong className="text-[#1A2744]">{t('other3Name')}</strong> — {t('other3Note')}</li>
            <li><strong className="text-[#1A2744]">{t('other4Name')}</strong> — {t('other4Note')}</li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('costsTitle')}</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">{t('cost1Label')}</span><span className="text-[#C8973A]">{t('cost1Value')}</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">{t('cost2Label')}</span><span className="text-[#C8973A]">{t('cost2Value')}</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">{t('cost3Label')}</span><span className="text-[#C8973A]">{t('cost3Value')}</span></div>
            <div className="flex justify-between"><span className="text-[#5C5247]">{t('cost4Label')}</span><span className="text-[#C8973A]">{t('cost4Value')}</span></div>
          </div>
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
