'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const COOKIE_DISMISS_KEY = 'hua-hin-land-cookie-notice'

export default function CookieNotice() {
  const t = useTranslations('common')
  const [visible, setVisible] = useState(false)

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
      <div
        className="max-w-3xl mx-auto bg-white px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 shadow-lg"
        style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
      >
        <p className="text-[#5C5247] text-xs leading-relaxed flex-1">
          {t('cookieNotice')}{' '}
          <Link href="/legal/privacy" className="text-[#A67B2E] hover:underline">
            {t('cookieLearnMore')}
          </Link>
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="flex-shrink-0 px-4 py-2 text-xs font-semibold text-white rounded-[12px] hover:brightness-110 transition-all"
          style={{ background: '#C8973A' }}
        >
          {t('cookieAccept')}
        </button>
      </div>
    </div>
  )
}
