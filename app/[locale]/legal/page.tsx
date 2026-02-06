"use client"

import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LegalNoticePage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">{t('legalNotice.title')}</h1>
          
          <div className="prose prose-invert max-w-none">
            {/* Company Info */}
            <p className="text-white/80 leading-relaxed mb-6">
              {t('legalNotice.companyInfo')}
            </p>

            {/* Contact */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{t('legalNotice.contact')}</h2>
            <ul className="text-white/80 space-y-2 list-disc list-inside mb-6">
              <li>{t('legalNotice.contactEmail')}: <a href="mailto:Contact@Zi0n.io" className="text-[#5EEC7D] hover:underline">Contact@Zi0n.io</a> ({t('legalNotice.contactEmailSupport')}) {t('legalNotice.or')} ({t('legalNotice.contactEmailLegal')}).</li>
              <li>{t('legalNotice.contactPhone')}: <a href="tel:+14502346681" className="text-[#5EEC7D] hover:underline">+1 4502346681</a></li>
              <li>{t('legalNotice.contactAddress')}: 2828, boulevard laurier, suite 700 Quebec (Qc) G1V 0B9, Quebec, Canadá.</li>
            </ul>

            {/* Jurisdiction */}
            <p className="text-white/80 leading-relaxed mb-6">
              {t('legalNotice.jurisdiction')}
            </p>

            {/* Disclaimer */}
            <p className="text-white/80 leading-relaxed mb-6">
              {t('legalNotice.disclaimer')}
            </p>

            {/* Intellectual Property */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{t('legalNotice.intellectualProperty')}</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              {t('legalNotice.intellectualPropertyText')}
            </p>

            {/* Third Party Links */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{t('legalNotice.thirdPartyLinks')}</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              {t('legalNotice.thirdPartyLinksText')}
            </p>

            {/* Last Update */}
            <p className="text-white/60 text-sm mt-8 pt-6 border-t border-white/10">
              {t('legalNotice.lastUpdate')}: 6 de Enero de 2025. {t('legalNotice.moreInfo')} <Link href={`/${locale}/terms`} className="text-[#5EEC7D] hover:underline">{t('terms.title')}</Link>.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
