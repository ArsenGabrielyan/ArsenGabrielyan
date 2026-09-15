import PageLayout from "@/components/layout";
import AboutSection from "@/components/sections/about";
import AchievementsSection from "@/components/sections/achievements";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import PortfolioSection from "@/components/sections/portfolio";
import ServicesSection from "@/components/sections/services";
import { getPortfolioFromCDN } from "@/lib/data";

export default async function Home() {
  const allProjects = await getPortfolioFromCDN()
  return (
    <PageLayout>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <AchievementsSection/>
      <PortfolioSection projects={allProjects}/>
      <ContactSection/>
    </PageLayout>
  );
}
