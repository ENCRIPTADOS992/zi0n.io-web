"use client"

import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
  const t = useTranslations('legalPages')
  const locale = useLocale()

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
          <p className="text-white/60 mb-8">{t('cookies.lastUpdate')}: 6 de Enero de 2025</p>
          
          <div className="prose prose-invert max-w-none text-white/80 leading-relaxed">
            {/* Intro */}
            <p className="mb-6">{t('cookies.intro')}</p>
            <p className="mb-6">{t('cookies.privacyFocus')}</p>

            {/* Section 1 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{t('cookies.section1.title')}</h2>
            <p className="mb-4">{t('cookies.section1.description')}</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong className="text-white">{t('cookies.section1.essential')}:</strong> {t('cookies.section1.essentialDesc')}</li>
              <li><strong className="text-white">{t('cookies.section1.performance')}:</strong> {t('cookies.section1.performanceDesc')}</li>
              <li><strong className="text-white">{t('cookies.section1.functionality')}:</strong> {t('cookies.section1.functionalityDesc')}</li>
              <li><strong className="text-white">{t('cookies.section1.advertising')}:</strong> {t('cookies.section1.advertisingDesc')}</li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{t('cookies.section2.title')}</h2>
            <p className="mb-4">{t('cookies.section2.description')}</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong className="text-white">{t('cookies.section2.noThirdParty')}</strong> {t('cookies.section2.noThirdPartyDesc')}</li>
              <li><strong className="text-white">{t('cookies.section2.essentialCookies')}:</strong> {t('cookies.section2.essentialCookiesDesc')}</li>
              <li><strong className="text-white">{t('cookies.section2.dataCollected')}:</strong> {t('cookies.section2.dataCollectedDesc')}</li>
            </ul>
            <p className="mb-6">{t('cookies.section2.noCookies')}</p>

            {/* Section 3 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{t('cookies.section3.title')}</h2>
            <p className="mb-4">{t('cookies.section3.description')}</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong className="text-white">{t('cookies.section3.block')}:</strong> {t('cookies.section3.blockDesc')}</li>
              <li><strong className="text-white">{t('cookies.section3.impact')}:</strong> {t('cookies.section3.impactDesc')}</li>
              <li><strong className="text-white">{t('cookies.section3.noBanner')}:</strong> {t('cookies.section3.noBannerDesc')}</li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{t('cookies.section4.title')}</h2>
            <p className="mb-6">{t('cookies.section4.description')}</p>

            {/* Section 5 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{t('cookies.section5.title')}</h2>
            <p className="mb-6">{t('cookies.section5.description')}</p>

            {/* Section 6 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{t('cookies.section6.title')}</h2>
            <p className="mb-6">
              {t('cookies.section6.description')} <a href="mailto:Contact@Zi0n.io" className="text-[#5EEC7D] hover:underline">Contact@Zi0n.io</a> {t('legalNotice.or')} <a href="tel:+14502346681" className="text-[#5EEC7D] hover:underline">+1 4502346681</a>. {t('cookies.section6.responsible')}: Katherine Rodas Pareja.
            </p>

            {/* Footer note */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
              <p className="text-white/90">
                {t('cookies.footer')} <Link href={`/${locale}/terms`} className="text-[#5EEC7D] hover:underline">{t('terms.title')}</Link>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
