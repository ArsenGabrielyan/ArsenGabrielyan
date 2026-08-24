"use client"
import SiteSection from "@/components/site-section";
import { Button } from "@/components/ui/button";
import { ACHIEVEMENTS } from "@/lib/constants";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation"

export default function AchievementsSection(){
     const t = useTranslations("achievements")
     return (
          <SiteSection sectionTitle={t("title")} maxWidth="full" containerClass="bg-card text-card-foreground pt-64 -mt-64">
               <p>{t("desc")}</p>
               <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-full mt-10 gap-5">
                    {ACHIEVEMENTS.map(({count,type,url},i)=>(
                         <div key={`${type}-${i+1}`} className="space-y-0.5">
                              <h2 className="text-4xl">{count}+</h2>
                              <Button variant="ghost" asChild className="text-base uppercase font-semibold tracking-[1.5px] text-[#002a4f] dark:text-[#25ccff]">
                                   <Link href={url}>
                                        {t(`suffix.${type}`)}
                                   </Link>
                              </Button>
                         </div>
                    ))}
               </div>
          </SiteSection>
     )
}