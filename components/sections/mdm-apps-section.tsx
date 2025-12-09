"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Bell, Trash2, Download, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

const appIds = ['notifications', 'wipe'] as const
const appIcons = {
  notifications: Bell,
  wipe: Trash2,
}
const appColors = {
  notifications: "#3AA6FF",
  wipe: "#FF6F61",
}

export function MDMAppsSection() {
  const t = useTranslations('mdmApps')
  
  const apps = appIds.map((id) => ({
    id,
    name: t(`apps.${id}.name`),
    description: t(`apps.${id}.description`),
    icon: appIcons[id],
    color: appColors[id],
  }))
  return (
    <section id="apps" className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#003FFF]/10 text-[#003FFF] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Smartphone className="w-4 h-4" />
            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071C59] text-balance">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-[#6E6E6E] max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-[#F5F8FC] to-white rounded-3xl p-8 md:p-10 border border-[#E0E0E0] hover:border-[#003FFF]/30 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${app.color}20` }}
                >
                  <app.icon className="w-8 h-8" style={{ color: app.color }} />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-[#071C59] mb-3">{app.name}</h3>
                <p className="text-[#6E6E6E] leading-relaxed mb-6">{app.description}</p>

                {/* Download Button */}
                <Button className="bg-[#071C59] text-white hover:bg-[#0A2570] rounded-full px-6 group-hover:bg-[#003FFF] transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  {t('download')}
                </Button>

                {/* Decorative element */}
                <div
                  className="absolute top-6 right-6 w-20 h-20 rounded-full opacity-5"
                  style={{ backgroundColor: app.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
