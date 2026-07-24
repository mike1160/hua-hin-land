'use client'

import { useEffect, useId, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import LanguageSwitcher from './LanguageSwitcher'

type NavItem = { labelKey: string; href: string }

type NavGroup = { labelKey: string; items: NavItem[] }

const navGroups: NavGroup[] = [
  {
    labelKey: 'plotMenu',
    items: [
      { labelKey: 'plot.size', href: '/info/size' },
      { labelKey: 'plot.terrain', href: '/info/terrain' },
      { labelKey: 'plot.location', href: '/info/access' },
      { labelKey: 'plot.comparable', href: '/info/comparable-plots' },
      { labelKey: 'plot.nomineeCrackdown', href: '/info/nominee-crackdown' },
    ],
  },
  {
    labelKey: 'developmentMenu',
    items: [
      { labelKey: 'development.liveProfit', href: '/info/live-and-profit' },
      { labelKey: 'development.boutique', href: '/info/boutique-development' },
      { labelKey: 'development.privateEstate', href: '/info/private-estate' },
      { labelKey: 'development.partialSale', href: '/info/partial-sale' },
    ],
  },
  {
    labelKey: 'areaMenu',
    items: [
      { labelKey: 'area.whyHuaHin', href: '/nearby/why-hua-hin' },
      { labelKey: 'area.retiringEuropeans', href: '/life/european-retirees' },
      { labelKey: 'area.retiringAmericans', href: '/life/retirees' },
      { labelKey: 'area.dutch', href: '/life/dutch' },
      { labelKey: 'area.german', href: '/life/german' },
      { labelKey: 'area.swedish', href: '/life/swedish' },
      { labelKey: 'area.danish', href: '/life/danish' },
      { labelKey: 'area.scandinavians', href: '/life/scandinavians' },
      { labelKey: 'area.british', href: '/life/british' },
      { labelKey: 'area.lifeAround', href: '/#life-around' },
      { labelKey: 'area.golf', href: '/nearby/golf' },
      { labelKey: 'area.beaches', href: '/nearby/beach' },
      { labelKey: 'area.wellness', href: '/nearby/meditation' },
      { labelKey: 'area.schools', href: '/life/schools' },
      { labelKey: 'area.bangkok', href: '/nearby/connectivity' },
    ],
  },
  {
    labelKey: 'legalMenu',
    items: [
      { labelKey: 'legal.disclaimer', href: '/legal/disclaimer' },
      { labelKey: 'legal.privacy', href: '/legal/privacy' },
      { labelKey: 'legal.partialSale', href: '/info/partial-sale' },
    ],
  },
]

function DesktopNavDropdown({ group }: { group: NavGroup }) {
  const t = useTranslations('navigation')
  return (
    <div className="relative group/nav">
      <button
        type="button"
        className="flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium text-[#5C5247] hover:text-[#1A2744] transition-colors duration-200"
      >
        {t(group.labelKey)}
        <span className="text-[9px] text-[#5C5247] group-hover/nav:text-[#1A2744] group-hover/nav:rotate-180 transition-all duration-200">
          ▾
        </span>
      </button>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover/nav:pointer-events-auto z-50">
        <div
          className="min-w-[240px] max-h-[70vh] overflow-y-auto bg-white py-2 rounded-[12px]"
          style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
        >
          {group.items.map((item) => (
            <Link
              key={item.href + item.labelKey}
              href={item.href}
              className="block px-5 py-3 text-sm font-medium text-[#1A2744] hover:text-[#C8973A] hover:bg-[#F5F5F5] transition-colors duration-150"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileNavAccordion({
  group,
  open,
  onToggle,
  onNavigate,
}: {
  group: NavGroup
  open: boolean
  onToggle: () => void
  onNavigate: () => void
}) {
  const t = useTranslations('navigation')
  const panelId = useId()

  return (
    <div className="border-b border-[#E8E2D6]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 px-4 min-h-[48px] text-left text-[15px] font-semibold text-[#1A2744]"
      >
        <span>{t(group.labelKey)}</span>
        <span
          className={`text-xs text-[#5C5247] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        >
          ▾
        </span>
      </button>
      {open && (
        <div id={panelId} className="bg-[#F7F3EB] pb-2">
          {group.items.map((item) => (
            <Link
              key={item.href + item.labelKey}
              href={item.href}
              onClick={onNavigate}
              className="flex items-center w-full px-6 min-h-[44px] text-[14px] font-medium text-[#5C5247] active:bg-[#EDE7DB] active:text-[#C8973A]"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function HomeNavbar() {
  const t = useTranslations('navigation')
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const mobilePanelId = useId()

  useEffect(() => {
    setMenuOpen(false)
    setOpenGroup(null)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenGroup(null)
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF7F0]/95 border-b border-black/5 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between gap-4">
          <Link href="/" className="group flex-shrink-0 leading-tight" onClick={closeMenu}>
            <span className="block text-[15px] font-semibold tracking-wide text-[#1A2744] group-hover:text-[#C8973A] transition-colors">
              {t('brandTitle')}
            </span>
            <span className="block text-[10px] text-[#5C5247] tracking-wider uppercase mt-0.5">
              {t('brandSubtitle')}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navGroups.map((group) => (
              <DesktopNavDropdown key={group.labelKey} group={group} />
            ))}
            <Link
              href="/#contact"
              className="ml-2 px-4 py-1.5 text-[13px] font-semibold rounded-lg bg-[#1A2744] hover:bg-[#C8973A] text-white border border-[#1A2744] hover:border-[#C8973A] transition-all duration-200"
            >
              {t('contact')}
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="hidden md:flex flex-col items-end leading-tight">
              <a
                href="https://allesis.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#5C5247] hover:text-[#C8973A] transition-colors"
              >
                {t('webdesignBy')}
              </a>
              <span className="text-[9px] text-[#5C5247]">{t('webdesignTag')}</span>
            </div>
            <LanguageSwitcher />
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#1A2744] hover:bg-black/5 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls={mobilePanelId}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          id={mobilePanelId}
          className="lg:hidden border-t border-black/5 bg-[#FAF7F0] max-h-[calc(100dvh-4rem)] overflow-y-auto"
        >
          {navGroups.map((group) => (
            <MobileNavAccordion
              key={group.labelKey}
              group={group}
              open={openGroup === group.labelKey}
              onToggle={() =>
                setOpenGroup((current) => (current === group.labelKey ? null : group.labelKey))
              }
              onNavigate={closeMenu}
            />
          ))}
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="flex items-center justify-center mx-4 my-4 min-h-[48px] px-4 text-[15px] font-semibold rounded-lg bg-[#1A2744] text-white"
          >
            {t('contact')}
          </Link>
        </div>
      )}
    </nav>
  )
}
