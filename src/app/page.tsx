import SiteHeader from "@/components/layout/header";
import SiteSection from "@/components/site-section";
import { Button } from "@/components/ui/button";
import { Beaker, Camera, Code, FlaskConical } from "lucide-react";
import Link from "next/link";

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
      <SiteSection sectionTitle="Իմ Մասին" id="about">
        <p>Ինձ հետաքրքրում են ծրագրավորումը, լուսանկարչությունը, մեկ-մեկ գիտական փորձեր անելը, և ուրիշ հոբբիներով զբաղվելը (օր․՝ ճանապարհորդություն): Սա իմ անձնական վեբ կայքն է :-) <br/> Լեզուներ՝ Հայերեն, Անգլերեն, Ռուսերեն</p>
        <Button asChild variant="dark">
          <Link href="https://github.com/ArsenGabrielyan">Իմանալ ավելին</Link>
        </Button>
      </SiteSection>
      <SiteSection sectionTitle="Ի՞նչ եմ անում" id="services" maxWidth="full">
        <p>Հիմնականում զբաղվում եմ հետևյալ անելիքներով</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] xs:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 max-w-full mt-10">
          <div className="w-full md:w-80 mx-auto p-2.5 xs:p-5 bg-card text-card-foreground border shadow-sm rounded-md flex justify-center items-center gap-2 flex-col">
            <Code className="size-[70px]"/>
            <h2 className="text-lg uppercase font-bold">Ծրագրավորում</h2>
            <p>Հիմնականում զբաղվում եմ FrontEnd և Full Stack ծրագրավորմանը (React.JS, Next JS, Typescript, HTML, CSS, Javascript):</p>
            <Button asChild>
              <Link href="#">Պրոյեկտներ</Link>
            </Button>
          </div>
          <div className="w-full md:w-80 mx-auto p-2.5 xs:p-5 bg-card text-card-foreground border shadow-sm rounded-md flex justify-center items-center gap-2 flex-col">
            <Camera className="size-[70px]"/>
            <h2 className="text-lg uppercase font-bold">Լուսանկարչություն</h2>
            <p>Ճանապարհորդելու ընթացքում մեկ-մեկ լուսանկարչությամբ եմ զբաղվում:</p>
            <Button asChild>
              <Link href="#">Դիտել լուսանկարները</Link>
            </Button>
          </div>
          <div className="w-full md:w-80 mx-auto p-2.5 xs:p-5 bg-card text-card-foreground border shadow-sm rounded-md flex justify-center items-center gap-2 flex-col">
            <FlaskConical className="size-[70px]"/>
            <h2 className="text-lg uppercase font-bold">Գիտական փորձեր</h2>
            <p>Ազատ ժամանակին նաև գիտական փորձեր եմ անում։</p>
            <Button asChild>
              <Link href="https://www.youtube.com/playlist?list=PLSI6KSDJfq-J6OxBprsyMjWmmLym2o7T3">Իմանալ ավելին</Link>
            </Button>
          </div>
        </div>
      </SiteSection>
    </>
  );
}
