"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, ArrowRight, CheckCircle } from "lucide-react"

const benefits = [
  "Configuración en menos de 5 minutos",
  "Prueba gratuita de 14 días",
  "Soporte técnico 24/7",
  "Cancelación sin compromiso",
]

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-[#071C59] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#003FFF]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#5EEC7D]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-[#5EEC7D]/20 rounded-2xl flex items-center justify-center">
            <Shield className="w-8 h-8 text-[#5EEC7D]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
            Protege tu dispositivo hoy mismo
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Únete a miles de usuarios que ya confían en Zi0n para proteger su información más valiosa. La seguridad que
            necesitas, al alcance de tu mano.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-2 text-white/80 text-sm"
              >
                <CheckCircle className="w-4 h-4 text-[#5EEC7D]" />
                {benefit}
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#5EEC7D] text-[#071C59] hover:bg-[#4DD96A] rounded-full px-8 font-semibold group animate-pulse-glow"
            >
              Comenzar prueba gratuita
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 font-semibold bg-transparent"
            >
              Hablar con ventas
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
