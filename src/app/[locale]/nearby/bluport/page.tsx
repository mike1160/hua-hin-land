'use client'

import { useTranslations } from 'next-intl'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import { Link } from '@/i18n/navigation'

export default function Bluport() {
  const t = useTranslations('bluportPage')
  const tc = useTranslations('common')

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt={t('heroAlt')} className="w-full h-full object-cover" />
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
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('insideTitle')}</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">{t('insideBody')}</p>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            <li>• <strong className="text-[#1A2744]">{t('item1Name')}</strong> — {t('item1Note')}</li>
            <li>• <strong className="text-[#1A2744]">{t('item2Name')}</strong> — {t('item2Note')}</li>
            <li>• <strong className="text-[#1A2744]">{t('item3Name')}</strong> — {t('item3Note')}</li>
            <li>• <strong className="text-[#1A2744]">{t('item4Name')}</strong> — {t('item4Note')}</li>
            <li>• <strong className="text-[#1A2744]">{t('item5Name')}</strong> — {t('item5Note')}</li>
            <li>• <strong className="text-[#1A2744]">{t('item6Name')}</strong> — {t('item6Note')}</li>
            <li>• <strong className="text-[#1A2744]">{t('item7Name')}</strong> — {t('item7Note')}</li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('marketTitle')}</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6">{t('marketBody')}</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative h-52 rounded-xl overflow-hidden border border-[#E8E2D6]">
              <img src="/IMG_7806.JPG" alt={t('marketAlt')} className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: 'center center', filter: 'blur(1px) saturate(1.1)'}} />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7,8,15,0.65) 0%, rgba(7,8,15,0.2) 100%)'}} />
            </div>
            <div className="relative h-52 rounded-xl overflow-hidden border border-[#E8E2D6]">
              <img src="/IMG_7807.JPG" alt={t('marketInteriorAlt')} className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: 'center center', filter: 'blur(1px) saturate(1.1)'}} />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7,8,15,0.65) 0%, rgba(7,8,15,0.2) 100%)'}} />
            </div>
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
