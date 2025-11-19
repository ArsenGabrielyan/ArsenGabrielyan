import { absoluteURL } from '@/lib/utils'
import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
     return [
          {
               url: absoluteURL("/"),
               lastModified: new Date(),
               changeFrequency: 'monthly',
               priority: 1,
          },
          {
               url: absoluteURL("/gallery"),
               lastModified: new Date(),
               changeFrequency: 'monthly',
               priority: 0.8,
          },
     ]
}