"use client"
import SiteSection from "@/components/site-section";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ServicesSection(){
     const t = useTranslations("services")
     return (
          <SiteSection sectionTitle={t("title")} id="services" maxWidth="full">
               <p>{t("desc")}</p>
               <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] xs:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 max-w-full mt-10">
                    {SERVICES.map(({Icon,url,type},i)=>(
                         <div key={`${type}-${i+1}`} className="w-full md:w-80 mx-auto p-2.5 xs:p-5 bg-card text-card-foreground border shadow-sm rounded-md flex justify-between items-center gap-2 flex-col">
                              <Icon className="size-17.5 text-[#002a4f] dark:text-[#25ccff]"/>
                              <div className="space-y-2">
                                   <h2 className="text-lg uppercase font-bold">{t(`hobbies.${type}.title`)}</h2>
                                   <p>{t(`hobbies.${type}.desc`)}</p>
                              </div>
                              <Button asChild>
                                   <Link href={url}>{t(`hobbies.${type}.link-text`)}</Link>
                              </Button>
                         </div>
                    ))}
               </div>
          </SiteSection>
     )
}