"use client"
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown, ChevronUp, Folder, ImageIcon, Menu, SearchIcon, X } from "lucide-react";
import { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "../ui/input-group";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CDN_BASE_URL } from "@/lib/utils";

const MAX_COLS = 4;

interface GallerySectionProps{
     photoPaths: string[],
     albums: string[]
}
export default function GallerySection({photoPaths, albums}: GallerySectionProps){
     const isTablet = useIsMobile("tablet");
     const [isOpen, setIsOpen] = useState(false);
     const [isOpenAlbum, setIsOpenAlbum] = useState(false);

     function getCols(colIndex: number){
          return photoPaths.filter((_,i)=>i % MAX_COLS === colIndex)
     }

     return (
          <section className="bg-background p-8 min-h-screen grid grid-cols-1 lg:grid-cols-(--gallery-grid) gap-5 relative" id="photos">
               <div className={cn(
                    "overflow-x-hidden overflow-y-auto w-full fixed z-20 lg:z-0 top-0 lg:top-20 h-full lg:h-[90vh] lg:sticky bg-card/98 lg:bg-transparent p-4 lg:p-0 flex flex-col items-start justify-start gap-3 transition-all",
                    isOpen ? "left-0" : "-left-full"
               )}>
                    {isTablet && (
                         <Button variant="outline" size="icon" onClick={()=>setIsOpen(false)}>
                              <X/>
                         </Button>
                    )}
                    <InputGroup>
                         <InputGroupInput/>
                         <InputGroupAddon>
                              <SearchIcon/>
                         </InputGroupAddon>
                         <InputGroupAddon align="inline-end">
                              <InputGroupButton size="icon-xs"><X/></InputGroupButton>
                              {/* 12 արդյունք */}
                         </InputGroupAddon>
                    </InputGroup>
                    <Button variant="ghost" onClick={()=>setIsOpen(false)}>
                         <ImageIcon />
                         Պատկերասրահ
                    </Button>
                    <Collapsible open={isOpenAlbum} onOpenChange={setIsOpenAlbum} className="flex flex-col gap-2 w-full">
                         <div className="flex items-center justify-between gap-4 px-3 w-full">
                              <p className="flex items-center gap-2 text-sm">
                                   <Folder className="size-4"/> Ալբոմներ
                              </p>
                              <CollapsibleTrigger asChild>
                                   <Button variant="ghost" size="icon" className="size-8">
                                        {isOpenAlbum ? <ChevronUp/> : <ChevronDown/>}
                                        <span className="sr-only">Բացել / Փակել</span>
                                   </Button>
                              </CollapsibleTrigger>
                         </div>
                         <CollapsibleContent className="flex flex-col gap-2 py-2 px-4">
                              {albums.map(album=>(
                                   <Button key={album} variant="ghost">
                                        {album[0].toUpperCase()}{album.slice(1)}
                                   </Button>
                              ))}
                         </CollapsibleContent>
                    </Collapsible>
               </div>
               <div className="flex flex-col items-start justify-start gap-3">
                    {isTablet && (
                         <Button variant="outline" size="icon" onClick={()=>setIsOpen(true)}>
                              <Menu/>
                         </Button>
                    )}
                    {(photoPaths && photoPaths.length>0) && (
                         <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {[getCols(0),getCols(1),getCols(2),getCols(3)].map((cols,i)=>(
                                   <div key={`col-${i+1}`} className="flex flex-col gap-3">
                                        {cols.map((val,i)=>(
                                             <Image
                                                  key={`photo-${i+1}`}
                                                  src={`${CDN_BASE_URL}/thumbnails/${val}.webp`}
                                                  alt={`photo-${i+1}`}
                                                  width={400}
                                                  height={300}
                                             />
                                        ))}
                                   </div>
                              ))}
                         </div>
                    )}
               </div>
          </section>
     )
}