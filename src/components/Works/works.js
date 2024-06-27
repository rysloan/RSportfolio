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

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>
            My Portfolio
        </h2>
        <span className='worksDesc'>
            1. Ivorfall
            2. Goom
            3. React project
            4. Portfolio project
            5. Maybe Battle Tanks
            6. Maybe Operating Systems project
            I am always striving to learn new things and improve upon my strengths and weaknesses. I love being creative and make sure
            to show this when working on my projects. When I visualize something that I want done, I won't quit until I can see it 
            become reality even if it is something that I have never attempted before. I am excited to bring my skills and experience
            to help businesses achieve their goals.
        </span>
        <div className='worksImgs'>
            <Link to="/Ivorfall">
                <img src={IvorfallImg} alt='' className='worksImg' />
            </Link>
            {/* <img src={Portfolio1} alt='' className='worksImg' /> */}
            <img src={GoomImg} alt='' className='worksImg' />
            <img src={Portfolio3} alt='' className='worksImg' />
            <img src={Portfolio4} alt='' className='worksImg' />
            <img src={Portfolio5} alt='' className='worksImg' />
            <img src={Portfolio6} alt='' className='worksImg' />
        </div>
        <button className='worksBtn'>
            See More
        </button>
    </section>
  );
}

export default Works