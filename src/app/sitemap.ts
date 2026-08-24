import { locales } from '@/i18n/config'
import { absoluteLink, absoluteURL } from '@/lib/utils'
import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
     return [
          {
               url: absoluteURL("/"),
               lastModified: new Date(),
               changeFrequency: 'monthly',
               priority: 1,
               alternates: {
                    languages: {
                         "x-default": absoluteURL("/"),
                         ...Object.fromEntries(locales.map((locale) => [
                              locale,
                              absoluteLink(locale,"/")
                         ])
                   )}
               }
          },
          {
               url: absoluteURL("/gallery"),
               lastModified: new Date(),
               changeFrequency: 'weekly',
               priority: 0.8,
               alternates: {
                    languages: {
                         "x-default": absoluteURL("/gallery"),
                         ...Object.fromEntries(locales.map((locale) => [
                              locale,
                              absoluteLink(locale,"/gallery")
                         ])
                   )}
               }
          },
     ]
}