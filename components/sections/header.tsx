"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { LanguageSelector } from "@/components/shared/language-selector"
import { useIsMobile } from "@/hooks/use-mobile"

export function Header() {
  const t = useTranslations('header')
  const locale = useLocale()
  const isCompact = useIsMobile(1100)
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false)

  return (
    <header style={{
      ...styles.header,
      ...(isScrolled || menuOpen ? styles.headerScrolled : styles.headerTop),
      ...(menuOpen && { backdropFilter: "none", backgroundColor: "#FFFFFF" }),
    }}>
      <div style={styles.container}>
        <Link href={`/${locale}`}>
          <Image src="/image/home/dark-logo.png" alt="Zi0n" width={120} height={40} />
        </Link>

        {isCompact ? (
          <>
            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={styles.hamburger}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#081C59" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>

      {/* Fullscreen Mobile Menu - outside container to avoid stacking context issues */}
      {isCompact && menuOpen && (
        <div style={styles.mobileMenu}>
          <nav style={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={styles.mobileNavLink}
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div style={styles.mobileLanguage}>
            <LanguageSelector />
          </div>
        </div>
      )}
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
    position: "relative",
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
  hamburger: {
    background: "#FFFFFF",
    border: "none",
    cursor: "pointer",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
  },
  mobileMenu: {
    position: "absolute",
    top: "72px",
    left: 0,
    right: 0,
    height: "calc(100vh - 72px)",
    backgroundColor: "#FFFFFF",
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
  },
  mobileNav: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },
  mobileNavLink: {
    fontSize: "18px",
    fontWeight: 500,
    color: "#081C59",
    textDecoration: "none",
    fontFamily: "Montserrat, sans-serif",
  },
  mobileLanguage: {
    marginTop: "32px",
    paddingTop: "24px",
    borderTop: "1px solid rgba(0,0,0,0.08)",
  },
} satisfies Record<string, React.CSSProperties>;
