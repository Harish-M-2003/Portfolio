import SlideShow from "./Components/SlideShow";

export default function SkillSet(){
    return (
        <div className="h-screen pt-10 flex flex-col w-screen">
            <div className="flex justify-center">
                <h1 className="text-white text-4xl md:text-6xl" style={{fontFamily : "Orbitron"}}>Skills</h1>
            </div>
            <div className="flex flex-1 justify-center">
                <SlideShow/>
            </div>
        </div>
    )
}