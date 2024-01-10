// import Image from 'next/image'
import HomeSection from './landing/page'
import Projects from './Projects//Projects'
import SkillSet from "./Skills/page";
import AboutSection from './About/AboutSection';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <div className="h-screen"> */}

      <HomeSection />
      <AboutSection />
      <SkillSet/>
      <Projects />
      
      
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
