"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Smartphone, ArrowRight } from "lucide-react"

export function HeroSection() {
  const t = useTranslations('hero')
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#AFDBFF]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-60 h-60 bg-[#5EEC7D]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#AFDBFF]/40 text-[#071C59] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              {t('badge')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#071C59] leading-tight tracking-tight text-balance">
              {t('title')}{" "}
              <span className="bg-gradient-to-r from-[#003FFF] to-[#3AA6FF] bg-clip-text text-transparent">
                {t('titleHighlight')}
              </span>{" "}
              {t('titleEnd')}
            </h1>

            <p className="mt-6 text-lg text-[#6E6E6E] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t('description')}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#5EEC7D] text-[#071C59] hover:bg-[#4DD96A] rounded-full px-8 font-semibold group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('ctaPrimary')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#003FFF] text-[#003FFF] hover:bg-[#003FFF]/10 rounded-full px-8 font-semibold bg-transparent"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('ctaSecondary')}
              </Button>
            </div>

            {/* Stats */}
           
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-[500px] md:w-80 md:h-[560px]">
              {/* Phone mockup */}
              <div className="absolute inset-0 bg-[#071C59] rounded-[3rem] shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#071C59] rounded-b-2xl" />
                <div className="absolute inset-2 bg-gradient-to-br from-[#0A2570] to-[#071C59] rounded-[2.5rem] flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-[#5EEC7D]/20 rounded-full flex items-center justify-center">
                      <Shield className="w-10 h-10 text-[#5EEC7D]" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{t('phoneTitle')}</h3>
                    <p className="text-white/60 text-sm">{t('phoneSubtitle')}</p>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                        <Lock className="w-5 h-5 text-[#5EEC7D]" />
                        <span className="text-white/80 text-sm">{t('encryptionActive')}</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                        <Smartphone className="w-5 h-5 text-[#3AA6FF]" />
                        <span className="text-white/80 text-sm">{t('mdmConnected')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#5EEC7D] rounded-2xl shadow-lg flex items-center justify-center animate-float">
                <Shield className="w-8 h-8 text-[#071C59]" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-[#003FFF] rounded-2xl shadow-lg flex items-center justify-center animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Lock className="w-7 h-7 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
