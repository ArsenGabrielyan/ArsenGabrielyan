"use client"
import SiteSection from "../site-section"
import PortfolioItem from "../items/portfolio"
import { useIsMobile } from "@/hooks/use-mobile"
import { useTranslations } from "next-intl"
import { PORTFOLIO_ITEMS } from "@/lib/constants"

export default function PortfolioSection(){
     const isMobile = useIsMobile("tablet")
     const t = useTranslations("portfolio")
     return (
          <SiteSection sectionTitle={t("title")} maxWidth="full" id="portfolio">
               <p>{t("desc")}</p>
               <div className="grid grid-cols-2 md:grid-cols-3 max-w-full gap-3 mt-20 mb-10">
                    {PORTFOLIO_ITEMS.map(item=>(
                         <PortfolioItem key={item.item} className="w-full" data={item} isMobile={isMobile}/>
                    ))}
               </div>
          </SiteSection>
     )
}