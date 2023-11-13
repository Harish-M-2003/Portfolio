"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProjectCard from "./Components/ProjectCard";
import Image from "next/image";
// import SlideShow from "./Components/SlideShow";

export default function Projects(){
    return (
        <div className="h-screen pt-10 flex flex-col w-screen">
            <div className="flex justify-center">
                <h1 className="text-white text-4xl md:text-6xl" style={{fontFamily : "Orbitron"}}>Projects</h1>
            </div>
            <div className="flex flex-1 max-md:flex-col items-center justify-center gap-10 rounded-lg md:m-10">
                
            <Carousel 
                className="rounded-lg max-md:p-10" 
                autoPlay 
                infiniteLoop 
                interval={1500}
                showArrows={false}
                showIndicators = {false}
                // showStatus = {false}
                swipeable={true}
                
            >
                
                <ProjectCard image={require("../satellite.jpg")}/>
                <ProjectCard image={require("../india.jpg")}/>
                <ProjectCard image={require("../satellite.jpg")}/>

    
            </Carousel>
            <Carousel 
                className="rounded-lg " 
                autoPlay 
                infiniteLoop 
                interval={1500}
                showArrows={false}
                showIndicators = {false}
                // showStatus = {false}
                swipeable={true}
                
            >
                
                <ProjectCard image={require("../satellite.jpg")}/>
                <ProjectCard image={require("../india.jpg")}/>
                <ProjectCard image={require("../satellite.jpg")}/>

    
            </Carousel>
            </div>
        </div>
    );
}