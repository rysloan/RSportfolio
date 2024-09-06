import React from 'react'
import './skills.css'
import GameDesign from '../../assets/GameDevIcon.png'
import AiDesign from '../../assets/AIEngineerIcon.png'
import FullStackDesign from '../../assets/FullStackIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'


const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>
                What I Do
            </span>
            <span className='skillDesc'>
                I am a skilled and passionate Software Engineer with experience in FullStack, Mobile, AI, and Games Engineering. 
                What sets me apart from others is my strong ability to think critically and solve complex problems, along with my desire to work hard and help others with the work I do. 
                I have a solid foundation in programming languages such as C#, C++/C, Java, and Python. In addition, I am proficient with Linux, Javascript, and React and the game engines 
                Unreal and Unity.
            </span>
            <div className='skillBars'>
                <div className='skillBar'>
                    {/* <img src={FullStackDesign} alt="UIDesign" className='skillBarImg' /> */}
                    <FontAwesomeIcon icon={faLaptopCode} alt="UIDesign" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Full Stack Development</h2>
                        <p>Proficiency in languages C#, C++/C, Java, Python, Javascript, Linux, and React.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    {/* <img src={AiDesign} alt="WebDesign" className='skillBarImg' /> */}
                    <FontAwesomeIcon icon={faBrain} alt="UIDesign" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>AI Engineering</h2>
                        <p>Created multiple machine learning and AI project using Python, Javascript, and React</p>
                    </div>
                </div>
                <div className='skillBar'>
                    {/* <img src={GameDesign} alt="AppDesign" className='skillBarImg' /> */}
                    <FontAwesomeIcon icon={faGamepad} alt="UIDesign" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Game Development</h2>
                        <p>Have created 4 games, 3 of which were created in Unreal and 1 in Unity</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills