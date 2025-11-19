"use server"
import { CDN_BASE_URL } from "@/lib/utils";

export const getPhotoPaths = async()=>{
     const albums = await getAlbums();
     const albumFetches = albums.map(album =>
     fetch(`${CDN_BASE_URL}/thumbnails/${album}`)
          .then(res => res.ok ? res.text() : "")
          .then(html =>
               [...html.matchAll(/href="([^"]+\.(jpg|jpeg|png|webp))"/gi)]
                    .map(m => `${album}/${m[1]}`.replace(".webp", ""))
          )
     );
     const results = await Promise.all(albumFetches);
     return results.flat();
}

export const getAlbums = async()=>{
     const res = await fetch(`${CDN_BASE_URL}/thumbnails`);
     const html = await res.text();
     const matches = [...html.matchAll(/href="([^"]+\/)"/g)];
     return matches.map(m => m[1].replace("/", ""))
          .filter(name => name !== ".." && name !== "github-pages-directory-listing");
}