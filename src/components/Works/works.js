import React from 'react'
import './works.css'
import { Link } from 'react-router-dom'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'
import IvorfallImg from '../../assets/Box_Art.png'
import GoomImg from '../../assets/T_GoomMainMenuBG.png'
import PortfolioProjImg from '../../assets/portfolioProjImg.png'
import SwarmGif from '../../assets/swarmGif.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link as ScrollLink } from 'react-scroll'

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>
            My Portfolio
        </h2>
        <span className='worksDesc'>
            {/* 1. Ivorfall
            2. Goom
            3. React project
            4. Portfolio project
            5. Maybe Battle Tanks
            6. Maybe Operating Systems project */}
            I am always striving to learn new things and improve upon my strengths and weaknesses. I love being creative and make sure
            to show this when working on my projects. When I visualize something that I want done, I won't quit until I can see it 
            become reality even if it is something that I have never attempted before. Most importantly I want the things that I build 
            to bring a smile on peoples faces and make the lives of those who use them better. I am excited to bring my skills and experience
            to help businesses achieve their goals. 
        </span>
        <div className='worksImgs'>
            <Link to="/Ivorfall" onClick={window.scrollTo(0, 0)}>
                <div className='imageContainer' onClick={window.scrollTo(0, 0)}>
                    <img src={IvorfallImg} alt='' className='worksImg' />
                    <span className='overlay'>Ivorfall<FontAwesomeIcon icon={faArrowRight} /></span>
                </div>
            </Link>
            <Link to="/Goom">
                <div className='imageContainer'>
                    <img src={GoomImg} alt='' className='worksImg' />
                    <span className='overlay'>Goom<FontAwesomeIcon icon={faArrowRight} /></span>
                </div>
            </Link>
            <Link to="/PortfolioProject">
                <div className='imageContainer'>
                    <img src={PortfolioProjImg} alt='' className='worksImg' />
                    <span className='overlay'>Portfolio<FontAwesomeIcon icon={faArrowRight} /></span>
                </div>
            </Link>
            <Link to="/UserStudyProj">
                <div className='imageContainer'>
                    <img src={SwarmGif} alt='' className='worksImg' />
                    <span className='overlay'>Swarm User Study<FontAwesomeIcon icon={faArrowRight} /></span>
                </div>
            </Link>
        </div>
        <button className='worksBtn'>
            See More
        </button>
    </section>
  );
}

export default Works