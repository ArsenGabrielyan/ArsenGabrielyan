"use client"
import SiteSection from "../site-section"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { IPortfolioItem, PortfolioItemType } from "@/lib/types"
import PortfolioItem from "../portfolio-item"
import { useIsMobile } from "@/hooks/use-mobile"
import { useMemo } from "react"

const portfolioItems: IPortfolioItem[] = [
     {
          image: "/logos/calm-mood.png",
          name: "Հանգիստ Տրամադրություն",
          description: "Հավելված, որը կօգնի ձեզ հանգստացնել մարդու նյարդային համակարգը սթրեսի, լարվածության կամ դեպրեսիայի դեպքում։",
          url: "https://calm-mood.vercel.app",
          githubUrl: "https://github.com/ArsenGabrielyan/calm-mood",
          type: "project"
     },
     {
          image: "/logos/arsenkids.png",
          name: "ArsenKids | ԱրսենՔիդս",
          description: "Կրթական նախագիծ՝ հետաքրքիր խաղերով, որոնք ուսուցումը զվարճալի են դարձնում նոր սերնդի երեխաների համար",
          url: "https://arsenkids.vercel.app",
          githubUrl: "https://github.com/ArsenGabrielyan/ArsenKids",
          type: "project"
     },
     {
          image: "/logos/cv-agir.png",
          name: "CV-ագիր (Դեմո տարբերակ)",
          description: "Ինտերակտիվ ռեզյումեի գեներատոր, որն ունի QR կոդ յուրաքանչյուր օգտատիրոջ կողմից ստեղծված ռեզյումեի վրա",
          url: "https://cv-agir.vercel.app",
          githubUrl: "https://github.com/ArsenGabrielyan/cv-agir",
          type: "project"
     },
     {
          image: "/logos/photo-by-arsen.png",
          name: "Photo By Arsen",
          description: "Լուսանկարներ, որը նկարահանել եմ ճանապարհորդելու ընթացքում:",
          url: "https://www.instagram.com/arsen_photo.6973/",
          type: "other"
     },
     {
          name: "Գիտաֆիզիկա",
          description: "Նայեք և Ուսումնասիրեք Գիտության, Ֆիզիկայի և Քիմիայի Մասին։",
          url: "https://www.youtube.com/playlist?list=PLSI6KSDJfq-J6OxBprsyMjWmmLym2o7T3",
          type: "other"
     },
     {
          name: "Անիմացիաներ",
          description: "Հետաքրքիր մուլտֆիլմներ բոլորի համար։ Այս մուլտֆիլմերը պատրաստել եմ, երբ ես փոքր էի",
          url: "https://www.youtube.com/playlist?list=PLSI6KSDJfq-IcQ4ld9W1m_f8hnJTNe7gJ",
          type: "other"
     },
     {
          image: "/logos/harts.png",
          name: "Հարց (Բետա տարբերակ)",
          description: "Առցանց խաղային ուսուցման հարթակ՝ օգտատիրոջ կողմից ստեղծված թեստերով",
          githubUrl: "https://github.com/ArsenGabrielyan/harts-quiz",
          url: "https://harts-quiz.onrender.com/",
          type: "project"
     }
]

const itemHeadings: Record<PortfolioItemType,string> = {
     project: "Պրոյեկտներ",
     other: "Այլ ստեղծագործություններ"
}

export default function PortfolioSection(){
     const isMobile = useIsMobile("tablet")
     const orientation = useMemo<"horizontal" | "vertical">(()=>isMobile ? "horizontal" : "vertical",[isMobile])
     const item = useMemo(()=>portfolioItems.reduce<Record<PortfolioItemType,IPortfolioItem[]>>((acc,val)=>{
          acc[val.type] = portfolioItems.filter(item=>item.type===val.type);
          return acc;
     },{} as Record<PortfolioItemType,IPortfolioItem[]>),[])
     return (
          <SiteSection sectionTitle="Պորտֆոլիո" maxWidth="full" id="portfolio">
               <p>Այստեղ դուք կտեսնեք իմ պրոյեկտները, տեսանյութերը և այլ ստեղծագործություններ:</p>
               <div className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-full gap-3 h-fit lg:h-[60vh] mt-20 mb-10">
                    {Object.entries(item).map(([type,list])=>
                         <div key={type} className="w-full flex justify-center items-center flex-col h-fit lg:h-[60vh] p-2.5 mt-2.5 space-y-2.5 lg:space-y-10">
                              <h2 className="mb-5 text-xl sm:text-2xl font-semibold border-b-2 border-primary w-fit pb-1">{itemHeadings[type as PortfolioItemType]}</h2>
                              <div className="p-10 w-full">
                                   <Carousel
                                        orientation={orientation}
                                        opts={{
                                             align: "start",
                                        }}
                                   >
                                        <CarouselContent className="h-fit lg:h-[60vh] w-full">
                                             {list.map((item,i)=>(
                                                  <CarouselItem key={`item-${i+1}`} className="xs:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-5">
                                                       <PortfolioItem className="w-full" data={item} isMobile={isMobile}/>
                                                  </CarouselItem>
                                             ))}
                                        </CarouselContent>
                                        <CarouselPrevious/>
                                        <CarouselNext/>
                                   </Carousel>
                              </div>
                         </div>
                    )}
               </div>
          </SiteSection>
     )
}