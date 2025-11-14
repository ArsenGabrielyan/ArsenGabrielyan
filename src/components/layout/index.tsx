import SiteFooter from "./footer";
import SiteHeader from "./header";

interface PageLayoutProps{
     children: React.ReactNode
}
export default function PageLayout({children}: PageLayoutProps){
     return (
          <>
               <SiteHeader/>
               {children}
               <SiteFooter/>
          </>
     )
}