"use client"
import SiteSection from "@/components/site-section";
import { useTranslations } from "next-intl";
import AchievementsList from "../lists/achievements";

export default function AchievementsSection(){
     const t = useTranslations("achievements")
     return (
          <SiteSection sectionTitle={t("title")} maxWidth="full" containerClass="bg-card text-card-foreground pt-64 -mt-64">
               <p>{t("desc")}</p>
               <AchievementsList/>
          </SiteSection>
     )
}