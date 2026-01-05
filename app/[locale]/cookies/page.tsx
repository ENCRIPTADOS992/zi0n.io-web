"use client"

import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{t('cookies.title')}</h1>
          <p className="text-white/60 mb-8">{t('cookies.lastUpdate')}: 22 de diciembre de 2025</p>
          
          <div className="prose prose-invert max-w-none text-white/80 leading-relaxed">
            {/* Intro */}
            <p className="mb-6">
              GLOBAL INVESTMENT ST S.A.S. (NIT 901206726-2, en adelante "la Empresa" o "Zi0n"), con domicilio en Calle 7 No. 39-215, Oficina 1009, Edificio Granahorrar, Medellín, Antioquia, Colombia, opera el sitio web <a href="https://www.zi0n.io/es" className="text-[#5EEC7D] hover:underline">https://www.zi0n.io/es</a> (en adelante, "el Sitio"). Esta Política de Cookies explica cómo utilizamos cookies y tecnologías similares en el Sitio, en cumplimiento de la Ley 1581 de 2012 y normas relacionadas con la protección de datos en Colombia.
            </p>
            <p className="mb-6">
              Dado nuestro enfoque en la privacidad máxima y la no recopilación de datos innecesarios, el Sitio <strong className="text-white">no utiliza cookies de terceros ni cookies de seguimiento</strong>. Solo empleamos cookies estrictamente necesarias para el funcionamiento básico del Sitio, si aplica.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. ¿Qué son las Cookies?</h2>
            <p className="mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (computadora, teléfono o tableta) cuando visita un sitio web. Pueden ser utilizadas para recordar preferencias, mejorar la experiencia de usuario o recopilar datos analíticos. Existen diferentes tipos:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong className="text-white">Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio (ej. mantener sesiones).</li>
              <li><strong className="text-white">Cookies de rendimiento:</strong> Recopilan datos anónimos sobre el uso del sitio.</li>
              <li><strong className="text-white">Cookies de funcionalidad:</strong> Recuerdan elecciones del usuario (ej. idioma).</li>
              <li><strong className="text-white">Cookies de publicidad:</strong> Usadas para mostrar anuncios personalizados.</li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Cookies Utilizadas en el Sitio</h2>
            <p className="mb-4">
              En Zi0n, priorizamos su privacidad y no recopilamos ni almacenamos datos de navegación más allá de lo esencial para proporcionar los Servicios. Por lo tanto:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong className="text-white">No utilizamos cookies de terceros, analíticas ni de publicidad.</strong> No compartimos datos con redes publicitarias, Google Analytics u otros servicios de tracking.</li>
              <li><strong className="text-white">Cookies esenciales (si aplican):</strong> Podríamos usar cookies técnicas temporales (de sesión) para funciones básicas como la navegación segura o el procesamiento del código QR para la instalación. Estas se eliminan automáticamente al cerrar el navegador y no recopilan datos personales identificables.</li>
              <li><strong className="text-white">Datos recopilados:</strong> Ninguno. No almacenamos información sobre su visita, IP, ubicación o comportamiento en el Sitio, salvo el correo electrónico proporcionado voluntariamente para registro o contacto.</li>
            </ul>
            <p className="mb-6">
              Si el Sitio no usa cookies en absoluto (como en páginas estáticas sin scripts de tracking), no se instalará ninguna cookie en su dispositivo.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Gestión de Cookies</h2>
            <p className="mb-4">
              Usted puede controlar las cookies a través de la configuración de su navegador:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong className="text-white">Bloquear o eliminar cookies:</strong> La mayoría de los navegadores (como Chrome, Firefox, Safari) permiten rechazar cookies o eliminarlas. Consulte la sección de ayuda de su navegador para instrucciones.</li>
              <li><strong className="text-white">Impacto:</strong> Bloquear cookies esenciales podría afectar la funcionalidad del Sitio, como el escaneo de QR.</li>
              <li><strong className="text-white">No usamos banners de consentimiento:</strong> Dado que no usamos cookies no esenciales, no mostramos banners de cookies. Su navegación implica aceptación de esta Política.</li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Enlaces a Terceros</h2>
            <p className="mb-6">
              El Sitio podría contener enlaces a sitios web de terceros (ej. procesadores de pago). Estos sitios tienen sus propias políticas de cookies, por las que no somos responsables. Revise sus políticas antes de interactuar.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Modificaciones a la Política</h2>
            <p className="mb-6">
              Nos reservamos el derecho de actualizar esta Política. Los cambios se publicarán en el Sitio y se notificarán por correo si aplica, con al menos 15 días de anticipación.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Contacto</h2>
            <p className="mb-6">
              Para preguntas sobre esta Política, contacte a <a href="mailto:contacto@zi0n.com" className="text-[#5EEC7D] hover:underline">contacto@zi0n.com</a> o <a href="tel:+573009291110" className="text-[#5EEC7D] hover:underline">+57 300 929 1110</a>. Responsable: Katherine Rodas Pareja.
            </p>

            {/* Footer note */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
              <p className="text-white/90">
                Esta Política se integra con nuestra <Link href={`/${locale}/terms`} className="text-[#5EEC7D] hover:underline">Política de Tratamiento de Datos Personales</Link> y <Link href={`/${locale}/terms`} className="text-[#5EEC7D] hover:underline">Términos y Condiciones de Uso</Link>. Al usar el Sitio, acepta esta Política.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
