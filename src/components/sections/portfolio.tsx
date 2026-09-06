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
               <div className="grid grid-cols-1 lg:grid-cols-2 max-w-full gap-3 h-fit lg:h-[60vh] mt-20 mb-10">
                    {PORTFOLIO_ITEMS.map(item=>(
                         <PortfolioItem key={item.item} className="w-full" data={item} isMobile={isMobile}/>
                    ))}
               </div>
          </SiteSection>
     )
}