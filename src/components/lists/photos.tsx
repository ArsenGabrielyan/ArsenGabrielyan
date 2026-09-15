"use client"
import { MAX_COLS } from "@/lib/constants"
import { CDN_BASE_URL } from "@/lib/utils"
import { ImageIcon } from "lucide-react"
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from "../ui/empty"
import Image from "next/image";
import { useTranslations } from "next-intl"

interface PhotosListProps{
     data: string[],
     photoPaths: string[],
     onOpenImage: (img: string) => void
}
export default function PhotosList({data, photoPaths, onOpenImage}: PhotosListProps){
     const t = useTranslations("gallery.empty")
     const getCols = (colIndex: number) => data.filter((_,i)=>i % MAX_COLS === colIndex)
     return photoPaths && photoPaths.length>0? (
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
               {[getCols(0),getCols(1),getCols(2),getCols(3),getCols(4)].map((cols,i)=>(
                    <div key={`col-${i+1}`} className="flex flex-col gap-3 cursor-pointer">
                         {cols.map((val,j)=>(
                              <Image
                                   onClick={()=>onOpenImage(val)}
                                   key={`thumbnails/${val}.webp`}
                                   src={`${CDN_BASE_URL}/thumbnails/${val}.webp`}
                                   alt={`photo-${i+1}-${j+1}`}
                                   width={400}
                                   height={300}
                                   className="object-contain"
                              />
                         ))}
                    </div>
               ))}
          </div>
     ) : (
          <Empty>
               <EmptyHeader>
                    <EmptyMedia variant="icon">
                         <ImageIcon/>
                    </EmptyMedia>
                    <EmptyTitle>{t("title")}</EmptyTitle>
                    <EmptyDescription>{t("desc")}</EmptyDescription>
               </EmptyHeader>
          </Empty>
     )
}