import React from 'react'
import { ExternalLink } from 'react-external-link';
import './ivorfallIntro.css'
import ReactPlayer from 'react-player';
import Ivorfall1 from '../../assets/Ivorfall1.mp4'

const IvorfallIntro = () => {
  return (
    <section id='ivorfallIntro'>
        <ExternalLink href='https://store.steampowered.com/app/2901040/Ivorfall/'>
            <span className='ivorfallLink'>Ivorfall Steam Page Link</span>
        </ExternalLink>
        <span className='ivorfallDesc'>
            Ivorfall is a single-player twin-stick shooter where the player creates weapon combinations and buys special items to help defeat the main enemy The Raven. 
            This game was created using Unreal Engine 5 with a team size of 24.
            When working on Ivorfall I worked as the sole AI Enemy Engineer creating seven different enemies and 2 unique bosses. 
            In addition to this I helped contribute to all of the balancing for our players weapons and enemy statistics as well as contributing to many of the design ideas
            like the players weapons/combinations, enemy attacks, shop items, boss attacks, level design, and environmental hazards.
        </span>
        <ReactPlayer url='https://www.youtube.com/embed/Ho0r55uKdIg' playing={false} controls={true} height={'360px'} width={'640px'} className='youtubeVid' />
        <ReactPlayer url='https://www.youtube.com/watch?v=T3faHrBHFx8' playing={false} controls={true} height={'360px'} width={'640px'} className='youtubeVid' />
        <span className='skillsLearnedTitle'>
            Learned Skills
        </span>
        <span className='skillsLearnedList'>
            <ol style={{ listStyleType: 'decimal' }}>
                <li>Advanced skill with Unreals behavior tree system</li>
                <li>Advanced skill with Unreals environment query system</li>
                <li>Working and communicating in a team of 26</li>
                <li>Understanding the process and pipeline of creating and releasing a full game from scratch</li>
                <li>Designing and creating unique enemies and bosses</li>
            </ol>
        </span>
    </section>
  )
}

export default IvorfallIntro