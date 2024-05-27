import Image from "next/image";
import bg from '../../../../public/background/about-background.png'
import RenderModel from "@/components/RenderModel";
import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
// import { Flashlight } from "lucide-react";


export default function Home() {
  return (
    <>
     <Image src={bg} alt="background-image" className="-z-50 top-0 left-0 fixed w-full h-full object-cover object-center opacity-25"/>

     <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
     <RenderModel>
        <HatModel />
      </RenderModel>
     </div>
     <div className="relative w-full h-screen flex flex-col items-center justify-center">
     <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
      <h1 className="font-bold text-5xl xs:text-5xl sm:text-6xl lg:text-7xl text-accent">
      Rashidi Lawal
      </h1>
      {/* <Flashlight className="w-full h-auto bg-green-400" strokeWidth={1.5}/> */}
      <p className="font-light text-foreground text-lg">
        Light-up the world!
      </p>
     </div>
     </div>
     <AboutDetails />
    </>
  );
}
