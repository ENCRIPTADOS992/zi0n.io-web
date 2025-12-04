"use client"

import Link from "next/link"
import { Logo } from "@/components/shared/logo"
import { Linkedin, Twitter, Mail, Github } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Características", href: "#characteristics" },
    { label: "Seguridad", href: "#security" },
    { label: "Apps MDM", href: "#apps" },
    { label: "Precios", href: "#pricing" },
  ],
  company: [
    { label: "Sobre nosotros", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Carreras", href: "#careers" },
    { label: "Contacto", href: "#contact" },
  ],
  support: [
    { label: "Centro de ayuda", href: "#help" },
    { label: "Documentación", href: "#docs" },
    { label: "Estado del sistema", href: "#status" },
    { label: "API", href: "#api" },
  ],
  legal: [
    { label: "Privacidad", href: "#privacy" },
    { label: "Términos", href: "#terms" },
    { label: "Cookies", href: "#cookies" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/z10n", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/z10n", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/z10n", label: "GitHub" },
  { icon: Mail, href: "mailto:contacto@z10n.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-[#071C59] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="col-span-2">
              <Logo variant="light" size="lg" />
              <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
                Transformando la seguridad móvil con encriptación avanzada y protección integral para tu dispositivo
                Android.
              </p>
              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#5EEC7D]/20 rounded-xl flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white/80" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Producto</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 hover:text-[#3AA6FF] text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Compañía</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 hover:text-[#3AA6FF] text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Soporte</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 hover:text-[#3AA6FF] text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 hover:text-[#3AA6FF] text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} z10n. Todos los derechos reservados.</p>
            <p className="text-white/50 text-sm">Hecho con seguridad en mente 🛡️</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
