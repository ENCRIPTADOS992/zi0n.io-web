"use client"

import { motion } from "framer-motion"
import { Bell, Trash2, Download, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

const apps = [
  {
    id: "notifications",
    name: "App de Notificaciones Push",
    description:
      "Recibe alertas en tiempo real sobre el estado de seguridad de tu dispositivo y eventos importantes del sistema.",
    icon: Bell,
    color: "#3AA6FF",
  },
  {
    id: "wipe",
    name: "App de Borrado y Bloqueo",
    description: "Control remoto para eliminar datos sensibles o bloquear el dispositivo en caso de pérdida o robo.",
    icon: Trash2,
    color: "#FF6F61",
  },
]

export function MDMAppsSection() {
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
            Ecosistema MDM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071C59] text-balance">
            Descarga las Apps que se integran con tu sistema MDM
          </h2>
          <p className="mt-4 text-lg text-[#6E6E6E] max-w-2xl mx-auto">
            Aplicaciones complementarias para maximizar el control y la seguridad de tu dispositivo
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
                  Descargar
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
