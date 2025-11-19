import PageLayout from "@/components/layout";
import { Metadata } from "next";
import GallerySection from "@/components/sections/gallery-section";
import { getPhotoPaths, getAlbums } from "@/actions/gallery"

export const metadata: Metadata = {
     title: "Ֆոտո Պատկերասրահ"
}

export default async function Gallery(){
     const photoPaths = await getPhotoPaths();
     const albums = await getAlbums()
     return (
          <PageLayout>
               <section id="home" className="text-white w-full min-h-screen md:min-h-[64vh] bg-[url('/bg.png')] bg-cover bg-center bg-fixed relative">
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col text-center bg-linear-to-t from-black/55 to-[#002a4f4d] space-y-0.5 xs:space-y-0.5 sm:space-y-1 md:space-y-2">
                         <h1 className="text-3xl sm:text-4xl md:text-5xl">Ֆոտո <span className="text-[#25ccff]">Պատկերասրահ</span></h1>
                         <p className="text-lg sm:text-2xl md:text-4xl">Լուսանկարներ Արսենից</p>
                    </div>
               </section>
               <GallerySection
                    photoPaths={photoPaths}
                    albums={albums}
               />
          </PageLayout>
     )
}