"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { ShieldCheck, Usb, Key, CreditCard, Link2, Smartphone } from "lucide-react"
import Image from "next/image"

const featureIds = ['wipi', 'wipepin', 'wipsim', 'wipconect', 'wipnoti'] as const
const featureIcons = {
  wipi: Usb,
  wipepin: Key,
  wipsim: CreditCard,
  wipconect: Link2,
  wipnoti: Smartphone,
}

export function SecurityFeatures() {
  const t = useTranslations('security')
  
  const features = featureIds.map((id, index) => ({
    id,
    title: t(`features.${id}.title`),
    cardTitle: t(`features.${id}.cardTitle`),
    cardDescription: t(`features.${id}.cardDescription`),
    description: t(`features.${id}.description`),
    icon: featureIcons[id],
    backgroundImage: "/features/wipi-bg.webp",
    imagePosition: index % 2 === 0 ? "left" : "right" as const,
  }))

  return (
    <section id="security" className="py-20 md:py-32 bg-[#AFDBFF]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#5EEC7D]/20 text-[#071C59] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ShieldCheck className="w-4 h-4" />
            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071C59] text-balance">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-[#6E6E6E] max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
           {/* Feature Card with Background Image */}
              <div className={`${feature.imagePosition === "right" ? "lg:order-2" : ""}`}>
                <div className="relative flex items-center justify-center min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[700px]">
                  {/* Phone frame - decorative background */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 sm:w-60 md:w-64 lg:w-72 bg-[#071C59] rounded-4xl sm:rounded-[2.5rem] p-2 sm:p-3 shadow-2xl">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 md:w-28 h-5 sm:h-6 md:h-7 bg-[#071C59] rounded-b-xl sm:rounded-b-2xl z-10" />
                    {/* Screen background */}
                    <div className="bg-linear-to-b from-[#0A2570] to-[#071C59] rounded-3xl sm:rounded-4xl h-[340px] sm:h-[400px] md:h-[460px] lg:h-[520px]" />
                    
                    {/* Decorative floating icon - top right */}
                    <motion.div 
                      className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 w-14 h-14 sm:w-16 sm:h-16 bg-[#5EEC7D] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl z-20"
                      animate={{ 
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#071C59]" />
                    </motion.div>
                    {/* Decorative floating icon - bottom left */}
                    <motion.div 
                      className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 w-14 h-14 sm:w-16 sm:h-16 bg-[#3AA6FF] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl z-20"
                      animate={{ 
                        y: [0, 8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    >
                      <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    
                    {/* Glow effects */}
                    <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 bg-[#5EEC7D]/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute -inset-4 sm:-inset-5 md:-inset-6 bg-[#003FFF]/10 rounded-full blur-2xl -z-10" />
                  </div>
                  
                  {/* Feature component with background image and info card */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[340px] sm:w-[400px] md:w-[460px] lg:w-[520px]">
                    {/* Background image container */}
                    <div className="relative rounded-2xl overflow-hidden drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)]">
                      {/* Background Image */}
                      <Image
                        src={feature.backgroundImage}
                        alt={feature.title}
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                      
                      {/* Info Card overlay - positioned in center */}
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-xl w-full max-w-[90%] flex items-center gap-3 sm:gap-4">
                          {/* Icon */}
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#AFDBFF]/50 rounded-xl flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#071C59]" />
                          </div>
                          
                          {/* Text content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-[#071C59] font-bold text-sm sm:text-base">{feature.title}</h4>
                            <p className="text-[#6E6E6E] text-xs sm:text-sm line-clamp-2">{feature.cardDescription}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className={`${feature.imagePosition === "right" ? "lg:order-1" : ""}`}>
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 bg-[#003FFF]/10 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-[#003FFF]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#071C59] mb-4">{feature.cardTitle}</h3>
                  <p className="text-[#6E6E6E] text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
