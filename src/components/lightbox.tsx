"use client";
import * as React from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ButtonGroup } from "./ui/button-group";

interface LightboxProps {
  images: string[];
  startIndex?: number;
  open: boolean;
  onClose: () => void;
  totalImages: number
}
export default function Lightbox({images, startIndex, open, onClose, totalImages}: LightboxProps){
     const [index, setIndex] = React.useState<number>(startIndex || 0);

     React.useEffect(() => setIndex(startIndex || 0), [startIndex]);

     const next = () => setIndex((prev) => (prev + 1) % images.length);
     const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

     React.useEffect(() => {
          const handleKey = (e: KeyboardEvent) => {
               if (e.key === "ArrowRight") next();
               if (e.key === "ArrowLeft") prev();
               if (e.key === "Escape") onClose();
          };
          window.addEventListener("keydown", handleKey);
          return () => window.removeEventListener("keydown", handleKey);
     });

     const isMobile = useIsMobile("mobile");

     React.useEffect(()=>{
          console.log(index)
     },[index])

     return (
     <Dialog open={open} onOpenChange={onClose}>
          <DialogContent className="py-3 md:py-6 px-3 md:px-6 flex justify-center items-center bg-background/75 backdrop-blur-md flex-col md:flex-row w-full max-w-7xl max-h-[900px]" showCloseButton={false}>
               <Button onClick={onClose} variant="secondary" size="icon" className="absolute top-2 right-2">
                    <X className="size-5"/>
               </Button>
               {!isMobile && (
                    <Button
                         onClick={prev}
                         variant="ghost"
                         size="icon-lg"
                    >
                         <ChevronLeft className="size-6" />
                    </Button>
               )}
               <div className="flex flex-col items-center justify-center h-full w-full gap-4 max-w-7xl max-h-[750px]">
                    <Image
                         src={images[index]}
                         alt=""
                         width={1280}
                         height={900}
                         className="object-contain select-none h-full w-full rounded-md"
                    />
                    <p className="text-foreground text-lg md:text-xl">{index+1}/{totalImages}</p>
               </div>
               {!isMobile && (
                    <Button
                         onClick={next}
                         variant="ghost"
                         size="icon-lg"
                    >
                         <ChevronRight className="size-6" />
                    </Button>
               )}
               {isMobile && (
                    <ButtonGroup className="w-full">
                         <Button
                              onClick={prev}
                              variant="outline"
                              className="flex-1"
                         >
                              <ChevronLeft className="size-6" />
                         </Button>
                         <Button
                              onClick={next}
                              variant="outline"
                              className="flex-1"
                         >
                              <ChevronRight className="size-6" />
                         </Button>
                    </ButtonGroup>
               )}
          </DialogContent>
     </Dialog>
  );
}