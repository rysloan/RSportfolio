import React, { useState } from "react";
import './navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'
import menu from '../../assets/menu.png'
import homeIcon from '../../assets/home-icon.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showPortfolioProjects, setShowPortfolioProjects] = useState(false);
    return(
        <nav className="navbar">
            <Link to="/">
                <img src={homeIcon} alt="logo" className="logo" />
            </Link>
            <div className="desktopMenu">
                <ScrollLink activeClass='active' to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Intro</ScrollLink>
                <ScrollLink activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</ScrollLink>
                <ScrollLink activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" 
                onMouseOver={() => setShowPortfolioProjects(true)} onMouseLeave={() => setShowPortfolioProjects(false)}>Portfolio</ScrollLink>
                {/*<Link activeClass='active' to="clients" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>*/}
            </div>
            <div className="navMenu" style={{display: showPortfolioProjects? 'flex' : 'none'}}>
                <ScrollLink activeClass='active' to="intro" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</ScrollLink>
                <ScrollLink activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</ScrollLink>
                <ScrollLink activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</ScrollLink>
                {/* <Link activeClass='active' to="clients" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Clients</Link> */}
                <ScrollLink activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</ScrollLink>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg"/>
                Contact Me
            </button>

            {/* -------MOBILE MENU------- */}
            <img src={menu} alt="menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
                <ScrollLink activeClass='active' to="intro" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</ScrollLink>
                <ScrollLink activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</ScrollLink>
                <ScrollLink activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</ScrollLink>
                {/* <Link activeClass='active' to="clients" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Clients</Link> */}
                <ScrollLink activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</ScrollLink>
            </div>
        </nav>
    )
}

export default Navbar