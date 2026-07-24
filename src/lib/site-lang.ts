'use client'

import { useLocale } from 'next-intl'

export const LANG_KEY = 'hua-hin-land-lang'
export const langs = ['EN', 'NL', 'TH', 'DE'] as const
export type Lang = (typeof langs)[number]

const localeToLang: Record<string, Lang> = {
  en: 'EN',
  nl: 'NL',
  de: 'DE',
  th: 'TH',
  sv: 'EN',
  da: 'EN',
}

/** Maps next-intl locale to legacy content Lang (EN/NL/TH/DE). */
export function useSiteLang(_defaultLang: Lang = 'EN') {
  const locale = useLocale()
  const lang = localeToLang[locale] ?? 'EN'

  const selectLang = (_next: Lang) => {
    // Locale switching is handled by LanguageSwitcher via next-intl routing
  }

  return { lang, selectLang }
}

export function localeFromLang(lang: Lang): string {
  return lang.toLowerCase()
}
