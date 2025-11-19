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
}
export default function Lightbox({images, startIndex, open, onClose}: LightboxProps){
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

     const isMobile = useIsMobile("mobile")

     return (
     <Dialog open={open} onOpenChange={onClose}>
          <DialogContent className="py-3 md:py-6 px-3 md:px-6 lg:py-0 flex justify-center items-center max-w-5xl! w-full bg-background/75 backdrop-blur-md flex-col md:flex-row" showCloseButton={false}>
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
               <Image
                    src={images[index]}
                    alt=""
                    width={1280}
                    height={900}
                    className="object-contain select-none w-full h-full"
               />
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