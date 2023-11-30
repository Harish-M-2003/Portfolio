

  // import Image from "next/image";
import Image from "next/image"; 
import ProjectAlert from "./ProjectAlert";


function Card({image , body , title , style}){
  return (
    <div className="text-white rounded-lg justify-center my-5 tracking-widest items-center flex flex-col hover:opacity-[0.5]">
      <Image src={image} width={500} className={style}/>
      <div className="p-5 rounded-b-xl w-[25rem]">
        {/* <p className="text-2xl" style={{fontFamily : "Orbitron"}}>{title}</p> */}
        <p className="text-gray-200 text-sm" style={{fontFamily : "Orbitron"}}>{body}</p>
      </div>
    </div>
  )
}

export default function ProjectCard({title , body , image , style , link}){
    return (
      <ProjectAlert 
          component ={<Card title = {title} body = {body} image={image} style={style}/>
        }
        link={link}
        action= {"Github"}
      />
    );
}