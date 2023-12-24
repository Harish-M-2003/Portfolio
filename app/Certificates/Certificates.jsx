// import { ScrollArea } from "@/components/ui/scroll-area"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import Image from "next/image";
import * as React from "react";
import ProjectCard from "../Projects/Components/ProjectCard";

const works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];
export default function Certificates() {
  return (
    <div className="h-screen pt-10 flex flex-col w-screen">
      <div className="flex justify-center mt-[4rem]">
        <h1
          className="text-white text-4xl md:text-6xl"
          style={{ fontFamily: "Orbitron" }}
        >
          Certificates
        </h1>
      </div>
      <div className="flex flex-1 justify-center p-5 px-10 pt-10">
        {/* <SlideShow/> */}
        <ScrollArea className="w-full whitespace-nowrap rounded-md ">
          <div className="flex w-max space-x-4 p-4">
            {works.map((artwork) => (
              <figure key={artwork.artist} className="shrink-0">
                <ProjectCard
                  image={require("../../public/Squig.png")}
                  title={"Squig"}
                  body={
                    "A Dynamic Programming Language developed Using python 3."
                  }
                  link={"https://github.com/Harish-M-2003/Squig"}
                  style={"rounded-xl max-md:w-[19rem]"}
                  action={"Squig Github Repo"}
                />
                {/* <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo by{" "}
                  <span className="font-semibold text-foreground">
                    {artwork.artist}
                  </span>
                </figcaption> */}
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
