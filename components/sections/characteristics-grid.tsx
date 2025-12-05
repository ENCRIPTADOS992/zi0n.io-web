"use client"

import { motion } from "framer-motion"
import {
  Settings,
  Globe,
  RefreshCw,
  Camera,
  Timer,
  Mic,
  Shield,
  MapPin,
  Search,
  Lock,
  Bell,
  Trash2,
  Watch,
  Zap,
} from "lucide-react"

const characteristics = [
  {
    id: "1",
    title: "Instalación fácil",
    description: "El escaneo del código QR inicia la activación de inmediato, sin procesos largos ni configuraciones complejas. Completar la activación toma solo unos minutos.",
    icon: Settings,
  },
  {
    id: "2",
    title: "Servicio mundial",
    description: "Incluye tarjetas SIM encriptadas internacionales para garantizar acceso estable, usando múltiples operadores para evitar interrupciones y mejorar la cobertura.",
    icon: Globe,
    highlighted: true,
  },
  {
    id: "3",
    title: "Ni la aplicación ni el sistema pueden recibir actualizaciones push ",
    description: " Sin actualizaciones automáticas, ningún tercero puede forzar cambios no autorizados que comprometan la seguridad de los dispositivos que utilizan Zi0n.",
    icon: RefreshCw,
    highlighted: true,
  },
  {
    id: "4",
    title: "Bloqueo de Screenshots",
    description: "Evita capturas de pantalla no autorizadas en apps protegidas",
    icon: Camera,
  },
  {
    id: "5",
    title: "Borrado por inactividad",
    description: "Si el dispositivo supera el periodo de inactividad definido por el usuario, el sistema ejecuta un borrado automático para proteger toda la información.",
    icon: Timer,
  },
  {
    id: "6",
    title: "Desactivar micrófono y cámara",
    description: "Zi0n permite inhabilitar por completo el micrófono y la cámara en cualquier parte o app del sistema, evitando cualquier intento de grabación o acceso no autorizado.",
    icon: Mic,
  },
  {
    id: "7",
    title: "VPN dinámica con red Descartes",
    description: "Zi0n emplea una VPN avanzada y dinámica que opera sobre una red descentralizada, rotando constantemente la dirección IP del sistema para maximizar la privacidad y dificultar cualquier intento de rastreo.",
    icon: Shield,
    highlighted: true,
  },
  {
    id: "8",
    title: "Sin ubicaciones de servidor rastreables",
    description: "Infraestructura diseñada para el anonimato total",
    icon: MapPin,
    highlighted: true,
  },
  {
    id: "9",
    title: "Evaluación de Vulnerabilidades",
    description: "Análisis continuo de amenazas y puntos débiles",
    icon: Search,
  },
  {
    id: "10",
    title: "Control de permisos en Apps",
    description: "Gestiona qué puede acceder cada aplicación",
    icon: Lock,
  },
  {
    id: "11",
    title: "Visualización de notificaciones seguras",
    description: "Notificaciones encriptadas y protegidas",
    icon: Bell,
  },
  {
    id: "12",
    title: "Eliminar o bloquear remotamente",
    description: "Control total desde cualquier lugar del mundo",
    icon: Trash2,
  },
  {
    id: "13",
    title: "Vinculación con SmartWatch",
    description: "Extiende la seguridad a tu reloj inteligente",
    icon: Watch,
  },
]

export function CharacteristicsGrid() {
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
            Todo incluido
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071C59] text-balance">
            Así funciona la seguridad extrema de Zi0n
          </h2>
          <p className="mt-4 text-lg text-[#6E6E6E] max-w-2xl mx-auto">
            Características diseñadas para proteger tu información en todo momento
          </p>
        </motion.div>

        {/* Characteristics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {characteristics.map((char, index) => (
            <motion.div
              key={char.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg ${
                char.highlighted
                  ? "bg-[#071C59] text-white hover:bg-[#0A2570]"
                  : "bg-white text-[#071C59] border border-[#E0E0E0] hover:border-[#003FFF]/30"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  char.highlighted ? "bg-[#5EEC7D]/20" : "bg-[#003FFF]/10"
                }`}
              >
                <char.icon className={`w-6 h-6 ${char.highlighted ? "text-[#5EEC7D]" : "text-[#003FFF]"}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{char.title}</h3>
              <p className={`text-sm leading-relaxed ${char.highlighted ? "text-white/70" : "text-[#6E6E6E]"}`}>
                {char.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
