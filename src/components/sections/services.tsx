"use client"
import SiteSection from "@/components/site-section";
import { Button } from "@/components/ui/button";
import { IService } from "@/lib/types";
import { Camera, Code, FlaskConical } from "lucide-react";
import Link from "next/link";

const services: IService[] = [
     {
          Icon: Code,
          name: "Ծրագրավորում",
          desc: "Հիմնականում զբաղվում եմ FrontEnd և Full Stack ծրագրավորմանը (React.JS, Next JS, Typescript, HTML, CSS, Javascript):",
          link: "#",
          linkText: "Պրոյեկտներ"
     },
     {
          Icon: Camera,
          name: "Լուսանկարչություն",
          desc: "Ճանապարհորդելու ընթացքում մեկ-մեկ լուսանկարչությամբ եմ զբաղվում:",
          link: "#",
          linkText: "Դիտել լուսանկարները"
     },
     {
          Icon: FlaskConical,
          name: "Գիտական փորձեր",
          desc: "Ազատ ժամանակին նաև գիտական փորձեր եմ անում։",
          link: "https://www.youtube.com/playlist?list=PLSI6KSDJfq-J6OxBprsyMjWmmLym2o7T3",
          linkText: "Իմանալ ավելին"
     }
]

export default function ServicesSection(){
     return (
          <SiteSection sectionTitle="Ի՞նչ եմ անում" id="services" maxWidth="full">
               <p>Հիմնականում զբաղվում եմ հետևյալ անելիքներով</p>
               <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] xs:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 max-w-full mt-10">
                    {services.map(({Icon,name,desc,link,linkText},i)=>(
                         <div key={`service-${i+1}`} className="w-full md:w-80 mx-auto p-2.5 xs:p-5 bg-card text-card-foreground border shadow-sm rounded-md flex justify-between items-center gap-2 flex-col">
                              <Icon className="size-[70px] text-[#002a4f] dark:text-[#25ccff]"/>
                              <div className="space-y-2">
                                   <h2 className="text-lg uppercase font-bold">{name}</h2>
                                   <p>{desc}</p>
                              </div>
                              <Button asChild>
                                   <Link href={link}>{linkText}</Link>
                              </Button>
                         </div>
                    ))}
               </div>
          </SiteSection>
     )
}