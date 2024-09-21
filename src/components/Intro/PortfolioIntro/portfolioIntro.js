import React from 'react'
import './portfolioIntro.css'

const PortfolioIntro = () => {
  return (
    <section id='portfolioIntro'>
        <span className='descTitle'>Description</span>
        <span className='portfolioDesc'>
            This portfolio is a website that is hosted by github and created using ReactJS. With a combination of React elements, Javascript, and CSS I was able to create the website 
            that you are currently using to tell users a little bit about myself and display the projects, achievments, and skills that I have to users and companies that are interested in 
            hiring me. This project, made from scratch, took me about 5-6 months to complete. Prior to this project I had beginner skills in ReactJS and little knowledge with CSS, but 
            after its completion I've developed advanced skills in both and am able to intergrate new features into the website with ease. Everytime I open the project there is something
            new that I want to add such as a way to send me an email straight from the website, automatic scrolling when clicking on something, drop downs when you hover over an item, image 
            overlays when you hover over an image, multiple pages that display different projects, an image gallery for people to view and fullscreen images, and many more.
        </span>
        <span className='skillsLearnedTitle'>
            Learned Skills
        </span>
        <span className='skillsLearnedList'>
            <ol style={{ listStyleType: 'decimal' }}>
                <li>Advanced skill with React and Web Development</li>
                <li>Advanced skill with CSS and Web Design</li>
                <li>Documneting my work development for projects</li>
                <li>Creating a publishing a website to github</li>
                <li>Interating on a website and adding new feature and pages</li>
                <li>Creating and using custom components</li>
                <li>Importing and understanding differnt react elements</li>
                <ol style={{ listStyleType: 'disc' }}>
                    <li>react-external-link</li>
                    <li>react-scroll</li>
                    <li>react-image-gallery</li>
                    <li>emailjs</li>
                    <li>fontawesome images</li>
                    <li>react-router-dom</li>
                </ol>
            </ol>
        </span>
    </section>
  )
}

export default PortfolioIntro