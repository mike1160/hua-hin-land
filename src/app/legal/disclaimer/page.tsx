'use client'

import LangSwitcher from '../../../components/LangSwitcher'
import { deUi, enContent, nlUi } from './content-en'
import { thContent } from './content-th'
import type { DisclaimerPageContent, DisclaimerSection } from './types'
import { useSiteLang } from '../../../lib/site-lang'
import type { Lang } from '../../../lib/site-lang'

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 list-none">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="text-purple-400/60 flex-shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Section({ section, showContactLink, contactLinkText }: {
  section: DisclaimerSection
  showContactLink?: boolean
  contactLinkText: string
}) {
  return (
    <div className="bg-gradient-to-br from-slate-950/40 to-gray-950/20 border border-white/10 rounded-2xl p-6">
      <h2 className="text-white text-lg font-semibold mb-4">{section.title}</h2>
      <div className="text-white/70 text-sm leading-relaxed space-y-3">
        {section.strongParagraphs?.map((text) => (
          <p key={text}><strong className="text-white/90">{text}</strong></p>
        ))}
        {section.paragraphs?.map((text) => (
          <p key={text}>{text}</p>
        ))}
        {section.lists?.map((list) => (
          <div key={`${list.intro ?? 'list'}-${list.items[0]}`} className="space-y-2">
            {list.intro && (
              <p><strong className="text-white/90">{list.intro}</strong></p>
            )}
            <List items={list.items} />
          </div>
        ))}
        {showContactLink && (
          <p>
            <a href="/#contact" className="text-purple-300/80 hover:text-purple-200 hover:underline transition-colors">
              {contactLinkText}
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

function getPageContent(lang: Lang): DisclaimerPageContent {
  if (lang === 'TH') return thContent
  const base = enContent
  if (lang === 'NL') {
    return { ...base, ...nlUi }
  }
  if (lang === 'DE') {
    return { ...base, ...deUi }
  }
  return base
}

export default function DisclaimerPage() {
  const { lang, selectLang } = useSiteLang()
  const content = getPageContent(lang)

  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <LangSwitcher lang={lang} onSelect={selectLang} />

      <div className="relative flex items-end pb-10 px-6 min-h-[280px]">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt="" className="w-full h-full object-cover" style={{objectPosition: 'center 40%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.88) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto w-full">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">{content.backLink}</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>{content.title}</h1>
          <p className="text-white/60 mt-3 text-sm leading-relaxed max-w-2xl">{content.subtitle}</p>
          <p className="text-white/40 text-xs mt-3">{content.lastUpdated}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-6">
        {content.headerNotice && (
          <p className="text-white/50 text-sm italic leading-relaxed border-l-2 border-white/10 pl-4">
            {content.headerNotice}
          </p>
        )}

        {content.sections.map((section, index) => (
          <Section
            key={section.title}
            section={section}
            showContactLink={index === content.sections.length - 1}
            contactLinkText={content.contactLinkText}
          />
        ))}

        <div className="text-center pt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">{content.backFooter}</a>
        </div>
      </div>
    </main>
  )
}
