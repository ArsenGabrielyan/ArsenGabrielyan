import { languages } from "@/i18n/config";
import { LangCodeType } from "@/i18n/types";
import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CDN_BASE_URL = `https://arsengabrielyan.github.io/ArsenGabrielyan`;

export function formatAlbumName(album: string){
  return album.split("-").map(val=>val[0].toUpperCase() + val.slice(1)).join(" ");
}

/**
 * @param path Path starts from `/` (e.g. `/gallery`)
 */
export function absoluteURL(path?: string){
  const baseURL = process.env.NODE_ENV==="production" ? "https://arsen-2005.vercel.app" : "http://localhost:3000";
  return !path ? baseURL : `${baseURL}${path}`
}

export const absoluteLink = (locale: LangCodeType, path?: string) => {
  const redirectPath = !path ? "/" : path
  return absoluteURL(locale==="hy" ? redirectPath : `/${locale}${redirectPath}`)
}

export function createMetaAlternates(locale: LangCodeType, url?: string): Metadata["alternates"] {
  return {
    languages: Object.fromEntries(languages.map(l => [l.code, `/${l.code}${url}`])),
    canonical: absoluteLink(locale,url)
  }
}