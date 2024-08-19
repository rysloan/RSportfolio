import React from 'react'
import './ivorfallExamples.css'
import ReactPlayer from 'react-player';
import Ivorfall1 from '../../assets/Ivorfall1.mp4'
import Ivorfall2 from '../../assets/Ivorfall2.mp4'

const IvorfallIntro = () => {
  return (
    <section id='ivorfallExamples'>
      <div className='ivorfallExampleArea'>
        <div className='ivorfallExample'>
            <span className='vidText'>This is the state of the enemies during the Ivorfall prototype</span>
            <ReactPlayer url={Ivorfall1} playing={true} loop={true} controls={true} height={'360px'} width={'640px'} className='exampleVideo'/>
        </div>
        <div className='ivorfallExample'>
            <ReactPlayer url={Ivorfall2} playing={true} loop={true} controls={true} height={'360px'} width={'640px'} className='exampleVideo'/>
            <span className='vidText'>This is the state of the enemies during the Ivorfall final build</span>
        </div>
      </div>
        
    </section>
  )
}

export default IvorfallIntro