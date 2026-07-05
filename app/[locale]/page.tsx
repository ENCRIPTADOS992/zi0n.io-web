import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { CryptoDilemma } from "@/components/sections/crypto-dilemma"
import { OperaCripto } from "@/components/sections/opera-cripto"
import { HowItWorks } from "@/components/sections/how-it-works"
import { FeaturesGrid } from "@/components/sections/features-grid"
import { AppsConfig } from "@/components/sections/apps-config"
import { CTASection } from "@/components/sections/cta-section"
import { FAQSection } from "@/components/sections/faq-section"
import { DistributionSection } from "@/components/sections/distribution-section"
import { Footer } from "@/components/sections/footer"

type Props = {
  params: { locale: string }
}

export default async function LandingPage({ params }: Props) {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#F4F6FA" }}>
      <Header />
      <HeroSection />
      <CryptoDilemma />
      <OperaCripto />
      <HowItWorks />
      <FeaturesGrid />
      <AppsConfig />
      <CTASection />
      <FAQSection />
      <DistributionSection />
      <Footer />
    </main>
  );
}
