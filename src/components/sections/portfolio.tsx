"use client"
import SiteSection from "../site-section"
import { useTranslations } from "next-intl"
import { IPortfolioItem } from "@/lib/types"
import ProjectsList from "../lists/projects"

interface PortfolioSectionProps{
     projects: IPortfolioItem[]
}
export default function PortfolioSection({projects}: PortfolioSectionProps){
     const t = useTranslations("portfolio")
     return (
          <SiteSection sectionTitle={t("title")} maxWidth="full" id="portfolio">
               <p>{t("desc")}</p>
               <ProjectsList data={projects}/>
          </SiteSection>
     )
}