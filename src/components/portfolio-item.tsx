import { Item, ItemActions, ItemContent, ItemDescription, ItemHeader, ItemMedia, ItemTitle } from "./ui/item"
import { IPortfolioItem } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"
import { ButtonGroup, ButtonGroupSeparator } from "./ui/button-group"
import { Button } from "./ui/button"
import { SiGithub } from "react-icons/si"
import { ExternalLink } from "lucide-react"
import { useMemo } from "react"
import { cn } from "@/lib/utils"

interface PortfolioItemProps{
     data: IPortfolioItem,
     isMobile: boolean,
     className?: string
}
export default function PortfolioItem({data, isMobile, className}: PortfolioItemProps){
     const textAlign = useMemo(()=>isMobile ? "text-center" : "text-left",[isMobile])
     return (
          <Item className={cn(textAlign,className)}>
               {!!data.image && (
                    isMobile ? (
                         <ItemHeader>
                              <Image
                                   src={data.image}
                                   alt="item-image"
                                   width={200}
                                   height={200}
                                   className="aspect-square w-full rounded-sm object-cover"
                              />
                         </ItemHeader>
                    ) : (
                         <ItemMedia variant="image" className="size-20">
                              <Image
                                   src={data.image}
                                   alt="item-image"
                                   width={200}
                                   height={200}
                                   className="aspect-square w-full rounded-sm object-cover"
                              />
                         </ItemMedia>
                    )
               )}
               <ItemContent>
                    <ItemTitle className={textAlign}>{data.name}</ItemTitle>
                    <ItemDescription>{data.description}</ItemDescription>
                    {isMobile && (
                         <div className="w-full mt-2">
                              {(!!data.githubUrl && data.type==="project") ? (
                                   <ButtonGroup className="w-full">
                                        <Button className="flex-1" title="Դիտել Github-ում" asChild>
                                             <Link href={data.githubUrl}>
                                                  <SiGithub/>
                                             </Link>
                                        </Button>
                                        <ButtonGroupSeparator/>
                                        <Button className="flex-1" title="Այցելել" asChild variant="primary">
                                             <Link href={data.url}>
                                                  <ExternalLink/>
                                             </Link>
                                        </Button>
                                   </ButtonGroup>
                              ) : (
                                   <Button asChild className="w-full" variant="primary">
                                        <Link href={data.url}>
                                             <ExternalLink/> Այցելել
                                        </Link>
                                   </Button>
                              )}
                         </div>
                    )}
               </ItemContent>
               {!isMobile && (
                    <ItemActions>
                         {(!!data.githubUrl && data.type==="project") ? (
                              <ButtonGroup>
                                   <Button size="icon" title="Դիտել Github-ում" asChild>
                                        <Link href={data.githubUrl}>
                                             <SiGithub/>
                                        </Link>
                                   </Button>
                                   <ButtonGroupSeparator/>
                                   <Button size="icon" title="Այցելել" asChild variant="primary">
                                        <Link href={data.url}>
                                             <ExternalLink/>
                                        </Link>
                                   </Button>
                              </ButtonGroup>
                         ) : (
                              <Button asChild variant="primary">
                                   <Link href={data.url}>
                                        <ExternalLink/> Այցելել
                                   </Link>
                              </Button>
                         )}
                    </ItemActions>
               )}
          </Item>
     )
}