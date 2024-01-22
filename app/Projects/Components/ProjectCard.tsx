// import Image from "next/image";
import Image from "next/image";
import ProjectAlert from "./ProjectAlert";
import Atropos from "atropos/react";
import 'atropos/css'

function Card({ image, body, title, style } : any) {
  return (
    <div className="text-white rounded-lg justify-center my-5 tracking-widest items-center flex flex-col">
      <Atropos
        className="rounded-xl"
        activeOffset={40}
        shadowScale={1.05}
      >
        <Image 
         draggable={false} src={image} width={500} className={style} alt="img"/>
      </Atropos>
        <div data-atropos-offset="5" className="p-5 rounded-b-xl w-[25rem]">
          <p
            className="text-gray-200 text-sm"
            style={{ fontFamily: "Orbitron" }}
          >
            {body}
          </p>
        </div>
    </div>
  );
}

export default function ProjectCard({ title, body, image, style, link  , action} : any) {
  return (
    <ProjectAlert
      component={<Card title={title} body={body} image={image} style={style} />}
      link={link}
      action={action}
    />
  );
}
