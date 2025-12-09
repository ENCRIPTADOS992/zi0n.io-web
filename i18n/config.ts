export const locales = ['ru', 'es', 'en', 'fr', 'it', 'pt-BR', 'zh', 'hi', 'de', 'nl'] as const
export const defaultLocale = 'ru' as const

export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  ru: 'Русский',
  es: 'Español',
  en: 'English',
  fr: 'Français',
  it: 'Italiano',
  'pt-BR': 'Português',
  zh: '中文',
  hi: 'हिन्दी',
  de: 'Deutsch',
  nl: 'Nederlands',
}

export const localeFlags: Record<Locale, string> = {
  ru: '🇷🇺',
  es: '🇪🇸',
  en: '🇬🇧',
  fr: '🇫🇷',
  it: '🇮🇹',
  'pt-BR': '🇧🇷',
  zh: '🇨🇳',
  hi: '🇮🇳',
  de: '🇩🇪',
  nl: '🇳🇱',
}
