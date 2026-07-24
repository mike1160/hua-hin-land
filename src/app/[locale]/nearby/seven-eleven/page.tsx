'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import { Link } from '@/i18n/navigation'

export default function SevenEleven() {
  const t = useTranslations('sevenElevenPage')
  const tc = useTranslations('common')
  const services = [
    t('service1'),
    t('service2'),
    t('service3'),
    t('service4'),
    t('service5'),
    t('service6'),
    t('service7'),
    t('service8'),
    t('service9'),
    t('service10'),
    t('service11'),
    t('service12'),
  ] as const

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo6.jpg" alt={t('heroAlt')} className="w-full h-full object-cover" style={{objectPosition: 'center 50%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>{t('title')}</h1>
          <p className="text-white/85 mt-2">{t('subtitle')}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('aboutTitle')}</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">{t('aboutBody1')}</p>
          <p className="text-[#5C5247] text-sm leading-relaxed">{t('aboutBody2')}</p>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('servicesTitle')}</h2>
          <div className="grid grid-cols-2 gap-2 text-sm text-[#5C5247]">
            {services.map((item, i) => (
              <div key={i} className="flex items-center gap-2"><span className="text-[#C8973A] text-xs">✓</span>{item}</div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('nearbyTitle')}</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">{t('nearbyBody')}</p>
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
