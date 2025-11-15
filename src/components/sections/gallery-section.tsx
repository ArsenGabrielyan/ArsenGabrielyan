"use client"
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown, ChevronUp, Folder, ImageIcon, Menu, SearchIcon, X } from "lucide-react";
import { useState } from "react";
import { ButtonGroup } from "../ui/button-group";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { cn } from "@/lib/utils";
import React from "react";

const MAX_COLS = 4;
const ASPECTS = ["aspect-square","aspect-video","aspect-3/4","aspect-4/3","aspect-9/16"]

const getRandomAspect = () => ASPECTS[Math.floor(Math.random()*ASPECTS.length)]

export default function GallerySection(){
     const isTablet = useIsMobile("tablet");
     const [isOpen, setIsOpen] = useState(false);
     const [isOpenAlbum, setIsOpenAlbum] = useState(false);

     const sampleArray: ({id: number, aspect: string})[] = Array.from({length: 20}).map((_,i)=>{
          return {
               id: i+1,
               aspect: ""
          }
     });
     function getCols(colIndex: number){
          return sampleArray.filter((val)=>(val.id-1) % MAX_COLS === colIndex).map(obj=>({
               ...obj,
               aspect: getRandomAspect()
          }))
     }

     return (
          <section className="bg-background p-10 min-h-screen grid grid-cols-1 lg:grid-cols-(--gallery-grid) gap-5 relative">
               <div className={cn(
                    "overflow-auto w-full fixed z-20 top-0 h-full lg:static bg-card lg:bg-transparent p-4 lg:p-0 flex flex-col items-start justify-start gap-3 transition-all",
                    isOpen ? "left-0" : "-left-full"
               )}>
                    {isTablet && (
                         <Button variant="outline" size="icon" onClick={()=>setIsOpen(false)}>
                              <X/>
                         </Button>
                    )}
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
                              hi
                         </CollapsibleContent>
                    </Collapsible>
               </div>
               <div className="flex flex-col items-start justify-start gap-3">
                    <div className="w-full space-y-3">
                         <p className="flex items-center gap-3">
                              {isTablet && (
                                   <Button variant="outline" size="icon" onClick={()=>setIsOpen(true)}>
                                        <Menu/>
                                   </Button>
                              )}
                              Որոնել լուսանկարը
                         </p>
                         <ButtonGroup className="w-full">
                              <InputGroup>
                                   <InputGroupInput/>
                                   <InputGroupAddon>
                                        <SearchIcon/>
                                   </InputGroupAddon>
                              </InputGroup>
                              <Button variant="primary">
                                   Որոնել
                              </Button>
                         </ButtonGroup>
                    </div>
                    <div className="w-full grid grid-cols-4 gap-4">
                         {[getCols(1),getCols(2),getCols(3),getCols(4)].map((cols,i)=>(
                              <div key={i} className="flex flex-col gap-4">
                                   {cols.map(val=>(
                                        <div key={val.id} className={cn("bg-accent max-w-[400px]",val.aspect)}/>
                                   ))}
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     )
}