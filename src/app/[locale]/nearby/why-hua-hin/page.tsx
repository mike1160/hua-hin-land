'use client'

import { useTranslations } from 'next-intl'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import { Link } from '@/i18n/navigation'
import { AGENT_PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/contact'

const PLOT_LAT = 12.4751699
const PLOT_LNG = 99.9073267
const BANGKOK_LAT = 13.7563
const BANGKOK_LNG = 100.5018
const MAPS_DIRECTIONS_EMBED = `https://maps.google.com/maps?saddr=${PLOT_LAT},${PLOT_LNG}&daddr=${BANGKOK_LAT},${BANGKOK_LNG}&hl=en&z=8&output=embed`

const GOLF_COURSE_HREFS = [
  'https://www.royalhuahingolf.com',
  'https://www.blackmountainhuahin.com',
  'https://www.majesticcreekcc.com',
] as const

function ExtLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-[#C8973A] hover:text-[#d4a84f] transition-colors underline-offset-2 hover:underline ${className}`}
    >
      {children}
    </a>
  )
}

export default function WhyHuaHinPage() {
  const t = useTranslations('whyHuaHin')
  const tc = useTranslations('common')

  const golfStats = [
    { value: t('golf.stat1Value'), label: t('golf.stat1Label') },
    { value: t('golf.stat2Value'), label: t('golf.stat2Label') },
    { value: t('golf.stat3Value'), label: t('golf.stat3Label') },
    { value: t('golf.stat4Value'), label: t('golf.stat4Label') },
  ]

  const golfCourses = [
    { name: t('golf.courseRoyalName'), note: t('golf.courseRoyalNote'), href: GOLF_COURSE_HREFS[0] },
    { name: t('golf.courseBlackName'), note: t('golf.blackMountain'), href: GOLF_COURSE_HREFS[1] },
    { name: t('golf.courseMajesticName'), note: t('golf.majesticCreek'), href: GOLF_COURSE_HREFS[2] },
  ]

  const locationStats = [
    { value: t('location.stat1Value'), label: t('location.stat1'), detail: t('location.stat1Detail') },
    { value: t('location.stat2Value'), label: t('location.stat2'), detail: t('location.stat2Detail') },
    { value: t('location.stat3Value'), label: t('location.stat3'), detail: t('location.stat3Detail') },
  ]

  const howToGetThere = [
    { title: t('location.carTitle'), body: t('location.carBody') },
    { title: t('location.trainTitle'), body: t('location.trainBody') },
    { title: t('location.busTitle'), body: t('location.busBody') },
    { title: t('location.airTitle'), body: t('location.airBody') },
  ]

  const airportStats = [
    { value: t('airport.stat1Value'), label: t('airport.stat1') },
    { value: t('airport.stat2Value'), label: t('airport.stat2') },
    { value: t('airport.stat3Value'), label: t('airport.stat3') },
    { value: t('airport.stat4Value'), label: t('airport.stat4') },
  ]

  const trainStats = [
    { value: t('train.stat1Value'), label: t('train.stat1') },
    { value: t('train.stat2Value'), label: t('train.stat2') },
    { value: t('train.stat3Value'), label: t('train.stat3') },
    { value: t('train.stat4Value'), label: t('train.stat4') },
  ]

  const phuketPoints = [
    t('quiet.phuket1'),
    t('quiet.phuket2'),
    t('quiet.phuket3'),
    t('quiet.phuket4'),
    t('quiet.phuket5'),
  ]

  const huaHinPoints = [
    t('quiet.huaHin1'),
    t('quiet.huaHin2'),
    t('quiet.huaHin3'),
    t('quiet.huaHin4'),
    t('quiet.huaHin5'),
  ]

  const expatStats = [
    { value: t('expats.stat1Value'), label: t('expats.stat1Label') },
    { value: t('expats.stat2Value'), label: t('expats.stat2Label') },
    { value: t('expats.stat3Value'), label: t('expats.stat3Label') },
  ]

  const investmentPoints = [
    { title: t('investment.point1Title'), body: t('investment.point1Body') },
    { title: t('investment.point2Title'), body: t('investment.point2Body') },
    { title: t('investment.point3Title'), body: t('investment.point3Body') },
    { title: t('investment.point4Title'), body: t('investment.point4Body') },
  ]

  const glanceItems = [
    t('location.glanceCar'),
    t('location.glanceTrain'),
    t('location.glanceBus'),
    t('location.glanceAir'),
    t('location.glanceBkk'),
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/photo2.jpg"
            alt={t('heroAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 42%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(26,39,68,0.92) 0%, rgba(26,39,68,0.45) 45%, rgba(26,39,68,0.25) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-16 md:pb-24 pt-28 why-hero-in">
          <Link
            href="/"
            className="text-[#C8973A] text-xs mb-8 inline-block hover:text-[#d4a84f] transition-colors"
          >
            {tc('backToListing')}
          </Link>
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.25em] font-medium mb-4 why-hero-in-delay-1">
            {t('hero.eyebrow')}
          </p>
          <h1
            className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl why-hero-in-delay-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('hero.headline')}
          </h1>
          <p className="text-white/85 text-base md:text-xl leading-relaxed mt-6 max-w-2xl why-hero-in-delay-3">
            {t('hero.subtext')}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-xs md:text-sm text-white/70 why-hero-in-delay-3">
            <Link href="/nearby/golf" className="hover:text-[#C8973A] transition-colors">
              {t('hero.linkGolf')}
            </Link>
            <Link href="/nearby/beach" className="hover:text-[#C8973A] transition-colors">
              {t('hero.linkBeaches')}
            </Link>
            <Link href="/life/retirees" className="hover:text-[#C8973A] transition-colors">
              {t('hero.linkRetiring')}
            </Link>
            <Link href="/info/size" className="hover:text-[#C8973A] transition-colors">
              {t('hero.linkPlot')}
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/neighbourhood.jpg"
            alt={t('royalAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(250,247,240,0.97) 0%, rgba(250,247,240,0.92) 48%, rgba(250,247,240,0.55) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('royal.label')}</p>
            <h2
              className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t('royal.headline')}
            </h2>
            <div className="space-y-4 text-[#5C5247] text-sm md:text-base leading-relaxed">
              <p>{t('royal.body')}</p>
              <p>{t('royal.body3')}</p>
              <p>{t('royal.body2')}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <ExtLink href="https://www.lovethailand.org" className="text-sm font-semibold no-underline hover:underline">
                {t('royal.link')}
              </ExtLink>
              <ExtLink href="https://www.tourismthailand.org" className="text-sm">
                {t('royal.linkTat')}
              </ExtLink>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1A2744]">
        <div className="absolute inset-0 opacity-35">
          <img
            src="/photo3.jpg"
            alt={t('golfAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 45%' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A2744]/80 via-[#1A2744]/90 to-[#1A2744]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('golf.label')}</p>
          <h2
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('golf.headline')}
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-3xl mb-10">{t('golf.body')}</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
            {golfStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-[12px] p-5 md:p-6 text-center"
              >
                <p className="text-[#C8973A] text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </p>
                <p className="text-white/70 text-xs mt-2 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {golfCourses.map((course) => (
              <a
                key={course.name}
                href={course.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#FAF7F0] rounded-[12px] p-5 hover:bg-white transition-colors group"
              >
                <p className="text-[#1A2744] font-semibold text-sm group-hover:text-[#C8973A] transition-colors">
                  {course.name}
                </p>
                <p className="text-[#5C5247] text-xs mt-2 leading-relaxed">{course.note}</p>
                <p className="text-[#C8973A] text-xs mt-3 font-medium">{t('golf.courseSite')}</p>
              </a>
            ))}
          </div>

          <Link href="/nearby/golf" className="inline-block text-[#C8973A] hover:text-[#d4a84f] text-sm font-medium transition-colors">
            {t('golf.link')}
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('location.label')}</p>
        <h2
          className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {t('location.headline')}
        </h2>
        <p className="text-[#5C5247] text-sm md:text-base leading-relaxed max-w-3xl mb-10">{t('location.body')}</p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {locationStats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-[16px] border border-[#E8E2D6] bg-white p-8 min-h-[160px] flex flex-col justify-end"
            >
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #C8973A 0%, transparent 55%)' }}
              />
              <p className="relative text-[#C8973A] text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                {stat.value}
              </p>
              <p className="relative text-[#1A2744] font-semibold text-sm mt-2">{stat.label}</p>
              <p className="relative text-[#5C5247] text-xs mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {howToGetThere.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#E8E2D6] rounded-[12px] p-5 md:p-6"
              style={{ borderLeftWidth: 3, borderLeftColor: '#C8973A' }}
            >
              <h3 className="text-[#1A2744] font-semibold text-sm mb-2">{item.title}</h3>
              <p className="text-[#5C5247] text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-6 mb-8">
          <div className="lg:col-span-3 overflow-hidden rounded-[16px] border border-[#E8E2D6] bg-white">
            <div className="h-[320px] md:h-[380px]">
              <iframe
                src={MAPS_DIRECTIONS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('mapsTitle')}
              />
            </div>
            <p className="text-[#5C5247] text-xs px-4 py-3 border-t border-[#E8E2D6]">
              {t('mapsCaption')} · {PLOT_LAT}, {PLOT_LNG}
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white border border-[#E8E2D6] rounded-[16px] p-6 h-full">
              <h3 className="text-[#1A2744] font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                {t('location.glanceTitle')}
              </h3>
              <ul className="space-y-3 text-sm text-[#5C5247] leading-relaxed">
                {glanceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href="/nearby/connectivity"
                className="inline-block mt-5 text-[#C8973A] hover:text-[#d4a84f] text-sm font-medium transition-colors"
              >
                {t('location.link')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1A2744]">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/photo6.jpg"
            alt={t('airportAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A2744]/85 via-[#1A2744]/92 to-[#1A2744]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('airport.label')}</p>
          <h2
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('airport.headline')}
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-3xl mb-10">{t('airport.body')}</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
            {airportStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-[12px] p-5 md:p-6 text-center"
              >
                <p className="text-[#C8973A] text-xl md:text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </p>
                <p className="text-white/70 text-xs mt-2 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>

          <ExtLink href="https://www.airports.go.th" className="text-sm font-medium text-[#C8973A]">
            {t('airport.link')}
          </ExtLink>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('train.label')}</p>
        <h2
          className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {t('train.headline')}
        </h2>
        <div className="space-y-4 text-[#5C5247] text-sm md:text-base leading-relaxed max-w-3xl mb-10">
          <p>{t('train.body')}</p>
          <p>{t('train.body2')}</p>
          <p>{t('train.body3')}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
          {trainStats.map((stat) => (
            <div key={stat.label} className="bg-white border border-[#E8E2D6] rounded-[12px] p-5 md:p-6 text-center">
              <p className="text-[#C8973A] text-xl md:text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                {stat.value}
              </p>
              <p className="text-[#5C5247] text-xs mt-2 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <ExtLink href="https://www.railway.co.th" className="font-medium">
            {t('train.link')}
          </ExtLink>
          <Link href="/nearby/connectivity" className="text-[#C8973A] hover:text-[#d4a84f] font-medium transition-colors">
            {t('train.linkMore')}
          </Link>
        </div>
      </section>

      <section className="bg-[#1A2744] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('quiet.label')}</p>
          <h2
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('quiet.headline')}
          </h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mb-4">{t('quiet.intro')}</p>
          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mb-12">{t('quiet.body')}</p>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="rounded-[16px] border border-white/10 bg-white/5 p-6 md:p-8">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-2">{t('quiet.phuketTitle')}</p>
              <h3 className="text-white text-xl font-semibold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
                {t('quiet.phuketSubtitle')}
              </h3>
              <ul className="space-y-3">
                {phuketPoints.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/65 leading-relaxed">
                    <span className="text-red-400 flex-shrink-0">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-[16px] border p-6 md:p-8"
              style={{
                background: 'linear-gradient(160deg, rgba(200,151,58,0.18) 0%, rgba(250,247,240,0.08) 100%)',
                borderColor: 'rgba(200,151,58,0.45)',
              }}
            >
              <p className="text-[#C8973A] text-xs uppercase tracking-widest mb-2">{t('quiet.huaHinTitle')}</p>
              <h3 className="text-white text-xl font-semibold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
                {t('quiet.huaHinSubtitle')}
              </h3>
              <ul className="space-y-3">
                {huaHinPoints.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/90 leading-relaxed">
                    <span className="text-[#C8973A] flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-white/55 text-xs mt-8 max-w-3xl leading-relaxed">
            {t('quiet.nomineeNote')}{' '}
            <Link href="/info/nominee-crackdown" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors">
              {t('quiet.nomineeLink')}
            </Link>
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lifestyle2.jpg"
            alt={t('expatAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 35%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(250,247,240,0.97) 0%, rgba(250,247,240,0.9) 50%, rgba(250,247,240,0.55) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28">
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('expats.label')}</p>
          <h2
            className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-2xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('expats.headline')}
          </h2>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed max-w-2xl mb-4">{t('expats.body')}</p>
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed max-w-2xl mb-10">{t('expats.body2')}</p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-3xl">
            {expatStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/90 border border-[#E8E2D6] rounded-[12px] p-6 text-center backdrop-blur-sm"
              >
                <p className="text-[#C8973A] text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </p>
                <p className="text-[#5C5247] text-xs mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <Link href="/life/retirees" className="text-[#C8973A] hover:text-[#d4a84f] font-medium transition-colors">
              {t('expats.linkRetirees')}
            </Link>
            <Link href="/life/european-retirees" className="text-[#C8973A] hover:text-[#d4a84f] font-medium transition-colors">
              {t('expats.linkEuropeans')}
            </Link>
            <Link href="/life/scandinavians" className="text-[#C8973A] hover:text-[#d4a84f] font-medium transition-colors">
              {t('expats.linkScandinavians')}
            </Link>
            <ExtLink href="https://www.internations.org/hua-hin-expats">{t('expats.linkInternations')}</ExtLink>
            <Link href="/nearby/beach" className="text-[#C8973A] hover:text-[#d4a84f] font-medium transition-colors">
              {t('expats.linkBeaches')}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-3">{t('investment.label')}</p>
            <h2
              className="text-[#1A2744] text-3xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t('investment.headline')}
            </h2>
            <p className="text-[#5C5247] text-sm md:text-base leading-relaxed mb-6">{t('investment.body')}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/info/comparable-plots" className="text-[#C8973A] hover:text-[#d4a84f] font-medium transition-colors">
                {t('investment.link')}
              </Link>
              <Link href="/info/nominee-crackdown" className="text-[#C8973A] hover:text-[#d4a84f] font-medium transition-colors">
                {t('investment.linkNominee')}
              </Link>
              <Link href="/info/size" className="text-[#C8973A] hover:text-[#d4a84f] font-medium transition-colors">
                {t('investment.linkSize')}
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            {investmentPoints.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#E8E2D6] rounded-[12px] p-5 md:p-6"
                style={{ borderLeftWidth: 3, borderLeftColor: '#C8973A' }}
              >
                <h3 className="text-[#1A2744] font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-[#5C5247] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 relative overflow-hidden rounded-[16px] border border-[#E8E2D6]">
          <img src="/satellite.png" alt={t('investmentAlt')} className="w-full h-48 md:h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2744]/80 to-transparent" />
          <p className="absolute bottom-4 left-5 right-5 text-white text-sm md:text-base font-medium">
            {t('investment.caption')}
          </p>
        </div>
      </section>

      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/photo2.jpg"
            alt={t('ctaAlt')}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 50%' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(26,39,68,0.88) 0%, rgba(26,39,68,0.55) 100%)' }}
          />
        </div>
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20 text-center">
          <h2
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('cta.headline')}
          </h2>
          <p className="text-white/75 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">{t('cta.sub')}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-8 rounded-[12px] text-base font-semibold text-[#1A2744] transition-all hover:brightness-110"
              style={{ background: '#C8973A' }}
            >
              {t('cta.buttonWhatsApp')} {AGENT_PHONE_DISPLAY}
            </a>
            <LineButton size="lg" />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm">
            <Link href="/info/size" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors font-medium">
              {t('cta.buttonPlot')}
            </Link>
            <a
              href="https://data.hua-hin-land.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#C8973A] transition-colors"
            >
              {t('cta.buttonVerify')}
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <DisclaimerFooter />
        <div className="text-center pt-4">
          <Link href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">
            {tc('backFooter')}
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes whyFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .why-hero-in { animation: whyFadeUp 0.7s ease-out both; }
        .why-hero-in-delay-1 { animation: whyFadeUp 0.7s ease-out 0.12s both; }
        .why-hero-in-delay-2 { animation: whyFadeUp 0.85s ease-out 0.22s both; }
        .why-hero-in-delay-3 { animation: whyFadeUp 0.85s ease-out 0.38s both; }
      `}</style>
    </main>
  )
}
