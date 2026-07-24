'use client'

import { useEffect } from 'react'
import { useLocale } from 'next-intl'

/** Keeps <html lang> in sync when the locale changes (root layout owns <html>). */
export default function HtmlLang() {
  const locale = useLocale()
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])
  return null
}
