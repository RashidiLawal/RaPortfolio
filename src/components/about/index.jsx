import React from "react";
import ItemLayout from "./itemLayout";




const AboutDetails = () => {
  
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
      <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Provider of Luminance
          </h2>
          <p className="font-light text-xs sm:text-sm md:text.base-">
            My voyage in front-end development has been made brighter by object {'{ambition}'} encompassing arrays of tools and lamguages, with Javascrpit beaming the most luminance from its indexes of React.js, Next.js and React Native.  and alaways there like the rays of sunshine. 
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
        <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
          2 + <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
          2 + <sub className="font-semibold text-base">years of experience.</sub>
          </p>
        </ItemLayout>
        <ItemLayout className='col-span-full sm:col-span-6 md:col-span-4 !p-0'>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs?username=rashidilawal&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="languages" loading="lazy"/>
        </ItemLayout>
        <ItemLayout className='col-span-full md:col-span-8 !p-0'>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=rashidilawal&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="Github stats" loading="lazy"/>
        </ItemLayout>
        <ItemLayout className='col-span-full'>
          <img className="w-full h-auto" src="https://skillicons.dev/icons?i=js,react,redux,ts,sass,tailwind,html,css,bootstrap,materialui,mongodb,nodejs,nextjs,express,ember,postman,php,laravel,py,pug,svg,threejs,git,github,bitbucket,gitlab,githubactions,notion,ai,vscode,npm,codepen,powershell,vite,vitest,webpack,stackoverflow,linkedin,gmail,twitter,discord" alt="stack icons" loading="lazy"/>
        </ItemLayout>

        <ItemLayout className='col-span-full md:col-span-6 !p-0'>
       <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=rashidilawal&theme=dark&hide_border=true&date_format=M%20j%5B%2C%20Y%5D&ring=FEFE5B&background=EB545400&currStreakLabel=FEFE5B" alt="GitHub Streak" loading="lazy"/>
        </ItemLayout>

        <ItemLayout className='col-span-full md:col-span-6 !p-0'>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=rashidilawal&repo=RaPortfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2" alt="Github stats" loading="lazy"/>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
