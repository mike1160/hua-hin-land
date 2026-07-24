'use client'

import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import FrostedFigure from '@/components/FrostedFigure'
import { Link } from '@/i18n/navigation'

const PLOT_LAT = 12.4751699
const PLOT_LNG = 99.9073267
const MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${PLOT_LNG}!3d${PLOT_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI4JzMwLjYiTiA5OcKwNTQnMjYuNCJF!5e1!3m2!1sen!2sth!4v1234567890`

const routeKeys = ['route1', 'route2', 'route3'] as const

export default function ConnectivityNearby() {
  const t = useTranslations('connectivityPage')
  const tc = useTranslations('common')

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
        <FrostedFigure
          src="/stst1.jpg"
          alt={t('bangkokAlt')}
          caption={t('bangkokCaption')}
          priority
          frosted={false}
        />

        <figure>
          <div className="overflow-hidden border border-[#E8E2D6]" style={{height: '360px', borderRadius: '12px'}}>
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('mapTitle')}
            />
          </div>
          <figcaption className="text-[#5C5247] text-xs mt-2">{t('mapCaption', { lat: PLOT_LAT, lng: PLOT_LNG })}</figcaption>
        </figure>

        <div className="space-y-4">
          <h2 className="text-[#1A2744] text-xl font-semibold">{t('routesTitle')}</h2>
          {routeKeys.map((key) => (
            <div key={key} className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{t(`${key}Icon`)}</span>
                  <div>
                    <p className="text-[#1A2744] font-semibold text-sm">{t(`${key}Title`)}</p>
                    <p className="text-[#5C5247] text-xs">{t(`${key}Destination`)}</p>
                  </div>
                </div>
                <span className="text-[#C8973A] font-bold text-sm flex-shrink-0">{t(`${key}Time`)}</span>
              </div>
              <p className="text-[#5C5247] text-sm leading-relaxed pl-10">{t(`${key}Detail`)}</p>
            </div>
          ))}
        </div>

        <FrostedFigure
          src="/stst3.jpg"
          alt={t('streetAlt')}
          caption={t('streetCaption')}
          frosted={false}
        />

        <FrostedFigure
          src="/stst4.jpeg"
          alt={t('btsAlt')}
          caption={t('btsCaption')}
          frosted={false}
        />

        <figure>
          <img
            src="/satellite.png"
            alt={t('satelliteAlt')}
            className="rounded-xl w-full aspect-video object-cover border border-[#E8E2D6]"
          />
          <figcaption className="text-[#5C5247] text-xs mt-2">{t('satelliteCaption')}</figcaption>
        </figure>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('distancesTitle')}</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">{t('dist1Label')}</span><span className="text-[#C8973A] font-medium">{t('dist1Value')}</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">{t('dist2Label')}</span><span className="text-[#C8973A] font-medium">{t('dist2Value')}</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">{t('dist3Label')}</span><span className="text-[#C8973A] font-medium">{t('dist3Value')}</span></div>
            <div className="flex justify-between border-b border-[#E8E2D6] pb-2"><span className="text-[#5C5247]">{t('dist4Label')}</span><span className="text-[#C8973A] font-medium">{t('dist4Value')}</span></div>
            <div className="flex justify-between"><span className="text-[#5C5247]">{t('dist5Label')}</span><span className="text-[#C8973A] font-medium">{t('dist5Value')}</span></div>
          </div>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{t('futureTitle')}</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">{t('futureBody')}</p>
        </div>

        <FrostedFigure
          src="/stst2.jpg"
          alt={t('diningAlt')}
          caption={t('diningCaption')}
          frosted={false}
        />

        <div className="flex gap-3">
          <a href={`https://www.google.com/maps?q=${PLOT_LAT},${PLOT_LNG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-[#C8973A] hover:bg-[#F3EEE4] text-[#1A2744] px-5 py-2.5 rounded-[12px] text-sm transition-all">
            {t('mapsOpenCta')}
          </a>
          <a href={`https://www.google.com/maps/dir/?api=1&destination=${PLOT_LAT},${PLOT_LNG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-[#C8973A] hover:bg-[#F3EEE4] text-[#1A2744] px-5 py-2.5 rounded-[12px] text-sm transition-all">
            {t('directionsCta')}
          </a>
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
