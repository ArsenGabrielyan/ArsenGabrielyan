import SiteHeader from "@/components/layout/header";

export default function Home() {
  return (
    <>
      <SiteHeader/>
      <section id="home" className="text-white w-full min-h-screen bg-[url('/bg.png')] bg-cover bg-center bg-fixed relative">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col text-center bg-linear-to-t from-black/55 to-[#002a4f4d] space-y-0.5 xs:space-y-0.5 sm:space-y-1 md:space-y-2">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl">Արսեն <span className="text-[#25ccff]">Գաբրիելյան</span></h1>
          <p className="text-base xs:text-xl sm:text-2xl md:text-4xl">Ծրագրավորող</p>
        </div>
      </section>
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">Շուտով</h1>
      </div>
    </>
  );
}
