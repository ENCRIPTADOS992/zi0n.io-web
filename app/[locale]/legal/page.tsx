"use client"

import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LegalNoticePage() {
  const t = useTranslations('legalPages')
  const locale = useLocale()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071C59] to-[#0a2a7a]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#071C59]/95 backdrop-blur-sm border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href={`/${locale}`}>
              <Button variant="ghost" className="text-white hover:text-[#5EEC7D] hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('backToHome')}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">{t('legalNotice.title')}</h1>
          
          <div className="prose prose-invert max-w-none">
            {/* Company Info */}
            <p className="text-white/80 leading-relaxed mb-6">
              GLOBAL INVESTMENT ST S.A.S. (en adelante, "la Empresa" o "Zi0n"), identificada con NIT 901206726-2, es una sociedad por acciones simplificada constituida en Colombia, con domicilio principal en Calle 7 No. 39-215, Oficina 1009, Edificio Granahorrar, Medellín, Antioquia, Colombia. La Empresa se dedica a actividades de programación informática (CIIU 6201), inversión en sociedades, publicidad (CIIU 7310), diseño especializado (CIIU 7410) y consultoría de gestión (CIIU 7020), entre otras relacionadas con el desarrollo y prestación de servicios de seguridad móvil avanzada bajo la marca Zi0n.
            </p>

            {/* Contact */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{t('legalNotice.contact')}</h2>
            <ul className="text-white/80 space-y-2 list-disc list-inside mb-6">
              <li>Correo electrónico: <a href="mailto:contacto@zi0n.com" className="text-[#5EEC7D] hover:underline">contacto@zi0n.com</a> (para soporte y consultas generales) o <a href="mailto:universalencriptados@gmail.com" className="text-[#5EEC7D] hover:underline">universalencriptados@gmail.com</a> (para notificaciones judiciales).</li>
              <li>Teléfono: <a href="tel:+573009291110" className="text-[#5EEC7D] hover:underline">+57 300 929 1110</a></li>
              <li>Dirección para notificaciones judiciales: Calle 7 No. 39-215, Oficina 1009, Edificio Granahorrar, Medellín, Antioquia, Colombia.</li>
            </ul>

            {/* Jurisdiction */}
            <p className="text-white/80 leading-relaxed mb-6">
              Este sitio web y los servicios asociados son operados por la Empresa bajo la jurisdicción de las leyes de la República de Colombia. Cualquier disputa relacionada con el uso del sitio o los servicios se resolverá exclusivamente en los tribunales de Medellín, Antioquia.
            </p>

            {/* Disclaimer */}
            <p className="text-white/80 leading-relaxed mb-6">
              La Empresa no garantiza la disponibilidad ininterrumpida del sitio web ni la ausencia de errores. El contenido se proporciona "tal cual" sin garantías expresas o implícitas. La Empresa se reserva el derecho de modificar el sitio web en cualquier momento sin previo aviso.
            </p>

            {/* Intellectual Property */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{t('legalNotice.intellectualProperty')}</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Todos los derechos de propiedad intelectual sobre Zi0n, incluyendo software, diseños, marcas y contenidos, pertenecen a la Empresa o a sus licenciantes. Queda prohibida cualquier reproducción, distribución o uso no autorizado.
            </p>

            {/* Third Party Links */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{t('legalNotice.thirdPartyLinks')}</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              El sitio puede contener enlaces a sitios web de terceros. La Empresa no es responsable por el contenido o prácticas de privacidad de dichos sitios.
            </p>

            {/* Last Update */}
            <p className="text-white/60 text-sm mt-8 pt-6 border-t border-white/10">
              {t('legalNotice.lastUpdate')}: 22 de diciembre de 2025. Para más información, consulte los <Link href={`/${locale}/terms`} className="text-[#5EEC7D] hover:underline">Términos y Condiciones de Uso</Link> y la Política de Tratamiento de Datos.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
