
"use client";

import Image from "next/image";
// import Link from "next/link";
// import { TypeAnimation } from "react-type-animation";
import Alert from "./Components/Alert";
// import Resume from "../Harish-M.pdf";    
import { BsArrowDownCircleFill } from "react-icons/bs";
// import {HoverImageFIlter} from "react-hover-image-filter";
// import {BsGithub} from "react-icons/bs";
// import {BsLinkedin} from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
// import Earth from "../Components/Earth";
// import Globe from "react-globe.gl";

// import { Button } from "@/components/ui/button";
// import Pic from "../../pin.png";

import useDownloader from 'react-use-downloader';
import { LogoBigScreen , LogoSmallScreen} from "./Components/Logo";

export default function HomeSection(){
    const [changeImage , setChangeImage] = useState(false);
    const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();
    // const fileUrl =require("../Harish-M.pdf");
    // const fileUrl = ""
    // const filename = 'Harish-M.pdf';
    return (
        <div className="h-screen overflow-hidden max-md:flex p-20 md:p-0">
            <div className="flex">
                <div className="max-md:hidden w-20"><p>aaskdjaskjd</p></div>
                <div className="flex  text-white text-center flex-col gap-5 max-md:justify-center">
                    {/* <Image src={require("../india.jpg")} height={100} width={100}/> */}
                     {/* <Earth/> */}
                     {/* <Globe/> */}

                    <div className=" md:hidden z-1 h-[50rem] w-[60rem] flex justify-end items-end relative">
                        <LogoSmallScreen/>
                        {/* <ReactHoverImageFIlter image/> */}
                        
                        
                        {/* <div className="flex-1 flex flex-col gap-3 absolute top-[20%] left-[30%]">
                            <h1 className="text-xl" style={{fontFamily : "Orbitron"}}>
                                "The <span className="text-6xl">Science</span>  
                            </h1>
                            <h1 className="text-xl" style={{fontFamily : "Orbitron"}}>
                                of today
                            </h1>
                            <h1 className="text-xl" style={{fontFamily : "Orbitron"}}>
                                is the <span className="text-4xl">technology</span>
                            </h1>
                            <h1 className="text-xl" style={{fontFamily : "Orbitron"}}>
                                of <br/>
                            </h1>
                            <h1 className="text-xl" style={{fontFamily : "Orbitron"}}>
                                <span className="text-4xl">tomorrow</span>
                            </h1>
                            <div className="flex justify-end" style={{fontFamily : "Orbitron"}}>
                                <span className="text-2xl">- Edward Teller</span>
                            </div>
                            <div className="flex gap-20 hustify-center">
                                <BsGithub className="text-white text-6xl"/>
                                <BsLinkedin className="text-white text-6xl"/>
                            </div>
                        </div> */}
                    </div>
                    <div style={{zIndex : 1}} className="flex-1 flex flex-col justify-center max-md:hidden md:justify-end md:pl-10 gap-3">
                        <h1 className="max-md:text-2xl md:text-5xl" style={{fontFamily : "Orbitron"}}>"The science of today is the technology of tomorrow."</h1>
                        <div className="flex justify-end">
                            <span className="md:text-2xl" style={{fontFamily : "Orbitron"}}>- Edward Teller</span>
                        </div>
                    </div>
                    <div style={{zIndex : 1}} className="max-md:hidden md:flex-[0.9] flex items-center justify-center gap-5 z-3">
                        <Alert action={"Github"}/>
                        <Alert action={"LinkedIn"}/>  
                        <Link target="_blank" download href={"/Harish-M.pdf"} passHref className="border flex items-center gap-5 bg-white text-black font-bold border-1 p-4 px-[2.5rem] hover:bg-transparent hover:text-white rounded-lg">
                            
                            <BsArrowDownCircleFill className="text-2xl"/>
                            <button >Resume</button>
                        </Link>                      
                    </div>
                </div>
                <div className=" z-1 md:block hidden h-[50rem] w-[70rem] flex justify-end items-end">
                    <LogoBigScreen changeImage={changeImage}  setChangeImage={setChangeImage}/>
                </div>
            </div>
        </div>
    );    
}