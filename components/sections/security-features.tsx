"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Usb, Key, CreditCard, Link2, Smartphone, Radio } from "lucide-react"

const features = [
  {
    id: "wipi",
    title: "Wipi: Defensa contra cables espía",
    description:
      "Wipi protege tu dispositivo de cables de datos o carga manipulados. Detecta conexiones sospechosas, alerta al usuario y, si es necesario, bloquea o borra el sistema para evitar cualquier extracción de información.",
    icon: Usb,
    imagePosition: "left" as const,
  },
  {
    id: "wipepin",
    title: "WipePIN: PIN de eliminación inmediata",
    description:
      "Un PIN de emergencia que, al ingresarlo, borra al instante toda la información del dispositivo, incluido el sistema Zi0n. Una acción rápida y discreta para proteger tus datos en situaciones críticas.",
    icon: Key,
    imagePosition: "right" as const,
  },
  {
    id: "simshield",
    title: "SIMShield: Protección ante manipulación de SIM",
    description:
      "Esta funcionalidad detecta cualquier cambio no autorizado en la SIM o eSIM, y alerta al usuario pudiendo borrar el sistema para proteger la información.",
    icon: CreditCard,
    imagePosition: "left" as const,
  },
  {
    id: "conecta2",
    title: "Conecta2: Control seguro entre dispositivos",
    description:
      "Conecta2 permite vincular tu dispositivo Zi0n con otros dispositivos de confianza, así como a apps externas para recibir alertas del sistema, notificaciones anónimas y gestionar bloqueos o borrados remotos.",
    icon: Link2,
    imagePosition: "right" as const,
  },
  {
    id: "fachada",
    title: "Pantalla de Fachada y Sistema Oculto",
    description:
      "Zi0n crea un sistema fachada idéntico a Android y oculta el sistema real dentro de una app falsa. Esto permite despistar a terceros, proteger tu privacidad y mantener tus datos seguros.",
    icon: Smartphone,
    imagePosition: "left" as const,
  },
  {
    id: "imei-imsi",
    title: "Tecnología de cambio IMEI y IMSI automático",
    description:
      "Cambia automáticamente el IMEI y el IMSI de tu dispositivo para proteger tu identidad y evitar el rastreo. Una capa adicional de privacidad y anonimato en tus comunicaciones.",
    icon: Radio,
    imagePosition: "right" as const,
  },
]

export function SecurityFeatures() {
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
            Protección integral
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071C59] text-balance">
            zi0n te da más seguridad
          </h2>
          <p className="mt-4 text-lg text-[#6E6E6E] max-w-2xl mx-auto">
            Funcionalidades exclusivas diseñadas para proteger tu información más sensible
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
              {/* Image/Screenshot placeholder */}
              <div className={`${feature.imagePosition === "right" ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#071C59] to-[#0A2570] overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-6 bg-[#5EEC7D]/20 rounded-3xl flex items-center justify-center">
                        <feature.icon className="w-12 h-12 text-[#5EEC7D]" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-white/20 rounded-full w-3/4 mx-auto" />
                        <div className="h-3 bg-white/10 rounded-full w-1/2 mx-auto" />
                      </div>
                    </div>
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#5EEC7D]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFB547]" />
                    <div className="w-3 h-3 rounded-full bg-[#FF6F61]" />
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className={`${feature.imagePosition === "right" ? "lg:order-1" : ""}`}>
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 bg-[#003FFF]/10 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-[#003FFF]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#071C59] mb-4">{feature.title}</h3>
                  <p className="text-[#6E6E6E] text-lg leading-relaxed">{feature.description}</p>
                  <button className="mt-6 inline-flex items-center gap-2 text-[#003FFF] font-semibold hover:gap-3 transition-all">
                    Conocer más
                    <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
