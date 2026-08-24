import { Code, Camera, FlaskConical } from "lucide-react";
import { HeaderLinks, IAchievement, IPortfolioItem, IService, PortfolioItems } from "./types";

export const ACHIEVEMENTS: IAchievement[] = [
     {count: 12, type: "projects", url: "https://github.com/ArsenGabrielyan?tab=repositories"},
     {count: 14, type: "experiments", url: "https://www.youtube.com/playlist?list=PLSI6KSDJfq-J6OxBprsyMjWmmLym2o7T3"},
     {count: 46, type: "photos", url: "https://www.instagram.com/arsen_photo.6973"}
]
export const MAX_COLS = 5;
export const PORTFOLIO_ITEMS: IPortfolioItem[] = [
     {
          image: "/logos/calm-mood.png",
          item: PortfolioItems.CalmMood,
          url: "https://calm-mood.vercel.app",
          githubUrl: "https://github.com/ArsenGabrielyan/calm-mood",
          type: "project"
     },
     {
          image: "/logos/arsenkids.png",
          item: PortfolioItems.ArsenKids,
          url: "https://arsenkids.vercel.app",
          githubUrl: "https://github.com/ArsenGabrielyan/ArsenKids",
          type: "project"
     },
     {
          image: "/logos/cv-agir.png",
          item: PortfolioItems.CvAgir,
          url: "https://cv-agir.vercel.app",
          githubUrl: "https://github.com/ArsenGabrielyan/cv-agir",
          type: "project"
     },
     {
          image: "/logos/photo-by-arsen.png",
          item: PortfolioItems.PhotoByArsen,
          url: "https://www.instagram.com/arsen_photo.6973/",
          type: "other"
     },
     {
          item: PortfolioItems.ScientificCrafts,
          url: "https://www.youtube.com/playlist?list=PLSI6KSDJfq-J6OxBprsyMjWmmLym2o7T3",
          type: "other"
     },
     {
          item: PortfolioItems.Animations,
          url: "https://www.youtube.com/playlist?list=PLSI6KSDJfq-IcQ4ld9W1m_f8hnJTNe7gJ",
          type: "other"
     },
     {
          image: "/logos/harts.png",
          item: PortfolioItems.HartsQuiz,
          githubUrl: "https://github.com/ArsenGabrielyan/harts-quiz",
          url: "https://harts-quiz.onrender.com/",
          type: "project"
     }
]
export const SERVICES: IService[] = [
     {
          Icon: Code,
          url: "https://github.com/ArsenGabrielyan?tab=repositories",
          type: "coding"
     },
     {
          Icon: Camera,
          url: "/gallery#photos",
          type: "photo"
     },
     {
          Icon: FlaskConical,
          url: "https://www.youtube.com/playlist?list=PLSI6KSDJfq-J6OxBprsyMjWmmLym2o7T3",
          type: "science"
     }
]
export const LINKS = [
     {url: "#home", name: HeaderLinks.Home},
     {url: "#about", name: HeaderLinks.About},
     {url: "#services", name: HeaderLinks.Services},
     {url: "#portfolio", name: HeaderLinks.Portfolio},
     {url: "#contact", name: HeaderLinks.Contact},
     {url: "/gallery", name: HeaderLinks.Gallery}
]