// import ProjectCard from "./Components/Card";
// "use client";
// import { TypeAnimation } from "react-type-animation";

export default function AboutSection(){

    return (
        <div className="h-screen pt-10 flex flex-col">
            <div className="flex justify-center">

                <h1 className="text-white text-4xl md:text-6xl" style={{fontFamily : "Orbitron"}}>About</h1>
            </div>
            <div className="h-screen flex flex-1 items-center p-5 md:text-center">
                <p
                className="text-white  max-md:text-xl md:text-2xl tracking-widest"
                style={{fontFamily : "Exo" , lineHeight : 1.5 }}
                >
                    As a <span className="font-bold md:text-4xl">#Computer Science Student</span> at Chennai Institute of Technology,
                    my passion lies in technology and software development. I specialize in <span className="font-bold md:text-4xl">#Mobile, 
                    desktop, and web application development</span>, focusing on user-friendly solutions. 
                    Full-stack web development has provided me with a comprehensive understanding of 
                    front-end and back-end technologies. Sharing knowledge is 
                    integral to my journey. My work reflects a commitment to user-centric design and 
                    innovation. Explore my portfolio to see my dedication in action.
      
                </p>
                {/* <PortfolioParticles/> */}
  
    </div>
            {/* <p className="text-4xl text-white">
            Certainly, here's a revised 100-word summary that includes your name:

I'm Harish, a third-year computer science student at Chennai Institute of Technology. My unwavering passion for technology and software development has driven me to explore the intricacies of mobile, desktop, and web application development. With a focus on creating user-centric solutions, my projects are a testament to blending functionality and design seamlessly. Full-stack web development is an area where I've delved into front-end and back-end technologies. Guiding and mentoring peers is a rewarding aspect of my journey. My work reflects a commitment to excellence and the pursuit of innovative, user-friendly solutions. Explore my portfolio to witness the results of my dedicated efforts.
            </p> */}
        </div>
    );

}