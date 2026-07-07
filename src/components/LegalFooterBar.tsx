'use client'

import { useSiteLang } from '../lib/site-lang'
import { ui } from '../lib/ui-strings'

export default function LegalFooterBar() {
  const { lang } = useSiteLang()
  const c = ui[lang]

  return (
    <footer className="border-t border-[#1e2a4a] bg-[#07080f] py-4 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3 text-white/30 text-xs">
        <a href="/legal/disclaimer" className="hover:text-white/60 transition-colors">{c.legalFooterDisclaimer}</a>
        <span>·</span>
        <a href="/legal/privacy" className="hover:text-white/60 transition-colors">{c.legalFooterPrivacy}</a>
      </div>
    </footer>
  )
}
