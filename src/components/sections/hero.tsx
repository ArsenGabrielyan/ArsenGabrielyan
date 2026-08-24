"use client"
import { useTranslations } from "next-intl"

export default function HeroSection(){
     const t = useTranslations("hero-section")
     return (
          <section id="home" className="text-white w-full min-h-screen bg-[url('/bg.png')] bg-cover bg-center bg-fixed relative">
               <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col text-center bg-linear-to-t from-black/55 to-[#002a4f4d] space-y-0.5 xs:space-y-0.5 sm:space-y-1 md:space-y-2">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t.rich("title",{
                         blue: chunks => <span className="text-[#25ccff]">{chunks}</span>
                    })}</h1>
                    <p className="text-lg sm:text-2xl md:text-4xl">{t("sub-title")}</p>
               </div>
          </section>
     )
}