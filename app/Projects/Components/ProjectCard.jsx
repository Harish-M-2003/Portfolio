

  // import Image from "next/image";
import Image from "next/image"; 
import ProjectAlert from "./ProjectAlert";

export default function ProjectCard({title , body , image}){
    return (
      <ProjectAlert 
          component ={
          <div className="flex flex-col w-full rounded-t-xl">
            <div className="flex w-full">
                <Image property={true}  alt="project image" src={image} className="h-[15rem] w-[5rem] md:h-[20rem] md:w-full rounded-t-xl"  width={200}/>
            </div>
            <div className="text-gray-600 py-5 px-5 text-sm rounded-b-xl bg-white">
                <p>A  python Like toy programming language developed using python.</p>
            </div>
          </div>
        }
        action= {"Github"}
      />
    );
}