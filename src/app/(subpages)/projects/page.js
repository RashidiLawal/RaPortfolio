import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {ssr : false})
export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 top-0 left-0 fixed w-full h-full object-cover object-center opacity-25"
      />

      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-end fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 left-1/2 lg:-left-24 h-screen -z-10">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
