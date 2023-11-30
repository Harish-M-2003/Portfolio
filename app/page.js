"use client";
import HomeSection from "./Home/page"
import AboutSection from "./About/AboutSection"
import SkillSet from "./Skills/page"
import Projects from "./Projects/Projects"
import Certificates from "./Certificates/Certificates"
// import ProjectSection from "./Projects/AbouttSection"

// import PortfolioParticles from "./Components/PortfolioParticles";
import PortfolioParticles from "./Components/PortfolioParticles";
// import Earth from "./Components/Earth";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HomeSection/>
      <AboutSection/>
      <SkillSet/>
      <Projects/> 
      <Certificates/> 
      <PortfolioParticles/> 
    </main>
  )
}
