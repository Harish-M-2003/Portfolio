"use client";
// import Image from "next/image";
// import { Line } from "rc-progress";
import { FaPython } from "react-icons/fa";
import { BiLogoJava } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { SiElectron } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
// import Atropos from "atropos/react";

function SmallScreenComponents() {
  return (
    <>
      <div className="flex gap-20 md:hidden justify-center">
        
          <div className="flex flex-col items-center gap-5">
            <FaPython className="text-white text-5xl" />
            <p className="text-white text-lg">Python</p>
          </div>
        <div className="flex flex-col items-center gap-5">
          <BiLogoJava className="text-white text-5xl" />
          <p className="text-white text-lg">Java</p>
        </div>

        <div className="flex flex-col items-center gap-5">
          <SiJavascript className="text-white text-5xl" />
          <p className="text-white text-lg">JS</p>
        </div>
      </div>

      <div className="flex gap-20 md:hidden">
        <div className="flex flex-col items-center gap-5">
          <TbBrandNodejs className="text-white text-5xl" />
          <p className="text-white text-lg">Node.js</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <TbBrandReactNative className="text-white text-5xl" />
          <p className="text-white text-lg">RN</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <SiElectron className="text-white text-5xl" />
          <p className="text-white text-lg">Electron</p>
        </div>
      </div>

      <div className="flex gap-20 md:hidden">
        <div className="flex flex-col items-center gap-5">
          <SiTailwindcss className="text-white text-5xl" />
          <p className="text-white text-lg">Tailwind</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <SiExpress className="text-white text-5xl" />
          <p className="text-white text-lg">Express</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <BiLogoFlask className="text-white text-5xl" />
          <p className="text-white text-lg">Flask</p>
        </div>
      </div>
      <div className="flex gap-20 md:hidden">
        <div className="flex flex-col items-center gap-5">
          <DiDjango className="text-white text-5xl" />
          <p className="text-white text-lg">Django</p>
        </div>
      </div>
    </>
  );
}

function BigScreenComponenets() {
  return (
    <>
      <div className="flex gap-20 max-md:hidden">
      
        <div className="flex flex-col items-center gap-5">
          <FaPython className="text-white text-8xl" />
          <p className="text-white text-xl">Python</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <BiLogoJava className="text-white text-8xl" />
          <p className="text-white text-xl">Java</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <SiJavascript className="text-white text-8xl" />
          <p className="text-white text-xl">JavaScript</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <TbBrandNodejs className="text-white text-8xl" />
          <p className="text-white text-xl">Node.js</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <TbBrandReactNative className="text-white text-8xl" />
          <p className="text-white text-xl">React Native</p>
        </div>
      </div>

      <div className="flex gap-20 max-md:hidden">
        <div className="flex flex-col items-center gap-5">
          <SiElectron className="text-white text-8xl" />
          <p className="text-white text-xl">Electron</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <SiTailwindcss className="text-white text-8xl" />
          <p className="text-white text-xl">Tailwind Css</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <SiExpress className="text-white text-8xl" />
          <p className="text-white text-xl">Express</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <BiLogoFlask className="text-white text-8xl" />
          <p className="text-white text-xl">Flask</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <DiDjango className="text-white text-8xl" />
          <p className="text-white text-xl">Django</p>
        </div>
      </div>
    </>
  );
}

export default function SlideShow() {
  return (
    <div className="flex flex-col gap-10 justify-evenly items-center">
      <SmallScreenComponents />
      <BigScreenComponenets />
    </div>
  );
}
