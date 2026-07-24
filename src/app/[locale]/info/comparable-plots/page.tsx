'use client'

import DisclaimerFooter from '@/components/DisclaimerFooter'
import LangSwitcher from '@/components/LangSwitcher'
import { getComparablePlotsContent } from '@/content/comparable-plots'
import { useSiteLang } from '@/lib/site-lang'
import { ui } from '@/lib/ui-strings'

export default function ComparablePlotsPage() {
  const { lang } = useSiteLang()
  const content = getComparablePlotsContent(lang)
  const c = ui[lang]
  const h = content.headers

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <LangSwitcher />
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo1.jpg" alt="Hua Hin land" className="w-full h-full object-cover" style={{objectPosition: 'center 40%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">{c.backToListing}</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>{content.title}</h1>
          <p className="text-white/85 mt-2">{content.subtitle}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-4 md:p-6 overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#E8E2D6] text-left">
                <th className="pb-3 pr-4 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{h.plot}</th>
                <th className="pb-3 pr-4 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{h.size}</th>
                <th className="pb-3 pr-4 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{h.price}</th>
                <th className="pb-3 pr-4 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{h.perRai}</th>
                <th className="pb-3 pr-4 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{h.title}</th>
                <th className="pb-3 pr-4 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{h.location}</th>
                <th className="pb-3 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{h.note}</th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row) => (
                <tr key={row.plot} className={`border-b border-[#E8E2D6] ${row.highlight ? 'bg-[#C8973A]/10' : ''}`}>
                  <td className={`py-4 pr-4 font-semibold ${row.highlight ? 'text-[#C8973A]' : 'text-[#1A2744]'}`}>{row.plot}</td>
                  <td className="py-4 pr-4 text-[#5C5247]">{row.size}</td>
                  <td className={`py-4 pr-4 ${row.highlight ? 'text-[#1A2744] font-semibold' : 'text-[#5C5247]'}`}>{row.price}</td>
                  <td className={`py-4 pr-4 font-semibold ${row.highlight ? 'text-[#C8973A]' : 'text-[#C8973A]'}`}>{row.perRai}</td>
                  <td className="py-4 pr-4 text-[#5C5247]">{row.title}</td>
                  <td className="py-4 pr-4 text-[#5C5247]">{row.location}</td>
                  <td className="py-4 text-[#5C5247] text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#1A2744] text-base leading-relaxed">{content.conclusion}</p>
        </div>

        <p className="text-[#5C5247] text-xs text-center">{content.source}</p>
      </div>
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <DisclaimerFooter />
        <div className="text-center pt-4">
          <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">{c.backFooter}</a>
        </div>
      </div>
    </main>
  )
}
