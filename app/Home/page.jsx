
// import { TypeAnimation } from "react-type-animation";
import Alert from "./Components/Alert";
import { BsArrowDownCircleFill } from "react-icons/bs";
import Link from "next/link";

import { LogoBigScreen , LogoSmallScreen} from "./Components/Logo";
// import { TypeAnimation } from "react-type-animation";

export default function HomeSection(){

    return (
        <div className="h-screen overflow-hidden max-md:flex p-20 md:p-0">
            <div className="flex">
                <div className="max-md:hidden w-20"><p>aaskdjaskjd</p></div>
                <div className="flex  text-white text-center flex-col gap-5 max-md:justify-center">
                    
                    <div className=" md:hidden z-1 h-[50rem] w-[60rem] flex justify-end items-end relative">
                        <LogoSmallScreen/>
                        {/* <div className="flex absolute left-[30%] gap-4">
                            <Alert action={"Github"}/>
                            <Alert action={"Linkedin"}/>
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
                    <LogoBigScreen/>
                </div>
            </div>
        </div>
    );    
}