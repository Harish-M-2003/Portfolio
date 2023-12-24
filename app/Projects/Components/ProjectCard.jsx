// import Image from "next/image";
import Image from "next/image";
import ProjectAlert from "./ProjectAlert";
import Atropos from "atropos/react";

function Card({ image, body, title, style }) {
  return (
    <div className="text-white rounded-lg justify-center my-5 tracking-widest items-center flex flex-col">
      <Atropos
        className="rounded-xl"
        activeOffset={40}
        shadowScale={1.05}
      >
        <Image src={image} width={500} className={style} />
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

export default function ProjectCard({ title, body, image, style, link  , action}) {
  return (
    <ProjectAlert
      component={<Card title={title} body={body} image={image} style={style} />}
      link={link}
      action={action}
    />
  );
}
