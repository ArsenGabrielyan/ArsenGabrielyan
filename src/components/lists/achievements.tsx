"use client"
import { ACHIEVEMENTS } from "@/lib/constants";
import Achievement from "../items/achievement";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty";
import { Trophy } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AchievementsList(){
     const t = useTranslations("achievements.empty")
     return ACHIEVEMENTS.length===0 ? (
          <Empty>
               <EmptyHeader>
                    <EmptyMedia variant="icon">
                         <Trophy/>
                    </EmptyMedia>
                    <EmptyTitle>{t("title")}</EmptyTitle>
                    <EmptyDescription>{t("desc")}</EmptyDescription>
               </EmptyHeader>
          </Empty>
     ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-full mt-10 gap-5">
               {ACHIEVEMENTS.map((data)=>(
                    <Achievement
                         key={data.type}
                         data={data}
                    />
               ))}
          </div>
     )
}