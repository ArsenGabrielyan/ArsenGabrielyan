import { cache } from "react";
import { CDN_BASE_URL } from "./utils";
import { IPortfolioItem } from "./types";

export const getPortfolio = cache(async (): Promise<IPortfolioItem[]> => {
     try {
          const res = await fetch(`${CDN_BASE_URL}/projects.json`);
          if(!res.ok) return []
          const data: IPortfolioItem[] = await res.json();
          return data.filter((project): project is IPortfolioItem => project !== null);
     } catch {
          return []
     }
})