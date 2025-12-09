import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { SecurityFeatures } from "@/components/sections/security-features"
import { MDMAppsSection } from "@/components/sections/mdm-apps-section"
import { CharacteristicsGrid } from "@/components/sections/characteristics-grid"
import { DistributionPartners } from "@/components/sections/distribution-partners"
import { ContactSection } from "@/components/sections/contact-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/sections/footer"
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: { locale: string }
}

export default async function LandingPage({ params }: Props) {
  // No setRequestLocale, no dynamic API usage
  // const { locale } = params; // Not needed here unless you use locale directly
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SecurityFeatures />
      <MDMAppsSection />
      <CharacteristicsGrid />
      <DistributionPartners />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  );
}
