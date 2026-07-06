import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prime Land For Sale | Hua Hin Soi 112 | 4 Rai 2 Ngan Chanote',
  description: '4 Rai 2 Ngan flat buildable land with panoramic mountain views in Hua Hin\'s prestigious Soi 112 corridor. Chanote title deed. Water connection in place. ฿2,300,000/rai.',
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
      <body>{children}</body>
    </html>
  )
}
