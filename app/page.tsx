import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { SecurityFeatures } from "@/components/sections/security-features"
import { MDMAppsSection } from "@/components/sections/mdm-apps-section"
import { CharacteristicsGrid } from "@/components/sections/characteristics-grid"
import { ContactSection } from "@/components/sections/contact-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/sections/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SecurityFeatures />
      <MDMAppsSection />
      <CharacteristicsGrid />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  )
}
