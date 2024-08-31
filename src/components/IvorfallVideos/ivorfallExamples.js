import React from 'react'
import './ivorfallExamples.css'
import ReactPlayer from 'react-player';
import Ivorfall1 from '../../assets/Ivorfall1.mp4'
import Ivorfall2 from '../../assets/Ivorfall2.mp4'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery";
import AICPrototype from "../../assets/AIC_Prototype.png"
import AICFinal from "../../assets/AIC_Final.png"

const IverfallPrototype = require.context('../../assets/IvorfallProto', true)
const IverfallFinal = require.context('../../assets/IvorfallFinal', true)
const prototypeImgs = IverfallPrototype.keys().map(v => IverfallPrototype(v))
const finalImgs = IverfallFinal.keys().map(v => IverfallFinal(v))



const IvorfallIntro = () => {
  const imagesPrototype = prototypeImgs.map(img => {
    return {
      original: img,
      originalHeight: '640px',
      description: img,
    }
  })
  const imagesFinal = finalImgs.map(img => {
    return {
      original: img,
      originalHeight: '640px',
      description: img,
    }
  })
  return (
    <section id='ivorfallExamples'>
      <div className='ivorfallExampleArea'>
        <div className='ivorfallExample'>
          <span className='vidText'>
            This is the state of the AI during the Ivorfall prototype which was created within the first 2 weeks on the project.
            During these two weeks I created two different enemies types, a melee and a ranged, that both inherited from a parant base blueprint class.
            In addition, I created an AI controller that handles their perception so they attack the player when they have sight or when the player damages them and setups all the initial
            behavior tree varaibles.
            The points on the floor are created by an EQS, environment query system, that gives information to the AI on the best points to move to based off the players location.
            Both the melee and ranged AI have their own EQS class. All of the behavior for the AI is decided from a behavior tree that I created. This tree has custom tasks that tell
            them when to attack, when to move, when to chase the player, or when to patrol around a certain area.
          </span>
          <ReactPlayer url={Ivorfall1} playing={true} loop={true} controls={true} height={'360px'} width={'640px'} className='exampleVideo' />
        </div>
        <div className='ivorfallExample'>
          <ReactPlayer url={Ivorfall2} playing={true} loop={true} controls={true} height={'360px'} width={'640px'} className='exampleVideo' />
          <span className='vidText'>
            This is the state of the AI during the Ivorfall final build.
            We have many more types of enemies, from a melee boxer that slams the ground and charges at the player and a guy that fire blobs of oil that damage and slow the player when hit.
            The AI controller stayed mostly the same throughout the games creation with only a few more initial setup variables.
            Some enemy type use the same EQS to make things simplier for the player, but I added 5 unique EQS classes for the enemies.
          </span>
        </div>
      </div>
      <div className='ivorfallCodeSnipets'>
          <span className='codeSnipetTitle'>Ivorfall Code Snipets</span>
          <span className='codeSnipetDesc'>Prototype Code vs Final Build Code</span>
          <span className='codeTitle'>Prototype</span>
          <ImageGallery items={imagesPrototype} useBrowserFullscreen={false} />
          <span className='codeTitle'>Final Build</span>
          <ImageGallery items={imagesFinal} useBrowserFullscreen={false} />
        </div>
    </section>
  )
}

export default IvorfallIntro