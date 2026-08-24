"use client"
import SiteSection from "../site-section"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { IPortfolioItem, PortfolioItemType } from "@/lib/types"
import PortfolioItem from "../items/portfolio"
import { useIsMobile } from "@/hooks/use-mobile"
import { useMemo } from "react"
import { useTranslations } from "next-intl"
import { PORTFOLIO_ITEMS } from "@/lib/constants"

export default function PortfolioSection(){
     const isMobile = useIsMobile("tablet")
     const orientation = useMemo<"horizontal" | "vertical">(()=>isMobile ? "horizontal" : "vertical",[isMobile])
     const item = useMemo(()=>PORTFOLIO_ITEMS.reduce<Record<PortfolioItemType,IPortfolioItem[]>>((acc,val)=>{
          acc[val.type] = PORTFOLIO_ITEMS.filter(item=>item.type===val.type);
          return acc;
     },{} as Record<PortfolioItemType,IPortfolioItem[]>),[])
     const t = useTranslations("portfolio")
     return (
          <SiteSection sectionTitle={t("title")} maxWidth="full" id="portfolio">
               <p>{t("desc")}</p>
               <div className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-full gap-3 h-fit lg:h-[60vh] mt-20 mb-10">
                    {Object.entries(item).map(([type,list])=>
                         <div key={type} className="w-full flex justify-center items-center flex-col h-fit lg:h-[60vh] p-2.5 mt-2.5 space-y-2.5 lg:space-y-10">
                              <h2 className="mb-5 text-xl sm:text-2xl font-semibold border-b-2 border-primary w-fit pb-1">{t(`types.${type as PortfolioItemType}`)}</h2>
                              <div className="p-10 w-full">
                                   <Carousel
                                        orientation={orientation}
                                        opts={{
                                             align: "start",
                                        }}
                                   >
                                        <CarouselContent className="h-fit lg:h-[60vh] w-full">
                                             {list.map((item,i)=>(
                                                  <CarouselItem key={`item-${i+1}`} className="xs:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-5">
                                                       <PortfolioItem className="w-full" data={item} isMobile={isMobile}/>
                                                  </CarouselItem>
                                             ))}
                                        </CarouselContent>
                                        <CarouselPrevious/>
                                        <CarouselNext/>
                                   </Carousel>
                              </div>
                         </div>
                    )}
               </div>
          </SiteSection>
     )
}