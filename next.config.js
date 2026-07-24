const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // English (default) has no locale prefix — map legacy/SEO URLs into [locale]=en.
    // Prefixed locales (/nl/..., /de/..., …) are unaffected.
    return [
      { source: '/', destination: '/en' },
      { source: '/nearby/:path*', destination: '/en/nearby/:path*' },
      { source: '/info/:path*', destination: '/en/info/:path*' },
      { source: '/life/:path*', destination: '/en/life/:path*' },
      { source: '/legal/:path*', destination: '/en/legal/:path*' },
      { source: '/disclaimer', destination: '/en/disclaimer' },
      { source: '/privacy', destination: '/en/privacy' },
    ]
  },
  async redirects() {
    // Canonicalize /en/... → unprefixed English URLs (SEO, avoid duplicates)
    return [
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = withNextIntl(nextConfig)
