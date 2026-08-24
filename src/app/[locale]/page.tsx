import PageLayout from "@/components/layout";
import AboutSection from "@/components/sections/about";
import AchievementsSection from "@/components/sections/achievements";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import PortfolioSection from "@/components/sections/portfolio";
import ServicesSection from "@/components/sections/services";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <AchievementsSection/>
      <PortfolioSection/>
      <ContactSection/>
    </PageLayout>
  );
}
