"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Store, Smartphone, HeadphonesIcon, Download, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefitKeys = ['portal', 'devices', 'support', 'demo'] as const
const benefitIcons = {
  portal: Store,
  devices: Smartphone,
  support: HeadphonesIcon,
  demo: Download,
}

export function DistributionPartners() {
  const t = useTranslations('partners')
  
  return (
    <section className="py-20 md:py-32 bg-[#AFDBFF]/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#003FFF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5EEC7D]/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#5EEC7D]/20 text-[#071C59] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            {t('badge')}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071C59] mb-6">
            {t('title')}
          </h2>
          
          <p className="text-[#6E6E6E] text-lg max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefitKeys.map((key, index) => {
            const Icon = benefitIcons[key]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border border-transparent hover:border-[#5EEC7D]/30 transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-14 h-14 bg-[#003FFF]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#003FFF]" />
                  </div>
                  <h3 className="text-[#071C59] font-semibold text-xl mb-3">{t(`benefits.${key}.title`)}</h3>
                  <p className="text-[#6E6E6E] text-sm leading-relaxed">{t(`benefits.${key}.description`)}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative bg-[#071C59] rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5EEC7D]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#003FFF]/20 rounded-full blur-3xl" />
          
          <div className="relative text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t('cta.title')}
            </h3>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#5EEC7D] text-[#071C59] hover:bg-[#4DD96A] rounded-full px-8 font-semibold group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('cta.primaryButton')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 font-semibold bg-transparent"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('cta.secondaryButton')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
