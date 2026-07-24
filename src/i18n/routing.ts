import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'nl', 'de', 'sv', 'da', 'th'],
  defaultLocale: 'en',
  // English (default) has no prefix so existing SEO URLs keep working:
  // /nearby/why-hua-hin → en, /nl/nearby/why-hua-hin → nl
  localePrefix: 'as-needed',
  localeDetection: true,
})

export type AppLocale = (typeof routing.locales)[number]
