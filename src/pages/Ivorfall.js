import React from 'react'
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer"
import IvorfallIntro from '../components/Intro/ivorfallIntro';
import IvorfallExamples from '../components/IvorfallVideos/ivorfallExamples'

const Ivorfall = () => {
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