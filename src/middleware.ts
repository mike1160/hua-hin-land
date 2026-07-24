import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match all pathnames except Next internals, API, and static files
  matcher: ['/', '/(nl|de|sv|da|th|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
}
