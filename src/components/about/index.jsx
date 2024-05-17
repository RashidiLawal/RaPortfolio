import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
      <ItemLayout className={"col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="text-xl text-left w-full capitalize">
            Provider of Luminance
          </h2>
          <p className="font-light">
            My voyage in front-end development has been made brighter by object {'{ambition}'} encompassing arrays of tools and lamguages, with Javascrpit beaming the most luminance from its indexes of React.js, Next.js and React Native.  and alaways there like the rays of sunshine. 
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 text-accent"}>
        <p className="font-semibold w-full text-left text-5xl">
          2 + <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
          2 + <sub className="font-semibold text-base">years of experience.</sub>
          </p>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
