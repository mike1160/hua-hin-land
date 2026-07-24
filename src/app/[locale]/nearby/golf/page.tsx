'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import { Link } from '@/i18n/navigation'

const MAPS_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJaRQyo-VT_DAR-FWJ8j9toLE'

export default function GolfNearby() {
  const t = useTranslations('golf')
  const tc = useTranslations('common')

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img
            src="/photo1.jpg"
            alt={t('heroAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 20%' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-3xl">
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
        <figure>
          <img
            src="/photo2.jpg"
            alt={t('heroAlt')}
            className="rounded-xl w-full aspect-video object-cover border border-[#E8E2D6]"
          />
          <figcaption className="text-[#5C5247] text-xs mt-2">{t('figCaption')}</figcaption>
        </figure>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('majesticTitle')}</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">{t('majesticBody')}</p>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-4">{t('majesticFeatures')}</p>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
              <span className="text-[#5C5247]">{t('ratingLabel')}</span>
              <span className="text-amber-400">{t('ratingValue')}</span>
            </div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
              <span className="text-[#5C5247]">{t('hoursLabel')}</span>
              <span className="text-[#1A2744]/80">{t('hoursValue')}</span>
            </div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
              <span className="text-[#5C5247]">{t('phoneLabel')}</span>
              <a href="tel:+66819423619" className="text-[#C8973A] hover:text-[#d4a84f]">
                +66 81 942 3619
              </a>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5C5247]">{t('coordsLabel')}</span>
              <span className="text-[#5C5247] text-xs">12.5188125, 99.8131875</span>
            </div>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors"
          >
            {t('mapsCta')}
          </a>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('threeTitle')}</h2>
          <div className="space-y-4 text-[#5C5247] text-sm">
            <div className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">{t('courseMajestic')}</p>
              <p className="text-[#5C5247]">{t('courseMajesticNote')}</p>
            </div>
            <div className="border-b border-[#E8E2D6] pb-4">
              <p className="text-[#1A2744] font-semibold mb-1">{t('courseBanyan')}</p>
              <p className="text-[#5C5247]">{t('courseBanyanNote')}</p>
            </div>
            <div>
              <p className="text-[#1A2744] font-semibold mb-1">{t('coursePineapple')}</p>
              <p className="text-[#5C5247]">{t('coursePineappleNote')}</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('corridorTitle')}</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">{t('corridorBody')}</p>
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
