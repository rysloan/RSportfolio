import React from "react";
import './intro.css'
import bg from "../../../assets/IMG_2301.png"
import btnImg from "../../../assets/hireme.png"
import { Link } from 'react-scroll'

const Intro = () => {
    return(
        <section id="intro" >
            <div className="introContent" >
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Ryan Sloan</span> <br />Software Engineer</span>
                <p className="introParagraph">I am a skilled and passionate Software Engineer with experience<br />in FullStack, Mobile, AI, and Games Engineering</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me</button></Link>
            </div>
            <img className="bg" src={bg} alt="Profile" />
        </section>
    )
}

export default Intro