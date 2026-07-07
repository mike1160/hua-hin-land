'use client'

import type { Lang } from '../lib/site-lang'
import { useSiteLang } from '../lib/site-lang'
import { ui } from '../lib/ui-strings'

export default function ContactDisclaimerNote({ lang: langProp }: { lang?: Lang }) {
  const { lang: hookLang } = useSiteLang()
  const lang = langProp ?? hookLang
  const c = ui[lang]

  return (
    <p className="text-white/40 text-xs text-center leading-relaxed mb-3">
      {c.contactDisclaimer}{' '}
      <a href="/legal/disclaimer" className="text-purple-300/70 hover:text-purple-200 hover:underline transition-colors">
        {c.contactDisclaimerLink}
      </a>
      .
    </p>
  )
}
