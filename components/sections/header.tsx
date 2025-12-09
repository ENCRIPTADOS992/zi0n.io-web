"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { Menu } from "lucide-react"
import { Logo } from "@/components/shared/logo"
import { LanguageSelector } from "@/components/shared/language-selector"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const t = useTranslations('header')
  const locale = useLocale()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: t('nav.home'), href: "#hero" },
    { label: t('nav.security'), href: "#security" },
    { label: t('nav.characteristics'), href: "#characteristics" },
    { label: t('nav.apps'), href: "#apps" },
    { label: t('nav.contact'), href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#071C59]/95 backdrop-blur-md shadow-lg" : "bg-[#071C59]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="shrink-0">
            <Logo variant="light" size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <Button 
              className="bg-[#5EEC7D] text-[#071C59] hover:bg-[#4DD96A] rounded-full px-6 font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('cta')}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSelector />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#071C59] border-[#071C59] w-full sm:max-w-sm">
                <div className="flex flex-col h-full pt-8">
                  <div className="flex justify-between items-center mb-8">
                    <Logo variant="light" size="sm" />
                  </div>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-white/80 hover:text-white text-lg font-medium py-2 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto pb-8">
                    <Button
                      className="w-full bg-[#5EEC7D] text-[#071C59] hover:bg-[#4DD96A] rounded-full font-semibold"
                      onClick={() => {
                        setIsOpen(false)
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      {t('cta')}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
