"use client"
import SiteSection from "@/components/site-section";
import { useTranslations } from "next-intl";
import ServicesList from "../lists/services";

export default function ServicesSection(){
     const t = useTranslations("services")
     return (
          <SiteSection sectionTitle={t("title")} id="services" maxWidth="full">
               <p>{t("desc")}</p>
               <ServicesList/>
          </SiteSection>
     )
}