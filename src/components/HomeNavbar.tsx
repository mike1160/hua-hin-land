'use client'

type NavItem = { label: string; href: string }

type NavGroup = { label: string; items: NavItem[] }

const navGroups: NavGroup[] = [
  {
    label: 'The Plot',
    items: [
      { label: 'Size & Title Deed', href: '/info/size' },
      { label: 'Terrain & Utilities', href: '/info/terrain' },
      { label: 'Location & Access', href: '/info/access' },
      { label: 'Comparable plots', href: '/info/comparable-plots' },
    ],
  },
  {
    label: 'Development',
    items: [
      { label: 'Live & Profit', href: '/info/live-and-profit' },
      { label: 'Boutique Development', href: '/info/boutique-development' },
      { label: 'Private Estate', href: '/info/private-estate' },
      { label: 'Partial Sale', href: '/info/partial-sale' },
    ],
  },
  {
    label: 'The Area',
    items: [
      { label: 'Life around the plot', href: '/#life-around' },
      { label: 'Golf & Sports', href: '/nearby/golf' },
      { label: 'Beaches & Nature', href: '/nearby/beach' },
      { label: 'Wellness & Spas', href: '/nearby/meditation' },
      { label: 'Schools & Families', href: '/life/schools' },
      { label: 'Bangkok & Connectivity', href: '/nearby/connectivity' },
    ],
  },
  {
    label: 'Legal',
    items: [
      { label: 'Disclaimer', href: '/legal/disclaimer' },
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Partial Sale Process', href: '/info/partial-sale' },
    ],
  },
]

type Lang = 'EN' | 'NL' | 'TH' | 'DE'

type HomeNavbarProps = {
  lang: Lang
  langs: string[]
  onSelectLang: (lang: Lang) => void
}

function NavDropdown({ group }: { group: NavGroup }) {
  return (
    <div className="relative group/nav">
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-purple-300 transition-colors duration-200"
      >
        {group.label}
        <span className="text-[10px] opacity-60 group-hover/nav:rotate-180 transition-transform duration-200">▾</span>
      </button>
      <div className="absolute left-0 top-full pt-1 opacity-0 invisible translate-y-1 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover/nav:pointer-events-auto">
        <div className="min-w-[220px] bg-[#0d1120]/98 border border-white/10 rounded-xl shadow-xl shadow-black/40 backdrop-blur-md py-2 overflow-hidden">
          {group.items.map((item) => (
            <a
              key={item.href + item.label}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-white/75 hover:text-purple-300 hover:bg-purple-500/10 transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HomeNavbar({ lang, langs, onSelectLang }: HomeNavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-[#07080f]/95 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <a href="/" className="text-sm font-semibold text-white/90 hover:text-purple-300 transition-colors flex-shrink-0">
          Soi 112 · Hua Hin
        </a>

        <div className="hidden lg:flex items-center gap-0.5">
          {navGroups.map((group) => (
            <NavDropdown key={group.label} group={group} />
          ))}
          <a
            href="/#contact"
            className="px-3 py-2 text-sm text-white/80 hover:text-purple-300 transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex gap-0.5 bg-black/40 rounded-full px-1.5 py-0.5 border border-white/10">
            {langs.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => onSelectLang(l as Lang)}
                className={`px-2 py-0.5 text-[10px] font-semibold rounded-full transition-all ${
                  lang === l ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet: compact link row */}
      <div className="lg:hidden border-t border-white/5 overflow-x-auto">
        <div className="flex items-center gap-1 px-4 py-2 min-w-max">
          {navGroups.map((group) => (
            <a
              key={group.label}
              href={group.items[0].href}
              className="px-2.5 py-1 text-xs text-white/60 hover:text-purple-300 whitespace-nowrap transition-colors"
            >
              {group.label}
            </a>
          ))}
          <a href="/#contact" className="px-2.5 py-1 text-xs text-white/60 hover:text-purple-300 whitespace-nowrap transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
