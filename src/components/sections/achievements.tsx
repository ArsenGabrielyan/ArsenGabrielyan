"use client"
import SiteSection from "@/components/site-section";
import { Button } from "@/components/ui/button";
import { IAchievement } from "@/lib/types";
import Link from "next/link";

const achievements: IAchievement[] = [
     {count: 11, name: "Պրոյեկտներ", url: "https://github.com/ArsenGabrielyan?tab=repositories"},
     {count: 14, name: "Գիտական փորձեր", url: "https://www.youtube.com/playlist?list=PLSI6KSDJfq-J6OxBprsyMjWmmLym2o7T3"},
     {count: 46, name: "Լուսանկարներ", url: "https://www.instagram.com/arsen_photo.6973"}
]

export default function AchievementsSection(){
     return (
          <SiteSection sectionTitle="Իմ Առաջընթացները" maxWidth="full" containerClass="bg-card text-card-foreground pt-64 -mt-64">
               <p>Իմ առավելություններն ու առաջընթացները, որը ես ունեցել եմ</p>
               <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-full mt-10 gap-5">
                    {achievements.map(({count,name,url},i)=>(
                         <div key={`achievement-${i+1}`} className="space-y-0.5">
                              <h2 className="text-4xl">{count}+</h2>
                              <Button variant="ghost" asChild className="text-base uppercase font-semibold tracking-[1.5px] text-[#002a4f] dark:text-[#25ccff]">
                                   <Link href={url}>
                                        {name}
                                   </Link>
                              </Button>
                         </div>
                    ))}
               </div>
          </SiteSection>
     )
}