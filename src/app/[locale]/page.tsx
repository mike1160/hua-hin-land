'use client'

import { useState, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import HomeNavbar from '@/components/HomeNavbar'
import LineButton from '@/components/LineButton'
import { Link } from '@/i18n/navigation'
import { LINE_AGENT_URL, AGENT_PHONE } from '@/lib/contact'

declare global {
  interface Window {
  turnstileCallback?: (token: string) => void
  turnstileErrorCallback?: () => void
}
}

const PHONE = AGENT_PHONE

function isInternalHref(href: string) {
  return (
    href.startsWith('/info') ||
    href.startsWith('/life') ||
    href.startsWith('/nearby') ||
    href.startsWith('/legal') ||
    href.startsWith('/#') ||
    href === '/'
  )
}

function SmartLink({
  href,
  className,
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: React.ReactNode }) {
  if (isInternalHref(href)) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  )
}

const specCards = [
  { href: '/info/size', img: '/photo3.jpg', icon: '📐', labelKey: 'specSize', textKey: 'specSizeText' },
  { href: '/info/chanote', img: '/photo1.jpg', icon: '📜', labelKey: 'specTitle', textKey: 'specTitleText' },
  { href: '/info/view', img: '/photo2.jpg', icon: '🏔️', labelKey: 'specView', textKey: 'specViewText' },
  { href: '/info/terrain', img: '/photo4.jpg', icon: '🚧', labelKey: 'specTerrain', textKey: 'specTerrainText' },
  { href: '/info/water', img: '/photo5.jpg', icon: '💧', labelKey: 'specUtilities', textKey: 'specUtilitiesText' },
  { href: '/info/access', img: '/photo6.jpg', icon: '🛣️', labelKey: 'specAccess', textKey: 'specAccessText' },
]

const whyLinks = ['/info/chanote', '/info/terrain', '/info/water', '/nearby/bluport', '/info/size', '/info/comparable-plots'] as const
const whyKeys = ['why1', 'why2', 'why3', 'why4', 'why5', 'why6'] as const

const lifestyleItems = [
  { icon: '🌅', key: 'lifeRetirees', href: '/life/retirees' },
  { icon: '🎵', key: 'lifeMusic', href: '/life/entertainment' },
  { icon: '⛳', key: 'lifeGolf', href: '/nearby/golf' },
  { icon: '🏖️', key: 'lifeBeach', href: '/nearby/beach' },
  { icon: '🌍', key: 'lifeInternational', href: '/life/schools' },
  { icon: '🏥', key: 'lifeHospital', href: '/nearby/hospital' },
]

const devCards = [
  { href: '/info/live-and-profit', img: '/IMG_7802.JPG', icon: '🏡', titleKey: 'devLiveTitle', descKey: 'devLiveDesc' },
  { href: '/info/boutique-development', img: '/IMG_7807.JPG', icon: '🏗️', titleKey: 'devBoutiqueTitle', descKey: 'devBoutiqueDesc' },
  { href: '/info/private-estate', img: '/IMG_5835.JPG', icon: '🌴', titleKey: 'devEstateTitle', descKey: 'devEstateDesc' },
]

const distanceItems = [
  { icon: '🏪', place: '7-Eleven', time: '4 min', href: '/nearby/seven-eleven', highlight: true },
  { icon: '🛍️', place: 'Bluport Mall', time: '10 min', href: '/nearby/bluport', highlight: false },
  { icon: '🏖️', placeKey: 'distBeach', time: '12 min', href: '/nearby/beach', highlight: false },
  { icon: '🏙️', placeKey: 'distTown', time: '17 min', href: '/nearby/town', highlight: false },
  { icon: '🏥', place: 'Bangkok Hospital', time: '15 min', href: '/nearby/hospital', highlight: false },
  { icon: '⛳', placeKey: 'distGolf', time: '20 min', href: '/nearby/golf', highlight: false },
  { icon: '🌿', placeKey: 'distPark', timeKey: 'distDoorstep', href: '/nearby/national-park', highlight: true },
  { icon: '🏙️', place: 'Bangkok', time: '200 km · 2.5h', href: '/nearby/bangkok', highlight: false },
  { icon: '🌴', place: 'Chumphon', time: '230 km · 3h', href: '/nearby/chumphon', highlight: false },
]

type LifeItem = { label: string; href?: string }

