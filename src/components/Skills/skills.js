import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'



const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>
                What I Do
            </span>
            <span className='skillDesc'>
                I am a skilled and passionate Software Engineer with experience in FullStack, Mobile, AI, and Games Engineering. 
                What set me apart is my strong ability to think critically and solve complex problems, along with my belief that no problem is unsolvable with enough time and hard work. 
                I have a solid foundation in programming languages such as C#, C++/C, Java, and Python. In addition, I am proficient with Linux, Javascript, and React and the game engines 
                Unreal and Unity.
            </span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt="UIDesign" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Full Stack Development</h2>
                        <p>Proficiency in languages C#, C++/C, Java, Python, Javascript, Linux, and React.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>AI Engineering</h2>
                        <p>Created multiple machine learning and AI project using Python, Javascript, and React</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={AppDesign} alt="AppDesign" className='skillBarImg' />
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