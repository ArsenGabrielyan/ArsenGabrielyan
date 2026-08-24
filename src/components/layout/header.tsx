"use client"
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation"
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ThemeSwitcher from "../theme-changer";
import LanguageSwitcher from "../lang-switcher";
import { useTranslations } from "next-intl";
import { LINKS } from "@/lib/constants";

export default function SiteHeader(){
     const isMobile = useIsMobile();
     const [isOpen, setIsOpen] = useState(false);
     const [isSticky, setIsSticky] = useState(false);
     const t = useTranslations("index")
     useEffect(()=>{
          function handleScroll() {
               setIsSticky(window.scrollY > 20)
          }
          window.addEventListener("scroll",handleScroll)
          return () => {
               window.removeEventListener("scroll",handleScroll)
          }
     },[])
     return (
          <header id="header" className={cn("fixed top-0 left-0 w-full flex justify-between items-center px-6 lg:px-24 z-10 transition-all",isSticky ? "bg-background py-3 border-b border-primary" : "bg-background md:bg-transparent py-3 lg:py-9 border-b-0")}>
               <Link href="/" className={cn(
                    "font-heading font-semibold text-xl xs:text-3xl capitalize tracking-[2px] transition-all",
                    isSticky ? "text-primary" : "text-foreground md:text-white hover:text-primary"
               )}>{t("title")}</Link>
               <ul className={cn("block md:flex justify-center items-center gap-6 bg-background md:bg-transparent absolute md:static top-16 left-0 w-full md:w-fit h-screen md:h-fit text-center md:text-left overflow-auto md:overflow-hidden space-y-2 md:space-y-0",isOpen ? "visible opacity-100 pt-5 md:pt-0" : "hidden md:visible opacity-0 md:opacity-100 pt-0")}>
                    {LINKS.map(link=>(
                         <li key={`link-${link.url.replace(/#|\//g,"")}`} className="relative">
                              <Link
                                   href={`${link.url}`}
                                   className={cn(
                                        "tracking-[1.25px] font-regular transition-all hover:text-primary text-lg",
                                        isSticky ? "text-foreground" : "text-foreground md:text-white"
                                   )}
                                   onClick={()=>setIsOpen(false)}
                              >{t(`header-links.${link.name}`)}</Link>
                         </li>
                    ))}
               </ul>
               <div className="flex items-center gap-2 flex-row-reverse">
                    <ThemeSwitcher
                         isSticky={isSticky}
                    />
                    <LanguageSwitcher/>
               </div>
               {isMobile && (
                    <Button size="icon-lg" title={t("menu")} variant="ghost" onClick={()=>setIsOpen(prev=>!prev)}>
                         {isOpen ? <X className="size-6"/> : <Menu className="size-6"/>}
                    </Button>
               )}
          </header>
     )
}