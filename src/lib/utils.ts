import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const delay = (ms: number): Promise<void> => new Promise(res => setTimeout(res, ms));

export const CDN_BASE_URL = `https://arsengabrielyan.github.io/ArsenGabrielyan`;