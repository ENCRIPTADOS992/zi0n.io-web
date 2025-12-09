"use client"

import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const t = useTranslations('contact')
  
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#5EEC7D]/20 text-[#071C59] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mail className="w-4 h-4" />
              {t('badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071C59] text-balance mb-6">{t('title')}</h2>
            <p className="text-lg text-[#6E6E6E] mb-8 leading-relaxed">
              {t('subtitle')}
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-[#F5F8FC] rounded-xl">
                <div className="w-12 h-12 bg-[#003FFF]/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#003FFF]" />
                </div>
                <div>
                  <div className="font-medium text-[#071C59]">{t('info.email.label')}</div>
                  <div className="text-[#6E6E6E]">{t('info.email.value')}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#F5F8FC] rounded-xl">
                <div className="w-12 h-12 bg-[#FFB547]/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#FFB547]" />
                </div>
                <div>
                  <div className="font-medium text-[#071C59]">{t('info.location.label')}</div>
                  <div className="text-[#6E6E6E]">{t('info.location.value')}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#F5F8FC] rounded-3xl p-8 md:p-10">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#071C59] font-medium">
                      {t('form.name.label')}
                    </Label>
                    <Input
                      id="name"
                      placeholder={t('form.name.placeholder')}
                      className="bg-white border-[#E0E0E0] focus:border-[#003FFF] rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#071C59] font-medium">
                      {t('form.email.label')}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('form.email.placeholder')}
                      className="bg-white border-[#E0E0E0] focus:border-[#003FFF] rounded-xl h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#071C59] font-medium">
                    {t('form.message.label')}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={t('form.message.placeholder')}
                    rows={5}
                    className="bg-white border-[#E0E0E0] focus:border-[#003FFF] rounded-xl resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#5EEC7D] text-[#071C59] hover:bg-[#4DD96A] rounded-full font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t('form.submit')}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
