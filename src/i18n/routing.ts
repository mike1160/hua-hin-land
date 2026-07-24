import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'nl', 'de', 'sv', 'da', 'th'],
  defaultLocale: 'en',
  // Always use /en, /nl, … so routing is unambiguous; / redirects to /en
  localePrefix: 'always',
  localeDetection: true,
})

export type AppLocale = (typeof routing.locales)[number]
