"use client"

import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { termsContent } from "@/lib/legal-content"

export default function TermsPage() {
  const t = useTranslations('legalPages')
  const locale = useLocale()
  const content = termsContent[locale] || termsContent.es

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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{t('terms.title')}</h1>
          <p className="text-white/60 mb-8">{t('terms.lastUpdate')}: 6 de Enero de 2025</p>
          
          <div className="prose prose-invert max-w-none text-white/80 leading-relaxed">
            {/* Intro */}
            <p className="mb-6">{content.intro}</p>

            {/* Sections */}
            {content.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold text-white mt-8 mb-4">{section.title}</h2>
                <p className="mb-6 whitespace-pre-line">{section.content}</p>
              </div>
            ))}

            {/* Acceptance */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
              <p className="text-white/90 font-medium">{content.acceptance}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
