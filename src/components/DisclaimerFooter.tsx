'use client'

import type { Lang } from '../lib/site-lang'
import { useSiteLang } from '../lib/site-lang'
import { ui } from '../lib/ui-strings'

export default function DisclaimerFooter({ lang: langProp }: { lang?: Lang }) {
  const { lang: hookLang } = useSiteLang()
  const lang = langProp ?? hookLang
  const c = ui[lang]

  return (
    <div className="border-t border-white/10 pt-6">
      <p className="text-white/35 text-xs leading-relaxed text-center break-words">
        {c.disclaimerFooter}{' '}
        <a href="/legal/disclaimer" className="text-white/50 hover:text-white/70 transition-colors underline underline-offset-2 whitespace-nowrap">
          {c.disclaimerFooterLink}
        </a>
        {lang === 'TH' && (
          <>
            {' · '}
            <a href="/legal/privacy" className="text-white/50 hover:text-white/70 transition-colors underline underline-offset-2 whitespace-nowrap">
              {c.legalFooterPrivacy}
            </a>
          </>
        )}
      </p>
    </div>
  )
}
