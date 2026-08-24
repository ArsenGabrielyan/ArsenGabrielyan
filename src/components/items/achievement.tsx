"use client"
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation"
import { IAchievement } from "@/lib/types";

interface AchievementProps{
     data: IAchievement
}
export default function Achievement({data}: AchievementProps){
     const t = useTranslations("achievements.suffix")
     return (
          <div className="space-y-0.5">
               <h2 className="text-4xl">{data.count}+</h2>
               <Button variant="ghost" asChild className="text-base uppercase font-semibold tracking-[1.5px] text-[#002a4f] dark:text-[#25ccff]">
                    <Link href={data.url}>
                         {t(data.type)}
                    </Link>
               </Button>
          </div>
     )
}