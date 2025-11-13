import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface IService{
     Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
     name: string,
     desc: string,
     link: string,
     linkText: string
}
export interface IAchievement{
     count: number,
     name: string,
     url: string
}