import React from "react";
import './intro.css'
import bg from "../../assets/image.png"
import btnImg from "../../assets/hireme.png"
import { Link } from 'react-scroll'

const Intro = () => {
    return(
        <section id="intro" >
            <div className="introContent" >
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Ryan</span> <br />Software Engineer</span>
                <p className="introParagraph">Temp Intro Paragraph</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me</button></Link>
            </div>
            <img className="bg" src={bg} alt="Profile" />
        </section>
    )
}

export default Intro