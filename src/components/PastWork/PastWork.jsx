import { useState } from "react";
import Carousel from "./Carousel/Carousel";

const PastWork = () => {
  
  const blurb = "Before joining General Assembly, Matt spent six years as a full-stack developer at various tech startups in Austin and Denver. He built responsive web applications, optimized backend APIs, and led small engineering teams. His past work focused on improving user experience and building scalable, maintainable codebases across multiple industries."

  const projects = [
    { title: "Quantum Toaster", description: "A toaster that uses quantum superposition to simultaneously burn and undertoast your bread until you observe it, at which point it collapses into whatever breakfast disappointment the universe has chosen for you."},
    { title: "Blockchain Umbrella", description: "An umbrella that records every raindrop it blocks on an immutable distributed ledger. Features NFT minting for particularly noteworthy downpours and costs $47 in gas fees each time you open it."},
    { title: "AI-Powered Pet Rock", description: "A rock with a ChatGPT chip inside that constantly generates philosophical reflections about being a rock. Requires daily charging and a premium subscription for the rock to acknowledge your existence."},
    { title: "Social Media Fridge",  description: "A refrigerator that posts Instagram stories every time you open it at 2 AM, automatically tags your snacks, and judges your food choices with passive-aggressive push notifications like 'Really? More cheese?'"},
    { title: "VPN Socks", description: "Smart socks that encrypt your steps and route your walking data through servers in 47 countries so Big Fitness can't track your daily step count. Makes your feet completely anonymous but also slightly slower."}
  ]

  const [currentProject, setCurrentProject] = useState(0)
  const [project, setProject] = useState(projects[currentProject])
  

  const handleCarousel = (direction) => {
    setCurrentProject(n => ((n + direction) % (projects.length) + projects.length) % (projects.length))
    setProject(projects[currentProject])
  }

  return (
    <>
    <h1>Past Work</h1>
    <p>{blurb}</p>
    
      <Carousel project={project} handleCarousel={handleCarousel} />
    </>
  )
}

export default PastWork;