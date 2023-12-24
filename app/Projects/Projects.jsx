"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import ProjectCard from "./Components/ProjectCard";
import Link from "next/link";
// import ProjectAlert from "./Components/ProjectAlert";
// import Image from "next/image";
// import Image from "next/image";
// import SlideShow from "./Components/SlideShow";
// import Atropos from "atropos/react";

export default function Projects() {
  return (
    <div className="md:h-screen flex flex-col w-screen md:mb-[10rem] mt-[10rem]">
      <div className="flex justify-center pb-10">
        <h1
          className="text-white text-4xl md:text-6xl"
          style={{ fontFamily: "Orbitron" }}
        >
          Projects
        </h1>
      </div>
      <div className="md:flex md:flex-1 items-center justify-center rounded-lg">
        <ProjectCard
          image={require("../../public/Squig.png")}
          title={"Squig"}
          body={"A Dynamic Programming Language developed Using python 3."}
          link={"https://github.com/Harish-M-2003/Squig"}
          style={"rounded-xl max-md:w-[19rem]"}
          action={"Squig Github Repo"}
        />
        <ProjectCard
          image={require("../../public/idle.png")}
          title={"Squig"}
          body={
            "An Integrated Development Learning Environment for Squig. Developed using Electron and React."
          }
          link={"https://github.com/Harish-M-2003/Squig-ide"}
          style={"rounded-xl max-md:w-[19rem]"}
          action={"Squig IDLE Github Repo"}

        />
      </div>
      <div className="md:flex md:flex-1 items-center justify-center rounded-lg my-5">
        <ProjectCard
          image={require("../../public/travel.jpg")}
          title={"travel"}
          body={
            "A Tourist Guide Mobile Application developed using react native."
          }
          link={"#"}
          style={
            "rounded-xl max-md:w-[5rem] max-md:h-[10rem] w-[7rem] max-md:object-fit"
          }
          action={"Travel Github Repo"}

        />
      </div>
    </div>
  );
}
