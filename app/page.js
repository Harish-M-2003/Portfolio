"use client";
import HomeSection from "./Home/page";
import AboutSection from "./About/AboutSection";
import SkillSet from "./Skills/page";
import Projects from "./Projects/Projects";
import Certificates from "./Certificates/Certificates";
// import ProjectSection from "./Projects/AbouttSection"

// import PortfolioParticles from "./Components/PortfolioParticles";
import PortfolioParticles from "./Components/PortfolioParticles";
// import Earth from "./Components/Earth";
import "atropos/css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "@/public/Earth";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="h-screen">

      <HomeSection />
      
      </div>
      <div className="h-screen">

      <AboutSection />
      </div>
      <div className="h-screen">

      <SkillSet />
      </div>
      <div className="h-screen my-20">

      <Projects />
      </div>

      {/* <div className="flex p-10 h-[50vh] justify-center ">
        <Link
          href={"https://github.com/Harish-M-2003"}
          className="border border-white p-3 rounded-2xl hover:bg-white hover:text-black text-white px-8"
        >
          <p>More</p>
        </Link>
      </div> */}
      <div className="h-screen pt-20">
        <Certificates />
      </div>
      <PortfolioParticles />
    </main>
  );
}
