// import Image from 'next/image'
"use client";
import HomeSection from './landing/page'
import Projects from './Projects//Projects'
import SkillSet from "./Skills/page";
import AboutSection from './About/AboutSection';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; 
import { useEffect, useState } from 'react';

export default function Home() {
  
  const [ init, setInit ] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
    }).then(() => {
        setInit(true);
    });
}, []);

function particlesLoaded(container : Container | undefined) : any {
  console.log(container);
}

  return (
    <main className="flex flex-col items-center">
      {/* <div className="h-screen"> */}

      <HomeSection />
      <AboutSection />
      <SkillSet/>
      <Projects />
      { init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        // resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            // area: 400,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
      }
      {/* <Particles options={options} init={this.customInit} /> */}
      
      
      {/* </div> */}
      {/* <div className="h-screen">
      </div> */}
      {/* <div className="h-screen">

      <SkillSet />
      </div> */}
      {/* <div className="h-screen my-20"> */}

      {/* </div> */}

      {/* <div className="flex p-10 h-[50vh] justify-center ">
        <Link
          href={"https://github.com/Harish-M-2003"}
          className="border border-white p-3 rounded-2xl hover:bg-white hover:text-black text-white px-8"
        >
          <p>More</p>
        </Link>
      </div> */}
      {/* <MailSection/> */}
      {/* <PortfolioParticles /> */}

    </main>
  )
}
