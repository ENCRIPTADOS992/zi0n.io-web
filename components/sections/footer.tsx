"use client"

import Link from "next/link"
import { Logo } from "@/components/shared/logo"
// import { Linkedin, Twitter, Mail, Github } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Seguridad", href: "#security" },
  { label: "Características", href: "#characteristics" },
  { label: "Apps", href: "#apps" },
  { label: "Contacto", href: "#contact" },
]

/*const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/Zi0n", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/Zi0n", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Zi0n", label: "GitHub" },
  { icon: Mail, href: "mailto:contacto@Zi0n.com", label: "Email" },
]*/

export function Footer() {
  return (
    <footer className="bg-[#071C59] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Logo variant="light" size="lg" />
              <p className="mt-4 text-white/60 text-sm leading-relaxed">
                Transformando la seguridad móvil con encriptación avanzada y protección integral para tu dispositivo
                Android.
              </p>
              {/* Social Links - Commented out */}
              {/* <div className="flex gap-3 mt-6">
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
              </div> */}
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-2">
              <h4 className="font-semibold text-white mb-4">Navegación</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 hover:text-[#5EEC7D] text-sm transition-colors">
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
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} Zi0n. Todos los derechos reservados.</p>
            <p className="text-white/50 text-sm">Hecho con seguridad en mente 🛡️</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
