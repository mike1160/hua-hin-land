'use client'

import DisclaimerFooter from '../../../components/DisclaimerFooter'
import LangSwitcher from '../../../components/LangSwitcher'
import { getComparablePlotsContent } from '../../../content/comparable-plots'
import { useSiteLang } from '../../../lib/site-lang'
import { ui } from '../../../lib/ui-strings'

export default function ComparablePlotsPage() {
  const { lang, selectLang } = useSiteLang()
  const content = getComparablePlotsContent(lang)
  const c = ui[lang]
  const h = content.headers

  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <LangSwitcher lang={lang} onSelect={selectLang} />
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt="Hua Hin land" className="w-full h-full object-cover" style={{objectPosition: 'center 40%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300 transition-colors">{c.backToListing}</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>{content.title}</h1>
          <p className="text-white/60 mt-2">{content.subtitle}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-4 md:p-6 overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="pb-3 pr-4 text-white/50 font-medium text-xs uppercase tracking-wider">{h.plot}</th>
                <th className="pb-3 pr-4 text-white/50 font-medium text-xs uppercase tracking-wider">{h.size}</th>
                <th className="pb-3 pr-4 text-white/50 font-medium text-xs uppercase tracking-wider">{h.price}</th>
                <th className="pb-3 pr-4 text-white/50 font-medium text-xs uppercase tracking-wider">{h.perRai}</th>
                <th className="pb-3 pr-4 text-white/50 font-medium text-xs uppercase tracking-wider">{h.title}</th>
                <th className="pb-3 pr-4 text-white/50 font-medium text-xs uppercase tracking-wider">{h.location}</th>
                <th className="pb-3 text-white/50 font-medium text-xs uppercase tracking-wider">{h.note}</th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row) => (
                <tr key={row.plot} className={`border-b border-white/5 ${row.highlight ? 'bg-green-500/10' : ''}`}>
                  <td className={`py-4 pr-4 font-semibold ${row.highlight ? 'text-green-400' : 'text-white'}`}>{row.plot}</td>
                  <td className="py-4 pr-4 text-white/70">{row.size}</td>
                  <td className={`py-4 pr-4 ${row.highlight ? 'text-white font-semibold' : 'text-white/70'}`}>{row.price}</td>
                  <td className={`py-4 pr-4 font-semibold ${row.highlight ? 'text-green-400' : 'text-blue-400'}`}>{row.perRai}</td>
                  <td className="py-4 pr-4 text-white/70">{row.title}</td>
                  <td className="py-4 pr-4 text-white/70">{row.location}</td>
                  <td className="py-4 text-white/50 text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-br from-green-950/40 to-emerald-950/20 border border-green-500/30 rounded-2xl p-6">
          <p className="text-white text-base leading-relaxed">{content.conclusion}</p>
        </div>

        <p className="text-white/30 text-xs text-center">{content.source}</p>
      </div>
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <DisclaimerFooter lang={lang} />
        <div className="text-center pt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">{c.backFooter}</a>
        </div>
      </div>
    </main>
  )
}
