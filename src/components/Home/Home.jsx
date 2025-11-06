import { useState } from "react"

const Home = (props) => {


  const person = {
    name: "Matt",
    job: "Software Engineer",
    company: "General Assembly",
    history: " I help students break into tech and discover the creativity behind code. Before teaching, I spent several years working as a full-stack developer, building everything from small business websites to scalable web apps for startups. My background in JavaScript, Node.js, and React gives me a solid foundation to guide students through real-world coding challenges with confidence.",
    passion: "I’m passionate about helping people understand why code works, not just how to write it. I believe the best developers are curious, collaborative, and unafraid to fail fast. In the classroom, I focus on writing clean, maintainable code and creating a supportive environment where every student feels encouraged to experiment.",
  }
  
  return (
    <>
      <h1>Hi, I'm {person.name}</h1>
      <h4>A {person.job} at {person.company}</h4>
      <p>{person.history}</p>
      <p>{person.passion}</p>
    </>
  )
}

export default Home;

