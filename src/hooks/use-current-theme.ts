import { useTheme } from "next-themes";

export default function useCurrentTheme(){
     const {theme, systemTheme} = useTheme();
     const currTheme = theme === "system" ? systemTheme : theme;
     return {
          currTheme,
          type: theme==="system" ? "system" : currTheme
     }
}