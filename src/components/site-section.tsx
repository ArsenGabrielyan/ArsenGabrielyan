import { cn } from "@/lib/utils";

export default function SiteSection({ sectionTitle, maxWidth = 800, className, children,...props }: React.ComponentProps<"section"> & {sectionTitle: string, maxWidth?: number | "full"}){
     return (
          <section {...props} className="bg-background p-[256px_8px_128px_8px] sm:p-[100px_20px_50px_20px] md:p-24 min-h-screen flex justify-center items-center">
               <div className={cn("text-center w-full mx-auto space-y-2.5",maxWidth==="full" && "max-w-full", className)} {...(maxWidth!=="full" ? {
                    style: { maxWidth }
               } : {})}>
                    <h2 className="text-[21px] sm:text-[27px] md:text-4xl font-extralight mb-2.5">{sectionTitle}</h2>
                    {children}
               </div>
          </section>
     )
}