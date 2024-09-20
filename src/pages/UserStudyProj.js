import React from 'react'
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer"
import { useEffect } from 'react';

const UserStudyProj = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Navbar />
        <p>UserStudyProj</p>
        <Footer />
    </div>
  )
}

export default UserStudyProj