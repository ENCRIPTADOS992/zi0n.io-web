import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n/config'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: true,
})

export const config = {
  matcher: ['/', '/(ru|es|en|fr|it|pt-BR|zh|hi|de|nl)/:path*']
}
