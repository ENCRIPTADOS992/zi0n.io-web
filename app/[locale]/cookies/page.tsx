"use client"

import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cookiesContent } from "@/lib/legal-content"

export default function CookiesPage() {
  const t = useTranslations('legalPages')
  const locale = useLocale()
  const content = cookiesContent[locale] || cookiesContent.es

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071C59] to-[#0a2a7a]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#071C59]/95 backdrop-blur-sm border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href={`/${locale}`}>
              <Button variant="ghost" className="text-white hover:text-[#5EEC7D] hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('backToHome')}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{t('cookies.title')}</h1>
          <p className="text-white/60 mb-8">{t('cookies.lastUpdate')}: 22 de diciembre de 2025</p>
          
          <div className="prose prose-invert max-w-none text-white/80 leading-relaxed">
            {/* Intro */}
            <p className="mb-6">{content.intro}</p>
            <p className="mb-6">{content.privacyFocus}</p>

            {/* Section 1 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{content.section1.title}</h2>
            <p className="mb-4">{content.section1.description}</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              {content.section1.types.map((type, i) => (
                <li key={i}><strong className="text-white">{type.name}:</strong> {type.desc}</li>
              ))}
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{content.section2.title}</h2>
            <p className="mb-4">{content.section2.description}</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              {content.section2.items.map((item, i) => (
                <li key={i}><strong className="text-white">{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            <p className="mb-6">{content.section2.noCookies}</p>

            {/* Section 3 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{content.section3.title}</h2>
            <p className="mb-4">{content.section3.description}</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              {content.section3.items.map((item, i) => (
                <li key={i}><strong className="text-white">{item.label}</strong> {item.text}</li>
              ))}
            </ul>

            {/* Section 4 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{content.section4.title}</h2>
            <p className="mb-6">{content.section4.description}</p>

            {/* Section 5 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{content.section5.title}</h2>
            <p className="mb-6">{content.section5.description}</p>

            {/* Section 6 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{content.section6.title}</h2>
            <p className="mb-6">
              {content.section6.description} {t('cookies.section6.responsible') || 'Responsable'}: {content.section6.responsible}.
            </p>

            {/* Footer note */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
              <p className="text-white/90">
                {content.footer} <Link href={`/${locale}/terms`} className="text-[#5EEC7D] hover:underline">{t('terms.title')}</Link>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