const lifeAroundCards: {
  icon: string
  titleKey: string
  items: LifeItem[]
}[] = [
  {
    icon: '🌿',
    titleKey: 'lifeNature',
    items: [
      { label: 'Thap Tai National Park — doorstep', href: 'https://forevervacation.com/hua-hin/thap-tai-national-park' },
      { label: 'Thap Tai Fitness Park — nearby', href: 'https://thaptaifitnesspark.com/' },
      { label: 'Kaeng Krachan NP — 85 km', href: 'https://en.wikipedia.org/wiki/Kaeng_Krachan_National_Park' },
      { label: 'Khao Sam Roi Yot — 60 km', href: 'https://en.wikipedia.org/wiki/Khao_Sam_Roi_Yot_National_Park' },
      { label: 'Kui Buri (wild elephants) — 85 km', href: 'https://en.wikipedia.org/wiki/Kui_Buri_National_Park' },
      { label: 'Samnaksong Khao Phran Thup — nearby', href: 'https://www.google.com/maps/search/Samnaksong+Khao+Phran+Thup+Hua+Hin' },
      { label: 'Grand Canyon Hua Hin — 5 min', href: 'https://forevervacation.com/hua-hin/hua-hin-grand-canyon' },
      { label: 'Thap Lan NP (UNESCO) — 3-4 hrs', href: '/nearby/nature' },
    ],
  },
  {
    icon: '🍽️',
    titleKey: 'lifeFood',
    items: [
      { label: 'Parrotdise Organic Farm & Cafe ⭐4.8 — 5 min', href: 'https://parrotdisethailand.com' },
      { label: 'Sweetheart Cafe ⭐4.6 — riverside', href: 'https://www.facebook.com/search/top?q=sweetheart%20cafe%20hua%20hin' },
      { label: 'Greenfield Terrace ⭐4.6 — Thap Tai', href: 'https://www.google.com/maps/search/Greenfield+Terrace+Thap+Tai+Hua+Hin' },
      { label: 'Apsara Art & Restaurant ⭐4.9', href: 'https://www.facebook.com/ApsaraAsianArt/' },
      { label: 'White Orchid Restaurant & Bar', href: 'https://www.google.com/maps/search/White+Orchid+Restaurant+Bar+Hua+Hin' },
      { label: 'Hua Hin Night Market — 17 min', href: 'https://www.tripadvisor.com/Attraction_Review-g297922-d12761939-Reviews-Hua_Hin_Night_Market.html' },
    ],
  },
  {
    icon: '🎵',
    titleKey: 'lifeEntertainment',
    items: [
      { label: 'Baan Suang Music — live Thai music', href: 'https://www.facebook.com/search/top?q=baan%20suang%20music%20hua%20hin' },
      { label: 'Mini Golf World ⭐4.9 — glow in dark', href: 'https://www.google.com/maps/search/Mini+Golf+World+Hua+Hin' },
      { label: 'Vana Nava Water Jungle — 10 min', href: 'https://www.vananavahuahin.com' },
      { label: 'Saam Phan Nam Floating Market — 5 min', href: 'https://www.google.com/maps/search/Sam+Phan+Nam+Floating+Market+Hua+Hin' },
      { label: 'Majestic Creek Golf — 5 min', href: '/nearby/golf' },
      { label: 'Cicada Weekend Market', href: 'https://www.facebook.com/cicadamarket' },
      { label: 'Jazz & live music — nightly', href: 'https://www.google.com/maps/search/jazz+live+music+bar+Hua+Hin' },
    ],
  },
  {
    icon: '🧘',
    titleKey: 'lifeWellness',
    items: [
      { label: 'Thai massage centres — Thap Tai', href: 'https://maps.app.goo.gl/search/Thai+massage+Thap+Tai+Hua+Hin' },
      { label: 'Buddha-Metta Meditation Center — nearby', href: '/nearby/meditation' },
      { label: 'Chiva-Som Health Resort', href: 'https://www.chivasom.com/en/chiva-som-hua-hin/' },
      { label: 'Anantara Hua Hin Spa', href: 'https://www.anantara.com/en/hua-hin/spa' },
      { label: 'Bangkok Hospital — 15 min', href: 'https://www.bangkokhospital.com/en/huahin' },
      { label: 'San Paolo Hospital — 17 min', href: 'https://sanpaulo.co.th' },
      { label: 'Parrotdise Organic Farm — 5 min', href: 'https://parrotdisethailand.com' },
    ],
  },
  {
    icon: '🏫',
    titleKey: 'lifeSchools',
    items: [
      { label: "Beaconhouse Yamsaard Int'l School", href: 'https://www.facebook.com/byshuahin' },
      { label: 'The English Centre ⭐5.0', href: 'https://www.google.com/maps/search/The+English+Centre+Hua+Hin' },
      { label: 'Sethavidhya Bilingual School', href: 'https://www.google.com/maps/search/Sethavidhya+Bilingual+School+Hua+Hin' },
      { label: 'Multiple kindergartens — Thap Tai', href: 'https://www.google.com/maps/search/kindergarten+Thap+Tai+Hua+Hin' },
      { label: 'Child-friendly, low-traffic area' },
      { label: 'Active expat family community' },
    ],
  },
  {
    icon: '🔨',
    titleKey: 'lifeShopping',
    items: [
      { label: 'Siwali Building Materials — Thap Tai', href: 'https://www.google.com/maps/search/Siwali+Building+Materials+Thap+Tai+Hua+Hin' },
      { label: 'Makro Food Service — 15 min', href: 'https://www.makro.pro/en' },
      { label: 'Bluport Mall & Market Village — 10 min', href: 'https://www.bluporthuahin.com' },
      { label: '7-Eleven — 4 min from plot', href: 'https://www.7eleven.co.th/' },
      { label: "Lotus's supermarket — 15 min", href: 'https://www.lotuss.com/en' },
      { label: 'Immigration office — 15 min', href: 'https://www.immigration.go.th/' },
    ],
  },
]

