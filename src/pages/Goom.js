import React from 'react'
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer"
import { useEffect } from 'react'

const Goom = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
        <Navbar />
        <p>Goom</p>
        <Footer />
    </div>
  )
}

export default Goom