"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
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
              Estamos aquí para ayudarte
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071C59] text-balance mb-6">Contáctanos</h2>
            <p className="text-lg text-[#6E6E6E] mb-8 leading-relaxed">
              ¿Tienes preguntas sobre zi0n? Nuestro equipo está listo para ayudarte a proteger tu información.
              Escríbenos y te responderemos lo antes posible.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-[#F5F8FC] rounded-xl">
                <div className="w-12 h-12 bg-[#003FFF]/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#003FFF]" />
                </div>
                <div>
                  <div className="font-medium text-[#071C59]">Email</div>
                  <div className="text-[#6E6E6E]">contacto@zi0n.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#F5F8FC] rounded-xl">
                <div className="w-12 h-12 bg-[#5EEC7D]/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#5EEC7D]" />
                </div>
                <div>
                  <div className="font-medium text-[#071C59]">Teléfono</div>
                  <div className="text-[#6E6E6E]">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#F5F8FC] rounded-xl">
                <div className="w-12 h-12 bg-[#FFB547]/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#FFB547]" />
                </div>
                <div>
                  <div className="font-medium text-[#071C59]">Ubicación</div>
                  <div className="text-[#6E6E6E]">Servicio global, soporte 24/7</div>
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
                      Nombre
                    </Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      className="bg-white border-[#E0E0E0] focus:border-[#003FFF] rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#071C59] font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-white border-[#E0E0E0] focus:border-[#003FFF] rounded-xl h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#071C59] font-medium">
                    Teléfono (opcional)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="bg-white border-[#E0E0E0] focus:border-[#003FFF] rounded-xl h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#071C59] font-medium">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="¿En qué podemos ayudarte?"
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
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
