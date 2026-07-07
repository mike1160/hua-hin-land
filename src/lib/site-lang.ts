'use client'

import { useEffect, useState } from 'react'

export const LANG_KEY = 'hua-hin-land-lang'
export const langs = ['EN', 'NL', 'TH', 'DE'] as const
export type Lang = (typeof langs)[number]

export function useSiteLang(defaultLang: Lang = 'EN') {
  const [lang, setLang] = useState<Lang>(defaultLang)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY) as Lang | null
      if (saved && langs.includes(saved)) setLang(saved)
    } catch {
      // ignore
    }
  }, [])

  const selectLang = (next: Lang) => {
    setLang(next)
    try {
      localStorage.setItem(LANG_KEY, next)
    } catch {
      // ignore
    }
  }

  return { lang, selectLang }
}
