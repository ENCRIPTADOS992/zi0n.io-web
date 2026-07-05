"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { Logo } from "@/components/shared/logo"
import { LanguageSelector } from "@/components/shared/language-selector"

export function Header() {
  const t = useTranslations('header')
  const locale = useLocale()
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { label: t('nav.whatIs'), href: "#crypto-dilemma" },
    { label: t('nav.whatIncludes'), href: "#features" },
    { label: t('nav.apps'), href: "#apps" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header style={{
      ...styles.header,
      ...(isScrolled ? styles.headerScrolled : styles.headerTop),
    }}>
      <div style={styles.container}>
        <Link href={`/${locale}`}>
          <Logo variant="dark" size="md" />
        </Link>

        <nav style={styles.nav}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={styles.rightSection}>
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "background-color 0.3s, backdrop-filter 0.3s, box-shadow 0.3s",
  },
  headerTop: {
    backgroundColor: "transparent",
  },
  headerScrolled: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
    height: "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
  },
  navLink: {
    fontSize: "14px",
    fontWeight: 500,
    color: "rgba(7, 28, 89, 0.7)",
    textDecoration: "none",
    fontFamily: "Montserrat, sans-serif",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
} satisfies Record<string, React.CSSProperties>;
