import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center",
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
        <ItemLayout>
          <div className="col-span-8 row-span-2 custom-bg p-8 rounded-xl flex items-center justify-center">
            Info
          </div>
        </ItemLayout>
        <div className="col-span-4 custom-bg p-8 rounded-xl flex items-center justify-center">
          2 + clients
        </div>
        <div className="col-span-4 custom-bg p-8 rounded-xl flex items-center justify-center">
          2 + years of experience.
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
