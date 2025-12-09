"use client"

import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'
import {
  Settings,
  Globe,
  RefreshCwOff,
  CameraOff,
  Timer,
  EyeOff,
  MicOff,
  ServerOff,
  Network,
  ShieldCheck,
  ScanSearch,
  Watch,
  Zap,
} from "lucide-react"

const characteristicKeys = [
  "easyInstall",
  "globalService", 
  "noUpdates",
  "screenshotBlock",
  "inactivityWipe",
  "hiddenSystem",
  "disableMicCamera",
  "noServers",
  "dynamicVpn",
  "permissionControl",
  "vulnerabilityAssessment",
  "smartwatchIntegration",
]

const characteristicIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "easyInstall": Settings,
  "globalService": Globe,
  "noUpdates": RefreshCwOff,
  "screenshotBlock": CameraOff,
  "inactivityWipe": Timer,
  "hiddenSystem": EyeOff,
  "disableMicCamera": MicOff,
  "noServers": ServerOff,
  "dynamicVpn": Network,
  "permissionControl": ShieldCheck,
  "vulnerabilityAssessment": ScanSearch,
  "smartwatchIntegration": Watch,
}

const highlightedKeys = ["globalService", "screenshotBlock", "hiddenSystem", "noServers", "permissionControl", "smartwatchIntegration"]

export function CharacteristicsGrid() {
  const t = useTranslations('characteristics')
  
  return (
    <section id="characteristics" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#F5F8FC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#5792E5]/20 text-[#5792E5] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071C59] text-balance">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-[#6E6E6E] max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Characteristics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {characteristicKeys.map((key, index) => {
            const Icon = characteristicIcons[key]
            const highlighted = highlightedKeys.includes(key)
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg ${
                  highlighted
                    ? "bg-[#071C59] text-white hover:bg-[#0A2570]"
                    : "bg-white text-[#071C59] border border-[#E0E0E0] hover:border-[#003FFF]/30"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    highlighted ? "bg-[#5EEC7D]/20" : "bg-[#003FFF]/10"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${highlighted ? "text-[#5EEC7D]" : "text-[#003FFF]"}`} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t(`items.${key}.title`)}</h3>
                <p className={`text-sm leading-relaxed ${highlighted ? "text-white/70" : "text-[#6E6E6E]"}`}>
                  {t(`items.${key}.description`)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
