"use client"
import { cn } from "@/lib/utils";
import Link from "next/link"
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ThemeSwitcher from "../theme-changer";

const links = [
     {url: "#home", name: "Գլխավոր"},
     {url: "#about", name: "Իմ մասին"},
     {url: "#services", name: "Ծառայություններ"},
     {url: "#portfolio", name: "Պորտֆոլիո"},
     {url: "#contact", name: "Կապ"},
     {url: "/gallery", name: "Պատկերասրահ"}
]

export default function SiteHeader(){
     const isMobile = useIsMobile();
     const [isOpen, setIsOpen] = useState(false);
     const [isSticky, setIsSticky] = useState(false);
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
               )}>Արսեն Գ.</Link>
               <ul className={cn("block md:flex justify-center items-center gap-6 bg-background md:bg-transparent absolute md:static top-16 left-0 w-full md:w-fit h-screen md:h-fit text-center md:text-left overflow-auto md:overflow-hidden space-y-2 md:space-y-0",isOpen ? "visible opacity-100 pt-5 md:pt-0" : "hidden md:visible opacity-0 md:opacity-100 pt-0")}>
                    {links.map(link=>(
                         <li key={`link-${link.url.replace(/#|\//g,"")}`} className="relative">
                              <Link
                                   href={`${link.url}`}
                                   className={cn(
                                        "tracking-[1.25px] font-regular transition-all hover:text-primary text-lg",
                                        isSticky ? "text-foreground" : "text-foreground md:text-white"
                                   )}
                                   onClick={()=>setIsOpen(false)}
                              >{link.name}</Link>
                         </li>
                    ))}
               </ul>
               <ThemeSwitcher
                    isSticky={isSticky}
               />
               {isMobile && (
                    <Button size="icon-lg" title="Մենյու" variant="ghost" onClick={()=>setIsOpen(prev=>!prev)}>
                         {isOpen ? <X className="size-6"/> : <Menu className="size-6"/>}
                    </Button>
               )}
          </header>
     )
}