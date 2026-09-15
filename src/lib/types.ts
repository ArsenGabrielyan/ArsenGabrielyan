import { LangCodeType } from "@/i18n/types";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface IService{
     Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
     url: string,
     type: "coding" | "photo" | "science"
}
export interface IAchievement{
     count: number,
     type: "projects" | "experiments" | "photos"
     url: string
}
export type PortfolioItemType = "project" | "other";
export interface IPortfolioItem{
     slug: PortfolioItems
     image?: string,
     title: Record<LangCodeType, string>,
     description: Record<LangCodeType, string>
     url: string,
     githubUrl?: string,
     type: PortfolioItemType
}
export enum HeaderLinks{
     Home = "home",
     About = "about",
     Services = "services",
     Portfolio = "portfolio",
     Contact = "contact",
     Gallery = "gallery"
}
export enum PortfolioItems{
     CalmMood = "calm-mood",
     ArsenKids = "arsenkids",
     CvAgir = "cv-agir",
     PhotoByArsen = "photo-by-arsen",
     ScientificCrafts = "scientific-crafts",
     Animations = "animations",
     HartsQuiz = "harts"
}