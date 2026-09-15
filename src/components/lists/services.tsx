"use client"
import { SERVICES } from "@/lib/constants";
import ServiceItem from "../items/service";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty";
import { Pencil } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServicesList(){
     const t = useTranslations("services.empty")
     return SERVICES.length===0 ? (
          <Empty>
               <EmptyHeader>
                    <EmptyMedia variant="icon">
                         <Pencil/>
                    </EmptyMedia>
                    <EmptyTitle>{t("title")}</EmptyTitle>
                    <EmptyDescription>{t("desc")}</EmptyDescription>
               </EmptyHeader>
          </Empty>
     ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] xs:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 max-w-full mt-10">
               {SERVICES.map(data=>(
                    <ServiceItem
                         key={data.type}
                         data={data}
                    />
               ))}
          </div>
     )
}