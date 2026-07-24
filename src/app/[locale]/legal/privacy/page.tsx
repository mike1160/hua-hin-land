'use client'

import LangSwitcher from '@/components/LangSwitcher'
import { getPrivacyContent } from '@/content/privacy'
import { useSiteLang } from '@/lib/site-lang'
import { ui } from '@/lib/ui-strings'

export default function PrivacyPage() {
  const { lang } = useSiteLang()
  const content = getPrivacyContent(lang)
  const c = ui[lang]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744] px-6 py-20">
      <LangSwitcher />
      <div className="max-w-2xl mx-auto">
        <a href="/" className="text-[#C8973A] text-sm mb-8 inline-block hover:text-[#d4a84f] transition-colors">{c.backToListing}</a>
        <h1 className="text-[#1A2744] text-4xl font-bold mb-8" style={{fontFamily: 'Playfair Display, serif'}}>{content.title}</h1>
        <div className="space-y-6 text-[#5C5247] leading-relaxed">
          <p>{content.intro}</p>
          {content.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-[#1A2744] text-xl font-semibold mb-2">{section.title}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
        <div className="text-center pt-10">
          <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">{c.backFooter}</a>
        </div>
      </div>
    </main>
  )
}
