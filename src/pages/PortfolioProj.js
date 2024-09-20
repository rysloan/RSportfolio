import React from 'react'
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer"
import PortfolioIntro from '../components/Intro/PortfolioIntro/portfolioIntro';
import PortfolioExamples from '../components/Portfolio/portfolioExamples'
import { useEffect } from 'react';

const PortfolioProj = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
        <Navbar />
        <PortfolioIntro />
        <PortfolioExamples />
        <Footer />
    </div>
  )
}

export default PortfolioProj