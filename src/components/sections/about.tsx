"use client"
import SiteSection from "@/components/site-section";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function AboutSection(){
     const t = useTranslations("about")
     return (
          <SiteSection sectionTitle={t("title")} id="about">
               <p>{t("text")}</p>
               <p>{t("languages")}</p>
               <Button asChild>
                    <Link href="https://github.com/ArsenGabrielyan">{t("learn-more")}</Link>
               </Button>
          </SiteSection>
     )
}