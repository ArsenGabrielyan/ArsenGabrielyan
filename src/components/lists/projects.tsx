"use client"
import { IPortfolioItem } from "@/lib/types";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty";
import { GalleryThumbnails } from "lucide-react";
import PortfolioItem from "../items/portfolio";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslations } from "next-intl";

interface ProjectsListProps{
     data: IPortfolioItem[]
}
export default function ProjectsList({data}: ProjectsListProps){
     const isMobile = useIsMobile("tablet")
     const t = useTranslations("portfolio.empty")
     return data.length===0 ? (
          <Empty>
               <EmptyHeader>
                    <EmptyMedia variant="icon">
                         <GalleryThumbnails/>
                    </EmptyMedia>
                    <EmptyTitle>{t("title")}</EmptyTitle>
                    <EmptyDescription>{t("desc")}</EmptyDescription>
               </EmptyHeader>
          </Empty>
     ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 max-w-full gap-3 mt-20 mb-10">
               {data.map(item=>(
                    <PortfolioItem
                         key={item.slug}
                         className="w-full"
                         data={item}
                         isMobile={isMobile}
                    />
               ))}
          </div>
     )
}