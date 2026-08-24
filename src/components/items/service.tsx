"use client"
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { IService } from "@/lib/types";

interface ServiceItemProps{
     data: IService
}
export default function ServiceItem({data}: ServiceItemProps){
     const t = useTranslations(`services.hobbies.${data.type}`)
     return (
          <div className="w-full md:w-80 mx-auto p-2.5 xs:p-5 bg-card text-card-foreground border shadow-sm rounded-md flex justify-between items-center gap-2 flex-col">
               <data.Icon className="size-17.5 text-[#002a4f] dark:text-[#25ccff]"/>
               <div className="space-y-2">
                    <h2 className="text-lg uppercase font-bold">{t("title")}</h2>
                    <p>{t("desc")}</p>
               </div>
               <Button asChild>
                    <Link href={data.url}>{t("link-text")}</Link>
               </Button>
          </div>
     )
}