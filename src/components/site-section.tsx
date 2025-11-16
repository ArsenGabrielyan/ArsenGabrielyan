import { cn } from "@/lib/utils";

export default function SiteSection({ sectionTitle, containerClass, maxWidth = 800, className, children,...props }: React.ComponentProps<"section"> & {sectionTitle?: string, maxWidth?: number | "full", containerClass?: string}){
     return (
          <section {...props} className={cn("bg-background py-32 px-2.5 sm:py-20 sm:px-5 md:p-24 min-h-screen flex justify-center items-center",containerClass)}>
               <div className={cn("text-center w-full mx-auto space-y-3",maxWidth==="full" && "max-w-full", className)} {...(maxWidth!=="full" ? {
                    style: { maxWidth }
               } : {})}>
                    {!!sectionTitle && (
                         <h2 className="text-[21px] sm:text-[27px] md:text-4xl font-semibold mb-2.5">
                              {sectionTitle}
                         </h2>
                    )}
                    {children}
               </div>
          </section>
     )
}