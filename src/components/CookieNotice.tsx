'use client'

import { useEffect, useState } from 'react'
import { useSiteLang } from '../lib/site-lang'
import { ui } from '../lib/ui-strings'

const COOKIE_DISMISS_KEY = 'hua-hin-land-cookie-notice'

export default function CookieNotice() {
  const { lang } = useSiteLang()
  const [visible, setVisible] = useState(false)
  const c = ui[lang]

  useEffect(() => {
    try {
      if (!localStorage.getItem(COOKIE_DISMISS_KEY)) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  const dismiss = () => {
    try {
      localStorage.setItem(COOKIE_DISMISS_KEY, '1')
    } catch {
      // ignore
    }
    setVisible(false)
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="max-w-3xl mx-auto bg-[#0d1120]/95 border border-white/10 backdrop-blur-md rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 shadow-2xl">
        <p className="text-white/70 text-xs leading-relaxed flex-1">
          {c.cookieNotice}{' '}
          <a href="/legal/privacy" className="text-purple-300/80 hover:text-purple-200 hover:underline transition-colors whitespace-nowrap">
            → {c.cookieLearnMore}
          </a>
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all"
        >
          {c.cookieAccept}
        </button>
      </div>
    </div>
  )
}
