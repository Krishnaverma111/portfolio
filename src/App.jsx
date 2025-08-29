import React from 'react'
import NavBar from './Components/NavBar'  
import Hero from './Components/Hero/Hero'
import Mytechstack from './Components/Mytechstack'
import Skills from './Components/Skills'
import Project from './Components/Project/Project'
import Experience from "./Components/Experience/Experience"
import AboutMe from './Components/AboutMe'

export default function App() {
  return (
    <div
      className=""
      style={{
        background: 'linear-gradient(135deg, #1f1c2c, #928DAB)',
        color: 'white'
      }}
    >
      <NavBar />
      <Hero />
      <Mytechstack />
     <Skills />
      <Project />
      <Experience />
      <AboutMe /> 
    </div>
  )
}
