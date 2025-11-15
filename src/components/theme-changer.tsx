"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface ThemeSwitcherProps{
     isSticky: boolean
}
export default function ThemeSwitcher({isSticky}: ThemeSwitcherProps){
     const { theme, setTheme, resolvedTheme } = useTheme()
     const [mounted, setMounted] = useState(false)

     useEffect(() => {
          const id = requestAnimationFrame(() => setMounted(true))
          return () => cancelAnimationFrame(id)
     }, [])

     return !mounted ? (
          <Button variant="ghost" size="icon-lg" className="opacity-0 pointer-events-none" disabled />
     ) : (
          <DropdownMenu>
               <DropdownMenuTrigger asChild className="-order-1 md:order-1">
                    <Button variant="ghost" size="icon-lg" className={isSticky ? "text-foreground" : "text-foreground md:text-white"}>
                         {theme === "system" ? (
                              <Monitor className="size-6" />
                         ) : resolvedTheme === "dark" ? (
                              <Moon className="size-6" />
                         ) : (
                              <Sun className="size-6" />
                         )}
                    </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent className="[--radius:0.65rem]" align="end">
                    <DropdownMenuItem className="p-0" onClick={()=>setTheme("system")}>
                         <Item size="sm" className="w-full p-2">
                              <ItemMedia variant="icon">
                                   <Monitor/>
                              </ItemMedia>
                              <ItemContent className="gap-0.5">
                                   <ItemTitle>Լռելյայն տեսք</ItemTitle>
                              </ItemContent>
                         </Item>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" onClick={()=>setTheme("light")}>
                         <Item size="sm" className="w-full p-2">
                              <ItemMedia variant="icon">
                                   <Sun/>
                              </ItemMedia>
                              <ItemContent className="gap-0.5">
                                   <ItemTitle>Բաց տեսք</ItemTitle>
                              </ItemContent>
                         </Item>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" onClick={()=>setTheme("dark")}>
                         <Item size="sm" className="w-full p-2">
                              <ItemMedia variant="icon">
                                   <Moon/>
                              </ItemMedia>
                              <ItemContent className="gap-0.5">
                                   <ItemTitle>Մուգ տեսք</ItemTitle>
                              </ItemContent>
                         </Item>
                    </DropdownMenuItem>
               </DropdownMenuContent>
          </DropdownMenu>
     )
}