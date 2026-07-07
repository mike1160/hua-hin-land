'use client'

import ContactDisclaimerNote from '../../../components/ContactDisclaimerNote'
import DisclaimerFooter from '../../../components/DisclaimerFooter'
import LangSwitcher from '../../../components/LangSwitcher'
import { getBoutiqueDevelopmentContent } from '../../../content/boutique-development'
import { useSiteLang } from '../../../lib/site-lang'
import { ui } from '../../../lib/ui-strings'

export default function BoutiqueDevelopmentPage() {
  const { lang, selectLang } = useSiteLang()
  const content = getBoutiqueDevelopmentContent(lang)
  const c = ui[lang]

  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <LangSwitcher lang={lang} onSelect={selectLang} />
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/IMG_7807.JPG" alt="boutique villas" className="w-full h-full object-cover" style={{objectPosition: 'center center'}} />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">{c.backToListing}</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>{content.title}</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-green-950/30 to-teal-950/20 border border-green-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">{content.conceptTitle}</h2>
          <p className="text-white/70 text-sm leading-relaxed">{content.concept}</p>
        </div>

        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">{content.marketTitle}</h2>
          <ul className="space-y-2 text-white/70 text-sm">
            {content.marketItems.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-950/30 to-indigo-950/20 border border-purple-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">{content.calcTitle}</h2>
          <div className="space-y-3 text-sm">
            {content.calcRows.map((row) => (
              <div key={row.label} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                <span className="text-white/70">{row.label}</span>
                <span className={row.highlight ? 'text-green-400 font-semibold' : 'text-white'}>{row.value}</span>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-xs mt-4">{content.calcNote}</p>
        </div>

        <div className="text-center">
          <ContactDisclaimerNote lang={lang} />
          <a href="/#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-purple-900/40">
            {c.getInTouch}
          </a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 pb-12">
        <DisclaimerFooter lang={lang} />
        <div className="text-center pt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">{c.backFooter}</a>
        </div>
      </div>
    </main>
  )
}
