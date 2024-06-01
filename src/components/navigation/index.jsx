"use client";
import React from "react";
import { BtnList } from "@/app/data";
import NavButton from "./NavButton";
import UseScreenSize from "../hooks/UseScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion"

const container = {
  hidden: {opacity:0},
  show: {
    opacity:1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size = UseScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <div className="fixed h-screen flex items-center justify-center w-full">
      <ResponsiveComponent>
       {({size}) => {

        return size && size >= 480 ? 

        <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-max flex items-center hover:pause justify-center relative animate-spin-slow group">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const radius = isLarge
            ? "calc(20vw - 1rem)"
            : isMedium
            ? "calc(30vw - 1rem)"
            : "calc(40vw - 1rem)";
          const x = `calc(${radius}*${Math.cos(angleRad)})`;
          const y = `calc(${radius}*${Math.sin(angleRad)})`;

          return <NavButton key={btn.icon} x={x} y={y} {...btn} />;
        })}
      </motion.div>
      :
      <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show" 
      className="w-full px-2.5 space-y-4 xs:p-0 xs:w-max flex flex-col items-start xs:items-center justify-center relative group">
      {BtnList.slice(0, BtnList.length/2).map((btn, index) => {

        return <NavButton key={btn.icon} x={0} y={0} {...btn} />;
      })}
    </motion.div>

    <motion.div
        variants={container}
        initial="hidden"
        animate="show" 
    className="w-full px-2.5 space-y-4 xs:p-0 xs:w-max flex flex-col items-end xs:items-center justify-center relative group">
      {BtnList.slice(BtnList.length/2, BtnList.length).map((btn, index) => { 

        return <NavButton key={btn.icon} x={0} y={0} {...btn} labelDirection="left"/>;
      })}
    </motion.div>
      </>
       }

       }
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
