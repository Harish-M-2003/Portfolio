"use client";
import Alert from "./Components/Alert";
import { BsArrowDownCircleFill, BsGithub, BsLinkedin } from "react-icons/bs";
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
    <div className="h-screen  w-screen grid grid-cols-2  max-sm:relative">
      <Image
        draggable={false}
        alt="img"
        src={require("../india.jpg")}
        style={{ zIndex: 1 }}
        width={700}
        className="opacity-[0.1] absolute max-md:hidden blur-sm"
      />
      <div className="">
        <div className="h-screen grid grid-rows-1 pl-5">
          <div className="flex justify-center flex-col gap-5 items-center">
            <h1
              className="md:text-5xl text-3xl text-white px-10 text-center"
              style={{ fontFamily: "Orbitron" }}
            >
              Hi! I am
              <span className="text-blue-300 md:text-5xl font-bold"> # Harish M </span>
              <br />
            </h1>
            <div className="text-center">
              <span className="text-xl text-white font-[100]">LEARN SOMETHING ABOUT EVERYTHING AND EVERYTHING ABOUT SOMETHING</span>
            </div>
            <div className="flex justify-between pt-19 p-2 z-10 w-full gap-2">
              <Link
                target="_blank"
                href={"#"}
                className="border border-gray-600 hover:border-gray-300 text-white flex items-center gap-5 text-black font-bold border-1 p-4 px-8 pr-14 bg-transparent  rounded-lg"
              >
                <BsLinkedin className="max-sm:text-3xl" />
                <button
                  style={{ fontFamily: "Orbitron" }}>LINKEDIN</button>
              </Link>
              <Link
                target="_blank"
                href={"#"}
                className="border border-gray-600 hover:border-gray-300 text-white flex items-center gap-5 text-black font-bold border-1 p-4 px-8 pr-14 bg-transparent rounded-lg"
              >
                <BsGithub className="max-sm:text-3xl" />
                <button
                  style={{ fontFamily: "Orbitron" }}>Github</button>
              </Link>
              <Link
                target="_blank"
                //  download
                href={"#"}
                //  href={"/Harish-M.pdf"}
                // passHref
                className="border border-gray-600 hover:border-gray-300   text-white flex items-center gap-5 text-black font-bold border-1 p-4 px-8 pr-14 bg-transparent  rounded-lg"
              >
                <BsArrowDownCircleFill className="max-sm:text-3xl" />
                <button
                  style={{ fontFamily: "Orbitron" }}>Resume</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-sm:hidden">
        <Suspense fallback={<p>Loading</p>}>
          <Canvas className="sm:h-[100vh]">
            <OrbitControls maxDistance={7} enableZoom = {false}/>
            <Model />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}
