"use client"
import SiteSection from "@/components/site-section";
import { SERVICES } from "@/lib/constants";
import { useTranslations } from "next-intl";
import ServiceItem from "../items/service";

export default function ServicesSection(){
     const t = useTranslations("services")
     return (
          <SiteSection sectionTitle={t("title")} id="services" maxWidth="full">
               <p>{t("desc")}</p>
               <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] xs:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 max-w-full mt-10">
                    {SERVICES.map(data=>(
                         <ServiceItem
                              key={data.type}
                              data={data}
                         />
                    ))}
               </div>
          </SiteSection>
     )
}