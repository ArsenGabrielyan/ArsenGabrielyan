"use client"
import Image from "next/image"
import SiteSection from "../site-section"
import { Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemTitle } from "../ui/item"

export default function PortfolioSection(){
     return (
          <SiteSection sectionTitle="Պորտֆոլիո" maxWidth={800}>
               <ItemGroup className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                    <Item variant="outline" className="w-72">
                         <ItemHeader>
                              <Image
                                   src={"/logos/calm-mood.png"}
                                   alt="calm-mood"
                                   width={200}
                                   height={200}
                                   className="aspect-square w-full rounded-sm object-cover"
                              />
                         </ItemHeader>
                         <ItemContent>
                              <ItemTitle className="text-base sm:text-lg md:text-xl font-semibold">Հանգիստ տրամադրություն</ItemTitle>
                              <ItemDescription>Մեդիտացիայի հավելված, որը կօգնի ձեզ հանգստացնել մարդու նյարդային համակարգը սթրեսի, լարվածության կամ դեպրեսիայի դեպքում։</ItemDescription>
                         </ItemContent>
                    </Item>
               </ItemGroup>
          </SiteSection>
     )
}