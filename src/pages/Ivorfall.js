import React from 'react'
import { useEffect } from 'react';
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer"
import IvorfallIntro from '../components/Intro/IvorfallIntro/ivorfallIntro';
import IvorfallExamples from '../components/Ivorfall/ivorfallExamples'

const Ivorfall = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Navbar />
      <IvorfallIntro />
      <IvorfallExamples />
      <Footer />
    </div>
  )
}

export default Ivorfall