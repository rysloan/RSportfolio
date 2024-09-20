import React from 'react'
import Navbar from "../components/Navbar/navbar";
import Intro from "../components/Intro/MainIntro/intro"
import Skills from "../components/Skills/skills"
import Works from "../components/Works/works"
import Contact from "../components/Contact/contact"
import Footer from "../components/Footer/footer"
import { useEffect } from 'react'

const Main = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='MainMenu'>
        <Navbar />
        <Intro />
        <Skills />
        <Works />
        <Contact />
        <Footer />
    </div>
  )
}

export default Main