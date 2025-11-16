import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface IService{
     Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
     name: string,
     desc: string,
     url: string,
     linkText: string
}
export interface IAchievement{
     count: number,
     name: string,
     url: string
}
export type PortfolioItemType = "project" | "other";
export interface IPortfolioItem{
     image?: string,
     name: string,
     description: string,
     url: string,
     githubUrl?: string,
     type: PortfolioItemType
}