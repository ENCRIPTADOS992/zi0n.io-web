"use client"

import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{t('terms.title')}</h1>
          <p className="text-white/60 mb-8">{t('terms.lastUpdate')}: 22 de diciembre de 2025</p>
          
          <div className="prose prose-invert max-w-none text-white/80 leading-relaxed">
            {/* Intro */}
            <p className="mb-6">
              Estos Términos y Condiciones de Uso (en adelante, "Términos") regulan el acceso y uso de los servicios de seguridad móvil avanzada proporcionados por GLOBAL INVESTMENT ST S.A.S. (NIT 901206726-2, en adelante "la Empresa" o "Zi0n") a través del sitio web <a href="https://www.zi0n.io/es" className="text-[#5EEC7D] hover:underline">https://www.zi0n.io/es</a> y cualquier aplicación o software asociado (en adelante, "los Servicios"). Al acceder, instalar o usar los Servicios, usted (el "Usuario" o "Contratante") acepta estos Términos en su totalidad. Si no está de acuerdo, no utilice los Servicios.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Aceptación del Contrato</h2>
            <p className="mb-6">
              Los términos aquí previstos, se aceptan al escanear el QR para activar los Servicios. El Usuario declara haber leído y comprendido todas las cláusulas, asumiendo plena responsabilidad por su cumplimiento.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Licencia</h2>
            <p className="mb-4">
              <strong className="text-white">2.1.</strong> Durante la vigencia y sujeto a estos Términos, la Empresa concede al Usuario una licencia limitada, mundial, no exclusiva, intransferible y revocable para usar el Software y Servicios, exclusivamente para fines lícitos de seguridad móvil y protección de datos. Cualquier uso fuera de este ámbito invalida la licencia automáticamente.
            </p>
            <p className="mb-4">
              <strong className="text-white">2.2.</strong> Sugestiones y Feedback: El Usuario concede a la Empresa, de forma irrevocable y perpetua, el derecho a usar sugerencias, comentarios o ideas proporcionadas por sus representantes, para mejorar, desarrollar o mercadear los Servicios, sin compensación alguna.
            </p>
            <p className="mb-6">
              <strong className="text-white">2.3.</strong> Prohibiciones: El Usuario no podrá: (i) sublicenciar, revender o distribuir los Servicios; (ii) realizar ingeniería inversa, descompilar o modificar el Software; (iii) usar los Servicios para fines ilícitos o que violen derechos de terceros.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Conectividad</h2>
            <p className="mb-4">
              <strong className="text-white">3.1.</strong> Aunque se esfuerza por garantizar conectividad ideal, factores externos (como oscilaciones de operadores) pueden afectar el servicio. La Empresa no garantiza conectividad continua ni será responsable por pérdidas derivadas de instabilidades de terceros.
            </p>
            <p className="mb-6">
              <strong className="text-white">3.2.</strong> El Usuario es responsable de mantener una conexión estable y segura, eximiendo a la Empresa de cualquier interrupción causada por fallos en redes de terceros.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Instalación y Seguridad</h2>
            <p className="mb-4">
              <strong className="text-white">4.1.</strong> La instalación se realiza vía escaneo de QR proporcionado por la Empresa. El Usuario recibirá unas instrucciones guía por correo electrónico y asumirá responsabilidad integral por la correcta implementación en sus dispositivos, realizando backups previos. Cualquier instalación inadecuada exime a la Empresa de responsabilidad por daños, incluyendo pérdidas de datos o fallos en el dispositivo.
            </p>
            <p className="mb-4">
              <strong className="text-white">4.2.</strong> El Usuario garantizará que sus dispositivos cumplan con normas de seguridad aplicables en Colombia. La Empresa podrá suspender la instalación si el entorno es inseguro o no cumple con regulaciones.
            </p>
            <p className="mb-6">
              <strong className="text-white">4.3.</strong> El Usuario indemnizará a la Empresa por cualquier reclamo derivado de condiciones inseguras en sus instalaciones o incumplimientos regulatorios.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Pagos y Facturación</h2>
            <p className="mb-4">
              Los Servicios se prestan bajo un modelo de suscripción recurrente. La suscripción inicia con la activación vía QR.
            </p>
            <p className="mb-4">
              Todos los pagos por la suscripción deben realizarse exclusivamente a través de los distribuidores autorizados por la Empresa utilizando los métodos de pago indicados por ellos. La Empresa no procesa pagos directamente y no almacena datos de pago; cualquier transacción no oficial invalida el soporte y garantías.
            </p>
            <p className="mb-6">
              Cada Parte es responsable de sus tributos aplicables. Los cambios en legislación tributaria permitirán ajustes en los valores de la suscripción, con notificación previa de al menos 15 días. No hay reembolsos por periodos de suscripción ya iniciados o servicios prestados, salvo disposición expresa por ley imperativa.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Vigencia y Rescisión</h2>
            <p className="mb-4">
              La vigencia de estos Términos y de los Servicios se determina por el término de adquisición, iniciando desde la Fecha de Inicio de la Licencia (activación vía QR) hasta la Fecha de Expiración de la Licencia adquirida.
            </p>
            <p className="mb-6">
              La Empresa podrá desactivar inmediatamente cuentas, revocar la Licencia y suspender el acceso a los Servicios sin aviso previo ni responsabilidad alguna, en caso de violaciones a estos Términos, incluyendo, pero no limitado a: (i) usos ilícitos o sospecha razonable de los mismos (basada en evidencia como patrones de uso, reportes de terceros o monitoreo automatizado del Software); (ii) incumplimientos contractuales graves; (iii) impagos; (iv) infracciones a propiedad intelectual; o (v) cualquier conducta que exponga a la Empresa a riesgos legales, regulatorios o reputacionales. La sospecha razonable de usos ilícitos (ej. narcotráfico, terrorismo, lavado de activos, financiación al terrorismo), permitirá la desactivación inmediata, sin necesidad de prueba concluyente, y el Usuario indemnizará a la Empresa por cualquier daño derivado.
            </p>

            {/* Section 7 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Garantías</h2>
            <p className="mb-6">
              La Empresa garantiza disponibilidad mínima del 99.7% mensual del software. Los Servicios se proporcionan "tal cual", sin garantías adicionales expresas o implícitas, incluyendo merchantability, fitness for a particular purpose o no infracción. El Usuario verifica cumplimiento con regulaciones de su sector y asume todos los riesgos de uso. No hay garantías contra fallos causados por modificaciones del Usuario, usos no autorizados o factores externos.
            </p>

            {/* Section 8 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">8. Limitación de Responsabilidad</h2>
            <p className="mb-4">
              Las Partes reconocen y acuerdan que, en la medida permitida por la ley aplicable, ninguna de las Partes, ni sus Afiliadas, distribuidores, directivos, empleados, agentes o subcontratistas serán responsables por daños especiales, indirectos, incidentales, consecuenciales, punitivos, por confianza o ejemplares derivados o relacionados con estos Términos, el uso o la imposibilidad de uso de los Servicios, incluyendo, sin limitación, aquellos causados por negligencia, fallos del sistema, fallos de hardware, interrupciones de red, brechas de seguridad no imputables a la Empresa, o cualquier otro evento, aun si han sido advertidas previamente de la posibilidad de tales daños.
            </p>
            <p className="mb-4">
              En la medida permitida por la legislación aplicable (incluyendo el Código Civil colombiano y la Ley 1581 de 2012), la responsabilidad total de la Empresa, sus Afiliadas y distribuidores por cualquier pérdida o daño relacionado con estos Términos, el uso o la imposibilidad de uso de los Servicios o el Software Zi0n, ya sea basado en responsabilidad contractual, extracontractual, por garantía o por negligencia eventual, quedará limitada al valor total efectivamente pagado por el Usuario a la Empresa en los 12 (doce) meses anteriores al hecho que dio origen a la referida responsabilidad. Esta limitación aplica a todas las reclamaciones acumuladas.
            </p>
            <p className="mb-6">
              Adicionalmente, la Empresa no será responsable por: (i) daños derivados de usos ilícitos o no autorizados de los Servicios (ej. narcotráfico, terrorismo, lavado de activos, ciberdelitos); (ii) pérdidas de datos o daños a dispositivos causados por acciones del Usuario o terceros; (iii) incompatibilidades con hardware o software no certificados; (iv) interrupciones debidas a factores externos como redes de telecomunicaciones o eventos de fuerza mayor. El Usuario asume exclusivamente estos riesgos y defenderá e indemnizará a la Empresa por cualquier reclamo derivado.
            </p>

            {/* Section 9 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">9. Distribución Autorizada</h2>
            <p className="mb-6">
              Los distribuidores autorizados serán quienes se encargan de las adquisiciones oficiales. Las demás por fuera de los distribuidores invalidan las garantías y soporte. La Empresa podrá actuar legalmente contra distribuciones no autorizadas, y el Usuario indemnizará por reclamos derivados.
            </p>

            {/* Section 10 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">10. Propiedad Intelectual</h2>
            <p className="mb-4">
              La Empresa retiene y se reserva de manera exclusiva y absoluta todos los derechos, títulos e intereses sobre el Software Zi0n, los Servicios, y cualquier material relacionado, incluyendo, sin limitación, códigos fuente y objeto, algoritmos, invenciones, patentes, marcas registradas y no registradas, derechos de autor, derechos morales, diseños, know-how, secretos comerciales, bases de datos, interfaces de usuario, documentación técnica y cualquier mejora, modificación o derivado de los mismos (colectivamente, "Propiedad Intelectual de la Empresa"). El Usuario no adquiere ningún derecho de propiedad, título o interés sobre la Propiedad Intelectual de la Empresa, salvo la licencia limitada, revocable y no exclusiva concedida expresamente en estos Términos para el uso de los Servicios durante la vigencia.
            </p>
            <p className="mb-4">
              El Usuario se compromete a no: (i) copiar, reproducir, distribuir, transmitir, exhibir, vender, alquilar, sublicenciar o explotar de cualquier forma la Propiedad Intelectual de la Empresa sin autorización escrita previa; (ii) realizar ingeniería inversa, descompilar, desensamblar o intentar derivar el código fuente o estructura subyacente del Software; (iii) remover, alterar u ocultar avisos de derechos de autor, marcas o notificaciones de propiedad; (iv) crear obras derivadas o integraciones no autorizadas; o (v) usar la Propiedad Intelectual para fines competitivos o para desarrollar productos similares.
            </p>
            <p className="mb-4">
              Cualquier sugerencia, comentario, idea, mejora o feedback proporcionado por el Usuario o sus representantes respecto a los Servicios (incluyendo, pero no limitado a, ideas para nuevas funciones o modificaciones) se considerará cedido de forma irrevocable, perpetua, mundial y libre de regalías a la Empresa, quien podrá usarlo, incorporarlo, comercializarlo o explotarlo sin compensación ni obligación alguna hacia el Usuario.
            </p>
            <p className="mb-6">
              En caso de cualquier infracción o sospecha razonable de infracción a la Propiedad Intelectual de la Empresa, esta podrá rescindir inmediatamente estos Términos, revocar la Licencia, suspender el acceso a los Servicios y tomar medidas legales inmediatas, incluyendo demandas por daños y perjuicios, indemnizaciones, costas judiciales, honorarios de abogados y medidas cautelares (ej. injunctions o secuestro de dispositivos). El Usuario será responsable por todos los daños directos, indirectos y consecuenciales derivados de la infracción, sin límite de monto, y defenderá e indemnizará a la Empresa, sus Afiliadas y distribuidores contra cualquier reclamo de terceros. La Propiedad Intelectual de la Empresa está protegida por las leyes colombianas (Ley 23 de 1982 sobre Derechos de Autor, Ley 1450 de 2011 sobre Propiedad Industrial) e internacionales aplicables. Cualquier violación podrá acarrear sanciones penales además de civiles. Esta cláusula sobrevive a la terminación de los Términos indefinidamente.
            </p>

            {/* Section 11 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">11. Confidencialidad y Tratamiento de Datos</h2>
            <p className="mb-4">
              <strong className="text-white">Definición de Información Confidencial:</strong> Se considera "Información Confidencial" cualquier dato, conocimiento o material divulgado por una Parte a la otra en el marco de estos Términos, que sea identificado como confidencial o que, por su naturaleza, deba razonablemente tratarse como tal, incluyendo, sin limitación, secretos comerciales, planes de negocio, datos técnicos, financieros o estratégicos, y cualquier información propietaria no disponible públicamente. Sin embargo, expresamente se excluyen de esta definición: (i) cualquier dato o contenido almacenado, generado o procesado en los dispositivos del Usuario (como mensajes, archivos, contactos o cualquier información personal o sensible del Usuario), ya que la Empresa no tiene acceso, ni recolecta, ni almacena dichos datos en sus servidores o sistemas; (ii) datos de pago, que son procesados exclusivamente por terceros autorizados (ej. pasarelas de pago) sin que la Empresa retenga, almacene o acceda a ellos en ningún momento.
            </p>
            <p className="mb-4">
              <strong className="text-white">Ausencia de Acceso por Parte de la Empresa:</strong> La Empresa declara y garantiza que no tiene, ni busca obtener, acceso a la información o datos del Usuario almacenados en sus dispositivos encriptados. Todos los procesos de encriptación, almacenamiento y gestión de datos ocurren localmente en el dispositivo del Usuario, sin transmisión a servidores de la Empresa. Por lo tanto, la Empresa no recopila, procesa ni almacena ningún dato del Usuario más allá del correo electrónico proporcionado voluntariamente para registro o contacto inicial, y solo en la medida estrictamente necesaria para la activación de la suscripción. La Empresa no utiliza servidores centralizados para datos de usuarios, y cualquier interacción con datos del dispositivo (ej. durante soporte técnico) requiere autorización expresa y previa del Usuario.
            </p>
            <p className="mb-4">
              <strong className="text-white">Responsabilidad Exclusiva del Usuario:</strong> El Usuario asume responsabilidad exclusiva e integral por la confidencialidad, seguridad, integridad y legalidad de todos sus datos, contenidos y actividades realizadas mediante los Servicios. La Empresa no asume ninguna responsabilidad por pérdidas, brechas, accesos no autorizados o usos indebidos de los datos del Usuario, ya que estos permanecen bajo el control absoluto del Usuario en su dispositivo. El Usuario se compromete a implementar medidas de seguridad adecuadas en sus dispositivos y a indemnizar a la Empresa por cualquier reclamo derivado de sus datos o usos.
            </p>
            <p className="mb-4">
              <strong className="text-white">Datos para Soporte Técnico:</strong> En caso de requerir soporte técnico, la Empresa solo podrá acceder a datos limitados y específicos (ej. logs técnicos del Software o detalles de configuración del dispositivo) si y solo si el Usuario proporciona autorización expresa, previa y por escrito (vía correo electrónico o formulario en el sitio web) antes de iniciar cualquier intervención. Esta autorización será revocable en cualquier momento y limitada al alcance necesario para resolver el incidente reportado. La Empresa no recopilará ni retendrá datos personales o sensibles más allá de lo estrictamente autorizado, y eliminará cualquier dato temporal utilizado para soporte inmediatamente después de su resolución. El correo electrónico del Usuario se utilizará únicamente para comunicaciones relacionadas con el soporte, y no se compartirá con terceros sin consentimiento explícito.
            </p>
            <p className="mb-4">
              <strong className="text-white">Tratamiento de Datos de Pago y Terceros:</strong> La Empresa no retiene ni almacena ninguna información de pago (ej. números de tarjetas, cuentas bancarias o detalles financieros). Todos los pagos se procesan a través de distribuidores autorizados o pasarelas de pago de terceros confiables, que manejan dichos datos bajo sus propias políticas de privacidad y en cumplimiento de normativas aplicables. La Empresa no tiene acceso a estos datos y no asume responsabilidad por brechas o incidencias en sistemas de terceros.
            </p>
            <p className="mb-4">
              <strong className="text-white">Obligaciones de las Partes:</strong> Cada Parte se compromete a: (i) mantener en estricto sigilo la Información Confidencial de la otra Parte; (ii) usarla exclusivamente para los fines del Contrato y no divulgarla a terceros sin consentimiento escrito previo; (iii) limitar el acceso a empleados o agentes que necesiten conocerla para cumplir con el Contrato, asegurando que estos cumplan con obligaciones equivalentes de confidencialidad; (iv) implementar medidas de seguridad razonables para proteger la Información Confidencial contra accesos no autorizados, pérdidas o alteraciones. La Empresa, en particular, no divulgará ninguna Información Confidencial del Usuario a menos que sea requerido por ley, en cuyo caso notificará al Usuario con antelación razonable para permitirle oponerse o buscar protección legal.
            </p>
            <p className="mb-4">
              <strong className="text-white">Excepciones:</strong> No se considerará Información Confidencial aquella que: (i) sea o se convierta en pública sin culpa de la Parte receptora; (ii) ya fuera conocida por la Parte receptora antes de su divulgación, sin obligación de confidencialidad; (iii) sea desarrollada independientemente por la Parte receptora sin referencia a la Información Confidencial; (iv) sea divulgada legítimamente por un tercero sin restricción; o (v) deba divulgarse por orden judicial o requerimiento legal, con notificación previa inmediata a la Parte divulgadora.
            </p>
            <p className="mb-4">
              <strong className="text-white">Consecuencias de Violaciones:</strong> Cualquier violación a esta cláusula generará responsabilidad inmediata por daños reales, indirectos, consecuenciales y punitivos, incluyendo pérdidas económicas, daños reputacionales y costos legales. La Parte infractora indemnizará integralmente a la Parte afectada por cualquier reclamo, multa o sanción derivada. La Empresa se reserva el derecho de rescindir inmediatamente los Términos, suspender los Servicios y tomar acciones legales, incluyendo demandas por daños y medidas cautelares, sin perjuicio de reportar violaciones a autoridades competentes si involucran usos ilícitos.
            </p>
            <p className="mb-4">
              <strong className="text-white">Supervivencia:</strong> Las obligaciones de confidencialidad sobrevivirán por un período de 5 (cinco) años después de la terminación o expiración de estos Términos, o indefinidamente para secretos comerciales o datos sensibles protegidos por ley. Esta cláusula prevalece sobre cualquier acuerdo previo y se interpreta de manera estricta a favor de la protección de la Información Confidencial de la Empresa.
            </p>
            <p className="mb-4">
              <strong className="text-white">Transferencia de Datos Personales a Distribuidores Autorizados:</strong> Para facilitar el recaudo y procesamiento de pagos por la suscripción a los Servicios, la Empresa podrá transferir datos personales mínimos y necesarios del Usuario (incluyendo, sin limitación, datos bancarios como números de cuenta, tarjetas de crédito/débito, información de facturación o detalles financieros) a los distribuidores autorizados (actuando como Encargado del tratamiento bajo la Ley 1581 de 2012). Esta transferencia se limita estrictamente al propósito de procesar transacciones de pago y no incluye acceso a datos del dispositivo del Usuario ni a información encriptada.
            </p>
            <p className="mb-4">
              <strong className="text-white">Autorización del Usuario:</strong> Al aceptar estos Términos y proporcionar datos de pago, el Usuario otorga autorización expresa, informada y previa para esta transferencia, en cumplimiento del artículo 9 de la Ley 1581 de 2012. Esta autorización es revocable en cualquier momento mediante notificación escrita a <a href="mailto:contacto@zi0n.com" className="text-[#5EEC7D] hover:underline">contacto@zi0n.com</a>, lo que podría implicar la suspensión de los Servicios hasta que se procese una alternativa de pago. El Usuario confirma que los datos proporcionados son exactos, actualizados y de su titularidad.
            </p>
            <p className="mb-4">
              <strong className="text-white">Obligaciones del Distribuidor como Encargado:</strong> El distribuidor autorizado actúa exclusivamente como Encargado del tratamiento (conforme al artículo 17 de la Ley 1581 de 2012), bajo un acuerdo contractual con la Empresa que obliga a: (i) usar los datos solo para el fin autorizado (procesamiento de pagos); (ii) implementar medidas de seguridad técnicas, administrativas y humanas equivalentes o superiores a las de la Empresa; (iii) no transferir, divulgar ni almacenar los datos más allá de lo necesario para la transacción; (iv) eliminar o devolver los datos inmediatamente después de procesar el pago o al terminarse la relación; (v) notificar cualquier incidente de seguridad en máximo 48 horas. La Empresa supervisará el cumplimiento y responderá solidariamente ante el Usuario por cualquier violación.
            </p>
            <p className="mb-4">
              <strong className="text-white">No Almacenamiento por la Empresa:</strong> La Empresa no accede, retiene ni almacena datos bancarios o de pago en sus sistemas. Toda transferencia se realiza directamente del Usuario al distribuidor o a pasarelas de pago de terceros certificadas sin intervención intermedia de la Empresa. Cualquier brecha en sistemas de terceros no imputable a la Empresa exime de responsabilidad.
            </p>
            <p className="mb-6">
              <strong className="text-white">Derechos del Titular:</strong> El Usuario, como titular de los datos, conserva todos los derechos bajo la Ley 1581 de 2012 (acceso, rectificación, actualización, supresión, revocación). Para ejercerlos respecto a datos transferidos, contacte a <a href="mailto:contacto@zi0n.com" className="text-[#5EEC7D] hover:underline">contacto@zi0n.com</a> o directamente al distribuidor autorizado. La Empresa facilitará el proceso en máximo 10 días hábiles. Cualquier mal uso de los datos transferidos generará responsabilidad inmediata, incluyendo indemnizaciones por daños, multas regulatorias y posible rescisión de los Términos. Esta subcláusula sobrevive a la terminación de los Términos y se interpreta en conjunto con la Política de Tratamiento de Datos.
            </p>

            {/* Section 12 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">12. Seguridad de la Información</h2>
            <p className="mb-4">
              <strong className="text-white">Medidas Adoptadas por la Empresa:</strong> La Empresa implementa medidas de seguridad técnicas, administrativas y organizacionales razonables y proporcionales al nivel de riesgo, diseñadas para proteger la integridad, confidencialidad y disponibilidad de la limitada información que maneja (correos electrónicos de registro o soporte autorizado), en cumplimiento de la Ley 1581 de 2012 y normas concordantes. Estas medidas incluyen, sin limitación: (i) encriptación de comunicaciones; (ii) controles de acceso restringido a personal autorizado; (iii) auditorías periódicas internas; (iv) protocolos de respuesta a incidentes; y (v) capacitación en ciberseguridad para su equipo. Sin embargo, dada la naturaleza descentralizada de los Servicios (donde la encriptación y almacenamiento ocurren localmente en el dispositivo del Usuario, sin servidores centrales de la Empresa), la Empresa no tiene acceso ni control sobre los datos del Usuario en sus dispositivos, limitando su responsabilidad a los datos mínimos transferidos con autorización expresa.
            </p>
            <p className="mb-4">
              <strong className="text-white">Ausencia de Garantía Absoluta:</strong> A pesar de las medidas adoptadas, la Empresa no garantiza ni representa que los Servicios o cualquier sistema asociado sean absolutamente seguros, libres de vulnerabilidades, interrupciones, errores o accesos no autorizados, ya que ninguna medida de seguridad es infalible en un entorno digital. El Usuario reconoce los riesgos inherentes a la ciberseguridad como amenazas avanzadas, phishing, malware o fallos en dispositivos de terceros, y acepta que la Empresa no asume responsabilidad por brechas o incidentes no imputables directamente a negligencia grave probada de la Empresa.
            </p>
            <p className="mb-4">
              <strong className="text-white">Responsabilidad Exclusiva del Usuario:</strong> El Usuario asume responsabilidad exclusiva e integral por la seguridad de sus datos, dispositivos y actividades en los Servicios. Esto incluye: (i) implementar y mantener medidas de ciberseguridad adecuadas en sus dispositivos; (ii) notificar inmediatamente a la Empresa sobre cualquier sospecha de incidente que afecte los Servicios; y (iii) cumplir con todas las normativas aplicables en materia de ciberseguridad y protección de datos. La Empresa no será responsable por daños derivados de omisiones o acciones del Usuario, incluyendo usos inadecuados de los Servicios o fallos en sus medidas de seguridad.
            </p>
            <p className="mb-6">
              <strong className="text-white">Notificación de Incidentes:</strong> En caso de detectar un incidente de seguridad que afecte datos manejados por la Empresa, esta notificará al Usuario afectado en un plazo máximo de 48 horas desde su conocimiento, proporcionando detalles razonables sobre el incidente, medidas tomadas y recomendaciones para mitigación. Sin embargo, esta notificación no implica admisión de responsabilidad ni obligación de compensación, y la Empresa no será liable por daños directos, indirectos o consecuenciales derivados del incidente, incluyendo pérdidas de datos, interrupciones de negocio o reclamos de terceros. El Usuario defenderá, indemnizará y mantendrá indemne a la Empresa, sus Afiliadas y distribuidores contra cualquier reclamo, daño, multa o costo (incluyendo honorarios de abogados) derivado de incidentes de seguridad causados por: (i) usos ilícitos o negligentes de los Servicios; (ii) fallos en las medidas de seguridad del Usuario; o (iii) brechas en sistemas de terceros (ej. pasarelas de pago). Esta cláusula se interpreta estrictamente a favor de la Empresa y sobrevive a la terminación de los Términos indefinidamente, en armonía con las cláusulas de Confidencialidad y la Limitación de Responsabilidad.
            </p>

            {/* Section 13 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">13. Conducta</h2>
            <p className="mb-4">
              <strong className="text-white">Cumplimiento de Leyes Aplicables:</strong> Las Partes se comprometen a cumplir estrictamente con todas las leyes, regulaciones y normativas aplicables en Colombia y cualquier jurisdicción relevante, incluyendo, sin limitación: (i) leyes anticorrupción como la Ley 1778 de 2016 (Transparencia y Lucha contra la Corrupción) y sus decretos reglamentarios, prohibiendo cualquier forma de soborno, pagos facilitadores, comisiones ilegales o influencias indebidas; (ii) leyes anti-lavado de activos y financiamiento del terrorismo, como la Ley 1762 de 2015 (Régimen Penal para Lavado de Activos) y la Circular Básica Jurídica de la Superintendencia Financiera; (iii) normativas sobre ciberdelitos (Ley 1273 de 2009); y (iv) cualquier ley internacional aplicable, como la Convención de las Naciones Unidas contra la Corrupción o sanciones de la OFAC si relevantes. El Usuario certifica expresamente, bajo pena de perjurio y responsabilidad civil/penal, que no usará los Servicios para fines ilícitos, incluyendo, pero no limitado a, narcotráfico, terrorismo, lavado de activos, financiamiento de actividades criminales, ciberdelitos, evasión fiscal, tráfico de personas, explotación infantil o cualquier conducta que viole derechos humanos o normativas penales.
            </p>
            <p className="mb-4">
              <strong className="text-white">Certificaciones y Obligaciones del Usuario:</strong> El Usuario declara y garantiza que: (i) no está incluido en listas de sancionados nacionales o internacionales (ej. listas de la UIAF, OFAC, ONU); (ii) no facilitará el uso de los Servicios a personas o entidades sancionadas; (iii) implementará controles internos para prevenir usos ilícitos, incluyendo monitoreo de actividades y reportes a autoridades si detecta irregularidades; (iv) no usará los Servicios para ocultar, transferir o legitimar fondos de origen ilícito; y (v) proporcionará, a solicitud de la Empresa, documentación que demuestre cumplimiento (ej. certificados de compliance o auditorías). Cualquier sospecha razonable de incumplimiento permitirá a la Empresa solicitar información adicional o suspender los Servicios inmediatamente.
            </p>
            <p className="mb-4">
              <strong className="text-white">Prohibiciones Específicas:</strong> Queda expresamente prohibido: (i) usar los Servicios para actividades que promuevan, faciliten o encubran delitos; (ii) cualquier acto de corrupción, como ofrecer o aceptar ventajas indebidas a funcionarios públicos o privados; (iii) transferencias financieras sospechosas sin justificación legítima; o (iv) cualquier conducta que exponga a la Empresa a riesgos regulatorios, penales o reputacionales. La Empresa no monitorea activamente el contenido del Usuario (dado su diseño descentralizado), pero se reserva el derecho de cooperar con autoridades en investigaciones.
            </p>
            <p className="mb-4">
              <strong className="text-white">Indemnización por Violaciones:</strong> El Usuario defenderá, indemnizará y mantendrá indemne a la Empresa, sus Afiliadas, distribuidores, directivos, empleados y agentes contra cualquier reclamo, demanda, acción legal, multa, sanción, daño, costo o gasto (incluyendo honorarios de abogados y costas judiciales) derivado de: (i) incumplimientos del Usuario a esta cláusula; (ii) usos ilícitos de los Servicios; o (iii) cualquier investigación o procedimiento administrativo/penal relacionado. Esta indemnización es inmediata, ilimitada en monto y cubre daños directos, indirectos y consecuenciales.
            </p>
            <p className="mb-6">
              <strong className="text-white">Consecuencias de Incumplimientos:</strong> Cualquier violación o sospecha razonable generará: (i) rescisión inmediata de los Términos sin reembolso; (ii) suspensión del acceso; (iii) reporte a autoridades competentes (ej. UIAF, Fiscalía General); y (iv) responsabilidad por daños punitivos. La Empresa no será liable por decisiones basadas en información proporcionada por el Usuario.
            </p>

            {/* Section 14 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">14. Disclaimer</h2>
            <p className="mb-4">
              <strong className="text-white">Exención General:</strong> Zi0n, GLOBAL INVESTMENT ST S.A.S., sus Afiliadas, distribuidores, directivos, empleados, agentes, subcontratistas, proveedores y cualquier entidad relacionada (colectivamente, "las Partes Exentas") no serán responsables, bajo ninguna circunstancia ni teoría legal (contractual, extracontractual, por negligencia, garantía implícita o de otro tipo), por cualquier daño directo, indirecto, incidental, especial, consecuente, punitivo, ejemplar, emergente o de cualquier naturaleza, derivado o relacionado con el uso, mal uso o imposibilidad de uso de los Servicios, incluyendo, pero no limitado a: (i) pérdidas de datos, ganancias, ingresos, oportunidades de negocio, buena voluntad o reputación; (ii) daños a dispositivos, sistemas, hardware o software; (iii) interrupciones, demoras o fallos en el servicio; (iv) errores, omisiones o inexactitudes en la encriptación, seguridad o funcionalidad causados por factores externos, usos inadecuados, modificaciones del Usuario o incompatibilidades; (v) cualquier perjuicio, decisión o acción tomada por el Usuario basada en los Servicios o su confianza en ellos; (vi) costos de sustitución de bienes o servicios; o (vii) cualquier otro daño intangible o económico, aun si las Partes Exentas han sido advertidas de la posibilidad de tales daños.
            </p>
            <p className="mb-4">
              <strong className="text-white">No Responsabilidad por Usos Ilícitos o de Alto Riesgo:</strong> Las Partes Exentas no responden, ni asumen responsabilidad alguna, por el uso de los Servicios en actividades ilícitas, de alto riesgo o prohibidas por ley, tales como narcotráfico, terrorismo, lavado de activos, financiamiento del terrorismo, ciberdelitos (incluyendo hacking no autorizado o ransomware), evasión fiscal, tráfico de personas, explotación infantil, corrupción, fraude o cualquier violación a leyes nacionales (ej. Ley 1762 de 2015 sobre lavado de activos, Ley 1453 de 2011 sobre ciberdelitos, Ley 1778 de 2016 sobre anticorrupción) o internacionales (ej. Convenciones de la ONU contra el crimen organizado transnacional, sanciones de la OFAC o regulaciones de la UE). El Usuario asume exclusivamente todos los riesgos, consecuencias legales, penales, civiles, administrativas o regulatorias derivadas de tales usos, incluyendo multas, incautaciones, investigaciones o demandas. Las Partes Exentas se reservan el derecho de cooperar plenamente con autoridades competentes (ej. UIAF, Fiscalía General, SIC) en cualquier investigación, sin responsabilidad por divulgación de información requerida por ley, y el Usuario indemnizará integralmente a las Partes Exentas por cualquier reclamo, sanción, costo o daño derivado.
            </p>
            <p className="mb-4">
              <strong className="text-white">Ausencia de Garantías:</strong> Los Servicios se proporcionan estrictamente "tal cual" ("as is") y "según disponibilidad" ("as available"), sin garantías de ningún tipo, expresas o implícitas, incluyendo, pero no limitado a, garantías de merchantability (comerciabilidad), fitness for a particular purpose (idoneidad para un fin específico), no infracción, precisión, disponibilidad continua, seguridad absoluta o ausencia de errores, virus o amenazas. Las Partes Exentas no garantizan que los Servicios: (i) cumplan con requisitos específicos del Usuario; (ii) sean ininterrumpidos, oportunos, seguros o libres de errores; (iii) sean compatibles con todos los dispositivos, software o redes de terceros; (iv) protejan contra todas las posibles amenazas cibernéticas o brechas; o (v) produzcan resultados específicos o esperados. Cualquier consejo, recomendación o información proporcionada por las Partes Exentas no crea garantías adicionales, y el Usuario asume todos los riesgos de su confianza en ellos.
            </p>
            <p className="mb-4">
              <strong className="text-white">Indemnización Amplia:</strong> El Usuario se compromete a defender, indemnizar y mantener indemnes a las Partes Exentas contra cualquier reclamo, demanda, acción legal, procedimiento administrativo, investigación, multa, sanción, daño, costo, gasto o responsabilidad (incluyendo, sin limitación, honorarios de abogados, costas judiciales y peritajes) derivada de o relacionada con: (i) el uso o mal uso de los Servicios por el Usuario o terceros bajo su control; (ii) violaciones a estos Términos o a cualquier ley aplicable; (iii) infracciones a derechos de terceros, incluyendo propiedad intelectual, privacidad o datos personales; (iv) usos ilícitos, negligentes o imprudentes; (v) cualquier acto u omisión del Usuario que exponga a las Partes Exentas a riesgos; o (vi) decisiones comerciales o operativas basadas en los Servicios. Esta indemnización es inmediata, ilimitada en monto y cubre daños directos, indirectos, consecuenciales y punitivos, obligando al Usuario a asumir la defensa legal a su costo y a cooperar plenamente.
            </p>
            <p className="mb-6">
              <strong className="text-white">Aplicabilidad y Supervivencia:</strong> Este disclaimer aplica incluso si las Partes Exentas han sido advertidas o deberían haber conocido la posibilidad de daños, y en la medida máxima permitida por la ley colombiana (incluyendo el Código Civil y el Estatuto del Consumidor, donde aplicable). Sobrevive indefinidamente a la terminación, rescisión o expiración de estos Términos, independientemente de la causa. Si alguna disposición es declarada inválida, ilegal o no enforceable por un tribunal competente, las restantes permanecerán vigentes y se interpretarán para lograr el máximo efecto protector para las Partes Exentas. Ninguna omisión o demora en el ejercicio de derechos por las Partes Exentas constituirá renuncia, y cualquier renuncia debe ser expresa y por escrito. Esta cláusula se interpreta estrictamente a favor de las Partes Exentas y prevalece sobre cualquier acuerdo previo o contradictorio.
            </p>

            {/* Section 15 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">15. Disposiciones Generales</h2>
            <p className="mb-4">
              <strong className="text-white">15.1. Integralidad del Contrato:</strong> Estos Términos, y cualquier documento incorporado por referencia, constituyen el acuerdo integral y exclusivo entre las Partes respecto a los Servicios, sustituyendo y extinguiendo cualquier acuerdo, negociación, entendimiento o representación previa, ya sea oral, escrita o implícita. Ninguna modificación, enmienda o renuncia a cualquier disposición será válida a menos que se realice por escrito y sea firmada por representantes autorizados de ambas Partes. Cualquier término adicional propuesto por el Usuario se considera nulo y sin efecto.
            </p>
            <p className="mb-4">
              <strong className="text-white">15.2. Cesión y Transferencia:</strong> Estos Términos y los derechos u obligaciones derivados no son cedibles, transferibles, sublicenciables ni delegables por el Usuario sin el consentimiento previo y escrito de la Empresa, que podrá negarlo a su absoluta discreción. La Empresa podrá ceder, transferir o delegar estos Términos o cualquier derecho/obligación a Afiliadas o terceros (ej. en fusiones, adquisiciones o reestructuraciones) sin consentimiento del Usuario, notificándolo con al menos 15 días de antelación. Cualquier intento de cesión no autorizada será nulo, y generará rescisión inmediata con responsabilidad por daños.
            </p>
            <p className="mb-4">
              <strong className="text-white">15.3. Fuerza Mayor:</strong> Ninguna Parte será responsable por incumplimientos o demoras derivados de eventos de fuerza mayor o caso fortuito, imprevisibles e irresistibles, incluyendo, sin limitación: desastres naturales (terremotos, inundaciones, huracanes), guerras, conflictos armados, actos de terrorismo, pandemias, epidemias, huelgas generales, embargos, ciberataques masivos, fallos en redes de telecomunicaciones o interrupciones de servicios públicos no imputables a la Parte afectada. La Parte invocante notificará inmediatamente a la otra y tomará medidas razonables para mitigar efectos. Si el evento persiste por más de 30 días, cualquiera de las Partes podrá rescindir sin responsabilidad, salvo pagos pendientes por servicios ya prestados.
            </p>
            <p className="mb-4">
              <strong className="text-white">15.4. Notificaciones:</strong> Todas las notificaciones, consents, aprobaciones o comunicaciones requeridas o permitidas bajo estos Términos se realizarán por escrito y se considerarán efectivas: (i) al entregarse personalmente; (ii) al enviarse por correo certificado con acuse de recibo; (iii) al transmitirse por correo electrónico con confirmación de lectura. Para la Empresa: <a href="mailto:contacto@zi0n.com" className="text-[#5EEC7D] hover:underline">contacto@zi0n.com</a> o la dirección en el certificado de la Cámara de Comercio (Calle 7 No. 39-215, Oficina 1009, Edificio Granahorrar, Medellín, Antioquia). Para el Usuario: el correo proporcionado en el registro. TODAS las notificaciones electrónicas por correo son válidas bajo la Ley 527 de 1999.
            </p>
            <p className="mb-4">
              <strong className="text-white">15.5. Renuncia y No Renuncia:</strong> Ninguna omisión, demora o indulgencia en el ejercicio de derechos por cualquier Parte constituirá renuncia o modificación implícita. Cualquier renuncia debe ser expresa, escrita y limitada al caso específico, sin afectar derechos futuros.
            </p>
            <p className="mb-4">
              <strong className="text-white">15.6. Severabilidad:</strong> Si alguna disposición es declarada inválida, ilegal por autoridad competente, las restantes permanecerán vigentes, interpretándose para lograr el máximo efecto original.
            </p>
            <p className="mb-4">
              <strong className="text-white">15.7. Idioma y Interpretación:</strong> Estos Términos se redactan en español, que prevalece en caso de discrepancias con traducciones. Títulos y encabezados son para conveniencia y no afectan interpretación. Se interpretarán de buena fe, pero en caso de ambigüedad, a favor de la Empresa. Referencias a "incluyendo" no son limitativas.
            </p>
            <p className="mb-4">
              <strong className="text-white">15.8. Supervivencia:</strong> Cláusulas que por naturaleza sobreviven (ej. Confidencialidad, Propiedad Intelectual, Limitación de Responsabilidad, Disclaimer, Indemnizaciones, Conducta) permanecerán vigentes indefinidamente después de la terminación.
            </p>
            <p className="mb-6">
              <strong className="text-white">15.9. Relación entre Partes:</strong> Las Partes son contratistas independientes; nada crea agencia, sociedad, joint venture o empleo. Ninguna Parte representa a la otra ni incurre en obligaciones en su nombre.
            </p>

            {/* Section 16 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">16. Legislación Aplicable</h2>
            <p className="mb-6">
              <strong className="text-white">Ley Gobernante:</strong> Estos Términos se rigen exclusivamente por las leyes de la República de Colombia, excluyendo reglas de conflictos de leyes o principios de derecho internacional privado que apliquen otra jurisdicción. Cualquier disputa se resolverá conforme al Código Civil, Código de Comercio y normativas específicas.
            </p>

            {/* Section 17 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">17. Foro</h2>
            <p className="mb-6">
              <strong className="text-white">Jurisdicción Exclusiva:</strong> Cualquier disputa, controversia o reclamo derivado de o relacionado con estos Términos, su interpretación, ejecución, terminación o validez se resolverá exclusivamente en los tribunales competentes de Medellín, Antioquia, Colombia. El Usuario renuncia irrevocablemente a cualquier otro foro, jurisdicción o venue, incluyendo por conveniencia o forum non conveniens.
            </p>

            {/* Section 18 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">18. Arbitraje Opcional</h2>
            <p className="mb-6">
              A discreción de la Empresa, disputas podrán someterse a arbitraje vinculante bajo reglas de la Cámara de Comercio de Medellín, con un árbitro único, en español, en Medellín. La decisión arbitral será final y no apelable, con costos a cargo de la Parte perdedora.
            </p>

            {/* Section 19 */}
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">19. Medidas Cautelares</h2>
            <p className="mb-6">
              Nada impide a la Empresa buscar medidas cautelares o provisionales en cualquier tribunal para proteger derechos, sin renuncia a arbitraje o jurisdicción.
            </p>

            {/* Acceptance */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
              <p className="text-white/90 font-medium">
                Al usar los Servicios, el Usuario confirma haber leído, comprendido y aceptado incondicionalmente estos Términos, sometiéndose a sus disposiciones.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
