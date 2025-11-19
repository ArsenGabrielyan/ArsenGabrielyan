"use server"
import { CDN_BASE_URL, delay } from "@/lib/utils";
import jsdom from "jsdom"

export const getPhotoPaths = async()=>{
     const paths = await getAlbums()
     const files: string[] = [];

     for(let i=0;i<paths.length;i++){
          const res = await fetch(`${CDN_BASE_URL}/thumbnails/${paths[i]}`);
          if(!res.ok) continue;
          const html = await res.text();
          const dom = new jsdom.JSDOM(html);
          dom.window.document.querySelectorAll("a").forEach(a => {
               const href = a.getAttribute("href");
               if (!href) return;
               if (href.match(/\.(jpg|jpeg|png|webp)$/i))
                    files.push(`${paths[i]}/${href}`)
          });
          await delay(50)
     }
     
     return files.map(file=>file.replace(".webp",""))
}

export const getAlbums = async()=>{
     const res = await fetch(`${CDN_BASE_URL}/thumbnails`);
     const html = await res.text();
     const doc = new jsdom.JSDOM(html);
     const albums: string[] = [];

     doc.window.document.querySelectorAll("a").forEach(a => {
          if (a.textContent==="../" || a.textContent==="github-pages-directory-listing") return;
          const href = a.getAttribute("href");
          if(!href) return;

          if (href.endsWith("/")) 
               albums.push(href.replace("/",""));
     });

     return albums;
}