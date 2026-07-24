'use client'

import { useTranslations } from 'next-intl'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import { Link } from '@/i18n/navigation'

export default function WhyHuaHinPage() {
  const t = useTranslations('whyHuaHin')
  const tc = useTranslations('common')

  const courses = [
    { name: t('courseBlackMountain'), note: t('courseBlackMountainNote') },
    { name: t('courseRoyal'), note: t('courseRoyalNote') },
    { name: t('courseMajestic'), note: t('courseMajesticNote') },
  ]

  const stats = [
    { value: t('statBangkokValue'), label: t('statBangkokLabel') },
    { value: t('statAirportValue'), label: t('statAirportLabel') },
    { value: t('statBeachValue'), label: t('statBeachLabel') },
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="relative h-72 md:h-80 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img
            src="/photo2.jpg"
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
          <p className="text-white/85 mt-3 text-base md:text-lg leading-relaxed max-w-2xl" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.45)' }}>
            {t('subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('royalLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('royalTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">{t('royalBody')}</p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('golfLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('golfTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6">{t('golfBody')}</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {courses.map((course) => (
              <div
                key={course.name}
                className="bg-[#FAF7F0] p-4"
                style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
              >
                <p className="text-[#1A2744] font-semibold text-sm">{course.name}</p>
                <p className="text-[#5C5247] text-xs mt-1">{course.note}</p>
              </div>
            ))}
          </div>
          <Link href="/nearby/golf" className="inline-block mt-5 text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            {t('golfCta')}
          </Link>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('locationLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('locationTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6">{t('locationBody')}</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#FAF7F0] p-4 text-center"
                style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
              >
                <p className="text-[#C8973A] text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </p>
                <p className="text-[#5C5247] text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <Link href="/nearby/connectivity" className="inline-block mt-5 text-[#C8973A] hover:text-[#d4a84f] text-sm transition-colors">
            {t('connectivityCta')}
          </Link>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('vsLabel')}</p>
          <h2 className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('vsTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">{t('vsBody')}</p>
        </div>

        <div
          className="bg-white p-6 md:p-8 text-center"
          style={{ border: '1px solid #E8E2D6', borderRadius: '16px' }}
        >
          <p
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-6 leading-snug"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('ctaTitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <LineButton size="md" />
          </div>
          <div className="mt-5">
            <Link href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">
              {tc('backFooter')}
            </Link>
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
