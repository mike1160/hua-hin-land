import { ReactNode } from 'react'
import './[locale]/globals.css'

type Props = { children: ReactNode }

const realEstateListingLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: '4 Rai 2 Ngan Chanote Land — Soi 112, Hua Hin',
  description:
    "Flat buildable land with panoramic mountain views in Hua Hin's most prestigious villa corridor. 4 Rai 2 Ngan (7,200 m²). Chanote NS.4J title deed, ready for transfer. Water connected. Direct concrete road. Soi 112, Thap Tai, Hua Hin.",
  url: 'https://www.hua-hin-land.com',
  price: '10350000',
  priceCurrency: 'THB',
  floorSize: {
    '@type': 'QuantitativeValue',
    value: 7200,
    unitCode: 'MTK',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Soi 112, Thap Tai',
    addressLocality: 'Hua Hin',
    addressRegion: 'Prachuap Khiri Khan',
    postalCode: '77110',
    addressCountry: 'TH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.4751699,
    longitude: 99.9073267,
  },
  image: [
    'https://www.hua-hin-land.com/photo1.jpg',
    'https://www.hua-hin-land.com/photo2.jpg',
    'https://www.hua-hin-land.com/photo3.jpg',
  ],
  offers: {
    '@type': 'Offer',
    price: '10350000',
    priceCurrency: 'THB',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Person',
      name: 'Peeeraphat',
      telephone: '+66-65-901-2984',
    },
  },
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hua Hin Land',
  url: 'https://www.hua-hin-land.com',
  logo: 'https://www.hua-hin-land.com/photo2.jpg',
  sameAs: ['https://www.thaiplot.com'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+66-65-901-2984',
    contactType: 'sales',
    availableLanguage: ['English', 'Dutch', 'Thai'],
  },
}

/**
 * Next.js 14 requires <html> and <body> in the root layout.
 * Locale-specific providers live in [locale]/layout.tsx.
 */
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateListingLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF7F0] text-[#1A2744] antialiased">{children}</body>
    </html>
  )
}
