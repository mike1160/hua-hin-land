'use client'

import LangSwitcher from '../../../components/LangSwitcher'
import { getPrivacyContent } from '../../../content/privacy'
import { useSiteLang } from '../../../lib/site-lang'
import { ui } from '../../../lib/ui-strings'

export default function PrivacyPage() {
  const { lang, selectLang } = useSiteLang()
  const content = getPrivacyContent(lang)
  const c = ui[lang]

  return (
    <main className="min-h-screen bg-[#07080f] text-white px-6 py-20">
      <LangSwitcher lang={lang} onSelect={selectLang} />
      <div className="max-w-2xl mx-auto">
        <a href="/" className="text-blue-400 text-sm mb-8 inline-block hover:text-blue-300 transition-colors">{c.backToListing}</a>
        <h1 className="text-4xl font-bold mb-8" style={{fontFamily: 'Playfair Display, serif'}}>{content.title}</h1>
        <div className="space-y-6 text-white/70 leading-relaxed">
          <p>{content.intro}</p>
          {content.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-white text-xl font-semibold mb-2">{section.title}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
        <div className="text-center pt-10">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">{c.backFooter}</a>
        </div>
      </div>
    </main>
  )
}
