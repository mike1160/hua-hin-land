'use client'

import ContactDisclaimerNote from '../../../components/ContactDisclaimerNote'
import DisclaimerFooter from '../../../components/DisclaimerFooter'
import LangSwitcher from '../../../components/LangSwitcher'
import { getPartialSaleContent } from '../../../content/partial-sale'
import { useSiteLang } from '../../../lib/site-lang'
import { ui } from '../../../lib/ui-strings'

export default function PartialSalePage() {
  const { lang, selectLang } = useSiteLang()
  const content = getPartialSaleContent(lang)
  const c = ui[lang]

  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <LangSwitcher lang={lang} onSelect={selectLang} />
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt="aerial view of plot" className="w-full h-full object-cover" style={{objectPosition: 'center 40%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">{c.backToListing}</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>{content.title}</h1>
          <p className="text-white/60 mt-2">{content.subtitle}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-amber-950/30 to-orange-950/20 border border-amber-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">{content.howTitle}</h2>
          <ul className="space-y-2 text-white/70 text-sm">
            {content.howItems.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">{content.processTitle}</h2>
          <div className="space-y-4">
            {content.steps.map((s, i) => (
              <div key={s.title} className="flex gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-sm font-semibold">
                  {i + 1}
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-1">{s.title}</p>
                  <p className="text-white/60 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-sm mt-6 pt-4 border-t border-white/5">{content.timeline}</p>
        </div>

        <div className="bg-gradient-to-br from-purple-950/30 to-indigo-950/20 border border-purple-900/30 rounded-2xl p-4 md:p-6">
          <h2 className="text-white text-xl font-semibold mb-4">{content.costsTitle}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="pb-3 pr-4 text-white/50 font-medium text-xs uppercase tracking-wider">{content.costItem}</th>
                  <th className="pb-3 text-white/50 font-medium text-xs uppercase tracking-wider">{content.costAmount}</th>
                </tr>
              </thead>
              <tbody>
                {content.costs.map((row) => (
                  <tr key={row.item} className={`border-b border-white/5 ${row.highlight ? 'bg-purple-500/10' : ''}`}>
                    <td className={`py-4 pr-4 align-top ${row.highlight ? 'text-white font-semibold' : 'text-white/80'}`}>{row.item}</td>
                    <td className={`py-4 align-top ${row.highlight ? 'text-purple-300 font-semibold' : 'text-white/70'}`}>{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-white/50 text-xs leading-relaxed">{content.note}</p>
          </div>
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
