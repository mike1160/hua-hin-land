'use client'

import ContactDisclaimerNote from '@/components/ContactDisclaimerNote'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import LangSwitcher from '@/components/LangSwitcher'
import { getPrivateEstateContent } from '@/content/private-estate'
import { useSiteLang } from '@/lib/site-lang'
import { ui } from '@/lib/ui-strings'

export default function PrivateEstatePage() {
  const { lang } = useSiteLang()
  const content = getPrivateEstateContent(lang)
  const c = ui[lang]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <LangSwitcher />
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/IMG_5835.JPG" alt="private estate" className="w-full h-full object-cover" style={{objectPosition: 'center center'}} />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 70%, #FAF7F0 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-[#C8973A] text-xs mb-4 inline-block hover:text-[#d4a84f] transition-colors">{c.backToListing}</a>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>{content.title}</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{content.conceptTitle}</h2>
          <p className="text-[#5C5247] text-sm leading-relaxed">{content.concept}</p>
        </div>

        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <h2 className="text-[#1A2744] text-xl font-semibold mb-4">{content.whyTitle}</h2>
          <ul className="space-y-2 text-[#5C5247] text-sm">
            {content.whyItems.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <ContactDisclaimerNote />
          <a href="/#contact" className="inline-flex items-center gap-2 bg-[#C8973A] hover:brightness-110 text-white font-bold px-8 py-4 rounded-[12px] transition-all">
            {c.getInTouch}
          </a>
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