const nearbyHighlightCards = [
  { icon: '🏌️', labelKey: 'nearbyGolf', href: '/nearby/golf' },
  { icon: '🧘', labelKey: 'nearbyMeditation', href: '/nearby/meditation' },
  { icon: '🏖️', labelKey: 'nearbyPranburi', href: '/nearby/pranburi' },
  { icon: '⭐', labelKey: 'nearbySon', href: '/nearby/son-resort' },
  { icon: '🚗', labelKey: 'nearbyConnectivity', href: '/nearby/connectivity' },
]

const popularGuides = [
  { href: '/nearby/why-hua-hin', titleKey: 'guideWhy', desc: 'Royal history, golf capital, expat lifestyle' },
  { href: '/life/retirees', titleKey: 'guideRetirees', desc: "Visas, costs, healthcare — the American's guide" },
  { href: 'https://data.hua-hin-land.com', titleKey: 'guideVerify', desc: 'Check ownership, title deeds & company records' },
]

export default function Home() {
  const t = useTranslations('homepage')
  const tc = useTranslations('common')
  const locale = useLocale()
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [slideIndex, setSlideIndex] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [turnstileToken, setTurnstileToken] = useState<string>('')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
    script.async = true
    document.head.appendChild(script)

    window.turnstileCallback = (token: string) => {
      setTurnstileToken(token)
    }
    window.turnstileErrorCallback = () => {
      setTurnstileToken('')
      const el = document.querySelector('.cf-turnstile') as HTMLElement | null
      if (el) el.style.visibility = 'hidden'
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      delete window.turnstileCallback
      delete window.turnstileErrorCallback
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!turnstileToken) {
      alert(t('securityCheck'))
      return
    }
    setFormStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lang: locale, turnstileToken }),
      })
      if (res.ok) {
        setFormStatus('sent')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTurnstileToken('')
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const slides = [
    { src: '/photo2.jpg', captionKey: 'slide1' },
    { src: '/photo1.jpg', captionKey: 'slide2' },
    { src: '/photo3.jpg', captionKey: 'slide3' },
    { src: '/photo4.jpg', captionKey: 'slide4' },
    { src: '/photo5.jpg', captionKey: 'slide5' },
    { src: '/photo6.jpg', captionKey: 'slide6' },
  ]

  return (
    <main className="bg-[#FAF7F0] text-[#1A2744] font-sans overflow-x-hidden">

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white text-5xl font-thin leading-none hover:text-[#C8973A] transition-colors">×</button>
          <img src={lightbox} alt="" className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={e => e.stopPropagation()} />
        </div>
      )}

      <HomeNavbar />

      {/* HERO — fullscreen photo, luxury clean */}
      <section className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'rgba(0,0,0,0.25)'}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 pt-[35vh] pb-24">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs text-white/90 mb-6 font-medium tracking-wide bg-white/20 border border-white/30 backdrop-blur-sm">
            {t('heroBadge')}
          </div>
          <h1
            className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-5 text-white max-w-4xl"
            style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}
          >
            {t('hook')}
          </h1>
          <p
            className="text-white text-base md:text-lg mb-10 tracking-wide font-normal"
            style={{textShadow: '0 1px 8px rgba(0,0,0,0.4)'}}
          >
            {t('sub')}
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <a
              href="mailto:kleinjansmike@gmail.com?subject=Enquiry%20—%20Hua%20Hin%20Soi%20112%20land"
              className="inline-flex items-center justify-center min-h-[52px] font-semibold px-8 py-3.5 rounded-xl text-base md:text-lg transition-all bg-white/15 hover:bg-white/25 text-white border border-white/40 backdrop-blur-sm"
              style={{textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}
            >
              {t('ctaEmail')}
            </a>
          </div>
          <div>
            <a
              href={`tel:${PHONE}`}
              className="text-white text-base md:text-lg font-medium hover:text-white/90 transition-colors underline-offset-4 hover:underline"
              style={{textShadow: '0 1px 4px rgba(0,0,0,0.9)'}}
            >
              {t('ctaCall')}
            </a>
          </div>
          <div className="mt-5 flex flex-col items-start gap-2">
            <LineButton size="sm" />
            <p
              className="text-white/80 text-sm"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}
            >
              Good land YAI · 065-901-2984
            </p>
          </div>
          <p
            className="mt-6 text-white/85 text-sm md:text-base"
            style={{textShadow: '0 1px 4px rgba(0,0,0,0.55)'}}
          >
            {t('learnMorePrefix')}{' '}
            <Link href="/nearby/why-hua-hin" className="text-white underline underline-offset-2 hover:text-[#C8973A] transition-colors">{t('learnWhy')}</Link>
            {' · '}
            <Link href="/life/retirees" className="text-white underline underline-offset-2 hover:text-[#C8973A] transition-colors">{t('learnRetiring')}</Link>
            {' · '}
            <a href="https://data.hua-hin-land.com" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-2 hover:text-[#C8973A] transition-colors">{t('learnVerify')}</a>
          </p>
        </div>
      </section>

      {/* PRICE + VERIFY — below hero */}
      <section className="bg-white border-b border-[#E8E2D6]">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div className="max-w-xl min-w-0">
            <p className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#1A2744]" style={{fontFamily: 'Playfair Display, serif'}}>
              {t('price')}
              <span className="text-base md:text-lg font-sans font-normal text-[#5C5247] ml-2">{t('pricePerRai')}</span>
            </p>
            <p className="text-[#5C5247] text-sm mt-1">
              {t('priceApprox')}
            </p>
            <p className="text-[#5C5247] text-xs mt-3 leading-relaxed">
              {t('partialSaleNote')}
            </p>
            <p className="text-[#5C5247] text-xs mt-2 leading-relaxed">
              <a
                href={LINE_AGENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#06C755] hover:underline underline-offset-2 font-medium"
              >
                {t('partialSaleCta')}
              </a>
            </p>
            <div className="mt-4">
              <LineButton size="sm" />
            </div>
          </div>
          <a
            href="https://data.hua-hin-land.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center self-start font-semibold px-6 py-3 rounded-[12px] text-sm transition-all bg-white border border-[#C8973A] text-[#1A2744] hover:bg-[#F3EEE4] whitespace-nowrap"
          >
            {t('verifyRecords')}
          </a>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="bg-[#FAF7F0] border-b border-[#E8E2D6]">
        <div className="max-w-5xl mx-auto px-6 py-6 grid sm:grid-cols-3 gap-5">
          {[
            { icon: '🏆', titleKey: 'trustFreeholdTitle', descKey: 'trustFreeholdDesc' },
            { icon: '📐', titleKey: 'trustSizeTitle', descKey: 'trustSizeDesc' },
            { icon: '🌏', titleKey: 'trustBangkokTitle', descKey: 'trustBangkokDesc' },
          ].map((item) => (
            <div key={item.titleKey} className="flex items-start gap-3 bg-white p-6 rounded-[12px] min-w-0" style={{ border: '1px solid #E8E2D6' }}>
              <span className="text-2xl leading-none mt-0.5">{item.icon}</span>
              <div className="min-w-0">
                <p className="text-[#1A2744] text-sm font-semibold leading-snug">{t(item.titleKey)}</p>
                <p className="text-[#5C5247] text-xs mt-0.5 leading-snug">{t(item.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <div id="plot-gallery" className="bg-[#FAF7F0] border-y border-[#E8E2D6]">
        <div className="max-w-5xl mx-auto px-6 py-3 text-center text-[#5C5247] text-[11px] sm:text-xs tracking-wide leading-relaxed">
          {t('statsBar')}
        </div>
      </div>

      {/* PHOTO GALLERY — slider (moved up) */}
      <section className="py-10 px-6 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-2 text-[#1A2744]" style={{fontFamily: 'Playfair Display, serif'}}>{t('plotTitle')}</h2>
          <p className="text-[#5C5247] text-sm mb-6">{t('galleryHint')}</p>

          <div className="relative group rounded-2xl overflow-hidden" style={{height: '520px'}}>
            <img
              src={slides[slideIndex].src}
              alt={t(slides[slideIndex].captionKey)}
              className="w-full h-full object-cover cursor-pointer transition-opacity duration-300"
              onClick={() => setLightbox(slides[slideIndex].src)}
            />
            <div className="absolute inset-0 pointer-events-none" style={{background: 'rgba(0,0,0,0.15)'}} />
            <p className="absolute bottom-16 left-6 text-white text-sm" style={{textShadow: '0 1px 4px rgba(0,0,0,0.8)'}}>{t(slides[slideIndex].captionKey)}</p>
            <p className="absolute bottom-6 left-6 text-white/90 text-xs" style={{textShadow: '0 1px 4px rgba(0,0,0,0.8)'}}>{t('galleryEnlarge')} · {slideIndex + 1} / {slides.length}</p>
            <button
              onClick={() => setSlideIndex((slideIndex - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xl hover:bg-[#C8973A]/70 transition-all opacity-0 group-hover:opacity-100"
            >
              ←
            </button>
            <button
              onClick={() => setSlideIndex((slideIndex + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xl hover:bg-[#C8973A]/70 transition-all opacity-0 group-hover:opacity-100"
            >
              →
            </button>
          </div>

          <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${slideIndex === i ? 'border-[#C8973A] opacity-100' : 'border-transparent opacity-50 hover:opacity-80'}`}
              >
                <img src={slide.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <p className="mt-6 text-center text-[#5C5247] text-sm leading-relaxed max-w-2xl mx-auto italic" style={{fontFamily: 'Playfair Display, serif'}}>
            {t('socialProof')}
          </p>
        </div>
      </section>

      <div className="sticky top-16 z-30 bg-[#FAF7F0]/95 border-b border-[#E8E2D6] backdrop-blur-sm overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 py-2.5 text-center text-[#5C5247] text-xs leading-relaxed break-words">
          {t('disclaimerSticky')}{' '}
          <Link href="/legal/disclaimer" className="text-[#A67B2E] hover:text-[#8F6826] hover:underline transition-colors whitespace-nowrap">
            → {t('disclaimerLink')}
          </Link>
        </div>
      </div>

      {/* SPECS — dark cards */}
      <section className="py-16 px-6 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {specCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="relative group overflow-hidden rounded-2xl border border-white/10 hover:border-[#C8973A]/50 transition-all duration-300 cursor-pointer block"
              style={{minHeight: '160px'}}
            >
              <img src={card.img} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
              <div className="absolute inset-0" style={{background: 'rgba(0,0,0,0.35)'}} />
              <div className="relative p-6">
                <div className="text-2xl mb-4 drop-shadow-md">{card.icon}</div>
                <p className="text-[#C8973A] text-xs uppercase tracking-widest mb-1 font-medium" style={{textShadow: '0 1px 3px rgba(0,0,0,0.7)'}}>{t(card.labelKey)}</p>
                <p className="text-white font-semibold text-base leading-snug" style={{textShadow: '0 1px 4px rgba(0,0,0,0.8)'}}>{t(card.textKey)}</p>
                <p className="text-white/90 text-xs mt-3 group-hover:text-[#C8973A] transition-colors" style={{textShadow: '0 1px 3px rgba(0,0,0,0.7)'}}>{t('learnMore')}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* VIDEO — autoplay hero clip */}
      <section className="py-0 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto px-6">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-2xl border border-white/10 max-h-[500px] object-cover"
            style={{objectFit: 'cover'}}
          >
            <source src="/video2.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* VIDEOS — bird's eye */}
      <section className="py-12 px-6 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-8 text-[#1A2744]" style={{fontFamily: 'Playfair Display, serif'}}>{t('birdsEye')}</h2>
          <div className="max-w-2xl mx-auto">
            <video controls className="w-full rounded-2xl border border-white/10" poster="/photo1.jpg">
              <source src="/video1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* LIFESTYLE — fullscreen photo background */}
      <section className="relative min-h-screen flex items-center py-24">
        <div className="absolute inset-0">
          <img src="/lifestyle1.jpg" alt="lifestyle" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.35) 100%)'}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
              <span className="text-white" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>{t('lifestyleTitle')}</span>
            </h2>
            <p className="text-white/90 text-xl leading-relaxed mb-12" style={{textShadow: '0 1px 8px rgba(0,0,0,0.45)'}}>{t('lifestyleSub')}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {lifestyleItems.map((item) => (
                <Link key={item.key} href={item.href} className="group relative block cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 pb-8 hover:bg-white/15 hover:border-white/25 hover:shadow-lg hover:shadow-[#C8973A]/10 transition-all duration-200">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-200">{t(item.key)}</p>
                  <span className="absolute bottom-3 right-3 text-white/30 text-sm group-hover:text-[#C8973A] transition-colors duration-200">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE PHOTO 2 — jazz */}
      <section className="relative h-96 flex items-end pb-12">
        <div className="absolute inset-0">
          <img src="/lifestyle2.jpg" alt="jazz" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to top, #FAF7F0 0%, rgba(0,0,0,0.35) 55%, transparent 100%)'}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-2">{t('nightlifeLabel')}</p>
          <p className="text-white text-2xl font-display italic" style={{fontFamily: 'Playfair Display, serif'}}>&ldquo;{t('nightlifeQuote')}&rdquo;</p>
        </div>
      </section>

      {/* NEIGHBOURHOOD — Botanica, fullscreen */}
      <section className="relative min-h-[80vh] flex items-center py-24">
        <div className="absolute inset-0">
          <img src="/neighbourhood.jpg" alt="neighbourhood" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.22) 35%, rgba(0,0,0,0.1) 65%, transparent 100%)'}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <p className="text-[#C8973A] text-xs uppercase tracking-widest mb-4 font-medium" style={{textShadow: '0 1px 4px rgba(0,0,0,0.55)'}}>{t('neighbourhoodLabel')}</p>
            <h2 className="text-5xl font-display font-bold mb-6 leading-tight text-white" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 16px rgba(0,0,0,0.45)'}}>{t('neighbourTitle')}</h2>
            <p className="text-white/90 text-lg leading-relaxed" style={{textShadow: '0 1px 8px rgba(0,0,0,0.5)'}}>{t('neighbourSub')}</p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 px-6 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-12 text-[#1A2744]" style={{fontFamily: 'Playfair Display, serif'}}>{t('whyTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {whyKeys.map((key, i) => (
              <div key={key} className="flex items-start gap-4 bg-white p-5 hover:border-[#C8973A] transition-all" style={{border: '1px solid #E8E2D6', borderRadius: '12px'}}>
                <span className="w-2 h-2 rounded-full bg-[#C8973A] flex-shrink-0 mt-2"></span>
                <div>
                  <p className="text-[#1A2744]">{t(key)}</p>
                  <Link href={whyLinks[i]} className="inline-block mt-2 text-xs text-[#C8973A] hover:text-[#b8862f] transition-colors">
                    {t('learnMore')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-4 text-[#1A2744]" style={{fontFamily: 'Playfair Display, serif'}}>
            {t('devTitle')}
          </h2>
          <p className="text-[#5C5247] mb-10 leading-relaxed">
            {t('devSub')}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {devCards.map((card) => (
              <Link key={card.href} href={card.href} className="group relative block overflow-hidden rounded-2xl border border-black/8 hover:border-[#C8973A]/50 cursor-pointer hover:shadow-lg hover:shadow-[#C8973A]/10 transition-all duration-200 min-h-[220px]">
                <img src={card.img} alt="" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: 'center center'}} />
                <div className="absolute inset-0" style={{background: 'rgba(0,0,0,0.35)'}} />
                <div className="relative z-10 p-6 pb-10">
                  <div className="text-3xl mb-3 drop-shadow-md">{card.icon}</div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#C8973A] transition-colors duration-200" style={{textShadow: '0 1px 4px rgba(0,0,0,0.8)'}}>
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-white text-sm leading-relaxed" style={{textShadow: '0 1px 3px rgba(0,0,0,0.75)'}}>
                    {t(card.descKey)}
                  </p>
                  <span className="absolute bottom-4 right-4 text-white/80 text-sm group-hover:text-[#C8973A] transition-colors duration-200" style={{textShadow: '0 1px 3px rgba(0,0,0,0.7)'}}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DISTANCES — photo background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt="aerial" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, #FAF7F0 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.35) 82%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 text-white" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)'}}>
            {t('reachTitle')}
          </h2>
          <p className="text-white/85 text-lg mb-14" style={{textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)'}}>{t('reachSub')}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16 animate-stagger">
            {distanceItems.map((d, i) => (
              <Link
                key={i}
                href={d.href}
                className="flex items-center justify-between transition-all hover:scale-105 hover:brightness-110"
                style={{
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                  border: d.highlight ? '1px solid rgba(200,151,58,0.5)' : '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '10px',
                  padding: '8px 14px',
                }}
              >
                <span className="text-white text-sm">{d.icon} {d.placeKey ? t(d.placeKey) : d.place}</span>
                <span className="font-bold text-sm text-[#C8973A]">{d.timeKey ? t(d.timeKey) : d.time}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/seven-eleven.jpg" alt="7-Eleven" className="w-full h-full object-cover" style={{objectPosition: 'center center', filter: 'blur(2px) saturate(1.2)'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, #FAF7F0 0%, rgba(0,0,0,0.35) 20%, rgba(0,0,0,0.35) 80%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-4">{t('sevenLabel')}</p>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>
            {t('sevenTitle')}<br/><span className="text-[#C8973A]">{t('sevenTitleAccent')}</span>
          </h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10" style={{textShadow: '0 1px 8px rgba(0,0,0,0.45)'}}>{t('sevenSub')}</p>
          <Link href="/nearby/seven-eleven" className="inline-flex items-center gap-2 bg-[#C8973A] hover:brightness-110 text-white px-6 py-3 rounded-[12px] transition-all text-sm font-medium">
            {t('sevenCta')}
          </Link>
        </div>
      </section>

      <section id="life-around" className="py-24 px-6 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-display font-semibold text-[#1A2744] mb-8" style={{fontFamily: 'Playfair Display, serif'}}>{t('lifeAroundTitle')}</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {lifeAroundCards.map((card) => (
              <div
                key={card.titleKey}
                className="rounded-[12px] bg-white p-6 hover:border-[#C8973A]/40 transition-all duration-200"
                style={{ border: '1px solid #E8E2D6' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C8973A]/12 flex items-center justify-center text-xl">{card.icon}</div>
                  <h4 className="text-[#1A2744] font-semibold text-base">{t(card.titleKey)}</h4>
                </div>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item.label} className="flex items-start gap-2 text-sm">
                      {item.href ? (
                        <>
                          <span className="text-[#C8973A] mt-0.5 flex-shrink-0">›</span>
                          <SmartLink
                            href={item.href}
                            {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="text-[#C8973A] hover:text-[#b8862f] hover:underline cursor-pointer transition-colors"
                          >
                            {item.label}
                          </SmartLink>
                        </>
                      ) : (
                        <span className="text-[#5C5247] pl-0">{item.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
            {nearbyHighlightCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative block cursor-pointer bg-white rounded-[12px] p-6 hover:border-[#C8973A]/40 transition-all duration-200"
                style={{ border: '1px solid #E8E2D6' }}
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <p className="text-[#1A2744] text-sm font-medium group-hover:text-[#C8973A] transition-colors duration-200 leading-snug">{t(card.labelKey)}</p>
                <span className="absolute bottom-3 right-3 text-[#5C5247] text-sm group-hover:text-[#C8973A] transition-colors duration-200">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular guides — SEO / internal links */}
      <section className="py-16 px-6 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-[#1A2744]" style={{fontFamily: 'Playfair Display, serif'}}>
            {t('popularGuidesTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {popularGuides.map((card) => (
              <SmartLink
                key={card.href}
                href={card.href}
                className="group block bg-white p-6 transition-all hover:border-[#C8973A]/40"
                style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
              >
                <h3 className="text-[#1A2744] font-semibold text-lg mb-2 group-hover:text-[#C8973A] transition-colors">
                  {t(card.titleKey)}
                </h3>
                <p className="text-[#5C5247] text-sm leading-relaxed mb-4">{card.desc}</p>
                <span className="text-[#C8973A] text-sm font-medium">Read more →</span>
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="contact" className="py-16 px-6 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-2 text-[#1A2744]" style={{fontFamily: 'Playfair Display, serif'}}>{t('mapTitle')}</h2>
          <p className="text-[#5C5247] text-base leading-relaxed mb-6 max-w-3xl">Situated on a quiet access road directly off Route 2004 (Soi 112), this plot sits in one of Hua Hin&apos;s last remaining open green corridors — surrounded by nature yet connected to everything. To the northeast, the Sam Phan Nam reservoir and floating market are within walking distance. To the west, Siwali building supplies and the main road to Hua Hin centre. The plot itself is flat, unfenced, and unobstructed — a rare open canvas in a rapidly developing area.</p>
          <div className="rounded-[12px] overflow-hidden border border-[#E8E2D6] shadow-sm" style={{height: '420px'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d99.9073267!3d12.4751699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI4JzMwLjYiTiA5OcKwNTQnMjYuNCJF!5e1!3m2!1sen!2sth!4v1234567890"
              width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Location" />
          </div>
          <div className="mt-4 flex gap-3">
            <a href="https://www.google.com/maps?q=12.4751699,99.9073267" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C8973A] hover:brightness-110 text-white px-5 py-2.5 rounded-[12px] text-sm font-semibold transition-all">
              📍 Open in Google Maps
            </a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=12.4751699,99.9073267" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-[#C8973A] hover:bg-[#F3EEE4] text-[#1A2744] px-5 py-2.5 rounded-[12px] text-sm font-semibold transition-all">
              🧭 Get directions
            </a>
          </div>
          <div className="mt-8">
            <div className="bg-white p-6 shadow-sm" style={{ border: '1px solid #E8E2D6', borderRadius: '16px' }}>
              <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-1">{t('contactTitle')}</p>
              <h3 className="text-[#1A2744] text-xl font-semibold mb-4">Request more information</h3>
              {formStatus === 'sent' ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">✅</div>
                  <p className="text-[#1A2744] font-medium">{t('contactSent')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder={`${t('contactName')} *`}
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white rounded-xl px-4 py-3 text-[#1A2744] placeholder:text-[#1A2744]/55 text-sm focus:outline-none focus:border-[#C8973A] transition-all"
                    style={{ border: '1px solid #E8E2D6' }}
                  />
                  <input
                    type="email"
                    placeholder={`${t('contactEmail')} *`}
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white rounded-xl px-4 py-3 text-[#1A2744] placeholder:text-[#1A2744]/55 text-sm focus:outline-none focus:border-[#C8973A] transition-all"
                    style={{ border: '1px solid #E8E2D6' }}
                  />
                  <input
                    type="tel"
                    placeholder={t('contactPhone')}
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white rounded-xl px-4 py-3 text-[#1A2744] placeholder:text-[#1A2744]/55 text-sm focus:outline-none focus:border-[#C8973A] transition-all"
                    style={{ border: '1px solid #E8E2D6' }}
                  />
                  <textarea
                    placeholder={t('contactMessage')}
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white rounded-xl px-4 py-3 text-[#1A2744] placeholder:text-[#1A2744]/55 text-sm focus:outline-none focus:border-[#C8973A] transition-all resize-none"
                    style={{ border: '1px solid #E8E2D6' }}
                  />
                  {formStatus === 'error' && (
                    <p className="text-red-600 text-xs">{t('contactError')}</p>
                  )}
                  <p className="text-[#5C5247] text-xs text-center leading-relaxed">
                    {t('contactConfirm')}{' '}
                    <Link href="/legal/disclaimer" className="text-[#A67B2E] hover:text-[#8F6826] hover:underline transition-colors">
                      {t('contactDisclaimerPhrase')}
                    </Link>
                    .
                  </p>
                  <div
                    className="cf-turnstile"
                    data-sitekey="0x4AAAAADwcB6k73kTycYDr"
                    data-callback="turnstileCallback"
                    data-error-callback="turnstileErrorCallback"
                    data-theme="light"
                  ></div>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full disabled:opacity-50 text-white font-bold py-3.5 rounded-[12px] transition-all text-sm hover:brightness-110"
                    style={{background: '#C8973A'}}
                  >
                    {formStatus === 'sending' ? t('contactSending') : `${t('contactSend')} →`}
                  </button>
                  <p className="text-[#5C5247] text-xs text-center pt-2">{tc('lineNote')}</p>
                </form>
              )}
              <div className="mt-6 flex flex-col items-center gap-2 border-t border-[#E8E2D6] pt-6">
                <LineButton size="sm" />
                <p className="text-[#5C5247] text-sm text-center">Good land YAI · 065-901-2984</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — photo background */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="sunset cta" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'rgba(0,0,0,0.35)'}} />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight text-white" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>
            {t('finalHook')}
          </h2>
          <p className="text-white/90 text-lg mb-10 leading-relaxed" style={{textShadow: '0 1px 8px rgba(0,0,0,0.45)'}}>{t('urgency')}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <LineButton size="lg" className="rounded-[12px]" />
            <a
              href="mailto:kleinjansmike@gmail.com?subject=Enquiry%20—%20Hua%20Hin%20Soi%20112%20land"
              className="inline-flex items-center justify-center min-h-[52px] font-semibold px-8 py-3.5 rounded-[12px] text-lg transition-all bg-white text-[#1A2744] border border-[#C8973A]"
            >
              {t('ctaEmail')}
            </a>
          </div>
          <a href={`tel:${PHONE}`} className="inline-block text-white text-sm hover:text-white/90 underline-offset-4 hover:underline mb-8" style={{textShadow: '0 1px 3px rgba(0,0,0,0.8)'}}>
            {t('ctaCall')}
          </a>
          <div className="mt-4">
            <p className="text-3xl font-display font-bold text-white" style={{fontFamily: 'Playfair Display, serif'}}>
              {t('price')} <span className="text-lg font-normal text-white/50">{t('pricePerRai')}</span>
            </p>
            <p className="text-white/50 text-sm mt-2">Total (4 rai 2 ngan): ฿ 10,350,000 — approx. €270,000 · ≈ $285,000</p>
            <p className="text-white/40 text-xs mt-1">≈ $63,000/rai · ≈ $285,000 total</p>
          </div>
        </div>
      </section>

      <footer>
        {/* Donation banner */}
        <div className="border-t border-[#E8E2D6] bg-[#FAF7F0]">
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-[#1A2744] font-semibold text-lg mb-1">
                🐾 Give hope to street dogs in Thailand
              </p>
              <p className="text-[#5C5247] text-sm">
                Support Saved Souls Foundation — every donation makes a difference
              </p>
            </div>
            <a
              href="https://www.savedsouls-foundation.org/en/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-white font-bold px-8 py-3 rounded-[12px] transition-all hover:brightness-110 text-sm whitespace-nowrap"
              style={{background: '#C8973A'}}
            >
              ❤️ Donate now
            </a>
          </div>
        </div>

        {/* Sitemap footer */}
        <div className="bg-[#1A2744] text-white overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="min-w-0">
              <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-4">{t('footerPlot')}</p>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/info/size" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerSize')}</Link></li>
                <li><Link href="/info/terrain" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerTerrain')}</Link></li>
                <li><Link href="/info/access" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerLocation')}</Link></li>
                <li><Link href="/info/comparable-plots" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerComparable')}</Link></li>
              </ul>
            </div>
            <div className="min-w-0">
              <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-4">{t('footerArea')}</p>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/nearby/why-hua-hin" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerWhy')}</Link></li>
                <li><Link href="/life/european-retirees" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerRetiringEuropeans')}</Link></li>
                <li><Link href="/life/retirees" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerRetiringAmericans')}</Link></li>
                <li><Link href="/life/dutch" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerDutch')}</Link></li>
                <li><Link href="/life/german" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerGerman')}</Link></li>
                <li><Link href="/life/swedish" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerSwedish')}</Link></li>
                <li><Link href="/life/danish" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerDanish')}</Link></li>
                <li><Link href="/life/scandinavians" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerScandinavians')}</Link></li>
                <li><Link href="/life/british" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerBritish')}</Link></li>
                <li><Link href="/nearby/golf" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerGolf')}</Link></li>
                <li><Link href="/nearby/beach" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerBeaches')}</Link></li>
                <li><Link href="/nearby/meditation" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerWellness')}</Link></li>
                <li><Link href="/life/schools" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerSchools')}</Link></li>
                <li><Link href="/nearby/connectivity" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerBangkok')}</Link></li>
              </ul>
            </div>
            <div className="min-w-0">
              <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-4">{t('footerResources')}</p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="https://data.hua-hin-land.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#C8973A] transition-colors">
                    {t('footerVerify')}
                  </a>
                </li>
                <li><Link href="/legal/disclaimer" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerDisclaimer')}</Link></li>
                <li><Link href="/legal/privacy" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerPrivacy')}</Link></li>
                <li><Link href="/#contact" className="text-white/80 hover:text-[#C8973A] transition-colors">{t('footerContact')}</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-white/50 text-sm">
                  Thap Tai, Soi 112, Hua Hin, Prachuap Khiri Khan 77110, Thailand<br/>
                  <span className="text-white/40 text-xs">
                    <a href={`tel:${PHONE}`} className="hover:text-[#C8973A] transition-colors">065-901-2984</a>
                  </span>
                </p>
                <div className="mt-3 flex flex-col items-center md:items-start gap-2">
                  <LineButton size="sm" />
                  <p className="text-white/50 text-sm">Good land YAI · 065-901-2984</p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
                <a href="https://allesis.nl" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-[#C8973A] transition-colors">
                  Webdesign by <span className="text-[#C8973A] font-medium">Allesis.nl</span>
                </a>
                <p className="text-white/40 text-xs">
                  Websites · SEO · Apps —{' '}
                  <a href="https://allesis.nl" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8973A] transition-colors underline underline-offset-2">
                    allesis.nl
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
