"use client"
import SiteSection from "@/components/site-section";
import { ACHIEVEMENTS } from "@/lib/constants";
import { useTranslations } from "next-intl";
import Achievement from "../items/achievement";

export default function AchievementsSection(){
     const t = useTranslations("achievements")
     return (
          <SiteSection sectionTitle={t("title")} maxWidth="full" containerClass="bg-card text-card-foreground pt-64 -mt-64">
               <p>{t("desc")}</p>
               <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-full mt-10 gap-5">
                    {ACHIEVEMENTS.map((data)=>(
                         <Achievement
                              key={data.type}
                              data={data}
                         />
                    ))}
               </div>
          </SiteSection>
     )
}