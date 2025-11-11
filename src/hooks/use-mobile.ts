"use client"
import * as React from "react"

export function useIsMobile(mode: "tablet" | "mobile" = "tablet") {
     const MOBILE_BREAKPOINT = mode==="tablet" ? 1024 : 768
     const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

     React.useEffect(() => {
          const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
          const onChange = () => {
               setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
          }
          mql.addEventListener("change", onChange)
          setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
          return () => mql.removeEventListener("change", onChange)
     }, [MOBILE_BREAKPOINT])

     return !!isMobile
}