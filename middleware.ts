import createMiddleware from 'next-intl/middleware'
import { routing } from './src/i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match all pathnames except Next internals, API, and files with extensions
  matcher: ['/', '/(nl|de|sv|da|th|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
}
