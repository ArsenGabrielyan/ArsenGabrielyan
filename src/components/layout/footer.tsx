import Link from "next/link";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { SiGithub, SiInstagram, SiYoutube } from "react-icons/si";

export default function SiteFooter(){
     const year = new Date().getFullYear();
     return (
          <footer className="py-3 px-5 flex justify-between items-center gap-2 flex-col md:flex-row border-t">
               <p className="text-center md:text-left text-base">&copy; {year} | Բոլոր իրավունքները պաշտպանված են</p>
               <ButtonGroup>
                    <Button variant="ghost" className="text-primary hover:text-foreground" size="icon" asChild>
                         <Link href="https://github.com/ArsenGabrielyan">
                              <SiGithub className="size-6"/>
                         </Link>
                    </Button>
                    <Button variant="ghost" className="text-primary hover:text-destructive" size="icon" asChild>
                         <Link href="https://youtube.com/@Arsen_2005">
                              <SiYoutube className="size-6"/>
                         </Link>
                    </Button>
                    <Button variant="ghost" className="text-primary hover:text-[#5851DB] dark:hover:text-[#aca9ee]" size="icon" asChild>
                         <Link href="https://www.instagram.com/arsen_photo.6973">
                              <SiInstagram className="size-6"/>
                         </Link>
                    </Button>
               </ButtonGroup>
          </footer>
     )
}