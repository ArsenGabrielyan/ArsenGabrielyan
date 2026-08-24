"use client"
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl";
import { LINKS } from "@/lib/constants";

interface HeaderLinkProps{
     link: typeof LINKS[number],
     isSticky: boolean,
     setIsOpen: (open: boolean) => void
}
export default function HeaderLink({link, isSticky, setIsOpen}: HeaderLinkProps){
     const t = useTranslations("index.header-links")
     return (
          <li className="relative">
               <Link
                    href={`${link.url}`}
                    className={cn(
                         "tracking-[1.25px] font-regular transition-all hover:text-primary text-lg",
                         isSticky ? "text-foreground" : "text-foreground md:text-white"
                    )}
                    onClick={()=>setIsOpen(false)}
               >{t(link.name)}</Link>
          </li>
     )
}