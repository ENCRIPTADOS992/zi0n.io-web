"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Usb, Key, CreditCard, Link2, Smartphone } from "lucide-react"
import Image from "next/image"

const features = [
  {
    id: "wipi",
    title: "Wipi: Defensa contra cables espía",
    description:
      "Wipi protege tu dispositivo de cables de datos o carga manipulados. Detecta conexiones sospechosas, alerta al usuario y según tu configuración borra el sistema para evitar cualquier extracción de información.",
    icon: Usb,
    image: "/features/wipi.webp",
    imagePosition: "left" as const,
  },
  {
    id: "wipepin",
    title: "WipPIN: PIN de borrado de fábrica",
    description:
      "Un PIN que al ingresarlo, borra al instante toda la información del dispositivo. Una acción rápida y discreta para proteger tus datos en situaciones críticas.",
    icon: Key,
    image: "/features/wipepin.webp",
    imagePosition: "right" as const,
  },
  {
    id: "wipsim",
    title: "WipSIM: Protección ante manipulación de SIM",
    description:
      "Esta funcionalidad detecta cualquier cambio no autorizado en la SIM o eSIM, y alerta al usuario pudiendo borrar el sistema para proteger la información.",
    icon: CreditCard,
    image: "/features/wipsim.webp",
    imagePosition: "left" as const,
  },
  {
    id: "wipconect",
    title: "WipConect: Control seguro entre dispositivos",
    description:
      "WipConect permite vincular tus dispositivos Zi0n a otros sistemas de confianza, permitiendo gestionar (renovar licencias, bloquear o borrar otros sistemas Zi0n) todos los equipos que estén conectados a tu cuenta.",
    icon: Link2,
    image: "/features/wipconect.webp",
    imagePosition: "right" as const,
  },
  {
    id: "wipnoti",
    title: "WipNoti: Integración con apps de notificaciones",
    description:
      "Zi0n puede vincularse con aplicaciones externas para permitir la visualización segura de notificaciones personalizadas desde dispositivos convencionales, sin exponer el sistema real.",
    icon: Smartphone,
    image: "/features/wipnoti.webp",
    imagePosition: "left" as const,
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
            Zi0n te da más seguridad
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
           {/* Image/Screenshot */}
              <div className={`${feature.imagePosition === "right" ? "lg:order-2" : ""}`}>
                <div className="relative flex items-center justify-center min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[700px]">
                  {/* Phone frame - decorative background */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 sm:w-60 md:w-64 lg:w-72 bg-[#071C59] rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-3 shadow-2xl">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 md:w-28 h-5 sm:h-6 md:h-7 bg-[#071C59] rounded-b-xl sm:rounded-b-2xl z-10" />
                    {/* Screen background */}
                    <div className="bg-gradient-to-b from-[#0A2570] to-[#071C59] rounded-[1.5rem] sm:rounded-[2rem] h-[340px] sm:h-[400px] md:h-[460px] lg:h-[520px]" />
                    
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
                  
                  {/* Screenshot image - centered, overflows phone horizontally */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={800}
                      height={600}
                      className="w-[340px] sm:w-[400px] md:w-[460px] lg:w-[520px] h-auto max-w-none rounded-2xl drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)]"
                    />
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
