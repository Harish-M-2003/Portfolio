"use client";

import ProjectCard from "./Components/ProjectCard";


export default function Projects() {
  return (
    <div className="flex flex-col w-screen h-screen pt-5">
      <div className="flex justify-center pb-10">
        <h1
          className="text-white text-4xl"
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
      {/* <div className="md:flex md:flex-1 items-center justify-center rounded-lg my-5">
        <ProjectCard
          image={require("../../../public/travel.jpg")}
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
      </div> */}
    </div>
  );
}
