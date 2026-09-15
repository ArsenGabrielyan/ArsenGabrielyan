import { Code, Camera, FlaskConical } from "lucide-react";
import { HeaderLinks, IAchievement, IService } from "./types";

export const ACHIEVEMENTS: IAchievement[] = [
     {count: 12, type: "projects", url: "https://github.com/ArsenGabrielyan?tab=repositories"},
     {count: 14, type: "experiments", url: "https://www.youtube.com/playlist?list=PLSI6KSDJfq-J6OxBprsyMjWmmLym2o7T3"},
     {count: 46, type: "photos", url: "https://www.instagram.com/arsen_photo.6973"}
]
export const MAX_COLS = 5;
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