import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import LegalFooterBar from '@/components/LegalFooterBar'
import CookieConsent from '@/components/CookieConsent'
import HtmlLang from '@/components/HtmlLang'
import { routing } from '@/i18n/routing'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'Metadata' })
  return {
    title: t('title'),
    description: t('description'),
    keywords:
      'land for sale Hua Hin, Chanote title deed, Soi 112, Thailand property, freehold land Thailand, retiring in Hua Hin, American expat Thailand',
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Script id="gtag-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-664P8EQ6ZX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          try {
            if (localStorage.getItem('hua-hin-land-cookie-consent') === 'accepted') {
              gtag('consent', 'update', { analytics_storage: 'granted' });
            }
          } catch (e) {}
          gtag('config', 'G-664P8EQ6ZX');
        `}
      </Script>
      <HtmlLang />
      {children}
      <LegalFooterBar />
      <CookieConsent />
      <Analytics />
    </NextIntlClientProvider>
  )
}
