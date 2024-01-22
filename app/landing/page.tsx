"use client";
import Alert from "./Components/Alert";
import { BsArrowDownCircleFill } from "react-icons/bs";
import Link from "next/link";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "@/public/Coding";
import { OrbitControls } from "@react-three/drei";
import Image from "next/image";
import { extend } from "react-three-fiber";

extend({ Model });

export default function HomeSection() {
  return (
    <div className="h-screen  w-screen flex  max-sm:relative">
      <div className="w-full flex flex-col relative">
        <Image
          draggable={false}
          alt="img"
          src={require("../india.jpg")}
          style={{ zIndex: 1 }}
          width={700}
          className="opacity-[0.1] absolute max-md:hidden blur-sm"
        />
        <div className="h-[70%] flex justify-center md:items-end flex-col">
          <div className="h-[10rem] flex justify-center items-center" />
          {/* <div className="w-full sm:hidden h-screen z-10 ">
            <Suspense fallback={<p>Loading</p>}>
              <Canvas className="h-screen">
                <OrbitControls maxDistance={7} />
                <Model />
              </Canvas>
            </Suspense>
          </div> */}
          <h1
            className="md:text-4xl text-3xl text-white text-center "
            style={{ fontFamily: "Orbitron" }}
          >
            Hi! I am
            <span className="text-blue-300 md:text-6xl"> #Harish M </span>
            <br />
            Student At{" "}
            <span className="text-blue-300 md:text-6xl md:hidden">#CIT</span>
            <span className="text-blue-300 md:text-6xl max-md:hidden">
              #Chennai{" "}
            </span>
            <span className="max-md:hidden">institute of technology</span>
          </h1>

          {/* <div className="flex justify-end text-white pt-10 ">
            <span className="max-sm:text-lg" style={{ fontFamily: "Orbitron" }}>
              - Edward Teller
            </span>
          </div> */}
        </div>
        <div className="h-[30%] flex items-center sm:items-start z-10 max-md:pb-20 md:pt-20">
          <div className="flex justify-between sm:px-10 px-2  w-full gap-2">
            <Alert action={"LinkedIn"} />
            <div className="max-sm:hidden">
              <Alert action={"Github"} />
            </div>
            <Link
              target="_blank"
              //  download
              href={"#"}
              //  href={"/Harish-M.pdf"}
              // passHref
              className="border text-white flex items-center gap-5 text-black font-bold border-1 py-4 px-[2rem] hover:bg-transparent md:px-20 rounded-lg"
            >
              <BsArrowDownCircleFill className="max-sm:text-3xl" />
              <button 
          style={{fontFamily : "Orbitron"}}>Resume</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full max-sm:hidden">
        <Suspense fallback={<p>Loading</p>}>
          <Canvas className="sm:h-[100vh]">
            <OrbitControls maxDistance={7} />
            <Model />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}
