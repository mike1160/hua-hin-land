import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import LegalFooterBar from '../components/LegalFooterBar'
import CookieNotice from '../components/CookieNotice'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prime Land For Sale | Hua Hin Soi 112 | 4 Rai 2 Ngan Chanote',
  description: '4 Rai 2 Ngan flat buildable land with panoramic mountain views in Hua Hin\'s prestigious Soi 112 corridor. Chanote title deed. Water connection in place. ฿2,300,000/rai. General information only — not legal or financial advice. Verify all property details independently.',
  openGraph: {
    title: 'Prime Land For Sale | Hua Hin Soi 112',
    description: '4 Rai 2 Ngan — Chanote — Flat terrain — Mountain views — ฿2.3M/rai',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#07080f] text-white antialiased">{children}<LegalFooterBar /><CookieNotice /><Analytics /></body>
    </html>
  )
}
