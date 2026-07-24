'use client'

import ContactDisclaimerNote from '@/components/ContactDisclaimerNote'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import LangSwitcher from '@/components/LangSwitcher'
import { getPartialSaleContent } from '@/content/partial-sale'
import { useSiteLang } from '@/lib/site-lang'
import { ui } from '@/lib/ui-strings'

export default function PartialSalePage() {
  const { lang } = useSiteLang()
  const content = getPartialSaleContent(lang)
  const c = ui[lang]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <LangSwitcher />
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt="aerial view of plot" className="w-full h-full object-cover" style={{objectPosition: 'center 40%'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">{c.backToListing}</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>{content.title}</h1>
          <p className="text-white/85 mt-2">{content.subtitle}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{content.howTitle}</h2>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            {content.howItems.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{content.processTitle}</h2>
          <div className="space-y-4">
            {content.steps.map((s, i) => (
              <div key={s.title} className="flex gap-4 border-b border-[#E8E2D6] pb-4 last:border-0 last:pb-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C8973A]/15 border border-[#C8973A]/30 flex items-center justify-center text-[#C8973A] text-sm font-semibold">
                  {i + 1}
                </div>
                <div>
                  <p className="text-[#1A2744] font-medium text-sm mb-1">{s.title}</p>
                  <p className="text-[#5C5247] text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#5C5247] text-sm mt-6 pt-4 border-t border-[#E8E2D6]">{content.timeline}</p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-4 md:p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{content.costsTitle}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#E8E2D6] text-left">
                  <th className="pb-3 pr-4 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{content.costItem}</th>
                  <th className="pb-3 text-[#5C5247] font-medium text-xs uppercase tracking-wider">{content.costAmount}</th>
                </tr>
              </thead>
              <tbody>
                {content.costs.map((row) => (
                  <tr key={row.item} className={`border-b border-[#E8E2D6] ${row.highlight ? 'bg-[#C8973A]/10' : ''}`}>
                    <td className={`py-4 pr-4 align-top ${row.highlight ? 'text-[#1A2744] font-semibold' : 'text-[#5C5247]'}`}>{row.item}</td>
                    <td className={`py-4 align-top ${row.highlight ? 'text-[#C8973A] font-semibold' : 'text-[#5C5247]'}`}>{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-[#FAF7F0] border border-[#E8E2D6] rounded-[12px] p-4">
            <p className="text-[#5C5247] text-xs leading-relaxed">{content.note}</p>
          </div>
        </div>

        <div className="text-center">
          <ContactDisclaimerNote />
          <div className="flex flex-wrap items-center gap-3">
            <a href="/#contact" className="inline-flex items-center gap-2 bg-[#C8973A] hover:brightness-110 text-white font-bold px-8 py-4 rounded-[12px] transition-all">
            {c.getInTouch}
          </a>
            <LineButton size="md" />
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 pb-12">
        <DisclaimerFooter />
        <div className="text-center pt-4">
          <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">{c.backFooter}</a>
        </div>
      </div>
    </main>
  )
}
