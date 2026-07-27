'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'

type Crumb = {
  labelKey: string
  href?: string
}

const PAGE_TITLE_KEYS: Record<string, string> = {
  // info
  size: 'pages.size',
  chanote: 'pages.chanote',
  'chanote-vs-nor-sor': 'pages.chanoteVsNorSor',
  terrain: 'pages.terrain',
  view: 'pages.view',
  water: 'pages.water',
  access: 'pages.access',
  'live-and-profit': 'pages.liveAndProfit',
  'boutique-development': 'pages.boutiqueDevelopment',
  'private-estate': 'pages.privateEstate',
  'comparable-plots': 'pages.comparablePlots',
  'partial-sale': 'pages.partialSale',
  'foreign-buyers': 'pages.foreignBuyers',
  'soi-112': 'pages.soi112',
  'nominee-crackdown': 'pages.nomineeCrackdown',
  // nearby
  'why-hua-hin': 'pages.whyHuaHin',
  golf: 'pages.golf',
  beach: 'pages.beach',
  connectivity: 'pages.connectivity',
  hospital: 'pages.hospital',
  meditation: 'pages.meditation',
  'seven-eleven': 'pages.sevenEleven',
  bangkok: 'pages.bangkok',
  bluport: 'pages.bluport',
  chumphon: 'pages.chumphon',
  'market-village': 'pages.marketVillage',
  'national-park': 'pages.nationalPark',
  nature: 'pages.nature',
  pranburi: 'pages.pranburi',
  'son-resort': 'pages.sonResort',
  town: 'pages.town',
  // life
  retirees: 'pages.retirees',
  'usa-retirees': 'pages.retirees',
  'european-retirees': 'pages.europeanRetirees',
  dutch: 'pages.dutch',
  german: 'pages.german',
  swedish: 'pages.swedish',
  danish: 'pages.danish',
  british: 'pages.british',
  scandinavians: 'pages.scandinavians',
  entertainment: 'pages.entertainment',
  schools: 'pages.schools',
  health: 'pages.health',
  // top-level
  listings: 'pages.listings',
  'list-property': 'pages.listProperty',
  faq: 'pages.faq',
  privacy: 'pages.privacy',
  disclaimer: 'pages.disclaimer',
}

function humanize(slug: string): string {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function buildCrumbs(pathname: string): Crumb[] {
  const segments = pathname.split('/').filter(Boolean)
  const crumbs: Crumb[] = [{ labelKey: 'home', href: '/' }]

  if (segments.length === 0) {
    return crumbs
  }

  const [section, ...rest] = segments
  const pageSlug = rest[0] || section

  if (section === 'listings') {
    crumbs.push({ labelKey: 'pages.listings' })
    return crumbs
  }

  if (section === 'list-property') {
    crumbs.push({ labelKey: 'pages.listProperty' })
    return crumbs
  }

  if (section === 'faq') {
    crumbs.push({ labelKey: 'pages.faq' })
    return crumbs
  }

  if (section === 'privacy' || (section === 'legal' && pageSlug === 'privacy')) {
    crumbs.push({ labelKey: 'pages.privacy' })
    return crumbs
  }

  if (section === 'disclaimer' || (section === 'legal' && pageSlug === 'disclaimer')) {
    crumbs.push({ labelKey: 'pages.disclaimer' })
    return crumbs
  }

  if (section === 'info') {
    crumbs.push({ labelKey: 'plotInfo', href: '/' })
    if (rest[0]) {
      crumbs.push({
        labelKey: PAGE_TITLE_KEYS[rest[0]] || rest[0],
      })
    }
    return crumbs
  }

  if (section === 'nearby') {
    crumbs.push({ labelKey: 'theRegion', href: '/' })
    if (rest[0]) {
      crumbs.push({
        labelKey: PAGE_TITLE_KEYS[rest[0]] || rest[0],
      })
    }
    return crumbs
  }

  if (section === 'life') {
    crumbs.push({ labelKey: 'forYou', href: '/' })
    if (rest[0]) {
      crumbs.push({
        labelKey: PAGE_TITLE_KEYS[rest[0]] || rest[0],
      })
    }
    return crumbs
  }

  // Fallback: Home › Page
  crumbs.push({
    labelKey: PAGE_TITLE_KEYS[section] || section,
  })
  return crumbs
}

function resolveLabel(
  t: (key: string) => string,
  labelKey: string
): string {
  if (
    labelKey === 'home' ||
    labelKey === 'plotInfo' ||
    labelKey === 'theRegion' ||
    labelKey === 'forYou' ||
    labelKey.startsWith('pages.')
  ) {
    return t(labelKey)
  }
  if (PAGE_TITLE_KEYS[labelKey]) {
    return t(PAGE_TITLE_KEYS[labelKey])
  }
  return humanize(labelKey)
}

type Props = {
  className?: string
}

export default function BreadcrumbNav({ className = '' }: Props) {
  const t = useTranslations('breadcrumb')
  const tn = useTranslations('navigation')
  const pathname = usePathname()
  const crumbs = buildCrumbs(pathname)

  const parent = crumbs.length >= 2 ? crumbs[crumbs.length - 2] : crumbs[0]
  const parentLabel = resolveLabel(t, parent.labelKey)
  const parentHref = parent.href || '/'

  return (
    <nav
      aria-label="Breadcrumb"
      className={`sticky top-0 z-40 w-full bg-stone-50 border-b border-stone-200 ${className}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex-shrink-0 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1A2744] hover:text-amber-600 transition-colors"
        >
          {tn('brandTitle')}
        </Link>

        {/* Desktop trail */}
        <ol className="hidden sm:flex items-center gap-1.5 text-xs text-stone-500 min-w-0 flex-wrap justify-end">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1
            const label = resolveLabel(t, crumb.labelKey)

            return (
              <li key={`${crumb.labelKey}-${index}`} className="flex items-center gap-1.5 min-w-0">
                {index > 0 && (
                  <span className="text-stone-300 select-none" aria-hidden>
                    ›
                  </span>
                )}
                {isLast || !crumb.href ? (
                  <span
                    className={`truncate ${isLast ? 'text-stone-700 font-medium' : 'text-stone-500'}`}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {label}
                  </span>
                ) : (
                  <Link href={crumb.href} className="truncate hover:text-amber-600 transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>

        {/* Mobile: parent only */}
        <Link
          href={parentHref}
          className="sm:hidden inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-amber-600 transition-colors"
        >
          <span aria-hidden>←</span>
          <span className="truncate max-w-[50vw]">{parentLabel}</span>
        </Link>
      </div>
    </nav>
  )
}
