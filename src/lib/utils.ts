import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CDN_BASE_URL = `https://arsengabrielyan.github.io/ArsenGabrielyan`;